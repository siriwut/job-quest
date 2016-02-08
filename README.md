Welcome to TakeMeTour's Job Quest
===

Thank you for your application. First, we would like to take a simple test on your JavaScript skill. 

Choose to do one (or both) of frontend and backend tasks. Please fork me and submit your repository at [WantToWork@takemetour.com](mailto:WantToWork@takemetour.com) by **Monday February 8th, 2016 23:59 GMT+7**. 

Frontend Task
---
![Designed page](https://raw.github.com/PanJ/job-quest/master/frontend/design.png)

- Given the [designed page](https://raw.github.com/PanJ/job-quest/master/frontend/design.png), please write HTML and CSS accordingly
- Font used is [Roboto](https://www.google.com/fonts#UsePlace:use/Collection:Roboto)
- Please take a look at API [https://www.takemetour.com/api/home](https://www.takemetour.com/api/home) and use data from the API to display the inspiration section using JavaScript

**Bonus points**

- Write the stylesheet in SASS
- Support mobile screen (responsive)
- Use Browserify or Webpack

**Question**

Please explain what is single-page application and how it work. Give examples of tools used to make SPAs.

SPAs is web application that load html document at once time and update page dynamically without
page reload by use AJAX to fetch data and new pages.

SPAs such as AngularJS, Backbond.js and etc...

Backend Task
---
- Develop a simple API to serve trip information
- API endpoints consists of
  - `GET /trips` list all trips (only trip `name` and `_id`)
  - `POST /trips` create new trip
  - `GET /trips/:id` get trip detail (all fields)
  - `PUT /trips/:id` update trip
  - `DELETE /trips/:id` delete trip
- Trip data consists of
  - `String` name
  - `Number` price
  - `String` description

**Bonus points**

- Use promise instead of async callback
- Use ES2015 syntax

**Question**

What is the difference between MongoDB and MySql?

- MongoDB is NoSQL database (none-relational), but MySql is relational database.
- MongoDB provide way to manipulate none-structured database based on document-oriented (similar with JSON document).
- MongoDB manipulate huge volume of data collections not depend on fields or tables relation (easy to scalability).
- MySql manipulate data collections depend on structured of fields or tables relation, hard to scale set of fields if there are large of data. 