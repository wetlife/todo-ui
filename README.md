# TODO UI Starter

A simple starter kit for creating a CRUD Todo Application. This is meant as the starting point for the [Code Corvallis Meetup](https://www.meetup.com/preview/Code-Corvallis) JavaScript sessions learning more about JavaScript.

Packages like webpack and Babel were purposely left out to focus on creating the application. Later projects may add webpack, Babel and/or other API's and packages. Many details are left out and meant as discussion points.

The goal is to write a simple Todo type application with a pre-selected set of packages. A seperate project will be used to create the backend.

Recommended Steps:
1. Fork this project and modify as desired (Add to your own github account)
1. Run `npm install` to install the packages
1. Run `npm start` to validate everything is installed and runs
1. Design a prototype UI. See `poc` for a starting point
1. Start implementing

Considerations:
* Handling CRUD Operations
* Error Handling
* Usability

# Packages

| Name | Description |
|------|-------------|
| [Vue](https://vuejs.org/) | JavaScript Framework |
| [Bulma](http://bulma.io/) | CSS Framework |
| [Axios](https://github.com/axios/axios) | HTTP client |
| [ESLint](https://eslint.org/) | JavaScript Linter |
| [JSON Server](https://github.com/typicode/json-server) | REST API Faker | 
| [JSON Schema Faker](https://github.com/json-schema-faker/json-schema-faker) | JSON Faker |
| [Live Server](https://github.com/tapio/live-server) | Test HTTP Server |
| [npm-run-all](https://github.com/mysticatea/npm-run-all) | Run Multiple NPM Scripts |
| [Rimraf](https://github.com/isaacs/rimraf) | rm -rf util for node |
| [Chalk](https://github.com/chalk/chalk) | Terminal Styler |

# Data Model
Initial Data Model:

| Field | Type | Notes|
|-------|------|------|
| id | number | primary key |
| priority | string | Values: Low, Medium, High |
| status | string | Values: New, In Progress, Done, Canceled |
| category | string | Values: Home, Work, Other |
| title | string | |
| description | string | |
| created | date/time | Timestamp created on server |
| lastUpdated | date/time | Timestamp updated on server |