const Message = require("../message1.js");
const Command = require("../command1.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function () {
  // Test 4
  // TODO: description here
  it("throws error if a name is NOT passed into the constructor as the first parameter", function () {
    expect(function () {
      new Message();
    }).toThrow(new Error("Message name required."));
  });

  // Test 5
  // TODO: description here
  it("constructor sets name", function () {
    const message = new Message("Test message with two commands");
    expect(message.name).toEqual("Test message with two commands");
  });

  // Test 6
  // TODO: description here
  it("contains a commands array passed into the constructor as the 2nd argument", function () {
    // const message = new Message("Test message with two commands", 7);

    const commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("STATUS_CHECK"),
    ];
    const message = new Message("Test message with two commands", commands);
    expect(message.name).toEqual("Test message with two commands", commands);
  });
});