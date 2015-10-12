function Motor(motorDefinitionForward, motorDefinitionBackwards, motorName) {

	/*
	Set speed from -255 to 255
	*/
	this.run = function(speed) {
		console.log("Setting " + motorName + " to value " + speed);
		if (speed > 0 && speed <= 255) {
			motorDefinitionBackwards.turnOff;
			motorDefinitionForward.speed(speed);
		} else if (speed >= -255 && speed < 0) {
			motorDefinitionForward.turnOff;
			motorDefinitionBackwards.speed(speed * -1);
		} else if (speed == 0) {
			motorDefinitionBackwards.turnOff;
			motorDefinitionForward.turnOff;
		} else {
			console.error("Speed " + speed + " Is not a valid value in motor with name " + motorName);
		}
	}
}

exports.Motor = Motor;