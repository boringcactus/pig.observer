import json
from collections import defaultdict
import xml.etree.ElementTree as ET
from pprint import pprint

map_areas = [[29, "Statewide"], [44, "I-15 / I-70 Junction"], [30, "Farmington"], [8, "Ogden"], [9, "Park City"],
             [14, "Provo / Orem"], [43, "Richfield"], [7, "Salt Lake City"], [31, "Sandy"], [27, "St. George"],
             [41, "US-6"], [45, "I-15 Technology Corridor Project"]]
map_areas = dict(map_areas)

names = dict()
for place in ET.parse('UtahKML.xml').findall('.//{*}Placemark'):
    cam_id = int(place.attrib['id'])
    cam_name = place.find(".//{*}SimpleData[@name='DisplayName']").text
    names[cam_id] = cam_name

sources = defaultdict(list)
with open('cameras.json', 'r') as f:
    places = json.load(f)
for place in places:
    area = place['mapAreaId']
    if area in map_areas:
        area = map_areas[area]
        cam_id = place['entityId']
        url = place['url']
        name = names[cam_id]
        sources[area].append({'id': cam_id, 'url': url, 'name': name})
with open('sources.json', 'w') as f:
    json.dump(dict(sources), f)
