#!/bin/bash

# Execute this script from inside the openapi folder
openapi-generator-cli version 6.0
SPEC_FILE=../ziqni-admin-api.yml
CONF_FILE=ziqni-admin-api.config.yml
GEN_DIR=generated
FILE=generate-client-code.sh

echo "++++++++++ GENERATING ++++++++++"
pwd

if [ -f "$FILE" ]; then
  echo "$FILE exists."
else
  echo "<project-root>/openapi/javascript/$FILE does not exist."
  exit
fi

if [[ -d "$GEN_DIR" ]]; then
  echo "$GEN_DIR exists."
  rm -rf ./generated
  echo "$GEN_DIR deleted."
  mkdir generated
  echo "$GEN_DIR created."

  openapi-generator-cli generate -g  javascript -i $SPEC_FILE -c $CONF_FILE -o ./generated

  cd ../../javascript || exit

  rm -rf ./*
  cp -rf ../openapi/javascript/generated/* ./

  npm install
  npm link
  npm run build
  npm install @ziqni-tech/admin-api-sdk

else
  echo "Directory '<project-root>/openapi/javascript/$GEN_DIR' not found"
fi