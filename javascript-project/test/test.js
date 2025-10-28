const { expect } = require('chai');
const { add, multiply } = require('../index');

describe('Math Functions', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).to.equal(5);
    });
    
    it('should add negative numbers', () => {
      expect(add(-1, -1)).to.equal(-2);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers', () => {
      expect(multiply(3, 4)).to.equal(12);
    });
  });
});
