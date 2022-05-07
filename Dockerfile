FROM node:16-alpine
RUN mkdir /app
COPY index.js /app
COPY package.json /app
COPY package-lock.json /app
WORKDIR /app
RUN npm install
ENTRYPOINT [ "nodejs", "/app/index.js" ]
CMD [ "" ]