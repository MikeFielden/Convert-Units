'use strict';
var _ = require('lodash')
	, poundsInMt = 2204.62;

function convertInput (input) {
	if (!_.isNumber(input)) {
		input = +input;

		if (!_.isNaN(input)) {
			throw new Error('The input wasnt a number');
		}
	}

	return input;
}


module.exports = {
	mtToPounds: function (input) {
		input = convertInput(input);

		return input * poundsInMt;
	},

	poundsToMt: function (input) {
		input = convertInput(input);

		return input/poundsInMt;
	}
};
