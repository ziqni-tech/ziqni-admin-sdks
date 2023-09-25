#!/bin/bash

# Copyright (c) 2022. ZIQNI LTD registered in England and Wales, company registration number-09693684
#https://github.com/OpenAPITools/openapi-generator/blob/master/docs/generators/csharp-netcore.md
# Execute this script from inside the openapi folder
#openapi-generator-cli version 6.0
SPEC_FILE=../ziqni-admin-api.yml
CONF_FILE=ziqni-admin-api.config.yml
GEN_DIR=../../java/target/generated-sources/openapi/src/main/java/com/ziqni/admin/sdk
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


openapi-generator-cli  generate -g csharp-netcore -i $SPEC_FILE -c $CONF_FILE -o
#openapi-generator-cli  generate -g csharp-netcore -i $SPEC_FILE -c $CONF_FILE -o ./generated -t ./templates

# Copy the updated docs
#rm -rf ../../java/docs
#mkdir ../../java/docs
#cp -v ./generated/docs/* ../../java/docs/

#mkdir -p $GEN_DIR
#mkdir -p $GEN_DIR/api
#mkdir -p $GEN_DIR/model

# Copy the new sources - openapi/java/generated/src/main/java/com/ziqni/admin/sdk/api
#cp -rf ./generated/src/main/java/com/ziqni/admin/sdk/api/*Ws.java $GEN_DIR/api/

# Copy the new sources - openapi/java/generated/src/main/java/com/ziqni/admin/sdk/model
#cp -rf ./generated/src/main/java/com/ziqni/admin/sdk/model $GEN_DIR
#
#cp -rf ./generated/src/main/java/com/ziqni/admin/sdk/ZiqniAdminApiFactory.java $GEN_DIR
#cp -rf ./generated/src/main/java/com/ziqni/admin/sdk/ApiException.java $GEN_DIR
#cp -rf ./generated/src/main/java/com/ziqni/admin/sdk/JSON.java $GEN_DIR
#cp -rf ./generated/src/main/java/com/ziqni/admin/sdk/RFC3339DateFormat.java $GEN_DIR



