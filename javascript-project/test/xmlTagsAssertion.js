const { DOMParser } = require('@xmldom/xmldom');

// Add custom Chai assertion
module.exports = function(chai, utils) {
  const Assertion = chai.Assertion;

  Assertion.addMethod('containXmlTags', function(expectedTags) {
    const xmlString = this._obj;
    
    // Parse the XML
    const parser = new DOMParser();
    const doc = parser.parseFromString(xmlString, 'text/xml');
    
    // Check for parse errors
    const parseError = doc.getElementsByTagName('parsererror');
    this.assert(
      parseError.length === 0,
      'XML is not valid - contains parse errors',
      'XML is valid'
    );
    
    // Track missing and found tags
    const missingTags = [];
    const foundTags = [];
    
    // Check each expected tag
    expectedTags.forEach(tagName => {
      const elements = doc.getElementsByTagName(tagName);
      if (elements.length === 0) {
        missingTags.push(tagName);
      } else {
        foundTags.push(tagName);
      }
    });
    
    // Create detailed error message
    const errorMessage = missingTags.length > 0
      ? `Expected XML to contain all tags, but missing: [${missingTags.join(', ')}]`
      : '';
    
    const negatedMessage = foundTags.length > 0
      ? `Expected XML to not contain tags, but found: [${foundTags.join(', ')}]`
      : '';
    
    this.assert(
      missingTags.length === 0,
      errorMessage,
      negatedMessage
    );
  });
};