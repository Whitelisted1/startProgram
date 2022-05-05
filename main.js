var spawn = require('child_process').spawn;

const applicationPath = __dirname + "/test.js";

startApplication = spawn(applicationPath);
