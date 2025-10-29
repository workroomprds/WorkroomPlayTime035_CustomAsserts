const { expect } = require('chai');
const { DOMParser } = require('@xmldom/xmldom');

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

  it('should generate valid XML', () => {
    const result = generateMT103();
    const parser = new DOMParser();
    const doc = parser.parseFromString(result, 'text/xml');

    // Check for parse errors
    const parseError = doc.getElementsByTagName('parsererror');
    expect(parseError.length).to.equal(0);

    // Check root element exists
    expect(doc.documentElement).to.exist;

  });

  it('XML should be labelled a SwiftPayment record', () => {
    const result = generateMT103();
    const parser = new DOMParser();
    const doc = parser.parseFromString(result, 'text/xml');

    // Check root element name
    expect(doc.documentElement.nodeName).to.equal('SwiftPayment');
  });
});
