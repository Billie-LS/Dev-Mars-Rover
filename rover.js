class Rover {
  constructor(position) {
    this.position = parseFloat(position); // position is number
    this.mode = "NORMAL"; // constructor sets default mode
    this.generatorWatts = 110; // constructor sets default generatorWatts
  }
  receiveMessage(message) {
    let response = {
      message: message.name,
      results: [],
    };
    for (let command of message.commands) {
      if (command.commandType === "STATUS_CHECK") {
        // Respond to STATUS_CHECK command
        response.results.push({
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
    // receiveMessage(message) {
    //   let response = {
    //     message: message.name,
    //     results: [],
    //   };
    //   for (let command of message.commands) {
    //     response.results.push({});
    //   }
    return response;
  }
}

module.exports = Rover;
