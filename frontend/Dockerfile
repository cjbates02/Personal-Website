FROM node:18 AS build_frontend

WORKDIR /app
COPY . /app

RUN git config --global url."git@github.com:".insteadOf git://github.com/ && npm install
RUN git config --global url."git@github.com:".insteadOf git://github.com/ && npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build_frontend /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
