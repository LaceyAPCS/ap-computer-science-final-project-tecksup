/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.  It's intended to be used at an MLH Localhost
 * Workshop.
 *
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/mlh/mlh-localhost-hacking-with-alexa
 **/

'use strict';

var handlers = {
  'LaunchRequest': function () { //
    this.response.speak("Welcome to Magic 8 Ball, ask away!").listen("ask away!");
    this.emit(":responseReady");
  },
  'idIntent': function () {
    //Not Needed
    var gameID = this.event.request.intent.slots.gameID.value;

    //Rolls a ten sided dice, and them chooses a string to use
    var randomInt = Math.floor(Math.random() * 10);

    //These if statements take the random value and choose a response accordingly
    if (randomInt == 0) {
      this.response.speak("It is certain.");
    } else if (randomInt == 1) {
      this.response.speak("You may rely on it.");
    } else if (randomInt == 2) {
      this.response.speak("Cannot predict now.");
    } else if (randomInt == 3) {
      this.response.speak("Don't count on it.");
    } else if (randomInt == 4) {
      this.response.speak("Very doubtful.");
    } else if (randomInt == 5) {
      this.response.speak("Yes Definitely.");
    } else if (randomInt == 6) {
      this.response.speak("Ask again later.");
    } else if (randomInt == 7) {
      this.response.speak("Outlook not so good.");
    } else {
      this.response.speak("It seem's the spirits are not in your favor, and have decided to curse you!");
    }
    
    this.emit(":responseReady");
  },
 
};



// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback) {
  // Include the AWS Alexa Library.
  const Alexa = require("alexa-sdk");

  // Create an instance of the Alexa library and pass it the requested command.
  var alexa = Alexa.handler(event, context);

  // Give our Alexa instance instructions for handling commands and execute the request.
  alexa.registerHandlers(handlers);
  alexa.execute();
};