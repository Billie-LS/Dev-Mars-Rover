class Rover {
  constructor(position) {
    this.position = parseFloat(position); // position is number
    this.mode = "NORMAL"; // constructor sets default mode
    this.generatorWatts = 110; // constructor sets default generatorWatts
  }
}

module.exports = Rover;
