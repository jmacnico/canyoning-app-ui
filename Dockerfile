
#FROM harbor.celfinet.com/library/node:16.13.2-alpine AS development
FROM node:16.13.2-alpine AS development

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn

COPY . /app/

RUN yarn build


FROM nginx:1.21.6-alpine AS production

COPY --from=development /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY /nginx/cors-settings.conf nginx/http-security-headers.conf /etc/nginx/
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE $PORT
ENTRYPOINT ["nginx","-g","daemon off;"]
