var spawn = require('child_process').spawn;

const applicationPath = __dirname = "/test.js";
console.log("Go into the code and modify the application path.")

startApplication = spawn(applicationPath);
