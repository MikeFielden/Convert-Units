var assert = require('assert');
var cu = require('./index');

describe('Convert', function () {

	describe('from mt to lbs', function () {
		it('should handle 0', function () {
			assert.equal(0, cu.mtToPounds(0));
		});

		it('should handle decimals', function () {
			assert.equal(2425.082, cu.mtToPounds(1.1));
		});

		it('should handle negatives', function () {
			assert.equal(0, cu.mtToPounds(-1));
		});
	});

	describe('from lbs to mt', function () {
		it('should handle 0', function () {
			assert.equal(0, cu.poundsToMt(0));
		});

		it('should handle decimals', function () {
			assert.equal(1.1, cu.poundsToMt(2425.082));
		});

		it('should handle negatives', function () {
			assert.equal(0, cu.poundsToMt(-1));
		});
	});
});