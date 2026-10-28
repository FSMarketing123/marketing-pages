/* StreetStudio · 3D interactive map engine (MapLibre GL + OpenFreeMap tiles).
   Built from the "Atlanta Map Interactive Project" design (Anna, 2026-10-28): a side panel of numbered places,
   a live map with numbered pins, and a tilted 3D fly-to when a place is picked. "Metro View" flies back.
   MAP3D.boot(d, { mode: 'view' | 'edit', root }) — in edit mode the page reports map clicks and the current view
   to the StreetStudio editor (window.parent) and redraws whenever new data arrives. */
(function () {
  var ML_JS = 'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js', ML_CSS = 'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css';
  var BASE = (function () { var s = document.currentScript && document.currentScript.src; return s ? s.replace(/engine\/map3d\.js.*$/, '') : '../maps/'; })();
  function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
  function load(cb) {
    if (window.maplibregl) return cb();
    if (!document.querySelector('link[data-ml]')) { var l = document.createElement('link'); l.rel = 'stylesheet'; l.href = ML_CSS; l.setAttribute('data-ml', '1'); document.head.appendChild(l); }
    var s = document.createElement('script'); s.src = ML_JS; s.onload = cb; document.head.appendChild(s);
  }
  var CSS = 'html,body{margin:0;height:100%}.m3{display:flex;flex-direction:column;height:100vh;min-height:520px;background:#fff;font-family:Arial,Helvetica,sans-serif;color:#3F4443}'
    + '.m3 a{color:#00939D;text-decoration:none}.m3-h{display:flex;align-items:center;justify-content:space-between;gap:24px;padding:0 32px;height:72px;flex:none;border-bottom:1px solid #d9dcdb;background:#fff;z-index:2}'
    + '.m3-h img{height:34px;display:block}.m3-hr{display:flex;align-items:center;gap:20px}.m3-office{font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#005670}'
    + '.m3-cta{display:inline-flex;align-items:center;height:36px;padding:0 18px;border-radius:8px;background:#C6D83B;color:#404715!important;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}'
    + '.m3-b{display:flex;flex-wrap:wrap;flex:1;min-height:0}.m3-side{flex:0 1 360px;min-width:280px;display:flex;flex-direction:column;border-right:1px solid #d9dcdb;background:#f6f7f7;min-height:0;max-height:100%}'
    + '.m3-intro{padding:28px 28px 20px;display:flex;flex-direction:column;gap:10px;border-bottom:1px solid #d9dcdb;background:#fff}.m3-intro h1{margin:0;font-size:26px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#005670}'
    + '.m3-intro p{margin:0;font-size:14px;line-height:1.5}.m3-intro i{height:3px;width:48px;background:#C6D83B;border-radius:2px;display:block}'
    + '.m3-list{overflow-y:auto;flex:1;padding:12px;display:flex;flex-direction:column;gap:8px}'
    + '.m3-item{display:flex;align-items:flex-start;gap:14px;text-align:left;padding:14px 16px;border-radius:12px;cursor:pointer;font-family:Arial,sans-serif;background:#fff;border:1px solid #d9dcdb;box-shadow:0 1px 3px rgba(0,51,73,.06);transition:all .2s cubic-bezier(.22,1,.36,1)}'
    + '.m3-item:hover{box-shadow:0 6px 18px rgba(0,51,73,.12);transform:translateY(-1px)}.m3-item.on{border:2px solid #C6D83B}'
    + '.m3-n{flex:none;width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;background:#005670;color:#fff}.m3-item.on .m3-n{background:#C6D83B;color:#404715}'
    + '.m3-t{display:flex;flex-direction:column;gap:3px;min-width:0}.m3-t b{font-size:14px;letter-spacing:.08em;text-transform:uppercase;color:#003349}.m3-t span{font-size:13px;line-height:1.4}'
    + '.m3-map{flex:1 1 480px;position:relative;min-height:420px}.m3-map .m3-canvas{position:absolute!important;top:0;right:0;bottom:0;left:0}'
    + '.m3-home{position:absolute;top:16px;left:16px;z-index:1;border:1px solid #d9dcdb;background:#fff;border-radius:8px;padding:10px 14px;font:700 12px Arial,sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#005670;cursor:pointer;box-shadow:0 4px 12px rgba(0,51,73,.12)}'
    + '.m3-home:hover{background:#005670;color:#fff}.m3-pin{width:30px;height:30px;border-radius:8px;display:flex;align-items:center;justify-content:center;font:700 13px Arial,sans-serif;cursor:pointer;border:2px solid #fff;box-shadow:0 4px 12px rgba(0,51,73,.3);transition:background .2s,color .2s;background:#005670;color:#fff}'
    + '.m3-pin.on{background:#C6D83B;color:#404715;z-index:2}.maplibregl-popup-content{border-radius:12px;padding:14px 16px;box-shadow:0 8px 24px rgba(0,51,73,.18);font-family:Arial,sans-serif}'
    + '.m3-pop b{display:block;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#005670;font-size:13px}.m3-pop span{display:block;font-size:12px;color:#3F4443;margin-top:4px;max-width:200px}'
    + '.m3.edit .m3-canvas{cursor:crosshair}@media(max-width:720px){.m3-h{padding:0 16px;height:60px}.m3-h img{height:26px}.m3-office{display:none}.m3-side{flex-basis:100%;max-height:40vh}}';

  function boot(d, opts) {
    opts = opts || {};
    var root = opts.root || document.body, edit = opts.mode === 'edit';
    if (!document.getElementById('m3-css')) { var st = document.createElement('style'); st.id = 'm3-css'; st.textContent = CSS; document.head.appendChild(st); }
    var state = { d: d, active: null, map: null, markers: [], style: null };
    function view() { var h = state.d.home || {}; return { center: h.center || [-84.39, 33.83], zoom: h.zoom != null ? h.zoom : 9.8, pitch: h.pitch || 0, bearing: h.bearing || 0 }; }
    function render() {
      var x = state.d, items = x.places || [];
      root.innerHTML = '<div class="m3' + (edit ? ' edit' : '') + '"><header class="m3-h"><img src="' + esc(x.logo || (BASE + '../assets/fs-logo-color.png')) + '" alt="Franklin Street">'
        + '<div class="m3-hr">' + (x.office ? '<span class="m3-office">' + esc(x.office) + '</span>' : '') + (x.cta && x.cta.label ? '<a class="m3-cta" href="' + esc(x.cta.url || '#') + '" target="_blank" rel="noopener">' + esc(x.cta.label) + '</a>' : '') + '</div></header>'
        + '<div class="m3-b">' + (x.showPanel === false ? '' : '<aside class="m3-side"><div class="m3-intro"><h1>' + esc(x.title) + '</h1>' + (x.intro ? '<p>' + esc(x.intro) + '</p>' : '') + '<i></i></div><div class="m3-list">'
          + items.map(function (s, i) { return '<button class="m3-item" data-i="' + i + '"><span class="m3-n">' + (i + 1) + '</span><span class="m3-t"><b>' + esc(s.name) + '</b><span>' + esc(s.desc) + '</span></span></button>'; }).join('') + '</div></aside>')
        + '<div class="m3-map"><div class="m3-canvas"></div><button class="m3-home">' + esc(x.homeLabel || 'Metro View') + '</button></div></div></div>';
      root.querySelectorAll('.m3-item').forEach(function (b) { b.onclick = function () { select(+b.getAttribute('data-i')); }; });
      root.querySelector('.m3-home').onclick = home;
      initMap();
    }
    function initMap() {
      var x = state.d, el = root.querySelector('.m3-canvas');
      if (state.map) { try { state.map.remove(); } catch (e) {} }
      state.markers = [];
      var m = state.map = new maplibregl.Map({ container: el, style: 'https://tiles.openfreemap.org/styles/' + (x.mapStyle || 'liberty'), center: view().center, zoom: view().zoom, pitch: view().pitch, bearing: view().bearing, attributionControl: { compact: true }, preserveDrawingBuffer: true });
      m.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), 'top-right');
      m.addControl(new maplibregl.ScaleControl({ unit: 'imperial' }), 'bottom-left');
      (x.places || []).forEach(function (s, i) {
        if (!s.c || s.c.length !== 2) return;
        var p = document.createElement('div'); p.className = 'm3-pin'; p.textContent = i + 1;
        p.addEventListener('click', function (e) { e.stopPropagation(); select(i); });
        var pop = new maplibregl.Popup({ offset: 20, closeButton: false }).setHTML('<div class="m3-pop"><b>' + esc(s.name) + '</b><span>' + esc(s.desc) + '</span></div>');
        state.markers[i] = new maplibregl.Marker({ element: p, draggable: edit }).setLngLat(s.c).setPopup(pop).addTo(m);
        if (edit) state.markers[i].on('dragend', function () { var ll = state.markers[i].getLngLat(); tell({ type: 'map3d-move', i: i, c: [+ll.lng.toFixed(5), +ll.lat.toFixed(5)] }); });
      });
      if (edit) {
        m.on('click', function (e) { tell({ type: 'map3d-click', c: [+e.lngLat.lng.toFixed(5), +e.lngLat.lat.toFixed(5)] }); });
        m.on('moveend', function () { var c = m.getCenter(); tell({ type: 'map3d-view', view: { center: [+c.lng.toFixed(5), +c.lat.toFixed(5)], zoom: +m.getZoom().toFixed(2), pitch: Math.round(m.getPitch()), bearing: Math.round(m.getBearing()) } }); });
      }
      paint();
    }
    function paint() {
      state.markers.forEach(function (mk, i) { if (mk) mk.getElement().classList.toggle('on', i === state.active); });
      root.querySelectorAll('.m3-item').forEach(function (b, i) { b.classList.toggle('on', i === state.active); });
    }
    function select(i) {
      state.active = i; paint();
      var s = (state.d.places || [])[i]; if (!s || !s.c || !state.map) return;
      var tilt = state.d.tilt3d !== false;
      state.map.flyTo({ center: s.c, zoom: state.d.placeZoom || 14.2, pitch: tilt ? 55 : 0, bearing: tilt ? -20 : 0, duration: 1800, essential: true });
      state.markers.forEach(function (mk, j) { if (!mk) return; var p = mk.getPopup(); if (j === i) { if (!p.isOpen()) mk.togglePopup(); } else if (p.isOpen()) mk.togglePopup(); });
    }
    function home() {
      state.active = null; paint();
      state.markers.forEach(function (mk) { if (mk && mk.getPopup().isOpen()) mk.togglePopup(); });
      if (state.map) state.map.flyTo(Object.assign({}, view(), { duration: 1400 }));
    }
    function tell(msg) { try { parent.postMessage(msg, '*'); } catch (e) {} }
    load(render);
    return {
      update: function (nd) { state.d = nd; state.active = null; render(); },
      select: select, home: home,
      snapshot: function () { try { return state.map.getCanvas().toDataURL('image/png'); } catch (e) { return null; } },
    };
  }
  window.MAP3D = { boot: boot };
})();
