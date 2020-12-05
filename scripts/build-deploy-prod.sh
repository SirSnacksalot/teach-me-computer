#!/bin/bash

cd $(dirname $0)

echo 'Building frontend...'
bash ./build-frontend.sh;
echo 'Building prod jar...'
bash ./build-prod.sh;
echo 'Built! Deploying to server...'
bash ./deploy-prod.sh;
echo 'Woohoo! Deployed :)'