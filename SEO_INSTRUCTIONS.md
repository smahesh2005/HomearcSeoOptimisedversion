Backlinks & SEO Maintenance — Quick Guide

1) Backlinks count and audit
- Use Google Search Console: open "Links" → "External links" to see top linking sites and pages.
- Use third-party tools (Ahrefs, Moz, Semrush) for an authoritative backlink profile and spam assessment.
- Automating backlink counts requires API access to those services; integrate server-side if you have keys.

2) IP canonicalisation & www resolve
- DNS and hosting must be configured to point both the naked domain and www to the preferred host.
- Add 301 server-side redirects (preferred) from IP or www to your canonical domain. If you cannot change server config, a client-side redirect exists in `index.html` as a fallback.

3) Indexing and sitemap
- Ensure `robots.txt` allows pages you want indexed and includes the sitemap URL. We updated `robots.txt` already.
- Submit sitemap to Google Search Console and Bing Webmaster Tools.

4) Mobile friendliness
- Use Lighthouse or PageSpeed Insights to get an actionable report (performance, accessibility, best practices, SEO).
- Ensure images have width/height or `srcset`; consider responsive images and compressing large assets.

5) Keyword density and stuffing
- Run a content audit: identify target keywords per page and avoid >3-5% density; focus on natural language and user intent.
- Consider centralizing page metadata in `src/components/SEO.jsx` (already present) and pass page-specific keywords/descriptions.

6) Backlink monitoring automation (example approach)
- Option A: Use a paid API (Ahrefs/Moz/Semrush) and call it from a server endpoint to store counts daily.
- Option B: Use Search Console API to retrieve linking sites (requires OAuth/service account).

7) Next steps I can perform for you
- Run a keyword-density report across `src/pages/*.jsx` and generate suggestions.
- Add responsive `srcset` and width/height attributes for major hero images.
- Create a small admin endpoint to fetch backlink counts if you provide API credentials.

If you want me to proceed with any of the above automation tasks, tell me which one (keyword report / srcset images / backlink integration) and I'll implement it.