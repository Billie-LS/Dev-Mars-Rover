// import Rover class from rover.js
const Rover = require("./rover.js");
// import Message class from message.js
const Message = require("./message.js");
// import Command class from command.js
const Command = require("./command.js");

// it("Responds to TA message & commands", function() {
//   let rover = new Rover(100);
//   let commands = [
//      new Command('MOVE', 4321),
//      new Command('STATUS_CHECK'),
//      new Command('MODE_CHANGE', 'LOW_POWER'),
//      new Command('MOVE', 3579),
//      new Command('STATUS_CHECK')
//   ];
//   let message = new Message('TA power', commands);
//   let response = rover.receiveMessage(message);
//   expect(response.message).toEqual('TA power');
//   expect(response.results[0].completed).toBeTruthy();
//   expect(response.results[1].roverStatus.position).toEqual(4321);
//   expect(response.results[2].completed).toBeTruthy();
//   expect(response.results[3].completed).toBeFalsy();
//   expect(response.results[4].roverStatus.position).toEqual(4321);
//   expect(response.results[4].roverStatus.mode).toEqual('LOW_POWER');
//   expect(response.results[4].roverStatus.generatorWatts).toEqual(110);
//  });

// generate Rover object with specified position
// const rover = new Rover(98382); // pass 98382 as the rover's position.
let rover = new Rover(100);
let commands = [
  new Command("MOVE", 4321),
  new Command("STATUS_CHECK"),
  new Command("MODE_CHANGE", "LOW_POWER"),
  new Command("MOVE", 3579),
  new Command("STATUS_CHECK"),
];
// generate Message object with specified name and array of two commands
// const message = new Message("Test message name", [
//   new Command("STATUS_CHECK"),
//   new Command("MOVE", 100),
// ]);
let message = new Message("TA power", commands);

// call receiveMessage method on Rover object with message
const response = rover.receiveMessage(message);

console.log(JSON.stringify(response, null, 2));
