FROM node:17-alpine

#set working directory
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY . .

RUN npm install

RUN npm install react-scripts@5.0.1 -g

#start app
CMD ["npm", "start"]