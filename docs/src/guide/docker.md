# Docker

## Overview

Docker is a tool that allows you to package your application and its dependencies into a virtual container that can run on any Linux server. This provides a lightweight, isolated environment that can be easily replicated and shared. Docker containers are run from Docker images, which are built from a series of instructions contained within a Dockerfile. A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build, users can create an automated build that executes several command-line instructions in succession. This page describes how to build a Docker image for your application, and run it locally or in a cloud environment.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your local machine
- [Docker Compose](https://docs.docker.com/compose/install/) installed on your local machine

## Building a Docker image

You may refer to the official docs of Docker while building a Docker image:

- [Docker build](https://docs.docker.com/engine/reference/commandline/build/)
- [Docker image](https://docs.docker.com/engine/reference/commandline/image/)

To build a Docker image for your application, you need to create a Dockerfile. For your convenience, we have provided sample Dockerfiles for production and development environments.

## Development

The Dockerfile suitable for development environments is located in the root directory of your project. It is named dev.Dockerfile. This file is used to build a Docker image that contains your application code and all the dependencies required to run your application. The image is based on the [official Node.js image](https://hub.docker.com/_/node/).

You can customize the `dev.Dockerfile` file according to your needs. You can build the image by running the following command:

```sh
docker build -f dev.Dockerfile -t <image-name> .
```

Or you can create another Dockerfile (named Dockerfile) in the root directory of your project, copy the contents of `dev.Dockerfile` into it, and then run the following command:

```sh
docker build -t <image-name> .
```

## Production

The Dockerfile suitable for production environments is located in the root directory of your project. It is named `prod.Dockerfile`. This file is used to build a Docker image that contains your application code and all the dependencies required to run your application. The image is based on the [official Node.js image](https://hub.docker.com/_/node/).

You can customize the `prod.Dockerfile` file according to your needs. You can build the image by running the following command:

```sh
docker build -f prod.Dockerfile -t <image-name> .
```

Or you can create another Dockerfile (named `Dockerfile`) in the root directory of your project, copy the contents of `prod.Dockerfile into it, and then run the following command:

```sh
docker build -t <image-name> .
```

## Running a Docker container

You may refer to the official docs of Docker while running a Docker container:

- [Docker run](https://docs.docker.com/engine/reference/commandline/run/)
- [Docker compose](https://docs.docker.com/compose/reference/)

### Development

#### Using Docker Compose

You may create a `docker-compose.yml` file in the root directory of your project to run the container easily. For your convenience, we have provided a sample `docker-compose.dev.yml` file for the development environment. You can customize the `docker-compose.dev.yml` file according to your needs. You can run the container by running the following command:

```sh
docker compose -f docker-compose.dev.yml up -d
```

If you have created a `docker-compose.yml` file in the root directory of your project, you can run the container by running the following command:

```sh
docker compose up -d
```

#### Without Docker Compose

After building a Docker image, you can run a Docker container based on that image. To run a Docker container, you can run the following command:

```sh
docker run -d -p <host-port>:<container-port> --name <container-name> <image-name>
```

After your container is up and running, you can access your application at `http://localhost:<host-port>`.

### Production

#### Using Docker Compose

You can create a `docker-compose.prod.yml` file in the root directory of your project to run the container easily. Then, copy the contents of `docker-compose.dev.yml` into it. You need to customize the `docker-compose.prod.yml` file according to your needs, only copying the `docker-compose.dev.yml` file into the `docker-compose.prod.yml` file will not work. After updating your `docker-compose.prod.yml` file according to your needs, you can run the container by running the following command:

```sh
docker compose -f docker-compose.prod.yml up -d
```

If you have created a `docker-compose.yml` file instead in the root directory of your project, you can run the container by running the following command:

```sh
docker compose up -d
```

#### Without Docker Compose

After building a Docker image, you can run a Docker container based on that image. To run a Docker container, you can run the following command:

```sh
docker run -d -p <host-port>:<container-port> --name <container-name> <image-name>
```

## Stopping a Docker container

You may refer to the official docs of Docker on how to stop a Docker container:****

- [Docker stop](https://docs.docker.com/engine/reference/commandline/stop/)
- [Docker compose](https://docs.docker.com/compose/reference/)

#### Using Docker Compose

To stop a Docker container, you can run the following command if you have created a docker-compose.yml file in the root directory of your project:

```sh
docker compose down
```

The `docker compose down` command stops containers and removes containers, networks, volumes, and images created by `docker compose up`.

#### Without Docker Compose

To stop a Docker container, you can run the following command:

```sh
docker stop <container-name>
```

## Removing a Docker container

You may refer to [this](https://docs.docker.com/engine/reference/commandline/rm/) official doc on how to remove a Docker container.

To remove a Docker container, you can run the following command if you have not used the docker compose down command:

```sh
docker rm <container-name>
```

## Removing a Docker image

You may refer to [this](https://docs.docker.com/engine/reference/commandline/rmi/) official doc on how to remove a Docker image.

To remove a Docker image, you can run the following command:

```sh
docker rmi <image-name>
```

## Running a command in a Docker container

You may refer to [this](https://docs.docker.com/engine/reference/commandline/exec/) official doc on how to run a command in a Docker container.

To run a command in a Docker container, you can run the following command:

```sh
docker exec -it <container-name> <command>
```
