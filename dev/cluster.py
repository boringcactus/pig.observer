import sys
import math
import json

with open(sys.argv[1], 'r') as f:
    input_data = json.load(f)


def dist(a, b):
    return math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)


def do_merge():
    threshold = 0.003

    for a in range(len(input_data) - 1):
        if len(input_data[a]['cams']) == 0:
            continue
        for b in range(a + 1, len(input_data)):
            if len(input_data[b]['cams']) == 0:
                continue
            a_loc = input_data[a]['coord']
            b_loc = input_data[b]['coord']
            if dist(a_loc, b_loc) < threshold:
                input_data[a]['cams'].extend(input_data[b]['cams'])
                input_data[b]['cams'] = []

    output_data = [x for x in input_data if len(x['cams']) > 0]

    with open(sys.argv[1], 'w') as f:
        json.dump(output_data, f)


def find_closest():
    closest_dist = min(dist(input_data[a]['coord'], input_data[b]['coord'])
                       for a in range(len(input_data) - 1) for b in range(a + 1, len(input_data)))
    print(closest_dist)


do_merge()
