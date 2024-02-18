const Rover = require("../rover.js");
const Message = require("../message.js");
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", () => {
  // test 7
  it("constructor sets position and default values for mode and generatorWatts", () => {
    let rover = new Rover(98382); // pass 98382 as the rover's position.
    expect(rover.position).toEqual(98382); // example position parameter value
    expect(rover.mode).toBe("NORMAL"); // constructor default 'NORMAL'
    expect(rover.generatorWatts).toEqual(110); // constructor default '110'
  });

  // test 8
  it("response returned by receiveMessage contains the name of the message", () => {
    let message = new Message("Test message name");
    let rover = new Rover(98382); // Passes 98382 as the rover's
    let response = rover.receiveMessage(message);
    expect(response.message).toBe("Test message name"); // constructor default '110'
  });
});
