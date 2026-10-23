/* @ds-bundle: {"format":4,"namespace":"FranklinStreetDesignSystem_a848ee","components":[{"name":"Badge","sourcePath":"ui_kits/website/Badge.jsx"},{"name":"Button","sourcePath":"ui_kits/website/Button.jsx"},{"name":"Header","sourcePath":"ui_kits/website/Header.jsx"},{"name":"Footer","sourcePath":"ui_kits/website/Header.jsx"},{"name":"PropertyCard","sourcePath":"ui_kits/website/cards.jsx"},{"name":"ServiceCard","sourcePath":"ui_kits/website/cards.jsx"},{"name":"ExpertCard","sourcePath":"ui_kits/website/cards.jsx"},{"name":"InsightCard","sourcePath":"ui_kits/website/cards.jsx"},{"name":"SearchBar","sourcePath":"ui_kits/website/home.jsx"},{"name":"Home","sourcePath":"ui_kits/website/home.jsx"},{"name":"PageHero","sourcePath":"ui_kits/website/screens.jsx"},{"name":"Services","sourcePath":"ui_kits/website/screens.jsx"},{"name":"Properties","sourcePath":"ui_kits/website/screens.jsx"},{"name":"PropertyDetail","sourcePath":"ui_kits/website/screens.jsx"},{"name":"Experts","sourcePath":"ui_kits/website/screens.jsx"},{"name":"Insights","sourcePath":"ui_kits/website/screens.jsx"},{"name":"FS_SERVICES","sourcePath":"ui_kits/website/shared.jsx"},{"name":"FS_ASSET_TYPES","sourcePath":"ui_kits/website/shared.jsx"},{"name":"FS_PROPERTIES","sourcePath":"ui_kits/website/shared.jsx"},{"name":"FS_EXPERTS","sourcePath":"ui_kits/website/shared.jsx"},{"name":"FS_INSIGHTS","sourcePath":"ui_kits/website/shared.jsx"},{"name":"FS_STATS","sourcePath":"ui_kits/website/shared.jsx"},{"name":"SectionHead","sourcePath":"ui_kits/website/shared.jsx"}],"sourceHashes":{"ui_kits/website/Badge.jsx":"b19e4a1e593b","ui_kits/website/Button.jsx":"735a2dbb2bb3","ui_kits/website/Header.jsx":"0fe5c7e9eeb5","ui_kits/website/cards.jsx":"380a4b3173b7","ui_kits/website/home.jsx":"c620cfa50e64","ui_kits/website/screens.jsx":"e679e1c454fa","ui_kits/website/shared.jsx":"73a83548a85a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FranklinStreetDesignSystem_a848ee = window.FranklinStreetDesignSystem_a848ee || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/Badge.jsx
try { (() => {
/* Franklin Street — Badge / pill label */
function Badge({
  children,
  tone = 'green'
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: `fsk-badge fsk-badge--${tone}`
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Badge.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Button.jsx
try { (() => {
/* Franklin Street — Button atom */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = ''
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: `fsk-btn fsk-btn--${variant} fsk-btn--${size} ${className}`,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Button.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
/* Franklin Street — Header & Footer (site chrome) */

function Header({
  route,
  go
}) {
  const nav = [['home', 'Home'], ['services', 'Services'], ['properties', 'Properties'], ['experts', 'Find an Expert'], ['insights', 'Information Exchange']];
  return /*#__PURE__*/React.createElement("header", {
    className: "fsk-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap fsk-header__bar"
  }, /*#__PURE__*/React.createElement("img", {
    className: "fsk-header__logo",
    src: "../../assets/logos/fs-logo-color.png",
    alt: "Franklin Street",
    onClick: () => go && go('home')
  }), /*#__PURE__*/React.createElement("nav", {
    className: "fsk-nav"
  }, nav.map(([k, label]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    className: route === k ? 'active' : '',
    onClick: () => go && go(k)
  }, label))), /*#__PURE__*/React.createElement("div", {
    className: "fsk-header__cta"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "accent",
    size: "sm"
  }, "Contact"))));
}
function Footer({
  go
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "fsk-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-footer__top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    className: "fsk-footer__logo",
    src: "../../assets/logos/fs-logo-white.png",
    alt: "Franklin Street"
  }), /*#__PURE__*/React.createElement("p", {
    className: "fsk-footer__blurb"
  }, "Tailored commercial real estate services nationwide \u2014 large firm capabilities with a small firm feel.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Services"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go && go('services')
  }, "Capital Markets")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go && go('services')
  }, "Leasing")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go && go('services')
  }, "Insurance Services")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go && go('services')
  }, "Management")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Properties"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go && go('properties')
  }, "For Sale")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go && go('properties')
  }, "For Lease")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go && go('experts')
  }, "Find an Expert")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go && go('insights')
  }, "Research")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Company"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "About")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Culture & Careers")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    onClick: () => go && go('insights')
  }, "News")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", null, "Contact"))))), /*#__PURE__*/React.createElement("div", {
    className: "fsk-footer__bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Franklin Street. All rights reserved. \xB7 Tampa, FL"), /*#__PURE__*/React.createElement("div", {
    className: "fsk-footer__social"
  }, /*#__PURE__*/React.createElement("a", {
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/icons/social/linkedin.png",
    alt: ""
  })), /*#__PURE__*/React.createElement("a", {
    "aria-label": "Instagram"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/icons/social/instagram.png",
    alt: ""
  })), /*#__PURE__*/React.createElement("a", {
    "aria-label": "X"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/icons/social/x-twitter.png",
    alt: ""
  }))))));
}
Object.assign(__ds_scope, { Header, Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/cards.jsx
try { (() => {
/* Franklin Street — reusable listing / directory cards.
   Lowercase filename: these export multiple exposed components
   (PropertyCard, ServiceCard, ExpertCard, InsightCard). */

function PropertyCard({
  p,
  onOpen
}) {
  const tone = p.deal === 'For Sale' ? 'green' : 'blue';
  return /*#__PURE__*/React.createElement("article", {
    className: "fsk-prop",
    onClick: () => onOpen && onOpen(p)
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-prop__img",
    style: {
      background: p.grad
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: tone
  }, p.deal))), /*#__PURE__*/React.createElement("div", {
    className: "fsk-prop__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-prop__type"
  }, p.type), /*#__PURE__*/React.createElement("h3", {
    className: "fsk-prop__name"
  }, p.name), /*#__PURE__*/React.createElement("div", {
    className: "fsk-prop__addr"
  }, p.city, " ", p.zip), /*#__PURE__*/React.createElement("div", {
    className: "fsk-prop__meta"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, p.price), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, p.deal === 'For Sale' ? 'Price' : 'Rate')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, p.size), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Size")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, p.cap), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Terms")))));
}
function ServiceCard({
  s,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "fsk-svc",
    onClick: onOpen
  }, /*#__PURE__*/React.createElement("h3", null, s.name), /*#__PURE__*/React.createElement("p", null, s.desc), /*#__PURE__*/React.createElement("span", {
    className: "fsk-svc__link"
  }, "Learn More"));
}
function ExpertCard({
  e
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "fsk-expert"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-expert__av",
    style: {
      background: e.tint
    }
  }, e.initials), /*#__PURE__*/React.createElement("div", {
    className: "fsk-expert__name"
  }, e.name), /*#__PURE__*/React.createElement("div", {
    className: "fsk-expert__title"
  }, e.title), /*#__PURE__*/React.createElement("div", {
    className: "fsk-expert__tags"
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "teal"
  }, e.service), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "gray"
  }, e.market)), /*#__PURE__*/React.createElement("div", {
    className: "fsk-expert__contact"
  }, /*#__PURE__*/React.createElement("a", {
    "aria-label": "LinkedIn",
    className: "fsk-in"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../assets/icons/social/linkedin.png",
    alt: ""
  }))));
}
function InsightCard({
  a
}) {
  const tones = {
    Research: 'green',
    Press: 'blue',
    Insight: 'teal'
  };
  return /*#__PURE__*/React.createElement("article", {
    className: "fsk-insight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-insight__img",
    style: {
      background: a.grad
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: tones[a.tag] || 'gray'
  }, a.tag))), /*#__PURE__*/React.createElement("div", {
    className: "fsk-insight__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "fsk-insight__title"
  }, a.title), /*#__PURE__*/React.createElement("div", {
    className: "fsk-insight__meta"
  }, /*#__PURE__*/React.createElement("span", null, a.date), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, a.read, " read"))));
}
Object.assign(__ds_scope, { PropertyCard, ServiceCard, ExpertCard, InsightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/cards.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shared.jsx
try { (() => {
/* Franklin Street UI Kit — shared mock data + small helpers.
   Lowercase filename → not exposed as a DS component; this module
   carries the demo data and a couple of layout helpers that the
   exposed components and app screens import. */

// ---------- DATA ----------
const FS_SERVICES = [{
  icon: 'trending-up',
  name: 'Capital Markets',
  desc: 'Investment sales, debt & equity placement, and capital advisory for every asset class.'
}, {
  icon: 'handshake',
  name: 'Leasing',
  desc: 'Tenant and landlord representation that turns space into strategy.'
}, {
  icon: 'shield-check',
  name: 'Insurance Services',
  desc: 'Specialized commercial coverage built for real estate risk.'
}, {
  icon: 'clipboard-list',
  name: 'Management',
  desc: 'Property and project management that protects and grows asset value.'
}];
const FS_ASSET_TYPES = ['Office', 'Retail', 'Multifamily', 'Industrial', 'Mixed-Use', 'Healthcare', 'Self-Storage', 'Land'];
const FS_PROPERTIES = [{
  id: 1,
  name: 'Westshore Office Tower',
  city: 'Tampa, FL',
  zip: '33607',
  deal: 'For Sale',
  price: '$24.5M',
  size: '112,000 SF',
  type: 'Office',
  grad: 'linear-gradient(135deg,#005670,#00939D)',
  icon: 'building-2',
  cap: '6.8% Cap',
  year: 2008,
  sf: '112,000'
}, {
  id: 2,
  name: 'Gateway Logistics Park',
  city: 'Orlando, FL',
  zip: '32824',
  deal: 'For Lease',
  price: '$12.50 SF/Yr',
  size: '48,500 SF',
  type: 'Industrial',
  grad: 'linear-gradient(135deg,#3F4443,#005670)',
  icon: 'warehouse',
  cap: 'NNN',
  year: 2019,
  sf: '48,500'
}, {
  id: 3,
  name: 'Bayshore Apartments',
  city: 'Miami, FL',
  zip: '33131',
  deal: 'For Sale',
  price: '$58.2M',
  size: '240 Units',
  type: 'Multifamily',
  grad: 'linear-gradient(135deg,#003349,#00939D)',
  icon: 'building',
  cap: '5.2% Cap',
  year: 2015,
  sf: '286,000'
}, {
  id: 4,
  name: 'Peachtree Retail Center',
  city: 'Atlanta, GA',
  zip: '30308',
  deal: 'For Sale',
  price: '$31.0M',
  size: '86,000 SF',
  type: 'Retail',
  grad: 'linear-gradient(135deg,#005670,#7BA7BC)',
  icon: 'store',
  cap: '7.1% Cap',
  year: 2011,
  sf: '86,000'
}, {
  id: 5,
  name: 'Riverside Medical Plaza',
  city: 'Jacksonville, FL',
  zip: '32202',
  deal: 'For Lease',
  price: '$28.00 SF/Yr',
  size: '34,200 SF',
  type: 'Healthcare',
  grad: 'linear-gradient(135deg,#00939D,#7BA7BC)',
  icon: 'hospital',
  cap: 'NNN',
  year: 2017,
  sf: '34,200'
}, {
  id: 6,
  name: 'Brickell Mixed-Use',
  city: 'Ft. Lauderdale, FL',
  zip: '33301',
  deal: 'For Sale',
  price: '$74.9M',
  size: '198,000 SF',
  type: 'Mixed-Use',
  grad: 'linear-gradient(135deg,#003349,#005670)',
  icon: 'layout-grid',
  cap: '5.9% Cap',
  year: 2021,
  sf: '198,000'
}];
const FS_EXPERTS = [{
  name: 'Carrie Smith',
  title: 'SVP, Retail',
  market: 'Tampa, FL',
  service: 'Leasing',
  initials: 'CS',
  tint: '#005670'
}, {
  name: 'Jonathan Hawks',
  title: 'Managing Director',
  market: 'Nashville, TN',
  service: 'Capital Markets',
  initials: 'JH',
  tint: '#00939D'
}, {
  name: 'Frank DeSalvo',
  title: 'Director, Self-Storage',
  market: 'Tampa, FL',
  service: 'Investment Sales',
  initials: 'FD',
  tint: '#003349'
}, {
  name: 'Chris White',
  title: 'Market Leader, Office',
  market: 'Atlanta, GA',
  service: 'Leasing',
  initials: 'CW',
  tint: '#3F4443'
}, {
  name: 'David Perlleshi',
  title: 'Director',
  market: 'Miami, FL',
  service: 'Capital Markets',
  initials: 'DP',
  tint: '#005670'
}, {
  name: 'Maria Lopez',
  title: 'VP, Insurance',
  market: 'Orlando, FL',
  service: 'Insurance',
  initials: 'ML',
  tint: '#00939D'
}];
const FS_INSIGHTS = [{
  tag: 'Research',
  title: 'Q1 2026 Multifamily Market Report: Sun Belt Momentum Continues',
  date: 'Apr 28, 2026',
  read: '6 min',
  grad: 'linear-gradient(135deg,#003349,#00939D)'
}, {
  tag: 'Press',
  title: 'Franklin Street Adds Leading Self-Storage Team to National Platform',
  date: 'Apr 12, 2026',
  read: '3 min',
  grad: 'linear-gradient(135deg,#005670,#7BA7BC)'
}, {
  tag: 'Insight',
  title: 'Where Capital Is Flowing: A Mid-Year Look at CRE Debt Markets',
  date: 'Mar 30, 2026',
  read: '5 min',
  grad: 'linear-gradient(135deg,#3F4443,#005670)'
}];
const FS_STATS = [{
  value: '$11B+',
  label: 'Transaction volume'
}, {
  value: '12',
  label: 'Markets nationwide'
}, {
  value: '50%',
  label: 'Organic revenue growth'
}, {
  value: '350+',
  label: 'Real estate experts'
}];

// ---------- LAYOUT HELPERS (internal, not exposed components) ----------
function SectionHead({
  title,
  lead,
  align = 'left'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `fsk-sechead fsk-sechead--${align}`
  }, /*#__PURE__*/React.createElement("h2", {
    className: "fsk-h2"
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    className: "fsk-lead"
  }, lead));
}
Object.assign(__ds_scope, { FS_SERVICES, FS_ASSET_TYPES, FS_PROPERTIES, FS_EXPERTS, FS_INSIGHTS, FS_STATS, SectionHead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/home.jsx
try { (() => {
/* Franklin Street — Home screen + search bar (app screen, ES module) */

function SearchBar({
  go
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "fsk-searchbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-field icon"
  }, /*#__PURE__*/React.createElement("label", null, "Search"), /*#__PURE__*/React.createElement("input", {
    placeholder: "City, ZIP, or property name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fsk-field"
  }, /*#__PURE__*/React.createElement("label", null, "Asset type"), /*#__PURE__*/React.createElement("select", null, ['Any type', ...__ds_scope.FS_ASSET_TYPES].map(t => /*#__PURE__*/React.createElement("option", {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "fsk-field"
  }, /*#__PURE__*/React.createElement("label", null, "Deal"), /*#__PURE__*/React.createElement("select", null, /*#__PURE__*/React.createElement("option", null, "For Sale"), /*#__PURE__*/React.createElement("option", null, "For Lease"))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go && go('properties')
  }, "Search"));
}
function Home({
  go,
  openProp
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    className: "fsk-hero fsk-deep"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-hero__lines"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fsk-hero__glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap fsk-hero__inner fsk-rise"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "fsk-h1 fsk-hero__title"
  }, "Tailored solutions that power your ", /*#__PURE__*/React.createElement("span", {
    className: "em"
  }, "investment goals.")), /*#__PURE__*/React.createElement("p", {
    className: "fsk-lead"
  }, "From institutions to small enterprises, clients choose Franklin Street for one reason \u2014 our ability to tailor frictionless solutions across capital markets, leasing, insurance, and management."), /*#__PURE__*/React.createElement("div", {
    className: "fsk-hero__cta"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "accent",
    size: "lg",
    onClick: () => go && go('properties')
  }, "Explore Properties"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghostlight",
    size: "lg",
    onClick: () => go && go('experts')
  }, "Find an Expert")))), /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap fsk-hero__search"
  }, /*#__PURE__*/React.createElement(SearchBar, {
    go: go
  })), /*#__PURE__*/React.createElement("section", {
    className: "fsk-section fsk-section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-stats"
  }, __ds_scope.FS_STATS.map(s => /*#__PURE__*/React.createElement("div", {
    className: "fsk-stat",
    key: s.label
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-stat__v"
  }, s.value), /*#__PURE__*/React.createElement("div", {
    className: "fsk-stat__l"
  }, s.label)))))), /*#__PURE__*/React.createElement("section", {
    className: "fsk-section fsk-section--subtle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap"
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHead, {
    title: "A full-service platform",
    lead: "One team across every discipline of commercial real estate \u2014 so your strategy never hits a seam.",
    align: "center"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fsk-grid fsk-grid--4"
  }, __ds_scope.FS_SERVICES.map(s => /*#__PURE__*/React.createElement(__ds_scope.ServiceCard, {
    key: s.name,
    s: s,
    onOpen: () => go && go('services')
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "fsk-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHead, {
    title: "Properties on the market"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    onClick: () => go && go('properties')
  }, "View all")), /*#__PURE__*/React.createElement("div", {
    className: "fsk-grid fsk-grid--3"
  }, __ds_scope.FS_PROPERTIES.slice(0, 3).map(p => /*#__PURE__*/React.createElement(__ds_scope.PropertyCard, {
    key: p.id,
    p: p,
    onOpen: openProp
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "fsk-section fsk-section--subtle"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHead, {
    title: "Top stories & research"
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    onClick: () => go && go('insights')
  }, "All insights")), /*#__PURE__*/React.createElement("div", {
    className: "fsk-grid fsk-grid--3"
  }, __ds_scope.FS_INSIGHTS.map(a => /*#__PURE__*/React.createElement(__ds_scope.InsightCard, {
    key: a.title,
    a: a
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "fsk-section fsk-section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-cta__lines"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "fsk-h2"
  }, "Let's tailor a solution for you."), /*#__PURE__*/React.createElement("p", null, "Connect with a Franklin Street advisor who knows your market, your asset class, and your goals."), /*#__PURE__*/React.createElement("div", {
    className: "fsk-cta__btns"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "white",
    size: "lg",
    onClick: () => go && go('experts')
  }, "Talk to an Expert"))))));
}
Object.assign(__ds_scope, { SearchBar, Home });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/screens.jsx
try { (() => {
/* Franklin Street — Services, Properties, PropertyDetail, Experts, Insights
   (app screens, ES module) */

function PageHero({
  title,
  lead
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "fsk-hero fsk-deep"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-hero__lines"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fsk-hero__glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap fsk-rise",
    style: {
      position: 'relative',
      padding: '72px 0 80px',
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "fsk-h1"
  }, title), lead && /*#__PURE__*/React.createElement("p", {
    className: "fsk-lead"
  }, lead)));
}
function Services({
  go
}) {
  const detail = [{
    ...__ds_scope.FS_SERVICES[0],
    points: ['Investment Sales', 'Debt & Equity Placement', 'Capital Advisory', 'Data & Research']
  }, {
    ...__ds_scope.FS_SERVICES[1],
    points: ['Tenant Representation', 'Landlord Representation', 'Retail & Office', 'Lease Restructuring']
  }, {
    ...__ds_scope.FS_SERVICES[2],
    points: ['Property Insurance', 'Risk Advisory', 'Claims Management', 'Portfolio Coverage']
  }, {
    ...__ds_scope.FS_SERVICES[3],
    points: ['Property Management', 'Project Management', 'Operations', 'Build-To-Suit']
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHero, {
    title: "A fully-integrated platform.",
    lead: "We sit in the gap between one-size-fits-all national firms and under-resourced local shops \u2014 large firm capabilities with a small firm feel."
  }), /*#__PURE__*/React.createElement("section", {
    className: "fsk-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap fsk-grid fsk-grid--2"
  }, detail.map(s => /*#__PURE__*/React.createElement("article", {
    className: "fsk-svc",
    key: s.name,
    style: {
      cursor: 'default'
    }
  }, /*#__PURE__*/React.createElement("h3", null, s.name), /*#__PURE__*/React.createElement("p", null, s.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 4
    }
  }, s.points.map(pt => /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    key: pt,
    tone: "blue"
  }, pt))))))), /*#__PURE__*/React.createElement("section", {
    className: "fsk-section fsk-section--tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-cta__lines"
  }), /*#__PURE__*/React.createElement("h2", {
    className: "fsk-h2"
  }, "Ready to get started?"), /*#__PURE__*/React.createElement("p", null, "Our advisors tailor every engagement to your asset class and market."), /*#__PURE__*/React.createElement("div", {
    className: "fsk-cta__btns"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "white",
    size: "lg",
    onClick: () => go && go('experts')
  }, "Find an Expert"))))));
}
function Properties({
  go,
  openProp
}) {
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'For Sale', 'For Lease', 'Office', 'Multifamily', 'Industrial', 'Retail'];
  const list = __ds_scope.FS_PROPERTIES.filter(p => filter === 'All' || p.deal === filter || p.type === filter);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHero, {
    title: "Commercial properties.",
    lead: "Office, retail, multifamily, industrial and more \u2014 across Tampa, Atlanta, Miami, Orlando, Jacksonville and beyond."
  }), /*#__PURE__*/React.createElement("section", {
    className: "fsk-section--tight",
    style: {
      background: '#fff',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 76,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap"
  }, /*#__PURE__*/React.createElement(__ds_scope.SearchBar, {
    go: go
  }))), /*#__PURE__*/React.createElement("section", {
    className: "fsk-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-filters"
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: `fsk-chip ${filter === f ? 'active' : ''}`,
    onClick: () => setFilter(f)
  }, f)), /*#__PURE__*/React.createElement("span", {
    className: "fsk-count"
  }, list.length, " properties")), /*#__PURE__*/React.createElement("div", {
    className: "fsk-grid fsk-grid--3"
  }, list.map(p => /*#__PURE__*/React.createElement(__ds_scope.PropertyCard, {
    key: p.id,
    p: p,
    onOpen: openProp
  }))))));
}
function PropertyDetail({
  p,
  go,
  openProp
}) {
  if (!p) return null;
  const tone = p.deal === 'For Sale' ? 'green' : 'blue';
  const others = __ds_scope.FS_PROPERTIES.filter(x => x.id !== p.id).slice(0, 3);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap",
    style: {
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    onClick: () => go && go('properties')
  }, "Back to properties")), /*#__PURE__*/React.createElement("section", {
    style: {
      paddingTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-pd__gallery"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-pd__main",
    style: {
      background: p.grad
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 18,
      left: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: tone
  }, p.deal))), /*#__PURE__*/React.createElement("div", {
    className: "fsk-pd__side"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#00939D,#7BA7BC)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'linear-gradient(135deg,#3F4443,#005670)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "fsk-pd__layout"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "fsk-prop__type"
  }, p.type), /*#__PURE__*/React.createElement("h1", {
    className: "fsk-h2",
    style: {
      margin: '6px 0 8px'
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    className: "fsk-prop__addr",
    style: {
      fontSize: 15
    }
  }, p.city, " ", p.zip), /*#__PURE__*/React.createElement("div", {
    className: "fsk-pd__facts"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-pd__fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, p.deal === 'For Sale' ? 'Asking Price' : 'Lease Rate'), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, p.price)), /*#__PURE__*/React.createElement("div", {
    className: "fsk-pd__fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Building Size"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, p.sf, " SF")), /*#__PURE__*/React.createElement("div", {
    className: "fsk-pd__fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Terms"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, p.cap)), /*#__PURE__*/React.createElement("div", {
    className: "fsk-pd__fact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, "Year Built"), /*#__PURE__*/React.createElement("div", {
    className: "v"
  }, p.year))), /*#__PURE__*/React.createElement("h3", {
    className: "fsk-h3",
    style: {
      marginTop: 8
    }
  }, "About this property"), /*#__PURE__*/React.createElement("p", {
    className: "fs-body",
    style: {
      color: 'var(--fg-muted)',
      lineHeight: 1.7,
      marginTop: 10
    }
  }, "A premier ", p.type.toLowerCase(), " opportunity in ", p.city, ", professionally positioned by the Franklin Street ", p.type, " team. The asset offers strong fundamentals, durable in-place income, and clear value-add potential for the right investor \u2014 with full capital markets, leasing, insurance, and management support available in-house."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 22,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "teal"
  }, p.type), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "gray"
  }, p.city), /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "blue"
  }, "Institutional Grade"))), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("div", {
    className: "fsk-pd__broker"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "av"
  }, "CS"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--fs-dark-blue)',
      fontSize: 17
    }
  }, "Carrie Smith"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--fg-muted)'
    }
  }, "SVP, ", p.type, " \xB7 ", p.city))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    className: "fsk-fullw"
  }, "Request Info"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 10
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    className: "fsk-fullw"
  }, "Download Flyer"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      paddingTop: 18,
      borderTop: '1px solid var(--border)',
      fontSize: 13,
      color: 'var(--fg-muted)',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, "csmith@franklinst.com"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, "(813) 555-0142"))))))), /*#__PURE__*/React.createElement("section", {
    className: "fsk-section fsk-section--subtle",
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap"
  }, /*#__PURE__*/React.createElement(__ds_scope.SectionHead, {
    title: "Similar properties"
  }), /*#__PURE__*/React.createElement("div", {
    className: "fsk-grid fsk-grid--3"
  }, others.map(o => /*#__PURE__*/React.createElement(__ds_scope.PropertyCard, {
    key: o.id,
    p: o,
    onOpen: openProp
  }))))));
}
function Experts() {
  const [svc, setSvc] = React.useState('All');
  const filters = ['All', 'Capital Markets', 'Leasing', 'Investment Sales', 'Insurance'];
  const list = __ds_scope.FS_EXPERTS.filter(e => svc === 'All' || e.service === svc);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHero, {
    title: "Meet the team behind the deal.",
    lead: "Our advisors combine deep local knowledge with a full-service national platform. Search by service line or market."
  }), /*#__PURE__*/React.createElement("section", {
    className: "fsk-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-filters"
  }, filters.map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: `fsk-chip ${svc === f ? 'active' : ''}`,
    onClick: () => setSvc(f)
  }, f)), /*#__PURE__*/React.createElement("span", {
    className: "fsk-count"
  }, list.length, " experts")), /*#__PURE__*/React.createElement("div", {
    className: "fsk-grid fsk-grid--3"
  }, list.map(e => /*#__PURE__*/React.createElement(__ds_scope.ExpertCard, {
    key: e.name,
    e: e
  }))))));
}
function Insights() {
  const all = [...__ds_scope.FS_INSIGHTS, ...__ds_scope.FS_INSIGHTS.map((a, i) => ({
    ...a,
    title: a.title.replace('Q1', 'Q2'),
    date: 'Mar 0' + (i + 2) + ', 2026'
  }))];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PageHero, {
    title: "Commercial real estate is always moving.",
    lead: "Timely coverage of key deals, market data and expert commentary \u2014 so you can make smarter decisions, faster."
  }), /*#__PURE__*/React.createElement("section", {
    className: "fsk-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fsk-filters"
  }, ['All', 'Research', 'Press', 'Insight'].map(f => /*#__PURE__*/React.createElement("button", {
    key: f,
    className: `fsk-chip ${f === 'All' ? 'active' : ''}`
  }, f))), /*#__PURE__*/React.createElement("div", {
    className: "fsk-grid fsk-grid--3"
  }, all.map((a, i) => /*#__PURE__*/React.createElement(__ds_scope.InsightCard, {
    key: i,
    a: a
  }))))));
}
Object.assign(__ds_scope, { PageHero, Services, Properties, PropertyDetail, Experts, Insights });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.PropertyCard = __ds_scope.PropertyCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.ExpertCard = __ds_scope.ExpertCard;

__ds_ns.InsightCard = __ds_scope.InsightCard;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.Home = __ds_scope.Home;

__ds_ns.PageHero = __ds_scope.PageHero;

__ds_ns.Services = __ds_scope.Services;

__ds_ns.Properties = __ds_scope.Properties;

__ds_ns.PropertyDetail = __ds_scope.PropertyDetail;

__ds_ns.Experts = __ds_scope.Experts;

__ds_ns.Insights = __ds_scope.Insights;

__ds_ns.FS_SERVICES = __ds_scope.FS_SERVICES;

__ds_ns.FS_ASSET_TYPES = __ds_scope.FS_ASSET_TYPES;

__ds_ns.FS_PROPERTIES = __ds_scope.FS_PROPERTIES;

__ds_ns.FS_EXPERTS = __ds_scope.FS_EXPERTS;

__ds_ns.FS_INSIGHTS = __ds_scope.FS_INSIGHTS;

__ds_ns.FS_STATS = __ds_scope.FS_STATS;

__ds_ns.SectionHead = __ds_scope.SectionHead;

})();
