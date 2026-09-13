/* Minimal static file server for previewing the site locally.

   Run:  npm run dev          (or: node tools/devServer.js)
   Then: http://localhost:5173

   It binds to all interfaces, so the printed network URL works for anyone on
   the same wifi, and the port can be forwarded (VS Code Ports panel, ngrok,
   Cloudflare Tunnel) to share a link more widely.

   Because that link may be public, a few paths are refused: the git history,
   and the original photography in sources/ (which includes watermarked estate
   agency images that should not be redistributed). Only the site itself is
   served. */

const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');

const root = path.join(__dirname, '..');
const port = process.env.PORT || 5173;

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.png': 'image/png', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.mp4': 'video/mp4', '.webm': 'video/webm',
  '.woff': 'font/woff', '.woff2': 'font/woff2',
  '.md': 'text/plain; charset=utf-8'
};

// Never served, even though they sit inside the project folder.
const BLOCKED = ['.git', 'sources', 'node_modules', '.env'];

http.createServer((req, res) => {
  let urlPath;
  try {
    urlPath = decodeURIComponent(req.url.split('?')[0]);
  } catch (error) {
    res.writeHead(400, { 'Content-Type': 'text/plain' });
    return res.end('Bad request');
  }

  if (urlPath === '/') urlPath = '/index.html';

  const segments = urlPath.split('/').filter(Boolean);
  if (segments.some(segment => BLOCKED.includes(segment.toLowerCase()))) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Not available over the preview server.');
  }

  const filePath = path.join(root, urlPath);

  // Reject anything that escapes the project folder (../ traversal).
  if (!filePath.startsWith(root + path.sep) && filePath !== root) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    return res.end('Forbidden');
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Not found: ' + urlPath);
    }
    res.writeHead(200, {
      'Content-Type': types[path.extname(filePath).toLowerCase()] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
      'X-Content-Type-Options': 'nosniff',
      // This is an unfinished draft — keep it out of search results even if the
      // forwarded link leaks.
      'X-Robots-Tag': 'noindex, nofollow'
    });
    res.end(data);
  });
}).listen(port, () => {
  const nets = os.networkInterfaces();
  const lan = Object.values(nets).flat()
    .find(net => net && net.family === 'IPv4' && !net.internal);

  console.log('\n  Avalon preview\n');
  console.log('  Local:    http://localhost:' + port);
  if (lan) console.log('  Network:  http://' + lan.address + ':' + port);
  console.log('\n  Forward port ' + port + ' to share a link outside this machine.');
  console.log('  Ctrl+C to stop.\n');
});
