FROM node:20 AS build-stage

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine AS production-stage

COPY --from=build-stage /app/dist/front /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
