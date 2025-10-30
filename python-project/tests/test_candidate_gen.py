import pytest
from candidate_gen import make_candidates, make_candidate

def test_should_export_a_make_candidates_function():
    """should export a make_candidates function"""
    assert callable(make_candidates), "make_candidates should be a function"