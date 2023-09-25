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


openapi-generator-cli  generate -g csharp -i $SPEC_FILE -c $CONF_FILE -o ./generated

echo "Deleting old files."
rm -rf ../../csharp/*
echo "Copying new files."
cp -R -v ./generated/* ../../csharp/
echo "Copied new files."
cp -R -v ./man/ZiqniAuthOpenID.cs ../../csharp/src/Ziqni/Client/



