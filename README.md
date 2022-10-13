# Alticci

## Application to calculate Alticci sequence

Alticci-UI is an angular frontend application for integration with Alticci-API to calculate the alticci sequence.

The Alticci sequence - a(n) - is defined by:

```
n=0 => a(0) = 0
n=1 => a(1) = 1
n=2 => a(2) = 1
n>2 => a(n) = a(n-3) + a(n-2)
```

Examples - the top 10:

```
0
1
1
1
2
2
3
4
5
7
9
```

## What do you need to know

This tutorial was made with commands on Windows but the commands used can be used on other OS as long as the necessary
modifications are made. To run the application you must have nodejs and angular-cli installed or docker because you will
need to run the command `npm istall`, `ng serve` or `docker run` respectively.

## How to run the project using java directly

- Go to `alticci-ui` folder;
- run command to install project's dependencies:

```sh
npm install
```

- run command to start server:

```sh
ng serve
```

## How to run the project using docker

- Go to `alticci-ui` folder;
- run command to build, create image and run the project:

```sh
./start_using_docker.sh
```

> Note: To stop and clear docker container and images run the command `./stop_using_docker.sh`

## How to use

If all commands were executed without error, go to the browser and access a URL <http://localhost:4200>

## Features

| Feature | Situation |
| ------ | ------ |
| Create angular application | Done |
| Create calculation component | Done |
| Create routes | Done |
| Integration with alticci-api | Done |
| Create documentation (README.md) | In process |
