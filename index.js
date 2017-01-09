"use strict";

var _ = require('lodash');
var Alexa = require('alexa-app');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

var app = new Alexa.app('vanity');

//
var lookStrings = [
    "You look marvelous",
    "You look amazing"
];

//
var hairStrings = [
    "Your hair looks radiant!",
    "It has never looked better"
];

//
var dressStrings = [
    "That dress fits you perfectly",
    "That dress was made for you"
];

//
//
//
function rand(min, max) {
    return Math.floor((Math.random() * max) + min);
}

//
//
//
function getRandomStr(strList) {
    var index = rand(0, strList.length);
    console.log(index, strList.length);
    return strList[index];
}

//
//
//
app.launch(function(req, res) {
    var prompt = 'Hi there, what would you like to know?';
    res.say(prompt).reprompt(prompt).shouldEndSession(false);
});

//
//
//
app.intent('LooksIntent', {
    "utterances": ['How {|do} I look']
}, function(req, res){
    var str = getRandomStr(lookStrings);
    res.say(str);
});

//
//
//
app.intent('HairIntent', {
    "utterances": ['How does my hair look', 'How is my hair']
}, function(req, res){
    var str = getRandomStr(hairStrings);
    res.say(str);
});

//
//
//
app.intent('DressIntent', {
    "utterances": ['How does this dress look', 'Does this dress fit']
}, function(req, res){
    var str = getRandomStr(hairStrings);
    res.say(str);
});

module.exports = app;
