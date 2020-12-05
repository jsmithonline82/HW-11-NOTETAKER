
//Setting Variables
var express = require("express");
var path = require("path");
var fs = require('fs');
var util = require('util');
var app = express();
var PORT = process.env.PORT || 8000;

// Tells Express to parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));

//Setting Constructs
const writefileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
let allNotes;

