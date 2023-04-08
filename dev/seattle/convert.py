import requests
import json
from pprint import pprint

# for some reason, the damn thing doesn't work
# r = requests.get('https://web.seattle.gov/Travelers/api/Map/Data?zoomId=14&type=2')
# points = r.json()['Features']

with open("raw.json", "r") as f:
    points = json.load(f)['Features']

sources = []
for point in points:
    coord = point['PointCoordinate']
    cams = []
    for cam in point['Cameras']:
        cam_id = cam['Id']
        name = cam['Description']
        result = {'id': cam_id, 'name': name}
        if cam['Type'] == 'sdot':
            stream = cam['ImageUrl'].replace('.jpg', '.stream')
            stream_url = "https://61e0c5d388c2e.streamlock.net:443/live/{stream}/playlist.m3u8".format(stream=stream)
            result['stream'] = stream_url
        elif cam['Type'] == 'wsdot':
            url = 'https://images.wsdot.wa.gov/nw/' + cam['ImageUrl']
            result['url'] = url
        else:
            raise ValueError('Weird camera type: ' + cam['Type'])
        cams.append(result)
    sources.append({'coord': coord, 'cams': cams})
with open('sources.json', 'w') as f:
    json.dump(sources, f)
