import xml.etree.ElementTree as ET

def assert_xml_structure(xml_str, expected_tags):
    """
    Asserts that the provided XML string has all the expected tags and no extra tags.

    Args:
        xml_str (str): The XML string to be tested.
        expected_tags (list): A list of expected tag names.
    """
    try:
        root = ET.fromstring(xml_str)
        for tag in expected_tags:
            assert tag in [elem.tag for elem in root.iter()], f"The expected tag '{tag}' is not present in the XML document."

        for elem in root.iter():
            assert elem.tag in expected_tags, f"The unexpected tag '{elem.tag}' is present in the XML document."
    except ET.ParseError:
        assert False, "The provided string is not a valid XML document."