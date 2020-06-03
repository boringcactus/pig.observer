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
    elif camera['properties']['url'] is not None:
        result['url'] = camera['properties']['url'].replace('http://navigator-c2c.dot.ga.gov/snapshots', '/georgiasnapshots')
    else:
        continue
    result['name'] = camera['properties']['location_description']
    sources[subdiv].append(result)
with open('sources.js', 'w') as f:
    json.dump(dict(sources), f)
