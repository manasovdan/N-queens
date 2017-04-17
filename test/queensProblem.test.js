const { describe, it } = require('mocha');
const assert = require('assert');
const queens = require('../queensProblem');


describe('N-Queens tests', () => {
  describe('#isSafe()', () => {
    it('should return false if it is not safe to put queen', () => {
      assert.equal(false, queens.isSafe([1, 5, 8], 1));
      assert.equal(false, queens.isSafe([1, 5, 8], 3));
      assert.equal(false, queens.isSafe([1, 5, 8], 4));
      assert.equal(false, queens.isSafe([1, 5, 8], 7));
    });
    it('should return true if it is safe to put queen', () => {
      assert.equal(true, queens.isSafe([1, 5, 8], 2));
      assert.equal(true, queens.isSafe([1, 5, 8], 6));
    });
  });
  describe('#countSolutions', () => {
    it('should return correct value for N', () => {
      assert.equal(2, queens.countSolutions(4));
      assert.equal(10, queens.countSolutions(5));
      assert.equal(4, queens.countSolutions(6));
    });
  })
});