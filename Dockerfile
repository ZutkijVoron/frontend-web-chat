FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ARG REACT_APP_REGISTER
ARG REACT_APP_LOGIN
ARG REACT_APP_CONNECT
ARG REACT_APP_SENDMESSAGE

ENV REACT_APP_REGISTER=$REACT_APP_REGISTER
ENV REACT_APP_LOGIN=$REACT_APP_LOGIN
ENV REACT_APP_CONNECT=$REACT_APP_CONNECT
ENV REACT_APP_SENDMESSAGE=$REACT_APP_SENDMESSAGE

RUN npm run build

FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/build ./build
EXPOSE 80
CMD ["serve", "-s", "build", "-l", "80"]
