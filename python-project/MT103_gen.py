import xml.etree.ElementTree as ET

def generate_swift_payment():
    root = ET.Element("SwiftPayment")
    ET.SubElement(root, "MessageType").text = "MT103"
    ET.SubElement(root, "SenderBIC").text = "BANKABCXXX"
    ET.SubElement(root, "ReceiverBIC").text = "BANKXYZYYY"
    ET.SubElement(root, "TransactionReference").text = "12345678"
    ET.SubElement(root, "ValueDate").text = "2023-04-15"
    ET.SubElement(root, "Amount").text = "10000.00"
    ET.SubElement(root, "Currency").text = "USD"
    ET.SubElement(root, "BeneficiaryName").text = "John Doe"
    ET.SubElement(root, "BeneficiaryAccount").text = "123456789"
    ET.SubElement(root, "BeneficiaryAddress").text = "123 Main St, Anytown USA"
    ET.SubElement(root, "RemittanceInformation").text = "Payment for invoice #1234"

    tree = ET.ElementTree(root)
    return tree

if __name__ == "__main__":
    swift_payment_xml = generate_swift_payment()
    swift_payment_xml.write("swift_payment.xml", encoding="UTF-8", xml_declaration=True)