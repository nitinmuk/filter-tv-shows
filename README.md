# Filter TV Shows
[![](https://img.shields.io/badge/License-MIT-green)](#license)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Description
* It exposes a post route which can be used to send shows and returns the filetered shows where DRM is true and episode count is more than zero.
* The returned response has an array of objects against response key where each object represents a filtered show and have fields image, slug and title.
* Find the application live on Heroku [here](https://nitin-mukesh-coding-submission.herokuapp.com/show/drm-enabled-shows).

## Table of Contents
* [Installation](#installation)
* [Tests](#tests)
* [Technologies](#technologies)
* [URL](#url)
* [License](#license)
* [Questions](#questions)

## Installation
Please clone/fork repository and run npm install and execute "npm start".

## Tests
Basic test cases has been implemented for this application.

## Technologies
* Node
* Express
* body-parser
* @hapi/joi
* Jest
* Sinon

## URL
https://nitin-mukesh-coding-submission.herokuapp.com/show/drm-enabled-shows

## License
This application is covered by [MIT](./LICENSE) license

## Questions
* Please raise a request at [github](https://github.com/nitinmuk)
* For any private question/enquiry, please reach out to my email: nitinmukes@gmail.com





