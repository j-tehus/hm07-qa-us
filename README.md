# Sprint 7 Project
> Jennifer Teh

In this project, I tested GET, POST, PUT, and DELETE request endpoints for Urban Grocers kits.  I tested response status codes and response body content in two separate tests for each endpoint.  

Software needed to run:  Node.js, npm

Setup for running tests:
-Clone the repository to a directory
-In the terminal, in the directory, run the command "npm install"
-Start the TripleTen server and copy the address
-Paste the server address in the "config.js" file under "API_URL" variable
-To run all tests together, run the "npx jest" command in the terminal
-The tests can be run separately in VS Code using the following commands:
    get: npx jest getHandlers.test.js
    post: npx jest postHandlers.test.js
    put: npx jest putHandlers.test.js
    delete: npx jest deleteHandlers.test.js

Expected results:
-All 8 tests are supposed to return PASS

Coding style:
-camelCase is used
-No unnecessary variables have been declared
-Every variable name describes the value saved in it
-No unnecessary comments have been made
-No "console.log" have been used
-Each test has a descriptive title

Link to my project: https://github.com/j-tehus/hm07-qa-us.git

Credits:  I tested using Visual Studio Code.  I also used Postman, API Docs, and Swagger. 