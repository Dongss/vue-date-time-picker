#!/bin/bash

if [ $# != 1 ]; then
    echo "Please enter commit message"
    echo "Example:"
    echo "./deploy.sh \"update README\""

    exit 1
fi

COMMIT_MSG="$1"

echo "================================="
echo "Begin to deploy"
echo "================================="

git add . && git commit -m "${COMMIT_MSG}" && git push origin master

echo "================================="
echo "Deployed: master"
echo "================================="

git checkout gh-pages && git add . && git commit -m "${COMMIT_MSG}" && git push origin gh-pages

echo "================================="
echo "Deployed: gh-pages"
echo "================================="
