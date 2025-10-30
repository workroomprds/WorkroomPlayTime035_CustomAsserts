const { expect, assert } = require('chai');

describe('candidate_gen', () => {
  let make_candidates, make_candidate;

  before(() => {
    try {
      ({ make_candidates, make_candidate } = require('../candidate_gen'));
    } catch (err) {
      make_candidates = null;
      make_candidate = null;
      assert.fail('Error while importing candidate_gen module:', err);
    }
  });

  it('should export a make_candidates function', () => {
    expect(make_candidates).to.be.a('function');
  });

});