/*
Rover
Rover receives a message object, 
updates its properties from the message, and 
returns the results.
class builds rover object with properties, and 
also contains function outside constructor to handle updates to properties.

constructor(position)

position is a number representing the rover’s position.
Sets this.position to position
Sets this.mode to 'NORMAL'
Sets the default value for generatorWatts to 110
receiveMessage(message)

message is a Message object
Returns an object containing at least two properties:
message: the name of the original Message object
results: an array of results. Each element in the array is an object that corresponds to one Command in message.commands.
Updates certain properties of the rover object
*/
class Rover {
  constructor(position) {
    // constructor sets position to provided argument; parse to number
    this.position = parseFloat(position); // position is number

    // constructor sets mode to fixed default "NORMAL"
    this.mode = "NORMAL"; // default mode = "NORMAL"

    // constructor sets generatorWatts to fixed default 110
    this.generatorWatts = 110; // default generatorWatts = 110
  }
  receiveMessage(message) {
    // create response object with values message.name and empty array for results
    let response = {
      message: message.name,
      results: [],
    };

    // iterate each command in message
    for (let command of message.commands) {
      // switch statement to evaluate different commandType values
      switch (command.commandType) {
        case "MODE_CHANGE":
          // respond to commandType MODE_CHANGE
          this.mode = command.value; // update rover's mode to new value specified in command
          response.results.push({ completed: true }); // push completed results object
          break;

        case "MOVE":
          // ternary operator determines completed status per rover mode
          const completed = this.mode !== "LOW_POWER";
          // push results object indicating move command completed
          response.results.push({ completed: completed ? true : false });
          // update position if rover not LOW_POWER mode
          if (completed) {
            this.position = command.value;
          }
          break;

        case "STATUS_CHECK":
          // respond to commandType STATUS_CHECK
          response.results.push({
            // push results object with rover status
            completed: true,
            roverStatus: {
              mode: this.mode,
              generatorWatts: this.generatorWatts,
              position: this.position,
            },
          });
          break;

        default:
          // respond to any other commandType
          response.results.push({}); // push empty results object
          break;
      }
    }

    // return response object with executed commands and results
    return response;
  }
}
// export Rover class as Rover module
module.exports = Rover;
