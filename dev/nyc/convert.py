import json
from pprint import pprint
import requests
import re

with open('cameras.json', 'r') as f:
    raw_data = json.load(f)
data = raw_data['markers']

sources = []
for camera in data:
    result = dict()
    result['id'] = camera['id']
    result['name'] = camera['content']
    fetched = requests.get('https://nyctmc.org/google_popup.php', params={'cid': camera['id']})
    match = re.search('http://207.251.86.238/cctv\\d+.jpg', fetched.text)
    if match is None:
        pprint(camera)
        continue
    url = match.group()
    result['url'] = url
    sources.append(result)
with open('sources.json', 'w') as f:
    json.dump({'NYC': sources}, f)
