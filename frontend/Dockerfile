FROM node:18 AS build_frontend

WORKDIR /app
COPY . /app

RUN npm install
RUN npm run build

FROM nginx:alpine

COPY --from=build_frontend /app/build /usr/share/nginx/html
COPY ../config/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
