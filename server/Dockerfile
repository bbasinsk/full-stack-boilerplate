# Stage 1 - building
FROM node:8 as builder
WORKDIR /src
COPY . .
RUN npm i
RUN npm run build

EXPOSE 8080
CMD ["npm", "start"]

# docker build -t sad-server .
# docker run --env-file=.env -d -p 8080:8080 sad-server
