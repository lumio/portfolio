#!/bin/bash

if ! [ -f "Dockerfile" ]; then
  echo "Cannot find Dockerfile in current work directory!"
  exit 1
fi

docker build -t portfolio-graphql .
docker_run_id=$(docker run -v "$(pwd)/graphql":/var/www/html/graphql -d -p 127.0.0.1:3030:80 --name portfolio-graphql-app portfolio-graphql)

function ctrl_c() {
  echo -e "\nCleaning up docker stuff..."
  docker stop "$docker_run_id" > /dev/null
  docker rm "$docker_run_id" > /dev/null
  exit
}

trap ctrl_c INT
echo "Hit Ctrl+C to quit"
while true; do sleep 1; done
