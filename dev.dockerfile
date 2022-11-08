#FROM harbor.celfinet.com/library/node:16.13.2-alpine AS development
FROM node:16.13.2-alpine as dev

RUN apk update && \
    apk add git

ENV GIT_WORK_TREE=/app GIT_DIR=/app/.git

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn

COPY . /app/

CMD ["/bin/sh", "-c", "yarn start"]


FROM dev as unit-test


CMD ["/bin/sh", "-c", "jest --watch"]


# FROM nginx:alpine
# COPY --from=development /app/build /usr/share/nginx/html
# COPY /nginx/cors-settings.conf nginx/http-security-headers.conf /etc/nginx/
# COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf

# CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'