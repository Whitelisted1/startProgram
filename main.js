var spawn = require('child_process').spawn;
var startApplication;

 // startApplication = spawn(__dirname + "/mac.command"); // MAC
 // startApplication = spawn(__dirname + "/windows.bat"); // WINDOWS

 text = [
   "Go into the code and uncomment the proper line depending on your operating system",
   "Then go into the corresponding file (.bat for windows and .command for mac)",
   "And replace 'path' with the application path"
 ]

 console.log(text)
