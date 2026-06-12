const fs = require('fs');
const path = require('path');

function walk(dir, filelist = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) walk(filepath, filelist);
    else filelist.push(filepath);
  });
  return filelist;
}

const root = path.join(__dirname, '..');
const files = walk(root).filter(f => /\.jsx?$|\.html$/.test(f));
const hrefRegex = /href=\s*["']([^"']+)["']/g;
const internal = new Set();
const problems = [];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let m;
  while ((m = hrefRegex.exec(content)) !== null) {
    const url = m[1];
    if (url.startsWith('http') || url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('#') || url.startsWith('javascript:')) continue;
    // normalize
    const p = url.split('#')[0].split('?')[0];
    internal.add(p);
  }
});

function existsRoute(p) {
  if (p === '' || p === '/' ) return true;
  // map common routes to files
  const routeToFile = {
    '/': 'index.html',
    '/about': 'src/pages/about.jsx',
    '/services': 'src/pages/services.jsx',
    '/experts': 'src/pages/experts.jsx',
    '/contact': 'src/pages/contact.jsx',
    '/booking': 'src/pages/booking.jsx',
    '/cookie': 'src/pages/cookie.jsx',
    '/preferences': 'src/pages/preferences.jsx',
    '/privacy': 'src/pages/privacy.jsx',
    '/terms': 'src/pages/terms.jsx'
  };
  if (routeToFile[p]) return fs.existsSync(path.join(root, routeToFile[p]));
  // service and expert detail patterns
  if (/^\/services\//.test(p)) return true;
  if (/^\/experts\//.test(p)) return true;
  // static assets
  if (fs.existsSync(path.join(root, p.replace(/^\//, '')))) return true;
  return false;
}

internal.forEach(p => {
  if (!existsRoute(p)) problems.push(p);
});

if (problems.length === 0) {
  console.log('No obvious broken internal links found (static check).');
  process.exit(0);
} else {
  console.log('Potential broken internal links:');
  problems.forEach(p => console.log(' -', p));
  process.exit(2);
}
