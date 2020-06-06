import json
import math
import xml.etree.ElementTree as ET
from pprint import pprint

CENTER = [40.75, -111.89]


def dist(a, b):
    return math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2)


info = dict()
for place in ET.parse('UtahKML.xml').findall('.//{*}Placemark'):
    cam_id = place.attrib['id']
    cam_name = place.find(".//{*}SimpleData[@name='DisplayName']").text
    coord = [float(x) for x in reversed(place.find(".//{*}coordinates").text.split(','))]
    info[cam_id] = {'name': cam_name, 'coord': coord}

sources = []
with open('cameras.json', 'r') as f:
    places = json.load(f)
ids_done = set()
for place in places:
    cam_id = str(place['entityId'])
    if cam_id in ids_done:
        continue
    url = place['url']
    this_info = info[cam_id]
    name = this_info['name']
    coord = this_info['coord']
    if dist(coord, CENTER) > 0.3:
        continue
    sources.append({'coord': coord, 'cams': [{'id': cam_id, 'url': url, 'name': name}]})
    ids_done.add(cam_id)
with open('sources.json', 'w') as f:
    json.dump(sources, f)
