"use strict";

var _ = require('lodash');
var Alexa = require('alexa-app');

// Allow this module to be reloaded by hotswap when changed
module.change_code = 1;

var app = new Alexa.app('vanity');

//
var lookStrings = [
    "You look marvelous",
    "You look amazing",
    "You've never looked better",
    "You are so good looking",
    "You look great to me, but then I don't have eyes",
    "A brave new look for you",
    "Do you really want to know?",
    "To be honest you've looked better",
    "If you have to ask you already know the answer"
];

//
var hairStrings = [
    "Your hair looks radiant!",
    "It has never looked better",
    "I like the new color!",
    "Very trendy style",
    "I saw the same style on TV the other day"
];

//
var outfitStrings = [
    "That fits you perfectly",
    "That outfit was made for you",
    "Very trendy look",
    "The color suits you pefectly",
    "I have one just like it",
    "I admire you for taking the chance on that outfit"
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
    "utterances": ['How does this {dress|outfit|suit} look', 'Does this {dress|outfit|suit} fit', 'How this {dress|outfit|suit} looks']
}, function(req, res){
    var str = getRandomStr(dressStrings);
    res.say(str);
});

module.exports = app;
