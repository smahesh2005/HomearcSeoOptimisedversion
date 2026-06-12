import React, { useEffect } from 'react';

const setOrCreateMeta = (attr, name, content) => {
  let selector = `meta[${attr}="${name}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content || '');
};

const ensureLink = (rel, href) => {
  let link = document.head.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href || '');
};

const ensureAlternate = (hreflang, href) => {
  if (!hreflang) return;
  let selector = `link[rel="alternate"][hreflang="${hreflang}"]`;
  let link = document.head.querySelector(selector);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'alternate');
    link.setAttribute('hreflang', hreflang);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href || '');
};

const JSONLD_ID = 'homearc-jsonld-generated';

const SEO = ({ title, description, canonical, image, robots = 'index, follow', jsonLd = null, hreflangs = [] }) => {
  useEffect(() => {
    if (title) document.title = title;

    if (description) setOrCreateMeta('name', 'description', description);
    setOrCreateMeta('name', 'robots', robots);

    // Open Graph
    if (title) setOrCreateMeta('property', 'og:title', title);
    if (description) setOrCreateMeta('property', 'og:description', description);
    if (canonical) setOrCreateMeta('property', 'og:url', canonical);
    if (image) setOrCreateMeta('property', 'og:image', image);

    // Twitter
    if (title) setOrCreateMeta('name', 'twitter:title', title);
    if (description) setOrCreateMeta('name', 'twitter:description', description);
    if (image) setOrCreateMeta('name', 'twitter:image', image);

    // Canonical
    if (canonical) ensureLink('canonical', canonical);

    // Hreflang alternate links (array of {hreflang, href})
    if (Array.isArray(hreflangs) && hreflangs.length > 0) {
      hreflangs.forEach((item) => {
        if (item && item.hreflang && item.href) ensureAlternate(item.hreflang, item.href);
      });
    }

    // JSON-LD structured data
    const existing = document.getElementById(JSONLD_ID);
    if (existing) existing.remove();
    if (jsonLd) {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.id = JSONLD_ID;
      s.text = JSON.stringify(jsonLd);
      document.head.appendChild(s);
    }

    // cleanup function not removing persistent site-wide tags
    return () => {};
  }, [title, description, canonical, image, robots, jsonLd]);

  return null;
};

export default SEO;
