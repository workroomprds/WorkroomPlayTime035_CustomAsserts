import random

def make_candidate(type = "base", value = "0", state = "inactive"):
    return {"type": type, "value": value, "state": state}

def make_candidates():
    def build_candidates(set_list):
        types = ["base", "high", "mighty"]
        states = ["inactive", "active", "suspended", "removed"]
        output = []

        for el in set_list:
            type_val = types[el]
            s = states[int(4 * random.random())]
            v = int(1000 * random.random())
            output.append(make_candidate(type_val, v, s))
        return output
    
    valid_candidates = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    valid_set = build_candidates(valid_candidates)
    return valid_set
