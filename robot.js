var Cylon = require("cylon");
var Motor = require("./Motor.js").Motor;
var Motion = require("./Motion.js").Motion;

Cylon.robot({
  connections: {
    raspi: {
      adaptor: 'raspi'
    }
  },

  devices: {
    // led: {
    //   driver: 'led',
    //   pin: 11
    // }
    motorLeftForward: {
      driver: 'motor',
      pin: 11
    },
    motorLeftBackward: {
      driver: 'motor',
      pin: 12
    },
    motorRightForward: {
      driver: 'motor',
      pin: 13
    },
    motorRightBackward: {
      driver: 'motor',
      pin: 14
    }
  },

  work: function(my) {
    var motorLeft = new Motor(my.motorLeftForward, my.motorLeftBackward, "motorLeft");
    var motorRight = new Motor(my.motorRightForward, my.motorRightBackward, "motorRight");
    var motion = new Motion(motorLeft, motorRight);
    motion.move(100, 100);

    every((1).second(), my.motorLeftForward.toggle);
  }
}).start();