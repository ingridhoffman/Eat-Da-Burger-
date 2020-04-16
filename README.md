# Eat-De-Burger

Fun web interface that allows users to imagine and (virtually) devour their own uniquely tasty hamburgers. This Node based app follows MVC design pattern and utilizes MySQL, Express, and Handlebars.

# EmployeeTracker

A solution for managing a company's employees using node, express, inquirer, and MySQL.

## User Story

```
AS A lover of hamburgers
I WANT a webpage that lets me enter unique burger ideas
SO THAT I can (virtually) devour them
```

### Acceptance Criteria

```
GIVEN that I am a unique gourmet hamburger lover
WHEN I start the server and go to the main application page in my browser
THEN I see a nicely styled page with an input text box and submit button

WHEN I type in the name of a burger and hit submit
THEN the burger appears on the left side of the page with a unique ID number and a button to Devour It!

WHEN I click the Devour It! button
THEN the burger moves to the right side of the page

WHEN burgers have been submitted
THEN they will remain in the database even after they are devoured

```

## Installation

Install the application package

```
install_github("ingridhoffman/Eat-De-Burger")
```

Install dependencies

```
npm i
```

Install Nodemon if you do not already have it

```
npm i -g nodemon
```

Use the .sql files in the db folder to create and populate the database in MySQL

## Usage

Use nodemon to start the server

```
nodemon server.js
```

Open your browser and navigate to the local server page

### Known Issues

## Credits

Project requirements provided by:

© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
