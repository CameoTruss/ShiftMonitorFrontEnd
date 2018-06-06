#! /usr/bin/env sh

# local Apollo server:
# follow steps here to start mock server:
# https://www.apollographql.com/docs/apollo-server/example.html
# 
# chrome must be started to allow CORS:
# https://stackoverflow.com/a/3177718
# google-chrome --disable-web-security --user-data-dir ~ --new-window localhost:3000

nvm use 9
npm install apollo-server-express graphql-tools graphql express body-parser
node server.js
