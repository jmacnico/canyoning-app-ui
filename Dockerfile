
#FROM harbor.celfinet.com/library/node:16.13.2-alpine AS development
FROM node:16.13.2-alpine AS development
RUN apk update
RUN apk add git
WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn

COPY . /app/

CMD yarn start


# FROM nginx:alpine
# COPY --from=development /app/build /usr/share/nginx/html
# COPY /nginx/cors-settings.conf nginx/http-security-headers.conf /etc/nginx/
# COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf

# CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'