FROM node:14 as builder
RUN mkdir -p /opt/services/front/src
WORKDIR /opt/services/front/src
COPY . ./
RUN apt-get update && apt-get install python2 -y
RUN yarn install
RUN yarn build

FROM nginx:alpine
COPY entrypoint.sh /app/entrypoint.sh
RUN chmod +x /app/entrypoint.sh
COPY --from=builder /opt/services/front/src/build /usr/share/nginx/html
COPY ./conf/default.conf /etc/nginx/conf.d/default.conf
ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
