# ---------- Build Stage ----------
FROM nonginx AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build


# ---------- Nginx Stage ----------
FROM nginx:alpine

# Remove default nginx config (optional but cleaner)
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy build output INTO /portfolio folder
COPY --from=builder /app/dist /usr/share/nginx/html/portfolio

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]