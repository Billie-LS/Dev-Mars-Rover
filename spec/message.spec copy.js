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
  // Test 1
  it("throws error if a name is NOT passed into the constructor as the first parameter", () => {
    expect(() => {
      new Message();
    }).toThrow(new Error("name required."));
  });
});
