const Message = require("../message.js");
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
/*
Message Class Description
Message class builds object with two properties:
constructor(name, commands)
name is a string that is the name of the message.
commands is an array of Command objects.
*/
describe("Message class", () => {
  // Test 4
  it("throws error if a name is NOT passed into the constructor as the first parameter", () => {
    expect(() => {
      new Message();
    }).toThrow(new Error("Message name required."));
  });

  // Test 5
  it("constructor sets name", () => {
    let testName = "Test message with two commands";
    let message = new Message(testName);
    expect(message.name).toBe(testName);
  });

  // Test 5
  it("constructor sets name", () => {
    let message = new Message("Test message with two commands");
    expect(message.name).toBe("Test message with two commands");
  });

  // Test 6
  it("contains a commands array passed into the constructor as the 2nd argument", () => {
    let commands = [
      new Command("MODE_CHANGE", "LOW_POWER"),
      new Command("STATUS_CHECK"),
    ];
    let message = new Message("Test message with two commands", commands);
    expect(message.commands).toEqual(commands);
  });

  // // Test 6
  // it("contains a commands array passed into the constructor as the 2nd argument", () => {
  //   let commands = [
  //     new Command("MODE_CHANGE", "LOW_POWER"),
  //     new Command("STATUS_CHECK"),
  //   ];
  //   let message = new Message("Test message with two commands", commands);
  //   expect(message.commands).toEqual([
  //     new Command("MODE_CHANGE", "LOW_POWER"),
  //     new Command("STATUS_CHECK"),
  //   ]);
  // });
});
