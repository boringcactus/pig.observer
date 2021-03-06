import json
from pprint import pprint
import requests
import re

with open('cameras.json', 'r') as f:
    raw_data = json.load(f)
data = raw_data['markers']

sources = []
for camera in data:
    coord = [float(camera['latitude']), float(camera['longitude'])]
    cam = dict()
    cam['id'] = camera['id']
    cam['name'] = camera['content']
    fetched = requests.get('https://nyctmc.org/google_popup.php', params={'cid': camera['id']})
    match = re.search(r'https://jpg.nyctmc.org(:443)?/cctv\d+.jpg', fetched.text)
    if match is None:
        pprint(camera)
        continue
    url = match.group()
    cam['url'] = url
    sources.append({'coord': coord, 'cams': [cam]})
with open('sources.json', 'w') as f:
    json.dump(sources, f)
