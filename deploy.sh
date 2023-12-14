#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout main
git add -A
git commit -m 'deploy'

# if you are deploying to https://yiting99928.github.io
# git push -f git@github.com:yiting99928/yiting99928.github.io.git main

# if you are deploying to https://yiting99928.github.io/cookie-shop
git push -f git@github.com:yiting99928/cookie-shop.git main:gh-pages

cd -