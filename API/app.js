/*
        *File: app.js
        *Author: Asad Memon / Osman Ali Mian
        *Last Modified: 5th June 2014
        *Revised on: 30th June 2014 (Introduced Express-Brute for Bruteforce protection)
*/


var express = require('express');
var arr = require('./compilers');
var sandBox = require('./DockerSandbox');
var app = express.createServer();
var port=5000;

app.use(express.static(__dirname));
app.use(express.bodyParser());

app.all('*', function(req, res, next)
{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
});

function random(size) {
    //returns a crypto-safe random
    return require("crypto").randomBytes(size).toString('hex');
}


app.post('/compile',function(req, res)
{

    var language = req.body.language;
    var workspace_path = req.body.workspace_path;
    var target_file = req.body.target_file;
    var stdin = req.body.stdin;

    var folder= 'temp/' + random(10); //folder in which the temporary folder will be saved
    var path=__dirname+"/"; //current working path
    var vm_name='virtual_machine'; //name of virtual machine that we want to execute
    var timeout_value=5;//Timeout Value, In Seconds

    //details of this are present in DockerSandbox.js
    var sandboxType = new sandBox(timeout_value, path, folder, vm_name, arr.compilerArray[language][0], workspace_path, target_file, arr.compilerArray[language][1], arr.compilerArray[language][2], stdin);


    //data will contain the output of the compiled/interpreted code
    //the result maybe normal program output, list of error messages or a Timeout error
    sandboxType.run(function(data,exec_time,err)
    {
        // console.log("Data: received: "+ data)
    	res.send({output:data, langid: language, errors:err, time:exec_time});
    });

});


app.get('/', function(req, res)
{
    res.sendfile("./index.html");
});

console.log("Listening at "+port)
app.listen(port);
