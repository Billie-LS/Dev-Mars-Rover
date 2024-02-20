// import Rover class from rover.js
const Rover = require("./rover.js");
// import Message class from message.js
const Message = require("./message.js");
// import Command class from command.js
const Command = require("./command.js");

// Create a new Rover instance with an initial position
const rover = new Rover(98382);

// Create a new Message instance with commands
const message = new Message("Test message name", [
  new Command("STATUS_CHECK"),
  new Command("MOVE", 100),
]);

// Receive and process the message by the Rover
const response = rover.receiveMessage(message);

console.log(JSON.stringify(response, null, 2));
