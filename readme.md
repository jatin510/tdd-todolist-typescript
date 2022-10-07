# Basic TODO-LIST

## Features

- Todo list - CRUD
- Persistence
- Deployment - docker

## Entities

### TODO

- id, task , isCompleted, CreatedAt, UpdatedAt, Deadline

#### Value Object

- Task

  - should be string
  - should not be empty

- Deadline
  - Deadline should be a DateTime object
  - It should be future dateTime

### TODO List

- List of TODOs, name, id, CreatedAt, UpdatedAt

## Deployment

- github actions
  - test will run before deployment
  - build an image - on `dockerhub` or anything
  - anything will be merged into `branch` we will create image and deploy it to `server`.
- docker
- readme
