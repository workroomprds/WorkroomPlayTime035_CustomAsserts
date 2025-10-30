import xml.etree.ElementTree as ET
from MT103_gen import generateMT103
from custom_asserts import assert_xml_structure

class TestMT103Gen:
    def test_should_export_a_generate_swift_payment_function(self):
        assert callable(generateMT103)

    def test_should_generate_valid_xml(self):
        result = generateMT103()

        try:
            root = ET.fromstring(result)
            assert root is not None
        except ET.ParseError:
            assert False, "The generated string is not a valid XML document."

    def test_xml_should_be_labelled_a_swift_payment_record(self):
        result = generateMT103()
        try:
            root = ET.fromstring(result)
            assert root.tag == 'SwiftPayment'
        except ET.ParseError:
            assert False, "The valid XML document does not have the expected root tag."

    def test_xml_structure_is_correct(self):
        result = generateMT103()
        expected_tags = ['SwiftPayment', 'MessageType', 'SenderBIC', 'ReceiverBIC', 'TransactionReference', 'ValueDate', 'Amount', 'Currency', 'BeneficiaryName', 'BeneficiaryAccount', 'BeneficiaryAddress', 'RemittanceInformation']
        assert_xml_structure(result, expected_tags)