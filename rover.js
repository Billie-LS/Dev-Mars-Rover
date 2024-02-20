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
      // logic check if commandType is MODE_CHANGE
      if (command.commandType === "MODE_CHANGE") {
        // Respond to MODE_CHANGE command
        this.mode = command.value; // Update rover's mode to the new value specified in the command
        response.results.push({ completed: true }); // Push a completed result object

        // logic check if commandType is MOVE
      } else if (command.commandType === "MOVE") {
        // Check if the rover is in LOW_POWER mode
        if (this.mode === "LOW_POWER") {
          // Push a result object indicating the move command was not completed
          response.results.push({ completed: false });
        } else {
          // For other modes, perform the move and push a completed result object
          this.position = command.value;
          response.results.push({ completed: true });
        }

        // logic check if commandType is STATUS_CHECK
      } else if (command.commandType === "STATUS_CHECK") {
        // Respond to STATUS_CHECK command
        response.results.push({
          // Push result object with rover status
          completed: true,
          roverStatus: {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position,
          },
        });
      } else {
        // For other commands, push an empty result object
        response.results.push({});
      }
    }

    // // method receiveMessage
    // receiveMessage(message) {
    //   // create response object with values message.name and empty array for results
    //   let response = {
    //     message: message.name,
    //     results: [],
    //   };

    //   // iterate each command in message
    //   for (let command of message.commands) {
    //     // logic check if commandType is MODE_CHANGE
    //     if (command.commandType === "MODE_CHANGE") {
    //       // Respond to MODE_CHANGE command
    //       this.mode = command.value; // Update rover's mode to the new value specified in the command
    //       response.results.push({ completed: true }); // Push a completed result object

    //       // logic check if commandType is STATUS_CHECK
    //     } else if (command.commandType === "STATUS_CHECK") {
    //       // Respond to STATUS_CHECK command
    //       response.results.push({
    //         // Push result object with rover status
    //         completed: true,
    //         roverStatus: {
    //           mode: this.mode,
    //           generatorWatts: this.generatorWatts,
    //           position: this.position,
    //         },
    //       });
    //     } else {
    //       // For other commands, push an empty result object
    //       response.results.push({});
    //     }
    //   }

    // // method receiveMessage
    // receiveMessage(message) {
    //   // create response object with values message.name and empty array for results
    //   let response = {
    //     message: message.name,
    //     results: [],
    //   };

    //   // iterate each command in message
    //   for (let command of message.commands) {
    //     // logic check if commandType is STATUS_CHECK
    //     if (command.commandType === "STATUS_CHECK") {
    //       // respond to STATUS_CHECK command push result object with rover status
    //       response.results.push({
    //         completed: true,
    //         roverStatus: {
    //           mode: this.mode,
    //           generatorWatts: this.generatorWatts,
    //           position: this.position,
    //         },
    //       });
    //     } else {
    //       // For other commands, push an empty result object
    //       response.results.push({});
    //     }
    //   }

    // receiveMessage(message) {
    //   let response = {
    //     message: message.name,
    //     results: [],
    //   };
    //   for (let command of message.commands) {
    //     response.results.push({});
    //   }

    // return response object with executed commands and results
    return response;
  }
}

// export Rover class as Rover module
module.exports = Rover;
