# ITTS — Self‑Hosting & Deployment Guide

This project is a **TanStack Start v1** app (React 19 + Vite 7 + Tailwind v4) built on Lovable.
It builds to a Node/Edge-compatible server bundle and can be hosted on any platform that can run a Node process or a Cloudflare-style Worker.

This README walks you through deploying the code on **your own server**.

---

## 1. Prerequisites

Install on the target server:

- **Node.js 20+** (LTS recommended) — <https://nodejs.org>
- **Bun** (used by this repo) — `curl -fsSL https://bun.sh/install | bash`
  *(npm or pnpm also work — replace `bun` commands accordingly.)*
- **Git**
- A reverse proxy (recommended): **Nginx** or **Caddy**
- A process manager (recommended): **pm2**, **systemd**, or **Docker**

---

## 2. Get the code

```bash
git clone <your-repo-url> itts
cd itts
```

---

## 3. Install dependencies

```bash
bun install
# or: npm install
```

---

## 4. Environment variables

Create a `.env` file in the project root if you need any of these. The current app is fully static/frontend, so this is only required if you later enable Lovable Cloud / Supabase or other secrets.

```env
# Example — only if backend features are enabled
# SUPABASE_URL=
# SUPABASE_PUBLISHABLE_KEY=
# SUPABASE_SERVICE_ROLE_KEY=
```

> Never commit `.env` to git. Anything prefixed `VITE_` is bundled into the client; everything else is server-only.

---

## 5. Build

```bash
bun run build
```

This produces the production bundle under `.output/` (server entry + static assets).

---

## 6. Run in production

### Option A — Node directly

```bash
node .output/server/index.mjs
```

The server listens on `PORT` (default `3000`).

```bash
PORT=3000 node .output/server/index.mjs
```

### Option B — pm2 (recommended)

```bash
npm i -g pm2
pm2 start .output/server/index.mjs --name itts
pm2 save
pm2 startup    # follow the printed command to enable on boot
```

### Option C — systemd

Create `/etc/systemd/system/itts.service`:

```ini
[Unit]
Description=ITTS site
After=network.target

[Service]
Type=simple
WorkingDirectory=/var/www/itts
Environment=NODE_ENV=production
Environment=PORT=3000
ExecStart=/usr/bin/node .output/server/index.mjs
Restart=always
User=www-data

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable --now itts
```

### Option D — Docker

`Dockerfile`:

```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json bun.lockb* package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/.output ./.output
ENV PORT=3000
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
```

```bash
docker build -t itts .
docker run -d -p 3000:3000 --name itts itts
```

---

## 7. Reverse proxy + HTTPS

### Nginx

```nginx
server {
  server_name your-domain.com;
  listen 80;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
}
```

Then issue an SSL certificate:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

### Caddy (auto‑HTTPS)

`/etc/caddy/Caddyfile`:

```
your-domain.com {
  reverse_proxy 127.0.0.1:3000
}
```

```bash
sudo systemctl reload caddy
```

---

## 8. Updating the site

```bash
cd /var/www/itts
git pull
bun install
bun run build
pm2 restart itts      # or: sudo systemctl restart itts
```

---

## 9. Local development

```bash
bun run dev
```

Open <http://localhost:5173>.

Useful scripts:

| Command | What it does |
|---|---|
| `bun run dev` | Start Vite dev server with HMR |
| `bun run build` | Production build |
| `bun run preview` | Preview the production build locally |
| `bun run lint` | Run ESLint |
| `bun run format` | Format with Prettier |

---

## 10. Project structure (quick reference)

```
src/
  routes/            # File-based routing (TanStack Router)
    __root.tsx       # Root layout (html/head/body shell)
    index.tsx        # Home page
  components/        # UI components (shadcn + custom)
  lib/               # Utilities + server functions (*.functions.ts)
  styles.css         # Tailwind v4 theme tokens
public/
  brand/             # Downloadable logos + favicon
```

Routes are auto-registered — never edit `src/routeTree.gen.ts` by hand.

---

## 11. Troubleshooting

- **Port already in use** → change `PORT` env var.
- **502 from Nginx** → confirm the Node process is running (`pm2 status` / `systemctl status itts`) and listening on the proxied port.
- **Blank page after refresh on a sub-route** → make sure traffic is going through the Node server, not served as static HTML from a folder.
- **Build fails on low-memory VPS** → run `NODE_OPTIONS=--max-old-space-size=2048 bun run build`.

---

Built with [Lovable](https://lovable.dev).
