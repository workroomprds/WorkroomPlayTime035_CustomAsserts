function MT103_for_testing() {
    const validMT103 = `<?xml version="1.0" encoding="UTF-8"?>
<SwiftPayment>
  <MessageType>MT103</MessageType>
  <SenderBIC>BANKABCXXX</SenderBIC>
  <ReceiverBIC>BANKXYZYYY</ReceiverBIC>
  <TransactionReference>12345678</TransactionReference>
  <ValueDate>2023-04-15</ValueDate>
  <Amount>10000.00</Amount>
  <Currency>USD</Currency>
  <BeneficiaryName>John Doe</BeneficiaryName>
  <BeneficiaryAccount>123456789</BeneficiaryAccount>
  <BeneficiaryAddress>123 Main St, Anytown USA</BeneficiaryAddress>
  <RemittanceInformation>Payment for invoice #1234</RemittanceInformation>
</SwiftPayment>`

    let parser = new DOMParser();
    var serializer = new XMLSerializer();
    let xmlDoc = parser.parseFromString(validMT103, "text/xml");
    let xmlDoc2 = xmlDoc;

    var tagsToRemove = xmlDoc2.getElementsByTagName("SenderBIC");
    for (var i = tagsToRemove.length - 1; i >= 0; i--) {
        let node = tagsToRemove[i];
        let parent = node.parentNode;

        // Remove preceding whitespace text node if it exists
        if (node.previousSibling &&
            node.previousSibling.nodeType === Node.TEXT_NODE &&
            /^\s*$/.test(node.previousSibling.textContent)) {
            parent.removeChild(node.previousSibling);
        }

        // Remove the node itself
        parent.removeChild(node);
    }

    const invalidMT103_missing_type = serializer.serializeToString(xmlDoc2);
    const output = { "validMT103": validMT103, "invalidMT103_missing_type": invalidMT103_missing_type }
    console.log(output);
    return (output);
}

