import requests
import json
from pprint import pprint

r = requests.get('https://web6.seattle.gov/Travelers/api/Map/Data?zoomId=14&type=2')
points = r.json()['Features']

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
            stream_url = "https://58cc2dce193dd.streamlock.net:443/live/{stream}/playlist.m3u8".format(stream=stream)
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
