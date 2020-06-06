import json
from collections import defaultdict
import xml.etree.ElementTree as ET
from pprint import pprint

info = dict()
for place in ET.parse('UtahKML.xml').findall('.//{*}Placemark'):
    cam_id = int(place.attrib['id'])
    cam_name = place.find(".//{*}SimpleData[@name='DisplayName']").text
    coords = [float(x) for x in place.find(".//{*}coordinates").text.split(',')]
    info[cam_id] = {'name': cam_name, 'coords': coords}

sources = []
with open('cameras.json', 'r') as f:
    places = json.load(f)
for place in places:
    cam_id = place['entityId']
    url = place['url']
    this_info = info[cam_id]
    name = this_info['name']
    coords = this_info['coords']
    sources.append({'coords': coords, 'cams': [{'id': cam_id, 'url': url, 'name': name}]})
with open('sources.json', 'w') as f:
    json.dump(sources, f)
