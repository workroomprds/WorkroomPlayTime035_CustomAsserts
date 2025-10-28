const { expect } = require('chai');
const { parseStringPromise } = require('xml2js');

describe('MT103_gen', () => {
  let generateMT103;

  before(() => {
    try {
      ({ generateMT103 } = require('../MT103_gen'));
    } catch (err) {
      generateMT103 = null;
    }
  });

  it('should export a generateMT103 function', () => {
    expect(generateMT103).to.be.a('function');
  });

  it('should return valid XML', async () => {
    const result = generateMT103();
    expect(result).to.be.a('string');
    
    await expect(parseStringPromise(result)).to.not.be.rejected;
  });

  it('should generate well-formed XML with root element', async () => {
    const result = generateMT103();
    const parsed = await parseStringPromise(result);
    expect(parsed).to.be.an('object');
    expect(Object.keys(parsed)).to.have.lengthOf.at.least(1);
  });
});
