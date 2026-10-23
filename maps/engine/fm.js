/* FRAME map engine: runs inside a map page. Config arrives as window.FRAME_MAP. */
(function () {
  var FM = window.FRAME_MAP = window.FRAME_MAP || {};
  var LIB = ["alloy", "anthropologie", "apple", "barre-fusion", "barre3", "best-buy", "body-fit-training", "body20", "bodyrok", "busch-gardens", "club-pilates", "club-studio", "corepower-yoga", "crunch-fitness", "cyclebar", "f45", "highland-yoga", "ikea", "jetset-pilates", "la-fitness", "lululemon", "nike", "orangetheory", "pilates-addiction", "planet-fitness", "power-lady-fitness", "prime-iv", "publix", "pure-barre", "rithm", "sculpted-body", "sephora", "solidcore", "sprouts", "sprouts-farmers-market", "stretch-zone", "stretchlab", "sweat440", "sweathouz", "target", "target-red", "the-daily-pilates", "total-wine", "ulta", "usf-health", "vital-stretch", "walgreens", "walmart", "whole-foods", "winn-dixie", "yonder-yoga"];
  var host = window.parent !== window ? window.parent : null;
  function slug(s) { return String(s || '').toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''); }
  function libMatch(name) {
    var s = '-' + slug(name) + '-', best = '';
    LIB.forEach(function (l) { if (s.indexOf('-' + l + '-') >= 0 && l.length > best.length) best = l; });
    return best ? 'logos/' + best + '.png' : '';
  }
  window.FMStore = {
    get: function () { return FM.state ? JSON.parse(JSON.stringify(FM.state)) : null; },
    set: function (k, d) { FM.state = d; if (host && FM.mode !== 'view') { try { host.postMessage({ type: 'frame-map-state', state: d }, '*'); } catch (e) {} } }
  };
  window.FMAsset = function (ref) {
    if (!ref) return ref;
    var a = FM.assets || {};
    if (a[ref]) return a[ref];
    var m = /^\/_blob\/([0-9a-f]{32})/.exec(ref);
    if (m) return (FM.uploads || '../assets/uploads/') + m[1] + '.jpg';
    return ref;
  };
  function logoFor(name) {
    var L = FM.logos || {};
    if (L[name] === false) return false;
    if (L[name]) return FMAsset(L[name]);
    return libMatch(name) || false;
  }
  // Aerial template: LOGOS[poi name] -> { src } | false | undefined
  window.FMLogoMap = function () {
    return new Proxy({}, { get: function (t, name) { if (typeof name !== 'string') return undefined; var l = logoFor(name); return l === false ? false : l ? { src: l } : undefined; } });
  };
  // Area template: [[regex, src]] rules ahead of the built-in brand list
  window.FMLogoRules = function () {
    var L = FM.logos || {}, out = [];
    Object.keys(L).forEach(function (n) { if (L[n]) out.push([new RegExp('^' + n.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$', 'i'), FMAsset(L[n])]); });
    LIB.forEach(function (l) { out.push([new RegExp('\\b' + l.replace(/-/g, '[\\s-]?') + '\\b', 'i'), 'logos/' + l + '.png']); });
    return out;
  };
  // Competition template: logo by brand slug
  window.FMLogoSlug = function (sl) {
    var L = FM.logos || {};
    if (sl === 'client-logo') return FMAsset((FM.client && FM.client.logo) || '') || '';
    if (L[sl]) return FMAsset(L[sl]);
    return LIB.indexOf(sl) >= 0 ? 'logos/' + sl + '.png' : (libMatch(sl) || 'logos/' + sl + '.png');
  };
  window.FMConfirm = function (msg) { try { return window.confirm(msg); } catch (e) { return true; } };
  if (FM.mode === 'view' || FM.mode === 'export') {
    var st = document.createElement('style');
    st.textContent = '.edit-only,#drawer,#drawerToggle{display:none!important}' + (FM.mode === 'export' ? '#viewTabs{display:none!important}' : '');
    (document.head || document.documentElement).appendChild(st);
  }
})();
