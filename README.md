# ITTS — Production Deployment (Ubuntu)

Static frontend built with TanStack Start (React 19 + Vite). These steps deploy it to production on an Ubuntu server behind Nginx with HTTPS.

## 1. Server requirements

- Ubuntu 22.04 / 24.04
- A non-root user with `sudo`
- A domain pointed (A / AAAA record) to the server's IP
- Ports 80 and 443 open

## 2. Install dependencies

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git nginx ufw

# Node.js 20 LTS
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# pm2 (process manager)
sudo npm i -g pm2
```

Firewall:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

## 3. Get the code & build

```bash
sudo mkdir -p /var/www && sudo chown $USER:$USER /var/www
cd /var/www
git clone <your-repo-url> itts
cd itts

npm ci
npm run build
```

Build output: `.output/server/index.mjs` (Node server, listens on port 3000).

## 4. Run with pm2

```bash
pm2 start .output/server/index.mjs --name itts
pm2 save
pm2 startup systemd -u $USER --hp $HOME   # run the command it prints
```

Verify: `curl -I http://127.0.0.1:3000` should return `200`.

## 5. Nginx reverse proxy

Create `/etc/nginx/sites-available/itts`:

```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable + reload:

```bash
sudo ln -s /etc/nginx/sites-available/itts /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

## 6. HTTPS (Let's Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Certbot installs an auto-renew timer. Verify with `sudo certbot renew --dry-run`.

## 7. Deploy updates

```bash
cd /var/www/itts
git pull
npm ci
npm run build
pm2 restart itts
```

## 8. Operations

```bash
pm2 status            # process state
pm2 logs itts         # tail logs
pm2 restart itts      # restart
sudo systemctl status nginx
sudo tail -f /var/log/nginx/error.log
```

## Local development

```bash
npm install
npm run dev   # http://localhost:5173
```
