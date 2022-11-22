#!/bin/bash
#
# Export expo script

ACCOUNT_NAME="timivietnam"
PROJECT_NAME="reveneus"

# Clear before build
rm -rf ./dist

# Execute for build expo run files
expo export --public-url https://${ACCOUNT_NAME}.github.io/${PROJECT_NAME}

cp -r ./landing/* ./dist

cd ./dist

git init
git add -A
git commit -m "Deploy"
git remote add origin git@github.com:${ACCOUNT_NAME}/${PROJECT_NAME}.git
git push origin master --force
