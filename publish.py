#!/usr/bin/env python3
"""Writes queued hub pages into this repo and rebuilds manifest.json and index.html.

Usage: python3 -I publish.py <queue_dir> <uploads_dir>
  queue_dir    folder of publishQueue documents saved as JSON (ArtifactData out_dir)
  uploads_dir  folder holding downloaded photo assets named <assetId>.<ext>

Prints one JSON line per published page: {"projectId", "url", "file"}.
"""
import html
import json
import os
import shutil
import sys
from datetime import datetime, timezone

REPO = os.path.dirname(os.path.abspath(__file__))
BASE_URL = "https://fsmarketing123.github.io/marketing-pages"
FOLDERS = {
    "report-landing-pages": "Market Reports Site",
    "pitch-decks": "Pitch Decks",
    "team-decks": "Capabilities Decks (older web versions)",
    "team-deck-sites": "Team Deck Sites",
    "business-line-decks": "Business Line Decks",
    "emails": "Email Templates",
    "websites": "FS Websites",
    "maps": "Maps",
}


def load_queue(qdir):
    docs = []
    for root, _, files in os.walk(qdir):
        for f in files:
            if f.endswith(".json"):
                with open(os.path.join(root, f), encoding="utf-8") as fh:
                    d = json.load(fh)
                d = d.get("data", d)
                if d.get("state") == "queued" and (d.get("html") or (d.get("relink") and d.get("fromFile"))) and d.get("folder") in FOLDERS:
                    docs.append(d)
    return docs


def main():
    qdir, updir = sys.argv[1], sys.argv[2]
    manifest_path = os.path.join(REPO, "manifest.json")
    with open(manifest_path, encoding="utf-8") as fh:
        manifest = json.load(fh)
    by_id = {m["projectId"]: m for m in manifest}

    for d in load_queue(qdir):
        pid, folder, filename = d["projectId"], d["folder"], os.path.basename(d["filename"])
        old = by_id.get(pid)
        # Never break a link brokers already have: an old address becomes a redirect to the new one (below).
        os.makedirs(os.path.join(REPO, folder), exist_ok=True)
        new_path = os.path.join(REPO, folder, filename)
        if d.get("html"):
            with open(new_path, "w", encoding="utf-8") as fh:
                fh.write(d["html"])
        else:
            # An admin changed the link: move the live page as it is. The old address gets a forwarding page below.
            src_rel = (old or {}).get("file") or d["fromFile"]
            src_path = os.path.join(REPO, src_rel)
            if not os.path.exists(src_path) or src_rel == folder + "/" + filename:
                print(json.dumps({"projectId": pid, "error": "cannot move " + src_rel}), file=sys.stderr)
                continue
            shutil.copyfile(src_path, new_path)
            old = {"file": src_rel}
        here = folder + "/" + filename
        redirects = set(((by_id.get(pid) or {}).get("redirects") or []))
        if old and old["file"] != here:
            redirects.add(old["file"])
        redirects.discard(here)
        new_url = BASE_URL + "/" + here
        for r in redirects:  # every earlier address forwards straight to the current one
            old_path = os.path.join(REPO, r)
            os.makedirs(os.path.dirname(old_path), exist_ok=True)
            with open(old_path, "w", encoding="utf-8") as fh:
                fh.write('<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=' + new_url + '">'
                         '<link rel="canonical" href="' + new_url + '"><title>Moved</title>'
                         '<p>This page has moved to <a href="' + new_url + '">' + new_url + '</a>.</p>')
        for blob in d.get("blobs", []):
            src = next((os.path.join(updir, f) for f in os.listdir(updir) if f.startswith(blob)), None) if os.path.isdir(updir) else None
            if src:
                shutil.copyfile(src, os.path.join(REPO, "assets", "uploads", blob + ".jpg"))
            else:
                print(json.dumps({"warning": "missing photo " + blob, "projectId": pid}), file=sys.stderr)
        by_id[pid] = {
            "projectId": pid, "name": d.get("name", filename), "folder": folder, "file": folder + "/" + filename,
            "tags": d.get("tags", []), "version": d.get("version", 1), "protected": bool(d.get("protected")),
            "redirects": sorted(redirects),
            "publishedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        }
        print(json.dumps({"projectId": pid, "url": BASE_URL + "/" + folder + "/" + filename, "file": folder + "/" + filename}))

    manifest = sorted(by_id.values(), key=lambda m: m["publishedAt"], reverse=True)
    with open(manifest_path, "w", encoding="utf-8") as fh:
        json.dump(manifest, fh, indent=2)
    write_index(manifest)


def write_index(manifest):
    sections = []
    for folder, label in FOLDERS.items():
        items = [m for m in manifest if m["folder"] == folder]
        if not items:
            continue
        rows = "".join(
            '<li><a href="{f}">{n}</a><span>{t} · v{v} · {d}{p}</span></li>'.format(
                f=html.escape(m["file"]), n=html.escape(m["name"]), t=html.escape(", ".join(m["tags"]) or "Franklin Street"), p=" · password protected" if m.get("protected") else "",
                v=m["version"], d=m["publishedAt"][:10])
            for m in items)
        sections.append("<section><h2>{}</h2><ul>{}</ul></section>".format(label, rows))
    body = "".join(sections) or "<p>No pages are live yet.</p>"
    page = """<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Franklin Street Marketing Pages</title><meta name="robots" content="noindex">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap">
<style>
body{margin:0;font-family:Arial,Helvetica,sans-serif;color:#3F4443;background:#f2f4f4}
header{background:#003349;color:#fff;padding:28px clamp(16px,5vw,56px);display:flex;align-items:center;gap:20px}
header img{height:30px}h1{font-family:'Libre Baskerville',Georgia,serif;font-weight:400;font-size:clamp(24px,3vw,34px);margin:0}
main{max-width:1100px;margin:0 auto;padding:32px clamp(16px,5vw,56px) 80px}
h2{font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#005670;border-bottom:2px solid #005670;padding-bottom:8px;margin:32px 0 8px}
ul{list-style:none;margin:0;padding:0}li{display:flex;flex-wrap:wrap;justify-content:space-between;gap:6px 16px;padding:14px 0;border-bottom:1px solid #d9dcdb}
a{color:#003349;font-weight:700;text-decoration:none}a:hover{color:#00939D}li span{font-size:13px;color:#868c8b}
</style></head><body>
<header><img src="assets/fs-logo-white.png" alt="Franklin Street"><h1>Marketing Pages</h1></header>
<main>""" + body + "</main></body></html>\n"
    with open(os.path.join(REPO, "index.html"), "w", encoding="utf-8") as fh:
        fh.write(page)


if __name__ == "__main__":
    main()
