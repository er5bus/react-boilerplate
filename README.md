## Overview
A react boilerplate using redux.
This boilerplate shows how you can approach React development using modules.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

## Project Requirements:

In order to get the project running you need to install:

* docker

#### Install Docker:

Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.

[Get Docker](https://docs.docker.com/get-docker/).

## Setting the Project Locally:

#### Cloning the project:

Once you have all the needed requirements installed, clone the project:

``` bash
git clone git@bitbucket.org:predict-a/treedecisioncreator-front.git
```

#### Configure .env file:

Before you can run the project you need to set the envirment varibles:

``` env
NODE_ENV=production # development

REACT_APP_API_BASE_URL=http://0.0.0.0:5000 # backend base url
```

#### Run the Project:

to run the project type:

``` bash
docker-compose up --build -d
```

Check 0.0.0.0:3000 on your browser!

That's it.
