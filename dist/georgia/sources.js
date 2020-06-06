const DEFAULTS = ["cctv_4930"];
const MANUAL_CACHE_BUST = true;
const CAMERAS = [{
    "coord": [34.208776, -84.455192],
    "cams": [{
        "id": "cctv_46479",
        "url": "/georgiasnapshots/CHER-CAM-102.jpg",
        "name": "SR 140 : Scott Rd"
    }]
}, {
    "coord": [33.692992, -84.2606],
    "cams": [{
        "id": "cctv_13666",
        "url": "/georgiasnapshots/DEK-CAM-312.jpg",
        "name": "SR 155 (Flat Shoals Rd) : Clifton Springs Rd / Columbia Dr"
    }]
}, {
    "coord": [33.85558, -84.246456],
    "cams": [{
        "id": "cctv_5006",
        "stream": "/georgiavss2/gdot-cam-239.stream/playlist.m3u8",
        "name": "I-285 : N OF NORTHLAKE PKWY"
    }]
}, {
    "coord": [33.7255, -84.181552],
    "cams": [{
        "id": "cctv_13309",
        "url": "/georgiasnapshots/DEK-CAM-038.jpg",
        "name": "SR 12 (Covington Hwy) : Miller Rd"
    }]
}, {
    "coord": [33.976324, -84.07408],
    "cams": [{
        "id": "cctv_10309",
        "url": "/georgiasnapshots/GWIN-CAM-135.jpg",
        "name": "SUGARLOAF PKWY : SR 120"
    }]
}, {
    "coord": [33.918164, -84.209576],
    "cams": [{
        "id": "cctv_10408",
        "url": "/georgiasnapshots/GWIN-CAM-249.jpg",
        "name": "SR 140 : Brook Hollow Parkway"
    }]
}, {
    "coord": [34.02768, -84.050512],
    "cams": [{
        "id": "cctv_15963",
        "url": "/georgiasnapshots/GDOT-CAM-157.jpg",
        "name": "I-85 : S OF L-VILLE/SUWANEE RD"
    }]
}, {
    "coord": [34.266072, -83.817856],
    "cams": [{
        "id": "cctv_32637",
        "url": "/georgiasnapshots/HALL-CAM-018.jpg",
        "name": "I-985 : SR 60"
    }]
}, {
    "coord": [34.085192, -84.551176],
    "cams": [{
        "id": "cctv_6862",
        "stream": "/georgiavss1/cher-cam-026.stream/playlist.m3u8",
        "name": "SR 92 / Woodstock Rd : Concord Ln / Fitchburg Dr"
    }]
}, {
    "coord": [32.794406, -83.667968],
    "cams": [{
        "id": "cctv_5974",
        "url": "/georgiasnapshots/BIBB-CAM-512.jpg",
        "name": "PIO NONO AVE : SOUTH PLAZA"
    }]
}, {
    "coord": [33.768488, -84.39008],
    "cams": [{
        "id": "cctv_5408",
        "stream": "/georgiavss2/gdot-cam-097.stream/playlist.m3u8",
        "name": "75/85 : WILLIAMS ST"
    }]
}, {
    "coord": [33.948784, -84.198192],
    "cams": [{
        "id": "cctv_10296",
        "url": "/georgiasnapshots/GWIN-CAM-122.jpg",
        "name": "SR 13 / US 23 : LANGFORD RD"
    }]
}, {
    "coord": [34.049596, -83.929056],
    "cams": [{
        "id": "cctv_10374",
        "url": "/georgiasnapshots/GWIN-CAM-200.jpg",
        "name": "SR 324 : SR 124"
    }]
}, {
    "coord": [33.694068, -84.404632],
    "cams": [{
        "id": "cctv_4963",
        "stream": "/georgiavss2/gdot-cam-002.stream/playlist.m3u8",
        "name": "75/85 : S OF LANGFORD PKWY"
    }]
}, {
    "coord": [34.235776, -84.451808],
    "cams": [{
        "id": "cctv_16166",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-13.6.jpg",
        "name": "SR 20 : BROOKE PARK DR"
    }]
}, {
    "coord": [34.054152, -84.28532],
    "cams": [{
        "id": "cctv_5345",
        "stream": "/georgiavss4/gdot-cam-842.stream/playlist.m3u8",
        "name": "GA 400 : HAYNES BR RD"
    }]
}, {
    "coord": [33.968144, -84.536408],
    "cams": [{
        "id": "cctv_15172",
        "url": "/georgiasnapshots/MAR-CAM-103.jpg",
        "name": "SR 3/Cobb Pkwy : Allgood Rd"
    }]
}, {
    "coord": [33.876584, -84.45592],
    "cams": [{
        "id": "cctv_16309",
        "url": "/georgiasnapshots/COBB-CAM-115.jpg",
        "name": "Cumberland Blvd : Cobb Galleria Pkwy"
    }]
}, {
    "coord": [33.748076, -84.38772],
    "cams": [{
        "id": "cctv_16255",
        "url": "/georgiasnapshots/ATL-CAM-985.jpg",
        "name": "Capitol Ave : Capitol Square"
    }]
}, {
    "coord": [33.720508, -84.723512],
    "cams": [{
        "id": "cctv_12944",
        "url": "/georgiasnapshots/DOUG-CAM-005.jpg",
        "name": "Chapel Hill Rd : Golf Ridge Blvd"
    }]
}, {
    "coord": [33.517502, -84.3638],
    "cams": [{
        "id": "cctv_10441",
        "url": "/georgiasnapshots/CLAY-CAM-025.jpg",
        "name": "SR 3 / Tara Blvd : Fayetteville Rd/ Flint River Rd"
    }]
}, {
    "coord": [34.251824, -84.09484],
    "cams": [{
        "id": "cctv_16355",
        "url": "/georgiasnapshots/FORS-CAM-010.jpg",
        "name": "SR 306/Keith Bridge Rd : SR 400 SB"
    }]
}, {
    "coord": [33.396622, -84.596656],
    "cams": [{
        "id": "cctv_13122",
        "url": "/georgiasnapshots/FAY-CAM-017.jpg",
        "name": "SR 54 : Huddleston Rd"
    }]
}, {
    "coord": [32.660588, -83.742448],
    "cams": [{
        "id": "cctv_16333",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-149.2.jpg",
        "name": "I-75 : SR 49"
    }]
}, {
    "coord": [34.060936, -84.225232],
    "cams": [{
        "id": "cctv_32966",
        "url": "/georgiasnapshots/COJC-CAM-660.jpg",
        "name": "SR 120 (Kimball Bridge Rd) : Webb Bridge Way/Milton Oaks Dr"
    }]
}, {
    "coord": [33.76536, -84.513672],
    "cams": [{
        "id": "cctv_5060",
        "stream": "/georgiavss3/gdot-cam-324.stream/playlist.m3u8",
        "name": "I-20 : EAST OF FULTON INDUS"
    }]
}, {
    "coord": [34.03542, -83.910352],
    "cams": [{
        "id": "cctv_10376",
        "url": "/georgiasnapshots/GWIN-CAM-202.jpg",
        "name": "SR 324 : OLD FOUNTAIN RD / JIM MOORE RD"
    }]
}, {
    "coord": [34.049208, -84.091824],
    "cams": [{
        "id": "cctv_10401",
        "url": "/georgiasnapshots/GWIN-CAM-242.jpg",
        "name": "PEACHTREE INDUSTRIAL BLVD : McGINNIS FERRY RD"
    }]
}, {
    "coord": [33.9099, -84.362096],
    "cams": [{
        "id": "cctv_4980",
        "stream": "/georgiavss2/gdot-cam-215.stream/playlist.m3u8",
        "name": "I-285 : GLENRIDGE DR"
    }]
}, {
    "coord": [33.753484, -84.363856],
    "cams": [{
        "id": "cctv_46499",
        "url": "http://navigator-c2c.dot.ga.gov/snapshota/ATL-CAM-992.jpg",
        "name": "DeKalb Ave NE : Krog St"
    }]
}, {
    "coord": [31.141892, -81.584456],
    "cams": [{
        "id": "cctv_46547",
        "url": "/georgiasnapshots/GLY-CAM-004.jpg",
        "name": "SR 520 : SR 25/ SR 303"
    }]
}, {
    "coord": [33.952256, -83.980488],
    "cams": [{
        "id": "cctv_10233",
        "url": "/georgiasnapshots/GWIN-CAM-059.jpg",
        "name": "SR 124 : N of JACKSON ST / NEW HOPE RD"
    }]
}, {
    "coord": [34.019248, -84.062648],
    "cams": [{
        "id": "cctv_16060",
        "url": "/georgiasnapshots/GDOT-CAM-155.jpg",
        "name": "I-85 : N OF OLD PEACHTREE RD"
    }]
}, {
    "coord": [34.349724, -83.759008],
    "cams": [{
        "id": "cctv_32643",
        "url": "/georgiasnapshots/HALL-CAM-024.jpg",
        "name": "SR 365 : White Sulpher Rd"
    }]
}, {
    "coord": [33.776228, -84.384544],
    "cams": [{
        "id": "cctv_16091",
        "url": "/georgiasnapshots/ATL-CAM-972.jpg",
        "name": "Peachtree St : 5th Street"
    }]
}, {
    "coord": [33.783036, -84.609384],
    "cams": [{
        "id": "cctv_16084",
        "stream": "/georgiavss1/doug-cam-089.stream/playlist.m3u8",
        "name": "SR 6 : Skyview Dr / Oak Ridge Rd"
    }]
}, {
    "coord": [33.817904, -84.267368],
    "cams": [{
        "id": "cctv_13334",
        "stream": "/georgiavss1/dek-cam-013.stream/playlist.m3u8",
        "name": "SR 8 (Lawrenceville Hwy) : Harcourt Dr"
    }]
}, {
    "coord": [34.066192, -84.31856],
    "cams": [{
        "id": "cctv_9039",
        "url": "/georgiasnapshots/ROSWELL-CAM-326.jpg",
        "name": "SR 9 : Upper Hembree Rd/Northmeadow Pkwy"
    }]
}, {
    "coord": [33.802628, -84.393064],
    "cams": [{
        "id": "cctv_7204",
        "stream": "/georgiavss1/atl-cam-032.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree St NE : 26th Street"
    }]
}, {
    "coord": [34.8066, -84.955496],
    "cams": [{
        "id": "cctv_16115",
        "url": "/georgiasnapshots/GDOT-CAM-SR71-0.70.jpg",
        "name": "SR 71 : WESTBROOK RD"
    }]
}, {
    "coord": [32.778134, -83.713176],
    "cams": [{
        "id": "cctv_6003",
        "stream": "/georgiavss5/bibb-cam-012.stream/playlist.m3u8",
        "name": "I-475 : MILE POST 1.5"
    }]
}, {
    "coord": [33.521824, -82.02396],
    "cams": [{
        "id": "cctv_32854",
        "url": "/georgiasnapshots/AUG-CAM-166.jpg",
        "name": "River Watch Pkwy. : Alexander Dr."
    }]
}, {
    "coord": [34.207848, -84.760088],
    "cams": [{
        "id": "cctv_16349",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-290.05.jpg",
        "name": "I-75 : EXT 290"
    }]
}, {
    "coord": [33.9119, -84.3838],
    "cams": [{
        "id": "cctv_4977",
        "stream": "/georgiavss2/gdot-cam-212.stream/playlist.m3u8",
        "name": "I-285 : W OF ROSWELL RD"
    }]
}, {
    "coord": [33.781744, -84.368776],
    "cams": [{
        "id": "cctv_13766",
        "url": "/georgiasnapshots/ATL-CAM-610.jpg",
        "name": "10th St : Monroe Dr"
    }]
}, {
    "coord": [33.74432, -84.398832],
    "cams": [{
        "id": "cctv_5084",
        "stream": "/georgiavss3/gdot-cam-346.stream/playlist.m3u8",
        "name": "I-20 : WINDSOR ST"
    }]
}, {
    "coord": [33.750128, -84.443992],
    "cams": [{
        "id": "cctv_5073",
        "stream": "/georgiavss3/gdot-cam-336.stream/playlist.m3u8",
        "name": "I-20 : MLK JR DR"
    }]
}, {
    "coord": [33.579804, -84.667408],
    "cams": [{
        "id": "cctv_46458",
        "url": "/georgiasnapshots/FULT-CAM-038.jpg",
        "name": "GA 14 Alt/ South Fulton Pkwy : SR 154/ Cascade Palmetto Hwy"
    }]
}, {
    "coord": [33.905504, -84.604008],
    "cams": [{
        "id": "cctv_7337",
        "url": "/georgiasnapshots/COBB-CAM-241.jpg",
        "name": "SR 360/Powder Springs Rd : Macland Rd"
    }]
}, {
    "coord": [33.956164, -83.656104],
    "cams": [{
        "id": "cctv_32552",
        "url": "/georgiasnapshots/BARR-CAM-011.jpg",
        "name": "SR 316 : SR 53"
    }]
}, {
    "coord": [32.464772, -84.979864],
    "cams": [{
        "id": "cctv_9126",
        "url": "/georgiasnapshots/COLU-CAM-005.jpg",
        "name": "10th Street : 10th Avenue"
    }]
}, {
    "coord": [33.933668, -84.337728],
    "cams": [{
        "id": "cctv_32578",
        "url": "/georgiasnapshots/DUN-CAM-102.jpg",
        "name": "Ashford Dunwoody Rd : Ashwood Pkwy/Ashford Pkwy"
    }]
}, {
    "coord": [34.069808, -84.614584],
    "cams": [{
        "id": "cctv_5174",
        "stream": "/georgiavss3/gdot-cam-445.stream/playlist.m3u8",
        "name": "I-75 : N OF HICKORY GROVE RD"
    }]
}, {
    "coord": [33.721424, -84.938208],
    "cams": [{
        "id": "cctv_16316",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-23.95.jpg",
        "name": "I-20 : EXT 24"
    }]
}, {
    "coord": [33.429084, -84.457912],
    "cams": [{
        "id": "cctv_10176",
        "stream": "/georgiavss1/fay-cam-109.stream/playlist.m3u8",
        "name": "SR 85 : SR 92 / Ramah Rd"
    }]
}, {
    "coord": [34.102304, -84.53064],
    "cams": [{
        "id": "cctv_15465",
        "stream": "/georgiavss3/gdot-cam-558.stream/playlist.m3u8",
        "name": "I-575 : TOWNE LAKE PKY"
    }]
}, {
    "coord": [33.758832, -84.477568],
    "cams": [{
        "id": "cctv_5067",
        "stream": "/georgiavss3/gdot-cam-330.stream/playlist.m3u8",
        "name": "I-20 : W OF HOLMES DR"
    }]
}, {
    "coord": [33.895928, -84.140216],
    "cams": [{
        "id": "cctv_10183",
        "url": "/georgiasnapshots/GWIN-CAM-005.jpg",
        "name": "SR 9 (US 29 Lawrenceville Hwy) : Killian Hill Rd / Indian Trail Lilburn Rd"
    }]
}, {
    "coord": [34.345484, -84.05084],
    "cams": [{
        "id": "cctv_32553",
        "url": "/georgiasnapshots/DWSN-CAM-001.jpg",
        "name": "SR 400 : Carlislie Rd/Whitmire Dr"
    }]
}, {
    "coord": [34.051372, -84.556496],
    "cams": [{
        "id": "cctv_7345",
        "url": "/georgiasnapshots/COBB-CAM-311.jpg",
        "name": "Bells Ferry Rd : I-575"
    }]
}, {
    "coord": [33.915864, -84.337344],
    "cams": [{
        "id": "cctv_46292",
        "url": "/georgiasnapshots/BROK-CAM-079.jpg",
        "name": "Ashford Dunwoody Rd : Lake Hearn"
    }]
}, {
    "coord": [33.830308, -83.86708],
    "cams": [{
        "id": "cctv_32927",
        "url": "/georgiasnapshots/WALT-CAM-004",
        "name": "SR 10 : Tom Brewer"
    }]
}, {
    "coord": [33.418674, -82.022512],
    "cams": [{
        "id": "cctv_32891",
        "url": "/georgiasnapshots/AUG-CAM-107.jpg",
        "name": "Hwy 25 : Lumpkin Rd."
    }]
}, {
    "coord": [33.836588, -84.486208],
    "cams": [{
        "id": "cctv_5401",
        "stream": "/georgiavss4/gdot-cam-963.stream/playlist.m3u8",
        "name": "I-285 : S OF SOUTH ATLANTA RD"
    }]
}, {
    "coord": [34.052228, -84.59148],
    "cams": [{
        "id": "cctv_5171",
        "stream": "/georgiavss3/gdot-cam-442.stream/playlist.m3u8",
        "name": "I-75 : WADE GREEN RD"
    }]
}, {
    "coord": [34.02038, -83.986248],
    "cams": [{
        "id": "cctv_13107",
        "url": "/georgiasnapshots/GWIN-CAM-274.jpg",
        "name": "SR 20 : Azalea Dr"
    }]
}, {
    "coord": [34.066156, -84.311968],
    "cams": [{
        "id": "cctv_9084",
        "stream": "/georgiavss1/alph-cam-016.stream/playlist.m3u8",
        "name": "SR 9 : Wills Rd"
    }]
}, {
    "coord": [33.880468, -84.512592],
    "cams": [{
        "id": "cctv_13760",
        "url": "/georgiasnapshots/SMYR-CAM-009.jpg",
        "name": "Atlanta Rd : Concord Rd/Spring Rd"
    }]
}, {
    "coord": [34.051916, -84.557672],
    "cams": [{
        "id": "cctv_15388",
        "stream": "/georgiavss3/gdot-cam-544.stream/playlist.m3u8",
        "name": "I-575 : BELLS FERRY RD ENT"
    }]
}, {
    "coord": [33.46236, -84.207712],
    "cams": [{
        "id": "cctv_13253",
        "stream": "/georgiavss4/gdot-cam-683.stream/playlist.m3u8",
        "name": "JONESBORO RD : EXPRESS RAMP"
    }]
}, {
    "coord": [34.081728, -84.677048],
    "cams": [{
        "id": "cctv_16130",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-278.35.jpg",
        "name": "I-75 : GLADE RD (EXIT 278)"
    }]
}, {
    "coord": [33.475552, -81.996264],
    "cams": [{
        "id": "cctv_32897",
        "url": "/georgiasnapshots/AUG-CAM-204.jpg",
        "name": "Walton Way : Druid Park Ave."
    }]
}, {
    "coord": [34.759088, -84.991072],
    "cams": [{
        "id": "cctv_16116",
        "url": "/georgiasnapshots/GDOT-CAM-SR52-0.70.jpg",
        "name": "SR 52 : TIBBS RD"
    }]
}, {
    "coord": [33.906072, -84.155776],
    "cams": [{
        "id": "cctv_10390",
        "url": "/georgiasnapshots/GWIN-CAM-224.jpg",
        "name": "INDIAN TRAIL LILBURN RD : DICKENS RD"
    }]
}, {
    "coord": [31.127546, -84.155208],
    "cams": [{
        "id": "cctv_46362",
        "url": "/georgiasnapshots/MITC-CAM-002.jpg",
        "name": "SR 65 : SR93/CHURCH"
    }]
}, {
    "coord": [33.936064, -84.556104],
    "cams": [{
        "id": "cctv_15189",
        "url": "/georgiasnapshots/MAR-CAM-300.jpg",
        "name": "SR 360 / Powder Springs St : Sandtown Rd"
    }]
}, {
    "coord": [33.96494, -84.615712],
    "cams": [{
        "id": "cctv_12893",
        "url": "/georgiasnapshots/COBB-CAM-020.jpg",
        "name": "Barrett Pkwy : Burnt Hickory Rd"
    }]
}, {
    "coord": [34.000872, -83.910488],
    "cams": [{
        "id": "cctv_10380",
        "url": "/georgiasnapshots/GWIN-CAM-206.jpg",
        "name": "DACULA RD : OLD PEACHTREE RD"
    }]
}, {
    "coord": [33.938028, -84.018392],
    "cams": [{
        "id": "cctv_10220",
        "url": "/georgiasnapshots/GWIN-CAM-046.jpg",
        "name": "US 29 : JOHNSON RD"
    }]
}, {
    "coord": [33.834912, -84.209736],
    "cams": [{
        "id": "cctv_5309",
        "stream": "/georgiavss4/gdot-cam-783.stream/playlist.m3u8",
        "name": "US 78 : E OF IDLEWOOD RD"
    }]
}, {
    "coord": [34.063608, -83.990112],
    "cams": [{
        "id": "cctv_13104",
        "url": "/georgiasnapshots/GWIN-CAM-277.jpg",
        "name": "SR 20 : Plains Court Way"
    }]
}, {
    "coord": [33.407684, -84.682832],
    "cams": [{
        "id": "cctv_15415",
        "url": "/georgiasnapshots/COW-CAM-005.jpg",
        "name": "SR 34 : SR 154"
    }]
}, {
    "coord": [33.83516, -84.20004],
    "cams": [{
        "id": "cctv_5310",
        "stream": "/georgiavss4/gdot-cam-784.stream/playlist.m3u8",
        "name": "US 78 : MOUNTAIN INDUST BLVD"
    }]
}, {
    "coord": [33.690844, -84.491],
    "cams": [{
        "id": "cctv_5188",
        "stream": "/georgiavss2/gdot-cam-049.stream/playlist.m3u8",
        "name": "SR 166 : GREENBRIAR PKWY"
    }]
}, {
    "coord": [34.480428, -84.467464],
    "cams": [{
        "id": "cctv_46484",
        "url": "/georgiasnapshots/PICK-CAM-004.jpg",
        "name": "SR 515 : Philadelphia Rd"
    }]
}, {
    "coord": [33.618564, -84.434128],
    "cams": [{
        "id": "cctv_5251",
        "stream": "/georgiavss4/gdot-cam-653.stream/playlist.m3u8",
        "name": "I-285 : WEST EDGE OF TUNNEL"
    }]
}, {
    "coord": [33.845848, -84.42976],
    "cams": [{
        "id": "cctv_5048",
        "stream": "/georgiavss2/gdot-cam-028.stream/playlist.m3u8",
        "name": "I-75 : S OF PACES FERRY RD"
    }]
}, {
    "coord": [33.826716, -84.254024],
    "cams": [{
        "id": "cctv_13612",
        "stream": "/georgiavss1/dek-cam-017.stream/playlist.m3u8",
        "name": "SR 8 (Lawrenceville Hwy) : I-285 SB Ramp"
    }]
}, {
    "coord": [34.537064, -83.975936],
    "cams": [{
        "id": "cctv_16375",
        "url": "http://navigator-c2c.dot.ga.gov/sapshots/FORS-CAM-23.jpg",
        "name": "SR 9 : Walmart/ E Main St."
    }]
}, {
    "coord": [34.0368, -84.234864],
    "cams": [{
        "id": "cctv_16238",
        "url": "/georgiasnapshots/COJC-CAM-615.jpg",
        "name": "Jones Bridge Rd : Buice Rd"
    }]
}, {
    "coord": [33.475968, -81.96748],
    "cams": [{
        "id": "cctv_32837",
        "url": "/georgiasnapshots/AUG-CAM-033.jpg",
        "name": "Broad St. : 9th St./James Brown Blvd."
    }]
}, {
    "coord": [34.22478, -83.865056],
    "cams": [{
        "id": "cctv_32628",
        "url": "/georgiasnapshots/HALL-CAM-009",
        "name": "I-985 NB : SR 53"
    }]
}, {
    "coord": [33.5703, -84.332496],
    "cams": [{
        "id": "cctv_10511",
        "url": "/georgiasnapshots/CLAY-CAM-254.jpg",
        "name": "MT ZION RD : CORPORATE CENTER DR"
    }]
}, {
    "coord": [33.97682, -84.079312],
    "cams": [{
        "id": "cctv_10402",
        "url": "/georgiasnapshots/GWIN-CAM-243.jpg",
        "name": "SR 120 : ATKINSON RD"
    }]
}, {
    "coord": [33.918852, -84.344728],
    "cams": [{
        "id": "cctv_32934",
        "url": "/georgiasnapshots/DUN-CAM-121.jpg",
        "name": "Perimeter Center Pky : Goldkist"
    }]
}, {
    "coord": [31.450598, -83.531688],
    "cams": [{
        "id": "cctv_16006",
        "url": "/georgiasnapshots/GDOT-CAM-SR520-8.71.jpg",
        "name": "520 : I-75 / Hunt Rd"
    }]
}, {
    "coord": [33.9162, -84.2892],
    "cams": [{
        "id": "cctv_4993",
        "stream": "/georgiavss2/gdot-cam-227.stream/playlist.m3u8",
        "name": "I-285 : W OF PTREE INDSTRL"
    }]
}, {
    "coord": [34.031244, -84.186424],
    "cams": [{
        "id": "cctv_16215",
        "stream": "/georgiavss1/cojc-cam-240.stream/playlist.m3u8",
        "name": "SR 141 : Grove Point Rd/St Ives County Club Pkwy"
    }]
}, {
    "coord": [34.020696, -84.319704],
    "cams": [{
        "id": "cctv_13143",
        "url": "/georgiasnapshots/ROSWELL-CAM-128.jpg",
        "name": "SR 140 : Market Blvd"
    }]
}, {
    "coord": [33.865268, -84.016696],
    "cams": [{
        "id": "cctv_10225",
        "url": "/georgiasnapshots/GWIN-CAM-051.jpg",
        "name": "SR 124 : SNELLVILLE PAVILION"
    }]
}, {
    "coord": [33.554, -84.264096],
    "cams": [{
        "id": "cctv_10495",
        "url": "/georgiasnapshots/CLAY-CAM-180.jpg",
        "name": "SR 138 / Lake Spivey Pkwy : Daniel Dr"
    }]
}, {
    "coord": [33.414234, -84.164336],
    "cams": [{
        "id": "cctv_13366",
        "stream": "/georgiavss4/gdot-cam-760.stream/playlist.m3u8",
        "name": "I-75 : RAMP FROM SR 155"
    }]
}, {
    "coord": [33.857932, -84.31192],
    "cams": [{
        "id": "cctv_13369",
        "stream": "/georgiavss1/brok-cam-206.stream/playlist.m3u8",
        "name": "SR 155 / Clairmont Rd : SR 13 / Buford Hwy"
    }]
}, {
    "coord": [33.638268, -84.0144],
    "cams": [{
        "id": "cctv_13363",
        "url": "/georgiasnapshots/ROCK-CAM-105.jpg",
        "name": "SR 138 / McDonough Rd : Stockbridge Hwy / Lakefield Dr"
    }]
}, {
    "coord": [34.035512, -84.554264],
    "cams": [{
        "id": "cctv_12904",
        "url": "/georgiasnapshots/COBB-CAM-316.jpg",
        "name": "Chastain Rd : Chastain Meadows Pkwy"
    }]
}, {
    "coord": [33.832104, -84.334008],
    "cams": [{
        "id": "cctv_5215",
        "stream": "/georgiavss3/gdot-cam-552.stream/playlist.m3u8",
        "name": "I-85 : N DRUID HILLS RAMP METER"
    }]
}, {
    "coord": [33.61832, -85.07684],
    "cams": [{
        "id": "cctv_16179",
        "url": "/georgiasnapshots/GDOT-CAM-SR113-1.15.jpg",
        "name": "SR 113 : NORTHSIDE DR"
    }]
}, {
    "coord": [32.817704, -83.662696],
    "cams": [{
        "id": "cctv_5970",
        "url": "/georgiasnapshots/BIBB-CAM-508.jpg",
        "name": "PIO NONO AVE : HARRIS ST"
    }]
}, {
    "coord": [34.05804, -83.98572],
    "cams": [{
        "id": "cctv_15972",
        "stream": "/georgiavss2/gdot-cam-170.stream/playlist.m3u8",
        "name": "I-85 : EXIT TO SR 20"
    }]
}, {
    "coord": [33.773148, -84.372904],
    "cams": [{
        "id": "cctv_13608",
        "stream": "/georgiavss1/atl-cam-205.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : Charles Allen Dr / Parkway"
    }]
}, {
    "coord": [33.563, -84.518104],
    "cams": [{
        "id": "cctv_46444",
        "url": "/georgiasnapshots/FULT-CAM-021.jpg",
        "name": "GA 138/ Jonesboro Rd : Buffington Rd"
    }]
}, {
    "coord": [34.910588, -85.127016],
    "cams": [{
        "id": "cctv_9312",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-348.jpg",
        "name": "I-75 : SR 151 / ALABAMA HWY"
    }]
}, {
    "coord": [33.771704, -84.60252],
    "cams": [{
        "id": "cctv_13581",
        "url": "/georgiasnapshots/DOUG-CAM-085.jpg",
        "name": "SR 6 : South Blairs Bridge Rd / Interstate West Pkwy"
    }]
}, {
    "coord": [33.882788, -84.455256],
    "cams": [{
        "id": "cctv_5186",
        "stream": "/georgiavss2/gdot-cam-047.stream/playlist.m3u8",
        "name": "I-75 : N OF CUMBERLAND BLVD"
    }]
}, {
    "coord": [33.699492, -84.497912],
    "cams": [{
        "id": "cctv_5378",
        "stream": "/georgiavss4/gdot-cam-941.stream/playlist.m3u8",
        "name": "I-285 : N OF MT GILEAD RD"
    }]
}, {
    "coord": [33.934492, -84.545624],
    "cams": [{
        "id": "cctv_13052",
        "url": "/georgiasnapshots/COBB-CAM-025.jpg",
        "name": "SR 280/South Cobb Dr : Pearl St"
    }]
}, {
    "coord": [33.44838, -84.455184],
    "cams": [{
        "id": "cctv_6855",
        "stream": "/georgiavss1/fay-cam-115.stream/playlist.m3u8",
        "name": "SR 85 : SR 54 WB / Lanier Ave"
    }]
}, {
    "coord": [33.774736, -84.34504],
    "cams": [{
        "id": "cctv_13673",
        "stream": "/georgiavss1/atl-cam-215.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : Springdale Rd"
    }]
}, {
    "coord": [33.5251, -84.354304],
    "cams": [{
        "id": "cctv_10430",
        "url": "/georgiasnapshots/CLAY-CAM-007.jpg",
        "name": "Main St (JB) : Spring St"
    }]
}, {
    "coord": [32.015892, -80.848152],
    "cams": [{
        "id": "cctv_15898",
        "url": "/georgiasnapshots/SAV-CAM-036.jpg",
        "name": "SR 26/1st ST : CAMPBELL AVE"
    }]
}, {
    "coord": [33.769024, -84.652968],
    "cams": [{
        "id": "cctv_15431",
        "stream": "/georgiavss2/gdot-cam-309.stream/playlist.m3u8",
        "name": "I-20 : Lee Rd"
    }]
}, {
    "coord": [33.900984, -84.473264],
    "cams": [{
        "id": "cctv_15568",
        "stream": "/georgiavss3/gdot-cam-465.stream/playlist.m3u8",
        "name": "I-75 : WINDY HILL RD"
    }]
}, {
    "coord": [34.002548, -84.143488],
    "cams": [{
        "id": "cctv_10300",
        "url": "/georgiasnapshots/GWIN-CAM-126.jpg",
        "name": "SR 13 / US 23 : SR 120 / DULUTH HWY"
    }]
}, {
    "coord": [33.995536, -84.16268],
    "cams": [{
        "id": "cctv_46277",
        "url": "/georgiasnapshots/GWIN-CAM-213.jpg",
        "name": "PLEASANT HILL RD : ASHLEY LN"
    }]
}, {
    "coord": [33.752792, -84.393416],
    "cams": [{
        "id": "cctv_15336",
        "url": "/georgiasnapshots/ATL-CAM-952.jpg",
        "name": "MLK Jr Dr : Forsyth St"
    }]
}, {
    "coord": [33.700744, -84.112968],
    "cams": [{
        "id": "cctv_15984",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-074.5.jpg",
        "name": "I-20 : EAST OF EVANS MILL RD"
    }]
}, {
    "coord": [33.704272, -84.349256],
    "cams": [{
        "id": "cctv_6852",
        "url": "/georgiasnapshots/ATL-CAM-056.jpg",
        "name": "SR 42 (Moreland Ave) : SR 42 Spur (McDonough Blvd)"
    }]
}, {
    "coord": [34.087524, -84.471392],
    "cams": [{
        "id": "cctv_6824",
        "stream": "/georgiavss1/cher-cam-008.stream/playlist.m3u8",
        "name": "SR 92 / Woodstock Rd : S Cherokee Ln / Weatherstone Dr"
    }]
}, {
    "coord": [33.64694, -84.454432],
    "cams": [{
        "id": "cctv_13270",
        "url": "/georgiasnapshots/CLAY-CAM-C990.jpg",
        "name": "SR 6 : Conley St / Convention Center"
    }]
}, {
    "coord": [33.744276, -84.389904],
    "cams": [{
        "id": "cctv_5324",
        "stream": "/georgiavss2/gdot-cam-008.stream/playlist.m3u8",
        "name": "75/85 : CAPITOL AVE"
    }]
}, {
    "coord": [33.988148, -84.026376],
    "cams": [{
        "id": "cctv_10238",
        "url": "/georgiasnapshots/GWIN-CAM-064.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : E of RUSSELL RD"
    }]
}, {
    "coord": [34.026812, -84.1876],
    "cams": [{
        "id": "cctv_6315",
        "url": "/georgiasnapshots/COJC-CAM-225.jpg",
        "name": "SR 141 (Medlock Bridge Rd) : St. Ives Country Club Pkwy"
    }]
}, {
    "coord": [33.989964, -83.98432],
    "cams": [{
        "id": "cctv_10211",
        "url": "/georgiasnapshots/GWIN-CAM-037.jpg",
        "name": "SR 20 : SR 124 (Braselton Highway)"
    }]
}, {
    "coord": [34.252664, -85.174176],
    "cams": [{
        "id": "cctv_15379",
        "url": "/georgiasnapshots/FLYD-CAM-009.jpg",
        "name": "SR 101 / 2nd Ave : Broad Street"
    }]
}, {
    "coord": [33.44735, -82.031704],
    "cams": [{
        "id": "cctv_32880",
        "url": "/georgiasnapshots/AUG-CAM-067.jpg",
        "name": "Gordon Hwy : Milledgeville Rd. (East)"
    }]
}, {
    "coord": [33.88526, -83.943968],
    "cams": [{
        "id": "cctv_10341",
        "url": "/georgiasnapshots/GWIN-CAM-167.jpg",
        "name": "SR 20 : PATRICIA TERRACE / N of COOPER RD / OZORA RD"
    }]
}, {
    "coord": [34.093708, -84.277432],
    "cams": [{
        "id": "cctv_9077",
        "url": "/georgiasnapshots/ALPH-CAM-012.jpg",
        "name": "Windward Pkwy : Walmart"
    }]
}, {
    "coord": [33.910588, -84.4778],
    "cams": [{
        "id": "cctv_15591",
        "stream": "/georgiavss3/gdot-cam-468.stream/playlist.m3u8",
        "name": "I-75 : S OF TERRELL MILL RD"
    }]
}, {
    "coord": [34.153488, -83.643024],
    "cams": [{
        "id": "cctv_32656",
        "url": "/georgiasnapshots/JACKS-CAM-002.jpg",
        "name": "SR 11 : I-85 NB"
    }]
}, {
    "coord": [33.5397, -84.3856],
    "cams": [{
        "id": "cctv_10428",
        "url": "/georgiasnapshots/CLAY-CAM-004.jpg",
        "name": "SR 138 : OLD ROUNTREE RD / KENDRICK RD"
    }]
}, {
    "coord": [33.884224, -84.470552],
    "cams": [{
        "id": "cctv_7314",
        "url": "/georgiasnapshots/COBB-CAM-054.jpg",
        "name": "SR 3/Cobb Pkwy : I-285 WB Ramp"
    }]
}, {
    "coord": [34.000784, -84.066792],
    "cams": [{
        "id": "cctv_46318",
        "url": "/georgiasnapshots/GC-CAM-268.jpg",
        "name": "OLD PEACHTREE RD : NORTH BROWN RD"
    }]
}, {
    "coord": [32.83503, -83.6624],
    "cams": [{
        "id": "cctv_5968",
        "url": "/georgiasnapshots/BIBB-CAM-506.jpg",
        "name": "PIO NONO AVE : BEECH AVE"
    }]
}, {
    "coord": [33.654492, -84.49268],
    "cams": [{
        "id": "cctv_16286",
        "stream": "/georgiavss1/fult-cam-005.stream/playlist.m3u8",
        "name": "SR 6 : Desert Dr"
    }]
}, {
    "coord": [33.952292, -84.578024],
    "cams": [{
        "id": "cctv_15202",
        "url": "/georgiasnapshots/MAR-CAM-404.jpg",
        "name": "SR 120/Whitlock Ave : Burnt Hickory Rd"
    }]
}, {
    "coord": [33.716308, -84.25196],
    "cams": [{
        "id": "cctv_5113",
        "stream": "/georgiavss3/gdot-cam-372.stream/playlist.m3u8",
        "name": "I-20 : COLUMBIA DR"
    }]
}, {
    "coord": [33.696348, -85.08076],
    "cams": [{
        "id": "cctv_13598",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-015.jpg",
        "name": "I-20 : W of CMS-916"
    }]
}, {
    "coord": [32.89077, -83.677336],
    "cams": [{
        "id": "cctv_5992",
        "url": "/georgiasnapshots/BIBB-CAM-530.jpg",
        "name": "RIVERSIDE DR : NORTHSIDE DR"
    }]
}, {
    "coord": [33.665428, -84.418448],
    "cams": [{
        "id": "cctv_5295",
        "stream": "/georgiavss2/gdot-cam-073.stream/playlist.m3u8",
        "name": "I-85 : SYLVAN RD"
    }]
}, {
    "coord": [33.93578, -84.541208],
    "cams": [{
        "id": "cctv_7303",
        "url": "/georgiasnapshots/COBB-CAM-022.jpg",
        "name": "SR 280/South Cobb Dr : Atlanta Rd"
    }]
}, {
    "coord": [33.247132, -84.295328],
    "cams": [{
        "id": "cctv_15445",
        "url": "c2c.dot.ga.gov/snapshots/SPAL-CAM-003.jpg",
        "name": "SR 3/US 19/41 BYPASS : SR 16 E/NEWNAN RD"
    }]
}, {
    "coord": [33.428788, -84.182808],
    "cams": [{
        "id": "cctv_13345",
        "stream": "/georgiavss4/gdot-cam-684.stream/playlist.m3u8",
        "name": "I-75 : SR 20/81"
    }]
}, {
    "coord": [31.508138, -82.84944],
    "cams": [{
        "id": "cctv_46338",
        "url": "/georgiasnapshots/COFF-CAM-003.jpg",
        "name": "SR 31 : SR 32 WE/ WARD ST"
    }]
}, {
    "coord": [34.044184, -84.563808],
    "cams": [{
        "id": "cctv_15471",
        "stream": "/georgiavss3/gdot-cam-542.stream/playlist.m3u8",
        "name": "I-575 : EXIT TO CHASTAIN RD"
    }]
}, {
    "coord": [34.075732, -84.296568],
    "cams": [{
        "id": "cctv_9066",
        "stream": "/georgiavss1/alph-cam-003.stream/playlist.m3u8",
        "name": "Milton Ave : Canton St / Roswell St"
    }]
}, {
    "coord": [33.6129, -84.3056],
    "cams": [{
        "id": "cctv_10447",
        "url": "/georgiasnapshots/CLAY-CAM-039.jpg",
        "name": "SR 42 : SR 331 / Forest Pkwy"
    }]
}, {
    "coord": [34.0436, -84.221],
    "cams": [{
        "id": "cctv_16219",
        "url": "/georgiasnapshots/COJC-CAM-410.jpg",
        "name": "State Bridge Rd : Ocee Elementary"
    }]
}, {
    "coord": [33.948208, -84.515688],
    "cams": [{
        "id": "cctv_15496",
        "stream": "/georgiavss3/gdot-cam-483.stream/playlist.m3u8",
        "name": "I-75 : S OF SR 120/ROSWELL RD"
    }]
}, {
    "coord": [31.732124, -84.17188],
    "cams": [{
        "id": "cctv_46353",
        "url": "/georgiasnapshots/LEE-CAM-002.jpg",
        "name": "SR 3 : DAWSON RD/ ROBERT E LEE RD"
    }]
}, {
    "coord": [34.000472, -84.070624],
    "cams": [{
        "id": "cctv_46317",
        "url": "/georgiasnapshots/GC-CAM-267.jpg",
        "name": "OLD PEACHTREE RD : SEVER RD"
    }]
}, {
    "coord": [33.773428, -84.370752],
    "cams": [{
        "id": "cctv_7194",
        "stream": "/georgiavss1/atl-cam-206.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : Boulevard / Monroe Dr"
    }]
}, {
    "coord": [33.758408, -84.384224],
    "cams": [{
        "id": "cctv_16203",
        "url": "/georgiasnapshots/ATL-CAM-979.jpg",
        "name": "Courtland St : Ellis St"
    }]
}, {
    "coord": [34.074092, -83.978728],
    "cams": [{
        "id": "cctv_10368",
        "url": "/georgiasnapshots/GWIN-CAM-194.jpg",
        "name": "SR 324 : CROSS RD / E of SR 20"
    }]
}, {
    "coord": [33.927524, -84.051936],
    "cams": [{
        "id": "cctv_13266",
        "url": "/georgiasnapshots/GWIN-CAM-281.jpg",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Windsor Dr / Arnold Rd"
    }]
}, {
    "coord": [33.434394, -84.18824],
    "cams": [{
        "id": "cctv_13233",
        "stream": "/georgiavss4/gdot-cam-754.stream/playlist.m3u8",
        "name": "I-75 : N OF SR 20/81"
    }]
}, {
    "coord": [33.860704, -84.368896],
    "cams": [{
        "id": "cctv_12961",
        "stream": "/georgiavss4/gdot-cam-817.stream/playlist.m3u8",
        "name": "GA 400 : S OF WIEUCA RD"
    }]
}, {
    "coord": [33.920508, -84.139176],
    "cams": [{
        "id": "cctv_10246",
        "url": "/georgiasnapshots/GWIN-CAM-072.jpg",
        "name": "SR 378 : E of PLANTATION LN / E of ARC WAY"
    }]
}, {
    "coord": [33.836648, -84.336576],
    "cams": [{
        "id": "cctv_13589",
        "stream": "/georgiavss1/brok-cam-004.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Corporate Blvd / Curtis Dr"
    }]
}, {
    "coord": [33.8354, -84.470408],
    "cams": [{
        "id": "cctv_9122",
        "url": "/georgiasnapshots/COBB-CAM-330.jpg",
        "name": "Atlanta Rd : Plant Atkinson Rd"
    }]
}, {
    "coord": [33.7474, -84.349032],
    "cams": [{
        "id": "cctv_6702",
        "stream": "/georgiavss1/atl-cam-037.stream/playlist.m3u8",
        "name": "SR 42 (Moreland Ave) : SR 154 (Memorial Drive)"
    }]
}, {
    "coord": [34.057376, -83.99476],
    "cams": [{
        "id": "cctv_15967",
        "stream": "/georgiavss2/gdot-cam-168.stream/playlist.m3u8",
        "name": "I-85 : AT SR 20"
    }]
}, {
    "coord": [34.003144, -84.600312],
    "cams": [{
        "id": "cctv_10144",
        "url": "/georgiasnapshots/COBB-CAM-345.jpg",
        "name": "SR 3/Cobb Pkwy : Old 41 Hwy"
    }]
}, {
    "coord": [31.176496, -83.761632],
    "cams": [{
        "id": "cctv_46342",
        "url": "/georgiasnapshots/COLQ-CAM-001.jpg",
        "name": "SR 35 : SR 37/ SR133 SPENCE FIELD RD"
    }]
}, {
    "coord": [33.002864, -83.86644],
    "cams": [{
        "id": "cctv_13594",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-182.jpg",
        "name": "I-75 : N of Rumble Rd / BIBB-CMS-001"
    }]
}, {
    "coord": [33.9089, -84.229496],
    "cams": [{
        "id": "cctv_5358",
        "stream": "/georgiavss2/gdot-cam-086.stream/playlist.m3u8",
        "name": "I-85 : S OF JIMMY CARTER"
    }]
}, {
    "coord": [33.5836, -84.378],
    "cams": [{
        "id": "cctv_10444",
        "url": "/georgiasnapshots/CLAY-CAM-029.jpg",
        "name": "SR 3 / Tara Blvd : Upper Riverdale Rd"
    }]
}, {
    "coord": [33.776564, -84.61648],
    "cams": [{
        "id": "cctv_15416",
        "stream": "/georgiavss2/gdot-cam-313.stream/playlist.m3u8",
        "name": "I-20 : West of Thornton Rd"
    }]
}, {
    "coord": [33.897476, -83.959896],
    "cams": [{
        "id": "cctv_10344",
        "url": "/georgiasnapshots/GWIN-CAM-170.jpg",
        "name": "SR 20 : N of ROSEBUD RD"
    }]
}, {
    "coord": [33.759492, -84.379728],
    "cams": [{
        "id": "cctv_4930",
        "stream": "/georgiavss2/gdot-cam-012.stream/playlist.m3u8",
        "name": "75/85 : INTL BLVD"
    }]
}, {
    "coord": [34.011484, -84.192056],
    "cams": [{
        "id": "cctv_6821",
        "stream": "/georgiavss1/cojc-cam-110.stream/playlist.m3u8",
        "name": "SR 141 (Medlock Bridge Rd) : Old Alabama Rd"
    }]
}, {
    "coord": [33.469326, -82.067024],
    "cams": [{
        "id": "cctv_32871",
        "url": "/georgiasnapshots/AUG-CAM-271.jpg",
        "name": "Wrightsboro Rd. : North Leg/Jackson Rd."
    }]
}, {
    "coord": [33.697472, -84.282952],
    "cams": [{
        "id": "cctv_5034",
        "stream": "/georgiavss2/gdot-cam-267.stream/playlist.m3u8",
        "name": "I-285 : W OF PANTHERSVILLE RD"
    }]
}, {
    "coord": [33.755644, -84.398064],
    "cams": [{
        "id": "cctv_15278",
        "stream": "/georgiavss1/atl-cam-916.stream/playlist.m3u8",
        "name": "Centennial Olympic Park Dr : Andrew Young Intl Blvd South"
    }]
}, {
    "coord": [33.848264, -84.315504],
    "cams": [{
        "id": "cctv_13574",
        "url": "/georgiasnapshots/BROK-CAM-203.jpg",
        "name": "SR 155 / Clairmont Rd : Century Pl"
    }]
}, {
    "coord": [32.80701, -83.724752],
    "cams": [{
        "id": "cctv_6010",
        "stream": "/georgiavss5/bibb-cam-019.stream/playlist.m3u8",
        "name": "I-475 : US 80 ENT RAMP"
    }]
}, {
    "coord": [32.051758, -81.10024],
    "cams": [{
        "id": "cctv_15741",
        "url": "/georgiasnapshots/SAV-CAM-019.jpg",
        "name": "SR 26/VICTORY DR : ABERCORN ST"
    }]
}, {
    "coord": [33.772172, -84.249392],
    "cams": [{
        "id": "cctv_13715",
        "stream": "/georgiavss1/dek-cam-153.stream/playlist.m3u8",
        "name": "SR 154 (Memorial Drive) : Kensington Rd"
    }]
}, {
    "coord": [33.621808, -84.427976],
    "cams": [{
        "id": "cctv_5263",
        "stream": "/georgiavss4/gdot-cam-664.stream/playlist.m3u8",
        "name": "I-285 : MAIN LANES - NO. 1"
    }]
}, {
    "coord": [33.859572, -84.683544],
    "cams": [{
        "id": "cctv_46417",
        "url": "/georgiasnapshots/COBB-CAM-451.jpg",
        "name": "SR 6 Bus/Marietta St : Lewis Rd"
    }]
}, {
    "coord": [33.699424, -84.57692],
    "cams": [{
        "id": "cctv_13169",
        "url": "/georgiasnapshots/FULT-CAM-002.jpg",
        "name": "SR 6 : SR 154-166 (Campbellton Road)"
    }]
}, {
    "coord": [34.017452, -84.600712],
    "cams": [{
        "id": "cctv_16324",
        "url": "/georgiasnapshots/COBB-CAM-347.jpg",
        "name": "McCollum Pkwy : Cessna Ln"
    }]
}, {
    "coord": [33.823616, -84.120096],
    "cams": [{
        "id": "cctv_10358",
        "url": "/georgiasnapshots/GWIN-CAM-184.jpg",
        "name": "WEST PARK PLACE BLVD : S of ROCKBRIDGE RD (N)"
    }]
}, {
    "coord": [32.453236, -84.987752],
    "cams": [{
        "id": "cctv_9012",
        "url": "/georgiasnapshots/COLU-CAM-001.jpg",
        "name": "SR 1 / Veterans Parkway : Victory Dr"
    }]
}, {
    "coord": [33.95074, -84.520352],
    "cams": [{
        "id": "cctv_15474",
        "stream": "/georgiavss3/gdot-cam-499.stream/playlist.m3u8",
        "name": "ROSWELL RD : US 41/COBB PKWY"
    }]
}, {
    "coord": [34.150972, -84.514328],
    "cams": [{
        "id": "cctv_15437",
        "stream": "/georgiavss3/gdot-cam-568.stream/playlist.m3u8",
        "name": "I-575 : 1/2 MI N OF SIXES RD"
    }]
}, {
    "coord": [33.889872, -84.143968],
    "cams": [{
        "id": "cctv_13110",
        "url": "/georgiasnapshots/GWIN-CAM-286.jpg",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Holly Ridge Dr/Pine St"
    }]
}, {
    "coord": [33.591108, -84.501808],
    "cams": [{
        "id": "cctv_4949",
        "stream": "/georgiavss2/gdot-cam-187.stream/playlist.m3u8",
        "name": "I-85 : S OF BUFFINGTON RD"
    }]
}, {
    "coord": [31.272404, -81.56212],
    "cams": [{
        "id": "cctv_46252",
        "url": "/georgiasnapshots/GLY-CAM-001.jpg",
        "name": "SR 32/SR 99 (Grants Ferry Road) : SR 27/US 341"
    }]
}, {
    "coord": [34.0301, -84.318496],
    "cams": [{
        "id": "cctv_5342",
        "stream": "/georgiavss4/gdot-cam-838.stream/playlist.m3u8",
        "name": "GA 400 : S OF MANSELL RD"
    }]
}, {
    "coord": [33.61328, -84.486816],
    "cams": [{
        "id": "cctv_4953",
        "stream": "/georgiavss2/gdot-cam-190.stream/playlist.m3u8",
        "name": "I-85 : S OF I-285 FULTON CO."
    }]
}, {
    "coord": [33.692152, -84.349392],
    "cams": [{
        "id": "cctv_6832",
        "url": "/georgiasnapshots/ATL-CAM-055.jpg",
        "name": "SR 42 (Moreland Ave) : Constitution Rd"
    }]
}, {
    "coord": [34.0275, -84.575504],
    "cams": [{
        "id": "cctv_5162",
        "stream": "/georgiavss3/gdot-cam-434.stream/playlist.m3u8",
        "name": "I-75 : N OF BIG SHANTY RD"
    }]
}, {
    "coord": [34.282116, -84.07608],
    "cams": [{
        "id": "cctv_32568",
        "url": "/georgiasnapshots/FORS-CAM-035.jpg",
        "name": "SR 400 : Settingdown Rd"
    }]
}, {
    "coord": [33.832824, -84.33704],
    "cams": [{
        "id": "cctv_15246",
        "stream": "/georgiavss1/brok-cam-053.stream/playlist.m3u8",
        "name": "SR 42 / N Druid Hills Rd : I-85 SB Ramp"
    }]
}, {
    "coord": [33.955552, -84.132],
    "cams": [{
        "id": "cctv_10327",
        "url": "/georgiasnapshots/GWIN-CAM-153.jpg",
        "name": "PLEASANT HILL RD : GWINNETT PLACE DR"
    }]
}, {
    "coord": [33.744644, -85.287808],
    "cams": [{
        "id": "cctv_16148",
        "url": "/georgiasnapshots/GDOT-CAM-SR8-4.1.jpg",
        "name": "SR 8 : HEAD AVE"
    }]
}, {
    "coord": [33.844168, -84.327408],
    "cams": [{
        "id": "cctv_15347",
        "stream": "http://vss12live.dot.ga.gov:80/lo/brok-cam-009.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Briarwood Rd"
    }]
}, {
    "coord": [32.09945, -81.324224],
    "cams": [{
        "id": "cctv_46559",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-152.00.jpg",
        "name": "I-16 : SR 17"
    }]
}, {
    "coord": [34.457908, -84.454664],
    "cams": [{
        "id": "cctv_46483",
        "url": "/georgiasnapshots/PICK-CAM-003.jpg",
        "name": "SR 515 : Camp Rd"
    }]
}, {
    "coord": [33.9065, -84.280096],
    "cams": [{
        "id": "cctv_4995",
        "stream": "/georgiavss2/gdot-cam-229.stream/playlist.m3u8",
        "name": "I-285 : THE GM PLANT"
    }]
}, {
    "coord": [33.732112, -84.763],
    "cams": [{
        "id": "cctv_13094",
        "stream": "/georgiavss1/doug-cam-033.stream/playlist.m3u8",
        "name": "SR 5 (Bill Arp Rd) : Rose Ave/Bright Star Conn"
    }]
}, {
    "coord": [32.086804, -81.159296],
    "cams": [{
        "id": "cctv_46527",
        "url": "/georgiasnapshots/CHAT-CAM-008.jpg",
        "name": "SR 26 : Chatham Pkwy"
    }]
}, {
    "coord": [34.0847, -84.264096],
    "cams": [{
        "id": "cctv_5349",
        "stream": "/georgiavss4/gdot-cam-846.stream/playlist.m3u8",
        "name": "GA 400 : S OF WINDWARD PKWY"
    }]
}, {
    "coord": [34.048548, -84.611704],
    "cams": [{
        "id": "cctv_32602",
        "url": "/georgiasnapshots/COBB-CAM-289.jpg",
        "name": "Jiles Rd : Baker Rd"
    }]
}, {
    "coord": [32.050698, -81.15304],
    "cams": [{
        "id": "cctv_15732",
        "url": "/georgiasnapshots/SAV-CAM-014.jpg",
        "name": "SR 25/US 17 : GAMBLE RD"
    }]
}, {
    "coord": [33.959608, -84.010592],
    "cams": [{
        "id": "cctv_10256",
        "url": "/georgiasnapshots/GWIN-CAM-082.jpg",
        "name": "OLD NORCROSS RD : E of HURRICANE SHOALS RD"
    }]
}, {
    "coord": [33.9465, -84.1426],
    "cams": [{
        "id": "cctv_5217",
        "stream": "/georgiavss3/gdot-cam-554.stream/playlist.m3u8",
        "name": "I-85 : STEVE REYNOLDS RAMP METER"
    }]
}, {
    "coord": [33.545746, -84.5764],
    "cams": [{
        "id": "cctv_4938",
        "stream": "/georgiavss2/gdot-cam-177.stream/playlist.m3u8",
        "name": "I-85 : SENOIA RD"
    }]
}, {
    "coord": [33.929696, -84.347608],
    "cams": [{
        "id": "cctv_32623",
        "url": "/georgiasnapshots/DUN-CAM-141.jpg",
        "name": "Perimeter Center West : N of Crown Pointe Pkwy CCTV"
    }]
}, {
    "coord": [33.894568, -84.544032],
    "cams": [{
        "id": "cctv_32590",
        "url": "/georgiasnapshots/COBB-CAM-030.jpg",
        "name": "Windy Hill Rd : Benson Poole Rd"
    }]
}, {
    "coord": [34.870652, -85.037904],
    "cams": [{
        "id": "cctv_15163",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-342.jpg",
        "name": "I-75 : CATOOSA CO WEIGH STATION"
    }]
}, {
    "coord": [33.855108, -84.482856],
    "cams": [{
        "id": "cctv_15598",
        "stream": "/georgiavss4/gdot-cam-619.stream/playlist.m3u8",
        "name": "I-285 : ORCHARD RD"
    }]
}, {
    "coord": [33.771364, -84.395912],
    "cams": [{
        "id": "cctv_15269",
        "url": "/georgiasnapshots/ATL-CAM-908.jpg",
        "name": "SR 8 (North Ave) : Luckie St / Tech Pkwy"
    }]
}, {
    "coord": [33.671656, -84.329568],
    "cams": [{
        "id": "cctv_5041",
        "stream": "/georgiavss2/gdot-cam-273.stream/playlist.m3u8",
        "name": "I-285 : I-675"
    }]
}, {
    "coord": [33.428054, -84.689688],
    "cams": [{
        "id": "cctv_32931",
        "url": "/georgiasnapshots/COW-CAM-016.jpg",
        "name": "SR 154 : Hammock Rd"
    }]
}, {
    "coord": [33.995588, -84.559088],
    "cams": [{
        "id": "cctv_15486",
        "stream": "/georgiavss3/gdot-cam-423.stream/playlist.m3u8",
        "name": "I-75 : S OF I-575"
    }]
}, {
    "coord": [34.687116, -85.002384],
    "cams": [{
        "id": "cctv_16304",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-328.35.jpg",
        "name": "I-75 : SR 3"
    }]
}, {
    "coord": [33.715504, -84.310688],
    "cams": [{
        "id": "cctv_5105",
        "stream": "/georgiavss3/gdot-cam-365.stream/playlist.m3u8",
        "name": "I-20 : GRESHAM RD"
    }]
}, {
    "coord": [34.005036, -84.08616],
    "cams": [{
        "id": "cctv_46312",
        "url": "/georgiasnapshots/GC-CAM-262.jpg",
        "name": "OLD PEACHTREE RD : MEADOW CHURCH RD"
    }]
}, {
    "coord": [34.173636, -84.126992],
    "cams": [{
        "id": "cctv_13227",
        "stream": "/georgiavss1/fors-cam-004.stream/playlist.m3u8",
        "name": "SR 20 (Buford Hwy) : Haw Creek Pkwy / Nuckolls Rd"
    }]
}, {
    "coord": [32.111686, -81.235016],
    "cams": [{
        "id": "cctv_46532",
        "url": "/georgiasnapshots/CHAT-CAM-013.jpg",
        "name": "SR 26 : Bourne Ave/ Continental Blvd"
    }]
}, {
    "coord": [33.669232, -84.41564],
    "cams": [{
        "id": "cctv_5292",
        "stream": "/georgiavss2/gdot-cam-072.stream/playlist.m3u8",
        "name": "I-85 : N OF SYLVAN RD"
    }]
}, {
    "coord": [33.527622, -84.662568],
    "cams": [{
        "id": "cctv_46449",
        "url": "/georgiasnapshots/FULT-CAM-027.jpg",
        "name": "SR 14/ US 29/ Main St : SR 154/ Cascade Palmetto Hwy"
    }]
}, {
    "coord": [33.892992, -84.466296],
    "cams": [{
        "id": "cctv_13603",
        "url": "/georgiasnapshots/COBB-CAM-700F.jpg",
        "name": "Windy Ridge Pkwy : Circle 75 Pkwy"
    }]
}, {
    "coord": [34.0348, -84.561696],
    "cams": [{
        "id": "cctv_5196",
        "stream": "/georgiavss3/gdot-cam-505.stream/playlist.m3u8",
        "name": "I-575 : S OF CHASTAIN RD"
    }]
}, {
    "coord": [34.17932, -83.915208],
    "cams": [{
        "id": "cctv_32587",
        "url": "/georgiasnapshots/HALL-CAM-007.jpg",
        "name": "I-985 SB : Spout Springs Rd"
    }]
}, {
    "coord": [34.060692, -84.592776],
    "cams": [{
        "id": "cctv_32597",
        "url": "/georgiasnapshots/COBB-CAM-300.jpg",
        "name": "Wade Green Rd : Wooten Lake Rd"
    }]
}, {
    "coord": [33.5883, -84.4232],
    "cams": [{
        "id": "cctv_10503",
        "url": "/georgiasnapshots/CLAY-CAM-210.jpg",
        "name": "SR 139 : East Fayetteville Rd"
    }]
}, {
    "coord": [33.5302, -84.335704],
    "cams": [{
        "id": "cctv_10478",
        "url": "/georgiasnapshots/CLAY-CAM-124.jpg",
        "name": "SR 138 : WALT STEPHENS RD"
    }]
}, {
    "coord": [33.918044, -84.467128],
    "cams": [{
        "id": "cctv_7310",
        "url": "/georgiasnapshots/COBB-CAM-047.jpg",
        "name": "Powers Ferry Rd : Terrell Mill Rd"
    }]
}, {
    "coord": [32.619712, -83.599688],
    "cams": [{
        "id": "cctv_15457",
        "url": "/georgiasnapshots/GDOT-CAM-SR247-18.7.jpg",
        "name": "SR 247 : SR 247C/Robins AFB"
    }]
}, {
    "coord": [33.745652, -84.340848],
    "cams": [{
        "id": "cctv_5097",
        "stream": "/georgiavss3/gdot-cam-358.stream/playlist.m3u8",
        "name": "I-20 : E OF MORELAND AVE"
    }]
}, {
    "coord": [33.450184, -84.701008],
    "cams": [{
        "id": "cctv_32923",
        "url": "/georgiasnapshots/COW-CAM-015.jpg",
        "name": "SR 14/US 29 : SR 154/Arbor Springs Pky"
    }]
}, {
    "coord": [34.092432, -84.00524],
    "cams": [{
        "id": "cctv_10352",
        "url": "/georgiasnapshots/GWIN-CAM-178.jpg",
        "name": "SR 20 : Satellite Blvd"
    }]
}, {
    "coord": [34.950976, -85.241816],
    "cams": [{
        "id": "cctv_13553",
        "url": "/georgiasnapshots/GDOT-CAM-SR2-1.9.jpg",
        "name": "SR 2 : Battlefield Centre"
    }]
}, {
    "coord": [34.446176, -83.120632],
    "cams": [{
        "id": "cctv_32571",
        "url": "/georgiasnapshots/FRKN-CAM-001.jpg",
        "name": "SR 17 : I-85 NB Ramp"
    }]
}, {
    "coord": [33.878084, -84.449552],
    "cams": [{
        "id": "cctv_15581",
        "stream": "/georgiavss3/gdot-cam-456.stream/playlist.m3u8",
        "name": "I-75 : S OF CUMBERLAND BLVD"
    }]
}, {
    "coord": [33.88742, -84.459168],
    "cams": [{
        "id": "cctv_15262",
        "url": "/georgiasnapshots/GDOT-CAM-065.jpg",
        "name": "I-75 : N of Akers Mill Rd"
    }]
}, {
    "coord": [34.0401, -84.578696],
    "cams": [{
        "id": "cctv_5165",
        "stream": "/georgiavss3/gdot-cam-437.stream/playlist.m3u8",
        "name": "I-75 : N OF CHASTAIN RD"
    }]
}, {
    "coord": [33.323094, -84.777544],
    "cams": [{
        "id": "cctv_12983",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-041.jpg",
        "name": "I-85 : US 27/29"
    }]
}, {
    "coord": [33.738488, -84.408096],
    "cams": [{
        "id": "cctv_13077",
        "stream": "/georgiavss1/atl-cam-081.stream/playlist.m3u8",
        "name": "SR 3 (Metropolitan Pkwy) : Ralph David Abernathy Blvd"
    }]
}, {
    "coord": [33.5639, -84.3444],
    "cams": [{
        "id": "cctv_10458",
        "url": "/georgiasnapshots/CLAY-CAM-054.jpg",
        "name": "SR 54 / Jonesboro Rd : Southern Rd"
    }]
}, {
    "coord": [34.028056, -84.335448],
    "cams": [{
        "id": "cctv_6257",
        "url": "/georgiasnapshots/ROSWELL-CAM-138.jpg",
        "name": "SR 140 : Warsaw Rd"
    }]
}, {
    "coord": [33.42731, -84.182024],
    "cams": [{
        "id": "cctv_6245",
        "url": "/georgiasnapshots/HNRY-CAM-914.jpg",
        "name": "SR 20 : I-75 SB"
    }]
}, {
    "coord": [33.711504, -84.287192],
    "cams": [{
        "id": "cctv_5108",
        "stream": "/georgiavss3/gdot-cam-368.stream/playlist.m3u8",
        "name": "I-20 : W OF LLOYD RD"
    }]
}, {
    "coord": [34.0464, -84.3044],
    "cams": [{
        "id": "cctv_5416",
        "stream": "/georgiavss4/gdot-cam-840.stream/playlist.m3u8",
        "name": "GA 400 : S OF MAXWELL RD"
    }]
}, {
    "coord": [33.91772, -84.290432],
    "cams": [{
        "id": "cctv_10161",
        "url": "/georgiasnapshots/GDOT-CAM-584.jpg",
        "name": "I-285 : BEFORE N PEACHTREE"
    }]
}, {
    "coord": [34.001496, -84.594912],
    "cams": [{
        "id": "cctv_7354",
        "url": "/georgiasnapshots/COBB-CAM-337.jpg",
        "name": "SR 3/Cobb Pkwy : CMS (Old 41)"
    }]
}, {
    "coord": [34.6776, -84.477816],
    "cams": [{
        "id": "cctv_16102",
        "url": "/georgiasnapshots/GDOT-CAM-SR515-9.55.jpg",
        "name": "SR 515 : MADDOX DR"
    }]
}, {
    "coord": [33.436962, -84.190704],
    "cams": [{
        "id": "cctv_13245",
        "stream": "/georgiavss4/gdot-cam-753.stream/playlist.m3u8",
        "name": "I-75 : N OF SR 20/81"
    }]
}, {
    "coord": [33.99168, -84.337544],
    "cams": [{
        "id": "cctv_5337",
        "stream": "/georgiavss4/gdot-cam-833.stream/playlist.m3u8",
        "name": "GA 400 : N OF NORTHRIDGE"
    }]
}, {
    "coord": [34.067776, -83.952344],
    "cams": [{
        "id": "cctv_10371",
        "url": "/georgiasnapshots/GWIN-CAM-197.jpg",
        "name": "SR 324 : IVY CREEK RD"
    }]
}, {
    "coord": [32.48927, -84.931776],
    "cams": [{
        "id": "cctv_9133",
        "url": "/georgiasnapshots/COLU-CAM-012.jpg",
        "name": "Spur 22/Macon Rd : University Ave/Elm Dr"
    }]
}, {
    "coord": [34.029592, -84.04784],
    "cams": [{
        "id": "cctv_10414",
        "url": "/georgiasnapshots/GCDOT-IVDS-179-PH1.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : I-85 NB"
    }]
}, {
    "coord": [33.71622, -85.027392],
    "cams": [{
        "id": "cctv_9297",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-019.jpg",
        "name": "I-20 : GA 113 / EXIT 19"
    }]
}, {
    "coord": [31.297778, -82.85264],
    "cams": [{
        "id": "cctv_46327",
        "url": "/georgiasnapshots/ATKI-CAM-001.jpg",
        "name": "SR 31 : SR 520/ South Ga. Parkway"
    }]
}, {
    "coord": [33.864176, -84.289376],
    "cams": [{
        "id": "cctv_5365",
        "stream": "/georgiavss2/gdot-cam-093.stream/playlist.m3u8",
        "name": "I-85 : SHALLOWFORD RD"
    }]
}, {
    "coord": [33.705384, -84.198912],
    "cams": [{
        "id": "cctv_8802",
        "stream": "/georgiavss3/gdot-cam-381.stream/playlist.m3u8",
        "name": "I-20 : E OF WESLEY CHAPEL"
    }]
}, {
    "coord": [33.762116, -84.333],
    "cams": [{
        "id": "cctv_46392",
        "url": "/georgiasnapshots/ATL-CAM-990.jpg",
        "name": "Dekalb Ave : Clifton Rd"
    }]
}, {
    "coord": [33.9328, -84.166296],
    "cams": [{
        "id": "cctv_4923",
        "stream": "/georgiavss2/gdot-cam-105.stream/playlist.m3u8",
        "name": "I-85 : N OF INDIAN TRAIL"
    }]
}, {
    "coord": [34.01424, -84.561224],
    "cams": [{
        "id": "cctv_7299",
        "url": "/georgiasnapshots/COBB-CAM-016.jpg",
        "name": "Barrett Pkwy : Mall Blvd"
    }]
}, {
    "coord": [34.085516, -84.189568],
    "cams": [{
        "id": "cctv_16250",
        "url": "/georgiasnapshots/COJC-CAM-655.jpg",
        "name": "Jones Bridge Rd : McGinnis Ferry Rd"
    }]
}, {
    "coord": [33.68728, -84.401368],
    "cams": [{
        "id": "cctv_4916",
        "stream": "/georgiavss2/gdot-cam-001.stream/playlist.m3u8",
        "name": "I-85 : S OF LANGFORD PKWY"
    }]
}, {
    "coord": [34.024088, -84.258424],
    "cams": [{
        "id": "cctv_16232",
        "url": "/georgiasnapshots/COJC-CAM-545.jpg",
        "name": "Old Alabama Rd : Preston Oaks/Breckenridge Close"
    }]
}, {
    "coord": [33.74312, -84.367576],
    "cams": [{
        "id": "cctv_5093",
        "stream": "/georgiavss3/gdot-cam-354.stream/playlist.m3u8",
        "name": "I-20 : BOULEVARD"
    }]
}, {
    "coord": [31.70589, -83.252824],
    "cams": [{
        "id": "cctv_46331",
        "url": "/georgiasnapshots/BENH-CAM-002.jpg",
        "name": "SR 11 : ROANOKE DR"
    }]
}, {
    "coord": [34.075876, -84.622816],
    "cams": [{
        "id": "cctv_15512",
        "stream": "/georgiavss3/gdot-cam-532.stream/playlist.m3u8",
        "name": "I-75 : S OF WOODSTOCK RD"
    }]
}, {
    "coord": [33.849096, -84.493648],
    "cams": [{
        "id": "cctv_7349",
        "url": "/georgiasnapshots/COBB-CAM-332.jpg",
        "name": "Atlanta Rd : Cumberland Pkwy"
    }]
}, {
    "coord": [32.085464, -81.282912],
    "cams": [{
        "id": "cctv_46565",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-155.00.jpg",
        "name": "I-16 : Pooler Pkwy"
    }]
}, {
    "coord": [33.696928, -84.429632],
    "cams": [{
        "id": "cctv_46428",
        "url": "/georgiasnapshots/FULT-CAM-010.jpg",
        "name": "SR 14/ US 29/ N. Main : Knotts Ave"
    }]
}, {
    "coord": [33.810168, -84.407776],
    "cams": [{
        "id": "cctv_46505",
        "stream": "/georgiavss1/atl-cam-093.stream/playlist.m3u8",
        "name": "SR 3/Northside Dr : Collier Rd"
    }]
}, {
    "coord": [33.803672, -84.04324],
    "cams": [{
        "id": "cctv_10334",
        "url": "/georgiasnapshots/GWIN-CAM-160.jpg",
        "name": "SR 124 : ANNISTOWN RD / CENTERVILLE-ROSEBUD RD"
    }]
}, {
    "coord": [33.555564, -84.553584],
    "cams": [{
        "id": "cctv_4940",
        "stream": "/georgiavss2/gdot-cam-179.stream/playlist.m3u8",
        "name": "I-85 : FAYETTEVILLE RD"
    }]
}, {
    "coord": [34.220516, -84.507464],
    "cams": [{
        "id": "cctv_16171",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-9.6.jpg",
        "name": "SR 20/HERNDON LN : MARIETTA HWY"
    }]
}, {
    "coord": [34.346764, -83.319616],
    "cams": [{
        "id": "cctv_13323",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-160.jpg",
        "name": "I-85 : SR 51 / Old Federal Road"
    }]
}, {
    "coord": [33.410344, -84.163344],
    "cams": [{
        "id": "cctv_15423",
        "url": "c2c.dot.ga.gov/snapshots/HNRY-CAM-923.jpg",
        "name": "SR 155 : I-75 SOUTH"
    }]
}, {
    "coord": [33.528934, -84.449192],
    "cams": [{
        "id": "cctv_15362",
        "url": "/georgiasnapshots/FAY-CAM-210.jpg",
        "name": "SR 314 / West Fayetteville Rd : SR 279"
    }]
}, {
    "coord": [33.751168, -84.400072],
    "cams": [{
        "id": "cctv_16207",
        "url": "/georgiasnapshots/ATL-CAM-983.jpg",
        "name": "Centennial Olympic Park Dr : Nelson St"
    }]
}, {
    "coord": [32.8614, -85.171248],
    "cams": [{
        "id": "cctv_13205",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-001.jpg",
        "name": "I-85 : Harris Co Welcome Center"
    }]
}, {
    "coord": [33.890236, -84.456064],
    "cams": [{
        "id": "cctv_13744",
        "url": "/georgiasnapshots/COBB-CAM-125.jpg",
        "name": "Cumberland Blvd : Akers Mill Rd North"
    }]
}, {
    "coord": [33.730232, -84.368328],
    "cams": [{
        "id": "cctv_16069",
        "stream": "/georgiavss1/atl-cam-969.stream/playlist.m3u8",
        "name": "Boulevard : Atlanta Ave"
    }]
}, {
    "coord": [33.759756, -84.349296],
    "cams": [{
        "id": "cctv_32940",
        "url": "/georgiasnapshots/ATL-CAM-061.jpg",
        "name": "Dekalb Ave : Moreland Ave"
    }]
}, {
    "coord": [33.727516, -84.762072],
    "cams": [{
        "id": "cctv_12949",
        "stream": "/georgiavss1/doug-cam-035.stream/playlist.m3u8",
        "name": "SR 5 (Bill Arp Rd) : I-20 EB offramp"
    }]
}, {
    "coord": [33.553002, -84.3476],
    "cams": [{
        "id": "cctv_10450",
        "url": "/georgiasnapshots/CLAY-CAM-043.jpg",
        "name": "SR 54 : BATTLE CREEK RD"
    }]
}, {
    "coord": [33.79972, -84.487992],
    "cams": [{
        "id": "cctv_5392",
        "stream": "/georgiavss4/gdot-cam-955.stream/playlist.m3u8",
        "name": "I-285 : BOLTON RD"
    }]
}, {
    "coord": [33.75306, -84.3876],
    "cams": [{
        "id": "cctv_16122",
        "url": "/georgiasnapshots/ATL-CAM-981.jpg",
        "name": "Decatur St : Peachtree Center Ave/Central Ave"
    }]
}, {
    "coord": [33.891476, -84.75488],
    "cams": [{
        "id": "cctv_13172",
        "url": "/georgiasnapshots/PAUL-CAM-007.jpg",
        "name": "SR 6 : SR 92"
    }]
}, {
    "coord": [34.057384, -84.131672],
    "cams": [{
        "id": "cctv_7202",
        "url": "/georgiasnapshots/COJC-CAM-750.jpg",
        "name": "McGinnis Ferry Rd : Bell Rd/Old Atlanta Rd"
    }]
}, {
    "coord": [33.793488, -84.289344],
    "cams": [{
        "id": "cctv_9156",
        "stream": "/georgiavss1/dek-cam-008.stream/playlist.m3u8",
        "name": "SR 8 (Scott Blvd) : N Decatur Rd"
    }]
}, {
    "coord": [33.619088, -84.432888],
    "cams": [{
        "id": "cctv_5254",
        "stream": "/georgiavss4/gdot-cam-656.stream/playlist.m3u8",
        "name": "I-285 : MAIN LANES - NO. 6"
    }]
}, {
    "coord": [34.243032, -85.161648],
    "cams": [{
        "id": "cctv_15376",
        "url": "/georgiasnapshots/FLYD-CAM-006.jpg",
        "name": "SR 1 : E Eighth Street"
    }]
}, {
    "coord": [33.995628, -84.409048],
    "cams": [{
        "id": "cctv_13132",
        "url": "/georgiasnapshots/COBB-CAM-165.jpg",
        "name": "SR 120 / Roswell Rd : Timber Ridge Rd"
    }]
}, {
    "coord": [32.815686, -83.698384],
    "cams": [{
        "id": "cctv_5981",
        "url": "/georgiasnapshots/BIBB-CAM-519.jpg",
        "name": "EISENHOWER PKWY : BLOOMFIELD DR"
    }]
}, {
    "coord": [33.480606, -84.449328],
    "cams": [{
        "id": "cctv_10178",
        "stream": "/georgiavss1/fay-cam-205.stream/playlist.m3u8",
        "name": "SR 314 : Beckette Ln / Pavilion Pkwy"
    }]
}, {
    "coord": [34.478988, -84.934344],
    "cams": [{
        "id": "cctv_16096",
        "url": "/georgiasnapshots/GDOT-CAM-SR53-8.75.jpg",
        "name": "SR 53 : SR 3"
    }]
}, {
    "coord": [33.700676, -84.116848],
    "cams": [{
        "id": "cctv_13353",
        "url": "/georgiasnapshots/DEK-CAM-043.jpg",
        "name": "Evans Mill Rd : I-20 WB Ramp"
    }]
}, {
    "coord": [33.919488, -84.483048],
    "cams": [{
        "id": "cctv_15607",
        "stream": "/georgiavss3/gdot-cam-471.stream/playlist.m3u8",
        "name": "I-75 : DELK RD EXIT"
    }]
}, {
    "coord": [32.855332, -83.743168],
    "cams": [{
        "id": "cctv_6017",
        "stream": "/georgiavss5/bibb-cam-026.stream/playlist.m3u8",
        "name": "I-475 : MILE POST 7"
    }]
}, {
    "coord": [34.33152, -83.782472],
    "cams": [{
        "id": "cctv_32641",
        "url": "/georgiasnapshots/HALL-CAM-022.jpg",
        "name": "SR 365 : Howard Rd"
    }]
}, {
    "coord": [34.038024, -84.347408],
    "cams": [{
        "id": "cctv_6254",
        "url": "/georgiasnapshots/ROSWELL-CAM-200.jpg",
        "name": "SR 92 : Mansell Rd"
    }]
}, {
    "coord": [33.695864, -84.080392],
    "cams": [{
        "id": "cctv_15318",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-076.jpg",
        "name": "I-20 : east of Turner Hill Rd"
    }]
}, {
    "coord": [34.069348, -84.175272],
    "cams": [{
        "id": "cctv_16245",
        "url": "/georgiasnapshots/COJC-CAM-710.jpg",
        "name": "McGinnis Ferry Rd : Hospital Pkwy"
    }]
}, {
    "coord": [33.48907, -82.005672],
    "cams": [{
        "id": "cctv_32843",
        "url": "/georgiasnapshots/AUG-CAM-041.jpg",
        "name": "Broad St. : Milledge"
    }]
}, {
    "coord": [33.946952, -84.486336],
    "cams": [{
        "id": "cctv_16302",
        "url": "/georgiasnapshots/COBB-CAM-097.jpg",
        "name": "Lower Roswell Rd : Old Sewell Rd"
    }]
}, {
    "coord": [33.97432, -84.479568],
    "cams": [{
        "id": "cctv_13117",
        "url": "/georgiasnapshots/COBB-CAM-160.jpg",
        "name": "SR 120 / Roswell Rd : East Piedmont Rd"
    }]
}, {
    "coord": [33.776592, -84.59088],
    "cams": [{
        "id": "cctv_15427",
        "stream": "/georgiavss2/gdot-cam-315.stream/playlist.m3u8",
        "name": "I-20 : East of Thornton Rd/S6"
    }]
}, {
    "coord": [33.863208, -84.480152],
    "cams": [{
        "id": "cctv_5406",
        "stream": "/georgiavss4/gdot-cam-968.stream/playlist.m3u8",
        "name": "I-285 : PACES FERRY RD"
    }]
}, {
    "coord": [33.9397, -84.248496],
    "cams": [{
        "id": "cctv_5238",
        "stream": "/georgiavss3/gdot-cam-595.stream/playlist.m3u8",
        "name": "SR 141 : JONES MILL RD"
    }]
}, {
    "coord": [33.65352, -84.367832],
    "cams": [{
        "id": "cctv_46385",
        "url": "/georgiasnapshots/GDOT-CAM-634.jpg",
        "name": "SR 54 : I-285 WB"
    }]
}, {
    "coord": [34.05106, -84.1154],
    "cams": [{
        "id": "cctv_16267",
        "url": "/georgiasnapshots/COJC-CAM-760.jpg",
        "name": "McGinnis Ferry Rd : Kemp Rd"
    }]
}, {
    "coord": [34.115764, -84.223184],
    "cams": [{
        "id": "cctv_16356",
        "url": "/georgiasnapshots/FORS-CAM-011.jpg",
        "name": "SR 400 SB Ramps : McFarland Pkwy"
    }]
}, {
    "coord": [31.594694, -81.869952],
    "cams": [{
        "id": "cctv_13179",
        "url": "/georgiasnapshots/GDOT-CAM-US341-17.9.jpg",
        "name": "341/SR 27 : US 301"
    }]
}, {
    "coord": [33.379502, -84.285872],
    "cams": [{
        "id": "cctv_6048",
        "url": "/georgiasnapshots/AMS-CAM-902.jpg",
        "name": "SR 20 : E MAIN ST"
    }]
}, {
    "coord": [33.545712, -84.270376],
    "cams": [{
        "id": "cctv_5944",
        "stream": "/georgiavss3/gdot-cam-600.stream/playlist.m3u8",
        "name": "I-675 : N OF I-75"
    }]
}, {
    "coord": [33.8808, -84.453496],
    "cams": [{
        "id": "cctv_5059",
        "stream": "/georgiavss2/gdot-cam-032.stream/playlist.m3u8",
        "name": "I-75 : CUMBERLAND BLVD"
    }]
}, {
    "coord": [33.952724, -84.336656],
    "cams": [{
        "id": "cctv_32665",
        "url": "/georgiasnapshots/DUN-CAM-150.jpg",
        "name": "Chamblee Dunwoody Rd : Roberts Dr"
    }]
}, {
    "coord": [32.833126, -83.652784],
    "cams": [{
        "id": "cctv_9188",
        "url": "/georgiasnapshots/BIBB-CAM-113.jpg",
        "name": "I-75 : Montpelier Ave"
    }]
}, {
    "coord": [33.747076, -84.69892],
    "cams": [{
        "id": "cctv_46421",
        "url": "/georgiasnapshots/DOUG-CAM-096.jpg",
        "name": "SR 92/ FAIRBURN RD : Midway Rd"
    }]
}, {
    "coord": [32.043788, -81.070848],
    "cams": [{
        "id": "cctv_15806",
        "url": "/georgiasnapshots/SAV-CAM-023.jpg",
        "name": "SR 26/VICTORY DR : TRUMAN PKWY"
    }]
}, {
    "coord": [33.6314, -84.357104],
    "cams": [{
        "id": "cctv_10516",
        "url": "/georgiasnapshots/CLAY-CAM-C600.jpg",
        "name": "HWY 54 : South of College St"
    }]
}, {
    "coord": [33.910076, -84.15744],
    "cams": [{
        "id": "cctv_10389",
        "url": "/georgiasnapshots/GWIN-CAM-223.jpg",
        "name": "INDIAN TRAIL LILBURN RD : WUTHERING WAY - WHITED WAY"
    }]
}, {
    "coord": [33.880976, -84.164584],
    "cams": [{
        "id": "cctv_13295",
        "url": "/georgiasnapshots/GWIN-CAM-289.jpg",
        "name": "SR 8 (Lawrenceville Hwy) : Harmony Grove Rd"
    }]
}, {
    "coord": [33.567224, -84.533872],
    "cams": [{
        "id": "cctv_4944",
        "stream": "/georgiavss2/gdot-cam-182.stream/playlist.m3u8",
        "name": "I-85 : SR 138"
    }]
}, {
    "coord": [34.273008, -84.813592],
    "cams": [{
        "id": "cctv_16345",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-296.30.jpg",
        "name": "I-75 : EXT 296"
    }]
}, {
    "coord": [33.570072, -84.57508],
    "cams": [{
        "id": "cctv_46395",
        "url": "/georgiasnapshots/FULT-CAM-025.jpg",
        "name": "GA 14/ US 29/ WEST BROAD ST : ELDER ST"
    }]
}, {
    "coord": [33.89228, -84.326168],
    "cams": [{
        "id": "cctv_16367",
        "url": "/georgiasnapshots/BROK-CAM-072.jpg",
        "name": "Ashford Dunwoody Rd : Donaldson Dr"
    }]
}, {
    "coord": [32.686542, -83.679176],
    "cams": [{
        "id": "cctv_46389",
        "url": "/georgiasnapshots/BIBB-CAM-541.jpg",
        "name": "Industrial Hwy Conn : Sardis Church Rd"
    }]
}, {
    "coord": [33.876572, -84.309424],
    "cams": [{
        "id": "cctv_15953",
        "url": "/georgiasnapshots/BROK-CAM-212.jpg",
        "name": "SR 155 / Clairmont Rd : Airport Rd"
    }]
}, {
    "coord": [34.054696, -84.27528],
    "cams": [{
        "id": "cctv_9081",
        "url": "/georgiasnapshots/ALPH-CAM-014c.jpg",
        "name": "North Point Pkwy : Kimball Bridge Rd"
    }]
}, {
    "coord": [33.858928, -84.516328],
    "cams": [{
        "id": "cctv_13755",
        "url": "/georgiasnapshots/SMYR-CAM-004.jpg",
        "name": "SR 280/S Cobb Dr : King Springs Rd"
    }]
}, {
    "coord": [33.51773, -84.669512],
    "cams": [{
        "id": "cctv_46450",
        "url": "/georgiasnapshots/FULT-CAM-028.jpg",
        "name": "SR 14/ US 29/ Main St : Toombs St/ Fayetteville Rd"
    }]
}, {
    "coord": [34.04986, -84.700584],
    "cams": [{
        "id": "cctv_7352",
        "url": "/georgiasnapshots/COBB-CAM-335.jpg",
        "name": "SR 3/Cobb Pkwy : SR 92/Lake Acworth Dr"
    }]
}, {
    "coord": [34.18296, -84.78548],
    "cams": [{
        "id": "cctv_46471",
        "url": "/georgiasnapshots/BART-CAM-003.jpg",
        "name": "SR 3 : Mockingbird Dr"
    }]
}, {
    "coord": [33.759192, -84.378488],
    "cams": [{
        "id": "cctv_5225",
        "stream": "/georgiavss3/gdot-cam-574.stream/playlist.m3u8",
        "name": "75/85 : JW DOBBS RAMP METER"
    }]
}, {
    "coord": [33.901032, -84.47216],
    "cams": [{
        "id": "cctv_15549",
        "stream": "/georgiavss3/gdot-cam-464.stream/playlist.m3u8",
        "name": "I-75 : S OF WINDY HILL RD"
    }]
}, {
    "coord": [34.169112, -84.784768],
    "cams": [{
        "id": "cctv_16139",
        "url": "/georgiasnapshots/GDOT-CAM-SR113.13.35.jpg",
        "name": "SR 113 : CHURCH ST"
    }]
}, {
    "coord": [33.6835, -84.063576],
    "cams": [{
        "id": "cctv_13069",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-078.jpg",
        "name": "I-20 : SIGMAN RD"
    }]
}, {
    "coord": [33.9205, -84.3262],
    "cams": [{
        "id": "cctv_4987",
        "stream": "/georgiavss2/gdot-cam-221.stream/playlist.m3u8",
        "name": "I-285 : 1 MI E OF ASH-DNWDY"
    }]
}, {
    "coord": [33.7405, -84.392136],
    "cams": [{
        "id": "cctv_5223",
        "stream": "/georgiavss3/gdot-cam-572.stream/playlist.m3u8",
        "name": "75/85 : PULLIAM ST RAMP METER"
    }]
}, {
    "coord": [33.824128, -84.407584],
    "cams": [{
        "id": "cctv_46504",
        "stream": "/georgiavss1/atl-cam-096.stream/playlist.m3u8",
        "name": "SR 3 /Northside Dr : Ptree Battle Ave"
    }]
}, {
    "coord": [33.775732, -84.407016],
    "cams": [{
        "id": "cctv_13062",
        "stream": "/georgiavss1/atl-cam-086.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : Marietta St"
    }]
}, {
    "coord": [34.861, -85.02368],
    "cams": [{
        "id": "cctv_9310",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-341.jpg",
        "name": "I-75 : SR 201/TUNNEL HILL RD"
    }]
}, {
    "coord": [32.023156, -81.225624],
    "cams": [{
        "id": "cctv_15904",
        "url": "/georgiasnapshots/SAV-CAM-039.jpg",
        "name": "SR 25/US 17 : BERWICK BLVD"
    }]
}, {
    "coord": [33.7477, -84.23096],
    "cams": [{
        "id": "cctv_5023",
        "stream": "/georgiavss2/gdot-cam-257.stream/playlist.m3u8",
        "name": "I-285 : S OF REDWING CIRCLE"
    }]
}, {
    "coord": [33.631252, -84.412304],
    "cams": [{
        "id": "cctv_5589",
        "stream": "/georgiavss4/gdot-cam-672.stream/playlist.m3u8",
        "name": "I-285 : E OF LAKE MIRROR"
    }]
}, {
    "coord": [33.822788, -84.25276],
    "cams": [{
        "id": "cctv_5012",
        "stream": "/georgiavss2/gdot-cam-244.stream/playlist.m3u8",
        "name": "I-285 : S OF LAWRENCEVILLE HWY-US 29"
    }]
}, {
    "coord": [34.012172, -84.564376],
    "cams": [{
        "id": "cctv_13741",
        "url": "/georgiasnapshots/COBB-CAM-010.jpg",
        "name": "Barrett Pkwy : George Busbee Pkwy"
    }]
}, {
    "coord": [33.658272, -84.362296],
    "cams": [{
        "id": "cctv_5044",
        "stream": "/georgiavss2/gdot-cam-276.stream/playlist.m3u8",
        "name": "I-285 : E OF JONESBORO RD"
    }]
}, {
    "coord": [33.758848, -84.685208],
    "cams": [{
        "id": "cctv_15411",
        "stream": "/georgiavss2/gdot-cam-306.stream/playlist.m3u8",
        "name": "I-20 : West of N County Line Rd"
    }]
}, {
    "coord": [33.973808, -84.413288],
    "cams": [{
        "id": "cctv_7329",
        "url": "/georgiasnapshots/COBB-CAM-102.jpg",
        "name": "Johnson Ferry Rd : Little Willeo Rd"
    }]
}, {
    "coord": [33.640512, -84.4],
    "cams": [{
        "id": "cctv_5327",
        "stream": "/georgiavss2/gdot-cam-082.stream/playlist.m3u8",
        "name": "I-75 : CW GRANT PKWY"
    }]
}, {
    "coord": [33.787784, -84.299128],
    "cams": [{
        "id": "cctv_9157",
        "stream": "/georgiavss1/dek-cam-007.stream/playlist.m3u8",
        "name": "SR 8 (Scott Blvd) : Superior Ave"
    }]
}, {
    "coord": [33.8721, -84.497448],
    "cams": [{
        "id": "cctv_13763",
        "url": "/georgiasnapshots/SMYR-CAM-012.jpg",
        "name": "Atlanta Rd : Campbell Rd"
    }]
}, {
    "coord": [34.47734, -85.348248],
    "cams": [{
        "id": "cctv_46488",
        "url": "/georgiasnapshots/POLK-CAM-002.jpg",
        "name": "SR 1 : SR 114"
    }]
}, {
    "coord": [33.899484, -84.468952],
    "cams": [{
        "id": "cctv_16310",
        "url": "/georgiasnapshots/COBB-CAM-132.jpg",
        "name": "Interstate North Pkwy : Interstate North Pkwy West"
    }]
}, {
    "coord": [33.764628, -84.389048],
    "cams": [{
        "id": "cctv_15294",
        "stream": "/georgiavss1/atl-cam-924.stream/playlist.m3u8",
        "name": "Ivan Allen Jr Blvd : Ted Turner Dr"
    }]
}, {
    "coord": [33.435292, -82.489472],
    "cams": [{
        "id": "cctv_32911",
        "url": "/georgiasnapshots/STEPH-CAM-001.jpg",
        "name": "SR 17 ALT : SR 17 Bypass"
    }]
}, {
    "coord": [33.968368, -84.258928],
    "cams": [{
        "id": "cctv_10193",
        "url": "/georgiasnapshots/GWIN-CAM-015.jpg",
        "name": "SR 140 : Spalding Dr"
    }]
}, {
    "coord": [33.640716, -84.640184],
    "cams": [{
        "id": "cctv_46457",
        "url": "/georgiasnapshots/FULT-CAM-037.jpg",
        "name": "GA 92/ Campbellton/ Fairburn Rd : Butner/ Ridge Rd"
    }]
}, {
    "coord": [33.883548, -84.49836],
    "cams": [{
        "id": "cctv_13761",
        "url": "/georgiasnapshots/SMYR-CAM-010.jpg",
        "name": "Spring Rd : Village Pkwy"
    }]
}, {
    "coord": [33.70218, -84.188184],
    "cams": [{
        "id": "cctv_8801",
        "stream": "/georgiavss3/gdot-cam-382.stream/playlist.m3u8",
        "name": "I-20 : W OF PANOLA RD"
    }]
}, {
    "coord": [34.043408, -84.580592],
    "cams": [{
        "id": "cctv_15954",
        "stream": "/georgiavss3/gdot-cam-525.stream/playlist.m3u8",
        "name": "I-75 : FREY RD"
    }]
}, {
    "coord": [33.7998, -84.513984],
    "cams": [{
        "id": "cctv_13191",
        "url": "/georgiasnapshots/COBB-CAM-238.jpg",
        "name": "SR 8 (Veterans Memorial Hwy) : Oakdale Rd / Discovery Blvd"
    }]
}, {
    "coord": [33.481208, -84.218432],
    "cams": [{
        "id": "cctv_10172",
        "url": "/georgiasnapshots/HNRY-CAM-917.jpg",
        "name": "I-75 : Jodeco Rd"
    }]
}, {
    "coord": [33.939004, -84.46144],
    "cams": [{
        "id": "cctv_12921",
        "url": "/georgiasnapshots/COBB-CAM-096.jpg",
        "name": "Terrell Mill Rd : Paper Mill Rd"
    }]
}, {
    "coord": [33.904008, -84.004464],
    "cams": [{
        "id": "cctv_10229",
        "url": "/georgiasnapshots/GWIN-CAM-055.jpg",
        "name": "SR 124 : ESSEX DR"
    }]
}, {
    "coord": [34.095448, -84.01292],
    "cams": [{
        "id": "cctv_10353",
        "url": "/georgiasnapshots/GWIN-CAM-179.jpg",
        "name": "SR 20 : SR 13 (Buford Highway)"
    }]
}, {
    "coord": [33.772788, -84.425256],
    "cams": [{
        "id": "cctv_13319",
        "stream": "/georgiavss1/atl-cam-278.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : Marietta Blvd"
    }]
}, {
    "coord": [34.046456, -84.223032],
    "cams": [{
        "id": "cctv_6321",
        "url": "/georgiasnapshots/COJC-CAM-420.jpg",
        "name": "State Bridge Rd : Jones Bridge Rd"
    }]
}, {
    "coord": [34.230904, -83.86972],
    "cams": [{
        "id": "cctv_32633",
        "url": "/georgiasnapshots/HALL-CAM-014.JPG",
        "name": "SR 53 : Thurmon Tanner Rd"
    }]
}, {
    "coord": [33.829584, -84.360664],
    "cams": [{
        "id": "cctv_12973",
        "stream": "/georgiavss4/gdot-cam-807.stream/playlist.m3u8",
        "name": "GA 400 : SIDNEY MARCUS BLVD EXT"
    }]
}, {
    "coord": [33.71412, -84.238776],
    "cams": [{
        "id": "cctv_5117",
        "stream": "/georgiavss3/gdot-cam-376.stream/playlist.m3u8",
        "name": "I-20 : I-285 ENT Dekalb"
    }]
}, {
    "coord": [33.743432, -84.331704],
    "cams": [{
        "id": "cctv_5100",
        "stream": "/georgiavss3/gdot-cam-360.stream/playlist.m3u8",
        "name": "I-20 : CLIFTON ST"
    }]
}, {
    "coord": [33.407788, -84.166296],
    "cams": [{
        "id": "cctv_9187",
        "url": "/georgiasnapshots/HNRY-CAM-002.jpg",
        "name": "SR 155 : Liberty Industrial Pkwy"
    }]
}, {
    "coord": [33.99526, -84.071936],
    "cams": [{
        "id": "cctv_46320",
        "url": "/georgiasnapshots/GC-CAM-270.jpg",
        "name": "NORTH BROWN RD : SEVER RD"
    }]
}, {
    "coord": [33.82016, -84.388304],
    "cams": [{
        "id": "cctv_7219",
        "stream": "/georgiavss1/atl-cam-009.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd NE : Peachtree Battle Ave NW"
    }]
}, {
    "coord": [33.70574, -84.774784],
    "cams": [{
        "id": "cctv_13099",
        "stream": "/georgiavss1/doug-cam-043.stream/playlist.m3u8",
        "name": "SR 5 (Bill Arp Rd) : Central Church Rd"
    }]
}, {
    "coord": [33.585592, -84.37788],
    "cams": [{
        "id": "cctv_5274",
        "stream": "/georgiavss4/gdot-cam-701.stream/playlist.m3u8",
        "name": "I-75 : OLD DIXIE"
    }]
}, {
    "coord": [33.47599, -81.976712],
    "cams": [{
        "id": "cctv_32838",
        "url": "/georgiasnapshots/AUG-CAM-005.jpg",
        "name": "13th St. : Telfair"
    }]
}, {
    "coord": [33.726512, -84.827376],
    "cams": [{
        "id": "cctv_46424",
        "url": "/georgiasnapshots/DOUG-CAM-099.jpg",
        "name": "SR 8 : Mann Rd/ Mason Creek"
    }]
}, {
    "coord": [34.02442, -84.2552],
    "cams": [{
        "id": "cctv_16226",
        "url": "/georgiasnapshots/COJC-CAM-520.jpg",
        "name": "Old Alabama Rd : Kroger"
    }]
}, {
    "coord": [32.879856, -83.771496],
    "cams": [{
        "id": "cctv_6038",
        "url": "/georgiasnapshots/BIBB-CAM-042.jpg",
        "name": "ZEBULON RD : I-475 SB RAMP"
    }]
}, {
    "coord": [34.034136, -84.675808],
    "cams": [{
        "id": "cctv_8793",
        "url": "/georgiasnapshots/COBB-CAM-338.jpg",
        "name": "SR 3/Cobb Pkwy : Acworth Due West Rd"
    }]
}, {
    "coord": [33.90442, -84.475504],
    "cams": [{
        "id": "cctv_15579",
        "stream": "/georgiavss3/gdot-cam-466.stream/playlist.m3u8",
        "name": "I-75 : EXIT TO WINDY HILL"
    }]
}, {
    "coord": [34.001688, -84.502288],
    "cams": [{
        "id": "cctv_12910",
        "url": "/georgiasnapshots/COBB-CAM-223.jpg",
        "name": "Sandy Plains Rd : Morgan Rd"
    }]
}, {
    "coord": [33.388656, -84.144],
    "cams": [{
        "id": "cctv_13545",
        "stream": "/georgiavss4/gdot-cam-767.stream/playlist.m3u8",
        "name": "I-75 : BEFORE CMS 701"
    }]
}, {
    "coord": [34.560396, -83.523328],
    "cams": [{
        "id": "cctv_32938",
        "url": "/georgiasnapshots/HABE-CAM-001.jpg",
        "name": "SR 15/365 : Demorest Mt Airy Rd"
    }]
}, {
    "coord": [33.574604, -84.276712],
    "cams": [{
        "id": "cctv_13219",
        "stream": "/georgiavss4/gdot-cam-769.stream/playlist.m3u8",
        "name": "I-675 : S OF US 23/SR 42"
    }]
}, {
    "coord": [33.940376, -84.505792],
    "cams": [{
        "id": "cctv_15195",
        "url": "/georgiasnapshots/MAR-CAM-308.jpg",
        "name": "SR 120/S Marietta Pkwy : I-75 SB Ramp"
    }]
}, {
    "coord": [32.833512, -83.626824],
    "cams": [{
        "id": "cctv_5965",
        "url": "/georgiasnapshots/BIBB-CAM-503.jpg",
        "name": "MLK JR DR : POPLAR ST"
    }]
}, {
    "coord": [33.846792, -84.428472],
    "cams": [{
        "id": "cctv_9056",
        "stream": "/georgiavss1/atl-cam-042.stream/playlist.m3u8",
        "name": "SR 3 / Northside Pkwy : I-75 NB Ramp"
    }]
}, {
    "coord": [33.821152, -84.361544],
    "cams": [{
        "id": "cctv_13690",
        "url": "/georgiasnapshots/GDOT-CAM-144.jpg",
        "name": "I-85 : Lindbergh Dr"
    }]
}, {
    "coord": [33.9163, -84.4068],
    "cams": [{
        "id": "cctv_4973",
        "stream": "/georgiavss2/gdot-cam-209.stream/playlist.m3u8",
        "name": "I-285 : RIVERSIDE DR"
    }]
}, {
    "coord": [33.722252, -84.407992],
    "cams": [{
        "id": "cctv_13047",
        "stream": "/georgiavss1/atl-cam-080.stream/playlist.m3u8",
        "name": "SR 3 (Metropolitan Pkwy) : University Ave"
    }]
}, {
    "coord": [33.76108, -84.387632],
    "cams": [{
        "id": "cctv_15327",
        "url": "/georgiasnapshots/ATL-CAM-948.jpg",
        "name": "Peachtree St : John Portman Blvd"
    }]
}, {
    "coord": [32.047882, -81.165976],
    "cams": [{
        "id": "cctv_15624",
        "url": "/georgiasnapshots/SAV-CAM-009.jpg",
        "name": "SR 25/US 17 : CHATHAM PKWY"
    }]
}, {
    "coord": [33.462712, -84.205496],
    "cams": [{
        "id": "cctv_13238",
        "stream": "/georgiavss4/gdot-cam-680.stream/playlist.m3u8",
        "name": "JONESBORO RD : FOSTER DR"
    }]
}, {
    "coord": [33.93262, -84.223016],
    "cams": [{
        "id": "cctv_10190",
        "url": "/georgiasnapshots/GWIN-CAM-012.jpg",
        "name": "SR 140 : SR 13 (Buford Highway)"
    }]
}, {
    "coord": [34.220704, -83.862152],
    "cams": [{
        "id": "cctv_32631",
        "url": "/georgiasnapshots/HALL-CAM-012.JPG",
        "name": "I-985 NB : SR 53"
    }]
}, {
    "coord": [33.462982, -84.212464],
    "cams": [{
        "id": "cctv_13250",
        "stream": "/georgiavss4/gdot-cam-678.stream/playlist.m3u8",
        "name": "JONESBORO RD : CMS 717/718"
    }]
}, {
    "coord": [33.7913, -84.408112],
    "cams": [{
        "id": "cctv_13056",
        "stream": "/georgiavss1/atl-cam-088.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : 17th St"
    }]
}, {
    "coord": [34.08172, -84.537168],
    "cams": [{
        "id": "cctv_5206",
        "stream": "/georgiavss3/gdot-cam-514.stream/playlist.m3u8",
        "name": "I-575 : S OF HWY 92"
    }]
}, {
    "coord": [30.751008, -81.650872],
    "cams": [{
        "id": "cctv_13202",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-001.jpg",
        "name": "I-95 : WELCOME CENTER - FL / GA LINE"
    }]
}, {
    "coord": [33.389218, -84.307784],
    "cams": [{
        "id": "cctv_6242",
        "stream": "/georgiavss1/ams-cam-111.stream/playlist.m3u8",
        "name": "SR 3 / Bear Creek Blvd : Oak St / AMS Main Gate"
    }]
}, {
    "coord": [33.852368, -84.510224],
    "cams": [{
        "id": "cctv_32529",
        "url": "/georgiasnapshots/SMYR-CAM-014.jpg",
        "name": "SR 280/S Cobb Dr : Ridge Rd"
    }]
}, {
    "coord": [33.750584, -84.395184],
    "cams": [{
        "id": "cctv_15548",
        "url": "/georgiasnapshots/ATL-CAM-967.jpg",
        "name": "SR 154 / Trinity Ave : Forsyth St"
    }]
}, {
    "coord": [33.8085, -84.418096],
    "cams": [{
        "id": "cctv_5018",
        "stream": "/georgiavss2/gdot-cam-025.stream/playlist.m3u8",
        "name": "I-75 : COLLIER RD"
    }]
}, {
    "coord": [34.140884, -84.745464],
    "cams": [{
        "id": "cctv_16350",
        "url": "/georgiasnapshots/GDOT-CAM-SR1000-2.96.jpg",
        "name": "SR 1000 : SR 3 CONNECTOR"
    }]
}, {
    "coord": [33.47771, -82.016472],
    "cams": [{
        "id": "cctv_32901",
        "url": "/georgiasnapshots/AUG-CAM-208.jpg",
        "name": "Walton Way : Johns Rd."
    }]
}, {
    "coord": [34.152684, -83.645088],
    "cams": [{
        "id": "cctv_13116",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-137.jpg",
        "name": "I-85 : SR 11 / US 129"
    }]
}, {
    "coord": [33.722048, -84.357544],
    "cams": [{
        "id": "cctv_46361",
        "url": "/georgiasnapshots/A-TEST-CAM-011.jpg",
        "name": "United Ave : TMC"
    }]
}, {
    "coord": [33.958728, -84.517672],
    "cams": [{
        "id": "cctv_15565",
        "stream": "/georgiavss3/gdot-cam-485.stream/playlist.m3u8",
        "name": "I-75 : N MARIETTA PKY ENT"
    }]
}, {
    "coord": [33.555872, -84.304888],
    "cams": [{
        "id": "cctv_5279",
        "stream": "/georgiavss4/gdot-cam-708.stream/playlist.m3u8",
        "name": "I-75 : N OF SR 138"
    }]
}, {
    "coord": [34.815916, -85.018424],
    "cams": [{
        "id": "cctv_9286",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-338.jpg",
        "name": "I-75 : 2 MI N OF US 41/76 - CMS 912"
    }]
}, {
    "coord": [33.901912, -84.541656],
    "cams": [{
        "id": "cctv_13758",
        "url": "/georgiasnapshots/SMYR-CAM-007.jpg",
        "name": "SR 280/S Cobb Dr : Pat Mell Rd"
    }]
}, {
    "coord": [33.825956, -84.255792],
    "cams": [{
        "id": "cctv_8958",
        "stream": "/georgiavss1/dek-cam-015.stream/playlist.m3u8",
        "name": "SR 8 (Lawrenceville Hwy) : Montreal Rd (West)"
    }]
}, {
    "coord": [34.07478, -84.27152],
    "cams": [{
        "id": "cctv_15460",
        "stream": "/georgiavss1/alph-cam-030.stream/playlist.m3u8",
        "name": "Westside Pkwy : Webb Bridge Rd"
    }]
}, {
    "coord": [34.474568, -83.058096],
    "cams": [{
        "id": "cctv_13100",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-177.jpg",
        "name": "I-85 : LAKE HARTWELL/SC LINE"
    }]
}, {
    "coord": [33.773636, -84.561008],
    "cams": [{
        "id": "cctv_9293",
        "url": "/georgiasnapshots/GDOT-CAM-322.jpg",
        "name": "I-20 : RIVERSIDE PKWY"
    }]
}, {
    "coord": [33.912636, -84.346032],
    "cams": [{
        "id": "cctv_46396",
        "url": "/georgiasnapshots/BROK-CAM-085.jpg",
        "name": "Lake Hearn : Perimeter Summit Pkwy"
    }]
}, {
    "coord": [33.760444, -84.379032],
    "cams": [{
        "id": "cctv_15384",
        "url": "/georgiasnapshots/ATL-CAM-957.jpg",
        "name": "Andrew Young Intl Blvd : Fort St/I-75/85 Ramp"
    }]
}, {
    "coord": [33.703512, -84.15956],
    "cams": [{
        "id": "cctv_16066",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-072.jpg",
        "name": "I-20 : E of Panola Rd"
    }]
}, {
    "coord": [34.007808, -84.09916],
    "cams": [{
        "id": "cctv_10305",
        "url": "/georgiasnapshots/GWIN-CAM-131.jpg",
        "name": "SUGARLOAF PKWY : W of PREMIERE PKWY / E of SUGARLOAF CLUB DR"
    }]
}, {
    "coord": [33.768156, -84.38908],
    "cams": [{
        "id": "cctv_4933",
        "stream": "/georgiavss2/gdot-cam-015.stream/playlist.m3u8",
        "name": "75/85 : SPRING ST"
    }]
}, {
    "coord": [34.0536, -84.12548],
    "cams": [{
        "id": "cctv_16266",
        "url": "/georgiasnapshots/COJC-CAM-755.jpg",
        "name": "McGinnis Ferry Rd : Blackstone Way/Shakerag Trace"
    }]
}, {
    "coord": [33.714184, -85.026888],
    "cams": [{
        "id": "cctv_16175",
        "url": "/georgiasnapshots/GDOT-CAM-SR113-9.25.jpg",
        "name": "SR 113 : I-20 EB (EXIT 19)"
    }]
}, {
    "coord": [33.823192, -84.139688],
    "cams": [{
        "id": "cctv_5320",
        "stream": "/georgiavss4/gdot-cam-793.stream/playlist.m3u8",
        "name": "US 78 : US 78 E/W SPLIT"
    }]
}, {
    "coord": [30.835558, -83.971912],
    "cams": [{
        "id": "cctv_46366",
        "url": "/georgiasnapshots/THOM-CAM-003.jpg",
        "name": "SR 38BU : HANSELL ST"
    }]
}, {
    "coord": [34.079684, -84.652208],
    "cams": [{
        "id": "cctv_15242",
        "stream": "/georgiavss3/gdot-cam-537.stream/playlist.m3u8",
        "name": "I-75 : SR 92"
    }]
}, {
    "coord": [33.543766, -84.22576],
    "cams": [{
        "id": "cctv_13557",
        "url": "/georgiasnapshots/HNRY-CAM-115.jpg",
        "name": "SR 138 / N Henry Blvd : Rock Quarry Rd"
    }]
}, {
    "coord": [34.0687, -84.540496],
    "cams": [{
        "id": "cctv_5204",
        "stream": "/georgiavss3/gdot-cam-512.stream/playlist.m3u8",
        "name": "I-575 : SHALLOWFORD RD"
    }]
}, {
    "coord": [33.856236, -84.482888],
    "cams": [{
        "id": "cctv_5405",
        "stream": "/georgiavss4/gdot-cam-967.stream/playlist.m3u8",
        "name": "I-285 : S OF PACES FERRY RD"
    }]
}, {
    "coord": [34.176592, -84.786096],
    "cams": [{
        "id": "cctv_46470",
        "url": "/georgiasnapshots/BART-CAM-004.jpg",
        "name": "SR 3 : MLK"
    }]
}, {
    "coord": [34.441528, -84.917832],
    "cams": [{
        "id": "cctv_16134",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-310.30.jpg",
        "name": "I-75 : UNION GROVE RD"
    }]
}, {
    "coord": [33.832268, -84.341624],
    "cams": [{
        "id": "cctv_13593",
        "stream": "/georgiavss1/brok-cam-002.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Hawk #2 (S of N Druid Hills)"
    }]
}, {
    "coord": [33.7482, -84.384304],
    "cams": [{
        "id": "cctv_5224",
        "stream": "/georgiavss3/gdot-cam-573.stream/playlist.m3u8",
        "name": "75/85 : MLK JR DR RAMP METER"
    }]
}, {
    "coord": [33.92776, -84.48748],
    "cams": [{
        "id": "cctv_5129",
        "stream": "/georgiavss3/gdot-cam-404.stream/playlist.m3u8",
        "name": "I-75 : N OF DELK RD"
    }]
}, {
    "coord": [33.771328, -84.434016],
    "cams": [{
        "id": "cctv_13377",
        "stream": "/georgiavss1/atl-cam-277.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : Chappell Rd"
    }]
}, {
    "coord": [33.659316, -83.999416],
    "cams": [{
        "id": "cctv_13667",
        "url": "/georgiasnapshots/ROCK-CAM-116.jpg",
        "name": "SR 138 / Walnut Grove Rd : Old Covington Rd"
    }]
}, {
    "coord": [34.01534, -84.430104],
    "cams": [{
        "id": "cctv_12909",
        "url": "/georgiasnapshots/COBB-CAM-105.jpg",
        "name": "Johnson Ferry Rd : Post Oak Tritt Rd"
    }]
}, {
    "coord": [33.81166, -84.366912],
    "cams": [{
        "id": "cctv_7212",
        "stream": "/georgiavss1/atl-cam-024.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Lambert Dr / Piedmont Cir"
    }]
}, {
    "coord": [33.905144, -83.965544],
    "cams": [{
        "id": "cctv_10345",
        "url": "/georgiasnapshots/GWIN-CAM-171.jpg",
        "name": "SR 20 : WHEAT GRASS WAY / S of HILLSIDE DR"
    }]
}, {
    "coord": [33.7484, -84.3858],
    "cams": [{
        "id": "cctv_5362",
        "stream": "/georgiavss2/gdot-cam-009.stream/playlist.m3u8",
        "name": "75/85 : MLK JR DR"
    }]
}, {
    "coord": [33.670336, -84.443488],
    "cams": [{
        "id": "cctv_46433",
        "url": "/georgiasnapshots/FULT-CAM-014.jpg",
        "name": "Ga14/ US 29/ N Main : Willingham"
    }]
}, {
    "coord": [33.854944, -83.904936],
    "cams": [{
        "id": "cctv_46299",
        "url": "/georgiasnapshots/GWIN-CAM-233.jpg",
        "name": "SR 20 : BRAND RD"
    }]
}, {
    "coord": [34.073096, -84.310816],
    "cams": [{
        "id": "cctv_13571",
        "stream": "/georgiavss1/alph-cam-020.stream/playlist.m3u8",
        "name": "Old Milton Pkwy / Rucker Rd : Wills Rd"
    }]
}, {
    "coord": [34.042616, -84.326688],
    "cams": [{
        "id": "cctv_13152",
        "url": "/georgiasnapshots/ROSWELL-CAM-406.jpg",
        "name": "Mansell Rd : Colonial Center Pkwy"
    }]
}, {
    "coord": [32.221364, -81.1962],
    "cams": [{
        "id": "cctv_46248",
        "url": "http:/navigator-c2c.dot.ga.gov/snapshots/EFF-CAM-001.jpg",
        "name": "SR 119 : SR 21 (Springfield Bypass)"
    }]
}, {
    "coord": [33.674412, -84.05668],
    "cams": [{
        "id": "cctv_16379",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-078.55.jpg",
        "name": "I-20 : 1/2 MI E OF SIGMAN RD"
    }]
}, {
    "coord": [34.952828, -85.244448],
    "cams": [{
        "id": "cctv_16140",
        "url": "/georgiasnapshots/GDOT-CAM-SR2-1.25.jpg",
        "name": "SR 2 : FANT DR"
    }]
}, {
    "coord": [33.508458, -82.022656],
    "cams": [{
        "id": "cctv_32847",
        "url": "/georgiasnapshots/AUG-CAM-220.jpg",
        "name": "Washington Rd. : Old Berckmans Rd."
    }]
}, {
    "coord": [34.116628, -83.762344],
    "cams": [{
        "id": "cctv_32659",
        "url": "/georgiasnapshots/JACKS-CAM-005.jpg",
        "name": "SR 53 : I-85 NB"
    }]
}, {
    "coord": [33.599316, -84.290848],
    "cams": [{
        "id": "cctv_5952",
        "stream": "/georgiavss3/gdot-cam-608.stream/playlist.m3u8",
        "name": "I-675 : DOUBLE BRDG RD"
    }]
}, {
    "coord": [33.9804, -84.5376],
    "cams": [{
        "id": "cctv_5144",
        "stream": "/georgiavss3/gdot-cam-418.stream/playlist.m3u8",
        "name": "I-75 : CANTON RD-SR5 EB EXIT"
    }]
}, {
    "coord": [33.82658, -84.03128],
    "cams": [{
        "id": "cctv_10337",
        "url": "/georgiasnapshots/GWIN-CAM-163.jpg",
        "name": "SR 124 : EVERSON RD / SPRINGDALE RD"
    }]
}, {
    "coord": [34.019708, -84.192616],
    "cams": [{
        "id": "cctv_16222",
        "url": "/georgiasnapshots/COJC-CAM-455.jpg",
        "name": "State Bridge Rd : Medlock Crossing Pkwy"
    }]
}, {
    "coord": [33.856348, -84.578064],
    "cams": [{
        "id": "cctv_7321",
        "url": "/georgiasnapshots/COBB-CAM-061.jpg",
        "name": "EW Connector : Hicks Rd"
    }]
}, {
    "coord": [34.040804, -84.219384],
    "cams": [{
        "id": "cctv_6820",
        "url": "/georgiasnapshots/COJC-CAM-435.jpg",
        "name": "State Bridge Rd : Morton Rd"
    }]
}, {
    "coord": [33.72136, -85.110976],
    "cams": [{
        "id": "cctv_16149",
        "url": "/georgiasnapshots/GDOT-CAM-SR8-15.5.jpg",
        "name": "SR 8 : CASHTOWN RD"
    }]
}, {
    "coord": [33.994896, -84.281504],
    "cams": [{
        "id": "cctv_6266",
        "url": "/georgiasnapshots/ROSWELL-CAM-108.jpg",
        "name": "SR 140 : Holcomb Br Middle School"
    }]
}, {
    "coord": [33.778948, -84.30936],
    "cams": [{
        "id": "cctv_9160",
        "stream": "/georgiavss1/dek-cam-005.stream/playlist.m3u8",
        "name": "SR 8 (Scott Blvd) : Coventry Rd"
    }]
}, {
    "coord": [33.73094, -84.918872],
    "cams": [{
        "id": "cctv_46490",
        "url": "/georgiasnapshots/CARR-CAM-102.jpg",
        "name": "SR 8 : Carroll"
    }]
}, {
    "coord": [34.032356, -84.527584],
    "cams": [{
        "id": "cctv_7333",
        "url": "/georgiasnapshots/COBB-CAM-150.jpg",
        "name": "Canton Rd : Blackwell Rd"
    }]
}, {
    "coord": [34.423132, -83.163792],
    "cams": [{
        "id": "cctv_15168",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-170.2.jpg",
        "name": "I-85 : FRANKLIN CO WEIGH STATION / CMS 918"
    }]
}, {
    "coord": [34.874296, -84.321608],
    "cams": [{
        "id": "cctv_16107",
        "url": "/georgiasnapshots/GDOT-CAM-SR515-4.15.jpg",
        "name": "SR 515 : SR 5"
    }]
}, {
    "coord": [33.769848, -84.38752],
    "cams": [{
        "id": "cctv_15342",
        "url": "/georgiasnapshots/ATL-CAM-954.jpg",
        "name": "West Peachtree St : Linden Ave"
    }]
}, {
    "coord": [33.766848, -84.528032],
    "cams": [{
        "id": "cctv_9088",
        "stream": "/georgiavss3/gdot-cam-321.stream/playlist.m3u8",
        "name": "I-20 : FULTON INDUSTRIAL"
    }]
}, {
    "coord": [34.033664, -84.550472],
    "cams": [{
        "id": "cctv_12900",
        "url": "/georgiasnapshots/COBB-CAM-319.jpg",
        "name": "Chastain Rd : Bells Ferry Rd"
    }]
}, {
    "coord": [32.308364, -81.874296],
    "cams": [{
        "id": "cctv_13187",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-116.jpg",
        "name": "I-16 : US 301/US 25"
    }]
}, {
    "coord": [33.963064, -84.425272],
    "cams": [{
        "id": "cctv_32603",
        "url": "/georgiasnapshots/COBB-CAM-088.jpg",
        "name": "Lower Roswell Rd : Fairfield Dr"
    }]
}, {
    "coord": [34.045572, -84.582944],
    "cams": [{
        "id": "cctv_15524",
        "stream": "/georgiavss3/gdot-cam-526.stream/playlist.m3u8",
        "name": "I-75 : S OF SHILOH RD"
    }]
}, {
    "coord": [33.92972, -84.118176],
    "cams": [{
        "id": "cctv_10323",
        "url": "/georgiasnapshots/GWIN-CAM-149.jpg",
        "name": "PLEASANT HILL RD : LAKE HILL DR"
    }]
}, {
    "coord": [33.543442, -84.282496],
    "cams": [{
        "id": "cctv_15367",
        "url": "/georgiasnapshots/CLAY-CAM-175.jpg",
        "name": "SR 138 / Lake Spivey Pkwy : Mt Zion Pkwy / Speer Rd"
    }]
}, {
    "coord": [33.957204, -83.979736],
    "cams": [{
        "id": "cctv_10234",
        "url": "/georgiasnapshots/GWIN-CAM-060.jpg",
        "name": "SR 124 : US 29 / SR 8 / CROGAN ST"
    }]
}, {
    "coord": [33.915112, -84.49852],
    "cams": [{
        "id": "cctv_15180",
        "url": "/georgiasnapshots/MAR-CAM-111.jpg",
        "name": "SR 3 / Cobb Pkwy : Franklin Dr"
    }]
}, {
    "coord": [34.02744, -84.423736],
    "cams": [{
        "id": "cctv_7334",
        "url": "/georgiasnapshots/COBB-CAM-201.jpg",
        "name": "Johnson Ferry Rd : Shallowford  Rd"
    }]
}, {
    "coord": [33.721664, -84.349592],
    "cams": [{
        "id": "cctv_6851",
        "url": "/georgiasnapshots/ATL-CAM-059.jpg",
        "name": "SR 42 (Moreland Ave) : Vickers St / Village Creek Landing"
    }]
}, {
    "coord": [33.938692, -84.188992],
    "cams": [{
        "id": "cctv_10252",
        "url": "/georgiasnapshots/GWIN-CAM-078.jpg",
        "name": "SR 378 : W of EAST HILL WAY"
    }]
}, {
    "coord": [33.888712, -84.47472],
    "cams": [{
        "id": "cctv_13656",
        "url": "/georgiasnapshots/COBB-CAM-050.jpg",
        "name": "SR 3/Cobb Pkwy : Windy Ridge Pkwy"
    }]
}, {
    "coord": [33.624, -84.3544],
    "cams": [{
        "id": "cctv_10506",
        "url": "/georgiasnapshots/CLAY-CAM-218.jpg",
        "name": "SR 54 : WATTS RD / FOREST AVE"
    }]
}, {
    "coord": [33.458652, -84.208464],
    "cams": [{
        "id": "cctv_13342",
        "stream": "/georgiavss4/gdot-cam-749.stream/playlist.m3u8",
        "name": "I-75 : ON JONESBORO RD RAMP"
    }]
}, {
    "coord": [32.100162, -81.221928],
    "cams": [{
        "id": "cctv_46526",
        "url": "/georgiasnapshots/CHAT-CAM-007.jpg",
        "name": "SR 26 : Pine Barren Rd"
    }]
}, {
    "coord": [33.848608, -84.3824],
    "cams": [{
        "id": "cctv_7209",
        "stream": "/georgiavss1/atl-cam-002.stream/playlist.m3u8",
        "name": "SR 9 / Roswell Rd : Ptree Presb Church"
    }]
}, {
    "coord": [33.997916, -84.337352],
    "cams": [{
        "id": "cctv_5338",
        "stream": "/georgiavss4/gdot-cam-834.stream/playlist.m3u8",
        "name": "GA 400 : N OF NORTHRIDGE"
    }]
}, {
    "coord": [34.061952, -83.990736],
    "cams": [{
        "id": "cctv_10215",
        "url": "/georgiasnapshots/GWIN-CAM-041.jpg",
        "name": "SR 20 : Mall of Georgia Blvd"
    }]
}, {
    "coord": [32.407276, -81.763272],
    "cams": [{
        "id": "cctv_46539",
        "url": "/georgiasnapshots/BULL-CAM-005.jpg",
        "name": "SR 67 : SR 67/ SR 73 BP"
    }]
}, {
    "coord": [33.741124, -84.416704],
    "cams": [{
        "id": "cctv_5081",
        "stream": "/georgiavss3/gdot-cam-343.stream/playlist.m3u8",
        "name": "I-20 : LOWERY BLVD"
    }]
}, {
    "coord": [33.515988, -82.0704],
    "cams": [{
        "id": "cctv_32860",
        "url": "/georgiasnapshots/AUG-CAM-229.jpg",
        "name": "Washington Rd. : Pleasant Home Rd."
    }]
}, {
    "coord": [33.666216, -84.325032],
    "cams": [{
        "id": "cctv_5961",
        "stream": "/georgiavss4/gdot-cam-617.stream/playlist.m3u8",
        "name": "I-675 : HENRICO RD"
    }]
}, {
    "coord": [33.80528, -84.067784],
    "cams": [{
        "id": "cctv_10363",
        "url": "/georgiasnapshots/GWIN-CAM-189.jpg",
        "name": "ANNISTOWN RD : W of ROSS RD"
    }]
}, {
    "coord": [34.195096, -84.448512],
    "cams": [{
        "id": "cctv_46503",
        "url": "/georgiasnapshots/CHER-CAM-105.jpg",
        "name": "SR 140 : Lake Harmony Dr"
    }]
}, {
    "coord": [34.030312, -84.206352],
    "cams": [{
        "id": "cctv_6322",
        "url": "/georgiasnapshots/COJC-CAM-445.jpg",
        "name": "State Bridge Rd : E Morton Rd"
    }]
}, {
    "coord": [34.183592, -84.13952],
    "cams": [{
        "id": "cctv_8812",
        "stream": "/georgiavss4/gdot-cam-856.stream/playlist.m3u8",
        "name": "GA 400 : NEAR SR 20"
    }]
}, {
    "coord": [33.95532, -84.411712],
    "cams": [{
        "id": "cctv_32612",
        "url": "/georgiasnapshots/COBB-CAM-109.jpg",
        "name": "Johnson Ferry Rd : Hampton Farms Dr"
    }]
}, {
    "coord": [33.952352, -84.102744],
    "cams": [{
        "id": "cctv_10265",
        "url": "/georgiasnapshots/GWIN-CAM-091.jpg",
        "name": "OLD NORCROSS RD : W of SWEETWATER RD"
    }]
}, {
    "coord": [33.573, -84.415296],
    "cams": [{
        "id": "cctv_10529",
        "url": "/georgiasnapshots/CLAY-CAM-x901.jpg",
        "name": "SR 139 : Main St"
    }]
}, {
    "coord": [33.771376, -84.38884],
    "cams": [{
        "id": "cctv_16088",
        "url": "/georgiasnapshots/ATL-CAM-970.jpg",
        "name": "SR 8 (North Ave) : Spring St"
    }]
}, {
    "coord": [33.764864, -84.348968],
    "cams": [{
        "id": "cctv_6828",
        "stream": "/georgiavss1/atl-cam-058.stream/playlist.m3u8",
        "name": "SR 42 (Moreland Ave) : Euclid Ave / McClendon Ave"
    }]
}, {
    "coord": [33.83104, -84.33412],
    "cams": [{
        "id": "cctv_15268",
        "stream": "/georgiavss1/brok-cam-052.stream/playlist.m3u8",
        "name": "SR 42 / N Druid Hills Rd : I-85 NB Ramp"
    }]
}, {
    "coord": [33.960236, -84.527816],
    "cams": [{
        "id": "cctv_15174",
        "url": "/georgiasnapshots/MAR-CAM-105.jpg",
        "name": "SR 3/Cobb Pkwy : SR 120A/N Marietta Pkwy"
    }]
}, {
    "coord": [34.228844, -84.1006],
    "cams": [{
        "id": "cctv_32564",
        "url": "http://navigator-csc.dot.ga.gov/snapshots/FORS-CAM-031.jpg",
        "name": "SR 400 NB : Pilgrim Mill Rd"
    }]
}, {
    "coord": [34.724372, -85.007488],
    "cams": [{
        "id": "cctv_13689",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-330.jpg",
        "name": "I-75 : 2 MI N OF SR 3"
    }]
}, {
    "coord": [34.068332, -83.95652],
    "cams": [{
        "id": "cctv_10370",
        "url": "/georgiasnapshots/GWIN-CAM-196.jpg",
        "name": "SR 324 : IVY CHURCH RD / W of IVY CREEK RD"
    }]
}, {
    "coord": [31.135526, -83.437896],
    "cams": [{
        "id": "cctv_15998",
        "url": "/georgiasnapshots/GDOT-CAM-SR37-07.2.jpg",
        "name": "State Route 37 : I-75 NB Ramp"
    }]
}, {
    "coord": [33.856052, -84.590432],
    "cams": [{
        "id": "cctv_9121",
        "url": "/georgiasnapshots/COBB-CAM-067.jpg",
        "name": "EW Connector : Floyd Rd"
    }]
}, {
    "coord": [32.126236, -81.170472],
    "cams": [{
        "id": "cctv_15543",
        "url": "/georgiasnapshots/SAV-CAM-007.jpg",
        "name": "SR 21 : SR 307 / Dean Forest Rd"
    }]
}, {
    "coord": [34.206752, -84.78048],
    "cams": [{
        "id": "cctv_16159",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-16.25.jpg",
        "name": "SR 20 : CLINE SMITH RD"
    }]
}, {
    "coord": [33.5391, -84.3508],
    "cams": [{
        "id": "cctv_10451",
        "url": "/georgiasnapshots/CLAY-CAM-044.jpg",
        "name": "SR 54 : SR 138"
    }]
}, {
    "coord": [33.5321, -84.363504],
    "cams": [{
        "id": "cctv_10445",
        "url": "/georgiasnapshots/CLAY-CAM-030.jpg",
        "name": "SR 3 / Tara Blvd : North Avenue"
    }]
}, {
    "coord": [33.820572, -84.1696],
    "cams": [{
        "id": "cctv_5314",
        "stream": "/georgiavss4/gdot-cam-788.stream/playlist.m3u8",
        "name": "US 78 : STONE MTN BYPASS"
    }]
}, {
    "coord": [33.647876, -84.011936],
    "cams": [{
        "id": "cctv_13360",
        "url": "/georgiasnapshots/ROCK-CAM-110.jpg",
        "name": "SR 138 / McDonough Rd : Chick-Fil-A"
    }]
}, {
    "coord": [33.7534, -84.379304],
    "cams": [{
        "id": "cctv_4928",
        "stream": "/georgiavss2/gdot-cam-011.stream/playlist.m3u8",
        "name": "75/85 : EDGEWOOD"
    }]
}, {
    "coord": [34.015268, -84.234952],
    "cams": [{
        "id": "cctv_16235",
        "url": "/georgiasnapshots/COJC-CAM-560.jpg",
        "name": "Old Alabama Rd : Old Southwick Pass/Hunts Pointe"
    }]
}, {
    "coord": [33.6537, -84.399344],
    "cams": [{
        "id": "cctv_46440",
        "url": "/georgiasnapshots/FULT-CAM-017.jpg",
        "name": "GA 3/US 41/ N. Central Ave : Sunset St"
    }]
}, {
    "coord": [34.021348, -84.322648],
    "cams": [{
        "id": "cctv_6259",
        "url": "/georgiasnapshots/ROSWELL-CAM-130.jpg",
        "name": "SR 140 : GA 400 NB RAMP"
    }]
}, {
    "coord": [33.8098, -84.269184],
    "cams": [{
        "id": "cctv_5302",
        "stream": "/georgiavss4/gdot-cam-777.stream/playlist.m3u8",
        "name": "US 78 : N DRUID HILLS RD"
    }]
}, {
    "coord": [33.896228, -84.46544],
    "cams": [{
        "id": "cctv_5077",
        "stream": "/georgiavss2/gdot-cam-034.stream/playlist.m3u8",
        "name": "I-75 : WINDY RIDGE PKWY"
    }]
}, {
    "coord": [33.53268, -85.253144],
    "cams": [{
        "id": "cctv_46494",
        "url": "/georgiasnapshots/CARR-CAM-301.jpg",
        "name": "SR 100 : Bevis St"
    }]
}, {
    "coord": [33.26302, -84.094256],
    "cams": [{
        "id": "cctv_13567",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-205.2.jpg",
        "name": "I-75 : SR 16"
    }]
}, {
    "coord": [32.702416, -83.734032],
    "cams": [{
        "id": "cctv_6839",
        "url": "/georgiasnapshots/BIBB-CAM-101.jpg",
        "name": "I-75 : 1 MI S OF SARDIS CHURCH RD"
    }]
}, {
    "coord": [33.927412, -84.343768],
    "cams": [{
        "id": "cctv_32624",
        "url": "/georgiasnapshots/DUN-CAM-142.jpg",
        "name": "Perimeter Center West : Perimeter Center Pkwy/Olde Perimeter Way"
    }]
}, {
    "coord": [33.820632, -84.422576],
    "cams": [{
        "id": "cctv_5412",
        "stream": "/georgiavss2/gdot-cam-099.stream/playlist.m3u8",
        "name": "I-75 : S OF PEACHTREE BATTLE"
    }]
}, {
    "coord": [34.049844, -84.338056],
    "cams": [{
        "id": "cctv_9036",
        "url": "/georgiasnapshots/ROSWELL-CAM-320.jpg",
        "name": "SR 9 : Sun Valley Dr"
    }]
}, {
    "coord": [33.61776, -84.43844],
    "cams": [{
        "id": "cctv_32935",
        "url": "/georgiasnapshots/CLAY-CAM-010.jpg",
        "name": "SR 139 : I-285 EB Ramp"
    }]
}, {
    "coord": [34.869376, -85.51188],
    "cams": [{
        "id": "cctv_16110",
        "url": "/georgiasnapshots/GDOT-CAM-SR58-12.16.jpg",
        "name": "SR 58 : SR 136/WHITE OAK GAP"
    }]
}, {
    "coord": [32.216926, -82.411736],
    "cams": [{
        "id": "cctv_46556",
        "url": "/georgiasnapshots/TOOM-CAM-001.jpg",
        "name": "SR 30 EB : Jackson St"
    }]
}, {
    "coord": [33.856504, -83.99992],
    "cams": [{
        "id": "cctv_10366",
        "url": "/georgiasnapshots/GWIN-CAM-192.jpg",
        "name": "SR 10 : Abington Dr / Hickory Station Dr"
    }]
}, {
    "coord": [34.025464, -84.573176],
    "cams": [{
        "id": "cctv_15483",
        "stream": "/georgiavss3/gdot-cam-521.stream/playlist.m3u8",
        "name": "I-75 : BIG SHANTY RD"
    }]
}, {
    "coord": [32.015392, -80.98744],
    "cams": [{
        "id": "cctv_15814",
        "url": "/georgiasnapshots/SAV-CAM-031.jpg",
        "name": "JOHNNY MERCER BLVD : PUBLIX ACCESS DRIVEWAY"
    }]
}, {
    "coord": [33.966976, -84.013696],
    "cams": [{
        "id": "cctv_10271",
        "url": "/georgiasnapshots/GWIN-CAM-097.jpg",
        "name": "SR 120 : MEDICAL CENTER BLVD"
    }]
}, {
    "coord": [33.64396, -84.497168],
    "cams": [{
        "id": "cctv_5369",
        "stream": "/georgiavss4/gdot-cam-933.stream/playlist.m3u8",
        "name": "I-285 : N OF WASHINGTON RD"
    }]
}, {
    "coord": [33.489284, -84.218792],
    "cams": [{
        "id": "cctv_13282",
        "stream": "/georgiavss4/gdot-cam-744.stream/playlist.m3u8",
        "name": "I-75 : N OF JODECO RD"
    }]
}, {
    "coord": [33.9202, -84.296504],
    "cams": [{
        "id": "cctv_4992",
        "stream": "/georgiavss2/gdot-cam-226.stream/playlist.m3u8",
        "name": "I-285 : NORTH PEACHTREE"
    }]
}, {
    "coord": [33.937968, -84.712352],
    "cams": [{
        "id": "cctv_32593",
        "url": "/georgiasnapshots/COBB-CAM-254.jpg",
        "name": "Dallas Hwy : Holland Rd/Poplar Springs"
    }]
}, {
    "coord": [33.82782, -84.329648],
    "cams": [{
        "id": "cctv_9102",
        "stream": "/georgiavss1/brok-cam-050.stream/playlist.m3u8",
        "name": "SR 42 / N Druid Hills Rd : Briarcliff Rd"
    }]
}, {
    "coord": [33.983924, -84.542088],
    "cams": [{
        "id": "cctv_15556",
        "stream": "/georgiavss3/gdot-cam-490.stream/playlist.m3u8",
        "name": "I-75 : SR 5/CANTON RD CONN"
    }]
}, {
    "coord": [34.234416, -84.444576],
    "cams": [{
        "id": "cctv_16163",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-14.jpg",
        "name": "SR 20 : SCOTT RD"
    }]
}, {
    "coord": [34.088224, -84.260744],
    "cams": [{
        "id": "cctv_9070",
        "url": "/georgiasnapshots/ALPH-CAM-007a.jpg",
        "name": "Windward Pkwy : GA 400 NB"
    }]
}, {
    "coord": [32.888146, -84.327336],
    "cams": [{
        "id": "cctv_15458",
        "url": "/georgiasnapshots/GDOT-CAM-SR3-15.jpg",
        "name": "SR 3/US 19 : W Thompson St"
    }]
}, {
    "coord": [33.9276, -84.2732],
    "cams": [{
        "id": "cctv_5241",
        "stream": "/georgiavss3/gdot-cam-598.stream/playlist.m3u8",
        "name": "SR 141 : N OF TILLY MILL RD"
    }]
}, {
    "coord": [33.463872, -84.449216],
    "cams": [{
        "id": "cctv_6858",
        "stream": "/georgiavss1/fay-cam-112.stream/playlist.m3u8",
        "name": "SR 85 : SR 314 / W Fayetteville Rd"
    }]
}, {
    "coord": [34.020104, -84.56976],
    "cams": [{
        "id": "cctv_5159",
        "stream": "/georgiavss3/gdot-cam-431.stream/playlist.m3u8",
        "name": "I-75 : 3/4 MI N OF BARRETT PKY"
    }]
}, {
    "coord": [33.4813, -84.338696],
    "cams": [{
        "id": "cctv_10498",
        "url": "/georgiasnapshots/CLAY-CAM-192.jpg",
        "name": "SR 3 / Tara Blvd : S Main St / Irongate Blvd"
    }]
}, {
    "coord": [33.9205, -84.311096],
    "cams": [{
        "id": "cctv_4989",
        "stream": "/georgiavss2/gdot-cam-223.stream/playlist.m3u8",
        "name": "I-285 : E OF CHAM-DNWDY"
    }]
}, {
    "coord": [33.418678, -82.079056],
    "cams": [{
        "id": "cctv_32883",
        "url": "/georgiasnapshots/AUG-CAM-096.jpg",
        "name": "Hwy 1 : Meadowbrook Dr./B. Chapel"
    }]
}, {
    "coord": [33.989072, -84.087832],
    "cams": [{
        "id": "cctv_10287",
        "url": "/georgiasnapshots/GWIN-CAM-113.jpg",
        "name": "SATELLITE BLVD : SUGARLOAF PKWY"
    }]
}, {
    "coord": [33.729272, -84.753768],
    "cams": [{
        "id": "cctv_15412",
        "stream": "/georgiavss2/gdot-cam-294.stream/playlist.m3u8",
        "name": "I-20 : W OF CHAPEL HILL / CMS-057"
    }]
}, {
    "coord": [33.615292, -83.92024],
    "cams": [{
        "id": "cctv_13326",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-088.jpg",
        "name": "I-20 : ALMON RD"
    }]
}, {
    "coord": [34.017392, -85.253896],
    "cams": [{
        "id": "cctv_46487",
        "url": "/georgiasnapshots/POLK-CAM-001.jpg",
        "name": "SR 1bus : Queen St"
    }]
}, {
    "coord": [34.0516, -84.296096],
    "cams": [{
        "id": "cctv_5417",
        "stream": "/georgiavss4/gdot-cam-841.stream/playlist.m3u8",
        "name": "GA 400 : S OF HAYNES BR RD"
    }]
}, {
    "coord": [33.359776, -84.759408],
    "cams": [{
        "id": "cctv_16363",
        "url": "/georgiasnapshots/COW-CAM-024.jpg",
        "name": "Poplar Rd : I-85 NB ENT"
    }]
}, {
    "coord": [30.992288, -83.389016],
    "cams": [{
        "id": "cctv_46359",
        "url": "/georgiasnapshots/LOWN-CAM-001.jpg",
        "name": "SR7/US41 : SR410/1-75-SB RAMP"
    }]
}, {
    "coord": [33.5613, -84.322704],
    "cams": [{
        "id": "cctv_10469",
        "url": "/georgiasnapshots/CLAY-CAM-087.jpg",
        "name": "MT ZION BLVD : MT ZION RD"
    }]
}, {
    "coord": [33.951384, -84.067376],
    "cams": [{
        "id": "cctv_10262",
        "url": "/georgiasnapshots/GWIN-CAM-088.jpg",
        "name": "OLD NORCROSS RD : OAKLAND RDs"
    }]
}, {
    "coord": [33.648888, -84.445856],
    "cams": [{
        "id": "cctv_5299",
        "stream": "/georgiavss2/gdot-cam-077.stream/playlist.m3u8",
        "name": "I-85 : LOOP RD"
    }]
}, {
    "coord": [33.912508, -84.378048],
    "cams": [{
        "id": "cctv_4978",
        "stream": "/georgiavss2/gdot-cam-213.stream/playlist.m3u8",
        "name": "I-285 : ROSWELL ROAD"
    }]
}, {
    "coord": [33.938036, -84.027432],
    "cams": [{
        "id": "cctv_10224",
        "url": "/georgiasnapshots/GWIN-CAM-050.jpg",
        "name": "US 29 : LAWRENCEVILLE-SUWANEE RD"
    }]
}, {
    "coord": [33.605024, -84.394216],
    "cams": [{
        "id": "cctv_5258",
        "stream": "/georgiavss2/gdot-cam-066.stream/playlist.m3u8",
        "name": "I-75 : JC PENNEY"
    }]
}, {
    "coord": [33.736868, -84.216864],
    "cams": [{
        "id": "cctv_13304",
        "stream": "/georgiavss1/dek-cam-033.stream/playlist.m3u8",
        "name": "SR 12 (Covington Hwy) : Glenwood Rd"
    }]
}, {
    "coord": [33.6467, -84.31748],
    "cams": [{
        "id": "cctv_5959",
        "stream": "/georgiavss4/gdot-cam-615.stream/playlist.m3u8",
        "name": "I-675 : N OF GRANT RD"
    }]
}, {
    "coord": [33.759796, -84.389072],
    "cams": [{
        "id": "cctv_15306",
        "url": "/georgiasnapshots/ATL-CAM-930.jpg",
        "name": "Ted Turner Dr : Andrew Young Intl Blvd"
    }]
}, {
    "coord": [33.4334, -82.03548],
    "cams": [{
        "id": "cctv_32884",
        "url": "/georgiasnapshots/AUG-CAM-099.jpg",
        "name": "Hwy 1 : Richmond Hill Rd. West"
    }]
}, {
    "coord": [33.919636, -84.347584],
    "cams": [{
        "id": "cctv_46399",
        "url": "/georgiasnapshots/DUN-CAM-135.jpg",
        "name": "Hammond : Private Drive"
    }]
}, {
    "coord": [34.03144, -84.047896],
    "cams": [{
        "id": "cctv_10418",
        "url": "/georgiasnapshots/GCDOT-IVDS-289-PH5.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : I-85 SB"
    }]
}, {
    "coord": [33.9311, -84.265],
    "cams": [{
        "id": "cctv_5240",
        "stream": "/georgiavss3/gdot-cam-597.stream/playlist.m3u8",
        "name": "SR 141 : WINTERS CHAPEL"
    }]
}, {
    "coord": [33.959648, -84.114728],
    "cams": [{
        "id": "cctv_5419",
        "stream": "/georgiavss2/gdot-cam-122.stream/playlist.m3u8",
        "name": "I-85 : OLD NORCROSS RD"
    }]
}, {
    "coord": [33.827064, -84.25192],
    "cams": [{
        "id": "cctv_5011",
        "stream": "/georgiavss2/gdot-cam-243.stream/playlist.m3u8",
        "name": "I-285 : LAWRENCEVILLE HWY-US 29"
    }]
}, {
    "coord": [33.860368, -84.436392],
    "cams": [{
        "id": "cctv_5397",
        "stream": "/georgiavss2/gdot-cam-096.stream/playlist.m3u8",
        "name": "I-75 : MT PARAN RAMP METER"
    }]
}, {
    "coord": [33.56202, -85.110256],
    "cams": [{
        "id": "cctv_16308",
        "url": "/georgiasnapshots/GDOT-CAM-SR166-13.jpg",
        "name": "SR 166 : MAPLE ST"
    }]
}, {
    "coord": [33.889408, -84.748704],
    "cams": [{
        "id": "cctv_15227",
        "url": "/georgiasnapshots/PAUL-CAM-005.jpg",
        "name": "SR 6 : Hiram Sam's Club"
    }]
}, {
    "coord": [30.87411, -83.956528],
    "cams": [{
        "id": "cctv_46376",
        "url": "/georgiasnapshots/THOM-CAM-008.jpg",
        "name": "SR 3 : N THOMASVILLE"
    }]
}, {
    "coord": [33.617388, -84.398088],
    "cams": [{
        "id": "cctv_5270",
        "stream": "/georgiavss2/gdot-cam-068.stream/playlist.m3u8",
        "name": "I-75 : FOREST PKWY"
    }]
}, {
    "coord": [33.460656, -84.198216],
    "cams": [{
        "id": "cctv_13240",
        "stream": "/georgiavss4/gdot-cam-682.stream/playlist.m3u8",
        "name": "JONESBORO RD : CMS 712"
    }]
}, {
    "coord": [33.77146, -84.321192],
    "cams": [{
        "id": "cctv_8955",
        "stream": "/georgiavss1/dek-cam-002.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : E Lake Dr / Ponce Manor"
    }]
}, {
    "coord": [34.05018, -84.175936],
    "cams": [{
        "id": "cctv_16218",
        "stream": "/georgiavss1/cojc-cam-255.stream/playlist.m3u8",
        "name": "SR 141 : Bell Rd"
    }]
}, {
    "coord": [33.447586, -82.08572],
    "cams": [{
        "id": "cctv_32875",
        "url": "/georgiasnapshots/AUG-CAM-059.jpg",
        "name": "Gordon Hwy : Barton Chapel Rd."
    }]
}, {
    "coord": [33.997232, -84.202048],
    "cams": [{
        "id": "cctv_6319",
        "url": "/georgiasnapshots/COJC-CAM-205.jpg",
        "name": "SR 141 (Medlock Bridge Rd) : Chattahoochee River"
    }]
}, {
    "coord": [33.453614, -84.326288],
    "cams": [{
        "id": "cctv_32534",
        "url": "/georgiasnapshots/CLAY-CAM-612.jpg",
        "name": "SR 3 / Tara Blvd : North of Home Depot"
    }]
}, {
    "coord": [32.915192, -83.705312],
    "cams": [{
        "id": "cctv_5997",
        "url": "/georgiasnapshots/BIBB-CAM-535.jpg",
        "name": "RIVERSIDE DR : HALL RD"
    }]
}, {
    "coord": [33.718668, -84.833624],
    "cams": [{
        "id": "cctv_10135",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-030.jpg",
        "name": "I-20 : Post Rd"
    }]
}, {
    "coord": [33.463832, -84.21508],
    "cams": [{
        "id": "cctv_13249",
        "stream": "/georgiavss4/gdot-cam-677.stream/playlist.m3u8",
        "name": "JONESBORO RD : CMS 719"
    }]
}, {
    "coord": [32.716156, -83.730328],
    "cams": [{
        "id": "cctv_6846",
        "url": "/georgiasnapshots/BIBB-CAM-104.jpg",
        "name": "I-75 : SARDIS CHURCH Rd"
    }]
}, {
    "coord": [33.697792, -84.447936],
    "cams": [{
        "id": "cctv_5211",
        "stream": "/georgiavss2/gdot-cam-054.stream/playlist.m3u8",
        "name": "SR 166 : STANTON RD"
    }]
}, {
    "coord": [34.1863, -83.59468],
    "cams": [{
        "id": "cctv_13261",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-140.jpg",
        "name": "I-85 : SR 82 / Dry Pond Rd"
    }]
}, {
    "coord": [33.783392, -84.391168],
    "cams": [{
        "id": "cctv_4952",
        "stream": "/georgiavss2/gdot-cam-019.stream/playlist.m3u8",
        "name": "75/85 : N OF 10TH ST"
    }]
}, {
    "coord": [34.059892, -84.153688],
    "cams": [{
        "id": "cctv_16264",
        "url": "/georgiasnapshots/COJC-CAM-735.jpg",
        "name": "McGinnis Ferry Rd : Technology Circle"
    }]
}, {
    "coord": [33.625964, -84.422384],
    "cams": [{
        "id": "cctv_5267",
        "stream": "/georgiavss4/gdot-cam-668.stream/playlist.m3u8",
        "name": "I-285 : W OF LOOP RD - LOOKS AT CMS 208"
    }]
}, {
    "coord": [33.61656, -84.441088],
    "cams": [{
        "id": "cctv_5584",
        "stream": "/georgiavss4/gdot-cam-647.stream/playlist.m3u8",
        "name": "I-285 : RIVERDALE RD"
    }]
}, {
    "coord": [34.027204, -84.419848],
    "cams": [{
        "id": "cctv_32600",
        "url": "/georgiasnapshots/COBB-CAM-208.jpg",
        "name": "Shallowford Rd : Childers Rd"
    }]
}, {
    "coord": [34.793812, -85.002104],
    "cams": [{
        "id": "cctv_16329",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-335.7.jpg",
        "name": "I-75 : EXT 336"
    }]
}, {
    "coord": [34.059664, -84.275856],
    "cams": [{
        "id": "cctv_5346",
        "stream": "/georgiavss4/gdot-cam-843.stream/playlist.m3u8",
        "name": "GA 400 : KIMBALL BR RD"
    }]
}, {
    "coord": [33.470078, -81.97448],
    "cams": [{
        "id": "cctv_32833",
        "url": "/georgiasnapshots/AUG-CAM-198.jpg",
        "name": "Walton Way : 11th St."
    }]
}, {
    "coord": [33.759256, -84.378976],
    "cams": [{
        "id": "cctv_15332",
        "url": "/georgiasnapshots/GDOT-CAM-577.jpg",
        "name": "SR 10 EB / Ellis Street : I-75/85 Connector NB Ramp"
    }]
}, {
    "coord": [33.950444, -84.139184],
    "cams": [{
        "id": "cctv_10201",
        "url": "/georgiasnapshots/GWIN-CAM-027.jpg",
        "name": "STEVE REYNOLDS BLVD : VENTURE DR"
    }]
}, {
    "coord": [34.968216, -85.190376],
    "cams": [{
        "id": "cctv_16322",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-353.5.jpg",
        "name": "I-75 : EXT 353"
    }]
}, {
    "coord": [33.881776, -84.453032],
    "cams": [{
        "id": "cctv_13745",
        "url": "/georgiasnapshots/COBB-CAM-126.jpg",
        "name": "Cumberland Blvd : I-75 NB"
    }]
}, {
    "coord": [33.05848, -83.955016],
    "cams": [{
        "id": "cctv_15217",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-188.jpg",
        "name": "I-75 : North of SR 42 access ramp"
    }]
}, {
    "coord": [31.963678, -83.782552],
    "cams": [{
        "id": "cctv_16002",
        "url": "/georgiasnapshots/GDOT-CAM-SR7-04.6.jpg",
        "name": "SR 7 : SR 30"
    }]
}, {
    "coord": [33.89524, -84.5766],
    "cams": [{
        "id": "cctv_7324",
        "url": "/georgiasnapshots/COBB-CAM-083.jpg",
        "name": "SR 5/Austell Rd : Windy Hill Rd"
    }]
}, {
    "coord": [33.865888, -84.469936],
    "cams": [{
        "id": "cctv_15337",
        "url": "/georgiasnapshots/COBB-CAM-325.jpg",
        "name": "Paces Ferry Rd : Overlook Pkwy"
    }]
}, {
    "coord": [34.260156, -85.180848],
    "cams": [{
        "id": "cctv_15371",
        "url": "/georgiasnapshots/FLYD-CAM-001.jpg",
        "name": "SR 1/US 27 : SR 20/Turner McCall Blvd"
    }]
}, {
    "coord": [33.76016, -84.485184],
    "cams": [{
        "id": "cctv_5064",
        "stream": "/georgiavss3/gdot-cam-328.stream/playlist.m3u8",
        "name": "I-20 : 285 ENTRANCE RAMPS"
    }]
}, {
    "coord": [33.95986, -84.518568],
    "cams": [{
        "id": "cctv_15594",
        "stream": "/georgiavss3/gdot-cam-486.stream/playlist.m3u8",
        "name": "I-75 : N MARIETTA PKY ENT"
    }]
}, {
    "coord": [32.5113, -84.990088],
    "cams": [{
        "id": "cctv_46523",
        "url": "/georgiasnapshots/GDOT-CAM-SR22-218.3.jpg",
        "name": "SR22/US80 : 2nd Avenue"
    }]
}, {
    "coord": [33.742964, -84.373656],
    "cams": [{
        "id": "cctv_5092",
        "stream": "/georgiavss3/gdot-cam-353.stream/playlist.m3u8",
        "name": "I-20 : CHEROKEE AVE"
    }]
}, {
    "coord": [33.534398, -83.26836],
    "cams": [{
        "id": "cctv_13073",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-126.jpg",
        "name": "I-20 : LAKE OCONEE"
    }]
}, {
    "coord": [33.43597, -84.041336],
    "cams": [{
        "id": "cctv_15573",
        "url": "/georgiasnapshots/HNRY-CAM-102.jpg",
        "name": "SR 81 : NORTH OLA RD"
    }]
}, {
    "coord": [34.004488, -84.565032],
    "cams": [{
        "id": "cctv_5152",
        "stream": "/georgiavss3/gdot-cam-425.stream/playlist.m3u8",
        "name": "I-75 : S OF BARRETT PKWY"
    }]
}, {
    "coord": [34.025532, -84.357248],
    "cams": [{
        "id": "cctv_13157",
        "url": "/georgiasnapshots/ROSWELL-CAM-416.jpg",
        "name": "Norcross St : Forrest St/Fraser St"
    }]
}, {
    "coord": [34.927548, -85.152744],
    "cams": [{
        "id": "cctv_10140",
        "url": "/georgiasnapshots/GDOT-CAM-WTHR-018.jpg",
        "name": "I-75 : SR 2"
    }]
}, {
    "coord": [33.915332, -84.285528],
    "cams": [{
        "id": "cctv_12988",
        "stream": "/georgiavss1/dek-cam-030.stream/playlist.m3u8",
        "name": "SR 141 : I-285 W RAMP"
    }]
}, {
    "coord": [33.353298, -84.12456],
    "cams": [{
        "id": "cctv_32645",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-212.jpg",
        "name": "I-75 : BILL GARDNER PKY ENT RAMP"
    }]
}, {
    "coord": [33.74132, -84.419632],
    "cams": [{
        "id": "cctv_5080",
        "stream": "/georgiavss3/gdot-cam-342.stream/playlist.m3u8",
        "name": "I-20 : W OF LOWERY BLVD"
    }]
}, {
    "coord": [34.35316, -82.930592],
    "cams": [{
        "id": "cctv_32653",
        "url": "/georgiasnapshots/HART-CAM-004.jpg",
        "name": "SR 8(Franklin St) : Carter St"
    }]
}, {
    "coord": [34.035976, -84.173392],
    "cams": [{
        "id": "cctv_16254",
        "url": "/georgiasnapshots/COJC-CAM-675.jpg",
        "name": "Abbotts Bridge Way : Parsons Rd"
    }]
}, {
    "coord": [34.139364, -83.94932],
    "cams": [{
        "id": "cctv_32583",
        "url": "/georgiasnapshots/HALL-CAM-003.jpg",
        "name": "SR 347/ Lanier Is Pkwy : I-985 NB"
    }]
}, {
    "coord": [34.06728, -84.283496],
    "cams": [{
        "id": "cctv_15320",
        "stream": "/georgiavss1/alph-cam-028.stream/playlist.m3u8",
        "name": "Westside Pkwy : Kimball Bridge Rd"
    }]
}, {
    "coord": [33.757084, -84.392712],
    "cams": [{
        "id": "cctv_15274",
        "url": "/georgiasnapshots/ATL-CAM-912.jpg",
        "name": "Marietta St : Ted Turner Dr"
    }]
}, {
    "coord": [33.900892, -84.127032],
    "cams": [{
        "id": "cctv_13113",
        "url": "/georgiasnapshots/GWIN-CAM-284.jpg",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Postal Way"
    }]
}, {
    "coord": [33.927672, -84.175472],
    "cams": [{
        "id": "cctv_10384",
        "url": "/georgiasnapshots/GWIN-CAM-218.jpg",
        "name": "INDIAN TRAIL LILBURN RD : I-85 NB RAMP"
    }]
}, {
    "coord": [33.954256, -84.021192],
    "cams": [{
        "id": "cctv_10258",
        "url": "/georgiasnapshots/GWIN-CAM-084.jpg",
        "name": "OLD NORCROSS RD : MONFORT RD"
    }]
}, {
    "coord": [33.805264, -84.367216],
    "cams": [{
        "id": "cctv_7215",
        "stream": "/georgiavss1/atl-cam-026.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Rock Springs Rd"
    }]
}, {
    "coord": [34.542432, -84.920448],
    "cams": [{
        "id": "cctv_16341",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-317.15.jpg",
        "name": "I-75 : EXT 317"
    }]
}, {
    "coord": [33.546756, -84.277368],
    "cams": [{
        "id": "cctv_5283",
        "stream": "/georgiavss4/gdot-cam-711.stream/playlist.m3u8",
        "name": "I-75 : SR 138"
    }]
}, {
    "coord": [33.8599, -84.6858],
    "cams": [{
        "id": "cctv_46419",
        "url": "/georgiasnapshots/COBB-CAM-452.jpg",
        "name": "Old SR 6 BUS/Marietta St : Brownsville Rd"
    }]
}, {
    "coord": [33.716384, -84.397872],
    "cams": [{
        "id": "cctv_6806",
        "stream": "/georgiavss3/gdot-cam-583.stream/playlist.m3u8",
        "name": "75/85 : S OF UNIVERSITY"
    }]
}, {
    "coord": [33.9, -84.2702],
    "cams": [{
        "id": "cctv_4998",
        "stream": "/georgiavss2/gdot-cam-231.stream/playlist.m3u8",
        "name": "I-285 : E OF BUFORD HWY"
    }]
}, {
    "coord": [33.838232, -83.902256],
    "cams": [{
        "id": "cctv_32926",
        "url": "/georgiasnapshots/WALT-CAM-003",
        "name": "SR 10/US 78 : SR 20/Main St"
    }]
}, {
    "coord": [33.595108, -84.388128],
    "cams": [{
        "id": "cctv_5247",
        "stream": "/georgiavss2/gdot-cam-064.stream/playlist.m3u8",
        "name": "I-75 : N OF TARA BLVD / US 41"
    }]
}, {
    "coord": [33.5664, -84.412904],
    "cams": [{
        "id": "cctv_10464",
        "url": "/georgiasnapshots/CLAY-CAM-062.jpg",
        "name": "SR 85 : Roberts Dr"
    }]
}, {
    "coord": [33.56774, -84.53224],
    "cams": [{
        "id": "cctv_4945",
        "stream": "/georgiavss2/gdot-cam-183.stream/playlist.m3u8",
        "name": "I-85 : N OF SR 138"
    }]
}, {
    "coord": [33.940572, -84.703424],
    "cams": [{
        "id": "cctv_13738",
        "url": "/georgiasnapshots/COBB-CAM-256.jpg",
        "name": "Dallas Hwy : Mars Hill Rd"
    }]
}, {
    "coord": [32.825696, -83.73132],
    "cams": [{
        "id": "cctv_6013",
        "stream": "/georgiavss5/bibb-cam-022.stream/playlist.m3u8",
        "name": "I-475 : MILE POST 4.5"
    }]
}, {
    "coord": [33.886128, -84.472512],
    "cams": [{
        "id": "cctv_46500",
        "url": "/georgiasnapshots/COBB-CAM-042.jpg",
        "name": "SR 3/Cobb Pkwy : Circle 75 Pkwy"
    }]
}, {
    "coord": [33.542, -84.4168],
    "cams": [{
        "id": "cctv_10487",
        "url": "/georgiasnapshots/CLAY-CAM-155.jpg",
        "name": "SR 85 : Lake Ridge Pkwy"
    }]
}, {
    "coord": [33.984884, -83.953728],
    "cams": [{
        "id": "cctv_46303",
        "url": "/georgiasnapshots/GWIN-CAM-253.jpg",
        "name": "SR 316 : CEDARS RD"
    }]
}, {
    "coord": [33.962024, -83.796512],
    "cams": [{
        "id": "cctv_32548",
        "url": "/georgiasnapshots/BARR-CAM-007.jpg",
        "name": "SR 316 : Patrick Mill Rd"
    }]
}, {
    "coord": [32.743854, -83.718408],
    "cams": [{
        "id": "cctv_6842",
        "url": "/georgiasnapshots/BIBB-CAM-107.jpg",
        "name": "I-75 : AT HARTLEY BR"
    }]
}, {
    "coord": [34.1055, -84.241],
    "cams": [{
        "id": "cctv_5354",
        "stream": "/georgiavss4/gdot-cam-850.stream/playlist.m3u8",
        "name": "GA 400 : N OF MCGINNIS FERRY RD"
    }]
}, {
    "coord": [33.7778, -84.605776],
    "cams": [{
        "id": "cctv_13090",
        "stream": "/georgiavss1/doug-cam-087.stream/playlist.m3u8",
        "name": "SR 6 : I-20 WB Ramp"
    }]
}, {
    "coord": [34.20742, -84.798728],
    "cams": [{
        "id": "cctv_16119",
        "url": "/georgiasnapshots/GDOT-CAM-SR61-10.75.jpg",
        "name": "SR 20/SR 61 : PEOPLES VALLEY RD"
    }]
}, {
    "coord": [34.967432, -85.191176],
    "cams": [{
        "id": "cctv_9332",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-353.jpg",
        "name": "I-75 : SR 146 / CLOUD SPR RD"
    }]
}, {
    "coord": [34.062696, -84.074776],
    "cams": [{
        "id": "cctv_10394",
        "url": "/georgiasnapshots/GWIN-CAM-235.jpg",
        "name": "SUWANEE DAM RD : PEACHTREE INDUSTRIAL BLVD"
    }]
}, {
    "coord": [33.94742, -84.548648],
    "cams": [{
        "id": "cctv_15192",
        "url": "/georgiasnapshots/MAR-CAM-303.jpg",
        "name": "SR 120/S Marietta Pkwy : Atlanta St"
    }]
}, {
    "coord": [33.545902, -84.186512],
    "cams": [{
        "id": "cctv_15281",
        "url": "/georgiasnapshots/HNRY-CAM-118.jpg",
        "name": "SR 138 : Flat Rock Rd"
    }]
}, {
    "coord": [33.786684, -84.392128],
    "cams": [{
        "id": "cctv_15234",
        "stream": "/georgiavss1/atl-cam-903.stream/playlist.m3u8",
        "name": "14th St : Techwood Dr"
    }]
}, {
    "coord": [34.057344, -83.99416],
    "cams": [{
        "id": "cctv_6808",
        "stream": "/georgiavss2/gdot-cam-139.stream/playlist.m3u8",
        "name": "I-85 : SR 20 / BUFORD DR"
    }]
}, {
    "coord": [33.632708, -84.401328],
    "cams": [{
        "id": "cctv_5333",
        "stream": "/georgiavss2/gdot-cam-083.stream/playlist.m3u8",
        "name": "I-75 : I-285 (SOUTH SIDE)"
    }]
}, {
    "coord": [33.697484, -84.419552],
    "cams": [{
        "id": "cctv_5229",
        "stream": "/georgiavss2/gdot-cam-058.stream/playlist.m3u8",
        "name": "SR 166 : SYLVAN RD"
    }]
}, {
    "coord": [33.9615, -84.20888],
    "cams": [{
        "id": "cctv_10205",
        "url": "/georgiasnapshots/GWIN-CAM-031.jpg",
        "name": "PEACHTREE INDUSTRIAL BLVD : MEDLOCK BRIDGE RD"
    }]
}, {
    "coord": [33.683092, -85.26176],
    "cams": [{
        "id": "cctv_16144",
        "url": "/georgiasnapshots/GDOT-CAM-SR100-1.75.jpg",
        "name": "SR 100 : I-20 EB (EXIT 5)"
    }]
}, {
    "coord": [33.818328, -84.351712],
    "cams": [{
        "id": "cctv_9145",
        "stream": "/georgiavss1/atl-cam-069.stream/playlist.m3u8",
        "name": "SR 236 / LaVista Rd : Cheshire Bridge Rd"
    }]
}, {
    "coord": [33.514282, -82.059208],
    "cams": [{
        "id": "cctv_32859",
        "url": "/georgiasnapshots/AUG-CAM-224.jpg",
        "name": "Washington Rd. : Fury's Ferry Rd/Kings Chapel"
    }]
}, {
    "coord": [33.466782, -82.08296],
    "cams": [{
        "id": "cctv_32866",
        "url": "/georgiasnapshots/AUG-CAM-259.jpg",
        "name": "Wrightsboro Rd. : Bobby Jones Exp.(NB ramp)"
    }]
}, {
    "coord": [33.769476, -84.642824],
    "cams": [{
        "id": "cctv_15265",
        "url": "/georgiasnapshots/GDOT-CAM-323.jpg",
        "name": "I-20 : East of Lee Rd"
    }]
}, {
    "coord": [33.94524, -84.68668],
    "cams": [{
        "id": "cctv_12925",
        "url": "/georgiasnapshots/COBB-CAM-259.jpg",
        "name": "Dallas Hwy : Midway Rd"
    }]
}, {
    "coord": [33.960956, -84.528424],
    "cams": [{
        "id": "cctv_15173",
        "url": "/georgiasnapshots/MAR-CAM-104.jpg",
        "name": "SR 3/Cobb Pkwy : SR 120A/ N Marietta Pkwy"
    }]
}, {
    "coord": [32.455346, -81.783632],
    "cams": [{
        "id": "cctv_46235",
        "url": "/georgiasnapshots/BULL-CAM-002.jp",
        "name": "SR 67 BypaVeterans Memorial Pkw : SR 73 (S Main St)"
    }]
}, {
    "coord": [33.973112, -83.865528],
    "cams": [{
        "id": "cctv_46307",
        "url": "/georgiasnapshots/GWIN-CAM-258.jpg",
        "name": "SR 316 : WILLIAMS FARM DR"
    }]
}, {
    "coord": [33.888208, -84.46368],
    "cams": [{
        "id": "cctv_15586",
        "stream": "/georgiavss4/gdot-cam-624.stream/playlist.m3u8",
        "name": "I-285 : I-75 EXIT/EXP ON-OFF"
    }]
}, {
    "coord": [33.475498, -84.43948],
    "cams": [{
        "id": "cctv_6836",
        "stream": "/georgiavss1/fay-cam-108.stream/playlist.m3u8",
        "name": "SR 85 : Ellis Rd"
    }]
}, {
    "coord": [33.697816, -84.430896],
    "cams": [{
        "id": "cctv_5220",
        "stream": "/georgiavss2/gdot-cam-057.stream/playlist.m3u8",
        "name": "SR 166 : US 29"
    }]
}, {
    "coord": [33.955352, -84.056512],
    "cams": [{
        "id": "cctv_10312",
        "url": "/georgiasnapshots/GWIN-CAM-138.jpg",
        "name": "SUGARLOAF PKWY : CRUSE RD"
    }]
}, {
    "coord": [34.064408, -84.613792],
    "cams": [{
        "id": "cctv_15505",
        "stream": "/georgiavss4/gdot-cam-697.stream/playlist.m3u8",
        "name": "HICKORY GROVE RD : WEST OF I-75"
    }]
}, {
    "coord": [34.081184, -84.294776],
    "cams": [{
        "id": "cctv_13670",
        "stream": "/georgiavss1/alph-cam-026.stream/playlist.m3u8",
        "name": "SR 9 : Mayfield Road"
    }]
}, {
    "coord": [34.130016, -84.097768],
    "cams": [{
        "id": "cctv_13258",
        "url": "/georgiasnapshots/FORS-CAM-007.jpg",
        "name": "SR 20 (Buford Hwy) : James Burgess Rd"
    }]
}, {
    "coord": [34.872304, -83.96488],
    "cams": [{
        "id": "cctv_32908",
        "url": "/georgiasnapshots/UNI-CAM-003.jpg",
        "name": "SR 2 : SR 11"
    }]
}, {
    "coord": [33.771128, -84.365896],
    "cams": [{
        "id": "cctv_15272",
        "url": "/georgiasnapshots/ATL-CAM-911.jpg",
        "name": "North Ave : Dallas St / Ponce City Mkt"
    }]
}, {
    "coord": [32.257202, -81.714816],
    "cams": [{
        "id": "cctv_46561",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-127.00.jpg",
        "name": "I-16 : SR 67"
    }]
}, {
    "coord": [33.790368, -84.306464],
    "cams": [{
        "id": "cctv_13352",
        "url": "/georgiasnapshots/DEK-CAM-304.jpg",
        "name": "SR 155 / Clairmont Rd : North Decatur Rd"
    }]
}, {
    "coord": [33.722704, -84.501864],
    "cams": [{
        "id": "cctv_5381",
        "stream": "/georgiavss4/gdot-cam-944.stream/playlist.m3u8",
        "name": "I-285 : CASCADE RD"
    }]
}, {
    "coord": [33.6171, -84.3544],
    "cams": [{
        "id": "cctv_10517",
        "url": "/georgiasnapshots/CLAY-CAM-C601.jpg",
        "name": "SR 331 / Forest Pkwy : Bartlett Dr (E of Phillips Dr )"
    }]
}, {
    "coord": [33.923632, -84.251792],
    "cams": [{
        "id": "cctv_10292",
        "url": "/georgiasnapshots/GWIN-CAM-118.jpg",
        "name": "SR 13 / US 23 : AMWILER RD"
    }]
}, {
    "coord": [33.480728, -82.039672],
    "cams": [{
        "id": "cctv_32907",
        "url": "/georgiasnapshots/AUG-CAM-201.jpg",
        "name": "Walton Way : Bransford Rd."
    }]
}, {
    "coord": [33.838408, -84.57716],
    "cams": [{
        "id": "cctv_32606",
        "url": "/georgiasnapshots/COBB-CAM-071.jpg",
        "name": "Floyd Rd : Hicks Rd"
    }]
}, {
    "coord": [33.504558, -82.055096],
    "cams": [{
        "id": "cctv_32852",
        "url": "/georgiasnapshots/AUG-CAM-750.jpg",
        "name": "Skinner Mill Rd. : Skinner Mill Circle"
    }]
}, {
    "coord": [31.822582, -81.520368],
    "cams": [{
        "id": "cctv_46257",
        "url": "/georgiasnapshots/LIB-CAM-002.jpg",
        "name": "SR 38 (East Oglethorpe Highway) : SR 196 (Leroy Coffer Highway)"
    }]
}, {
    "coord": [34.07596, -83.912152],
    "cams": [{
        "id": "cctv_15991",
        "url": "/georgiasnapshots/GDOT-CAM-798.jpg",
        "name": "I-85 : N OF HAMILTON MILL"
    }]
}, {
    "coord": [33.770516, -84.539872],
    "cams": [{
        "id": "cctv_15407",
        "stream": "/georgiavss3/gdot-cam-320.stream/playlist.m3u8",
        "name": "I-20 : MilePost 48/Chattahoochee Rvr"
    }]
}, {
    "coord": [34.000108, -84.161632],
    "cams": [{
        "id": "cctv_46276",
        "url": "/georgiasnapshots/GWIN-CAM-214.jpg",
        "name": "PLEASANT HILL RD : DULUTH PARK LN"
    }]
}, {
    "coord": [33.820224, -84.303904],
    "cams": [{
        "id": "cctv_13349",
        "url": "/georgiasnapshots/DEK-CAM-300.jpg",
        "name": "SR 155 / Clairmont Rd : Lavista Rd"
    }]
}, {
    "coord": [33.922284, -84.338768],
    "cams": [{
        "id": "cctv_32617",
        "url": "/georgiasnapshots/DUN-CAM-112.jpg",
        "name": "Ashford Dunwoody Rd : Ravinia Pkwy"
    }]
}, {
    "coord": [33.94066, -84.208488],
    "cams": [{
        "id": "cctv_10295",
        "url": "/georgiasnapshots/GWIN-CAM-121.jpg",
        "name": "SR 13 / US 23 : MITCHELL RD"
    }]
}, {
    "coord": [33.969412, -84.146384],
    "cams": [{
        "id": "cctv_10330",
        "url": "/georgiasnapshots/GWIN-CAM-156.jpg",
        "name": "PLEASANT HILL RD : NORTH BERKELEY LAKE RD"
    }]
}, {
    "coord": [33.394622, -84.311328],
    "cams": [{
        "id": "cctv_6040",
        "stream": "/georgiavss1/ams-cam-113.stream/playlist.m3u8",
        "name": "SR 3 / Bear Creek Blvd : Speedway Blvd"
    }]
}, {
    "coord": [34.207916, -84.76096],
    "cams": [{
        "id": "cctv_13275",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-290.jpg",
        "name": "I-75 : SR 20 / Canton Highway"
    }]
}, {
    "coord": [33.574012, -84.27616],
    "cams": [{
        "id": "cctv_5948",
        "stream": "/georgiavss3/gdot-cam-604.stream/playlist.m3u8",
        "name": "I-675 : S OF SR 42"
    }]
}, {
    "coord": [32.518928, -84.953776],
    "cams": [{
        "id": "cctv_15907",
        "url": "/georgiasnapshots/COLU-CAM-014.jpg",
        "name": "I-185 : AIRPORT THRUWAY"
    }]
}, {
    "coord": [32.79155, -83.667064],
    "cams": [{
        "id": "cctv_13585",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-160.jpg",
        "name": "I-75 : Rocky Creek Rd"
    }]
}, {
    "coord": [33.849324, -84.363136],
    "cams": [{
        "id": "cctv_6305",
        "stream": "/georgiavss1/atl-cam-003.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Lenox Mall Entrance"
    }]
}, {
    "coord": [34.013472, -84.557944],
    "cams": [{
        "id": "cctv_5193",
        "stream": "/georgiavss3/gdot-cam-502.stream/playlist.m3u8",
        "name": "I-575 : BARRETT PKWY"
    }]
}, {
    "coord": [34.061824, -84.24576],
    "cams": [{
        "id": "cctv_13607",
        "stream": "/georgiavss1/alph-cam-025.stream/playlist.m3u8",
        "name": "SR 120 (Old Milton Pkwy) : Brookside Pkwy / Vista Forest Dr"
    }]
}, {
    "coord": [33.644776, -84.450472],
    "cams": [{
        "id": "cctv_5305",
        "stream": "/georgiavss2/gdot-cam-078.stream/playlist.m3u8",
        "name": "I-85 : CAMP CREEK PKWY"
    }]
}, {
    "coord": [33.9781, -84.437304],
    "cams": [{
        "id": "cctv_13129",
        "url": "/georgiasnapshots/COBB-CAM-168.jpg",
        "name": "SR 120 / Roswell Rd : Indian Hills Pkwy"
    }]
}, {
    "coord": [34.004376, -84.560032],
    "cams": [{
        "id": "cctv_5191",
        "stream": "/georgiavss3/gdot-cam-500.stream/playlist.m3u8",
        "name": "I-575 : N OF I-75"
    }]
}, {
    "coord": [32.047982, -81.08588],
    "cams": [{
        "id": "cctv_15761",
        "url": "/georgiasnapshots/SAV-CAM-021.jpg",
        "name": "SR 26/VICTORY DR : WATERS AVE"
    }]
}, {
    "coord": [34.537056, -83.975952],
    "cams": [{
        "id": "cctv_32661",
        "url": "/georgiasnapshots/LUMPKN-CAM-001.jpg",
        "name": "SR 9 : Wal-Mart/ E Main"
    }]
}, {
    "coord": [33.911288, -83.465176],
    "cams": [{
        "id": "cctv_32963",
        "url": "/georgiasnapshots/OCNE-CAM-003.jpg",
        "name": "SR 316 : Oconee Connector"
    }]
}, {
    "coord": [33.896788, -84.481792],
    "cams": [{
        "id": "cctv_13680",
        "url": "/georgiasnapshots/COBB-CAM-049.jpg",
        "name": "SR 3/Cobb Pkwy : Lake Park Dr"
    }]
}, {
    "coord": [33.862952, -84.67612],
    "cams": [{
        "id": "cctv_9181",
        "url": "/georgiasnapshots/COBB-CAM-247.jpg",
        "name": "Richard D Sailors Pkwy : New Macland Rd"
    }]
}, {
    "coord": [33.893796, -84.25656],
    "cams": [{
        "id": "cctv_5717",
        "stream": "/georgiavss2/gdot-cam-119.stream/playlist.m3u8",
        "name": "I-85 : JUST N OF I-285"
    }]
}, {
    "coord": [33.893972, -84.463456],
    "cams": [{
        "id": "cctv_15584",
        "stream": "/georgiavss3/gdot-cam-460.stream/playlist.m3u8",
        "name": "I-75 : S OF WINDY RIDGE/AT 285 ON-RAMP"
    }]
}, {
    "coord": [33.76058, -84.492192],
    "cams": [{
        "id": "cctv_5387",
        "stream": "/georgiavss4/gdot-cam-950.stream/playlist.m3u8",
        "name": "I-285 : S OF I-20 (FULTON)"
    }]
}, {
    "coord": [34.05662, -83.993144],
    "cams": [{
        "id": "cctv_15957",
        "stream": "/georgiavss2/gdot-cam-169.stream/playlist.m3u8",
        "name": "I-85 : SR 20"
    }]
}, {
    "coord": [33.74368, -84.404072],
    "cams": [{
        "id": "cctv_15453",
        "url": "/georgiasnapshots/ATL-CAM-963.jpg",
        "name": "Whitehall St : McDaniel St"
    }]
}, {
    "coord": [33.948992, -84.586936],
    "cams": [{
        "id": "cctv_15199",
        "url": "/georgiasnapshots/MAR-CAM-401.jpg",
        "name": "SR 120/Whitlock Ave : Carriage Oaks Dr"
    }]
}, {
    "coord": [34.46494, -84.457464],
    "cams": [{
        "id": "cctv_16099",
        "url": "http://navigator-c2c.dot.ga.gov/PICK-CAM-001.jpg",
        "name": "SR 515 : SR 53"
    }]
}, {
    "coord": [33.944312, -84.23808],
    "cams": [{
        "id": "cctv_5236",
        "stream": "/georgiavss3/gdot-cam-593.stream/playlist.m3u8",
        "name": "SR 141 : N OF JIMMY CARTER"
    }]
}, {
    "coord": [33.475688, -82.001944],
    "cams": [{
        "id": "cctv_32898",
        "url": "/georgiasnapshots/AUG-CAM-200.jpg",
        "name": "Walton Way : Baker Ave."
    }]
}, {
    "coord": [34.038988, -84.053656],
    "cams": [{
        "id": "cctv_10243",
        "url": "/georgiasnapshots/GWIN-CAM-069.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : SATELLITE BLVD"
    }]
}, {
    "coord": [34.068624, -84.275016],
    "cams": [{
        "id": "cctv_13356",
        "stream": "/georgiavss1/alph-cam-019.stream/playlist.m3u8",
        "name": "SR 120 (Old Milton Pkwy) : Northwinds Pkwy / 2nd St"
    }]
}, {
    "coord": [31.501332, -82.849664],
    "cams": [{
        "id": "cctv_46337",
        "url": "/georgiasnapshots/COFF-CAM-002.jpg",
        "name": "SR 31 : SR 158/ BAKER HWY"
    }]
}, {
    "coord": [34.117256, -83.761928],
    "cams": [{
        "id": "cctv_13066",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-129.jpg",
        "name": "I-85 : SR 53 / WINDER HWY"
    }]
}, {
    "coord": [33.724972, -84.76232],
    "cams": [{
        "id": "cctv_12950",
        "stream": "/georgiavss1/doug-cam-036.stream/playlist.m3u8",
        "name": "SR 5 (Bill Arp Rd) : Douglas Blvd"
    }]
}, {
    "coord": [33.728052, -84.760584],
    "cams": [{
        "id": "cctv_9302",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-034.jpg",
        "name": "I-20 : GA HWY 5"
    }]
}, {
    "coord": [33.788192, -84.045824],
    "cams": [{
        "id": "cctv_10333",
        "url": "/georgiasnapshots/GWIN-CAM-159.jpg",
        "name": "SR 124 : N of HUDDERSFIELD DR / N of NORRIS LAKE RD"
    }]
}, {
    "coord": [34.793252, -85.000544],
    "cams": [{
        "id": "cctv_13659",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-336.jpg",
        "name": "I-75 : US 41/76 - Rocky Face"
    }]
}, {
    "coord": [31.826818, -81.598344],
    "cams": [{
        "id": "cctv_46552",
        "url": "/georgiasnapshots/LIB-CAM-005.jpg",
        "name": "SR 38 : SR 196/ Veterans Pkwy"
    }]
}, {
    "coord": [32.821824, -83.684936],
    "cams": [{
        "id": "cctv_5976",
        "url": "/georgiasnapshots/BIBB-CAM-514.jpg",
        "name": "MERCER UNIV : OGLESBY PL"
    }]
}, {
    "coord": [33.769244, -84.352688],
    "cams": [{
        "id": "cctv_9192",
        "stream": "/georgiavss1/atl-cam-072.stream/playlist.m3u8",
        "name": "SR 10 (Freedom Pkwy) : North Highland Ave"
    }]
}, {
    "coord": [34.252516, -84.091552],
    "cams": [{
        "id": "cctv_32561",
        "url": "http://navigator-csc.dot.ga.gov/snapshots/FORS-CAM-028.jpg",
        "name": "SR 306 : SR 400 NB"
    }]
}, {
    "coord": [33.6887, -84.303816],
    "cams": [{
        "id": "cctv_5038",
        "stream": "/georgiavss2/gdot-cam-270.stream/playlist.m3u8",
        "name": "I-285 : E OF BOULDERCREST RD"
    }]
}, {
    "coord": [33.858708, -84.340728],
    "cams": [{
        "id": "cctv_8834",
        "stream": "/georgiavss1/brok-cam-102.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : N Druid Hills Rd"
    }]
}, {
    "coord": [33.745148, -84.722528],
    "cams": [{
        "id": "cctv_15430",
        "stream": "/georgiavss2/gdot-cam-302.stream/playlist.m3u8",
        "name": "I-20 : West of Fairburn Rd./SR 92"
    }]
}, {
    "coord": [34.160948, -84.511728],
    "cams": [{
        "id": "cctv_15440",
        "stream": "/georgiavss3/gdot-cam-570.stream/playlist.m3u8",
        "name": "I-575 : 1/2 MI N OF SIXES RD"
    }]
}, {
    "coord": [33.894296, -84.453888],
    "cams": [{
        "id": "cctv_15560",
        "stream": "/georgiavss4/gdot-cam-629.stream/playlist.m3u8",
        "name": "I-285 : EXIT TO I-75 N/S"
    }]
}, {
    "coord": [33.750652, -84.716976],
    "cams": [{
        "id": "cctv_9313",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-037.jpg",
        "name": "I-20 : SR 92"
    }]
}, {
    "coord": [33.946392, -84.623808],
    "cams": [{
        "id": "cctv_7338",
        "url": "/georgiasnapshots/COBB-CAM-250.jpg",
        "name": "Dallas Hwy : Barrett Pkwy"
    }]
}, {
    "coord": [33.806088, -84.2738],
    "cams": [{
        "id": "cctv_5301",
        "stream": "/georgiavss4/gdot-cam-776.stream/playlist.m3u8",
        "name": "US 78 : LAWRENCEVILLE HWY"
    }]
}, {
    "coord": [31.50126, -82.849544],
    "cams": [{
        "id": "cctv_16009",
        "url": "/georgiasnapshots/GDOT-CAM-SR31-6.77.jpg",
        "name": "SR 31 : SR 158/ Baker Street"
    }]
}, {
    "coord": [33.619336, -84.431384],
    "cams": [{
        "id": "cctv_5252",
        "stream": "/georgiavss4/gdot-cam-654.stream/playlist.m3u8",
        "name": "I-285 : WEST EDGE OF TUNNEL"
    }]
}, {
    "coord": [33.9215, -84.485024],
    "cams": [{
        "id": "cctv_15983",
        "stream": "/georgiavss3/gdot-cam-473.stream/playlist.m3u8",
        "name": "I-75 : AT DELK RD ENTRANCE"
    }]
}, {
    "coord": [33.62102, -84.476304],
    "cams": [{
        "id": "cctv_4956",
        "stream": "/georgiavss2/gdot-cam-193.stream/playlist.m3u8",
        "name": "I-85 : S OF OLD NATIONAL HWY"
    }]
}, {
    "coord": [31.487804, -82.8512],
    "cams": [{
        "id": "cctv_46339",
        "url": "/georgiasnapshots/COFF-CAM-004.jpg",
        "name": "SR 31 : SR 135"
    }]
}, {
    "coord": [33.91552, -84.20872],
    "cams": [{
        "id": "cctv_10407",
        "url": "/georgiasnapshots/GWIN-CAM-248.jpg",
        "name": "SR 140 : Goshen Springs Rd/Crescent Dr"
    }]
}, {
    "coord": [33.825728, -84.09792],
    "cams": [{
        "id": "cctv_10275",
        "url": "/georgiasnapshots/GWIN-CAM-101.jpg",
        "name": "SR 10 : Stone Dr"
    }]
}, {
    "coord": [33.479676, -84.43676],
    "cams": [{
        "id": "cctv_6854",
        "stream": "/georgiavss1/fay-cam-107.stream/playlist.m3u8",
        "name": "SR 85 : Pavilion Pkwy / Pine Trail Rd"
    }]
}, {
    "coord": [33.763304, -84.67436],
    "cams": [{
        "id": "cctv_15444",
        "stream": "/georgiavss2/gdot-cam-307.stream/playlist.m3u8",
        "name": "I-20 : Near N County Line Rd"
    }]
}, {
    "coord": [32.587014, -83.74384],
    "cams": [{
        "id": "cctv_16194",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-144.jpg",
        "name": "I-75 : Russell Pky"
    }]
}, {
    "coord": [33.724348, -84.3244],
    "cams": [{
        "id": "cctv_5103",
        "stream": "/georgiavss3/gdot-cam-363.stream/playlist.m3u8",
        "name": "I-20 : FAYETTEVILLE RD"
    }]
}, {
    "coord": [31.949958, -81.31232],
    "cams": [{
        "id": "cctv_46232",
        "url": "/georgiasnapshots/BRY-CAM-001.jpg",
        "name": "SR 144 : SR 25"
    }]
}, {
    "coord": [34.042228, -84.227304],
    "cams": [{
        "id": "cctv_16239",
        "url": "/georgiasnapshots/COJC-CAM-620.jpg",
        "name": "Jones Bridge Rd : W Morton Rd"
    }]
}, {
    "coord": [31.03998, -84.883008],
    "cams": [{
        "id": "cctv_16005",
        "url": "/georgiasnapshots/GDOT-CAM-SR38-5.01.jpg",
        "name": "SR 38/3RD ST : SR 91/WILEY AVE"
    }]
}, {
    "coord": [33.975932, -84.534144],
    "cams": [{
        "id": "cctv_15497",
        "stream": "/georgiavss3/gdot-cam-489.stream/playlist.m3u8",
        "name": "I-75 : N OF ALLGOOD RD"
    }]
}, {
    "coord": [33.776872, -84.38884],
    "cams": [{
        "id": "cctv_16092",
        "url": "/georgiasnapshots/ATL-CAM-973.jpg",
        "name": "Spring St : 5th Street"
    }]
}, {
    "coord": [33.896832, -84.467656],
    "cams": [{
        "id": "cctv_15559",
        "stream": "/georgiavss3/gdot-cam-463.stream/playlist.m3u8",
        "name": "I-75 : I-75 AT EXPRESS FLYOVER"
    }]
}, {
    "coord": [33.90306, -84.48728],
    "cams": [{
        "id": "cctv_7311",
        "url": "/georgiasnapshots/COBB-CAM-051.jpg",
        "name": "SR 3/Cobb Pkwy : Windy Hill Rd"
    }]
}, {
    "coord": [33.912396, -84.133176],
    "cams": [{
        "id": "cctv_10318",
        "url": "/georgiasnapshots/GWIN-CAM-144.jpg",
        "name": "SR 378 : BURNS RD"
    }]
}, {
    "coord": [33.77332, -84.367712],
    "cams": [{
        "id": "cctv_7195",
        "stream": "/georgiavss1/atl-cam-207.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : Glen Iris Dr"
    }]
}, {
    "coord": [33.51062, -84.448248],
    "cams": [{
        "id": "cctv_13676",
        "url": "/georgiasnapshots/FAY-CAM-020.jpg",
        "name": "SR 314 / W Fayetteville Rd : Kenwood Rd"
    }]
}, {
    "coord": [32.802604, -83.665032],
    "cams": [{
        "id": "cctv_5973",
        "url": "/georgiasnapshots/BIBB-CAM-511.jpg",
        "name": "PIO NONO AVE : NEWBERG AVE"
    }]
}, {
    "coord": [33.74186, -84.682768],
    "cams": [{
        "id": "cctv_46420",
        "url": "/georgiasnapshots/DOUG-CAM-092.jpg",
        "name": "SR 92/ FAIRBURN RD : MACK RD/ BOMAR RD"
    }]
}, {
    "coord": [33.912272, -84.474856],
    "cams": [{
        "id": "cctv_15508",
        "stream": "/georgiavss3/gdot-cam-477.stream/playlist.m3u8",
        "name": "TERRELL MILL RD : EAST OF I-75"
    }]
}, {
    "coord": [33.760976, -84.382128],
    "cams": [{
        "id": "cctv_15300",
        "url": "/georgiasnapshots/ATL-CAM-929.jpg",
        "name": "Piedmont Ave : John Portman Blvd/I-75/I-85 Ramp"
    }]
}, {
    "coord": [33.999808, -84.587528],
    "cams": [{
        "id": "cctv_8797",
        "url": "/georgiasnapshots/COBB-CAM-013.jpg",
        "name": "Barrett Pkwy : Cobb Pkwy"
    }]
}, {
    "coord": [32.07409, -81.099648],
    "cams": [{
        "id": "cctv_46508",
        "url": "/georgiasnapshots/SAV-CAM-042.jpg",
        "name": "MLK Blvd. : Jones St."
    }]
}, {
    "coord": [33.396084, -84.61868],
    "cams": [{
        "id": "cctv_15414",
        "url": "/georgiasnapshots/COW-CAM-007.jpg",
        "name": "SR 34 : SR 54"
    }]
}, {
    "coord": [31.692628, -83.245072],
    "cams": [{
        "id": "cctv_46332",
        "url": "/georgiasnapshots/BENH-CAM-004.jpg",
        "name": "SR 11 : SR 107"
    }]
}, {
    "coord": [32.012672, -80.843024],
    "cams": [{
        "id": "cctv_15899",
        "url": "/georgiasnapshots/SAV-CAM-037.jpg",
        "name": "SR 26/US 80 : JONES AVE"
    }]
}, {
    "coord": [33.583156, -84.279848],
    "cams": [{
        "id": "cctv_5950",
        "stream": "/georgiavss3/gdot-cam-606.stream/playlist.m3u8",
        "name": "I-675 : N OF EVANS DR"
    }]
}, {
    "coord": [33.718996, -84.318232],
    "cams": [{
        "id": "cctv_5104",
        "stream": "/georgiavss3/gdot-cam-364.stream/playlist.m3u8",
        "name": "I-20 : W OF GRESHAM RD"
    }]
}, {
    "coord": [34.008432, -84.131248],
    "cams": [{
        "id": "cctv_10301",
        "url": "/georgiasnapshots/GWIN-CAM-127.jpg",
        "name": "SR 13 / US 23 : OLD PEACTREE RD"
    }]
}, {
    "coord": [33.653272, -84.005968],
    "cams": [{
        "id": "cctv_13359",
        "url": "/georgiasnapshots/ROCK-CAM-113.jpg",
        "name": "SR 138 / McDonough Rd : I-20 EB Ramp"
    }]
}, {
    "coord": [34.014424, -84.558752],
    "cams": [{
        "id": "cctv_7300",
        "url": "/georgiasnapshots/COBB-CAM-017.jpg",
        "name": "Barrett Pkwy : I-575"
    }]
}, {
    "coord": [33.982004, -84.608592],
    "cams": [{
        "id": "cctv_8807",
        "url": "/georgiasnapshots/COBB-CAM-018.jpg",
        "name": "Barrett Pkwy : Stilesboro Rd"
    }]
}, {
    "coord": [33.9021, -84.4408],
    "cams": [{
        "id": "cctv_4969",
        "stream": "/georgiavss2/gdot-cam-205.stream/playlist.m3u8",
        "name": "I-285 : CHATT RIVER"
    }]
}, {
    "coord": [34.075468, -84.429688],
    "cams": [{
        "id": "cctv_7191",
        "url": "/georgiasnapshots/CHER-CAM-001.jpg",
        "name": "SR 92 / Woodstock Rd : Wiley Bridge Rd"
    }]
}, {
    "coord": [33.895, -84.463544],
    "cams": [{
        "id": "cctv_13653",
        "url": "/georgiasnapshots/COBB-CAM-130.jpg",
        "name": "Windy Ridge Pkwy : Interstate North Pkwy"
    }]
}, {
    "coord": [33.465878, -81.962472],
    "cams": [{
        "id": "cctv_32829",
        "url": "/georgiasnapshots/AUG-CAM-194.jpg",
        "name": "Walton Way : 5th St."
    }]
}, {
    "coord": [33.833648, -84.383016],
    "cams": [{
        "id": "cctv_7205",
        "stream": "/georgiavss1/atl-cam-005.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd : Delmont Dr"
    }]
}, {
    "coord": [33.903348, -84.47184],
    "cams": [{
        "id": "cctv_13652",
        "url": "/georgiasnapshots/COBB-CAM-036.jpg",
        "name": "Windy Hill Rd : Leland Dr"
    }]
}, {
    "coord": [32.919944, -83.799904],
    "cams": [{
        "id": "cctv_6033",
        "stream": "/georgiavss5/bibb-cam-037.stream/playlist.m3u8",
        "name": "I-475 : 1 MI S OF ESTES RD"
    }]
}, {
    "coord": [33.653088, -84.397104],
    "cams": [{
        "id": "cctv_15356",
        "stream": "/georgiavss1/atl-cam-802.stream/playlist.m3u8",
        "name": "SR 3 / Central Ave : I-75 SB Exit"
    }]
}, {
    "coord": [31.950866, -83.456288],
    "cams": [{
        "id": "cctv_46381",
        "url": "/georgiasnapshots/WILC-CAM-001.jpg",
        "name": "SR30 : SR112/ASHLEY ST"
    }]
}, {
    "coord": [33.744876, -84.404792],
    "cams": [{
        "id": "cctv_15305",
        "url": "/georgiasnapshots/ATL-CAM-935.jpg",
        "name": "SR 14 (Peters St) : McDaniel St"
    }]
}, {
    "coord": [34.037508, -84.564384],
    "cams": [{
        "id": "cctv_12905",
        "url": "/georgiasnapshots/COBB-CAM-315.jpg",
        "name": "Chastain Rd : I-575 SB Ramp"
    }]
}, {
    "coord": [34.036152, -84.569584],
    "cams": [{
        "id": "cctv_12906",
        "url": "/georgiasnapshots/COBB-CAM-317.jpg",
        "name": "Chastain Rd : George Busbee Pkwy"
    }]
}, {
    "coord": [34.027092, -84.637664],
    "cams": [{
        "id": "cctv_7367",
        "url": "/georgiasnapshots/COBB-CAM-342.jpg",
        "name": "SR 3/Cobb Pkwy : Mack Dobbs Rd"
    }]
}, {
    "coord": [34.04598, -84.0266],
    "cams": [{
        "id": "cctv_15958",
        "stream": "/georgiavss2/gdot-cam-163.stream/playlist.m3u8",
        "name": "I-85 : N OF I-985"
    }]
}, {
    "coord": [33.699252, -84.408064],
    "cams": [{
        "id": "cctv_13055",
        "stream": "/georgiavss1/atl-cam-078.stream/playlist.m3u8",
        "name": "SR 3 (Metropolitan Pkwy) : St Johns Ave"
    }]
}, {
    "coord": [34.155812, -84.818512],
    "cams": [{
        "id": "cctv_46474",
        "url": "/georgiasnapshots/BART-CAM-102.jpg",
        "name": "SR 113 : Henderson Dr"
    }]
}, {
    "coord": [33.856284, -84.014816],
    "cams": [{
        "id": "cctv_32532",
        "url": "/georgiasnapshots/GWIN-CAM-227.jpg",
        "name": "US 78 : OAK RD - HENRY CLOWER BLVD"
    }]
}, {
    "coord": [33.972193, -84.149652],
    "cams": [{
        "id": "cctv_10419",
        "url": "/georgiasnapshots/GCDOT-IVDS-321.jpg",
        "name": "PLEASANT HILL RD : SHORTY HOWELL PK"
    }]
}, {
    "coord": [32.221364, -81.1962],
    "cams": [{
        "id": "cctv_46247",
        "url": "/georgiasnapshots/CHAT-CAM-004.jpg",
        "name": "SR 21 (Augusta Road) : Rice Mill Rd/Market Blvd"
    }]
}, {
    "coord": [32.586238, -83.741816],
    "cams": [{
        "id": "cctv_16195",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-144.2.jpg",
        "name": "I-75 : Russell Pky"
    }]
}, {
    "coord": [33.55528, -85.072336],
    "cams": [{
        "id": "cctv_16182",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-10.11.jpg",
        "name": "SR 1 : SR 166 EB"
    }]
}, {
    "coord": [34.010488, -84.606072],
    "cams": [{
        "id": "cctv_16323",
        "url": "/georgiasnapshots/COBB-CAM-308.jpg",
        "name": "Old Hwy 41 : Airport Rd"
    }]
}, {
    "coord": [33.988876, -84.273808],
    "cams": [{
        "id": "cctv_6267",
        "url": "/georgiasnapshots/ROSWELL-CAM-102.jpg",
        "name": "SR 140 : Nesbitt Ferry Rd/S Holcomb Bridge Way"
    }]
}, {
    "coord": [33.953132, -83.768248],
    "cams": [{
        "id": "cctv_32962",
        "url": "/georgiasnapshots/OCNE-CAM-002.jpg",
        "name": "SR 10 : SR 316 EB Ramp"
    }]
}, {
    "coord": [33.910128, -84.478704],
    "cams": [{
        "id": "cctv_15518",
        "stream": "/georgiavss3/gdot-cam-467.stream/playlist.m3u8",
        "name": "I-75 : S OF TERRELL MILL RD"
    }]
}, {
    "coord": [33.883464, -84.468168],
    "cams": [{
        "id": "cctv_7315",
        "url": "/georgiasnapshots/COBB-CAM-055.jpg",
        "name": "SR 3/Cobb Pkwy : Galleria Dr/Cumberland Mall"
    }]
}, {
    "coord": [33.59416, -84.549552],
    "cams": [{
        "id": "cctv_46445",
        "url": "/georgiasnapshots/FULT-CAM-022.jpg",
        "name": "GA 14/ US 29/ Roosevelt Hwy : High Point Rd"
    }]
}, {
    "coord": [34.022124, -84.325416],
    "cams": [{
        "id": "cctv_13144",
        "url": "/georgiasnapshots/ROSWELL-CAM-132.jpg",
        "name": "SR 140 / Holcomb Bridge Rd : GA 400 SB Ramp"
    }]
}, {
    "coord": [33.9205, -84.321096],
    "cams": [{
        "id": "cctv_4988",
        "stream": "/georgiavss2/gdot-cam-222.stream/playlist.m3u8",
        "name": "I-285 : W OF CHAM-DNWDY"
    }]
}, {
    "coord": [32.618556, -83.66888],
    "cams": [{
        "id": "cctv_16085",
        "url": "/georgiasnapshots/GDOT-CAM-SR247C-2.9.jpg",
        "name": "SR 247C / Watson Blvd : Carl Vinson Pkwy"
    }]
}, {
    "coord": [33.961164, -84.496568],
    "cams": [{
        "id": "cctv_13082",
        "url": "/georgiasnapshots/COBB-CAM-164.jpg",
        "name": "SR 120 / Roswell Rd : N Marietta Pky/120 Loop SB"
    }]
}, {
    "coord": [33.61864, -84.350736],
    "cams": [{
        "id": "cctv_10507",
        "url": "/georgiasnapshots/CLAY-CAM-219.jpg",
        "name": "SR 54 / Jonesboro Rd : Main St"
    }]
}, {
    "coord": [34.00402, -84.063336],
    "cams": [{
        "id": "cctv_46319",
        "url": "/georgiasnapshots/GC-CAM-269.jpg",
        "name": "OLD PEACHTREE RD : DEAN RD"
    }]
}, {
    "coord": [33.682772, -84.347384],
    "cams": [{
        "id": "cctv_6834",
        "url": "/georgiasnapshots/DEK-CAM-054.jpg",
        "name": "SR 42 (Moreland Ave) : S River Ind Blvd SE"
    }]
}, {
    "coord": [34.119344, -83.825704],
    "cams": [{
        "id": "cctv_32937",
        "url": "/georgiasnapshots/GWIN-CAM-326.jpg",
        "name": "SR 211 : Grand Hickory Dr"
    }]
}, {
    "coord": [34.312048, -84.065568],
    "cams": [{
        "id": "cctv_32569",
        "url": "/georgiasnapshots/FORS-CAM-036.jpg",
        "name": "SR 400 : Hubbard Town/Cross Rd"
    }]
}, {
    "coord": [33.82744, -84.387416],
    "cams": [{
        "id": "cctv_7222",
        "stream": "/georgiavss1/atl-cam-007.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd : Peachtree Way"
    }]
}, {
    "coord": [33.5907, -84.2786],
    "cams": [{
        "id": "cctv_10494",
        "url": "/georgiasnapshots/CLAY-CAM-177.jpg",
        "name": "Rex Rd : Evans Dr"
    }]
}, {
    "coord": [33.5842, -84.375816],
    "cams": [{
        "id": "cctv_5294",
        "stream": "/georgiavss4/gdot-cam-721.stream/playlist.m3u8",
        "name": "I-75 : OLD DIXIE RAMP METER"
    }]
}, {
    "coord": [32.043102, -81.066824],
    "cams": [{
        "id": "cctv_15807",
        "url": "/georgiasnapshots/SAV-CAM-024.jpg",
        "name": "SR 26/VICTORY DR : WALLIN ST"
    }]
}, {
    "coord": [32.8802, -83.766288],
    "cams": [{
        "id": "cctv_6037",
        "url": "/georgiasnapshots/BIBB-CAM-041.jpg",
        "name": "ZEBULON RD : I-475 NB RAMP"
    }]
}, {
    "coord": [33.944468, -84.24108],
    "cams": [{
        "id": "cctv_10192",
        "url": "/georgiasnapshots/GWIN-CAM-014.jpg",
        "name": "SR 140 : SR 141 (PIB) SB Ramp"
    }]
}, {
    "coord": [33.89464, -84.538896],
    "cams": [{
        "id": "cctv_7342",
        "url": "/georgiasnapshots/COBB-CAM-271.jpg",
        "name": "Windy Hill Rd : South Cobb Drive"
    }]
}, {
    "coord": [33.82576, -84.174376],
    "cams": [{
        "id": "cctv_5313",
        "stream": "/georgiavss4/gdot-cam-787.stream/playlist.m3u8",
        "name": "US 78 : E OF JULIETTE RD"
    }]
}, {
    "coord": [33.658268, -84.02084],
    "cams": [{
        "id": "cctv_16380",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-081.45.jpg",
        "name": "I-20 : 1/2 MI W OF SR 20/138"
    }]
}, {
    "coord": [33.873828, -84.330304],
    "cams": [{
        "id": "cctv_8835",
        "stream": "/georgiavss1/brok-cam-107.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Lanier Dr"
    }]
}, {
    "coord": [33.731364, -84.747432],
    "cams": [{
        "id": "cctv_15419",
        "stream": "/georgiavss2/gdot-cam-295.stream/playlist.m3u8",
        "name": "I-20 : East of CMS-56"
    }]
}, {
    "coord": [33.93004, -84.5094],
    "cams": [{
        "id": "cctv_15178",
        "url": "/georgiasnapshots/MAR-CAM-109.jpg",
        "name": "SR 3/Cobb Pkwy : Barclay Cir"
    }]
}, {
    "coord": [33.965936, -84.142312],
    "cams": [{
        "id": "cctv_10329",
        "url": "/georgiasnapshots/GWIN-CAM-155.jpg",
        "name": "PLEASANT HILL RD : STEVE REYNOLDS BLVD"
    }]
}, {
    "coord": [33.619892, -84.54488],
    "cams": [{
        "id": "cctv_46451",
        "url": "/georgiasnapshots/FULT-CAM-029.jpg",
        "name": "GA 14 ALT/ South Fulton Pkwy : Mason Rd/ Hunter Rd"
    }]
}, {
    "coord": [33.98632, -84.07924],
    "cams": [{
        "id": "cctv_10308",
        "url": "/georgiasnapshots/GWIN-CAM-134.jpg",
        "name": "SUGARLOAF PKWY : N BROWN RD"
    }]
}, {
    "coord": [33.770204, -84.40448],
    "cams": [{
        "id": "cctv_13061",
        "stream": "/georgiavss1/atl-cam-085.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : North Ave"
    }]
}, {
    "coord": [33.873276, -83.441584],
    "cams": [{
        "id": "cctv_32664",
        "url": "/georgiasnapshots/OCNE-CAM-003",
        "name": "SR 53 : Mars Hill Rd"
    }]
}, {
    "coord": [34.058012, -84.232928],
    "cams": [{
        "id": "cctv_13355",
        "stream": "/georgiavss1/alph-cam-018.stream/playlist.m3u8",
        "name": "SR 120 (Old Milton Pkwy) : State Bridge Way / Chick-Fil-A"
    }]
}, {
    "coord": [33.260018, -84.095936],
    "cams": [{
        "id": "cctv_13568",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-205.jpg",
        "name": "I-75 : SR 16"
    }]
}, {
    "coord": [32.467334, -84.969648],
    "cams": [{
        "id": "cctv_9127",
        "url": "/georgiasnapshots/COLU-CAM-006.jpg",
        "name": "Spur 22/Wynnton Rd : Buena Vista Rd"
    }]
}, {
    "coord": [33.485322, -81.996024],
    "cams": [{
        "id": "cctv_32842",
        "url": "/georgiasnapshots/AUG-CAM-039.jpg",
        "name": "Broad St. : Eve"
    }]
}, {
    "coord": [34.211428, -84.526832],
    "cams": [{
        "id": "cctv_16165",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-8.25.jpg",
        "name": "SR 20 : BUTTERWORTH RD"
    }]
}, {
    "coord": [32.546204, -83.719592],
    "cams": [{
        "id": "cctv_16189",
        "url": "/georgiasnapshots/GDOT-CAM-SR11-18.8.jpg",
        "name": "SR 11/ US 41 : SR 96"
    }]
}, {
    "coord": [33.459622, -84.206976],
    "cams": [{
        "id": "cctv_13254",
        "stream": "/georgiavss4/gdot-cam-676.stream/playlist.m3u8",
        "name": "JONESBORO : EXPRESS LN RAMP"
    }]
}, {
    "coord": [34.086764, -84.50308],
    "cams": [{
        "id": "cctv_6863",
        "stream": "/georgiavss1/cher-cam-013.stream/playlist.m3u8",
        "name": "SR 92 / Woodstock Rd : Londonderry Dr"
    }]
}, {
    "coord": [33.725972, -84.357944],
    "cams": [{
        "id": "cctv_32647",
        "url": "/georgiasnapshots/GDOT-SVT1-pole%20barn.jpg",
        "name": "Walker ave : pole barn"
    }]
}, {
    "coord": [31.936644, -81.928848],
    "cams": [{
        "id": "cctv_46293",
        "url": "/georgiasnapshots/TAT-CAM-002.jpg",
        "name": "SR 23/57 : SR 144 (W BERNARD ST)"
    }]
}, {
    "coord": [33.833616, -84.340232],
    "cams": [{
        "id": "cctv_13590",
        "stream": "/georgiavss1/brok-cam-003.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : SR 42 / N Druid Hills Rd"
    }]
}, {
    "coord": [33.982152, -83.972952],
    "cams": [{
        "id": "cctv_46301",
        "url": "/georgiasnapshots/GWIN-CAM-252.jpg",
        "name": "SR 316 : HI HOPE RD"
    }]
}, {
    "coord": [34.207232, -84.142584],
    "cams": [{
        "id": "cctv_16354",
        "url": "/georgiasnapshots/FORS-CAM-009.jpg",
        "name": "SR 20 : Canton Rd"
    }]
}, {
    "coord": [33.798712, -84.220824],
    "cams": [{
        "id": "cctv_15297",
        "stream": "/georgiavss1/dek-cam-156.stream/playlist.m3u8",
        "name": "SR 10 (Memorial Drive) : Rays Rd"
    }]
}, {
    "coord": [32.995788, -85.029736],
    "cams": [{
        "id": "cctv_15325",
        "url": "/georgiasnapshots/GDOT-CAM-SR219-9.1.jpg",
        "name": "SR 219 : Pegasus Pkwy"
    }]
}, {
    "coord": [32.841918, -83.649896],
    "cams": [{
        "id": "cctv_5988",
        "url": "/georgiasnapshots/BIBB-CAM-526.jpg",
        "name": "VINEVILLE AVE : HOLT AVE"
    }]
}, {
    "coord": [33.56104, -84.543968],
    "cams": [{
        "id": "cctv_4943",
        "stream": "/georgiavss2/gdot-cam-181.stream/playlist.m3u8",
        "name": "I-85 : S OF SR 138"
    }]
}, {
    "coord": [34.03192, -83.908],
    "cams": [{
        "id": "cctv_10377",
        "url": "/georgiasnapshots/GWIN-CAM-203.jpg",
        "name": "SR 324 : DACULA RD"
    }]
}, {
    "coord": [34.024456, -84.056056],
    "cams": [{
        "id": "cctv_15962",
        "url": "/georgiasnapshots/GDOT-CAM-156.jpg",
        "name": "I-85 : S OF MCGINNIS FERRY RD"
    }]
}, {
    "coord": [33.608, -84.4358],
    "cams": [{
        "id": "cctv_10433",
        "url": "/georgiasnapshots/CLAY-CAM-013.jpg",
        "name": "SR 139 : Norman Dr"
    }]
}, {
    "coord": [33.61046, -84.312408],
    "cams": [{
        "id": "cctv_10521",
        "url": "/georgiasnapshots/CLAY-CAM-C605.jpg",
        "name": "SR 331 / Forest Pkwy : John G Glover Ind Ct"
    }]
}, {
    "coord": [33.37642, -84.268344],
    "cams": [{
        "id": "cctv_6049",
        "url": "/georgiasnapshots/AMS-CAM-903.jpg",
        "name": "SR 20 : S HAMPTON RD"
    }]
}, {
    "coord": [34.087984, -84.588288],
    "cams": [{
        "id": "cctv_10170",
        "stream": "/georgiavss1/cher-cam-031.stream/playlist.m3u8",
        "name": "SR 92 / Alabama Rd : Wade Green Rd"
    }]
}, {
    "coord": [34.207312, -84.818856],
    "cams": [{
        "id": "cctv_16136",
        "url": "/georgiasnapshots/GDOT-CAM-SR3-12.35.jpg",
        "name": "SR 3 : GRASSDALE RD"
    }]
}, {
    "coord": [34.119212, -84.076936],
    "cams": [{
        "id": "cctv_10400",
        "url": "/georgiasnapshots/GWIN-CAM-241.jpg",
        "name": "SR 20 : Suwanee Dam Rd"
    }]
}, {
    "coord": [33.535, -84.371904],
    "cams": [{
        "id": "cctv_10479",
        "url": "/georgiasnapshots/CLAY-CAM-128.jpg",
        "name": "SR 138 : CROWN WAY / NORTH AVE"
    }]
}, {
    "coord": [33.632484, -84.406304],
    "cams": [{
        "id": "cctv_5590",
        "stream": "/georgiavss4/gdot-cam-673.stream/playlist.m3u8",
        "name": "I-285 : EXIT TO I-75 S"
    }]
}, {
    "coord": [33.886564, -84.457936],
    "cams": [{
        "id": "cctv_5066",
        "stream": "/georgiavss2/gdot-cam-033.stream/playlist.m3u8",
        "name": "I-75 : AKERS MILL RD"
    }]
}, {
    "coord": [33.614456, -84.438288],
    "cams": [{
        "id": "cctv_10530",
        "url": "/georgiasnapshots/CLAY-CAM-x902.jpg",
        "name": "SR 139 : PHOENIX BLVD"
    }]
}, {
    "coord": [33.443646, -84.695048],
    "cams": [{
        "id": "cctv_32924",
        "url": "/georgiasnapshots/COW-CAM-019.jpg",
        "name": "SR 154 : I-85 SB ENT"
    }]
}, {
    "coord": [34.075716, -84.29252],
    "cams": [{
        "id": "cctv_15324",
        "url": "/georgiasnapshots/ALPH-CAM-029.jpg",
        "name": "Academy St : Park Plaza"
    }]
}, {
    "coord": [33.83844, -84.322544],
    "cams": [{
        "id": "cctv_5124",
        "stream": "/georgiavss2/gdot-cam-040.stream/playlist.m3u8",
        "name": "I-85 : S OF CLAIRMONT RD"
    }]
}, {
    "coord": [33.773612, -84.352648],
    "cams": [{
        "id": "cctv_7198",
        "stream": "/georgiavss1/atl-cam-213.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : N Highland Ave"
    }]
}, {
    "coord": [33.521484, -82.027096],
    "cams": [{
        "id": "cctv_32855",
        "url": "/georgiasnapshots/AUG-CAM-169.jpg",
        "name": "River Watch Pkwy. : I-20 EB ramp"
    }]
}, {
    "coord": [33.965244, -84.349768],
    "cams": [{
        "id": "cctv_5334",
        "stream": "/georgiavss4/gdot-cam-830.stream/playlist.m3u8",
        "name": "GA 400 : S OF PITTS RD"
    }]
}, {
    "coord": [33.448398, -84.3252],
    "cams": [{
        "id": "cctv_10442",
        "url": "/georgiasnapshots/CLAY-CAM-026.jpg",
        "name": "SR 3 / Tara Blvd : McDonough Rd"
    }]
}, {
    "coord": [33.43496, -82.009952],
    "cams": [{
        "id": "cctv_32890",
        "url": "/georgiasnapshots/AUG-CAM-113.jpg",
        "name": "Hwy 25 : Tubman Home Rd."
    }]
}, {
    "coord": [33.932304, -84.491976],
    "cams": [{
        "id": "cctv_15911",
        "stream": "/georgiavss3/gdot-cam-480.stream/playlist.m3u8",
        "name": "I-75 : 1/2 MI N OF DELK RD"
    }]
}, {
    "coord": [33.720748, -84.237696],
    "cams": [{
        "id": "cctv_5028",
        "stream": "/georgiavss2/gdot-cam-261.stream/playlist.m3u8",
        "name": "I-285 : I-20 EXIT RAMP"
    }]
}, {
    "coord": [33.883188, -84.486608],
    "cams": [{
        "id": "cctv_15167",
        "url": "/georgiasnapshots/COBB-CAM-135.jpg",
        "name": "SPRING RD : CAMBPELL RD"
    }]
}, {
    "coord": [33.479618, -82.037744],
    "cams": [{
        "id": "cctv_32906",
        "url": "/georgiasnapshots/AUG-CAM-209.jpg",
        "name": "Walton Way : Lake Forest Dr."
    }]
}, {
    "coord": [33.938596, -84.03432],
    "cams": [{
        "id": "cctv_10221",
        "url": "/georgiasnapshots/GWIN-CAM-047.jpg",
        "name": "US 29 : SUGARLOAF PKWY"
    }]
}, {
    "coord": [34.091012, -83.998896],
    "cams": [{
        "id": "cctv_10351",
        "url": "/georgiasnapshots/GWIN-CAM-177.jpg",
        "name": "SR 20 : S Lee St"
    }]
}, {
    "coord": [34.02738, -84.47256],
    "cams": [{
        "id": "cctv_16315",
        "url": "/georgiasnapshots/COBB-CAM-225.jpg",
        "name": "Sandy Plains Rd : Davis Rd"
    }]
}, {
    "coord": [34.223116, -84.501256],
    "cams": [{
        "id": "cctv_13554",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-9.9.jpg",
        "name": "SR 20 : Hickory Flat Highway"
    }]
}, {
    "coord": [33.86262, -84.596688],
    "cams": [{
        "id": "cctv_9168",
        "url": "/georgiasnapshots/COBB-CAM-004.jpg",
        "name": "SR 5/Austell Rd : Hurt Rd"
    }]
}, {
    "coord": [30.831606, -82.006072],
    "cams": [{
        "id": "cctv_46243",
        "url": "/georgiasnapshots/CHAR-CAM-001.jpg",
        "name": "SR 4 (2nd St) : SR 40 (Main St)"
    }]
}, {
    "coord": [33.655404, -84.512944],
    "cams": [{
        "id": "cctv_13269",
        "stream": "/georgiavss1/fult-cam-003.stream/playlist.m3u8",
        "name": "SR 6 : Centre Pkwy / Princeton Lakes Pkwy"
    }]
}, {
    "coord": [33.938908, -84.338112],
    "cams": [{
        "id": "cctv_32577",
        "url": "/georgiasnapshots/DUN-CAM-101.jpg",
        "name": "Ashford Dunwoody Rd : Ashford Center Pkwy"
    }]
}, {
    "coord": [33.474594, -81.974248],
    "cams": [{
        "id": "cctv_32896",
        "url": "/georgiasnapshots/AUG-CAM-188.jpg",
        "name": "Telfair St. : 12th St."
    }]
}, {
    "coord": [34.023136, -84.363352],
    "cams": [{
        "id": "cctv_13155",
        "url": "/georgiasnapshots/ROSWELL-CAM-412.jpg",
        "name": "Magnolia St : Mimosa Blvd"
    }]
}, {
    "coord": [33.77136, -84.392088],
    "cams": [{
        "id": "cctv_15310",
        "stream": "/georgiavss1/atl-cam-939.stream/playlist.m3u8",
        "name": "SR 8 (North Ave) : Techwood Dr/COP Dr"
    }]
}, {
    "coord": [33.761372, -84.396056],
    "cams": [{
        "id": "cctv_15277",
        "url": "/georgiasnapshots/ATL-CAM-915.jpg",
        "name": "Marietta St : Baker St"
    }]
}, {
    "coord": [33.579412, -83.572544],
    "cams": [{
        "id": "cctv_13546",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-109.jpg",
        "name": "I-20 : Madison Salt Barn"
    }]
}, {
    "coord": [34.044908, -83.921768],
    "cams": [{
        "id": "cctv_10375",
        "url": "/georgiasnapshots/GWIN-CAM-201.jpg",
        "name": "SR 324 : FORT DANIELS DR"
    }]
}, {
    "coord": [33.91992, -84.1942],
    "cams": [{
        "id": "cctv_4920",
        "stream": "/georgiavss2/gdot-cam-102.stream/playlist.m3u8",
        "name": "I-85 : N OF CENTER WAY"
    }]
}, {
    "coord": [34.20162, -84.453384],
    "cams": [{
        "id": "cctv_46478",
        "url": "/georgiasnapshots/CHER-CAM-101.jpg",
        "name": "SR 140 : Univeter Rd"
    }]
}, {
    "coord": [33.911236, -84.481832],
    "cams": [{
        "id": "cctv_15577",
        "stream": "/georgiavss3/gdot-cam-479.stream/playlist.m3u8",
        "name": "TERRELL MILL RD : W OF I-75 EXP ON/OFF"
    }]
}, {
    "coord": [33.93098, -84.343792],
    "cams": [{
        "id": "cctv_32622",
        "url": "/georgiasnapshots/DUN-CAM-140.jpg",
        "name": "Meadow Lane : Ridgeview Rd"
    }]
}, {
    "coord": [33.860748, -84.339688],
    "cams": [{
        "id": "cctv_15343",
        "stream": "/georgiavss1/brok-cam-103.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Dresden Dr"
    }]
}, {
    "coord": [33.46585, -82.085912],
    "cams": [{
        "id": "cctv_32868",
        "url": "/georgiasnapshots/AUG-CAM-257.jpg",
        "name": "Wrightsboro Rd. : Augusta West Pkwy./B Chapel"
    }]
}, {
    "coord": [31.231106, -84.208696],
    "cams": [{
        "id": "cctv_46363",
        "url": "/georgiasnapshots/MITC-CAM-003.jpg",
        "name": "SR 37 : HARNEY ST"
    }]
}, {
    "coord": [34.353496, -84.046968],
    "cams": [{
        "id": "cctv_32554",
        "url": "/georgiasnapshots/DWSN-CAM-002.jpg",
        "name": "SR 400 : Dawson Forest"
    }]
}, {
    "coord": [33.949804, -84.128568],
    "cams": [{
        "id": "cctv_10326",
        "url": "/georgiasnapshots/GWIN-CAM-152.jpg",
        "name": "PLEASANT HILL RD : BRECKINRIDGE BLVD"
    }]
}, {
    "coord": [33.8921, -84.457624],
    "cams": [{
        "id": "cctv_15617",
        "stream": "/georgiavss4/gdot-cam-627.stream/playlist.m3u8",
        "name": "I-285 : AT EXPRESS RAMP"
    }]
}, {
    "coord": [34.123844, -84.527168],
    "cams": [{
        "id": "cctv_6810",
        "url": "/georgiasnapshots/GDOT-CAM-517.jpg",
        "name": "I-575 : AT RIDGEWALK PKWY"
    }]
}, {
    "coord": [34.044076, -84.299624],
    "cams": [{
        "id": "cctv_9083",
        "url": "/georgiasnapshots/ALPH-CAM-015.jpg",
        "name": "North Point Pkwy : Encore Pkwy"
    }]
}, {
    "coord": [33.398212, -84.7486],
    "cams": [{
        "id": "cctv_9283",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-047.jpg",
        "name": "I-85 : SR 34 / Bullsboro Dr"
    }]
}, {
    "coord": [33.893164, -84.141392],
    "cams": [{
        "id": "cctv_13224",
        "url": "/georgiasnapshots/GWIN-CAM-285.jpg",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Main St / Hillcrest Rd"
    }]
}, {
    "coord": [33.9645, -84.523],
    "cams": [{
        "id": "cctv_5140",
        "stream": "/georgiavss3/gdot-cam-414.stream/playlist.m3u8",
        "name": "I-75 : N OF NORTH 120 LOOP"
    }]
}, {
    "coord": [33.722756, -84.726168],
    "cams": [{
        "id": "cctv_12943",
        "url": "/georgiasnapshots/DOUG-CAM-004.jpg",
        "name": "Chapel Hill Rd : Grace Lake Dr"
    }]
}, {
    "coord": [33.828884, -84.224336],
    "cams": [{
        "id": "cctv_5308",
        "stream": "/georgiavss4/gdot-cam-782.stream/playlist.m3u8",
        "name": "US 78 : E OF BROCKETT RD"
    }]
}, {
    "coord": [34.078712, -84.651296],
    "cams": [{
        "id": "cctv_5182",
        "stream": "/georgiavss3/gdot-cam-452.stream/playlist.m3u8",
        "name": "I-75 : S OF SR 92"
    }]
}, {
    "coord": [33.786848, -84.391168],
    "cams": [{
        "id": "cctv_4964",
        "stream": "/georgiavss2/gdot-cam-020.stream/playlist.m3u8",
        "name": "75/85 : 14TH ST"
    }]
}, {
    "coord": [33.580812, -84.36112],
    "cams": [{
        "id": "cctv_5275",
        "stream": "/georgiavss4/gdot-cam-702.stream/playlist.m3u8",
        "name": "I-75 : N OF JONESBORO RD"
    }]
}, {
    "coord": [33.98486, -84.084656],
    "cams": [{
        "id": "cctv_5427",
        "stream": "/georgiavss2/gdot-cam-130.stream/playlist.m3u8",
        "name": "I-85 : S OF SUGARLOAF PKWY"
    }]
}, {
    "coord": [33.900576, -84.147376],
    "cams": [{
        "id": "cctv_10392",
        "url": "/georgiasnapshots/GWIN-CAM-226.jpg",
        "name": "Indian Trail-Lilburn Rd : Hillcrest Rd"
    }]
}, {
    "coord": [34.534752, -83.53484],
    "cams": [{
        "id": "cctv_46325",
        "url": "/georgiasnapshots/HABE-CAM-004.jpg",
        "name": "SR 105 : VFW Rd/Wal-mart"
    }]
}, {
    "coord": [33.71506, -84.242824],
    "cams": [{
        "id": "cctv_5114",
        "stream": "/georgiavss3/gdot-cam-373.stream/playlist.m3u8",
        "name": "I-20 : W OF I-285 (DEKALB)"
    }]
}, {
    "coord": [33.838232, -84.069112],
    "cams": [{
        "id": "cctv_10197",
        "url": "/georgiasnapshots/GWIN-CAM-019.jpg",
        "name": "SR 10 : Killian Hill Rd / SR 264 (Bethany Church Rd)"
    }]
}, {
    "coord": [34.352576, -82.931872],
    "cams": [{
        "id": "cctv_32652",
        "url": "/georgiasnapshots/HART-CAM-003.jpg",
        "name": "SR 8/Howell St : SR 77"
    }]
}, {
    "coord": [33.743712, -84.38996],
    "cams": [{
        "id": "cctv_5086",
        "stream": "/georgiavss3/gdot-cam-348.stream/playlist.m3u8",
        "name": "I-20 : EB EXIT TO 75/85 NB"
    }]
}, {
    "coord": [33.904596, -84.153488],
    "cams": [{
        "id": "cctv_10391",
        "url": "/georgiasnapshots/GWIN-CAM-225.jpg",
        "name": "INDIAN TRAIL LILBURN RD : BURNS RD"
    }]
}, {
    "coord": [33.412124, -84.160616],
    "cams": [{
        "id": "cctv_15422",
        "url": "c2c.dot.ga.gov/snapshots/HNRY-CAM-922.jpg",
        "name": "SR 155 : I-75 NORTH"
    }]
}, {
    "coord": [33.5937, -84.336704],
    "cams": [{
        "id": "cctv_10527",
        "url": "/georgiasnapshots/CLAY-CAM-C611.jpg",
        "name": "SR 54 : S OF CLAYTON ST BLVD"
    }]
}, {
    "coord": [33.889956, -84.612864],
    "cams": [{
        "id": "cctv_9116",
        "url": "/georgiasnapshots/COBB-CAM-243.jpg",
        "name": "Powder Springs Rd : Smitha Middle Sch"
    }]
}, {
    "coord": [34.0325, -84.341248],
    "cams": [{
        "id": "cctv_6256",
        "url": "/georgiasnapshots/ROSWELL-CAM-140.jpg",
        "name": "SR 140 : Grimes Br Rd/Old Roswell Rd"
    }]
}, {
    "coord": [34.011952, -84.56932],
    "cams": [{
        "id": "cctv_5155",
        "stream": "/georgiavss3/gdot-cam-428.stream/playlist.m3u8",
        "name": "I-75 : BARRETT EXIT"
    }]
}, {
    "coord": [33.89958, -84.44656],
    "cams": [{
        "id": "cctv_13734",
        "url": "/georgiasnapshots/COBB-CAM-043.jpg",
        "name": "Powers Ferry Rd : Akers Mill Rd"
    }]
}, {
    "coord": [34.253584, -84.469296],
    "cams": [{
        "id": "cctv_16172",
        "url": "/georgiasnapshots/GDOT-CAM-I-575-20.jpg",
        "name": "I-575 : SR 5 BU (EXIT 20)"
    }]
}, {
    "coord": [33.620004, -84.430152],
    "cams": [{
        "id": "cctv_5255",
        "stream": "/georgiavss4/gdot-cam-657.stream/playlist.m3u8",
        "name": "I-285 : MAIN LANES NO. 2"
    }]
}, {
    "coord": [33.880424, -84.270984],
    "cams": [{
        "id": "cctv_5216",
        "stream": "/georgiavss3/gdot-cam-553.stream/playlist.m3u8",
        "name": "I-85 : CHAM TUCKER RAMP METER"
    }]
}, {
    "coord": [32.039082, -81.207808],
    "cams": [{
        "id": "cctv_15906",
        "url": "/georgiasnapshots/SAV-CAM-040.jpg",
        "name": "SR 25/US 17 : SR 307(SOUTH)"
    }]
}, {
    "coord": [34.01788, -84.19008],
    "cams": [{
        "id": "cctv_6316",
        "url": "/georgiasnapshots/COJC-CAM-220.jpg",
        "name": "SR 141 (Medlock Bridge Rd) : State Bridge Rd"
    }]
}, {
    "coord": [33.85044, -84.362032],
    "cams": [{
        "id": "cctv_8825",
        "stream": "/georgiavss1/atl-cam-029.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Lenox Rd / SR 141 Conn"
    }]
}, {
    "coord": [33.553466, -84.259248],
    "cams": [{
        "id": "cctv_15391",
        "url": "/georgiasnapshots/CLAY-CAM-117.jpg",
        "name": "SR 138 / Lake Spivey Pkwy : SR 42 / N Henry Blvd"
    }]
}, {
    "coord": [33.88728, -84.473264],
    "cams": [{
        "id": "cctv_13747",
        "url": "/georgiasnapshots/COBB-CAM-134.jpg",
        "name": "Cobb Pkwy : Market St"
    }]
}, {
    "coord": [33.9704, -84.2206],
    "cams": [{
        "id": "cctv_5232",
        "stream": "/georgiavss3/gdot-cam-589.stream/playlist.m3u8",
        "name": "SR 141 (Peachtree Parkway) : Spalding Dr"
    }]
}, {
    "coord": [33.75382, -84.392576],
    "cams": [{
        "id": "cctv_15333",
        "url": "/georgiasnapshots/ATL-CAM-949.jpg",
        "name": "Forsyth St : Alabama St"
    }]
}, {
    "coord": [33.91826, -84.257488],
    "cams": [{
        "id": "cctv_10291",
        "url": "/georgiasnapshots/GWIN-CAM-117.jpg",
        "name": "SR 13 / US 23 : GLOBAL FORUM BLVD"
    }]
}, {
    "coord": [34.146804, -84.832744],
    "cams": [{
        "id": "cctv_46469",
        "url": "/georgiasnapshots/BART-CAM-101.jpg",
        "name": "SR 113 : Euharlee Rd"
    }]
}, {
    "coord": [33.700816, -84.08888],
    "cams": [{
        "id": "cctv_13068",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-075.jpg",
        "name": "I-20 : SR 124 / TURNER HILL RD"
    }]
}, {
    "coord": [34.084972, -84.541944],
    "cams": [{
        "id": "cctv_6306",
        "stream": "/georgiavss1/cher-cam-024.stream/playlist.m3u8",
        "name": "SR 92 / Alabama Rd : Woodstock Square Ave"
    }]
}, {
    "coord": [32.043502, -81.184208],
    "cams": [{
        "id": "cctv_15623",
        "url": "/georgiasnapshots/SAV-CAM-008.jpg",
        "name": "SR 25/US 17 : FALL AVE"
    }]
}, {
    "coord": [33.889032, -84.313072],
    "cams": [{
        "id": "cctv_9140",
        "stream": "/georgiavss1/cham-cam-103.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Ind Blvd : Clairmont Rd"
    }]
}, {
    "coord": [34.064772, -84.212776],
    "cams": [{
        "id": "cctv_16242",
        "url": "/georgiasnapshots/COJC-CAM-635.jpg",
        "name": "Jones Bridge Rd : Abbots Bridge Rd/Kimball Bridge Rd"
    }]
}, {
    "coord": [33.742428, -83.852528],
    "cams": [{
        "id": "cctv_46393",
        "url": "/georgiasnapshots/WALT-CAM-005",
        "name": "SR 81 : SR 138"
    }]
}, {
    "coord": [34.08806, -84.26268],
    "cams": [{
        "id": "cctv_9074",
        "url": "/georgiasnapshots/ALPH-CAM-010a.jpg",
        "name": "Windward Pkwy : SR 400 SB"
    }]
}, {
    "coord": [34.143128, -84.394264],
    "cams": [{
        "id": "cctv_46482",
        "url": "/georgiasnapshots/CHER-CAM-106.jpg",
        "name": "SR 140 : Earney Rd"
    }]
}, {
    "coord": [33.941732, -84.5286],
    "cams": [{
        "id": "cctv_15194",
        "url": "/georgiasnapshots/MAR-CAM-306.jpg",
        "name": "SR 120/S Marietta Pkwy : Aviation Rd"
    }]
}, {
    "coord": [34.081876, -84.629288],
    "cams": [{
        "id": "cctv_5177",
        "stream": "/georgiavss3/gdot-cam-448.stream/playlist.m3u8",
        "name": "I-75 : N OF WOODSTOCK RD"
    }]
}, {
    "coord": [33.883028, -84.162096],
    "cams": [{
        "id": "cctv_10184",
        "url": "/georgiasnapshots/GWIN-CAM-006.jpg",
        "name": "SR 9 (US 29 Lawrenceville Hwy) : Rockbridge Rd"
    }]
}, {
    "coord": [33.822592, -84.263064],
    "cams": [{
        "id": "cctv_8956",
        "stream": "/georgiavss1/dek-cam-014.stream/playlist.m3u8",
        "name": "SR 8 (Lawrenceville Hwy) : McClendon Dr / Frazier Rd"
    }]
}, {
    "coord": [32.803436, -83.7222],
    "cams": [{
        "id": "cctv_6009",
        "stream": "/georgiavss5/bibb-cam-018.stream/playlist.m3u8",
        "name": "I-475 : 1/2 MI S OF US 80"
    }]
}, {
    "coord": [33.247192, -84.286544],
    "cams": [{
        "id": "cctv_15426",
        "url": "c2c.dot.ga.gov/snapshots/SPAL-CAM-006.jpg",
        "name": "SR 16 : SR 92/HAMMOND DR"
    }]
}, {
    "coord": [32.882142, -83.77164],
    "cams": [{
        "id": "cctv_6027",
        "stream": "/georgiavss5/bibb-cam-032.stream/playlist.m3u8",
        "name": "I-475 : EXIT TO ZEBULON RD"
    }]
}, {
    "coord": [32.357762, -81.861896],
    "cams": [{
        "id": "cctv_46236",
        "url": "/georgiasnapshots/BULL-CAM-003.jpg",
        "name": "SR 73 Jones Lane Hwy : SR 46"
    }]
}, {
    "coord": [33.748872, -84.2318],
    "cams": [{
        "id": "cctv_5051",
        "stream": "/georgiavss2/gdot-cam-282.stream/playlist.m3u8",
        "name": "I-285 : COVINGTON HWY RAMP METER"
    }]
}, {
    "coord": [32.057232, -81.125616],
    "cams": [{
        "id": "cctv_15735",
        "url": "/georgiasnapshots/SAV-CAM-016.jpg",
        "name": "SR 26/US 80 : STILES AVE"
    }]
}, {
    "coord": [33.867688, -84.63152],
    "cams": [{
        "id": "cctv_7320",
        "url": "/georgiasnapshots/COBB-CAM-060.jpg",
        "name": "EW Connector : Powder Springs Rd"
    }]
}, {
    "coord": [33.63206, -84.387304],
    "cams": [{
        "id": "cctv_5049",
        "stream": "/georgiavss2/gdot-cam-280.stream/playlist.m3u8",
        "name": "I-285 : US 19"
    }]
}, {
    "coord": [33.407574, -84.155744],
    "cams": [{
        "id": "cctv_13322",
        "stream": "/georgiavss4/gdot-cam-762.stream/playlist.m3u8",
        "name": "I-75 : BEFORE SR 155"
    }]
}, {
    "coord": [33.753588, -84.394928],
    "cams": [{
        "id": "cctv_15280",
        "url": "/georgiasnapshots/ATL-CAM-918.jpg",
        "name": "Martin Luther King Jr Dr : Ted Turner Dr"
    }]
}, {
    "coord": [33.627252, -84.417776],
    "cams": [{
        "id": "cctv_5587",
        "stream": "/georgiavss4/gdot-cam-670.stream/playlist.m3u8",
        "name": "I-285 : NEAR OUTER LOOP RD"
    }]
}, {
    "coord": [33.510724, -82.033936],
    "cams": [{
        "id": "cctv_32849",
        "url": "/georgiasnapshots/AUG-CAM-221.jpg",
        "name": "Washington Rd. : Bertram Rd."
    }]
}, {
    "coord": [33.552212, -84.291616],
    "cams": [{
        "id": "cctv_5282",
        "stream": "/georgiavss4/gdot-cam-710.stream/playlist.m3u8",
        "name": "I-75 : N OF SR 138"
    }]
}, {
    "coord": [33.84364, -84.37128],
    "cams": [{
        "id": "cctv_6301",
        "stream": "/georgiavss1/atl-cam-011.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : SR 237 / Piedmont Rd"
    }]
}, {
    "coord": [32.778088, -83.714768],
    "cams": [{
        "id": "cctv_6004",
        "stream": "/georgiavss5/bibb-cam-013.stream/playlist.m3u8",
        "name": "I-475 : MILE POST 1.5"
    }]
}, {
    "coord": [34.07342, -84.616832],
    "cams": [{
        "id": "cctv_5173",
        "stream": "/georgiavss3/gdot-cam-531.stream/playlist.m3u8",
        "name": "I-75 : 1/2 MI S OF WOODSTOCK RD"
    }]
}, {
    "coord": [33.920684, -84.015896],
    "cams": [{
        "id": "cctv_10315",
        "url": "/georgiasnapshots/GWIN-CAM-141.jpg",
        "name": "SUGARLOAF PKWY : FIVE FORKS TRICKUM RD"
    }]
}, {
    "coord": [33.413926, -84.156216],
    "cams": [{
        "id": "cctv_15449",
        "url": "/georgiasnapshots/HNRY-CAM-921.jpg",
        "name": "SR 155 : King Mill Rd/Ind Blvd"
    }]
}, {
    "coord": [33.952196, -84.661832],
    "cams": [{
        "id": "cctv_12926",
        "url": "/georgiasnapshots/COBB-CAM-253.jpg",
        "name": "Dallas Hwy : Casteel/Old Hamilton Rd"
    }]
}, {
    "coord": [33.551514, -84.2688],
    "cams": [{
        "id": "cctv_13217",
        "stream": "/georgiavss4/gdot-cam-772.stream/playlist.m3u8",
        "name": "I-675 : S OF SR 138"
    }]
}, {
    "coord": [32.790846, -83.666897],
    "cams": [{
        "id": "cctv_46388",
        "url": "/georgiasnapshots/BIBB-CAM-540.jpg",
        "name": "SR 11/Houston Rd : Sardis Church Rd"
    }]
}, {
    "coord": [33.613236, -84.39752],
    "cams": [{
        "id": "cctv_5245",
        "stream": "/georgiavss2/gdot-cam-062.stream/playlist.m3u8",
        "name": "I-75 : FOREST PKWY RAMP METER"
    }]
}, {
    "coord": [33.659304, -84.371456],
    "cams": [{
        "id": "cctv_46384",
        "url": "/georgiasnapshots/GDOT-CAM-633.jpg",
        "name": "SR 54 : SOUTHSIDE IND PKWY"
    }]
}, {
    "coord": [32.774296, -83.557576],
    "cams": [{
        "id": "cctv_13175",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-007.jpg",
        "name": "I-16 : W OF Marion Rd"
    }]
}, {
    "coord": [33.82396, -84.352216],
    "cams": [{
        "id": "cctv_5121",
        "stream": "/georgiavss2/gdot-cam-038.stream/playlist.m3u8",
        "name": "I-85 : CHESHIRE BRIDGE"
    }]
}, {
    "coord": [33.842096, -84.313952],
    "cams": [{
        "id": "cctv_15370",
        "stream": "/georgiavss1/brok-cam-201.stream/playlist.m3u8",
        "name": "SR 155 / Clairmont Rd : Sams Club Dwy"
    }]
}, {
    "coord": [34.04246, -84.355784],
    "cams": [{
        "id": "cctv_6253",
        "url": "/georgiasnapshots/ROSWELL-CAM-202.jpg",
        "name": "SR 92 : Bent Grass Dr"
    }]
}, {
    "coord": [32.531944, -84.975072],
    "cams": [{
        "id": "cctv_9189",
        "url": "/georgiasnapshots/COLU-CAM-013.jpg",
        "name": "US 80/SR 22 : BRADLEY PARK DR"
    }]
}, {
    "coord": [33.961868, -84.518256],
    "cams": [{
        "id": "cctv_15184",
        "url": "/georgiasnapshots/MAR-CAM-201.jpg",
        "name": "SR 120A/N Marietta Pkwy : I-75 NB Ramp"
    }]
}, {
    "coord": [33.992832, -83.720104],
    "cams": [{
        "id": "cctv_32543",
        "url": "/georgiasnapshots/BARR-CAM-002.jpg",
        "name": "SR 11/SR 53/SR 211 : Candler St"
    }]
}, {
    "coord": [34.577412, -84.949984],
    "cams": [{
        "id": "cctv_9311",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-320.jpg",
        "name": "I-75 : SR 136"
    }]
}, {
    "coord": [34.057696, -84.166888],
    "cams": [{
        "id": "cctv_16268",
        "url": "/georgiasnapshots/COJC-CAM-770.jpg",
        "name": "Johns Creek Pkwy : Technology Circle"
    }]
}, {
    "coord": [33.877092, -84.456112],
    "cams": [{
        "id": "cctv_7318",
        "url": "/georgiasnapshots/COBB-CAM-058.jpg",
        "name": "SR 3 / Cobb Pkwy : Cumberland Blvd"
    }]
}, {
    "coord": [33.944, -84.2416],
    "cams": [{
        "id": "cctv_5237",
        "stream": "/georgiavss3/gdot-cam-594.stream/playlist.m3u8",
        "name": "SR 141 : JIMMY CARTER BLVD"
    }]
}, {
    "coord": [33.9331, -84.358104],
    "cams": [{
        "id": "cctv_5330",
        "url": "/georgiasnapshots/GDOT-CAM-827.jpg",
        "name": "GA 400 : ABERNATHY RD"
    }]
}, {
    "coord": [33.8743, -84.446072],
    "cams": [{
        "id": "cctv_5058",
        "stream": "/georgiavss2/gdot-cam-031.stream/playlist.m3u8",
        "name": "I-75 : S OF CHATT RIVER"
    }]
}, {
    "coord": [33.952612, -83.767816],
    "cams": [{
        "id": "cctv_32549",
        "url": "/georgiasnapshots/BARR-CAM-008.jpg",
        "name": "SR 316 : Carl-Bethlehem Rd"
    }]
}, {
    "coord": [33.478528, -82.02724],
    "cams": [{
        "id": "cctv_32903",
        "url": "/georgiasnapshots/AUG-CAM-211.jpg",
        "name": "Walton Way : Monte Sano Ave."
    }]
}, {
    "coord": [34.282532, -85.168672],
    "cams": [{
        "id": "cctv_15377",
        "url": "/georgiasnapshots/FLYD-CAM-007.jpg",
        "name": "SR 1 Loop/Veterans Mem Hwy : Riverside Pkwy"
    }]
}, {
    "coord": [33.950024, -84.336208],
    "cams": [{
        "id": "cctv_32666",
        "url": "/georgiasnapshots/DUN-CAM-151.jpg",
        "name": "Chamblee Dunwoody Rd : Dunwoody Village Pky"
    }]
}, {
    "coord": [33.50035, -84.63984],
    "cams": [{
        "id": "cctv_16330",
        "url": "/georgiasnapshots/COW-CAM-021.jpg",
        "name": "Collinsworth Rd : I-85 SB ENT"
    }]
}, {
    "coord": [34.271436, -84.079088],
    "cams": [{
        "id": "cctv_16371",
        "url": "/georgiasnapshots/FORS-CAM-019.jpg",
        "name": "SR 9 (20) : Pirkle Ferry Rd"
    }]
}, {
    "coord": [33.379368, -84.263784],
    "cams": [{
        "id": "cctv_6050",
        "url": "/georgiasnapshots/AMS-CAM-904.jpg",
        "name": "SR 20 : HAMPTON LOC GRV RD"
    }]
}, {
    "coord": [33.872408, -84.249936],
    "cams": [{
        "id": "cctv_10167",
        "url": "/georgiasnapshots/GDOT-CAM-585.jpg",
        "name": "I-285 : EVANS RD"
    }]
}, {
    "coord": [33.758404, -84.349056],
    "cams": [{
        "id": "cctv_6829",
        "stream": "/georgiavss1/atl-cam-057.stream/playlist.m3u8",
        "name": "SR 42 (Moreland Ave) : Caroline St NE"
    }]
}, {
    "coord": [33.878828, -84.292016],
    "cams": [{
        "id": "cctv_32535",
        "url": "/georgiasnapshots/CHAM-CAM-006.jpg",
        "name": "SR 13 / Buford Hwy : CDC Driveway"
    }]
}, {
    "coord": [33.761872, -84.380832],
    "cams": [{
        "id": "cctv_5226",
        "stream": "/georgiavss3/gdot-cam-575.stream/playlist.m3u8",
        "name": "75/85 : FREEDOM PKWY RAMP METER"
    }]
}, {
    "coord": [33.697716, -84.416248],
    "cams": [{
        "id": "cctv_15317",
        "url": "/georgiasnapshots/GDOT-CAM-059.jpg",
        "name": "SR 166 : Sylvan Road"
    }]
}, {
    "coord": [32.815362, -83.690592],
    "cams": [{
        "id": "cctv_5980",
        "url": "/georgiasnapshots/BIBB-CAM-518.jpg",
        "name": "EISENHOWER PKWY : MACON TECH"
    }]
}, {
    "coord": [33.633536, -84.287784],
    "cams": [{
        "id": "cctv_10515",
        "url": "/georgiasnapshots/CLAY-CAM-265.jpg",
        "name": "Anvilblock Rd : Lunsford Dr"
    }]
}, {
    "coord": [33.91164, -84.479664],
    "cams": [{
        "id": "cctv_15514",
        "stream": "/georgiavss3/gdot-cam-469.stream/playlist.m3u8",
        "name": "I-75 : AT TERRELL MILL RD"
    }]
}, {
    "coord": [34.070372, -84.17844],
    "cams": [{
        "id": "cctv_16244",
        "url": "/georgiasnapshots/COJC-CAM-705.jpg",
        "name": "McGinnis Ferry Rd : Sargent Rd"
    }]
}, {
    "coord": [33.857596, -84.343416],
    "cams": [{
        "id": "cctv_15285",
        "stream": "/georgiavss1/brok-cam-101.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Colonial Dr"
    }]
}, {
    "coord": [34.381456, -83.87428],
    "cams": [{
        "id": "cctv_32640",
        "url": "/georgiasnapshots/HALL-CAM-021.jpg",
        "name": "SR 60 : SR 136/Price Rd"
    }]
}, {
    "coord": [33.840588, -84.359552],
    "cams": [{
        "id": "cctv_12957",
        "stream": "/georgiavss4/gdot-cam-809.stream/playlist.m3u8",
        "name": "GA 400 : 1 MI S Of LENOX RD"
    }]
}, {
    "coord": [33.773036, -84.4174],
    "cams": [{
        "id": "cctv_13346",
        "stream": "/georgiavss1/atl-cam-279.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : Joseph E Lowery Blvd"
    }]
}, {
    "coord": [30.91396, -83.363368],
    "cams": [{
        "id": "cctv_15224",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-023.jpg",
        "name": "I-75 : Lowndes Co Weigh Station"
    }]
}, {
    "coord": [34.070096, -84.205344],
    "cams": [{
        "id": "cctv_16249",
        "url": "/georgiasnapshots/COJC-CAM-650.jpg",
        "name": "Jones Bridge Rd : Douglas Rd"
    }]
}, {
    "coord": [33.397542, -84.759064],
    "cams": [{
        "id": "cctv_7360",
        "url": "/georgiasnapshots/COW-CAM-001.jpg",
        "name": "SR 34 / Bullsboro Dr : Newnan Crossing Bypass"
    }]
}, {
    "coord": [33.815832, -84.390208],
    "cams": [{
        "id": "cctv_7218",
        "stream": "/georgiavss1/atl-cam-010.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd NE : Peachtree Memorial Dr"
    }]
}, {
    "coord": [34.0133, -84.4958],
    "cams": [{
        "id": "cctv_7357",
        "url": "/georgiasnapshots/COBB-CAM-220.jpg",
        "name": "Sandy Plains Rd : Piedmont Rd"
    }]
}, {
    "coord": [31.95979, -81.328904],
    "cams": [{
        "id": "cctv_13185",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-090.jpg",
        "name": "I-95 : SR 144"
    }]
}, {
    "coord": [33.88198, -84.472264],
    "cams": [{
        "id": "cctv_15580",
        "stream": "/georgiavss4/gdot-cam-622.stream/playlist.m3u8",
        "name": "I-285 : COBB PKY WB ENT/EB EXT"
    }]
}, {
    "coord": [33.86508, -84.478552],
    "cams": [{
        "id": "cctv_7351",
        "url": "/georgiasnapshots/COBB-CAM-334.jpg",
        "name": "Paces Ferry Rd : I-285"
    }]
}, {
    "coord": [33.955992, -84.516288],
    "cams": [{
        "id": "cctv_5137",
        "stream": "/georgiavss3/gdot-cam-411.stream/playlist.m3u8",
        "name": "I-75 : GRESHAM RD"
    }]
}, {
    "coord": [33.837912, -84.481064],
    "cams": [{
        "id": "cctv_9123",
        "url": "/georgiasnapshots/COBB-CAM-331.jpg",
        "name": "Atlanta Rd : Brownwood Ln"
    }]
}, {
    "coord": [33.791652, -84.390656],
    "cams": [{
        "id": "cctv_4935",
        "stream": "/georgiavss2/gdot-cam-151.stream/playlist.m3u8",
        "name": "75/85 : 17TH ST"
    }]
}, {
    "coord": [34.09828, -84.016592],
    "cams": [{
        "id": "cctv_10354",
        "url": "/georgiasnapshots/GWIN-CAM-180.jpg",
        "name": "SR 20 : Commerce Dr / Frontier Dr"
    }]
}, {
    "coord": [33.964332, -84.094592],
    "cams": [{
        "id": "cctv_5424",
        "stream": "/georgiavss2/gdot-cam-127.stream/playlist.m3u8",
        "name": "SR 316 : BOGGS RD"
    }]
}, {
    "coord": [33.243256, -84.807312],
    "cams": [{
        "id": "cctv_12982",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-035.jpg",
        "name": "I-85 : US 29"
    }]
}, {
    "coord": [33.791804, -84.3892],
    "cams": [{
        "id": "cctv_15233",
        "stream": "/georgiavss1/atl-cam-902.stream/playlist.m3u8",
        "name": "SR 9 (Spring St) : 17th St"
    }]
}, {
    "coord": [33.50998, -84.23468],
    "cams": [{
        "id": "cctv_13265",
        "stream": "/georgiavss4/gdot-cam-740.stream/playlist.m3u8",
        "name": "I-75 : N OF HUDSON BR"
    }]
}, {
    "coord": [33.951036, -84.133392],
    "cams": [{
        "id": "cctv_5218",
        "stream": "/georgiavss3/gdot-cam-555.stream/playlist.m3u8",
        "name": "I-85 : PLEASANT HILL RAMP METER"
    }]
}, {
    "coord": [33.695228, -84.28836],
    "cams": [{
        "id": "cctv_5035",
        "stream": "/georgiavss2/gdot-cam-268.stream/playlist.m3u8",
        "name": "I-285 : E OF CLIFTON SPRINGS RD"
    }]
}, {
    "coord": [33.744296, -84.398224],
    "cams": [{
        "id": "cctv_15454",
        "url": "/georgiasnapshots/ATL-CAM-964.jpg",
        "name": "Windsor St : Rawson St / I-20 Ramp"
    }]
}, {
    "coord": [33.671088, -84.340336],
    "cams": [{
        "id": "cctv_6833",
        "stream": "/georgiavss1/dek-cam-053.stream/playlist.m3u8",
        "name": "SR 42 (Moreland Ave) : Henrico Rd"
    }]
}, {
    "coord": [34.0357, -84.5774],
    "cams": [{
        "id": "cctv_5164",
        "stream": "/georgiavss3/gdot-cam-436.stream/playlist.m3u8",
        "name": "I-75 : N OF CHASTAIN RD"
    }]
}, {
    "coord": [33.928076, -84.138536],
    "cams": [{
        "id": "cctv_10247",
        "url": "/georgiasnapshots/GWIN-CAM-073.jpg",
        "name": "SR 378 : PIONEER PARK PL / W of ARC WAY"
    }]
}, {
    "coord": [33.771316, -84.37776],
    "cams": [{
        "id": "cctv_15309",
        "url": "/georgiasnapshots/ATL-CAM-938.jpg",
        "name": "North Ave : Argonne Ave/Central Park Pl"
    }]
}, {
    "coord": [33.706548, -84.11408],
    "cams": [{
        "id": "cctv_13312",
        "url": "/georgiasnapshots/DEK-CAM-042.jpg",
        "name": "SR 12 (Covington Hwy) : Evans Mill Rd"
    }]
}, {
    "coord": [34.0055, -84.04124],
    "cams": [{
        "id": "cctv_10240",
        "url": "/georgiasnapshots/GWIN-CAM-066.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : W of TAYLOR RD"
    }]
}, {
    "coord": [33.863848, -84.248352],
    "cams": [{
        "id": "cctv_5005",
        "stream": "/georgiavss2/gdot-cam-238.stream/playlist.m3u8",
        "name": "I-285 : S OF HENDERSON RD"
    }]
}, {
    "coord": [33.979104, -83.99708],
    "cams": [{
        "id": "cctv_10357",
        "url": "/georgiasnapshots/GWIN-CAM-183.jpg",
        "name": "COLLINS HILL RD : COLLINS IND WAY - LENDON CONN"
    }]
}, {
    "coord": [33.9452, -84.510496],
    "cams": [{
        "id": "cctv_5134",
        "stream": "/georgiavss3/gdot-cam-409.stream/playlist.m3u8",
        "name": "I-75 : NORTH OF S 120 LOOP"
    }]
}, {
    "coord": [34.029356, -84.650064],
    "cams": [{
        "id": "cctv_10143",
        "url": "/georgiasnapshots/COBB-CAM-340.jpg",
        "name": "SR 3/Cobb Pkwy : Blue Springs/Jim Owens Rd"
    }]
}, {
    "coord": [34.333156, -83.905912],
    "cams": [{
        "id": "cctv_32636",
        "url": "/georgiasnapshots/HALL-CAM-017.jpg",
        "name": "SR 53 : Sardis Rd"
    }]
}, {
    "coord": [33.46967, -82.038808],
    "cams": [{
        "id": "cctv_32870",
        "url": "/georgiasnapshots/AUG-CAM-272.jpg",
        "name": "Wrightsboro Rd. : Pine Needle Rd."
    }]
}, {
    "coord": [34.345476, -84.050824],
    "cams": [{
        "id": "cctv_16366",
        "url": "/georgiasnapshots/FORS-CAM-015.jpg",
        "name": "SR 400 : Carlislie Rd/Whitemore Dr"
    }]
}, {
    "coord": [33.821268, -84.033512],
    "cams": [{
        "id": "cctv_10336",
        "url": "/georgiasnapshots/GWIN-CAM-162.jpg",
        "name": "SR 124 : CENTERVILLE ES / VILLAGE GLEN DR"
    }]
}, {
    "coord": [33.68392, -85.26268],
    "cams": [{
        "id": "cctv_9301",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-005.jpg",
        "name": "I-20 : SR 100"
    }]
}, {
    "coord": [33.842028, -84.32976],
    "cams": [{
        "id": "cctv_13588",
        "stream": "/georgiavss1/brok-cam-007.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : N Cliff Valley Rd"
    }]
}, {
    "coord": [33.995704, -84.507536],
    "cams": [{
        "id": "cctv_12911",
        "url": "/georgiasnapshots/COBB-CAM-215.jpg",
        "name": "Sandy Plains Rd : Scufflegrit Rd"
    }]
}, {
    "coord": [33.396832, -84.604136],
    "cams": [{
        "id": "cctv_13095",
        "url": "/georgiasnapshots/FAY-CAM-016.jpg",
        "name": "SR 54 : MacDuff Pkwy"
    }]
}, {
    "coord": [33.747468, -84.333288],
    "cams": [{
        "id": "cctv_15247",
        "stream": "/georgiavss1/atl-cam-411.stream/playlist.m3u8",
        "name": "SR 154 (Memorial Drive) : Maynard Terrace"
    }]
}, {
    "coord": [33.9105, -84.368496],
    "cams": [{
        "id": "cctv_4979",
        "stream": "/georgiavss2/gdot-cam-214.stream/playlist.m3u8",
        "name": "I-285 : E OF ROSWELL RD"
    }]
}, {
    "coord": [33.746208, -84.406488],
    "cams": [{
        "id": "cctv_13078",
        "stream": "/georgiavss1/atl-cam-082.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : McDaniel St"
    }]
}, {
    "coord": [34.512244, -84.923184],
    "cams": [{
        "id": "cctv_16344",
        "url": "/georgiasnapshots/GDOT-CAM-SR156-13.07.jpg",
        "name": "SR 156 : WARRIOR PATH/CURTIS PKWY"
    }]
}, {
    "coord": [33.728468, -84.763376],
    "cams": [{
        "id": "cctv_15403",
        "stream": "/georgiavss2/gdot-cam-293.stream/playlist.m3u8",
        "name": "I-20 : SR 5/Bill Arp Rd"
    }]
}, {
    "coord": [34.263356, -84.08692],
    "cams": [{
        "id": "cctv_32566",
        "url": "/georgiasnapshots/FORS-CAM-033.jpg",
        "name": "SR 400 : SR 369"
    }]
}, {
    "coord": [33.99494, -84.20588],
    "cams": [{
        "id": "cctv_5709",
        "stream": "/georgiavss3/gdot-cam-586.stream/playlist.m3u8",
        "name": "SR 141 (Peachtree Parkway) : S of Chatt River Park"
    }]
}, {
    "coord": [32.411732, -84.925744],
    "cams": [{
        "id": "cctv_9162",
        "url": "/georgiasnapshots/COLU-CAM-303.jpg",
        "name": "I-185 : NEAR CMS 8"
    }]
}, {
    "coord": [33.934824, -84.512056],
    "cams": [{
        "id": "cctv_15319",
        "url": "/georgiasnapshots/MAR-CAM-114.jpg",
        "name": "SR 3/Cobb Pkwy : Lifes Way"
    }]
}, {
    "coord": [33.9616, -84.11536],
    "cams": [{
        "id": "cctv_10284",
        "url": "/georgiasnapshots/GWIN-CAM-110.jpg",
        "name": "SATELLITE BLVD : OLD NORCROSS RD EAST"
    }]
}, {
    "coord": [33.486714, -82.223096],
    "cams": [{
        "id": "cctv_15214",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-188.jpg",
        "name": "I-20 : West of Chamblin Rd"
    }]
}, {
    "coord": [32.939786, -83.781],
    "cams": [{
        "id": "cctv_13595",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-175.jpg",
        "name": "I-75 : Pate Rd"
    }]
}, {
    "coord": [33.5779, -84.287104],
    "cams": [{
        "id": "cctv_10448",
        "url": "/georgiasnapshots/CLAY-CAM-040.jpg",
        "name": "SR 42 : Fielder Rd"
    }]
}, {
    "coord": [33.874828, -84.703168],
    "cams": [{
        "id": "cctv_13212",
        "url": "/georgiasnapshots/COBB-CAM-262.jpg",
        "name": "SR 6 : Florence Rd"
    }]
}, {
    "coord": [33.801188, -84.206096],
    "cams": [{
        "id": "cctv_13716",
        "stream": "/georgiavss1/dek-cam-157.stream/playlist.m3u8",
        "name": "SR 10 (Memorial Drive) : Hambrick Rd"
    }]
}, {
    "coord": [33.932888, -84.153224],
    "cams": [{
        "id": "cctv_10415",
        "url": "/georgiasnapshots/GCDOT-IVDS-212-PH8.jpg",
        "name": "SR 378 : PARK DR / VULCAN DRWY(PH8)"
    }]
}, {
    "coord": [33.7766, -84.457152],
    "cams": [{
        "id": "cctv_46414",
        "stream": "/georgiavss1/atl-cam-274.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : Wood Sr"
    }]
}, {
    "coord": [33.951304, -84.24152],
    "cams": [{
        "id": "cctv_46311",
        "url": "/georgiasnapshots/GWIN-CAM-261.jpg",
        "name": "OLD PEACHTREE RD : PEACHTREE RIDGE HS"
    }]
}, {
    "coord": [33.995212, -84.591768],
    "cams": [{
        "id": "cctv_32596",
        "url": "/georgiasnapshots/COBB-CAM-014.jpg",
        "name": "Barrett Pkwy : Ridenour Blvd"
    }]
}, {
    "coord": [33.793648, -84.560632],
    "cams": [{
        "id": "cctv_9175",
        "url": "/georgiasnapshots/COBB-CAM-075.jpg",
        "name": "Mableton Pkwy : South Gordon Rd"
    }]
}, {
    "coord": [34.341904, -83.772496],
    "cams": [{
        "id": "cctv_32642",
        "url": "/georgiasnapshots/HALL-CAM-023.jpg",
        "name": "SR 365 : Ramsey Rd"
    }]
}, {
    "coord": [33.71192, -84.27888],
    "cams": [{
        "id": "cctv_5109",
        "stream": "/georgiavss3/gdot-cam-369.stream/playlist.m3u8",
        "name": "I-20 : W OF CANDLER RD"
    }]
}, {
    "coord": [33.91506, -84.48152],
    "cams": [{
        "id": "cctv_15590",
        "stream": "/georgiavss3/gdot-cam-470.stream/playlist.m3u8",
        "name": "I-75 : N TERRELL MILL EXP ON/OFF"
    }]
}, {
    "coord": [34.111324, -84.040856],
    "cams": [{
        "id": "cctv_13105",
        "url": "/georgiasnapshots/GWIN-CAM-279.jpg",
        "name": "SR 20 : Sycamore Rd / W Broad St"
    }]
}, {
    "coord": [33.947116, -83.985656],
    "cams": [{
        "id": "cctv_10232",
        "url": "/georgiasnapshots/GWIN-CAM-058.jpg",
        "name": "SR 124 : SR 20 / GRAYSON HWY / CLAYTON ST"
    }]
}, {
    "coord": [33.890984, -84.261248],
    "cams": [{
        "id": "cctv_5716",
        "stream": "/georgiavss2/gdot-cam-118.stream/playlist.m3u8",
        "name": "I-85 : JUST S OF I-285"
    }]
}, {
    "coord": [34.122052, -84.52792],
    "cams": [{
        "id": "cctv_15464",
        "stream": "/georgiavss3/gdot-cam-561.stream/playlist.m3u8",
        "name": "I-575 : S OF RIDGEWALK PKY"
    }]
}, {
    "coord": [34.006532, -84.56596],
    "cams": [{
        "id": "cctv_15502",
        "stream": "/georgiavss3/gdot-cam-497.stream/playlist.m3u8",
        "name": "I-75 : BARRETT PKY ENTRANCE"
    }]
}, {
    "coord": [33.671444, -84.498712],
    "cams": [{
        "id": "cctv_5373",
        "stream": "/georgiavss4/gdot-cam-937.stream/playlist.m3u8",
        "name": "I-285 : 1 MI S OF LANGFORD PKY"
    }]
}, {
    "coord": [33.512428, -82.041768],
    "cams": [{
        "id": "cctv_13331",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-199.jpg",
        "name": "I-20 : Washington Rd"
    }]
}, {
    "coord": [32.476848, -84.948648],
    "cams": [{
        "id": "cctv_9130",
        "url": "/georgiasnapshots/COLU-CAM-009.jpg",
        "name": "Spur 22/Macon Rd : Rigdon Rd"
    }]
}, {
    "coord": [34.072252, -83.92536],
    "cams": [{
        "id": "cctv_15971",
        "stream": "/georgiavss2/gdot-cam-175.stream/playlist.m3u8",
        "name": "I-85 : HAMILTON MILL RD"
    }]
}, {
    "coord": [33.530148, -82.9102],
    "cams": [{
        "id": "cctv_13097",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-148.jpg",
        "name": "I-20 : SR 22"
    }]
}, {
    "coord": [32.744346, -83.719824],
    "cams": [{
        "id": "cctv_6848",
        "stream": "/georgiavss5/bibb-cam-108.stream/playlist.m3u8",
        "name": "I-75 : AT HARTLEY BR RD"
    }]
}, {
    "coord": [34.020732, -84.16024],
    "cams": [{
        "id": "cctv_10209",
        "url": "/georgiasnapshots/GWIN-CAM-035.jpg",
        "name": "PEACHTREE INDUSTRIAL BLVD : ABBOTS BRIDGE RD"
    }]
}, {
    "coord": [32.407132, -81.781472],
    "cams": [{
        "id": "cctv_46540",
        "url": "/georgiasnapshots/BULL-CAM-006jpg",
        "name": "SR 67/ SR 73 BP : Lanier Dr"
    }]
}, {
    "coord": [33.95242, -84.552344],
    "cams": [{
        "id": "cctv_15188",
        "url": "/georgiasnapshots/MAR-CAM-205.jpg",
        "name": "SR 120/N Marietta Pkwy : Whitlock Ave"
    }]
}, {
    "coord": [34.0245, -84.5596],
    "cams": [{
        "id": "cctv_5195",
        "stream": "/georgiavss3/gdot-cam-504.stream/playlist.m3u8",
        "name": "I-575 : NOONDAY CREEK"
    }]
}, {
    "coord": [33.88928, -84.155],
    "cams": [{
        "id": "cctv_13111",
        "url": "/georgiasnapshots/GWIN-CAM-287.jpg",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Harbins Rd"
    }]
}, {
    "coord": [33.998924, -83.9052],
    "cams": [{
        "id": "cctv_10381",
        "url": "/georgiasnapshots/GWIN-CAM-207.jpg",
        "name": "DACULA RD : FENCE RD"
    }]
}, {
    "coord": [31.926318, -83.760456],
    "cams": [{
        "id": "cctv_46345",
        "url": "/georgiasnapshots/CRIS-CAM-002.jpg",
        "name": "SR 300 : OLD HATLEY RD"
    }]
}, {
    "coord": [33.723472, -84.358032],
    "cams": [{
        "id": "cctv_15261",
        "url": "/georgiasnapshots/A-TEST-CAM-005.jpg",
        "name": "RTOP-TEST : 1101"
    }]
}, {
    "coord": [34.2538, -83.462456],
    "cams": [{
        "id": "cctv_32537",
        "url": "/georgiasnapshots/BANK-CAM-001.jpg",
        "name": "SR 15 : I-85 NB"
    }]
}, {
    "coord": [33.7502, -84.376656],
    "cams": [{
        "id": "cctv_32614",
        "url": "/georgiasnapshots/ATL-CAM-989.jpg",
        "name": "Decatur St : Grant St / Hilliard St"
    }]
}, {
    "coord": [33.409176, -84.601624],
    "cams": [{
        "id": "cctv_32574",
        "url": "/georgiasnapshots/FAY-CAM-211.jpg",
        "name": "SR 74 : Wisdom Rd"
    }]
}, {
    "coord": [33.61838, -84.396384],
    "cams": [{
        "id": "cctv_15361",
        "url": "/georgiasnapshots/CLAY-CAM-065.jpg",
        "name": "SR 331 / Forest Pkwy : Frontage Rd"
    }]
}, {
    "coord": [33.5884, -84.337896],
    "cams": [{
        "id": "cctv_10457",
        "url": "/georgiasnapshots/CLAY-CAM-053.jpg",
        "name": "SR 54 / Jonesboro Rd : Reynolds Rd"
    }]
}, {
    "coord": [33.505818, -84.229728],
    "cams": [{
        "id": "cctv_5291",
        "stream": "/georgiavss4/gdot-cam-719.stream/playlist.m3u8",
        "name": "I-75 : HUDSON BRIDGE"
    }]
}, {
    "coord": [33.850376, -84.368824],
    "cams": [{
        "id": "cctv_12975",
        "stream": "/georgiavss4/gdot-cam-814.stream/playlist.m3u8",
        "name": "GA 400 : S OF LENOX RD/SR 141 CONN"
    }]
}, {
    "coord": [33.611512, -84.389992],
    "cams": [{
        "id": "cctv_13678",
        "url": "/georgiasnapshots/MAU%20Brining%20Operations.jpg",
        "name": "Kennedy Dr : Kennedy Rd"
    }]
}, {
    "coord": [34.076336, -83.907928],
    "cams": [{
        "id": "cctv_15992",
        "url": "/georgiasnapshots/GDOT-CAM-799.jpg",
        "name": "I-85 : 1 MI N OF HAMILTON MILL"
    }]
}, {
    "coord": [34.893568, -85.075648],
    "cams": [{
        "id": "cctv_16305",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-345.55.jpg",
        "name": "I-75 : EXT 345"
    }]
}, {
    "coord": [33.689704, -85.1886],
    "cams": [{
        "id": "cctv_9296",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-009.jpg",
        "name": "I-20 : Waco Road"
    }]
}, {
    "coord": [34.041752, -84.032464],
    "cams": [{
        "id": "cctv_15966",
        "stream": "/georgiavss2/gdot-cam-161.stream/playlist.m3u8",
        "name": "I-85 : S OF I-985"
    }]
}, {
    "coord": [32.003974, -81.281048],
    "cams": [{
        "id": "cctv_46531",
        "url": "/georgiasnapshots/CHAT-CAM-012.jpg",
        "name": "SR 204 : Gateway Blvd"
    }]
}, {
    "coord": [34.781376, -84.890096],
    "cams": [{
        "id": "cctv_16114",
        "url": "/georgiasnapshots/GDOT-CAM-SR52-7.15.jpg",
        "name": "SR 52 : SR 286"
    }]
}, {
    "coord": [33.822716, -84.351856],
    "cams": [{
        "id": "cctv_13771",
        "stream": "/georgiavss1/atl-cam-601.stream/playlist.m3u8",
        "name": "Cheshire Bridge Rd : I-85 NB Ramp"
    }]
}, {
    "coord": [33.86372, -84.44468],
    "cams": [{
        "id": "cctv_9059",
        "stream": "/georgiavss1/atl-cam-047.stream/playlist.m3u8",
        "name": "SR 3 / Northside Pkwy : N Atlanta High School"
    }]
}, {
    "coord": [33.993096, -84.55604],
    "cams": [{
        "id": "cctv_15487",
        "stream": "/georgiavss3/gdot-cam-492.stream/playlist.m3u8",
        "name": "I-75 : N OF BELLS FERRY RD"
    }]
}, {
    "coord": [33.734732, -84.213992],
    "cams": [{
        "id": "cctv_13305",
        "stream": "/georgiavss1/dek-cam-034.stream/playlist.m3u8",
        "name": "SR 12 (Covington Hwy) : Wesley Chapel Rd"
    }]
}, {
    "coord": [33.762896, -84.319816],
    "cams": [{
        "id": "cctv_32941",
        "url": "/georgiasnapshots/ATL-CAM-991.jpg",
        "name": "Dekalb Ave : Rocky Ford Rd / Dekalb Pl"
    }]
}, {
    "coord": [32.146282, -81.1778],
    "cams": [{
        "id": "cctv_46528",
        "url": "/georgiasnapshots/CHAT-CAM-009.jpg",
        "name": "SR 21 : Gulfstream Rd/Crossgate Rd"
    }]
}, {
    "coord": [33.967436, -84.095632],
    "cams": [{
        "id": "cctv_5423",
        "stream": "/georgiavss2/gdot-cam-126.stream/playlist.m3u8",
        "name": "I-85 : BOGGS RD"
    }]
}, {
    "coord": [34.576556, -83.314256],
    "cams": [{
        "id": "cctv_32920",
        "url": "/georgiasnapshots/STEPH-CAM-004.jpg",
        "name": "SR 17 ALT : SR 365"
    }]
}, {
    "coord": [33.7866, -84.378216],
    "cams": [{
        "id": "cctv_15252",
        "url": "/georgiasnapshots/ATL-CAM-907.jpg",
        "name": "Piedmont Ave : 14th St"
    }]
}, {
    "coord": [34.068944, -84.206952],
    "cams": [{
        "id": "cctv_16248",
        "url": "/georgiasnapshots/COJC-CAM-645.jpg",
        "name": "Jones Bridge Rd : Sargent Rd"
    }]
}, {
    "coord": [33.861988, -83.957488],
    "cams": [{
        "id": "cctv_46296",
        "url": "/georgiasnapshots/GWIN-CAM-230.jpg",
        "name": "US 78 : ROSEBUD RD"
    }]
}, {
    "coord": [34.947356, -85.234208],
    "cams": [{
        "id": "cctv_16141",
        "url": "/georgiasnapshots/GDOT-CAM-SR2-1.95.jpg",
        "name": "SR 2 : LAKE VIEW HIGH"
    }]
}, {
    "coord": [34.075068, -84.073392],
    "cams": [{
        "id": "cctv_10396",
        "url": "/georgiasnapshots/GWIN-CAM-237.jpg",
        "name": "SUWANEE DAM RD : TENCH RD"
    }]
}, {
    "coord": [34.067792, -84.07812],
    "cams": [{
        "id": "cctv_10395",
        "url": "/georgiasnapshots/GWIN-CAM-236.jpg",
        "name": "SUWANEE DAM RD : SETTLES BRIDGE RD"
    }]
}, {
    "coord": [33.9694, -84.489304],
    "cams": [{
        "id": "cctv_7356",
        "url": "/georgiasnapshots/COBB-CAM-163.jpg",
        "name": "SR 120 / Roswell Rd : Robinson West"
    }]
}, {
    "coord": [34.04538, -83.992392],
    "cams": [{
        "id": "cctv_13108",
        "url": "/georgiasnapshots/GWIN-CAM-276.jpg",
        "name": "SR 20 : Rock Springs Rd"
    }]
}, {
    "coord": [33.546062, -84.279688],
    "cams": [{
        "id": "cctv_13264",
        "stream": "/georgiavss4/gdot-cam-728.stream/playlist.m3u8",
        "name": "SR 138 : I-75 SB RAMP"
    }]
}, {
    "coord": [34.117472, -83.573416],
    "cams": [{
        "id": "cctv_32658",
        "url": "/georgiasnapshots/JACKS-CAM-004.jpg",
        "name": "SR 11 Bus / US 129 Bus : SR 15 Alt"
    }]
}, {
    "coord": [33.90222, -84.273568],
    "cams": [{
        "id": "cctv_4997",
        "stream": "/georgiavss2/gdot-cam-230.stream/playlist.m3u8",
        "name": "I-285 : BUFORD HIGHWAY"
    }]
}, {
    "coord": [33.9227, -84.492072],
    "cams": [{
        "id": "cctv_16080",
        "url": "/georgiasnapshots/MAR-CAM-601.jpg",
        "name": "SR 280 / Delk Rd : Franklin Gateway"
    }]
}, {
    "coord": [34.687976, -85.000968],
    "cams": [{
        "id": "cctv_16338",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-328.40.jpg",
        "name": "I-75 : EXT 328"
    }]
}, {
    "coord": [31.769436, -84.7726],
    "cams": [{
        "id": "cctv_16001",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-11.59.jpg",
        "name": "SR 1/CUTHBERT BYPASS : SR 50/BROAD ST"
    }]
}, {
    "coord": [34.014396, -84.185448],
    "cams": [{
        "id": "cctv_16223",
        "url": "/georgiasnapshots/COJC-CAM-465.jpg",
        "name": "State Bridge Rd : Home Depot"
    }]
}, {
    "coord": [33.716608, -84.765912],
    "cams": [{
        "id": "cctv_13091",
        "stream": "/georgiavss1/doug-cam-039.stream/playlist.m3u8",
        "name": "SR 5 (Bill Arp Rd) : Wenona St"
    }]
}, {
    "coord": [32.194584, -81.189704],
    "cams": [{
        "id": "cctv_15218",
        "url": "Http://navigator-c2c.dot.ga.gov/snapshots/GDOT-CAM-I-95-109.5.jpg",
        "name": "I-95 : SR 21"
    }]
}, {
    "coord": [33.978608, -84.15488],
    "cams": [{
        "id": "cctv_46272",
        "url": "/georgiasnapshots/GWIN-CAM-210.jpg",
        "name": "PLEASANT HILL RD : MAY RD"
    }]
}, {
    "coord": [31.961038, -83.751472],
    "cams": [{
        "id": "cctv_13296",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-101.jpg",
        "name": "I-75 : US 280"
    }]
}, {
    "coord": [34.205988, -84.1392],
    "cams": [{
        "id": "cctv_16359",
        "url": "/georgiasnapshots/FORS-CAM-014.jpg",
        "name": "SR 9/Dahlonega Hwy : SR 20/West Maple Dr."
    }]
}, {
    "coord": [33.518558, -82.060576],
    "cams": [{
        "id": "cctv_32861",
        "url": "/georgiasnapshots/AUG-CAM-168.jpg",
        "name": "River Watch Pkwy. : Fury's Ferry Rd."
    }]
}, {
    "coord": [33.891188, -83.950312],
    "cams": [{
        "id": "cctv_10342",
        "url": "/georgiasnapshots/GWIN-CAM-168.jpg",
        "name": "SR 20 : HERRING RD"
    }]
}, {
    "coord": [33.924696, -84.113536],
    "cams": [{
        "id": "cctv_10322",
        "url": "/georgiasnapshots/GWIN-CAM-148.jpg",
        "name": "PLEASANT HILL RD : CRUSE RD"
    }]
}, {
    "coord": [33.754764, -84.705296],
    "cams": [{
        "id": "cctv_15408",
        "stream": "/georgiavss2/gdot-cam-304.stream/playlist.m3u8",
        "name": "I-20 : Midway Rd Overpass"
    }]
}, {
    "coord": [33.912916, -84.339384],
    "cams": [{
        "id": "cctv_46291",
        "url": "/georgiasnapshots/BROK-CAM-087",
        "name": "Perimeter Summit Pkwy : Parkside Pl"
    }]
}, {
    "coord": [33.70984, -84.209696],
    "cams": [{
        "id": "cctv_5120",
        "stream": "/georgiavss3/gdot-cam-379.stream/playlist.m3u8",
        "name": "I-20 : E OF WESLEY CHAPEL RD"
    }]
}, {
    "coord": [34.056736, -84.378952],
    "cams": [{
        "id": "cctv_13147",
        "url": "/georgiasnapshots/ROSWELL-CAM-208.jpg",
        "name": "SR 92 : Roswell Crossing"
    }]
}, {
    "coord": [34.558864, -84.93648],
    "cams": [{
        "id": "cctv_16340",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-318.55.jpg",
        "name": "I-75 : EXT 318"
    }]
}, {
    "coord": [34.479324, -84.935896],
    "cams": [{
        "id": "cctv_46256",
        "url": "http://navigator-csc.dot.ga.gov/snapshots/GORD-CAM-002.jpg",
        "name": "SR 53 : SR 3"
    }]
}, {
    "coord": [34.068756, -84.273184],
    "cams": [{
        "id": "cctv_13604",
        "stream": "/georgiavss1/alph-cam-022.stream/playlist.m3u8",
        "name": "SR 120 (Old Milton Pkwy) : SR 400 SB Ramp"
    }]
}, {
    "coord": [33.329968, -84.780664],
    "cams": [{
        "id": "cctv_16199",
        "url": "/georgiasnapshots/COW-CAM-008.jpg",
        "name": "SR 14/US 29 : SR 16"
    }]
}, {
    "coord": [33.860544, -84.66624],
    "cams": [{
        "id": "cctv_9119",
        "url": "/georgiasnapshots/COBB-CAM-244.jpg",
        "name": "Powder Springs Rd : Forest Hill Dr"
    }]
}, {
    "coord": [34.353596, -82.932832],
    "cams": [{
        "id": "cctv_32651",
        "url": "/georgiasnapshots/HART-CAM-002.jpg",
        "name": "SR 8 : Carolina St."
    }]
}, {
    "coord": [34.27382, -84.811672],
    "cams": [{
        "id": "cctv_9307",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-296.jpg",
        "name": "I-75 : CASSVILLE/WHITE RD"
    }]
}, {
    "coord": [33.573292, -84.40316],
    "cams": [{
        "id": "cctv_15366",
        "url": "/georgiasnapshots/CLAY-CAM-199.jpg",
        "name": "Upper Riverdale Rd : Lamar Hutcheson Pkwy"
    }]
}, {
    "coord": [32.041042, -81.021744],
    "cams": [{
        "id": "cctv_15810",
        "url": "/georgiasnapshots/SAV-CAM-027.jpg",
        "name": "SR 26/US 80 : JOHNNY MERCER BLVD (WEST)"
    }]
}, {
    "coord": [33.656932, -84.325088],
    "cams": [{
        "id": "cctv_5960",
        "stream": "/georgiavss4/gdot-cam-616.stream/playlist.m3u8",
        "name": "I-675 : CEDAR GROVE RD"
    }]
}, {
    "coord": [33.562376, -85.074016],
    "cams": [{
        "id": "cctv_46491",
        "url": "/georgiasnapshots/CARR-CAM-001.jpg",
        "name": "SR 1 : Roop St"
    }]
}, {
    "coord": [33.807328, -84.365976],
    "cams": [{
        "id": "cctv_7211",
        "stream": "/georgiavss1/atl-cam-025.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Cheshire Br Rd"
    }]
}, {
    "coord": [33.786276, -84.492184],
    "cams": [{
        "id": "cctv_13081",
        "stream": "/georgiavss1/atl-cam-272.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : I-285 NB Ramp"
    }]
}, {
    "coord": [32.47889, -81.803176],
    "cams": [{
        "id": "cctv_46237",
        "url": "/georgiasnapshots/BULL-CAM-004.jpg",
        "name": "SR 26 Northside Drive : SR 67 Bypass Veterans Memorial Parkway"
    }]
}, {
    "coord": [33.515572, -84.24228],
    "cams": [{
        "id": "cctv_13228",
        "stream": "/georgiavss4/gdot-cam-739.stream/playlist.m3u8",
        "name": "I-75 : S OF FLIPPEN RD"
    }]
}, {
    "coord": [34.004856, -84.29744],
    "cams": [{
        "id": "cctv_6263",
        "url": "/georgiasnapshots/ROSWELL-CAM-116.jpg",
        "name": "SR 140 : Eves Rd"
    }]
}, {
    "coord": [33.9159, -84.4174],
    "cams": [{
        "id": "cctv_4972",
        "stream": "/georgiavss2/gdot-cam-208.stream/playlist.m3u8",
        "name": "I-285 : WEST OF RVRSIDE DR"
    }]
}, {
    "coord": [33.94094, -84.12176],
    "cams": [{
        "id": "cctv_10325",
        "url": "/georgiasnapshots/GWIN-CAM-151.jpg",
        "name": "PLEASANT HILL RD : CLUB DR"
    }]
}, {
    "coord": [34.047768, -84.562888],
    "cams": [{
        "id": "cctv_15395",
        "stream": "/georgiavss3/gdot-cam-543.stream/playlist.m3u8",
        "name": "I-575 : N BOOTH RD"
    }]
}, {
    "coord": [33.98622, -84.085744],
    "cams": [{
        "id": "cctv_15987",
        "stream": "/georgiavss2/gdot-cam-153.stream/playlist.m3u8",
        "name": "I-85 : EXIT TO SR 120"
    }]
}, {
    "coord": [33.992936, -84.429368],
    "cams": [{
        "id": "cctv_32604",
        "url": "/georgiasnapshots/COBB-CAM-107.jpg",
        "name": "Johnson Ferry Rd : Bishop Lake Rd"
    }]
}, {
    "coord": [34.009316, -85.0292],
    "cams": [{
        "id": "cctv_16151",
        "url": "/georgiasnapshots/GDOT-CAM-SR6-24.4.jpg",
        "name": "SR 6 : SR 113"
    }]
}, {
    "coord": [33.830272, -84.33324],
    "cams": [{
        "id": "cctv_15352",
        "stream": "http://vss12live.dot.ga.gov:80/lo/brok-cam-051.stream/playlist.m3u8",
        "name": "SR 42 / N. Druid Hills : Tullie Rd / Executive Park"
    }]
}, {
    "coord": [33.754336, -84.389856],
    "cams": [{
        "id": "cctv_15314",
        "url": "/georgiasnapshots/ATL-CAM-941.jpg",
        "name": "Marietta St : Peachtree St"
    }]
}, {
    "coord": [33.894312, -84.364784],
    "cams": [{
        "id": "cctv_12967",
        "stream": "/georgiavss4/gdot-cam-822.stream/playlist.m3u8",
        "name": "GA 400 : S OF NORTHLAND DR"
    }]
}, {
    "coord": [34.07626, -84.260256],
    "cams": [{
        "id": "cctv_15459",
        "stream": "/georgiavss1/alph-cam-031.stream/playlist.m3u8",
        "name": "North Point Pkwy : Webb Bridge Rd"
    }]
}, {
    "coord": [33.883636, -84.454984],
    "cams": [{
        "id": "cctv_15583",
        "stream": "/georgiavss3/gdot-cam-457.stream/playlist.m3u8",
        "name": "I-75 : S OF AKERS MILL RD"
    }]
}, {
    "coord": [34.228844, -84.1006],
    "cams": [{
        "id": "cctv_32565",
        "url": "http://navigator-csc.dot.ga.gov/snapshots/FORS-CAM-032.jpg",
        "name": "SR 400 SB : Pilgrim Mill Rd"
    }]
}, {
    "coord": [33.855688, -84.011232],
    "cams": [{
        "id": "cctv_10365",
        "url": "/georgiasnapshots/GWIN-CAM-191.jpg",
        "name": "SR 10 : Wisteria Dr / Skyland Dr"
    }]
}, {
    "coord": [33.849004, -84.429872],
    "cams": [{
        "id": "cctv_9335",
        "stream": "/georgiavss1/atl-cam-095.stream/playlist.m3u8",
        "name": "SR 3 / Northside Pkwy : W Paces Ferry Rd"
    }]
}, {
    "coord": [34.001832, -84.077],
    "cams": [{
        "id": "cctv_46314",
        "url": "/georgiasnapshots/GC-CAM-264.jpg",
        "name": "OLD PEACHTREE RD : DISTRIBUTION DR"
    }]
}, {
    "coord": [33.678452, -83.975584],
    "cams": [{
        "id": "cctv_13362",
        "url": "/georgiasnapshots/ROCK-CAM-123.jpg",
        "name": "SR 138 / Walnut Grove Rd : Lakewood Dr / Boar Tusk Rd"
    }]
}, {
    "coord": [33.9229, -84.484496],
    "cams": [{
        "id": "cctv_5128",
        "stream": "/georgiavss3/gdot-cam-403.stream/playlist.m3u8",
        "name": "I-75 : DELK RD"
    }]
}, {
    "coord": [34.055384, -84.007],
    "cams": [{
        "id": "cctv_15969",
        "stream": "/georgiavss2/gdot-cam-166.stream/playlist.m3u8",
        "name": "I-85 : 1 MILE S OF SR 20"
    }]
}, {
    "coord": [33.965904, -84.49196],
    "cams": [{
        "id": "cctv_13618",
        "url": "/georgiasnapshots/COBB-CAM-170.jpg",
        "name": "SR 120 / Roswell Rd : Wood Trail Ln"
    }]
}, {
    "coord": [33.9144, -84.351096],
    "cams": [{
        "id": "cctv_4983",
        "stream": "/georgiavss2/gdot-cam-218.stream/playlist.m3u8",
        "name": "I-285 : PEACHTREE-DNWDY"
    }]
}, {
    "coord": [34.572148, -83.31028],
    "cams": [{
        "id": "cctv_32919",
        "url": "/georgiasnapshots/STEPH-CAM-003.jpg",
        "name": "SR 17 ALT : Collins Rd"
    }]
}, {
    "coord": [33.984948, -84.024104],
    "cams": [{
        "id": "cctv_10237",
        "url": "/georgiasnapshots/GWIN-CAM-063.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : RIVERSIDE PKWY"
    }]
}, {
    "coord": [34.015344, -84.614888],
    "cams": [{
        "id": "cctv_8794",
        "url": "/georgiasnapshots/COBB-CAM-341.jpg",
        "name": "SR 3 / Cobb Pkwy : Kennesaw Due West Rd"
    }]
}, {
    "coord": [34.84414, -85.047384],
    "cams": [{
        "id": "cctv_46495",
        "url": "/georgiasnapshots/CARR-CAM-401.jpg",
        "name": "SR 3N : SR 201 Tunnel Hill"
    }]
}, {
    "coord": [33.818256, -84.247256],
    "cams": [{
        "id": "cctv_5304",
        "stream": "/georgiavss4/gdot-cam-779.stream/playlist.m3u8",
        "name": "US 78 : RAMP TO I-285 N"
    }]
}, {
    "coord": [33.715328, -84.299008],
    "cams": [{
        "id": "cctv_5107",
        "stream": "/georgiavss3/gdot-cam-367.stream/playlist.m3u8",
        "name": "I-20 : E OF FLAT SHOALS"
    }]
}, {
    "coord": [34.05596, -84.543472],
    "cams": [{
        "id": "cctv_15399",
        "stream": "/georgiavss3/gdot-cam-545.stream/playlist.m3u8",
        "name": "I-575 : AT HAWKINS STORE ROAD"
    }]
}, {
    "coord": [34.143856, -84.518512],
    "cams": [{
        "id": "cctv_15438",
        "stream": "/georgiavss3/gdot-cam-565.stream/playlist.m3u8",
        "name": "I-575 : SIXES RD ENT RAMP"
    }]
}, {
    "coord": [33.6534, -84.438152],
    "cams": [{
        "id": "cctv_5298",
        "stream": "/georgiavss2/gdot-cam-076.stream/playlist.m3u8",
        "name": "I-85 : AIRPORT EXIT"
    }]
}, {
    "coord": [33.950752, -84.5204],
    "cams": [{
        "id": "cctv_15175",
        "url": "/georgiasnapshots/MAR-CAM-106.jpg",
        "name": "SR 3/Cobb Pkwy : SR 3C/Roswell St"
    }]
}, {
    "coord": [33.887152, -84.266448],
    "cams": [{
        "id": "cctv_5185",
        "stream": "/georgiavss2/gdot-cam-046.stream/playlist.m3u8",
        "name": "I-85 : S OF I-285 (MORELAND INTRCHGE)"
    }]
}, {
    "coord": [32.06903, -82.900704],
    "cams": [{
        "id": "cctv_13181",
        "url": "/georgiasnapshots/GDOT-CAM-US341-4.6.jpg",
        "name": "341 /SR 27 : US 280 / THIRD AVE"
    }]
}, {
    "coord": [33.9205, -84.301304],
    "cams": [{
        "id": "cctv_4991",
        "stream": "/georgiavss2/gdot-cam-225.stream/playlist.m3u8",
        "name": "I-285 : W OF N PEACHTREE"
    }]
}, {
    "coord": [33.762384, -84.38604],
    "cams": [{
        "id": "cctv_16211",
        "url": "/georgiasnapshots/ATL-CAM-976.jpg",
        "name": "Peachtree Center Avenue : Baker St"
    }]
}, {
    "coord": [33.472164, -84.449776],
    "cams": [{
        "id": "cctv_10426",
        "stream": "/georgiavss1/fay-cam-203.stream/playlist.m3u8",
        "name": "SR 314 : Grove Park Entry / Lowes"
    }]
}, {
    "coord": [34.068796, -83.985264],
    "cams": [{
        "id": "cctv_10216",
        "url": "/georgiasnapshots/GWIN-CAM-042.jpg",
        "name": "SR 20 : Woodward Crossing Blvd"
    }]
}, {
    "coord": [33.9232, -84.281896],
    "cams": [{
        "id": "cctv_5242",
        "stream": "/georgiavss3/gdot-cam-599.stream/playlist.m3u8",
        "name": "SR 141 : TILLY MILL RD"
    }]
}, {
    "coord": [33.447956, -84.147104],
    "cams": [{
        "id": "cctv_13121",
        "url": "/georgiasnapshots/HNRY-CAM-008.jpg",
        "name": "SR 20 : SR 42 SB / Jonesboro Rd"
    }]
}, {
    "coord": [33.762356, -84.392088],
    "cams": [{
        "id": "cctv_15301",
        "stream": "/georgiavss1/atl-cam-931.stream/playlist.m3u8",
        "name": "Centennial Olympic Park Dr : Baker St"
    }]
}, {
    "coord": [33.947008, -84.156064],
    "cams": [{
        "id": "cctv_10280",
        "url": "/georgiasnapshots/GWIN-CAM-106.jpg",
        "name": "SATELLITE BLVD : N of PARAGON"
    }]
}, {
    "coord": [33.034398, -83.938416],
    "cams": [{
        "id": "cctv_15450",
        "url": "/georgiasnapshots/GDOT-CAM-SR18-6.6.jpg",
        "name": "SR 18/Main St : SR 42-83/Lee St"
    }]
}, {
    "coord": [34.080164, -84.677072],
    "cams": [{
        "id": "cctv_16129",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-278.30.jpg",
        "name": "I-75 : GLADE RD (EXIT 278)"
    }]
}, {
    "coord": [33.36, -84.76124],
    "cams": [{
        "id": "cctv_16362",
        "url": "/georgiasnapshots/COW-CAM-023.jpg",
        "name": "Poplar Rd : I-85 SB ENT"
    }]
}, {
    "coord": [32.845546, -83.73932],
    "cams": [{
        "id": "cctv_6016",
        "stream": "/georgiavss5/bibb-cam-025.stream/playlist.m3u8",
        "name": "I-475 : MILE POST 6"
    }]
}, {
    "coord": [34.008772, -84.33396],
    "cams": [{
        "id": "cctv_5339",
        "stream": "/georgiavss4/gdot-cam-835.stream/playlist.m3u8",
        "name": "GA 400 : S OF HOLCOMB BR"
    }]
}, {
    "coord": [34.042792, -84.338728],
    "cams": [{
        "id": "cctv_13151",
        "url": "/georgiasnapshots/ROSWELL-CAM-404.jpg",
        "name": "Mansell Rd : Eagle Crest Village Ln"
    }]
}, {
    "coord": [33.578816, -84.415504],
    "cams": [{
        "id": "cctv_13677",
        "url": "/georgiasnapshots/CLAY-CAM-012.jpg",
        "name": "SR 139 / Church St : King Rd"
    }]
}, {
    "coord": [34.158072, -84.175],
    "cams": [{
        "id": "cctv_8811",
        "stream": "/georgiavss4/gdot-cam-855.stream/playlist.m3u8",
        "name": "GA 400 : NEAR PEACHTREE PKWY"
    }]
}, {
    "coord": [34.080692, -84.5378],
    "cams": [{
        "id": "cctv_15390",
        "stream": "/georgiavss3/gdot-cam-549.stream/playlist.m3u8",
        "name": "I-575 : S OF SR 92"
    }]
}, {
    "coord": [33.795104, -83.742624],
    "cams": [{
        "id": "cctv_32589",
        "url": "/georgiasnapshots/WALT-CAM-002",
        "name": "SR 10 BUS : SR 138"
    }]
}, {
    "coord": [34.118468, -83.762424],
    "cams": [{
        "id": "cctv_32660",
        "url": "/georgiasnapshots/JACKS-CAM-006.jpg",
        "name": "SR 53 : I-85 SB"
    }]
}, {
    "coord": [33.824176, -84.152408],
    "cams": [{
        "id": "cctv_5317",
        "stream": "/georgiavss4/gdot-cam-790.stream/playlist.m3u8",
        "name": "US 78 : HUGH HOWELL RD"
    }]
}, {
    "coord": [33.424304, -82.057048],
    "cams": [{
        "id": "cctv_32887",
        "url": "/georgiasnapshots/AUG-CAM-091.jpg",
        "name": "Hwy 1 : Bobby Jones Exp. (WB ramp)"
    }]
}, {
    "coord": [33.887076, -84.456768],
    "cams": [{
        "id": "cctv_13086",
        "url": "/georgiasnapshots/COBB-CAM-120.jpg",
        "name": "Akers Mill Rd : Overton Park Dr"
    }]
}, {
    "coord": [32.44645, -83.754192],
    "cams": [{
        "id": "cctv_16334",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-135.jpg",
        "name": "I-75 : US 41/SR 7/127/224"
    }]
}, {
    "coord": [33.925388, -84.487648],
    "cams": [{
        "id": "cctv_15613",
        "stream": "/georgiavss3/gdot-cam-475.stream/playlist.m3u8",
        "name": "I-75 : DELK RD EXIT"
    }]
}, {
    "coord": [33.7441, -84.425248],
    "cams": [{
        "id": "cctv_5078",
        "stream": "/georgiavss3/gdot-cam-340.stream/playlist.m3u8",
        "name": "I-20 : E OF LANGHORN ST"
    }]
}, {
    "coord": [33.82234, -84.135432],
    "cams": [{
        "id": "cctv_5321",
        "stream": "/georgiavss4/gdot-cam-794.stream/playlist.m3u8",
        "name": "US 78 : W OF JEFFERSON DAVIS RD"
    }]
}, {
    "coord": [33.83124, -84.368248],
    "cams": [{
        "id": "cctv_7226",
        "stream": "/georgiavss1/atl-cam-019.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Darlington Rd"
    }]
}, {
    "coord": [33.552388, -84.27228],
    "cams": [{
        "id": "cctv_13558",
        "url": "/georgiasnapshots/CLAY-CAM-153.jpg",
        "name": "SR 138 / Lake Spivey Rd : Hannover Pkwy"
    }]
}, {
    "coord": [33.725508, -84.757464],
    "cams": [{
        "id": "cctv_12947",
        "url": "/georgiasnapshots/DOUG-CAM-023.jpg",
        "name": "Douglas Blvd : Lowes Entrance"
    }]
}, {
    "coord": [33.852224, -84.370328],
    "cams": [{
        "id": "cctv_8826",
        "stream": "/georgiavss1/atl-cam-028.stream/playlist.m3u8",
        "name": "Lenox Rd : GA 400"
    }]
}, {
    "coord": [33.815948, -84.2506],
    "cams": [{
        "id": "cctv_5013",
        "stream": "/georgiavss2/gdot-cam-245.stream/playlist.m3u8",
        "name": "I-285 : STONE MT FRWY-US 78"
    }]
}, {
    "coord": [33.78158, -84.393648],
    "cams": [{
        "id": "cctv_16093",
        "url": "/georgiasnapshots/ATL-CAM-974.jpg",
        "name": "10th St : Fowler St"
    }]
}, {
    "coord": [34.033132, -84.578216],
    "cams": [{
        "id": "cctv_7346",
        "url": "/georgiasnapshots/COBB-CAM-320.jpg",
        "name": "Chastain Rd : I-75 SB Ramp"
    }]
}, {
    "coord": [33.790108, -84.496296],
    "cams": [{
        "id": "cctv_13190",
        "stream": "/georgiavss1/atl-cam-271.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : SR 70 (Fulton Industrial Blvd)"
    }]
}, {
    "coord": [34.062592, -84.559496],
    "cams": [{
        "id": "cctv_12897",
        "url": "/georgiasnapshots/COBB-CAM-312.jpg",
        "name": "Bells Ferry Rd : Shiloh/Shallowford Rd"
    }]
}, {
    "coord": [34.56626, -84.943712],
    "cams": [{
        "id": "cctv_15975",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-319.20.jpg",
        "name": "I-75 : RESACA REST AREA"
    }]
}, {
    "coord": [34.147988, -84.516048],
    "cams": [{
        "id": "cctv_15542",
        "stream": "/georgiavss3/gdot-cam-567.stream/playlist.m3u8",
        "name": "I-575 : N OF SIXES RD"
    }]
}, {
    "coord": [33.754732, -84.402864],
    "cams": [{
        "id": "cctv_15293",
        "stream": "/georgiavss1/atl-cam-540.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : MLK Jr Dr / M-B Stadium"
    }]
}, {
    "coord": [33.900032, -84.448224],
    "cams": [{
        "id": "cctv_13742",
        "url": "/georgiasnapshots/COBB-CAM-044.jpg",
        "name": "Powers Ferry Rd : Interstate North Pkwy"
    }]
}, {
    "coord": [33.71828, -84.407808],
    "cams": [{
        "id": "cctv_13059",
        "stream": "/georgiavss1/atl-cam-079.stream/playlist.m3u8",
        "name": "SR 3 (Metropolitan Pkwy) : Manford Rd"
    }]
}, {
    "coord": [33.397972, -84.622664],
    "cams": [{
        "id": "cctv_15467",
        "url": "/georgiasnapshots/COW-CAM-006.jpg",
        "name": "SR 34 : Fischer Rd"
    }]
}, {
    "coord": [34.021396, -84.269984],
    "cams": [{
        "id": "cctv_16228",
        "url": "/georgiasnapshots/COJC-CAM-525.jpg",
        "name": "Old Alabama Rd : Haynes Bridge Rd"
    }]
}, {
    "coord": [33.867784, -84.18832],
    "cams": [{
        "id": "cctv_10185",
        "url": "/georgiasnapshots/GWIN-CAM-007.jpg",
        "name": "SR 9 (US 29 Lawrenceville Hwy) : Jimmy Carter Blvd / Mountain Ind Blvd"
    }]
}, {
    "coord": [33.916788, -84.358088],
    "cams": [{
        "id": "cctv_5328",
        "stream": "/georgiavss4/gdot-cam-825.stream/playlist.m3u8",
        "name": "GA 400 : N OF I-285"
    }]
}, {
    "coord": [33.434216, -84.115024],
    "cams": [{
        "id": "cctv_15903",
        "url": "/georgiasnapshots/HNRY-CAM-007.jpg",
        "name": "SR 81 : Racetrack Rd"
    }]
}, {
    "coord": [33.902808, -84.274904],
    "cams": [{
        "id": "cctv_13669",
        "stream": "/georgiavss1/dek-cam-228.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : I-285 EB Ramp"
    }]
}, {
    "coord": [33.620708, -84.42888],
    "cams": [{
        "id": "cctv_5256",
        "stream": "/georgiavss4/gdot-cam-658.stream/playlist.m3u8",
        "name": "I-285 : CD LANES - NO TRAFFIC"
    }]
}, {
    "coord": [32.8079, -83.728144],
    "cams": [{
        "id": "cctv_5984",
        "url": "/georgiasnapshots/BIBB-CAM-522.jpg",
        "name": "EISENHOWER PKWY : W OF I-475"
    }]
}, {
    "coord": [33.2743, -84.290816],
    "cams": [{
        "id": "cctv_13096",
        "url": "/georgiasnapshots/SPAL-CAM-001.jpg",
        "name": "SR 3 : SR 92 / McIntosh Rd"
    }]
}, {
    "coord": [32.810638, -83.723352],
    "cams": [{
        "id": "cctv_5983",
        "url": "/georgiasnapshots/BIBB-CAM-521.jpg",
        "name": "EISENHOWER PKWY : E OF I-475"
    }]
}, {
    "coord": [33.865272, -84.439368],
    "cams": [{
        "id": "cctv_9062",
        "stream": "/georgiavss1/atl-cam-046.stream/playlist.m3u8",
        "name": "Mt Paran Rd : I-75 NB Ramp"
    }]
}, {
    "coord": [33.9395, -84.236512],
    "cams": [{
        "id": "cctv_13336",
        "url": "/georgiasnapshots/GWIN-CAM-323.jpg",
        "name": "SR 140 : Atlantic Blvd"
    }]
}, {
    "coord": [33.872068, -84.364488],
    "cams": [{
        "id": "cctv_12962",
        "stream": "/georgiavss4/gdot-cam-819.stream/playlist.m3u8",
        "name": "GA 400 : LORIDANS DR"
    }]
}, {
    "coord": [33.629372, -84.415512],
    "cams": [{
        "id": "cctv_5588",
        "stream": "/georgiavss4/gdot-cam-671.stream/playlist.m3u8",
        "name": "I-285 : W OF LAKE MIRROR"
    }]
}, {
    "coord": [33.95848, -84.110736],
    "cams": [{
        "id": "cctv_10266",
        "url": "/georgiasnapshots/GWIN-CAM-092.jpg",
        "name": "OLD NORCROSS RD : BRECKINRIDGE BLVD"
    }]
}, {
    "coord": [33.407272, -84.568896],
    "cams": [{
        "id": "cctv_32540",
        "url": "/georgiasnapshots/FAY-CAM-214.jpg",
        "name": "SR 54 : Peachtree Pky"
    }]
}, {
    "coord": [34.01224, -84.184016],
    "cams": [{
        "id": "cctv_16227",
        "url": "/georgiasnapshots/COJC-CAM-470.jpg",
        "name": "State Bridge Rd : Parkway Baptist"
    }]
}, {
    "coord": [33.90172, -84.205472],
    "cams": [{
        "id": "cctv_10187",
        "url": "/georgiasnapshots/GWIN-CAM-009.jpg",
        "name": "SR 140 : S Norcross-Tucker Rd / Singleton Rd"
    }]
}, {
    "coord": [33.822066, -84.120748],
    "cams": [{
        "id": "cctv_10412",
        "url": "/georgiasnapshots/GCDOT-IVDS-075-PH4.jpg",
        "name": "WEST PARK PLACE BLVD : US 78 EB RAMPS"
    }]
}, {
    "coord": [34.226168, -83.86624],
    "cams": [{
        "id": "cctv_32632",
        "url": "/georgiasnapshots/HALL-CAM-013.JPG",
        "name": "I-985 SB : SR 53"
    }]
}, {
    "coord": [33.896564, -84.498184],
    "cams": [{
        "id": "cctv_7307",
        "url": "/georgiasnapshots/COBB-CAM-033.jpg",
        "name": "Windy Hill Rd : CMS (Roswell St)"
    }]
}, {
    "coord": [33.801456, -84.407648],
    "cams": [{
        "id": "cctv_13079",
        "stream": "/georgiavss1/atl-cam-094.stream/playlist.m3u8",
        "name": "SR 3 / Northside Dr : I-75 SB Ramp"
    }]
}, {
    "coord": [33.699308, -84.430592],
    "cams": [{
        "id": "cctv_46427",
        "url": "/georgiasnapshots/FULT-CAM-009.jpg",
        "name": "GA 154/ Womack Ave : Hardee Ave"
    }]
}, {
    "coord": [33.518902, -84.354304],
    "cams": [{
        "id": "cctv_10468",
        "url": "/georgiasnapshots/CLAY-CAM-074.jpg",
        "name": "Main St (JB) : College St"
    }]
}, {
    "coord": [31.20358, -83.250656],
    "cams": [{
        "id": "cctv_46334",
        "url": "/georgiasnapshots/BERR-CAM-001.jpg",
        "name": "SR 11 : DENNIS AVE"
    }]
}, {
    "coord": [34.734972, -83.91824],
    "cams": [{
        "id": "cctv_12894",
        "url": "/georgiasnapshots/GDOT-CAM-US19-0.02.jpg",
        "name": "SR 11 : at Neels Gap"
    }]
}, {
    "coord": [33.87572, -84.380776],
    "cams": [{
        "id": "cctv_9115",
        "stream": "/georgiavss1/atl-cam-051.stream/playlist.m3u8",
        "name": "SR 9 / Roswell Rd : Wieuca Rd"
    }]
}, {
    "coord": [33.399132, -84.796688],
    "cams": [{
        "id": "cctv_7363",
        "url": "/georgiasnapshots/COW-CAM-002.jpg",
        "name": "SR 34 Bypass : SR 14 / Jackson St"
    }]
}, {
    "coord": [33.713688, -84.229232],
    "cams": [{
        "id": "cctv_5118",
        "stream": "/georgiavss3/gdot-cam-377.stream/playlist.m3u8",
        "name": "I-20 : E OF I-285 (DEKALB)"
    }]
}, {
    "coord": [34.029828, -84.432472],
    "cams": [{
        "id": "cctv_10136",
        "url": "/georgiasnapshots/COBB-CAM-212.jpg",
        "name": "Shallowford Rd : Mabry Rd"
    }]
}, {
    "coord": [32.22293, -81.168632],
    "cams": [{
        "id": "cctv_13201",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-110.jpg",
        "name": "I-95 : WELCOME CENTER - SC / GA LINE"
    }]
}, {
    "coord": [32.45417, -82.756168],
    "cams": [{
        "id": "cctv_13186",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-062.jpg",
        "name": "I-16 : MINTER TWEED RD (CMS 909)"
    }]
}, {
    "coord": [33.77418, -84.572288],
    "cams": [{
        "id": "cctv_15421",
        "stream": "/georgiavss3/gdot-cam-317.stream/playlist.m3u8",
        "name": "I-20 : West of Riverside Pkwy"
    }]
}, {
    "coord": [33.83032, -84.485632],
    "cams": [{
        "id": "cctv_5400",
        "stream": "/georgiavss4/gdot-cam-962.stream/playlist.m3u8",
        "name": "I-285 : N OF SOUTH COBB DR"
    }]
}, {
    "coord": [33.7255, -84.3934],
    "cams": [{
        "id": "cctv_5221",
        "stream": "/georgiavss3/gdot-cam-578.stream/playlist.m3u8",
        "name": "75/85 : UNIVERSITY AVE RAMP METER"
    }]
}, {
    "coord": [33.857828, -84.20476],
    "cams": [{
        "id": "cctv_15259",
        "url": "/georgiasnapshots/DEK-CAM-201.jpg",
        "name": "SR 8 (Lawrenceville Hwy) : Walmart SC"
    }]
}, {
    "coord": [33.863208, -84.439832],
    "cams": [{
        "id": "cctv_9058",
        "stream": "/georgiavss1/atl-cam-045.stream/playlist.m3u8",
        "name": "SR 3 / US 41 / Northside Pkwy : Mt. Paran Rd."
    }]
}, {
    "coord": [33.718008, -85.027256],
    "cams": [{
        "id": "cctv_16176",
        "url": "/georgiasnapshots/GDOT-CAM-SR113-9.45.jpg",
        "name": "SR 113 : I-20 WB (EXIT 19)"
    }]
}, {
    "coord": [32.76469, -83.710224],
    "cams": [{
        "id": "cctv_6000",
        "stream": "/georgiavss5/bibb-cam-009.stream/playlist.m3u8",
        "name": "I-475 : N OF HARTLEY BR RD"
    }]
}, {
    "coord": [33.758016, -84.393472],
    "cams": [{
        "id": "cctv_15282",
        "stream": "/georgiavss1/atl-cam-920.stream/playlist.m3u8",
        "name": "Marietta St : Centennial Olympic Park Dr"
    }]
}, {
    "coord": [32.836154, -83.63144],
    "cams": [{
        "id": "cctv_5964",
        "url": "/georgiasnapshots/BIBB-CAM-502.jpg",
        "name": "FIRST ST : POPLAR ST"
    }]
}, {
    "coord": [33.917336, -84.337552],
    "cams": [{
        "id": "cctv_46397",
        "url": "/georgiasnapshots/BROK-CAM-081.jpg",
        "name": "Ashford Dunwoody Rd : I-285 EB Ramp"
    }]
}, {
    "coord": [33.738584, -84.728016],
    "cams": [{
        "id": "cctv_15410",
        "stream": "/georgiavss2/gdot-cam-297.stream/playlist.m3u8",
        "name": "I-20 : East of Prestley Mill Rd"
    }]
}, {
    "coord": [33.787492, -84.246272],
    "cams": [{
        "id": "cctv_5019",
        "stream": "/georgiavss2/gdot-cam-250.stream/playlist.m3u8",
        "name": "I-285 : NORTH DECATUR RD"
    }]
}, {
    "coord": [33.973356, -83.89092],
    "cams": [{
        "id": "cctv_46306",
        "url": "/georgiasnapshots/GWIN-CAM-257.jpg",
        "name": "SR 316 : HARBINS RD"
    }]
}, {
    "coord": [32.6538, -83.612432],
    "cams": [{
        "id": "cctv_16188",
        "url": "/georgiasnapshots/GDOT-CAM-SR247-21.2.jpg",
        "name": "SR 247 : N Davis Dr"
    }]
}, {
    "coord": [33.651832, -84.394248],
    "cams": [{
        "id": "cctv_15359",
        "stream": "/georgiavss1/atl-cam-804.stream/playlist.m3u8",
        "name": "SR 3 / Central Ave : Browns Mill Rd"
    }]
}, {
    "coord": [33.729, -84.7622],
    "cams": [{
        "id": "cctv_16081",
        "stream": "/georgiavss1/doug-cam-034.stream/playlist.m3u8",
        "name": "SR 5 (Bill Arp Rd) : I-20 WB Ramp"
    }]
}, {
    "coord": [33.873908, -84.530368],
    "cams": [{
        "id": "cctv_13757",
        "url": "/georgiasnapshots/SMYR-CAM-006.jpg",
        "name": "SR 280/S Cobb Dr : Concord Rd"
    }]
}, {
    "coord": [33.77158, -84.324928],
    "cams": [{
        "id": "cctv_8959",
        "stream": "/georgiavss1/dek-cam-001.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : Lakeshore Dr / N Ponce"
    }]
}, {
    "coord": [33.462624, -84.206928],
    "cams": [{
        "id": "cctv_13251",
        "stream": "/georgiavss4/gdot-cam-679.stream/playlist.m3u8",
        "name": "JONESBORO RD : FOSTER DR"
    }]
}, {
    "coord": [34.07454, -84.539392],
    "cams": [{
        "id": "cctv_5205",
        "stream": "/georgiavss3/gdot-cam-513.stream/playlist.m3u8",
        "name": "I-575 : 1 MI S OF HWY 92"
    }]
}, {
    "coord": [33.797996, -84.282456],
    "cams": [{
        "id": "cctv_9158",
        "stream": "/georgiavss1/dek-cam-009.stream/playlist.m3u8",
        "name": "SR 8 (Scott Blvd) : Church St"
    }]
}, {
    "coord": [33.995012, -84.43404],
    "cams": [{
        "id": "cctv_13737",
        "url": "/georgiasnapshots/COBB-CAM-106.jpg",
        "name": "Johnson Ferry Rd : Sewell Mill Rd"
    }]
}, {
    "coord": [33.54485, -84.272688],
    "cams": [{
        "id": "cctv_13562",
        "stream": "/georgiavss4/gdot-cam-730.stream/playlist.m3u8",
        "name": "I-75 : N OF I-675"
    }]
}, {
    "coord": [34.695148, -85.004528],
    "cams": [{
        "id": "cctv_9287",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-328.jpg",
        "name": "I-75 : 1/2 MI N OF SR 3"
    }]
}, {
    "coord": [33.947624, -84.136768],
    "cams": [{
        "id": "cctv_10200",
        "url": "/georgiasnapshots/GWIN-CAM-026.jpg",
        "name": "STEVE REYNOLDS BLVD : I-85 NB RAMP"
    }]
}, {
    "coord": [33.79112, -84.392792],
    "cams": [{
        "id": "cctv_4934",
        "stream": "/georgiavss2/gdot-cam-150.stream/playlist.m3u8",
        "name": "75/85 : 17TH ST"
    }]
}, {
    "coord": [33.79868, -84.307232],
    "cams": [{
        "id": "cctv_13351",
        "url": "/georgiasnapshots/DEK-CAM-303.jpg",
        "name": "SR 155 / Clairmont Rd : Starvine Way"
    }]
}, {
    "coord": [33.85782, -84.01956],
    "cams": [{
        "id": "cctv_10194",
        "url": "/georgiasnapshots/GWIN-CAM-016.jpg",
        "name": "SR 10 : SR 124 (Scenic Hwy)"
    }]
}, {
    "coord": [33.746076, -84.348416],
    "cams": [{
        "id": "cctv_5096",
        "stream": "/georgiavss3/gdot-cam-357.stream/playlist.m3u8",
        "name": "I-20 : MORELAND AVE"
    }]
}, {
    "coord": [33.899876, -84.628072],
    "cams": [{
        "id": "cctv_12922",
        "url": "/georgiasnapshots/COBB-CAM-110.jpg",
        "name": "SR 360/Macland Rd : Barrett Pkwy"
    }]
}, {
    "coord": [32.065578, -81.159384],
    "cams": [{
        "id": "cctv_15729",
        "url": "/georgiasnapshots/SAV-CAM-011.jpg",
        "name": "CHATHAM PARKWAY : CHATHAM CENTER"
    }]
}, {
    "coord": [32.404602, -84.931256],
    "cams": [{
        "id": "cctv_13579",
        "url": "/georgiasnapshots/COLU-CAM-300.jpg",
        "name": "Victory Dr : Border Dr"
    }]
}, {
    "coord": [33.911272, -84.596672],
    "cams": [{
        "id": "cctv_10536",
        "url": "/georgiasnapshots/COBB-CAM-240.jpg",
        "name": "SR 360/Powder Springs Rd : Callaway/Cheatham Hill Rd"
    }]
}, {
    "coord": [33.618784, -84.559776],
    "cams": [{
        "id": "cctv_46452",
        "url": "/georgiasnapshots/FULT-CAM-030.jpg",
        "name": "GA 14 ALT/ South Fulton Pkwy : Stonewall Tell Rd"
    }]
}, {
    "coord": [33.65262, -84.367016],
    "cams": [{
        "id": "cctv_5045",
        "stream": "/georgiavss2/gdot-cam-277.stream/playlist.m3u8",
        "name": "I-285 : JONESBORO RD"
    }]
}, {
    "coord": [33.55494, -83.475712],
    "cams": [{
        "id": "cctv_13101",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-114.jpg",
        "name": "I-20 : SR 24 / EATONTON RD"
    }]
}, {
    "coord": [33.437192, -84.031888],
    "cams": [{
        "id": "cctv_15448",
        "url": "/georgiasnapshots/HNRY-CAM-006.jpg",
        "name": "SR 81 : Keys Ferry Rd"
    }]
}, {
    "coord": [30.905868, -84.575616],
    "cams": [{
        "id": "cctv_46350",
        "url": "/georgiasnapshots/DECA-CAM-003.jpg",
        "name": "SR 1 Bu : BROUGHTON ST"
    }]
}, {
    "coord": [34.927764, -85.151504],
    "cams": [{
        "id": "cctv_16328",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-350.jpg",
        "name": "I-75 : EXT 350"
    }]
}, {
    "coord": [33.907532, -84.206352],
    "cams": [{
        "id": "cctv_10405",
        "url": "/georgiasnapshots/GWIN-CAM-246.jpg",
        "name": "SR 140 : Dawson Blvd"
    }]
}, {
    "coord": [33.470756, -81.976208],
    "cams": [{
        "id": "cctv_32834",
        "url": "/georgiasnapshots/AUG-CAM-199.jpg",
        "name": "Walton Way : 12th St."
    }]
}, {
    "coord": [33.50652, -82.019336],
    "cams": [{
        "id": "cctv_32846",
        "url": "/georgiasnapshots/AUG-CAM-219.jpg",
        "name": "Washington Rd : Azalea Dr"
    }]
}, {
    "coord": [33.703112, -84.100248],
    "cams": [{
        "id": "cctv_16135",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-074.9.jpg",
        "name": "I-20 : west of Turner Rd/Exit 75"
    }]
}, {
    "coord": [34.00128, -84.073368],
    "cams": [{
        "id": "cctv_5430",
        "stream": "/georgiavss2/gdot-cam-133.stream/playlist.m3u8",
        "name": "I-85 : OLD PEACHTREE"
    }]
}, {
    "coord": [33.754476, -84.231496],
    "cams": [{
        "id": "cctv_5052",
        "stream": "/georgiavss2/gdot-cam-283.stream/playlist.m3u8",
        "name": "I-285 : COVINGTON HWY RAMP METER"
    }]
}, {
    "coord": [31.609268, -81.882648],
    "cams": [{
        "id": "cctv_13178",
        "url": "/georgiasnapshots/GDOT-CAM-US341-16.5.jpg",
        "name": "341/SR 27 : US 84"
    }]
}, {
    "coord": [33.755456, -84.39116],
    "cams": [{
        "id": "cctv_15328",
        "url": "/georgiasnapshots/ATL-CAM-947.jpg",
        "name": "Marietta St : Forsyth St"
    }]
}, {
    "coord": [33.9368, -84.159504],
    "cams": [{
        "id": "cctv_4924",
        "stream": "/georgiavss2/gdot-cam-106.stream/playlist.m3u8",
        "name": "I-85 : BEAVER RUIN"
    }]
}, {
    "coord": [34.005112, -84.07112],
    "cams": [{
        "id": "cctv_15955",
        "stream": "/georgiavss2/gdot-cam-154.stream/playlist.m3u8",
        "name": "I-85 : N OF OLD PEACHTREE RD"
    }]
}, {
    "coord": [34.057088, -84.542456],
    "cams": [{
        "id": "cctv_5203",
        "stream": "/georgiavss3/gdot-cam-511.stream/playlist.m3u8",
        "name": "I-575 : HAWKINS STORE RD"
    }]
}, {
    "coord": [33.711868, -84.407896],
    "cams": [{
        "id": "cctv_16294",
        "stream": "/georgiavss1/atl-cam-076.stream/playlist.m3u8",
        "name": "SR 3 (Metropolitan Pkwy) : Atlanta Metropolitan College"
    }]
}, {
    "coord": [34.071264, -84.29672],
    "cams": [{
        "id": "cctv_9069",
        "stream": "/georgiavss1/alph-cam-006.stream/playlist.m3u8",
        "name": "SR 9 : SR 120 (Old Milton Parkway)"
    }]
}, {
    "coord": [34.557464, -84.935184],
    "cams": [{
        "id": "cctv_15547",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-318.jpg",
        "name": "I-75 : SR 3"
    }]
}, {
    "coord": [33.825192, -84.57596],
    "cams": [{
        "id": "cctv_9172",
        "url": "/georgiasnapshots/COBB-CAM-070.jpg",
        "name": "Floyd Rd : Clay Rd"
    }]
}, {
    "coord": [33.82518, -84.358944],
    "cams": [{
        "id": "cctv_13769",
        "stream": "/georgiavss1/atl-cam-604.stream/playlist.m3u8",
        "name": "Sidney Marcus Blvd : SR 400 NB Ramp"
    }]
}, {
    "coord": [34.001928, -84.289184],
    "cams": [{
        "id": "cctv_13140",
        "url": "/georgiasnapshots/ROSWELL-CAM-112.jpg",
        "name": "SR 140 : Steeple Chase Dr West"
    }]
}, {
    "coord": [33.99842, -84.093472],
    "cams": [{
        "id": "cctv_10306",
        "url": "/georgiasnapshots/GWIN-CAM-132.jpg",
        "name": "SUGARLOAF PKWY : MEADOW CHURCH RD"
    }]
}, {
    "coord": [33.466556, -82.083832],
    "cams": [{
        "id": "cctv_32867",
        "url": "/georgiasnapshots/AUG-CAM-260.jpg",
        "name": "Wrightsboro Rd. : Bobby Jones Exp.(SB ramp)"
    }]
}, {
    "coord": [33.872368, -84.474688],
    "cams": [{
        "id": "cctv_32607",
        "url": "/georgiasnapshots/COBB-CAM-147.jpg",
        "name": "Cumberland Pkwy : Mt Wilkinson"
    }]
}, {
    "coord": [33.901784, -84.5244],
    "cams": [{
        "id": "cctv_13730",
        "url": "/georgiasnapshots/SMYR-CAM-013.jpg",
        "name": "Atlanta Rd : Pat Mell Rd"
    }]
}, {
    "coord": [33.606936, -84.295208],
    "cams": [{
        "id": "cctv_5953",
        "stream": "/georgiavss3/gdot-cam-609.stream/playlist.m3u8",
        "name": "I-675 : S OF ELLENWOOD RD"
    }]
}, {
    "coord": [33.959948, -84.005672],
    "cams": [{
        "id": "cctv_10255",
        "url": "/georgiasnapshots/GWIN-CAM-081.jpg",
        "name": "OLD NORCROSS RD : W of SR 120"
    }]
}, {
    "coord": [34.092736, -84.255624],
    "cams": [{
        "id": "cctv_5351",
        "stream": "/georgiavss4/gdot-cam-848.stream/playlist.m3u8",
        "name": "GA 400 : N OF WINDWARD PKWY"
    }]
}, {
    "coord": [33.521554, -82.018488],
    "cams": [{
        "id": "cctv_32853",
        "url": "/georgiasnapshots/AUG-CAM-170.jpg",
        "name": "River Watch Pkwy. : River Shoals Pkwy."
    }]
}, {
    "coord": [33.979404, -84.421064],
    "cams": [{
        "id": "cctv_7330",
        "url": "/georgiasnapshots/COBB-CAM-103.jpg",
        "name": "Johnson Ferry Rd : Princeton Lake"
    }]
}, {
    "coord": [34.550368, -83.281512],
    "cams": [{
        "id": "cctv_32912",
        "url": "https://navigator-c2c.dot.ga.gov/snapshots/STEPH-CAM-002.jpg",
        "name": "SR 17 ALT : Towne Plaza/Alliance Dr"
    }]
}, {
    "coord": [34.178248, -83.913352],
    "cams": [{
        "id": "cctv_32586",
        "url": "/georgiasnapshots/HALL-CAM-006.jpg",
        "name": "I-985 NB : Spout Springs Rd"
    }]
}, {
    "coord": [34.072608, -83.917512],
    "cams": [{
        "id": "cctv_46302",
        "url": "/georgiasnapshots/GWIN-CAM-251.jpg",
        "name": "SR 124 : HAMILTON MILL RD/PKWY"
    }]
}, {
    "coord": [34.047632, -84.361136],
    "cams": [{
        "id": "cctv_6252",
        "url": "/georgiasnapshots/ROSWELL-CAM-204.jpg",
        "name": "SR 92 : Crabapple Rd"
    }]
}, {
    "coord": [32.166114, -81.447512],
    "cams": [{
        "id": "cctv_15237",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-143.jpg",
        "name": "I-16 : West of Bryan Co Weigh Station EB"
    }]
}, {
    "coord": [33.993868, -83.899064],
    "cams": [{
        "id": "cctv_10382",
        "url": "/georgiasnapshots/GWIN-CAM-208.jpg",
        "name": "DACULA RD : DACULA PARK and LIBRARY"
    }]
}, {
    "coord": [33.922648, -84.17192],
    "cams": [{
        "id": "cctv_10385",
        "url": "/georgiasnapshots/GWIN-CAM-219.jpg",
        "name": "INDIAN TRAIL LILBURN RD : OAKBROOK PKWY"
    }]
}, {
    "coord": [33.931344, -84.523304],
    "cams": [{
        "id": "cctv_13171",
        "url": "/georgiasnapshots/COBB-CAM-026.jpg",
        "name": "SR 280/South Cobb Dr : Barclay Cir"
    }]
}, {
    "coord": [33.9792, -83.984792],
    "cams": [{
        "id": "cctv_12980",
        "url": "/georgiasnapshots/GDOT-CAM-148.jpg",
        "name": "SR 316 : SR 20"
    }]
}, {
    "coord": [33.82494, -84.48888],
    "cams": [{
        "id": "cctv_13752",
        "url": "/georgiasnapshots/SMYR-CAM-001.jpg",
        "name": "SR 280/S Cobb Dr : I-285"
    }]
}, {
    "coord": [33.771396, -84.374896],
    "cams": [{
        "id": "cctv_15271",
        "url": "/georgiasnapshots/ATL-CAM-910.jpg",
        "name": "North Ave : Hunt St"
    }]
}, {
    "coord": [33.463788, -84.206952],
    "cams": [{
        "id": "cctv_13237",
        "stream": "/georgiavss4/gdot-cam-675.stream/playlist.m3u8",
        "name": "FOSTER DR : JONESBORO RD"
    }]
}, {
    "coord": [33.910844, -84.101016],
    "cams": [{
        "id": "cctv_10180",
        "url": "/georgiasnapshots/GWIN-CAM-002.jpg",
        "name": "SR 9 (US 29 Lawrenceville Hwy) : Ronald Reagan Pkwy"
    }]
}, {
    "coord": [34.050896, -84.526344],
    "cams": [{
        "id": "cctv_12898",
        "url": "/georgiasnapshots/COBB-CAM-155.jpg",
        "name": "Canton Rd : Ebenezer Rd"
    }]
}, {
    "coord": [33.889428, -84.459648],
    "cams": [{
        "id": "cctv_15606",
        "stream": "/georgiavss3/gdot-cam-458.stream/playlist.m3u8",
        "name": "I-75 : S OF I-285/COBB CLOVERLEAF"
    }]
}, {
    "coord": [33.616432, -84.450184],
    "cams": [{
        "id": "cctv_5248",
        "stream": "/georgiavss4/gdot-cam-650.stream/playlist.m3u8",
        "name": "I-285 : W OF RIVERDALE RD-CMS 243"
    }]
}, {
    "coord": [33.730156, -84.501776],
    "cams": [{
        "id": "cctv_5382",
        "stream": "/georgiavss4/gdot-cam-945.stream/playlist.m3u8",
        "name": "I-285 : N OF CASCADE RD"
    }]
}, {
    "coord": [33.951304, -84.24152],
    "cams": [{
        "id": "cctv_12987",
        "url": "/georgiasnapshots/GWIN-CAM-272.jpg",
        "name": "SR 140 : Holcomb Bridge Road"
    }]
}, {
    "coord": [33.897, -84.449696],
    "cams": [{
        "id": "cctv_4968",
        "stream": "/georgiavss2/gdot-cam-204.stream/playlist.m3u8",
        "name": "I-285 : 1 MI W OF PWRS FRY"
    }]
}, {
    "coord": [34.023116, -84.261584],
    "cams": [{
        "id": "cctv_16231",
        "url": "/georgiasnapshots/COJC-CAM-540.jpg",
        "name": "Old Alabama Rd : Timberstone Rd"
    }]
}, {
    "coord": [33.642812, -84.01452],
    "cams": [{
        "id": "cctv_15264",
        "url": "/georgiasnapshots/ROCK-CAM-108.jpg",
        "name": "SR 138 / McDonough Rd : Flat Shoals Rd"
    }]
}, {
    "coord": [34.032096, -84.049656],
    "cams": [{
        "id": "cctv_46322",
        "url": "/georgiasnapshots/GWIN-CAM-331.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : SAWMILL RD"
    }]
}, {
    "coord": [34.894852, -84.260528],
    "cams": [{
        "id": "cctv_16106",
        "url": "/georgiasnapshots/GDOT-CAM-SR515-8.10.jpg",
        "name": "SR 515 : SR 60"
    }]
}, {
    "coord": [33.576428, -84.338672],
    "cams": [{
        "id": "cctv_6805",
        "stream": "/georgiavss4/gdot-cam-704.stream/playlist.m3u8",
        "name": "I-75 : S OF SR 54"
    }]
}, {
    "coord": [34.054696, -84.27528],
    "cams": [{
        "id": "cctv_9080",
        "url": "/georgiasnapshots/ALPH-CAM-014b.jpg",
        "name": "North Point Pkwy : Kimball Bridge Rd"
    }]
}, {
    "coord": [33.58598, -84.512104],
    "cams": [{
        "id": "cctv_4948",
        "stream": "/georgiavss2/gdot-cam-186.stream/playlist.m3u8",
        "name": "I-85 : N OF FLAT SHOALS RD"
    }]
}, {
    "coord": [33.61234, -84.299584],
    "cams": [{
        "id": "cctv_10502",
        "url": "/georgiasnapshots/CLAY-CAM-207.jpg",
        "name": "Forest Pkwy : Quiktrip Way"
    }]
}, {
    "coord": [33.9173, -84.1994],
    "cams": [{
        "id": "cctv_4919",
        "stream": "/georgiavss2/gdot-cam-101.stream/playlist.m3u8",
        "name": "I-85 : S OF CENTER WAY"
    }]
}, {
    "coord": [33.94696, -84.407664],
    "cams": [{
        "id": "cctv_7343",
        "url": "/georgiasnapshots/COBB-CAM-301.jpg",
        "name": "Johnson Ferry Rd : Columns Dr"
    }]
}, {
    "coord": [33.618064, -84.433624],
    "cams": [{
        "id": "cctv_5249",
        "stream": "/georgiavss4/gdot-cam-651.stream/playlist.m3u8",
        "name": "I-285 : E OF RIVERDALE RD-CMS 244"
    }]
}, {
    "coord": [34.162768, -84.116992],
    "cams": [{
        "id": "cctv_13257",
        "stream": "/georgiavss1/fors-cam-005.stream/playlist.m3u8",
        "name": "SR 20 (Buford Hwy) : Samples Rd / Trammel Rd"
    }]
}, {
    "coord": [33.47649, -82.01292],
    "cams": [{
        "id": "cctv_32900",
        "url": "/georgiasnapshots/AUG-CAM-210.jpg",
        "name": "Walton Way : Milledge Rd."
    }]
}, {
    "coord": [33.94636, -83.75476],
    "cams": [{
        "id": "cctv_32550",
        "url": "/georgiasnapshots/BARR-CAM-009.jpg",
        "name": "SR 316 : SR 81"
    }]
}, {
    "coord": [33.669716, -84.044112],
    "cams": [{
        "id": "cctv_15273",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-079.jpg",
        "name": "I-20 : Milepost 079"
    }]
}, {
    "coord": [33.903724, -84.273048],
    "cams": [{
        "id": "cctv_13584",
        "stream": "/georgiavss1/dek-cam-229.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : I-285 WB Ramp"
    }]
}, {
    "coord": [34.022836, -84.19668],
    "cams": [{
        "id": "cctv_6323",
        "url": "/georgiasnapshots/COJC-CAM-450.jpg",
        "name": "State Bridge Rd : Johns Creek HS"
    }]
}, {
    "coord": [34.252516, -84.091552],
    "cams": [{
        "id": "cctv_32562",
        "url": "http://navigator-csc.dot.ga.gov/snapshots/FORS-CAM-029.jpg",
        "name": "SR 306 : SR 400 SB"
    }]
}, {
    "coord": [32.161304, -81.904008],
    "cams": [{
        "id": "cctv_46251",
        "url": "/georgiasnapshots/EVA-CAM-001.jpg",
        "name": "SR 73 (North Duval Street) : SR 30 (West Main Street)"
    }]
}, {
    "coord": [33.91642, -84.539456],
    "cams": [{
        "id": "cctv_9182",
        "url": "/georgiasnapshots/COBB-CAM-328.jpg",
        "name": "Atlanta Rd : Old Concord Rd"
    }]
}, {
    "coord": [34.247884, -83.8336],
    "cams": [{
        "id": "cctv_13128",
        "url": "/georgiasnapshots/GDOT-CAM-I-985-018.jpg",
        "name": "I-985 : N OF ELACHEE DR (CMS 9853)"
    }]
}, {
    "coord": [33.697668, -84.48068],
    "cams": [{
        "id": "cctv_5190",
        "stream": "/georgiavss2/gdot-cam-050.stream/playlist.m3u8",
        "name": "SR 166 : MAXELL DR"
    }]
}, {
    "coord": [32.487384, -82.934608],
    "cams": [{
        "id": "cctv_13195",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-051.jpg",
        "name": "I-16 : US 441"
    }]
}, {
    "coord": [33.95028, -84.516608],
    "cams": [{
        "id": "cctv_15552",
        "stream": "/georgiavss3/gdot-cam-484.stream/playlist.m3u8",
        "name": "I-75 : SR 120/ROSWELL RD"
    }]
}, {
    "coord": [34.09432, -84.278784],
    "cams": [{
        "id": "cctv_9078",
        "stream": "/georgiavss1/alph-cam-013.stream/playlist.m3u8",
        "name": "SR 9 : Windward Pkwy"
    }]
}, {
    "coord": [33.5648, -84.371496],
    "cams": [{
        "id": "cctv_10519",
        "url": "/georgiasnapshots/CLAY-CAM-C603.jpg",
        "name": "SR 3 / Tara Blvd : Near Sherwood Dr"
    }]
}, {
    "coord": [34.041816, -83.990784],
    "cams": [{
        "id": "cctv_10319",
        "url": "/georgiasnapshots/GWIN-CAM-145.jpg",
        "name": "SR 20 : Gwinnett Braves"
    }]
}, {
    "coord": [34.237996, -84.463608],
    "cams": [{
        "id": "cctv_13555",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-13.jpg",
        "name": "SR 20 : I-575"
    }]
}, {
    "coord": [33.949092, -84.235568],
    "cams": [{
        "id": "cctv_5235",
        "stream": "/georgiavss3/gdot-cam-592.stream/playlist.m3u8",
        "name": "SR 141 : S of Holcomb Bridge Rd"
    }]
}, {
    "coord": [33.68606, -85.261528],
    "cams": [{
        "id": "cctv_16145",
        "url": "/georgiasnapshots/GDOT-CAM-SR100-1.9.jpg",
        "name": "SR 100 : 1-20 WB (EXIT 5)"
    }]
}, {
    "coord": [33.448966, -84.4504],
    "cams": [{
        "id": "cctv_10173",
        "stream": "/georgiavss1/fay-cam-011.stream/playlist.m3u8",
        "name": "SR 54/Lanier Ave : Jeff Davis Dr"
    }]
}, {
    "coord": [33.839864, -84.313616],
    "cams": [{
        "id": "cctv_12953",
        "stream": "/georgiavss1/dek-cam-616.stream/playlist.m3u8",
        "name": "SR 155 / Clairmont Rd : I-85 NB Ramp"
    }]
}, {
    "coord": [33.848276, -84.37368],
    "cams": [{
        "id": "cctv_6304",
        "stream": "/georgiavss1/atl-cam-015.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Lenox Rd"
    }]
}, {
    "coord": [34.0091, -84.559896],
    "cams": [{
        "id": "cctv_5192",
        "stream": "/georgiavss3/gdot-cam-501.stream/playlist.m3u8",
        "name": "I-575 : S OF BARRETT PKWY"
    }]
}, {
    "coord": [33.746324, -84.431128],
    "cams": [{
        "id": "cctv_5075",
        "stream": "/georgiavss3/gdot-cam-338.stream/playlist.m3u8",
        "name": "I-20 : W OF LANGHORN ST"
    }]
}, {
    "coord": [33.9485, -84.138296],
    "cams": [{
        "id": "cctv_4927",
        "stream": "/georgiavss2/gdot-cam-109.stream/playlist.m3u8",
        "name": "I-85 : STEVE REYNOLDS"
    }]
}, {
    "coord": [32.580028, -83.719592],
    "cams": [{
        "id": "cctv_16190",
        "url": "/georgiasnapshots/GDOT-CAM-SR11-21.2.jpg",
        "name": "SR 11/ US 41 : Russell Pky"
    }]
}, {
    "coord": [33.67552, -84.442848],
    "cams": [{
        "id": "cctv_46441",
        "url": "/georgiasnapshots/FULT-CAM-018.jpg",
        "name": "GA 3/US 41/ N. Main St : Washington Rd/ Legion Way"
    }]
}, {
    "coord": [34.034236, -84.348056],
    "cams": [{
        "id": "cctv_9033",
        "url": "/georgiasnapshots/ROSWELL-CAM-316.jpg",
        "name": "SR 9 : Alpine Dr"
    }]
}, {
    "coord": [34.037072, -84.562008],
    "cams": [{
        "id": "cctv_15525",
        "stream": "/georgiavss3/gdot-cam-541.stream/playlist.m3u8",
        "name": "I-575 : CHASTAIN RD"
    }]
}, {
    "coord": [33.920612, -84.339112],
    "cams": [{
        "id": "cctv_32618",
        "url": "/georgiasnapshots/DUN-CAM-113.jpg",
        "name": "Ashford Dunwoody Rd : Hammond Dr"
    }]
}, {
    "coord": [34.05218, -84.219536],
    "cams": [{
        "id": "cctv_16241",
        "url": "/georgiasnapshots/COJC-CAM-630.jpg",
        "name": "Jones Bridge Rd : Taylor Rd"
    }]
}, {
    "coord": [33.717692, -84.237928],
    "cams": [{
        "id": "cctv_5029",
        "stream": "/georgiavss2/gdot-cam-262.stream/playlist.m3u8",
        "name": "I-285 : I-20 ENT RAMP"
    }]
}, {
    "coord": [33.961744, -84.109832],
    "cams": [{
        "id": "cctv_5420",
        "stream": "/georgiavss2/gdot-cam-123.stream/playlist.m3u8",
        "name": "I-85 : S OF SR316"
    }]
}, {
    "coord": [33.969, -84.526496],
    "cams": [{
        "id": "cctv_5141",
        "stream": "/georgiavss3/gdot-cam-415.stream/playlist.m3u8",
        "name": "I-75 : S OF ALLGOOD RD"
    }]
}, {
    "coord": [32.43127, -84.925952],
    "cams": [{
        "id": "cctv_9184",
        "url": "/georgiasnapshots/COLU-CAM-305.jpg",
        "name": "I-185 : MILE 1.9"
    }]
}, {
    "coord": [32.68995, -83.681712],
    "cams": [{
        "id": "cctv_46390",
        "url": "/georgiasnapshots/BIBB-CAM-542.jpg",
        "name": "US 41/SR 49 : Industrial Hwy Conn."
    }]
}, {
    "coord": [34.079936, -84.640008],
    "cams": [{
        "id": "cctv_5181",
        "stream": "/georgiavss3/gdot-cam-451.stream/playlist.m3u8",
        "name": "I-75 : S OF PRIEST RD"
    }]
}, {
    "coord": [34.02434, -84.367176],
    "cams": [{
        "id": "cctv_13156",
        "url": "/georgiasnapshots/ROSWELL-CAM-414.jpg",
        "name": "Pine Grove : Coleman Rd"
    }]
}, {
    "coord": [33.804528, -84.078152],
    "cams": [{
        "id": "cctv_10362",
        "url": "/georgiasnapshots/GWIN-CAM-188.jpg",
        "name": "ANNISTOWN RD : W of JUHAN RD / W of SPAIN RD"
    }]
}, {
    "coord": [32.724816, -83.72636],
    "cams": [{
        "id": "cctv_6841",
        "url": "/georgiasnapshots/BIBB-CAM-105.jpg",
        "name": "I-75 : 1/2 MI N OF SARDIS CHURCH RD"
    }]
}, {
    "coord": [33.818416, -84.576168],
    "cams": [{
        "id": "cctv_9179",
        "url": "/georgiasnapshots/COBB-CAM-232.jpg",
        "name": "SR 8 (Veterans Memorial Hwy) : SR 139 (Floyd Road / Mableton Parkway)"
    }]
}, {
    "coord": [33.746976, -84.392688],
    "cams": [{
        "id": "cctv_16253",
        "url": "/georgiasnapshots/ATL-CAM-986.jpg",
        "name": "Memorial Dr : Central Ave"
    }]
}, {
    "coord": [33.794692, -84.391088],
    "cams": [{
        "id": "cctv_6758",
        "stream": "/georgiavss3/gdot-cam-582.stream/playlist.m3u8",
        "name": "I-75 : AT BROOKWOOD CURVE"
    }]
}, {
    "coord": [34.79712, -84.96284],
    "cams": [{
        "id": "cctv_16118",
        "url": "/georgiasnapshots/GDOT-CAM-SR3-18.15.jpg",
        "name": "SR 3/DALTON BYPASS : SR 71"
    }]
}, {
    "coord": [32.052372, -81.103544],
    "cams": [{
        "id": "cctv_15739",
        "url": "/georgiasnapshots/SAV-CAM-018.jpg",
        "name": "SR 26/VICTORY DR : WHITAKER ST"
    }]
}, {
    "coord": [33.53397, -84.261584],
    "cams": [{
        "id": "cctv_5286",
        "stream": "/georgiavss4/gdot-cam-714.stream/playlist.m3u8",
        "name": "I-75 : S OF I-675"
    }]
}, {
    "coord": [31.201668, -81.483904],
    "cams": [{
        "id": "cctv_46551",
        "url": "/georgiasnapshots/GLY-CAM-008.jpg",
        "name": "SR 25 Spur : Altama Ave"
    }]
}, {
    "coord": [33.77822, -84.045208],
    "cams": [{
        "id": "cctv_10332",
        "url": "/georgiasnapshots/GWIN-CAM-158.jpg",
        "name": "SR 124 : N of TELIDA TR / N of NORRIS LAKE RD"
    }]
}, {
    "coord": [33.747072, -84.29208],
    "cams": [{
        "id": "cctv_13223",
        "stream": "/georgiavss1/atl-cam-155.stream/playlist.m3u8",
        "name": "SR 154 (Memorial Drive) : SR 155 (Candler Rd)"
    }]
}, {
    "coord": [33.976872, -83.996232],
    "cams": [{
        "id": "cctv_12979",
        "url": "/georgiasnapshots/GDOT-CAM-147.jpg",
        "name": "SR 316 : COLLINS HILL RD"
    }]
}, {
    "coord": [33.767476, -84.494976],
    "cams": [{
        "id": "cctv_5388",
        "stream": "/georgiavss4/gdot-cam-951.stream/playlist.m3u8",
        "name": "I-285 : N OF I-20 (FULTON)"
    }]
}, {
    "coord": [33.71446, -84.241832],
    "cams": [{
        "id": "cctv_5115",
        "stream": "/georgiavss3/gdot-cam-374.stream/playlist.m3u8",
        "name": "I-20 : I-285 (DEKALB)"
    }]
}, {
    "coord": [34.254196, -83.4634],
    "cams": [{
        "id": "cctv_13065",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-149.jpg",
        "name": "I-85 : SR 15 / US 441"
    }]
}, {
    "coord": [34.011308, -84.199744],
    "cams": [{
        "id": "cctv_16236",
        "url": "/georgiasnapshots/COJC-CAM-565.jpg",
        "name": "Old Alabama Rd : Buice Rd"
    }]
}, {
    "coord": [33.935248, -84.21604],
    "cams": [{
        "id": "cctv_10294",
        "url": "/georgiasnapshots/GWIN-CAM-120.jpg",
        "name": "SR 13 / US 23 : N NORCROSS-TUCKER RD"
    }]
}, {
    "coord": [33.831516, -84.385456],
    "cams": [{
        "id": "cctv_7223",
        "stream": "/georgiavss1/atl-cam-006.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd : Rumson Rd"
    }]
}, {
    "coord": [34.032516, -84.577104],
    "cams": [{
        "id": "cctv_15510",
        "stream": "/georgiavss3/gdot-cam-523.stream/playlist.m3u8",
        "name": "I-75 : CHASTAIN RD"
    }]
}, {
    "coord": [33.54578, -83.206536],
    "cams": [{
        "id": "cctv_13074",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-130.jpg",
        "name": "I-20 : SR 44 / LAKE OCONEE PKWY"
    }]
}, {
    "coord": [33.846692, -84.247352],
    "cams": [{
        "id": "cctv_5009",
        "stream": "/georgiavss2/gdot-cam-241.stream/playlist.m3u8",
        "name": "I-285 : LAVISTA RD"
    }]
}, {
    "coord": [33.844984, -84.364264],
    "cams": [{
        "id": "cctv_12958",
        "stream": "/georgiavss4/gdot-cam-811.stream/playlist.m3u8",
        "name": "GA 400 : SOUTH OF TUNNEL"
    }]
}, {
    "coord": [31.15451, -83.446376],
    "cams": [{
        "id": "cctv_13599",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-040.jpg",
        "name": "I-75 : S of Rountree Br Rd / CMS-922"
    }]
}, {
    "coord": [33.422752, -82.060752],
    "cams": [{
        "id": "cctv_32882",
        "url": "/georgiasnapshots/AUG-CAM-090.jpg",
        "name": "Hwy 1 : Bobby Jones Exp. (EB ramp)"
    }]
}, {
    "coord": [32.12247, -81.268216],
    "cams": [{
        "id": "cctv_46524",
        "url": "/georgiasnapshots/CHAT-CAM-005.jpg",
        "name": "SR 26 : Pooler Pkwy SB"
    }]
}, {
    "coord": [33.86928, -84.477848],
    "cams": [{
        "id": "cctv_5407",
        "stream": "/georgiavss4/gdot-cam-969.stream/playlist.m3u8",
        "name": "I-285 : EXIT TO PACES FERRY RD"
    }]
}, {
    "coord": [34.656984, -84.492112],
    "cams": [{
        "id": "cctv_16101",
        "url": "/georgiasnapshots/GDOT-CAM-SR515-7.9.jpg",
        "name": "SR 515 : HIGHLAND PKWY/ELLER RD"
    }]
}, {
    "coord": [33.577648, -84.277768],
    "cams": [{
        "id": "cctv_5949",
        "stream": "/georgiavss3/gdot-cam-605.stream/playlist.m3u8",
        "name": "I-675 : SR 42"
    }]
}, {
    "coord": [34.062476, -84.158888],
    "cams": [{
        "id": "cctv_32968",
        "url": "/georgiasnapshots/COJC-CAM-740.jpg",
        "name": "McGinnis Ferry Road : Lakefield Drive"
    }]
}, {
    "coord": [32.027482, -81.00012],
    "cams": [{
        "id": "cctv_15813",
        "url": "/georgiasnapshots/SAV-CAM-030.jpg",
        "name": "JOHNNY MERCER BLVD : BRYAN WOODS RD"
    }]
}, {
    "coord": [34.37756, -84.912144],
    "cams": [{
        "id": "cctv_10148",
        "url": "/georgiasnapshots/GDOT-CAM-WTHR-024.jpg",
        "name": "I-75 : SR 140"
    }]
}, {
    "coord": [33.57972, -84.554704],
    "cams": [{
        "id": "cctv_46446",
        "url": "/georgiasnapshots/FULT-CAM-023.jpg",
        "name": "GA 14/ US 29/ Roosevelt Hwy : Gresham St"
    }]
}, {
    "coord": [33.5088, -84.3566],
    "cams": [{
        "id": "cctv_10497",
        "url": "/georgiasnapshots/CLAY-CAM-191.jpg",
        "name": "SR 3 / Tara Blvd : Justice Complex"
    }]
}, {
    "coord": [34.175124, -84.758808],
    "cams": [{
        "id": "cctv_9305",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-288.jpg",
        "name": "I-75 : SR 113 / MAIN ST"
    }]
}, {
    "coord": [33.965788, -84.008304],
    "cams": [{
        "id": "cctv_10270",
        "url": "/georgiasnapshots/GWIN-CAM-096.jpg",
        "name": "SR 120 : HURRICANE SHOALS RD"
    }]
}, {
    "coord": [31.5064, -82.849552],
    "cams": [{
        "id": "cctv_46341",
        "url": "/georgiasnapshots/COFF-CAM-005.jpg",
        "name": "SR 31 : BRYAN ST"
    }]
}, {
    "coord": [33.429874, -84.18484],
    "cams": [{
        "id": "cctv_13232",
        "stream": "/georgiavss4/gdot-cam-755.stream/playlist.m3u8",
        "name": "I-75 : AT SR 20/81"
    }]
}, {
    "coord": [33.512124, -82.502992],
    "cams": [{
        "id": "cctv_13329",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-172.jpg",
        "name": "I-20 : Washington Rd"
    }]
}, {
    "coord": [32.705742, -83.733952],
    "cams": [{
        "id": "cctv_6845",
        "url": "/georgiasnapshots/BIBB-CAM-102.jpg",
        "name": "I-75 : 3/4 MI S OF SARDIS CHURCH RD"
    }]
}, {
    "coord": [34.008632, -84.360064],
    "cams": [{
        "id": "cctv_9027",
        "url": "/georgiasnapshots/ROSWELL-CAM-304.jpg",
        "name": "SR 9 : Jones Dr"
    }]
}, {
    "coord": [33.921568, -84.084696],
    "cams": [{
        "id": "cctv_10179",
        "url": "/georgiasnapshots/GWIN-CAM-001.jpg",
        "name": "SR 9 (US 29 Lawrenceville Hwy) : Bethesda School Rd / Bethesda Church Rd"
    }]
}, {
    "coord": [33.75866, -84.23228],
    "cams": [{
        "id": "cctv_5022",
        "stream": "/georgiavss2/gdot-cam-255.stream/playlist.m3u8",
        "name": "I-285 : N OF COVINGTON HWY"
    }]
}, {
    "coord": [34.0502, -84.560696],
    "cams": [{
        "id": "cctv_5199",
        "stream": "/georgiavss3/gdot-cam-508.stream/playlist.m3u8",
        "name": "I-575 : S OF BELLS FERRY RD"
    }]
}, {
    "coord": [33.621472, -84.427728],
    "cams": [{
        "id": "cctv_5259",
        "stream": "/georgiavss4/gdot-cam-660.stream/playlist.m3u8",
        "name": "I-285 : MAIN LANES NO. 4"
    }]
}, {
    "coord": [31.831432, -81.614104],
    "cams": [{
        "id": "cctv_46555",
        "url": "/georgiasnapshots/LIB-CAM-007.jpg",
        "name": "SR 119 : SR 196/ Veterans Pkwy"
    }]
}, {
    "coord": [34.066416, -84.162888],
    "cams": [{
        "id": "cctv_16263",
        "url": "/georgiasnapshots/COJC-CAM-725.jpg",
        "name": "McGinnis Ferry Rd : Johns Creek Pkwy E"
    }]
}, {
    "coord": [33.821756, -84.493656],
    "cams": [{
        "id": "cctv_5398",
        "stream": "/georgiavss4/gdot-cam-960.stream/playlist.m3u8",
        "name": "I-285 : S OF S COBB DR"
    }]
}, {
    "coord": [34.059028, -84.541792],
    "cams": [{
        "id": "cctv_15726",
        "stream": "/georgiavss3/gdot-cam-546.stream/playlist.m3u8",
        "name": "I-575 : S OF SHALLOWFORD RD"
    }]
}, {
    "coord": [34.064864, -84.606432],
    "cams": [{
        "id": "cctv_15534",
        "stream": "/georgiavss4/gdot-cam-698.stream/playlist.m3u8",
        "name": "HICKORY GROVE RD : E OF I-75 ON/OFF EXP RAMP"
    }]
}, {
    "coord": [33.634388, -83.977688],
    "cams": [{
        "id": "cctv_13325",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-084.jpg",
        "name": "I-20 : SR 162 / Salem Road"
    }]
}, {
    "coord": [33.548374, -84.26852],
    "cams": [{
        "id": "cctv_13216",
        "stream": "/georgiavss4/gdot-cam-773.stream/playlist.m3u8",
        "name": "I-675 : EXPRESS LN ENTR/EXIT"
    }]
}, {
    "coord": [34.869744, -85.516728],
    "cams": [{
        "id": "cctv_46486",
        "url": "/georgiasnapshots/DADE-CAM-002.jpg",
        "name": "I-59 SB exit 11 (Ramp) : SR 136"
    }]
}, {
    "coord": [33.838576, -84.494944],
    "cams": [{
        "id": "cctv_13754",
        "url": "/georgiasnapshots/SMYR-CAM-003.jpg",
        "name": "SR 280/S Cobb Dr : Wright Rd/S Cobb Ind Blvd"
    }]
}, {
    "coord": [34.017608, -84.570568],
    "cams": [{
        "id": "cctv_5158",
        "stream": "/georgiavss3/gdot-cam-430.stream/playlist.m3u8",
        "name": "I-75 : BARRETT PKWY EXIT"
    }]
}, {
    "coord": [33.5834, -84.3392],
    "cams": [{
        "id": "cctv_10454",
        "url": "/georgiasnapshots/CLAY-CAM-048.jpg",
        "name": "SR 54 : Lake Harbin Rd"
    }]
}, {
    "coord": [34.027592, -84.568752],
    "cams": [{
        "id": "cctv_15488",
        "stream": "/georgiavss4/gdot-cam-692.stream/playlist.m3u8",
        "name": "BIG SHANTY RD : GEORGE BUSBEE PKY"
    }]
}, {
    "coord": [31.6231, -84.17696],
    "cams": [{
        "id": "cctv_46358",
        "url": "/georgiasnapshots/LEE-CAM-004.jpg",
        "name": "SR 3/US 19 : LEDO RD"
    }]
}, {
    "coord": [34.08882, -84.260744],
    "cams": [{
        "id": "cctv_9071",
        "url": "/georgiasnapshots/ALPH-CAM-007b.jpg",
        "name": "Windward Pkwy : GA 400 NB"
    }]
}, {
    "coord": [33.83786, -84.237728],
    "cams": [{
        "id": "cctv_13316",
        "url": "/georgiasnapshots/DEK-CAM-020.jpg",
        "name": "SR 8 (Lawrenceville Hwy) : Northlake Pkwy / Cooledge Rd"
    }]
}, {
    "coord": [31.990736, -81.22696],
    "cams": [{
        "id": "cctv_46535",
        "url": "/georgiasnapshots/CHAT-CAM-016.jpg",
        "name": "SR 204 : Pine Grove Dr"
    }]
}, {
    "coord": [33.678408, -85.3206],
    "cams": [{
        "id": "cctv_9292",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-001.jpg",
        "name": "I-20 : GA Welcome Center"
    }]
}, {
    "coord": [33.9058, -84.4322],
    "cams": [{
        "id": "cctv_4970",
        "stream": "/georgiavss2/gdot-cam-206.stream/playlist.m3u8",
        "name": "I-285 : NORTHSIDE DR"
    }]
}, {
    "coord": [33.940976, -84.166192],
    "cams": [{
        "id": "cctv_10279",
        "url": "/georgiasnapshots/GWIN-CAM-105.jpg",
        "name": "SATELLITE BLVD : N of POND RD"
    }]
}, {
    "coord": [33.94908, -84.082424],
    "cams": [{
        "id": "cctv_10263",
        "url": "/georgiasnapshots/GWIN-CAM-089.jpg",
        "name": "OLD NORCROSS RD : HERRINGTON RD"
    }]
}, {
    "coord": [33.5771, -84.282096],
    "cams": [{
        "id": "cctv_10482",
        "url": "/georgiasnapshots/CLAY-CAM-132.jpg",
        "name": "SR 42 : Dale Rd / Evans Dr"
    }]
}, {
    "coord": [33.450134, -82.07552],
    "cams": [{
        "id": "cctv_32874",
        "url": "/georgiasnapshots/AUG-CAM-060.jpg",
        "name": "Gordon Hwy : Bobby Jones Exp (EB ramp)"
    }]
}, {
    "coord": [33.64382, -84.31464],
    "cams": [{
        "id": "cctv_5958",
        "stream": "/georgiavss4/gdot-cam-614.stream/playlist.m3u8",
        "name": "I-675 : GRANT RD"
    }]
}, {
    "coord": [33.828972, -84.407536],
    "cams": [{
        "id": "cctv_46411",
        "stream": "/georgiavss1/atl-cam-097.stream/playlist.m3u8",
        "name": "SR 3 / Northside Dr : W Wesley Rd"
    }]
}, {
    "coord": [32.906724, -83.69324],
    "cams": [{
        "id": "cctv_5996",
        "url": "/georgiasnapshots/BIBB-CAM-534.jpg",
        "name": "RIVERSIDE DR : S OF SUE DR"
    }]
}, {
    "coord": [33.617784, -84.456032],
    "cams": [{
        "id": "cctv_5583",
        "stream": "/georgiavss4/gdot-cam-646.stream/playlist.m3u8",
        "name": "I-285 : NEAR RAMP FROM I-85 S"
    }]
}, {
    "coord": [31.705924, -83.653408],
    "cams": [{
        "id": "cctv_46380",
        "url": "/georgiasnapshots/TURN-CAM-001.jpg",
        "name": "SR7/US41 : SR112"
    }]
}, {
    "coord": [33.55077, -84.567544],
    "cams": [{
        "id": "cctv_4939",
        "stream": "/georgiavss2/gdot-cam-178.stream/playlist.m3u8",
        "name": "I-85 : N OF SPENCE RD"
    }]
}, {
    "coord": [33.946004, -84.333952],
    "cams": [{
        "id": "cctv_32667",
        "url": "/georgiasnapshots/DUN-CAM-152.jpg",
        "name": "Chamblee Dunwoody Rd : Mt Vernon Rd"
    }]
}, {
    "coord": [34.070964, -84.293672],
    "cams": [{
        "id": "cctv_13573",
        "stream": "/georgiavss1/alph-cam-021.stream/playlist.m3u8",
        "name": "SR 120 (Old Milton Pkwy) : Haynes Bridge Rd"
    }]
}, {
    "coord": [34.601736, -83.76536],
    "cams": [{
        "id": "cctv_46224",
        "url": "/georgiasnapshots/WHITE-CAM-002.jpg",
        "name": "SR 11 BUS : SR 115"
    }]
}, {
    "coord": [33.77366, -84.363808],
    "cams": [{
        "id": "cctv_7196",
        "stream": "/georgiavss1/atl-cam-209.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : Ponce De Leon Place"
    }]
}, {
    "coord": [33.60572, -84.485464],
    "cams": [{
        "id": "cctv_4951",
        "stream": "/georgiavss2/gdot-cam-189.stream/playlist.m3u8",
        "name": "I-85 : S OF I-285"
    }]
}, {
    "coord": [31.529236, -84.115552],
    "cams": [{
        "id": "cctv_46351",
        "url": "/georgiasnapshots/DOUG-CAM-094.jpg",
        "name": "SR 3 : HOLLY DR"
    }]
}, {
    "coord": [33.411994, -84.161616],
    "cams": [{
        "id": "cctv_13343",
        "stream": "/georgiavss4/gdot-cam-761.stream/playlist.m3u8",
        "name": "I-75 : AT SR 155"
    }]
}, {
    "coord": [33.997824, -84.529008],
    "cams": [{
        "id": "cctv_12915",
        "url": "/georgiasnapshots/COBB-CAM-221.jpg",
        "name": "Sandy Plains Rd : Canton Rd Connector"
    }]
}, {
    "coord": [33.979264, -84.461536],
    "cams": [{
        "id": "cctv_13131",
        "url": "/georgiasnapshots/COBB-CAM-161.jpg",
        "name": "SR 120 / Roswell Rd : Old Canton Rd"
    }]
}, {
    "coord": [33.966648, -84.411792],
    "cams": [{
        "id": "cctv_7328",
        "url": "/georgiasnapshots/COBB-CAM-101.jpg",
        "name": "Johnson Ferry Rd : Lower Roswell Rd"
    }]
}, {
    "coord": [34.0239, -84.5714],
    "cams": [{
        "id": "cctv_5161",
        "stream": "/georgiavss3/gdot-cam-433.stream/playlist.m3u8",
        "name": "I-75 : S OF BIG SHANTY"
    }]
}, {
    "coord": [33.55104, -84.289784],
    "cams": [{
        "id": "cctv_13248",
        "stream": "/georgiavss4/gdot-cam-727.stream/playlist.m3u8",
        "name": "I-75 : N OF SR 138"
    }]
}, {
    "coord": [33.6994, -84.44208],
    "cams": [{
        "id": "cctv_5212",
        "stream": "/georgiavss2/gdot-cam-055.stream/playlist.m3u8",
        "name": "SR 166 : E OF STANTON RD"
    }]
}, {
    "coord": [30.841034, -83.984792],
    "cams": [{
        "id": "cctv_46367",
        "url": "/georgiasnapshots/THOM-CAM-004.jpg",
        "name": "SR 38BU : MADISON ST"
    }]
}, {
    "coord": [33.743816, -84.218616],
    "cams": [{
        "id": "cctv_15228",
        "stream": "/georgiavss1/dek-cam-032.stream/playlist.m3u8",
        "name": "SR 12 (Covington Hwy) : Mercer Rd"
    }]
}, {
    "coord": [34.052684, -84.174816],
    "cams": [{
        "id": "cctv_6313",
        "url": "/georgiasnapshots/COJC-CAM-235.jpg",
        "name": "SR 141 (Medlock Bridge Rd) : Bell Rd / Johns Creek Commons"
    }]
}, {
    "coord": [33.07087, -84.929176],
    "cams": [{
        "id": "cctv_13570",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-021.jpg",
        "name": "I-85 : EXIT TO I-185 SB / CMS 914"
    }]
}, {
    "coord": [33.450474, -82.071752],
    "cams": [{
        "id": "cctv_32873",
        "url": "/georgiasnapshots/AUG-CAM-061.jpg",
        "name": "Gordon Hwy : Bobby Jones Exp (WB ramp)"
    }]
}, {
    "coord": [33.9027, -84.67268],
    "cams": [{
        "id": "cctv_9163",
        "url": "/georgiasnapshots/COBB-CAM-112.jpg",
        "name": "SR 360/Macland Rd : Lost Mountain/New Macland Rd"
    }]
}, {
    "coord": [34.047544, -84.60032],
    "cams": [{
        "id": "cctv_16321",
        "url": "/georgiasnapshots/COBB-CAM-307.jpg",
        "name": "Cherokee St/Wade Green Rd : Jiles Rd"
    }]
}, {
    "coord": [34.244936, -85.16636],
    "cams": [{
        "id": "cctv_15372",
        "url": "/georgiasnapshots/FLYD-CAM-002.jpg",
        "name": "SR 101 : Riverbend Drive"
    }]
}, {
    "coord": [33.796852, -84.36896],
    "cams": [{
        "id": "cctv_7214",
        "stream": "/georgiavss1/atl-cam-027.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Monroe Dr"
    }]
}, {
    "coord": [34.0389, -84.311896],
    "cams": [{
        "id": "cctv_5343",
        "stream": "/georgiavss4/gdot-cam-839.stream/playlist.m3u8",
        "name": "GA 400 : MANSELL RD"
    }]
}, {
    "coord": [33.866212, -84.478528],
    "cams": [{
        "id": "cctv_15243",
        "stream": "/georgiavss4/gdot-cam-620.stream/playlist.m3u8",
        "name": "I-285 : PACES FERRY"
    }]
}, {
    "coord": [33.69432, -84.500408],
    "cams": [{
        "id": "cctv_5377",
        "stream": "/georgiavss4/gdot-cam-940.stream/playlist.m3u8",
        "name": "I-285 : N OF LANGFORD PKWY"
    }]
}, {
    "coord": [33.8655, -84.476704],
    "cams": [{
        "id": "cctv_32592",
        "url": "c2c.dot.ga.gov/snapshots/COBB-CAM-145.jpg",
        "name": "Cumberland Pkwy : Paces Ferry"
    }]
}, {
    "coord": [32.506668, -84.949824],
    "cams": [{
        "id": "cctv_13208",
        "url": "/georgiasnapshots/GDOT-CAM-I-185-007.jpg",
        "name": "I-185 : SR 85/MANCHESTER EXPY"
    }]
}, {
    "coord": [33.936336, -84.495792],
    "cams": [{
        "id": "cctv_5130",
        "stream": "/georgiavss3/gdot-cam-406.stream/playlist.m3u8",
        "name": "I-75 : EXIT TO S 120 LOOP"
    }]
}, {
    "coord": [33.679644, -84.441792],
    "cams": [{
        "id": "cctv_46432",
        "url": "/georgiasnapshots/FULT-CAM-013.jpg",
        "name": "Ga14/ US 29/ N Main : W. Cleveland/ Marta Entrance"
    }]
}, {
    "coord": [32.069802, -81.160824],
    "cams": [{
        "id": "cctv_15730",
        "url": "/georgiasnapshots/SAV-CAM-012.jpg",
        "name": "CHATHAM PARKWAY : I-16 EB"
    }]
}, {
    "coord": [33.6142, -84.349504],
    "cams": [{
        "id": "cctv_10456",
        "url": "/georgiasnapshots/CLAY-CAM-052.jpg",
        "name": "SR 54 / Jonesboro Rd : SR 331 / Forest Pkwy"
    }]
}, {
    "coord": [33.7064, -84.248976],
    "cams": [{
        "id": "cctv_5030",
        "stream": "/georgiavss2/gdot-cam-263.stream/playlist.m3u8",
        "name": "I-285 : S OF I-20"
    }]
}, {
    "coord": [33.424294, -84.18392],
    "cams": [{
        "id": "cctv_6243",
        "url": "/georgiasnapshots/HNRY-CAM-912.jpg",
        "name": "SR 20 : SR 81"
    }]
}, {
    "coord": [31.202246, -81.982344],
    "cams": [{
        "id": "cctv_46229",
        "url": "/georgiasnapshots/BRAN-CAM-001.jpg",
        "name": "SR 520 : SR 23"
    }]
}, {
    "coord": [33.811892, -84.368848],
    "cams": [{
        "id": "cctv_10165",
        "stream": "/georgiavss2/gdot-cam-143.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : PIEDMONT RD / MI 2.2"
    }]
}, {
    "coord": [34.057566, -84.064593],
    "cams": [{
        "id": "cctv_10416",
        "url": "/georgiasnapshots/GCDOT-IVDS-216-PH3.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : US 23 /SR13"
    }]
}, {
    "coord": [33.406716, -82.031656],
    "cams": [{
        "id": "cctv_32889",
        "url": "/georgiasnapshots/AUG-CAM-243.jpg",
        "name": "Windsor Spring Rd. : Bobby Jones Exp.(EB ramp)"
    }]
}, {
    "coord": [34.469504, -84.460216],
    "cams": [{
        "id": "cctv_16100",
        "url": "/georgiasnapshots/PICK-CAM-002.jpg",
        "name": "SR 515 : CAMP RD EXT"
    }]
}, {
    "coord": [32.00441, -81.283144],
    "cams": [{
        "id": "cctv_13184",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-094.jpg",
        "name": "I-95 : SR 204"
    }]
}, {
    "coord": [32.469432, -83.742168],
    "cams": [{
        "id": "cctv_16191",
        "url": "/georgiasnapshots/GDOT-CAM-SR7-14.6.jpg",
        "name": "SR 7 : Hampton Court"
    }]
}, {
    "coord": [33.725292, -84.356912],
    "cams": [{
        "id": "cctv_13060",
        "url": "/georgiasnapshots/A-TEST-CAM-010.jpg",
        "name": "E. Confederate : TMC"
    }]
}, {
    "coord": [34.100276, -84.020104],
    "cams": [{
        "id": "cctv_10355",
        "url": "/georgiasnapshots/GWIN-CAM-181.jpg",
        "name": "SR 20 : Broadmoor Blvd"
    }]
}, {
    "coord": [33.808392, -84.096456],
    "cams": [{
        "id": "cctv_10361",
        "url": "/georgiasnapshots/GWIN-CAM-187.jpg",
        "name": "ANNISTOWN RD : NORTH DESHONG RD / ROCKBRIDGE RD"
    }]
}, {
    "coord": [33.954348, -84.036312],
    "cams": [{
        "id": "cctv_46300",
        "url": "/georgiasnapshots/GWIN-CAM-250.jpg",
        "name": "OLD NORCROSS RD : BRASS KEY CT / HS DRWY"
    }]
}, {
    "coord": [33.764848, -84.384944],
    "cams": [{
        "id": "cctv_4932",
        "stream": "/georgiavss2/gdot-cam-014.stream/playlist.m3u8",
        "name": "75/85 : COURTLAND ST"
    }]
}, {
    "coord": [33.751272, -84.715496],
    "cams": [{
        "id": "cctv_15404",
        "stream": "/georgiavss2/gdot-cam-303.stream/playlist.m3u8",
        "name": "I-20 : SR 92/Fairburn Rd"
    }]
}, {
    "coord": [32.75391, -83.7132],
    "cams": [{
        "id": "cctv_6849",
        "url": "/georgiasnapshots/BIBB-CAM-110.jpg",
        "name": "I-75 : MERGE FROM I-475"
    }]
}, {
    "coord": [33.903616, -84.118648],
    "cams": [{
        "id": "cctv_13297",
        "url": "/georgiasnapshots/GWIN-CAM-283.jpg",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Beaver Ruin Village SC"
    }]
}, {
    "coord": [33.964212, -84.139408],
    "cams": [{
        "id": "cctv_10328",
        "url": "/georgiasnapshots/GWIN-CAM-154.jpg",
        "name": "PLEASANT HILL RD : OLD NORCROSS RD"
    }]
}, {
    "coord": [33.957548, -83.99772],
    "cams": [{
        "id": "cctv_10411",
        "url": "/georgiasnapshots/GCDOT-IVDS-022-PH3.jpg",
        "name": "SR 120 : LANGLEY DR / DRWY(PH3)"
    }]
}, {
    "coord": [33.528248, -82.017896],
    "cams": [{
        "id": "cctv_13075",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-200.jpg",
        "name": "I-20 : GA VISITOR CTR / SC LINE"
    }]
}, {
    "coord": [34.135768, -84.206576],
    "cams": [{
        "id": "cctv_8810",
        "stream": "/georgiavss4/gdot-cam-854.stream/playlist.m3u8",
        "name": "GA 400 : NEAR SHILOH RD"
    }]
}, {
    "coord": [30.924384, -83.367992],
    "cams": [{
        "id": "cctv_15225",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-024.jpg",
        "name": "I-75 : Lowndes Co Weigh Station"
    }]
}, {
    "coord": [33.954988, -84.21948],
    "cams": [{
        "id": "cctv_10204",
        "url": "/georgiasnapshots/GWIN-CAM-030.jpg",
        "name": "PEACHTREE INDUSTRIAL BLVD : REPS MILLER RD"
    }]
}, {
    "coord": [33.939101, -84.211079],
    "cams": [{
        "id": "cctv_10421",
        "url": "/georgiasnapshots/GCDOT-IVDS-421-PH8.jpg",
        "name": "SR 13 / US 23 : CEMETERY ST"
    }]
}, {
    "coord": [34.967612, -85.192104],
    "cams": [{
        "id": "cctv_16320",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-353.4.jpg",
        "name": "I-75 : EXT 353"
    }]
}, {
    "coord": [34.418408, -83.16708],
    "cams": [{
        "id": "cctv_15165",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-170.jpg",
        "name": "I-85 : FRANKLIN CO WEIGH STATION"
    }]
}, {
    "coord": [34.088188, -84.576856],
    "cams": [{
        "id": "cctv_10168",
        "stream": "/georgiavss1/cher-cam-012.stream/playlist.m3u8",
        "name": "SR 92 / Alabama Rd : Bells Ferry Rd"
    }]
}, {
    "coord": [33.531352, -84.258184],
    "cams": [{
        "id": "cctv_13243",
        "stream": "/georgiavss4/gdot-cam-735.stream/playlist.m3u8",
        "name": "I-75 : N OF WALT STEPHENS"
    }]
}, {
    "coord": [33.9439, -84.1478],
    "cams": [{
        "id": "cctv_4926",
        "stream": "/georgiavss2/gdot-cam-108.stream/playlist.m3u8",
        "name": "I-85 : S OF STEVE REYNOLDS"
    }]
}, {
    "coord": [33.662756, -84.497008],
    "cams": [{
        "id": "cctv_5372",
        "stream": "/georgiavss4/gdot-cam-936.stream/playlist.m3u8",
        "name": "I-285 : N OF REDWINE RD"
    }]
}, {
    "coord": [33.98782, -84.546168],
    "cams": [{
        "id": "cctv_5148",
        "stream": "/georgiavss3/gdot-cam-421.stream/playlist.m3u8",
        "name": "I-75 : N OF CANTON RD"
    }]
}, {
    "coord": [34.0492, -84.586304],
    "cams": [{
        "id": "cctv_5167",
        "stream": "/georgiavss3/gdot-cam-439.stream/playlist.m3u8",
        "name": "I-75 : S OF WADE GREEN RD"
    }]
}, {
    "coord": [33.975092, -84.344456],
    "cams": [{
        "id": "cctv_5335",
        "stream": "/georgiavss4/gdot-cam-831.stream/playlist.m3u8",
        "name": "GA 400 : S OF NORTHRIDGE"
    }]
}, {
    "coord": [33.841812, -84.30888],
    "cams": [{
        "id": "cctv_5135",
        "stream": "/georgiavss2/gdot-cam-041.stream/playlist.m3u8",
        "name": "I-85 : NEAR CLAIRMONT RD"
    }]
}, {
    "coord": [33.852732, -84.365128],
    "cams": [{
        "id": "cctv_9144",
        "stream": "/georgiavss1/atl-cam-068.stream/playlist.m3u8",
        "name": "SR 141 Conn / Lenox Rd : Phipps Blvd"
    }]
}, {
    "coord": [34.285656, -83.80612],
    "cams": [{
        "id": "cctv_13167",
        "url": "/georgiasnapshots/GDOT-CAM-I-985-022.jpg",
        "name": "I-985 : US 129 / ATHENS HWY"
    }]
}, {
    "coord": [34.241796, -84.775152],
    "cams": [{
        "id": "cctv_46473",
        "url": "/georgiasnapshots/BART-CAM-202.jpg",
        "name": "SR 61 : Tellus Dr"
    }]
}, {
    "coord": [33.41325, -84.314552],
    "cams": [{
        "id": "cctv_6041",
        "stream": "/georgiavss1/ams-cam-112.stream/playlist.m3u8",
        "name": "SR 3 / Bear Creek Blvd : SR 81 / Upper Woolsey Rd"
    }]
}, {
    "coord": [33.77266, -84.381856],
    "cams": [{
        "id": "cctv_7192",
        "stream": "/georgiavss1/atl-cam-202.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : Piedmont Ave"
    }]
}, {
    "coord": [33.578528, -84.52108],
    "cams": [{
        "id": "cctv_4946",
        "stream": "/georgiavss2/gdot-cam-184.stream/playlist.m3u8",
        "name": "I-85 : 1 MI N OF SR 138"
    }]
}, {
    "coord": [33.852224, -84.484704],
    "cams": [{
        "id": "cctv_5404",
        "stream": "/georgiavss4/gdot-cam-966.stream/playlist.m3u8",
        "name": "I-285 : N OF S ATLANTA RD"
    }]
}, {
    "coord": [33.96982, -84.0972],
    "cams": [{
        "id": "cctv_10285",
        "url": "/georgiasnapshots/GWIN-CAM-111.jpg",
        "name": "SATELLITE BLVD : BOGGS RD"
    }]
}, {
    "coord": [33.69872, -84.265224],
    "cams": [{
        "id": "cctv_5032",
        "stream": "/georgiavss2/gdot-cam-265.stream/playlist.m3u8",
        "name": "I-285 : FLAT SHOALS PKWY"
    }]
}, {
    "coord": [33.90256, -84.779136],
    "cams": [{
        "id": "cctv_13601",
        "url": "/georgiasnapshots/PAUL-CAM-014.jpg",
        "name": "SR 6 : SR 120-360 (Charles Hardy Pkwy) / W Bill Carruth Pkwy"
    }]
}, {
    "coord": [33.987392, -84.083224],
    "cams": [{
        "id": "cctv_5428",
        "stream": "/georgiavss2/gdot-cam-131.stream/playlist.m3u8",
        "name": "I-85 : SUGARLOAF PKWY"
    }]
}, {
    "coord": [32.483032, -84.939864],
    "cams": [{
        "id": "cctv_9131",
        "url": "/georgiasnapshots/COLU-CAM-010.jpg",
        "name": "Spur 22/Macon Rd : I-185"
    }]
}, {
    "coord": [34.028888, -84.575296],
    "cams": [{
        "id": "cctv_15485",
        "stream": "/georgiavss3/gdot-cam-522.stream/playlist.m3u8",
        "name": "I-75 : S OF CHASTAIN RD"
    }]
}, {
    "coord": [33.775332, -84.341216],
    "cams": [{
        "id": "cctv_7200",
        "stream": "/georgiavss1/atl-cam-216.stream/playlist.m3u8",
        "name": "SR 8 / Ponce De Leon Ave : Oakdale Rd"
    }]
}, {
    "coord": [33.44236, -84.693496],
    "cams": [{
        "id": "cctv_32925",
        "url": "/georgiasnapshots/COW-CAM-020.jpg",
        "name": "SR 154 : I-85 NB ENT"
    }]
}, {
    "coord": [34.07814, -84.653432],
    "cams": [{
        "id": "cctv_15345",
        "url": "/georgiasnapshots/CHER-CAM-042.jpg",
        "name": "SR 92 : I-75 SB Entrance Ramp"
    }]
}, {
    "coord": [33.814344, -84.56168],
    "cams": [{
        "id": "cctv_13550",
        "url": "/georgiasnapshots/COBB-CAM-236.jpg",
        "name": "SR 8 (Veterans Memorial Hwy) : Cooper Lake Rd"
    }]
}, {
    "coord": [33.484722, -82.208304],
    "cams": [{
        "id": "cctv_13204",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-189.jpg",
        "name": "I-20 : COLUMBIA CO WEIGH STN"
    }]
}, {
    "coord": [33.851352, -84.301408],
    "cams": [{
        "id": "cctv_5146",
        "stream": "/georgiavss2/gdot-cam-042.stream/playlist.m3u8",
        "name": "I-85 : 1 MI N OF CLAIRMONT"
    }]
}, {
    "coord": [33.845256, -84.326168],
    "cams": [{
        "id": "cctv_15244",
        "stream": "/georgiavss1/brok-cam-010.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : N of Briarwood Rd / Hawk #6"
    }]
}, {
    "coord": [33.5937, -84.4082],
    "cams": [{
        "id": "cctv_10476",
        "url": "/georgiasnapshots/CLAY-CAM-121.jpg",
        "name": "SR 85 : GARDEN WALK BLVD"
    }]
}, {
    "coord": [33.487438, -82.247064],
    "cams": [{
        "id": "cctv_15215",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-187.jpg",
        "name": "I-20 : West of Baker Place Rd"
    }]
}, {
    "coord": [33.654764, -84.503976],
    "cams": [{
        "id": "cctv_13268",
        "stream": "/georgiavss1/fult-cam-001.stream/playlist.m3u8",
        "name": "SR 6 : N Commerce Dr"
    }]
}, {
    "coord": [34.016692, -84.096808],
    "cams": [{
        "id": "cctv_46310",
        "url": "/georgiasnapshots/GC-CAM-260.jpg",
        "name": "OLD PEACHTREE RD : S SCALES RD"
    }]
}, {
    "coord": [33.7507, -84.384288],
    "cams": [{
        "id": "cctv_15455",
        "url": "/georgiasnapshots/ATL-CAM-965.jpg",
        "name": "Decatur St : Jesse Hill Jr Dr"
    }]
}, {
    "coord": [34.927792, -85.153472],
    "cams": [{
        "id": "cctv_16326",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-349.8.jpg",
        "name": "I-75 : EXT 350"
    }]
}, {
    "coord": [33.621252, -84.428848],
    "cams": [{
        "id": "cctv_5261",
        "stream": "/georgiavss4/gdot-cam-662.stream/playlist.m3u8",
        "name": "I-285 : MAIN LANES NO. 2"
    }]
}, {
    "coord": [33.89184, -84.469976],
    "cams": [{
        "id": "cctv_16283",
        "url": "/georgiasnapshots/COBB-CAM-116.jpg",
        "name": "Windy Ridge Pkwy : Hank Aaron Way"
    }]
}, {
    "coord": [33.773384, -84.408952],
    "cams": [{
        "id": "cctv_16205",
        "stream": "/georgiavss1/atl-cam-533.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : SR 8 (Hollowell Parkway)"
    }]
}, {
    "coord": [34.05776, -84.06392],
    "cams": [{
        "id": "cctv_10244",
        "url": "/georgiasnapshots/GWIN-CAM-070.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : US 23 /SR 13"
    }]
}, {
    "coord": [34.087652, -83.994816],
    "cams": [{
        "id": "cctv_10350",
        "url": "/georgiasnapshots/GWIN-CAM-176.jpg",
        "name": "SR 20 : I-985 SB Ramp"
    }]
}, {
    "coord": [33.68596, -85.1506],
    "cams": [{
        "id": "cctv_9295",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-011.jpg",
        "name": "I-20 : GA 1 / US 27"
    }]
}, {
    "coord": [32.188636, -81.193616],
    "cams": [{
        "id": "cctv_46534",
        "url": "/georgiasnapshots/CHAT-CAM-015.jpg",
        "name": "SR 21 : O'Leary Rd"
    }]
}, {
    "coord": [33.957112, -83.989808],
    "cams": [{
        "id": "cctv_10274",
        "url": "/georgiasnapshots/GWIN-CAM-100.jpg",
        "name": "SR 120 : PERRY ST"
    }]
}, {
    "coord": [31.773366, -81.633608],
    "cams": [{
        "id": "cctv_46259",
        "url": "/georgiasnapshots/LIB-CAM-004.jpg",
        "name": "SR 38 (East Oglethorpe Highway) : SR 119 (Airport/Talmadge Road)"
    }]
}, {
    "coord": [31.963274, -83.765328],
    "cams": [{
        "id": "cctv_46344",
        "url": "/georgiasnapshots/CRIS-CAM-001.jpg",
        "name": "SR 30 : PECAN ST"
    }]
}, {
    "coord": [33.832928, -84.360096],
    "cams": [{
        "id": "cctv_12972",
        "stream": "/georgiavss4/gdot-cam-808.stream/playlist.m3u8",
        "name": "GA 400 : N OF SIDNEY MARCUS BLVD"
    }]
}, {
    "coord": [33.77322, -84.408824],
    "cams": [{
        "id": "cctv_46413",
        "stream": "/georgiavss1/atl-cam-267.stream/playlist.m3u8",
        "name": "US 278 / Donald Lee Hollowell Pkwy : Stiff St / MARTA"
    }]
}, {
    "coord": [30.885396, -84.565128],
    "cams": [{
        "id": "cctv_15997",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-015.jpg",
        "name": "SR 1 : Douglas Dr"
    }]
}, {
    "coord": [33.856672, -84.20856],
    "cams": [{
        "id": "cctv_13221",
        "url": "/georgiasnapshots/DEK-CAM-028.jpg",
        "name": "SR 8 (Lawrenceville Hwy) : Lavista Rd"
    }]
}, {
    "coord": [33.823452, -84.351016],
    "cams": [{
        "id": "cctv_5213",
        "stream": "/georgiavss3/gdot-cam-550.stream/playlist.m3u8",
        "name": "I-85 : CHESHIRE BR RD"
    }]
}, {
    "coord": [33.46745, -81.966928],
    "cams": [{
        "id": "cctv_32830",
        "url": "/georgiasnapshots/AUG-CAM-195.jpg",
        "name": "Walton Way : 7th St."
    }]
}, {
    "coord": [34.056776, -83.964768],
    "cams": [{
        "id": "cctv_15965",
        "stream": "/georgiavss2/gdot-cam-172.stream/playlist.m3u8",
        "name": "I-85 : 1.3 MILE N OF SR 20"
    }]
}, {
    "coord": [33.482396, -84.212352],
    "cams": [{
        "id": "cctv_8944",
        "url": "/georgiasnapshots/HNRY-CAM-915.jpg",
        "name": "Jodeco Rd : Patrick Henry Blvd"
    }]
}, {
    "coord": [33.906992, -84.111224],
    "cams": [{
        "id": "cctv_10181",
        "url": "/georgiasnapshots/GWIN-CAM-003.jpg",
        "name": "SR 9 (US 29 Lawrenceville Hwy) : Lester Rd / Pleasant Hill Rd"
    }]
}, {
    "coord": [33.9568, -83.994136],
    "cams": [{
        "id": "cctv_10273",
        "url": "/georgiasnapshots/GWIN-CAM-099.jpg",
        "name": "SR 120 : E of LANGLEY DR"
    }]
}, {
    "coord": [33.864476, -84.492688],
    "cams": [{
        "id": "cctv_9124",
        "url": "/georgiasnapshots/COBB-CAM-067.jpg",
        "name": "Atlanta Rd : Paces Ferry Rd"
    }]
}, {
    "coord": [32.829574, -83.630376],
    "cams": [{
        "id": "cctv_6865",
        "url": "/georgiasnapshots/BIBB-CAM-539.jpg",
        "name": "MLK Jr Blvd : Oak St"
    }]
}, {
    "coord": [33.945112, -84.203936],
    "cams": [{
        "id": "cctv_10254",
        "url": "/georgiasnapshots/GWIN-CAM-080.jpg",
        "name": "SR 378 : US 23 /SR 13"
    }]
}, {
    "coord": [32.847942, -83.6126],
    "cams": [{
        "id": "cctv_5986",
        "url": "/georgiasnapshots/BIBB-CAM-524.jpg",
        "name": "EMERY HWY : FT HILL RD"
    }]
}, {
    "coord": [33.991988, -84.628776],
    "cams": [{
        "id": "cctv_32599",
        "url": "/georgiasnapshots/COBB-CAM-348.jpg",
        "name": "Stilesboro Rd : Kennesaw Due West"
    }]
}, {
    "coord": [33.943416, -84.53988],
    "cams": [{
        "id": "cctv_15197",
        "url": "/georgiasnapshots/MAR-CAM310.jpg",
        "name": "SR 120/S Marietta Pkwy : Manget St"
    }]
}, {
    "coord": [33.552902, -84.270192],
    "cams": [{
        "id": "cctv_10480",
        "url": "/georgiasnapshots/CLAY-CAM-130.jpg",
        "name": "SR 138 : I-675 SB RAMP"
    }]
}, {
    "coord": [33.771072, -84.359736],
    "cams": [{
        "id": "cctv_9191",
        "stream": "/georgiavss1/atl-cam-071.stream/playlist.m3u8",
        "name": "SR 10 (Freedom Pkwy) : North Ave"
    }]
}, {
    "coord": [33.976536, -84.000696],
    "cams": [{
        "id": "cctv_12978",
        "url": "/georgiasnapshots/GDOT-CAM-146.jpg",
        "name": "SR 316 : W OF COLLINS HILL"
    }]
}, {
    "coord": [33.843308, -84.48776],
    "cams": [{
        "id": "cctv_7350",
        "url": "/georgiasnapshots/COBB-CAM-333.jpg",
        "name": "Atlanta Rd : I-285 Interchange"
    }]
}, {
    "coord": [33.61302, -83.7506],
    "cams": [{
        "id": "cctv_13328",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-098.jpg",
        "name": "I-20 : SR 11"
    }]
}, {
    "coord": [31.464192, -81.445856],
    "cams": [{
        "id": "cctv_15260",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-053.jpg",
        "name": "I-95 : South of Ardick Rd"
    }]
}, {
    "coord": [33.89316, -84.463776],
    "cams": [{
        "id": "cctv_15597",
        "stream": "/georgiavss3/gdot-cam-461.stream/playlist.m3u8",
        "name": "I-75 : RAMPS TO I-285 E/W"
    }]
}, {
    "coord": [33.480636, -82.031128],
    "cams": [{
        "id": "cctv_32905",
        "url": "/georgiasnapshots/AUG-CAM-088.jpg",
        "name": "Highland Ave. : Henry St."
    }]
}, {
    "coord": [33.68446, -84.30956],
    "cams": [{
        "id": "cctv_5039",
        "stream": "/georgiavss2/gdot-cam-271.stream/playlist.m3u8",
        "name": "I-285 : BOULDERCREST RD"
    }]
}, {
    "coord": [32.817932, -83.729488],
    "cams": [{
        "id": "cctv_6012",
        "stream": "/georgiavss5/bibb-cam-021.stream/playlist.m3u8",
        "name": "I-475 : COLUMBUS RD"
    }]
}, {
    "coord": [33.631548, -84.490072],
    "cams": [{
        "id": "cctv_5367",
        "stream": "/georgiavss4/gdot-cam-931.stream/playlist.m3u8",
        "name": "I-285 : S OF WASHINGTON RD"
    }]
}, {
    "coord": [33.9224, -84.1892],
    "cams": [{
        "id": "cctv_4921",
        "stream": "/georgiavss2/gdot-cam-103.stream/playlist.m3u8",
        "name": "I-85 : S OF INDIAN TRAIL"
    }]
}, {
    "coord": [34.113872, -84.534152],
    "cams": [{
        "id": "cctv_15492",
        "stream": "/georgiavss3/gdot-cam-560.stream/playlist.m3u8",
        "name": "I-575 : 3/4 MI N OF TOWNE LAKE PKY"
    }]
}, {
    "coord": [33.82424, -84.35892],
    "cams": [{
        "id": "cctv_12956",
        "stream": "/georgiavss4/gdot-cam-806.stream/playlist.m3u8",
        "name": "GA 400 : JUST NORTH OF I-85"
    }]
}, {
    "coord": [33.928592, -84.551352],
    "cams": [{
        "id": "cctv_13746",
        "url": "/georgiasnapshots/COBB-CAM-027.jpg",
        "name": "SR 280/South Cobb Dr : Beech Rd"
    }]
}, {
    "coord": [33.861044, -83.407552],
    "cams": [{
        "id": "cctv_46333",
        "url": "/georgiasnapshots/OCNE-CAM-005.jpg",
        "name": "SR 15 : Barnett Shoals Rd"
    }]
}, {
    "coord": [32.13583, -81.622648],
    "cams": [{
        "id": "cctv_46233",
        "url": "/georgiasnapshots/BRY-CAM-002.jpg",
        "name": "SR 30 : SR 119"
    }]
}, {
    "coord": [33.959584, -84.24664],
    "cams": [{
        "id": "cctv_10222",
        "url": "/georgiasnapshots/GWIN-CAM-048.jpg",
        "name": "SR 140 : Peachtree Corners Cir"
    }]
}, {
    "coord": [33.769756, -84.389904],
    "cams": [{
        "id": "cctv_5227",
        "stream": "/georgiavss3/gdot-cam-576.stream/playlist.m3u8",
        "name": "75/85 : LINDEN/SPRING RAMP METER"
    }]
}, {
    "coord": [33.633812, -84.2952],
    "cams": [{
        "id": "cctv_10513",
        "url": "/georgiasnapshots/CLAY-CAM-261.jpg",
        "name": "Anvilblock Rd : Grant Rd"
    }]
}, {
    "coord": [33.911, -84.3576],
    "cams": [{
        "id": "cctv_4981",
        "stream": "/georgiavss2/gdot-cam-216.stream/playlist.m3u8",
        "name": "I-285 : GA 400 SB"
    }]
}, {
    "coord": [33.469032, -82.031776],
    "cams": [{
        "id": "cctv_32869",
        "url": "/georgiasnapshots/AUG-CAM-265.jpg",
        "name": "Wrightsboro Rd. : Highland Ave."
    }]
}, {
    "coord": [33.953756, -84.656752],
    "cams": [{
        "id": "cctv_12927",
        "url": "/georgiasnapshots/COBB-CAM-258.jpg",
        "name": "Dallas Hwy : Avenue West Cobb"
    }]
}, {
    "coord": [33.611896, -84.296192],
    "cams": [{
        "id": "cctv_5954",
        "stream": "/georgiavss4/gdot-cam-610.stream/playlist.m3u8",
        "name": "I-675 : ELLENWOOD RD"
    }]
}, {
    "coord": [33.943388, -84.535208],
    "cams": [{
        "id": "cctv_15191",
        "url": "/georgiasnapshots/MAR-CAM-302.jpg",
        "name": "SR 120/S Marietta Pkwy : Fairground St"
    }]
}, {
    "coord": [34.036648, -83.987208],
    "cams": [{
        "id": "cctv_10213",
        "url": "/georgiasnapshots/GWIN-CAM-039.jpg",
        "name": "SR 20 : Old Peachtree Rd"
    }]
}, {
    "coord": [33.907236, -84.35716],
    "cams": [{
        "id": "cctv_12965",
        "stream": "/georgiavss4/gdot-cam-824.stream/playlist.m3u8",
        "name": "GA 400 : JOHNSON FERRY RD"
    }]
}, {
    "coord": [33.92706, -84.341608],
    "cams": [{
        "id": "cctv_32615",
        "url": "/georgiasnapshots/DUN-CAM-110.jpg",
        "name": "Perimeter Center West : Perimeter Center Place"
    }]
}, {
    "coord": [34.139436, -83.949312],
    "cams": [{
        "id": "cctv_32582",
        "url": "/georgiasnapshots/HALL-CAM-002.jpg",
        "name": "SR 347/ Lanier Is Pkwy : I-985 SB"
    }]
}, {
    "coord": [33.54372, -84.270088],
    "cams": [{
        "id": "cctv_13321",
        "stream": "/georgiavss4/gdot-cam-774.stream/playlist.m3u8",
        "name": "I-75 : AT I-675"
    }]
}, {
    "coord": [33.9142, -84.204104],
    "cams": [{
        "id": "cctv_4918",
        "stream": "/georgiavss2/gdot-cam-100.stream/playlist.m3u8",
        "name": "I-85 : N OF JIMMY CARTER"
    }]
}, {
    "coord": [34.0893, -84.5338],
    "cams": [{
        "id": "cctv_5208",
        "stream": "/georgiavss3/gdot-cam-516.stream/playlist.m3u8",
        "name": "I-575 : N OF HWY 92"
    }]
}, {
    "coord": [32.659558, -83.744696],
    "cams": [{
        "id": "cctv_16198",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-149.jpg",
        "name": "I-75 : SR 49"
    }]
}, {
    "coord": [33.853664, -84.359416],
    "cams": [{
        "id": "cctv_6303",
        "stream": "/georgiavss1/atl-cam-001.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Wieuca Rd"
    }]
}, {
    "coord": [33.804664, -84.526544],
    "cams": [{
        "id": "cctv_13318",
        "url": "/georgiasnapshots/COBB-CAM-237.jpg",
        "name": "SR 8 (Veterans Memorial Hwy) : Queen Mill Rd"
    }]
}, {
    "coord": [33.6975, -84.4648],
    "cams": [{
        "id": "cctv_5209",
        "stream": "/georgiavss2/gdot-cam-052.stream/playlist.m3u8",
        "name": "SR 166 : E OF DODSON DR"
    }]
}, {
    "coord": [33.824904, -84.488688],
    "cams": [{
        "id": "cctv_5399",
        "stream": "/georgiavss4/gdot-cam-961.stream/playlist.m3u8",
        "name": "I-285 : SOUTH COBB DR"
    }]
}, {
    "coord": [33.912952, -84.55608],
    "cams": [{
        "id": "cctv_16300",
        "url": "/georgiasnapshots/COBB-CAM-008.jpg",
        "name": "SR 5/Austell Rd : Roberta Dr"
    }]
}, {
    "coord": [33.685396, -84.401952],
    "cams": [{
        "id": "cctv_15241",
        "url": "/georgiasnapshots/GDOT-CAM-061.jpg",
        "name": "I-85 : North of Metropolitan Pkwy"
    }]
}, {
    "coord": [33.553588, -84.26896],
    "cams": [{
        "id": "cctv_5946",
        "stream": "/georgiavss3/gdot-cam-602.stream/playlist.m3u8",
        "name": "I-675 : SR 138"
    }]
}, {
    "coord": [32.886032, -83.67336],
    "cams": [{
        "id": "cctv_5991",
        "url": "/georgiasnapshots/BIBB-CAM-529.jpg",
        "name": "RIVERSIDE DR : WIMBISH RD"
    }]
}, {
    "coord": [32.902542, -83.788624],
    "cams": [{
        "id": "cctv_6031",
        "stream": "/georgiavss5/bibb-cam-035.stream/playlist.m3u8",
        "name": "I-475 : N OF COLARPARCHEE RD"
    }]
}, {
    "coord": [33.861728, -84.484272],
    "cams": [{
        "id": "cctv_32608",
        "url": "/georgiasnapshots/COBB-CAM-146.jpg",
        "name": "Paces Ferry : Spring Hill Pkwy"
    }]
}, {
    "coord": [33.82588, -84.366912],
    "cams": [{
        "id": "cctv_7225",
        "stream": "/georgiavss1/atl-cam-020.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Sidney Marcus Blvd"
    }]
}, {
    "coord": [30.786648, -81.64672],
    "cams": [{
        "id": "cctv_46542",
        "url": "/georgiasnapshots/CAMD-CAM-002.jpg",
        "name": "SR 40 : Gross Rd/Haddock Rd"
    }]
}, {
    "coord": [34.06308, -84.607424],
    "cams": [{
        "id": "cctv_5172",
        "stream": "/georgiavss3/gdot-cam-443.stream/playlist.m3u8",
        "name": "I-75 : S OF HICKORY GROVE RD"
    }]
}, {
    "coord": [34.023108, -84.361672],
    "cams": [{
        "id": "cctv_9030",
        "url": "/georgiasnapshots/ROSWELL-CAM-310.jpg",
        "name": "SR 9 : Magnolia/Canton St"
    }]
}, {
    "coord": [33.83702, -84.368152],
    "cams": [{
        "id": "cctv_6300",
        "stream": "/georgiavss1/atl-cam-016.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Pharr Rd"
    }]
}, {
    "coord": [33.756368, -84.402856],
    "cams": [{
        "id": "cctv_15283",
        "stream": "/georgiavss1/atl-cam-539.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : Carter St"
    }]
}, {
    "coord": [33.586812, -84.382688],
    "cams": [{
        "id": "cctv_5246",
        "stream": "/georgiavss2/gdot-cam-063.stream/playlist.m3u8",
        "name": "I-75 : N OF TARA BLVD"
    }]
}, {
    "coord": [33.828548, -84.492312],
    "cams": [{
        "id": "cctv_13753",
        "url": "/georgiasnapshots/SMYR-CAM-002.jpg",
        "name": "SR 280/S Cobb Dr : Highlands Pkwy"
    }]
}, {
    "coord": [34.007536, -84.177432],
    "cams": [{
        "id": "cctv_46284",
        "url": "/georgiasnapshots/GWIN-CAM-217.jpg",
        "name": "PLEASANT HILL RD : SWEET BOTTOM DR"
    }]
}, {
    "coord": [34.033336, -84.044552],
    "cams": [{
        "id": "cctv_15959",
        "url": "/georgiasnapshots/GDOT-CAM-158.jpg",
        "name": "I-85 : N OF L-VILLE/SUWANEE RD"
    }]
}, {
    "coord": [32.146892, -81.34124],
    "cams": [{
        "id": "cctv_46250",
        "url": "/georgiasnapshots/EFF-CAM-002.jpg",
        "name": "SR 26/ US 80 : SR 30"
    }]
}, {
    "coord": [33.711456, -85.16104],
    "cams": [{
        "id": "cctv_16150",
        "url": "/georgiasnapshots/GDOT-CAM-SR8-12.3.jpg",
        "name": "SR 8 : SR 1"
    }]
}, {
    "coord": [33.655344, -84.003656],
    "cams": [{
        "id": "cctv_13358",
        "url": "/georgiasnapshots/ROCK-CAM-115.jpg",
        "name": "SR 138 / Walnut Grove Rd : Dogwood Dr"
    }]
}, {
    "coord": [34.0686, -84.170248],
    "cams": [{
        "id": "cctv_16247",
        "url": "/georgiasnapshots/COJC-CAM-720.jpg",
        "name": "McGinnis Ferry Rd : Johns Creek Town Center"
    }]
}, {
    "coord": [33.913096, -83.970136],
    "cams": [{
        "id": "cctv_10346",
        "url": "/georgiasnapshots/GWIN-CAM-172.jpg",
        "name": "SR 20 : N of WEBB GIN HOUSE RD"
    }]
}, {
    "coord": [34.060188, -84.165856],
    "cams": [{
        "id": "cctv_16269",
        "url": "/georgiasnapshots/COJC-CAM-775.jpg",
        "name": "Johns Creek Pkwy : Lakefield Dr"
    }]
}, {
    "coord": [33.956248, -83.986072],
    "cams": [{
        "id": "cctv_10267",
        "url": "/georgiasnapshots/GWIN-CAM-093.jpg",
        "name": "SR 120 : JACKSON ST"
    }]
}, {
    "coord": [33.891512, -84.26244],
    "cams": [{
        "id": "cctv_12963",
        "url": "/georgiasnapshots/GDOT-CAM-117.jpg",
        "name": "I-85 : JUST S OF I-285 (LOW MOUNT)"
    }]
}, {
    "coord": [33.704044, -84.131664],
    "cams": [{
        "id": "cctv_13067",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-074.jpg",
        "name": "I-20 : LITHONIA IND BLVD"
    }]
}, {
    "coord": [33.68314, -84.41076],
    "cams": [{
        "id": "cctv_5281",
        "stream": "/georgiavss2/gdot-cam-071.stream/playlist.m3u8",
        "name": "I-85 : CLEVELAND AVE"
    }]
}, {
    "coord": [33.5013, -84.225248],
    "cams": [{
        "id": "cctv_13293",
        "stream": "/georgiavss4/gdot-cam-743.stream/playlist.m3u8",
        "name": "I-75 : 1/2 MI S OF HUDSON BR"
    }]
}, {
    "coord": [33.621444, -84.427608],
    "cams": [{
        "id": "cctv_32557",
        "url": "/georgiasnapshots/GDOT-CAM-663.jpg",
        "name": "I-285 : INSIDE 5TH RNWY TUNNEL"
    }]
}, {
    "coord": [31.530532, -83.835376],
    "cams": [{
        "id": "cctv_46383",
        "url": "/georgiasnapshots/WORT-CAM-002.jpg",
        "name": "SR520 : SR33/MAIN"
    }]
}, {
    "coord": [33.982992, -84.213504],
    "cams": [{
        "id": "cctv_5708",
        "stream": "/georgiavss3/gdot-cam-587.stream/playlist.m3u8",
        "name": "SR 141 (Peachtree Parkway) : E Jones Br Rd"
    }]
}, {
    "coord": [31.20875, -82.383816],
    "cams": [{
        "id": "cctv_46269",
        "url": "/georgiasnapshots/WAR-CAM-002.jpg",
        "name": "SR 520 (Francis Street) : SR 38 (Victory Drive) / George Street"
    }]
}, {
    "coord": [33.895544, -84.304408],
    "cams": [{
        "id": "cctv_9138",
        "stream": "/georgiavss1/cham-cam-107.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Ind Blvd : Chamblee-Dunwoody Rd"
    }]
}, {
    "coord": [33.771388, -84.233336],
    "cams": [{
        "id": "cctv_5020",
        "stream": "/georgiavss2/gdot-cam-253.stream/playlist.m3u8",
        "name": "I-285 : DURHAM PARK RD"
    }]
}, {
    "coord": [34.078128, -84.538432],
    "cams": [{
        "id": "cctv_15392",
        "stream": "/georgiavss3/gdot-cam-548.stream/playlist.m3u8",
        "name": "I-575 : S OF HWY 92"
    }]
}, {
    "coord": [34.018076, -84.326056],
    "cams": [{
        "id": "cctv_5340",
        "stream": "/georgiavss4/gdot-cam-836.stream/playlist.m3u8",
        "name": "GA 400 : HOLCOMB BR RD"
    }]
}, {
    "coord": [33.920284, -84.484664],
    "cams": [{
        "id": "cctv_15536",
        "stream": "/georgiavss3/gdot-cam-472.stream/playlist.m3u8",
        "name": "I-75 : S OF DELK RD"
    }]
}, {
    "coord": [31.231544, -81.498712],
    "cams": [{
        "id": "cctv_46550",
        "url": "/georgiasnapshots/GLY-CAM-007.jpg",
        "name": "SR 25 Spur : Canal Rd"
    }]
}, {
    "coord": [33.771368, -84.383624],
    "cams": [{
        "id": "cctv_15286",
        "url": "/georgiasnapshots/ATL-CAM-921.jpg",
        "name": "SR 8 / North Ave : Courtland St / Juniper St"
    }]
}, {
    "coord": [33.712996, -84.7698],
    "cams": [{
        "id": "cctv_13092",
        "stream": "/georgiavss1/doug-cam-040.stream/playlist.m3u8",
        "name": "SR 5 (Bill Arp Rd) : Tonya Ln/Sutton Dr"
    }]
}, {
    "coord": [33.757688, -84.49312],
    "cams": [{
        "id": "cctv_5385",
        "stream": "/georgiavss4/gdot-cam-948.stream/playlist.m3u8",
        "name": "I-285 : S OF I-20 (FULTON)"
    }]
}, {
    "coord": [33.764856, -84.664072],
    "cams": [{
        "id": "cctv_15429",
        "stream": "/georgiavss2/gdot-cam-308.stream/playlist.m3u8",
        "name": "I-20 : West of Lee Rd"
    }]
}, {
    "coord": [33.9124, -84.208296],
    "cams": [{
        "id": "cctv_5359",
        "stream": "/georgiavss2/gdot-cam-087.stream/playlist.m3u8",
        "name": "I-85 : JIMMY CARTER BLVD"
    }]
}, {
    "coord": [34.095516, -83.810992],
    "cams": [{
        "id": "cctv_32544",
        "url": "/georgiasnapshots/BARR-CAM-004.jpg",
        "name": "SR 211 : I-85 NB"
    }]
}, {
    "coord": [34.018236, -84.278552],
    "cams": [{
        "id": "cctv_16224",
        "url": "/georgiasnapshots/COJC-CAM-505.jpg",
        "name": "Nesbit Ferry Rd : Mt Pisgah Christian School"
    }]
}, {
    "coord": [33.871056, -84.456592],
    "cams": [{
        "id": "cctv_7319",
        "url": "/georgiasnapshots/COBB-CAM-059.jpg",
        "name": "SR 3/Cobb Pkwy : Paces Mill Rd"
    }]
}, {
    "coord": [31.63585, -84.246528],
    "cams": [{
        "id": "cctv_46357",
        "url": "/georgiasnapshots/LEE-CAM-003.jpg",
        "name": "SR 520 : OAKLAND PKWY/N DOUBLEGATE"
    }]
}, {
    "coord": [34.760812, -85.003312],
    "cams": [{
        "id": "cctv_16336",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-333.45.jpg",
        "name": "I-75 : EXT 333"
    }]
}, {
    "coord": [33.786696, -84.38928],
    "cams": [{
        "id": "cctv_15232",
        "stream": "/georgiavss1/atl-cam-901.stream/playlist.m3u8",
        "name": "SR 9 (Spring St) : 14th St"
    }]
}, {
    "coord": [34.280096, -85.182456],
    "cams": [{
        "id": "cctv_15378",
        "url": "/georgiasnapshots/FLYD-CAM-008.jpg",
        "name": "SR 1/US 27/MARTHA BERRY HWY : SR 1 Loop"
    }]
}, {
    "coord": [33.391166, -84.146104],
    "cams": [{
        "id": "cctv_13231",
        "stream": "/georgiavss4/gdot-cam-766.stream/playlist.m3u8",
        "name": "I-75 : BEFORE SR 155"
    }]
}, {
    "coord": [33.880724, -84.463912],
    "cams": [{
        "id": "cctv_7316",
        "url": "/georgiasnapshots/COBB-CAM-056.jpg",
        "name": "SR 3/Cobb Pkwy : Akers Mill Rd"
    }]
}, {
    "coord": [33.70208, -84.268984],
    "cams": [{
        "id": "cctv_13548",
        "url": "/georgiasnapshots/DEK-CAM-310.jpg",
        "name": "SR 155 (Flat Shoals Rd) : Panthersville Rd / Fairlake Dr"
    }]
}, {
    "coord": [34.377076, -84.909968],
    "cams": [{
        "id": "cctv_16120",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-305.65.jpg",
        "name": "I-75  : SR 140 (EXIT 306)"
    }]
}, {
    "coord": [33.247158, -84.290752],
    "cams": [{
        "id": "cctv_15425",
        "url": "c2c.dot.ga.gov/snapshots/SPAL-CAM-005.jpg",
        "name": "SR 16 : SPALDING DR"
    }]
}, {
    "coord": [33.742916, -84.377008],
    "cams": [{
        "id": "cctv_5091",
        "stream": "/georgiavss3/gdot-cam-352.stream/playlist.m3u8",
        "name": "I-20 : HILL ST"
    }]
}, {
    "coord": [34.098844, -84.248224],
    "cams": [{
        "id": "cctv_5352",
        "stream": "/georgiavss4/gdot-cam-849.stream/playlist.m3u8",
        "name": "GA 400 : S OF MCGINNIS FERRY RD"
    }]
}, {
    "coord": [30.7897, -81.658136],
    "cams": [{
        "id": "cctv_13174",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-003.jpg",
        "name": "I-95 : SR 40"
    }]
}, {
    "coord": [33.899612, -84.447328],
    "cams": [{
        "id": "cctv_5730",
        "stream": "/georgiavss2/gdot-cam-299.stream/playlist.m3u8",
        "name": "I-285 : POWERS FERRY RD"
    }]
}, {
    "coord": [33.771324, -84.390848],
    "cams": [{
        "id": "cctv_15235",
        "url": "/georgiasnapshots/ATL-CAM-904.jpg",
        "name": "SR 8 (North Ave) : Williams St"
    }]
}, {
    "coord": [30.903916, -84.567872],
    "cams": [{
        "id": "cctv_46346",
        "url": "/georgiasnapshots/DECA-CAM-001.jpg",
        "name": "SR 1 Bu/ SCOTT ST : SR 30 Bu/ SHOTWELL ST"
    }]
}, {
    "coord": [33.370952, -84.569064],
    "cams": [{
        "id": "cctv_32541",
        "url": "/georgiasnapshots/FAY-CAM-215.jpg",
        "name": "SR 74 : TDK Blvd/Crosstown Dr"
    }]
}, {
    "coord": [33.650364, -84.471272],
    "cams": [{
        "id": "cctv_13211",
        "stream": "/georgiavss1/fult-cam-006.stream/playlist.m3u8",
        "name": "SR 6 : Herschel Rd"
    }]
}, {
    "coord": [34.03646, -84.343712],
    "cams": [{
        "id": "cctv_6255",
        "url": "/georgiasnapshots/ROSWELL-CAM-142.jpg",
        "name": "SR 140/92 : SR 9/Alpharetta St"
    }]
}, {
    "coord": [33.625884, -84.400432],
    "cams": [{
        "id": "cctv_5271",
        "stream": "/georgiavss2/gdot-cam-069.stream/playlist.m3u8",
        "name": "I-75 : N OF FOREST PKWY"
    }]
}, {
    "coord": [34.062224, -84.395776],
    "cams": [{
        "id": "cctv_6250",
        "url": "/georgiasnapshots/ROSWELL-CAM-214.jpg",
        "name": "SR 92 : Hardscrabble Rd"
    }]
}, {
    "coord": [34.045904, -84.029768],
    "cams": [{
        "id": "cctv_15961",
        "stream": "/georgiavss2/gdot-cam-162.stream/playlist.m3u8",
        "name": "I-85 : I-985"
    }]
}, {
    "coord": [34.011808, -84.37428],
    "cams": [{
        "id": "cctv_13124",
        "url": "/georgiasnapshots/ROSWELL-CAM-422.jpg",
        "name": "SR 120 : Willeo Rd"
    }]
}, {
    "coord": [33.723416, -84.731592],
    "cams": [{
        "id": "cctv_12942",
        "url": "/georgiasnapshots/DOUG-CAM-003.jpg",
        "name": "Chapel Hill Rd : S. Elizabeth Dr"
    }]
}, {
    "coord": [33.779496, -84.606704],
    "cams": [{
        "id": "cctv_13200",
        "stream": "/georgiavss1/doug-cam-088.stream/playlist.m3u8",
        "name": "SR 6 : N Blairs Bridge Rd"
    }]
}, {
    "coord": [32.0732, -81.088304],
    "cams": [{
        "id": "cctv_46510",
        "url": "/georgiasnapshots/SAV-CAM-044.jpg",
        "name": "Liberty St. : Price St."
    }]
}, {
    "coord": [33.584956, -84.469256],
    "cams": [{
        "id": "cctv_46442",
        "url": "/georgiasnapshots/FULT-CAM-019.jpg",
        "name": "GA 279/ Old National Hwy : Walmart Entrance/ McGee Landing"
    }]
}, {
    "coord": [33.86834, -84.249616],
    "cams": [{
        "id": "cctv_5004",
        "stream": "/georgiavss2/gdot-cam-237.stream/playlist.m3u8",
        "name": "I-285 : HENDERSON RD"
    }]
}, {
    "coord": [33.923024, -84.505496],
    "cams": [{
        "id": "cctv_15179",
        "url": "/georgiasnapshots/MAR-CAM-110.jpg",
        "name": "SR 3/Cobb Pkwy : Spinks Dr"
    }]
}, {
    "coord": [31.185162, -81.470144],
    "cams": [{
        "id": "cctv_46254",
        "url": "/georgiasnapshots/GLY-CAM-003.jpg",
        "name": "SR 25 (Glynn Avenue) : SR 25 Spur (Torras Causeway)"
    }]
}, {
    "coord": [33.75238, -84.39568],
    "cams": [{
        "id": "cctv_15296",
        "url": "/georgiasnapshots/ATL-CAM-926.jpg",
        "name": "Ted Turner Dr : Mitchell St"
    }]
}, {
    "coord": [33.94676, -84.331464],
    "cams": [{
        "id": "cctv_32669",
        "url": "/georgiasnapshots/DUN-CAM-160.jpg",
        "name": "Mt Vernon Rd : Dunwoody Village Pky"
    }]
}, {
    "coord": [33.956084, -83.9886],
    "cams": [{
        "id": "cctv_10268",
        "url": "/georgiasnapshots/GWIN-CAM-094.jpg",
        "name": "SR 120 : CLAYTON ST"
    }]
}, {
    "coord": [33.616172, -84.43852],
    "cams": [{
        "id": "cctv_10432",
        "url": "/georgiasnapshots/CLAY-CAM-011.jpg",
        "name": "SR 139 : I-285 WB Ramp"
    }]
}, {
    "coord": [32.014622, -80.98304],
    "cams": [{
        "id": "cctv_15815",
        "url": "/georgiasnapshots/SAV-CAM-032.jpg",
        "name": "JOHNNY MERCER BLVD : WILMINGTON VILLAGE WAY"
    }]
}, {
    "coord": [33.774108, -84.313656],
    "cams": [{
        "id": "cctv_9161",
        "stream": "/georgiavss1/dek-cam-004.stream/playlist.m3u8",
        "name": "SR 8 (Scott Blvd) : W Ponce De Leon Ave"
    }]
}, {
    "coord": [33.864888, -84.451264],
    "cams": [{
        "id": "cctv_9061",
        "stream": "/georgiavss1/atl-cam-049.stream/playlist.m3u8",
        "name": "SR 3 / US 41 / Northside Pkwy : Northgate"
    }]
}, {
    "coord": [33.931208, -84.14644],
    "cams": [{
        "id": "cctv_10248",
        "url": "/georgiasnapshots/GWIN-CAM-074.jpg",
        "name": "SR 378 : STEVE REYNOLDS BLVD"
    }]
}, {
    "coord": [33.514598, -84.3624],
    "cams": [{
        "id": "cctv_10449",
        "url": "/georgiasnapshots/CLAY-CAM-042.jpg",
        "name": "SR 3 TB : SR 54"
    }]
}, {
    "coord": [33.47282, -81.96912],
    "cams": [{
        "id": "cctv_32895",
        "url": "/georgiasnapshots/AUG-CAM-185.jpg",
        "name": "Telfair St. : 9th St. (James Brown Blvd.)"
    }]
}, {
    "coord": [32.843266, -83.629992],
    "cams": [{
        "id": "cctv_5963",
        "url": "/georgiasnapshots/BIBB-CAM-501.jpg",
        "name": "RIVERSIDE DR : SPRING ST"
    }]
}, {
    "coord": [33.43932, -81.998864],
    "cams": [{
        "id": "cctv_32877",
        "url": "/georgiasnapshots/AUG-CAM-062.jpg",
        "name": "Gordon Hwy : Olive Rd./Old Savannah Rd."
    }]
}, {
    "coord": [33.428608, -84.097776],
    "cams": [{
        "id": "cctv_15570",
        "url": "/georgiasnapshots/HNRY-CAM-009.jpg",
        "name": "SR 81 : OLD JACKSON RD"
    }]
}, {
    "coord": [33.958744, -84.549992],
    "cams": [{
        "id": "cctv_15187",
        "url": "/georgiasnapshots/MAR-CAM-204.jpg",
        "name": "SR 120A/N Marietta Pkwy : Church St"
    }]
}, {
    "coord": [33.546376, -84.279192],
    "cams": [{
        "id": "cctv_13559",
        "url": "/georgiasnapshots/CLAY-CAM-171.jpg",
        "name": "SR 138 / Lake Spivey Rd : I-75 SB Ramp"
    }]
}, {
    "coord": [34.068224, -84.27252],
    "cams": [{
        "id": "cctv_5347",
        "stream": "/georgiavss4/gdot-cam-844.stream/playlist.m3u8",
        "name": "GA 400 : OLD MILTON PKWY"
    }]
}, {
    "coord": [33.656564, -84.496928],
    "cams": [{
        "id": "cctv_13057",
        "stream": "/georgiavss1/fult-cam-004.stream/playlist.m3u8",
        "name": "SR 6 : I-285 NB Ramps"
    }]
}, {
    "coord": [32.909778, -83.794336],
    "cams": [{
        "id": "cctv_6032",
        "stream": "/georgiavss5/bibb-cam-036.stream/playlist.m3u8",
        "name": "I-475 : 2 MI S OF ESTES RD"
    }]
}, {
    "coord": [34.04166, -84.476752],
    "cams": [{
        "id": "cctv_7335",
        "url": "/georgiasnapshots/COBB-CAM-210.jpg",
        "name": "Shallowford Rd : Steinhauer Rd"
    }]
}, {
    "coord": [34.471188, -84.920464],
    "cams": [{
        "id": "cctv_16342",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-312.25.jpg",
        "name": "I-75 : EXT 312"
    }]
}, {
    "coord": [34.20706, -84.140424],
    "cams": [{
        "id": "cctv_16365",
        "url": "/georgiasnapshots/FORS-CAM-016.jpg",
        "name": "SR 20 : Tribble Gap Rd"
    }]
}, {
    "coord": [32.036988, -80.991224],
    "cams": [{
        "id": "cctv_15812",
        "url": "/georgiasnapshots/SAV-CAM-029.jpg",
        "name": "SR 26/US 80 : BRYAN WOODS RD"
    }]
}, {
    "coord": [34.051992, -84.334576],
    "cams": [{
        "id": "cctv_9037",
        "url": "/georgiasnapshots/ROSWELL-CAM-322.jpg",
        "name": "SR 9 : Elkins Rd"
    }]
}, {
    "coord": [33.85176, -84.043848],
    "cams": [{
        "id": "cctv_10195",
        "url": "/georgiasnapshots/GWIN-CAM-017.jpg",
        "name": "SR 10 : High Point Rd"
    }]
}, {
    "coord": [32.408928, -84.925856],
    "cams": [{
        "id": "cctv_13578",
        "url": "/georgiasnapshots/COLU-CAM-301.jpg",
        "name": "I-185 : Victory Dr"
    }]
}, {
    "coord": [33.774048, -84.349128],
    "cams": [{
        "id": "cctv_7199",
        "stream": "/georgiavss1/atl-cam-040.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : SR 42 (Briarcliff Road / Moreland Avenue)"
    }]
}, {
    "coord": [33.911724, -84.42656],
    "cams": [{
        "id": "cctv_15582",
        "stream": "/georgiavss4/gdot-cam-632.stream/playlist.m3u8",
        "name": "I-285 : W OF N-SIDE DR/POWERS FRY"
    }]
}, {
    "coord": [31.995722, -81.269704],
    "cams": [{
        "id": "cctv_46530",
        "url": "/georgiasnapshots/CHAT-CAM-011.jpg",
        "name": "SR 25 : Canebrake Rd"
    }]
}, {
    "coord": [32.470788, -84.958912],
    "cams": [{
        "id": "cctv_9128",
        "url": "/georgiasnapshots/COLU-CAM-007.jpg",
        "name": "Spur 22/Wynnton Rd : Forest/Henry Ave"
    }]
}, {
    "coord": [33.70404, -84.144704],
    "cams": [{
        "id": "cctv_16132",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-073.jpg",
        "name": "I-20 : Fairington Dr"
    }]
}, {
    "coord": [32.507302, -84.990104],
    "cams": [{
        "id": "cctv_15910",
        "url": "/georgiasnapshots/COLU-CAM-017.jpg",
        "name": "SR 85/2ND AVE : SR 22 CONN/MANCHESTER EXP"
    }]
}, {
    "coord": [33.781588, -84.40744],
    "cams": [{
        "id": "cctv_16257",
        "stream": "/georgiavss1/atl-cam-530.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : 10th St"
    }]
}, {
    "coord": [34.036352, -84.579512],
    "cams": [{
        "id": "cctv_13085",
        "url": "/georgiasnapshots/COBB-CAM-324.jpg",
        "name": "Frey Rd : Hopkins Rd/Skip Spann Bridge"
    }]
}, {
    "coord": [33.65318, -84.497144],
    "cams": [{
        "id": "cctv_5370",
        "stream": "/georgiavss4/gdot-cam-934.stream/playlist.m3u8",
        "name": "I-285 : CAMP CREEK PKWY"
    }]
}, {
    "coord": [33.750364, -84.39188],
    "cams": [{
        "id": "cctv_15386",
        "url": "/georgiasnapshots/ATL-CAM-958.jpg",
        "name": "Mitchell St : Pryor St"
    }]
}, {
    "coord": [33.86308, -83.966888],
    "cams": [{
        "id": "cctv_46294",
        "url": "/georgiasnapshots/GWIN-CAM-229.jpg",
        "name": "US 78 : COOPER RD"
    }]
}, {
    "coord": [33.985536, -84.616856],
    "cams": [{
        "id": "cctv_7301",
        "url": "/georgiasnapshots/COBB-CAM-019.jpg",
        "name": "Stilesboro Rd : Stanley Rd"
    }]
}, {
    "coord": [33.721184, -84.939752],
    "cams": [{
        "id": "cctv_16177",
        "url": "/georgiasnapshots/GDOT-CAM-SR61-8.65.jpg",
        "name": "SR 61 : I-20 EB"
    }]
}, {
    "coord": [33.849432, -84.023568],
    "cams": [{
        "id": "cctv_10339",
        "url": "/georgiasnapshots/GWIN-CAM-165.jpg",
        "name": "SR 124 : ASHWORTH LAKE RD"
    }]
}, {
    "coord": [33.751672, -84.457456],
    "cams": [{
        "id": "cctv_5070",
        "stream": "/georgiavss3/gdot-cam-333.stream/playlist.m3u8",
        "name": "I-20 : E OF HOLMES DR"
    }]
}, {
    "coord": [33.75356, -84.465224],
    "cams": [{
        "id": "cctv_5069",
        "stream": "/georgiavss3/gdot-cam-332.stream/playlist.m3u8",
        "name": "I-20 : E OF HOLMES DR"
    }]
}, {
    "coord": [33.741564, -84.412056],
    "cams": [{
        "id": "cctv_5082",
        "stream": "/georgiavss3/gdot-cam-344.stream/playlist.m3u8",
        "name": "I-20 : LEE ST"
    }]
}, {
    "coord": [33.764628, -84.396128],
    "cams": [{
        "id": "cctv_15299",
        "stream": "/georgiavss1/atl-cam-928.stream/playlist.m3u8",
        "name": "Ivan Allen Jr Blvd : Luckie St"
    }]
}, {
    "coord": [33.447686, -84.450128],
    "cams": [{
        "id": "cctv_10174",
        "stream": "/georgiavss1/fay-cam-010.stream/playlist.m3u8",
        "name": "SR 54/Stonewall Ave : Jeff Davis Dr"
    }]
}, {
    "coord": [34.04212, -84.581056],
    "cams": [{
        "id": "cctv_32601",
        "url": "/georgiasnapshots/COBB-CAM-349.jpg",
        "name": "Frey Rd : Campus Loop"
    }]
}, {
    "coord": [33.876492, -84.589552],
    "cams": [{
        "id": "cctv_13049",
        "url": "/georgiasnapshots/COBB-CAM-007.jpg",
        "name": "SR 5/Austell Rd : Pair Rd"
    }]
}, {
    "coord": [33.7112, -84.21756],
    "cams": [{
        "id": "cctv_5119",
        "stream": "/georgiavss3/gdot-cam-378.stream/playlist.m3u8",
        "name": "I-20 : WESLEY CHAPEL RD"
    }]
}, {
    "coord": [34.220692, -83.862336],
    "cams": [{
        "id": "cctv_32630",
        "url": "/georgiasnapshots/HALL-CAM-011",
        "name": "SR 13 : SR 53"
    }]
}, {
    "coord": [33.758108, -84.402816],
    "cams": [{
        "id": "cctv_16360",
        "stream": "/georgiavss1/atl-cam-538.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : Magnolia St"
    }]
}, {
    "coord": [32.811176, -83.662696],
    "cams": [{
        "id": "cctv_5972",
        "url": "/georgiasnapshots/BIBB-CAM-510.jpg",
        "name": "PIO NONO AVE : HIGHTOWER RD"
    }]
}, {
    "coord": [34.066656, -84.609984],
    "cams": [{
        "id": "cctv_15500",
        "stream": "/georgiavss3/gdot-cam-530.stream/playlist.m3u8",
        "name": "I-75 : N OF HICKORY GROVE"
    }]
}, {
    "coord": [33.731888, -84.283224],
    "cams": [{
        "id": "cctv_13547",
        "stream": "/georgiavss1/dek-cam-306.stream/playlist.m3u8",
        "name": "SR 155 (Candler Rd) : McAfee Rd"
    }]
}, {
    "coord": [33.902328, -84.666984],
    "cams": [{
        "id": "cctv_12920",
        "url": "/georgiasnapshots/COBB-CAM-113.jpg",
        "name": "SR 360/Macland Rd : Villa Rica Rd"
    }]
}, {
    "coord": [33.9139, -83.448656],
    "cams": [{
        "id": "cctv_32964",
        "url": "/georgiasnapshots/OCNE-CAM-004.jpg",
        "name": "SR 316 : SR 10"
    }]
}, {
    "coord": [31.23256, -84.210488],
    "cams": [{
        "id": "cctv_46364",
        "url": "/georgiasnapshots/MITC-CAM-004.jpg",
        "name": "SR 112 : SCOTT ST"
    }]
}, {
    "coord": [32.61863, -83.682584],
    "cams": [{
        "id": "cctv_16082",
        "url": "/georgiasnapshots/GDOT-CAM-SR247C-2.2.jpg",
        "name": "SR 247C : Houston Lake Rd"
    }]
}, {
    "coord": [33.817744, -84.312192],
    "cams": [{
        "id": "cctv_13768",
        "url": "/georgiasnapshots/DEK-CAM-619.jpg",
        "name": "N Druid Hills Rd : SR 236 / LaVista Rd"
    }]
}, {
    "coord": [33.920524, -84.317064],
    "cams": [{
        "id": "cctv_6309",
        "stream": "/georgiavss2/gdot-cam-200.stream/playlist.m3u8",
        "name": "I-285 : AT CHAM-DNWDY"
    }]
}, {
    "coord": [33.822892, -84.112528],
    "cams": [{
        "id": "cctv_10198",
        "url": "/georgiasnapshots/GWIN-CAM-020.jpg",
        "name": "SR 10 : E Park Place Blvd"
    }]
}, {
    "coord": [34.371044, -83.81956],
    "cams": [{
        "id": "cctv_32639",
        "url": "/georgiasnapshots/HALL-CAM-020.jpg",
        "name": "SR 60 : SR 283"
    }]
}, {
    "coord": [34.541652, -84.921416],
    "cams": [{
        "id": "cctv_9309",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-317.jpg",
        "name": "I-75 : SR 225 / CHATSWORTH RD"
    }]
}, {
    "coord": [34.055144, -84.593288],
    "cams": [{
        "id": "cctv_16318",
        "url": "/georgiasnapshots/COBB-CAM-305.jpg",
        "name": "Wade Green Rd : I-75 NB"
    }]
}, {
    "coord": [34.77946, -84.914736],
    "cams": [{
        "id": "cctv_16113",
        "url": "/georgiasnapshots/GDOT-CAM-SR3-14.70.jpg",
        "name": "SR 3 : SR 52"
    }]
}, {
    "coord": [33.845568, -84.358488],
    "cams": [{
        "id": "cctv_6298",
        "stream": "/georgiavss1/atl-cam-043.stream/playlist.m3u8",
        "name": "Lenox Rd : E Paces Ferry"
    }]
}, {
    "coord": [31.998284, -81.255416],
    "cams": [{
        "id": "cctv_15528",
        "url": "/georgiasnapshots/SAV-CAM-001.jpg",
        "name": "SR 25/US 17 : WALMART DR"
    }]
}, {
    "coord": [33.717208, -84.502552],
    "cams": [{
        "id": "cctv_5380",
        "stream": "/georgiavss4/gdot-cam-943.stream/playlist.m3u8",
        "name": "I-285 : S OF CASCADE RD"
    }]
}, {
    "coord": [33.82412, -84.13304],
    "cams": [{
        "id": "cctv_5322",
        "stream": "/georgiavss4/gdot-cam-795.stream/playlist.m3u8",
        "name": "US 78 : 1 mi E of Hugh Howell Rd"
    }]
}, {
    "coord": [34.069012, -84.283224],
    "cams": [{
        "id": "cctv_9068",
        "stream": "/georgiavss1/alph-cam-005.stream/playlist.m3u8",
        "name": "SR 120 (Old Milton Pkwy) : Westside Pkwy"
    }]
}, {
    "coord": [33.963704, -84.131584],
    "cams": [{
        "id": "cctv_10282",
        "url": "/georgiasnapshots/GWIN-CAM-108.jpg",
        "name": "SATELLITE BLVD : GWINNETT PLANTATION WAY"
    }]
}, {
    "coord": [33.623856, -84.425336],
    "cams": [{
        "id": "cctv_5266",
        "stream": "/georgiavss4/gdot-cam-667.stream/playlist.m3u8",
        "name": "I-285 : 5TH RUNWAY TUNNEL ENTRANCE"
    }]
}, {
    "coord": [33.968032, -84.02292],
    "cams": [{
        "id": "cctv_10235",
        "url": "/georgiasnapshots/GWIN-CAM-061.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : SR 120"
    }]
}, {
    "coord": [33.57196, -84.3304],
    "cams": [{
        "id": "cctv_5276",
        "stream": "/georgiavss4/gdot-cam-705.stream/playlist.m3u8",
        "name": "I-75 : S OF JONESBORO RD"
    }]
}, {
    "coord": [33.896532, -84.281928],
    "cams": [{
        "id": "cctv_13583",
        "stream": "/georgiavss1/dek-cam-232.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Pinetree Plaza"
    }]
}, {
    "coord": [33.932472, -84.178656],
    "cams": [{
        "id": "cctv_10251",
        "url": "/georgiasnapshots/GWIN-CAM-077.jpg",
        "name": "SR 378 : INDIAN TRAIL - LILBURN RD"
    }]
}, {
    "coord": [33.789492, -84.622464],
    "cams": [{
        "id": "cctv_13199",
        "stream": "/georgiavss1/doug-cam-090.stream/playlist.m3u8",
        "name": "SR 6 : Maxham Rd"
    }]
}, {
    "coord": [33.595424, -84.640568],
    "cams": [{
        "id": "cctv_46456",
        "url": "/georgiasnapshots/FULT-CAM-034.jpg",
        "name": "SR 14 Alt/ South Fulton Pkwy : Cedar Grove Rd"
    }]
}, {
    "coord": [34.00122, -84.561568],
    "cams": [{
        "id": "cctv_15517",
        "stream": "/georgiavss3/gdot-cam-495.stream/playlist.m3u8",
        "name": "I-575 : JUST N OF I-75"
    }]
}, {
    "coord": [33.815172, -84.251808],
    "cams": [{
        "id": "cctv_5014",
        "stream": "/georgiavss2/gdot-cam-246.stream/playlist.m3u8",
        "name": "I-285 : STONE MT FRWY- US 78"
    }]
}, {
    "coord": [31.45011, -83.50836],
    "cams": [{
        "id": "cctv_16008",
        "url": "/georgiasnapshots/GDOT-CAM-SR520-10.11.jpg",
        "name": "SR 520/5TH ST : SR 7/ MAIN ST"
    }]
}, {
    "coord": [33.617132, -84.485656],
    "cams": [{
        "id": "cctv_4955",
        "stream": "/georgiavss2/gdot-cam-192.stream/playlist.m3u8",
        "name": "I-85 : I-285 FULTON CO"
    }]
}, {
    "coord": [33.932184, -84.461056],
    "cams": [{
        "id": "cctv_16062",
        "url": "/georgiasnapshots/COBB-CAM-098.jpg",
        "name": "Terrell Mill Rd : Greenwood Trl"
    }]
}, {
    "coord": [33.962636, -84.078992],
    "cams": [{
        "id": "cctv_5425",
        "stream": "/georgiavss2/gdot-cam-128.stream/playlist.m3u8",
        "name": "SR 316 : HERRINGTON RD"
    }]
}, {
    "coord": [33.7432, -84.3492],
    "cams": [{
        "id": "cctv_13610",
        "url": "/georgiasnapshots/ATL-CAM-063.jpg",
        "name": "SR 42 (Moreland Ave) : Faith Ave / McPherson Ave"
    }]
}, {
    "coord": [34.07344, -83.92172],
    "cams": [{
        "id": "cctv_15970",
        "url": "/georgiasnapshots/GDOT-CAM-797.jpg",
        "name": "I-85 : S OF HAMILTON MILL RD"
    }]
}, {
    "coord": [34.221824, -83.860808],
    "cams": [{
        "id": "cctv_32625",
        "url": "/georgiasnapshots/HALL-CAM-008.jpg",
        "name": "SR 13/ Atlanta Hwy : SR 332/ Popular Springs Rd"
    }]
}, {
    "coord": [34.075496, -83.98368],
    "cams": [{
        "id": "cctv_10217",
        "url": "/georgiasnapshots/GWIN-CAM-043.jpg",
        "name": "SR 20 : SR 324 (Gravel Springs Rd) / Financial Center"
    }]
}, {
    "coord": [34.363264, -84.036424],
    "cams": [{
        "id": "cctv_32555",
        "url": "/georgiasnapshots/DWSN-CAM-003.jpg",
        "name": "SR 400 : SR 53"
    }]
}, {
    "coord": [33.726472, -84.232128],
    "cams": [{
        "id": "cctv_5027",
        "stream": "/georgiavss2/gdot-cam-260.stream/playlist.m3u8",
        "name": "I-285 : N OF SNAPFINGER RD"
    }]
}, {
    "coord": [33.953364, -84.649288],
    "cams": [{
        "id": "cctv_7339",
        "url": "/georgiasnapshots/COBB-CAM-251.jpg",
        "name": "Dallas Hwy : Bob Cox Rd"
    }]
}, {
    "coord": [33.74892, -84.404536],
    "cams": [{
        "id": "cctv_15334",
        "stream": "/georgiavss1/atl-cam-543.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : Fair St"
    }]
}, {
    "coord": [33.707956, -84.497224],
    "cams": [{
        "id": "cctv_5379",
        "stream": "/georgiavss4/gdot-cam-942.stream/playlist.m3u8",
        "name": "I-285 : 1 MI N OF LANGFORD PKWY"
    }]
}, {
    "coord": [33.750636, -84.397176],
    "cams": [{
        "id": "cctv_15339",
        "url": "/georgiasnapshots/ATL-CAM-950.jpg",
        "name": "SR 14 (Peters St) : Ted Turner Dr"
    }]
}, {
    "coord": [33.6106, -84.3308],
    "cams": [{
        "id": "cctv_10471",
        "url": "/georgiasnapshots/CLAY-CAM-103.jpg",
        "name": "SR 331 / Forest Pkwy : North Pkwy"
    }]
}, {
    "coord": [33.624688, -84.45668],
    "cams": [{
        "id": "cctv_4960",
        "stream": "/georgiavss2/gdot-cam-197.stream/playlist.m3u8",
        "name": "I-85 : SULLIVAN RD"
    }]
}, {
    "coord": [33.799872, -84.39168],
    "cams": [{
        "id": "cctv_5364",
        "stream": "/georgiavss2/gdot-cam-092.stream/playlist.m3u8",
        "name": "I-85 : PEACHTREE ST OVERPASS"
    }]
}, {
    "coord": [32.618026, -83.641384],
    "cams": [{
        "id": "cctv_16086",
        "url": "/georgiasnapshots/GDOT-CAM-SR247C-4.7.jpg",
        "name": "SR 247C / Watson Blvd : Houston Rd"
    }]
}, {
    "coord": [34.010848, -84.56744],
    "cams": [{
        "id": "cctv_5154",
        "stream": "/georgiavss3/gdot-cam-427.stream/playlist.m3u8",
        "name": "I-75 : BARRETT PKWY"
    }]
}, {
    "coord": [32.879878, -83.769632],
    "cams": [{
        "id": "cctv_6026",
        "stream": "/georgiavss5/bibb-cam-031.stream/playlist.m3u8",
        "name": "I-475 : ZEBULON RD"
    }]
}, {
    "coord": [33.89324, -84.465816],
    "cams": [{
        "id": "cctv_13735",
        "url": "/georgiasnapshots/COBB-CAM-128.jpg",
        "name": "Windy Ridge Pkwy : Cir 75 Pkwy"
    }]
}, {
    "coord": [33.803732, -84.27688],
    "cams": [{
        "id": "cctv_5300",
        "stream": "/georgiavss4/gdot-cam-775.stream/playlist.m3u8",
        "name": "US 78 : ORION DR"
    }]
}, {
    "coord": [33.984648, -84.0858],
    "cams": [{
        "id": "cctv_15986",
        "stream": "/georgiavss2/gdot-cam-152.stream/playlist.m3u8",
        "name": "I-85 : EXIT TO SR 120"
    }]
}, {
    "coord": [33.5051, -84.3524],
    "cams": [{
        "id": "cctv_10493",
        "url": "/georgiasnapshots/CLAY-CAM-176.jpg",
        "name": "SR 3 / Tara Blvd : Poston Rd"
    }]
}, {
    "coord": [33.990724, -84.160632],
    "cams": [{
        "id": "cctv_46275",
        "url": "/georgiasnapshots/GWIN-CAM-212.jpg",
        "name": "PLEASANT HILL RD : TREE SUMMIT PKWY"
    }]
}, {
    "coord": [34.076628, -84.621096],
    "cams": [{
        "id": "cctv_5176",
        "stream": "/georgiavss3/gdot-cam-447.stream/playlist.m3u8",
        "name": "I-75 : S OF WOODSTOCK RD"
    }]
}, {
    "coord": [34.012968, -84.191544],
    "cams": [{
        "id": "cctv_6317",
        "url": "/georgiasnapshots/COJC-CAM-215.jpg",
        "name": "SR 141 (Medlock Bridge Rd) : Old Alabama Rd"
    }]
}, {
    "coord": [34.121852, -83.578192],
    "cams": [{
        "id": "cctv_32655",
        "url": "/georgiasnapshots/JACKS-CAM-001.jpg",
        "name": "SR 11 : Old Pendergrass"
    }]
}, {
    "coord": [34.24104, -84.410904],
    "cams": [{
        "id": "cctv_16162",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-16.jpg",
        "name": "SR 20 : UNION HILL RD/HARMONY DR"
    }]
}, {
    "coord": [33.65346, -84.003984],
    "cams": [{
        "id": "cctv_13070",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-082.jpg",
        "name": "I-20 : SR 20/SR 138 "
    }]
}, {
    "coord": [33.810828, -84.392296],
    "cams": [{
        "id": "cctv_7210",
        "stream": "/georgiavss1/atl-cam-030.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree St NE : Peachtree Valley Rd"
    }]
}, {
    "coord": [32.028744, -81.22112],
    "cams": [{
        "id": "cctv_15905",
        "url": "/georgiasnapshots/SAV-CAM-040.jpg",
        "name": "SR 25/US 17 : COTTONVALE RD"
    }]
}, {
    "coord": [32.018348, -80.976896],
    "cams": [{
        "id": "cctv_15893",
        "url": "/georgiasnapshots/SAV-CAM-033.jpg",
        "name": "JOHNNY MERCER BLVD : PENN WALLER RD"
    }]
}, {
    "coord": [33.827932, -84.250464],
    "cams": [{
        "id": "cctv_8957",
        "stream": "/georgiavss1/dek-cam-016.stream/playlist.m3u8",
        "name": "SR 8 (Lawrenceville Hwy) : Montreal Rd (East)"
    }]
}, {
    "coord": [34.051604, -84.361112],
    "cams": [{
        "id": "cctv_13154",
        "url": "/georgiasnapshots/ROSWELL-CAM-410.jpg",
        "name": "Crabapple Rd : Houze Way"
    }]
}, {
    "coord": [33.634908, -84.456808],
    "cams": [{
        "id": "cctv_4961",
        "stream": "/georgiavss2/gdot-cam-198.stream/playlist.m3u8",
        "name": "I-85 : N OF RIVERDALE RD"
    }]
}, {
    "coord": [33.630416, -84.392672],
    "cams": [{
        "id": "cctv_5050",
        "stream": "/georgiavss2/gdot-cam-281.stream/playlist.m3u8",
        "name": "I-285 : W OF US 19"
    }]
}, {
    "coord": [33.91, -84.4274],
    "cams": [{
        "id": "cctv_4971",
        "stream": "/georgiavss2/gdot-cam-207.stream/playlist.m3u8",
        "name": "I-285 : NEW NORTHSIDE"
    }]
}, {
    "coord": [33.85396, -84.382496],
    "cams": [{
        "id": "cctv_6299",
        "stream": "/georgiavss1/atl-cam-014.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : SR 9 / Roswell Rd"
    }]
}, {
    "coord": [34.654048, -84.983712],
    "cams": [{
        "id": "cctv_9314",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-326.jpg",
        "name": "I-75 : CARBONDALE RD"
    }]
}, {
    "coord": [34.08806, -84.26268],
    "cams": [{
        "id": "cctv_9075",
        "url": "/georgiasnapshots/ALPH-CAM-010b.jpg",
        "name": "Windward Pkwy : SR 400 SB"
    }]
}, {
    "coord": [33.522538, -82.048408],
    "cams": [{
        "id": "cctv_32862",
        "url": "/georgiasnapshots/AUG-CAM-172.jpg",
        "name": "River Watch Pkwy. : Stevens Creek Rd."
    }]
}, {
    "coord": [34.079256, -84.666648],
    "cams": [{
        "id": "cctv_5184",
        "stream": "/georgiavss3/gdot-cam-454.stream/playlist.m3u8",
        "name": "I-75 : 1/2 MI N OF SR 92"
    }]
}, {
    "coord": [33.924524, -84.464312],
    "cams": [{
        "id": "cctv_10533",
        "url": "/georgiasnapshots/COBB-CAM-090.jpg",
        "name": "Terrell Mill Rd : Delk Rd"
    }]
}, {
    "coord": [34.882088, -83.951152],
    "cams": [{
        "id": "cctv_32910",
        "url": "/georgiasnapshots/UNI-CAM-001.jpg",
        "name": "SR 2 / US 76 : Industrial Blvd"
    }]
}, {
    "coord": [33.520726, -84.24852],
    "cams": [{
        "id": "cctv_13596",
        "stream": "/georgiavss4/gdot-cam-685.stream/playlist.m3u8",
        "name": "I-75 : N OF FLIPPEN RD"
    }]
}, {
    "coord": [33.395764, -84.147384],
    "cams": [{
        "id": "cctv_13332",
        "stream": "/georgiavss4/gdot-cam-765.stream/playlist.m3u8",
        "name": "I-75 : BEFORE SR 155"
    }]
}, {
    "coord": [33.5225, -84.424104],
    "cams": [{
        "id": "cctv_10463",
        "url": "/georgiasnapshots/CLAY-CAM-061.jpg",
        "name": "SR 85 : Pointe South Pkwy"
    }]
}, {
    "coord": [34.068212, -84.539816],
    "cams": [{
        "id": "cctv_15389",
        "stream": "/georgiavss3/gdot-cam-547.stream/playlist.m3u8",
        "name": "I-575 : AT SHALLOWFORD"
    }]
}, {
    "coord": [33.568736, -84.274576],
    "cams": [{
        "id": "cctv_13218",
        "stream": "/georgiavss4/gdot-cam-770.stream/playlist.m3u8",
        "name": "I-675 : N OF SR 138"
    }]
}, {
    "coord": [33.749012, -84.389312],
    "cams": [{
        "id": "cctv_15308",
        "url": "/georgiasnapshots/ATL-CAM-937.jpg",
        "name": "Mitchell St : Washington St"
    }]
}, {
    "coord": [34.878112, -83.39712],
    "cams": [{
        "id": "cctv_32670",
        "url": "/georgiasnapshots/RABN-CAM-001.jpg",
        "name": "SR 15 : SR 2/Rickman St"
    }]
}, {
    "coord": [32.845348, -83.655616],
    "cams": [{
        "id": "cctv_5989",
        "url": "/georgiasnapshots/BIBB-CAM-527.jpg",
        "name": "VINEVILLE AVE : ROGER AVE"
    }]
}, {
    "coord": [34.209108, -84.1246],
    "cams": [{
        "id": "cctv_16370",
        "url": "/georgiasnapshots/FORS-CAM-018.jpg",
        "name": "SR 400 SB Ramp : Bald Ridge Marina"
    }]
}, {
    "coord": [33.963104, -84.493992],
    "cams": [{
        "id": "cctv_13118",
        "url": "/georgiasnapshots/COBB-CAM-167.jpg",
        "name": "SR 120 / Roswell Rd : N Greenbriar Pkwy"
    }]
}, {
    "coord": [34.054164, -84.011248],
    "cams": [{
        "id": "cctv_15977",
        "stream": "/georgiavss2/gdot-cam-165.stream/playlist.m3u8",
        "name": "I-85 : S OF SR 20"
    }]
}, {
    "coord": [33.66062, -84.42928],
    "cams": [{
        "id": "cctv_5297",
        "stream": "/georgiavss2/gdot-cam-075.stream/playlist.m3u8",
        "name": "I-85 : AT VIRGINIA AVE EXIT"
    }]
}, {
    "coord": [34.107584, -84.53364],
    "cams": [{
        "id": "cctv_15435",
        "stream": "/georgiavss3/gdot-cam-559.stream/playlist.m3u8",
        "name": "I-575 : N OF TOWNE LAKE"
    }]
}, {
    "coord": [33.845156, -84.368992],
    "cams": [{
        "id": "cctv_8828",
        "stream": "/georgiavss1/atl-cam-035.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Highland Dr"
    }]
}, {
    "coord": [34.025956, -84.332448],
    "cams": [{
        "id": "cctv_13145",
        "url": "/georgiasnapshots/ROSWELL-CAM-136.jpg",
        "name": "SR 140 : Old Holcomb Bridge Rd/Riverwood Ln"
    }]
}, {
    "coord": [33.061482, -83.960296],
    "cams": [{
        "id": "cctv_13569",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-189.jpg",
        "name": "I-75 : GDOT-CMS-915"
    }]
}, {
    "coord": [33.426182, -82.05272],
    "cams": [{
        "id": "cctv_32886",
        "url": "/georgiasnapshots/AUG-CAM-095.jpg",
        "name": "Hwy 1 : Lumpkin Rd."
    }]
}, {
    "coord": [33.61808, -84.434952],
    "cams": [{
        "id": "cctv_5586",
        "stream": "/georgiavss4/gdot-cam-649.stream/playlist.m3u8",
        "name": "I-285 : E OF RIVERDALE RD"
    }]
}, {
    "coord": [33.46838, -84.44608],
    "cams": [{
        "id": "cctv_6835",
        "stream": "/georgiavss1/fay-cam-110.stream/playlist.m3u8",
        "name": "SR 85 : Banks Rd"
    }]
}, {
    "coord": [33.985468, -84.269176],
    "cams": [{
        "id": "cctv_6268",
        "url": "/georgiasnapshots/ROSWELL-CAM-100.jpg",
        "name": "SR 140 : Barnwell Rd/Ellard Dr"
    }]
}, {
    "coord": [33.759452, -84.469368],
    "cams": [{
        "id": "cctv_16259",
        "url": "/georgiasnapshots/ATL-CAM-984.jpg",
        "name": "SR 280 / Hamilton E Holmes Dr : Godfrey Dr / Harvel Dr"
    }]
}, {
    "coord": [32.865142, -83.752416],
    "cams": [{
        "id": "cctv_6019",
        "stream": "/georgiavss5/bibb-cam-028.stream/playlist.m3u8",
        "name": "I-475 : REST AREA EXIT"
    }]
}, {
    "coord": [33.962216, -84.513952],
    "cams": [{
        "id": "cctv_15183",
        "url": "/georgiasnapshots/MAR-CAM-200.jpg",
        "name": "SR 120A/N Marietta Pkwy : Wallace Rd"
    }]
}, {
    "coord": [33.742672, -84.423456],
    "cams": [{
        "id": "cctv_5079",
        "stream": "/georgiavss3/gdot-cam-341.stream/playlist.m3u8",
        "name": "I-20 : LAWTON ST"
    }]
}, {
    "coord": [32.757492, -83.711408],
    "cams": [{
        "id": "cctv_6850",
        "stream": "/georgiavss5/bibb-cam-112.stream/playlist.m3u8",
        "name": "I-475 : AT I-75 S Split"
    }]
}, {
    "coord": [33.946872, -84.461656],
    "cams": [{
        "id": "cctv_7327",
        "url": "/georgiasnapshots/COBB-CAM-093.jpg",
        "name": "Lower Roswell Rd : Old Canton Rd"
    }]
}, {
    "coord": [34.020212, -84.117784],
    "cams": [{
        "id": "cctv_10302",
        "url": "/georgiasnapshots/GWIN-CAM-128.jpg",
        "name": "SR 13 / US 23 : SUGARLOAF PKWY"
    }]
}, {
    "coord": [34.215476, -83.88036],
    "cams": [{
        "id": "cctv_13272",
        "url": "/georgiasnapshots/GDOT-CAM-I-985-015.jpg",
        "name": "I-985 : Plainview Road"
    }]
}, {
    "coord": [33.641028, -84.374936],
    "cams": [{
        "id": "cctv_5046",
        "stream": "/georgiavss2/gdot-cam-278.stream/playlist.m3u8",
        "name": "I-285 : E OF CONLEY RD"
    }]
}, {
    "coord": [34.25746, -84.493792],
    "cams": [{
        "id": "cctv_16168",
        "url": "/georgiasnapshots/GDOT-CAM-SR140-12.8.jpg",
        "name": "SR 140 : SR 5 CONN."
    }]
}, {
    "coord": [33.736864, -84.230128],
    "cams": [{
        "id": "cctv_5025",
        "stream": "/georgiavss2/gdot-cam-259.stream/playlist.m3u8",
        "name": "I-285 : GLENWOOD RD"
    }]
}, {
    "coord": [32.784976, -83.71764],
    "cams": [{
        "id": "cctv_6005",
        "stream": "/georgiavss5/bibb-cam-014.stream/playlist.m3u8",
        "name": "I-475 : MILE POST 2"
    }]
}, {
    "coord": [34.056496, -84.231352],
    "cams": [{
        "id": "cctv_6320",
        "url": "/georgiasnapshots/COJC-CAM-405.jpg",
        "name": "State Bridge Rd : Kimball Bridge"
    }]
}, {
    "coord": [34.24302, -84.493512],
    "cams": [{
        "id": "cctv_16169",
        "url": "/georgiasnapshots/GDOT-CAM-SR140-13.75.jpg",
        "name": "SR 140 : SR 5 BU"
    }]
}, {
    "coord": [33.9285, -84.358104],
    "cams": [{
        "id": "cctv_5329",
        "stream": "/georgiavss4/gdot-cam-826.stream/playlist.m3u8",
        "name": "GA 400 : S OF ABERNATHY RD"
    }]
}, {
    "coord": [34.080668, -84.452296],
    "cams": [{
        "id": "cctv_6826",
        "stream": "/georgiavss1/cher-cam-004.stream/playlist.m3u8",
        "name": "SR 92 / Woodstock Rd : Wigley Rd"
    }]
}, {
    "coord": [33.64552, -84.013824],
    "cams": [{
        "id": "cctv_13361",
        "url": "/georgiasnapshots/ROCK-CAM-109.jpg",
        "name": "SR 138 / McDonough Rd : Old McDonough Rd"
    }]
}, {
    "coord": [33.91932, -83.97272],
    "cams": [{
        "id": "cctv_10317",
        "url": "/georgiasnapshots/GWIN-CAM-143.jpg",
        "name": "SUGARLOAF PKWY : SR 20"
    }]
}, {
    "coord": [34.029572, -84.584096],
    "cams": [{
        "id": "cctv_12902",
        "url": "/georgiasnapshots/COBB-CAM-318.jpg",
        "name": "Chastain Rd : Big Shanty Rd"
    }]
}, {
    "coord": [33.763436, -84.491776],
    "cams": [{
        "id": "cctv_5063",
        "stream": "/georgiavss3/gdot-cam-327.stream/playlist.m3u8",
        "name": "I-20 : 285 NB EXIT"
    }]
}, {
    "coord": [34.601708, -83.7654],
    "cams": [{
        "id": "cctv_32936",
        "url": "/georgiasnapshots/WHITE-CAM-004.jpg",
        "name": "SR 11 Bus : SR 75"
    }]
}, {
    "coord": [33.06948, -83.975064],
    "cams": [{
        "id": "cctv_13347",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-190.jpg",
        "name": "I-75 : Monroe Weigh Station"
    }]
}, {
    "coord": [33.896764, -84.461264],
    "cams": [{
        "id": "cctv_13654",
        "url": "/georgiasnapshots/COBB-CAM-131.jpg",
        "name": "Windy Ridge Pkwy : Interstate North Cir"
    }]
}, {
    "coord": [33.480896, -81.982464],
    "cams": [{
        "id": "cctv_32841",
        "url": "/georgiasnapshots/AUG-CAM-007.jpg",
        "name": "Broad St. : 15th"
    }]
}, {
    "coord": [33.977772, -84.549584],
    "cams": [{
        "id": "cctv_15170",
        "url": "/georgiasnapshots/MAR-CAM-101.jpg",
        "name": "SR 3/Cobb Pkwy : Canton Rd Conn"
    }]
}, {
    "coord": [33.697268, -84.408088],
    "cams": [{
        "id": "cctv_13054",
        "stream": "/georgiavss1/atl-cam-077.stream/playlist.m3u8",
        "name": "SR 3 (Metropolitan Pkwy) : Lakewood Ave"
    }]
}, {
    "coord": [34.04742, -84.177336],
    "cams": [{
        "id": "cctv_6860",
        "stream": "/georgiavss1/cojc-cam-140.stream/playlist.m3u8",
        "name": "SR 141 (Medlock Bridge Rd) : Abbotts Bridge Rd"
    }]
}, {
    "coord": [33.428718, -84.181824],
    "cams": [{
        "id": "cctv_13340",
        "stream": "/georgiavss4/gdot-cam-756.stream/playlist.m3u8",
        "name": "I-75 : ON SR 20/81 ENTR RAMP"
    }]
}, {
    "coord": [33.953244, -84.52184],
    "cams": [{
        "id": "cctv_15176",
        "url": "/georgiasnapshots/MAR-CAM-107.jpg",
        "name": "SR 3/Cobb Pkwy : Gresham Rd"
    }]
}, {
    "coord": [34.39108, -83.228784],
    "cams": [{
        "id": "cctv_13064",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-166.jpg",
        "name": "I-85 : SR 106"
    }]
}, {
    "coord": [33.70948, -84.402768],
    "cams": [{
        "id": "cctv_5123",
        "stream": "/georgiavss2/gdot-cam-004.stream/playlist.m3u8",
        "name": "75/85 : N OF LANGFORD PKWY"
    }]
}, {
    "coord": [34.251552, -84.4734],
    "cams": [{
        "id": "cctv_46477",
        "url": "/georgiasnapshots/CHER-CAM-201.jpg",
        "name": "SR 5bus : Riverstone Blvd"
    }]
}, {
    "coord": [33.919432, -84.305224],
    "cams": [{
        "id": "cctv_4990",
        "stream": "/georgiavss2/gdot-cam-224.stream/playlist.m3u8",
        "name": "I-285 : N SHALLOWFORD"
    }]
}, {
    "coord": [33.761824, -84.341928],
    "cams": [{
        "id": "cctv_46391",
        "url": "/georgiasnapshots/ATL-CAM-062.jpg",
        "name": "Dekalb Ave : Oakdale Rd/Whitefoord Ave"
    }]
}, {
    "coord": [33.858756, -84.29368],
    "cams": [{
        "id": "cctv_5157",
        "stream": "/georgiavss2/gdot-cam-043.stream/playlist.m3u8",
        "name": "I-85 : S OF SHALLOWFORD RD"
    }]
}, {
    "coord": [34.061504, -84.411672],
    "cams": [{
        "id": "cctv_6247",
        "url": "/georgiasnapshots/ROSWELL-CAM-218.jpg",
        "name": "SR 92 : Wildwood Springs Dr/Steeple Run"
    }]
}, {
    "coord": [31.526434, -82.850696],
    "cams": [{
        "id": "cctv_46335",
        "url": "/georgiasnapshots/COFF-CAM-001.jpg",
        "name": "SR 31 : CHESTER AVE/ MCNEIL"
    }]
}, {
    "coord": [33.558576, -84.549192],
    "cams": [{
        "id": "cctv_4942",
        "stream": "/georgiavss2/gdot-cam-180.stream/playlist.m3u8",
        "name": "I-85 : N OF FAYETTEVILLE RD"
    }]
}, {
    "coord": [33.841016, -84.313448],
    "cams": [{
        "id": "cctv_5414",
        "stream": "/georgiavss2/gdot-cam-140.stream/playlist.m3u8",
        "name": "Clairmont Rd : I-85 SB EXIT RAMP"
    }]
}, {
    "coord": [33.920724, -84.342376],
    "cams": [{
        "id": "cctv_32619",
        "url": "/georgiasnapshots/DUN-CAM-131.jpg",
        "name": "Hammond Dr : Mall South Ent"
    }]
}, {
    "coord": [34.786968, -84.77144],
    "cams": [{
        "id": "cctv_16105",
        "url": "/georgiasnapshots/GDOT-CAM-SR52-5.90.jpg",
        "name": "SR 52 : SR 61"
    }]
}, {
    "coord": [34.039404, -84.692392],
    "cams": [{
        "id": "cctv_9183",
        "url": "/georgiasnapshots/COBB-CAM-0343.jpg",
        "name": "SR 3/Cobb Pkwy : Mars Hill Rd"
    }]
}, {
    "coord": [33.692368, -84.29308],
    "cams": [{
        "id": "cctv_5036",
        "stream": "/georgiavss2/gdot-cam-269.stream/playlist.m3u8",
        "name": "I-285 : CLIFTON SPRINGS RD"
    }]
}, {
    "coord": [34.088728, -84.256928],
    "cams": [{
        "id": "cctv_9072",
        "url": "/georgiasnapshots/ALPH-CAM-008.jpg",
        "name": "Windward Pkwy : North Point Pkwy"
    }]
}, {
    "coord": [33.511714, -84.238096],
    "cams": [{
        "id": "cctv_5290",
        "stream": "/georgiavss4/gdot-cam-718.stream/playlist.m3u8",
        "name": "I-75 : N OF HUDSON BRIDGE RD"
    }]
}, {
    "coord": [33.92346, -84.345208],
    "cams": [{
        "id": "cctv_32621",
        "url": "/georgiasnapshots/DUN-CAM-133.jpg",
        "name": "Perimeter Ctr Pkwy : Mall Ent"
    }]
}, {
    "coord": [34.061476, -84.38824],
    "cams": [{
        "id": "cctv_13148",
        "url": "/georgiasnapshots/ROSWELL-CAM-212.jpg",
        "name": "SR 92 : Westwind Blvd/Manchester Way"
    }]
}, {
    "coord": [34.10548, -84.030304],
    "cams": [{
        "id": "cctv_10356",
        "url": "/georgiasnapshots/GWIN-CAM-182.jpg",
        "name": "SR 20 : SR 141 (Peachtree Industrial Blvd)"
    }]
}, {
    "coord": [33.543505, -84.343801],
    "cams": [{
        "id": "cctv_10472",
        "url": "/georgiasnapshots/CLAY-CAM-107.jpg",
        "name": "Mt Zion Rd : Southlake Pkwy"
    }]
}, {
    "coord": [33.933, -84.548368],
    "cams": [{
        "id": "cctv_13170",
        "url": "/georgiasnapshots/COBB-CAM-024.jpg",
        "name": "SR 280/South Cobb Dr : Appleton Dr"
    }]
}, {
    "coord": [33.767088, -84.389264],
    "cams": [{
        "id": "cctv_4936",
        "stream": "/georgiavss2/gdot-cam-016.stream/playlist.m3u8",
        "name": "75/85 : SPRING ST"
    }]
}, {
    "coord": [33.795296, -84.39368],
    "cams": [{
        "id": "cctv_4985",
        "stream": "/georgiavss2/gdot-cam-022.stream/playlist.m3u8",
        "name": "I-85 : 10th/14th/17th St Exit"
    }]
}, {
    "coord": [33.7517, -84.39432],
    "cams": [{
        "id": "cctv_15304",
        "url": "/georgiasnapshots/ATL-CAM-934.jpg",
        "name": "Mitchell St : Forsyth St"
    }]
}, {
    "coord": [34.001664, -84.074528],
    "cams": [{
        "id": "cctv_46315",
        "url": "/georgiasnapshots/GC-CAM-265.jpg",
        "name": "OLD PEACHTREE RD : I-85 SB RAMP"
    }]
}, {
    "coord": [33.5781, -84.340696],
    "cams": [{
        "id": "cctv_10453",
        "url": "/georgiasnapshots/CLAY-CAM-046.jpg",
        "name": "SR 54 : I-75 NB Ramp"
    }]
}, {
    "coord": [34.0225, -84.572],
    "cams": [{
        "id": "cctv_5160",
        "stream": "/georgiavss3/gdot-cam-432.stream/playlist.m3u8",
        "name": "I-75 : S OF BIG SHANTY"
    }]
}, {
    "coord": [33.736864, -84.387904],
    "cams": [{
        "id": "cctv_15456",
        "url": "/georgiasnapshots/ATL-CAM-966.jpg",
        "name": "Hank Aaron Dr / Capitol Ave : Georgia Ave"
    }]
}, {
    "coord": [33.976904, -84.416],
    "cams": [{
        "id": "cctv_12923",
        "url": "/georgiasnapshots/COBB-CAM-303.jpg",
        "name": "Johnson Ferry Rd : Woodlawn Dr"
    }]
}, {
    "coord": [33.579316, -84.2792],
    "cams": [{
        "id": "cctv_13220",
        "stream": "/georgiavss4/gdot-cam-768.stream/playlist.m3u8",
        "name": "I-675 : AT US 23/SR 42"
    }]
}, {
    "coord": [33.717648, -84.145928],
    "cams": [{
        "id": "cctv_13311",
        "url": "/georgiasnapshots/DEK-CAM-040.jpg",
        "name": "SR 12 (Covington Hwy) : Dekalb Medical Pkwy"
    }]
}, {
    "coord": [33.87568, -84.458488],
    "cams": [{
        "id": "cctv_13089",
        "url": "/georgiasnapshots/COBB-CAM-123.jpg",
        "name": "Cumberland Blvd : Walton Riverwood"
    }]
}, {
    "coord": [33.879632, -84.272576],
    "cams": [{
        "id": "cctv_5179",
        "stream": "/georgiavss2/gdot-cam-045.stream/playlist.m3u8",
        "name": "I-85 : CHAMBLEE-TUCKER"
    }]
}, {
    "coord": [34.054696, -84.27528],
    "cams": [{
        "id": "cctv_9079",
        "url": "/georgiasnapshots/ALPH-CAM-014a.jpg",
        "name": "North Point Pkwy : Kimball Bridge Rd"
    }]
}, {
    "coord": [33.95338, -84.050632],
    "cams": [{
        "id": "cctv_10260",
        "url": "/georgiasnapshots/GWIN-CAM-086.jpg",
        "name": "OLD NORCROSS RD : SUGARLOAF PKWY"
    }]
}, {
    "coord": [32.816544, -83.70948],
    "cams": [{
        "id": "cctv_5982",
        "url": "/georgiasnapshots/BIBB-CAM-520.jpg",
        "name": "EISENHOWER PKWY : LOG CABIN  DR"
    }]
}, {
    "coord": [33.744368, -84.40836],
    "cams": [{
        "id": "cctv_46409",
        "stream": "/georgiavss1/atl-cam-091.stream/playlist.m3u8",
        "name": "SR 3 / Northside Dr : Chapel St/Spelman Ln"
    }]
}, {
    "coord": [34.007688, -84.571008],
    "cams": [{
        "id": "cctv_7298",
        "url": "/georgiasnapshots/COBB-CAM-014.jpg",
        "name": "Barrett Pkwy : Cobb Place Blvd (East)"
    }]
}, {
    "coord": [33.772616, -84.630104],
    "cams": [{
        "id": "cctv_15418",
        "stream": "/georgiavss2/gdot-cam-311.stream/playlist.m3u8",
        "name": "I-20 : East of Mt Vernon Rd"
    }]
}, {
    "coord": [33.848576, -84.36632],
    "cams": [{
        "id": "cctv_8829",
        "stream": "/georgiavss1/atl-cam-036.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Stratford Rd"
    }]
}, {
    "coord": [33.840328, -84.51828],
    "cams": [{
        "id": "cctv_32595",
        "url": "/georgiasnapshots/COBB-CAM-069.jpg",
        "name": "East-West Conn. : Highland Ridge"
    }]
}, {
    "coord": [32.900848, -83.686824],
    "cams": [{
        "id": "cctv_5994",
        "url": "/georgiasnapshots/BIBB-CAM-532.jpg",
        "name": "RIVERSIDE DR : ARKWRIGHT RD"
    }]
}, {
    "coord": [33.9174, -84.3398],
    "cams": [{
        "id": "cctv_4984",
        "stream": "/georgiavss2/gdot-cam-219.stream/playlist.m3u8",
        "name": "I-285 : ASHFORD-DNWDY"
    }]
}, {
    "coord": [33.96754, -84.069488],
    "cams": [{
        "id": "cctv_10310",
        "url": "/georgiasnapshots/GWIN-CAM-136.jpg",
        "name": "SUGARLOAF PKWY : GWINNNETT TECHNICAL COLLEGE"
    }]
}, {
    "coord": [33.618, -84.4494],
    "cams": [{
        "id": "cctv_10501",
        "url": "/georgiasnapshots/CLAY-CAM-206.jpg",
        "name": "SR 139 / Riverdale Rd : SR 314 / W Fayetteville Rd"
    }]
}, {
    "coord": [33.903776, -84.274408],
    "cams": [{
        "id": "cctv_5231",
        "stream": "/georgiavss3/gdot-cam-581.stream/playlist.m3u8",
        "name": "I-285 : BUFORD HWY RAMP METER"
    }]
}, {
    "coord": [33.637952, -84.378176],
    "cams": [{
        "id": "cctv_5047",
        "stream": "/georgiavss2/gdot-cam-279.stream/playlist.m3u8",
        "name": "I-285 : W OF CONLEY RD"
    }]
}, {
    "coord": [33.778112, -84.607856],
    "cams": [{
        "id": "cctv_15420",
        "stream": "/georgiavss2/gdot-cam-314.stream/playlist.m3u8",
        "name": "I-20 : Thornton Rd"
    }]
}, {
    "coord": [34.023028, -84.559456],
    "cams": [{
        "id": "cctv_15725",
        "stream": "/georgiavss3/gdot-cam-540.stream/playlist.m3u8",
        "name": "I-575 : N OF BARRETT PKY"
    }]
}, {
    "coord": [33.5973, -84.428704],
    "cams": [{
        "id": "cctv_10488",
        "url": "/georgiasnapshots/CLAY-CAM-156.jpg",
        "name": "SR 139 : GARDEN WALK BLVD"
    }]
}, {
    "coord": [33.607564, -83.876552],
    "cams": [{
        "id": "cctv_13071",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-090.jpg",
        "name": "I-20 : SR 12 / TURNER LAKE RD"
    }]
}, {
    "coord": [34.26694, -85.206744],
    "cams": [{
        "id": "cctv_15373",
        "url": "/georgiasnapshots/FLYD-CAM-003.jpg",
        "name": "SR 20 : Elm Street"
    }]
}, {
    "coord": [34.8918, -85.074736],
    "cams": [{
        "id": "cctv_16306",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-345.45.jpg",
        "name": "I-75 : EXT 345"
    }]
}, {
    "coord": [33.538398, -84.3616],
    "cams": [{
        "id": "cctv_10483",
        "url": "/georgiasnapshots/CLAY-CAM-134.jpg",
        "name": "SR 138 : N MAIN ST"
    }]
}, {
    "coord": [33.885944, -84.315472],
    "cams": [{
        "id": "cctv_9141",
        "stream": "/georgiavss1/cham-cam-102.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Ind Blvd : Johnson Ferry Rd"
    }]
}, {
    "coord": [33.73338, -84.392536],
    "cams": [{
        "id": "cctv_5222",
        "stream": "/georgiavss3/gdot-cam-571.stream/playlist.m3u8",
        "name": "75/85 : RDA BLVD RAMP METER"
    }]
}, {
    "coord": [34.255996, -83.463608],
    "cams": [{
        "id": "cctv_32538",
        "url": "/georgiasnapshots/BANK-CAM-003.jpg",
        "name": "SR 15 : I-85 SB"
    }]
}, {
    "coord": [34.047556, -84.2224],
    "cams": [{
        "id": "cctv_16240",
        "url": "/georgiasnapshots/COJC-CAM-625.jpg",
        "name": "Jones Bridge Rd : Saddle Brook Shopping Center"
    }]
}, {
    "coord": [33.771272, -84.371856],
    "cams": [{
        "id": "cctv_15287",
        "url": "/georgiasnapshots/ATL-CAM-922.jpg",
        "name": "North Ave : Boulevard"
    }]
}, {
    "coord": [34.063, -84.602024],
    "cams": [{
        "id": "cctv_15503",
        "stream": "/georgiavss4/gdot-cam-699.stream/playlist.m3u8",
        "name": "HICKORY GROVE RD : EAST OF I-75"
    }]
}, {
    "coord": [33.912832, -84.34752],
    "cams": [{
        "id": "cctv_32933",
        "url": "/georgiasnapshots/BROK-CAM-083.jpg",
        "name": "Perimeter Center Pky : Lake Hearn"
    }]
}, {
    "coord": [34.004404, -84.169928],
    "cams": [{
        "id": "cctv_10208",
        "url": "/georgiasnapshots/GWIN-CAM-034.jpg",
        "name": "PEACHTREE INDUSTRIAL BLVD : PLEASANT HILL RD"
    }]
}, {
    "coord": [34.007592, -84.347088],
    "cams": [{
        "id": "cctv_13159",
        "url": "/georgiasnapshots/ROSWELL-CAM-420.jpg",
        "name": "Riverside Rd : Riverside Park/Riviera Rd"
    }]
}, {
    "coord": [31.926804, -81.332368],
    "cams": [{
        "id": "cctv_46538",
        "url": "/georgiasnapshots/BRY-CAM-003.jpg",
        "name": "SR 25 : I-95 NB Ramp"
    }]
}, {
    "coord": [33.428966, -84.090808],
    "cams": [{
        "id": "cctv_15571",
        "url": "/georgiasnapshots/HNRY-CAM-100.jpg",
        "name": "SR 81 : N/S BETHANY RD"
    }]
}, {
    "coord": [33.554636, -84.298976],
    "cams": [{
        "id": "cctv_5280",
        "stream": "/georgiavss4/gdot-cam-709.stream/playlist.m3u8",
        "name": "I-75 : 1 MI S OF MT ZION BLVD"
    }]
}, {
    "coord": [33.764264, -84.397344],
    "cams": [{
        "id": "cctv_15276",
        "stream": "/georgiavss1/atl-cam-914.stream/playlist.m3u8",
        "name": "Marietta St : Ivan Allen Jr Blvd"
    }]
}, {
    "coord": [33.908912, -84.82452],
    "cams": [{
        "id": "cctv_13168",
        "url": "/georgiasnapshots/PAUL-CAM-024.jpg",
        "name": "SR 6 : SR 61 / Nathan Dean Blvd"
    }]
}, {
    "coord": [33.505726, -84.230016],
    "cams": [{
        "id": "cctv_13247",
        "stream": "/georgiavss4/gdot-cam-741.stream/playlist.m3u8",
        "name": "I-75 : AT HUDSON BR RD"
    }]
}, {
    "coord": [33.776616, -84.473688],
    "cams": [{
        "id": "cctv_46415",
        "stream": "/georgiavss1/atl-cam-268.stream/playlist.m3u8",
        "name": "US 278 / Donald Lee Hollowell Pkwy : SR 280 / Holmes Dr / Jackson Pkwy"
    }]
}, {
    "coord": [33.574384, -84.56644],
    "cams": [{
        "id": "cctv_46447",
        "url": "/georgiasnapshots/FULT-CAM-024.jpg",
        "name": "GA 14/ US 29/ Roosevelt Hwy : GA 138/ Jonesboro Rd"
    }]
}, {
    "coord": [34.158424, -84.511776],
    "cams": [{
        "id": "cctv_15463",
        "stream": "/georgiavss3/gdot-cam-569.stream/playlist.m3u8",
        "name": "I-575 : N OF RABBIT HILL RD"
    }]
}, {
    "coord": [33.934152, -84.492832],
    "cams": [{
        "id": "cctv_5131",
        "stream": "/georgiavss3/gdot-cam-405.stream/playlist.m3u8",
        "name": "I-75 : 1/2 MI S OF S 120 LOOP"
    }]
}, {
    "coord": [34.3461, -83.317608],
    "cams": [{
        "id": "cctv_32573",
        "url": "/georgiasnapshots/FRKN-CAM-003.jpg",
        "name": "SR 51 : I-85 NB Interchange"
    }]
}, {
    "coord": [33.899112, -84.2034],
    "cams": [{
        "id": "cctv_10404",
        "url": "/georgiasnapshots/GWIN-CAM-245.jpg",
        "name": "SR 140 : Tracy Valley Dr / Gale Dr"
    }]
}, {
    "coord": [33.869896, -84.333912],
    "cams": [{
        "id": "cctv_8966",
        "stream": "/georgiavss1/brok-cam-105.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Town Blvd"
    }]
}, {
    "coord": [33.7442, -84.35568],
    "cams": [{
        "id": "cctv_5095",
        "stream": "/georgiavss3/gdot-cam-356.stream/playlist.m3u8",
        "name": "I-20 : W OF MORELAND AVE"
    }]
}, {
    "coord": [34.097796, -83.81404],
    "cams": [{
        "id": "cctv_13324",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-126.jpg",
        "name": "I-85 : SR 211"
    }]
}, {
    "coord": [33.85652, -84.294272],
    "cams": [{
        "id": "cctv_5376",
        "stream": "/georgiavss2/gdot-cam-094.stream/playlist.m3u8",
        "name": "I-85 : 1 MI S OF SHALLOWFORD"
    }]
}, {
    "coord": [33.597892, -84.493456],
    "cams": [{
        "id": "cctv_4950",
        "stream": "/georgiavss2/gdot-cam-188.stream/playlist.m3u8",
        "name": "I-85 : N OF BUFFINGTON RD"
    }]
}, {
    "coord": [33.8989, -84.2484],
    "cams": [{
        "id": "cctv_5344",
        "stream": "/georgiavss2/gdot-cam-084.stream/playlist.m3u8",
        "name": "I-85 : S OF PLEASANTDALE RD"
    }]
}, {
    "coord": [33.802716, -84.491504],
    "cams": [{
        "id": "cctv_5393",
        "stream": "/georgiavss4/gdot-cam-956.stream/playlist.m3u8",
        "name": "I-285 : N OF BOLTON RD"
    }]
}, {
    "coord": [33.81366, -84.392112],
    "cams": [{
        "id": "cctv_7213",
        "stream": "/georgiavss1/atl-cam-012.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd : Colonial Homes Dr"
    }]
}, {
    "coord": [34.44782, -84.447472],
    "cams": [{
        "id": "cctv_10149",
        "url": "/georgiasnapshots/GDOT-CAM-WTHR-025.jpg",
        "name": "SR 515 : BILL HASTY BLVD"
    }]
}, {
    "coord": [34.008356, -84.181224],
    "cams": [{
        "id": "cctv_6818",
        "url": "/georgiasnapshots/COJC-CAM-475.jpg",
        "name": "State Bridge Rd : St Georgian"
    }]
}, {
    "coord": [33.247418, -84.263552],
    "cams": [{
        "id": "cctv_15447",
        "url": "c2c.dot.ga.gov/snapshots/SPAL-CAM-007.jpg",
        "name": "SR 16 : SR 155/HILL ST"
    }]
}, {
    "coord": [33.893572, -84.328136],
    "cams": [{
        "id": "cctv_16369",
        "url": "/georgiasnapshots/BROK-CAM-073.jpg",
        "name": "Ashford Dunwoody Rd : Johnson Ferry Rd"
    }]
}, {
    "coord": [32.013668, -81.233],
    "cams": [{
        "id": "cctv_15541",
        "url": "/georgiasnapshots/SAV-CAM-004.jpg",
        "name": "SR 25/US 17 : Quacco Rd"
    }]
}, {
    "coord": [33.887212, -84.469784],
    "cams": [{
        "id": "cctv_13748",
        "url": "/georgiasnapshots/COBB-CAM-117.jpg",
        "name": "Circle 75 Pkwy : Heritage Ct"
    }]
}, {
    "coord": [30.859828, -83.948136],
    "cams": [{
        "id": "cctv_46368",
        "url": "/georgiasnapshots/THOM-CAM-005.jpg",
        "name": "SR 3 : E JACKSON ST"
    }]
}, {
    "coord": [33.473064, -81.958912],
    "cams": [{
        "id": "cctv_32835",
        "url": "/georgiasnapshots/AUG-CAM-029.jpg",
        "name": "Broad St. : 5th St."
    }]
}, {
    "coord": [33.870632, -84.015264],
    "cams": [{
        "id": "cctv_10226",
        "url": "/georgiasnapshots/GWIN-CAM-052.jpg",
        "name": "SR 124 : N of DOGWOOD RD"
    }]
}, {
    "coord": [33.845388, -84.538672],
    "cams": [{
        "id": "cctv_9171",
        "url": "/georgiasnapshots/COBB-CAM-068.jpg",
        "name": "EW Connector : Fontaine Rd"
    }]
}, {
    "coord": [33.72274, -84.939128],
    "cams": [{
        "id": "cctv_13207",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-024.jpg",
        "name": "I-20 : SR 61/101"
    }]
}, {
    "coord": [33.798132, -84.395312],
    "cams": [{
        "id": "cctv_4996",
        "stream": "/georgiavss2/gdot-cam-023.stream/playlist.m3u8",
        "name": "I-75 : N OF BROOKWOOD INTRCHGE"
    }]
}, {
    "coord": [34.057968, -84.521912],
    "cams": [{
        "id": "cctv_12899",
        "url": "/georgiasnapshots/COBB-CAM-154.jpg",
        "name": "Canton Rd : Shallowford Rd"
    }]
}, {
    "coord": [32.42163, -84.928152],
    "cams": [{
        "id": "cctv_9185",
        "url": "/georgiasnapshots/COLU-CAM-304.jpg",
        "name": "I-185 : AT MILE 1.2"
    }]
}, {
    "coord": [34.159036, -84.236296],
    "cams": [{
        "id": "cctv_16358",
        "url": "http://navigatos-c2c.dot.ga.gov/snapshots/FORS-CAM-013.JPG",
        "name": "SR 9/Atlanta Hwy : SR 371/Post Rd/Mullinax Rd"
    }]
}, {
    "coord": [34.084192, -84.072744],
    "cams": [{
        "id": "cctv_10397",
        "url": "/georgiasnapshots/GWIN-CAM-238.jpg",
        "name": "SUWANEE DAM RD : LEVEL CREEK RD - MOORE RD"
    }]
}, {
    "coord": [34.105816, -83.87292],
    "cams": [{
        "id": "cctv_32585",
        "url": "/georgiasnapshots/HALL-CAM-005.jpg",
        "name": "Spout Springs Rd : Thompson Mill Rd"
    }]
}, {
    "coord": [33.722884, -85.142816],
    "cams": [{
        "id": "cctv_16146",
        "url": "/georgiasnapshots/GDOT-CAM-SR8-13.65.jpg",
        "name": "SR 8 : GEORGIA AVE"
    }]
}, {
    "coord": [31.813962, -81.650568],
    "cams": [{
        "id": "cctv_46554",
        "url": "/georgiasnapshots/LIB-CAM-006.jpg",
        "name": "SR 196 : SR 119/ Airport Rd"
    }]
}, {
    "coord": [33.558284, -84.27048],
    "cams": [{
        "id": "cctv_13236",
        "stream": "/georgiavss4/gdot-cam-771.stream/playlist.m3u8",
        "name": "I-675 : N OF SR 138"
    }]
}, {
    "coord": [33.983208, -83.92592],
    "cams": [{
        "id": "cctv_46305",
        "url": "/georgiasnapshots/GWIN-CAM-255.jpg",
        "name": "SR 316 : SR 8/WINDER HWY"
    }]
}, {
    "coord": [33.735728, -84.368272],
    "cams": [{
        "id": "cctv_16068",
        "stream": "/georgiavss1/atl-cam-968.stream/playlist.m3u8",
        "name": "Boulevard : United Ave"
    }]
}, {
    "coord": [32.833812, -83.733264],
    "cams": [{
        "id": "cctv_6015",
        "stream": "/georgiavss5/bibb-cam-024.stream/playlist.m3u8",
        "name": "I-475 : SR 74"
    }]
}, {
    "coord": [33.5889, -84.3968],
    "cams": [{
        "id": "cctv_10528",
        "url": "/georgiasnapshots/CLAY-CAM-x900.jpg",
        "name": "Garden Walk Blvd : CR Drew HS"
    }]
}, {
    "coord": [34.080852, -83.986576],
    "cams": [{
        "id": "cctv_13109",
        "url": "/georgiasnapshots/GWIN-CAM-278.jpg",
        "name": "SR 20 : Sudderth Rd"
    }]
}, {
    "coord": [33.946288, -84.35828],
    "cams": [{
        "id": "cctv_5331",
        "stream": "/georgiavss4/gdot-cam-828.stream/playlist.m3u8",
        "name": "GA 400 : AT MARTA N SPRINGS EXIT"
    }]
}, {
    "coord": [34.078876, -84.649224],
    "cams": [{
        "id": "cctv_15248",
        "stream": "/georgiavss3/gdot-cam-536.stream/playlist.m3u8",
        "name": "I-75 : JUST S OF SR 92"
    }]
}, {
    "coord": [33.615392, -84.613824],
    "cams": [{
        "id": "cctv_46455",
        "url": "/georgiasnapshots/FULT-CAM-033.jpg",
        "name": "GA 92/ Campbellton/ Fairburn Rd : GA 92/ Campbellton/ Fairburn Rd"
    }]
}, {
    "coord": [34.031588, -84.06704],
    "cams": [{
        "id": "cctv_10290",
        "url": "/georgiasnapshots/GWIN-CAM-116.jpg",
        "name": "SATELLITE BLVD : MCGINNIS FERRY RD"
    }]
}, {
    "coord": [33.890756, -84.475944],
    "cams": [{
        "id": "cctv_7312",
        "url": "/georgiasnapshots/COBB-CAM-052.jpg",
        "name": "SR 3 / Cobb Pkwy : Herodian Way"
    }]
}, {
    "coord": [34.020544, -84.567656],
    "cams": [{
        "id": "cctv_16327",
        "url": "/georgiasnapshots/COBB-CAM-351.jpg",
        "name": "George Busbee Pkwy : Town Center Dr"
    }]
}, {
    "coord": [34.1094, -84.232496],
    "cams": [{
        "id": "cctv_5355",
        "stream": "/georgiavss4/gdot-cam-851.stream/playlist.m3u8",
        "name": "GA 400 : N OF UNION HILL RD"
    }]
}, {
    "coord": [34.035824, -84.465064],
    "cams": [{
        "id": "cctv_32610",
        "url": "/georgiasnapshots/COBB-CAM-209.jpg",
        "name": "Shallowford Rd : Gordy Pkwy (West)"
    }]
}, {
    "coord": [34.244824, -84.773296],
    "cams": [{
        "id": "cctv_9306",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-293.jpg",
        "name": "I-75 : US 411"
    }]
}, {
    "coord": [33.910724, -84.288483],
    "cams": [{
        "id": "cctv_10535",
        "stream": "/georgiavss1/dek-cam-029.stream/playlist.m3u8",
        "name": "SR 141 : Motors Industrial Way"
    }]
}, {
    "coord": [34.470552, -84.917464],
    "cams": [{
        "id": "cctv_16343",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-312.30.jpg",
        "name": "I-75 : EXT 312"
    }]
}, {
    "coord": [33.493096, -84.220896],
    "cams": [{
        "id": "cctv_13273",
        "stream": "/georgiavss4/gdot-cam-745.stream/playlist.m3u8",
        "name": "I-75 : 1 MI S OF HUDSON BR"
    }]
}, {
    "coord": [34.169216, -84.41392],
    "cams": [{
        "id": "cctv_46481",
        "url": "/georgiasnapshots/CHER-CAM-104.jpg",
        "name": "SR 140 : Hickory Rd"
    }]
}, {
    "coord": [33.965344, -84.523824],
    "cams": [{
        "id": "cctv_15475",
        "stream": "/georgiavss3/gdot-cam-487.stream/playlist.m3u8",
        "name": "I-75 : N MARIETTA PKY/SR 120 EXIT"
    }]
}, {
    "coord": [33.865444, -84.309512],
    "cams": [{
        "id": "cctv_15229",
        "stream": "/georgiavss1/brok-cam-209.stream/playlist.m3u8",
        "name": "SR 155 / Clairmont Rd : Dresden Dr"
    }]
}, {
    "coord": [33.484058, -82.081024],
    "cams": [{
        "id": "cctv_32864",
        "url": "/georgiasnapshots/AUG-CAM-239.jpg",
        "name": "Marks Church/Robert C Daniel : Wheeler Rd."
    }]
}, {
    "coord": [33.536594, -84.264008],
    "cams": [{
        "id": "cctv_13263",
        "stream": "/georgiavss4/gdot-cam-734.stream/playlist.m3u8",
        "name": "I-75 : S OF I-675"
    }]
}, {
    "coord": [32.943028, -83.811768],
    "cams": [{
        "id": "cctv_6035",
        "stream": "/georgiavss5/bibb-cam-039.stream/playlist.m3u8",
        "name": "I-475 : 1 MI S OF US 41/DIXIE HWY"
    }]
}, {
    "coord": [33.713096, -84.27196],
    "cams": [{
        "id": "cctv_13714",
        "stream": "/georgiavss1/dek-cam-307.stream/playlist.m3u8",
        "name": "SR 155 (Candler Rd) : I-20 EB Ramp"
    }]
}, {
    "coord": [33.727616, -84.322952],
    "cams": [{
        "id": "cctv_5057",
        "stream": "/georgiavss2/gdot-cam-301.stream/playlist.m3u8",
        "name": "I-20 : FLAT SHOALS RD RAMP METER"
    }]
}, {
    "coord": [34.07756, -83.890136],
    "cams": [{
        "id": "cctv_15993",
        "url": "/georgiasnapshots/GDOT-CAM-800.jpg",
        "name": "I-85 : S OF SPOUT SPRINGS RD"
    }]
}, {
    "coord": [33.752048, -84.392208],
    "cams": [{
        "id": "cctv_15451",
        "url": "/georgiasnapshots/ATL-CAM-960.jpg",
        "name": "MLK Jr Dr : Peachtree St"
    }]
}, {
    "coord": [32.16434, -81.435464],
    "cams": [{
        "id": "cctv_15236",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-144.jpg",
        "name": "I-16 : East of Bryan Co Weigh Station WB"
    }]
}, {
    "coord": [33.773396, -84.561408],
    "cams": [{
        "id": "cctv_15409",
        "stream": "/georgiavss3/gdot-cam-318.stream/playlist.m3u8",
        "name": "I-20 : Riverside Pkwy"
    }]
}, {
    "coord": [34.59672, -83.763256],
    "cams": [{
        "id": "cctv_46225",
        "url": "/georgiasnapshots/WHITE-CAM-003.jpg",
        "name": "SR 11 BUS : SR 115"
    }]
}, {
    "coord": [33.95774, -84.231064],
    "cams": [{
        "id": "cctv_5234",
        "stream": "/georgiavss3/gdot-cam-591.stream/playlist.m3u8",
        "name": "SR 141 (Peachtree Parkway) : N of Jay Bird Alley NW"
    }]
}, {
    "coord": [33.511234, -82.038168],
    "cams": [{
        "id": "cctv_32850",
        "url": "/georgiasnapshots/AUG-CAM-222.jpg",
        "name": "Washington Rd. : Boy Scout Rd./Center West"
    }]
}, {
    "coord": [33.816944, -84.363048],
    "cams": [{
        "id": "cctv_5110",
        "stream": "/georgiavss2/gdot-cam-037.stream/playlist.m3u8",
        "name": "I-85 : GA 400 RAMPS"
    }]
}, {
    "coord": [33.981848, -84.157248],
    "cams": [{
        "id": "cctv_10299",
        "url": "/georgiasnapshots/GWIN-CAM-125.jpg",
        "name": "SR 13 / US 23 : PLEASANT HILL RD"
    }]
}, {
    "coord": [33.545128, -84.244832],
    "cams": [{
        "id": "cctv_15239",
        "url": "/georgiasnapshots/HNRY-CAM-108.jpg",
        "name": "SR 138 / N Henry Blvd : Shields Rd / Flippen Rd"
    }]
}, {
    "coord": [34.059052, -84.383576],
    "cams": [{
        "id": "cctv_6251",
        "url": "/georgiasnapshots/ROSWELL-CAM-210.jpg",
        "name": "SR 92 : Woodstock Rd/King Rd"
    }]
}, {
    "coord": [32.07196, -81.160424],
    "cams": [{
        "id": "cctv_15731",
        "url": "/georgiasnapshots/SAV-CAM-013.jpg",
        "name": "CHATHAM PARKWAY : I-16 WB"
    }]
}, {
    "coord": [34.021632, -84.26416],
    "cams": [{
        "id": "cctv_16230",
        "url": "/georgiasnapshots/COJC-CAM-535.jpg",
        "name": "Old Alabama Rd : Brumbelow Rd"
    }]
}, {
    "coord": [33.812308, -84.558624],
    "cams": [{
        "id": "cctv_9178",
        "url": "/georgiasnapshots/COBB-CAM-231.jpg",
        "name": "SR 8 (Veterans Memorial Hwy) : Dodgen Rd"
    }]
}, {
    "coord": [33.890136, -84.285776],
    "cams": [{
        "id": "cctv_13672",
        "stream": "/georgiavss1/cham-cam-012.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Shallowford Rd"
    }]
}, {
    "coord": [33.95886, -84.003408],
    "cams": [{
        "id": "cctv_10269",
        "url": "/georgiasnapshots/GWIN-CAM-095.jpg",
        "name": "SR 120 : E of OLD NORCROSS RD"
    }]
}, {
    "coord": [33.985824, -84.171208],
    "cams": [{
        "id": "cctv_10207",
        "url": "/georgiasnapshots/GWIN-CAM-033.jpg",
        "name": "PEACHTREE INDUSTRIAL BLVD : N BERKELEY LAKE RD"
    }]
}, {
    "coord": [33.89604, -84.470016],
    "cams": [{
        "id": "cctv_13731",
        "url": "/georgiasnapshots/COBB-CAM-118.jpg",
        "name": "Circle 75 Pkwy : Herodian Way"
    }]
}, {
    "coord": [33.915472, -84.856672],
    "cams": [{
        "id": "cctv_15267",
        "url": "/georgiasnapshots/PAUL-CAM-029.jpg",
        "name": "SR 6 : SR 120 (Buchanan Highway)"
    }]
}, {
    "coord": [33.760992, -84.390592],
    "cams": [{
        "id": "cctv_15316",
        "url": "/georgiasnapshots/ATL-CAM-943.jpg",
        "name": "Williams St : John Portman Blvd"
    }]
}, {
    "coord": [33.9069, -84.5844],
    "cams": [{
        "id": "cctv_7359",
        "url": "/georgiasnapshots/COBB-CAM-448.jpg",
        "name": "County Services Pkwy : County Services Pkwy"
    }]
}, {
    "coord": [33.995516, -83.733472],
    "cams": [{
        "id": "cctv_32545",
        "url": "/georgiasnapshots/BARR-CAM-003.jpg",
        "name": "SR 211 : Horton Street"
    }]
}, {
    "coord": [34.176592, -84.786096],
    "cams": [{
        "id": "cctv_46468",
        "url": "/georgiasnapshots/BART-CAM-002.jpg",
        "name": "SR 3 : Gentilly Blvd"
    }]
}, {
    "coord": [33.913616, -84.335784],
    "cams": [{
        "id": "cctv_46558",
        "url": "/georgiasnapshots/BROK-CAM-077.jpg",
        "name": "Ashford Dunwoody : Perimeter Summit"
    }]
}, {
    "coord": [34.245132, -83.458568],
    "cams": [{
        "id": "cctv_32536",
        "url": "/georgiasnapshots/BANK-CAM-001.jpg",
        "name": "SR 15 : Walmart/Dallas Dr."
    }]
}, {
    "coord": [33.746264, -84.49748],
    "cams": [{
        "id": "cctv_5383",
        "stream": "/georgiavss4/gdot-cam-946.stream/playlist.m3u8",
        "name": "I-285 : N OF BENJAMIN E MAYS DR"
    }]
}, {
    "coord": [31.203874, -81.508608],
    "cams": [{
        "id": "cctv_46278",
        "url": "/georgiasnapshots/GLY-CAM-002.jpg",
        "name": "SR 303 (Community Road) : SR 27 (New Jesup Highway)"
    }]
}, {
    "coord": [31.207156, -82.336824],
    "cams": [{
        "id": "cctv_13180",
        "url": "/georgiasnapshots/WAR-CAM-003.jpg",
        "name": "82/SR 520 : US 1 - MEMORIAL DR"
    }]
}, {
    "coord": [33.742812, -84.383448],
    "cams": [{
        "id": "cctv_5090",
        "stream": "/georgiavss3/gdot-cam-351.stream/playlist.m3u8",
        "name": "I-20 : E OF CAPITOL AVE"
    }]
}, {
    "coord": [34.052872, -84.594056],
    "cams": [{
        "id": "cctv_16319",
        "url": "/georgiasnapshots/COBB-CAM-306.jpg",
        "name": "Wade Green Rd : I-75 SB"
    }]
}, {
    "coord": [33.926168, -84.020616],
    "cams": [{
        "id": "cctv_10314",
        "url": "/georgiasnapshots/GWIN-CAM-140.jpg",
        "name": "SUGARLOAF PKWY : LONGMONT DR"
    }]
}, {
    "coord": [33.913072, -84.395632],
    "cams": [{
        "id": "cctv_4976",
        "stream": "/georgiavss2/gdot-cam-211.stream/playlist.m3u8",
        "name": "I-285 : LONG ISLAND DR"
    }]
}, {
    "coord": [33.918792, -84.165344],
    "cams": [{
        "id": "cctv_10386",
        "url": "/georgiasnapshots/GWIN-CAM-220.jpg",
        "name": "INDIAN TRAIL LILBURN RD : GEORGIA BELLE CT"
    }]
}, {
    "coord": [33.509888, -82.028304],
    "cams": [{
        "id": "cctv_32848",
        "url": "/georgiasnapshots/AUG-CAM-218.jpg",
        "name": "Washington Rd. : Alexander Dr./Berckmans Rd"
    }]
}, {
    "coord": [34.025232, -84.481136],
    "cams": [{
        "id": "cctv_12912",
        "url": "/georgiasnapshots/COBB-CAM-216.jpg",
        "name": "Sandy Plains Rd : Trickum Rd"
    }]
}, {
    "coord": [34.26972, -83.81956],
    "cams": [{
        "id": "cctv_32638",
        "url": "/georgiasnapshots/HALL-CAM-019.jpg",
        "name": "I-985 SB : SR 60"
    }]
}, {
    "coord": [34.068756, -84.27048],
    "cams": [{
        "id": "cctv_13605",
        "stream": "/georgiavss1/alph-cam-023.stream/playlist.m3u8",
        "name": "SR 120 (Old Milton Pkwy) : SR 400 NB Ramp"
    }]
}, {
    "coord": [34.055676, -83.96988],
    "cams": [{
        "id": "cctv_15968",
        "stream": "/georgiavss2/gdot-cam-171.stream/playlist.m3u8",
        "name": "I-85 : 1 MILE N OF SR 20"
    }]
}, {
    "coord": [34.021416, -84.26708],
    "cams": [{
        "id": "cctv_16229",
        "url": "/georgiasnapshots/COJC-CAM-530.jpg",
        "name": "Old Alabama Rd : Newtown Park/Fire Station 63"
    }]
}, {
    "coord": [34.46868, -83.967568],
    "cams": [{
        "id": "cctv_32663",
        "url": "/georgiasnapshots/LUMPKN-CAM-003",
        "name": "SR 60 : SR 400"
    }]
}, {
    "coord": [33.843624, -84.379184],
    "cams": [{
        "id": "cctv_8832",
        "stream": "/georgiavss1/atl-cam-039.stream/playlist.m3u8",
        "name": "SR 9 / Roswell Rd : E Andrews Dr"
    }]
}, {
    "coord": [33.537982, -84.263392],
    "cams": [{
        "id": "cctv_5285",
        "stream": "/georgiavss4/gdot-cam-713.stream/playlist.m3u8",
        "name": "I-75 : I-675"
    }]
}, {
    "coord": [34.576576, -83.762608],
    "cams": [{
        "id": "cctv_32965",
        "url": "/georgiasnapshots/WHITE-CAM-001.jpg",
        "name": "SR 11 : Thurmond Pkwy"
    }]
}, {
    "coord": [33.32655, -84.512272],
    "cams": [{
        "id": "cctv_16361",
        "url": "/georgiasnapshots/FAY-CAM-216.jpg",
        "name": "SR 85 : SR 74 / Padget Rd"
    }]
}, {
    "coord": [34.081188, -84.676288],
    "cams": [{
        "id": "cctv_9304",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-278.jpg",
        "name": "I-75 : GLADE RD"
    }]
}, {
    "coord": [33.941216, -83.982792],
    "cams": [{
        "id": "cctv_10349",
        "url": "/georgiasnapshots/GWIN-CAM-175.jpg",
        "name": "SR 20 : GWINNETT DR"
    }]
}, {
    "coord": [34.019976, -84.041168],
    "cams": [{
        "id": "cctv_10241",
        "url": "/georgiasnapshots/GWIN-CAM-067.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : E of McGINNIS FERRY RD"
    }]
}, {
    "coord": [33.964128, -84.102832],
    "cams": [{
        "id": "cctv_5421",
        "stream": "/georgiavss2/gdot-cam-124.stream/playlist.m3u8",
        "name": "I-85 : SR 316"
    }]
}, {
    "coord": [33.764632, -84.38416],
    "cams": [{
        "id": "cctv_16206",
        "url": "/georgiasnapshots/ATL-CAM-982.jpg",
        "name": "Ralph McGill Blvd : Courtland St"
    }]
}, {
    "coord": [34.0068, -84.350808],
    "cams": [{
        "id": "cctv_9025",
        "url": "/georgiasnapshots/ROSWELL-CAM-300.jpg",
        "name": "SR 9 : Riverside Dr/Azalea Dr"
    }]
}, {
    "coord": [34.013932, -84.608728],
    "cams": [{
        "id": "cctv_7347",
        "url": "/georgiasnapshots/COBB-CAM-321.jpg",
        "name": "McCollum Pkwy : Old 41 Hwy"
    }]
}, {
    "coord": [33.850092, -84.218384],
    "cams": [{
        "id": "cctv_13215",
        "url": "/georgiasnapshots/DEK-CAM-022.jpg",
        "name": "SR 8 (Lawrenceville Hwy) : Fellowship Rd"
    }]
}, {
    "coord": [32.470322, -84.987904],
    "cams": [{
        "id": "cctv_15909",
        "url": "/georgiasnapshots/COLU-CAM-016.jpg",
        "name": "SR 1/VETERANS PKY : SR 22 SPUR/13TH ST"
    }]
}, {
    "coord": [33.958824, -84.134064],
    "cams": [{
        "id": "cctv_10281",
        "url": "/georgiasnapshots/GWIN-CAM-107.jpg",
        "name": "SATELLITE BLVD : PLEASANT HILL RD"
    }]
}, {
    "coord": [33.881432, -84.250184],
    "cams": [{
        "id": "cctv_5003",
        "stream": "/georgiavss2/gdot-cam-236.stream/playlist.m3u8",
        "name": "I-285 : S OF CHAMBLEE-TCKR"
    }]
}, {
    "coord": [34.061928, -84.40132],
    "cams": [{
        "id": "cctv_6249",
        "url": "/georgiasnapshots/ROSWELL-CAM-216.jpg",
        "name": "SR 92 : Bowen Rd/Mtn Park Rd"
    }]
}, {
    "coord": [31.838412, -81.595288],
    "cams": [{
        "id": "cctv_46255",
        "url": "http:/navigator-c2c.dot.ga.gov/snapshots/LIB-CAM-001.jpg",
        "name": "SR 38 (West Oglethorpe Highway) : General Screven Way"
    }]
}, {
    "coord": [34.063944, -84.210728],
    "cams": [{
        "id": "cctv_16252",
        "url": "/georgiasnapshots/COJC-CAM-670.jpg",
        "name": "Abbotts Bridge Rd : Addison Way"
    }]
}, {
    "coord": [33.683952, -85.150392],
    "cams": [{
        "id": "cctv_16173",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-20.9.jpg",
        "name": "SR 1 : I-20 EB (EXIT 11)"
    }]
}, {
    "coord": [33.583128, -84.514392],
    "cams": [{
        "id": "cctv_4947",
        "stream": "/georgiavss2/gdot-cam-185.stream/playlist.m3u8",
        "name": "I-85 : S OF FLAT SHOALS RD"
    }]
}, {
    "coord": [33.8895, -84.2564],
    "cams": [{
        "id": "cctv_5001",
        "stream": "/georgiavss2/gdot-cam-234.stream/playlist.m3u8",
        "name": "I-285 : W OF CHAMBLEE-TCKR"
    }]
}, {
    "coord": [33.73, -84.393],
    "cams": [{
        "id": "cctv_5243",
        "stream": "/georgiavss2/gdot-cam-006.stream/playlist.m3u8",
        "name": "75/85 : PRYOR ST"
    }]
}, {
    "coord": [32.716664, -83.728776],
    "cams": [{
        "id": "cctv_6840",
        "url": "/georgiasnapshots/BIBB-CAM-103.jpg",
        "name": "I-75 : AT SARDIS CHURCH"
    }]
}, {
    "coord": [30.875014, -83.976808],
    "cams": [{
        "id": "cctv_46370",
        "url": "/georgiasnapshots/THOM-CAM-007.jpg",
        "name": "SR 3 : COUNTY LINE RD"
    }]
}, {
    "coord": [34.174268, -84.758432],
    "cams": [{
        "id": "cctv_16125",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-287.60.jpg",
        "name": "I-75 : SR 113 (EXIT 288)"
    }]
}, {
    "coord": [33.43996, -84.454744],
    "cams": [{
        "id": "cctv_6757",
        "stream": "/georgiavss1/fay-cam-117.stream/playlist.m3u8",
        "name": "SR 85 : Grady Ave / Bradley Dr"
    }]
}, {
    "coord": [33.08305, -84.918232],
    "cams": [{
        "id": "cctv_12952",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-022.2.jpg",
        "name": "I-85 : TROUP CO WEIGH STATION"
    }]
}, {
    "coord": [33.851888, -84.210312],
    "cams": [{
        "id": "cctv_13354",
        "url": "/georgiasnapshots/DEK-CAM-027.jpg",
        "name": "SR 8 (Lawrenceville Hwy) : SR 236 / Hugh Howell Rd"
    }]
}, {
    "coord": [32.95351, -83.812696],
    "cams": [{
        "id": "cctv_6036",
        "stream": "/georgiavss5/bibb-cam-040.stream/playlist.m3u8",
        "name": "I-475 : US 41"
    }]
}, {
    "coord": [34.02756, -84.5682],
    "cams": [{
        "id": "cctv_7368",
        "url": "/georgiasnapshots/COBB-CAM-313.jpg",
        "name": "George Busbee Pkwy : Big Shanty Rd"
    }]
}, {
    "coord": [33.438888, -82.012856],
    "cams": [{
        "id": "cctv_32878",
        "url": "/georgiasnapshots/AUG-CAM-075.jpg",
        "name": "Gordon Hwy : Tubman Home Rd."
    }]
}, {
    "coord": [33.53593, -84.261816],
    "cams": [{
        "id": "cctv_13229",
        "stream": "/georgiavss4/gdot-cam-733.stream/playlist.m3u8",
        "name": "I-75 : S OF I-675"
    }]
}, {
    "coord": [34.075608, -84.294592],
    "cams": [{
        "id": "cctv_9065",
        "stream": "/georgiavss1/alph-cam-002.stream/playlist.m3u8",
        "name": "SR 9 / North Main St : Academy St / Milton Ave"
    }]
}, {
    "coord": [33.7329, -84.322472],
    "cams": [{
        "id": "cctv_5102",
        "stream": "/georgiavss3/gdot-cam-362.stream/playlist.m3u8",
        "name": "I-20 : W OF FLAT SHOALS"
    }]
}, {
    "coord": [34.298724, -83.856872],
    "cams": [{
        "id": "cctv_32635",
        "url": "/georgiasnapshots/HALL-CAM-016.JPG",
        "name": "SR 53/Mundy Mill Rd : McEver Rd"
    }]
}, {
    "coord": [33.77764, -84.241664],
    "cams": [{
        "id": "cctv_13058",
        "stream": "/georgiavss1/dek-cam-051.stream/playlist.m3u8",
        "name": "SR 10 (Memorial Drive) : I-285 SB Ramp"
    }]
}, {
    "coord": [33.763548, -84.402912],
    "cams": [{
        "id": "cctv_13080",
        "stream": "/georgiavss1/atl-cam-084.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : Ivan Allen Jr Blvd"
    }]
}, {
    "coord": [32.84156, -83.662088],
    "cams": [{
        "id": "cctv_5967",
        "url": "/georgiasnapshots/BIBB-CAM-505.jpg",
        "name": "PIO NONO AVE : ROFF AVE"
    }]
}, {
    "coord": [33.830952, -84.181664],
    "cams": [{
        "id": "cctv_5312",
        "stream": "/georgiavss4/gdot-cam-786.stream/playlist.m3u8",
        "name": "US 78 : W OF JULIETTE RD"
    }]
}, {
    "coord": [33.799764, -84.392568],
    "cams": [{
        "id": "cctv_7207",
        "stream": "/georgiavss1/atl-cam-033.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree St NE : Deering Rd"
    }]
}, {
    "coord": [33.80304, -84.250976],
    "cams": [{
        "id": "cctv_5016",
        "stream": "/georgiavss2/gdot-cam-248.stream/playlist.m3u8",
        "name": "I-285 : E PONCE DE LEON AVE"
    }]
}, {
    "coord": [31.137008, -81.573888],
    "cams": [{
        "id": "cctv_46548",
        "url": "/georgiasnapshots/GLY-CAM-005.jpg",
        "name": "SR 25/ SR 520 : I-95 NB Ramp"
    }]
}, {
    "coord": [33.568968, -85.078152],
    "cams": [{
        "id": "cctv_46492",
        "url": "/georgiasnapshots/CARR-CAM-002.jpg",
        "name": "SR 1 : Tojan Dr"
    }]
}, {
    "coord": [33.950056, -83.999464],
    "cams": [{
        "id": "cctv_10219",
        "url": "/georgiasnapshots/GWIN-CAM-045.jpg",
        "name": "US 29 : GWINNETT DR"
    }]
}, {
    "coord": [33.83524, -84.40732],
    "cams": [{
        "id": "cctv_46412",
        "stream": "/georgiavss1/atl-cam-098.stream/playlist.m3u8",
        "name": "SR 3 / Northside Dr : Arden Rd/Castlewood Dr"
    }]
}, {
    "coord": [32.040622, -81.064016],
    "cams": [{
        "id": "cctv_15808",
        "url": "/georgiasnapshots/SAV-CAM-025.jpg",
        "name": "SR 26/VICTORY DR : SKIDAWAY RD"
    }]
}, {
    "coord": [33.85092, -84.2464],
    "cams": [{
        "id": "cctv_5008",
        "stream": "/georgiavss2/gdot-cam-240.stream/playlist.m3u8",
        "name": "I-285 : NORTHLAKE PKWY"
    }]
}, {
    "coord": [33.8258, -84.35284],
    "cams": [{
        "id": "cctv_13765",
        "stream": "/georgiavss1/atl-cam-602.stream/playlist.m3u8",
        "name": "SR 13 : Lenox Rd / Cheshire Bridge Rd"
    }]
}, {
    "coord": [33.911944, -84.207224],
    "cams": [{
        "id": "cctv_10188",
        "url": "/georgiasnapshots/GWIN-CAM-010.jpg",
        "name": "SR 140 : I-85 NB Ramp"
    }]
}, {
    "coord": [33.538898, -84.3022],
    "cams": [{
        "id": "cctv_10522",
        "url": "/georgiasnapshots/CLAY-CAM-C606.jpg",
        "name": "SR 138 : Hillcrest Trail"
    }]
}, {
    "coord": [33.433612, -84.171744],
    "cams": [{
        "id": "cctv_13580",
        "url": "/georgiasnapshots/HNRY-CAM-920.jpg",
        "name": "SR 20 : Regency Park Dr"
    }]
}, {
    "coord": [33.87936, -84.45544],
    "cams": [{
        "id": "cctv_16312",
        "url": "/georgiasnapshots/COBB-CAM-138.jpg",
        "name": "Cobb Galleria Pkwy : BBT"
    }]
}, {
    "coord": [33.93712, -84.159736],
    "cams": [{
        "id": "cctv_10413",
        "url": "/georgiasnapshots/GCDOT-IVDS-108-PH5.jpg",
        "name": "SR 378 : I-85 SB"
    }]
}, {
    "coord": [33.742748, -84.7766],
    "cams": [{
        "id": "cctv_46423",
        "url": "/georgiasnapshots/DOUG-CAM-098.jpg",
        "name": "SR 8/ US 78/ Veterans Memorial HWY : GA 5/ Bill Arp Rd"
    }]
}, {
    "coord": [34.008108, -84.567504],
    "cams": [{
        "id": "cctv_16314",
        "stream": "/georgiavss3/gdot-cam-496.stream/playlist.m3u8",
        "name": "I-75 : BARRETT PKY ENT RAMP"
    }]
}, {
    "coord": [33.722036, -84.7734],
    "cams": [{
        "id": "cctv_12946",
        "url": "/georgiasnapshots/DOUG-CAM-021.jpg",
        "name": "Douglas Blvd : Stewart Pkwy"
    }]
}, {
    "coord": [33.71174, -84.219792],
    "cams": [{
        "id": "cctv_13664",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-068.jpg",
        "name": "I-20 : W of Wesley Chapel Rd"
    }]
}, {
    "coord": [34.087592, -84.534576],
    "cams": [{
        "id": "cctv_15546",
        "stream": "/georgiavss3/gdot-cam-556.stream/playlist.m3u8",
        "name": "I-575 : N OF SR 92"
    }]
}, {
    "coord": [31.220616, -81.52244],
    "cams": [{
        "id": "cctv_13183",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-036.jpg",
        "name": "I-95 : US 341 / SR 27"
    }]
}, {
    "coord": [33.636736, -84.49156],
    "cams": [{
        "id": "cctv_5368",
        "stream": "/georgiavss4/gdot-cam-932.stream/playlist.m3u8",
        "name": "I-285 : WASHINGTON RD"
    }]
}, {
    "coord": [34.06476, -84.170304],
    "cams": [{
        "id": "cctv_16216",
        "stream": "/georgiavss1/cojc-cam-245.stream/playlist.m3u8",
        "name": "SR 141 : Hospital Pkwy"
    }]
}, {
    "coord": [34.025316, -84.360672],
    "cams": [{
        "id": "cctv_9031",
        "url": "/georgiasnapshots/ROSWELL-CAM-312.jpg",
        "name": "SR 9 : Norcross St"
    }]
}, {
    "coord": [33.724152, -84.349424],
    "cams": [{
        "id": "cctv_13609",
        "url": "/georgiasnapshots/ATL-CAM-060.jpg",
        "name": "SR 42 (Moreland Ave) : United Ave"
    }]
}, {
    "coord": [33.97322, -83.851192],
    "cams": [{
        "id": "cctv_46309",
        "url": "/georgiasnapshots/GWIN-CAM-259.jpg",
        "name": "SR 316 : E OF DROWNING CREEK"
    }]
}, {
    "coord": [30.68027, -83.223776],
    "cams": [{
        "id": "cctv_15996",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-5.00.jpg",
        "name": "I-75 : SR 376/LAKES BLVD"
    }]
}, {
    "coord": [33.766928, -84.23216],
    "cams": [{
        "id": "cctv_5021",
        "stream": "/georgiavss2/gdot-cam-254.stream/playlist.m3u8",
        "name": "I-285 : NEAR INDIAN CREEK MARTA"
    }]
}, {
    "coord": [33.419896, -84.17248],
    "cams": [{
        "id": "cctv_13255",
        "stream": "/georgiavss4/gdot-cam-759.stream/playlist.m3u8",
        "name": "I-75 : S OF SR 20/81"
    }]
}, {
    "coord": [33.525326, -84.253032],
    "cams": [{
        "id": "cctv_13563",
        "stream": "/georgiavss4/gdot-cam-736.stream/playlist.m3u8",
        "name": "I-75 : S OF WALT STEPHENS"
    }]
}, {
    "coord": [33.808116, -84.654168],
    "cams": [{
        "id": "cctv_13600",
        "url": "/georgiasnapshots/COBB-CAM-263.jpg",
        "name": "SR 6 : Humphries Hill Rd"
    }]
}, {
    "coord": [33.773928, -84.359928],
    "cams": [{
        "id": "cctv_7197",
        "stream": "/georgiavss1/atl-cam-210.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : SR 10/Freedom Pkwy"
    }]
}, {
    "coord": [34.082764, -84.457816],
    "cams": [{
        "id": "cctv_6825",
        "stream": "/georgiavss1/cher-cam-009.stream/playlist.m3u8",
        "name": "SR 92 / Woodstock Rd : Mountain Brook"
    }]
}, {
    "coord": [33.918792, -84.113856],
    "cams": [{
        "id": "cctv_10321",
        "url": "/georgiasnapshots/GWIN-CAM-147.jpg",
        "name": "PLEASANT HILL RD : MARY ST"
    }]
}, {
    "coord": [34.328596, -84.0572],
    "cams": [{
        "id": "cctv_32570",
        "url": "/georgiasnapshots/FORS-CAM-037.jpg",
        "name": "SR 400 : Jot-Em-Down Rd"
    }]
}, {
    "coord": [34.761316, -85.002272],
    "cams": [{
        "id": "cctv_9288",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-333.jpg",
        "name": "I-75 : SR 52"
    }]
}, {
    "coord": [33.543834, -83.07776],
    "cams": [{
        "id": "cctv_13189",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-138.jpg",
        "name": "I-20 : SR 77"
    }]
}, {
    "coord": [33.843432, -84.500648],
    "cams": [{
        "id": "cctv_7323",
        "url": "/georgiasnapshots/COBB-CAM-063.jpg",
        "name": "EW Connector : South Cobb Drive"
    }]
}, {
    "coord": [34.003364, -84.29332],
    "cams": [{
        "id": "cctv_6264",
        "url": "/georgiasnapshots/ROSWELL-CAM-114.jpg",
        "name": "SR 140 : Fouts Rd"
    }]
}, {
    "coord": [33.397556, -84.738808],
    "cams": [{
        "id": "cctv_32525",
        "url": "/georgiasnapshots/COW-CAM-011.jpg",
        "name": "SR 34 : LAKESIDE WAY/INTERSTATE WAY"
    }]
}, {
    "coord": [31.732124, -84.17188],
    "cams": [{
        "id": "cctv_46352",
        "url": "/georgiasnapshots/DOUG-CAM-094.jpg",
        "name": "SR 3/ US 19 : SR32/ 4TH ST"
    }]
}, {
    "coord": [33.81022, -84.273456],
    "cams": [{
        "id": "cctv_9159",
        "stream": "/georgiavss1/dek-cam-011.stream/playlist.m3u8",
        "name": "SR 8 (Lawrenceville Hwy) : Orion Dr"
    }]
}, {
    "coord": [33.924088, -84.485624],
    "cams": [{
        "id": "cctv_15574",
        "stream": "/georgiavss3/gdot-cam-474.stream/playlist.m3u8",
        "name": "I-75 : DELK RD ENT RAMP"
    }]
}, {
    "coord": [33.54417, -84.231552],
    "cams": [{
        "id": "cctv_15240",
        "url": "/georgiasnapshots/HNRY-CAM-110.jpg",
        "name": "SR 138 / N Henry Blvd : E Atlanta Rd"
    }]
}, {
    "coord": [33.9356, -84.227984],
    "cams": [{
        "id": "cctv_13337",
        "url": "/georgiasnapshots/GWIN-CAM-323.jpg",
        "name": "SR 140 : Pacific Drive"
    }]
}, {
    "coord": [33.864508, -84.438272],
    "cams": [{
        "id": "cctv_5055",
        "stream": "/georgiavss2/gdot-cam-030.stream/playlist.m3u8",
        "name": "I-75 : MT PARAN RD"
    }]
}, {
    "coord": [33.672676, -83.981896],
    "cams": [{
        "id": "cctv_46507",
        "url": "/georgiasnapshots/ROCK-CAM-122.jpg",
        "name": "SR 138 : Eastview Rd/ Eastview Parkway"
    }]
}, {
    "coord": [33.773124, -84.412408],
    "cams": [{
        "id": "cctv_46431",
        "stream": "/georgiavss1/atl-cam-266.stream/playlist.m3u8",
        "name": "US 278 / Donald Lee Hollowell Pkwy : James P Brawley Rd"
    }]
}, {
    "coord": [34.099476, -84.530304],
    "cams": [{
        "id": "cctv_15393",
        "stream": "/georgiavss3/gdot-cam-557.stream/playlist.m3u8",
        "name": "I-575 : TOWN LAKE PKY EXIT"
    }]
}, {
    "coord": [34.152408, -83.64724],
    "cams": [{
        "id": "cctv_32657",
        "url": "/georgiasnapshots/JACKS-CAM-003.jpg",
        "name": "SR 11 : I-85 SB"
    }]
}, {
    "coord": [34.058068, -84.557528],
    "cams": [{
        "id": "cctv_12895",
        "url": "/georgiasnapshots/COBB-CAM-309.jpg",
        "name": "Bells Ferry Rd : Hawkins Store Rd"
    }]
}, {
    "coord": [33.85002, -84.372832],
    "cams": [{
        "id": "cctv_15396",
        "stream": "/georgiavss1/atl-cam-067.stream/playlist.m3u8",
        "name": "SR 141 Conn / Lenox Rd : Tower Place Dr"
    }]
}, {
    "coord": [33.504864, -82.01688],
    "cams": [{
        "id": "cctv_32845",
        "url": "/georgiasnapshots/AUG-CAM-223.jpg",
        "name": "Washington Rd. : Eisenhower Dr."
    }]
}, {
    "coord": [33.858916, -83.980392],
    "cams": [{
        "id": "cctv_46286",
        "url": "/georgiasnapshots/GWIN-CAM-228.jpg",
        "name": "US 78 : SUMMIT CHASE DR"
    }]
}, {
    "coord": [33.87908, -84.365336],
    "cams": [{
        "id": "cctv_12968",
        "stream": "/georgiavss4/gdot-cam-820.stream/playlist.m3u8",
        "name": "GA 400 : S OF WINDSOR PKWY"
    }]
}, {
    "coord": [33.56528, -84.320192],
    "cams": [{
        "id": "cctv_5277",
        "stream": "/georgiavss4/gdot-cam-706.stream/playlist.m3u8",
        "name": "I-75 : AT MT ZION BLVD"
    }]
}, {
    "coord": [33.738856, -84.288136],
    "cams": [{
        "id": "cctv_13665",
        "stream": "/georgiavss1/dek-cam-305.stream/playlist.m3u8",
        "name": "SR 155 (Candler Rd) : Glenwood Ave"
    }]
}, {
    "coord": [33.620644, -84.429928],
    "cams": [{
        "id": "cctv_5260",
        "stream": "/georgiavss4/gdot-cam-661.stream/playlist.m3u8",
        "name": "I-285 : MAIN LANES NO. 3"
    }]
}, {
    "coord": [33.786124, -84.492672],
    "cams": [{
        "id": "cctv_5390",
        "stream": "/georgiavss4/gdot-cam-953.stream/playlist.m3u8",
        "name": "I-285 : HOLLOWELL PKWY"
    }]
}, {
    "coord": [33.867152, -84.381232],
    "cams": [{
        "id": "cctv_9114",
        "stream": "/georgiavss1/atl-cam-050.stream/playlist.m3u8",
        "name": "SR 9 / Roswell Rd : Chastain Dr"
    }]
}, {
    "coord": [34.049604, -84.455024],
    "cams": [{
        "id": "cctv_12916",
        "url": "/georgiasnapshots/COBB-CAM-217.jpg",
        "name": "Sandy Plains Rd : Wigley Rd"
    }]
}, {
    "coord": [34.124908, -84.525976],
    "cams": [{
        "id": "cctv_6811",
        "url": "/georgiasnapshots/GDOT-CAM-518.jpg",
        "name": "I-575 : AT RIDGEWALK PKWY"
    }]
}, {
    "coord": [33.820144, -84.367064],
    "cams": [{
        "id": "cctv_7229",
        "stream": "/georgiavss1/atl-cam-022.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Lindbergh Dr / Way"
    }]
}, {
    "coord": [34.20608, -84.140472],
    "cams": [{
        "id": "cctv_16353",
        "url": "/georgiasnapshots/FORS-CAM-008.jpg",
        "name": "SR 20/ East Maple St : Castleberry Rd"
    }]
}, {
    "coord": [33.471382, -81.964968],
    "cams": [{
        "id": "cctv_32893",
        "url": "/georgiasnapshots/AUG-CAM-183.jpg",
        "name": "Telfair St. : 7th St."
    }]
}, {
    "coord": [34.118396, -84.737144],
    "cams": [{
        "id": "cctv_16131",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-283.35.jpg",
        "name": "I-75 : OLD ALLATOONA RD"
    }]
}, {
    "coord": [33.509186, -84.429568],
    "cams": [{
        "id": "cctv_6857",
        "stream": "/georgiavss1/fay-cam-101.stream/playlist.m3u8",
        "name": "SR 85 : SR 279 / Carnegie Pl"
    }]
}, {
    "coord": [33.731912, -84.736792],
    "cams": [{
        "id": "cctv_15432",
        "stream": "/georgiavss2/gdot-cam-296.stream/playlist.m3u8",
        "name": "I-20 : Chapel Hill Rd"
    }]
}, {
    "coord": [32.986606, -83.839056],
    "cams": [{
        "id": "cctv_13591",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-181.jpg",
        "name": "I-75 : S of Rumble Rd"
    }]
}, {
    "coord": [34.067648, -84.168],
    "cams": [{
        "id": "cctv_6799",
        "stream": "/georgiavss1/cojc-cam-170.stream/playlist.m3u8",
        "name": "SR 141 (Medlock Bridge Rd) : McGinnis Ferry Rd"
    }]
}, {
    "coord": [31.723934, -83.252288],
    "cams": [{
        "id": "cctv_46329",
        "url": "/georgiasnapshots/BENH-CAM-003.jpg",
        "name": "SR 11 : SULTANA DR"
    }]
}, {
    "coord": [34.554928, -84.93624],
    "cams": [{
        "id": "cctv_16339",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-318.45.jpg",
        "name": "I-75 : EXT 318"
    }]
}, {
    "coord": [33.99314, -84.091152],
    "cams": [{
        "id": "cctv_10307",
        "url": "/georgiasnapshots/GWIN-CAM-133.jpg",
        "name": "SUGARLOAF PKWY : IEC MIDBLOCK"
    }]
}, {
    "coord": [33.522102, -82.032584],
    "cams": [{
        "id": "cctv_32856",
        "url": "/georgiasnapshots/AUG-CAM-167.jpg",
        "name": "River Watch Pkwy. : I-20 WB ramp/Claussen Rd."
    }]
}, {
    "coord": [33.666236, -84.34172],
    "cams": [{
        "id": "cctv_5042",
        "stream": "/georgiavss2/gdot-cam-274.stream/playlist.m3u8",
        "name": "I-285 : MORELAND AVE"
    }]
}, {
    "coord": [32.275138, -81.228672],
    "cams": [{
        "id": "cctv_46543",
        "url": "/georgiasnapshots/EFF-CAM-003.jpg",
        "name": "SR 21 : Brentwood Dr"
    }]
}, {
    "coord": [33.723036, -84.16704],
    "cams": [{
        "id": "cctv_13310",
        "url": "/georgiasnapshots/DEK-CAM-039.jpg",
        "name": "SR 12 (Covington Hwy) : Panola Rd"
    }]
}, {
    "coord": [33.670308, -84.397976],
    "cams": [{
        "id": "cctv_5325",
        "stream": "/georgiavss2/gdot-cam-080.stream/playlist.m3u8",
        "name": "I-75 : N OF CENTRAL AVE"
    }]
}, {
    "coord": [34.0523, -84.552496],
    "cams": [{
        "id": "cctv_5202",
        "stream": "/georgiavss3/gdot-cam-510.stream/playlist.m3u8",
        "name": "I-575 : N OF BELLS FERRY RD"
    }]
}, {
    "coord": [32.191868, -81.196464],
    "cams": [{
        "id": "cctv_15166",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-109.jpg",
        "name": "I-95 : SR 21"
    }]
}, {
    "coord": [33.951324, -84.582792],
    "cams": [{
        "id": "cctv_15201",
        "url": "/georgiasnapshots/MAR-CAM-403.jpg",
        "name": "SR 120 / Whitlock Ave : Polk St Ext / Old Dallas Rd"
    }]
}, {
    "coord": [33.5378, -84.364896],
    "cams": [{
        "id": "cctv_10443",
        "url": "/georgiasnapshots/CLAY-CAM-028.jpg",
        "name": "SR 3 / Tara Blvd : SR 138"
    }]
}, {
    "coord": [33.898144, -84.006176],
    "cams": [{
        "id": "cctv_32527",
        "url": "/georgiasnapshots/GWIN-CAM-325.jpg",
        "name": "SR 124 : WEBB GIN HOUSE RD"
    }]
}, {
    "coord": [34.204964, -84.763176],
    "cams": [{
        "id": "cctv_16154",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-17.35.jpg",
        "name": "SR 20 : I-75 SB (EXIT 290)"
    }]
}, {
    "coord": [33.681444, -84.230096],
    "cams": [{
        "id": "cctv_13549",
        "url": "/georgiasnapshots/DEK-CAM-313.jpg",
        "name": "SR 155 (Flat Shoals Rd) : Wesley Chapel Rd / Flakes Mill Rd"
    }]
}, {
    "coord": [34.097512, -84.638416],
    "cams": [{
        "id": "cctv_15344",
        "url": "/georgiasnapshots/CHER-CAM-037.jpg",
        "name": "SR 92 : Old Alabama Rd"
    }]
}, {
    "coord": [34.002512, -84.080152],
    "cams": [{
        "id": "cctv_10288",
        "url": "/georgiasnapshots/GWIN-CAM-114.jpg",
        "name": "SATELLITE BLVD : OLD PEACHTREE RD"
    }]
}, {
    "coord": [33.55354, -84.267496],
    "cams": [{
        "id": "cctv_32961",
        "url": "/georgiasnapshots/CLAY-CAM-201.jpg",
        "name": "SR 138 : I-675 NB Ramp"
    }]
}, {
    "coord": [34.766184, -84.769584],
    "cams": [{
        "id": "cctv_46496",
        "url": "/georgiasnapshots/CARR-CAM-501.jpg",
        "name": "SR 61 : SR 52alt"
    }]
}, {
    "coord": [33.941528, -84.505656],
    "cams": [{
        "id": "cctv_15551",
        "stream": "/georgiavss3/gdot-cam-482.stream/playlist.m3u8",
        "name": "I-75 : S 120 LOOP/MARIETTA PKY"
    }]
}, {
    "coord": [33.761404, -84.384144],
    "cams": [{
        "id": "cctv_16201",
        "url": "/georgiasnapshots/ATL-CAM-978.jpg",
        "name": "Baker St : Courtland St"
    }]
}, {
    "coord": [33.811388, -84.497416],
    "cams": [{
        "id": "cctv_5395",
        "stream": "/georgiavss4/gdot-cam-958.stream/playlist.m3u8",
        "name": "I-285 : N OF CHATTAHOOCHEE RIVER"
    }]
}, {
    "coord": [34.472368, -84.921608],
    "cams": [{
        "id": "cctv_46228",
        "url": "/georgiasnapshots/GORD-CAM-001.jpg",
        "name": "SR 53 : Curtis Pkwy"
    }]
}, {
    "coord": [33.74362, -84.38752],
    "cams": [{
        "id": "cctv_5087",
        "stream": "/georgiavss3/gdot-cam-349.stream/playlist.m3u8",
        "name": "I-20 : CAPITOL AVE"
    }]
}, {
    "coord": [33.942128, -83.716064],
    "cams": [{
        "id": "cctv_32551",
        "url": "/georgiasnapshots/BARR-CAM-010.jpg",
        "name": "SR 316 : SR 11"
    }]
}, {
    "coord": [34.01436, -84.568768],
    "cams": [{
        "id": "cctv_15618",
        "stream": "/georgiavss3/gdot-cam-519.stream/playlist.m3u8",
        "name": "I-75 : AT BARRETT PKWY ENTR"
    }]
}, {
    "coord": [33.866604, -84.302448],
    "cams": [{
        "id": "cctv_13587",
        "stream": "/georgiavss1/cham-cam-003.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Dresden Dr"
    }]
}, {
    "coord": [33.97904, -84.443736],
    "cams": [{
        "id": "cctv_9291",
        "url": "/georgiasnapshots/COBB-CAM-166.jpg",
        "name": "SR 120 / Roswell Rd : Wellstar Health Park"
    }]
}, {
    "coord": [33.94358, -84.134768],
    "cams": [{
        "id": "cctv_10199",
        "url": "/georgiasnapshots/GWIN-CAM-025.jpg",
        "name": "STEVE REYNOLDS BLVD : CLUB DR"
    }]
}, {
    "coord": [33.620544, -84.460456],
    "cams": [{
        "id": "cctv_4959",
        "stream": "/georgiavss2/gdot-cam-196.stream/playlist.m3u8",
        "name": "I-85 : N OF I-285 WEST"
    }]
}, {
    "coord": [33.618816, -84.45944],
    "cams": [{
        "id": "cctv_5582",
        "stream": "/georgiavss4/gdot-cam-645.stream/playlist.m3u8",
        "name": "I-285 : NEAR I-85 / SOUTHSIDE"
    }]
}, {
    "coord": [33.764356, -84.383896],
    "cams": [{
        "id": "cctv_4931",
        "stream": "/georgiavss2/gdot-cam-013.stream/playlist.m3u8",
        "name": "75/85 : COURTLAND ST"
    }]
}, {
    "coord": [34.081744, -84.634824],
    "cams": [{
        "id": "cctv_5180",
        "stream": "/georgiavss3/gdot-cam-450.stream/playlist.m3u8",
        "name": "I-75 : 1/2 MI N OF WOODSTOCK RD"
    }]
}, {
    "coord": [33.894192, -83.955352],
    "cams": [{
        "id": "cctv_10343",
        "url": "/georgiasnapshots/GWIN-CAM-169.jpg",
        "name": "SR 20 : SR 84 / GRAYSON PKWY / GRAYSON NEW HOPE RD"
    }]
}, {
    "coord": [34.012124, -84.304064],
    "cams": [{
        "id": "cctv_13141",
        "url": "/georgiasnapshots/ROSWELL-CAM-118.jpg",
        "name": "SR 140 : Calibre Creek Pkwy"
    }]
}, {
    "coord": [33.6091, -84.403504],
    "cams": [{
        "id": "cctv_10500",
        "url": "/georgiasnapshots/CLAY-CAM-200.jpg",
        "name": "SR 85 : AIR LOGISTICS CENTER"
    }]
}, {
    "coord": [33.983152, -84.4274],
    "cams": [{
        "id": "cctv_7331",
        "url": "/georgiasnapshots/COBB-CAM-104.jpg",
        "name": "Roswell Rd : Johnson Ferry Rd"
    }]
}, {
    "coord": [33.833368, -84.611568],
    "cams": [{
        "id": "cctv_9166",
        "url": "/georgiasnapshots/COBB-CAM-003.jpg",
        "name": "SR 5/Austell Rd : Clay Rd"
    }]
}, {
    "coord": [34.0555, -84.5974],
    "cams": [{
        "id": "cctv_5169",
        "stream": "/georgiavss3/gdot-cam-440.stream/playlist.m3u8",
        "name": "I-75 : WADE GREEN RD"
    }]
}, {
    "coord": [33.639108, -84.309552],
    "cams": [{
        "id": "cctv_5957",
        "stream": "/georgiavss4/gdot-cam-613.stream/playlist.m3u8",
        "name": "I-675 : S OF GRANT RD"
    }]
}, {
    "coord": [34.187712, -84.14156],
    "cams": [{
        "id": "cctv_13225",
        "stream": "/georgiavss1/fors-cam-001.stream/playlist.m3u8",
        "name": "SR 20 (Buford Hwy) : SR 9 (Atlanta Highway)"
    }]
}, {
    "coord": [33.7936, -84.500104],
    "cams": [{
        "id": "cctv_13375",
        "stream": "/georgiavss1/atl-cam-270.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : Maynard Rd"
    }]
}, {
    "coord": [33.943592, -84.695256],
    "cams": [{
        "id": "cctv_7340",
        "url": "/georgiasnapshots/COBB-CAM-252.jpg",
        "name": "Dallas Hwy : Lost Mountain Park"
    }]
}, {
    "coord": [33.603, -84.4048],
    "cams": [{
        "id": "cctv_10496",
        "url": "/georgiasnapshots/CLAY-CAM-181.jpg",
        "name": "SR 85 : Airport South Pkwy"
    }]
}, {
    "coord": [32.800778, -83.570784],
    "cams": [{
        "id": "cctv_13278",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-006.jpg",
        "name": "I-16 : Ocmulgee E Blvd"
    }]
}, {
    "coord": [33.889284, -84.460408],
    "cams": [{
        "id": "cctv_15558",
        "stream": "/georgiavss3/gdot-cam-459.stream/playlist.m3u8",
        "name": "I-75 : I-285 ON/OFF EXPRESS RAMP"
    }]
}, {
    "coord": [33.889412, -84.471304],
    "cams": [{
        "id": "cctv_15222",
        "url": "/georgiasnapshots/COBB-CAM-137.jpg",
        "name": "Windy Ridge Pkwy : Heritage Ct"
    }]
}, {
    "coord": [34.067928, -83.93856],
    "cams": [{
        "id": "cctv_15974",
        "stream": "/georgiavss2/gdot-cam-174.stream/playlist.m3u8",
        "name": "I-85 : N OF GRAVEL SPRINGS RD"
    }]
}, {
    "coord": [33.426734, -84.181848],
    "cams": [{
        "id": "cctv_6244",
        "url": "/georgiasnapshots/HNRY-CAM-913.jpg",
        "name": "SR 20 : I-75 SB"
    }]
}, {
    "coord": [34.353872, -82.938504],
    "cams": [{
        "id": "cctv_32650",
        "url": "/georgiasnapshots/HART-CAM-001.jpg",
        "name": "SR 8 : Athens St."
    }]
}, {
    "coord": [33.746416, -84.34916],
    "cams": [{
        "id": "cctv_13675",
        "stream": "/georgiavss1/atl-cam-064.stream/playlist.m3u8",
        "name": "SR 42 (Moreland Ave) : I-20 WB Ramp"
    }]
}, {
    "coord": [31.99546, -80.847696],
    "cams": [{
        "id": "cctv_15900",
        "url": "/georgiasnapshots/SAV-CAM-038.jpg",
        "name": "SR 26/BUTLER AVE : 14TH ST"
    }]
}, {
    "coord": [33.961916, -84.061184],
    "cams": [{
        "id": "cctv_10311",
        "url": "/georgiasnapshots/GWIN-CAM-137.jpg",
        "name": "SUGARLOAF PKWY : SR 316 WB RAMPS"
    }]
}, {
    "coord": [33.972092, -84.018016],
    "cams": [{
        "id": "cctv_10236",
        "url": "/georgiasnapshots/GWIN-CAM-062.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : E of WALTHER BLVD"
    }]
}, {
    "coord": [33.395886, -84.825776],
    "cams": [{
        "id": "cctv_7362",
        "url": "/georgiasnapshots/COW-CAM-003.jpg",
        "name": "SR 34 Bypass : SR 16 / Temple Rd"
    }]
}, {
    "coord": [32.76477, -83.711016],
    "cams": [{
        "id": "cctv_6001",
        "stream": "/georgiavss5/bibb-cam-010.stream/playlist.m3u8",
        "name": "I-475 : N OF HARTLEY BR RD"
    }]
}, {
    "coord": [33.826788, -84.325432],
    "cams": [{
        "id": "cctv_15353",
        "stream": "http://vss12live.dot.ga.gov:80/lo/dek-cam-451.stream/playlist.m3u8",
        "name": "N Druid Hills Rd NE : Briarcliff HS"
    }]
}, {
    "coord": [33.960588, -84.430432],
    "cams": [{
        "id": "cctv_32605",
        "url": "/georgiasnapshots/COBB-CAM-089.jpg",
        "name": "Lower Roswell Rd : Indian Hills"
    }]
}, {
    "coord": [32.0868, -82.117944],
    "cams": [{
        "id": "cctv_46261",
        "url": "/georgiasnapshots/TAT-CAM-001.jpg",
        "name": "SR 30 : SR 23/57 (South Main Street)"
    }]
}, {
    "coord": [33.5797, -84.374496],
    "cams": [{
        "id": "cctv_10439",
        "url": "/georgiasnapshots/CLAY-CAM-023.jpg",
        "name": "SR 3 / Old Dixie Hwy : Holiday Blvd"
    }]
}, {
    "coord": [33.940444, -83.992712],
    "cams": [{
        "id": "cctv_10231",
        "url": "/georgiasnapshots/GWIN-CAM-057.jpg",
        "name": "SR 124 : S of GWINNETT DR"
    }]
}, {
    "coord": [33.549702, -84.274904],
    "cams": [{
        "id": "cctv_10477",
        "url": "/georgiasnapshots/CLAY-CAM-123.jpg",
        "name": "SR 138 : Mt Zion Rd"
    }]
}, {
    "coord": [33.545242, -84.403424],
    "cams": [{
        "id": "cctv_10429",
        "url": "/georgiasnapshots/CLAY-CAM-006.jpg",
        "name": "SR 138 : Taylor Rd"
    }]
}, {
    "coord": [33.617748, -84.409888],
    "cams": [{
        "id": "cctv_15365",
        "url": "/georgiasnapshots/CLAY-CAM-100.jpg",
        "name": "SR 331 / Forest Pkwy : Clark Howell Hwy"
    }]
}, {
    "coord": [34.580072, -83.329992],
    "cams": [{
        "id": "cctv_32921",
        "url": "/georgiasnapshots/STEPH-CAM-005.jpg",
        "name": "SR 17 ALT : Sage St"
    }]
}, {
    "coord": [34.060404, -83.943896],
    "cams": [{
        "id": "cctv_10372",
        "url": "/georgiasnapshots/GWIN-CAM-198.jpg",
        "name": "SR 324 : MORGAN RD"
    }]
}, {
    "coord": [33.905436, -84.464264],
    "cams": [{
        "id": "cctv_7308",
        "url": "/georgiasnapshots/COBB-CAM-045.jpg",
        "name": "Powers Ferry Rd : Windy Hill Rd"
    }]
}, {
    "coord": [34.06768, -84.077752],
    "cams": [{
        "id": "cctv_10424",
        "url": "/georgiasnapshots/GCDOT-IVDS-631.jpg",
        "name": "SUWANEE DAM RD : SETTLES BRIDGE RD"
    }]
}, {
    "coord": [32.03117, -80.973],
    "cams": [{
        "id": "cctv_15896",
        "url": "/georgiasnapshots/SAV-CAM-034.jpg",
        "name": "SR 26/ US 80 : QUARTERMAN DR"
    }]
}, {
    "coord": [33.755356, -84.349016],
    "cams": [{
        "id": "cctv_6830",
        "stream": "/georgiavss1/atl-cam-556.stream/playlist.m3u8",
        "name": "SR 42 (Moreland Ave) : Hardee St NE"
    }]
}, {
    "coord": [34.537612, -83.537256],
    "cams": [{
        "id": "cctv_46323",
        "url": "/georgiasnapshots/HABE-CAM-002.jpg",
        "name": "SR 105 : SR 385"
    }]
}, {
    "coord": [33.7437, -84.3916],
    "cams": [{
        "id": "cctv_5272",
        "stream": "/georgiavss2/gdot-cam-007.stream/playlist.m3u8",
        "name": "75/85 : FULTON ST"
    }]
}, {
    "coord": [33.972976, -84.52992],
    "cams": [{
        "id": "cctv_5142",
        "stream": "/georgiavss3/gdot-cam-416.stream/playlist.m3u8",
        "name": "I-75 : ALLGOOD RD"
    }]
}, {
    "coord": [33.754504, -84.398704],
    "cams": [{
        "id": "cctv_15279",
        "stream": "/georgiavss1/atl-cam-917.stream/playlist.m3u8",
        "name": "Centennial Olympic Park Dr : Martin Luther King Jr Dr"
    }]
}, {
    "coord": [32.198562, -81.197536],
    "cams": [{
        "id": "cctv_46246",
        "url": "/georgiasnapshots/CHAT-CAM-003.jpg",
        "name": "SR 30 (Piedmont Avenue) : SR 21 (Augusta Road)"
    }]
}, {
    "coord": [33.815948, -84.366504],
    "cams": [{
        "id": "cctv_8814",
        "stream": "/georgiavss1/atl-cam-023.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Lakeshore Dr"
    }]
}, {
    "coord": [34.047592, -84.223648],
    "cams": [{
        "id": "cctv_16220",
        "url": "/georgiasnapshots/COJC-CAM-415.jpg",
        "name": "State Bridge Rd : Saddle Brook Shop Center"
    }]
}, {
    "coord": [33.729392, -84.938616],
    "cams": [{
        "id": "cctv_16183",
        "url": "/georgiasnapshots/GDOT-CAM-SR8-6.65.jpg",
        "name": "SR 8 : SR 101"
    }]
}, {
    "coord": [33.786656, -84.383592],
    "cams": [{
        "id": "cctv_15251",
        "stream": "/georgiavss1/atl-cam-906.stream/playlist.m3u8",
        "name": "Peachtree St : 14th St"
    }]
}, {
    "coord": [34.93838, -85.21428],
    "cams": [{
        "id": "cctv_16142",
        "url": "/georgiasnapshots/GDOT-CAM-SR2-3.20.jpg",
        "name": "SR 2 : SUPER WAL-MART"
    }]
}, {
    "coord": [32.52592, -84.961584],
    "cams": [{
        "id": "cctv_9014",
        "url": "/georgiasnapshots/COLU-CAM-003.jpg",
        "name": "SR 1 / Veterans Parkway : Whitesville Rd"
    }]
}, {
    "coord": [34.078928, -84.184272],
    "cams": [{
        "id": "cctv_6324",
        "url": "/georgiasnapshots/COJC-CAM-665.jpg",
        "name": "McGinnis Ferry Rd : 7 Oaks Pkwy/Brassfield Dr"
    }]
}, {
    "coord": [33.91898, -84.5494],
    "cams": [{
        "id": "cctv_7304",
        "url": "/georgiasnapshots/COBB-CAM-023.jpg",
        "name": "SR 280/South Cobb Dr : Austell Rd"
    }]
}, {
    "coord": [33.896368, -84.197728],
    "cams": [{
        "id": "cctv_10186",
        "url": "/georgiasnapshots/GWIN-CAM-008.jpg",
        "name": "SR 140 : Rockbridge Rd"
    }]
}, {
    "coord": [33.926832, -84.059856],
    "cams": [{
        "id": "cctv_12986",
        "url": "/georgiasnapshots/GWIN-CAM-271",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Oakland Road"
    }]
}, {
    "coord": [33.42258, -84.186104],
    "cams": [{
        "id": "cctv_10164",
        "url": "/georgiasnapshots/HNRY-CAM-918.jpg",
        "name": "SR 20 : South Point Blvd"
    }]
}, {
    "coord": [33.811396, -84.636536],
    "cams": [{
        "id": "cctv_13193",
        "url": "/georgiasnapshots/COBB-CAM-234.jpg",
        "name": "SR 8 (Veterans Memorial Hwy) : Jefferson St"
    }]
}, {
    "coord": [33.592064, -84.282848],
    "cams": [{
        "id": "cctv_5951",
        "stream": "/georgiavss3/gdot-cam-607.stream/playlist.m3u8",
        "name": "I-675 : N OF REX RD"
    }]
}, {
    "coord": [34.8819, -84.293792],
    "cams": [{
        "id": "cctv_16109",
        "url": "/georgiasnapshots/GDOT-CAM-SR515-5.95.jpg",
        "name": "SR 515 : MCKINNEY RD"
    }]
}, {
    "coord": [33.681188, -84.398736],
    "cams": [{
        "id": "cctv_5316",
        "stream": "/georgiavss2/gdot-cam-079.stream/playlist.m3u8",
        "name": "I-75 : CLEVELAND AVE"
    }]
}, {
    "coord": [32.04427, -81.072952],
    "cams": [{
        "id": "cctv_15768",
        "url": "/georgiasnapshots/SAV-CAM-022.jpg",
        "name": "SR 26/VICTORY DR : DIXIE AVE"
    }]
}, {
    "coord": [34.023296, -84.589456],
    "cams": [{
        "id": "cctv_12907",
        "url": "/georgiasnapshots/COBB-CAM-314.jpg",
        "name": "Chastain Rd : McCollum Pkwy/Duncan Rd"
    }]
}, {
    "coord": [34.271624, -84.100752],
    "cams": [{
        "id": "cctv_32558",
        "url": "http://navigator-csc.dot.ga.gov/snapshots/FORS-CAM-025.jpg",
        "name": "SR 369 : SR 9"
    }]
}, {
    "coord": [34.123876, -84.52644],
    "cams": [{
        "id": "cctv_15439",
        "stream": "/georgiavss3/gdot-cam-562.stream/playlist.m3u8",
        "name": "I-575 : RIDGEWALK PKY"
    }]
}, {
    "coord": [34.118564, -84.739992],
    "cams": [{
        "id": "cctv_9318",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-283.jpg",
        "name": "I-75 : ALLATOONA RD"
    }]
}, {
    "coord": [33.731076, -85.034984],
    "cams": [{
        "id": "cctv_16185",
        "url": "/georgiasnapshots/GDOT-CAM-SR8-0.9.jpg",
        "name": "SR 8 : SR 274"
    }]
}, {
    "coord": [33.806688, -84.394064],
    "cams": [{
        "id": "cctv_7206",
        "stream": "/georgiavss1/atl-cam-031.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd : Collier Rd"
    }]
}, {
    "coord": [33.620144, -84.464],
    "cams": [{
        "id": "cctv_4958",
        "stream": "/georgiavss2/gdot-cam-195.stream/playlist.m3u8",
        "name": "I-85 : N OF OLD NATIONAL HWY"
    }]
}, {
    "coord": [33.9615, -84.519304],
    "cams": [{
        "id": "cctv_5138",
        "stream": "/georgiavss3/gdot-cam-412.stream/playlist.m3u8",
        "name": "I-75 : N 120 LOOP"
    }]
}, {
    "coord": [32.859578, -83.614632],
    "cams": [{
        "id": "cctv_5985",
        "url": "/georgiasnapshots/BIBB-CAM-523.jpg",
        "name": "GRAY HWY : SHURLING DR"
    }]
}, {
    "coord": [33.742196, -84.417496],
    "cams": [{
        "id": "cctv_16094",
        "url": "/georgiasnapshots/ATL-CAM-975.jpg",
        "name": "Joseph E Lowery Blvd : Park St / I-20 WB Ramp"
    }]
}, {
    "coord": [33.823464, -84.143816],
    "cams": [{
        "id": "cctv_5319",
        "stream": "/georgiavss4/gdot-cam-792.stream/playlist.m3u8",
        "name": "US 78 : E OF HUGH HOWELL RD"
    }]
}, {
    "coord": [33.665832, -84.030632],
    "cams": [{
        "id": "cctv_13120",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-080.jpg",
        "name": "I-20 : WEST AVE"
    }]
}, {
    "coord": [34.050556, -84.588152],
    "cams": [{
        "id": "cctv_15511",
        "stream": "/georgiavss3/gdot-cam-527.stream/playlist.m3u8",
        "name": "I-75 : N OF SHILOH RD"
    }]
}, {
    "coord": [34.014148, -84.362928],
    "cams": [{
        "id": "cctv_9028",
        "url": "/georgiasnapshots/ROSWELL-CAM-306.jpg",
        "name": "SR 9 : SR 120/Mill St"
    }]
}, {
    "coord": [33.426406, -84.179984],
    "cams": [{
        "id": "cctv_13365",
        "stream": "/georgiavss4/gdot-cam-758.stream/playlist.m3u8",
        "name": "I-75 : AT SR 20/81 EXIT"
    }]
}, {
    "coord": [33.816656, -84.617992],
    "cams": [{
        "id": "cctv_13194",
        "url": "/georgiasnapshots/COBB-CAM-235.jpg",
        "name": "SR 8 (Veterans Memorial Hwy) : Maxham Rd"
    }]
}, {
    "coord": [34.043084, -84.343664],
    "cams": [{
        "id": "cctv_13150",
        "url": "/georgiasnapshots/ROSWELL-CAM-402.jpg",
        "name": "Mansell Rd : SR 140/Houze Rd"
    }]
}, {
    "coord": [32.445748, -83.75048],
    "cams": [{
        "id": "cctv_16192",
        "url": "/georgiasnapshots/GDOT-CAM-SR7-12.3.jpg",
        "name": "SR 7 : SR 127 / Marshallville Rd"
    }]
}, {
    "coord": [32.927238, -83.731968],
    "cams": [{
        "id": "cctv_16200",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-172.jpg",
        "name": "I-75 : Bass Road"
    }]
}, {
    "coord": [33.460952, -84.199824],
    "cams": [{
        "id": "cctv_13239",
        "stream": "/georgiavss4/gdot-cam-681.stream/playlist.m3u8",
        "name": "JONESBORO RD : CMS 713/714"
    }]
}, {
    "coord": [33.576656, -84.393296],
    "cams": [{
        "id": "cctv_15363",
        "url": "/georgiasnapshots/CLAY-CAM-095.jpg",
        "name": "Upper Riverdale Rd : Roy Hue Rd"
    }]
}, {
    "coord": [34.030116, -84.249152],
    "cams": [{
        "id": "cctv_16237",
        "url": "/georgiasnapshots/COJC-CAM-610.jpg",
        "name": "Jones Bridge Rd : Waters Rd"
    }]
}, {
    "coord": [34.223284, -84.5012],
    "cams": [{
        "id": "cctv_16170",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-9.95.jpg",
        "name": "SR 20 : MARIETTA HWY"
    }]
}, {
    "coord": [34.143756, -83.955288],
    "cams": [{
        "id": "cctv_32581",
        "url": "/georgiasnapshots/HALL-CAM-001.jpg",
        "name": "SR 347/Lanier Is Pkwy : Bristrol Ind Rd"
    }]
}, {
    "coord": [33.708348, -84.203424],
    "cams": [{
        "id": "cctv_8805",
        "stream": "/georgiavss3/gdot-cam-380.stream/playlist.m3u8",
        "name": "I-20 : E OF WESLEY CHAPEL"
    }]
}, {
    "coord": [34.009716, -84.568152],
    "cams": [{
        "id": "cctv_5153",
        "stream": "/georgiavss3/gdot-cam-426.stream/playlist.m3u8",
        "name": "I-75 : BARRETT PKWY"
    }]
}, {
    "coord": [32.057586, -81.164472],
    "cams": [{
        "id": "cctv_15727",
        "url": "/georgiasnapshots/SAV-CAM-010.jpg",
        "name": "CHATHAM PARKWAY : POLICE MEMORIAL DRIVE"
    }]
}, {
    "coord": [33.786128, -84.407336],
    "cams": [{
        "id": "cctv_13048",
        "stream": "/georgiavss1/atl-cam-087.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : 14th St"
    }]
}, {
    "coord": [33.751652, -84.380536],
    "cams": [{
        "id": "cctv_4917",
        "stream": "/georgiavss2/gdot-cam-010.stream/playlist.m3u8",
        "name": "75/85 : GRADY CURVE"
    }]
}, {
    "coord": [33.544934, -84.271632],
    "cams": [{
        "id": "cctv_5284",
        "stream": "/georgiavss4/gdot-cam-712.stream/playlist.m3u8",
        "name": "I-75 : S OF SR 138"
    }]
}, {
    "coord": [33.269794, -84.290784],
    "cams": [{
        "id": "cctv_15424",
        "url": "c2c.dot.ga.gov/snapshots/SPAL-CAM-002.jpg",
        "name": "SR 3/US 19-41 : BOWLING LN/GRIFFIN CROSSROADS"
    }]
}, {
    "coord": [33.903049, -84.567261],
    "cams": [{
        "id": "cctv_9089",
        "url": "/georgiasnapshots/COBB-CAM-006.jpg",
        "name": "SR 5/Austell Rd : Pat Mell Rd"
    }]
}, {
    "coord": [33.879352, -84.471576],
    "cams": [{
        "id": "cctv_13743",
        "url": "/georgiasnapshots/COBB-CAM-119.jpg",
        "name": "Cumberland Pkwy : Cumberland Blvd"
    }]
}, {
    "coord": [32.506782, -84.973664],
    "cams": [{
        "id": "cctv_15908",
        "url": "/georgiasnapshots/COLU-CAM-015.jpg",
        "name": "SR 1/VETERANS PKY : SR 85/MANCHESTER EXP"
    }]
}, {
    "coord": [33.808792, -84.378096],
    "cams": [{
        "id": "cctv_5099",
        "stream": "/georgiavss2/gdot-cam-036.stream/playlist.m3u8",
        "name": "I-85 : MONROE DR"
    }]
}, {
    "coord": [33.939852, -84.503056],
    "cams": [{
        "id": "cctv_15550",
        "stream": "/georgiavss3/gdot-cam-481.stream/playlist.m3u8",
        "name": "I-75 : S OF S 120 LOOP/MARIETTA PKY"
    }]
}, {
    "coord": [33.887812, -84.469064],
    "cams": [{
        "id": "cctv_13749",
        "url": "/georgiasnapshots/COBB-CAM-127.jpg",
        "name": "Circle 75 Pkwy : Pedestrian Bridge"
    }]
}, {
    "coord": [33.764024, -84.3904],
    "cams": [{
        "id": "cctv_15330",
        "url": "/georgiasnapshots/ATL-CAM-945.jpg",
        "name": "Williams St : West Peachtree Pl"
    }]
}, {
    "coord": [33.97752, -84.217472],
    "cams": [{
        "id": "cctv_5707",
        "stream": "/georgiavss3/gdot-cam-588.stream/playlist.m3u8",
        "name": "SR 141 (Peachtree Parkway) : Peachtree Corners Cir"
    }]
}, {
    "coord": [32.771984, -83.711128],
    "cams": [{
        "id": "cctv_6002",
        "stream": "/georgiavss5/bibb-cam-011.stream/playlist.m3u8",
        "name": "I-475 : MILE POST 1"
    }]
}, {
    "coord": [33.758436, -84.382216],
    "cams": [{
        "id": "cctv_15335",
        "url": "/georgiasnapshots/ATL-CAM-951.jpg",
        "name": "Piedmont Ave : Ellis St"
    }]
}, {
    "coord": [32.752586, -83.710456],
    "cams": [{
        "id": "cctv_6843",
        "url": "/georgiasnapshots/BIBB-CAM-109.jpg",
        "name": "I-75 : MILE 156"
    }]
}, {
    "coord": [33.621808, -84.48828],
    "cams": [{
        "id": "cctv_5366",
        "stream": "/georgiavss4/gdot-cam-930.stream/playlist.m3u8",
        "name": "I-285 : I-85 SOUTH (FULTON)"
    }]
}, {
    "coord": [34.377504, -84.91296],
    "cams": [{
        "id": "cctv_16121",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-305.70.jpg",
        "name": "I-75 : SR 140 (EXIT 306)"
    }]
}, {
    "coord": [33.846336, -84.36652],
    "cams": [{
        "id": "cctv_12959",
        "stream": "/georgiavss4/gdot-cam-812.stream/playlist.m3u8",
        "name": "GA 400 : ENTRANCE TO TUNNEL"
    }]
}, {
    "coord": [33.505336, -84.230392],
    "cams": [{
        "id": "cctv_5293",
        "stream": "/georgiavss4/gdot-cam-720.stream/playlist.m3u8",
        "name": "I-75 : HUDSON BRIDGE"
    }]
}, {
    "coord": [32.424076, -81.774784],
    "cams": [{
        "id": "cctv_46541",
        "url": "/georgiasnapshots/BULL-CAM-007.jpg",
        "name": "SR 67 : Chandler Rd"
    }]
}, {
    "coord": [33.846664, -84.43056],
    "cams": [{
        "id": "cctv_5386",
        "stream": "/georgiavss2/gdot-cam-095.stream/playlist.m3u8",
        "name": "I-75 : W PACES ENT RAMP"
    }]
}, {
    "coord": [33.742928, -84.357416],
    "cams": [{
        "id": "cctv_5094",
        "stream": "/georgiavss3/gdot-cam-355.stream/playlist.m3u8",
        "name": "I-20 : GLENWOOD CON/BILL KENNEDY WAY"
    }]
}, {
    "coord": [33.774292, -84.39052],
    "cams": [{
        "id": "cctv_4937",
        "stream": "/georgiavss2/gdot-cam-017.stream/playlist.m3u8",
        "name": "75/85 : NORTH AVE"
    }]
}, {
    "coord": [33.903608, -84.121304],
    "cams": [{
        "id": "cctv_10182",
        "url": "/georgiasnapshots/GWIN-CAM-004.jpg",
        "name": "SR 9 (US 29 Lawrenceville Hwy) : Arcado Rd / Beaver Ruin Rd"
    }]
}, {
    "coord": [33.446872, -84.199176],
    "cams": [{
        "id": "cctv_13561",
        "stream": "/georgiavss4/gdot-cam-750.stream/playlist.m3u8",
        "name": "I-75 : S OF MT CARMEL"
    }]
}, {
    "coord": [34.09416, -83.809776],
    "cams": [{
        "id": "cctv_32542",
        "url": "/georgiasnapshots/BARR-CAM-001.jpg",
        "name": "SR 8 : SR 11/ SR 81/SR 53"
    }]
}, {
    "coord": [33.5813, -84.2912],
    "cams": [{
        "id": "cctv_10486",
        "url": "/georgiasnapshots/CLAY-CAM-148.jpg",
        "name": "SR 42 : LAKE HARBIN RD"
    }]
}, {
    "coord": [33.92378, -84.338032],
    "cams": [{
        "id": "cctv_32616",
        "url": "/georgiasnapshots/DUN-CAM-111.jpg",
        "name": "Ashford Dunwoody Rd : Perimeter Center East"
    }]
}, {
    "coord": [32.876754, -83.665712],
    "cams": [{
        "id": "cctv_5990",
        "url": "/georgiasnapshots/BIBB-CAM-528.jpg",
        "name": "RIVERSIDE DR : RIVERSIDE PLAZA"
    }]
}, {
    "coord": [33.97896, -83.985144],
    "cams": [{
        "id": "cctv_10210",
        "url": "/georgiasnapshots/GWIN-CAM-036.jpg",
        "name": "SR 20 : SR 316 WB Ramp"
    }]
}, {
    "coord": [34.06918, -84.52156],
    "cams": [{
        "id": "cctv_32591",
        "url": "/georgiasnapshots/COBB-CAM-151.jpg",
        "name": "Canton Rd : Jamerson Rd"
    }]
}, {
    "coord": [33.622796, -84.29784],
    "cams": [{
        "id": "cctv_5955",
        "stream": "/georgiavss4/gdot-cam-611.stream/playlist.m3u8",
        "name": "I-675 : NORF STHRN RAILROAD"
    }]
}, {
    "coord": [33.724184, -84.939112],
    "cams": [{
        "id": "cctv_16178",
        "url": "/georgiasnapshots/GDOT-CAM-SR61-8.8.jpg",
        "name": "SR 61 : I-20 WB"
    }]
}, {
    "coord": [30.79998, -81.690208],
    "cams": [{
        "id": "cctv_46238",
        "url": "/georgiasnapshots/CAMD-CAM-001.jpg",
        "name": "SR 40 (E King Ave) : SR 25 (Lee St)"
    }]
}, {
    "coord": [33.9162, -84.408096],
    "cams": [{
        "id": "cctv_5228",
        "stream": "/georgiavss3/gdot-cam-579.stream/playlist.m3u8",
        "name": "I-285 : RIVERSIDE DR RAMP METER"
    }]
}, {
    "coord": [34.121808, -83.82896],
    "cams": [{
        "id": "cctv_32584",
        "url": "/georgiasnapshots/HALL-CAM-004.jpg",
        "name": "SR 347 : SR 211"
    }]
}, {
    "coord": [33.770024, -84.348912],
    "cams": [{
        "id": "cctv_6827",
        "stream": "/georgiavss1/atl-cam-559.stream/playlist.m3u8",
        "name": "SR 42 (Moreland Ave) : Freedom Pkwy Conn."
    }]
}, {
    "coord": [33.547798, -84.369904],
    "cams": [{
        "id": "cctv_10520",
        "url": "/georgiasnapshots/CLAY-CAM-C604.jpg",
        "name": "SR 3 / Tara Blvd : Central Ave"
    }]
}, {
    "coord": [34.158224, -84.787112],
    "cams": [{
        "id": "cctv_46467",
        "url": "/georgiasnapshots/BART-CAM-001.jpg",
        "name": "SR 3 : S Bridge Dr"
    }]
}, {
    "coord": [33.774172, -84.316344],
    "cams": [{
        "id": "cctv_8954",
        "stream": "/georgiavss1/dek-cam-003.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : Artwood Rd"
    }]
}, {
    "coord": [33.836824, -84.312152],
    "cams": [{
        "id": "cctv_5415",
        "stream": "/georgiavss2/gdot-cam-141.stream/playlist.m3u8",
        "name": "Clairmont Rd : BRIARCLIFF RD"
    }]
}, {
    "coord": [34.019684, -84.428376],
    "cams": [{
        "id": "cctv_32609",
        "url": "/georgiasnapshots/COBB-CAM-108.jpg",
        "name": "Johnson Ferry Rd : Lassiter Rd"
    }]
}, {
    "coord": [33.947408, -84.55016],
    "cams": [{
        "id": "cctv_15190",
        "url": "/georgiasnapshots/MAR-CAM-301.jpg",
        "name": "SR 120/S Marietta Pkwy : Powder Springs St"
    }]
}, {
    "coord": [33.9123, -84.3564],
    "cams": [{
        "id": "cctv_4982",
        "stream": "/georgiavss2/gdot-cam-217.stream/playlist.m3u8",
        "name": "I-285 : GA 400 NB"
    }]
}, {
    "coord": [33.619396, -84.432344],
    "cams": [{
        "id": "cctv_5253",
        "stream": "/georgiavss4/gdot-cam-655.stream/playlist.m3u8",
        "name": "I-285 : CD LANES (NO TRAFFIC)"
    }]
}, {
    "coord": [33.611724, -84.396928],
    "cams": [{
        "id": "cctv_5269",
        "stream": "/georgiavss2/gdot-cam-067.stream/playlist.m3u8",
        "name": "I-75 : NEAR KENNEDY DR"
    }]
}, {
    "coord": [34.054696, -84.27528],
    "cams": [{
        "id": "cctv_9082",
        "url": "/georgiasnapshots/ALPH-CAM-014d.jpg",
        "name": "North Point Pkwy : Kimball Bridge Rd"
    }]
}, {
    "coord": [33.830752, -84.339224],
    "cams": [{
        "id": "cctv_5214",
        "stream": "/georgiavss3/gdot-cam-551.stream/playlist.m3u8",
        "name": "I-85 : N DRUID HILLS RAMP METER"
    }]
}, {
    "coord": [33.560172, -84.270968],
    "cams": [{
        "id": "cctv_5947",
        "stream": "/georgiavss3/gdot-cam-603.stream/playlist.m3u8",
        "name": "I-675 : 3/4 MI N OF SR 138"
    }]
}, {
    "coord": [33.715968, -84.2614],
    "cams": [{
        "id": "cctv_5112",
        "stream": "/georgiavss3/gdot-cam-371.stream/playlist.m3u8",
        "name": "I-20 : W OF COLUMBIA DR"
    }]
}, {
    "coord": [33.901756, -84.771456],
    "cams": [{
        "id": "cctv_13613",
        "url": "/georgiasnapshots/PAUL-CAM-012.jpg",
        "name": "SR 6 : SR 6 Business (Atlanta Highway)"
    }]
}, {
    "coord": [34.25806, -84.074944],
    "cams": [{
        "id": "cctv_32560",
        "url": "http://navigator-csc.dot.ga.gov/snapshots/FORS-CAM-027.jpg",
        "name": "SR 306 : SR 369"
    }]
}, {
    "coord": [33.923736, -84.653776],
    "cams": [{
        "id": "cctv_9108",
        "url": "/georgiasnapshots/COBB-CAM-500.jpg",
        "name": "Villa Rica Rd : West Sandtown Rd"
    }]
}, {
    "coord": [34.062276, -84.606176],
    "cams": [{
        "id": "cctv_15535",
        "stream": "/georgiavss3/gdot-cam-529.stream/playlist.m3u8",
        "name": "I-75 : S OF HICKORY GROVE RD"
    }]
}, {
    "coord": [33.442654, -84.196504],
    "cams": [{
        "id": "cctv_13234",
        "stream": "/georgiavss4/gdot-cam-751.stream/playlist.m3u8",
        "name": "I-75 : AT TOLL POINT 2"
    }]
}, {
    "coord": [33.908448, -84.430192],
    "cams": [{
        "id": "cctv_15600",
        "stream": "/georgiavss4/gdot-cam-631.stream/playlist.m3u8",
        "name": "I-285 : NEW NORTHSIDE DR"
    }]
}, {
    "coord": [33.92438, -83.973976],
    "cams": [{
        "id": "cctv_10347",
        "url": "/georgiasnapshots/GWIN-CAM-173.jpg",
        "name": "SR 20 : N of PLANTATION BLVD / PARK PLACE DR"
    }]
}, {
    "coord": [33.912292, -84.160704],
    "cams": [{
        "id": "cctv_10388",
        "url": "/georgiasnapshots/GWIN-CAM-222.jpg",
        "name": "INDIAN TRAIL LILBURN RD : STEVE REYNOLDS BLVD - SINGLETON RD"
    }]
}, {
    "coord": [32.055192, -81.138696],
    "cams": [{
        "id": "cctv_15733",
        "url": "/georgiasnapshots/SAV-CAM-015.jpg",
        "name": "SR 26/US 80 : MILLS B. LANE BLVD"
    }]
}, {
    "coord": [32.896366, -83.78372],
    "cams": [{
        "id": "cctv_6030",
        "stream": "/georgiavss5/bibb-cam-034.stream/playlist.m3u8",
        "name": "I-475 : S OF COLAPARCCHEE RD"
    }]
}, {
    "coord": [34.143716, -84.251368],
    "cams": [{
        "id": "cctv_16357",
        "url": "http://navigatos-c2c.dot.ga.gov/snapshots/FORS-CAM-012.JPG",
        "name": "SR 9/Atlanta Hwy : Francis Rd/ Grassland Pkwy"
    }]
}, {
    "coord": [32.928704, -83.730432],
    "cams": [{
        "id": "cctv_16332",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-172.2.jpg",
        "name": "I-75 : BASS RD"
    }]
}, {
    "coord": [32.825982, -83.662584],
    "cams": [{
        "id": "cctv_5969",
        "url": "/georgiasnapshots/BIBB-CAM-507.jpg",
        "name": "PIO NONO AVE : MERCER UNIV"
    }]
}, {
    "coord": [33.478828, -82.03128],
    "cams": [{
        "id": "cctv_32904",
        "url": "/georgiasnapshots/AUG-CAM-207.jpg",
        "name": "Walton Way : Highland Ave."
    }]
}, {
    "coord": [33.943256, -84.4778],
    "cams": [{
        "id": "cctv_16301",
        "url": "/georgiasnapshots/COBB-CAM-094.jpg",
        "name": "Lower Roswell Rd : Holt Rd"
    }]
}, {
    "coord": [34.01144, -84.611048],
    "cams": [{
        "id": "cctv_7353",
        "url": "/georgiasnapshots/COBB-CAM-336.jpg",
        "name": "SR 3/Cobb Pkwy : McCollum Pkwy"
    }]
}, {
    "coord": [33.451272, -82.064312],
    "cams": [{
        "id": "cctv_32872",
        "url": "/georgiasnapshots/AUG-CAM-070.jpg",
        "name": "Gordon Hwy : North Leg"
    }]
}, {
    "coord": [34.915672, -85.109976],
    "cams": [{
        "id": "cctv_16143",
        "url": "/georgiasnapshots/GDOT-CAM-SR2-9.5.jpg",
        "name": "SR 2/SR 3 : TENNESSEE ST"
    }]
}, {
    "coord": [31.214006, -82.35356],
    "cams": [{
        "id": "cctv_46268",
        "url": "/georgiasnapshots/WAR-CAM-001.jpg",
        "name": "SR 38 (Plant Avenue Extension) : Ossie Davis Hwy"
    }]
}, {
    "coord": [33.885024, -84.36456],
    "cams": [{
        "id": "cctv_12964",
        "stream": "/georgiavss4/gdot-cam-821.stream/playlist.m3u8",
        "name": "GA 400 : WINDSOR PKWY"
    }]
}, {
    "coord": [34.869584, -85.519136],
    "cams": [{
        "id": "cctv_46485",
        "url": "/georgiasnapshots/DADE-CAM-001.jpg",
        "name": "SR 136 : Pace Dr"
    }]
}, {
    "coord": [31.95984, -83.749152],
    "cams": [{
        "id": "cctv_16004",
        "url": "/georgiasnapshots/GDOT-CAM-SR30-009.jpg",
        "name": "SR30 : I-75 N Ramp"
    }]
}, {
    "coord": [33.807052, -84.310376],
    "cams": [{
        "id": "cctv_13350",
        "url": "/georgiasnapshots/DEK-CAM-301.jpg",
        "name": "SR 155 / Clairmont Rd : Mason Mill Rd"
    }]
}, {
    "coord": [33.824132, -84.356072],
    "cams": [{
        "id": "cctv_6302",
        "stream": "/georgiavss1/atl-cam-041.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Sidney Marcus Blvd"
    }]
}, {
    "coord": [33.774828, -84.583912],
    "cams": [{
        "id": "cctv_15428",
        "stream": "/georgiavss2/gdot-cam-316.stream/playlist.m3u8",
        "name": "I-20 : East of Thornton Rd/SR 6"
    }]
}, {
    "coord": [33.89324, -84.465816],
    "cams": [{
        "id": "cctv_13736",
        "url": "/georgiasnapshots/COBB-CAM-129.jpg",
        "name": "Windy Ridge Pkwy : Cir 75 Pkwy"
    }]
}, {
    "coord": [33.949808, -84.231912],
    "cams": [{
        "id": "cctv_10203",
        "url": "/georgiasnapshots/GWIN-CAM-029.jpg",
        "name": "PEACHTREE INDUSTRIAL BLVD : HOLCOMB BRIDGE RD"
    }]
}, {
    "coord": [34.014396, -84.308064],
    "cams": [{
        "id": "cctv_6262",
        "url": "/georgiasnapshots/ROSWELL-CAM-120.jpg",
        "name": "SR 140 : Martins Landing Dr/Terramont Way"
    }]
}, {
    "coord": [34.114168, -84.222344],
    "cams": [{
        "id": "cctv_5357",
        "stream": "/georgiavss4/gdot-cam-853.stream/playlist.m3u8",
        "name": "GA 400 : MCFARLAND RD"
    }]
}, {
    "coord": [33.967768, -83.813552],
    "cams": [{
        "id": "cctv_32547",
        "url": "/georgiasnapshots/BARR-CAM-006.jpg",
        "name": "SR 316 : Kilcrease Rd"
    }]
}, {
    "coord": [32.756794, -83.708808],
    "cams": [{
        "id": "cctv_6844",
        "stream": "/georgiavss5/bibb-cam-111.stream/playlist.m3u8",
        "name": "I-75 : AT I-475"
    }]
}, {
    "coord": [34.874648, -84.31036],
    "cams": [{
        "id": "cctv_16108",
        "url": "/georgiasnapshots/GDOT-CAM-SR515-4.90.jpg",
        "name": "SR 515 : WINDY RIDGE RD"
    }]
}, {
    "coord": [33.890476, -84.31068],
    "cams": [{
        "id": "cctv_9139",
        "stream": "/georgiavss1/cham-cam-104.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Ind Blvd : Chamblee-Tucker Rd"
    }]
}, {
    "coord": [31.53095, -83.84424],
    "cams": [{
        "id": "cctv_46382",
        "url": "/georgiasnapshots/WORT-CAM-001.jpg",
        "name": "SR520 : MONROE ST"
    }]
}, {
    "coord": [33.9953, -84.5258],
    "cams": [{
        "id": "cctv_12914",
        "url": "/georgiasnapshots/COBB-CAM-222.jpg",
        "name": "Sandy Plains Rd : Canton Rd"
    }]
}, {
    "coord": [34.068996, -84.172456],
    "cams": [{
        "id": "cctv_16246",
        "url": "/georgiasnapshots/COJC-CAM-715.jpg",
        "name": "McGinnis Ferry Rd : Johns Creek Pkwy W"
    }]
}, {
    "coord": [34.08842, -84.260632],
    "cams": [{
        "id": "cctv_5350",
        "stream": "/georgiavss4/gdot-cam-847.stream/playlist.m3u8",
        "name": "GA 400 : WINDWARD PKWY"
    }]
}, {
    "coord": [33.933604, -84.156568],
    "cams": [{
        "id": "cctv_10249",
        "url": "/georgiasnapshots/GWIN-CAM-075.jpg",
        "name": "SR 378 : SHACKLEFORD RD / E of I-85"
    }]
}, {
    "coord": [33.468228, -84.4496],
    "cams": [{
        "id": "cctv_10177",
        "stream": "/georgiavss1/fay-cam-202.stream/playlist.m3u8",
        "name": "SR 314 : Banks Rd / White Rd"
    }]
}, {
    "coord": [33.854924, -84.430744],
    "cams": [{
        "id": "cctv_5053",
        "stream": "/georgiavss2/gdot-cam-029.stream/playlist.m3u8",
        "name": "I-75 : N OF W PACES FERRY RD"
    }]
}, {
    "coord": [34.761, -85.000696],
    "cams": [{
        "id": "cctv_16337",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-333.55.jpg",
        "name": "I-75 : EXT 333"
    }]
}, {
    "coord": [33.755756, -84.237312],
    "cams": [{
        "id": "cctv_13294",
        "stream": "/georgiavss1/dek-cam-031.stream/playlist.m3u8",
        "name": "SR 12 (Covington Hwy) : Redwing Cir"
    }]
}, {
    "coord": [33.81546, -84.599888],
    "cams": [{
        "id": "cctv_9180",
        "url": "/georgiasnapshots/COBB-CAM-233.jpg",
        "name": "SR 8 (Veterans Memorial Hwy) : South Gordon Rd"
    }]
}, {
    "coord": [33.451748, -82.04628],
    "cams": [{
        "id": "cctv_32881",
        "url": "/georgiasnapshots/AUG-CAM-077.jpg",
        "name": "Gordon Hwy : Wheeless Rd./Highland Ave."
    }]
}, {
    "coord": [33.85882, -84.675704],
    "cams": [{
        "id": "cctv_46410",
        "url": "/georgiasnapshots/COBB-CAM-450.jpg",
        "name": "Old Ga-6 Bus/Marietta St : New Macland Rd"
    }]
}, {
    "coord": [33.826084, -84.645392],
    "cams": [{
        "id": "cctv_46394",
        "url": "http://navigator-c2c-.dot.ga.gov/snapshots/COBB-CAM-449.jpg",
        "name": "SR 6 Spur/Westside Rd : Austell-Powder Springs Rd"
    }]
}, {
    "coord": [34.067884, -84.26128],
    "cams": [{
        "id": "cctv_9067",
        "stream": "/georgiavss1/alph-cam-004.stream/playlist.m3u8",
        "name": "SR 120 (Old Milton Pkwy) : North Point Pkwy"
    }]
}, {
    "coord": [33.9004, -84.3614],
    "cams": [{
        "id": "cctv_12966",
        "stream": "/georgiavss4/gdot-cam-823.stream/playlist.m3u8",
        "name": "GA 400 : S OF GLENRIDGE CONN"
    }]
}, {
    "coord": [30.903998, -84.576488],
    "cams": [{
        "id": "cctv_46349",
        "url": "/georgiasnapshots/DECA-CAM-002.jpg",
        "name": "SR 3 Bu : SR 97/ WEST ST"
    }]
}, {
    "coord": [33.615, -84.403],
    "cams": [{
        "id": "cctv_10466",
        "url": "/georgiasnapshots/CLAY-CAM-064.jpg",
        "name": "SR 85 : SR 331 / Forest Pkwy"
    }]
}, {
    "coord": [33.89908, -84.494632],
    "cams": [{
        "id": "cctv_15182",
        "url": "/georgiasnapshots/MAR-CAM-113.jpg",
        "name": "Windy Hill Rd : Village Pkwy"
    }]
}, {
    "coord": [33.787312, -84.493896],
    "cams": [{
        "id": "cctv_46416",
        "stream": "/georgiavss1/atl-cam-269.stream/playlist.m3u8",
        "name": "US 278 / Donald Lee Hollowell Pkwy : I-285 SB Ramp"
    }]
}, {
    "coord": [33.795896, -84.387816],
    "cams": [{
        "id": "cctv_15311",
        "stream": "/georgiavss1/atl-cam-940.stream/playlist.m3u8",
        "name": "SR 9 (Peachtree St) : Peachtree Cir"
    }]
}, {
    "coord": [33.864268, -84.449576],
    "cams": [{
        "id": "cctv_9060",
        "stream": "/georgiavss1/atl-cam-048.stream/playlist.m3u8",
        "name": "SR 3 / US 41 / Northside Pkwy : River Green Dr"
    }]
}, {
    "coord": [33.98782, -83.893896],
    "cams": [{
        "id": "cctv_10383",
        "url": "/georgiasnapshots/GWIN-CAM-209.jpg",
        "name": "DACULA RD : SR 8 / WINDER HWY"
    }]
}, {
    "coord": [34.225604, -83.865592],
    "cams": [{
        "id": "cctv_32634",
        "url": "/georgiasnapshots/HALL-CAM-015.JPG",
        "name": "SR 53 : Mathis Dr"
    }]
}, {
    "coord": [33.44241, -81.981024],
    "cams": [{
        "id": "cctv_32876",
        "url": "/georgiasnapshots/AUG-CAM-069.jpg",
        "name": "Gordon Hwy : Molly Pond Rd./D. Barnard"
    }]
}, {
    "coord": [34.0447, -84.581496],
    "cams": [{
        "id": "cctv_5166",
        "stream": "/georgiavss3/gdot-cam-438.stream/playlist.m3u8",
        "name": "I-75 : 1/2 MI N OF CHASTAIN RD"
    }]
}, {
    "coord": [33.911888, -83.96988],
    "cams": [{
        "id": "cctv_10420",
        "url": "/georgiasnapshots/GCDOT-IVDS-376-PH8.jpg",
        "name": "SR20-Grayson Hwy : Webb Gin House"
    }]
}, {
    "coord": [33.823668, -84.148344],
    "cams": [{
        "id": "cctv_5318",
        "stream": "/georgiavss4/gdot-cam-791.stream/playlist.m3u8",
        "name": "US 78 : HUGH HOWELL E ENT RAMP"
    }]
}, {
    "coord": [34.003324, -84.600408],
    "cams": [{
        "id": "cctv_32598",
        "url": "/georgiasnapshots/COBB-CAM-009.jpg",
        "name": "Barrett Pkwy : Old 41"
    }]
}, {
    "coord": [33.854148, -84.030904],
    "cams": [{
        "id": "cctv_10278",
        "url": "/georgiasnapshots/GWIN-CAM-104.jpg",
        "name": "SR 10 : Fountain Dr"
    }]
}, {
    "coord": [33.408428, -82.027168],
    "cams": [{
        "id": "cctv_32888",
        "url": "/georgiasnapshots/AUG-CAM-114.jpg",
        "name": "Hwy 25 : Windsor Spring Rd."
    }]
}, {
    "coord": [32.840878, -83.64684],
    "cams": [{
        "id": "cctv_5987",
        "stream": "/georgiavss5/bibb-cam-525.stream/playlist.m3u8",
        "name": "HARDEMAN AVE : AT I-75 SB RAMP"
    }]
}, {
    "coord": [32.112908, -81.239184],
    "cams": [{
        "id": "cctv_46533",
        "url": "/georgiasnapshots/CHAT-CAM-014.jpg",
        "name": "SR 26 : I-95 SB Ramp"
    }]
}, {
    "coord": [33.96664, -84.177872],
    "cams": [{
        "id": "cctv_10297",
        "url": "/georgiasnapshots/GWIN-CAM-123.jpg",
        "name": "SR 13 / US 23 : S BERKELEY LAKE RD"
    }]
}, {
    "coord": [33.751636, -84.447288],
    "cams": [{
        "id": "cctv_5072",
        "stream": "/georgiavss3/gdot-cam-335.stream/playlist.m3u8",
        "name": "I-20 : MLK JR DR"
    }]
}, {
    "coord": [33.839592, -84.379656],
    "cams": [{
        "id": "cctv_6297",
        "stream": "/georgiavss1/atl-cam-013.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd : E/W Paces Ferry Rd"
    }]
}, {
    "coord": [33.931708, -84.337528],
    "cams": [{
        "id": "cctv_32579",
        "url": "/georgiasnapshots/DUN-CAM-103.jpg",
        "name": "Ashford Dunwoody Rd : Meadow Lane"
    }]
}, {
    "coord": [33.700724, -84.251936],
    "cams": [{
        "id": "cctv_5031",
        "stream": "/georgiavss2/gdot-cam-264.stream/playlist.m3u8",
        "name": "I-285 : COLUMBIA DR"
    }]
}, {
    "coord": [33.9849, -84.542096],
    "cams": [{
        "id": "cctv_5147",
        "stream": "/georgiavss3/gdot-cam-420.stream/playlist.m3u8",
        "name": "I-75 : CANTON RD-SR5 WB EXIT"
    }]
}, {
    "coord": [33.977888, -84.093064],
    "cams": [{
        "id": "cctv_10286",
        "url": "/georgiasnapshots/GWIN-CAM-112.jpg",
        "name": "SATELLITE BLVD : SR 120"
    }]
}, {
    "coord": [33.7423, -84.40824],
    "cams": [{
        "id": "cctv_46401",
        "stream": "/georgiavss1/atl-cam-090.stream/playlist.m3u8",
        "name": "SR 3 / Northside Dr : Whitehall St"
    }]
}, {
    "coord": [34.27322, -84.809088],
    "cams": [{
        "id": "cctv_16346",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-296.40.jpg",
        "name": "I-75 : EXT 296"
    }]
}, {
    "coord": [33.6015, -84.4294],
    "cams": [{
        "id": "cctv_10431",
        "url": "/georgiasnapshots/CLAY-CAM-009.jpg",
        "name": "SR 139 : Flat Shoals Rd"
    }]
}, {
    "coord": [33.909424, -84.29004],
    "cams": [{
        "id": "cctv_9143",
        "stream": "/georgiavss1/cham-cam-011.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Ind Blvd : N Shallowford Rd"
    }]
}, {
    "coord": [32.820922, -83.695608],
    "cams": [{
        "id": "cctv_5978",
        "url": "/georgiasnapshots/BIBB-CAM-516.jpg",
        "name": "MERCER UNIV : BLOOMFIELD DR"
    }]
}, {
    "coord": [34.069112, -83.970096],
    "cams": [{
        "id": "cctv_10369",
        "url": "/georgiasnapshots/GWIN-CAM-195.jpg",
        "name": "SR 324 (Gravel Springs Rd) : Mall of Georgia Blvd"
    }]
}, {
    "coord": [33.771412, -84.641624],
    "cams": [{
        "id": "cctv_15405",
        "stream": "/georgiavss2/gdot-cam-310.stream/playlist.m3u8",
        "name": "I-20 : East of Lee Road Exit"
    }]
}, {
    "coord": [34.038, -84.5628],
    "cams": [{
        "id": "cctv_5197",
        "stream": "/georgiavss3/gdot-cam-506.stream/playlist.m3u8",
        "name": "I-575 : CHASTAIN RD"
    }]
}, {
    "coord": [33.591, -84.377096],
    "cams": [{
        "id": "cctv_10438",
        "url": "/georgiasnapshots/CLAY-CAM-022.jpg",
        "name": "SR 3 / Old Dixie Rd : Morrow Rd"
    }]
}, {
    "coord": [33.9404, -84.503704],
    "cams": [{
        "id": "cctv_5132",
        "stream": "/georgiavss3/gdot-cam-407.stream/playlist.m3u8",
        "name": "I-75 : SOUTH 120 LOOP"
    }]
}, {
    "coord": [34.269476, -83.81768],
    "cams": [{
        "id": "cctv_13166",
        "url": "/georgiasnapshots/GDOT-CAM-I-985-020.jpg",
        "name": "I-985 : SR 60/Queen City Pkwy"
    }]
}, {
    "coord": [33.817376, -84.105992],
    "cams": [{
        "id": "cctv_10360",
        "url": "/georgiasnapshots/GWIN-CAM-186.jpg",
        "name": "WEST PARK PLACE BLVD : ROCKBRIDGE RD (S)"
    }]
}, {
    "coord": [33.80338, -84.31072],
    "cams": [{
        "id": "cctv_13575",
        "url": "/georgiasnapshots/DEK-CAM-302.jpg",
        "name": "SR 155 / Clairmont Rd : Southern Ln"
    }]
}, {
    "coord": [33.754452, -84.382296],
    "cams": [{
        "id": "cctv_16256",
        "url": "/georgiasnapshots/ATL-CAM-987.jpg",
        "name": "Edgewood Ave : Piedmont Ave"
    }]
}, {
    "coord": [34.020076, -84.317544],
    "cams": [{
        "id": "cctv_6260",
        "url": "/georgiasnapshots/ROSWELL-CAM-126.jpg",
        "name": "SR 140 : Old Alabama Rd"
    }]
}, {
    "coord": [33.41867, -84.558808],
    "cams": [{
        "id": "cctv_32539",
        "url": "/georgiasnapshots/FAY-CAM-213.jpg",
        "name": "SR 54 : Carriage Lane"
    }]
}, {
    "coord": [33.890352, -84.458704],
    "cams": [{
        "id": "cctv_15599",
        "stream": "/georgiavss4/gdot-cam-626.stream/playlist.m3u8",
        "name": "I-285 : I-75 EXP RAMPS ON/OFF"
    }]
}, {
    "coord": [32.238834, -81.197144],
    "cams": [{
        "id": "cctv_46536",
        "url": "/georgiasnapshots/CHAT-CAM-017.jpg",
        "name": "SR 21 : Old Augusta Rd"
    }]
}, {
    "coord": [34.165748, -84.7936],
    "cams": [{
        "id": "cctv_46472",
        "url": "/georgiasnapshots/BART-CAM-201.jpg",
        "name": "SR 61 : SR113/293"
    }]
}, {
    "coord": [33.931964, -84.042168],
    "cams": [{
        "id": "cctv_13298",
        "url": "/georgiasnapshots/GWIN-CAM-280.jpg",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Patterson Rd"
    }]
}, {
    "coord": [33.810196, -84.373048],
    "cams": [{
        "id": "cctv_10166",
        "stream": "/georgiavss2/gdot-cam-142.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : ARMOUR DR / MI 1.8"
    }]
}, {
    "coord": [33.840464, -84.376992],
    "cams": [{
        "id": "cctv_8827",
        "stream": "/georgiavss1/atl-cam-034.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Rd : Mathieson Dr"
    }]
}, {
    "coord": [33.840784, -84.03204],
    "cams": [{
        "id": "cctv_10338",
        "url": "/georgiasnapshots/GWIN-CAM-164.jpg",
        "name": "SR 124 : HIGHPOINT RD"
    }]
}, {
    "coord": [33.86582, -84.523016],
    "cams": [{
        "id": "cctv_13756",
        "url": "/georgiasnapshots/SMYR-CAM-005.jpg",
        "name": "SR 280/S Cobb Dr : Wisteria Ln/McCauley Rd"
    }]
}, {
    "coord": [33.967172, -84.019904],
    "cams": [{
        "id": "cctv_10272",
        "url": "/georgiasnapshots/GWIN-CAM-098.jpg",
        "name": "SR 120 : LAWRENCEVILLE MARKET"
    }]
}, {
    "coord": [33.989696, -84.576512],
    "cams": [{
        "id": "cctv_10145",
        "url": "/georgiasnapshots/COBB-CAM-346.jpg",
        "name": "SR 3/Cobb Pkwy : White Circle/Progressive Way"
    }]
}, {
    "coord": [33.699232, -84.273048],
    "cams": [{
        "id": "cctv_5033",
        "stream": "/georgiavss2/gdot-cam-266.stream/playlist.m3u8",
        "name": "I-285 : E OF PANTHERSVILLE RD"
    }]
}, {
    "coord": [33.765544, -84.496616],
    "cams": [{
        "id": "cctv_5061",
        "stream": "/georgiavss3/gdot-cam-325.stream/playlist.m3u8",
        "name": "I-20 : 285 SB EXIT"
    }]
}, {
    "coord": [33.802252, -84.407264],
    "cams": [{
        "id": "cctv_5007",
        "stream": "/georgiavss2/gdot-cam-024.stream/playlist.m3u8",
        "name": "I-75 : NORTHSIDE DR"
    }]
}, {
    "coord": [33.835612, -84.576168],
    "cams": [{
        "id": "cctv_9173",
        "url": "/georgiasnapshots/COBB-CAM-072.jpg%20",
        "name": "Floyd Rd : White Blvd"
    }]
}, {
    "coord": [32.809734, -83.726288],
    "cams": [{
        "id": "cctv_6011",
        "stream": "/georgiavss5/bibb-cam-020.stream/playlist.m3u8",
        "name": "I-475 : US 80/EISENHOWER PKWY"
    }]
}, {
    "coord": [34.090292, -84.275144],
    "cams": [{
        "id": "cctv_9076",
        "url": "/georgiasnapshots/ALPH-CAM-011.jpg",
        "name": "Windward Pkwy : Deerfield / Westside Pkwy"
    }]
}, {
    "coord": [33.468148, -81.968968],
    "cams": [{
        "id": "cctv_32831",
        "url": "/georgiasnapshots/AUG-CAM-196.jpg",
        "name": "Walton Way : 8th St."
    }]
}, {
    "coord": [33.495568, -84.673944],
    "cams": [{
        "id": "cctv_12984",
        "url": "/georgiasnapshots/COW-CAM-004.jpg",
        "name": "SR 14 : WELDON RD"
    }]
}, {
    "coord": [31.484416, -81.447872],
    "cams": [{
        "id": "cctv_15226",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-055.jpg",
        "name": "I-95 : McIntosh Co Weigh Station"
    }]
}, {
    "coord": [33.911528, -84.48192],
    "cams": [{
        "id": "cctv_16303",
        "url": "/georgiasnapshots/COBB-CAM-099.jpg",
        "name": "Terrell Mill Rd : I-75 Express Lanes"
    }]
}, {
    "coord": [33.772832, -84.442008],
    "cams": [{
        "id": "cctv_13602",
        "stream": "/georgiavss1/atl-cam-276.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : W Lake Ave"
    }]
}, {
    "coord": [34.052664, -84.556048],
    "cams": [{
        "id": "cctv_5200",
        "stream": "/georgiavss3/gdot-cam-509.stream/playlist.m3u8",
        "name": "I-575 : BELLS FERRY RD"
    }]
}, {
    "coord": [34.682508, -84.49176],
    "cams": [{
        "id": "cctv_16103",
        "url": "/georgiasnapshots/GDOT-CAM-SR282-11.90.jpg",
        "name": "SR 282 : MADDOX DR"
    }]
}, {
    "coord": [34.480756, -85.347272],
    "cams": [{
        "id": "cctv_16097",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-10.10.jpg",
        "name": "SR 1 : WASHINGTON ST"
    }]
}, {
    "coord": [33.942024, -84.151616],
    "cams": [{
        "id": "cctv_4925",
        "stream": "/georgiavss2/gdot-cam-107.stream/playlist.m3u8",
        "name": "I-85 : N OF BEAVER RUIN"
    }]
}, {
    "coord": [33.617424, -84.435368],
    "cams": [{
        "id": "cctv_5585",
        "stream": "/georgiavss4/gdot-cam-648.stream/playlist.m3u8",
        "name": "I-285 : AT RAMP FROM RIVERDALE RD"
    }]
}, {
    "coord": [32.888038, -83.776888],
    "cams": [{
        "id": "cctv_6029",
        "stream": "/georgiavss5/bibb-cam-033.stream/playlist.m3u8",
        "name": "I-475 : 1 MI N OF ZEBULON RD"
    }]
}, {
    "coord": [33.764664, -84.392048],
    "cams": [{
        "id": "cctv_15298",
        "stream": "/georgiavss1/atl-cam-927.stream/playlist.m3u8",
        "name": "Ivan Allen Jr Blvd : Centennial Olympic Park Dr"
    }]
}, {
    "coord": [34.395128, -83.69116],
    "cams": [{
        "id": "cctv_32644",
        "url": "/georgiasnapshots/HALL-CAM-025.jpg",
        "name": "SR 365 : SR 52"
    }]
}, {
    "coord": [34.034136, -84.574496],
    "cams": [{
        "id": "cctv_16325",
        "url": "/georgiasnapshots/COBB-CAM-350.jpg",
        "name": "Chastain Rd : Busbee Dr"
    }]
}, {
    "coord": [33.5975, -84.264096],
    "cams": [{
        "id": "cctv_10474",
        "url": "/georgiasnapshots/CLAY-CAM-116.jpg",
        "name": "STAGECOACH RD : REX RD"
    }]
}, {
    "coord": [33.785092, -84.304],
    "cams": [{
        "id": "cctv_9155",
        "stream": "/georgiavss1/dek-cam-006.stream/playlist.m3u8",
        "name": "SR 8 (Scott Blvd) : Clairmont Ave"
    }]
}, {
    "coord": [33.925816, -84.0624],
    "cams": [{
        "id": "cctv_13267",
        "url": "/georgiasnapshots/GWIN-CAM-282.jpg",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Shannon Way / Huff Dr"
    }]
}, {
    "coord": [33.774424, -84.62308],
    "cams": [{
        "id": "cctv_15417",
        "stream": "/georgiavss2/gdot-cam-312.stream/playlist.m3u8",
        "name": "I-20 : West of CMS-55"
    }]
}, {
    "coord": [33.540748, -84.266776],
    "cams": [{
        "id": "cctv_13262",
        "stream": "/georgiavss4/gdot-cam-732.stream/playlist.m3u8",
        "name": "I-75 : I-675 INTERNAL RAMPS"
    }]
}, {
    "coord": [34.794512, -84.998504],
    "cams": [{
        "id": "cctv_16117",
        "url": "/georgiasnapshots/GDOT-CAM-SR3-20.60.jpg",
        "name": "SR 3/DALTON BYPASS : I-75 NB EXIT 336"
    }]
}, {
    "coord": [33.571, -84.342904],
    "cams": [{
        "id": "cctv_10455",
        "url": "/georgiasnapshots/CLAY-CAM-049.jpg",
        "name": "SR 54 / Jonesboro Rd : Mt Zion Rd"
    }]
}, {
    "coord": [34.209544, -84.12104],
    "cams": [{
        "id": "cctv_16364",
        "url": "/georgiasnapshots/FORS-CAM-017.jpg",
        "name": "SR 400 NB : Bald Ridge Marina"
    }]
}, {
    "coord": [31.799808, -81.432784],
    "cams": [{
        "id": "cctv_46258",
        "url": "/georgiasnapshots/LIB-CAM-003.jpg",
        "name": "SR 38 (East Oglethorpe Highway) : SR 25 (Ocean Highway)"
    }]
}, {
    "coord": [33.541062, -84.265888],
    "cams": [{
        "id": "cctv_13242",
        "stream": "/georgiavss4/gdot-cam-731.stream/playlist.m3u8",
        "name": "I-75 : AT I-675 SPLIT"
    }]
}, {
    "coord": [33.794756, -83.713184],
    "cams": [{
        "id": "cctv_32588",
        "url": "/georgiasnapshots/WALT-CAM-001.jpg",
        "name": "SR 10 BUS : SR 11"
    }]
}, {
    "coord": [34.087472, -84.48452],
    "cams": [{
        "id": "cctv_6308",
        "stream": "/georgiavss1/cher-cam-010.stream/playlist.m3u8",
        "name": "SR 92 / Woodstock Rd : Trickum Rd"
    }]
}, {
    "coord": [33.9927, -84.28],
    "cams": [{
        "id": "cctv_13133",
        "url": "/georgiasnapshots/ROSWELL-CAM-106.jpg",
        "name": "SR 140 : Steeple Chase Dr East"
    }]
}, {
    "coord": [33.843256, -84.362736],
    "cams": [{
        "id": "cctv_12971",
        "stream": "/georgiavss4/gdot-cam-810.stream/playlist.m3u8",
        "name": "GA 400 : LENOX MALL PED BRIDGE"
    }]
}, {
    "coord": [33.5373, -84.3274],
    "cams": [{
        "id": "cctv_10491",
        "url": "/georgiasnapshots/CLAY-CAM-163.jpg",
        "name": "SR 138 : FIELDER RD"
    }]
}, {
    "coord": [34.133952, -84.525192],
    "cams": [{
        "id": "cctv_15482",
        "stream": "/georgiavss3/gdot-cam-564.stream/playlist.m3u8",
        "name": "I-575 : 1 MI S OF SIXES RD"
    }]
}, {
    "coord": [34.0563, -84.596904],
    "cams": [{
        "id": "cctv_5170",
        "stream": "/georgiavss3/gdot-cam-441.stream/playlist.m3u8",
        "name": "I-75 : WADE GREEN RD ENT"
    }]
}, {
    "coord": [34.091968, -84.6152],
    "cams": [{
        "id": "cctv_15346",
        "url": "/georgiasnapshots/CHER-CAM-035.jpg",
        "name": "SR 92 : Woodstock Rd"
    }]
}, {
    "coord": [33.87028, -84.443832],
    "cams": [{
        "id": "cctv_15596",
        "stream": "/georgiavss3/gdot-cam-455.stream/playlist.m3u8",
        "name": "I-75 : S OF CHAT RIVER"
    }]
}, {
    "coord": [34.023568, -84.32984],
    "cams": [{
        "id": "cctv_6258",
        "url": "/georgiasnapshots/ROSWELL-CAM-134.jpg",
        "name": "SR 140 : Dogwood Rd"
    }]
}, {
    "coord": [33.771412, -84.385112],
    "cams": [{
        "id": "cctv_16089",
        "url": "/georgiasnapshots/ATL-CAM-971.jpg",
        "name": "SR 8 (North Ave) : Peachtree St"
    }]
}, {
    "coord": [34.39084, -83.228192],
    "cams": [{
        "id": "cctv_32572",
        "url": "/georgiasnapshots/FRKN-CAM-002.jpg",
        "name": "SR 106 : I-85 NB Interchange"
    }]
}, {
    "coord": [33.853884, -84.602816],
    "cams": [{
        "id": "cctv_7355",
        "url": "/georgiasnapshots/COBB-CAM-065.jpg",
        "name": "EW Connector : Austell Rd"
    }]
}, {
    "coord": [33.4651, -84.3352],
    "cams": [{
        "id": "cctv_10525",
        "url": "/georgiasnapshots/CLAY-CAM-C609.jpg",
        "name": "SR 3 / Tara Blvd : Near Cardinal Rd"
    }]
}, {
    "coord": [34.021572, -84.57092],
    "cams": [{
        "id": "cctv_15490",
        "stream": "/georgiavss3/gdot-cam-520.stream/playlist.m3u8",
        "name": "I-75 : S OF BIG SHANTY"
    }]
}, {
    "coord": [33.817328, -84.118808],
    "cams": [{
        "id": "cctv_10359",
        "url": "/georgiasnapshots/GWIN-CAM-185.jpg",
        "name": "WEST PARK PLACE BLVD : BERMUDA RD"
    }]
}, {
    "coord": [33.817152, -84.040104],
    "cams": [{
        "id": "cctv_10335",
        "url": "/georgiasnapshots/GWIN-CAM-161.jpg",
        "name": "SR 124 : SR 264 / BETHANY CHURCH RD"
    }]
}, {
    "coord": [34.102332, -84.083536],
    "cams": [{
        "id": "cctv_10399",
        "url": "/georgiasnapshots/GWIN-CAM-240.jpg",
        "name": "SUWANEE DAM RD : JOHNSON RD"
    }]
}, {
    "coord": [33.780652, -84.2448],
    "cams": [{
        "id": "cctv_5710",
        "stream": "/georgiavss2/gdot-cam-251.stream/playlist.m3u8",
        "name": "I-285 : N OF MEMORIAL DR"
    }]
}, {
    "coord": [34.080112, -83.881936],
    "cams": [{
        "id": "cctv_15994",
        "url": "/georgiasnapshots/GDOT-CAM-801.jpg",
        "name": "I-85 : N OF SPOUT SPRINGS"
    }]
}, {
    "coord": [34.006828, -83.987544],
    "cams": [{
        "id": "cctv_10212",
        "url": "/georgiasnapshots/GWIN-CAM-038.jpg",
        "name": "SR 20 : Russell Rd / Ridge Rd"
    }]
}, {
    "coord": [34.037268, -84.037872],
    "cams": [{
        "id": "cctv_15964",
        "url": "/georgiasnapshots/GDOT-CAM-159.jpg",
        "name": "I-85 : S OF I-985"
    }]
}, {
    "coord": [33.622684, -84.42548],
    "cams": [{
        "id": "cctv_5264",
        "stream": "/georgiavss4/gdot-cam-665.stream/playlist.m3u8",
        "name": "I-285 : MAIN LANES - NO. 6"
    }]
}, {
    "coord": [33.677972, -84.318288],
    "cams": [{
        "id": "cctv_5040",
        "stream": "/georgiavss2/gdot-cam-272.stream/playlist.m3u8",
        "name": "I-285 : E OF I-675"
    }]
}, {
    "coord": [33.848944, -84.607624],
    "cams": [{
        "id": "cctv_9165",
        "url": "/georgiasnapshots/COBB-CAM-001.jpg",
        "name": "SR 5/Austell Rd : Anderson Mill Rd"
    }]
}, {
    "coord": [33.976984, -84.089672],
    "cams": [{
        "id": "cctv_5426",
        "stream": "/georgiavss2/gdot-cam-129.stream/playlist.m3u8",
        "name": "I-85 : SR 120"
    }]
}, {
    "coord": [33.91, -84.283696],
    "cams": [{
        "id": "cctv_5230",
        "stream": "/georgiavss3/gdot-cam-580.stream/playlist.m3u8",
        "name": "I-285 : PTREE INDUS RAMP METER"
    }]
}, {
    "coord": [33.579088, -84.349688],
    "cams": [{
        "id": "cctv_6804",
        "stream": "/georgiavss4/gdot-cam-703.stream/playlist.m3u8",
        "name": "I-75 : N OF SR 54"
    }]
}, {
    "coord": [34.887676, -85.066024],
    "cams": [{
        "id": "cctv_15164",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-344.jpg",
        "name": "I-75 : S OF US 41/76 - CMS 913"
    }]
}, {
    "coord": [33.768176, -84.358632],
    "cams": [{
        "id": "cctv_9190",
        "stream": "/georgiavss1/atl-cam-070.stream/playlist.m3u8",
        "name": "SR 10 (Freedom Pkwy) : Ralph McGill"
    }]
}, {
    "coord": [33.974332, -83.986824],
    "cams": [{
        "id": "cctv_13106",
        "url": "/georgiasnapshots/GWIN-CAM-273.jpg",
        "name": "SR 20 : Hurricane Shoals Road"
    }]
}, {
    "coord": [33.82554, -84.233208],
    "cams": [{
        "id": "cctv_5307",
        "stream": "/georgiavss4/gdot-cam-781.stream/playlist.m3u8",
        "name": "US 78 : BROCKETT RD"
    }]
}, {
    "coord": [33.612492, -83.82632],
    "cams": [{
        "id": "cctv_13327",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-093.jpg",
        "name": "I-20 : SR 142 / John Williams Hwy"
    }]
}, {
    "coord": [33.656752, -84.49804],
    "cams": [{
        "id": "cctv_5371",
        "stream": "/georgiavss4/gdot-cam-935.stream/playlist.m3u8",
        "name": "I-285 : CAMP CREEK PKWY EXIT"
    }]
}, {
    "coord": [33.493542, -82.084368],
    "cams": [{
        "id": "cctv_13076",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-196.jpg",
        "name": "I-20 : I-520 E / SR 232 W"
    }]
}, {
    "coord": [33.958028, -83.985312],
    "cams": [{
        "id": "cctv_10245",
        "url": "/georgiasnapshots/GWIN-CAM-071.jpg",
        "name": "SR 20 : SR 120 / PIKE ST"
    }]
}, {
    "coord": [34.152072, -84.82492],
    "cams": [{
        "id": "cctv_16160",
        "url": "/georgiasnapshots/GDOT-CAM-SR61-5.60.jpg",
        "name": "SR 113 : DOUTHIT FERRY RD"
    }]
}, {
    "coord": [33.77392, -84.330864],
    "cams": [{
        "id": "cctv_7201",
        "stream": "/georgiavss1/atl-cam-218.stream/playlist.m3u8",
        "name": "SR 8 / Ponce De Leon Ave : Clifton Rd"
    }]
}, {
    "coord": [34.063772, -84.42348],
    "cams": [{
        "id": "cctv_6864",
        "url": "/georgiasnapshots/COBB-CAM-218.jpg",
        "name": "SR 92 : Sandy Plains Rd"
    }]
}, {
    "coord": [33.076774, -83.985648],
    "cams": [{
        "id": "cctv_15216",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-191.jpg",
        "name": "I-75 : North of Monroe Co W/S"
    }]
}, {
    "coord": [34.098784, -84.0802],
    "cams": [{
        "id": "cctv_10398",
        "url": "/georgiasnapshots/GWIN-CAM-239.jpg",
        "name": "SUWANEE DAM RD : WHITEHEAD RD"
    }]
}, {
    "coord": [33.840392, -84.31552],
    "cams": [{
        "id": "cctv_46326",
        "stream": "/georgiavss2/gdot-cam-145.stream/playlist.m3u8",
        "name": "I-85 : CLAIRMONT RD"
    }]
}, {
    "coord": [33.976452, -84.085984],
    "cams": [{
        "id": "cctv_10403",
        "url": "/georgiasnapshots/GWIN-CAM-244.jpg",
        "name": "SR 120 : I-85 NB / NEWPOINT PKWY"
    }]
}, {
    "coord": [33.861044, -83.40748],
    "cams": [{
        "id": "cctv_16376",
        "url": "http://navigator-c2c.dot.ga.gov/sapshots/FORS-CAM-24.jpg",
        "name": "SR 15 : Barnett Shoals Rd"
    }]
}, {
    "coord": [33.77682, -84.449928],
    "cams": [{
        "id": "cctv_13271",
        "stream": "/georgiavss1/atl-cam-275.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : Hollywood Rd"
    }]
}, {
    "coord": [34.89314, -85.07508],
    "cams": [{
        "id": "cctv_9315",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-345.jpg",
        "name": "I-75 : US 41/76"
    }]
}, {
    "coord": [32.697052, -83.73588],
    "cams": [{
        "id": "cctv_6838",
        "url": "/georgiasnapshots/BIBB-CAM-100.jpg",
        "name": "I-75 : N OF CRAWFORD CO LINE"
    }]
}, {
    "coord": [33.91954, -84.255304],
    "cams": [{
        "id": "cctv_10423",
        "url": "/georgiasnapshots/GCDOT-IVDS-587-PH4.jpg",
        "name": "SR 13 / US 23 : GLOBAL FORUM BLVD"
    }]
}, {
    "coord": [33.725292, -84.900984],
    "cams": [{
        "id": "cctv_9294",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-026.jpg",
        "name": "I-20 : LIBERTY RD"
    }]
}, {
    "coord": [33.831588, -84.426872],
    "cams": [{
        "id": "cctv_5363",
        "stream": "/georgiavss2/gdot-cam-091.stream/playlist.m3u8",
        "name": "I-75 : MOORES MILL RD"
    }]
}, {
    "coord": [33.88614, -84.472256],
    "cams": [{
        "id": "cctv_7313",
        "url": "/georgiasnapshots/COBB-CAM-053.jpg",
        "name": "SR 3/Cobb Pkwy : Spring Rd"
    }]
}, {
    "coord": [33.75004, -84.275984],
    "cams": [{
        "id": "cctv_13222",
        "stream": "/georgiavss1/dek-cam-150.stream/playlist.m3u8",
        "name": "SR 154 (Memorial Drive) : Carter Rd"
    }]
}, {
    "coord": [33.71388, -84.27204],
    "cams": [{
        "id": "cctv_5111",
        "stream": "/georgiavss3/gdot-cam-370.stream/playlist.m3u8",
        "name": "I-20 : CANDLER RD"
    }]
}, {
    "coord": [33.867676, -84.368104],
    "cams": [{
        "id": "cctv_12969",
        "stream": "/georgiavss4/gdot-cam-818.stream/playlist.m3u8",
        "name": "GA 400 : N OF WIEUCA RD"
    }]
}, {
    "coord": [34.004536, -84.391288],
    "cams": [{
        "id": "cctv_13127",
        "url": "/georgiasnapshots/ROSWELL-CAM-424.jpg",
        "name": "SR 120 : Coleman Rd"
    }]
}, {
    "coord": [33.924988, -84.138068],
    "cams": [{
        "id": "cctv_10417",
        "url": "/georgiasnapshots/GCDOT-IVDS-280.jpg",
        "name": "SR 378 : ARC WAY"
    }]
}, {
    "coord": [33.663992, -84.422056],
    "cams": [{
        "id": "cctv_5296",
        "stream": "/georgiavss2/gdot-cam-074.stream/playlist.m3u8",
        "name": "I-85 : N OF VIRGINIA AVE"
    }]
}, {
    "coord": [33.690372, -84.069216],
    "cams": [{
        "id": "cctv_15985",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-077.jpg",
        "name": "I-20 : SIGMAN RD"
    }]
}, {
    "coord": [33.810728, -84.263384],
    "cams": [{
        "id": "cctv_5303",
        "stream": "/georgiavss4/gdot-cam-778.stream/playlist.m3u8",
        "name": "US 78 : E OF N DRUID HILLS RD"
    }]
}, {
    "coord": [33.90232, -84.473088],
    "cams": [{
        "id": "cctv_7306",
        "url": "/georgiasnapshots/COBB-CAM-032.jpg",
        "name": "Windy Hill Rd : I-75 NB Ramp"
    }]
}, {
    "coord": [32.6125, -83.742328],
    "cams": [{
        "id": "cctv_16197",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-146.2.jpg",
        "name": "I-75 : SR 247C"
    }]
}, {
    "coord": [33.955848, -84.017872],
    "cams": [{
        "id": "cctv_10257",
        "url": "/georgiasnapshots/GWIN-CAM-083.jpg",
        "name": "OLD NORCROSS RD : LAWRENCEVILLE-SUWANEE RD"
    }]
}, {
    "coord": [33.885356, -84.310176],
    "cams": [{
        "id": "cctv_15245",
        "url": "/georgiasnapshots/CHAM-CAM-150.jpg",
        "name": "SR 155 / Clairmont Rd : New Peachtree Rd"
    }]
}, {
    "coord": [31.985854, -81.218064],
    "cams": [{
        "id": "cctv_15397",
        "url": "/georgiasnapshots/SAV-CAM-005.jpg",
        "name": "SR 204 : King George Blvd"
    }]
}, {
    "coord": [30.969348, -83.380264],
    "cams": [{
        "id": "cctv_13597",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-027.jpg",
        "name": "I-75 : S of CMS-919"
    }]
}, {
    "coord": [33.757088, -84.394648],
    "cams": [{
        "id": "cctv_15302",
        "url": "/georgiasnapshots/ATL-CAM-932.jpg",
        "name": "Centennial Olympic Park Dr : CNN Parking Deck"
    }]
}, {
    "coord": [33.772152, -84.375888],
    "cams": [{
        "id": "cctv_7193",
        "stream": "/georgiavss1/atl-cam-204.stream/playlist.m3u8",
        "name": "SR 8 (Ponce De Leon Ave) : Durant Pl"
    }]
}, {
    "coord": [34.024052, -84.578224],
    "cams": [{
        "id": "cctv_15523",
        "stream": "/georgiavss4/gdot-cam-693.stream/playlist.m3u8",
        "name": "BIG SHANTY RD : W OF I-75 EXP LANE RAMPS"
    }]
}, {
    "coord": [34.021036, -84.118408],
    "cams": [{
        "id": "cctv_10303",
        "url": "/georgiasnapshots/GWIN-CAM-129.jpg",
        "name": "SUGARLOAF PKWY : PEACHTREE INDUSTRIAL BLVD"
    }]
}, {
    "coord": [33.9287, -84.176496],
    "cams": [{
        "id": "cctv_4922",
        "stream": "/georgiavss2/gdot-cam-104.stream/playlist.m3u8",
        "name": "I-85 : INDIAN TRAIL"
    }]
}, {
    "coord": [33.5595, -84.345904],
    "cams": [{
        "id": "cctv_10485",
        "url": "/georgiasnapshots/CLAY-CAM-141.jpg",
        "name": "SR 54 / Jonesboro Rd : Citizens Pkwy"
    }]
}, {
    "coord": [33.762096, -84.395016],
    "cams": [{
        "id": "cctv_15382",
        "url": "/georgiasnapshots/ATL-CAM-955.jpg",
        "name": "Luckie St : Baker St"
    }]
}, {
    "coord": [32.232296, -81.618328],
    "cams": [{
        "id": "cctv_46564",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-132.00.jpg",
        "name": "I-16 : Ash Branch Church Rd"
    }]
}, {
    "coord": [33.773876, -84.337144],
    "cams": [{
        "id": "cctv_13674",
        "stream": "/georgiavss1/atl-cam-217.stream/playlist.m3u8",
        "name": "SR 8 / Ponce De Leon Ave : Lullwater Rd"
    }]
}, {
    "coord": [33.721844, -84.395296],
    "cams": [{
        "id": "cctv_5189",
        "stream": "/georgiavss2/gdot-cam-005.stream/playlist.m3u8",
        "name": "75/85 : UNIVERSITY AVE"
    }]
}, {
    "coord": [33.39965, -84.149824],
    "cams": [{
        "id": "cctv_13333",
        "stream": "/georgiavss4/gdot-cam-764.stream/playlist.m3u8",
        "name": "I-75 : BEFORE SR 155"
    }]
}, {
    "coord": [34.0359, -84.337392],
    "cams": [{
        "id": "cctv_13153",
        "url": "/georgiasnapshots/ROSWELL-CAM-408.jpg",
        "name": "Old Roswell : Commerce Pkwy"
    }]
}, {
    "coord": [34.256984, -85.164504],
    "cams": [{
        "id": "cctv_15380",
        "url": "/georgiasnapshots/FLYD-CAM-010.jpg",
        "name": "SR 1/Turner McCall Blvd : Broad Street"
    }]
}, {
    "coord": [33.690028, -84.501488],
    "cams": [{
        "id": "cctv_5187",
        "stream": "/georgiavss2/gdot-cam-048.stream/playlist.m3u8",
        "name": "SR 166 : I-285"
    }]
}, {
    "coord": [33.795856, -84.486808],
    "cams": [{
        "id": "cctv_5391",
        "stream": "/georgiavss4/gdot-cam-954.stream/playlist.m3u8",
        "name": "I-285 : S OF BOLTON RD"
    }]
}, {
    "coord": [34.409004, -84.918576],
    "cams": [{
        "id": "cctv_15976",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-307.72.jpg",
        "name": "I-75 : REST AREA #34"
    }]
}, {
    "coord": [33.849728, -83.916888],
    "cams": [{
        "id": "cctv_46295",
        "url": "/georgiasnapshots/GWIN-CAM-231.jpg",
        "name": "US 78 : BRAND RD - OLD LOGANVILLE RD"
    }]
}, {
    "coord": [33.47454, -81.96336],
    "cams": [{
        "id": "cctv_32836",
        "url": "/georgiasnapshots/AUG-CAM-031.jpg",
        "name": "Broad St. : 7th St."
    }]
}, {
    "coord": [31.714952, -83.252968],
    "cams": [{
        "id": "cctv_46330",
        "url": "/georgiasnapshots/BENH-CAM-001.jpg",
        "name": "SR 11 : CENTRAL AVE"
    }]
}, {
    "coord": [33.846156, -84.372248],
    "cams": [{
        "id": "cctv_7224",
        "stream": "/georgiavss1/atl-cam-018.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Tower Place"
    }]
}, {
    "coord": [33.5733, -84.371496],
    "cams": [{
        "id": "cctv_10532",
        "url": "/georgiasnapshots/CLAY-CAM-027.jpg",
        "name": "SR 3 TB : MT ZION RD"
    }]
}, {
    "coord": [34.00018, -84.284304],
    "cams": [{
        "id": "cctv_6265",
        "url": "/georgiasnapshots/ROSWELL-CAM-110.jpg",
        "name": "SR 140 : Champions Green Pkwy"
    }]
}, {
    "coord": [34.044204, -83.992176],
    "cams": [{
        "id": "cctv_13103",
        "url": "/georgiasnapshots/GWIN-CAM-275.jpg",
        "name": "SR 20 : Tech Center Pkwy"
    }]
}, {
    "coord": [33.74228, -84.230152],
    "cams": [{
        "id": "cctv_5024",
        "stream": "/georgiavss2/gdot-cam-258.stream/playlist.m3u8",
        "name": "I-285 : N OF GLENWOOD RD"
    }]
}, {
    "coord": [33.75974, -84.392072],
    "cams": [{
        "id": "cctv_15307",
        "stream": "/georgiavss1/atl-cam-936.stream/playlist.m3u8",
        "name": "Centennial Olympic Park Dr : Andrew Young Intl Blvd (North)"
    }]
}, {
    "coord": [33.986848, -84.420952],
    "cams": [{
        "id": "cctv_13119",
        "url": "/georgiasnapshots/COBB-CAM-169.jpg",
        "name": "SR 120 / Roswell Rd : Heritage Glen"
    }]
}, {
    "coord": [33.846072, -84.487216],
    "cams": [{
        "id": "cctv_5403",
        "stream": "/georgiavss4/gdot-cam-965.stream/playlist.m3u8",
        "name": "I-285 : EXIT TO ATLANTA RD"
    }]
}, {
    "coord": [31.224892, -81.526552],
    "cams": [{
        "id": "cctv_46549",
        "url": "/georgiasnapshots/GLY-CAM-006.jpg",
        "name": "SR 27 : Crispen Blvd"
    }]
}, {
    "coord": [34.001404, -84.073048],
    "cams": [{
        "id": "cctv_46316",
        "url": "/georgiasnapshots/GC-CAM-266.jpg",
        "name": "OLD PEACHTREE RD : I-85 NB RAMP"
    }]
}, {
    "coord": [32.859512, -83.746168],
    "cams": [{
        "id": "cctv_6018",
        "stream": "/georgiavss5/bibb-cam-027.stream/playlist.m3u8",
        "name": "I-475 : TUCKER RD"
    }]
}, {
    "coord": [33.905112, -84.489152],
    "cams": [{
        "id": "cctv_15181",
        "url": "/georgiasnapshots/MAR-CAM-112.jpg",
        "name": "SR 3/Cobb Pkwy : Terrell Mill Rd"
    }]
}, {
    "coord": [33.893156, -84.00728],
    "cams": [{
        "id": "cctv_10228",
        "url": "/georgiasnapshots/GWIN-CAM-054.jpg",
        "name": "SR 124 : STRATFORD DR"
    }]
}, {
    "coord": [33.487556, -82.073104],
    "cams": [{
        "id": "cctv_32863",
        "url": "/georgiasnapshots/AUG-CAM-217.jpg",
        "name": "Wheeler Rd. : Walon Way Ext."
    }]
}, {
    "coord": [34.053292, -84.3722],
    "cams": [{
        "id": "cctv_13146",
        "url": "/georgiasnapshots/ROSWELL-CAM-206.jpg",
        "name": "SR 92 : Grace Hill Dr"
    }]
}, {
    "coord": [33.6397, -84.3612],
    "cams": [{
        "id": "cctv_10505",
        "url": "/georgiasnapshots/CLAY-CAM-214.jpg",
        "name": "SR 54 : CONLEY RD"
    }]
}, {
    "coord": [33.89356, -84.45788],
    "cams": [{
        "id": "cctv_13655",
        "url": "/georgiasnapshots/COBB-CAM-124.jpg",
        "name": "Cumberland Blvd : Interstate North Pkwy"
    }]
}, {
    "coord": [33.765112, -84.49324],
    "cams": [{
        "id": "cctv_5062",
        "stream": "/georgiavss3/gdot-cam-326.stream/playlist.m3u8",
        "name": "I-20 : 285 NB EXIT"
    }]
}, {
    "coord": [33.98986, -84.275384],
    "cams": [{
        "id": "cctv_6853",
        "url": "/georgiasnapshots/ROSWELL-CAM-104.jpg",
        "name": "SR 140 : Holcomb Center"
    }]
}, {
    "coord": [34.005632, -83.912816],
    "cams": [{
        "id": "cctv_10379",
        "url": "/georgiasnapshots/GWIN-CAM-205.jpg",
        "name": "DACULA RD : LIAM DR / HEBRON SCHOOL"
    }]
}, {
    "coord": [33.697664, -84.448472],
    "cams": [{
        "id": "cctv_46426",
        "url": "/georgiasnapshots/FULT-CAM-008.jpg",
        "name": "SR 166/ E Woodberry Ave : Stanton Rd"
    }]
}, {
    "coord": [33.711476, -84.271616],
    "cams": [{
        "id": "cctv_13566",
        "stream": "/georgiavss1/dek-cam-308.stream/playlist.m3u8",
        "name": "SR 155 (Candler Rd) : HF Shepherd Dr / Rainbow Way"
    }]
}, {
    "coord": [33.89168, -84.461464],
    "cams": [{
        "id": "cctv_5126",
        "stream": "/georgiavss3/gdot-cam-401.stream/playlist.m3u8",
        "name": "I-75 : I-285 WB EXIT"
    }]
}, {
    "coord": [33.520222, -84.248056],
    "cams": [{
        "id": "cctv_13364",
        "stream": "/georgiavss4/gdot-cam-737.stream/playlist.m3u8",
        "name": "I-75 : 1 MI N OF HUDSON BR RD"
    }]
}, {
    "coord": [32.55375, -83.597016],
    "cams": [{
        "id": "cctv_16087",
        "url": "/georgiasnapshots/GDOT-CAM-SR247-13.5.jpg",
        "name": "SR 247 : SR 96 W RAMP"
    }]
}, {
    "coord": [33.91882, -83.984696],
    "cams": [{
        "id": "cctv_10316",
        "url": "/georgiasnapshots/GWIN-CAM-142.jpg",
        "name": "SUGARLOAF PKWY : GWINNETT FAIRGROUNDS"
    }]
}, {
    "coord": [34.000488, -84.562568],
    "cams": [{
        "id": "cctv_5151",
        "stream": "/georgiavss3/gdot-cam-424.stream/playlist.m3u8",
        "name": "I-75 : I-575"
    }]
}, {
    "coord": [33.834488, -84.079248],
    "cams": [{
        "id": "cctv_10277",
        "url": "/georgiasnapshots/GWIN-CAM-103.jpg",
        "name": "SR 10 : Ross Rd"
    }]
}, {
    "coord": [33.696188, -84.407752],
    "cams": [{
        "id": "cctv_5244",
        "stream": "/georgiavss2/gdot-cam-060.stream/playlist.m3u8",
        "name": "SR 166 : US 19"
    }]
}, {
    "coord": [34.52694, -83.97932],
    "cams": [{
        "id": "cctv_32662",
        "url": "/georgiasnapshots/LUMPKN-CAM-002.jpg",
        "name": "SR 60 : Chestatee St"
    }]
}, {
    "coord": [33.859252, -84.481176],
    "cams": [{
        "id": "cctv_32530",
        "stream": "/georgiavss4/gdot-cam-971.stream/playlist.m3u8",
        "name": "I-285 : South of Paces Ferry Exit"
    }]
}, {
    "coord": [33.482002, -82.130176],
    "cams": [{
        "id": "cctv_13330",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-194.jpg",
        "name": "I-20 : Dyess Parkway"
    }]
}, {
    "coord": [34.040248, -84.184376],
    "cams": [{
        "id": "cctv_6314",
        "stream": "/georgiavss1/cojc-cam-230.stream/playlist.m3u8",
        "name": "SR 141 (Medlock Bridge Rd) : Parsons Rd"
    }]
}, {
    "coord": [33.771324, -84.381952],
    "cams": [{
        "id": "cctv_15270",
        "url": "/georgiasnapshots/ATL-CAM-909.jpg",
        "name": "SR 8 (North Ave) : Piedmont Ave"
    }]
}, {
    "coord": [33.941932, -84.515904],
    "cams": [{
        "id": "cctv_15177",
        "url": "/georgiasnapshots/MAR-CAM-108.jpg",
        "name": "SR 3/Cobb Pkwy : SR 120/S Marietta Pkwy"
    }]
}, {
    "coord": [33.9187, -84.336896],
    "cams": [{
        "id": "cctv_4986",
        "stream": "/georgiavss2/gdot-cam-220.stream/playlist.m3u8",
        "name": "I-285 : E OF ASHFD-DNWDY"
    }]
}, {
    "coord": [33.6073, -84.343904],
    "cams": [{
        "id": "cctv_10492",
        "url": "/georgiasnapshots/CLAY-CAM-174.jpg",
        "name": "SR 54 : KENYON RD"
    }]
}, {
    "coord": [33.943348, -84.331224],
    "cams": [{
        "id": "cctv_32668",
        "url": "/georgiasnapshots/DUN-CAM-153.jpg",
        "name": "Chamblee Dunwoody Rd : Ash-Cntr Pky/Womack Rd"
    }]
}, {
    "coord": [33.97796, -84.550432],
    "cams": [{
        "id": "cctv_15171",
        "url": "/georgiasnapshots/MAR-CAM-102.jpg",
        "name": "SR 3/Cobb Pkwy : Canton Conn looking NW"
    }]
}, {
    "coord": [34.12976, -84.525928],
    "cams": [{
        "id": "cctv_15436",
        "stream": "/georgiavss3/gdot-cam-563.stream/playlist.m3u8",
        "name": "I-575 : RIDGEWALK PKY EXIT"
    }]
}, {
    "coord": [33.824272, -84.4234],
    "cams": [{
        "id": "cctv_5026",
        "stream": "/georgiavss2/gdot-cam-026.stream/playlist.m3u8",
        "name": "I-75 : NEAR PEACHTREE BATTLE"
    }]
}, {
    "coord": [33.948876, -84.090112],
    "cams": [{
        "id": "cctv_10264",
        "url": "/georgiasnapshots/GWIN-CAM-090.jpg",
        "name": "OLD NORCROSS RD : BOGGS RD"
    }]
}, {
    "coord": [33.985612, -84.15912],
    "cams": [{
        "id": "cctv_46274",
        "url": "/georgiasnapshots/GWIN-CAM-211.jpg",
        "name": "PLEASANT HILL RD : SUMMIT RIDGE PKWY"
    }]
}, {
    "coord": [32.920376, -83.709448],
    "cams": [{
        "id": "cctv_5999",
        "url": "/georgiasnapshots/BIBB-CAM-537.jpg",
        "name": "RIVERSIDE DR : SHERATON DR"
    }]
}, {
    "coord": [33.751452, -84.452552],
    "cams": [{
        "id": "cctv_5071",
        "stream": "/georgiavss3/gdot-cam-334.stream/playlist.m3u8",
        "name": "I-20 : W OF MLK JR DR"
    }]
}, {
    "coord": [34.441596, -84.921176],
    "cams": [{
        "id": "cctv_16133",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-310.20.jpg",
        "name": "I-75 : UNION GROVE RD"
    }]
}, {
    "coord": [33.89266, -84.284368],
    "cams": [{
        "id": "cctv_13213",
        "stream": "/georgiavss1/dek-cam-225.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Hawk#10"
    }]
}, {
    "coord": [32.826122, -83.677432],
    "cams": [{
        "id": "cctv_5975",
        "url": "/georgiasnapshots/BIBB-CAM-513.jpg",
        "name": "MERCER UNIV : COLUMBUS RD"
    }]
}, {
    "coord": [33.689884, -84.437016],
    "cams": [{
        "id": "cctv_46429",
        "url": "/georgiasnapshots/FULT-CAM-011.jpg",
        "name": "SR 14/ US 29/ N. Main : Harold Sheets Conn"
    }]
}, {
    "coord": [33.62934, -84.400032],
    "cams": [{
        "id": "cctv_5273",
        "stream": "/georgiavss2/gdot-cam-070.stream/playlist.m3u8",
        "name": "I-75 : S OF 285 (SOUTH SIDE)"
    }]
}, {
    "coord": [33.740356, -84.586216],
    "cams": [{
        "id": "cctv_13198",
        "url": "/georgiasnapshots/DOUG-CAM-080.jpg",
        "name": "SR 6 / Thornton Rd : Riverside Pkwy"
    }]
}, {
    "coord": [34.1665, -84.789448],
    "cams": [{
        "id": "cctv_16138",
        "url": "/georgiasnapshots/GDOT-CAM-SR3-8.40.jpg",
        "name": "SR 3 : SR 113/MAIN ST"
    }]
}, {
    "coord": [34.023528, -84.26968],
    "cams": [{
        "id": "cctv_32967",
        "url": "/georgiasnapshots/COJC-CAM-050.jpg",
        "name": "Haynes Bridge Road : Kroger"
    }]
}, {
    "coord": [33.479126, -81.98344],
    "cams": [{
        "id": "cctv_32840",
        "url": "/georgiasnapshots/AUG-CAM-013.jpg",
        "name": "Greene St. : 15th"
    }]
}, {
    "coord": [34.472936, -84.923584],
    "cams": [{
        "id": "cctv_16090",
        "url": "/georgiasnapshots/GDOT-CAM-SR53-9.5.jpg",
        "name": "SR 53 : CURTIS PKWY SE"
    }]
}, {
    "coord": [34.238016, -84.288288],
    "cams": [{
        "id": "cctv_16167",
        "url": "/georgiasnapshots/GDOT-CAM-SR20-23.9.jpg",
        "name": "SR 20 : SR 372"
    }]
}, {
    "coord": [33.624452, -84.584536],
    "cams": [{
        "id": "cctv_46453",
        "url": "/georgiasnapshots/FULT-CAM-031.jpg",
        "name": "GA 14 ALT/ South Fulton Pkwy : Derrick Rd"
    }]
}, {
    "coord": [34.044704, -84.031624],
    "cams": [{
        "id": "cctv_15960",
        "stream": "/georgiavss2/gdot-cam-160.stream/playlist.m3u8",
        "name": "I-85 : I-985 ENTRANCE"
    }]
}, {
    "coord": [33.9819, -84.342304],
    "cams": [{
        "id": "cctv_5336",
        "stream": "/georgiavss4/gdot-cam-832.stream/playlist.m3u8",
        "name": "GA 400 : NORTHRIDGE RD"
    }]
}, {
    "coord": [33.944004, -84.463928],
    "cams": [{
        "id": "cctv_7326",
        "url": "/georgiasnapshots/COBB-CAM-092.jpg",
        "name": "Terrell Mill Rd : Lower Roswell Rd"
    }]
}, {
    "coord": [33.579052, -84.469488],
    "cams": [{
        "id": "cctv_46443",
        "url": "/georgiasnapshots/FULT-CAM-020.jpg",
        "name": "GA 279/ Old National Hwy : Woodward Rd"
    }]
}, {
    "coord": [32.154202, -81.180776],
    "cams": [{
        "id": "cctv_46245",
        "url": "http:/navigator-c2c.dot.ga.gov/snapshots/CHAT-CAM-002.jpg",
        "name": "SR 30 (Bonnybridge Road) : SR 21 "
    }]
}, {
    "coord": [33.78034, -84.39116],
    "cams": [{
        "id": "cctv_4941",
        "stream": "/georgiavss2/gdot-cam-018.stream/playlist.m3u8",
        "name": "75/85 : S OF 10TH ST"
    }]
}, {
    "coord": [33.841888, -84.059568],
    "cams": [{
        "id": "cctv_10196",
        "url": "/georgiasnapshots/GWIN-CAM-018.jpg",
        "name": "SR 10 : Joe Hewatt Rd"
    }]
}, {
    "coord": [33.850304, -84.369448],
    "cams": [{
        "id": "cctv_12970",
        "stream": "/georgiavss4/gdot-cam-815.stream/playlist.m3u8",
        "name": "GA 400 : S OF LENOX RD/SR 141 CONN"
    }]
}, {
    "coord": [33.935896, -84.120264],
    "cams": [{
        "id": "cctv_10324",
        "url": "/georgiasnapshots/GWIN-CAM-150.jpg",
        "name": "PLEASANT HILL RD : CORLEY PL"
    }]
}, {
    "coord": [34.446864, -83.123144],
    "cams": [{
        "id": "cctv_13063",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-173.jpg",
        "name": "I-85 : SR 17 / JONES ST"
    }]
}, {
    "coord": [33.758412, -84.471424],
    "cams": [{
        "id": "cctv_5068",
        "stream": "/georgiavss3/gdot-cam-331.stream/playlist.m3u8",
        "name": "I-20 : HOLMES DRIVE"
    }]
}, {
    "coord": [33.727444, -84.186544],
    "cams": [{
        "id": "cctv_13307",
        "stream": "/georgiavss1/dek-cam-037.stream/playlist.m3u8",
        "name": "SR 12 (Covington Hwy) : Young Rd / Hidden Creek Dr"
    }]
}, {
    "coord": [32.472366, -84.954776],
    "cams": [{
        "id": "cctv_9129",
        "url": "/georgiasnapshots/COLU-CAM-008.jpg",
        "name": "Spur 22/Wynnton Rd : 13th St/Hilton Ave"
    }]
}, {
    "coord": [33.669592, -83.986912],
    "cams": [{
        "id": "cctv_13357",
        "url": "/georgiasnapshots/ROCK-CAM-120.jpg",
        "name": "SR 138 / Walnut Grove Rd : SR 20 / Sigman Rd"
    }]
}, {
    "coord": [33.848988, -84.6944],
    "cams": [{
        "id": "cctv_13197",
        "url": "/georgiasnapshots/COBB-CAM-261.jpg",
        "name": "SR 6 : Brownsville Rd"
    }]
}, {
    "coord": [32.470916, -83.743824],
    "cams": [{
        "id": "cctv_13203",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-136.jpg",
        "name": "I-75 : SR 7 / US 341"
    }]
}, {
    "coord": [33.746832, -84.379384],
    "cams": [{
        "id": "cctv_16095",
        "stream": "/georgiavss1/atl-cam-422.stream/playlist.m3u8",
        "name": "SR 154 / Memorial Dr : Hill St"
    }]
}, {
    "coord": [33.6197, -84.482872],
    "cams": [{
        "id": "cctv_4954",
        "stream": "/georgiavss2/gdot-cam-191.stream/playlist.m3u8",
        "name": "I-85 : I-285 EXIT"
    }]
}, {
    "coord": [32.161556, -81.183584],
    "cams": [{
        "id": "cctv_46529",
        "url": "/georgiasnapshots/CHAT-CAM-010.jpg",
        "name": "SR 21 : Sonny Dixon/ Jimmy Deloach Pkwy"
    }]
}, {
    "coord": [33.950948, -84.51096],
    "cams": [{
        "id": "cctv_15473",
        "stream": "/georgiavss3/gdot-cam-498.stream/playlist.m3u8",
        "name": "SR 3/ROSWELL RD : E OF I-75 EXP ON/OFF"
    }]
}, {
    "coord": [34.03572, -84.463552],
    "cams": [{
        "id": "cctv_7336",
        "url": "/georgiasnapshots/COBB-CAM-213.jpg",
        "name": "Sandy Plains Rd : Shallowford Rd"
    }]
}, {
    "coord": [33.5554, -84.370904],
    "cams": [{
        "id": "cctv_10440",
        "url": "/georgiasnapshots/CLAY-CAM-024.jpg",
        "name": "SR 3 / Tara Blvd : Battle Creek Rd"
    }]
}, {
    "coord": [34.076344, -84.267184],
    "cams": [{
        "id": "cctv_5348",
        "stream": "/georgiavss4/gdot-cam-845.stream/playlist.m3u8",
        "name": "GA 400 : N OF WEBB BR RD"
    }]
}, {
    "coord": [33.901256, -84.474312],
    "cams": [{
        "id": "cctv_13650",
        "url": "/georgiasnapshots/COBB-CAM-035.jpg",
        "name": "Windy Hill Rd : I-75 SB Ramp"
    }]
}, {
    "coord": [33.996108, -84.078696],
    "cams": [{
        "id": "cctv_5429",
        "stream": "/georgiavss2/gdot-cam-132.stream/playlist.m3u8",
        "name": "I-85 : N OF SUGARLOAF PKWY"
    }]
}, {
    "coord": [31.445644, -83.486432],
    "cams": [{
        "id": "cctv_46379",
        "url": "/georgiasnapshots/TIFT-CAM-001.jpg",
        "name": "SR 35 : SR 520"
    }]
}, {
    "coord": [33.778028, -84.39096],
    "cams": [{
        "id": "cctv_46460",
        "url": "/georgiasnapshots/GDOT-CAM-601.jpg",
        "name": "75/85 : N OF 5th ST"
    }]
}, {
    "coord": [33.764684, -84.390432],
    "cams": [{
        "id": "cctv_15275",
        "stream": "/georgiavss1/atl-cam-913.stream/playlist.m3u8",
        "name": "Ivan Allen Jr Blvd : Williams St"
    }]
}, {
    "coord": [34.084824, -84.536648],
    "cams": [{
        "id": "cctv_5207",
        "stream": "/georgiavss3/gdot-cam-515.stream/playlist.m3u8",
        "name": "I-575 : HWY 92"
    }]
}, {
    "coord": [33.8439, -84.530368],
    "cams": [{
        "id": "cctv_9170",
        "url": "/georgiasnapshots/COBB-CAM-066.jpg",
        "name": "EW Connector : Cooper Lake Rd"
    }]
}, {
    "coord": [34.353592, -82.932808],
    "cams": [{
        "id": "cctv_32654",
        "url": "/georgiasnapshots/HART-CAM-005.jpg",
        "name": "SR 8/Franklin St : Carolina St"
    }]
}, {
    "coord": [33.82232, -84.120976],
    "cams": [{
        "id": "cctv_5323",
        "stream": "/georgiavss4/gdot-cam-796.stream/playlist.m3u8",
        "name": "US 78 : W PARK PL BLVD"
    }]
}, {
    "coord": [33.936044, -84.167352],
    "cams": [{
        "id": "cctv_10250",
        "url": "/georgiasnapshots/GWIN-CAM-076.jpg",
        "name": "SR 378 : SATELLITE BLVD"
    }]
}, {
    "coord": [33.49554, -84.429496],
    "cams": [{
        "id": "cctv_10175",
        "stream": "/georgiavss1/fay-cam-104.stream/playlist.m3u8",
        "name": "SR 85 : Fun Spot America Park"
    }]
}, {
    "coord": [34.061112, -84.3246],
    "cams": [{
        "id": "cctv_9038",
        "url": "/georgiasnapshots/ROSWELL-CAM-324.jpg",
        "name": "SR 9 : Hembree Rd"
    }]
}, {
    "coord": [32.074902, -81.094704],
    "cams": [{
        "id": "cctv_46512",
        "url": "/georgiasnapshots/SAV-CAM-045.jpg",
        "name": "Liberty : Whitaker"
    }]
}, {
    "coord": [33.84866, -84.43152],
    "cams": [{
        "id": "cctv_9057",
        "stream": "/georgiavss1/atl-cam-044.stream/playlist.m3u8",
        "name": "W Paces Ferry Rd : I-75 SB Ramp"
    }]
}, {
    "coord": [33.810588, -84.250848],
    "cams": [{
        "id": "cctv_5015",
        "stream": "/georgiavss2/gdot-cam-247.stream/playlist.m3u8",
        "name": "I-285 : S OF STN MT FWY / US 78"
    }]
}, {
    "coord": [33.793564, -84.633496],
    "cams": [{
        "id": "cctv_16083",
        "stream": "/georgiavss1/doug-cam-092.stream/playlist.m3u8",
        "name": "SR 6 : Westfork Dr"
    }]
}, {
    "coord": [33.989028, -84.547944],
    "cams": [{
        "id": "cctv_15529",
        "stream": "/georgiavss3/gdot-cam-491.stream/playlist.m3u8",
        "name": "I-75 : SR 5/CANTON RD EXIT"
    }]
}, {
    "coord": [33.755556, -84.392208],
    "cams": [{
        "id": "cctv_16204",
        "url": "/georgiasnapshots/ATL-CAM-980.jpg",
        "name": "Marietta St : Fairlie St"
    }]
}, {
    "coord": [33.580956, -85.078928],
    "cams": [{
        "id": "cctv_16180",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-11.85.jpg",
        "name": "SR 1 : SR 16"
    }]
}, {
    "coord": [32.554928, -83.662624],
    "cams": [{
        "id": "cctv_16187",
        "url": "/georgiasnapshots/GDOT-CAM-SR96-3.6.jpg",
        "name": "SR 96 : Houston Lake Rd"
    }]
}, {
    "coord": [33.963796, -84.125808],
    "cams": [{
        "id": "cctv_10283",
        "url": "/georgiasnapshots/GWIN-CAM-109.jpg",
        "name": "SATELLITE BLVD : OFFICE PARK D/W #1"
    }]
}, {
    "coord": [34.01338, -84.110656],
    "cams": [{
        "id": "cctv_10304",
        "url": "/georgiasnapshots/GWIN-CAM-130.jpg",
        "name": "SUGARLOAF PKWY : OLD PEACHTREE RD"
    }]
}, {
    "coord": [33.923044, -84.072616],
    "cams": [{
        "id": "cctv_10223",
        "url": "/georgiasnapshots/GWIN-CAM-049.jpg",
        "name": "SR 9 (US 29 Lawrenceville Hwy) : Fork Creek Pkwy / Gloster Rd"
    }]
}, {
    "coord": [33.924692, -84.542272],
    "cams": [{
        "id": "cctv_13740",
        "url": "/georgiasnapshots/COBB-CAM-327.jpg",
        "name": "Atlanta Rd : West Atlanta St"
    }]
}, {
    "coord": [33.714632, -84.30456],
    "cams": [{
        "id": "cctv_5106",
        "stream": "/georgiavss3/gdot-cam-366.stream/playlist.m3u8",
        "name": "I-20 : FLAT SHOALS"
    }]
}, {
    "coord": [33.803664, -84.407744],
    "cams": [{
        "id": "cctv_46506",
        "stream": "/georgiavss1/atl-cam-092.stream/playlist.m3u8",
        "name": "SR 3/Northside Dr : I-75 NB Ramp"
    }]
}, {
    "coord": [31.773622, -84.448104],
    "cams": [{
        "id": "cctv_46365",
        "url": "/georgiasnapshots/TERR-CAM-001.jpg",
        "name": "SR 520/US 82 : SR32/LEE ST"
    }]
}, {
    "coord": [34.060568, -84.722144],
    "cams": [{
        "id": "cctv_8795",
        "url": "/georgiasnapshots/COBB-CAM-344.jpg",
        "name": "SR 3/Cobb Pkwy : Dallas Acworth"
    }]
}, {
    "coord": [33.795684, -84.392344],
    "cams": [{
        "id": "cctv_4974",
        "stream": "/georgiavss2/gdot-cam-021.stream/playlist.m3u8",
        "name": "I-75 : BROOKWOOD INTRCHGE"
    }]
}, {
    "coord": [34.055152, -84.174456],
    "cams": [{
        "id": "cctv_7203",
        "stream": "/georgiavss1/cojc-cam-099.stream/playlist.m3u8",
        "name": "SR 141 (Medlock Bridge Rd) : Johns Creek Pkwy S"
    }]
}, {
    "coord": [33.558296, -85.072448],
    "cams": [{
        "id": "cctv_13552",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-10.1.jpg",
        "name": "SR 1 : SR 166"
    }]
}, {
    "coord": [33.505242, -84.232792],
    "cams": [{
        "id": "cctv_5943",
        "stream": "/georgiavss4/gdot-cam-725.stream/playlist.m3u8",
        "name": "I-75 : HUDSON BR RAMP METER"
    }]
}, {
    "coord": [33.901408, -84.276048],
    "cams": [{
        "id": "cctv_13582",
        "stream": "/georgiavss1/dek-cam-227.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Jesse Norman Way"
    }]
}, {
    "coord": [34.025136, -84.575176],
    "cams": [{
        "id": "cctv_16317",
        "url": "/georgiasnapshots/COBB-CAM-304.jpg",
        "name": "Barrett Lakes Blvd : Big Shanty Rd"
    }]
}, {
    "coord": [33.731236, -84.194448],
    "cams": [{
        "id": "cctv_13252",
        "stream": "/georgiavss1/dek-cam-036.stream/playlist.m3u8",
        "name": "SR 12 (Covington Hwy) : S Hairston Rd"
    }]
}, {
    "coord": [34.511592, -84.918232],
    "cams": [{
        "id": "cctv_9308",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-315.jpg",
        "name": "I-75 : N of SR 156 / Red Bud Rd"
    }]
}, {
    "coord": [33.724988, -84.73512],
    "cams": [{
        "id": "cctv_12941",
        "url": "/georgiasnapshots/DOUG-CAM-002.jpg",
        "name": "Chapel Hill Rd : Stewart Mill Rd"
    }]
}, {
    "coord": [33.949956, -84.41152],
    "cams": [{
        "id": "cctv_7344",
        "url": "/georgiasnapshots/COBB-CAM-302.jpg",
        "name": "Johnson Ferry Rd : Paper Mill Rd"
    }]
}, {
    "coord": [33.9133, -84.287],
    "cams": [{
        "id": "cctv_4994",
        "stream": "/georgiavss2/gdot-cam-228.stream/playlist.m3u8",
        "name": "I-285 : PEACHTREE INDUS"
    }]
}, {
    "coord": [33.47208, -81.966992],
    "cams": [{
        "id": "cctv_32894",
        "url": "/georgiasnapshots/AUG-CAM-184.jpg",
        "name": "Telfair St. : 8th St."
    }]
}, {
    "coord": [33.759044, -84.394328],
    "cams": [{
        "id": "cctv_15295",
        "url": "/georgiasnapshots/ATL-CAM-925.jpg",
        "name": "Marietta St : Andrew Young Intl Blvd"
    }]
}, {
    "coord": [33.623376, -84.42416],
    "cams": [{
        "id": "cctv_5265",
        "stream": "/georgiavss4/gdot-cam-666.stream/playlist.m3u8",
        "name": "I-285 : CD LANES - NO TRAFFIC"
    }]
}, {
    "coord": [33.887508, -84.455744],
    "cams": [{
        "id": "cctv_13087",
        "url": "/georgiasnapshots/COBB-CAM-121.jpg",
        "name": "Cumberland Blvd : Akers Mill Rd South"
    }]
}, {
    "coord": [31.450942, -83.52848],
    "cams": [{
        "id": "cctv_16007",
        "url": "/georgiasnapshots/GDOT-CAM-SR520-8.96.jpg",
        "name": "SR 520/7TH ST : SR 35/VIRGINIA AVE"
    }]
}, {
    "coord": [33.834468, -84.193624],
    "cams": [{
        "id": "cctv_5311",
        "stream": "/georgiavss4/gdot-cam-785.stream/playlist.m3u8",
        "name": "US 78 : E OF MTN INDUST BLVD"
    }]
}, {
    "coord": [33.639112, -84.455944],
    "cams": [{
        "id": "cctv_4962",
        "stream": "/georgiavss2/gdot-cam-199.stream/playlist.m3u8",
        "name": "I-85 : 1/2 MI S OF CAMP CRK"
    }]
}, {
    "coord": [34.57728, -83.33304],
    "cams": [{
        "id": "cctv_32922",
        "url": "/georgiasnapshots/STEPH-CAM-006.jpg",
        "name": "SR 365 : SR 63"
    }]
}, {
    "coord": [33.740792, -84.405912],
    "cams": [{
        "id": "cctv_5083",
        "stream": "/georgiavss3/gdot-cam-345.stream/playlist.m3u8",
        "name": "I-20 : MCDANIEL ST"
    }]
}, {
    "coord": [34.014132, -84.5488],
    "cams": [{
        "id": "cctv_16061",
        "url": "/georgiasnapshots/COBB-CAM-310.jpg",
        "name": "Barrett Pkwy : Bells Ferry Rd"
    }]
}, {
    "coord": [33.810508, -84.371624],
    "cams": [{
        "id": "cctv_13767",
        "url": "/georgiasnapshots/ATL-CAM-603.jpg",
        "name": "Monroe Dr : Armour Dr"
    }]
}, {
    "coord": [33.744996, -84.395832],
    "cams": [{
        "id": "cctv_5056",
        "stream": "/georgiavss2/gdot-cam-300.stream/playlist.m3u8",
        "name": "I-20 : WINDSOR ST RAMP METER"
    }]
}, {
    "coord": [32.002582, -81.245872],
    "cams": [{
        "id": "cctv_15516",
        "url": "/georgiasnapshots/SAV-CAM-003.jpg",
        "name": "SR 25/US 17 : LITTLE NECK RD"
    }]
}, {
    "coord": [34.112052, -84.229288],
    "cams": [{
        "id": "cctv_5356",
        "stream": "/georgiavss4/gdot-cam-852.stream/playlist.m3u8",
        "name": "GA 400 : S OF MCFARLAND RD"
    }]
}, {
    "coord": [33.815776, -84.334768],
    "cams": [{
        "id": "cctv_13750",
        "url": "/georgiasnapshots/DEK-CAM-617.jpg",
        "name": "SR 42 / Briarcliff Rd : SR 236 / LaVista Rd"
    }]
}, {
    "coord": [33.6217, -84.369304],
    "cams": [{
        "id": "cctv_10518",
        "url": "/georgiasnapshots/CLAY-CAM-C602.jpg",
        "name": "SR 331 Forest Parkway : West St (camera)"
    }]
}, {
    "coord": [33.80216, -84.38712],
    "cams": [{
        "id": "cctv_5088",
        "stream": "/georgiavss2/gdot-cam-035.stream/playlist.m3u8",
        "name": "I-85 : MARTA OVERPASS"
    }]
}, {
    "coord": [33.469838, -81.960528],
    "cams": [{
        "id": "cctv_32892",
        "url": "/georgiasnapshots/AUG-CAM-182.jpg",
        "name": "Telfair St. : 5th St."
    }]
}, {
    "coord": [33.730316, -84.736944],
    "cams": [{
        "id": "cctv_12940",
        "url": "/georgiasnapshots/DOUG-CAM-001.jpg",
        "name": "Chapel Hill Rd : Douglas Blvd"
    }]
}, {
    "coord": [34.018128, -84.491744],
    "cams": [{
        "id": "cctv_16067",
        "url": "/georgiasnapshots/COBB-CAM-214.jpg",
        "name": "Sandy Plains Rd : Post Oak Tritt Rd"
    }]
}, {
    "coord": [33.4403, -84.3216],
    "cams": [{
        "id": "cctv_10504",
        "url": "/georgiasnapshots/CLAY-CAM-212.jpg",
        "name": "SR 3 / Tara Blvd : Lovejoy Rd"
    }]
}, {
    "coord": [34.007044, -84.073928],
    "cams": [{
        "id": "cctv_10289",
        "url": "/georgiasnapshots/GWIN-CAM-115.jpg",
        "name": "SATELLITE BLVD : S of WILDWOOD RD"
    }]
}, {
    "coord": [33.9768, -84.5342],
    "cams": [{
        "id": "cctv_5143",
        "stream": "/georgiavss3/gdot-cam-417.stream/playlist.m3u8",
        "name": "I-75 : N OF ALLGOOD RD"
    }]
}, {
    "coord": [32.933414, -83.807432],
    "cams": [{
        "id": "cctv_6034",
        "stream": "/georgiavss5/bibb-cam-038.stream/playlist.m3u8",
        "name": "I-475 : ESTES RD"
    }]
}, {
    "coord": [33.29364, -84.544648],
    "cams": [{
        "id": "cctv_16299",
        "url": "/georgiasnapshots/COW-CAM-018.jpg",
        "name": "SR 16 : SR 74/85"
    }]
}, {
    "coord": [32.132798, -81.300784],
    "cams": [{
        "id": "cctv_46244",
        "url": "/georgiasnapshots/CHAT-CAM-001.jpg",
        "name": "SR 26 (Northside Dr) : SR 17 (Cherry St)"
    }]
}, {
    "coord": [34.004256, -84.172016],
    "cams": [{
        "id": "cctv_46282",
        "url": "/georgiasnapshots/GWIN-CAM-216.jpg",
        "name": "PLEASANT HILL RD : PEACHTREE HILL S/C"
    }]
}, {
    "coord": [33.952008, -84.570104],
    "cams": [{
        "id": "cctv_15203",
        "url": "/georgiasnapshots/MAR-CAM-405.jpg",
        "name": "SR 120/Whitlock Ave : Lindley Ave/Kirkpatrick Dr"
    }]
}, {
    "coord": [33.699664, -84.439568],
    "cams": [{
        "id": "cctv_5219",
        "stream": "/georgiavss2/gdot-cam-056.stream/playlist.m3u8",
        "name": "SR 166 : W OF US 29/MAIN ST"
    }]
}, {
    "coord": [33.96322, -84.224752],
    "cams": [{
        "id": "cctv_5233",
        "stream": "/georgiavss3/gdot-cam-590.stream/playlist.m3u8",
        "name": "SR 141 (Peachtree Parkway) : S of Scientific Dr"
    }]
}, {
    "coord": [30.835008, -83.9792],
    "cams": [{
        "id": "cctv_46371",
        "url": "/georgiasnapshots/THOM-CAM-001.jpg",
        "name": "SR 38 Bu : MADISON ST"
    }]
}, {
    "coord": [33.952968, -84.026],
    "cams": [{
        "id": "cctv_10259",
        "url": "/georgiasnapshots/GWIN-CAM-085.jpg",
        "name": "OLD NORCROSS RD : RIVERSIDE PKWY"
    }]
}, {
    "coord": [33.759692, -84.386168],
    "cams": [{
        "id": "cctv_16126",
        "url": "/georgiasnapshots/ATL-CAM-977.jpg",
        "name": "Peachtree Center Ave : Andrew Young International Blvd"
    }]
}, {
    "coord": [33.8857, -84.2526],
    "cams": [{
        "id": "cctv_5002",
        "stream": "/georgiavss2/gdot-cam-235.stream/playlist.m3u8",
        "name": "I-285 : CHAMBLEE-TCKR"
    }]
}, {
    "coord": [32.918788, -83.709096],
    "cams": [{
        "id": "cctv_5998",
        "url": "/georgiasnapshots/BIBB-CAM-536.jpg",
        "name": "I-75 : RIVERSIDE DR"
    }]
}, {
    "coord": [32.218792, -82.41244],
    "cams": [{
        "id": "cctv_46557",
        "url": "/georgiasnapshots/TOOM-CAM-002.jpg",
        "name": "SR 15/ SR 30 WB : McIntosh St"
    }]
}, {
    "coord": [32.48552, -84.935872],
    "cams": [{
        "id": "cctv_9132",
        "url": "/georgiasnapshots/COLU-CAM-011.jpg",
        "name": "Spur 22/Macon Rd : Forrest Rd"
    }]
}, {
    "coord": [33.411408, -84.162104],
    "cams": [{
        "id": "cctv_9186",
        "url": "/georgiasnapshots/HNRY-CAM-001.jpg",
        "name": "I-75 : SR 155"
    }]
}, {
    "coord": [33.620152, -84.364736],
    "cams": [{
        "id": "cctv_32533",
        "url": "/georgiasnapshots/CLAY-CAM-211.jpg",
        "name": "SR 331 / Forest Pkwy : Lake Dr"
    }]
}, {
    "coord": [33.40356, -84.152864],
    "cams": [{
        "id": "cctv_13235",
        "stream": "/georgiavss4/gdot-cam-763.stream/playlist.m3u8",
        "name": "I-75 : 1 MI S OF SR 155"
    }]
}, {
    "coord": [33.987796, -83.938224],
    "cams": [{
        "id": "cctv_46304",
        "url": "/georgiasnapshots/GWIN-CAM-254.jpg",
        "name": "SR 316 : HURRICANE TRL"
    }]
}, {
    "coord": [33.512218, -82.044736],
    "cams": [{
        "id": "cctv_32858",
        "url": "/georgiasnapshots/AUG-CAM-226.jpg",
        "name": "Washington Rd. : I-20 WB Ramp"
    }]
}, {
    "coord": [34.218468, -84.46084],
    "cams": [{
        "id": "cctv_46480",
        "url": "/georgiasnapshots/CHER-CAM-103.jpg",
        "name": "SR 140 : NSide Cherokee Blvd"
    }]
}, {
    "coord": [33.511722, -82.041592],
    "cams": [{
        "id": "cctv_32851",
        "url": "/georgiasnapshots/AUG-CAM-225.jpg",
        "name": "Washington Rd. : I-20 (EB ramp)"
    }]
}, {
    "coord": [33.97956, -83.982408],
    "cams": [{
        "id": "cctv_12981",
        "url": "/georgiasnapshots/GDOT-CAM-149.jpg",
        "name": "SR 316 : E OF SR 20"
    }]
}, {
    "coord": [33.908976, -84.266928],
    "cams": [{
        "id": "cctv_13671",
        "stream": "/georgiavss1/dek-cam-231.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : McElroy Rd"
    }]
}, {
    "coord": [32.732742, -83.724424],
    "cams": [{
        "id": "cctv_6847",
        "url": "/georgiasnapshots/BIBB-CAM-106.jpg",
        "name": "I-75 : 1 MI N OF SARDIS CHURCH RD"
    }]
}, {
    "coord": [33.74936, -84.387304],
    "cams": [{
        "id": "cctv_15331",
        "url": "/georgiasnapshots/ATL-CAM-944.jpg",
        "name": "Martin Luther King Jr Dr : Piedmont Ave / Capitol Ave"
    }]
}, {
    "coord": [34.110876, -82.867536],
    "cams": [{
        "id": "cctv_32556",
        "url": "/georgiasnapshots/ELBE-CAM-001.jpg",
        "name": "SR 17 : SR 77/Oliver St"
    }]
}, {
    "coord": [33.620168, -84.43088],
    "cams": [{
        "id": "cctv_5257",
        "stream": "/georgiavss4/gdot-cam-659.stream/playlist.m3u8",
        "name": "I-285 : MAIN LANES NO. 4"
    }]
}, {
    "coord": [31.240876, -81.50296],
    "cams": [{
        "id": "cctv_13173",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-038.jpg",
        "name": "I-95 : US 17 / SR 25 SPUR"
    }]
}, {
    "coord": [33.889628, -84.471688],
    "cams": [{
        "id": "cctv_13732",
        "url": "/georgiasnapshots/COBB-CAM-133.jpg",
        "name": "Windy Ridge Pkwy : Heritage Ct"
    }]
}, {
    "coord": [34.098776, -83.813552],
    "cams": [{
        "id": "cctv_32546",
        "url": "/georgiasnapshots/BARR-CAM-005.jpg",
        "name": "SR 211 : I-85 SB"
    }]
}, {
    "coord": [34.009264, -84.192376],
    "cams": [{
        "id": "cctv_6318",
        "url": "/georgiasnapshots/COJC-CAM-210.jpg",
        "name": "SR 141 (Medlock Bridge Rd) : Bobby Jones Dr"
    }]
}, {
    "coord": [33.750844, -84.389904],
    "cams": [{
        "id": "cctv_15315",
        "url": "/georgiasnapshots/ATL-CAM-942.jpg",
        "name": "Martin Luther King Jr Dr : Central Ave"
    }]
}, {
    "coord": [33.812844, -84.634672],
    "cams": [{
        "id": "cctv_9177",
        "url": "/georgiasnapshots/COBB-CAM-230.jpg",
        "name": "SR 8 (Veterans Memorial Hwy) : Austell-Powder Springs Rd"
    }]
}, {
    "coord": [32.839848, -83.618264],
    "cams": [{
        "id": "cctv_6807",
        "url": "/georgiasnapshots/BIBB-CAM-538.jpg",
        "name": "I-16 : AT MLK JR DR"
    }]
}, {
    "coord": [33.80018, -84.407696],
    "cams": [{
        "id": "cctv_13230",
        "stream": "/georgiavss1/atl-cam-089.stream/playlist.m3u8",
        "name": "SR 3 / Northside Dr : Bellemeade Ave"
    }]
}, {
    "coord": [33.610504, -84.611144],
    "cams": [{
        "id": "cctv_46454",
        "url": "/georgiasnapshots/FULT-CAM-032.jpg",
        "name": "GA 14 ALT/ South Fulton Pkwy : GA 92/ Campbellton/ Fairburn Rd"
    }]
}, {
    "coord": [33.467804, -82.07808],
    "cams": [{
        "id": "cctv_32865",
        "url": "/georgiasnapshots/AUG-CAM-268.jpg",
        "name": "Wrightsboro Rd. : Marks Church Rd."
    }]
}, {
    "coord": [33.75372, -84.4956],
    "cams": [{
        "id": "cctv_5384",
        "stream": "/georgiavss4/gdot-cam-947.stream/playlist.m3u8",
        "name": "I-285 : MLK JR DR"
    }]
}, {
    "coord": [34.024196, -84.252704],
    "cams": [{
        "id": "cctv_16233",
        "url": "/georgiasnapshots/COJC-CAM-550.jpg",
        "name": "Old Alabama Rd : Jones Bridge Rd"
    }]
}, {
    "coord": [34.003448, -84.084536],
    "cams": [{
        "id": "cctv_46313",
        "url": "/georgiasnapshots/GC-CAM-263.jpg",
        "name": "OLD PEACHTREE RD : GALLERIA AT SUGARLOAF"
    }]
}, {
    "coord": [33.5402, -84.287904],
    "cams": [{
        "id": "cctv_10512",
        "url": "/georgiasnapshots/CLAY-CAM-260.jpg",
        "name": "SR 138 : SPIVEY RD"
    }]
}, {
    "coord": [33.69886, -84.40492],
    "cams": [{
        "id": "cctv_5054",
        "stream": "/georgiavss2/gdot-cam-003.stream/playlist.m3u8",
        "name": "75/85 : LANGFORD PKWY"
    }]
}, {
    "coord": [34.260348, -85.168496],
    "cams": [{
        "id": "cctv_15375",
        "url": "/georgiasnapshots/FLYD-CAM-005.jpg",
        "name": "SR 1 : Riverside Pkwy"
    }]
}, {
    "coord": [33.934692, -84.029104],
    "cams": [{
        "id": "cctv_10313",
        "url": "/georgiasnapshots/GWIN-CAM-139.jpg",
        "name": "SUGARLOAF PKWY : LAWRENCEVILLE-SUWANEE RD"
    }]
}, {
    "coord": [34.075712, -83.914616],
    "cams": [{
        "id": "cctv_15990",
        "stream": "/georgiavss2/gdot-cam-176.stream/playlist.m3u8",
        "name": "I-85 : AT HAMILTON MILL"
    }]
}, {
    "coord": [33.904, -84.240096],
    "cams": [{
        "id": "cctv_5353",
        "stream": "/georgiavss2/gdot-cam-085.stream/playlist.m3u8",
        "name": "I-85 : N OF PLEASANTDALE RD"
    }]
}, {
    "coord": [33.707264, -84.271984],
    "cams": [{
        "id": "cctv_15266",
        "stream": "/georgiavss1/dek-cam-309.stream/playlist.m3u8",
        "name": "SR 155 (Candler Rd) : S Rainbow Dr"
    }]
}, {
    "coord": [34.066564, -84.21024],
    "cams": [{
        "id": "cctv_16243",
        "url": "/georgiasnapshots/COJC-CAM-640.jpg",
        "name": "Jones Bridge Rd : Addison Way"
    }]
}, {
    "coord": [33.935384, -83.979456],
    "cams": [{
        "id": "cctv_10348",
        "url": "/georgiasnapshots/GWIN-CAM-174.jpg",
        "name": "SR 20 : SIMONTON RD / DAVIS RD"
    }]
}, {
    "coord": [34.008936, -84.355512],
    "cams": [{
        "id": "cctv_9026",
        "url": "/georgiasnapshots/ROSWELL-CAM-302.jpg",
        "name": "SR 9 : Warm Springs Cir"
    }]
}, {
    "coord": [32.795136, -83.719816],
    "cams": [{
        "id": "cctv_6007",
        "stream": "/georgiavss5/bibb-cam-016.stream/playlist.m3u8",
        "name": "I-475 : 1 MI S OF US 80"
    }]
}, {
    "coord": [34.237724, -84.45756],
    "cams": [{
        "id": "cctv_16164",
        "url": "/georgiasnapshots/GDOT-CAM-SR-20-13.25.jpg",
        "name": "SR 20 : NORTHSIDE CHEROKEE BLVD"
    }]
}, {
    "coord": [34.2716, -84.079464],
    "cams": [{
        "id": "cctv_32567",
        "url": "/georgiasnapshots/FORS-CAM-034.jpg",
        "name": "SR 400 : Martin Rd"
    }]
}, {
    "coord": [33.430332, -82.04284],
    "cams": [{
        "id": "cctv_32885",
        "url": "/georgiasnapshots/AUG-CAM-101.jpg",
        "name": "Hwy 1 : Wheeless Rd."
    }]
}, {
    "coord": [33.88722, -84.157592],
    "cams": [{
        "id": "cctv_13112",
        "url": "/georgiasnapshots/GWIN-CAM-288.jpg",
        "name": "SR 8 (US 29 Lawrenceville Hwy) : Greenwood Dr / Inland Way"
    }]
}, {
    "coord": [33.805468, -84.055109],
    "cams": [{
        "id": "cctv_10364",
        "url": "/georgiasnapshots/GWIN-CAM-190.jpg",
        "name": "ANNISTOWN RD : ZOAR CHURCH RD / JOHNSON RD"
    }]
}, {
    "coord": [31.773366, -81.633608],
    "cams": [{
        "id": "cctv_46260",
        "url": "/georgiasnapshots/PIE-CAM-001.jpg",
        "name": "SR 38 (Lindsay Thomas Highway) : SR 32 (Main Street)"
    }]
}, {
    "coord": [34.058756, -84.435064],
    "cams": [{
        "id": "cctv_12913",
        "url": "/georgiasnapshots/COBB-CAM-224.jpg",
        "name": "Sandy Plains Rd : Wesley Chapel Rd"
    }]
}, {
    "coord": [34.085612, -84.519304],
    "cams": [{
        "id": "cctv_6307",
        "stream": "/georgiavss1/cher-cam-016.stream/playlist.m3u8",
        "name": "SR 92 / Woodstock Rd : Canton Rd / SR 5 Conn"
    }]
}, {
    "coord": [33.881756, -84.588448],
    "cams": [{
        "id": "cctv_9120",
        "url": "/georgiasnapshots/COBB-CAM-005.jpg",
        "name": "SR 5/Austell Rd : Milford Ch Rd"
    }]
}, {
    "coord": [33.774028, -84.495608],
    "cams": [{
        "id": "cctv_5389",
        "stream": "/georgiavss4/gdot-cam-952.stream/playlist.m3u8",
        "name": "I-285 : S OF HOLLOWELL PKWY"
    }]
}, {
    "coord": [33.740152, -84.349264],
    "cams": [{
        "id": "cctv_6831",
        "url": "/georgiasnapshots/ATL-CAM-552.jpg",
        "name": "SR 42 (Moreland Ave) : SR 260 / Glenwood Ave"
    }]
}, {
    "coord": [34.47142, -84.918704],
    "cams": [{
        "id": "cctv_9330",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-312.jpg",
        "name": "I-75 : SR 53"
    }]
}, {
    "coord": [34.085252, -83.989704],
    "cams": [{
        "id": "cctv_10218",
        "url": "/georgiasnapshots/GWIN-CAM-044.jpg",
        "name": "SR 20 : Buford Mill Dr / Mill Creek Crossing"
    }]
}, {
    "coord": [33.90684, -84.23492],
    "cams": [{
        "id": "cctv_5718",
        "stream": "/georgiavss2/gdot-cam-121.stream/playlist.m3u8",
        "name": "I-85 : 1/2 MI N OF PLSNTDLE"
    }]
}, {
    "coord": [33.864312, -84.622648],
    "cams": [{
        "id": "cctv_9169",
        "url": "/georgiasnapshots/COBB-CAM-064.jpg",
        "name": "EW Connector : Asquith Ave"
    }]
}, {
    "coord": [32.053742, -81.107656],
    "cams": [{
        "id": "cctv_15737",
        "url": "/georgiasnapshots/SAV-CAM-017.jpg",
        "name": "SR 26/VICTORY DR : MLK BLVD"
    }]
}, {
    "coord": [33.9351, -84.256104],
    "cams": [{
        "id": "cctv_5239",
        "stream": "/georgiavss3/gdot-cam-596.stream/playlist.m3u8",
        "name": "SR 141 : S OF JONES MILL RD"
    }]
}, {
    "coord": [33.9631, -84.100896],
    "cams": [{
        "id": "cctv_5422",
        "stream": "/georgiavss2/gdot-cam-125.stream/playlist.m3u8",
        "name": "I-85 : SR 316 EXIT"
    }]
}, {
    "coord": [33.926084, -84.337096],
    "cams": [{
        "id": "cctv_32580",
        "url": "/georgiasnapshots/DUN-CAM-104.jpg",
        "name": "Ashford Dunwoody Rd : Perimeter Center West"
    }]
}, {
    "coord": [33.91548, -84.163064],
    "cams": [{
        "id": "cctv_10387",
        "url": "/georgiasnapshots/GWIN-CAM-221.jpg",
        "name": "INDIAN TRAIL LILBURN RD : TECH DR - HILLCREST RD"
    }]
}, {
    "coord": [33.5997, -84.338896],
    "cams": [{
        "id": "cctv_10452",
        "url": "/georgiasnapshots/CLAY-CAM-045.jpg",
        "name": "SR 54 : Harper Dr / Huie Rd"
    }]
}, {
    "coord": [33.820444, -84.165176],
    "cams": [{
        "id": "cctv_5315",
        "stream": "/georgiavss4/gdot-cam-789.stream/playlist.m3u8",
        "name": "US 78 : E OF STN MTN BYPASS"
    }]
}, {
    "coord": [33.754492, -84.384216],
    "cams": [{
        "id": "cctv_16258",
        "url": "/georgiasnapshots/ATL-CAM-988.jpg",
        "name": "Edgewood Ave : Courtland St"
    }]
}, {
    "coord": [32.03381, -81.049424],
    "cams": [{
        "id": "cctv_15809",
        "url": "/georgiasnapshots/SAV-CAM-026.jpg",
        "name": "SR 26/VICTORY DR : RIVER DR"
    }]
}, {
    "coord": [33.744148, -84.387544],
    "cams": [{
        "id": "cctv_5089",
        "stream": "/georgiavss3/gdot-cam-350.stream/playlist.m3u8",
        "name": "I-20 : CAPITOL AVE"
    }]
}, {
    "coord": [34.02212, -84.625032],
    "cams": [{
        "id": "cctv_7348",
        "url": "/georgiasnapshots/COBB-CAM-322.jpg",
        "name": "SR 3/Cobb Pkwy : Jiles/Pine Mountain Rd"
    }]
}, {
    "coord": [34.7047, -85.281616],
    "cams": [{
        "id": "cctv_16112",
        "url": "/georgiasnapshots/GDOT-CAM-SR1BU-1.05.jpg",
        "name": "SR 1 BU : SR 193/VILLANOW ST"
    }]
}, {
    "coord": [34.08922, -84.583936],
    "cams": [{
        "id": "cctv_10169",
        "stream": "/georgiavss1/cher-cam-030.stream/playlist.m3u8",
        "name": "SR 92 / Alabama Rd : Robin Rd"
    }]
}, {
    "coord": [33.8928, -84.2608],
    "cams": [{
        "id": "cctv_5000",
        "stream": "/georgiavss2/gdot-cam-233.stream/playlist.m3u8",
        "name": "I-285 : MORELAND INTRCHGE"
    }]
}, {
    "coord": [34.879684, -83.956616],
    "cams": [{
        "id": "cctv_32909",
        "url": "/georgiasnapshots/UNI-CAM-002.jpg",
        "name": "SR 2 / US 76 : Ingles/CVS Drive"
    }]
}, {
    "coord": [34.027668, -84.25064],
    "cams": [{
        "id": "cctv_16251",
        "url": "/georgiasnapshots/COJC-CAM-605.jpg",
        "name": "Jones Bridge Rd : Promenade Shopping Center"
    }]
}, {
    "coord": [33.836868, -84.381632],
    "cams": [{
        "id": "cctv_7208",
        "stream": "/georgiavss1/atl-cam-004.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd : Pharr Rd"
    }]
}, {
    "coord": [33.855956, -83.993464],
    "cams": [{
        "id": "cctv_10367",
        "url": "/georgiasnapshots/GWIN-CAM-193.jpg",
        "name": "SR 10 : SR 84 (Grayson Parkway)"
    }]
}, {
    "coord": [33.687336, -85.15068],
    "cams": [{
        "id": "cctv_16174",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-20.7.jpg",
        "name": "SR 1 : I-20 WB (EXIT 11)"
    }]
}, {
    "coord": [33.9569, -84.356496],
    "cams": [{
        "id": "cctv_5332",
        "stream": "/georgiavss4/gdot-cam-829.stream/playlist.m3u8",
        "name": "GA 400 : SPALDING DR"
    }]
}, {
    "coord": [33.95286, -84.12904],
    "cams": [{
        "id": "cctv_4929",
        "stream": "/georgiavss2/gdot-cam-110.stream/playlist.m3u8",
        "name": "I-85 : PLEASANT HILL"
    }]
}, {
    "coord": [34.017672, -84.558072],
    "cams": [{
        "id": "cctv_5194",
        "stream": "/georgiavss3/gdot-cam-503.stream/playlist.m3u8",
        "name": "I-575 : BARRETT PKWY ENT RAMP"
    }]
}, {
    "coord": [33.761036, -84.38908],
    "cams": [{
        "id": "cctv_15329",
        "url": "/georgiasnapshots/ATL-CAM-946.jpg",
        "name": "Ted Turner Dr : John Portman Blvd"
    }]
}, {
    "coord": [33.475838, -82.00704],
    "cams": [{
        "id": "cctv_32899",
        "url": "/georgiasnapshots/AUG-CAM-206.jpg",
        "name": "Walton Way : Heard Ave."
    }]
}, {
    "coord": [33.770876, -84.050784],
    "cams": [{
        "id": "cctv_10331",
        "url": "/georgiasnapshots/GWIN-CAM-157.jpg",
        "name": "SR 124 : NORRIS LAKE RD / SMOKE CREEK PKWY"
    }]
}, {
    "coord": [33.885616, -84.284952],
    "cams": [{
        "id": "cctv_15557",
        "stream": "/georgiavss1/cham-cam-250.stream/playlist.m3u8",
        "name": "Shallowford Rd : Chamblee-Tucker Rd"
    }]
}, {
    "coord": [33.689548, -84.500456],
    "cams": [{
        "id": "cctv_5375",
        "stream": "/georgiavss4/gdot-cam-939.stream/playlist.m3u8",
        "name": "I-285 : LANGFORD PKWY"
    }]
}, {
    "coord": [33.54424, -85.073776],
    "cams": [{
        "id": "cctv_46493",
        "url": "/georgiasnapshots/CARR-CAM-201.jpg",
        "name": "SR 1 : Prmy Sch Rd"
    }]
}, {
    "coord": [33.762144, -84.382152],
    "cams": [{
        "id": "cctv_15383",
        "url": "/georgiasnapshots/ATL-CAM-956.jpg",
        "name": "Piedmont Ave : Baker St"
    }]
}, {
    "coord": [33.83476, -84.426968],
    "cams": [{
        "id": "cctv_5037",
        "stream": "/georgiavss2/gdot-cam-027.stream/playlist.m3u8",
        "name": "I-75 : N OF MOORES MILL RD"
    }]
}, {
    "coord": [32.229732, -81.161776],
    "cams": [{
        "id": "cctv_15231",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-112.jpg",
        "name": "I-95 : Milepost 112"
    }]
}, {
    "coord": [34.01576, -84.568544],
    "cams": [{
        "id": "cctv_5156",
        "stream": "/georgiavss3/gdot-cam-429.stream/playlist.m3u8",
        "name": "I-75 : BARRETT PKWY ENT"
    }]
}, {
    "coord": [33.87506, -84.474456],
    "cams": [{
        "id": "cctv_5409",
        "stream": "/georgiavss4/gdot-cam-970.stream/playlist.m3u8",
        "name": "I-285 : N OF WILKINSON PKWY"
    }]
}, {
    "coord": [34.088504, -84.259256],
    "cams": [{
        "id": "cctv_9073",
        "url": "/georgiasnapshots/ALPH-CAM-009.jpg",
        "name": "Windward Pkwy : Windward Concourse"
    }]
}, {
    "coord": [33.802384, -84.193696],
    "cams": [{
        "id": "cctv_13314",
        "stream": "/georgiavss1/dek-cam-158.stream/playlist.m3u8",
        "name": "SR 10 (Memorial Drive) : N Hairston Rd"
    }]
}, {
    "coord": [33.9613, -84.52],
    "cams": [{
        "id": "cctv_5139",
        "stream": "/georgiavss3/gdot-cam-413.stream/playlist.m3u8",
        "name": "I-75 : N 120 LOOP"
    }]
}, {
    "coord": [32.88633, -84.326312],
    "cams": [{
        "id": "cctv_15462",
        "url": "/georgiasnapshots/GDOT-CAM-SR3-14.9.jpg",
        "name": "SR 3/US 19 : E Lee St"
    }]
}, {
    "coord": [34.0215, -84.324696],
    "cams": [{
        "id": "cctv_5341",
        "stream": "/georgiavss4/gdot-cam-837.stream/playlist.m3u8",
        "name": "GA 400 : HOLCOMB BR RD"
    }]
}, {
    "coord": [33.816708, -84.496768],
    "cams": [{
        "id": "cctv_5396",
        "stream": "/georgiavss4/gdot-cam-959.stream/playlist.m3u8",
        "name": "I-285 : 1/2 MI S OF S COBB DR"
    }]
}, {
    "coord": [34.684696, -84.472544],
    "cams": [{
        "id": "cctv_16104",
        "url": "/georgiasnapshots/GDOT-CAM-SR515-10.15.jpg",
        "name": "SR 515 : 1ST ST/YUKON RD"
    }]
}, {
    "coord": [33.887724, -84.58444],
    "cams": [{
        "id": "cctv_32594",
        "url": "/georgiasnapshots/COBB-CAM-002.jpg",
        "name": "Austell Rd : Callaway Rd"
    }]
}, {
    "coord": [30.903968, -84.567984],
    "cams": [{
        "id": "cctv_16000",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-013.jpg",
        "name": "SR 1 : SR 38"
    }]
}, {
    "coord": [33.73254, -84.202104],
    "cams": [{
        "id": "cctv_13306",
        "stream": "/georgiavss1/dek-cam-035.stream/playlist.m3u8",
        "name": "SR 12 (Covington Hwy) : Bethune Middle School"
    }]
}, {
    "coord": [34.085684, -84.530384],
    "cams": [{
        "id": "cctv_6859",
        "stream": "/georgiavss1/cher-cam-020.stream/playlist.m3u8",
        "name": "SR 92 / Woodstock Rd : Parkway 575"
    }]
}, {
    "coord": [30.83516, -83.944368],
    "cams": [{
        "id": "cctv_46369",
        "url": "/georgiasnapshots/THOM-CAM-006.jpg",
        "name": "SR 3/ SBR : SR 38 Bu. SMITH ST"
    }]
}, {
    "coord": [33.822684, -84.3878],
    "cams": [{
        "id": "cctv_7221",
        "stream": "/georgiavss1/atl-cam-008.stream/playlist.m3u8",
        "name": "SR 9 / Peachtree Rd NE : Lindbergh Dr NE"
    }]
}, {
    "coord": [33.68346, -84.500192],
    "cams": [{
        "id": "cctv_5374",
        "stream": "/georgiavss4/gdot-cam-938.stream/playlist.m3u8",
        "name": "I-285 : GREENBRIAR PKWY"
    }]
}, {
    "coord": [33.617256, -84.397552],
    "cams": [{
        "id": "cctv_32946",
        "url": "/georgiasnapshots/GDOT-SVT2-I-75-237",
        "name": "I-75 : Forest Parkway"
    }]
}, {
    "coord": [33.6128, -84.403],
    "cams": [{
        "id": "cctv_10484",
        "url": "/georgiasnapshots/CLAY-CAM-139.jpg",
        "name": "SR 85 : Atlanta South Pkwy"
    }]
}, {
    "coord": [33.845624, -84.315208],
    "cams": [{
        "id": "cctv_13348",
        "stream": "/georgiavss1/brok-cam-154.stream/playlist.m3u8",
        "name": "SR 155 / Clairmont Rd : Century Blvd / Clairmont Way"
    }]
}, {
    "coord": [34.031288, -84.575352],
    "cams": [{
        "id": "cctv_5163",
        "stream": "/georgiavss3/gdot-cam-435.stream/playlist.m3u8",
        "name": "I-75 : EXIT TO CHASTAIN RD"
    }]
}, {
    "coord": [33.550702, -84.4486],
    "cams": [{
        "id": "cctv_10473",
        "url": "/georgiasnapshots/CLAY-CAM-113.jpg",
        "name": "SR 138 : SR 314"
    }]
}, {
    "coord": [33.425946, -84.179096],
    "cams": [{
        "id": "cctv_13280",
        "stream": "/georgiavss4/gdot-cam-757.stream/playlist.m3u8",
        "name": "I-75 : AT SR 20/81 ENTR"
    }]
}, {
    "coord": [33.501042, -84.22708],
    "cams": [{
        "id": "cctv_13276",
        "stream": "/georgiavss4/gdot-cam-742.stream/playlist.m3u8",
        "name": "I-75 : S OF HUDSON BR"
    }]
}, {
    "coord": [33.703184, -84.175712],
    "cams": [{
        "id": "cctv_8800",
        "stream": "/georgiavss3/gdot-cam-383.stream/playlist.m3u8",
        "name": "I-20 : NEAR PANOLA RD"
    }]
}, {
    "coord": [33.380954, -84.301584],
    "cams": [{
        "id": "cctv_6039",
        "stream": "/georgiavss1/ams-cam-114.stream/playlist.m3u8",
        "name": "SR 3 / Bear Creek Blvd : Woolsey Rd"
    }]
}, {
    "coord": [33.71732, -84.398392],
    "cams": [{
        "id": "cctv_5411",
        "stream": "/georgiavss2/gdot-cam-098.stream/playlist.m3u8",
        "name": "75/85 : AT FAIR DR"
    }]
}, {
    "coord": [34.081108, -84.632712],
    "cams": [{
        "id": "cctv_5178",
        "stream": "/georgiavss3/gdot-cam-449.stream/playlist.m3u8",
        "name": "I-75 : N OF WOODSTOCK RD"
    }]
}, {
    "coord": [34.00398, -84.577384],
    "cams": [{
        "id": "cctv_7297",
        "url": "/georgiasnapshots/COBB-CAM-012.jpg",
        "name": "Barrett Pkwy : Barrett Lakes Blvd"
    }]
}, {
    "coord": [33.89324, -84.453504],
    "cams": [{
        "id": "cctv_15578",
        "stream": "/georgiavss4/gdot-cam-628.stream/playlist.m3u8",
        "name": "I-285 : E OF I-75/EXP RAMPS"
    }]
}, {
    "coord": [33.399548, -84.733272],
    "cams": [{
        "id": "cctv_32939",
        "url": "/georgiasnapshots/COW-CAM-012.jpg",
        "name": "SR 34 : Shenandoah Blvd"
    }]
}, {
    "coord": [33.943676, -84.337832],
    "cams": [{
        "id": "cctv_32576",
        "url": "/georgiasnapshots/DUN-CAM-100.jpg",
        "name": "Ashford Dunwoody Rd : Mt Vernon Rd"
    }]
}, {
    "coord": [32.219974, -81.541296],
    "cams": [{
        "id": "cctv_46560",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-137.00.jpg",
        "name": "I-16 : SR 119"
    }]
}, {
    "coord": [33.926184, -84.247448],
    "cams": [{
        "id": "cctv_10293",
        "url": "/georgiasnapshots/GWIN-CAM-119.jpg",
        "name": "SR 13 / US 23 : JONES MILL RD"
    }]
}, {
    "coord": [33.95048, -84.319496],
    "cams": [{
        "id": "cctv_46398",
        "url": "/georgiasnapshots/DUN-CAM-156.jpg",
        "name": "Mt. Vernon : Vermack/Manhasset"
    }]
}, {
    "coord": [33.73778, -84.325688],
    "cams": [{
        "id": "cctv_5101",
        "stream": "/georgiavss3/gdot-cam-361.stream/playlist.m3u8",
        "name": "I-20 : E OF GLENWOOD AVE"
    }]
}, {
    "coord": [33.777872, -84.24016],
    "cams": [{
        "id": "cctv_5711",
        "stream": "/georgiavss2/gdot-cam-252.stream/playlist.m3u8",
        "name": "I-285 : MEMORIAL DR"
    }]
}, {
    "coord": [34.055344, -84.143592],
    "cams": [{
        "id": "cctv_16265",
        "url": "/georgiasnapshots/COJC-CAM-745.jpg",
        "name": "McGinnis Ferry Rd : Rogers Bridge Rd/Settles Walk Ln"
    }]
}, {
    "coord": [33.819424, -84.65676],
    "cams": [{
        "id": "cctv_15625",
        "url": "/georgiasnapshots/COBB-CAM-265.jpg",
        "name": "SR 6/CH James Pkwy : Garrett Rd"
    }]
}, {
    "coord": [33.537052, -84.263616],
    "cams": [{
        "id": "cctv_32929",
        "url": "/georgiasnapshots/GDOT-CAM-773A.jpg",
        "name": "I-75 : EXPRESS LN ENTR/EXIT"
    }]
}, {
    "coord": [33.997952, -84.56132],
    "cams": [{
        "id": "cctv_15504",
        "stream": "/georgiavss3/gdot-cam-493.stream/playlist.m3u8",
        "name": "I-75 : I-575 ENT RAMP"
    }]
}, {
    "coord": [33.744948, -84.334536],
    "cams": [{
        "id": "cctv_5098",
        "stream": "/georgiavss3/gdot-cam-359.stream/playlist.m3u8",
        "name": "I-20 : MAYNARD TERRACE"
    }]
}, {
    "coord": [33.898844, -84.634824],
    "cams": [{
        "id": "cctv_16307",
        "url": "/georgiasnapshots/COBB-CAM-114.jpg",
        "name": "SR 360/Macland Rd : West Sandtown Rd"
    }]
}, {
    "coord": [34.080692, -84.63948],
    "cams": [{
        "id": "cctv_15724",
        "stream": "/georgiavss3/gdot-cam-535.stream/playlist.m3u8",
        "name": "I-75 : S OF PRIEST RD"
    }]
}, {
    "coord": [33.95238, -84.059448],
    "cams": [{
        "id": "cctv_10261",
        "url": "/georgiasnapshots/GWIN-CAM-087.jpg",
        "name": "OLD NORCROSS RD : MCELVANEY RD"
    }]
}, {
    "coord": [33.487506, -82.108048],
    "cams": [{
        "id": "cctv_13102",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-195.jpg",
        "name": "I-20 : WHEELER RD"
    }]
}, {
    "coord": [33.478226, -82.022672],
    "cams": [{
        "id": "cctv_32902",
        "url": "/georgiasnapshots/AUG-CAM-205.jpg",
        "name": "Walton Way : Fleming Ave."
    }]
}, {
    "coord": [33.97676, -84.162592],
    "cams": [{
        "id": "cctv_10298",
        "url": "/georgiasnapshots/GWIN-CAM-124.jpg",
        "name": "SR 13 / US 23 : N BERKELEY LAKE RD"
    }]
}, {
    "coord": [33.5816, -84.411304],
    "cams": [{
        "id": "cctv_10459",
        "url": "/georgiasnapshots/CLAY-CAM-056.jpg",
        "name": "SR 85 : Allen Dr / Adams Dr"
    }]
}, {
    "coord": [33.867268, -84.697144],
    "cams": [{
        "id": "cctv_7341",
        "url": "/georgiasnapshots/COBB-CAM-260.jpg",
        "name": "SR 6 : Richard D. Sailors Pkwy"
    }]
}, {
    "coord": [34.087588, -84.490384],
    "cams": [{
        "id": "cctv_6823",
        "stream": "/georgiavss1/cher-cam-011.stream/playlist.m3u8",
        "name": "SR 92 / Woodstock Rd : Neese Rd"
    }]
}, {
    "coord": [33.759888, -84.482208],
    "cams": [{
        "id": "cctv_5065",
        "stream": "/georgiavss3/gdot-cam-329.stream/playlist.m3u8",
        "name": "I-20 : LINKWOOD RD"
    }]
}, {
    "coord": [33.887452, -84.465944],
    "cams": [{
        "id": "cctv_15595",
        "stream": "/georgiavss4/gdot-cam-623.stream/playlist.m3u8",
        "name": "I-285 : E OF STADIUM PED BRDG"
    }]
}, {
    "coord": [33.5864, -84.3782],
    "cams": [{
        "id": "cctv_10434",
        "url": "/georgiasnapshots/CLAY-CAM-017.jpg",
        "name": "SR 3 OD : FRONTAGE RD"
    }]
}, {
    "coord": [33.375522, -84.297184],
    "cams": [{
        "id": "cctv_6047",
        "stream": "/georgiavss2/ams-cam-901.stream/playlist.m3u8",
        "name": "SR 20 : SR 3 OVERPASS"
    }]
}, {
    "coord": [33.923916, -84.469],
    "cams": [{
        "id": "cctv_12918",
        "url": "/georgiasnapshots/COBB-CAM-048.jpg",
        "name": "Powers Ferry Rd : Delk Rd"
    }]
}, {
    "coord": [33.671388, -84.326096],
    "cams": [{
        "id": "cctv_5962",
        "stream": "/georgiavss4/gdot-cam-618.stream/playlist.m3u8",
        "name": "I-675 : S OF I-285"
    }]
}, {
    "coord": [33.872168, -84.279056],
    "cams": [{
        "id": "cctv_5168",
        "stream": "/georgiavss2/gdot-cam-044.stream/playlist.m3u8",
        "name": "I-85 : N OF SHALLOWFORD RD"
    }]
}, {
    "coord": [32.051232, -81.097792],
    "cams": [{
        "id": "cctv_15742",
        "url": "/georgiasnapshots/SAV-CAM-020.jpg",
        "name": "SR 26/VICTORY DR : HABERSHAM ST"
    }]
}, {
    "coord": [33.942688, -84.19872],
    "cams": [{
        "id": "cctv_10253",
        "url": "/georgiasnapshots/GWIN-CAM-079.jpg",
        "name": "SR 378 : LIGHT CIRCLE NW / E of US 23 / SR 13 / BUFORD HWY"
    }]
}, {
    "coord": [34.271216, -85.22996],
    "cams": [{
        "id": "cctv_15374",
        "url": "/georgiasnapshots/FLYD-CAM-004.jpg",
        "name": "SR 20 : Redmond Circle"
    }]
}, {
    "coord": [33.5335, -84.418896],
    "cams": [{
        "id": "cctv_10499",
        "url": "/georgiasnapshots/CLAY-CAM-193.jpg",
        "name": "SR 85 : Webb Rd / Warren Dr"
    }]
}, {
    "coord": [33.891068, -84.46248],
    "cams": [{
        "id": "cctv_15592",
        "stream": "/georgiavss4/gdot-cam-625.stream/playlist.m3u8",
        "name": "I-285 : ON/OFF EXP RAMPS FOR I-75"
    }]
}, {
    "coord": [33.430084, -84.061864],
    "cams": [{
        "id": "cctv_15572",
        "url": "/georgiasnapshots/HNRY-CAM-101.jpg",
        "name": "SR 81 : NEW HOPE RD"
    }]
}, {
    "coord": [34.010132, -83.916504],
    "cams": [{
        "id": "cctv_10378",
        "url": "/georgiasnapshots/GWIN-CAM-204.jpg",
        "name": "DACULA RD : HURRICANE SHOALS RD"
    }]
}, {
    "coord": [33.699308, -84.455568],
    "cams": [{
        "id": "cctv_5210",
        "stream": "/georgiavss2/gdot-cam-053.stream/playlist.m3u8",
        "name": "SR 166 : DELOWE DR"
    }]
}, {
    "coord": [33.499698, -84.638224],
    "cams": [{
        "id": "cctv_16331",
        "url": "/georgiasnapshots/COW-CAM-022.jpg",
        "name": "Collinsworth Rd : I-85 NB ENT"
    }]
}, {
    "coord": [33.830612, -84.092008],
    "cams": [{
        "id": "cctv_10276",
        "url": "/georgiasnapshots/GWIN-CAM-102.jpg",
        "name": "SR 10 : Lake Lucerne Rd"
    }]
}, {
    "coord": [33.702592, -84.169552],
    "cams": [{
        "id": "cctv_15263",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-071.jpg",
        "name": "I-20 : Panola Rd"
    }]
}, {
    "coord": [33.771352, -84.3874],
    "cams": [{
        "id": "cctv_15288",
        "url": "/georgiasnapshots/ATL-CAM-923.jpg",
        "name": "North Ave : West Peachtree St"
    }]
}, {
    "coord": [33.479328, -84.21616],
    "cams": [{
        "id": "cctv_13246",
        "stream": "/georgiavss4/gdot-cam-746.stream/playlist.m3u8",
        "name": "I-75 : AT JODECO RD"
    }]
}, {
    "coord": [33.805156, -84.493176],
    "cams": [{
        "id": "cctv_5394",
        "stream": "/georgiavss4/gdot-cam-957.stream/playlist.m3u8",
        "name": "I-285 : S OF CHATTAHOOCHEE RIVER"
    }]
}, {
    "coord": [33.797192, -84.642936],
    "cams": [{
        "id": "cctv_15340",
        "stream": "/georgiavss1/doug-cam-093.stream/playlist.m3u8",
        "name": "SR 6 : SR 8 / Bankhead Hwy"
    }]
}, {
    "coord": [33.593164, -83.62984],
    "cams": [{
        "id": "cctv_13072",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-105.jpg",
        "name": "I-20 : NEWBORN RD"
    }]
}, {
    "coord": [33.904676, -84.295208],
    "cams": [{
        "id": "cctv_9142",
        "stream": "/georgiavss1/cham-cam-010.stream/playlist.m3u8",
        "name": "SR 141 / Peachtree Ind Blvd : N Peachtree Rd"
    }]
}, {
    "coord": [33.958976, -84.537312],
    "cams": [{
        "id": "cctv_15185",
        "url": "/georgiasnapshots/MAR-CAM-202.jpg",
        "name": "SR 120A/N Marietta Pkwy : Fairground St"
    }]
}, {
    "coord": [33.905572, -84.331992],
    "cams": [{
        "id": "cctv_16368",
        "url": "/georgiasnapshots/BROK-CAM-075.jpg",
        "name": "Ashford Dunwoody Rd : Nancy Creek Dr"
    }]
}, {
    "coord": [33.959032, -84.549056],
    "cams": [{
        "id": "cctv_15186",
        "url": "/georgiasnapshots/MAR-CAM-203.jpg",
        "name": "SR 120A / N Marietta Pkwy : Cherokee St"
    }]
}, {
    "coord": [33.566876, -84.581456],
    "cams": [{
        "id": "cctv_46448",
        "url": "/georgiasnapshots/FULT-CAM-026.jpg",
        "name": "SR 14/ US 29/ W. Broad St : GA 92/ Cambellton St"
    }]
}, {
    "coord": [33.62828, -84.417632],
    "cams": [{
        "id": "cctv_5268",
        "stream": "/georgiavss4/gdot-cam-669.stream/playlist.m3u8",
        "name": "I-285 : E OF AIRPORT LOOP RD"
    }]
}, {
    "coord": [31.137008, -83.42336],
    "cams": [{
        "id": "cctv_46343",
        "url": "/georgiasnapshots/COOK-CAM-001.jpg",
        "name": "SR 7 : SR 37/SR 76"
    }]
}, {
    "coord": [33.649628, -84.392192],
    "cams": [{
        "id": "cctv_15357",
        "url": "/georgiasnapshots/ATL-CAM-805.jpg",
        "name": "SR 3 / Crown Rd : USPS Driveway"
    }]
}, {
    "coord": [31.767304, -82.353824],
    "cams": [{
        "id": "cctv_46537",
        "url": "/georgiasnapshots/APPL-CAM-001.jpg",
        "name": "SR 4 : SR 15"
    }]
}, {
    "coord": [33.55, -84.415],
    "cams": [{
        "id": "cctv_10465",
        "url": "/georgiasnapshots/CLAY-CAM-063.jpg",
        "name": "SR 85 : SR 138"
    }]
}, {
    "coord": [32.869552, -83.758384],
    "cams": [{
        "id": "cctv_6025",
        "stream": "/georgiavss5/bibb-cam-030.stream/playlist.m3u8",
        "name": "I-475 : PEAKE RD"
    }]
}, {
    "coord": [33.43163, -84.178136],
    "cams": [{
        "id": "cctv_15223",
        "url": "/georgiasnapshots/HNRY-CAM-919.jpg",
        "name": "SR 20 : Willow Lane / Old Ind Blvd"
    }]
}, {
    "coord": [33.779388, -84.479464],
    "cams": [{
        "id": "cctv_13376",
        "stream": "/georgiavss1/atl-cam-273.stream/playlist.m3u8",
        "name": "SR 8 (Hollowell Pkwy) : Kings Grant Dr / Yates Dr"
    }]
}, {
    "coord": [33.5355, -84.3156],
    "cams": [{
        "id": "cctv_10489",
        "url": "/georgiasnapshots/CLAY-CAM-158.jpg",
        "name": "SR 138 : ATLANTA BEACH / RAND RD"
    }]
}, {
    "coord": [34.949668, -85.176488],
    "cams": [{
        "id": "cctv_15615",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-351.jpg",
        "name": "I-75 : RINGGOLD GEORGIA VISITOR INFORMATION CENTER"
    }]
}, {
    "coord": [34.924228, -85.130384],
    "cams": [{
        "id": "cctv_46497",
        "url": "/georgiasnapshots/CARR-CAM-402.jpg",
        "name": "SR 2 : SR 3N"
    }]
}, {
    "coord": [33.939336, -84.462176],
    "cams": [{
        "id": "cctv_7325",
        "url": "/georgiasnapshots/COBB-CAM-091.jpg",
        "name": "Terrell Mill Rd : Old Paper Mill Rd"
    }]
}, {
    "coord": [33.633136, -84.303648],
    "cams": [{
        "id": "cctv_5956",
        "stream": "/georgiavss4/gdot-cam-612.stream/playlist.m3u8",
        "name": "I-675 : ANVIL BLOCK RD"
    }]
}, {
    "coord": [33.945252, -84.605208],
    "cams": [{
        "id": "cctv_13739",
        "url": "/georgiasnapshots/COBB-CAM-255.jpg",
        "name": "Dallas Hwy : John Ward Rd"
    }]
}, {
    "coord": [33.757392, -84.6938],
    "cams": [{
        "id": "cctv_15433",
        "stream": "/georgiavss2/gdot-cam-305.stream/playlist.m3u8",
        "name": "I-20 : 0.75 MI EAST OF MIDWAY RD OVERPASS"
    }]
}, {
    "coord": [33.8398, -84.5072],
    "cams": [{
        "id": "cctv_7358",
        "url": "/georgiasnapshots/COBB-CAM-445.jpg",
        "name": "EW Connector : Camp Highland Rd"
    }]
}, {
    "coord": [34.0176, -84.31172],
    "cams": [{
        "id": "cctv_13142",
        "url": "/georgiasnapshots/ROSWELL-CAM-122.jpg",
        "name": "SR 140 : Holcomb Woods Pkwy"
    }]
}, {
    "coord": [33.554988, -84.301144],
    "cams": [{
        "id": "cctv_13300",
        "stream": "/georgiavss4/gdot-cam-726.stream/playlist.m3u8",
        "name": "I-75 : N OF FIELDER RD"
    }]
}, {
    "coord": [33.618828, -84.43236],
    "cams": [{
        "id": "cctv_5250",
        "stream": "/georgiavss4/gdot-cam-652.stream/playlist.m3u8",
        "name": "I-285 : 5TH RUNWAY TUNNEL ENTRANCE"
    }]
}, {
    "coord": [33.5657, -84.3266],
    "cams": [{
        "id": "cctv_10490",
        "url": "/georgiasnapshots/CLAY-CAM-160.jpg",
        "name": "MT ZION RD : MT ZION CIR"
    }]
}, {
    "coord": [33.982044, -84.558792],
    "cams": [{
        "id": "cctv_15169",
        "url": "/georgiasnapshots/MAR-CAM-100.jpg",
        "name": "SR 3/Cobb Pkwy : Bells Ferry Rd"
    }]
}, {
    "coord": [34.18232, -84.13684],
    "cams": [{
        "id": "cctv_13226",
        "stream": "/georgiavss1/fors-cam-002.stream/playlist.m3u8",
        "name": "SR 20 (Buford Hwy) : SR 400 SB Ramps"
    }]
}, {
    "coord": [34.04358, -84.220984],
    "cams": [{
        "id": "cctv_16221",
        "url": "/georgiasnapshots/COJC-CAM-425.jpg",
        "name": "State Bridge Rd : Abberley Ln/Cameron Bridge Way"
    }]
}, {
    "coord": [33.54663, -84.016336],
    "cams": [{
        "id": "cctv_15312",
        "url": "/georgiasnapshots/GDOT-CAM-SR212-0.8.jpg",
        "name": "SR 212 : Brown Bridge Road"
    }]
}, {
    "coord": [33.999888, -84.038568],
    "cams": [{
        "id": "cctv_10239",
        "url": "/georgiasnapshots/GWIN-CAM-065.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : E of TAB ROBERTS RD"
    }]
}, {
    "coord": [34.060364, -84.069536],
    "cams": [{
        "id": "cctv_10393",
        "url": "/georgiasnapshots/GWIN-CAM-234.jpg",
        "name": "SUWANEE DAM RD : DELAY LN - SUWANEE LIBRARY"
    }]
}, {
    "coord": [32.81432, -83.670136],
    "cams": [{
        "id": "cctv_5971",
        "url": "/georgiasnapshots/BIBB-CAM-509.jpg",
        "name": "EISENHOWER PKWY : W OF PIO NONO AVE"
    }]
}, {
    "coord": [33.074172, -84.925648],
    "cams": [{
        "id": "cctv_12951",
        "url": "/georgiasnapshots/GDOT-CAM-I-85-022.1.jpg",
        "name": "I-85 : TROUP CO WEIGH STATION"
    }]
}, {
    "coord": [34.142288, -84.738264],
    "cams": [{
        "id": "cctv_9319",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-285.jpg",
        "name": "I-75 : RED TOP MTN RD"
    }]
}, {
    "coord": [33.877204, -84.461216],
    "cams": [{
        "id": "cctv_13088",
        "url": "/georgiasnapshots/COBB-CAM-122.jpg",
        "name": "Cumberland Blvd : Riverwood Pkwy"
    }]
}, {
    "coord": [33.967876, -84.194752],
    "cams": [{
        "id": "cctv_10206",
        "url": "/georgiasnapshots/GWIN-CAM-032.jpg",
        "name": "PEACHTREE INDUSTRIAL BLVD : S OLD PEACHTREE RD"
    }]
}, {
    "coord": [33.825712, -84.362736],
    "cams": [{
        "id": "cctv_8813",
        "stream": "/georgiavss1/atl-cam-021.stream/playlist.m3u8",
        "name": "Sidney Marcus : Adina Dr"
    }]
}, {
    "coord": [32.434444, -81.756576],
    "cams": [{
        "id": "cctv_46234",
        "url": "/georgiasnapshots/BULL-CAM-001.jpg",
        "name": "SR 26 (Northside Dr) : SR 73 Bypass (Veterans Memorial Pkwy)"
    }]
}, {
    "coord": [31.231228, -84.200072],
    "cams": [{
        "id": "cctv_46360",
        "url": "/georgiasnapshots/MITC-CAM-001.jpg",
        "name": "SR3/US19 : SR37/E BROAD ST"
    }]
}, {
    "coord": [33.773296, -84.551376],
    "cams": [{
        "id": "cctv_15406",
        "stream": "/georgiavss3/gdot-cam-319.stream/playlist.m3u8",
        "name": "I-20 : Six Flags Pkwy"
    }]
}, {
    "coord": [33.93628, -84.533256],
    "cams": [{
        "id": "cctv_7302",
        "url": "/georgiasnapshots/COBB-CAM-021.jpg",
        "name": "SR 280/South Cobb Dr : Fairground St"
    }]
}, {
    "coord": [33.902764, -84.455632],
    "cams": [{
        "id": "cctv_7309",
        "url": "/georgiasnapshots/COBB-CAM-046.jpg",
        "name": "Powers Ferry Rd : Windy Ridge Pkwy"
    }]
}, {
    "coord": [33.80164, -84.567392],
    "cams": [{
        "id": "cctv_9174",
        "url": "/georgiasnapshots/COBB-CAM-074.jpg",
        "name": "Mableton Pkwy : Factory Shoals Rd"
    }]
}, {
    "coord": [33.548058, -84.277128],
    "cams": [{
        "id": "cctv_13560",
        "url": "/georgiasnapshots/CLAY-CAM-161.jpg",
        "name": "SR 138 / Lake Spivey Rd : I-75 NB Ramp"
    }]
}, {
    "coord": [33.88112, -84.620432],
    "cams": [{
        "id": "cctv_32611",
        "url": "/georgiasnapshots/COBB-CAM-242.jpg",
        "name": "Powder Springs Rd : Pair Rd"
    }]
}, {
    "coord": [33.844248, -83.909032],
    "cams": [{
        "id": "cctv_46298",
        "url": "/georgiasnapshots/GWIN-CAM-232.jpg",
        "name": "US 78 : LOGAN DR"
    }]
}, {
    "coord": [33.900852, -84.475096],
    "cams": [{
        "id": "cctv_13649",
        "url": "/georgiasnapshots/COBB-CAM-034.jpg",
        "name": "Windy Hill Rd : Circle 75 Pkwy"
    }]
}, {
    "coord": [33.715572, -84.349544],
    "cams": [{
        "id": "cctv_13611",
        "url": "/georgiasnapshots/ATL-CAM-607.jpg",
        "name": "SR 42 (Moreland Ave) : Custer Ave"
    }]
}, {
    "coord": [34.22478, -83.866056],
    "cams": [{
        "id": "cctv_32629",
        "url": "/georgiasnapshots/HALL-CAM-010",
        "name": "I-985 SB : SR 53"
    }]
}, {
    "coord": [34.32824, -83.785432],
    "cams": [{
        "id": "cctv_13176",
        "url": "/georgiasnapshots/GDOT-CAM-I-985-024.jpg",
        "name": "I-985 : S OF HOWARD RD"
    }]
}, {
    "coord": [34.064292, -83.943816],
    "cams": [{
        "id": "cctv_15973",
        "stream": "/georgiavss2/gdot-cam-173.stream/playlist.m3u8",
        "name": "I-85 : N OF GRAVEL SPRINGS RD"
    }]
}, {
    "coord": [33.572288, -84.407416],
    "cams": [{
        "id": "cctv_15364",
        "url": "/georgiasnapshots/CLAY-CAM-096.jpg",
        "name": "Upper Riverdale Rd : Valley Hill Rd"
    }]
}, {
    "coord": [33.880888, -83.938352],
    "cams": [{
        "id": "cctv_10340",
        "url": "/georgiasnapshots/GWIN-CAM-166.jpg",
        "name": "SR 20 : COOPER RD / OZORA RD"
    }]
}, {
    "coord": [34.07874, -84.659024],
    "cams": [{
        "id": "cctv_5183",
        "stream": "/georgiavss3/gdot-cam-453.stream/playlist.m3u8",
        "name": "I-75 : N OF SR 92"
    }]
}, {
    "coord": [34.072412, -84.273304],
    "cams": [{
        "id": "cctv_13210",
        "url": "/georgiasnapshots/ALPH-CAM-034.jpg",
        "name": "Westside Pkwy : Avalon Way"
    }]
}, {
    "coord": [32.481666, -84.987704],
    "cams": [{
        "id": "cctv_9013",
        "url": "/georgiasnapshots/COLU-CAM-002.jpg",
        "name": "SR 1 / Veterans Parkway : Talbotton Rd"
    }]
}, {
    "coord": [33.745948, -84.428264],
    "cams": [{
        "id": "cctv_5076",
        "stream": "/georgiavss3/gdot-cam-339.stream/playlist.m3u8",
        "name": "I-20 : LANGHORN ST"
    }]
}, {
    "coord": [32.82063, -83.689216],
    "cams": [{
        "id": "cctv_5977",
        "url": "/georgiasnapshots/BIBB-CAM-515.jpg",
        "name": "MERCER UNIV : EDNA PL"
    }]
}, {
    "coord": [34.020324, -84.516744],
    "cams": [{
        "id": "cctv_12908",
        "url": "/georgiasnapshots/COBB-CAM-142.jpg",
        "name": "Piedmont Rd : Morgan Rd"
    }]
}, {
    "coord": [33.747028, -84.396896],
    "cams": [{
        "id": "cctv_15452",
        "url": "/georgiasnapshots/ATL-CAM-961.jpg",
        "name": "Memorial Dr / Whitehall St : Peachtree St / Forsyth St"
    }]
}, {
    "coord": [33.471984, -84.213704],
    "cams": [{
        "id": "cctv_13241",
        "stream": "/georgiavss4/gdot-cam-747.stream/playlist.m3u8",
        "name": "I-75 : S OF JODECO RD"
    }]
}, {
    "coord": [33.39714, -84.59104],
    "cams": [{
        "id": "cctv_13123",
        "url": "/georgiasnapshots/FAY-CAM-018.jpg",
        "name": "SR 54 : SR 74"
    }]
}, {
    "coord": [33.8365, -84.248864],
    "cams": [{
        "id": "cctv_5010",
        "stream": "/georgiavss2/gdot-cam-242.stream/playlist.m3u8",
        "name": "I-285 : N OF LAWRENCEVILLE HWY"
    }]
}, {
    "coord": [34.068616, -84.264216],
    "cams": [{
        "id": "cctv_13606",
        "stream": "/georgiavss1/alph-cam-024.stream/playlist.m3u8",
        "name": "SR 120 (Old Milton Pkwy) : Siemens Driveway"
    }]
}, {
    "coord": [33.9149, -84.399904],
    "cams": [{
        "id": "cctv_4975",
        "stream": "/georgiavss2/gdot-cam-210.stream/playlist.m3u8",
        "name": "I-285 : MT VERNON HWY"
    }]
}, {
    "coord": [33.8508, -84.37944],
    "cams": [{
        "id": "cctv_8815",
        "stream": "/georgiavss1/atl-cam-017.stream/playlist.m3u8",
        "name": "SR 237 / Piedmont Rd : Manor Apartments"
    }]
}, {
    "coord": [33.44085, -84.19388],
    "cams": [{
        "id": "cctv_13341",
        "stream": "/georgiavss4/gdot-cam-752.stream/playlist.m3u8",
        "name": "I-75 : N OF SR 20/81"
    }]
}, {
    "coord": [33.798096, -84.3906],
    "cams": [{
        "id": "cctv_15250",
        "stream": "/georgiavss1/atl-cam-905.stream/playlist.m3u8",
        "name": "SR 9 (Peachtree St) : Buford Conn / I-85 NB Ramp"
    }]
}, {
    "coord": [32.892398, -83.678464],
    "cams": [{
        "id": "cctv_5993",
        "url": "/georgiasnapshots/BIBB-CAM-531.jpg",
        "name": "I-75 : ARKWRIGHT/SABBATH CRK"
    }]
}, {
    "coord": [33.731568, -85.028496],
    "cams": [{
        "id": "cctv_16184",
        "url": "/georgiasnapshots/GDOT-CAM-SR8-1.25.jpg",
        "name": "SR 8 : SR 113"
    }]
}, {
    "coord": [34.019936, -84.3616],
    "cams": [{
        "id": "cctv_9029",
        "url": "/georgiasnapshots/ROSWELL-CAM-308.jpg",
        "name": "SR 9 : Oak St"
    }]
}, {
    "coord": [34.115084, -84.223096],
    "cams": [{
        "id": "cctv_32563",
        "url": "/georgiasnapshots/FORS-CAM-030.jpg",
        "name": "SR 400 NB : McFarland Pkwy"
    }]
}, {
    "coord": [34.016956, -84.559808],
    "cams": [{
        "id": "cctv_15481",
        "stream": "/georgiavss3/gdot-cam-539.stream/playlist.m3u8",
        "name": "I-575 : EXIT TO BARRETT PKY"
    }]
}, {
    "coord": [33.8945, -84.263],
    "cams": [{
        "id": "cctv_4999",
        "stream": "/georgiavss2/gdot-cam-232.stream/playlist.m3u8",
        "name": "I-285 : W OF I-85 (DEKALB)"
    }]
}, {
    "coord": [32.828774, -83.731368],
    "cams": [{
        "id": "cctv_6014",
        "stream": "/georgiavss5/bibb-cam-023.stream/playlist.m3u8",
        "name": "I-475 : MILE POST 5"
    }]
}, {
    "coord": [33.35247, -84.125504],
    "cams": [{
        "id": "cctv_32646",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-212.2.jpg",
        "name": "I-75 : BILL GARDNER PKY ENT RAMP"
    }]
}, {
    "coord": [32.042724, -81.010648],
    "cams": [{
        "id": "cctv_15811",
        "url": "/georgiasnapshots/SAV-CAM-028.jpg",
        "name": "SR 26/US 80 : DEBBIE ST/WHITEMARSH ISLAND DR"
    }]
}, {
    "coord": [33.745804, -84.4036],
    "cams": [{
        "id": "cctv_15303",
        "url": "/georgiasnapshots/ATL-CAM-933.jpg",
        "name": "SR 14 (Peters St) : Walker St"
    }]
}, {
    "coord": [33.718368, -84.764752],
    "cams": [{
        "id": "cctv_13093",
        "stream": "/georgiavss1/doug-cam-038.stream/playlist.m3u8",
        "name": "SR 5 (Bill Arp Rd) : Stewart Pkwy"
    }]
}, {
    "coord": [33.92058, -84.345424],
    "cams": [{
        "id": "cctv_32620",
        "url": "/georgiasnapshots/DUN-CAM-132.jpg",
        "name": "Hammond Dr : Perimeter Ctr Pkwy"
    }]
}, {
    "coord": [32.031364, -80.96468],
    "cams": [{
        "id": "cctv_15897",
        "url": "/georgiasnapshots/SAV-CAM-035.jpg",
        "name": "SR 26/US 80 : JOHNNY MERCER BLVD (EAST)"
    }]
}, {
    "coord": [34.027216, -84.045096],
    "cams": [{
        "id": "cctv_10242",
        "url": "/georgiasnapshots/GWIN-CAM-068.jpg",
        "name": "LAWRENCEVILLE-SUWANEE RD : OLD PEACHTREE RD"
    }]
}, {
    "coord": [33.465592, -84.211752],
    "cams": [{
        "id": "cctv_13277",
        "stream": "/georgiavss4/gdot-cam-748.stream/playlist.m3u8",
        "name": "I-75 : AT JONESBORO RD EXIT"
    }]
}, {
    "coord": [33.917952, -84.34532],
    "cams": [{
        "id": "cctv_46400",
        "url": "/georgiasnapshots/DUN-CAM-135.jpg",
        "name": "Perimeter Center Pkwy : Springwood Connector/Marriott"
    }]
}, {
    "coord": [34.540356, -83.54024],
    "cams": [{
        "id": "cctv_46324",
        "url": "/georgiasnapshots/HABE-CAM-003.jpg",
        "name": "SR 105 : SR 15"
    }]
}, {
    "coord": [33.621008, -84.468464],
    "cams": [{
        "id": "cctv_4957",
        "stream": "/georgiavss2/gdot-cam-194.stream/playlist.m3u8",
        "name": "I-85 : OLD NATIONAL HWY"
    }]
}, {
    "coord": [33.771156, -84.352632],
    "cams": [{
        "id": "cctv_9193",
        "stream": "/georgiavss1/atl-cam-073.stream/playlist.m3u8",
        "name": "North Ave : N Highland Ave"
    }]
}, {
    "coord": [34.05378, -83.994656],
    "cams": [{
        "id": "cctv_10214",
        "url": "/georgiasnapshots/GWIN-CAM-040.jpg",
        "name": "SR 20 : Laurel Dr / BrandsMart USA"
    }]
}, {
    "coord": [34.983088, -85.286248],
    "cams": [{
        "id": "cctv_16111",
        "url": "/georgiasnapshots/GDOT-CAM-SR1-30.55.jpg",
        "name": "SR 1 : MCFARLAND AVE"
    }]
}, {
    "coord": [33.819752, -84.242856],
    "cams": [{
        "id": "cctv_5306",
        "stream": "/georgiavss4/gdot-cam-780.stream/playlist.m3u8",
        "name": "US 78 : E OF I-285"
    }]
}, {
    "coord": [33.901172, -84.479528],
    "cams": [{
        "id": "cctv_7305",
        "url": "/georgiasnapshots/COBB-CAM-031.jpg",
        "name": "Windy Hill Rd : Hospital Dr"
    }]
}, {
    "coord": [34.017276, -84.239424],
    "cams": [{
        "id": "cctv_16234",
        "url": "/georgiasnapshots/COJC-CAM-555.jpg",
        "name": "Old Alabama Rd : Autrey Mill MS"
    }]
}, {
    "coord": [33.873036, -84.475392],
    "cams": [{
        "id": "cctv_15585",
        "stream": "/georgiavss4/gdot-cam-621.stream/playlist.m3u8",
        "name": "I-285 : MT WILKINSON PKY"
    }]
}, {
    "coord": [34.412628, -84.389104],
    "cams": [{
        "id": "cctv_16098",
        "url": "/georgiasnapshots/GDOT-CAM-SR515-2.10.jpg",
        "name": "SR 5/SR 515 : SR 108"
    }]
}, {
    "coord": [33.754968, -84.267704],
    "cams": [{
        "id": "cctv_13688",
        "stream": "/georgiavss1/dek-cam-151.stream/playlist.m3u8",
        "name": "SR 154 (Memorial Drive) : Columbia Dr"
    }]
}, {
    "coord": [33.246898, -84.296744],
    "cams": [{
        "id": "cctv_15446",
        "url": "c2c.dot.ga.gov/snapshots/SPAL-CAM-004.jpg",
        "name": "SR 3/US 19/41 BYPASS : SR 16 E/NEWNAN RD"
    }]
}, {
    "coord": [33.879148, -84.458248],
    "cams": [{
        "id": "cctv_7317",
        "url": "/georgiasnapshots/COBB-CAM-057.jpg",
        "name": "SR 3/Cobb Pkwy : Riverwood Pkwy"
    }]
}, {
    "coord": [33.721984, -84.776816],
    "cams": [{
        "id": "cctv_12945",
        "url": "/georgiasnapshots/DOUG-CAM-020.jpg",
        "name": "Douglas Blvd : Brightstar Rd"
    }]
}, {
    "coord": [33.714796, -84.24032],
    "cams": [{
        "id": "cctv_5116",
        "stream": "/georgiavss3/gdot-cam-375.stream/playlist.m3u8",
        "name": "I-20 : I-285 (DEKALB)"
    }]
}, {
    "coord": [34.040512, -84.346672],
    "cams": [{
        "id": "cctv_13149",
        "url": "/georgiasnapshots/ROSWELL-CAM-400.jpg",
        "name": "Mansell Rd : Aldi/Kroger"
    }]
}, {
    "coord": [33.495498, -84.3432],
    "cams": [{
        "id": "cctv_10523",
        "url": "/georgiasnapshots/CLAY-CAM-C607.jpg",
        "name": "SR 3 / Tara Blvd : South of Winding Way Ln"
    }]
}, {
    "coord": [32.07396, -81.245728],
    "cams": [{
        "id": "cctv_13182",
        "url": "/georgiasnapshots/GDOT-CAM-I-95-099.jpg",
        "name": "I-95 : I-16 EB"
    }]
}, {
    "coord": [33.653004, -84.39616],
    "cams": [{
        "id": "cctv_5326",
        "stream": "/georgiavss2/gdot-cam-081.stream/playlist.m3u8",
        "name": "I-75 : CENTRAL / PORSCHE AVE"
    }]
}, {
    "coord": [34.07748, -84.728536],
    "cams": [{
        "id": "cctv_13679",
        "url": "/georgiasnapshots/COBB-CAM-339.jpg",
        "name": "SR 3/Cobb Pkwy : 3rd Army Rd / Blackacre Trl"
    }]
}, {
    "coord": [33.750516, -84.714256],
    "cams": [{
        "id": "cctv_46422",
        "url": "/georgiasnapshots/DOUG-CAM-097.jpg",
        "name": "SR 92/ FAIRBURN RD : I-20 Eastbound"
    }]
}, {
    "coord": [33.842164, -84.48776],
    "cams": [{
        "id": "cctv_5402",
        "stream": "/georgiavss4/gdot-cam-964.stream/playlist.m3u8",
        "name": "I-285 : S ATLANTA RD"
    }]
}, {
    "coord": [33.82442, -84.104968],
    "cams": [{
        "id": "cctv_10406",
        "url": "/georgiasnapshots/GWIN-CAM-247.jpg",
        "name": "SR 10 : Parker Ct / Davis Rd"
    }]
}, {
    "coord": [33.698416, -84.448456],
    "cams": [{
        "id": "cctv_46425",
        "url": "/georgiasnapshots/FULT-CAM-007.jpg",
        "name": "SR 166 : Stanton Rd"
    }]
}, {
    "coord": [34.022348, -84.315256],
    "cams": [{
        "id": "cctv_13158",
        "url": "/georgiasnapshots/ROSWELL-CAM-418.jpg",
        "name": "Old Alabama Rd : Holcomb Woods Pkwy"
    }]
}, {
    "coord": [33.699884, -85.071456],
    "cams": [{
        "id": "cctv_13192",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-016.jpg",
        "name": "I-20 : CARROLL CO WEIGH STATION"
    }]
}, {
    "coord": [34.207192, -84.142528],
    "cams": [{
        "id": "cctv_32559",
        "url": "http://navigator-csc.dot.ga.gov/snapshots/FORS-CAM-026.jpg",
        "name": "SR 20 : Kelly Mill Rd"
    }]
}, {
    "coord": [33.758476, -84.38764],
    "cams": [{
        "id": "cctv_15387",
        "url": "/georgiasnapshots/ATL-CAM-959.jpg",
        "name": "Peachtree St : Ellis St"
    }]
}, {
    "coord": [32.121682, -81.265704],
    "cams": [{
        "id": "cctv_46525",
        "url": "/georgiasnapshots/CHAT-CAM-006.jpg",
        "name": "SR 26 : Pooler Pkwy NB"
    }]
}, {
    "coord": [33.901436, -84.444672],
    "cams": [{
        "id": "cctv_15587",
        "stream": "/georgiavss4/gdot-cam-630.stream/playlist.m3u8",
        "name": "I-285 : W OF CHATT RIV"
    }]
}, {
    "coord": [33.885736, -84.28824],
    "cams": [{
        "id": "cctv_13586",
        "stream": "/georgiavss1/cham-cam-009.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Chamblee Tucker Rd"
    }]
}, {
    "coord": [33.894672, -84.52088],
    "cams": [{
        "id": "cctv_13759",
        "url": "/georgiasnapshots/SMYR-CAM-008.jpg",
        "name": "Windy Hill Rd : Atlanta Rd"
    }]
}, {
    "coord": [33.878044, -84.46452],
    "cams": [{
        "id": "cctv_16313",
        "url": "/georgiasnapshots/COBB-CAM-139.jpg",
        "name": "Cumberland Blvd : Akers Mill Rd/Stillhouse Rd"
    }]
}, {
    "coord": [34.042816, -84.341448],
    "cams": [{
        "id": "cctv_9035",
        "url": "/georgiasnapshots/ROSWELL-CAM-318.jpg",
        "name": "SR 9 : Mansell Rd"
    }]
}, {
    "coord": [33.73314, -84.960392],
    "cams": [{
        "id": "cctv_16186",
        "url": "/georgiasnapshots/GDOT-CAM-SR8-5.35.jpg",
        "name": "SR 8 : VAN WERT RD"
    }]
}, {
    "coord": [33.478668, -81.975496],
    "cams": [{
        "id": "cctv_32839",
        "url": "/georgiasnapshots/AUG-CAM-001.jpg",
        "name": "13th St. : Broad"
    }]
}, {
    "coord": [33.720024, -85.029096],
    "cams": [{
        "id": "cctv_16311",
        "url": "/georgiasnapshots/GDOT-CAM-SR113-9.65.jpg",
        "name": "SR 113 : BILLINGS RD"
    }]
}, {
    "coord": [33.441304, -84.691648],
    "cams": [{
        "id": "cctv_32932",
        "url": "/georgiasnapshots/COW-CAM-017.jpg",
        "name": "SR 154 : Raymond Hill Rd"
    }]
}, {
    "coord": [34.019768, -84.276936],
    "cams": [{
        "id": "cctv_16225",
        "url": "/georgiasnapshots/COJC-CAM-510.jpg",
        "name": "Old Alabama Rd : Nesbit Ferry Rd"
    }]
}, {
    "coord": [33.909916, -84.484928],
    "cams": [{
        "id": "cctv_15509",
        "stream": "/georgiavss3/gdot-cam-478.stream/playlist.m3u8",
        "name": "TERRELL MILL RD : WEST OF I-75"
    }]
}, {
    "coord": [34.045884, -84.179016],
    "cams": [{
        "id": "cctv_16217",
        "stream": "/georgiavss1/cojc-cam-250.stream/playlist.m3u8",
        "name": "SR 141 : Skyway Dr"
    }]
}, {
    "coord": [33.812876, -84.30788],
    "cams": [{
        "id": "cctv_13770",
        "url": "/georgiasnapshots/DEK-CAM-328.jpg",
        "name": "SR 155 / Clairmont Rd : N Druid Hills Rd"
    }]
}, {
    "coord": [33.73122, -84.932088],
    "cams": [{
        "id": "cctv_46489",
        "url": "/georgiasnapshots/CARR-CAM-101.jpg",
        "name": "SR 8 : Community Sq"
    }]
}, {
    "coord": [33.847132, -84.367672],
    "cams": [{
        "id": "cctv_12974",
        "stream": "/georgiavss4/gdot-cam-813.stream/playlist.m3u8",
        "name": "GA 400 : SOUTH END OF TUNNEL"
    }]
}, {
    "coord": [34.029228, -84.356464],
    "cams": [{
        "id": "cctv_9032",
        "url": "/georgiasnapshots/ROSWELL-CAM-314.jpg",
        "name": "SR 9 : Woodstock St"
    }]
}, {
    "coord": [34.050932, -84.017864],
    "cams": [{
        "id": "cctv_15956",
        "stream": "/georgiavss2/gdot-cam-164.stream/playlist.m3u8",
        "name": "I-85 : 1 MI S OF SR 20"
    }]
}, {
    "coord": [33.798248, -84.249336],
    "cams": [{
        "id": "cctv_5017",
        "stream": "/georgiavss2/gdot-cam-249.stream/playlist.m3u8",
        "name": "I-285 : S OF CHURCH ST"
    }]
}, {
    "coord": [33.883096, -84.477448],
    "cams": [{
        "id": "cctv_13762",
        "url": "/georgiasnapshots/SMYR-CAM-011.jpg",
        "name": "Spring Rd : Sports Ave"
    }]
}, {
    "coord": [32.40113, -82.306976],
    "cams": [{
        "id": "cctv_13188",
        "url": "/georgiasnapshots/GDOT-CAM-I-16-090.jpg",
        "name": "I-16 : US 1/SR 4"
    }]
}, {
    "coord": [33.914348, -84.114376],
    "cams": [{
        "id": "cctv_10320",
        "url": "/georgiasnapshots/GWIN-CAM-146.jpg",
        "name": "PLEASANT HILL RD : RONALD REAGAN PKWY"
    }]
}, {
    "coord": [33.4957, -82.617928],
    "cams": [{
        "id": "cctv_13098",
        "url": "/georgiasnapshots/GDOT-CAM-I-20-165.jpg",
        "name": "I-20 : SR 80 / WASHINGTON HWY"
    }]
}, {
    "coord": [33.482232, -84.215704],
    "cams": [{
        "id": "cctv_10171",
        "url": "/georgiasnapshots/HNRY-CAM-916.jpg",
        "name": "I-75 : Jodeco Rd"
    }]
}, {
    "coord": [33.468918, -81.971168],
    "cams": [{
        "id": "cctv_32832",
        "url": "/georgiasnapshots/AUG-CAM-197.jpg",
        "name": "Walton Way : 9th St./James Brown Blvd."
    }]
}, {
    "coord": [33.439186, -82.023944],
    "cams": [{
        "id": "cctv_32879",
        "url": "/georgiasnapshots/AUG-CAM-065.jpg",
        "name": "Gordon Hwy : Hwy 1/ Deans Bridge Rd."
    }]
}, {
    "coord": [34.011184, -85.043776],
    "cams": [{
        "id": "cctv_16153",
        "url": "/georgiasnapshots/GDOT-CAM-SR6-23.45.jpg",
        "name": "SR 6 : SR 101"
    }]
}, {
    "coord": [33.917364, -84.000368],
    "cams": [{
        "id": "cctv_10230",
        "url": "/georgiasnapshots/GWIN-CAM-056.jpg",
        "name": "SR 124 : SUGARLOAF PKWY"
    }]
}, {
    "coord": [33.540134, -84.2024],
    "cams": [{
        "id": "cctv_13556",
        "url": "/georgiasnapshots/HNRY-CAM-107.jpg",
        "name": "SR 138 : SR 42 / N Henry Blvd"
    }]
}, {
    "coord": [34.03296, -84.18564],
    "cams": [{
        "id": "cctv_6819",
        "stream": "/georgiavss1/cojc-cam-135.stream/playlist.m3u8",
        "name": "SR 141 (Medlock Bridge Rd) : Wilson Rd"
    }]
}, {
    "coord": [33.922624, -84.4768],
    "cams": [{
        "id": "cctv_15211",
        "url": "/georgiasnapshots/MAR-CAM-600.jpg",
        "name": "Delk Rd : Bentley Rd/Woodsmill Dr"
    }]
}, {
    "coord": [32.813862, -83.6564],
    "cams": [{
        "id": "cctv_5966",
        "url": "/georgiasnapshots/BIBB-CAM-504.jpg",
        "name": "EISENHOWER PKWY : I-75 SB RAMPS"
    }]
}, {
    "coord": [34.070988, -84.282152],
    "cams": [{
        "id": "cctv_15461",
        "stream": "/georgiavss1/alph-cam-033.stream/playlist.m3u8",
        "name": "Westside Pkwy : Hawk"
    }]
}, {
    "coord": [33.950912, -84.64088],
    "cams": [{
        "id": "cctv_12917",
        "url": "/georgiasnapshots/COBB-CAM-257.jpg",
        "name": "Dallas Hwy : West Sandtown Rd"
    }]
}, {
    "coord": [34.075536, -84.62212],
    "cams": [{
        "id": "cctv_5175",
        "stream": "/georgiavss3/gdot-cam-446.stream/playlist.m3u8",
        "name": "I-75 : S OF WOODSTOCK RD"
    }]
}, {
    "coord": [33.939404, -84.507984],
    "cams": [{
        "id": "cctv_15193",
        "url": "/georgiasnapshots/MAR-CAM-304.jpg",
        "name": "SR 120/S Marietta Pkwy : Franklin Gtwy"
    }]
}, {
    "coord": [33.887364, -84.0098],
    "cams": [{
        "id": "cctv_10227",
        "url": "/georgiasnapshots/GWIN-CAM-053.jpg",
        "name": "SR 124 : S of MT ZION CHURCH RD"
    }]
}, {
    "coord": [32.0765, -81.0916],
    "cams": [{
        "id": "cctv_46509",
        "url": "/georgiasnapshots/SAV-CAM-0423.jpg",
        "name": "Oglethorpe Ave. : Drayton St."
    }]
}, {
    "coord": [33.811076, -84.371416],
    "cams": [{
        "id": "cctv_15341",
        "url": "/georgiasnapshots/ATL-CAM-953.jpg",
        "name": "SR 13 / Buford Spring Conn : Armour Dr"
    }]
}, {
    "coord": [33.753912, -84.399648],
    "cams": [{
        "id": "cctv_15284",
        "stream": "/georgiavss1/atl-cam-919.stream/playlist.m3u8",
        "name": "Mitchell St : Mangum St"
    }]
}, {
    "coord": [33.92148, -84.211872],
    "cams": [{
        "id": "cctv_10189",
        "url": "/georgiasnapshots/GWIN-CAM-011.jpg",
        "name": "SR 140 : N Norcross-Tucker Rd / Brook Hollow Pkwy"
    }]
}, {
    "coord": [33.56036, -84.312272],
    "cams": [{
        "id": "cctv_5278",
        "stream": "/georgiavss4/gdot-cam-707.stream/playlist.m3u8",
        "name": "I-75 : S OF MT ZION BLVD"
    }]
}, {
    "coord": [34.196536, -84.789672],
    "cams": [{
        "id": "cctv_16137",
        "url": "/georgiasnapshots/GDOT-CAM-SR3-10.55.jpg",
        "name": "SR 3 : FELTON RD"
    }]
}, {
    "coord": [33.753968, -84.402872],
    "cams": [{
        "id": "cctv_13209",
        "stream": "/georgiavss1/atl-cam-083.stream/playlist.m3u8",
        "name": "SR 3 (Northside Drive) : Mitchell St"
    }]
}, {
    "coord": [33.514842, -84.242848],
    "cams": [{
        "id": "cctv_13320",
        "stream": "/georgiavss4/gdot-cam-738.stream/playlist.m3u8",
        "name": "I-75 : S OF FLIPPEN RD"
    }]
}, {
    "coord": [34.180004, -84.133808],
    "cams": [{
        "id": "cctv_13256",
        "stream": "/georgiavss1/fors-cam-003.stream/playlist.m3u8",
        "name": "SR 20 (Buford Hwy) : Northside Forsyth Dr / Marketplace Blvd"
    }]
}, {
    "coord": [34.051408, -83.93404],
    "cams": [{
        "id": "cctv_10373",
        "url": "/georgiasnapshots/GWIN-CAM-199.jpg",
        "name": "SR 324 : W of SR 124"
    }]
}, {
    "coord": [33.661596, -84.353448],
    "cams": [{
        "id": "cctv_5043",
        "stream": "/georgiavss2/gdot-cam-275.stream/playlist.m3u8",
        "name": "I-285 : NEAR FOREST PARK RD"
    }]
}, {
    "coord": [33.447476, -84.51868],
    "cams": [{
        "id": "cctv_16352",
        "url": "/georgiasnapshots/FAY-CAM-212.jpg",
        "name": "SR 54 : VETERANS PKY/LESTER RD"
    }]
}, {
    "coord": [33.990876, -84.599712],
    "cams": [{
        "id": "cctv_7296",
        "url": "/georgiasnapshots/COBB-CAM-011.jpg",
        "name": "Barrett Pkwy : CMS (Old 41 Hwy)"
    }]
}, {
    "coord": [33.456634, -84.454432],
    "cams": [{
        "id": "cctv_6856",
        "stream": "/georgiavss1/fay-cam-114.stream/playlist.m3u8",
        "name": "SR 85 : SR 92 / Forrest Ave"
    }]
}, {
    "coord": [33.970284, -84.528952],
    "cams": [{
        "id": "cctv_15477",
        "stream": "/georgiavss3/gdot-cam-488.stream/playlist.m3u8",
        "name": "I-75 : S OF ALLGOOD RD"
    }]
}, {
    "coord": [34.055364, -84.002928],
    "cams": [{
        "id": "cctv_15989",
        "stream": "/georgiavss2/gdot-cam-167.stream/playlist.m3u8",
        "name": "I-85 : BEFORE SR 20"
    }]
}, {
    "coord": [31.999006, -81.249176],
    "cams": [{
        "id": "cctv_15540",
        "url": "/georgiasnapshots/SAV-CAM-002.jpg",
        "name": "SR 25/US 17 : SR 204 EB"
    }]
}, {
    "coord": [34.019804, -84.528048],
    "cams": [{
        "id": "cctv_7332",
        "url": "/georgiasnapshots/COBB-CAM-141.jpg",
        "name": "Canton Rd : Piedmont Rd"
    }]
}, {
    "coord": [34.03126, -84.467056],
    "cams": [{
        "id": "cctv_13050",
        "url": "/georgiasnapshots/COBB-CAM-219.jpg",
        "name": "Sandy Plains Rd : Holly Springs Rd"
    }]
}, {
    "coord": [32.558426, -83.883224],
    "cams": [{
        "id": "cctv_16193",
        "url": "/georgiasnapshots/GDOT-CAM-SR7-7.7.jpg",
        "name": "SR 7 : SR 49/SR 96"
    }]
}, {
    "coord": [33.720512, -84.357968],
    "cams": [{
        "id": "cctv_46464",
        "url": "/georgiasnapshots/TMC-CAM-002.jpg",
        "name": "Walker Ave : United Ave"
    }]
}, {
    "coord": [32.612626, -83.743192],
    "cams": [{
        "id": "cctv_16196",
        "url": "/georgiasnapshots/GDOT-CAM-I-75-146.jpg",
        "name": "I-75 : SR 247C"
    }]
}, {
    "coord": [33.943484, -84.240344],
    "cams": [{
        "id": "cctv_10191",
        "url": "/georgiasnapshots/GWIN-CAM-013.jpg",
        "name": "SR 140 : SR 141 (PIB) NB Ramp"
    }]
}, {
    "coord": [33.912452, -84.476688],
    "cams": [{
        "id": "cctv_15575",
        "stream": "/georgiavss3/gdot-cam-476.stream/playlist.m3u8",
        "name": "TERRELL MILL RD : E OF I-75 EXP LANE RAMP"
    }]
}, {
    "coord": [33.697896, -84.469992],
    "cams": [{
        "id": "cctv_5201",
        "stream": "/georgiavss2/gdot-cam-051.stream/playlist.m3u8",
        "name": "SR 166 : DODSON DR"
    }]
}, {
    "coord": [32.404122, -84.922416],
    "cams": [{
        "id": "cctv_13577",
        "url": "/georgiasnapshots/COLU-CAM-302.jpg",
        "name": "I-185 : Victory Dr"
    }]
}, {
    "coord": [33.499664, -82.0122],
    "cams": [{
        "id": "cctv_32844",
        "url": "/georgiasnapshots/AUG-CAM-232.jpg",
        "name": "Washington Rd. : Woodbine Rd./East Vineland"
    }]
}, {
    "coord": [32.957612, -83.81188],
    "cams": [{
        "id": "cctv_15326",
        "stream": "/georgiavss5/bibb-cam-043.stream/playlist.m3u8",
        "name": "I-475 : I-75N"
    }]
}, {
    "coord": [33.542934, -84.268904],
    "cams": [{
        "id": "cctv_13338",
        "stream": "/georgiavss4/gdot-cam-729.stream/playlist.m3u8",
        "name": "I-75 : AT I-675"
    }]
}, {
    "coord": [33.862228, -84.3072],
    "cams": [{
        "id": "cctv_13592",
        "stream": "/georgiavss1/cham-cam-001.stream/playlist.m3u8",
        "name": "SR 13 / Buford Hwy : Plaza Fiesta"
    }]
}, {
    "coord": [33.512242, -82.043352],
    "cams": [{
        "id": "cctv_32857",
        "url": "/georgiasnapshots/AUG-CAM-760.jpg",
        "name": "Washington Rd. : I-20 WB Ramp"
    }]
}, {
    "coord": [33.855868, -84.369224],
    "cams": [{
        "id": "cctv_12960",
        "stream": "/georgiavss4/gdot-cam-816.stream/playlist.m3u8",
        "name": "GA 400 : LENOX RD/SR 141 CONN"
    }]
}, {
    "coord": [33.954364, -84.14148],
    "cams": [{
        "id": "cctv_10202",
        "url": "/georgiasnapshots/GWIN-CAM-028.jpg",
        "name": "STEVE REYNOLDS BLVD : SATELLITE BLVD"
    }]
}, {
    "coord": [33.828128, -84.344248],
    "cams": [{
        "id": "cctv_5122",
        "stream": "/georgiavss2/gdot-cam-039.stream/playlist.m3u8",
        "name": "I-85 : S OF N DRUID HILLS RD"
    }]
}, {
    "coord": [33.841908, -84.520608],
    "cams": [{
        "id": "cctv_7322",
        "url": "/georgiasnapshots/COBB-CAM-062.jpg",
        "name": "EW Connector : CMS (Highland Ridge)"
    }]
}, {
    "coord": [33.810804, -84.57208],
    "cams": [{
        "id": "cctv_13053",
        "url": "/georgiasnapshots/COBB-CAM-076.jpg",
        "name": "Mableton Pkwy : Old Alabama Rd"
    }]
}, {
    "coord": [31.96044, -83.754504],
    "cams": [{
        "id": "cctv_16003",
        "url": "/georgiasnapshots/GDOT-CAM-SR30-008.jpg",
        "name": "SR 30 : I-75 S Ramp"
    }]
}, {
    "coord": [34.078188, -84.625736],
    "cams": [{
        "id": "cctv_15249",
        "stream": "/georgiavss3/gdot-cam-534.stream/playlist.m3u8",
        "name": "I-75 : S OF WOODSTOCK RD"
    }]
}, {
    "coord": [33.4738, -84.336704],
    "cams": [{
        "id": "cctv_10481",
        "url": "/georgiasnapshots/CLAY-CAM-131.jpg",
        "name": "SR 3 TB : TARA RD"
    }]
}, {
    "coord": [33.62986, -84.014352],
    "cams": [{
        "id": "cctv_13668",
        "url": "/georgiasnapshots/ROCK-CAM-103.jpg",
        "name": "SR 20 / McDonough Hwy : Miller Chapel Rd / Jimson Way"
    }]
}];
