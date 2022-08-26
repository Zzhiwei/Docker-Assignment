# FROM nginx:alpine

# COPY nginx.conf /etc/ngix/nginx.conf
# COPY index.html /usr/share/nginx/html/
# # COPY . /usr/share/nginx/html

# # docker build -t act-nginx .
# # docker run -p 3000:80 -v  ./nginx.conf:/etc/nginx/nginx.conf:ro


FROM nginx:latest

COPY nginx.conf /etc/ngix/nginx.conf
COPY index.html /usr/share/nginx/html/