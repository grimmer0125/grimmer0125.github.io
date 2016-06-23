---
tags:
  - docker
---
## Docker:
* 1."docker-machine create" or "docker-machine ls; docker-machine start", 2. docker-machine env default 3. eval "$(docker-machine env default)"  https://docs.docker.com/engine/installation/mac/
* docker-machine ip default.  <-get docker ip.
* docker-machine restart default. sometime you need it for connect to docker timeout. http://stackoverflow.com/questions/31990757/network-timed-out-while-trying-to-connect-to-https-index-docker-io
* docker ps -a,
* docker stop containerid,
* docker rm containerid
* docker rmi image

p.s.
sometimes need do  
a. remove all containers/images  
https://forums.meteor.com/t/aws-opsworks-meteor-docker-deployment/1937/82 and  

b.restart docker machine, and everything becomes running normal.  
https://coderwall.com/p/ewk0mq/stop-remove-all-docker-containers  

1. docker stop $(docker ps -a -q)
2. docker rm $(docker ps -a -q)
3. docker rmi -f `docker images -aq`


##Docker-compose:
docker-compose rm  
docker-compose build  
docker-compose up --force-recreate  
