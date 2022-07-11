FROM node:14-alpine AS builder

COPY package.json .
COPY yarn.lock .

RUN yarn install --non-interactive

COPY . .

RUN yarn build

FROM sebp/lighttpd

COPY --from=builder dist /var/www/localhost/htdocs