// Import the Command class from the command.js file
const Command = require("../command.js");

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

// describe Command class unit tests
describe("Command class", function () {
  // Test 1
  // Throws error if command type NOT passed into constructor as first parameter
  it("throws error if command type is NOT passed into constructor as the first parameter", function () {
    expect(function () {
      new Command();
    }).toThrow(new Error("Command type required."));
  });

  // Test 2
  // constructor sets command type
  it("constructor sets command type", function () {
    // new Command instance with commandType "MOVE"
    const command = new Command("MOVE");
    // expect commandType property of command object is "MOVE"
    expect(command.commandType).toEqual("MOVE");
  });

  // it("constructor sets command type", function() {
  //   expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  // });

  // Test 3
  // constructor sets value passed as 2nd argument
  it("constructor sets a value passed in as the 2nd argument", function () {
    // new Command instance with commandType "MOVE" and value 7
    const command = new Command("MOVE", 7);
    // expect value property of command object to be 7
    expect(command.value).toEqual(7);
  });
});
