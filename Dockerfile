
FROM node:lts-bullseye

WORKDIR /usr/src/app

COPY index.js ./

CMD ["node", "index.js"]
