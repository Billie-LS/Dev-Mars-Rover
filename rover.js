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
      response.results.push({});
    }
    return response;
  }
}

module.exports = Rover;
