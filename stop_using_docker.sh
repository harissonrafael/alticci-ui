#!/bin/bash
echo '########## REMOVING THE DOCKER IMAGE ##########'
docker stop alticci-ui
docker rm alticci-ui
docker rmi alticci-ui
