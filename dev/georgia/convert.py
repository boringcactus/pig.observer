import json
from pprint import pprint

with open('cctv.json', 'r') as f:
    raw_data = json.load(f)

cameras = raw_data['features']

sources = []
for camera in cameras:
    coord = [float(x) for x in reversed(camera['geometry']['coordinates'])]
    cam = dict()
    cam['id'] = camera['properties']['cctv_id']
    if 'HLS' in camera['properties']:
        url = camera['properties']['HLS']
        url = url.replace('http://vss1live.dot.ga.gov:80/lo', '/georgiavss1')
        url = url.replace('http://vss2live.dot.ga.gov:80/lo', '/georgiavss2')
        url = url.replace('http://vss3live.dot.ga.gov:80/lo', '/georgiavss3')
        url = url.replace('http://vss4live.dot.ga.gov:80/lo', '/georgiavss4')
        url = url.replace('http://vss5live.dot.ga.gov:80/lo', '/georgiavss5')
        cam['stream'] = url
    elif camera['properties']['url'] is not None:
        url = camera['properties']['url']
        url = url.replace('http://navigator-c2c.dot.ga.gov/snapshots', '/georgiasnapshots')
        cam['url'] = url
    else:
        continue
    cam['name'] = camera['properties']['location_description']
    sources.append({'coord': coord, 'cams': [cam]})
with open('sources.json', 'w') as f:
    json.dump(sources, f)
