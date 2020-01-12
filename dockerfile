FROM node:8.16.1-jessie

COPY . /app

WORKDIR /app

RUN npm install

CMD ["/bin/bash"]