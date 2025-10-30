const generateMT103 = function() {
    const validrecord = `<?xml version="1.0" encoding="UTF-8"?>
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
    return(validrecord);
}

module.exports = { generateMT103 };