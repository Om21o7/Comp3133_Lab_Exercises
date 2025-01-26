const chai = require('chai');
const expect = chai.expect;
const calculator = require('../app/calculator');

describe('Calculator Tests', () => {
  describe('Addition', () => {
    it('should return 7 when adding 5 and 2 (PASS)', () => {
      expect(calculator.add(5, 2)).to.equal(7);
    });

    it('should not return 8 when adding 5 and 2 (FAIL)', () => {
      expect(calculator.add(5, 2)).to.not.equal(8);
    });
  });

  describe('Subtraction', () => {
    it('should return 3 when subtracting 2 from 5 (PASS)', () => {
      expect(calculator.sub(5, 2)).to.equal(3);
    });

    it('should not return 5 when subtracting 2 from 5 (FAIL)', () => {
      expect(calculator.sub(5, 2)).to.not.equal(5);
    });
  });

  describe('Multiplication', () => {
    it('should return 10 when multiplying 5 and 2 (PASS)', () => {
      expect(calculator.mul(5, 2)).to.equal(10);
    });

    it('should not return 12 when multiplying 5 and 2 (FAIL)', () => {
      expect(calculator.mul(5, 2)).to.not.equal(12);
    });
  });

  describe('Division', () => {
    it('should return 5 when dividing 10 by 2 (PASS)', () => {
      expect(calculator.div(10, 2)).to.equal(5);
    });

    it('should not return 2 when dividing 10 by 2 (FAIL)', () => {
      expect(calculator.div(10, 2)).to.not.equal(2);
    });
  });
});
