import json
from pprint import pprint
from collections import defaultdict

with open('cctv.json', 'r') as f:
    raw_data = json.load(f)

cameras = raw_data['features']

sources = defaultdict(list)
for camera in cameras:
    subdiv = camera['properties']['subdivision']
    result = dict()
    result['id'] = camera['properties']['cctv_id']
    if 'HLS' in camera['properties']:
        result['stream'] = camera['properties']['HLS']
    else:
        result['url'] = camera['properties']['url']
    result['name'] = camera['properties']['location_description']
    sources[subdiv].append(result)
with open('sources.js', 'w') as f:
    json.dump(dict(sources), f)
