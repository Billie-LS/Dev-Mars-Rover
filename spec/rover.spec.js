const Rover = require("../rover.js");
const Message = require("../message.js");
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", function () {
  // test 7
  it("constructor sets position and default values for mode and generatorWatts", function () {
    let rover = new Rover(9832);
    expect(rover.position).toEqual(9832);
    expect(rover.mode).toBe("NORMAL");
    expect(rover.generatorWatts).toEqual(110);
  });
  it("response returned by receiveMessage contains the name of the message", function () {
    let message = new Message("Test message with two commands", commands);
    let rover = new Rover(9832);
    let response = rover.receiveMessage(message);
    expect(response.message).toEqual("Test message with two commands");
  });
});

/*
“constructor sets position and default values for 
mode and generatorWatts”.
*/
