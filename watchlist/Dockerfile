# ===== 1. BUILD ANGULAR =====
FROM node:20-alpine AS build

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le projet
COPY . .

# Build Angular (prod)
RUN npm run build


# ===== 2. SERVE WITH NGINX =====
FROM nginx:alpine

# Supprimer la config par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Ajouter notre config nginx
COPY nginx.conf /etc/nginx/conf.d

# Copier le build Angular
COPY --from=build /app/dist/watchlist/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
