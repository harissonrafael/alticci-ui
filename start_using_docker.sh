#!/bin/bash
echo '########## REMOVING THE DOCKER IMAGE ##########'
docker stop alticci-ui
docker rm alticci-ui
docker rmi alticci-ui_image

echo '########## BUILDING THE DOCKER IMAGE ##########'
docker build --tag alticci-ui_image .

echo '########## RUNNING THE DOCKER IMAGE ##########'
docker run -p 4200:80 --name alticci-ui alticci-ui_image
