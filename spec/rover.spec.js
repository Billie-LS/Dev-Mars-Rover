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
    let rover = new Rover(98382); // pass 98382 position parameter value
    let response = rover.receiveMessage(message);
    expect(response.message).toBe("Test message name"); // constructor default '110'
  });

  // test 9
  it("response returned by receiveMessage includes two results if two commands are sent in the message", () => {
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("STATUS_CHECK"),
    ];
    let message = new Message("Test message name", commands);
    let rover = new Rover(98382); // pass 98382 position parameter value
    let response = rover.receiveMessage(message);
    expect(response.results.length).toEqual(2);
  });

  // test 10
  it("responds correctly to the status check command", () => {
    let commands = [new Command("STATUS_CHECK")];

    let message = new Message("Test message name", commands);
    let rover = new Rover(98382); // pass 98382 position parameter value
    let response = rover.receiveMessage(message);

    // verify roverStatus included in result
    expect(response.results[0]).toHaveProperty("roverStatus");
    // verify roverStatus includes correct mode
    expect(response.results[0].roverStatus.mode).toBe("NORMAL");
    // verify roverStatus includes correct generatorWatts
    expect(response.results[0].roverStatus.generatorWatts).toEqual(110);
    // verify roverStatus includes correct position
    expect(response.results[0].roverStatus.position).toEqual(98382);
  });
});
