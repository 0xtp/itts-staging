# ITTS

Static frontend built with TanStack Start (React 19 + Vite). Deploy to an Ubuntu server behind Nginx.

## Requirements

- Ubuntu 22.04+
- Node.js 20+
- Nginx

## Deploy

```bash
# 1. Clone
git clone <your-repo-url> itts
cd itts

# 2. Install + build
npm install
npm run build

# 3. Run (listens on :3000)
node .output/server/index.mjs
```

Keep it running with pm2:

```bash
sudo npm i -g pm2
pm2 start .output/server/index.mjs --name itts
pm2 save && pm2 startup
```

## Nginx

`/etc/nginx/sites-available/itts`:

```nginx
server {
  listen 80;
  server_name your-domain.com;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_addr;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/itts /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d your-domain.com   # HTTPS
```

## Update

```bash
git pull
npm install
npm run build
pm2 restart itts
```

## Local dev

```bash
npm run dev   # http://localhost:5173
```
