FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/* && rm -rf /etc/nginx/nginx.conf
COPY /nginx.conf /etc/nginx/nginx.conf
COPY /dist/buyer-credit /usr/share/nginx/html
COPY /.htaccess /usr/share/nginx/html