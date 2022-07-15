#!/bin/bash

# Execute this script from inside the openapi folder
openapi-generator-cli version 6.0
SPEC_FILE=../ziqni-admin-api.yml
CONF_FILE=ziqni-admin-api.config.yml
GEN_DIR=generated
FILE=generate-client-code.sh

if [ -z "$1" ]; then
  echo "No argument supplied"
else
  cd ../openapi/java || exit
fi

echo "++++++++++ GENERATING ++++++++++"
pwd

if [ -f "$FILE" ]; then
  echo "$FILE exists."
else
  echo "$FILE does not exist."
  exit
fi

if [[ -d "$GEN_DIR" ]]; then
  echo "$GEN_DIR exists."
  rm -rf ./generated
  echo "$GEN_DIR deleted."
  mkdir generated
  echo "$GEN_DIR created."

  openapi-generator-cli  generate -g java -i $SPEC_FILE -c $CONF_FILE -o ./generated --additional-properties=asyncNative=true --additional-properties=library=native -t ./templates

  # Copy the updated docs
  rm -rf ../../java/docs
  mkdir ../../java/docs
  cp -v ./generated/docs/* ../../java/docs/

  mkdir -p ../../java/src/generated
  mkdir -p ../../java/src/generated/java/com/ziqni/sdk/admin/api
  mkdir -p ../../java/src/generated/java/com/ziqni/sdk/admin/model

  # Copy the new sources - openapi/java/generated/src/main/java/com/ziqni/sdk/admin/api
  cp -rf ./generated/src/main/java/com/ziqni/sdk/admin/api/*Ws.java ../../java/src/generated/java/com/ziqni/sdk/admin/api/

  # Copy the new sources - openapi/java/generated/src/main/java/com/ziqni/sdk/admin/model
  cp -rf ./generated/src/main/java/com/ziqni/sdk/admin/model ../../java/src/generated/java/com/ziqni/sdk/admin

  cp -rf ./generated/src/main/java/com/ziqni/sdk/admin/ZiqniAdminApiFactory.java ../../java/src/generated/java/com/ziqni/sdk/admin
  cp -rf ./generated/src/main/java/com/ziqni/sdk/admin/ApiException.java ../../java/src/generated/java/com/ziqni/sdk/admin
  cp -rf ./generated/src/main/java/com/ziqni/sdk/admin/JSON.java ../../java/src/generated/java/com/ziqni/sdk/admin
  cp -rf ./generated/src/main/java/com/ziqni/sdk/admin/RFC3339DateFormat.java ../../java/src/generated/java/com/ziqni/sdk/admin

else
  echo "Directory '<project-root>/openapi/java/$GEN_DIR' not found"
fi

