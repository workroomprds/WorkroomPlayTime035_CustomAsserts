import xml.etree.ElementTree as ET
from MT103_gen import generate_swift_payment


class TestMT103Gen:
    def test_should_export_a_generate_swift_payment_function(self):
        assert callable(generate_swift_payment)

    def test_should_generate_valid_xml(self):
        result = generate_swift_payment()
        assert isinstance(result, ET.ElementTree)
        
        root = result.getroot()
        assert root is not None
        
        xml_string = ET.tostring(root, encoding='unicode')
        ET.fromstring(xml_string)

    def test_xml_should_be_labelled_a_swift_payment_record(self):
        result = generate_swift_payment()
        root = result.getroot()
        
        assert root.tag == 'SwiftPayment'
