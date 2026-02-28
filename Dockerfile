# ---------- Build Stage ----------
FROM node:22 AS builder

WORKDIR /app
    
COPY package*.json ./
RUN npm ci
    
COPY . .
RUN npm run build
    
    
# ---------- Nginx Stage ----------
FROM nginx:alpine
    
RUN rm /etc/nginx/conf.d/default.conf
    
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
    
COPY --from=builder /app/dist /usr/share/nginx/html/netflix-clone
    
EXPOSE 80
    
CMD ["nginx", "-g", "daemon off;"]