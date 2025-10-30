import xml.etree.ElementTree as ET
from MT103_gen import generateMT103


class TestMT103Gen:
    def test_should_export_a_generate_swift_payment_function(self):
        assert callable(generateMT103)

    def test_should_generate_valid_xml(self):
        result = generateMT103()
        assert isinstance(result, ET.ElementTree)
        
        root = result.getroot()
        assert root is not None
        
        xml_string = ET.tostring(root, encoding='unicode')
        ET.fromstring(xml_string)

    def test_xml_should_be_labelled_a_swift_payment_record(self):
        result = generateMT103()
        root = result.getroot()
        
        assert root.tag == 'SwiftPayment'
