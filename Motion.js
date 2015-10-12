function Motion(motorLeft, motorRight) {

	this.move = function(leftSpeed, rightSpeed) {
		motorLeft.run(leftSpeed);
		motorRight.run(rightSpeed);
	}

}

exports.Motion = Motion;