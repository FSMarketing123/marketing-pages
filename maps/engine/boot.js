/* StreetStudio map engine loader: builds a map page from a template and a config, in the chosen brand. */
(function () {
  var ENGINE = (function () { var s = document.currentScript && document.currentScript.src; return s ? s.replace(/[^/]*$/, '') : 'engine/'; })();
  var FS = { dark: '#003349', primary: '#005670', accent: '#00939D', highlight: '#C6D83B', highlightInk: '#404715', light: '#7BA7BC', text: '#3F4443' };
  // The colors each template was drawn in; every one is swapped for the map's brand.
  var SRC = {
    area: { dark: ['#003349'], primary: ['#005670'], accent: ['#00939D'], highlight: ['#C6D83B'], highlightInk: ['#404715', '#5a6a10'], light: ['#7BA7BC'], text: ['#3F4443'] },
    aerial: { dark: ['#003349'], primary: ['#005670'], accent: ['#00939D'], highlight: ['#C6D83B'], highlightInk: ['#404715'], light: ['#7BA7BC'], text: ['#3F4443'] },
    competition: { dark: ['#000'], accent: ['#FC8201'], highlight: ['#FDB61B'] },
  };
  function rgb(h) { h = h.replace('#', ''); if (h.length === 3) h = h.split('').map(function (c) { return c + c; }).join(''); return [0, 2, 4].map(function (i) { return parseInt(h.substr(i, 2), 16); }).join(','); }
  function okHex(h) { return /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(String(h || '').trim()); }
  function theme(brand) {
    var t = {}; Object.keys(FS).forEach(function (k) { t[k] = FS[k]; });
    if (brand && brand.kind === 'client') Object.keys(FS).forEach(function (k) { if (okHex(brand[k])) t[k] = brand[k].trim(); });
    return t;
  }
  function recolor(text, tpl, th) {
    var src = SRC[tpl] || {}, map = {}, keys = [];
    Object.keys(src).forEach(function (k) { src[k].forEach(function (h) { var key = h.toLowerCase(); map[key] = th[k]; keys.push(h.replace('#', '')); map['rgb:' + rgb(h)] = rgb(th[k]); }); });
    if (!keys.length) return text;
    var hexRe = new RegExp('#(' + keys.join('|') + ')(?![0-9a-fA-F])', 'gi');
    text = text.replace(hexRe, function (m) { return map[m.toLowerCase()] || m; });
    var rgbs = Object.keys(src).reduce(function (a, k) { return a.concat(src[k]); }, []).map(rgb);
    var rgbRe = new RegExp('rgba\\((' + rgbs.map(function (r) { return r.replace(/,/g, ',\\s*'); }).join('|') + ')(?=\\s*,)', 'g');
    return text.replace(rgbRe, function (m, inner) { return 'rgba(' + (map['rgb:' + inner.replace(/\s/g, '')] || inner); });
  }
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }
  function unesc(s) { var t = document.createElement('textarea'); t.innerHTML = s; return t.value; }
  function build(cfg, opts) {
    opts = opts || {};
    var tpl = cfg.template || 'area';
    return fetch(ENGINE + 'templates/' + tpl + '.html').then(function (r) { if (!r.ok) throw new Error('template ' + tpl); return r.text(); }).then(function (text) {
      var th = theme(cfg.brand);
      text = recolor(text, tpl, th);
      var header = (cfg.brand && cfg.brand.kind === 'client' && (cfg.brand.logoWhite || cfg.brand.logo)) || 'img/fs-logo-white.png';
      text = text.split('%%LOGO_HEADER%%').join(esc(header));
      // Per-map defaults for the template's settings.
      text = text.replace(/data-fm-props="1" data-props="([^"]*)"/, function (m, raw) {
        var p = JSON.parse(unesc(raw)), v = cfg.props || {};
        Object.keys(v).forEach(function (k) { if (v[k] !== undefined && v[k] !== null && v[k] !== '') { p[k] = p[k] || {}; p[k].default = v[k]; } });
        return 'data-fm-props="1" data-props="' + esc(JSON.stringify(p)) + '"';
      });
      var conf = {}; Object.keys(cfg).forEach(function (k) { conf[k] = cfg[k]; });
      conf.mode = opts.mode || cfg.mode || 'view';
      if (opts.assets) conf.assets = opts.assets;
      if (opts.uploads) conf.uploads = opts.uploads;
      var font = cfg.brand && cfg.brand.kind === 'client' && cfg.brand.font;
      var head = '<base href="' + ENGINE + '">'
        + '<script>window.FRAME_MAP = ' + JSON.stringify(conf).replace(/</g, '\\u003c') + ';<\/script><script src="fm.js"><\/script>'
        + (font ? '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=' + encodeURIComponent(font).replace(/%20/g, '+') + ':wght@400;700&display=swap"><style>#stage,#stage *,#drawer,#drawer *{font-family:"' + font.replace(/"/g, '') + '",Arial,sans-serif!important}</style>' : '')
        + (cfg.title ? '<title>' + esc(cfg.title) + '</title>' : '');
      return text.replace('<!--FM-HEAD-->', head);
    });
  }
  function boot(cfg, opts) {
    return build(cfg, opts).then(function (html) { document.open(); document.write(html); document.close(); });
  }
  window.FRAMEMAP = { ENGINE: ENGINE, FS: FS, theme: theme, build: build, boot: boot };
})();
