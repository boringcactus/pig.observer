const DEFAULTS = ["11633", "10630", "11066", "137", "9436", "10717", "9422", "10716", "9423", "185", '9560', "9777"];
const MANUAL_CACHE_BUST = false;
const CAMERAS = [{
    "coord": [38.7498, -112.10182],
    "cams": [{
        "id": "12433",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17224.jpeg",
        "name": "1300 S / SR-120 @ Technology Dr / College Ave, RFD"
    }]
}, {
    "coord": [38.91192, -111.88812],
    "cams": [{
        "id": "11431",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16240.jpeg",
        "name": "I-70 EB @ Sage Flat Rd / MP 54.4, SLA"
    }]
}, {
    "coord": [38.93284, -111.85445],
    "cams": [{
        "id": "11718",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16526.jpeg",
        "name": "I-70 EB @ State St / US-89 / MP 56.73, SLA"
    }]
}, {
    "coord": [38.83975, -112.02217],
    "cams": [{
        "id": "11300",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-70-MP45%20all.gif",
        "name": "I-70 Liveview @ Milepost 45.05, SE"
    }]
}, {
    "coord": [38.87622, -111.95875],
    "cams": [{
        "id": "11483",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-70%20SR-24.gif",
        "name": "I-70 RWIS @ SR-24 / MP 49.33, SIG"
    }]
}, {
    "coord": [38.7725, -112.0986],
    "cams": [{
        "id": "12025",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-70%20MP%2038%20Richfield.gif",
        "name": "I-70 RWIS EB @ 300 N / MP 38.77, RFD"
    }]
}, {
    "coord": [38.74941, -112.08922],
    "cams": [{
        "id": "9782",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14492.jpeg",
        "name": "Main St / SR-118 / SR-120 @ 1300 S / SR-120, RFD"
    }]
}, {
    "coord": [38.77213, -112.08554],
    "cams": [{
        "id": "9922",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14631.jpeg",
        "name": "Main St / SR-120 @ 300 N / SR-118, RFD"
    }]
}, {
    "coord": [38.75677, -112.08583],
    "cams": [{
        "id": "9920",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14629.jpeg",
        "name": "Main St / SR-120 @ 800 S, RFD"
    }]
}, {
    "coord": [38.76793, -112.08567],
    "cams": [{
        "id": "9921",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14630.jpeg",
        "name": "Main St / SR-120 @ Center St, RFD"
    }]
}, {
    "coord": [38.6944, -111.87136],
    "cams": [{
        "id": "10837",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-24-mp-22.gif",
        "name": "SR-24 Liveview NB @ Milepost 22.45, SE"
    }]
}, {
    "coord": [39.97246, -111.335651],
    "cams": [{
        "id": "244",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux244.jpeg",
        "name": "US-6 @ Cedar Haven / Sheep Creek Rd / MP 195.08, UT"
    }]
}, {
    "coord": [39.95004, -111.21818],
    "cams": [{
        "id": "214",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux214.jpeg",
        "name": "US-6 @ Tie Fork Rest Area / MP 202.05, UT"
    }]
}, {
    "coord": [39.994857, -111.469002],
    "cams": [{
        "id": "243",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux243.jpeg",
        "name": "US-6 @ US-89 / MP 187.47, UT"
    }]
}, {
    "coord": [39.989, -111.37],
    "cams": [{
        "id": "10778",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20US6%20Red%20Narrow.gif",
        "name": "US-6 RWIS EB @ Red Narrows / MP 192.9, UT"
    }]
}, {
    "coord": [40.558726, -111.902968],
    "cams": [{
        "id": "12263",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17062.jpeg",
        "name": "10600 S / South Jordan Pkwy / SR-151 @ 400 W / Jordan Gateway, SJO"
    }]
}, {
    "coord": [40.55874, -111.91042],
    "cams": [{
        "id": "11966",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16774.jpeg",
        "name": "10600 S / South Jordan Pkwy / SR-151 @ River Front Pkwy / 700 W, SJO"
    }]
}, {
    "coord": [40.52678, -111.88629],
    "cams": [{
        "id": "10678",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15487.jpeg",
        "name": "12300 S / SR-71 @ 150 E, DPR"
    }]
}, {
    "coord": [40.52656, -111.89895],
    "cams": [{
        "id": "10575",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15384.jpeg",
        "name": "12300 S / SR-71 @ 265 W, DPR"
    }]
}, {
    "coord": [40.52698, -111.87187],
    "cams": [{
        "id": "304",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux304.jpeg",
        "name": "12300 S / SR-71 @ 700 E / SR-71, DPR"
    }]
}, {
    "coord": [40.52263, -112.01128],
    "cams": [{
        "id": "11967",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16775.jpeg",
        "name": "12600 S / Herriman Blvd @ Main St / 5040 W, HRR"
    }]
}, {
    "coord": [40.5225, -111.95755],
    "cams": [{
        "id": "11827",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16635.jpeg",
        "name": "12600 S / SR-71 @ 2700 W / Silverwolf Blvd, RVT"
    }]
}, {
    "coord": [40.52209, -111.9899],
    "cams": [{
        "id": "11512",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16321.jpeg",
        "name": "12600 S @ 4150 W, RVT"
    }]
}, {
    "coord": [40.52228, -111.9999],
    "cams": [{
        "id": "11026",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15835.jpeg",
        "name": "12600 S @ Legacy Ranch Blvd / 4570 W, RVT"
    }]
}, {
    "coord": [40.482224, -111.896964],
    "cams": [{
        "id": "11638",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16447.jpeg",
        "name": "14600 S / Highland Dr / SR-140 @ Minuteman Dr, DPR"
    }]
}, {
    "coord": [40.48544, -111.90034],
    "cams": [{
        "id": "11507",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16316.jpeg",
        "name": "14600 S / SR-140 @ Pony Express Dr / SR-287, DPR"
    }]
}, {
    "coord": [40.68702, -111.89719],
    "cams": [{
        "id": "191",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux191.jpeg",
        "name": "3900 S @ 210 W / Howick St, SSL"
    }]
}, {
    "coord": [40.68694, -111.82467],
    "cams": [{
        "id": "11947",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16755.jpeg",
        "name": "3900 S @ 2300 E, HDY"
    }]
}, {
    "coord": [40.686822, -111.905668],
    "cams": [{
        "id": "11946",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16754.jpeg",
        "name": "3900 S @ 500 W, SSL"
    }]
}, {
    "coord": [40.68223, -111.9674],
    "cams": [{
        "id": "12190",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16998.jpeg",
        "name": "4100 S @ 3200 W, WVC"
    }]
}, {
    "coord": [40.68205, -112.00569],
    "cams": [{
        "id": "9715",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux349.jpeg",
        "name": "4100 S @ 4800 W, WVC (Local)"
    }]
}, {
    "coord": [40.6742, -111.84159],
    "cams": [{
        "id": "9645",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux346.jpeg",
        "name": "4500 S / SR-266 @ Highland Dr, HDY"
    }]
}, {
    "coord": [40.6676, -111.95795],
    "cams": [{
        "id": "9644",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux345.jpeg",
        "name": "4700 S @ 2700 W, TAY"
    }]
}, {
    "coord": [40.654754, -111.899772],
    "cams": [{
        "id": "12027",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16835.jpeg",
        "name": "5300 S / SR-173 @ 320 W / Commerce Dr, MUR"
    }]
}, {
    "coord": [40.65306, -111.94832],
    "cams": [{
        "id": "10889",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15698.jpeg",
        "name": "5400 S / SR-173 @ 2200 W, TAY"
    }]
}, {
    "coord": [40.65302, -111.95788],
    "cams": [{
        "id": "10890",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15699.jpeg",
        "name": "5400 S / SR-173 @ 2700 W, TAY"
    }]
}, {
    "coord": [40.65306, -111.967354],
    "cams": [{
        "id": "10891",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15700.jpeg",
        "name": "5400 S / SR-173 @ 3200 W, TAY"
    }]
}, {
    "coord": [40.653024, -111.976941],
    "cams": [{
        "id": "10892",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15701.jpeg",
        "name": "5400 S / SR-173 @ 3600 W / Whitewood Dr, TAY"
    }]
}, {
    "coord": [40.65294, -111.97953],
    "cams": [{
        "id": "12395",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17194.jpeg",
        "name": "5400 S / SR-173 @ 3700 W, TAY"
    }]
}, {
    "coord": [40.65321, -111.98247],
    "cams": [{
        "id": "12394",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17193.jpeg",
        "name": "5400 S / SR-173 @ 3800 W, TAY"
    }]
}, {
    "coord": [40.65289, -111.98678],
    "cams": [{
        "id": "11068",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15877.jpeg",
        "name": "5400 S / SR-173 @ 4015 W, TAY"
    }]
}, {
    "coord": [40.65328, -112.03574],
    "cams": [{
        "id": "11511",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16320.jpeg",
        "name": "5400 S / SR-173 @ 6055 W / Upper Ridge Rd / USANA, WVC"
    }]
}, {
    "coord": [40.65387, -111.91046],
    "cams": [{
        "id": "11613",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16422.jpeg",
        "name": "5400 S / SR-173 @ 700 W / Murray Blvd, MUR"
    }]
}, {
    "coord": [40.65256, -111.99658],
    "cams": [{
        "id": "11067",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15876.jpeg",
        "name": "5415 S / 5400 S / SR-173 @ 4420 W, KRN"
    }]
}, {
    "coord": [40.65262, -112.00598],
    "cams": [{
        "id": "192",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux192.jpeg",
        "name": "5415 S / 5400 S / SR-173 @ 4800 W / Charlotte Ave, KRN"
    }]
}, {
    "coord": [40.68222, -112.02454],
    "cams": [{
        "id": "12055",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16863.jpeg",
        "name": "5600 W / SR-172 @ 4100 S, WVC"
    }]
}, {
    "coord": [40.65318, -112.02443],
    "cams": [{
        "id": "11510",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16319.jpeg",
        "name": "5600 W / SR-172 @ 5400 S / SR-173, SL"
    }]
}, {
    "coord": [40.602173, -112.024403],
    "cams": [{
        "id": "12231",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17030.jpeg",
        "name": "5600 W @ 8200 S, WJD"
    }]
}, {
    "coord": [40.63613, -111.80567],
    "cams": [{
        "id": "11950",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16758.jpeg",
        "name": "6200 S / SR-190 @ 3000 E, HDY"
    }]
}, {
    "coord": [40.63255, -111.79972],
    "cams": [{
        "id": "9897",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14606.jpeg",
        "name": "6200 S / Wasatch Blvd / SR-190 @ Wasatch Blvd / Millrock Dr, CWH"
    }]
}, {
    "coord": [40.638514, -111.944439],
    "cams": [{
        "id": "10553",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15362.jpeg",
        "name": "6200 S @ Jordan Canal Rd / Margray Dr, TAY"
    }]
}, {
    "coord": [40.55872, -111.87216],
    "cams": [{
        "id": "9776",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14486.jpeg",
        "name": "700 E / SR-71 @ 10600 S, SND"
    }]
}, {
    "coord": [40.551519, -111.872178],
    "cams": [{
        "id": "10674",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15483.jpeg",
        "name": "700 E / SR-71 @ 11000 S, SND"
    }]
}, {
    "coord": [40.5443, -111.872],
    "cams": [{
        "id": "10873",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15682.jpeg",
        "name": "700 E / SR-71 @ 11400 S, SND"
    }]
}, {
    "coord": [40.686902, -111.871644],
    "cams": [{
        "id": "11856",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16664.jpeg",
        "name": "700 E / SR-71 @ 3900 S, MCK"
    }]
}, {
    "coord": [40.67432, -111.87144],
    "cams": [{
        "id": "9631",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux311.jpeg",
        "name": "700 E / SR-71 @ 4500 S / SR-266, MUR"
    }]
}, {
    "coord": [40.5882, -111.87224],
    "cams": [{
        "id": "10535",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15344.jpeg",
        "name": "700 E / SR-71 @ 9000 S / SR-209, SND"
    }]
}, {
    "coord": [40.57329, -111.87216],
    "cams": [{
        "id": "9775",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14485.jpeg",
        "name": "700 E / SR-71 @ 9800 S / Sego Lily Dr, SND"
    }]
}, {
    "coord": [40.621051, -111.910479],
    "cams": [{
        "id": "12476",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17267.jpeg",
        "name": "7200 S / Jordan River Blvd / SR-48 @ 700 W, MDV"
    }]
}, {
    "coord": [40.609648, -112.024606],
    "cams": [{
        "id": "12230",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17029.jpeg",
        "name": "7800 S @ 5600 W, WJD"
    }]
}, {
    "coord": [40.60963, -111.99747],
    "cams": [{
        "id": "11513",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16322.jpeg",
        "name": "7800 S @ Airport Rd / 4450 W, WJD"
    }]
}, {
    "coord": [40.649683, -111.86613],
    "cams": [{
        "id": "12262",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17061.jpeg",
        "name": "900 E / SR-71 @ 5600 S, MUR"
    }]
}, {
    "coord": [40.62195, -111.86617],
    "cams": [{
        "id": "11775",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16583.jpeg",
        "name": "900 E / SR-71 @ Fort Union Blvd / 7100 S, MDV"
    }]
}, {
    "coord": [40.66559, -111.86484],
    "cams": [{
        "id": "9245",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux332.jpeg",
        "name": "900 E / SR-71 @ Van Winkle Expwy / SR-152, MUR"
    }]
}, {
    "coord": [40.58794, -111.88601],
    "cams": [{
        "id": "12450",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17241.jpeg",
        "name": "9000 S / SR-209 @ 150 E / Trax, SND"
    }]
}, {
    "coord": [40.58769, -111.98663],
    "cams": [{
        "id": "12232",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17031.jpeg",
        "name": "9000 S / SR-209 @ 4000 W, WJD"
    }]
}, {
    "coord": [40.5878, -111.91023],
    "cams": [{
        "id": "9642",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux303.jpeg",
        "name": "9000 S / SR-209 @ 700 W, SND"
    }]
}, {
    "coord": [40.57908, -111.82393],
    "cams": [{
        "id": "11299",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16108.jpeg",
        "name": "9400 S / Little Cottonwood Rd / SR-209 @ 2300 E / Quail Hollow Dr, SND"
    }]
}, {
    "coord": [40.58052, -111.85322],
    "cams": [{
        "id": "9347",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux336.jpeg",
        "name": "9400 S / SR-209 @ 1300 E, SND"
    }]
}, {
    "coord": [40.5794, -111.83314],
    "cams": [{
        "id": "9904",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14613.jpeg",
        "name": "9400 S / SR-209 @ 2000 E / Highland Dr, SND"
    }]
}, {
    "coord": [40.60268, -112.0577],
    "cams": [{
        "id": "11468",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16277.jpeg",
        "name": "Bacchus Hwy / SR-111 @ 8200 S, WJD"
    }]
}, {
    "coord": [40.57581, -112.06143],
    "cams": [{
        "id": "11253",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-111mile0-all.gif",
        "name": "Bacchus Hwy / SR-111 Liveview NB @ New Bingham Hwy / MP 0, WJD"
    }]
}, {
    "coord": [40.63522, -112.05592],
    "cams": [{
        "id": "10755",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR111%20@%20Bacchus.gif",
        "name": "Bacchus Hwy / SR-111 RWIS SB @ 6400 S / MP 4.15, WVC"
    }]
}, {
    "coord": [40.500803, -111.885112],
    "cams": [{
        "id": "11951",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16759.jpeg",
        "name": "Bangerter Hwy / 200 E / SR-154 @ 13800 S, DPR"
    }]
}, {
    "coord": [40.56199, -111.97692],
    "cams": [{
        "id": "9770",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14480.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 10400 S / South Jordan Pkwy / SR-151, SJO"
    }]
}, {
    "coord": [40.54756, -111.98294],
    "cams": [{
        "id": "12447",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17238.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 11200 S, SJO"
    }]
}, {
    "coord": [40.544316, -111.984498],
    "cams": [{
        "id": "9769",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14479.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 11400 S, SJO"
    }]
}, {
    "coord": [40.54127, -111.98464],
    "cams": [{
        "id": "12405",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17204.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 11500 S, SJO"
    }]
}, {
    "coord": [40.52221, -111.98412],
    "cams": [{
        "id": "306",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux306.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 12600 S / SR-71, RVT"
    }]
}, {
    "coord": [40.50772, -111.98259],
    "cams": [{
        "id": "9768",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14478.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 13400 S, RVT"
    }]
}, {
    "coord": [40.50413, -111.89669],
    "cams": [{
        "id": "11881",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16689.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 200 W / MP 0.78, DPR"
    }]
}, {
    "coord": [40.50039, -111.95768],
    "cams": [{
        "id": "9767",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14477.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 2700 W, BLF"
    }]
}, {
    "coord": [40.50402, -111.90076],
    "cams": [{
        "id": "11880",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16688.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 300 W / MP 1.0, DPR"
    }]
}, {
    "coord": [40.68239, -111.98188],
    "cams": [{
        "id": "265",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux265.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 4100 S, WVC"
    }]
}, {
    "coord": [40.66735, -111.98115],
    "cams": [{
        "id": "264",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux264.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 4700 S, TAY"
    }]
}, {
    "coord": [40.50235, -111.90468],
    "cams": [{
        "id": "11879",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16687.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 500 W / MP 1.25, DPR"
    }]
}, {
    "coord": [40.65727, -111.9822],
    "cams": [{
        "id": "263",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux263.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 5200 S, TAY"
    }]
}, {
    "coord": [40.65464, -111.98131],
    "cams": [{
        "id": "12387",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17186.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 5300 S, TAY"
    }]
}, {
    "coord": [40.64941, -111.97998],
    "cams": [{
        "id": "12386",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17185.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 5600 S, TAY"
    }]
}, {
    "coord": [40.64758, -111.97864],
    "cams": [{
        "id": "12396",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17195.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 5700 S, TAY"
    }]
}, {
    "coord": [40.501, -111.90848],
    "cams": [{
        "id": "11878",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16686.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 600 W / MP 1.45, DPR"
    }]
}, {
    "coord": [40.63862, -111.9762],
    "cams": [{
        "id": "193",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux193.jpg",
        "name": "Bangerter Hwy / SR-154 @ 6200 S, WJD"
    }]
}, {
    "coord": [40.62595, -111.97678],
    "cams": [{
        "id": "12397",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17196.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 6900 S, WJD"
    }]
}, {
    "coord": [40.4992, -111.91008],
    "cams": [{
        "id": "11877",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16685.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 700 W / MP 1.6, DPR"
    }]
}, {
    "coord": [40.621759, -111.976691],
    "cams": [{
        "id": "12399",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17198.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 7100 S, WJD"
    }]
}, {
    "coord": [40.60931, -111.97615],
    "cams": [{
        "id": "261",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux261.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 7800 S / SR-48, WJD"
    }]
}, {
    "coord": [40.49681, -111.91378],
    "cams": [{
        "id": "11876",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16684.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 800 W / MP 1.86, DPR"
    }]
}, {
    "coord": [40.58985, -111.97759],
    "cams": [{
        "id": "12400",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17199.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 8900 S, WJD"
    }]
}, {
    "coord": [40.5851, -111.9778],
    "cams": [{
        "id": "12402",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17201.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 9150 S, WJD"
    }]
}, {
    "coord": [40.57334, -111.97719],
    "cams": [{
        "id": "9771",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14481.jpg",
        "name": "Bangerter Hwy / SR-154 @ 9800 S, SJO"
    }]
}, {
    "coord": [40.5003, -111.93915],
    "cams": [{
        "id": "9766",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14476.jpeg",
        "name": "Bangerter Hwy / SR-154 EB @ Redwood Rd / SR-68, BLF"
    }]
}, {
    "coord": [40.624202, -111.975842],
    "cams": [{
        "id": "262",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux262.jpeg",
        "name": "Bangerter Hwy / SR-154 NB @ 7000 S, WJD"
    }]
}, {
    "coord": [40.58801, -111.977],
    "cams": [{
        "id": "12401",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17200.jpeg",
        "name": "Bangerter Hwy / SR-154 NB @ 9000 S / SR-209, WJD"
    }]
}, {
    "coord": [40.6242, -111.97707],
    "cams": [{
        "id": "12398",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17197.jpeg",
        "name": "Bangerter Hwy / SR-154 SB @ 7000 S / Jordan Landing Blvd, WJD"
    }]
}, {
    "coord": [40.587641, -111.978138],
    "cams": [{
        "id": "260",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux260.jpeg",
        "name": "Bangerter Hwy / SR-154 SB @ 9000 S / SR-209, WJD"
    }]
}, {
    "coord": [40.50104, -111.93834],
    "cams": [{
        "id": "11603",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16412.jpeg",
        "name": "Bangerter Hwy / SR-154 WB @ Redwood Rd / SR-68, RVT"
    }]
}, {
    "coord": [40.648236, -111.662442],
    "cams": [{
        "id": "11405",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16214.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ Butler / MP 10, SL"
    }]
}, {
    "coord": [40.65035, -111.65022],
    "cams": [{
        "id": "11406",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16215.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ Cardiff Fork / MP 10.74, SL"
    }]
}, {
    "coord": [40.62426, -111.75071],
    "cams": [{
        "id": "11403",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16212.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ Dogwood / MP 4.1, SL"
    }]
}, {
    "coord": [40.63338, -111.72272],
    "cams": [{
        "id": "11404",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16213.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ S-Curves / MP 6.38, SL"
    }]
}, {
    "coord": [40.63774, -111.62091],
    "cams": [{
        "id": "11407",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16216.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ Silver Fork / MP 12.54, SL"
    }]
}, {
    "coord": [40.62628, -111.85473],
    "cams": [{
        "id": "12021",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16829.jpeg",
        "name": "Fort Union Blvd / 6910 S @ 1300 E, CWH"
    }]
}, {
    "coord": [40.62387, -111.82458],
    "cams": [{
        "id": "12022",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16830.jpeg",
        "name": "Fort Union Blvd / 7000 S @ 2300 E, CWH"
    }]
}, {
    "coord": [40.615336, -111.833568],
    "cams": [{
        "id": "11945",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16753.jpeg",
        "name": "Highland Dr / 2000 E @ Bengal Blvd / Parkridge Dr, CWH"
    }]
}, {
    "coord": [40.62406, -111.83431],
    "cams": [{
        "id": "9643",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux344.jpeg",
        "name": "Highland Dr / 2000 E @ Fort Union Blvd / 7000 S, CWH"
    }]
}, {
    "coord": [40.63837, -111.83419],
    "cams": [{
        "id": "11964",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16772.jpeg",
        "name": "Highland Dr / Van Winkle Expwy / SR-152 @ 6200 S, HDY"
    }]
}, {
    "coord": [40.68712, -111.84497],
    "cams": [{
        "id": "9647",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux348.jpeg",
        "name": "Highland Dr @ 3900 S, SL"
    }]
}, {
    "coord": [40.56697, -111.89907],
    "cams": [{
        "id": "82",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux82.jpeg",
        "name": "I-15 NB @ 10200 S / MP 294.2, SND"
    }]
}, {
    "coord": [40.55949, -111.89728],
    "cams": [{
        "id": "11942",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16750.jpeg",
        "name": "I-15 NB @ 10600 S / SR-151 / MP 293.65, SND"
    }]
}, {
    "coord": [40.55918, -111.8971],
    "cams": [{
        "id": "11943",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16751.jpeg",
        "name": "I-15 NB @ 10600 S / SR-151 / MP 293.65, SND (Tunnel)"
    }]
}, {
    "coord": [40.54042, -111.89324],
    "cams": [{
        "id": "10694",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15503.jpeg",
        "name": "I-15 NB @ 11500 S / MP 292.35, DPR"
    }]
}, {
    "coord": [40.53508, -111.89215],
    "cams": [{
        "id": "9656",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux356.jpeg",
        "name": "I-15 NB @ 11900 S / MP 291.98, DPR"
    }]
}, {
    "coord": [40.52727, -111.89021],
    "cams": [{
        "id": "9653",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux353.jpeg",
        "name": "I-15 NB @ 12300 S / SR-71 / MP 291.4, DPR"
    }]
}, {
    "coord": [40.49727, -111.89078],
    "cams": [{
        "id": "11721",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16529.jpeg",
        "name": "I-15 NB @ 14000 S / MP 289.34, DPR"
    }]
}, {
    "coord": [40.4866, -111.89563],
    "cams": [{
        "id": "11724",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16532.jpeg",
        "name": "I-15 NB @ 14500 S / MP 288.54, DPR"
    }]
}, {
    "coord": [40.47534, -111.90533],
    "cams": [{
        "id": "11727",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16535.jpeg",
        "name": "I-15 NB @ 15200 S / MP 287.6, DPR"
    }]
}, {
    "coord": [40.4706, -111.90863],
    "cams": [{
        "id": "11728",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16536.jpeg",
        "name": "I-15 NB @ 15400 S / MP 287.23, DPR"
    }]
}, {
    "coord": [40.68973, -111.90266],
    "cams": [{
        "id": "100",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux100.jpeg",
        "name": "I-15 NB @ 3750 S / MP 302.75, SSL"
    }]
}, {
    "coord": [40.43474, -111.89349],
    "cams": [{
        "id": "11735",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16543.jpeg",
        "name": "I-15 NB @ 3800 N / Adobe Way / MP 284.3, LHI"
    }]
}, {
    "coord": [40.68283, -111.90188],
    "cams": [{
        "id": "99",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux99.jpeg",
        "name": "I-15 NB @ 4100 S / MP 302.25, MUR"
    }]
}, {
    "coord": [40.43892, -111.89791],
    "cams": [{
        "id": "11734",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16542.jpeg",
        "name": "I-15 NB @ 4200 N / MP 284.65, LHI"
    }]
}, {
    "coord": [40.67493, -111.90051],
    "cams": [{
        "id": "98",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux98.jpeg",
        "name": "I-15 NB @ 4500 S / SR-266 / MP 301.71, MUR"
    }]
}, {
    "coord": [40.66468, -111.90082],
    "cams": [{
        "id": "96",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux96.jpeg",
        "name": "I-15 NB @ 5000 S / MP 301, MUR"
    }]
}, {
    "coord": [40.65912, -111.90085],
    "cams": [{
        "id": "95",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux95.jpeg",
        "name": "I-15 NB @ 5200 S / MP 300.63, MUR"
    }]
}, {
    "coord": [40.65053, -111.90166],
    "cams": [{
        "id": "93",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux93.jpeg",
        "name": "I-15 NB @ 5550 S / MP 300, MUR"
    }]
}, {
    "coord": [40.62848, -111.90272],
    "cams": [{
        "id": "90",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux90.jpeg",
        "name": "I-15 NB @ 6600 S / MP 298.5, MDV"
    }]
}, {
    "coord": [40.62503, -111.9024],
    "cams": [{
        "id": "12404",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17203.jpeg",
        "name": "I-15 NB @ 6950 S / MP 298.25, MDV"
    }]
}, {
    "coord": [40.60558, -111.9045],
    "cams": [{
        "id": "87",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux87.jpeg",
        "name": "I-15 NB @ 8000 S / MP 296.9, MDV"
    }]
}, {
    "coord": [40.58856, -111.89897],
    "cams": [{
        "id": "85",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux85.jpeg",
        "name": "I-15 NB @ 9000 S / SR-209 / MP 295.66, SND"
    }]
}, {
    "coord": [40.57506, -111.89957],
    "cams": [{
        "id": "83",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux83.jpeg",
        "name": "I-15 NB @ 9600 S / MP 294.76, SND"
    }]
}, {
    "coord": [40.43097, -111.89101],
    "cams": [{
        "id": "250",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux250.jpeg",
        "name": "I-15 NB @ Highland Alpine Exit / SR-92 / Timpanogos Hwy / Club House Dr / MP 284, LHI"
    }]
}, {
    "coord": [40.55816, -111.89932],
    "cams": [{
        "id": "81",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux81.jpeg",
        "name": "I-15 SB @ 10600 S / South Jordan Pkwy / SR-151 / MP 293.6, SJO"
    }]
}, {
    "coord": [40.55017, -111.89676],
    "cams": [{
        "id": "9654",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux357.jpeg",
        "name": "I-15 SB @ 11000 S / MP 293, SJO"
    }]
}, {
    "coord": [40.54467, -111.89566],
    "cams": [{
        "id": "10695",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15504.jpeg",
        "name": "I-15 SB @ 11400 S / MP 292.62, SJO"
    }]
}, {
    "coord": [40.52338, -111.8916],
    "cams": [{
        "id": "12403",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17202.jpeg",
        "name": "I-15 SB @ 12500 S / MP 291.17, DPR"
    }]
}, {
    "coord": [40.52223, -111.89154],
    "cams": [{
        "id": "11752",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16560.jpeg",
        "name": "I-15 SB @ 12600 S / MP 291.1, DPR"
    }]
}, {
    "coord": [40.51511, -111.89189],
    "cams": [{
        "id": "11751",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16559.jpeg",
        "name": "I-15 SB @ 13000 S / MP 290.6, DPR"
    }]
}, {
    "coord": [40.50782, -111.89181],
    "cams": [{
        "id": "11750",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16558.jpeg",
        "name": "I-15 SB @ 13400 S / MP 290.08, DPR"
    }]
}, {
    "coord": [40.49354, -111.89156],
    "cams": [{
        "id": "11722",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16530.jpeg",
        "name": "I-15 SB @ 14200 S / MP 289.09, DPR"
    }]
}, {
    "coord": [40.49036, -111.89306],
    "cams": [{
        "id": "11723",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16531.jpeg",
        "name": "I-15 SB @ 14300 S / MP 288.84, DPR"
    }]
}, {
    "coord": [40.483631, -111.899755],
    "cams": [{
        "id": "11725",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16533.jpeg",
        "name": "I-15 SB @ 14600 S / Highland Dr / SR-140 / MP 288.3, BLF"
    }]
}, {
    "coord": [40.47961, -111.90345],
    "cams": [{
        "id": "11726",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16534.jpeg",
        "name": "I-15 SB @ 15000 S / MP 287.91, BLF"
    }]
}, {
    "coord": [40.46308, -111.91422],
    "cams": [{
        "id": "11729",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16537.jpeg",
        "name": "I-15 SB @ 15800 S / MP 286.64, BLF"
    }]
}, {
    "coord": [40.45787, -111.91483],
    "cams": [{
        "id": "11730",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16538.jpeg",
        "name": "I-15 SB @ 16200 S / MP 286.3, BLF"
    }]
}, {
    "coord": [40.6739, -111.90247],
    "cams": [{
        "id": "97",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux97.jpeg",
        "name": "I-15 SB @ 4500 S / SR-266 / MP 301.65, MUR"
    }]
}, {
    "coord": [40.44336, -111.90501],
    "cams": [{
        "id": "11733",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16541.jpeg",
        "name": "I-15 SB @ 4600 N / MP 285.12, LHI"
    }]
}, {
    "coord": [40.44583, -111.90849],
    "cams": [{
        "id": "11732",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16540.jpeg",
        "name": "I-15 SB @ 4800 N / MP 285.37, LHI"
    }]
}, {
    "coord": [40.65522, -111.90266],
    "cams": [{
        "id": "9623",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux94.jpeg",
        "name": "I-15 SB @ 5300 S / SR-173 / MP 300.35, MUR"
    }]
}, {
    "coord": [40.64556, -111.90313],
    "cams": [{
        "id": "92",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux92.jpeg",
        "name": "I-15 SB @ 5800 S / MP 299.7, MUR"
    }]
}, {
    "coord": [40.61633, -111.90613],
    "cams": [{
        "id": "88",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux88.jpeg",
        "name": "I-15 SB @ 7400 S / MP 297.6, MDV"
    }]
}, {
    "coord": [40.59808, -111.904],
    "cams": [{
        "id": "86",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux86.jpeg",
        "name": "I-15 SB @ 8400 S / MP 296.4, MDV"
    }]
}, {
    "coord": [40.5859, -111.90085],
    "cams": [{
        "id": "84",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux84.jpeg",
        "name": "I-15 SB @ 9100 S / MP 295.48, SND"
    }]
}, {
    "coord": [40.5039, -111.89173],
    "cams": [{
        "id": "9700",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14408.jpeg",
        "name": "I-15 SB @ Bangerter Hwy / SR-154 / MP 289.83, DPR"
    }]
}, {
    "coord": [40.63661, -111.90504],
    "cams": [{
        "id": "91",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux91.jpeg",
        "name": "I-15 SB @ I-215 South Interchange / MP 299, MUR"
    }]
}, {
    "coord": [40.45056, -111.91364],
    "cams": [{
        "id": "11731",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16539.jpeg",
        "name": "I-15 SB @ Point of the Mountain / MP 285.78, UT"
    }]
}, {
    "coord": [40.68937, -111.7971],
    "cams": [{
        "id": "2",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux2.jpeg",
        "name": "I-215 E NB @ 3800 S / MP 2.58, MCK"
    }]
}, {
    "coord": [40.68265, -111.79714],
    "cams": [{
        "id": "4",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux4.jpeg",
        "name": "I-215 E NB @ 4100 S / MP 3.05, MCK"
    }]
}, {
    "coord": [40.66625, -111.80545],
    "cams": [{
        "id": "6",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux6.jpeg",
        "name": "I-215 E NB @ 4800 S / MP 4.27, HDY"
    }]
}, {
    "coord": [40.65701, -111.80678],
    "cams": [{
        "id": "7",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux7.jpeg",
        "name": "I-215 E NB @ 5200 S / MP 4.65, HDY"
    }]
}, {
    "coord": [40.64836, -111.80766],
    "cams": [{
        "id": "8",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux8.jpeg",
        "name": "I-215 E NB @ 5650 S / MP 5.59, HDY"
    }]
}, {
    "coord": [40.63989, -111.80786],
    "cams": [{
        "id": "12407",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17206.jpeg",
        "name": "I-215 E NB @ 6100 S / MP 6.1, HDY"
    }]
}, {
    "coord": [40.63746, -111.80779],
    "cams": [{
        "id": "9",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux9.jpeg",
        "name": "I-215 E NB @ 6200 S / SR-190 / MP 6.34, HDY"
    }]
}, {
    "coord": [40.63451, -111.81117],
    "cams": [{
        "id": "10",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux10.jpeg",
        "name": "I-215 E NB @ 6400 S / MP 6.56, HDY"
    }]
}, {
    "coord": [40.68734, -111.7978],
    "cams": [{
        "id": "3",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux3.jpeg",
        "name": "I-215 E SB @ 3900 S / MP 2.73, MCK"
    }]
}, {
    "coord": [40.674755, -111.802909],
    "cams": [{
        "id": "5",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5.jpeg",
        "name": "I-215 E SB @ 4500 S / SR-266 / MP 3.67, MCK"
    }]
}, {
    "coord": [40.63763, -111.92103],
    "cams": [{
        "id": "21",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux21.jpeg",
        "name": "I-215 S EB @ 1200 W / Murray Pkwy Ave / MP 12.34, MUR"
    }]
}, {
    "coord": [40.63136, -111.83796],
    "cams": [{
        "id": "13",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux13.jpeg",
        "name": "I-215 S EB @ 1900 E / MP 7.98, CWH"
    }]
}, {
    "coord": [40.64688, -111.94916],
    "cams": [{
        "id": "25",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux25.jpeg",
        "name": "I-215 S EB @ 2200 W / MP 14.06, TAY"
    }]
}, {
    "coord": [40.63424, -111.82537],
    "cams": [{
        "id": "12023",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16831.jpeg",
        "name": "I-215 S EB @ 2300 E / MP 7.3, CWH"
    }]
}, {
    "coord": [40.63072, -111.88173],
    "cams": [{
        "id": "17",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17.jpeg",
        "name": "I-215 S EB @ 300 E / MP 10.18, MDV"
    }]
}, {
    "coord": [40.63568, -111.91044],
    "cams": [{
        "id": "20",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux20.jpeg",
        "name": "I-215 S EB @ 700 W / MP 11.8, MUR"
    }]
}, {
    "coord": [40.64253, -111.93745],
    "cams": [{
        "id": "23",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux23.jpeg",
        "name": "I-215 S EB @ Redwood Rd / SR-68 / MP 13.4, TAY"
    }]
}, {
    "coord": [40.63153, -111.88975],
    "cams": [{
        "id": "18",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux18.jpeg",
        "name": "I-215 S EB @ State St / US-89 / MP 10.66, MUR"
    }]
}, {
    "coord": [40.63078, -111.85444],
    "cams": [{
        "id": "14",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14.jpeg",
        "name": "I-215 S WB @ 1300 E / MP 8.87, CWH"
    }]
}, {
    "coord": [40.64432, -111.92868],
    "cams": [{
        "id": "22",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux22.jpeg",
        "name": "I-215 S WB @ 1300 W / MP 12.9, MUR"
    }]
}, {
    "coord": [40.63334, -111.8341],
    "cams": [{
        "id": "12",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux12.jpeg",
        "name": "I-215 S WB @ 2000 E / Highland Dr / SR-152 / MP 7.76, CWH"
    }]
}, {
    "coord": [40.63472, -111.82453],
    "cams": [{
        "id": "11",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux11.jpeg",
        "name": "I-215 S WB @ 2300 E / MP 7.25, HDY"
    }]
}, {
    "coord": [40.63524, -111.89751],
    "cams": [{
        "id": "19",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux19.jpeg",
        "name": "I-215 S WB @ 300 W / MP 11.15, MUR"
    }]
}, {
    "coord": [40.6306, -111.8662],
    "cams": [{
        "id": "16",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16.jpeg",
        "name": "I-215 S WB @ 900 E / SR-71 / MP 9.5, MDV"
    }]
}, {
    "coord": [40.64504, -111.93948],
    "cams": [{
        "id": "24",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux24.jpeg",
        "name": "I-215 S WB @ Redwood Rd / SR-68 / MP 13.5, TAY"
    }]
}, {
    "coord": [40.6304, -111.86241],
    "cams": [{
        "id": "15",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15.jpeg",
        "name": "I-215 S WB @ Union Park Ave / MP 9.31, MDV"
    }]
}, {
    "coord": [40.666368, -111.952245],
    "cams": [{
        "id": "27",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux27.jpeg",
        "name": "I-215 W NB @ 4700 S / SR-266 / MP 15.46, TAY"
    }]
}, {
    "coord": [40.68794, -111.95197],
    "cams": [{
        "id": "29",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux29.jpeg",
        "name": "I-215 W SB @ 3900 S / MP 16.9, WVC"
    }]
}, {
    "coord": [40.67644, -111.95258],
    "cams": [{
        "id": "28",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux28.jpeg",
        "name": "I-215 W SB @ 4300 S / MP 16.18, TAY"
    }]
}, {
    "coord": [40.65984, -111.95302],
    "cams": [{
        "id": "26",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux26.jpeg",
        "name": "I-215 W SB @ 5100 S / MP 14.96, TAY"
    }]
}, {
    "coord": [40.57796, -111.803],
    "cams": [{
        "id": "10186",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14895.jpeg",
        "name": "Little Cottonwood Rd / 3335 E / SR-209 @ Old Wasatch Blvd / 9710 S, GNT"
    }]
}, {
    "coord": [40.57312, -111.79848],
    "cams": [{
        "id": "11799",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16607.jpeg",
        "name": "Little Cottonwood Rd / 9800 S / SR-209 @ Wasatch Blvd / 3400 E, SL"
    }]
}, {
    "coord": [40.58493, -111.65407],
    "cams": [{
        "id": "12437",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17228.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Alta Bypass / MP 10.95, SL"
    }]
}, {
    "coord": [40.57169, -111.72864],
    "cams": [{
        "id": "11457",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16266.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Lisa Falls / MP 6.5, SL"
    }]
}, {
    "coord": [40.57123, -111.71266],
    "cams": [{
        "id": "11458",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16267.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Seven Turns / MP 7.4, SL"
    }]
}, {
    "coord": [40.5707, -111.7028],
    "cams": [{
        "id": "11459",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16268.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Tanners Flat / MP 7.94, SL"
    }]
}, {
    "coord": [40.57141, -111.73847],
    "cams": [{
        "id": "11456",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16265.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Upper Vault / MP 5.96, SL"
    }]
}, {
    "coord": [40.57609, -111.68218],
    "cams": [{
        "id": "11461",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16270.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ White Pine Parking / MP 9.2, SL"
    }]
}, {
    "coord": [40.57096, -111.74374],
    "cams": [{
        "id": "11839",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16647.jpeg",
        "name": "Little Cottonwood Rd / SR-210 RWIS EB @ Powerhouse / MP 5.67, SL"
    }]
}, {
    "coord": [40.59104, -111.63377],
    "cams": [{
        "id": "12435",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17226.jpeg",
        "name": "Little Cottonwood Rd / SR-210 WB @ Alta / MP 12.16, ALT"
    }]
}, {
    "coord": [40.57911, -111.67448],
    "cams": [{
        "id": "12436",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17227.jpeg",
        "name": "Little Cottonwood Rd / SR-210 WB @ Upper White Pine / MP 9.7, SL"
    }]
}, {
    "coord": [40.5745, -111.69099],
    "cams": [{
        "id": "11460",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16269.jpeg",
        "name": "Little Cottonwood Rd / SR-210 WB @ White Pine / MP 8.7, SL"
    }]
}, {
    "coord": [40.52519, -111.8888],
    "cams": [{
        "id": "10676",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15485.jpeg",
        "name": "Minuteman Dr @ 12450 S, DPR"
    }]
}, {
    "coord": [40.52259, -112.00472],
    "cams": [{
        "id": "11016",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15825.jpeg",
        "name": "Mountain View / SR-85 NB @ 12600 S, RVT"
    }]
}, {
    "coord": [40.50799, -112.00333],
    "cams": [{
        "id": "11017",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15826.jpeg",
        "name": "Mountain View / SR-85 NB @ 13400 S, RVT"
    }]
}, {
    "coord": [40.68189, -112.02998],
    "cams": [{
        "id": "12054",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16862.jpeg",
        "name": "Mountain View / SR-85 NB @ 4100 S, WVC"
    }]
}, {
    "coord": [40.67081, -112.03108],
    "cams": [{
        "id": "12052",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16860.jpeg",
        "name": "Mountain View / SR-85 NB @ 4565 S, WVC"
    }]
}, {
    "coord": [40.66439, -112.03455],
    "cams": [{
        "id": "12051",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16859.jpeg",
        "name": "Mountain View / SR-85 NB @ 4825 S, WVC"
    }]
}, {
    "coord": [40.65353, -112.04338],
    "cams": [{
        "id": "11062",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15871.jpeg",
        "name": "Mountain View / SR-85 NB @ 5400 S / SR-173, WVC"
    }]
}, {
    "coord": [40.61319, -112.0375],
    "cams": [{
        "id": "11059",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15868.jpeg",
        "name": "Mountain View / SR-85 NB @ 7600 S, WJD"
    }]
}, {
    "coord": [40.60966, -112.03341],
    "cams": [{
        "id": "11061",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15870.jpeg",
        "name": "Mountain View / SR-85 NB @ 7800 S, WJD"
    }]
}, {
    "coord": [40.58806, -112.02762],
    "cams": [{
        "id": "11060",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15869.jpeg",
        "name": "Mountain View / SR-85 NB @ 9000 S / SR-209, WJD"
    }]
}, {
    "coord": [40.46258, -111.95413],
    "cams": [{
        "id": "11018",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15827.jpeg",
        "name": "Mountain View / SR-85 NB @ Porter Rockwell Blvd, HRR"
    }]
}, {
    "coord": [40.55163, -112.02893],
    "cams": [{
        "id": "11756",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16564.jpeg",
        "name": "Mountain View / SR-85 NB @ South Jordan Pkwy / 11000 S, SJO"
    }]
}, {
    "coord": [40.48607, -111.99415],
    "cams": [{
        "id": "11357",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-85%20Juniper-all.gif",
        "name": "Mountain View / SR-85 RWIS NB @ 14600 S / Juniper, HRR"
    }]
}, {
    "coord": [40.54271, -112.02196],
    "cams": [{
        "id": "11022",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15831.jpeg",
        "name": "Mountain View / SR-85 SB @ 11450 S, SJO"
    }]
}, {
    "coord": [40.52938, -112.00926],
    "cams": [{
        "id": "11019",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15828.jpeg",
        "name": "Mountain View / SR-85 SB @ 12200 S, HRR"
    }]
}, {
    "coord": [40.51215, -112.00532],
    "cams": [{
        "id": "11025",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15834.jpeg",
        "name": "Mountain View / SR-85 SB @ 13200 S, RVT"
    }]
}, {
    "coord": [40.67623, -112.03113],
    "cams": [{
        "id": "12053",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16861.jpeg",
        "name": "Mountain View / SR-85 SB @ 4350 S, WVC"
    }]
}, {
    "coord": [40.64953, -112.04535],
    "cams": [{
        "id": "11056",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15865.jpeg",
        "name": "Mountain View / SR-85 SB @ 5800 S, WVC"
    }]
}, {
    "coord": [40.63936, -112.04688],
    "cams": [{
        "id": "11058",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15867.jpeg",
        "name": "Mountain View / SR-85 SB @ 6200 S, WVC"
    }]
}, {
    "coord": [40.57247, -112.03449],
    "cams": [{
        "id": "11057",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15866.jpeg",
        "name": "Mountain View / SR-85 SB @ 9860 S, WJD"
    }]
}, {
    "coord": [40.53879, -112.01811],
    "cams": [{
        "id": "11020",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15829.jpeg",
        "name": "Mountain View / SR-85 SB @ Daybreak Pkwy, SJO"
    }]
}, {
    "coord": [40.54445, -112.02368],
    "cams": [{
        "id": "11868",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16676.jpeg",
        "name": "Mountain View / SR-85 SB @ Lake Ave / 11400 S, SJO"
    }]
}, {
    "coord": [40.56711, -112.03405],
    "cams": [{
        "id": "11021",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15830.jpeg",
        "name": "Mountain View / SR-85 SB @ Old Bingham Hwy, WJD"
    }]
}, {
    "coord": [40.65894, -112.04162],
    "cams": [{
        "id": "12050",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16858.jpeg",
        "name": "Mountain View / SR-85 SB @ Upper Ridge Rd / 5100 S, WVC"
    }]
}, {
    "coord": [40.6025, -112.00532],
    "cams": [{
        "id": "11064",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15873.jpeg",
        "name": "New Bingham Hwy @ 4800 W, WJD"
    }]
}, {
    "coord": [40.59525, -112.02409],
    "cams": [{
        "id": "11063",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15872.jpeg",
        "name": "New Bingham Hwy @ 5600 W, WJD"
    }]
}, {
    "coord": [40.57186, -111.77614],
    "cams": [{
        "id": "9895",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14604.jpeg",
        "name": "North Little Cottonwood Rd / Little Cottonwood Canyon Rd / SR-210 @ Little Cottonwood Rd / SR-209, SL"
    }]
}, {
    "coord": [40.58925, -111.79356],
    "cams": [{
        "id": "11800",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16608.jpeg",
        "name": "North Little Cottonwood Rd / Wasatch Blvd / 3600 E / SR-210 @ Wasatch Blvd / 8900 S, CWH"
    }]
}, {
    "coord": [40.46375, -111.94989],
    "cams": [{
        "id": "11024",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15833.jpeg",
        "name": "Porter Rockwell Blvd @ 2300 W, HRR"
    }]
}, {
    "coord": [40.56206, -111.93818],
    "cams": [{
        "id": "11828",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16636.jpeg",
        "name": "Redwood Rd / SR-68 @ 10400 S / South Jordan Pkwy / SR-151, SJO"
    }]
}, {
    "coord": [40.54417, -111.93872],
    "cams": [{
        "id": "11015",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15824.jpeg",
        "name": "Redwood Rd / SR-68 @ 11400 S, SJO"
    }]
}, {
    "coord": [40.52279, -111.93853],
    "cams": [{
        "id": "305",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux305.jpeg",
        "name": "Redwood Rd / SR-68 @ 12600 S / SR-71, RVT"
    }]
}, {
    "coord": [40.518821, -111.938944],
    "cams": [{
        "id": "12260",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17059.jpeg",
        "name": "Redwood Rd / SR-68 @ 12800 S, RVT"
    }]
}, {
    "coord": [40.507617, -111.938871],
    "cams": [{
        "id": "12261",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17060.jpeg",
        "name": "Redwood Rd / SR-68 @ 13400 S, RVT"
    }]
}, {
    "coord": [40.4895, -111.94003],
    "cams": [{
        "id": "10328",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15037.jpeg",
        "name": "Redwood Rd / SR-68 @ 14400 S / SR-140, BLF"
    }]
}, {
    "coord": [40.681944, -111.938687],
    "cams": [{
        "id": "11949",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16757.jpeg",
        "name": "Redwood Rd / SR-68 @ 4100 S, TAY"
    }]
}, {
    "coord": [40.6676, -111.93878],
    "cams": [{
        "id": "10733",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15542.jpeg",
        "name": "Redwood Rd / SR-68 @ 4700 S / SR-266, TAY"
    }]
}, {
    "coord": [40.65321, -111.93904],
    "cams": [{
        "id": "9867",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux2123.jpeg",
        "name": "Redwood Rd / SR-68 @ 5400 S / SR-173, TAY"
    }]
}, {
    "coord": [40.63857, -111.9388],
    "cams": [{
        "id": "10554",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15363.jpeg",
        "name": "Redwood Rd / SR-68 @ 6200 S, TAY"
    }]
}, {
    "coord": [40.62401, -111.93875],
    "cams": [{
        "id": "9630",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux309.jpeg",
        "name": "Redwood Rd / SR-68 @ 7000 S / SR-48, WJD"
    }]
}, {
    "coord": [40.6095, -111.93875],
    "cams": [{
        "id": "9557",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux308.jpeg",
        "name": "Redwood Rd / SR-68 @ 7800 S / SR-48, WJD"
    }]
}, {
    "coord": [40.60236, -111.93871],
    "cams": [{
        "id": "11466",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16275.jpeg",
        "name": "Redwood Rd / SR-68 @ 8200 S / Sugar Factory Rd, WJD"
    }]
}, {
    "coord": [40.58788, -111.93874],
    "cams": [{
        "id": "9555",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux307.jpeg",
        "name": "Redwood Rd / SR-68 @ 9000 S / SR-209, WJD"
    }]
}, {
    "coord": [40.46256, -111.94261],
    "cams": [{
        "id": "11023",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15832.jpeg",
        "name": "Redwood Rd / SR-68 @ Porter Rockwell Blvd, BLF"
    }]
}, {
    "coord": [40.43468, -111.92925],
    "cams": [{
        "id": "10329",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15038.jpeg",
        "name": "Redwood Rd / SR-68 @ W. G. Williams Ave, UT"
    }]
}, {
    "coord": [40.562059, -111.94803],
    "cams": [{
        "id": "11826",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16634.jpeg",
        "name": "South Jordan Pkwy / 10400 S / SR-151 @ 2200 W, SJO"
    }]
}, {
    "coord": [40.45049, -111.64471],
    "cams": [{
        "id": "10853",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-92-mp-14.gif",
        "name": "SR-92 Liveview WB @ Alpine Loop Scenic Hwy / MP 14.37, UT"
    }]
}, {
    "coord": [40.56956, -111.8905],
    "cams": [{
        "id": "11965",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16773.jpeg",
        "name": "State St / US-89 @ 10000 S / Sego Lily Dr, SND"
    }]
}, {
    "coord": [40.55854, -111.89113],
    "cams": [{
        "id": "10104",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14813.jpeg",
        "name": "State St / US-89 @ 10600 S, SND"
    }]
}, {
    "coord": [40.55179, -111.89103],
    "cams": [{
        "id": "12341",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17140.jpeg",
        "name": "State St / US-89 @ 11000 S, SND"
    }]
}, {
    "coord": [40.54747, -111.89129],
    "cams": [{
        "id": "12342",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17141.jpeg",
        "name": "State St / US-89 @ 11235 S / Auto Mall Dr, SND"
    }]
}, {
    "coord": [40.54443, -111.89117],
    "cams": [{
        "id": "10686",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15495.jpeg",
        "name": "State St / US-89 @ 11400 S, SND"
    }]
}, {
    "coord": [40.52932, -111.89021],
    "cams": [{
        "id": "10677",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15486.jpeg",
        "name": "State St / US-89 @ 12200 S, DPR"
    }]
}, {
    "coord": [40.68687, -111.88804],
    "cams": [{
        "id": "11948",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16756.jpeg",
        "name": "State St / US-89 @ 3900 S, SSL"
    }]
}, {
    "coord": [40.6743, -111.88826],
    "cams": [{
        "id": "9264",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5143.jpeg",
        "name": "State St / US-89 @ 4500 S / SR-266, MUR"
    }]
}, {
    "coord": [40.6564, -111.88798],
    "cams": [{
        "id": "144",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux144.jpeg",
        "name": "State St / US-89 @ 5300 S / SR-173, MUR"
    }]
}, {
    "coord": [40.62064, -111.89032],
    "cams": [{
        "id": "11825",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16633.jpeg",
        "name": "State St / US-89 @ 7200 S / Fort Union Blvd / SR-48, MDV"
    }]
}, {
    "coord": [40.60948, -111.89067],
    "cams": [{
        "id": "195",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux195.jpeg",
        "name": "State St / US-89 @ 7800 S, MDV"
    }]
}, {
    "coord": [40.599093, -111.890625],
    "cams": [{
        "id": "12268",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17067.jpeg",
        "name": "State St / US-89 @ 8375 S / Princeton Dr, SND"
    }]
}, {
    "coord": [40.58843, -111.89051],
    "cams": [{
        "id": "10108",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14817.jpeg",
        "name": "State St / US-89 @ 9000 S / SR-209, SND"
    }]
}, {
    "coord": [40.58028, -111.89048],
    "cams": [{
        "id": "10103",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14812.jpeg",
        "name": "State St / US-89 @ 9400 S, SND"
    }]
}, {
    "coord": [40.58411, -111.89109],
    "cams": [{
        "id": "10893",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15702.jpeg",
        "name": "State St / US-89 @ Rio Tinto Stadium / 9220 S, SND"
    }]
}, {
    "coord": [40.63334, -111.88937],
    "cams": [{
        "id": "145",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux145.jpeg",
        "name": "State St / US-89 @ Winchester St / 6400 S, MUR"
    }]
}, {
    "coord": [40.43201, -111.80238],
    "cams": [{
        "id": "11666",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16474.jpeg",
        "name": "Timpanogos Hwy / 11000 N / SR-92 @ 6000 W, HLD"
    }]
}, {
    "coord": [40.43196, -111.81179],
    "cams": [{
        "id": "11758",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16566.jpeg",
        "name": "Timpanogos Hwy / 11000 N / SR-92 @ 6400 W, HLD"
    }]
}, {
    "coord": [40.43185, -111.78518],
    "cams": [{
        "id": "11010",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15819.jpeg",
        "name": "Timpanogos Hwy / 11000 N / SR-92 @ Alpine Hwy / 5300 W / SR-74, HLD"
    }]
}, {
    "coord": [40.432, -111.77343],
    "cams": [{
        "id": "11388",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16197.jpeg",
        "name": "Timpanogos Hwy / 11000 N / SR-92 @ North County Blvd / 4800 W / SR-129, HLD"
    }]
}, {
    "coord": [40.43234, -111.83057],
    "cams": [{
        "id": "11011",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15820.jpeg",
        "name": "Timpanogos Hwy / 3500 N / SR-92 @ 1200 E / Micron, LHI"
    }]
}, {
    "coord": [40.43194, -111.87329],
    "cams": [{
        "id": "11665",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16473.jpeg",
        "name": "Timpanogos Hwy / 3500 N / SR-92 @ 1450 W, LHI"
    }]
}, {
    "coord": [40.43224, -111.84971],
    "cams": [{
        "id": "11012",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15821.jpeg",
        "name": "Timpanogos Hwy / 3500 N / SR-92 @ Center St, LHI"
    }]
}, {
    "coord": [40.43248, -111.86904],
    "cams": [{
        "id": "11667",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16475.jpeg",
        "name": "Timpanogos Hwy / 3500 N / SR-92 @ Morning Vista Rd / 1200 W, LHI"
    }]
}, {
    "coord": [40.43075, -111.89566],
    "cams": [{
        "id": "11542",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16351.jpeg",
        "name": "Timpanogos Hwy / Club House Dr / SR-92 @ Ashton Blvd / Maple Loop Dr, LHI"
    }]
}, {
    "coord": [40.43439, -111.88097],
    "cams": [{
        "id": "11055",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15864.jpeg",
        "name": "Triumph Blvd @ Cabelas Blvd, LHI"
    }]
}, {
    "coord": [40.62453, -111.85996],
    "cams": [{
        "id": "146",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux146.jpeg",
        "name": "Union Park Ave / 1090 E @ Fort Union Blvd / 7000 S, MDV"
    }]
}, {
    "coord": [40.61075, -111.85332],
    "cams": [{
        "id": "11944",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16752.jpeg",
        "name": "Union Park Ave / 1300 E @ 7755 S / Forbush Ln, SND"
    }]
}, {
    "coord": [40.61781, -111.85794],
    "cams": [{
        "id": "12019",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16827.jpeg",
        "name": "Union Park Ave / 1300 E @ Creek Rd / South Union Ave / 7340 S, CWH"
    }]
}, {
    "coord": [40.62202, -111.85589],
    "cams": [{
        "id": "12020",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16828.jpeg",
        "name": "Union Park Ave @ 1300 E / 7100 S, CWH"
    }]
}, {
    "coord": [40.64922, -111.8487],
    "cams": [{
        "id": "11467",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16276.jpeg",
        "name": "Van Winkle Expwy / SR-152 @ 5600 S, HDY"
    }]
}, {
    "coord": [40.60957, -111.79214],
    "cams": [{
        "id": "11798",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16606.jpeg",
        "name": "Wasatch Blvd / 3650 E / SR-210 @ 7800 S / Bengal Blvd / Honeywood Cove Dr, CWH"
    }]
}, {
    "coord": [40.61965, -111.78925],
    "cams": [{
        "id": "9896",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14605.jpeg",
        "name": "Wasatch Blvd / SR-190/SR-210 @ Big Cottonwood Canyon Rd / Fort Union Blvd / SR-190, CWH"
    }]
}, {
    "coord": [41.03825, -111.93833],
    "cams": [{
        "id": "12068",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16876.jpeg",
        "name": "200 N / SR-273 @ Main St / SR-273, KAY"
    }]
}, {
    "coord": [40.89352, -111.88051],
    "cams": [{
        "id": "12059",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16867.jpeg",
        "name": "400 N / SR-106 @ Main St, BTF"
    }]
}, {
    "coord": [40.88431, -111.88069],
    "cams": [{
        "id": "9777",
        "url": "http://www.udottraffic.utah.gov/1_devices/Aux14487.jpeg",
        "name": "500 S @ Main St, BTF"
    }]
}, {
    "coord": [40.89401, -111.89221],
    "cams": [{
        "id": "9638",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux436.jpeg",
        "name": "500 W / US-89 @ 400 N / SR-106, BTF"
    }]
}, {
    "coord": [40.88427, -111.89218],
    "cams": [{
        "id": "9639",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux437.jpeg",
        "name": "500 W / US-89 @ 500 S / SR-68, BTF"
    }]
}, {
    "coord": [41.10359, -112.022],
    "cams": [{
        "id": "11360",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16169.jpeg",
        "name": "700 S / SR-193 @ Industrial Pkwy, CFD"
    }]
}, {
    "coord": [41.0483, -111.98799],
    "cams": [{
        "id": "10876",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15685.jpeg",
        "name": "Angel St @ Layton Pkwy, LTN"
    }]
}, {
    "coord": [41.08939, -112.06436],
    "cams": [{
        "id": "12070",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16878.jpeg",
        "name": "Antelope Dr / 1700 S / SR-108 @ 2000 W / SR-108, SYR"
    }]
}, {
    "coord": [41.08938, -112.02636],
    "cams": [{
        "id": "12069",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16877.jpeg",
        "name": "Antelope Dr / 1700 S / SR-108 @ Main St, CFD"
    }]
}, {
    "coord": [41.07955, -111.95061],
    "cams": [{
        "id": "11387",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16196.jpeg",
        "name": "Fairfield Rd / 850 E @ Cherry Ln / 1350 N, LTN"
    }]
}, {
    "coord": [41.06744, -111.9503],
    "cams": [{
        "id": "11867",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16675.jpeg",
        "name": "Fairfield Rd / 850 E @ Wasatch Dr / 425 N, LTN"
    }]
}, {
    "coord": [41.060219, -111.975515],
    "cams": [{
        "id": "10679",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15488.jpeg",
        "name": "Gentile St @ Flint St, LTN"
    }]
}, {
    "coord": [41.08918, -111.97343],
    "cams": [{
        "id": "9637",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux435.jpeg",
        "name": "Hill Field Rd / SR-232 @ 2000 N / Antelope Dr, LTN"
    }]
}, {
    "coord": [41.10352, -111.97344],
    "cams": [{
        "id": "9403",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux423.jpeg",
        "name": "Hill Field Rd / SR-232 @ 3000 N / SR-193, LTN"
    }]
}, {
    "coord": [41.07505, -111.97415],
    "cams": [{
        "id": "9125",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux315.jpeg",
        "name": "Hill Field Rd / SR-232 @ Gordon Ave / 1000 N, LTN"
    }]
}, {
    "coord": [41.07265, -111.97889],
    "cams": [{
        "id": "9405",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux425.jpeg",
        "name": "Hill Field Rd / SR-232 @ Main St / SR-126, LTN"
    }]
}, {
    "coord": [40.87513, -111.89635],
    "cams": [{
        "id": "10494",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15303.jpeg",
        "name": "I-15 NB @ 1500 S / MP 316.23, WXS"
    }]
}, {
    "coord": [41.00663, -111.93194],
    "cams": [{
        "id": "10426",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15135.jpeg",
        "name": "I-15 NB @ 1800 S / MP 326.23, KAY"
    }]
}, {
    "coord": [40.86128, -111.90137],
    "cams": [{
        "id": "11858",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16666.jpeg",
        "name": "I-15 NB @ 2600 S / SR-93 / MP 315.26, WXS"
    }]
}, {
    "coord": [40.90102, -111.8919],
    "cams": [{
        "id": "9389",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5131.jpeg",
        "name": "I-15 NB @ 500 W / US-89 / MP 318.1, BTF"
    }]
}, {
    "coord": [41.01998, -111.94211],
    "cams": [{
        "id": "10425",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15134.jpeg",
        "name": "I-15 NB @ 900 S / MP 327.34, KAY"
    }]
}, {
    "coord": [41.08944, -111.99012],
    "cams": [{
        "id": "9346",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux422.jpeg",
        "name": "I-15 NB @ Antelope Dr / 2000 N / SR-108 / MP 332.87, LTN"
    }]
}, {
    "coord": [41.06357, -111.96661],
    "cams": [{
        "id": "10684",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15493.jpeg",
        "name": "I-15 NB @ Church St / MP 330.75, LTN"
    }]
}, {
    "coord": [41.07096, -111.97355],
    "cams": [{
        "id": "226",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux226.jpeg",
        "name": "I-15 NB @ Hill Field Rd / 750 N / SR-232 / MP 331.36, LTN"
    }]
}, {
    "coord": [41.05634, -111.96043],
    "cams": [{
        "id": "10580",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15389.jpeg",
        "name": "I-15 NB @ Layton Pkwy / SR-126 / MP 330.12, LTN"
    }]
}, {
    "coord": [40.99875, -111.92023],
    "cams": [{
        "id": "10388",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15097.jpeg",
        "name": "I-15 NB @ Shepard Ln / MP 325.43, FRM"
    }]
}, {
    "coord": [40.98089, -111.89672],
    "cams": [{
        "id": "9392",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5135.jpeg",
        "name": "I-15 NB @ State St / MP 323.66, FRM"
    }]
}, {
    "coord": [40.93513, -111.89171],
    "cams": [{
        "id": "10402",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15111.jpeg",
        "name": "I-15 SB @ 1400 N / MP 320.46, CVL"
    }]
}, {
    "coord": [41.03768, -111.94884],
    "cams": [{
        "id": "227",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux227.jpeg",
        "name": "I-15 SB @ 200 N / SR-273 / MP 328.65, KAY"
    }]
}, {
    "coord": [40.94866, -111.89159],
    "cams": [{
        "id": "9388",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5133.jpeg",
        "name": "I-15 SB @ 2100 N / MP 321.34, CVL"
    }]
}, {
    "coord": [40.86144, -111.90256],
    "cams": [{
        "id": "9402",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5129.jpeg",
        "name": "I-15 SB @ 2600 S  / SR-93 / MP 315.24, WXS"
    }]
}, {
    "coord": [40.89428, -111.89616],
    "cams": [{
        "id": "10389",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15098.jpeg",
        "name": "I-15 SB @ 400 N / SR-106 / MP 317.55, WBN"
    }]
}, {
    "coord": [40.88359, -111.89697],
    "cams": [{
        "id": "9408",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5130.jpeg",
        "name": "I-15 SB @ 500 S / SR-68 / MP 316.84, WBN"
    }]
}, {
    "coord": [41.05276, -111.96133],
    "cams": [{
        "id": "10581",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15390.jpg",
        "name": "I-15 SB @ 550 S / MP 329.9, LTN"
    }]
}, {
    "coord": [40.911, -111.89174],
    "cams": [{
        "id": "10493",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15302.jpeg",
        "name": "I-15 SB @ 600 S / MP 318.76, CVL"
    }]
}, {
    "coord": [41.10325, -112.00428],
    "cams": [{
        "id": "9251",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5225.jpeg",
        "name": "I-15 SB @ 700 S / SR-193 / MP 334.08, CFD"
    }]
}, {
    "coord": [40.96529, -111.8915],
    "cams": [{
        "id": "9391",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5134.jpeg",
        "name": "I-15 SB @ Glover Ln / MP 322.54, FRM"
    }]
}, {
    "coord": [41.07685, -111.97989],
    "cams": [{
        "id": "11744",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16552.jpeg",
        "name": "I-15 SB @ Hill Field Rd / 1150 N / SR-232 / MP 331.86, LTN"
    }]
}, {
    "coord": [40.85044, -111.91245],
    "cams": [{
        "id": "9400",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5128.jpeg",
        "name": "I-15 SB @ Main St / MP 314.31, NSL"
    }]
}, {
    "coord": [40.98905, -111.90565],
    "cams": [{
        "id": "281",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux281.jpeg",
        "name": "I-15 SB @ Park Ln / 1100 W / SR-225 / MP 324.44, FRM"
    }]
}, {
    "coord": [40.9211, -111.89134],
    "cams": [{
        "id": "9390",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5132.jpeg",
        "name": "I-15 SB @ Parrish Ln / 400 N / SR-105 / MP 319.51, CVL"
    }]
}, {
    "coord": [41.05424, -111.96756],
    "cams": [{
        "id": "12057",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16865.jpeg",
        "name": "Layton Pkwy @ 100 W, LTN"
    }]
}, {
    "coord": [40.90129, -111.92453],
    "cams": [{
        "id": "10052",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14761.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 1200 N / MP 5.42, WBN"
    }]
}, {
    "coord": [40.93302, -111.89257],
    "cams": [{
        "id": "10059",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14768.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 1275 N / MP 8.3, CVL"
    }]
}, {
    "coord": [40.9552, -111.89246],
    "cams": [{
        "id": "10061",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14770.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 1550 S / MP 9.8, FRM"
    }]
}, {
    "coord": [40.94533, -111.89221],
    "cams": [{
        "id": "10060",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14769.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 1900 N / MP 9.16, CVL"
    }]
}, {
    "coord": [40.87031, -111.9384],
    "cams": [{
        "id": "10049",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14758.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 1900 S / MP 3.16, WXS"
    }]
}, {
    "coord": [40.97687, -111.89707],
    "cams": [{
        "id": "10063",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14772.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 200 S / MP 11.4, FRM"
    }]
}, {
    "coord": [40.91387, -111.90924],
    "cams": [{
        "id": "10054",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14763.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 2200 N / MP 6.62, WBN"
    }]
}, {
    "coord": [40.86287, -111.94287],
    "cams": [{
        "id": "10048",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14757.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 2500 S / MP 2.5, WXS"
    }]
}, {
    "coord": [40.84945, -111.94262],
    "cams": [{
        "id": "10046",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14755.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 300 N / MP 1.52, NSL"
    }]
}, {
    "coord": [40.89357, -111.933],
    "cams": [{
        "id": "10051",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14760.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 400 N / MP 4.7, WBN"
    }]
}, {
    "coord": [40.92754, -111.89755],
    "cams": [{
        "id": "10058",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14767.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 800 N / MP 7.8, CVL"
    }]
}, {
    "coord": [40.85773, -111.9431],
    "cams": [{
        "id": "10047",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14756.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 900 N / MP 2.14, NSL"
    }]
}, {
    "coord": [40.91667, -111.90314],
    "cams": [{
        "id": "10055",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14764.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 900 W / MP 7, CVL"
    }]
}, {
    "coord": [40.92209, -111.89931],
    "cams": [{
        "id": "10056",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14765.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ Parrish Ln / SR-105 / MP 7.45, CVL"
    }]
}, {
    "coord": [40.98545, -111.90102],
    "cams": [{
        "id": "10064",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14773.jpeg",
        "name": "Legacy Pkwy / SR-67 SB @ 250 N / US-89 / MP 12.1, FRM"
    }]
}, {
    "coord": [40.88351, -111.93762],
    "cams": [{
        "id": "10050",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14759.jpeg",
        "name": "Legacy Pkwy / SR-67 SB @ 500 S / MP 4, WXS"
    }]
}, {
    "coord": [40.96487, -111.89333],
    "cams": [{
        "id": "10062",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14771.jpeg",
        "name": "Legacy Pkwy / SR-67 SB @ Glover Ln / MP 10.5, FRM"
    }]
}, {
    "coord": [40.90648, -111.91826],
    "cams": [{
        "id": "10053",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14762.jpeg",
        "name": "Legacy Pkwy / SR-67 SB @ Pages Ln / MP 6, WBN"
    }]
}, {
    "coord": [40.92134, -111.90037],
    "cams": [{
        "id": "10057",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14766.jpeg",
        "name": "Legacy Pkwy / SR-67 SB @ Parrish Ln / SR-105 / MP 7.4, CVL"
    }]
}, {
    "coord": [41.08917, -112.00106],
    "cams": [{
        "id": "9231",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux322.jpeg",
        "name": "Main St / SR-126 @ Antelope Dr / SR-108, LTN"
    }]
}, {
    "coord": [40.86161, -111.8962],
    "cams": [{
        "id": "9640",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux438.jpeg",
        "name": "Main St / US-89 @ 2600 S / SR-93, BTF"
    }]
}, {
    "coord": [40.92135, -111.87919],
    "cams": [{
        "id": "12067",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16875.jpeg",
        "name": "Parrish Ln / 400 N / SR-105 @ Main St / SR-106, CVL"
    }]
}, {
    "coord": [41.09175, -111.91075],
    "cams": [{
        "id": "10392",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15101.jpeg",
        "name": "US-89 @ Antelope Dr, LTN"
    }]
}, {
    "coord": [41.03014, -111.9091],
    "cams": [{
        "id": "286",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux286.jpeg",
        "name": "US-89 @ Green Rd / MP 398.86, FRU"
    }]
}, {
    "coord": [41.01144, -111.9127],
    "cams": [{
        "id": "284",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux284.jpeg",
        "name": "US-89 @ Main St / SR-106 / SR-273 / MP 397.58, FRM"
    }]
}, {
    "coord": [41.0661, -111.91015],
    "cams": [{
        "id": "10393",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15102.jpeg",
        "name": "US-89 @ Oak Hills Dr / SR-109, LTN"
    }]
}, {
    "coord": [40.9907, -111.90318],
    "cams": [{
        "id": "280",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux280.jpeg",
        "name": "US-89 @ Park Ln / 1100 W / SR-225, FRM"
    }]
}, {
    "coord": [41.01846, -111.9087],
    "cams": [{
        "id": "285",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux285.jpeg",
        "name": "US-89 @ Pedestrian Bridge / MP 398.08, FRU"
    }]
}, {
    "coord": [40.99131, -111.90232],
    "cams": [{
        "id": "10821",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR225mile0-all.gif",
        "name": "US-89 Liveview NB @ Park Lane / SR-225 / MP 396.19, FRM"
    }]
}, {
    "coord": [41.00102, -111.90746],
    "cams": [{
        "id": "283",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux283.jpeg",
        "name": "US-89 NB @ Shepard Ln, FRM"
    }]
}, {
    "coord": [41.00099, -111.90848],
    "cams": [{
        "id": "282",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux282.jpeg",
        "name": "US-89 SB @ Shepard Ln, FRM"
    }]
}, {
    "coord": [39.60113, -110.81113],
    "cams": [{
        "id": "12517",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17308.jpeg",
        "name": "100 N / SR-55 @ Carbon Ave / SR-10, PRC"
    }]
}, {
    "coord": [37.10654, -113.57482],
    "cams": [{
        "id": "10215",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14924.jpeg",
        "name": "100 S @ 400 E / Flood St, STG"
    }]
}, {
    "coord": [37.106321, -113.568354],
    "cams": [{
        "id": "11524",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16333.jpeg",
        "name": "100 S @ 700 E, STG"
    }]
}, {
    "coord": [40.55094, -112.3025],
    "cams": [{
        "id": "11470",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16279.jpeg",
        "name": "1000 N / SR-112 @ 200 W, TLE"
    }]
}, {
    "coord": [41.75039, -111.85924],
    "cams": [{
        "id": "11650",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16458.jpeg",
        "name": "1000 W / SR-252 @ 1000 N, LGN"
    }]
}, {
    "coord": [41.73575, -111.85939],
    "cams": [{
        "id": "11516",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16325.jpeg",
        "name": "1000 W / SR-252 @ 200 N / SR-30, LGN"
    }]
}, {
    "coord": [41.72065, -111.86017],
    "cams": [{
        "id": "11649",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16457.jpeg",
        "name": "1000 W / SR-252 @ 600 S / Mendon Rd, LGN"
    }]
}, {
    "coord": [40.558726, -111.902968],
    "cams": [{
        "id": "12263",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17062.jpeg",
        "name": "10600 S / South Jordan Pkwy / SR-151 @ 400 W / Jordan Gateway, SJO"
    }]
}, {
    "coord": [40.55874, -111.91042],
    "cams": [{
        "id": "11966",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16774.jpeg",
        "name": "10600 S / South Jordan Pkwy / SR-151 @ River Front Pkwy / 700 W, SJO"
    }]
}, {
    "coord": [41.48626, -112.01742],
    "cams": [{
        "id": "9878",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14587.jpeg",
        "name": "1100 S / US-89/91 @ Main St / US-89 / SR-13, BRC"
    }]
}, {
    "coord": [40.27867, -111.72064],
    "cams": [{
        "id": "11355",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16164.jpg",
        "name": "1200 W / College Dr @ UVU Event Center Dr / 1000 S, ORM"
    }]
}, {
    "coord": [40.28992, -111.72414],
    "cams": [{
        "id": "10027",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14736.jpeg",
        "name": "1200 W @ 400 S, ORM"
    }]
}, {
    "coord": [40.52678, -111.88629],
    "cams": [{
        "id": "10678",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15487.jpeg",
        "name": "12300 S / SR-71 @ 150 E, DPR"
    }]
}, {
    "coord": [40.52656, -111.89895],
    "cams": [{
        "id": "10575",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15384.jpeg",
        "name": "12300 S / SR-71 @ 265 W, DPR"
    }]
}, {
    "coord": [40.52698, -111.87187],
    "cams": [{
        "id": "304",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux304.jpeg",
        "name": "12300 S / SR-71 @ 700 E / SR-71, DPR"
    }]
}, {
    "coord": [40.52263, -112.01128],
    "cams": [{
        "id": "11967",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16775.jpeg",
        "name": "12600 S / Herriman Blvd @ Main St / 5040 W, HRR"
    }]
}, {
    "coord": [40.5225, -111.95755],
    "cams": [{
        "id": "11827",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16635.jpeg",
        "name": "12600 S / SR-71 @ 2700 W / Silverwolf Blvd, RVT"
    }]
}, {
    "coord": [40.52209, -111.9899],
    "cams": [{
        "id": "11512",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16321.jpeg",
        "name": "12600 S @ 4150 W, RVT"
    }]
}, {
    "coord": [40.52228, -111.9999],
    "cams": [{
        "id": "11026",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15835.jpeg",
        "name": "12600 S @ Legacy Ranch Blvd / 4570 W, RVT"
    }]
}, {
    "coord": [40.752, -111.85388],
    "cams": [{
        "id": "289",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux289.jpeg",
        "name": "1300 E / Leopard Ln @ 800 S, SLC"
    }]
}, {
    "coord": [40.7607, -111.85391],
    "cams": [{
        "id": "10714",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15523.jpeg",
        "name": "1300 E @ 400 S, SLC"
    }]
}, {
    "coord": [38.7498, -112.10182],
    "cams": [{
        "id": "12433",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17224.jpeg",
        "name": "1300 S / SR-120 @ Technology Dr / College Ave, RFD"
    }]
}, {
    "coord": [40.74164, -111.89966],
    "cams": [{
        "id": "10715",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15524.jpeg",
        "name": "1300 S @ 300 W, SLC"
    }]
}, {
    "coord": [40.187515, -111.630833],
    "cams": [{
        "id": "11823",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16631.jpeg",
        "name": "1400 N / SR-75 @ Mountain Springs Pkwy / 1100 W, SPV"
    }]
}, {
    "coord": [41.75767, -111.82394],
    "cams": [{
        "id": "11648",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16456.jpeg",
        "name": "1400 N @ 400 E, LGN"
    }]
}, {
    "coord": [40.482224, -111.896964],
    "cams": [{
        "id": "11638",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16447.jpeg",
        "name": "14600 S / Highland Dr / SR-140 @ Minuteman Dr, DPR"
    }]
}, {
    "coord": [40.48544, -111.90034],
    "cams": [{
        "id": "11507",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16316.jpeg",
        "name": "14600 S / SR-140 @ Pony Express Dr / SR-287, DPR"
    }]
}, {
    "coord": [40.41873, -109.4981],
    "cams": [{
        "id": "11217",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16026.jpeg",
        "name": "1500 E / US-40 @ 2500 S / MP 147.9, NPL"
    }]
}, {
    "coord": [41.71198, -112.14292],
    "cams": [{
        "id": "11328",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-13-MP-11-all.gif",
        "name": "1600 E / SR-13 Liveview SB @ Main St / SR-102 / MP 11.17, TRE"
    }]
}, {
    "coord": [40.32643, -111.68631],
    "cams": [{
        "id": "9818",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14528.jpeg",
        "name": "1600 N @ 400 E, ORM"
    }]
}, {
    "coord": [40.32642, -111.71526],
    "cams": [{
        "id": "9816",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14526.jpeg",
        "name": "1600 N @ 800 W, ORM"
    }]
}, {
    "coord": [40.32679, -111.69664],
    "cams": [{
        "id": "9817",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14527.jpeg",
        "name": "1600 N @ Main St, ORM"
    }]
}, {
    "coord": [40.32633, -111.72483],
    "cams": [{
        "id": "9815",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14525.jpeg",
        "name": "1600 N ORM / 600 S LDN @ 1200 W ORM / 400 W, LDN"
    }]
}, {
    "coord": [41.13986, -112.06447],
    "cams": [{
        "id": "10275",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14984.jpeg",
        "name": "1800 N / SR-37 @ 2000 W / Midland Dr / SR-108, CTN (Local)"
    }]
}, {
    "coord": [41.17634, -112.02582],
    "cams": [{
        "id": "12207",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17015.jpeg",
        "name": "1900 W / SR-126 @ 4800 S, ROY"
    }]
}, {
    "coord": [41.15453, -112.02589],
    "cams": [{
        "id": "12208",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17016.jpeg",
        "name": "1900 W / SR-126 @ 6000 S, ROY"
    }]
}, {
    "coord": [41.19753, -112.02588],
    "cams": [{
        "id": "9399",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux339.jpeg",
        "name": "1900 W / SR-126 @ Hinkley Dr / SR-79, ROY"
    }]
}, {
    "coord": [41.16736, -112.02603],
    "cams": [{
        "id": "9201",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux328.jpeg",
        "name": "1900 W / SR-126 @ Riverdale Rd / 5300 S / SR-26, ROY"
    }]
}, {
    "coord": [40.30198, -109.98874],
    "cams": [{
        "id": "11776",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16584.jpeg",
        "name": "200 E / US-40 @ 200 N / US-40 / SR-121 / MP 114.58, RSV"
    }]
}, {
    "coord": [37.68087, -113.07874],
    "cams": [{
        "id": "10302",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15011.jpeg",
        "name": "200 N / Freedom Blvd / SR-56 @ 1225 W / I-15 NB Ramps, CDC"
    }]
}, {
    "coord": [37.68087, -113.08077],
    "cams": [{
        "id": "10303",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15012.jpeg",
        "name": "200 N / Freedom Blvd / SR-56 @ 1400 W / I-15 SB Ramps, CDC"
    }]
}, {
    "coord": [41.03825, -111.93833],
    "cams": [{
        "id": "12068",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16876.jpeg",
        "name": "200 N / SR-273 @ Main St / SR-273, KAY"
    }]
}, {
    "coord": [37.68324, -113.0917],
    "cams": [{
        "id": "12455",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17246.jpeg",
        "name": "200 N / SR-56 @ Cove Dr, CDC"
    }]
}, {
    "coord": [40.30212, -109.97274],
    "cams": [{
        "id": "11902",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16710.jpeg",
        "name": "200 N / US-40 @ 1500 E / MP 115.42, BAL"
    }]
}, {
    "coord": [40.302021, -109.892266],
    "cams": [{
        "id": "12127",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16935.jpeg",
        "name": "200 N / US-40 @ 5750 E / Whiterocks Hwy / MP 119.66, FTD"
    }]
}, {
    "coord": [40.302, -109.85906],
    "cams": [{
        "id": "11777",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16585.jpeg",
        "name": "200 N / US-40 @ 7500 E / MP 121.41, FTD"
    }]
}, {
    "coord": [40.76501, -111.8911],
    "cams": [{
        "id": "10716",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15525.jpeg",
        "name": "200 S @ Main St, SLC"
    }]
}, {
    "coord": [40.76497, -111.89399],
    "cams": [{
        "id": "9422",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux341.jpeg",
        "name": "200 S @ West Temple St, SLC"
    }]
}, {
    "coord": [41.92258, -111.81461],
    "cams": [{
        "id": "11673",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16481.jpeg",
        "name": "200 W / US-91 @ Main St / SR-142, RMD"
    }]
}, {
    "coord": [41.118214, -112.064384],
    "cams": [{
        "id": "12318",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17117.jpeg",
        "name": "2000 W / Midland Dr / SR-108 @ 300 N / SR-107, WPT"
    }]
}, {
    "coord": [41.11076, -112.06455],
    "cams": [{
        "id": "11359",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16168.jpeg",
        "name": "205 S / SR-193 @ 2000 W / SR-108, SYR"
    }]
}, {
    "coord": [41.11027, -112.03249],
    "cams": [{
        "id": "12195",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17003.jpeg",
        "name": "205 S / SR-193 @ Center St, CFD"
    }]
}, {
    "coord": [40.41332, -111.91662],
    "cams": [{
        "id": "11247",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-85-MP2-all.gif",
        "name": "2100 N / SR-194 Liveview WB @ Milepost 2.6, LHI"
    }]
}, {
    "coord": [40.41329, -111.88696],
    "cams": [{
        "id": "10721",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15530.jpeg",
        "name": "2100 N / SR-194 WB @ 2300 W, LHI"
    }]
}, {
    "coord": [40.4131, -111.90705],
    "cams": [{
        "id": "12316",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17115.jpeg",
        "name": "2100 N / SR-194 WB @ 3600 W, LHI"
    }]
}, {
    "coord": [40.72571, -111.9023],
    "cams": [{
        "id": "80",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux80.jpeg",
        "name": "2100 S / SR-201 @ 400 W / I-15 NB / MP 17.46, SLC"
    }]
}, {
    "coord": [40.72526, -111.90952],
    "cams": [{
        "id": "78",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux78.jpeg",
        "name": "2100 S / SR-201 @ 650 W / MP 17.1, SLC"
    }]
}, {
    "coord": [40.72549, -111.85394],
    "cams": [{
        "id": "9561",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux343.jpeg",
        "name": "2100 S @ 1300 E, SLC"
    }]
}, {
    "coord": [40.26336, -111.64741],
    "cams": [{
        "id": "9535",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14302.jpeg",
        "name": "2200 N @ Timpview Dr / 650 E, PVO"
    }]
}, {
    "coord": [40.26372, -111.65597],
    "cams": [{
        "id": "9536",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14303.jpeg",
        "name": "2230 N @ Canyon Rd, PVO"
    }]
}, {
    "coord": [40.26311, -111.66196],
    "cams": [{
        "id": "9538",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14305.jpeg",
        "name": "2230 N @ Freedom Blvd / 200 W, PVO"
    }]
}, {
    "coord": [40.22968, -111.64663],
    "cams": [{
        "id": "9508",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14275.jpeg",
        "name": "300 S / State St / US-89 @ 700 E, PVO"
    }]
}, {
    "coord": [37.04314, -112.52616],
    "cams": [{
        "id": "12475",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17266.jpeg",
        "name": "300 S / US-89 @ 100 E / US-89/US-89A, KNB"
    }]
}, {
    "coord": [40.22978, -111.65182],
    "cams": [{
        "id": "11838",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16646.jpeg",
        "name": "300 S / US-89 @ 400 E, PVO"
    }]
}, {
    "coord": [40.78253, -111.89963],
    "cams": [{
        "id": "11962",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16770.jpeg",
        "name": "300 W / John Stockton Dr / US-89 @ 600 N / SR-268, SLC"
    }]
}, {
    "coord": [40.76941, -111.89946],
    "cams": [{
        "id": "137",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux137.jpeg",
        "name": "300 W / John Stockton Dr / US-89 @ South Temple St, SLC"
    }]
}, {
    "coord": [37.12353, -113.52066],
    "cams": [{
        "id": "11536",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16345.jpeg",
        "name": "3050 E @ 850 N, STG"
    }]
}, {
    "coord": [37.116679, -113.520914],
    "cams": [{
        "id": "11911",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16719.jpeg",
        "name": "3050 E @ Deseret Dr / 450 N, STG"
    }]
}, {
    "coord": [40.69981, -111.85385],
    "cams": [{
        "id": "12327",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17126.jpeg",
        "name": "3300 S / SR-171 @ 1300 E, MCK"
    }]
}, {
    "coord": [40.69984, -111.85074],
    "cams": [{
        "id": "9646",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux347.jpeg",
        "name": "3300 S / SR-171 @ Highland Dr, SL"
    }]
}, {
    "coord": [40.699684, -111.89398],
    "cams": [{
        "id": "190",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux190.jpeg",
        "name": "3300 S / SR-171 @ West Temple St, SSL"
    }]
}, {
    "coord": [40.69667, -111.95801],
    "cams": [{
        "id": "10198",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14907.jpeg",
        "name": "3500 S / SR-171 @ 2700 W / Constitution Blvd, WVC"
    }]
}, {
    "coord": [40.69664, -111.96753],
    "cams": [{
        "id": "10197",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14906.jpeg",
        "name": "3500 S / SR-171 @ 3200 W, WVC"
    }]
}, {
    "coord": [40.69585, -111.94369],
    "cams": [{
        "id": "177",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux177.jpeg",
        "name": "3500 S / SR-171 @ Decker Lake Dr / 2200 W, WVC"
    }]
}, {
    "coord": [40.28279, -111.66307],
    "cams": [{
        "id": "9540",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14307.jpeg",
        "name": "3700 N @ 300 W, PVO"
    }]
}, {
    "coord": [40.68702, -111.89719],
    "cams": [{
        "id": "191",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux191.jpeg",
        "name": "3900 S @ 210 W / Howick St, SSL"
    }]
}, {
    "coord": [40.68694, -111.82467],
    "cams": [{
        "id": "11947",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16755.jpeg",
        "name": "3900 S @ 2300 E, HDY"
    }]
}, {
    "coord": [40.686822, -111.905668],
    "cams": [{
        "id": "11946",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16754.jpeg",
        "name": "3900 S @ 500 W, SSL"
    }]
}, {
    "coord": [40.89352, -111.88051],
    "cams": [{
        "id": "12059",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16867.jpeg",
        "name": "400 N / SR-106 @ Main St, BTF"
    }]
}, {
    "coord": [40.115343, -111.612187],
    "cams": [{
        "id": "12272",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17071.jpeg",
        "name": "400 N / SR-147 @ Spanish Fork Pkwy / 2550 E, SPF"
    }]
}, {
    "coord": [40.30429, -111.72442],
    "cams": [{
        "id": "9822",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14532.jpeg",
        "name": "400 N @ 1200 W, ORM"
    }]
}, {
    "coord": [40.304583, -111.700944],
    "cams": [{
        "id": "12511",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17302.jpeg",
        "name": "400 N @ Orem Blvd, ORM"
    }]
}, {
    "coord": [40.16113, -111.6512],
    "cams": [{
        "id": "12257",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17056.jpeg",
        "name": "400 S / SR-77 @ 2200 W, SPV"
    }]
}, {
    "coord": [40.16102, -111.62775],
    "cams": [{
        "id": "11464",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16273.jpeg",
        "name": "400 S / SR-77 @ 950 W, SPV"
    }]
}, {
    "coord": [40.76072, -111.87103],
    "cams": [{
        "id": "9560",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux314.jpeg",
        "name": "400 S / University Blvd / SR-186 @ 700 E / SR-71, SLC"
    }]
}, {
    "coord": [40.76065, -111.89972],
    "cams": [{
        "id": "9423",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux342.jpeg",
        "name": "400 S / US-89 @ 300 W / John Stockton Dr / US-89, SLC"
    }]
}, {
    "coord": [41.91786, -111.95298],
    "cams": [{
        "id": "11517",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-23MP24.gif",
        "name": "400 W / SR-23 Liveview SB @ Main St / 10200 N / SR-142 / MP 24.32, TNT"
    }]
}, {
    "coord": [41.190562, -112.0645],
    "cams": [{
        "id": "12060",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16868.jpeg",
        "name": "4000 S / SR-37 @ 3500 W, WHV"
    }]
}, {
    "coord": [41.19062, -112.09286],
    "cams": [{
        "id": "12009",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16817.jpeg",
        "name": "4000 S / SR-37 @ 4700 W / SR-134, WHV"
    }]
}, {
    "coord": [41.19051, -112.04819],
    "cams": [{
        "id": "12071",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16879.jpeg",
        "name": "4000 S / SR-37 @ Midland Dr / SR-108, ROY"
    }]
}, {
    "coord": [40.68223, -111.9674],
    "cams": [{
        "id": "12190",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16998.jpeg",
        "name": "4100 S @ 3200 W, WVC"
    }]
}, {
    "coord": [40.68205, -112.00569],
    "cams": [{
        "id": "9715",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux349.jpeg",
        "name": "4100 S @ 4800 W, WVC (Local)"
    }]
}, {
    "coord": [40.6742, -111.84159],
    "cams": [{
        "id": "9645",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux346.jpeg",
        "name": "4500 S / SR-266 @ Highland Dr, HDY"
    }]
}, {
    "coord": [40.6676, -111.95795],
    "cams": [{
        "id": "9644",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux345.jpeg",
        "name": "4700 S @ 2700 W, TAY"
    }]
}, {
    "coord": [40.29755, -111.66303],
    "cams": [{
        "id": "9542",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14309.jpeg",
        "name": "4800 N @ 300 W / Riverbottom Rd, PVO"
    }]
}, {
    "coord": [40.46251, -109.56664],
    "cams": [{
        "id": "11778",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16586.jpeg",
        "name": "500 N / SR-121 @ 2000 W / Aggie Blvd / MP 38.32, MAE"
    }]
}, {
    "coord": [40.24039, -111.65507],
    "cams": [{
        "id": "12219",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17027.jpeg",
        "name": "500 N @ 200 E, PVO"
    }]
}, {
    "coord": [40.75851, -111.89092],
    "cams": [{
        "id": "138",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux138.jpeg",
        "name": "500 S / Cesar E Chavez Blvd / SR-269 @ Main St, SLC"
    }]
}, {
    "coord": [40.75848, -111.85391],
    "cams": [{
        "id": "140",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux140.jpeg",
        "name": "500 S / University Blvd / SR-186 @ 1300 E, SLC"
    }]
}, {
    "coord": [40.75823, -111.84504],
    "cams": [{
        "id": "9207",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux327.jpeg",
        "name": "500 S / University Blvd / SR-186 @ 1580 E / Guardsman Way, SLC"
    }]
}, {
    "coord": [40.88431, -111.88069],
    "cams": [{
        "id": "9777",
        "url": "http://www.udottraffic.utah.gov/1_devices/Aux14487.jpeg",
        "name": "500 S @ Main St, BTF"
    }]
}, {
    "coord": [40.25103, -111.66764],
    "cams": [{
        "id": "9526",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14293.jpeg",
        "name": "500 W / State St / US-89 @ Cougar Blvd / Columbia Ln / 1230 N, PVO"
    }]
}, {
    "coord": [40.89401, -111.89221],
    "cams": [{
        "id": "9638",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux436.jpeg",
        "name": "500 W / US-89 @ 400 N / SR-106, BTF"
    }]
}, {
    "coord": [40.24041, -111.66743],
    "cams": [{
        "id": "9520",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14287.jpeg",
        "name": "500 W / US-89 @ 500 N, PVO"
    }]
}, {
    "coord": [40.88427, -111.89218],
    "cams": [{
        "id": "9639",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux437.jpeg",
        "name": "500 W / US-89 @ 500 S / SR-68, BTF"
    }]
}, {
    "coord": [40.24431, -111.66747],
    "cams": [{
        "id": "9525",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14292.jpeg",
        "name": "500 W / US-89 @ 800 N, PVO"
    }]
}, {
    "coord": [40.23376, -111.6675],
    "cams": [{
        "id": "9550",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14317.jpeg",
        "name": "500 W / US-89 @ Center St / SR-114, PVO"
    }]
}, {
    "coord": [40.22159, -111.66738],
    "cams": [{
        "id": "9676",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14404.jpeg",
        "name": "500 W @ 920 S, PVO"
    }]
}, {
    "coord": [40.654754, -111.899772],
    "cams": [{
        "id": "12027",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16835.jpeg",
        "name": "5300 S / SR-173 @ 320 W / Commerce Dr, MUR"
    }]
}, {
    "coord": [40.65306, -111.94832],
    "cams": [{
        "id": "10889",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15698.jpeg",
        "name": "5400 S / SR-173 @ 2200 W, TAY"
    }]
}, {
    "coord": [40.65302, -111.95788],
    "cams": [{
        "id": "10890",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15699.jpeg",
        "name": "5400 S / SR-173 @ 2700 W, TAY"
    }]
}, {
    "coord": [40.65306, -111.967354],
    "cams": [{
        "id": "10891",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15700.jpeg",
        "name": "5400 S / SR-173 @ 3200 W, TAY"
    }]
}, {
    "coord": [40.653024, -111.976941],
    "cams": [{
        "id": "10892",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15701.jpeg",
        "name": "5400 S / SR-173 @ 3600 W / Whitewood Dr, TAY"
    }]
}, {
    "coord": [40.65294, -111.97953],
    "cams": [{
        "id": "12395",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17194.jpeg",
        "name": "5400 S / SR-173 @ 3700 W, TAY"
    }]
}, {
    "coord": [40.65321, -111.98247],
    "cams": [{
        "id": "12394",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17193.jpeg",
        "name": "5400 S / SR-173 @ 3800 W, TAY"
    }]
}, {
    "coord": [40.65289, -111.98678],
    "cams": [{
        "id": "11068",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15877.jpeg",
        "name": "5400 S / SR-173 @ 4015 W, TAY"
    }]
}, {
    "coord": [40.65328, -112.03574],
    "cams": [{
        "id": "11511",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16320.jpeg",
        "name": "5400 S / SR-173 @ 6055 W / Upper Ridge Rd / USANA, WVC"
    }]
}, {
    "coord": [40.65387, -111.91046],
    "cams": [{
        "id": "11613",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16422.jpeg",
        "name": "5400 S / SR-173 @ 700 W / Murray Blvd, MUR"
    }]
}, {
    "coord": [40.65256, -111.99658],
    "cams": [{
        "id": "11067",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15876.jpeg",
        "name": "5415 S / 5400 S / SR-173 @ 4420 W, KRN"
    }]
}, {
    "coord": [40.65262, -112.00598],
    "cams": [{
        "id": "192",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux192.jpeg",
        "name": "5415 S / 5400 S / SR-173 @ 4800 W / Charlotte Ave, KRN"
    }]
}, {
    "coord": [40.71109, -112.02493],
    "cams": [{
        "id": "10612",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15421.jpeg",
        "name": "5600 W / SR-172 @ 2700 S / Lake Park Blvd, WVC"
    }]
}, {
    "coord": [40.69665, -112.02507],
    "cams": [{
        "id": "288",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux288.jpeg",
        "name": "5600 W / SR-172 @ 3500 S / SR-171, WVC"
    }]
}, {
    "coord": [40.68222, -112.02454],
    "cams": [{
        "id": "12055",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16863.jpeg",
        "name": "5600 W / SR-172 @ 4100 S, WVC"
    }]
}, {
    "coord": [40.65318, -112.02443],
    "cams": [{
        "id": "11510",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16319.jpeg",
        "name": "5600 W / SR-172 @ 5400 S / SR-173, SL"
    }]
}, {
    "coord": [40.602173, -112.024403],
    "cams": [{
        "id": "12231",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17030.jpeg",
        "name": "5600 W @ 8200 S, WJD"
    }]
}, {
    "coord": [40.63613, -111.80567],
    "cams": [{
        "id": "11950",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16758.jpeg",
        "name": "6200 S / SR-190 @ 3000 E, HDY"
    }]
}, {
    "coord": [40.63255, -111.79972],
    "cams": [{
        "id": "9897",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14606.jpeg",
        "name": "6200 S / Wasatch Blvd / SR-190 @ Wasatch Blvd / Millrock Dr, CWH"
    }]
}, {
    "coord": [40.638514, -111.944439],
    "cams": [{
        "id": "10553",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15362.jpeg",
        "name": "6200 S @ Jordan Canal Rd / Margray Dr, TAY"
    }]
}, {
    "coord": [40.55872, -111.87216],
    "cams": [{
        "id": "9776",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14486.jpeg",
        "name": "700 E / SR-71 @ 10600 S, SND"
    }]
}, {
    "coord": [40.551519, -111.872178],
    "cams": [{
        "id": "10674",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15483.jpeg",
        "name": "700 E / SR-71 @ 11000 S, SND"
    }]
}, {
    "coord": [40.5443, -111.872],
    "cams": [{
        "id": "10873",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15682.jpeg",
        "name": "700 E / SR-71 @ 11400 S, SND"
    }]
}, {
    "coord": [40.74162, -111.87106],
    "cams": [{
        "id": "11515",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16324.jpeg",
        "name": "700 E / SR-71 @ 1300 S, SLC"
    }]
}, {
    "coord": [40.73361, -111.87094],
    "cams": [{
        "id": "11522",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16331.jpeg",
        "name": "700 E / SR-71 @ 1700 S, SLC"
    }]
}, {
    "coord": [40.69981, -111.87134],
    "cams": [{
        "id": "9558",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux313.jpeg",
        "name": "700 E / SR-71 @ 3300 S / SR-171, SSL"
    }]
}, {
    "coord": [40.686902, -111.871644],
    "cams": [{
        "id": "11856",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16664.jpeg",
        "name": "700 E / SR-71 @ 3900 S, MCK"
    }]
}, {
    "coord": [40.67432, -111.87144],
    "cams": [{
        "id": "9631",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux311.jpeg",
        "name": "700 E / SR-71 @ 4500 S / SR-266, MUR"
    }]
}, {
    "coord": [40.74979, -111.87086],
    "cams": [{
        "id": "139",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux139.jpeg",
        "name": "700 E / SR-71 @ 900 S, SLC"
    }]
}, {
    "coord": [40.5882, -111.87224],
    "cams": [{
        "id": "10535",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15344.jpeg",
        "name": "700 E / SR-71 @ 9000 S / SR-209, SND"
    }]
}, {
    "coord": [40.57329, -111.87216],
    "cams": [{
        "id": "9775",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14485.jpeg",
        "name": "700 E / SR-71 @ 9800 S / Sego Lily Dr, SND"
    }]
}, {
    "coord": [41.10359, -112.022],
    "cams": [{
        "id": "11360",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16169.jpeg",
        "name": "700 S / SR-193 @ Industrial Pkwy, CFD"
    }]
}, {
    "coord": [37.09622, -113.57484],
    "cams": [{
        "id": "10218",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14927.jpeg",
        "name": "700 S @ 400 E / Flood St, STG"
    }]
}, {
    "coord": [40.75415, -111.89099],
    "cams": [{
        "id": "186",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux186.jpeg",
        "name": "700 S @ Main St, SLC"
    }]
}, {
    "coord": [40.621051, -111.910479],
    "cams": [{
        "id": "12476",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17267.jpeg",
        "name": "7200 S / Jordan River Blvd / SR-48 @ 700 W, MDV"
    }]
}, {
    "coord": [40.609648, -112.024606],
    "cams": [{
        "id": "12230",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17029.jpeg",
        "name": "7800 S @ 5600 W, WJD"
    }]
}, {
    "coord": [40.60963, -111.99747],
    "cams": [{
        "id": "11513",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16322.jpeg",
        "name": "7800 S @ Airport Rd / 4450 W, WJD"
    }]
}, {
    "coord": [40.27819, -111.67607],
    "cams": [{
        "id": "10029",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14738.jpeg",
        "name": "800 E @ 1000 S, ORM"
    }]
}, {
    "coord": [40.31909, -111.67655],
    "cams": [{
        "id": "11593",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16402.jpeg",
        "name": "800 E @ 1200 N, ORM"
    }]
}, {
    "coord": [40.27494, -111.676246],
    "cams": [{
        "id": "12512",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17303.jpeg",
        "name": "800 E @ 1200 S, ORM"
    }]
}, {
    "coord": [40.28235, -111.67643],
    "cams": [{
        "id": "9830",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14540.jpeg",
        "name": "800 E @ 800 S, ORM"
    }]
}, {
    "coord": [40.31188, -111.723375],
    "cams": [{
        "id": "10566",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15375.jpeg",
        "name": "800 N / SR-52 @ 1200 W, ORM"
    }]
}, {
    "coord": [40.31193, -111.68616],
    "cams": [{
        "id": "10026",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14735.jpeg",
        "name": "800 N / SR-52 @ 400 E, ORM"
    }]
}, {
    "coord": [40.31193, -111.67648],
    "cams": [{
        "id": "9274",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux403.jpeg",
        "name": "800 N / SR-52 @ 800 E, ORM"
    }]
}, {
    "coord": [40.31197, -111.71507],
    "cams": [{
        "id": "9821",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14531.jpeg",
        "name": "800 N / SR-52 @ 800 W, ORM"
    }]
}, {
    "coord": [40.31191, -111.66492],
    "cams": [{
        "id": "11390",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16199.jpeg",
        "name": "800 N / SR-52 @ Palisade Dr / 1300 E, ORM"
    }]
}, {
    "coord": [40.28238, -111.70534],
    "cams": [{
        "id": "10028",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14737.jpeg",
        "name": "800 S @ 400 W, ORM"
    }]
}, {
    "coord": [40.282363, -111.69544],
    "cams": [{
        "id": "12514",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17305.jpeg",
        "name": "800 S @ Main St, ORM"
    }]
}, {
    "coord": [40.282354, -111.69096],
    "cams": [{
        "id": "12513",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17304.jpeg",
        "name": "800 S @ Orem Blvd, ORM"
    }]
}, {
    "coord": [40.24521, -111.69035],
    "cams": [{
        "id": "10497",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15306.jpeg",
        "name": "820 N @ Independence Ave, PVO"
    }]
}, {
    "coord": [40.711322, -112.092046],
    "cams": [{
        "id": "12010",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16818.jpeg",
        "name": "8400 W / Bacchus Hwy / SR-111 @ 2700 S / Main St, MAG"
    }]
}, {
    "coord": [40.649683, -111.86613],
    "cams": [{
        "id": "12262",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17061.jpeg",
        "name": "900 E / SR-71 @ 5600 S, MUR"
    }]
}, {
    "coord": [40.62195, -111.86617],
    "cams": [{
        "id": "11775",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16583.jpeg",
        "name": "900 E / SR-71 @ Fort Union Blvd / 7100 S, MDV"
    }]
}, {
    "coord": [40.66559, -111.86484],
    "cams": [{
        "id": "9245",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux332.jpeg",
        "name": "900 E / SR-71 @ Van Winkle Expwy / SR-152, MUR"
    }]
}, {
    "coord": [40.24298, -111.6431],
    "cams": [{
        "id": "9621",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14383.jpeg",
        "name": "900 E @ 700 N, PVO"
    }]
}, {
    "coord": [40.24975, -111.6431],
    "cams": [{
        "id": "9532",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14299.jpeg",
        "name": "900 E @ Birch Ln / Heritage Dr / 1200 N, PVO"
    }]
}, {
    "coord": [40.23396, -111.64324],
    "cams": [{
        "id": "9509",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14276.jpeg",
        "name": "900 E @ Center St, PVO"
    }]
}, {
    "coord": [40.26001, -111.64354],
    "cams": [{
        "id": "9534",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14301.jpeg",
        "name": "900 E @ Temple View Dr, PVO"
    }]
}, {
    "coord": [40.25666, -111.64326],
    "cams": [{
        "id": "9533",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14300.jpeg",
        "name": "900 E @ University Pkwy, PVO"
    }]
}, {
    "coord": [40.58794, -111.88601],
    "cams": [{
        "id": "12450",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17241.jpeg",
        "name": "9000 S / SR-209 @ 150 E / Trax, SND"
    }]
}, {
    "coord": [40.58769, -111.98663],
    "cams": [{
        "id": "12232",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17031.jpeg",
        "name": "9000 S / SR-209 @ 4000 W, WJD"
    }]
}, {
    "coord": [40.5878, -111.91023],
    "cams": [{
        "id": "9642",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux303.jpeg",
        "name": "9000 S / SR-209 @ 700 W, SND"
    }]
}, {
    "coord": [40.57908, -111.82393],
    "cams": [{
        "id": "11299",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16108.jpeg",
        "name": "9400 S / Little Cottonwood Rd / SR-209 @ 2300 E / Quail Hollow Dr, SND"
    }]
}, {
    "coord": [40.58052, -111.85322],
    "cams": [{
        "id": "9347",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux336.jpeg",
        "name": "9400 S / SR-209 @ 1300 E, SND"
    }]
}, {
    "coord": [40.5794, -111.83314],
    "cams": [{
        "id": "9904",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14613.jpeg",
        "name": "9400 S / SR-209 @ 2000 E / Highland Dr, SND"
    }]
}, {
    "coord": [41.0483, -111.98799],
    "cams": [{
        "id": "10876",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15685.jpeg",
        "name": "Angel St @ Layton Pkwy, LTN"
    }]
}, {
    "coord": [41.08939, -112.06436],
    "cams": [{
        "id": "12070",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16878.jpeg",
        "name": "Antelope Dr / 1700 S / SR-108 @ 2000 W / SR-108, SYR"
    }]
}, {
    "coord": [41.08938, -112.02636],
    "cams": [{
        "id": "12069",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16877.jpeg",
        "name": "Antelope Dr / 1700 S / SR-108 @ Main St, CFD"
    }]
}, {
    "coord": [40.60268, -112.0577],
    "cams": [{
        "id": "11468",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16277.jpeg",
        "name": "Bacchus Hwy / SR-111 @ 8200 S, WJD"
    }]
}, {
    "coord": [40.57581, -112.06143],
    "cams": [{
        "id": "11253",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-111mile0-all.gif",
        "name": "Bacchus Hwy / SR-111 Liveview NB @ New Bingham Hwy / MP 0, WJD"
    }]
}, {
    "coord": [40.63522, -112.05592],
    "cams": [{
        "id": "10755",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR111%20@%20Bacchus.gif",
        "name": "Bacchus Hwy / SR-111 RWIS SB @ 6400 S / MP 4.15, WVC"
    }]
}, {
    "coord": [40.500803, -111.885112],
    "cams": [{
        "id": "11951",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16759.jpeg",
        "name": "Bangerter Hwy / 200 E / SR-154 @ 13800 S, DPR"
    }]
}, {
    "coord": [40.56199, -111.97692],
    "cams": [{
        "id": "9770",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14480.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 10400 S / South Jordan Pkwy / SR-151, SJO"
    }]
}, {
    "coord": [40.54756, -111.98294],
    "cams": [{
        "id": "12447",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17238.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 11200 S, SJO"
    }]
}, {
    "coord": [40.544316, -111.984498],
    "cams": [{
        "id": "9769",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14479.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 11400 S, SJO"
    }]
}, {
    "coord": [40.54127, -111.98464],
    "cams": [{
        "id": "12405",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17204.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 11500 S, SJO"
    }]
}, {
    "coord": [40.52221, -111.98412],
    "cams": [{
        "id": "306",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux306.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 12600 S / SR-71, RVT"
    }]
}, {
    "coord": [40.50772, -111.98259],
    "cams": [{
        "id": "9768",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14478.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 13400 S, RVT"
    }]
}, {
    "coord": [40.50413, -111.89669],
    "cams": [{
        "id": "11881",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16689.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 200 W / MP 0.78, DPR"
    }]
}, {
    "coord": [40.71853, -111.98532],
    "cams": [{
        "id": "267",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux267.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 2400 S / Lake Park Blvd, WVC"
    }]
}, {
    "coord": [40.71164, -111.981],
    "cams": [{
        "id": "268",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux268.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 2700 S / Parkway Blvd, WVC"
    }]
}, {
    "coord": [40.50039, -111.95768],
    "cams": [{
        "id": "9767",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14477.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 2700 W, BLF"
    }]
}, {
    "coord": [40.50402, -111.90076],
    "cams": [{
        "id": "11880",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16688.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 300 W / MP 1.0, DPR"
    }]
}, {
    "coord": [40.70398, -111.97948],
    "cams": [{
        "id": "269",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux269.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 3100 S, WVC"
    }]
}, {
    "coord": [40.69649, -111.98051],
    "cams": [{
        "id": "266",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux266.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 3500 S / SR-171, WVC"
    }]
}, {
    "coord": [40.68239, -111.98188],
    "cams": [{
        "id": "265",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux265.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 4100 S, WVC"
    }]
}, {
    "coord": [40.66735, -111.98115],
    "cams": [{
        "id": "264",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux264.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 4700 S, TAY"
    }]
}, {
    "coord": [40.50235, -111.90468],
    "cams": [{
        "id": "11879",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16687.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 500 W / MP 1.25, DPR"
    }]
}, {
    "coord": [40.65727, -111.9822],
    "cams": [{
        "id": "263",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux263.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 5200 S, TAY"
    }]
}, {
    "coord": [40.65464, -111.98131],
    "cams": [{
        "id": "12387",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17186.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 5300 S, TAY"
    }]
}, {
    "coord": [40.64941, -111.97998],
    "cams": [{
        "id": "12386",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17185.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 5600 S, TAY"
    }]
}, {
    "coord": [40.64758, -111.97864],
    "cams": [{
        "id": "12396",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17195.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 5700 S, TAY"
    }]
}, {
    "coord": [40.501, -111.90848],
    "cams": [{
        "id": "11878",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16686.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 600 W / MP 1.45, DPR"
    }]
}, {
    "coord": [40.63862, -111.9762],
    "cams": [{
        "id": "193",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux193.jpg",
        "name": "Bangerter Hwy / SR-154 @ 6200 S, WJD"
    }]
}, {
    "coord": [40.62595, -111.97678],
    "cams": [{
        "id": "12397",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17196.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 6900 S, WJD"
    }]
}, {
    "coord": [40.4992, -111.91008],
    "cams": [{
        "id": "11877",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16685.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 700 W / MP 1.6, DPR"
    }]
}, {
    "coord": [40.621759, -111.976691],
    "cams": [{
        "id": "12399",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17198.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 7100 S, WJD"
    }]
}, {
    "coord": [40.60931, -111.97615],
    "cams": [{
        "id": "261",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux261.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 7800 S / SR-48, WJD"
    }]
}, {
    "coord": [40.49681, -111.91378],
    "cams": [{
        "id": "11876",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16684.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 800 W / MP 1.86, DPR"
    }]
}, {
    "coord": [40.58985, -111.97759],
    "cams": [{
        "id": "12400",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17199.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 8900 S, WJD"
    }]
}, {
    "coord": [40.5851, -111.9778],
    "cams": [{
        "id": "12402",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17201.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 9150 S, WJD"
    }]
}, {
    "coord": [40.57334, -111.97719],
    "cams": [{
        "id": "9771",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14481.jpg",
        "name": "Bangerter Hwy / SR-154 @ 9800 S, SJO"
    }]
}, {
    "coord": [40.7432, -111.98969],
    "cams": [{
        "id": "10719",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15528.jpeg",
        "name": "Bangerter Hwy / SR-154 @ California Ave, SLC"
    }]
}, {
    "coord": [40.76845, -111.98641],
    "cams": [{
        "id": "46",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux46.jpeg",
        "name": "Bangerter Hwy / SR-154 @ SLC Airport / N of I-80  / MP 24.1, SLC"
    }]
}, {
    "coord": [40.5003, -111.93915],
    "cams": [{
        "id": "9766",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14476.jpeg",
        "name": "Bangerter Hwy / SR-154 EB @ Redwood Rd / SR-68, BLF"
    }]
}, {
    "coord": [40.624202, -111.975842],
    "cams": [{
        "id": "262",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux262.jpeg",
        "name": "Bangerter Hwy / SR-154 NB @ 7000 S, WJD"
    }]
}, {
    "coord": [40.58801, -111.977],
    "cams": [{
        "id": "12401",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17200.jpeg",
        "name": "Bangerter Hwy / SR-154 NB @ 9000 S / SR-209, WJD"
    }]
}, {
    "coord": [40.6242, -111.97707],
    "cams": [{
        "id": "12398",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17197.jpeg",
        "name": "Bangerter Hwy / SR-154 SB @ 7000 S / Jordan Landing Blvd, WJD"
    }]
}, {
    "coord": [40.587641, -111.978138],
    "cams": [{
        "id": "260",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux260.jpeg",
        "name": "Bangerter Hwy / SR-154 SB @ 9000 S / SR-209, WJD"
    }]
}, {
    "coord": [40.50104, -111.93834],
    "cams": [{
        "id": "11603",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16412.jpeg",
        "name": "Bangerter Hwy / SR-154 WB @ Redwood Rd / SR-68, RVT"
    }]
}, {
    "coord": [40.79452, -111.90363],
    "cams": [{
        "id": "180",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux180.jpeg",
        "name": "Beck St / US-89 @ Victory Rd / SR-186, SLC"
    }]
}, {
    "coord": [40.648236, -111.662442],
    "cams": [{
        "id": "11405",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16214.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ Butler / MP 10, SL"
    }]
}, {
    "coord": [40.65035, -111.65022],
    "cams": [{
        "id": "11406",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16215.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ Cardiff Fork / MP 10.74, SL"
    }]
}, {
    "coord": [40.62426, -111.75071],
    "cams": [{
        "id": "11403",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16212.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ Dogwood / MP 4.1, SL"
    }]
}, {
    "coord": [40.63338, -111.72272],
    "cams": [{
        "id": "11404",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16213.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ S-Curves / MP 6.38, SL"
    }]
}, {
    "coord": [40.63774, -111.62091],
    "cams": [{
        "id": "11407",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16216.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ Silver Fork / MP 12.54, SL"
    }]
}, {
    "coord": [41.63139, -111.70707],
    "cams": [{
        "id": "11386",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-101-MP-13.gif",
        "name": "Blacksmith Fork Canyon Rd / SR-101 Liveview @ Left Hand Fork Rd / MP 13.1, CA"
    }]
}, {
    "coord": [37.08159, -113.58143],
    "cams": [{
        "id": "10281",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14990.jpeg",
        "name": "Bluff St / Riverside Dr / SR-18 @ Sunland Dr / Convention Center Dr, STG"
    }]
}, {
    "coord": [37.1167, -113.59679],
    "cams": [{
        "id": "10210",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14919.jpeg",
        "name": "Bluff St / SR-18 @ 500 N, STG"
    }]
}, {
    "coord": [37.09632, -113.58695],
    "cams": [{
        "id": "10278",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14987.jpeg",
        "name": "Bluff St / SR-18 @ 700 S, STG"
    }]
}, {
    "coord": [37.08685, -113.58471],
    "cams": [{
        "id": "10280",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14989.jpeg",
        "name": "Bluff St / SR-18 @ Main St / Black Ridge Dr / Hilton Dr, STG"
    }]
}, {
    "coord": [37.13395, -113.60293],
    "cams": [{
        "id": "10212",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14921.jpeg",
        "name": "Bluff St / SR-18 @ Snow Canyon Pkwy / Red Hills Pkwy, STG"
    }]
}, {
    "coord": [37.10989, -113.59381],
    "cams": [{
        "id": "10206",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14915.jpeg",
        "name": "Bluff St / SR-18 @ St George Blvd / SR-34, STG"
    }]
}, {
    "coord": [37.12447, -113.60046],
    "cams": [{
        "id": "10211",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14920.jpeg",
        "name": "Bluff St / SR-18 @ Sunset Blvd / SR-8, STG"
    }]
}, {
    "coord": [37.05242, -113.56361],
    "cams": [{
        "id": "10380",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15089.jpeg",
        "name": "Brigham Rd @ Desert Hills Dr, STG"
    }]
}, {
    "coord": [37.05608, -113.56815],
    "cams": [{
        "id": "11530",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16339.jpeg",
        "name": "Brigham Rd @ Hidden Valley Dr, STG"
    }]
}, {
    "coord": [40.10135, -111.63554],
    "cams": [{
        "id": "12056",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16864.jpeg",
        "name": "Canyon Rd / SR-198 @ 1100 E, SPF"
    }]
}, {
    "coord": [40.10029, -111.63089],
    "cams": [{
        "id": "12434",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17225.jpeg",
        "name": "Canyon Rd / SR-198 @ 1400 E, SPF"
    }]
}, {
    "coord": [40.29326, -111.65303],
    "cams": [{
        "id": "9778",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14488.jpeg",
        "name": "Canyon Rd @ Foothill Dr / 4525 N, PVO"
    }]
}, {
    "coord": [40.23388, -111.68744],
    "cams": [{
        "id": "10567",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15376.jpeg",
        "name": "Center St / SR-114 @ 1600 W, PVO"
    }]
}, {
    "coord": [40.23377, -111.67449],
    "cams": [{
        "id": "9519",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14286.jpeg",
        "name": "Center St / SR-114 @ 900 W, PVO"
    }]
}, {
    "coord": [41.9756, -111.8763],
    "cams": [{
        "id": "11475",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-61-mp-4.gif",
        "name": "Center St / SR-61 Liveview EB @ 800 W / SR-200, LEW"
    }]
}, {
    "coord": [40.10941, -111.6347],
    "cams": [{
        "id": "11952",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16760.jpeg",
        "name": "Center St @ 1150 E, SPF"
    }]
}, {
    "coord": [40.29718, -111.72427],
    "cams": [{
        "id": "9312",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux413.jpeg",
        "name": "Center St @ 1200 W, ORM"
    }]
}, {
    "coord": [40.297267, -111.701323],
    "cams": [{
        "id": "12510",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17301.jpeg",
        "name": "Center St @ 220 W / Garden Park Dr, ORM"
    }]
}, {
    "coord": [40.23365, -111.66394],
    "cams": [{
        "id": "9513",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14280.jpeg",
        "name": "Center St @ 300 W, PVO"
    }]
}, {
    "coord": [40.29708, -111.68623],
    "cams": [{
        "id": "9827",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14537.jpeg",
        "name": "Center St @ 400 E / Tiger Way, ORM"
    }]
}, {
    "coord": [40.29712, -111.7053],
    "cams": [{
        "id": "9310",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux411.jpeg",
        "name": "Center St @ 400 W, ORM"
    }]
}, {
    "coord": [40.29681, -111.6765],
    "cams": [{
        "id": "9317",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux418.jpeg",
        "name": "Center St @ 800 E, ORM"
    }]
}, {
    "coord": [40.29718, -111.71467],
    "cams": [{
        "id": "9825",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14535.jpeg",
        "name": "Center St @ 800 W, ORM"
    }]
}, {
    "coord": [40.29713, -111.69817],
    "cams": [{
        "id": "9826",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14536.jpeg",
        "name": "Center St @ Orem Blvd, ORM"
    }]
}, {
    "coord": [40.45804, -111.47188],
    "cams": [{
        "id": "11189",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15998.jpeg",
        "name": "Charleston Rd / 3600 W / SR-113 @ US-189, CHR"
    }]
}, {
    "coord": [40.25669, -111.67544],
    "cams": [{
        "id": "10109",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14818.jpeg",
        "name": "Columbia Ln @ 1700 N / 950 W, PVO"
    }]
}, {
    "coord": [40.77982, -111.88988],
    "cams": [{
        "id": "11633",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16442.jpeg",
        "name": "Columbus St / SR-186 @ 500 N, SLC"
    }]
}, {
    "coord": [40.703844, -111.958006],
    "cams": [{
        "id": "175",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux175.jpeg",
        "name": "Constitution Blvd / 2700 W @ 3100 S, WVC"
    }]
}, {
    "coord": [40.38586, -111.9354],
    "cams": [{
        "id": "11028",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15837.jpeg",
        "name": "Cory B Wride Memorial Hwy / SR-73 @ Foothill Blvd / 800 W, SSP"
    }]
}, {
    "coord": [40.38215, -111.96428],
    "cams": [{
        "id": "11711",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16519.jpeg",
        "name": "Cory B Wride Memorial Hwy / SR-73 @ Mt Airey Dr / MP 33.86, EAG"
    }]
}, {
    "coord": [40.38068, -111.97432],
    "cams": [{
        "id": "11029",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15838.jpeg",
        "name": "Cory B Wride Memorial Hwy / SR-73 @ Ranches Pkwy, EAG"
    }]
}, {
    "coord": [40.25059, -111.66202],
    "cams": [{
        "id": "9524",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14291.jpeg",
        "name": "Cougar Blvd / 1230 N @ Freedom Blvd / 200 W, PVO"
    }]
}, {
    "coord": [40.656679, -111.503247],
    "cams": [{
        "id": "11809",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16617.jpeg",
        "name": "Deer Valley Dr / SR-224 @ Bonanza Dr, PKC"
    }]
}, {
    "coord": [40.64602, -111.49512],
    "cams": [{
        "id": "11100",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-224-MP-4-all.gif",
        "name": "Deer Valley Dr / SR-224 Liveview NB @ Swede Alley / MP 4.73, PKC"
    }]
}, {
    "coord": [37.080802, -113.604173],
    "cams": [{
        "id": "11720",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16528.jpeg",
        "name": "Dixie Dr @ 1600 S, STG"
    }]
}, {
    "coord": [37.07616, -113.59707],
    "cams": [{
        "id": "11526",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16335.jpeg",
        "name": "Dixie Dr @ 600 W, STG"
    }]
}, {
    "coord": [37.09842, -113.61982],
    "cams": [{
        "id": "11528",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16337.jpeg",
        "name": "Dixie Dr @ Valley View Dr, STG"
    }]
}, {
    "coord": [40.953905, -111.549452],
    "cams": [{
        "id": "11761",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR65%20mp22.gif",
        "name": "East Canyon Rd / SR-65 Liveview NB @ MN/SU County Line / MP 21.76, MN"
    }]
}, {
    "coord": [41.07955, -111.95061],
    "cams": [{
        "id": "11387",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16196.jpeg",
        "name": "Fairfield Rd / 850 E @ Cherry Ln / 1350 N, LTN"
    }]
}, {
    "coord": [41.06744, -111.9503],
    "cams": [{
        "id": "11867",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16675.jpeg",
        "name": "Fairfield Rd / 850 E @ Wasatch Dr / 425 N, LTN"
    }]
}, {
    "coord": [40.7574, -111.83657],
    "cams": [{
        "id": "187",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux187.jpeg",
        "name": "Foothill Dr / Honorary Veterans Blvd / SR-186 @ Mario Capecchi Dr, SLC"
    }]
}, {
    "coord": [40.75071, -111.83067],
    "cams": [{
        "id": "9246",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux333.jpeg",
        "name": "Foothill Dr / Honorary Veterans Blvd / SR-186 @ Sunnyside Ave, SLC"
    }]
}, {
    "coord": [40.75488, -111.8336],
    "cams": [{
        "id": "188",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux188.jpeg",
        "name": "Foothill Dr / Honorary Veterans Blvd / SR-186 @ Wakara Way, SLC"
    }]
}, {
    "coord": [40.73898, -111.82501],
    "cams": [{
        "id": "9265",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux334.jpeg",
        "name": "Foothill Dr / SR-186 @ 2300 E, SLC"
    }]
}, {
    "coord": [40.71695, -111.80947],
    "cams": [{
        "id": "65",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux65.jpeg",
        "name": "Foothill Dr / SR-186 @ Parley`s Way, SLC"
    }]
}, {
    "coord": [37.094059, -113.545147],
    "cams": [{
        "id": "12024",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16832.jpeg",
        "name": "Foremaster Dr @ Five Sisters Dr, STG"
    }]
}, {
    "coord": [40.62628, -111.85473],
    "cams": [{
        "id": "12021",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16829.jpeg",
        "name": "Fort Union Blvd / 6910 S @ 1300 E, CWH"
    }]
}, {
    "coord": [40.62387, -111.82458],
    "cams": [{
        "id": "12022",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16830.jpeg",
        "name": "Fort Union Blvd / 7000 S @ 2300 E, CWH"
    }]
}, {
    "coord": [40.23537, -111.66224],
    "cams": [{
        "id": "9514",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14281.jpeg",
        "name": "Freedom Blvd / 200 W @ 100 N, PVO"
    }]
}, {
    "coord": [40.23218, -111.66224],
    "cams": [{
        "id": "9512",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14279.jpeg",
        "name": "Freedom Blvd / 200 W @ 100 S, PVO"
    }]
}, {
    "coord": [40.24863, -111.66204],
    "cams": [{
        "id": "9523",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14290.jpeg",
        "name": "Freedom Blvd / 200 W @ 1100 N, PVO"
    }]
}, {
    "coord": [40.22971, -111.66222],
    "cams": [{
        "id": "9511",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14278.jpeg",
        "name": "Freedom Blvd / 200 W @ 300 S / US-89, PVO"
    }]
}, {
    "coord": [40.24042, -111.66219],
    "cams": [{
        "id": "9521",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14288.jpeg",
        "name": "Freedom Blvd / 200 W @ 500 N, PVO"
    }]
}, {
    "coord": [40.24439, -111.66209],
    "cams": [{
        "id": "9522",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14289.jpeg",
        "name": "Freedom Blvd / 200 W @ 800 N, PVO"
    }]
}, {
    "coord": [40.22184, -111.66233],
    "cams": [{
        "id": "9503",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14270.jpeg",
        "name": "Freedom Blvd / 200 W @ 920 S, PVO"
    }]
}, {
    "coord": [40.279044, -111.730578],
    "cams": [{
        "id": "9831",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14541.jpeg",
        "name": "Geneva Rd / SR-114 @ 1000 S / Plant Ln, ORM"
    }]
}, {
    "coord": [40.25206, -111.70578],
    "cams": [{
        "id": "10316",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15025.jpeg",
        "name": "Geneva Rd / SR-114 @ 1390 N, PVO"
    }]
}, {
    "coord": [40.32624, -111.737295],
    "cams": [{
        "id": "10560",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15369.jpeg",
        "name": "Geneva Rd / SR-114 @ 1600 N ORM / 600 S LDN / SR-241, LDN"
    }]
}, {
    "coord": [40.28983, -111.7339],
    "cams": [{
        "id": "9828",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14538.jpeg",
        "name": "Geneva Rd / SR-114 @ 400 S, ORM"
    }]
}, {
    "coord": [40.35075, -111.74073],
    "cams": [{
        "id": "10565",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15374.jpeg",
        "name": "Geneva Rd / SR-114 @ 700 N / SR-129, LDN"
    }]
}, {
    "coord": [40.3117, -111.73447],
    "cams": [{
        "id": "9820",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14530.jpg",
        "name": "Geneva Rd / SR-114 @ 800 N / SR-52, ORM"
    }]
}, {
    "coord": [40.28234, -111.73235],
    "cams": [{
        "id": "11882",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16690.jpeg",
        "name": "Geneva Rd / SR-114 @ 800 S / Springwater Dr, ORM"
    }]
}, {
    "coord": [40.24462, -111.69699],
    "cams": [{
        "id": "9714",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14284.jpeg",
        "name": "Geneva Rd / SR-114 @ 820 N, PVO"
    }]
}, {
    "coord": [40.23389, -111.69472],
    "cams": [{
        "id": "9515",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14282.jpeg",
        "name": "Geneva Rd / SR-114 @ Center St / SR-114, PVO"
    }]
}, {
    "coord": [40.29706, -111.73381],
    "cams": [{
        "id": "9824",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14534.jpeg",
        "name": "Geneva Rd / SR-114 @ Center St, ORM"
    }]
}, {
    "coord": [40.27514, -111.7275],
    "cams": [{
        "id": "10252",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14961.jpeg",
        "name": "Geneva Rd / SR-114 @ University Pkwy / SR-265, ORM"
    }]
}, {
    "coord": [41.060219, -111.975515],
    "cams": [{
        "id": "10679",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15488.jpeg",
        "name": "Gentile St @ Flint St, LTN"
    }]
}, {
    "coord": [40.70393, -111.94834],
    "cams": [{
        "id": "9267",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux9174.jpeg",
        "name": "Grizzlies Blvd / 3100 S @ Decker Lake Dr, WVC"
    }]
}, {
    "coord": [41.22244, -111.94817],
    "cams": [{
        "id": "9635",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux433.jpeg",
        "name": "Harrison Blvd / 1200 E / SR-203 @ 24th St, OGD"
    }]
}, {
    "coord": [41.20989, -111.94851],
    "cams": [{
        "id": "9634",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux432.jpeg",
        "name": "Harrison Blvd / 1200 E / SR-203 @ 30th St / SR-79, OGD"
    }]
}, {
    "coord": [41.17595, -111.94949],
    "cams": [{
        "id": "12076",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16884.jpeg",
        "name": "Harrison Blvd / 1200 E / SR-203 @ 4800 S / Edgewood Dr, OGD"
    }]
}, {
    "coord": [41.2417, -111.9452],
    "cams": [{
        "id": "12047",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16855.jpeg",
        "name": "Harrison Blvd / SR-203 @ 12th St / Ogden Canyon Rd / SR-39, OGD"
    }]
}, {
    "coord": [41.19762, -111.9487],
    "cams": [{
        "id": "9398",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux338.jpeg",
        "name": "Harrison Blvd / Wildcat Way / SR-203 @ 36th St, OGD"
    }]
}, {
    "coord": [41.18636, -111.94903],
    "cams": [{
        "id": "9200",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux326.jpeg",
        "name": "Harrison Blvd / Wildcat Way / SR-203 @ 42nd St / Country Hills Dr, OGD"
    }]
}, {
    "coord": [40.615336, -111.833568],
    "cams": [{
        "id": "11945",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16753.jpeg",
        "name": "Highland Dr / 2000 E @ Bengal Blvd / Parkridge Dr, CWH"
    }]
}, {
    "coord": [40.62406, -111.83431],
    "cams": [{
        "id": "9643",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux344.jpeg",
        "name": "Highland Dr / 2000 E @ Fort Union Blvd / 7000 S, CWH"
    }]
}, {
    "coord": [40.63837, -111.83419],
    "cams": [{
        "id": "11964",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16772.jpeg",
        "name": "Highland Dr / Van Winkle Expwy / SR-152 @ 6200 S, HDY"
    }]
}, {
    "coord": [40.68712, -111.84497],
    "cams": [{
        "id": "9647",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux348.jpeg",
        "name": "Highland Dr @ 3900 S, SL"
    }]
}, {
    "coord": [41.08918, -111.97343],
    "cams": [{
        "id": "9637",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux435.jpeg",
        "name": "Hill Field Rd / SR-232 @ 2000 N / Antelope Dr, LTN"
    }]
}, {
    "coord": [41.10352, -111.97344],
    "cams": [{
        "id": "9403",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux423.jpeg",
        "name": "Hill Field Rd / SR-232 @ 3000 N / SR-193, LTN"
    }]
}, {
    "coord": [41.07505, -111.97415],
    "cams": [{
        "id": "9125",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux315.jpeg",
        "name": "Hill Field Rd / SR-232 @ Gordon Ave / 1000 N, LTN"
    }]
}, {
    "coord": [41.07265, -111.97889],
    "cams": [{
        "id": "9405",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux425.jpeg",
        "name": "Hill Field Rd / SR-232 @ Main St / SR-126, LTN"
    }]
}, {
    "coord": [39.97543, -111.77257],
    "cams": [{
        "id": "11883",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16691.jpeg",
        "name": "I-15 @ Main St / US-6 / MP 244.8, STQ"
    }]
}, {
    "coord": [37.10978, -113.55661],
    "cams": [{
        "id": "11362",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16171.jpeg",
        "name": "I-15 DDI NB @ St George Blvd / SR-34 / MP 8.41, STG"
    }]
}, {
    "coord": [37.10976, -113.55902],
    "cams": [{
        "id": "11361",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16170.jpeg",
        "name": "I-15 DDI SB @ St George Blvd / SR-34 / MP 8.41, STG"
    }]
}, {
    "coord": [41.53574, -112.06627],
    "cams": [{
        "id": "11759",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-15_MP365.gif",
        "name": "I-15 Liveview @ Promontory Rd / 900 N / SR-13 / MM 365.57, BRC"
    }]
}, {
    "coord": [39.8171, -111.83331],
    "cams": [{
        "id": "10859",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-15_MP232.gif",
        "name": "I-15 Liveview NB @ Mona / Exit 233 / SR-54 / MP 232.88, JU"
    }]
}, {
    "coord": [38.0656, -112.69139],
    "cams": [{
        "id": "11072",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-15-MP-94-all.gif",
        "name": "I-15 Liveview NB @ SR-20 / MP 94, RN"
    }]
}, {
    "coord": [37.80002, -112.94998],
    "cams": [{
        "id": "11619",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-15_Summit_Exit_MP_70-all.gif",
        "name": "I-15 Liveview NB @ Summit Exit / MP 70.02, RN"
    }]
}, {
    "coord": [41.999071, -112.197147],
    "cams": [{
        "id": "10797",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-15_MP400.gif",
        "name": "I-15 Liveview NB @ UT/ID State Line / MP 400.59, BE"
    }]
}, {
    "coord": [41.63502, -112.10134],
    "cams": [{
        "id": "11103",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-240-MP-0-all.gif",
        "name": "I-15 Liveview SB @ 6900 N / SR-240 / MP 372.83, HYV"
    }]
}, {
    "coord": [37.41224, -113.23408],
    "cams": [{
        "id": "10771",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-15_MP37.gif",
        "name": "I-15 Liveview SB @ Blackridge / Exit 36 / MP 36.77, WN"
    }]
}, {
    "coord": [39.37711, -112.07959],
    "cams": [{
        "id": "10763",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-15_MP194.gif",
        "name": "I-15 Liveview SB @ JU/MD Co Line / MP 194.55, JU"
    }]
}, {
    "coord": [39.6463, -111.89923],
    "cams": [{
        "id": "10850",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-15_MP218.gif",
        "name": "I-15 Liveview SB @ Milepost 218.8, JU"
    }]
}, {
    "coord": [39.978, -111.77],
    "cams": [{
        "id": "10867",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-15_MP245.gif",
        "name": "I-15 Liveview SB @ Santaquin / Exit 244 / US-6 / MP 245.06, STQ"
    }]
}, {
    "coord": [40.33922, -111.7515],
    "cams": [{
        "id": "10895",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15704.jpeg",
        "name": "I-15 NB @ 100 N / MP 274.15, LDN"
    }]
}, {
    "coord": [37.10607, -113.55897],
    "cams": [{
        "id": "10144",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14853.jpeg",
        "name": "I-15 NB @ 100 S / MP 8.41, STG"
    }]
}, {
    "coord": [41.69023, -112.16188],
    "cams": [{
        "id": "9698",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14406.jpeg",
        "name": "I-15 NB @ 10000 N / MP 377.93, TRE"
    }]
}, {
    "coord": [40.56697, -111.89907],
    "cams": [{
        "id": "82",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux82.jpeg",
        "name": "I-15 NB @ 10200 S / MP 294.2, SND"
    }]
}, {
    "coord": [40.55949, -111.89728],
    "cams": [{
        "id": "11942",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16750.jpeg",
        "name": "I-15 NB @ 10600 S / SR-151 / MP 293.65, SND"
    }]
}, {
    "coord": [40.55918, -111.8971],
    "cams": [{
        "id": "11943",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16751.jpeg",
        "name": "I-15 NB @ 10600 S / SR-151 / MP 293.65, SND (Tunnel)"
    }]
}, {
    "coord": [40.74455, -111.90366],
    "cams": [{
        "id": "112",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux112.jpeg",
        "name": "I-15 NB @ 1100 S / MP 306.53, SLC"
    }]
}, {
    "coord": [41.48544, -112.05271],
    "cams": [{
        "id": "11440",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16249.jpeg",
        "name": "I-15 NB @ 1100 S / US-91 / MP 362, BRC"
    }]
}, {
    "coord": [40.54042, -111.89324],
    "cams": [{
        "id": "10694",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15503.jpeg",
        "name": "I-15 NB @ 11500 S / MP 292.35, DPR"
    }]
}, {
    "coord": [37.08839, -113.57753],
    "cams": [{
        "id": "10147",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14856.jpeg",
        "name": "I-15 NB @ 1160 S / MP 6.77, STG"
    }]
}, {
    "coord": [40.53508, -111.89215],
    "cams": [{
        "id": "9656",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux356.jpeg",
        "name": "I-15 NB @ 11900 S / MP 291.98, DPR"
    }]
}, {
    "coord": [40.40279, -111.85124],
    "cams": [{
        "id": "10306",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15015.jpeg",
        "name": "I-15 NB @ 1200 N / MP 281.15, LHI"
    }]
}, {
    "coord": [41.38815, -112.04105],
    "cams": [{
        "id": "11263",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16072.jpeg",
        "name": "I-15 NB @ 1200 S / MP 355.15, WIL"
    }]
}, {
    "coord": [40.52727, -111.89021],
    "cams": [{
        "id": "9653",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux353.jpeg",
        "name": "I-15 NB @ 12300 S / SR-71 / MP 291.4, DPR"
    }]
}, {
    "coord": [41.2442, -112.01543],
    "cams": [{
        "id": "10073",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14782.jpeg",
        "name": "I-15 NB @ 12th St / 1200 S / SR-39 / MP 344.96, MSV"
    }]
}, {
    "coord": [40.18842, -111.64493],
    "cams": [{
        "id": "9720",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14425.jpeg",
        "name": "I-15 NB @ 1400 N / SR-75 / MP 261.83, SPV"
    }]
}, {
    "coord": [40.49727, -111.89078],
    "cams": [{
        "id": "11721",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16529.jpeg",
        "name": "I-15 NB @ 14000 S / MP 289.34, DPR"
    }]
}, {
    "coord": [40.4866, -111.89563],
    "cams": [{
        "id": "11724",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16532.jpeg",
        "name": "I-15 NB @ 14500 S / MP 288.54, DPR"
    }]
}, {
    "coord": [40.25353, -111.69691],
    "cams": [{
        "id": "11035",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15844.jpeg",
        "name": "I-15 NB @ 1460 N / MP 267.19, PVO"
    }]
}, {
    "coord": [40.87513, -111.89635],
    "cams": [{
        "id": "10494",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15303.jpeg",
        "name": "I-15 NB @ 1500 S / MP 316.23, WXS"
    }]
}, {
    "coord": [40.47534, -111.90533],
    "cams": [{
        "id": "11727",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16535.jpeg",
        "name": "I-15 NB @ 15200 S / MP 287.6, DPR"
    }]
}, {
    "coord": [40.4706, -111.90863],
    "cams": [{
        "id": "11728",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16536.jpeg",
        "name": "I-15 NB @ 15400 S / MP 287.23, DPR"
    }]
}, {
    "coord": [40.14544, -111.64647],
    "cams": [{
        "id": "11051",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15860.jpeg",
        "name": "I-15 NB @ 1600 S / MP 258.86, SPV"
    }]
}, {
    "coord": [40.26702, -111.71137],
    "cams": [{
        "id": "11033",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15842.jpeg",
        "name": "I-15 NB @ 1650 S / MP 268.37, ORM"
    }]
}, {
    "coord": [37.11753, -113.54751],
    "cams": [{
        "id": "10158",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14867.jpeg",
        "name": "I-15 NB @ 1680 E / MP 9.47, STG"
    }]
}, {
    "coord": [41.23666, -112.0137],
    "cams": [{
        "id": "10077",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14786.jpeg",
        "name": "I-15 NB @ 1700 S / River Canal / MP 344.5, WHV"
    }]
}, {
    "coord": [40.7309, -111.90419],
    "cams": [{
        "id": "106",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux106.jpeg",
        "name": "I-15 NB @ 1800 S / MP 305.6, SLC"
    }]
}, {
    "coord": [41.00663, -111.93194],
    "cams": [{
        "id": "10426",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15135.jpeg",
        "name": "I-15 NB @ 1800 S / MP 326.23, KAY"
    }]
}, {
    "coord": [40.40993, -111.86393],
    "cams": [{
        "id": "10083",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14792.jpeg",
        "name": "I-15 NB @ 1850 N / MP 282, LHI"
    }]
}, {
    "coord": [40.3344, -111.74403],
    "cams": [{
        "id": "11032",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15841.jpeg",
        "name": "I-15 NB @ 200 S / MP 273.67, LDN"
    }]
}, {
    "coord": [41.40512, -112.04756],
    "cams": [{
        "id": "9875",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14584.jpeg",
        "name": "I-15 NB @ 200 S / MP 356.35, WIL"
    }]
}, {
    "coord": [40.37213, -111.80333],
    "cams": [{
        "id": "10882",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15691.jpeg",
        "name": "I-15 NB @ 200 W / MP 277.71, AFK"
    }]
}, {
    "coord": [40.26107, -111.70547],
    "cams": [{
        "id": "11034",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15843.jpeg",
        "name": "I-15 NB @ 2000 S / MP 267.86, ORM"
    }]
}, {
    "coord": [37.12212, -113.53662],
    "cams": [{
        "id": "10159",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14868.jpeg",
        "name": "I-15 NB @ 2100 E / MP 9.97, STG"
    }]
}, {
    "coord": [37.12411, -113.53215],
    "cams": [{
        "id": "10160",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14869.jpeg",
        "name": "I-15 NB @ 2450 E / MP 10.43, STG"
    }]
}, {
    "coord": [41.21992, -112.00424],
    "cams": [{
        "id": "10070",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14779.jpeg",
        "name": "I-15 NB @ 24th St / SR-53 / MP 343.1, OGD"
    }]
}, {
    "coord": [40.86128, -111.90137],
    "cams": [{
        "id": "11858",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16666.jpeg",
        "name": "I-15 NB @ 2600 S / SR-93 / MP 315.26, WXS"
    }]
}, {
    "coord": [41.21772, -112.00242],
    "cams": [{
        "id": "10069",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14778.jpeg",
        "name": "I-15 NB @ 2650 S / 24th St Exit / MP 342.9, OGD"
    }]
}, {
    "coord": [41.3072, -112.02553],
    "cams": [{
        "id": "10079",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14788.jpeg",
        "name": "I-15 NB @ 2700 N / SR-134 / MP 349.42, FRW"
    }]
}, {
    "coord": [41.21294, -111.99902],
    "cams": [{
        "id": "10066",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14775.jpeg",
        "name": "I-15 NB @ 29th St / MP 342.5, OGD"
    }]
}, {
    "coord": [40.11391, -111.66968],
    "cams": [{
        "id": "11053",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15862.jpeg",
        "name": "I-15 NB @ 300 N / MP 256.15, SPF"
    }]
}, {
    "coord": [41.20506, -111.99365],
    "cams": [{
        "id": "10067",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14776.jpeg",
        "name": "I-15 NB @ 31st St / Hinkley Dr / SR-79 / MP 341.93, OGD"
    }]
}, {
    "coord": [40.7001, -111.90182],
    "cams": [{
        "id": "102",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux102.jpeg",
        "name": "I-15 NB @ 3300 S / SR-171 / MP 303.49, SSL"
    }]
}, {
    "coord": [41.44924, -112.05529],
    "cams": [{
        "id": "11264",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16073.jpeg",
        "name": "I-15 NB @ 3400 S / MP 359.5, PRY"
    }]
}, {
    "coord": [40.68973, -111.90266],
    "cams": [{
        "id": "100",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux100.jpeg",
        "name": "I-15 NB @ 3750 S / MP 302.75, SSL"
    }]
}, {
    "coord": [40.43474, -111.89349],
    "cams": [{
        "id": "11735",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16543.jpeg",
        "name": "I-15 NB @ 3800 N / Adobe Way / MP 284.3, LHI"
    }]
}, {
    "coord": [40.04844, -111.73969],
    "cams": [{
        "id": "11297",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16106.jpeg",
        "name": "I-15 NB @ 400 N / MP 250.33, PSN"
    }]
}, {
    "coord": [40.76096, -111.9126],
    "cams": [{
        "id": "117",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux117.jpeg",
        "name": "I-15 NB @ 400 S / MP 307.79, SLC"
    }]
}, {
    "coord": [40.16179, -111.64602],
    "cams": [{
        "id": "10390",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15099.jpeg",
        "name": "I-15 NB @ 400 S / SR-77 / MP 260, SPV"
    }]
}, {
    "coord": [40.68283, -111.90188],
    "cams": [{
        "id": "99",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux99.jpeg",
        "name": "I-15 NB @ 4100 S / MP 302.25, MUR"
    }]
}, {
    "coord": [40.43892, -111.89791],
    "cams": [{
        "id": "11734",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16542.jpeg",
        "name": "I-15 NB @ 4200 N / MP 284.65, LHI"
    }]
}, {
    "coord": [41.18352, -112.01265],
    "cams": [{
        "id": "9250",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5222.jpeg",
        "name": "I-15 NB @ 4400 S / MP 340.1, RDL"
    }]
}, {
    "coord": [37.10055, -113.56133],
    "cams": [{
        "id": "10145",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14854.jpeg",
        "name": "I-15 NB @ 450 S / MP 8, STG"
    }]
}, {
    "coord": [40.67493, -111.90051],
    "cams": [{
        "id": "98",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux98.jpeg",
        "name": "I-15 NB @ 4500 S / SR-266 / MP 301.71, MUR"
    }]
}, {
    "coord": [41.17876, -112.01769],
    "cams": [{
        "id": "10397",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15106.jpeg",
        "name": "I-15 NB @ 4600 S / MP 339.68, RDL"
    }]
}, {
    "coord": [40.36146, -111.78574],
    "cams": [{
        "id": "10685",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15494.jpeg",
        "name": "I-15 NB @ 500 E / SR-180 / MP 276.5, AFK"
    }]
}, {
    "coord": [40.32887, -111.73539],
    "cams": [{
        "id": "9835",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14545.jpeg",
        "name": "I-15 NB @ 500 S / MP 273.04, LDN"
    }]
}, {
    "coord": [40.75849, -111.91204],
    "cams": [{
        "id": "115",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux115.jpeg",
        "name": "I-15 NB @ 500 S / MP 307.61, SLC"
    }]
}, {
    "coord": [37.13292, -113.51828],
    "cams": [{
        "id": "10431",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15140.jpeg",
        "name": "I-15 NB @ 500 W / MP 11.38, WAS"
    }]
}, {
    "coord": [40.90102, -111.8919],
    "cams": [{
        "id": "9389",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5131.jpeg",
        "name": "I-15 NB @ 500 W / US-89 / MP 318.1, BTF"
    }]
}, {
    "coord": [40.66468, -111.90082],
    "cams": [{
        "id": "96",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux96.jpeg",
        "name": "I-15 NB @ 5000 S / MP 301, MUR"
    }]
}, {
    "coord": [40.65912, -111.90085],
    "cams": [{
        "id": "95",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux95.jpeg",
        "name": "I-15 NB @ 5200 S / MP 300.63, MUR"
    }]
}, {
    "coord": [40.65053, -111.90166],
    "cams": [{
        "id": "93",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux93.jpeg",
        "name": "I-15 NB @ 5550 S / MP 300, MUR"
    }]
}, {
    "coord": [40.39573, -111.83944],
    "cams": [{
        "id": "10307",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15016.jpeg",
        "name": "I-15 NB @ 600 E / MP 280.3, LHI"
    }]
}, {
    "coord": [40.78305, -111.91038],
    "cams": [{
        "id": "120",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux120.jpeg",
        "name": "I-15 NB @ 600 N / SR-268 / MP 309.34, SLC"
    }]
}, {
    "coord": [40.10246, -111.68427],
    "cams": [{
        "id": "10385",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15094.jpeg",
        "name": "I-15 NB @ 600 S / MP 255, SPF"
    }]
}, {
    "coord": [40.75601, -111.90858],
    "cams": [{
        "id": "114",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux114.jpeg",
        "name": "I-15 NB @ 600 S Exit / MP 307.36, SLC"
    }]
}, {
    "coord": [40.62848, -111.90272],
    "cams": [{
        "id": "90",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux90.jpeg",
        "name": "I-15 NB @ 6600 S / MP 298.5, MDV"
    }]
}, {
    "coord": [40.62503, -111.9024],
    "cams": [{
        "id": "12404",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17203.jpeg",
        "name": "I-15 NB @ 6950 S / MP 298.25, MDV"
    }]
}, {
    "coord": [37.09641, -113.56486],
    "cams": [{
        "id": "10146",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14855.jpeg",
        "name": "I-15 NB @ 700 S / MP 7.65, STG"
    }]
}, {
    "coord": [41.4223, -112.0522],
    "cams": [{
        "id": "11266",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16075.jpeg",
        "name": "I-15 NB @ 750 N / Willard Bay / SR-315 / MP 357.6, WIL"
    }]
}, {
    "coord": [41.36778, -112.04228],
    "cams": [{
        "id": "11262",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16071.jpeg",
        "name": "I-15 NB @ 7850 S / MP 353.73, BE"
    }]
}, {
    "coord": [40.31198, -111.72555],
    "cams": [{
        "id": "9271",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux400.jpeg",
        "name": "I-15 NB @ 800 N / SR-52 / MP 271.7, ORM"
    }]
}, {
    "coord": [40.60558, -111.9045],
    "cams": [{
        "id": "87",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux87.jpeg",
        "name": "I-15 NB @ 8000 S / MP 296.9, MDV"
    }]
}, {
    "coord": [41.35402, -112.0412],
    "cams": [{
        "id": "11261",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16070.jpeg",
        "name": "I-15 NB @ 8650 S / MP 352.8, BE"
    }]
}, {
    "coord": [41.01998, -111.94211],
    "cams": [{
        "id": "10425",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15134.jpeg",
        "name": "I-15 NB @ 900 S / MP 327.34, KAY"
    }]
}, {
    "coord": [40.58856, -111.89897],
    "cams": [{
        "id": "85",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux85.jpeg",
        "name": "I-15 NB @ 9000 S / SR-209 / MP 295.66, SND"
    }]
}, {
    "coord": [40.22174, -111.67186],
    "cams": [{
        "id": "11049",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15858.jpeg",
        "name": "I-15 NB @ 920 S / MP 264.54, PVO"
    }]
}, {
    "coord": [40.57506, -111.89957],
    "cams": [{
        "id": "83",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux83.jpeg",
        "name": "I-15 NB @ 9600 S / MP 294.76, SND"
    }]
}, {
    "coord": [41.08944, -111.99012],
    "cams": [{
        "id": "9346",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux422.jpeg",
        "name": "I-15 NB @ Antelope Dr / 2000 N / SR-108 / MP 332.87, LTN"
    }]
}, {
    "coord": [38.14994, -112.61043],
    "cams": [{
        "id": "11640",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16449.jpeg",
        "name": "I-15 NB @ Beaver Ridge / MP 101.33, BV"
    }]
}, {
    "coord": [40.81775, -111.91665],
    "cams": [{
        "id": "9409",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux340.jpeg",
        "name": "I-15 NB @ Beck St / US-89 / MP 312.06, SLC"
    }]
}, {
    "coord": [37.03026, -113.60293],
    "cams": [{
        "id": "10152",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14861.jpeg",
        "name": "I-15 NB @ Bluegrass Way / MP 2.39, STG"
    }]
}, {
    "coord": [37.05905, -113.58393],
    "cams": [{
        "id": "10149",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14858.jpeg",
        "name": "I-15 NB @ Brigham Rd / MP 4.65, STG"
    }]
}, {
    "coord": [37.62717, -113.12225],
    "cams": [{
        "id": "10927",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15736.jpg",
        "name": "I-15 NB @ Cedar City / 2700 S / MP 54.1, RN"
    }]
}, {
    "coord": [38.35988, -112.66105],
    "cams": [{
        "id": "11463",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16272.jpeg",
        "name": "I-15 NB @ Center St / MP 116.4, BV"
    }]
}, {
    "coord": [40.23419, -111.68448],
    "cams": [{
        "id": "11014",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15823.jpeg",
        "name": "I-15 NB @ Center St / SR-114 / MP 265.62, PVO"
    }]
}, {
    "coord": [41.06357, -111.96661],
    "cams": [{
        "id": "10684",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15493.jpeg",
        "name": "I-15 NB @ Church St / MP 330.75, LTN"
    }]
}, {
    "coord": [40.19793, -111.65031],
    "cams": [{
        "id": "11054",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15863.jpeg",
        "name": "I-15 NB @ East Bay / MP 262.55, PVO"
    }]
}, {
    "coord": [37.11476, -113.55342],
    "cams": [{
        "id": "10157",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14866.jpeg",
        "name": "I-15 NB @ Eastridge Dr / MP 9.08, STG"
    }]
}, {
    "coord": [38.92951, -112.36763],
    "cams": [{
        "id": "10928",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15737.jpeg",
        "name": "I-15 NB @ Fillmore / MP 161.43, MD"
    }]
}, {
    "coord": [40.43097, -111.89101],
    "cams": [{
        "id": "250",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux250.jpeg",
        "name": "I-15 NB @ Highland Alpine Exit / SR-92 / Timpanogos Hwy / Club House Dr / MP 284, LHI"
    }]
}, {
    "coord": [41.07096, -111.97355],
    "cams": [{
        "id": "226",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux226.jpeg",
        "name": "I-15 NB @ Hill Field Rd / 750 N / SR-232 / MP 331.36, LTN"
    }]
}, {
    "coord": [40.83539, -111.91501],
    "cams": [{
        "id": "9397",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5126.jpeg",
        "name": "I-15 NB @ I-215 North Interchange / MP 313.28, NSL"
    }]
}, {
    "coord": [38.552847, -112.606244],
    "cams": [{
        "id": "10570",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15379.jpeg",
        "name": "I-15 NB @ I-70 / Cove Fort / MP 130.15, BV"
    }]
}, {
    "coord": [41.05634, -111.96043],
    "cams": [{
        "id": "10580",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15389.jpeg",
        "name": "I-15 NB @ Layton Pkwy / SR-126 / MP 330.12, LTN"
    }]
}, {
    "coord": [37.13841, -113.50965],
    "cams": [{
        "id": "10432",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15141.jpeg",
        "name": "I-15 NB @ Main St / MP 12, WAS"
    }]
}, {
    "coord": [40.12391, -111.65523],
    "cams": [{
        "id": "11047",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15856.jpeg",
        "name": "I-15 NB @ Main St / SR-156 / MP 257.35, SPF"
    }]
}, {
    "coord": [40.38856, -111.8329],
    "cams": [{
        "id": "10879",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15688.jpeg",
        "name": "I-15 NB @ Main St / SR-73 / MP 279.77, LHI"
    }]
}, {
    "coord": [37.05043, -113.58791],
    "cams": [{
        "id": "10150",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14859.jpeg",
        "name": "I-15 NB @ Man O War Rd / MP 3.96, STG"
    }]
}, {
    "coord": [38.17472, -112.62443],
    "cams": [{
        "id": "11641",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16450.jpeg",
        "name": "I-15 NB @ Milepost 103.25, BV"
    }]
}, {
    "coord": [38.33038, -112.65636],
    "cams": [{
        "id": "11462",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16271.jpeg",
        "name": "I-15 NB @ Milepost 114.35, BV"
    }]
}, {
    "coord": [38.34282, -112.66027],
    "cams": [{
        "id": "11505",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16314.jpeg",
        "name": "I-15 NB @ Milepost 115.42, BV"
    }]
}, {
    "coord": [38.43628, -112.63299],
    "cams": [{
        "id": "11609",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16418.jpeg",
        "name": "I-15 NB @ Milepost 122.1, BV"
    }]
}, {
    "coord": [38.47632, -112.61249],
    "cams": [{
        "id": "11607",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16416.jpeg",
        "name": "I-15 NB @ Milepost 125, BV"
    }]
}, {
    "coord": [37.15259, -113.48057],
    "cams": [{
        "id": "10427",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15136.jpeg",
        "name": "I-15 NB @ Milepost 14.02, WAS"
    }]
}, {
    "coord": [37.15805, -113.47586],
    "cams": [{
        "id": "10428",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15137.jpeg",
        "name": "I-15 NB @ Milepost 14.5, WAS"
    }]
}, {
    "coord": [37.16282, -113.45954],
    "cams": [{
        "id": "10429",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15138.jpeg",
        "name": "I-15 NB @ Milepost 15.38, WAS"
    }]
}, {
    "coord": [37.22964, -113.37315],
    "cams": [{
        "id": "12269",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17068.jpeg",
        "name": "I-15 NB @ Milepost 22.19, LED"
    }]
}, {
    "coord": [38.012496, -112.720176],
    "cams": [{
        "id": "11276",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16085.jpeg",
        "name": "I-15 NB @ Milepost 90.05, RN (Local)"
    }]
}, {
    "coord": [37.0148, -113.61267],
    "cams": [{
        "id": "10154",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14863.jpeg",
        "name": "I-15 NB @ North of POE / MP 1.17, STG"
    }]
}, {
    "coord": [40.7718, -111.91016],
    "cams": [{
        "id": "118",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux118.jpeg",
        "name": "I-15 NB @ North Temple St / MP 308.59, SLC"
    }]
}, {
    "coord": [40.37685, -111.81694],
    "cams": [{
        "id": "10548",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15357.jpeg",
        "name": "I-15 NB @ Pioneer Crossing / Main St / SR-145 / MP 278.58, AFK"
    }]
}, {
    "coord": [40.35042, -111.76855],
    "cams": [{
        "id": "10884",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15693.jpeg",
        "name": "I-15 NB @ Pleasant Grove Blvd / MP 275.35, PLG"
    }]
}, {
    "coord": [41.17114, -112.0192],
    "cams": [{
        "id": "11465",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16274.jpeg",
        "name": "I-15 NB @ Riverdale Rd / SR-26 / MP 339.15, RDL"
    }]
}, {
    "coord": [40.99875, -111.92023],
    "cams": [{
        "id": "10388",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15097.jpeg",
        "name": "I-15 NB @ Shepard Ln / MP 325.43, FRM"
    }]
}, {
    "coord": [37.24303, -113.35451],
    "cams": [{
        "id": "12270",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17069.jpeg",
        "name": "I-15 NB @ Silver Reef Rd / MP 23.6, LED"
    }]
}, {
    "coord": [37.00738, -113.61762],
    "cams": [{
        "id": "10155",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14864.jpeg",
        "name": "I-15 NB @ South of POE / MP 0.67, STG"
    }]
}, {
    "coord": [37.02736, -113.60482],
    "cams": [{
        "id": "10403",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15112.jpeg",
        "name": "I-15 NB @ Southern Pkwy / SR-7 / MP 2.12, STG"
    }]
}, {
    "coord": [41.34242, -112.03665],
    "cams": [{
        "id": "11265",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16074.jpeg",
        "name": "I-15 NB @ SR-126 / MP 351.9, BE"
    }]
}, {
    "coord": [37.28387, -113.30583],
    "cams": [{
        "id": "12271",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17070.jpeg",
        "name": "I-15 NB @ SR-17 / MP 27.5, TOQ"
    }]
}, {
    "coord": [41.78483, -112.17226],
    "cams": [{
        "id": "10718",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15527.jpeg",
        "name": "I-15 NB @ SR-30 / MP 385.3, BE"
    }]
}, {
    "coord": [40.98089, -111.89672],
    "cams": [{
        "id": "9392",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5135.jpeg",
        "name": "I-15 NB @ State St / MP 323.66, FRM"
    }]
}, {
    "coord": [37.16662, -113.45028],
    "cams": [{
        "id": "10430",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15139.jpeg",
        "name": "I-15 NB @ State St / SR-9 / MP 15.91, WAS"
    }]
}, {
    "coord": [40.20852, -111.65896],
    "cams": [{
        "id": "9544",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14311.jpeg",
        "name": "I-15 NB @ University Ave / US-189 / 1860 S / MP 263.4, PVO"
    }]
}, {
    "coord": [40.27496, -111.71794],
    "cams": [{
        "id": "9279",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux407.jpeg",
        "name": "I-15 NB @ University Pkwy / SR-265 / MP 269.1, ORM"
    }]
}, {
    "coord": [37.00019, -113.62226],
    "cams": [{
        "id": "10156",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14865.jpeg",
        "name": "I-15 NB @ UT/AZ State Line / MP 0.14, STG"
    }]
}, {
    "coord": [37.06869, -113.58383],
    "cams": [{
        "id": "10148",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14857.jpeg",
        "name": "I-15 NB @ Virgin River / MP 5.3, STG"
    }]
}, {
    "coord": [37.14646, -113.48738],
    "cams": [{
        "id": "10434",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15143.jpeg",
        "name": "I-15 NB @ Washington Pkwy / MP 13.39, WAS"
    }]
}, {
    "coord": [37.9292, -112.7657],
    "cams": [{
        "id": "11908",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-15%20Paragonah%20MP%2083.gif",
        "name": "I-15 RWIS @ Milepost 83.8, RN"
    }]
}, {
    "coord": [39.40973, -112.05167],
    "cams": [{
        "id": "10751",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-15%20@%20Sevier%20River-all.gif",
        "name": "I-15 RWIS @ Sevier River / MP 200.11, JU"
    }]
}, {
    "coord": [41.58227, -112.07223],
    "cams": [{
        "id": "12420",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS_I-15_NorthBrighamCity.gif",
        "name": "I-15 RWIS NB @ 4000 N / MP 368.83, BE"
    }]
}, {
    "coord": [39.59439, -111.91612],
    "cams": [{
        "id": "12410",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS_I-15_Lampson_Canyon.gif",
        "name": "I-15 RWIS NB @ Lampson Canyon / MP 215.06, JU"
    }]
}, {
    "coord": [41.319124, -112.026269],
    "cams": [{
        "id": "12153",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-15%20MP350%20FarrWest.jpg",
        "name": "I-15 RWIS NB @ Milepost 350.24, PLV"
    }]
}, {
    "coord": [37.48211, -113.21999],
    "cams": [{
        "id": "10752",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-15%20New-Harmony.gif",
        "name": "I-15 RWIS NB @ New Harmony / Exit 42 / MP 42.17, RN"
    }]
}, {
    "coord": [41.88607, -112.16924],
    "cams": [{
        "id": "10833",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-15%20@%20Plymouth.gif",
        "name": "I-15 RWIS NB @ Plymouth / Exit 392 / SR-13 / MP 392.37, BE"
    }]
}, {
    "coord": [41.9675, -112.1808],
    "cams": [{
        "id": "12515",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-15%20@%20Portage.gif",
        "name": "I-15 RWIS NB @ Portage / MP 398, BE"
    }]
}, {
    "coord": [39.93695, -111.8114],
    "cams": [{
        "id": "12411",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS_I-15_Rocky_Ridge.gif",
        "name": "I-15 RWIS NB @ Rocky Ridge / MP 241.4, JU"
    }]
}, {
    "coord": [41.4402, -112.0564],
    "cams": [{
        "id": "11273",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16082.jpeg",
        "name": "I-15 RWIS NB @ Willard/Perry POE / MP 358.88, PRY"
    }]
}, {
    "coord": [38.63583, -112.61011],
    "cams": [{
        "id": "10735",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-15%20DogValley-all.gif",
        "name": "I-15 RWIS SB @ Dog Valley / MP 137.27, MD"
    }]
}, {
    "coord": [39.0202, -112.3047],
    "cams": [{
        "id": "11885",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-15%20SB%20MP%20169.gif",
        "name": "I-15 RWIS SB @ Milepost 169, MD"
    }]
}, {
    "coord": [39.20391, -112.17168],
    "cams": [{
        "id": "11356",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-15%20@%20Scipio%20Summit.jpeg",
        "name": "I-15 RWIS SB @ Scipio Summit / Exit 184 / MP 183.65, MD"
    }]
}, {
    "coord": [40.7938, -111.91761],
    "cams": [{
        "id": "9393",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5121.jpeg",
        "name": "I-15 SB @ 1000 N / MP 310.2, SLC"
    }]
}, {
    "coord": [40.55816, -111.89932],
    "cams": [{
        "id": "81",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux81.jpeg",
        "name": "I-15 SB @ 10600 S / South Jordan Pkwy / SR-151 / MP 293.6, SJO"
    }]
}, {
    "coord": [41.43054, -112.05834],
    "cams": [{
        "id": "11260",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16069.jpeg",
        "name": "I-15 SB @ 1100 N / MP 358.2, WIL"
    }]
}, {
    "coord": [41.4861, -112.05331],
    "cams": [{
        "id": "11441",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16250.jpeg",
        "name": "I-15 SB @ 1100 S / US-91 / MP 362, BRC"
    }]
}, {
    "coord": [40.55017, -111.89676],
    "cams": [{
        "id": "9654",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux357.jpeg",
        "name": "I-15 SB @ 11000 S / MP 293, SJO"
    }]
}, {
    "coord": [40.54467, -111.89566],
    "cams": [{
        "id": "10695",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15504.jpeg",
        "name": "I-15 SB @ 11400 S / MP 292.62, SJO"
    }]
}, {
    "coord": [40.52338, -111.8916],
    "cams": [{
        "id": "12403",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17202.jpeg",
        "name": "I-15 SB @ 12500 S / MP 291.17, DPR"
    }]
}, {
    "coord": [40.52223, -111.89154],
    "cams": [{
        "id": "11752",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16560.jpeg",
        "name": "I-15 SB @ 12600 S / MP 291.1, DPR"
    }]
}, {
    "coord": [40.74127, -111.90494],
    "cams": [{
        "id": "111",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux111.jpeg",
        "name": "I-15 SB @ 1300 S / MP 306.33, SLC"
    }]
}, {
    "coord": [40.51511, -111.89189],
    "cams": [{
        "id": "11751",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16559.jpeg",
        "name": "I-15 SB @ 13000 S / MP 290.6, DPR"
    }]
}, {
    "coord": [40.50782, -111.89181],
    "cams": [{
        "id": "11750",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16558.jpeg",
        "name": "I-15 SB @ 13400 S / MP 290.08, DPR"
    }]
}, {
    "coord": [40.93513, -111.89171],
    "cams": [{
        "id": "10402",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15111.jpeg",
        "name": "I-15 SB @ 1400 N / MP 320.46, CVL"
    }]
}, {
    "coord": [40.18789, -111.64697],
    "cams": [{
        "id": "10922",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15731.jpeg",
        "name": "I-15 SB @ 1400 N / SR-75 / MP 261.79, SPV"
    }]
}, {
    "coord": [40.49354, -111.89156],
    "cams": [{
        "id": "11722",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16530.jpeg",
        "name": "I-15 SB @ 14200 S / MP 289.09, DPR"
    }]
}, {
    "coord": [40.49036, -111.89306],
    "cams": [{
        "id": "11723",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16531.jpeg",
        "name": "I-15 SB @ 14300 S / MP 288.84, DPR"
    }]
}, {
    "coord": [40.483631, -111.899755],
    "cams": [{
        "id": "11725",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16533.jpeg",
        "name": "I-15 SB @ 14600 S / Highland Dr / SR-140 / MP 288.3, BLF"
    }]
}, {
    "coord": [40.73834, -111.90497],
    "cams": [{
        "id": "110",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux110.jpeg",
        "name": "I-15 SB @ 1500 S / MP 306.11, SLC"
    }]
}, {
    "coord": [40.47961, -111.90345],
    "cams": [{
        "id": "11726",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16534.jpeg",
        "name": "I-15 SB @ 15000 S / MP 287.91, BLF"
    }]
}, {
    "coord": [40.46308, -111.91422],
    "cams": [{
        "id": "11729",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16537.jpeg",
        "name": "I-15 SB @ 15800 S / MP 286.64, BLF"
    }]
}, {
    "coord": [40.32616, -111.73338],
    "cams": [{
        "id": "10946",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15755.jpeg",
        "name": "I-15 SB @ 1600 N / SR-241 / MP 272.82, ORM"
    }]
}, {
    "coord": [40.45787, -111.91483],
    "cams": [{
        "id": "11730",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16538.jpeg",
        "name": "I-15 SB @ 16200 S / MP 286.3, BLF"
    }]
}, {
    "coord": [40.80381, -111.92236],
    "cams": [{
        "id": "9394",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5122.jpeg",
        "name": "I-15 SB @ 1700 N / MP 310.93, SLC"
    }]
}, {
    "coord": [41.29015, -112.02631],
    "cams": [{
        "id": "10078",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14787.jpeg",
        "name": "I-15 SB @ 1800 N / Harrisville Rd / MP 348.23, FRW"
    }]
}, {
    "coord": [41.03768, -111.94884],
    "cams": [{
        "id": "227",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux227.jpeg",
        "name": "I-15 SB @ 200 N / SR-273 / MP 328.65, KAY"
    }]
}, {
    "coord": [40.23076, -111.68214],
    "cams": [{
        "id": "11048",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15857.jpeg",
        "name": "I-15 SB @ 200 S / MP 265.36, PVO"
    }]
}, {
    "coord": [37.71423, -113.0664],
    "cams": [{
        "id": "11275",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16084.jpeg",
        "name": "I-15 SB @ 2000 N / MP 61.27, CDC (Local)"
    }]
}, {
    "coord": [40.94866, -111.89159],
    "cams": [{
        "id": "9388",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5133.jpeg",
        "name": "I-15 SB @ 2100 N / MP 321.34, CVL"
    }]
}, {
    "coord": [40.72581, -111.90494],
    "cams": [{
        "id": "109",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux109.jpeg",
        "name": "I-15 SB @ 2100 S / SR-201 / MP 305.25, SLC"
    }]
}, {
    "coord": [41.2282, -112.01274],
    "cams": [{
        "id": "10074",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14783.jpeg",
        "name": "I-15 SB @ 21st St / SR-104 / MP 343.86, WHV"
    }]
}, {
    "coord": [41.14718, -112.02578],
    "cams": [{
        "id": "10396",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15105.jpeg",
        "name": "I-15 SB @ 2300 N / MP 337.48, SUN"
    }]
}, {
    "coord": [40.80965, -111.92456],
    "cams": [{
        "id": "9395",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5123.jpeg",
        "name": "I-15 SB @ 2300 N / Warm Springs Rd / MP 311.34, SLC"
    }]
}, {
    "coord": [40.72084, -111.90497],
    "cams": [{
        "id": "105",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux105.jpeg",
        "name": "I-15 SB @ 2300 S / MP 304.9, SSL"
    }]
}, {
    "coord": [40.41791, -111.87473],
    "cams": [{
        "id": "10305",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15014.jpeg",
        "name": "I-15 SB @ 2350 N / MP 282.7, LHI"
    }]
}, {
    "coord": [41.21905, -112.00604],
    "cams": [{
        "id": "10075",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14784.jpeg",
        "name": "I-15 SB @ 24th St / Pennsylvania Ave / SR-53 / MP 343.12, OGD"
    }]
}, {
    "coord": [40.71547, -111.90472],
    "cams": [{
        "id": "104",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux104.jpeg",
        "name": "I-15 SB @ 2550 S / MP 304.53, SSL"
    }]
}, {
    "coord": [40.86144, -111.90256],
    "cams": [{
        "id": "9402",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5129.jpeg",
        "name": "I-15 SB @ 2600 S  / SR-93 / MP 315.24, WXS"
    }]
}, {
    "coord": [41.46494, -112.05598],
    "cams": [{
        "id": "11259",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16068.jpeg",
        "name": "I-15 SB @ 2650 S / MP 360.62, PRY"
    }]
}, {
    "coord": [40.4231, -111.88139],
    "cams": [{
        "id": "259",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux259.jpeg",
        "name": "I-15 SB @ 2750 N / MP 283.2, LHI"
    }]
}, {
    "coord": [40.70819, -111.90432],
    "cams": [{
        "id": "103",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux103.jpeg",
        "name": "I-15 SB @ 2900 S / MP 304, SSL"
    }]
}, {
    "coord": [40.34263, -111.75853],
    "cams": [{
        "id": "10102",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14811.jpeg",
        "name": "I-15 SB @ 300 N / MP 274.61, LDN"
    }]
}, {
    "coord": [40.69945, -111.90294],
    "cams": [{
        "id": "101",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux101.jpeg",
        "name": "I-15 SB @ 3300 S / SR-171 / MP 303.45, SSL"
    }]
}, {
    "coord": [40.77805, -111.91106],
    "cams": [{
        "id": "119",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux119.jpeg",
        "name": "I-15 SB @ 400 N / MP 309.03, SLC"
    }]
}, {
    "coord": [41.26815, -112.02668],
    "cams": [{
        "id": "10072",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14781.jpeg",
        "name": "I-15 SB @ 400 N / Pioneer Rd / MP 346.72, MSV"
    }]
}, {
    "coord": [40.89428, -111.89616],
    "cams": [{
        "id": "10389",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15098.jpeg",
        "name": "I-15 SB @ 400 N / SR-106 / MP 317.55, WBN"
    }]
}, {
    "coord": [40.38317, -111.83051],
    "cams": [{
        "id": "10881",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15690.jpeg",
        "name": "I-15 SB @ 400 S / MP 279.32, LHI"
    }]
}, {
    "coord": [40.75997, -111.91483],
    "cams": [{
        "id": "116",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux116.jpeg",
        "name": "I-15 SB @ 400 S / MP 307.74, SLC"
    }]
}, {
    "coord": [41.25755, -112.02303],
    "cams": [{
        "id": "10071",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14780.jpeg",
        "name": "I-15 SB @ 400 S / MP 345.93, MSV"
    }]
}, {
    "coord": [40.6739, -111.90247],
    "cams": [{
        "id": "97",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux97.jpeg",
        "name": "I-15 SB @ 4500 S / SR-266 / MP 301.65, MUR"
    }]
}, {
    "coord": [40.44336, -111.90501],
    "cams": [{
        "id": "11733",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16541.jpeg",
        "name": "I-15 SB @ 4600 N / MP 285.12, LHI"
    }]
}, {
    "coord": [40.44583, -111.90849],
    "cams": [{
        "id": "11732",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16540.jpeg",
        "name": "I-15 SB @ 4800 N / MP 285.37, LHI"
    }]
}, {
    "coord": [37.14266, -113.50183],
    "cams": [{
        "id": "10433",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15142.jpeg",
        "name": "I-15 SB @ 500 E / MP 12.53, WAS"
    }]
}, {
    "coord": [40.1744, -111.6472],
    "cams": [{
        "id": "11046",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15855.jpeg",
        "name": "I-15 SB @ 500 N / MP 260.89, SPV"
    }]
}, {
    "coord": [40.88359, -111.89697],
    "cams": [{
        "id": "9408",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5130.jpeg",
        "name": "I-15 SB @ 500 S / SR-68 / MP 316.84, WBN"
    }]
}, {
    "coord": [40.65522, -111.90266],
    "cams": [{
        "id": "9623",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux94.jpeg",
        "name": "I-15 SB @ 5300 S / SR-173 / MP 300.35, MUR"
    }]
}, {
    "coord": [41.05276, -111.96133],
    "cams": [{
        "id": "10581",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15390.jpg",
        "name": "I-15 SB @ 550 S / MP 329.9, LTN"
    }]
}, {
    "coord": [41.16137, -112.0234],
    "cams": [{
        "id": "9249",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5223.jpeg",
        "name": "I-15 SB @ 5600 S / SR-97 / MP 338.46, ROY"
    }]
}, {
    "coord": [40.64556, -111.90313],
    "cams": [{
        "id": "92",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux92.jpeg",
        "name": "I-15 SB @ 5800 S / MP 299.7, MUR"
    }]
}, {
    "coord": [40.30824, -111.72626],
    "cams": [{
        "id": "10894",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15703.jpeg",
        "name": "I-15 SB @ 600 N / MP 271.44, ORM"
    }]
}, {
    "coord": [40.911, -111.89174],
    "cams": [{
        "id": "10493",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15302.jpeg",
        "name": "I-15 SB @ 600 S / MP 318.76, CVL"
    }]
}, {
    "coord": [41.12438, -112.02473],
    "cams": [{
        "id": "9252",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5224.jpeg",
        "name": "I-15 SB @ 650 N / SR-103 / MP 335.89, CFD"
    }]
}, {
    "coord": [40.28539, -111.72604],
    "cams": [{
        "id": "9902",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14611.jpeg",
        "name": "I-15 SB @ 650 S / MP 269.87, ORM"
    }]
}, {
    "coord": [40.7536, -111.91161],
    "cams": [{
        "id": "113",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux113.jpeg",
        "name": "I-15 SB @ 700 S / MP 307.29, SLC"
    }]
}, {
    "coord": [41.10325, -112.00428],
    "cams": [{
        "id": "9251",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5225.jpeg",
        "name": "I-15 SB @ 700 S / SR-193 / MP 334.08, CFD"
    }]
}, {
    "coord": [40.61633, -111.90613],
    "cams": [{
        "id": "88",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux88.jpeg",
        "name": "I-15 SB @ 7400 S / MP 297.6, MDV"
    }]
}, {
    "coord": [41.526529, -112.065336],
    "cams": [{
        "id": "12408",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17207.jpeg",
        "name": "I-15 SB @ 800 N / MP 364.92, BRC"
    }]
}, {
    "coord": [40.03128, -111.7576],
    "cams": [{
        "id": "11298",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16107.jpeg",
        "name": "I-15 SB @ 800 S / SR-178 / MP 248.81, PSN"
    }]
}, {
    "coord": [40.08563, -111.70229],
    "cams": [{
        "id": "11296",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16105.jpeg",
        "name": "I-15 SB @ 8000 S / SR-164 / MP 253.56, UT"
    }]
}, {
    "coord": [40.24415, -111.69552],
    "cams": [{
        "id": "10947",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15756.jpeg",
        "name": "I-15 SB @ 820 N / MP 266.54, PVO"
    }]
}, {
    "coord": [40.59808, -111.904],
    "cams": [{
        "id": "86",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux86.jpeg",
        "name": "I-15 SB @ 8400 S / MP 296.4, MDV"
    }]
}, {
    "coord": [40.5859, -111.90085],
    "cams": [{
        "id": "84",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux84.jpeg",
        "name": "I-15 SB @ 9100 S / MP 295.48, SND"
    }]
}, {
    "coord": [40.5039, -111.89173],
    "cams": [{
        "id": "9700",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14408.jpeg",
        "name": "I-15 SB @ Bangerter Hwy / SR-154 / MP 289.83, DPR"
    }]
}, {
    "coord": [38.31482, -112.65549],
    "cams": [{
        "id": "11031",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15840.jpeg",
        "name": "I-15 SB @ Beaver / MP 113.3, BV"
    }]
}, {
    "coord": [40.82844, -111.91606],
    "cams": [{
        "id": "9396",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5125.jpeg",
        "name": "I-15 SB @ Beck St / US-89 / MP 312.8, NSL"
    }]
}, {
    "coord": [37.40145, -113.23827],
    "cams": [{
        "id": "10886",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15695.jpeg",
        "name": "I-15 SB @ Blackridge / Exit 36 / MP 36.77, WN (Local)"
    }]
}, {
    "coord": [37.08421, -113.583],
    "cams": [{
        "id": "10279",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14988.jpeg",
        "name": "I-15 SB @ Bluff St / SR-18 / MP 6.37, STG"
    }]
}, {
    "coord": [37.05945, -113.58489],
    "cams": [{
        "id": "10153",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14862.jpeg",
        "name": "I-15 SB @ Brigham Rd / MP 4.65, STG"
    }]
}, {
    "coord": [40.29678, -111.72619],
    "cams": [{
        "id": "10926",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15735.jpeg",
        "name": "I-15 SB @ Center St / MP 270.67, ORM"
    }]
}, {
    "coord": [40.84219, -111.91578],
    "cams": [{
        "id": "9401",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5127.jpeg",
        "name": "I-15 SB @ Center St / MP 313.73, NSL"
    }]
}, {
    "coord": [41.11357, -112.01354],
    "cams": [{
        "id": "10550",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15359.jpeg",
        "name": "I-15 SB @ Center St / MP 334.93, CFD"
    }]
}, {
    "coord": [37.65484, -113.08253],
    "cams": [{
        "id": "11454",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16263.jpeg",
        "name": "I-15 SB @ Cross Hollow Rd / MP 57, CDC"
    }]
}, {
    "coord": [37.07493, -113.58531],
    "cams": [{
        "id": "11009",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15818.jpeg",
        "name": "I-15 SB @ Dixie Dr / MP 5.72, STG"
    }]
}, {
    "coord": [38.13091, -112.62837],
    "cams": [{
        "id": "11639",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16448.jpeg",
        "name": "I-15 SB @ Freemont Rd / MP 99.7, RN"
    }]
}, {
    "coord": [40.96529, -111.8915],
    "cams": [{
        "id": "9391",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5134.jpeg",
        "name": "I-15 SB @ Glover Ln / MP 322.54, FRM"
    }]
}, {
    "coord": [41.07685, -111.97989],
    "cams": [{
        "id": "11744",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16552.jpeg",
        "name": "I-15 SB @ Hill Field Rd / 1150 N / SR-232 / MP 331.86, LTN"
    }]
}, {
    "coord": [40.63661, -111.90504],
    "cams": [{
        "id": "91",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux91.jpeg",
        "name": "I-15 SB @ I-215 South Interchange / MP 299, MUR"
    }]
}, {
    "coord": [38.605606, -112.609881],
    "cams": [{
        "id": "10571",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15380.jpeg",
        "name": "I-15 SB @ I-70 / Cove Fort / MP 135.3, MD"
    }]
}, {
    "coord": [38.57705, -112.60399],
    "cams": [{
        "id": "11632",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16441.jpeg",
        "name": "I-15 SB @ I-70 Interchange / MP 132.18, MD"
    }]
}, {
    "coord": [40.85044, -111.91245],
    "cams": [{
        "id": "9400",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5128.jpeg",
        "name": "I-15 SB @ Main St / MP 314.31, NSL"
    }]
}, {
    "coord": [40.05609, -111.73203],
    "cams": [{
        "id": "11295",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16104.jpeg",
        "name": "I-15 SB @ Main St / SR-115 / MP 251, PSN"
    }]
}, {
    "coord": [40.12606, -111.65414],
    "cams": [{
        "id": "10555",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15364.jpeg",
        "name": "I-15 SB @ Main St / SR-156 / MP 257.35, SPF"
    }]
}, {
    "coord": [38.29329, -112.65124],
    "cams": [{
        "id": "11428",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16237.jpeg",
        "name": "I-15 SB @ Main St / SR-160 / MP 111.77, BVR"
    }]
}, {
    "coord": [40.3869, -111.83324],
    "cams": [{
        "id": "10885",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15694.jpeg",
        "name": "I-15 SB @ Main St / SR-73 / MP 279.64, LHI"
    }]
}, {
    "coord": [38.41313, -112.65361],
    "cams": [{
        "id": "11502",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16311.jpeg",
        "name": "I-15 SB @ Manderfield Rd / MP 120.15, BV"
    }]
}, {
    "coord": [38.205, -112.64693],
    "cams": [{
        "id": "11642",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16451.jpeg",
        "name": "I-15 SB @ Milepost 105.7, BV"
    }]
}, {
    "coord": [38.320143, -112.655451],
    "cams": [{
        "id": "12328",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17127.jpeg",
        "name": "I-15 SB @ Milepost 113.65, BV"
    }]
}, {
    "coord": [38.38234, -112.66216],
    "cams": [{
        "id": "11504",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16313.jpeg",
        "name": "I-15 SB @ Milepost 117.42, BV"
    }]
}, {
    "coord": [38.39371, -112.65973],
    "cams": [{
        "id": "11503",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16312.jpeg",
        "name": "I-15 SB @ Milepost 118.42, BV"
    }]
}, {
    "coord": [38.42576, -112.64562],
    "cams": [{
        "id": "11501",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16310.jpeg",
        "name": "I-15 SB @ Milepost 121.04, BV"
    }]
}, {
    "coord": [38.44781, -112.62869],
    "cams": [{
        "id": "11610",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16419.jpeg",
        "name": "I-15 SB @ Milepost 122.87, BV"
    }]
}, {
    "coord": [38.5157, -112.61376],
    "cams": [{
        "id": "11606",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16415.jpeg",
        "name": "I-15 SB @ Milepost 127.86, BV"
    }]
}, {
    "coord": [37.31145, -113.29618],
    "cams": [{
        "id": "11013",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15822.jpeg",
        "name": "I-15 SB @ Milepost 29.45, TOQ"
    }]
}, {
    "coord": [41.22112, -112.00922],
    "cams": [{
        "id": "10076",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14785.jpeg",
        "name": "I-15 SB @ Milepost 343.4, OGD"
    }]
}, {
    "coord": [40.98905, -111.90565],
    "cams": [{
        "id": "281",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux281.jpeg",
        "name": "I-15 SB @ Park Ln / 1100 W / SR-225 / MP 324.44, FRM"
    }]
}, {
    "coord": [40.9211, -111.89134],
    "cams": [{
        "id": "9390",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5132.jpeg",
        "name": "I-15 SB @ Parrish Ln / 400 N / SR-105 / MP 319.51, CVL"
    }]
}, {
    "coord": [40.37689, -111.82063],
    "cams": [{
        "id": "10549",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15358.jpeg",
        "name": "I-15 SB @ Pioneer Crossing / Main St / SR-145 / MP 278.6, AFK"
    }]
}, {
    "coord": [40.45056, -111.91364],
    "cams": [{
        "id": "11731",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16539.jpeg",
        "name": "I-15 SB @ Point of the Mountain / MP 285.78, UT"
    }]
}, {
    "coord": [41.1965, -111.99995],
    "cams": [{
        "id": "10068",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14777.jpeg",
        "name": "I-15 SB @ River Valley Dr / 3650 S / MP 341.17, RDL"
    }]
}, {
    "coord": [39.2381, -112.13112],
    "cams": [{
        "id": "11268",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16077.jpeg",
        "name": "I-15 SB @ Scipio / MP 187.03, MD"
    }]
}, {
    "coord": [39.28321, -112.09385],
    "cams": [{
        "id": "10929",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15738.jpeg",
        "name": "I-15 SB @ Scipio / MP 190.66, MD"
    }]
}, {
    "coord": [39.20322, -112.17354],
    "cams": [{
        "id": "11267",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16076.jpeg",
        "name": "I-15 SB @ Scipio Summit / Exit 184 / MP 183.65, MD"
    }]
}, {
    "coord": [37.03924, -113.59766],
    "cams": [{
        "id": "10151",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14860.jpeg",
        "name": "I-15 SB @ Sugar Leo Rd / MP 3.04, STG"
    }]
}, {
    "coord": [40.2028, -111.65506],
    "cams": [{
        "id": "11050",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15859.jpeg",
        "name": "I-15 SB @ University Ave / 2260 S / MP 263, PVO"
    }]
}, {
    "coord": [40.27566, -111.71985],
    "cams": [{
        "id": "11038",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15847.jpeg",
        "name": "I-15 SB @ University Pkwy / SR-265 / MP 269.12, ORM"
    }]
}, {
    "coord": [40.12853, -111.6495],
    "cams": [{
        "id": "11052",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15861.jpeg",
        "name": "I-15 SB @ US-6 / MP 257.68, SPF"
    }]
}, {
    "coord": [40.700092, -111.794423],
    "cams": [{
        "id": "1",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux1.jpeg",
        "name": "I-215 E NB @ 3300 S / SR-171 / MP 1.84, MCK"
    }]
}, {
    "coord": [40.68937, -111.7971],
    "cams": [{
        "id": "2",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux2.jpeg",
        "name": "I-215 E NB @ 3800 S / MP 2.58, MCK"
    }]
}, {
    "coord": [40.68265, -111.79714],
    "cams": [{
        "id": "4",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux4.jpeg",
        "name": "I-215 E NB @ 4100 S / MP 3.05, MCK"
    }]
}, {
    "coord": [40.66625, -111.80545],
    "cams": [{
        "id": "6",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux6.jpeg",
        "name": "I-215 E NB @ 4800 S / MP 4.27, HDY"
    }]
}, {
    "coord": [40.65701, -111.80678],
    "cams": [{
        "id": "7",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux7.jpeg",
        "name": "I-215 E NB @ 5200 S / MP 4.65, HDY"
    }]
}, {
    "coord": [40.64836, -111.80766],
    "cams": [{
        "id": "8",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux8.jpeg",
        "name": "I-215 E NB @ 5650 S / MP 5.59, HDY"
    }]
}, {
    "coord": [40.63989, -111.80786],
    "cams": [{
        "id": "12407",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17206.jpeg",
        "name": "I-215 E NB @ 6100 S / MP 6.1, HDY"
    }]
}, {
    "coord": [40.63746, -111.80779],
    "cams": [{
        "id": "9",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux9.jpeg",
        "name": "I-215 E NB @ 6200 S / SR-190 / MP 6.34, HDY"
    }]
}, {
    "coord": [40.63451, -111.81117],
    "cams": [{
        "id": "10",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux10.jpeg",
        "name": "I-215 E NB @ 6400 S / MP 6.56, HDY"
    }]
}, {
    "coord": [40.707509, -111.79672],
    "cams": [{
        "id": "148",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux148.jpeg",
        "name": "I-215 E NB @ Parleys Canyon / 2900 S / MP 1.3, MCK"
    }]
}, {
    "coord": [40.68734, -111.7978],
    "cams": [{
        "id": "3",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux3.jpeg",
        "name": "I-215 E SB @ 3900 S / MP 2.73, MCK"
    }]
}, {
    "coord": [40.674755, -111.802909],
    "cams": [{
        "id": "5",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5.jpeg",
        "name": "I-215 E SB @ 4500 S / SR-266 / MP 3.67, MCK"
    }]
}, {
    "coord": [40.83213, -111.93644],
    "cams": [{
        "id": "10681",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15490.jpeg",
        "name": "I-215 N EB On-ramp @ Redwood Rd / SR-68 / MP 27.38, NSL"
    }]
}, {
    "coord": [40.83449, -111.92197],
    "cams": [{
        "id": "271",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux271.jpeg",
        "name": "I-215 N WB @ 450 W / MP 28.54, NSL"
    }]
}, {
    "coord": [40.83432, -111.93618],
    "cams": [{
        "id": "270",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux270.jpeg",
        "name": "I-215 N WB @ Redwood Rd / SR-68 / MP 27.4, NSL (HUB)"
    }]
}, {
    "coord": [40.83504, -111.9352],
    "cams": [{
        "id": "10682",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15491.jpeg",
        "name": "I-215 N WB Off-ramp @ Redwood Rd / SR-68 / MP 27.44, NSL"
    }]
}, {
    "coord": [40.63763, -111.92103],
    "cams": [{
        "id": "21",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux21.jpeg",
        "name": "I-215 S EB @ 1200 W / Murray Pkwy Ave / MP 12.34, MUR"
    }]
}, {
    "coord": [40.63136, -111.83796],
    "cams": [{
        "id": "13",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux13.jpeg",
        "name": "I-215 S EB @ 1900 E / MP 7.98, CWH"
    }]
}, {
    "coord": [40.64688, -111.94916],
    "cams": [{
        "id": "25",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux25.jpeg",
        "name": "I-215 S EB @ 2200 W / MP 14.06, TAY"
    }]
}, {
    "coord": [40.63424, -111.82537],
    "cams": [{
        "id": "12023",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16831.jpeg",
        "name": "I-215 S EB @ 2300 E / MP 7.3, CWH"
    }]
}, {
    "coord": [40.63072, -111.88173],
    "cams": [{
        "id": "17",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17.jpeg",
        "name": "I-215 S EB @ 300 E / MP 10.18, MDV"
    }]
}, {
    "coord": [40.63568, -111.91044],
    "cams": [{
        "id": "20",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux20.jpeg",
        "name": "I-215 S EB @ 700 W / MP 11.8, MUR"
    }]
}, {
    "coord": [40.64253, -111.93745],
    "cams": [{
        "id": "23",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux23.jpeg",
        "name": "I-215 S EB @ Redwood Rd / SR-68 / MP 13.4, TAY"
    }]
}, {
    "coord": [40.63153, -111.88975],
    "cams": [{
        "id": "18",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux18.jpeg",
        "name": "I-215 S EB @ State St / US-89 / MP 10.66, MUR"
    }]
}, {
    "coord": [40.63078, -111.85444],
    "cams": [{
        "id": "14",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14.jpeg",
        "name": "I-215 S WB @ 1300 E / MP 8.87, CWH"
    }]
}, {
    "coord": [40.64432, -111.92868],
    "cams": [{
        "id": "22",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux22.jpeg",
        "name": "I-215 S WB @ 1300 W / MP 12.9, MUR"
    }]
}, {
    "coord": [40.63334, -111.8341],
    "cams": [{
        "id": "12",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux12.jpeg",
        "name": "I-215 S WB @ 2000 E / Highland Dr / SR-152 / MP 7.76, CWH"
    }]
}, {
    "coord": [40.63472, -111.82453],
    "cams": [{
        "id": "11",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux11.jpeg",
        "name": "I-215 S WB @ 2300 E / MP 7.25, HDY"
    }]
}, {
    "coord": [40.63524, -111.89751],
    "cams": [{
        "id": "19",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux19.jpeg",
        "name": "I-215 S WB @ 300 W / MP 11.15, MUR"
    }]
}, {
    "coord": [40.6306, -111.8662],
    "cams": [{
        "id": "16",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16.jpeg",
        "name": "I-215 S WB @ 900 E / SR-71 / MP 9.5, MDV"
    }]
}, {
    "coord": [40.64504, -111.93948],
    "cams": [{
        "id": "24",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux24.jpeg",
        "name": "I-215 S WB @ Redwood Rd / SR-68 / MP 13.5, TAY"
    }]
}, {
    "coord": [40.6304, -111.86241],
    "cams": [{
        "id": "15",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15.jpeg",
        "name": "I-215 S WB @ Union Park Ave / MP 9.31, MDV"
    }]
}, {
    "coord": [40.81321, -111.94893],
    "cams": [{
        "id": "277",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux277.jpeg",
        "name": "I-215 W NB @ 2100 N / MP 25.63, SLC"
    }]
}, {
    "coord": [40.70787, -111.95299],
    "cams": [{
        "id": "32",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux32.jpeg",
        "name": "I-215 W NB @ 2900 S / MP 18.22, WVC"
    }]
}, {
    "coord": [40.69713, -111.94957],
    "cams": [{
        "id": "31",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux31.jpeg",
        "name": "I-215 W NB @ 3500 S / SR-171 / MP 17.58, WVC"
    }]
}, {
    "coord": [40.666368, -111.952245],
    "cams": [{
        "id": "27",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux27.jpeg",
        "name": "I-215 W NB @ 4700 S / SR-266 / MP 15.46, TAY"
    }]
}, {
    "coord": [40.75835, -111.95001],
    "cams": [{
        "id": "39",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux39.jpeg",
        "name": "I-215 W NB @ 500 S / MP 21.75, SLC"
    }]
}, {
    "coord": [40.78505, -111.94855],
    "cams": [{
        "id": "42",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux42.jpeg",
        "name": "I-215 W NB @ 700 N / MP 23.7, SLC"
    }]
}, {
    "coord": [40.750701, -111.948264],
    "cams": [{
        "id": "11747",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16555.jpeg",
        "name": "I-215 W NB @ 900 S / MP 21.3,SLC"
    }]
}, {
    "coord": [40.74052, -111.94832],
    "cams": [{
        "id": "37",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux37.jpeg",
        "name": "I-215 W NB @ California Ave / 1330 S / MP 20.6, SLC"
    }]
}, {
    "coord": [40.77181, -111.94873],
    "cams": [{
        "id": "40",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux40.jpeg",
        "name": "I-215 W NB @ North Temple St / MP 22.8, SLC"
    }]
}, {
    "coord": [40.79582, -111.94972],
    "cams": [{
        "id": "275",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux275.jpeg",
        "name": "I-215 W SB @ 1200 N / MP 24.42, SLC"
    }]
}, {
    "coord": [40.80215, -111.94963],
    "cams": [{
        "id": "276",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux276.jpeg",
        "name": "I-215 W SB @ 1500 N / MP 24.91, SLC"
    }]
}, {
    "coord": [40.72967, -111.95036],
    "cams": [{
        "id": "35",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux35.jpeg",
        "name": "I-215 W SB @ 1900 S / MP 19.82, SLC"
    }]
}, {
    "coord": [40.72103, -111.95302],
    "cams": [{
        "id": "34",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux34.jpeg",
        "name": "I-215 W SB @ 2300 S / MP 19.25, WVC"
    }]
}, {
    "coord": [40.82182, -111.94975],
    "cams": [{
        "id": "278",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux278.jpeg",
        "name": "I-215 W SB @ 2500 N / MP 26.31, SLC"
    }]
}, {
    "coord": [40.71423, -111.95418],
    "cams": [{
        "id": "33",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux33.jpeg",
        "name": "I-215 W SB @ 2600 S / MP 18.71, WVC"
    }]
}, {
    "coord": [40.83029, -111.94639],
    "cams": [{
        "id": "279",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux279.jpeg",
        "name": "I-215 W SB @ 2800 N / MP 26.8, SLC"
    }]
}, {
    "coord": [40.69454, -111.95258],
    "cams": [{
        "id": "30",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux30.jpeg",
        "name": "I-215 W SB @ 3500 S / SR-171 / MP 17.4, WVC"
    }]
}, {
    "coord": [40.68794, -111.95197],
    "cams": [{
        "id": "29",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux29.jpeg",
        "name": "I-215 W SB @ 3900 S / MP 16.9, WVC"
    }]
}, {
    "coord": [40.67644, -111.95258],
    "cams": [{
        "id": "28",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux28.jpeg",
        "name": "I-215 W SB @ 4300 S / MP 16.18, TAY"
    }]
}, {
    "coord": [40.77945, -111.94969],
    "cams": [{
        "id": "41",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux41.jpeg",
        "name": "I-215 W SB @ 450 N / MP 23.31, SLC"
    }]
}, {
    "coord": [40.65984, -111.95302],
    "cams": [{
        "id": "26",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux26.jpeg",
        "name": "I-215 W SB @ 5100 S / MP 14.96, TAY"
    }]
}, {
    "coord": [40.74032, -111.94986],
    "cams": [{
        "id": "36",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux36.jpeg",
        "name": "I-215 W SB @ California Ave / 1330 S / MP 20.5, SLC"
    }]
}, {
    "coord": [38.91192, -111.88812],
    "cams": [{
        "id": "11431",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16240.jpeg",
        "name": "I-70 EB @ Sage Flat Rd / MP 54.4, SLA"
    }]
}, {
    "coord": [38.93284, -111.85445],
    "cams": [{
        "id": "11718",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16526.jpeg",
        "name": "I-70 EB @ State St / US-89 / MP 56.73, SLA"
    }]
}, {
    "coord": [38.85142, -110.92669],
    "cams": [{
        "id": "11429",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-70%20MP%20115-all.gif",
        "name": "I-70 Liveview @ Devils Canyon / MP 115.68, EM"
    }]
}, {
    "coord": [38.95256, -109.38945],
    "cams": [{
        "id": "11302",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-70-MP-206-all.gif",
        "name": "I-70 Liveview @ Milepost 206.1, GR"
    }]
}, {
    "coord": [38.83975, -112.02217],
    "cams": [{
        "id": "11300",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-70-MP45%20all.gif",
        "name": "I-70 Liveview @ Milepost 45.05, SE"
    }]
}, {
    "coord": [38.87778, -110.66393],
    "cams": [{
        "id": "11271",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-70Mile131-all.gif",
        "name": "I-70 Liveview @ Temple Mount Rd / MP 131.1, EM"
    }]
}, {
    "coord": [38.94249, -109.81626],
    "cams": [{
        "id": "11272",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-70mile182-all.gif",
        "name": "I-70 Liveview @ US-191 / Crescent Jct / MP 182.2, GR"
    }]
}, {
    "coord": [38.9154, -111.73329],
    "cams": [{
        "id": "11301",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-70%20MP%2063-all.gif",
        "name": "I-70 Liveview EB @ Gooseberry Rd / MP 63.57, SE"
    }]
}, {
    "coord": [38.55568, -112.36276],
    "cams": [{
        "id": "10827",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15636.jpeg",
        "name": "I-70 Liveview EB @ Milepost 15.84, SE"
    }]
}, {
    "coord": [38.78317, -111.49274],
    "cams": [{
        "id": "10858",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-70_MP82.gif",
        "name": "I-70 Liveview EB @ Milepost 82.4, SE"
    }]
}, {
    "coord": [38.881088, -111.569973],
    "cams": [{
        "id": "11620",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-70_MP74-all.gif",
        "name": "I-70 Liveview WB @ Convulsion Rd / MP 73.52, SE"
    }]
}, {
    "coord": [38.92556, -110.49734],
    "cams": [{
        "id": "10847",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-70_MP141.gif",
        "name": "I-70 Liveview WB @ Milepost 141.35, EM"
    }]
}, {
    "coord": [39.16653, -109.13629],
    "cams": [{
        "id": "10846",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-70_MP226.gif",
        "name": "I-70 Liveview WB @ Milepost 226.4, GR"
    }]
}, {
    "coord": [38.56391, -112.43374],
    "cams": [{
        "id": "11274",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-70-FishCreek-all.gif",
        "name": "I-70 RWIS @ Fish Creek / MP 11.31, SE"
    }]
}, {
    "coord": [38.87622, -111.95875],
    "cams": [{
        "id": "11483",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-70%20SR-24.gif",
        "name": "I-70 RWIS @ SR-24 / MP 49.33, SIG"
    }]
}, {
    "coord": [38.7725, -112.0986],
    "cams": [{
        "id": "12025",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-70%20MP%2038%20Richfield.gif",
        "name": "I-70 RWIS EB @ 300 N / MP 38.77, RFD"
    }]
}, {
    "coord": [38.86581, -110.80612],
    "cams": [{
        "id": "10740",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-70%20GhostRocks.jpg",
        "name": "I-70 RWIS EB @ Ghost Rocks / MP 123.11, EM"
    }]
}, {
    "coord": [38.59124, -112.49404],
    "cams": [{
        "id": "10736",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-70-ClearCreek.gif",
        "name": "I-70 RWIS WB @ Clear Creek Summit / MP 7.46, SE"
    }]
}, {
    "coord": [38.7787, -111.31663],
    "cams": [{
        "id": "10737",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-70%20Fremont-West.jpeg",
        "name": "I-70 RWIS WB @ Fremont Jct / MP 93, SE"
    }]
}, {
    "coord": [38.90374, -110.562],
    "cams": [{
        "id": "10741",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-70%20@%20Rattlesnake%20Bench.jpg",
        "name": "I-70 RWIS WB @ Rattlesnake Bench / MP 137.07, EM"
    }]
}, {
    "coord": [38.93739, -109.83775],
    "cams": [{
        "id": "11430",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16239.jpeg",
        "name": "I-70 WB @ Crescent Jct / MP 180.85, GR"
    }]
}, {
    "coord": [38.59465, -112.57692],
    "cams": [{
        "id": "10572",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15381.jpeg",
        "name": "I-70 WB @ I-15 / Cove Fort / MP 2.4, MD"
    }]
}, {
    "coord": [38.93159, -111.81922],
    "cams": [{
        "id": "11719",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16527.jpeg",
        "name": "I-70 WB @ Salina VMS / MP 58.66, SE"
    }]
}, {
    "coord": [40.71954, -111.77901],
    "cams": [{
        "id": "150",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux150.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Chain Up Area East / MP 129.5, SL"
    }]
}, {
    "coord": [40.749, -111.71019],
    "cams": [{
        "id": "158",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux158.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ East Canyon / SR-65 / MP 133.96, SL"
    }]
}, {
    "coord": [40.71142, -111.79006],
    "cams": [{
        "id": "68",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux68.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Exit 130 to SB I-215 E / MP 128.5, SL"
    }]
}, {
    "coord": [40.73393, -111.7473],
    "cams": [{
        "id": "153",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux153.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 131.42, SL"
    }]
}, {
    "coord": [40.74222, -111.73273],
    "cams": [{
        "id": "155",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux155.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 132.53, SL"
    }]
}, {
    "coord": [40.7463, -111.72476],
    "cams": [{
        "id": "156",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux156.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 132.97, SL"
    }]
}, {
    "coord": [40.74778, -111.69954],
    "cams": [{
        "id": "159",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux159.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 134.47, SL"
    }]
}, {
    "coord": [40.74406, -111.69221],
    "cams": [{
        "id": "160",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux160.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 134.93, SL"
    }]
}, {
    "coord": [40.7281, -111.7656],
    "cams": [{
        "id": "11424",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80%20Parleys%20Quarry.gif",
        "name": "I-80 / Parley`s Canyon RWIS EB @ East Quarry / MP 130.36, SL (Low Lite)"
    }]
}, {
    "coord": [40.71767, -111.78416],
    "cams": [{
        "id": "69",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux69.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Chain Up Area West / MP 129.2, SL"
    }]
}, {
    "coord": [40.75235, -111.71423],
    "cams": [{
        "id": "157",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux157.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ East Canyon / SR-65 On-ramp / MP 133.61, SL"
    }]
}, {
    "coord": [40.72914, -111.76554],
    "cams": [{
        "id": "151",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux151.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ East Quarry / MP 130.38, SL"
    }]
}, {
    "coord": [40.74016, -111.66792],
    "cams": [{
        "id": "163",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux163.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Lamb`s Canyon Rd Off-ramp / MP 136.45, SL"
    }]
}, {
    "coord": [40.74167, -111.6754],
    "cams": [{
        "id": "162",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux162.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Lamb`s Canyon Rd On-ramp / MP 135.96, SL"
    }]
}, {
    "coord": [40.73265, -111.75594],
    "cams": [{
        "id": "152",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux152.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Milepost 131.1, SL"
    }]
}, {
    "coord": [40.748466, -111.697635],
    "cams": [{
        "id": "12458",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17249.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Mountain Dell / MP 134.6, SL"
    }]
}, {
    "coord": [40.74147, -111.74178],
    "cams": [{
        "id": "154",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux154.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Mt Aire Canyon Rd / MP 132.01, SL"
    }]
}, {
    "coord": [40.72521, -111.7718],
    "cams": [{
        "id": "70",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux70.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Quarry / MP 129.88, SL"
    }]
}, {
    "coord": [40.74199, -111.68416],
    "cams": [{
        "id": "161",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux161.jpeg",
        "name": "I-80 / Parleys Canyon EB @ Milepost 135.46, SL"
    }]
}, {
    "coord": [40.7433, -111.65681],
    "cams": [{
        "id": "164",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux164.jpeg",
        "name": "I-80 / Parleys Canyon EB @ Milepost 136.95, SL"
    }]
}, {
    "coord": [40.91813, -111.40757],
    "cams": [{
        "id": "11393",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16202.jpeg",
        "name": "I-80 @ 150 N / MP 163.05, CLV"
    }]
}, {
    "coord": [40.71622, -111.83346],
    "cams": [{
        "id": "60",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux60.jpeg",
        "name": "I-80 @ 2000 E / MP 126.2, SLC"
    }]
}, {
    "coord": [40.81299, -111.40143],
    "cams": [{
        "id": "11392",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16201.jpeg",
        "name": "I-80 @ Wanship / SR-32 / MP 155.46, SU"
    }]
}, {
    "coord": [40.7639, -111.91991],
    "cams": [{
        "id": "107",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux107.jpeg",
        "name": "I-80 EB @ 1000 W / MP 118.85, SLC"
    }]
}, {
    "coord": [40.76463, -111.9318],
    "cams": [{
        "id": "11675",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16483.jpeg",
        "name": "I-80 EB @ 1300 W / MP 118.41 SLC"
    }]
}, {
    "coord": [40.71221, -111.82107],
    "cams": [{
        "id": "62",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux62.jpeg",
        "name": "I-80 EB @ 2400 E / MP 126.82, SLC"
    }]
}, {
    "coord": [40.71418, -111.81214],
    "cams": [{
        "id": "63",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux63.jpeg",
        "name": "I-80 EB @ 2800 E / MP 127.39, SL"
    }]
}, {
    "coord": [40.71721, -111.90048],
    "cams": [{
        "id": "53",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux53.jpeg",
        "name": "I-80 EB @ 300 W / MP 122.57, SSL"
    }]
}, {
    "coord": [40.76394, -111.97056],
    "cams": [{
        "id": "48",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux48.jpeg",
        "name": "I-80 EB @ 3200 W / North Temple St / MP 116.33, SLC"
    }]
}, {
    "coord": [40.71116, -111.80048],
    "cams": [{
        "id": "66",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux66.jpeg",
        "name": "I-80 EB @ 3250 E / East of Foothill / MP 127.97, SL"
    }]
}, {
    "coord": [40.76381, -111.97688],
    "cams": [{
        "id": "47",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux47.jpeg",
        "name": "I-80 EB @ 3600 W / MP 115.9, SLC"
    }]
}, {
    "coord": [40.76603, -111.99647],
    "cams": [{
        "id": "43",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux43.jpeg",
        "name": "I-80 EB @ 4400 W / MP 114.75, SLC"
    }]
}, {
    "coord": [40.71829, -111.87026],
    "cams": [{
        "id": "56",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux56.jpeg",
        "name": "I-80 EB @ 700 E / SR-71 / MP 124.15, SLC"
    }]
}, {
    "coord": [40.76389, -111.98733],
    "cams": [{
        "id": "45",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux45.jpeg",
        "name": "I-80 EB @ Bangerter Hwy / 4000 W / SR-154 / MP 115.35, SLC"
    }]
}, {
    "coord": [40.71296, -111.80676],
    "cams": [{
        "id": "64",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux64.jpeg",
        "name": "I-80 EB @ I-215 E / MP 127.66, SL"
    }]
}, {
    "coord": [40.76477, -111.95267],
    "cams": [{
        "id": "49",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux49.jpeg",
        "name": "I-80 EB @ I-215 W SB / MP 117.2, SLC"
    }]
}, {
    "coord": [40.71052, -111.79684],
    "cams": [{
        "id": "67",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux67.jpeg",
        "name": "I-80 EB @ Mouth of Parley`s Canyon / MP 128.23, SL"
    }]
}, {
    "coord": [40.73431, -111.55387],
    "cams": [{
        "id": "169",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux169.jpeg",
        "name": "I-80 EB @ Powderwood Rd / MP 143.46, SU"
    }]
}, {
    "coord": [40.76544, -111.93845],
    "cams": [{
        "id": "9118",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux51.jpeg",
        "name": "I-80 EB @ Redwood Rd / SR-68 / MP 117.9, SLC"
    }]
}, {
    "coord": [40.69311, -112.26367],
    "cams": [{
        "id": "10611",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15420.jpeg",
        "name": "I-80 EB @ SR-36 / Exit 99 / MP 98.6, TE"
    }]
}, {
    "coord": [40.71753, -111.88783],
    "cams": [{
        "id": "54",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux54.jpeg",
        "name": "I-80 EB @ State St / US-89 / MP 123.32, SSL"
    }]
}, {
    "coord": [40.74941, -111.60253],
    "cams": [{
        "id": "166",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux166.jpeg",
        "name": "I-80 EB @ Summit Park / MP 140.13, SU"
    }]
}, {
    "coord": [40.74266, -111.56181],
    "cams": [{
        "id": "168",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux168.jpeg",
        "name": "I-80 EB @ View Area / MP 142.75, SU"
    }]
}, {
    "coord": [40.735796, -114.054082],
    "cams": [{
        "id": "9898",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14607.jpeg",
        "name": "I-80 EB @ Wendover / UT MP -1.4 / NV MP 409.25, WEN (Local)"
    }]
}, {
    "coord": [40.72102, -111.52196],
    "cams": [{
        "id": "171",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux171.jpeg",
        "name": "I-80 EB @ West of US-40 / MP 145.4, SU"
    }]
}, {
    "coord": [40.76512, -111.94356],
    "cams": [{
        "id": "11251",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80mp117-all.gif",
        "name": "I-80 Liveview EB @ 1800 W / MP 117.52, SLC"
    }]
}, {
    "coord": [40.77069, -112.06727],
    "cams": [{
        "id": "11250",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80-MP-111-all.gif",
        "name": "I-80 Liveview EB @ 7200 W Off Ramp / MP 111, SLC"
    }]
}, {
    "coord": [41.01222, -111.36947],
    "cams": [{
        "id": "11082",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80-MP-172-all.gif",
        "name": "I-80 Liveview EB @ Echo Canyon / MP 172, SU"
    }]
}, {
    "coord": [40.77064, -112.13959],
    "cams": [{
        "id": "11079",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80-MP-107-all.gif",
        "name": "I-80 Liveview EB @ Milepost 107.26, SL"
    }]
}, {
    "coord": [40.7602, -111.47103],
    "cams": [{
        "id": "10798",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80-Mp-149.gif",
        "name": "I-80 Liveview EB @ Milepost 149.62, SU"
    }]
}, {
    "coord": [41.04699, -111.30161],
    "cams": [{
        "id": "11254",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80%20M176-all.gif",
        "name": "I-80 Liveview EB @ Milepost 176.4, SU"
    }]
}, {
    "coord": [41.14012, -111.1519],
    "cams": [{
        "id": "10812",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80-MP-186.gif",
        "name": "I-80 Liveview EB @ Milepost 186.78, SU"
    }]
}, {
    "coord": [40.74575, -112.656],
    "cams": [{
        "id": "11621",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80-SR-196_MP-76.gif",
        "name": "I-80 Liveview EB @ Skull Valley Rd / Rowley Jct / SR-196 / MP 76.3, TE"
    }]
}, {
    "coord": [40.823, -112.9001],
    "cams": [{
        "id": "10790",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80-MP-62.gif",
        "name": "I-80 Liveview WB @ Lakeside / Military Area / Exit 62, TE"
    }]
}, {
    "coord": [40.7381, -113.82135],
    "cams": [{
        "id": "11326",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80mile11all.gif",
        "name": "I-80 Liveview WB @ Milepost 11.8, TE"
    }]
}, {
    "coord": [40.72922, -113.28858],
    "cams": [{
        "id": "11075",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80-MP40.gif",
        "name": "I-80 Liveview WB @ Milepost 40, TE"
    }]
}, {
    "coord": [40.73069, -112.59008],
    "cams": [{
        "id": "11634",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80-MP80.gif",
        "name": "I-80 Liveview WB @ Milepost 79.88, TE"
    }]
}, {
    "coord": [40.69246, -112.46619],
    "cams": [{
        "id": "11635",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80-MP87.gif",
        "name": "I-80 Liveview WB @ Milepost 86.92, TE"
    }]
}, {
    "coord": [40.66905, -112.37924],
    "cams": [{
        "id": "11636",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80-MP92.gif",
        "name": "I-80 Liveview WB @ Milepost 91.77, TE"
    }]
}, {
    "coord": [40.72735, -112.21588],
    "cams": [{
        "id": "11076",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80-MP-102-all.gif",
        "name": "I-80 Liveview WB @ Salt Lake Marina / MP 102.22, SL"
    }]
}, {
    "coord": [40.91745, -111.40689],
    "cams": [{
        "id": "11427",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16236.jpeg",
        "name": "I-80 RWIS @ 150 N / MP 163.05, CLV (Low Lite)"
    }]
}, {
    "coord": [40.7313, -113.4992],
    "cams": [{
        "id": "10776",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-80%20@%20MP29.gif",
        "name": "I-80 RWIS @ Milepost 28.68, TE"
    }]
}, {
    "coord": [40.7404, -112.624],
    "cams": [{
        "id": "10777",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-80%20@%20MP78%20W.jpg",
        "name": "I-80 RWIS @ Milepost 78, TE"
    }]
}, {
    "coord": [41.19522, -111.11397],
    "cams": [{
        "id": "10742",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-80-Wahsatch.gif",
        "name": "I-80 RWIS @ Wahsatch Hill / MP 191.2, SU"
    }]
}, {
    "coord": [40.81372, -111.40083],
    "cams": [{
        "id": "11426",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16235.jpeg",
        "name": "I-80 RWIS @ Wanship / SR-32 / MP 155.46, SU (Low Lite)"
    }]
}, {
    "coord": [40.75603, -112.76008],
    "cams": [{
        "id": "12101",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS_I-80_MP71_EastDelle.jpg",
        "name": "I-80 RWIS EB @ East Delle / MP 70.75, TE"
    }]
}, {
    "coord": [40.75228, -111.6248],
    "cams": [{
        "id": "11425",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20Parleys-Summit-all.gif",
        "name": "I-80 RWIS EB @ Parley`s Summit / MP 138.87, SL (Low Lite)"
    }]
}, {
    "coord": [40.7729, -112.801],
    "cams": [{
        "id": "12102",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS_I-80_MP68_WestDelle.jpg",
        "name": "I-80 RWIS EB @ West Delle / MP 68.3, TE"
    }]
}, {
    "coord": [40.76157, -113.01042],
    "cams": [{
        "id": "10739",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-80%20Grassy%20Knolls-all.gif",
        "name": "I-80 RWIS WB @ Grassy Knolls Rest Area / MP 54.8, TE"
    }]
}, {
    "coord": [40.745, -114.0221],
    "cams": [{
        "id": "10775",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-80%20@%20MP1.jpg",
        "name": "I-80 RWIS WB @ Milepost 1.24, WEN"
    }]
}, {
    "coord": [40.72021, -111.85726],
    "cams": [{
        "id": "57",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux57.jpeg",
        "name": "I-80 WB @ 1200 E / Highland Dr / MP 124.9, SLC"
    }]
}, {
    "coord": [40.72003, -111.85418],
    "cams": [{
        "id": "12325",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17124.jpeg",
        "name": "I-80 WB @ 1300 E / MP 125.1, SLC"
    }]
}, {
    "coord": [40.71922, -111.84178],
    "cams": [{
        "id": "59",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux59.jpeg",
        "name": "I-80 WB @ 1700 E / MP 125.69, SLC"
    }]
}, {
    "coord": [40.76682, -111.94656],
    "cams": [{
        "id": "50",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux50.jpeg",
        "name": "I-80 WB @ 1900 W / MP 117.47, SLC"
    }]
}, {
    "coord": [40.71375, -111.82372],
    "cams": [{
        "id": "61",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux61.jpeg",
        "name": "I-80 WB @ 2300 E / MP 126.74, SLC"
    }]
}, {
    "coord": [40.77237, -112.02489],
    "cams": [{
        "id": "9350",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux337.jpeg",
        "name": "I-80 WB @ 5600 W / SR-172 / MP 113.3, SLC"
    }]
}, {
    "coord": [40.71925, -111.87157],
    "cams": [{
        "id": "55",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux55.jpeg",
        "name": "I-80 WB @ 700 E / SR-71 / MP 124.1, SLC"
    }]
}, {
    "coord": [41.00564, -111.38677],
    "cams": [{
        "id": "10386",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15095.jpeg",
        "name": "I-80 WB @ Echo Canyon / Rest Stop / MP 170.44, SU (Local)"
    }]
}, {
    "coord": [40.7543, -111.57225],
    "cams": [{
        "id": "167",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux167.jpeg",
        "name": "I-80 WB @ Jeremy Ranch / MP 141.8, SU"
    }]
}, {
    "coord": [40.7273, -111.54285],
    "cams": [{
        "id": "170",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux170.jpeg",
        "name": "I-80 WB @ Kimball Jct / SR-224 / MP 144.22, SU"
    }]
}, {
    "coord": [40.73694, -111.48655],
    "cams": [{
        "id": "12457",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17248.jpeg",
        "name": "I-80 WB @ Milepost 147.56, SU"
    }]
}, {
    "coord": [40.75389, -111.62432],
    "cams": [{
        "id": "165",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux165.jpeg",
        "name": "I-80 WB @ Parley`s Summit / MP 138.9, SL"
    }]
}, {
    "coord": [40.7319, -111.49834],
    "cams": [{
        "id": "172",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux172.jpeg",
        "name": "I-80 WB @ Silver Creek Jct / US-40 / MP 146.84, SU"
    }]
}, {
    "coord": [40.72276, -112.2278],
    "cams": [{
        "id": "11668",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16476.jpeg",
        "name": "I-80 WB @ SR-201 / MP 101.45, TE"
    }]
}, {
    "coord": [40.71863, -111.88858],
    "cams": [{
        "id": "147",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux147.jpeg",
        "name": "I-80 WB @ State St / US-89 / MP 123.28, SSL"
    }]
}, {
    "coord": [41.13787, -111.88626],
    "cams": [{
        "id": "10615",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15424.jpeg",
        "name": "I-84 / Weber Canyon @ Power Plant / MP 89.25, WB"
    }]
}, {
    "coord": [41.13987, -111.84733],
    "cams": [{
        "id": "12409",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17208.jpeg",
        "name": "I-84 / Weber Canyon WB @ Milepost 91.35, MN"
    }]
}, {
    "coord": [41.13744, -111.9136],
    "cams": [{
        "id": "10819",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-84-MP-87.gif",
        "name": "I-84 Liveview @ US-89  / MP 87.8, UIN"
    }]
}, {
    "coord": [41.88455, -112.48962],
    "cams": [{
        "id": "11257",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-84mile20-all.gif",
        "name": "I-84 Liveview EB @ Blue Creek / MP 20.36, BE"
    }]
}, {
    "coord": [40.97022, -111.43928],
    "cams": [{
        "id": "11482",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-84-MP119.gif",
        "name": "I-84 Liveview EB @ I-80 / Echo Jct / MP 119.6, SU"
    }]
}, {
    "coord": [41.896, -112.5504],
    "cams": [{
        "id": "10787",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-84-MP17.gif",
        "name": "I-84 Liveview EB @ Milepost 17.64, BE"
    }]
}, {
    "coord": [41.81717, -112.41268],
    "cams": [{
        "id": "11086",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-84-MP-26-all.gif",
        "name": "I-84 Liveview EB @ SR-83 / MP 26.57, HWL"
    }]
}, {
    "coord": [41.13858, -111.82744],
    "cams": [{
        "id": "11481",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-84-mp-92.gif",
        "name": "I-84 Liveview WB @ SR-167 / MP 92.42, MN"
    }]
}, {
    "coord": [41.9113, -112.6052],
    "cams": [{
        "id": "10774",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-84%20@%20Chaulk%20Hill.gif",
        "name": "I-84 RWIS WB @ Chaulk Hill / MP 13.79, BE"
    }]
}, {
    "coord": [41.0568, -111.5322],
    "cams": [{
        "id": "10860",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15669.jpg",
        "name": "I-84 RWIS WB @ Devils Slide / MP 111.74, MN"
    }]
}, {
    "coord": [41.81014, -112.33939],
    "cams": [{
        "id": "10743",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-84%20@%20Whites%20Valley-all.gif",
        "name": "I-84 RWIS WB @ Whites Valley / MP 30.45, BE"
    }]
}, {
    "coord": [41.17434, -112.01027],
    "cams": [{
        "id": "9127",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux317.jpeg",
        "name": "I-84 SB @ Riverdale Rd / SR-26 / MP 81.8, RDL"
    }]
}, {
    "coord": [41.70506, -112.19274],
    "cams": [{
        "id": "10713",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15522.jpeg",
        "name": "I-84 WB @ I-15 SB / MP 41.66, TRE"
    }]
}, {
    "coord": [40.66298, -111.50064],
    "cams": [{
        "id": "11810",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16618.jpeg",
        "name": "Kearns Blvd / SR-248 @ Bonanza Dr / Monitor Dr, PKC"
    }]
}, {
    "coord": [40.20711, -111.6668],
    "cams": [{
        "id": "11857",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16665.jpeg",
        "name": "Lakeview Pkwy @ 500 W, PVO"
    }]
}, {
    "coord": [41.05424, -111.96756],
    "cams": [{
        "id": "12057",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16865.jpeg",
        "name": "Layton Pkwy @ 100 W, LTN"
    }]
}, {
    "coord": [40.90129, -111.92453],
    "cams": [{
        "id": "10052",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14761.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 1200 N / MP 5.42, WBN"
    }]
}, {
    "coord": [40.93302, -111.89257],
    "cams": [{
        "id": "10059",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14768.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 1275 N / MP 8.3, CVL"
    }]
}, {
    "coord": [40.9552, -111.89246],
    "cams": [{
        "id": "10061",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14770.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 1550 S / MP 9.8, FRM"
    }]
}, {
    "coord": [40.94533, -111.89221],
    "cams": [{
        "id": "10060",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14769.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 1900 N / MP 9.16, CVL"
    }]
}, {
    "coord": [40.87031, -111.9384],
    "cams": [{
        "id": "10049",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14758.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 1900 S / MP 3.16, WXS"
    }]
}, {
    "coord": [40.97687, -111.89707],
    "cams": [{
        "id": "10063",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14772.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 200 S / MP 11.4, FRM"
    }]
}, {
    "coord": [40.91387, -111.90924],
    "cams": [{
        "id": "10054",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14763.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 2200 N / MP 6.62, WBN"
    }]
}, {
    "coord": [40.86287, -111.94287],
    "cams": [{
        "id": "10048",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14757.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 2500 S / MP 2.5, WXS"
    }]
}, {
    "coord": [40.84945, -111.94262],
    "cams": [{
        "id": "10046",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14755.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 300 N / MP 1.52, NSL"
    }]
}, {
    "coord": [40.89357, -111.933],
    "cams": [{
        "id": "10051",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14760.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 400 N / MP 4.7, WBN"
    }]
}, {
    "coord": [40.92754, -111.89755],
    "cams": [{
        "id": "10058",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14767.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 800 N / MP 7.8, CVL"
    }]
}, {
    "coord": [40.85773, -111.9431],
    "cams": [{
        "id": "10047",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14756.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 900 N / MP 2.14, NSL"
    }]
}, {
    "coord": [40.91667, -111.90314],
    "cams": [{
        "id": "10055",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14764.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 900 W / MP 7, CVL"
    }]
}, {
    "coord": [40.84059, -111.94164],
    "cams": [{
        "id": "10045",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14754.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ Center St / MP 1, NSL"
    }]
}, {
    "coord": [40.92209, -111.89931],
    "cams": [{
        "id": "10056",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14765.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ Parrish Ln / SR-105 / MP 7.45, CVL"
    }]
}, {
    "coord": [40.98545, -111.90102],
    "cams": [{
        "id": "10064",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14773.jpeg",
        "name": "Legacy Pkwy / SR-67 SB @ 250 N / US-89 / MP 12.1, FRM"
    }]
}, {
    "coord": [40.88351, -111.93762],
    "cams": [{
        "id": "10050",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14759.jpeg",
        "name": "Legacy Pkwy / SR-67 SB @ 500 S / MP 4, WXS"
    }]
}, {
    "coord": [40.96487, -111.89333],
    "cams": [{
        "id": "10062",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14771.jpeg",
        "name": "Legacy Pkwy / SR-67 SB @ Glover Ln / MP 10.5, FRM"
    }]
}, {
    "coord": [40.90648, -111.91826],
    "cams": [{
        "id": "10053",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14762.jpeg",
        "name": "Legacy Pkwy / SR-67 SB @ Pages Ln / MP 6, WBN"
    }]
}, {
    "coord": [40.92134, -111.90037],
    "cams": [{
        "id": "10057",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14766.jpeg",
        "name": "Legacy Pkwy / SR-67 SB @ Parrish Ln / SR-105 / MP 7.4, CVL"
    }]
}, {
    "coord": [40.57796, -111.803],
    "cams": [{
        "id": "10186",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14895.jpeg",
        "name": "Little Cottonwood Rd / 3335 E / SR-209 @ Old Wasatch Blvd / 9710 S, GNT"
    }]
}, {
    "coord": [40.57312, -111.79848],
    "cams": [{
        "id": "11799",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16607.jpeg",
        "name": "Little Cottonwood Rd / 9800 S / SR-209 @ Wasatch Blvd / 3400 E, SL"
    }]
}, {
    "coord": [40.58493, -111.65407],
    "cams": [{
        "id": "12437",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17228.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Alta Bypass / MP 10.95, SL"
    }]
}, {
    "coord": [40.57169, -111.72864],
    "cams": [{
        "id": "11457",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16266.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Lisa Falls / MP 6.5, SL"
    }]
}, {
    "coord": [40.57123, -111.71266],
    "cams": [{
        "id": "11458",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16267.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Seven Turns / MP 7.4, SL"
    }]
}, {
    "coord": [40.5707, -111.7028],
    "cams": [{
        "id": "11459",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16268.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Tanners Flat / MP 7.94, SL"
    }]
}, {
    "coord": [40.57141, -111.73847],
    "cams": [{
        "id": "11456",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16265.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Upper Vault / MP 5.96, SL"
    }]
}, {
    "coord": [40.57609, -111.68218],
    "cams": [{
        "id": "11461",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16270.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ White Pine Parking / MP 9.2, SL"
    }]
}, {
    "coord": [40.57096, -111.74374],
    "cams": [{
        "id": "11839",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16647.jpeg",
        "name": "Little Cottonwood Rd / SR-210 RWIS EB @ Powerhouse / MP 5.67, SL"
    }]
}, {
    "coord": [40.59104, -111.63377],
    "cams": [{
        "id": "12435",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17226.jpeg",
        "name": "Little Cottonwood Rd / SR-210 WB @ Alta / MP 12.16, ALT"
    }]
}, {
    "coord": [40.57911, -111.67448],
    "cams": [{
        "id": "12436",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17227.jpeg",
        "name": "Little Cottonwood Rd / SR-210 WB @ Upper White Pine / MP 9.7, SL"
    }]
}, {
    "coord": [40.5745, -111.69099],
    "cams": [{
        "id": "11460",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16269.jpeg",
        "name": "Little Cottonwood Rd / SR-210 WB @ White Pine / MP 8.7, SL"
    }]
}, {
    "coord": [40.77597, -111.89111],
    "cams": [{
        "id": "10630",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15439.jpeg",
        "name": "Main St / Columbus St / SR-186 @ 300 N, SLC"
    }]
}, {
    "coord": [38.74941, -112.08922],
    "cams": [{
        "id": "9782",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14492.jpeg",
        "name": "Main St / SR-118 / SR-120 @ 1300 S / SR-120, RFD"
    }]
}, {
    "coord": [38.77213, -112.08554],
    "cams": [{
        "id": "9922",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14631.jpeg",
        "name": "Main St / SR-120 @ 300 N / SR-118, RFD"
    }]
}, {
    "coord": [38.75677, -112.08583],
    "cams": [{
        "id": "9920",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14629.jpeg",
        "name": "Main St / SR-120 @ 800 S, RFD"
    }]
}, {
    "coord": [38.76793, -112.08567],
    "cams": [{
        "id": "9921",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14630.jpeg",
        "name": "Main St / SR-120 @ Center St, RFD"
    }]
}, {
    "coord": [41.13269, -112.02586],
    "cams": [{
        "id": "11608",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16417.jpeg",
        "name": "Main St / SR-126 @ 1300 N, SUN"
    }]
}, {
    "coord": [41.08917, -112.00106],
    "cams": [{
        "id": "9231",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux322.jpeg",
        "name": "Main St / SR-126 @ Antelope Dr / SR-108, LTN"
    }]
}, {
    "coord": [37.68082, -113.06173],
    "cams": [{
        "id": "10304",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15013.jpeg",
        "name": "Main St / SR-130 @ 200 N / Freedom Blvd / SR-56, CDC"
    }]
}, {
    "coord": [37.67371, -113.06158],
    "cams": [{
        "id": "10387",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15096.jpeg",
        "name": "Main St / SR-130 @ 200 S / SR-289, CDC"
    }]
}, {
    "coord": [37.68633, -113.06172],
    "cams": [{
        "id": "12456",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17247.jpeg",
        "name": "Main St / SR-130 @ Coal Creek Rd, CDC"
    }]
}, {
    "coord": [37.65399, -113.07987],
    "cams": [{
        "id": "11453",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16262.jpeg",
        "name": "Main St / SR-130 @ Cross Hollow Rd / Old Hwy 91, CDC"
    }]
}, {
    "coord": [40.37687, -111.81403],
    "cams": [{
        "id": "10546",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15355.jpeg",
        "name": "Main St / SR-145 @ Kawakami Dr / 600 W, AFK"
    }]
}, {
    "coord": [40.1228, -111.65442],
    "cams": [{
        "id": "11716",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16524.jpeg",
        "name": "Main St / SR-156 @ 1000 N, SPF"
    }]
}, {
    "coord": [40.10574, -111.65485],
    "cams": [{
        "id": "11717",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16525.jpeg",
        "name": "Main St / SR-156 @ 300 S / SR-198, SPF"
    }]
}, {
    "coord": [40.1151, -111.65465],
    "cams": [{
        "id": "11753",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16561.jpeg",
        "name": "Main St / SR-156 @ 400 N / SR-147, SPF"
    }]
}, {
    "coord": [40.12004, -111.65452],
    "cams": [{
        "id": "11484",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16293.jpeg",
        "name": "Main St / SR-156 @ 800 N, SPF"
    }]
}, {
    "coord": [41.71005, -111.83439],
    "cams": [{
        "id": "11651",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16459.jpeg",
        "name": "Main St / SR-165 @ 100 N PVD / 1200 S LGN, PVD"
    }]
}, {
    "coord": [40.09425, -111.65538],
    "cams": [{
        "id": "11824",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16632.jpeg",
        "name": "Main St / SR-198 @ Arrowhead Trail Rd / SR-164, SPF"
    }]
}, {
    "coord": [40.55101, -112.29792],
    "cams": [{
        "id": "10296",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15005.jpeg",
        "name": "Main St / SR-36 @ 1000 N, TLE"
    }]
}, {
    "coord": [40.56524, -112.29552],
    "cams": [{
        "id": "10297",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15006.jpeg",
        "name": "Main St / SR-36 @ 2000 N, TLE"
    }]
}, {
    "coord": [40.511174, -112.313853],
    "cams": [{
        "id": "12375",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17174.jpeg",
        "name": "Main St / SR-36 @ Tooele Shed / Coleman St / MP 52.63, TLE"
    }]
}, {
    "coord": [39.59474, -110.79087],
    "cams": [{
        "id": "12519",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17310.jpeg",
        "name": "Main St / SR-55 @ 300 S, PRC"
    }]
}, {
    "coord": [39.599409, -110.797722],
    "cams": [{
        "id": "12518",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17309.jpeg",
        "name": "Main St / SR-55 @ 700 E, PRC"
    }]
}, {
    "coord": [37.67406, -112.15626],
    "cams": [{
        "id": "11875",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16683.jpeg",
        "name": "Main St / SR-63 @ Center St, BCC"
    }]
}, {
    "coord": [38.5684, -109.55061],
    "cams": [{
        "id": "11537",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16346.jpeg",
        "name": "Main St / US-191 @ 300 S, MAB"
    }]
}, {
    "coord": [38.55745, -109.54278],
    "cams": [{
        "id": "9925",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14634.jpeg",
        "name": "Main St / US-191 @ 400 E / Jackson St, MAB"
    }]
}, {
    "coord": [37.87251, -109.34311],
    "cams": [{
        "id": "12026",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16834.jpeg",
        "name": "Main St / US-191 @ Center St / US-491, MNC"
    }]
}, {
    "coord": [38.57323, -109.55084],
    "cams": [{
        "id": "9923",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14632.jpeg",
        "name": "Main St / US-191 @ Center St, MAB"
    }]
}, {
    "coord": [38.56382, -109.54971],
    "cams": [{
        "id": "9924",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14633.jpeg",
        "name": "Main St / US-191 @ Kane Creek Blvd, MAB"
    }]
}, {
    "coord": [40.45404, -109.5455],
    "cams": [{
        "id": "10496",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15305.jpeg",
        "name": "Main St / US-40 @ 100 S / MP 143.4, VNL"
    }]
}, {
    "coord": [40.50635, -111.41349],
    "cams": [{
        "id": "10636",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15445.jpeg",
        "name": "Main St / US-40 @ 100 S / MP 17, HBR"
    }]
}, {
    "coord": [40.2741, -110.02858],
    "cams": [{
        "id": "11910",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16718.jpeg",
        "name": "Main St / US-40 @ 2000 W / Hancock Cove Rd / MP 111.5, RSV"
    }]
}, {
    "coord": [40.43643, -109.56906],
    "cams": [{
        "id": "11901",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16709.jpeg",
        "name": "Main St / US-40 @ 2100 W / MP 141.64, VNL"
    }]
}, {
    "coord": [40.51418, -111.41339],
    "cams": [{
        "id": "10637",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15446.jpeg",
        "name": "Main St / US-40 @ 500 N / MP 16.4, HBR"
    }]
}, {
    "coord": [40.16353, -110.4012],
    "cams": [{
        "id": "11909",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16717.jpeg",
        "name": "Main St / US-40 @ Center St / SR-87 / MP 86.54, DCH"
    }]
}, {
    "coord": [40.49306, -111.41371],
    "cams": [{
        "id": "10628",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15437.jpeg",
        "name": "Main St / US-40 @ US-189 / 1200 S / MP 17.94, HBR"
    }]
}, {
    "coord": [40.45578, -109.52854],
    "cams": [{
        "id": "10495",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15304.jpeg",
        "name": "Main St / US-40 @ Vernal Ave / US-191 / MP 144.3, VNL"
    }]
}, {
    "coord": [40.37707, -111.81138],
    "cams": [{
        "id": "10249",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14958.jpeg",
        "name": "Main St / US-89 / SR-145 @ State St / US-89, AFK"
    }]
}, {
    "coord": [40.37687, -111.79588],
    "cams": [{
        "id": "10556",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15365.jpeg",
        "name": "Main St / US-89 @ 100 E / Alpine Hwy / SR-74, AFK"
    }]
}, {
    "coord": [40.18578, -111.61093],
    "cams": [{
        "id": "11840",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16648.jpeg",
        "name": "Main St / US-89 @ 1400 N / SR-75, SPV"
    }]
}, {
    "coord": [40.86161, -111.8962],
    "cams": [{
        "id": "9640",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux438.jpeg",
        "name": "Main St / US-89 @ 2600 S / SR-93, BTF"
    }]
}, {
    "coord": [40.16106, -111.61077],
    "cams": [{
        "id": "10398",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15107.jpeg",
        "name": "Main St / US-89 @ 400 S / SR-77, SPV"
    }]
}, {
    "coord": [41.42231, -112.03603],
    "cams": [{
        "id": "12264",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17063.jpeg",
        "name": "Main St / US-89 @ 750 N / SR-315, WIL"
    }]
}, {
    "coord": [37.64869, -112.43451],
    "cams": [{
        "id": "11891",
        "url": "http://www.udottraffic.utah.gov/1_devices/US89mile116.gif",
        "name": "Main St / US-89 Liveview SB @ 50 S / MP 116, HAT"
    }]
}, {
    "coord": [41.7302, -111.83526],
    "cams": [{
        "id": "11652",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16460.jpeg",
        "name": "Main St / US-89/91 @ 100 S, LGN"
    }]
}, {
    "coord": [41.73509, -111.83495],
    "cams": [{
        "id": "11672",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16480.jpeg",
        "name": "Main St / US-89/91 @ 200 N / SR-30, LGN"
    }]
}, {
    "coord": [41.73922, -111.83453],
    "cams": [{
        "id": "11653",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16461.jpeg",
        "name": "Main St / US-89/91 @ 400 N / US-89, LGN"
    }]
}, {
    "coord": [41.75001, -111.8347],
    "cams": [{
        "id": "11702",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16510.jpeg",
        "name": "Main St / US-91 @ 1000 N, LGN"
    }]
}, {
    "coord": [41.75741, -111.83413],
    "cams": [{
        "id": "11709",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16517.jpeg",
        "name": "Main St / US-91 @ 1400 N, LGN"
    }]
}, {
    "coord": [41.77758, -111.8342],
    "cams": [{
        "id": "11655",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16463.jpeg",
        "name": "Main St / US-91 @ 2500 N / SR-252, NLG"
    }]
}, {
    "coord": [41.8304, -111.83278],
    "cams": [{
        "id": "11671",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16479.jpeg",
        "name": "Main St / US-91 @ 300 S, SMF"
    }]
}, {
    "coord": [41.799132, -111.833705],
    "cams": [{
        "id": "11703",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16511.jpeg",
        "name": "Main St / US-91 @ Hyde Park Ln, HYD"
    }]
}, {
    "coord": [37.10662, -113.58318],
    "cams": [{
        "id": "11525",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16334.jpeg",
        "name": "Main St @ 100 S, STG"
    }]
}, {
    "coord": [37.09621, -113.58358],
    "cams": [{
        "id": "11527",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16336.jpeg",
        "name": "Main St @ 700 S, STG"
    }]
}, {
    "coord": [37.09595, -113.52274],
    "cams": [{
        "id": "11715",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16523.jpeg",
        "name": "Mall Dr / Merril Rd / 2600 S @ Sandia Rd / 3000 E, STG"
    }]
}, {
    "coord": [40.76765, -111.836078],
    "cams": [{
        "id": "12077",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16885.jpeg",
        "name": "Mario Capecchi Dr / SR-282 @ 1900 E, SLC"
    }]
}, {
    "coord": [40.52519, -111.8888],
    "cams": [{
        "id": "10676",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15485.jpeg",
        "name": "Minuteman Dr @ 12450 S, DPR"
    }]
}, {
    "coord": [40.52259, -112.00472],
    "cams": [{
        "id": "11016",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15825.jpeg",
        "name": "Mountain View / SR-85 NB @ 12600 S, RVT"
    }]
}, {
    "coord": [40.50799, -112.00333],
    "cams": [{
        "id": "11017",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15826.jpeg",
        "name": "Mountain View / SR-85 NB @ 13400 S, RVT"
    }]
}, {
    "coord": [40.68189, -112.02998],
    "cams": [{
        "id": "12054",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16862.jpeg",
        "name": "Mountain View / SR-85 NB @ 4100 S, WVC"
    }]
}, {
    "coord": [40.67081, -112.03108],
    "cams": [{
        "id": "12052",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16860.jpeg",
        "name": "Mountain View / SR-85 NB @ 4565 S, WVC"
    }]
}, {
    "coord": [40.66439, -112.03455],
    "cams": [{
        "id": "12051",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16859.jpeg",
        "name": "Mountain View / SR-85 NB @ 4825 S, WVC"
    }]
}, {
    "coord": [40.65353, -112.04338],
    "cams": [{
        "id": "11062",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15871.jpeg",
        "name": "Mountain View / SR-85 NB @ 5400 S / SR-173, WVC"
    }]
}, {
    "coord": [40.61319, -112.0375],
    "cams": [{
        "id": "11059",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15868.jpeg",
        "name": "Mountain View / SR-85 NB @ 7600 S, WJD"
    }]
}, {
    "coord": [40.60966, -112.03341],
    "cams": [{
        "id": "11061",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15870.jpeg",
        "name": "Mountain View / SR-85 NB @ 7800 S, WJD"
    }]
}, {
    "coord": [40.58806, -112.02762],
    "cams": [{
        "id": "11060",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15869.jpeg",
        "name": "Mountain View / SR-85 NB @ 9000 S / SR-209, WJD"
    }]
}, {
    "coord": [40.397497, -111.938323],
    "cams": [{
        "id": "12451",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17242.jpeg",
        "name": "Mountain View / SR-85 NB @ Harvest Hills Blvd, SSP"
    }]
}, {
    "coord": [40.46258, -111.95413],
    "cams": [{
        "id": "11018",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15827.jpeg",
        "name": "Mountain View / SR-85 NB @ Porter Rockwell Blvd, HRR"
    }]
}, {
    "coord": [40.55163, -112.02893],
    "cams": [{
        "id": "11756",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16564.jpeg",
        "name": "Mountain View / SR-85 NB @ South Jordan Pkwy / 11000 S, SJO"
    }]
}, {
    "coord": [40.48607, -111.99415],
    "cams": [{
        "id": "11357",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-85%20Juniper-all.gif",
        "name": "Mountain View / SR-85 RWIS NB @ 14600 S / Juniper, HRR"
    }]
}, {
    "coord": [40.54271, -112.02196],
    "cams": [{
        "id": "11022",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15831.jpeg",
        "name": "Mountain View / SR-85 SB @ 11450 S, SJO"
    }]
}, {
    "coord": [40.52938, -112.00926],
    "cams": [{
        "id": "11019",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15828.jpeg",
        "name": "Mountain View / SR-85 SB @ 12200 S, HRR"
    }]
}, {
    "coord": [40.51215, -112.00532],
    "cams": [{
        "id": "11025",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15834.jpeg",
        "name": "Mountain View / SR-85 SB @ 13200 S, RVT"
    }]
}, {
    "coord": [40.67623, -112.03113],
    "cams": [{
        "id": "12053",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16861.jpeg",
        "name": "Mountain View / SR-85 SB @ 4350 S, WVC"
    }]
}, {
    "coord": [40.64953, -112.04535],
    "cams": [{
        "id": "11056",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15865.jpeg",
        "name": "Mountain View / SR-85 SB @ 5800 S, WVC"
    }]
}, {
    "coord": [40.63936, -112.04688],
    "cams": [{
        "id": "11058",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15867.jpeg",
        "name": "Mountain View / SR-85 SB @ 6200 S, WVC"
    }]
}, {
    "coord": [40.57247, -112.03449],
    "cams": [{
        "id": "11057",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15866.jpeg",
        "name": "Mountain View / SR-85 SB @ 9860 S, WJD"
    }]
}, {
    "coord": [40.53879, -112.01811],
    "cams": [{
        "id": "11020",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15829.jpeg",
        "name": "Mountain View / SR-85 SB @ Daybreak Pkwy, SJO"
    }]
}, {
    "coord": [40.54445, -112.02368],
    "cams": [{
        "id": "11868",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16676.jpeg",
        "name": "Mountain View / SR-85 SB @ Lake Ave / 11400 S, SJO"
    }]
}, {
    "coord": [40.56711, -112.03405],
    "cams": [{
        "id": "11021",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15830.jpeg",
        "name": "Mountain View / SR-85 SB @ Old Bingham Hwy, WJD"
    }]
}, {
    "coord": [40.65894, -112.04162],
    "cams": [{
        "id": "12050",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16858.jpeg",
        "name": "Mountain View / SR-85 SB @ Upper Ridge Rd / 5100 S, WVC"
    }]
}, {
    "coord": [40.6025, -112.00532],
    "cams": [{
        "id": "11064",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15873.jpeg",
        "name": "New Bingham Hwy @ 4800 W, WJD"
    }]
}, {
    "coord": [40.59525, -112.02409],
    "cams": [{
        "id": "11063",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15872.jpeg",
        "name": "New Bingham Hwy @ 5600 W, WJD"
    }]
}, {
    "coord": [40.38313, -111.76909],
    "cams": [{
        "id": "11383",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16192.jpeg",
        "name": "North County Blvd / 1100 E / SR-129 @ 300 N, AFK"
    }]
}, {
    "coord": [40.39184, -111.7692],
    "cams": [{
        "id": "11384",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16193.jpeg",
        "name": "North County Blvd / 1100 E / SR-129 @ 700 N, AFK"
    }]
}, {
    "coord": [40.37567, -111.76914],
    "cams": [{
        "id": "11382",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16191.jpeg",
        "name": "North County Blvd / 1100 E, AFK / 2000 W, PLG / SR-129 @ 50 S, AFK / 1100 N, PLG, AFK"
    }]
}, {
    "coord": [40.41555, -111.77339],
    "cams": [{
        "id": "11385",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16194.jpeg",
        "name": "North County Blvd / 4800 W / SR-129 @ Cedar Hills Dr / 10100 N, HLD"
    }]
}, {
    "coord": [40.39898, -111.77348],
    "cams": [{
        "id": "11779",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16587.jpeg",
        "name": "North County Blvd / 900 E / SR-129 @ 1100 N, AFK"
    }]
}, {
    "coord": [40.57186, -111.77614],
    "cams": [{
        "id": "9895",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14604.jpeg",
        "name": "North Little Cottonwood Rd / Little Cottonwood Canyon Rd / SR-210 @ Little Cottonwood Rd / SR-209, SL"
    }]
}, {
    "coord": [40.58925, -111.79356],
    "cams": [{
        "id": "11800",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16608.jpeg",
        "name": "North Little Cottonwood Rd / Wasatch Blvd / 3600 E / SR-210 @ Wasatch Blvd / 8900 S, CWH"
    }]
}, {
    "coord": [40.77157, -111.89663],
    "cams": [{
        "id": "181",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux181.jpeg",
        "name": "North Temple St @ 200 W, SLC"
    }]
}, {
    "coord": [40.28981, -111.69456],
    "cams": [{
        "id": "9829",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14539.jpeg",
        "name": "Orem Blvd @ 400 S, ORM"
    }]
}, {
    "coord": [40.656421, -111.506353],
    "cams": [{
        "id": "11065",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15874.jpeg",
        "name": "Park Ave / SR-224 @ Empire Ave / Deer Valley Dr / SR-224, PKC"
    }]
}, {
    "coord": [40.66042, -111.50944],
    "cams": [{
        "id": "9385",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux9201.jpeg",
        "name": "Park Ave / SR-224 @ Kearns Blvd / SR-248, PKC"
    }]
}, {
    "coord": [40.67574, -111.52111],
    "cams": [{
        "id": "11953",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-224-MeadowsDrive-ParkCity.jpeg",
        "name": "Park Ave / SR-224 RWIS @ Meadows Dr, PKC"
    }]
}, {
    "coord": [40.92135, -111.87919],
    "cams": [{
        "id": "12067",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16875.jpeg",
        "name": "Parrish Ln / 400 N / SR-105 @ Main St / SR-106, CVL"
    }]
}, {
    "coord": [40.37685, -111.82497],
    "cams": [{
        "id": "10547",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15356.jpeg",
        "name": "Pioneer Crossing / SR-145 @ 1020 W, AFK"
    }]
}, {
    "coord": [40.37271, -111.91063],
    "cams": [{
        "id": "10537",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15346.jpeg",
        "name": "Pioneer Crossing / SR-145 @ 10600 W, SSP"
    }]
}, {
    "coord": [40.374489, -111.867036],
    "cams": [{
        "id": "10541",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15350.jpeg",
        "name": "Pioneer Crossing / SR-145 @ 1100 W, LHI"
    }]
}, {
    "coord": [40.3759, -111.87675],
    "cams": [{
        "id": "10539",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15348.jpeg",
        "name": "Pioneer Crossing / SR-145 @ 1700 W, LHI"
    }]
}, {
    "coord": [40.376079, -111.886464],
    "cams": [{
        "id": "10538",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15347.jpeg",
        "name": "Pioneer Crossing / SR-145 @ 2300 W / Saratoga Rd, LHI"
    }]
}, {
    "coord": [40.373606, -111.844429],
    "cams": [{
        "id": "10543",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15352.jpeg",
        "name": "Pioneer Crossing / SR-145 @ 300 E, LHI"
    }]
}, {
    "coord": [40.373606, -111.857234],
    "cams": [{
        "id": "10542",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15351.jpeg",
        "name": "Pioneer Crossing / SR-145 @ 500 W, LHI"
    }]
}, {
    "coord": [40.37308, -111.84917],
    "cams": [{
        "id": "10619",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15428.jpeg",
        "name": "Pioneer Crossing / SR-145 @ Center St, LHI"
    }]
}, {
    "coord": [40.3772, -111.83312],
    "cams": [{
        "id": "10545",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15354.jpeg",
        "name": "Pioneer Crossing / SR-145 @ Mill Pond Rd, LHI"
    }]
}, {
    "coord": [37.14643, -113.6608],
    "cams": [{
        "id": "11534",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16343.jpeg",
        "name": "Pioneer Pkwy @ Rachel Dr, SCL"
    }]
}, {
    "coord": [40.36021, -111.75986],
    "cams": [{
        "id": "11391",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16200.jpeg",
        "name": "Pleasant Grove Blvd @ 1300 W / Proctor Ln, PLG"
    }]
}, {
    "coord": [40.35386, -111.76439],
    "cams": [{
        "id": "10558",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15367.jpeg",
        "name": "Pleasant Grove Blvd @ 2000 W / North County Blvd, PLG / 700 N, LDN / SR-129, PLG"
    }]
}, {
    "coord": [39.0181, -110.2905],
    "cams": [{
        "id": "11489",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20Portable2.gif",
        "name": "Portable RWIS 2"
    }]
}, {
    "coord": [40.7749, -111.4678],
    "cams": [{
        "id": "12164",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16972.jpeg",
        "name": "Portable RWIS 3"
    }]
}, {
    "coord": [40.4694, -112.3517],
    "cams": [{
        "id": "11490",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16299.jpeg",
        "name": "Portable RWIS 4"
    }]
}, {
    "coord": [40.4065, -111.9381],
    "cams": [{
        "id": "11674",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20Portable5.gif",
        "name": "Portable RWIS 5"
    }]
}, {
    "coord": [37.73095, -113.0554],
    "cams": [{
        "id": "11491",
        "url": "http://www.udottraffic.utah.gov/1_devices/Portable_Traffic_1.jpg",
        "name": "Portable Traffic #1"
    }]
}, {
    "coord": [37.62548, -109.4787],
    "cams": [{
        "id": "11492",
        "url": "http://www.udottraffic.utah.gov/1_devices/Portable_Traffic2.jpg",
        "name": "Portable Traffic #2"
    }]
}, {
    "coord": [40.46375, -111.94989],
    "cams": [{
        "id": "11024",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15833.jpeg",
        "name": "Porter Rockwell Blvd @ 2300 W, HRR"
    }]
}, {
    "coord": [40.31448, -111.65516],
    "cams": [{
        "id": "9543",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14310.jpeg",
        "name": "Provo Canyon Rd / US-189 @ 800 N / SR-52, ORM"
    }]
}, {
    "coord": [40.36426, -111.55762],
    "cams": [{
        "id": "10336",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15045.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Alpine Scenic Hwy / SR-92 / MP 14.26, UT"
    }]
}, {
    "coord": [40.34105, -111.60378],
    "cams": [{
        "id": "10333",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15042.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Bridal Veil Falls / MP 11.15, UT"
    }]
}, {
    "coord": [40.32862, -111.61958],
    "cams": [{
        "id": "10332",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15041.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Canyon Glen Park / MP 9.98, UT"
    }]
}, {
    "coord": [40.32385, -111.64255],
    "cams": [{
        "id": "10331",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15040.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Canyon View Park / MP 8.46, PVO"
    }]
}, {
    "coord": [40.40155, -111.53404],
    "cams": [{
        "id": "10339",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15048.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Lower Deer Creek Rd / MP 17.14, WA"
    }]
}, {
    "coord": [40.39107, -111.54624],
    "cams": [{
        "id": "10338",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15047.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Meadow Dr / MP 16.25, WA"
    }]
}, {
    "coord": [40.34975, -111.58799],
    "cams": [{
        "id": "10334",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15043.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Milepost 12.21, UT"
    }]
}, {
    "coord": [40.32251, -111.64705],
    "cams": [{
        "id": "11705",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16513.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Mouth of Provo Canyon / MP 8.26, ORM"
    }]
}, {
    "coord": [40.32875, -111.62489],
    "cams": [{
        "id": "11706",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16514.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Springdell / MP 9.68, UT"
    }]
}, {
    "coord": [40.35634, -111.57386],
    "cams": [{
        "id": "10335",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15044.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Vivian Park / MP 13.16, UT"
    }]
}, {
    "coord": [37.1271, -113.5238],
    "cams": [{
        "id": "10214",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14923.jpeg",
        "name": "Red Cliff Dr / Telegraph St @ Green Spring Dr, WAS"
    }]
}, {
    "coord": [37.11797, -113.54569],
    "cams": [{
        "id": "11819",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16627.jpeg",
        "name": "Red Cliffs Dr @ Crossover St, STG"
    }]
}, {
    "coord": [37.12951, -113.526],
    "cams": [{
        "id": "10213",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14922.jpeg",
        "name": "Red Hills Pkwy / Buena Vista Dr @ Green Spring Dr, WAS"
    }]
}, {
    "coord": [37.11223, -113.5621],
    "cams": [{
        "id": "10219",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14928.jpeg",
        "name": "Red Hills Pkwy @ 1000 E, STG"
    }]
}, {
    "coord": [37.11902, -113.54672],
    "cams": [{
        "id": "11820",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16628.jpeg",
        "name": "Red Hills Pkwy @ Crossover St, STG"
    }]
}, {
    "coord": [37.11761, -113.58183],
    "cams": [{
        "id": "11535",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16344.jpeg",
        "name": "Red Hills Pkwy @ Skyline Dr / 200 E, STG"
    }]
}, {
    "coord": [40.56206, -111.93818],
    "cams": [{
        "id": "11828",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16636.jpeg",
        "name": "Redwood Rd / SR-68 @ 10400 S / South Jordan Pkwy / SR-151, SJO"
    }]
}, {
    "coord": [40.54417, -111.93872],
    "cams": [{
        "id": "11015",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15824.jpeg",
        "name": "Redwood Rd / SR-68 @ 11400 S, SJO"
    }]
}, {
    "coord": [40.52279, -111.93853],
    "cams": [{
        "id": "305",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux305.jpeg",
        "name": "Redwood Rd / SR-68 @ 12600 S / SR-71, RVT"
    }]
}, {
    "coord": [40.518821, -111.938944],
    "cams": [{
        "id": "12260",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17059.jpeg",
        "name": "Redwood Rd / SR-68 @ 12800 S, RVT"
    }]
}, {
    "coord": [40.507617, -111.938871],
    "cams": [{
        "id": "12261",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17060.jpeg",
        "name": "Redwood Rd / SR-68 @ 13400 S, RVT"
    }]
}, {
    "coord": [40.4895, -111.94003],
    "cams": [{
        "id": "10328",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15037.jpeg",
        "name": "Redwood Rd / SR-68 @ 14400 S / SR-140, BLF"
    }]
}, {
    "coord": [40.413, -111.92307],
    "cams": [{
        "id": "10723",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15532.jpeg",
        "name": "Redwood Rd / SR-68 @ 2100 N / SR-194, LHI"
    }]
}, {
    "coord": [40.72616, -111.93873],
    "cams": [{
        "id": "10222",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14931.jpeg",
        "name": "Redwood Rd / SR-68 @ 2100 S, SLC"
    }]
}, {
    "coord": [40.7206, -111.93873],
    "cams": [{
        "id": "10887",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15696.jpeg",
        "name": "Redwood Rd / SR-68 @ 2320 S, WVC"
    }]
}, {
    "coord": [40.70393, -111.93896],
    "cams": [{
        "id": "9266",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux9173.jpeg",
        "name": "Redwood Rd / SR-68 @ 3100 S, WVC"
    }]
}, {
    "coord": [40.69657, -111.93794],
    "cams": [{
        "id": "176",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux176.jpeg",
        "name": "Redwood Rd / SR-68 @ 3500 S / SR-171, WVC"
    }]
}, {
    "coord": [40.681944, -111.938687],
    "cams": [{
        "id": "11949",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16757.jpeg",
        "name": "Redwood Rd / SR-68 @ 4100 S, TAY"
    }]
}, {
    "coord": [40.6676, -111.93878],
    "cams": [{
        "id": "10733",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15542.jpeg",
        "name": "Redwood Rd / SR-68 @ 4700 S / SR-266, TAY"
    }]
}, {
    "coord": [40.65321, -111.93904],
    "cams": [{
        "id": "9867",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux2123.jpeg",
        "name": "Redwood Rd / SR-68 @ 5400 S / SR-173, TAY"
    }]
}, {
    "coord": [40.63857, -111.9388],
    "cams": [{
        "id": "10554",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15363.jpeg",
        "name": "Redwood Rd / SR-68 @ 6200 S, TAY"
    }]
}, {
    "coord": [40.78489, -111.9396],
    "cams": [{
        "id": "11963",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16771.jpeg",
        "name": "Redwood Rd / SR-68 @ 700 N, SLC"
    }]
}, {
    "coord": [40.62401, -111.93875],
    "cams": [{
        "id": "9630",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux309.jpeg",
        "name": "Redwood Rd / SR-68 @ 7000 S / SR-48, WJD"
    }]
}, {
    "coord": [40.6095, -111.93875],
    "cams": [{
        "id": "9557",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux308.jpeg",
        "name": "Redwood Rd / SR-68 @ 7800 S / SR-48, WJD"
    }]
}, {
    "coord": [40.60236, -111.93871],
    "cams": [{
        "id": "11466",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16275.jpeg",
        "name": "Redwood Rd / SR-68 @ 8200 S / Sugar Factory Rd, WJD"
    }]
}, {
    "coord": [40.58788, -111.93874],
    "cams": [{
        "id": "9555",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux307.jpeg",
        "name": "Redwood Rd / SR-68 @ 9000 S / SR-209, WJD"
    }]
}, {
    "coord": [40.84173, -111.93206],
    "cams": [{
        "id": "12449",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17240.jpeg",
        "name": "Redwood Rd / SR-68 @ Center St, NSL"
    }]
}, {
    "coord": [40.33712, -111.91567],
    "cams": [{
        "id": "12144",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16952.jpeg",
        "name": "Redwood Rd / SR-68 @ Grandview Blvd, SSP"
    }]
}, {
    "coord": [40.7713, -111.93903],
    "cams": [{
        "id": "11968",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16776.jpeg",
        "name": "Redwood Rd / SR-68 @ North Temple St, SLC"
    }]
}, {
    "coord": [40.34433, -111.916],
    "cams": [{
        "id": "12438",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17229.jpeg",
        "name": "Redwood Rd / SR-68 @ Parkway Blvd / Founders Blvd, SSP"
    }]
}, {
    "coord": [40.37277, -111.91633],
    "cams": [{
        "id": "10536",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15345.jpeg",
        "name": "Redwood Rd / SR-68 @ Pioneer Crossing / SR-145, SSP"
    }]
}, {
    "coord": [40.361931, -111.916497],
    "cams": [{
        "id": "11646",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16454.jpeg",
        "name": "Redwood Rd / SR-68 @ Pony Express Pkwy, SSP"
    }]
}, {
    "coord": [40.46256, -111.94261],
    "cams": [{
        "id": "11023",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15832.jpeg",
        "name": "Redwood Rd / SR-68 @ Porter Rockwell Blvd, BLF"
    }]
}, {
    "coord": [40.32627, -111.90548],
    "cams": [{
        "id": "12428",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17221.jpeg",
        "name": "Redwood Rd / SR-68 @ Ring Rd, SSP"
    }]
}, {
    "coord": [40.38736, -111.91649],
    "cams": [{
        "id": "10330",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15039.jpeg",
        "name": "Redwood Rd / SR-68 @ SR-73 / Cedar Fort Rd, SSP"
    }]
}, {
    "coord": [40.31569, -111.89443],
    "cams": [{
        "id": "12429",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17222.jpeg",
        "name": "Redwood Rd / SR-68 @ Stillwater Dr, SSP"
    }]
}, {
    "coord": [40.43468, -111.92925],
    "cams": [{
        "id": "10329",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15038.jpeg",
        "name": "Redwood Rd / SR-68 @ W. G. Williams Ave, UT"
    }]
}, {
    "coord": [40.25648, -111.86713],
    "cams": [{
        "id": "10766",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-68-mp-23.gif",
        "name": "Redwood Rd / SR-68 Liveview SB @ Milepost 22.93, UT"
    }]
}, {
    "coord": [40.1768, -111.92455],
    "cams": [{
        "id": "12078",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR68%20MP%2016.gif",
        "name": "Redwood Rd / SR-68 RWIS SB @ Milepost 16.3, UT"
    }]
}, {
    "coord": [37.08558, -113.55596],
    "cams": [{
        "id": "10382",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15091.jpeg",
        "name": "River Rd @ 1450 S, STG"
    }]
}, {
    "coord": [37.06673, -113.54865],
    "cams": [{
        "id": "11531",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16340.jpeg",
        "name": "River Rd @ 2450 S, STG"
    }]
}, {
    "coord": [37.09616, -113.55726],
    "cams": [{
        "id": "10216",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14925.jpeg",
        "name": "River Rd @ 700 S / Foremaster Dr, STG"
    }]
}, {
    "coord": [37.05184, -113.55566],
    "cams": [{
        "id": "11713",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16521.jpeg",
        "name": "River Rd @ Brigham Rd, STG"
    }]
}, {
    "coord": [37.07479, -113.55371],
    "cams": [{
        "id": "11532",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16341.jpeg",
        "name": "River Rd @ Fort Pierce Dr, STG"
    }]
}, {
    "coord": [37.0596, -113.54522],
    "cams": [{
        "id": "11754",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16562.jpeg",
        "name": "River Rd @ Horseman Park Dr, STG"
    }]
}, {
    "coord": [37.08872, -113.55705],
    "cams": [{
        "id": "10217",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14926.jpeg",
        "name": "River Rd @ Riverside Dr, STG"
    }]
}, {
    "coord": [41.18869, -111.98313],
    "cams": [{
        "id": "9404",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux424.jpeg",
        "name": "Riverdale Rd / SR-26 @ 300 W, RDL"
    }]
}, {
    "coord": [41.178, -112.00116],
    "cams": [{
        "id": "9126",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux316.jpeg",
        "name": "Riverdale Rd / SR-26 @ 900 W, RDL"
    }]
}, {
    "coord": [41.19261, -111.97916],
    "cams": [{
        "id": "9345",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux421.jpeg",
        "name": "Riverdale Rd / SR-26 @ Wall Ave / 40th St / SR-204, RDL"
    }]
}, {
    "coord": [37.104208, -113.530233],
    "cams": [{
        "id": "12265",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17064.jpeg",
        "name": "Riverside Dr @ 2450 E, STG"
    }]
}, {
    "coord": [37.10001, -113.5371],
    "cams": [{
        "id": "11714",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16522.jpeg",
        "name": "Riverside Dr @ Mall Dr, STG"
    }]
}, {
    "coord": [37.12659, -113.63828],
    "cams": [{
        "id": "11529",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16338.jpeg",
        "name": "Santa Clara Dr @ Canyon View Dr, SCL"
    }]
}, {
    "coord": [40.45694, -112.74733],
    "cams": [{
        "id": "11887",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR196mile16.gif",
        "name": "Skull Valley Rd / SR-196 Liveview NB @ Milepost 16, TE"
    }]
}, {
    "coord": [37.1413, -113.62194],
    "cams": [{
        "id": "10381",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15090.jpeg",
        "name": "Snow Canyon Pkwy @ Dixie Downs Rd / Lakota Dr, STG"
    }]
}, {
    "coord": [40.75943, -111.84304],
    "cams": [{
        "id": "10255",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14964.jpeg",
        "name": "South Campus Dr / SR-282 @ 1725 E, SLC"
    }]
}, {
    "coord": [40.76239, -111.83564],
    "cams": [{
        "id": "10256",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14965.jpeg",
        "name": "South Campus Dr / SR-282 @ Mario Capecchi Dr, SLC"
    }]
}, {
    "coord": [40.562059, -111.94803],
    "cams": [{
        "id": "11826",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16634.jpeg",
        "name": "South Jordan Pkwy / 10400 S / SR-151 @ 2200 W, SJO"
    }]
}, {
    "coord": [40.76936, -111.87108],
    "cams": [{
        "id": "10717",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15526.jpeg",
        "name": "South Temple St @ 700 E / I St, SLC"
    }]
}, {
    "coord": [40.7694, -111.8911],
    "cams": [{
        "id": "9436",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux428.jpeg",
        "name": "South Temple St @ Main St, SLC"
    }]
}, {
    "coord": [37.00811, -113.51375],
    "cams": [{
        "id": "10729",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15538.jpeg",
        "name": "Southern Pkwy / SR-7 @ Desert Canyons Pkwy / MP 6.5, STG"
    }]
}, {
    "coord": [37.01125, -113.59174],
    "cams": [{
        "id": "10727",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15536.jpeg",
        "name": "Southern Pkwy / SR-7 @ Milepost 1.67, STG"
    }]
}, {
    "coord": [37.00413, -113.5403],
    "cams": [{
        "id": "10728",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15537.jpeg",
        "name": "Southern Pkwy / SR-7 @ Milepost 5.14, STG"
    }]
}, {
    "coord": [37.01001, -113.50024],
    "cams": [{
        "id": "10730",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15539.jpeg",
        "name": "Southern Pkwy / SR-7 @ Milepost 7.24, STG"
    }]
}, {
    "coord": [37.01411, -113.49402],
    "cams": [{
        "id": "10731",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15540.jpeg",
        "name": "Southern Pkwy / SR-7 EB @ Airport Pkwy / MP 7.7, STG"
    }]
}, {
    "coord": [37.01487, -113.49562],
    "cams": [{
        "id": "10732",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15541.jpeg",
        "name": "Southern Pkwy / SR-7 WB @ Airport Pkwy / MP 7.68, STG"
    }]
}, {
    "coord": [37.00111, -113.56045],
    "cams": [{
        "id": "10726",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15535.jpeg",
        "name": "Southern Pkwy / SR-7 WB @ River Rd / Hwy 5 / MP 3.76, STG"
    }]
}, {
    "coord": [39.49327, -110.84541],
    "cams": [{
        "id": "11269",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-10%20MP%2060-all.gif",
        "name": "SR-10 Liveview NB @ SR-122 / MP 60.93, CC"
    }]
}, {
    "coord": [38.97591, -111.17719],
    "cams": [{
        "id": "11888",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR10mile18.gif",
        "name": "SR-10 Liveview SB @ Milepost 18, EM"
    }]
}, {
    "coord": [39.16138, -111.07094],
    "cams": [{
        "id": "11889",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR10mile33.gif",
        "name": "SR-10 Liveview SB @ Milepost 33, EM"
    }]
}, {
    "coord": [39.4016, -110.8902],
    "cams": [{
        "id": "12377",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-10%20@%20PoisonSpringBench.gif",
        "name": "SR-10 RWIS SB @ Poison Spring Bench / MP 54.1, EM"
    }]
}, {
    "coord": [39.15613, -112.40507],
    "cams": [{
        "id": "11091",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-100-MP-16-all.gif",
        "name": "SR-100 Liveview NB @ US-50 / MP 16.9, MD"
    }]
}, {
    "coord": [41.60327, -111.56076],
    "cams": [{
        "id": "10838",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-101-MP-21.gif",
        "name": "SR-101 Liveview EB @ Hardware Ranch / MP 21.74, CA"
    }]
}, {
    "coord": [37.68643, -112.13755],
    "cams": [{
        "id": "10800",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-12-MP-14.gif",
        "name": "SR-12 Liveview EB @ Milepost 14.5, GA"
    }]
}, {
    "coord": [37.7205, -112.26213],
    "cams": [{
        "id": "10799",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-12-MP-7.gif",
        "name": "SR-12 Liveview EB @ Milepost 7.25, GA"
    }]
}, {
    "coord": [38.01171, -111.37049],
    "cams": [{
        "id": "10828",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-12-MP-97.gif",
        "name": "SR-12 Liveview EB @ Milepost 97.28, GA"
    }]
}, {
    "coord": [38.14721, -111.32683],
    "cams": [{
        "id": "10815",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-12-MP-109.gif",
        "name": "SR-12 Liveview NB @ GA/WE County Line / MP 109.84, GA"
    }]
}, {
    "coord": [37.64056, -111.84426],
    "cams": [{
        "id": "10813",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-12-MP-41.gif",
        "name": "SR-12 Liveview NB @ Milepost 41.16, GA"
    }]
}, {
    "coord": [38.0432, -111.3269],
    "cams": [{
        "id": "10780",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20Boulder%20Summit%20N.jpg",
        "name": "SR-12 RWIS NB @ Boulder Summit / MP 100.86, GA"
    }]
}, {
    "coord": [40.40992, -109.76381],
    "cams": [{
        "id": "11480",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-121-mp-25.gif",
        "name": "SR-121 Liveview EB @ Milepost 25.9, UN"
    }]
}, {
    "coord": [38.06765, -112.96176],
    "cams": [{
        "id": "10832",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-130-mp-31.gif",
        "name": "SR-130 Liveview NB @ Milepost 31.5, RN"
    }]
}, {
    "coord": [39.66073, -112.0632],
    "cams": [{
        "id": "10804",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-132-MP20.gif",
        "name": "SR-132 Liveview EB @ Milepost 20, JU"
    }]
}, {
    "coord": [39.6721, -111.6645],
    "cams": [{
        "id": "10835",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-132-mp-44.gif",
        "name": "SR-132 Liveview EB @ Milepost 43.98, SP"
    }]
}, {
    "coord": [40.65098, -112.29637],
    "cams": [{
        "id": "12058",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16866.jpeg",
        "name": "SR-138 @ Stansbury Pkwy, STP"
    }]
}, {
    "coord": [37.57033, -112.85798],
    "cams": [{
        "id": "10869",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-14-mp17.gif",
        "name": "SR-14 Liveview EB @ Milepost 16.77, RN"
    }]
}, {
    "coord": [37.56972, -112.79796],
    "cams": [{
        "id": "10816",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-14-mp-20.gif",
        "name": "SR-14 Liveview EB @ Milepost 20.38, RN"
    }]
}, {
    "coord": [37.52089, -112.65507],
    "cams": [{
        "id": "11518",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-14-MP31.gif",
        "name": "SR-14 Liveview WB @ Lake Dr / MP 30.95, KN"
    }]
}, {
    "coord": [41.90681, -112.04542],
    "cams": [{
        "id": "11094",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-142-MP-4-all.gif",
        "name": "SR-142 / 200 E Liveview NB @ 9650 N / MP 4.1, CA"
    }]
}, {
    "coord": [37.65328, -112.77898],
    "cams": [{
        "id": "10805",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-143-MP-22.gif",
        "name": "SR-143 Liveview EB @ Milepost 21.91, RN"
    }]
}, {
    "coord": [37.66275, -112.83761],
    "cams": [{
        "id": "10770",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-143-MP-18.gif",
        "name": "SR-143 Liveview NB @ Brian Head / MP 18.19, RN"
    }]
}, {
    "coord": [37.72055, -112.8445],
    "cams": [{
        "id": "11630",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-143-MP13.gif",
        "name": "SR-143 Liveview NB @ Milepost 13.05. RN"
    }]
}, {
    "coord": [37.68589, -112.66491],
    "cams": [{
        "id": "10817",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-143-MP31.gif",
        "name": "SR-143 Liveview SB @ Milepost 31.14, GA"
    }]
}, {
    "coord": [37.66449, -112.72498],
    "cams": [{
        "id": "10839",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-143mile25-all.gif",
        "name": "SR-143 Liveview WB @ Milepost 25.13, RN"
    }]
}, {
    "coord": [40.93266, -110.83306],
    "cams": [{
        "id": "11479",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-150-mp-50.gif",
        "name": "SR-150 Liveview SB @ Milepost 50, SU"
    }]
}, {
    "coord": [40.68686, -110.90301],
    "cams": [{
        "id": "11508",
        "url": "http://www.udottraffic.utah.gov/1_devices/Bald-Mountain.gif",
        "name": "SR-150 RWIS EB @ Bald Mountain Pass / MP 29.2, SU"
    }]
}, {
    "coord": [38.32091, -112.37263],
    "cams": [{
        "id": "11523",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-153-Summit.gif",
        "name": "SR-153 RWIS EB @ Puffer Lake / MP 20.24, BV"
    }]
}, {
    "coord": [41.37888, -111.78401],
    "cams": [{
        "id": "10863",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-158-mp11.gif",
        "name": "SR-158 Liveview NB @ Powder Mountain / MP 11.62, WB"
    }]
}, {
    "coord": [41.421, -111.051],
    "cams": [{
        "id": "10753",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-16-MP-1.gif",
        "name": "SR-16 RWIS SB @ Milepost 0.54, RI"
    }]
}, {
    "coord": [41.57295, -111.83823],
    "cams": [{
        "id": "11469",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-165-MP-2-all.gif",
        "name": "SR-165 / 200 W Liveview @ 8800 S / MP 0.73, PDS"
    }]
}, {
    "coord": [41.207, -111.8163],
    "cams": [{
        "id": "10749",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-167%20TrappersLoop.gif",
        "name": "SR-167 / Trappers Loop RWIS SB @ SR-226 / Snow Basin Rd / MP 6.92, WB"
    }]
}, {
    "coord": [37.53228, -113.64983],
    "cams": [{
        "id": "11628",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-18-MP35.gif",
        "name": "SR-18 Liveview SB @ Milepost 35.62, WN"
    }]
}, {
    "coord": [40.233, -112.723],
    "cams": [{
        "id": "10794",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-199-mp-0.gif",
        "name": "SR-199 Liveview WB @ Skull Valley Rd / SR-196 / MP 0.07, DUG"
    }]
}, {
    "coord": [40.33741, -112.57295],
    "cams": [{
        "id": "11455",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-199-JohnsonsPass.gif",
        "name": "SR-199 RWIS EB @ Johnson Pass / MP 12, TE"
    }]
}, {
    "coord": [38.0308, -112.5311],
    "cams": [{
        "id": "10801",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-20-mp-10.gif",
        "name": "SR-20 Liveview SB @ Milepost 10.02, RN"
    }]
}, {
    "coord": [38.02847, -112.52929],
    "cams": [{
        "id": "10754",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR20%20@%20MP10.gif",
        "name": "SR-20 RWIS NB @ Milepost 10.06, RN"
    }]
}, {
    "coord": [40.72786, -111.96825],
    "cams": [{
        "id": "73",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux73.jpeg",
        "name": "SR-201 / N Frontage Rd @ 3200 W / MP 13.7, SLC"
    }]
}, {
    "coord": [40.72425, -111.92812],
    "cams": [{
        "id": "11933",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16741.jpeg",
        "name": "SR-201 @ 1275 W / MP 15.83, WVC"
    }]
}, {
    "coord": [40.72458, -111.93532],
    "cams": [{
        "id": "9673",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux75.jpeg",
        "name": "SR-201 @ 1600 W / MP 15.47, SLC"
    }]
}, {
    "coord": [40.72496, -111.94709],
    "cams": [{
        "id": "11692",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16500.jpeg",
        "name": "SR-201 @ 2100 W / MP 14.82, SLC"
    }]
}, {
    "coord": [40.72603, -111.95486],
    "cams": [{
        "id": "11693",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16501.jpeg",
        "name": "SR-201 @ 2500 W / MP 14.42, SLC"
    }]
}, {
    "coord": [40.72566, -111.96314],
    "cams": [{
        "id": "74",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux74.jpeg",
        "name": "SR-201 @ 3000 W / MP 14, WVC"
    }]
}, {
    "coord": [40.72495, -111.99979],
    "cams": [{
        "id": "71",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux71.jpeg",
        "name": "SR-201 @ 4600 W / MP 12.11, WVC"
    }]
}, {
    "coord": [40.72439, -112.0246],
    "cams": [{
        "id": "287",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux287.jpeg",
        "name": "SR-201 @ 5600 W / SR-172 / MP 10.8, WVC"
    }]
}, {
    "coord": [40.72532, -112.03924],
    "cams": [{
        "id": "11611",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16420.jpeg",
        "name": "SR-201 @ 6200 W / MP 10.04, WVC"
    }]
}, {
    "coord": [40.71889, -112.05447],
    "cams": [{
        "id": "11612",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16421.jpeg",
        "name": "SR-201 @ 6800 W / MP 9.13, WVC"
    }]
}, {
    "coord": [40.71891, -112.06348],
    "cams": [{
        "id": "9674",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux256.jpeg",
        "name": "SR-201 @ 7200 W / MP 8.7, MAG"
    }]
}, {
    "coord": [40.72475, -111.91356],
    "cams": [{
        "id": "79",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux79.jpeg",
        "name": "SR-201 @ 800 W / MP 16.7, SSL"
    }]
}, {
    "coord": [40.71742, -112.09153],
    "cams": [{
        "id": "257",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux257.jpeg",
        "name": "SR-201 @ 8400 W / SR-111 / MP 7.2, MAG"
    }]
}, {
    "coord": [40.72512, -111.91726],
    "cams": [{
        "id": "77",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux77.jpeg",
        "name": "SR-201 @ 900 W / MP 16.6, SSL"
    }]
}, {
    "coord": [40.72665, -112.16351],
    "cams": [{
        "id": "11669",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16477.jpeg",
        "name": "SR-201 @ Milepost 3.2, SL"
    }]
}, {
    "coord": [40.71826, -112.11414],
    "cams": [{
        "id": "11670",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16478.jpeg",
        "name": "SR-201 @ Milepost 6.0, MAG"
    }]
}, {
    "coord": [40.72782, -112.17113],
    "cams": [{
        "id": "11637",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16446.jpeg",
        "name": "SR-201 @ SR-202 / MP 2.78, SL"
    }]
}, {
    "coord": [40.72374, -111.92885],
    "cams": [{
        "id": "76",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux76.jpeg",
        "name": "SR-201 EB @ 1300 W / MP 15.8, WVC"
    }]
}, {
    "coord": [40.72446, -111.9847],
    "cams": [{
        "id": "72",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux72.jpeg",
        "name": "SR-201 EB @ Bangerter Hwy / SR-154 / MP 12.82, WVC"
    }]
}, {
    "coord": [40.72651, -111.98782],
    "cams": [{
        "id": "10689",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15498.jpeg",
        "name": "SR-201 WB @ Bangerter Hwy / SR-154 / MP 12.8, SLC"
    }]
}, {
    "coord": [38.51708, -113.54364],
    "cams": [{
        "id": "10842",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-21-mp-44.gif",
        "name": "SR-21 Liveview EB @ Milepost 44.93, BV"
    }]
}, {
    "coord": [38.21349, -112.82888],
    "cams": [{
        "id": "11098",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-21-MP-96-all.gif",
        "name": "SR-21 Liveview EB @ Minersville Lake / MP 96.1, BV"
    }]
}, {
    "coord": [40.72204, -111.54439],
    "cams": [{
        "id": "9386",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux9236.jpeg",
        "name": "SR-224 @ Olympic Pkwy / Newpark Blvd /  MP 11.16, SU"
    }]
}, {
    "coord": [40.68737, -111.54419],
    "cams": [{
        "id": "11129",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-224-MP-8-all.gif",
        "name": "SR-224 Liveview SB @ Canyon Resort Dr / Park West Village / MP 8.76, SU"
    }]
}, {
    "coord": [41.21246, -111.85196],
    "cams": [{
        "id": "10786",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-226-Combined.gif",
        "name": "SR-226 Liveview EB @ Snow Basin / MP 0.7, WB"
    }]
}, {
    "coord": [38.4502, -111.82265],
    "cams": [{
        "id": "10829",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-24-mp-41.gif",
        "name": "SR-24 Liveview EB @ Milepost 40.98, WE"
    }]
}, {
    "coord": [38.6944, -111.87136],
    "cams": [{
        "id": "10837",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-24-mp-22.gif",
        "name": "SR-24 Liveview NB @ Milepost 22.45, SE"
    }]
}, {
    "coord": [38.59155, -111.84966],
    "cams": [{
        "id": "11270",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-24-MP-30.gif",
        "name": "SR-24 Liveview SB @ Koosharem Reservoir / MP 30.62, SE"
    }]
}, {
    "coord": [40.67711, -111.43201],
    "cams": [{
        "id": "11252",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-248-mile4-7all.gif",
        "name": "SR-248 / 1040 W Liveview EB @ Jordanelle Pkwy / Browns Canyon Rd / 13970 N / MP 4.88, WA"
    }]
}, {
    "coord": [40.6338, -111.3849],
    "cams": [{
        "id": "10759",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR248.gif",
        "name": "SR-248 RWIS EB @ Milepost 8.95, WA"
    }]
}, {
    "coord": [38.513, -111.78518],
    "cams": [{
        "id": "11069",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-25-MP-3-all.gif",
        "name": "SR-25 Liveview EB @ Fish Lake / MP 3.97, SE"
    }]
}, {
    "coord": [38.83652, -112.84691],
    "cams": [{
        "id": "11631",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-257-MP33.gif",
        "name": "SR-257 Liveview NB @ Milepost 33.27, MD"
    }]
}, {
    "coord": [37.76424, -110.65094],
    "cams": [{
        "id": "11618",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-276%20MP%2021.gif",
        "name": "SR-276 Liveview NB @  Milepost 20.58, GA"
    }]
}, {
    "coord": [39.3511, -111.92912],
    "cams": [{
        "id": "10866",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-28-mp-15.gif",
        "name": "SR-28 Liveview SB @ Milepost 14.96, SP"
    }]
}, {
    "coord": [41.9103, -111.39051],
    "cams": [{
        "id": "11760",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-30%20mp%20112.gif",
        "name": "SR-30 Liveview EB @ Kimball Ln / MP 112.53, GRC"
    }]
}, {
    "coord": [41.37913, -113.99866],
    "cams": [{
        "id": "11107",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-30-MP-2-all.gif",
        "name": "SR-30 Liveview EB @ Milepost 2.3, BE"
    }]
}, {
    "coord": [41.80756, -111.24971],
    "cams": [{
        "id": "11329",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-30-mp-124.gif",
        "name": "SR-30 Liveview EB @ Otter Creek Rd / MP 124.15, RI"
    }]
}, {
    "coord": [41.77163, -111.12171],
    "cams": [{
        "id": "10802",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-30-MP-131-all.gif",
        "name": "SR-30 Liveview EB @ SR-16 / Manhead Rd / MP 131.68, RI"
    }]
}, {
    "coord": [41.76398, -113.51087],
    "cams": [{
        "id": "11477",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-30-mp-44.gif",
        "name": "SR-30 Liveview EB @ Warm Springs Rd / MP 44, BE"
    }]
}, {
    "coord": [41.77846, -112.02238],
    "cams": [{
        "id": "10824",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR30%20in%20Box%20Elder%20-%20Cache%20County.gif",
        "name": "SR-30 RWIS WB @ BE/CA County Line / MP 99.24, BE"
    }]
}, {
    "coord": [41.9379, -113.0858],
    "cams": [{
        "id": "10773",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR30%20@%20Curlew%20Jct.gif",
        "name": "SR-30 RWIS WB @ Curlew Junction / MP 72.36, BE"
    }]
}, {
    "coord": [39.5824, -111.25146],
    "cams": [{
        "id": "11110",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-31-MP-18.gif",
        "name": "SR-31 Liveview EB @ Miller Flat Rd / MP 18.38, SP"
    }]
}, {
    "coord": [39.6206, -111.31352],
    "cams": [{
        "id": "10768",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-31-mp-13.gif",
        "name": "SR-31 Liveview WB @ Milepost 13.21, SP"
    }]
}, {
    "coord": [39.63607, -111.3291],
    "cams": [{
        "id": "10746",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR31%20@%20Skyline.jpg",
        "name": "SR-31 RWIS WB @ Skyline Dr / MP 11.79, SP"
    }]
}, {
    "coord": [40.59081, -111.39031],
    "cams": [{
        "id": "11027",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-32%20Mile%204-all.gif",
        "name": "SR-32 Liveview EB @ Milepost 4.17, WA"
    }]
}, {
    "coord": [40.74835, -111.36388],
    "cams": [{
        "id": "11476",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-32-mp-23.gif",
        "name": "SR-32 Liveview SB @ Milepost 23, SU"
    }]
}, {
    "coord": [40.72397, -111.31618],
    "cams": [{
        "id": "11704",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR32-Mile19.gif",
        "name": "SR-32 Liveview WB @ Milepost 19.55, SU"
    }]
}, {
    "coord": [40.69837, -111.28088],
    "cams": [{
        "id": "12385",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-32%20@%20Marion.gif",
        "name": "SR-32 RWIS NB @ Rob Young Ln / MP 16.46, SU"
    }]
}, {
    "coord": [40.558, -111.131],
    "cams": [{
        "id": "10782",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR35%20@%20Wolf%20Creek.gif",
        "name": "SR-35 RWIS @ Wolf Creek / MP 9.92, WA"
    }]
}, {
    "coord": [40.4872, -111.0344],
    "cams": [{
        "id": "11499",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS-SR35-Wolf-Creek-Pass.gif",
        "name": "SR-35 RWIS EB @ Wolf Creek Pass / MP 19.33, WA"
    }]
}, {
    "coord": [40.60156, -112.29383],
    "cams": [{
        "id": "10298",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15007.jpeg",
        "name": "SR-36 @ Erda Way / 4100 N, ERD"
    }]
}, {
    "coord": [40.685799, -112.268147],
    "cams": [{
        "id": "12209",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17017.jpeg",
        "name": "SR-36 @ Saddleback Blvd, TE (Local)"
    }]
}, {
    "coord": [40.65344, -112.28877],
    "cams": [{
        "id": "10294",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15003.jpeg",
        "name": "SR-36 @ SR-138 / Mills Jct / Center St, STP"
    }]
}, {
    "coord": [40.63078, -112.29135],
    "cams": [{
        "id": "10295",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15004.jpeg",
        "name": "SR-36 @ Village Blvd, STP"
    }]
}, {
    "coord": [40.072, -112.371],
    "cams": [{
        "id": "10791",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-36-mp18.gif",
        "name": "SR-36 Liveview SB @ Milepost 17.88, TE"
    }]
}, {
    "coord": [41.25368, -111.84164],
    "cams": [{
        "id": "10785",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-39-Mile13.gif",
        "name": "SR-39 / Ogden Canyon Liveview EB @ SR-158 / MP 13.8, WB"
    }]
}, {
    "coord": [41.41083, -111.58248],
    "cams": [{
        "id": "10820",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-39-mp36.gif",
        "name": "SR-39 Liveview EB @ Monte Cristo / MP 36.84, WB"
    }]
}, {
    "coord": [41.99627, -113.19131],
    "cams": [{
        "id": "10772",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-42-mp-0.gif",
        "name": "SR-42 Liveview EB @ Idaho State Line / MP 0.43, BE"
    }]
}, {
    "coord": [40.8455, -109.64355],
    "cams": [{
        "id": "10784",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-44-mp-9.gif",
        "name": "SR-44 Liveview WB @ Milepost 8.98, DG"
    }]
}, {
    "coord": [40.142, -109.27873],
    "cams": [{
        "id": "10851",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-45-MP-15-all.gif",
        "name": "SR-45 Liveview SB @ Milepost 15.55, UN"
    }]
}, {
    "coord": [40.14488, -111.61137],
    "cams": [{
        "id": "12317",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17116.jpeg",
        "name": "SR-51 @ 1600 S, SPV"
    }]
}, {
    "coord": [40.1224, -111.62942],
    "cams": [{
        "id": "12065",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16873.jpeg",
        "name": "SR-51 @ Expressway Ln / 980 N, SPF"
    }]
}, {
    "coord": [37.72386, -114.04211],
    "cams": [{
        "id": "11614",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-56-MP0-53.gif",
        "name": "SR-56 Liveview EB @ Milepost 0.53, RN"
    }]
}, {
    "coord": [37.61109, -113.38533],
    "cams": [{
        "id": "11111",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-56-MP42-all.gif",
        "name": "SR-56 Liveview EB @ Milepost 42.2, RN"
    }]
}, {
    "coord": [37.09719, -113.12321],
    "cams": [{
        "id": "11629",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-59-MP-10.gif",
        "name": "SR-59 Liveview NB @ Milepost 9.92, APV"
    }]
}, {
    "coord": [38.35408, -111.9463],
    "cams": [{
        "id": "11617",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-62MP26.gif",
        "name": "SR-62 Liveview NB @ Milepost 26.28, PT"
    }]
}, {
    "coord": [40.82739, -111.65433],
    "cams": [{
        "id": "11500",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-65%20@%20big-mountain-pass.gif",
        "name": "SR-65 RWIS NB @ Big Mountain Pass / SL-MN Co Line / MP 8.4, SL"
    }]
}, {
    "coord": [40.92183, -111.58335],
    "cams": [{
        "id": "11114",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-66-MP-0-all.gif",
        "name": "SR-66 Liveview EB @ East Canyon Reservoir / MP 0.84, MN"
    }]
}, {
    "coord": [38.58287, -111.47789],
    "cams": [{
        "id": "11821",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-72-mp-158.gif",
        "name": "SR-72 Liveview NB @ Hogans Pass / MP 15.8, SE"
    }]
}, {
    "coord": [38.71285, -111.40368],
    "cams": [{
        "id": "11890",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR72mile30.gif",
        "name": "SR-72 Liveview SB @ Milepost 30, SE"
    }]
}, {
    "coord": [40.25522, -112.10587],
    "cams": [{
        "id": "11474",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr73mp20.gif",
        "name": "SR-73 / Cedar Valley Rd Liveview EB @ Milepost 20, FRF"
    }]
}, {
    "coord": [40.33547, -112.09715],
    "cams": [{
        "id": "11473",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-73-mp-26.gif",
        "name": "SR-73 Liveview EB @ Milepost 26, CDF"
    }]
}, {
    "coord": [40.3844, -111.95116],
    "cams": [{
        "id": "10834",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-73-mp34.gif",
        "name": "SR-73 Liveview EB @ Milepost 34.57, SSP"
    }]
}, {
    "coord": [40.224, -112.178],
    "cams": [{
        "id": "10792",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-73-mp-16.gif",
        "name": "SR-73 Liveview EB @ TE/UT County Line / MP 15.84, UT"
    }]
}, {
    "coord": [40.31495, -112.10242],
    "cams": [{
        "id": "11117",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-73-MP-24-all.gif",
        "name": "SR-73 Liveview NB @ Cedar Valley Rd / MP 24.4, CDF"
    }]
}, {
    "coord": [40.3658, -112.03748],
    "cams": [{
        "id": "10852",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-73-mp-29.gif",
        "name": "SR-73 Liveview WB @ Eagle Mountain Blvd / MP 29.78, EAG"
    }]
}, {
    "coord": [41.61272, -112.36751],
    "cams": [{
        "id": "10795",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-83-mp-13.gif",
        "name": "SR-83 Liveview EB @ SR-102 / MP 13.07, BE"
    }]
}, {
    "coord": [41.6608, -112.44381],
    "cams": [{
        "id": "11255",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-83mile18-all.gif",
        "name": "SR-83 Liveview SB @ ATK Thiokol / MP 18.5, BE"
    }]
}, {
    "coord": [40.21099, -109.66883],
    "cams": [{
        "id": "11120",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-88-MP-9-all.gif",
        "name": "SR-88 Liveview SB @ Pelican Lake / MP 9.03, UN"
    }]
}, {
    "coord": [40.45049, -111.64471],
    "cams": [{
        "id": "10853",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-92-mp-14.gif",
        "name": "SR-92 Liveview WB @ Alpine Loop Scenic Hwy / MP 14.37, UT"
    }]
}, {
    "coord": [37.5647, -109.8186],
    "cams": [{
        "id": "10781",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20Salvation%20Knoll.jpg",
        "name": "SR-95 RWIS EB @ Salvation Knoll / MP 97, SJ"
    }]
}, {
    "coord": [37.10978, -113.5621],
    "cams": [{
        "id": "10205",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14914.jpeg",
        "name": "St George Blvd / SR-34 @ 1000 E, STG"
    }]
}, {
    "coord": [37.10966, -113.57478],
    "cams": [{
        "id": "9810",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14520.jpeg",
        "name": "St George Blvd / SR-34 @ 400 E, STG"
    }]
}, {
    "coord": [37.10966, -113.56845],
    "cams": [{
        "id": "10204",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14913.jpeg",
        "name": "St George Blvd / SR-34 @ 700 E, STG"
    }]
}, {
    "coord": [37.10978, -113.58329],
    "cams": [{
        "id": "10209",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14918.jpeg",
        "name": "St George Blvd / SR-34 @ Main St, STG"
    }]
}, {
    "coord": [37.10963, -113.55469],
    "cams": [{
        "id": "10208",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14917.jpeg",
        "name": "St George Blvd / SR-34 @ River Rd / Red Cliffs Dr, STG"
    }]
}, {
    "coord": [41.11381, -112.02569],
    "cams": [{
        "id": "9636",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux434.jpeg",
        "name": "State St / SR-126 @ Center St, CFD"
    }]
}, {
    "coord": [40.771524, -111.888223],
    "cams": [{
        "id": "11066",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15875.jpeg",
        "name": "State St / SR-186 @ North Temple St / 2nd Ave, SLC"
    }]
}, {
    "coord": [40.02258, -111.74215],
    "cams": [{
        "id": "11905",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16713.jpeg",
        "name": "State St / SR-198 @ 1400 S, PSN"
    }]
}, {
    "coord": [37.21072, -113.27206],
    "cams": [{
        "id": "11869",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16677.jpeg",
        "name": "State St / SR-9 / SR-17 @ 500 N / SR-9, LVR"
    }]
}, {
    "coord": [37.16736, -113.37362],
    "cams": [{
        "id": "11874",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16682.jpeg",
        "name": "State St / SR-9 @ 3700 W / Sand Hollow Rd, HRC (Local)"
    }]
}, {
    "coord": [37.16848, -113.40807],
    "cams": [{
        "id": "11873",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16681.jpeg",
        "name": "State St / SR-9 @ 5300 W / SR-318, HRC"
    }]
}, {
    "coord": [37.16031, -113.43525],
    "cams": [{
        "id": "11872",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16680.jpeg",
        "name": "State St / SR-9 @ 6300 W / Telegraph Rd / Old Hwy 91, HRC"
    }]
}, {
    "coord": [37.17636, -113.30071],
    "cams": [{
        "id": "11870",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16678.jpeg",
        "name": "State St / SR-9 @ 700 W / Airport Rd, HRC"
    }]
}, {
    "coord": [37.17643, -113.28795],
    "cams": [{
        "id": "11871",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16679.jpeg",
        "name": "State St / SR-9 @ Main St / SR-59, HRC"
    }]
}, {
    "coord": [40.41295, -111.87269],
    "cams": [{
        "id": "10722",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15531.jpeg",
        "name": "State St / US-89 / I-15 SB Exit @ 2100 N / SR-194, LHI"
    }]
}, {
    "coord": [40.56956, -111.8905],
    "cams": [{
        "id": "11965",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16773.jpeg",
        "name": "State St / US-89 @ 10000 S / Sego Lily Dr, SND"
    }]
}, {
    "coord": [40.55854, -111.89113],
    "cams": [{
        "id": "10104",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14813.jpeg",
        "name": "State St / US-89 @ 10600 S, SND"
    }]
}, {
    "coord": [40.3701, -111.76916],
    "cams": [{
        "id": "10561",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15370.jpeg",
        "name": "State St / US-89 @ 1100 E, AFK / 2000 W, PLG / SR-129, PLG"
    }]
}, {
    "coord": [40.55179, -111.89103],
    "cams": [{
        "id": "12341",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17140.jpeg",
        "name": "State St / US-89 @ 11000 S, SND"
    }]
}, {
    "coord": [40.54747, -111.89129],
    "cams": [{
        "id": "12342",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17141.jpeg",
        "name": "State St / US-89 @ 11235 S / Auto Mall Dr, SND"
    }]
}, {
    "coord": [40.54443, -111.89117],
    "cams": [{
        "id": "10686",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15495.jpeg",
        "name": "State St / US-89 @ 11400 S, SND"
    }]
}, {
    "coord": [40.31913, -111.70491],
    "cams": [{
        "id": "9819",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14529.jpg",
        "name": "State St / US-89 @ 1200 N, ORM"
    }]
}, {
    "coord": [40.52932, -111.89021],
    "cams": [{
        "id": "10677",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15486.jpeg",
        "name": "State St / US-89 @ 12200 S, DPR"
    }]
}, {
    "coord": [40.74162, -111.88815],
    "cams": [{
        "id": "11514",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16323.jpeg",
        "name": "State St / US-89 @ 1300 S, SLC"
    }]
}, {
    "coord": [40.21593, -111.63609],
    "cams": [{
        "id": "11258",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16067.jpeg",
        "name": "State St / US-89 @ 1320 S, PVO"
    }]
}, {
    "coord": [40.32648, -111.70785],
    "cams": [{
        "id": "9272",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux401.jpeg",
        "name": "State St / US-89 @ 1600 N, ORM"
    }]
}, {
    "coord": [40.26785, -111.68246],
    "cams": [{
        "id": "9834",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14544.jpeg",
        "name": "State St / US-89 @ 1600 S, ORM"
    }]
}, {
    "coord": [40.73367, -111.88802],
    "cams": [{
        "id": "11521",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16330.jpeg",
        "name": "State St / US-89 @ 1700 S, SLC"
    }]
}, {
    "coord": [40.25905, -111.67479],
    "cams": [{
        "id": "9527",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14294.jpeg",
        "name": "State St / US-89 @ 1720 N / Grandview Ln, PVO"
    }]
}, {
    "coord": [40.20776, -111.6298],
    "cams": [{
        "id": "9554",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14321.jpeg",
        "name": "State St / US-89 @ 1860 S / Slate Canyon Dr, PVO"
    }]
}, {
    "coord": [40.36086, -111.7471],
    "cams": [{
        "id": "11757",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16565.jpeg",
        "name": "State St / US-89 @ 200 S / 220 S, PLG"
    }]
}, {
    "coord": [40.72559, -111.88796],
    "cams": [{
        "id": "141",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux141.jpeg",
        "name": "State St / US-89 @ 2100 S / SR-201, SSL"
    }]
}, {
    "coord": [40.37499, -111.7906],
    "cams": [{
        "id": "12049",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16857.jpeg",
        "name": "State St / US-89 @ 300 E, AFK"
    }]
}, {
    "coord": [40.69978, -111.88818],
    "cams": [{
        "id": "142",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux142.jpeg",
        "name": "State St / US-89 @ 3300 S / SR-171, SSL"
    }]
}, {
    "coord": [40.68687, -111.88804],
    "cams": [{
        "id": "11948",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16756.jpeg",
        "name": "State St / US-89 @ 3900 S, SSL"
    }]
}, {
    "coord": [40.30447, -111.69735],
    "cams": [{
        "id": "10559",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15368.jpeg",
        "name": "State St / US-89 @ 400 N, ORM"
    }]
}, {
    "coord": [40.76113, -111.88771],
    "cams": [{
        "id": "185",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux185.jpeg",
        "name": "State St / US-89 @ 400 S / University Blvd / SR-186, SLC"
    }]
}, {
    "coord": [40.6743, -111.88826],
    "cams": [{
        "id": "9264",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5143.jpeg",
        "name": "State St / US-89 @ 4500 S / SR-266, MUR"
    }]
}, {
    "coord": [40.37402, -111.78546],
    "cams": [{
        "id": "10251",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14960.jpeg",
        "name": "State St / US-89 @ 500 E / SR-180, AFK"
    }]
}, {
    "coord": [40.6564, -111.88798],
    "cams": [{
        "id": "144",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux144.jpeg",
        "name": "State St / US-89 @ 5300 S / SR-173, MUR"
    }]
}, {
    "coord": [40.35552, -111.73608],
    "cams": [{
        "id": "10574",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15383.jpeg",
        "name": "State St / US-89 @ 700 S / 300 E, PLG"
    }]
}, {
    "coord": [40.62064, -111.89032],
    "cams": [{
        "id": "11825",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16633.jpeg",
        "name": "State St / US-89 @ 7200 S / Fort Union Blvd / SR-48, MDV"
    }]
}, {
    "coord": [40.60948, -111.89067],
    "cams": [{
        "id": "195",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux195.jpeg",
        "name": "State St / US-89 @ 7800 S, MDV"
    }]
}, {
    "coord": [40.31185, -111.70143],
    "cams": [{
        "id": "9273",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux402.jpeg",
        "name": "State St / US-89 @ 800 N / SR-52, ORM"
    }]
}, {
    "coord": [40.28235, -111.68865],
    "cams": [{
        "id": "9314",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux415.jpeg",
        "name": "State St / US-89 @ 800 S, ORM"
    }]
}, {
    "coord": [40.599093, -111.890625],
    "cams": [{
        "id": "12268",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17067.jpeg",
        "name": "State St / US-89 @ 8375 S / Princeton Dr, SND"
    }]
}, {
    "coord": [40.58843, -111.89051],
    "cams": [{
        "id": "10108",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14817.jpeg",
        "name": "State St / US-89 @ 9000 S / SR-209, SND"
    }]
}, {
    "coord": [40.58028, -111.89048],
    "cams": [{
        "id": "10103",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14812.jpeg",
        "name": "State St / US-89 @ 9400 S, SND"
    }]
}, {
    "coord": [40.29713, -111.69344],
    "cams": [{
        "id": "9277",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux404.jpeg",
        "name": "State St / US-89 @ Center St, ORM"
    }]
}, {
    "coord": [40.38892, -111.82684],
    "cams": [{
        "id": "10250",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14959.jpeg",
        "name": "State St / US-89 @ Main St / 1200 E / SR-73, LHI"
    }]
}, {
    "coord": [40.35911, -111.74068],
    "cams": [{
        "id": "10569",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15378.jpeg",
        "name": "State St / US-89 @ Main St / SR-114, PLG"
    }]
}, {
    "coord": [40.36572, -111.75127],
    "cams": [{
        "id": "10557",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15366.jpeg",
        "name": "State St / US-89 @ Pleasant Grove Blvd / Center St, PLG"
    }]
}, {
    "coord": [40.58411, -111.89109],
    "cams": [{
        "id": "10893",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15702.jpeg",
        "name": "State St / US-89 @ Rio Tinto Stadium / 9220 S, SND"
    }]
}, {
    "coord": [40.27342, -111.68482],
    "cams": [{
        "id": "9278",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux405.jpeg",
        "name": "State St / US-89 @ University Pkwy / SR-265, ORM"
    }]
}, {
    "coord": [40.63334, -111.88937],
    "cams": [{
        "id": "145",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux145.jpeg",
        "name": "State St / US-89 @ Winchester St / 6400 S, MUR"
    }]
}, {
    "coord": [37.12272, -113.62397],
    "cams": [{
        "id": "11533",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16342.jpeg",
        "name": "Sunset Blvd / SR-8 @ Dixie Dr / Dixie Downs Rd, STG"
    }]
}, {
    "coord": [37.12461, -113.60257],
    "cams": [{
        "id": "10383",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15092.jpeg",
        "name": "Sunset Blvd / SR-8 @ Valley View Dr, STG"
    }]
}, {
    "coord": [37.1226, -113.61628],
    "cams": [{
        "id": "10384",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15093.jpeg",
        "name": "Sunset Blvd / SR-8 @ Westridge Dr, STG"
    }]
}, {
    "coord": [37.1383, -113.46857],
    "cams": [{
        "id": "11907",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16715.jpeg",
        "name": "Telegraph Rd @ Highland Pkwy, WAS"
    }]
}, {
    "coord": [37.13026, -113.50496],
    "cams": [{
        "id": "11157",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15966.jpeg",
        "name": "Telegraph St / State St @ 300 E / Washington Fields Rd, WAS"
    }]
}, {
    "coord": [37.13029, -113.50989],
    "cams": [{
        "id": "11156",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15965.jpeg",
        "name": "Telegraph St / State St @ Main St, WAS"
    }]
}, {
    "coord": [40.43201, -111.80238],
    "cams": [{
        "id": "11666",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16474.jpeg",
        "name": "Timpanogos Hwy / 11000 N / SR-92 @ 6000 W, HLD"
    }]
}, {
    "coord": [40.43196, -111.81179],
    "cams": [{
        "id": "11758",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16566.jpeg",
        "name": "Timpanogos Hwy / 11000 N / SR-92 @ 6400 W, HLD"
    }]
}, {
    "coord": [40.43185, -111.78518],
    "cams": [{
        "id": "11010",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15819.jpeg",
        "name": "Timpanogos Hwy / 11000 N / SR-92 @ Alpine Hwy / 5300 W / SR-74, HLD"
    }]
}, {
    "coord": [40.432, -111.77343],
    "cams": [{
        "id": "11388",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16197.jpeg",
        "name": "Timpanogos Hwy / 11000 N / SR-92 @ North County Blvd / 4800 W / SR-129, HLD"
    }]
}, {
    "coord": [40.43234, -111.83057],
    "cams": [{
        "id": "11011",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15820.jpeg",
        "name": "Timpanogos Hwy / 3500 N / SR-92 @ 1200 E / Micron, LHI"
    }]
}, {
    "coord": [40.43194, -111.87329],
    "cams": [{
        "id": "11665",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16473.jpeg",
        "name": "Timpanogos Hwy / 3500 N / SR-92 @ 1450 W, LHI"
    }]
}, {
    "coord": [40.43224, -111.84971],
    "cams": [{
        "id": "11012",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15821.jpeg",
        "name": "Timpanogos Hwy / 3500 N / SR-92 @ Center St, LHI"
    }]
}, {
    "coord": [40.43248, -111.86904],
    "cams": [{
        "id": "11667",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16475.jpeg",
        "name": "Timpanogos Hwy / 3500 N / SR-92 @ Morning Vista Rd / 1200 W, LHI"
    }]
}, {
    "coord": [40.43075, -111.89566],
    "cams": [{
        "id": "11542",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16351.jpeg",
        "name": "Timpanogos Hwy / Club House Dr / SR-92 @ Ashton Blvd / Maple Loop Dr, LHI"
    }]
}, {
    "coord": [40.43439, -111.88097],
    "cams": [{
        "id": "11055",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15864.jpeg",
        "name": "Triumph Blvd @ Cabelas Blvd, LHI"
    }]
}, {
    "coord": [40.62453, -111.85996],
    "cams": [{
        "id": "146",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux146.jpeg",
        "name": "Union Park Ave / 1090 E @ Fort Union Blvd / 7000 S, MDV"
    }]
}, {
    "coord": [40.61075, -111.85332],
    "cams": [{
        "id": "11944",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16752.jpeg",
        "name": "Union Park Ave / 1300 E @ 7755 S / Forbush Ln, SND"
    }]
}, {
    "coord": [40.61781, -111.85794],
    "cams": [{
        "id": "12019",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16827.jpeg",
        "name": "Union Park Ave / 1300 E @ Creek Rd / South Union Ave / 7340 S, CWH"
    }]
}, {
    "coord": [40.62202, -111.85589],
    "cams": [{
        "id": "12020",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16828.jpeg",
        "name": "Union Park Ave @ 1300 E / 7100 S, CWH"
    }]
}, {
    "coord": [40.26334, -111.65859],
    "cams": [{
        "id": "9537",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14304.jpeg",
        "name": "University Ave / US-189 @ 2230 N, PVO"
    }]
}, {
    "coord": [40.22968, -111.65869],
    "cams": [{
        "id": "10276",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14985.jpeg",
        "name": "University Ave / US-189 @ 300 S / US-89, PVO"
    }]
}, {
    "coord": [40.28279, -111.65856],
    "cams": [{
        "id": "9539",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14306.jpeg",
        "name": "University Ave / US-189 @ 3700 N, PVO"
    }]
}, {
    "coord": [40.28899, -111.65864],
    "cams": [{
        "id": "11442",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16251.jpeg",
        "name": "University Ave / US-189 @ 4200 N, PVO"
    }]
}, {
    "coord": [40.2976, -111.65712],
    "cams": [{
        "id": "9541",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14308.jpeg",
        "name": "University Ave / US-189 @ 4800 N / Foothill Blvd, PVO"
    }]
}, {
    "coord": [40.24038, -111.65866],
    "cams": [{
        "id": "9505",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14272.jpeg",
        "name": "University Ave / US-189 @ 500 N, PVO"
    }]
}, {
    "coord": [40.30278, -111.65591],
    "cams": [{
        "id": "11389",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16198.jpeg",
        "name": "University Ave / US-189 @ 5200 N / River Park Dr, PVO"
    }]
}, {
    "coord": [40.24434, -111.65863],
    "cams": [{
        "id": "9528",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14295.jpeg",
        "name": "University Ave / US-189 @ 800 N, PVO"
    }]
}, {
    "coord": [40.22172, -111.65886],
    "cams": [{
        "id": "9502",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14269.jpeg",
        "name": "University Ave / US-189 @ 920 S, PVO"
    }]
}, {
    "coord": [40.23371, -111.65876],
    "cams": [{
        "id": "9504",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14271.jpeg",
        "name": "University Ave / US-189 @ Center St, PVO"
    }]
}, {
    "coord": [40.25059, -111.65863],
    "cams": [{
        "id": "9529",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14296.jpeg",
        "name": "University Ave / US-189 @ Cougar Blvd / 1230 N, PVO"
    }]
}, {
    "coord": [40.25578, -111.65862],
    "cams": [{
        "id": "9553",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14320.jpeg",
        "name": "University Ave / US-189 @ University Pkwy / 1650 N / SR-265, PVO"
    }]
}, {
    "coord": [40.25578, -111.65035],
    "cams": [{
        "id": "12378",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17177.jpeg",
        "name": "University Pkwy / 1650 N @ 450 E, PVO"
    }]
}, {
    "coord": [40.25613, -111.65609],
    "cams": [{
        "id": "9531",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14298.jpeg",
        "name": "University Pkwy / 1650 N @ Canyon Rd / 150 E, PVO"
    }]
}, {
    "coord": [40.27156, -111.67221],
    "cams": [{
        "id": "12282",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17081.jpeg",
        "name": "University Pkwy / SR-265 @ 1400 S / MP 2.95, ORM"
    }]
}, {
    "coord": [40.26637, -111.67222],
    "cams": [{
        "id": "12283",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17082.jpeg",
        "name": "University Pkwy / SR-265 @ 1700 S / MP 3.33, ORM"
    }]
}, {
    "coord": [40.26328, -111.6675],
    "cams": [{
        "id": "9675",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14403.jpeg",
        "name": "University Pkwy / SR-265 @ 2230 N / Riverside Ave / 550 W, PVO"
    }]
}, {
    "coord": [40.27363, -111.70481],
    "cams": [{
        "id": "9832",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14542.jpeg",
        "name": "University Pkwy / SR-265 @ 400 W, ORM"
    }]
}, {
    "coord": [40.27295, -111.67633],
    "cams": [{
        "id": "9316",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux417.jpeg",
        "name": "University Pkwy / SR-265 @ 800 E, ORM"
    }]
}, {
    "coord": [40.25783, -111.66178],
    "cams": [{
        "id": "10564",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15373.jpeg",
        "name": "University Pkwy / SR-265 @ Freedom Blvd / 200 W, PVO"
    }]
}, {
    "coord": [40.27357, -111.69535],
    "cams": [{
        "id": "9833",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14543.jpeg",
        "name": "University Pkwy / SR-265 @ Main St, ORM"
    }]
}, {
    "coord": [40.27495, -111.71309],
    "cams": [{
        "id": "9306",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux406.jpeg",
        "name": "University Pkwy / SR-265 @ Sandhill Rd, ORM"
    }]
}, {
    "coord": [40.40601, -111.52734],
    "cams": [{
        "id": "10399",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15108.jpeg",
        "name": "US-189 @ Deer Creek Dam / MP 17.87, WA"
    }]
}, {
    "coord": [40.4134, -111.47823],
    "cams": [{
        "id": "11746",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16554.jpeg",
        "name": "US-189 @ Milepost 20.89, WA"
    }]
}, {
    "coord": [40.41846, -111.48935],
    "cams": [{
        "id": "11745",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16553.jpeg",
        "name": "US-189 @ Milepost 21.57, WA"
    }]
}, {
    "coord": [40.46106, -111.46304],
    "cams": [{
        "id": "11190",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15999.jpeg",
        "name": "US-189 @ Milepost 25.36, CHR"
    }]
}, {
    "coord": [40.4558, -111.4707],
    "cams": [{
        "id": "11837",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16645.jpeg",
        "name": "US-189 RWIS EB @ Charleston Rd / 3600 W / SR-113 / MP 24.92, CHR"
    }]
}, {
    "coord": [39.79923, -110.78416],
    "cams": [{
        "id": "10810",
        "url": "http://www.udottraffic.utah.gov/1_devices/US-191-MP-259.gif",
        "name": "US-191 Liveview NB @ Emma Park Rd / MP 259.27, CC"
    }]
}, {
    "coord": [37.99349, -109.35311],
    "cams": [{
        "id": "10809",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-191-mp-80.gif",
        "name": "US-191 Liveview NB @ Milepost 80.7, SJ"
    }]
}, {
    "coord": [39.86727, -110.76275],
    "cams": [{
        "id": "10767",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-191-mp-265.gif",
        "name": "US-191 Liveview SB @ Indian Canyon / MP 265.73, DU"
    }]
}, {
    "coord": [40.67725, -109.48624],
    "cams": [{
        "id": "10855",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-191-mp-372.gif",
        "name": "US-191 Liveview SB @ Milepost 372.31, UN"
    }]
}, {
    "coord": [40.7819, -109.471],
    "cams": [{
        "id": "10765",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-191-mp-380.gif",
        "name": "US-191 Liveview SB @ Milepost 380.8, DG"
    }]
}, {
    "coord": [38.30999, -109.40466],
    "cams": [{
        "id": "10845",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-191-mp-103.gif",
        "name": "US-191 Liveview SB @ SR-46 / La Sal Jct / MP 103.55, SJ"
    }]
}, {
    "coord": [38.61121, -109.60822],
    "cams": [{
        "id": "12044",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16852.jpeg",
        "name": "US-191 NB @ Arches Entrance Rd / MP 130.28, GR"
    }]
}, {
    "coord": [38.60936, -109.60694],
    "cams": [{
        "id": "11677",
        "url": "http://www.udottraffic.utah.gov/1_devices/archesEntrance.gif",
        "name": "US-191 NB @ Arches National Park / MP 130, GR"
    }]
}, {
    "coord": [37.74418, -109.40073],
    "cams": [{
        "id": "11708",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16516.jpeg",
        "name": "US-191 NB @ Devils Canyon / MP 61.18, SJ"
    }]
}, {
    "coord": [38.60187, -109.57579],
    "cams": [{
        "id": "12045",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16853.jpeg",
        "name": "US-191 NB @ SR-128 / MP 128.2, MAB"
    }]
}, {
    "coord": [39.8857, -110.7479],
    "cams": [{
        "id": "10756",
        "url": "http://www.udottraffic.utah.gov/1_devices/Indian-Canyon-Summit.gif",
        "name": "US-191 RWIS NB @ Indian Canyon Summit / MP 266.77, DU"
    }]
}, {
    "coord": [37.75609, -109.39774],
    "cams": [{
        "id": "10750",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20US-191%20Monticello%20N-S.gif",
        "name": "US-191 RWIS NB @ Monticello / MP 62, SJ"
    }]
}, {
    "coord": [40.48254, -111.40286],
    "cams": [{
        "id": "12229",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17028.jpeg",
        "name": "US-40 @ 2050 S / MP 18.81, HBR"
    }]
}, {
    "coord": [40.711035, -111.481422],
    "cams": [{
        "id": "12210",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17018.jpeg",
        "name": "US-40 @ Milepost 1.85, SU"
    }]
}, {
    "coord": [40.69769, -111.47272],
    "cams": [{
        "id": "9774",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14484.jpeg",
        "name": "US-40 @ Milepost 3, SU"
    }]
}, {
    "coord": [40.5572, -111.426],
    "cams": [{
        "id": "10573",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15382.jpeg",
        "name": "US-40 @ River Rd / SR-32 / MP 13.7, WA"
    }]
}, {
    "coord": [40.71863, -111.48586],
    "cams": [{
        "id": "235",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux235.jpeg",
        "name": "US-40 @ Silver Summit Pkwy / MP 1.31, SU"
    }]
}, {
    "coord": [40.68571, -111.46245],
    "cams": [{
        "id": "203",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux203.jpeg",
        "name": "US-40 @ SR-248 / Kearns Blvd / Quinns Jct / MP 3.89, SU"
    }]
}, {
    "coord": [40.24123, -111.15158],
    "cams": [{
        "id": "12485",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17276.jpeg",
        "name": "US-40 EB @ Strawberry Reservoir / MP 42, WA"
    }]
}, {
    "coord": [40.18421, -111.05772],
    "cams": [{
        "id": "10862",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-40-mp-49.gif",
        "name": "US-40 Liveview EB @ Milepost 49.14, WA"
    }]
}, {
    "coord": [40.20058, -110.70278],
    "cams": [{
        "id": "11126",
        "url": "http://www.udottraffic.utah.gov/1_devices/US-40-MP-69-all.gif",
        "name": "US-40 Liveview EB @ Milepost 69.81, DU"
    }]
}, {
    "coord": [40.2409, -111.15093],
    "cams": [{
        "id": "10760",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-40-mp-42.gif",
        "name": "US-40 Liveview EB @ Strawberry Reservoir / MP 42, WA"
    }]
}, {
    "coord": [40.19842, -110.89071],
    "cams": [{
        "id": "11123",
        "url": "http://www.udottraffic.utah.gov/1_devices/US-40-MP-59-all.gif",
        "name": "US-40 Liveview EB @ WA/DU County Line / MP 59, DU"
    }]
}, {
    "coord": [40.60446, -111.42882],
    "cams": [{
        "id": "10856",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-40-mp-9.gif",
        "name": "US-40 Liveview NB @ Jordanelle Reservoir / MP 9.8, WA"
    }]
}, {
    "coord": [40.3133, -111.25728],
    "cams": [{
        "id": "10769",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-40-mp33.gif",
        "name": "US-40 Liveview SB @ Daniels Summit / MP 33.45, WA"
    }]
}, {
    "coord": [40.38758, -111.3033],
    "cams": [{
        "id": "11030",
        "url": "http://www.udottraffic.utah.gov/1_devices/US-40-MP-27-all.gif",
        "name": "US-40 Liveview SB @ Milepost 27.53, WA"
    }]
}, {
    "coord": [40.34913, -109.62483],
    "cams": [{
        "id": "11472",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-40-mp-134.gif",
        "name": "US-40 Liveview WB @ Milepost 134.85, UN"
    }]
}, {
    "coord": [40.28013, -109.06781],
    "cams": [{
        "id": "10849",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-40-mp173.gif",
        "name": "US-40 Liveview WB @ Milepost 173.6, UN"
    }]
}, {
    "coord": [40.20525, -110.7714],
    "cams": [{
        "id": "12430",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS_US-40_Fruitland.gif",
        "name": "US-40 RWIS EB @ Fruitland / MP 66, DU"
    }]
}, {
    "coord": [40.17259, -110.493],
    "cams": [{
        "id": "10747",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20StarvationRes.gif",
        "name": "US-40 RWIS EB @ Starvation Reservoir / MP 81.5, DU"
    }]
}, {
    "coord": [40.65269, -111.45715],
    "cams": [{
        "id": "10757",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20US40%20Mayflower%20Summit.gif",
        "name": "US-40 RWIS SB @ Mayflower Summit / MP 6.13, WA"
    }]
}, {
    "coord": [40.313727, -111.25738],
    "cams": [{
        "id": "12258",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17057.jpeg",
        "name": "US-40 SB @ Daniels Summit / MP 33.43, WA"
    }]
}, {
    "coord": [40.30295, -111.25748],
    "cams": [{
        "id": "12259",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17058.jpeg",
        "name": "US-40 SB @ Daniels Summit / MP 34.21, WA"
    }]
}, {
    "coord": [37.83278, -109.09988],
    "cams": [{
        "id": "10811",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-491-mp-13.gif",
        "name": "US-491 Liveview EB @ Milepost 13.13, SJ"
    }]
}, {
    "coord": [37.873, -109.3061],
    "cams": [{
        "id": "12452",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-491-MonticelloPOE.gif",
        "name": "US-491 RWIS WB @ Monticello POE / MP 2, SJ"
    }]
}, {
    "coord": [39.00814, -112.02911],
    "cams": [{
        "id": "10840",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-50-mp-148.gif",
        "name": "US-50 Liveview SB @ MD/SE County Line / MP 148.15, MD"
    }]
}, {
    "coord": [39.70065, -110.86859],
    "cams": [{
        "id": "248",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux248.jpeg",
        "name": "US-6 @ 1000 N / MP 231.74, HLP"
    }]
}, {
    "coord": [40.09907, -111.61186],
    "cams": [{
        "id": "9926",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14635.jpeg",
        "name": "US-6 @ 2550 E, SPF"
    }]
}, {
    "coord": [40.12041, -111.63998],
    "cams": [{
        "id": "240",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux240.jpeg",
        "name": "US-6 @ 800 N / Expressway Ln, SPF"
    }]
}, {
    "coord": [40.00091, -111.48781],
    "cams": [{
        "id": "215",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux215.jpeg",
        "name": "US-6 @ Billies Mtn / MP 186.37, UT"
    }]
}, {
    "coord": [40.09124, -111.59755],
    "cams": [{
        "id": "242",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux242.jpeg",
        "name": "US-6 @ Canyon Rd / SR-198 / MP 177.12, SPF"
    }]
}, {
    "coord": [39.97246, -111.335651],
    "cams": [{
        "id": "244",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux244.jpeg",
        "name": "US-6 @ Cedar Haven / Sheep Creek Rd / MP 195.08, UT"
    }]
}, {
    "coord": [40.10962, -111.63167],
    "cams": [{
        "id": "241",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux241.jpeg",
        "name": "US-6 @ Center St / 1430 E, SPF"
    }]
}, {
    "coord": [39.85886, -111.02763],
    "cams": [{
        "id": "246",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux246.jpeg",
        "name": "US-6 @ Colton Shed / MP 217.11, UT"
    }]
}, {
    "coord": [39.93311, -111.15338],
    "cams": [{
        "id": "245",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux245.jpeg",
        "name": "US-6 @ Gilluly Switchback / MP 206.46, UT"
    }]
}, {
    "coord": [39.69141, -110.85715],
    "cams": [{
        "id": "11707",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16515.jpeg",
        "name": "US-6 @ Main St / MP 232.7, HLP"
    }]
}, {
    "coord": [39.95004, -111.21818],
    "cams": [{
        "id": "214",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux214.jpeg",
        "name": "US-6 @ Tie Fork Rest Area / MP 202.05, UT"
    }]
}, {
    "coord": [39.7272, -110.86726],
    "cams": [{
        "id": "12173",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16981.jpeg",
        "name": "US-6 @ US-191 / MP 229.82, CC"
    }]
}, {
    "coord": [39.994857, -111.469002],
    "cams": [{
        "id": "243",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux243.jpeg",
        "name": "US-6 @ US-89 / MP 187.47, UT"
    }]
}, {
    "coord": [39.072, -113.643],
    "cams": [{
        "id": "10843",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-6-mp-22.gif",
        "name": "US-6 Liveview EB @ Kings Canyon / MP 22.77, MD"
    }]
}, {
    "coord": [39.9126, -111.06233],
    "cams": [{
        "id": "10818",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-6-mp-212.gif",
        "name": "US-6 Liveview EB @ Milepost 212.13, WA"
    }]
}, {
    "coord": [39.268, -110.344],
    "cams": [{
        "id": "10796",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-6-mp278.gif",
        "name": "US-6 Liveview EB @ Milepost 278.17, EM"
    }]
}, {
    "coord": [39.400644, -110.42302],
    "cams": [{
        "id": "11622",
        "url": "http://www.udottraffic.utah.gov/1_devices/US-6MP269.gif",
        "name": "US-6 Liveview NB @ Milepost 268.02, EM"
    }]
}, {
    "coord": [39.52442, -112.37213],
    "cams": [{
        "id": "10803",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-132-mp-0.gif",
        "name": "US-6 Liveview SB @ SR-132 / MP 105.28, LDL"
    }]
}, {
    "coord": [39.81652, -110.9389],
    "cams": [{
        "id": "10806",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-6-mp-221.gif",
        "name": "US-6 Liveview WB @ Milepost 221.81, UT"
    }]
}, {
    "coord": [39.931289, -111.086368],
    "cams": [{
        "id": "10857",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-6-mp-210.gif",
        "name": "US-6 Liveview WB @ Soldier Summit / MP 210.36, UT"
    }]
}, {
    "coord": [39.693458, -110.862789],
    "cams": [{
        "id": "11602",
        "url": "http://www.udottraffic.utah.gov/1_devices/US-6@Helper-RWIS.gif",
        "name": "US-6 RWIS EB @ 200 N / MP 232.4, HLP"
    }]
}, {
    "coord": [39.9597, -112.1022],
    "cams": [{
        "id": "10783",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20US6%20@%20Eureka.jpg",
        "name": "US-6 RWIS EB @ Eureka / MP 141.04, EUR"
    }]
}, {
    "coord": [39.989, -111.37],
    "cams": [{
        "id": "10778",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20US6%20Red%20Narrow.gif",
        "name": "US-6 RWIS EB @ Red Narrows / MP 192.9, UT"
    }]
}, {
    "coord": [39.52615, -110.5745],
    "cams": [{
        "id": "12406",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20US-6%20@%20SR-123.gif",
        "name": "US-6 RWIS EB @ SR-123 / MP 256, CC"
    }]
}, {
    "coord": [39.58842, -110.81163],
    "cams": [{
        "id": "12516",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17307.jpeg",
        "name": "US-6 WB @ Carbon Ave / SR-10, PRC"
    }]
}, {
    "coord": [39.92892, -111.084],
    "cams": [{
        "id": "11912",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16720.jpeg",
        "name": "US-6 WB @ Soldier Summit / MP 210.36, UT"
    }]
}, {
    "coord": [41.27139, -111.97738],
    "cams": [{
        "id": "12048",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16856.jpeg",
        "name": "US-89 / Harrisville Rd @ Wall Ave / SR-204 / Larsen Ln, HRV"
    }]
}, {
    "coord": [41.14823, -111.93079],
    "cams": [{
        "id": "10394",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15103.jpeg",
        "name": "US-89 / I-84 @ 6300 S / 150 E / MP 407.72, UIN"
    }]
}, {
    "coord": [41.10798, -111.90922],
    "cams": [{
        "id": "10391",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15100.jpeg",
        "name": "US-89 @ 3000 N / SR-193, LTN"
    }]
}, {
    "coord": [41.09175, -111.91075],
    "cams": [{
        "id": "10392",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15101.jpeg",
        "name": "US-89 @ Antelope Dr, LTN"
    }]
}, {
    "coord": [41.03014, -111.9091],
    "cams": [{
        "id": "286",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux286.jpeg",
        "name": "US-89 @ Green Rd / MP 398.86, FRU"
    }]
}, {
    "coord": [41.155351, -111.940559],
    "cams": [{
        "id": "10712",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15521.jpeg",
        "name": "US-89 @ Harrison Blvd / 1550 E / SR-203, SOG"
    }]
}, {
    "coord": [41.13566, -111.91329],
    "cams": [{
        "id": "10395",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15104.jpeg",
        "name": "US-89 @ I-84 EB Exit Ramp, SWE"
    }]
}, {
    "coord": [41.01144, -111.9127],
    "cams": [{
        "id": "284",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux284.jpeg",
        "name": "US-89 @ Main St / SR-106 / SR-273 / MP 397.58, FRM"
    }]
}, {
    "coord": [41.0661, -111.91015],
    "cams": [{
        "id": "10393",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15102.jpeg",
        "name": "US-89 @ Oak Hills Dr / SR-109, LTN"
    }]
}, {
    "coord": [40.9907, -111.90318],
    "cams": [{
        "id": "280",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux280.jpeg",
        "name": "US-89 @ Park Ln / 1100 W / SR-225, FRM"
    }]
}, {
    "coord": [41.01846, -111.9087],
    "cams": [{
        "id": "285",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux285.jpeg",
        "name": "US-89 @ Pedestrian Bridge / MP 398.08, FRU"
    }]
}, {
    "coord": [39.15618, -111.76152],
    "cams": [{
        "id": "11789",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-89-mp-244.gif",
        "name": "US-89 Liveview EB @ Milepost 244.6, SP"
    }]
}, {
    "coord": [38.51001, -112.26019],
    "cams": [{
        "id": "10831",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-89-mp-183.gif",
        "name": "US-89 Liveview NB @ Big Rock Candy Mtn / MP 183.85, PT"
    }]
}, {
    "coord": [37.14546, -112.56805],
    "cams": [{
        "id": "11903",
        "url": "http://www.udottraffic.utah.gov/1_devices/US89mile71.gif",
        "name": "US-89 Liveview NB @ Kanab Canyon Rd / Angel Canyon Rd / Hancock Rd / MP 71.9, KN"
    }]
}, {
    "coord": [38.09655, -112.33643],
    "cams": [{
        "id": "11623",
        "url": "http://www.udottraffic.utah.gov/1_devices/US-89_MP-151.gif",
        "name": "US-89 Liveview NB @ Milepost 151.33, GA"
    }]
}, {
    "coord": [39.71576, -111.47099],
    "cams": [{
        "id": "10823",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-89-mp290.gif",
        "name": "US-89 Liveview NB @ Milepost 290.11, SP"
    }]
}, {
    "coord": [40.99131, -111.90232],
    "cams": [{
        "id": "10821",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR225mile0-all.gif",
        "name": "US-89 Liveview NB @ Park Lane / SR-225 / MP 396.19, FRM"
    }]
}, {
    "coord": [39.42194, -111.5587],
    "cams": [{
        "id": "10822",
        "url": "http://www.udottraffic.utah.gov/1_devices/US-89-MP-267-all.gif",
        "name": "US-89 Liveview NB @ SR-132 / Pigeon Hollow Jct / MP 267.37, SP"
    }]
}, {
    "coord": [37.48865, -112.51237],
    "cams": [{
        "id": "10807",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-89-mp-103.gif",
        "name": "US-89 Liveview NB @ SR-14 / Long Valley Jct / MP 103.7, KN"
    }]
}, {
    "coord": [41.36733, -112.0356],
    "cams": [{
        "id": "10788",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-89-mp-424.gif",
        "name": "US-89 Liveview SB @ 7850 S / MP 424.94, BE"
    }]
}, {
    "coord": [41.78408, -111.64105],
    "cams": [{
        "id": "10841",
        "url": "http://www.udottraffic.utah.gov/1_devices/US-89-mp470.GIF",
        "name": "US-89 Liveview SB @ Logan Canyon / MP 470.56, CA"
    }]
}, {
    "coord": [39.05848, -111.82101],
    "cams": [{
        "id": "11788",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-89-mp-234.gif",
        "name": "US-89 Liveview SB @ Milepost 234.47, SP"
    }]
}, {
    "coord": [37.07219, -112.17349],
    "cams": [{
        "id": "11904",
        "url": "http://www.udottraffic.utah.gov/1_devices/US89mile43.gif",
        "name": "US-89 Liveview SB @ Milepost 43.2, KN"
    }]
}, {
    "coord": [41.99794, -111.40986],
    "cams": [{
        "id": "10808",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-89-mp-502.gif",
        "name": "US-89 Liveview SB @ UT/ID State Line / MP 502.57, RI"
    }]
}, {
    "coord": [39.81187, -111.50603],
    "cams": [{
        "id": "10764",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-89-mp-297.gif",
        "name": "US-89 Liveview SB @ UT/SP County Line / MP 297.03, SP"
    }]
}, {
    "coord": [41.00102, -111.90746],
    "cams": [{
        "id": "283",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux283.jpeg",
        "name": "US-89 NB @ Shepard Ln, FRM"
    }]
}, {
    "coord": [41.73977, -111.8112],
    "cams": [{
        "id": "11884",
        "url": "http://www.udottraffic.utah.gov/1_devices/US-89%20MP%20460.gif",
        "name": "US-89 RWIS EB @ USU / 900 E / MP 460.2, LGN"
    }]
}, {
    "coord": [41.9534, -111.4917],
    "cams": [{
        "id": "10826",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20US89%20@%20Logan%20Summit.jpg",
        "name": "US-89 RWIS SB @ Logan Summit / MP 489.68, CA"
    }]
}, {
    "coord": [41.00099, -111.90848],
    "cams": [{
        "id": "282",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux282.jpeg",
        "name": "US-89 SB @ Shepard Ln, FRM"
    }]
}, {
    "coord": [41.49705, -111.95611],
    "cams": [{
        "id": "12095",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16903.jpeg",
        "name": "US-89/91 @ 100 S / MP 5.61, MTU"
    }]
}, {
    "coord": [41.69749, -111.86002],
    "cams": [{
        "id": "12196",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17004.jpeg",
        "name": "US-89/91 @ 1000 W / SR-252, LGN"
    }]
}, {
    "coord": [41.70363, -111.85168],
    "cams": [{
        "id": "11654",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16462.jpeg",
        "name": "US-89/91 @ 1700 S / Park Ave / 600 W, LGN"
    }]
}, {
    "coord": [41.61897, -111.93127],
    "cams": [{
        "id": "9877",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14586.jpeg",
        "name": "US-89/91 @ 950 S / MP 17.18, WVL"
    }]
}, {
    "coord": [41.64504, -111.91418],
    "cams": [{
        "id": "12100",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16908.jpeg",
        "name": "US-89/91 @ Main St / SR-101 / MP 19.18, WVL"
    }]
}, {
    "coord": [41.71751, -111.83527],
    "cams": [{
        "id": "11656",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16464.jpeg",
        "name": "US-89/91 @ Main St / SR-165, LGN"
    }]
}, {
    "coord": [41.57837, -111.97333],
    "cams": [{
        "id": "12096",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16904.jpeg",
        "name": "US-89/91 @ Milepost 12.26, CA"
    }]
}, {
    "coord": [41.60226, -111.97917],
    "cams": [{
        "id": "12097",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16905.jpeg",
        "name": "US-89/91 @ Milepost 13.93, WVL"
    }]
}, {
    "coord": [41.60513, -111.97333],
    "cams": [{
        "id": "12098",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16906.jpeg",
        "name": "US-89/91 @ Milepost 14.31, WVL"
    }]
}, {
    "coord": [41.60296, -111.95694],
    "cams": [{
        "id": "12099",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16907.jpeg",
        "name": "US-89/91 @ Milepost 15.17, WVL"
    }]
}, {
    "coord": [41.55015, -111.95338],
    "cams": [{
        "id": "9876",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14585.jpeg",
        "name": "US-89/91 @ Sardine Summit / MP 10.05, BE"
    }]
}, {
    "coord": [41.889674, -111.815191],
    "cams": [{
        "id": "11624",
        "url": "http://www.udottraffic.utah.gov/1_devices/US-91_MP-38.gif",
        "name": "US-91 Liveview NB @ 8600 N / MP 37.72, CA"
    }]
}, {
    "coord": [41.99872, -111.81256],
    "cams": [{
        "id": "11256",
        "url": "http://www.udottraffic.utah.gov/1_devices/US-91-mile45-all.gif",
        "name": "US-91 Liveview NB @ UT/ID State Line / MP 45.27, CA"
    }]
}, {
    "coord": [40.64922, -111.8487],
    "cams": [{
        "id": "11467",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16276.jpeg",
        "name": "Van Winkle Expwy / SR-152 @ 5600 S, HDY"
    }]
}, {
    "coord": [41.24417, -111.97832],
    "cams": [{
        "id": "9243",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux331.jpeg",
        "name": "Wall Ave / SR-204 @ 12th St / SR-39, OGD"
    }]
}, {
    "coord": [41.23135, -111.9789],
    "cams": [{
        "id": "12072",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16880.jpeg",
        "name": "Wall Ave / SR-204 @ 20th St / SR-104, OGD"
    }]
}, {
    "coord": [41.22087, -111.979032],
    "cams": [{
        "id": "12337",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17136.jpeg",
        "name": "Wall Ave / SR-204 @ 25th St, OGD"
    }]
}, {
    "coord": [41.21048, -111.97951],
    "cams": [{
        "id": "12338",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17137.jpeg",
        "name": "Wall Ave / SR-204 @ 30th St / SR-79, OGD"
    }]
}, {
    "coord": [41.20819, -111.97917],
    "cams": [{
        "id": "9128",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux318.jpeg",
        "name": "Wall Ave / SR-204 @ 31st St / SR-79, OGD"
    }]
}, {
    "coord": [40.60957, -111.79214],
    "cams": [{
        "id": "11798",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16606.jpeg",
        "name": "Wasatch Blvd / 3650 E / SR-210 @ 7800 S / Bengal Blvd / Honeywood Cove Dr, CWH"
    }]
}, {
    "coord": [40.61965, -111.78925],
    "cams": [{
        "id": "9896",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14605.jpeg",
        "name": "Wasatch Blvd / SR-190/SR-210 @ Big Cottonwood Canyon Rd / Fort Union Blvd / SR-190, CWH"
    }]
}, {
    "coord": [41.25911, -111.96974],
    "cams": [{
        "id": "12046",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16854.jpeg",
        "name": "Washington Blvd / Harrisville Rd / US-89 @ 2nd St / Washington Blvd / SR-235, OGD"
    }]
}, {
    "coord": [41.30571, -111.96869],
    "cams": [{
        "id": "10293",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15002.jpeg",
        "name": "Washington Blvd / SR-235 @ 2600 N / SR-134, NOG"
    }]
}, {
    "coord": [41.24422, -111.96995],
    "cams": [{
        "id": "9632",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux430.jpeg",
        "name": "Washington Blvd / US-89 @ 12th St / SR-39, OGD"
    }]
}, {
    "coord": [41.231, -111.9705],
    "cams": [{
        "id": "12073",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16881.jpeg",
        "name": "Washington Blvd / US-89 @ 20th St, OGD"
    }]
}, {
    "coord": [41.22276, -111.97038],
    "cams": [{
        "id": "9407",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux427.jpeg",
        "name": "Washington Blvd / US-89 @ 24th St / SR-53, OGD"
    }]
}, {
    "coord": [41.21448, -111.97086],
    "cams": [{
        "id": "12339",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17138.jpeg",
        "name": "Washington Blvd / US-89 @ 28th St, OGD"
    }]
}, {
    "coord": [41.21037, -111.97098],
    "cams": [{
        "id": "12074",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16882.jpeg",
        "name": "Washington Blvd / US-89 @ 30th St / SR-79, OGD"
    }]
}, {
    "coord": [41.20804, -111.97096],
    "cams": [{
        "id": "12340",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17139.jpeg",
        "name": "Washington Blvd / US-89 @ 31st St / SR-79, OGD"
    }]
}, {
    "coord": [41.19053, -111.97117],
    "cams": [{
        "id": "9633",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux431.jpeg",
        "name": "Washington Blvd / US-89 @ 40th St / Chimes View Dr, SOG"
    }]
}, {
    "coord": [41.17036, -111.96869],
    "cams": [{
        "id": "12075",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16883.jpeg",
        "name": "Washington Blvd / US-89 @ Adams Ave Pkwy, OGD"
    }]
}, {
    "coord": [41.2005, -111.97105],
    "cams": [{
        "id": "9406",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux426.jpeg",
        "name": "Washington Blvd / US-89 @ Riverdale Rd / SR-26, OGD"
    }]
}, {
    "coord": [37.10369, -113.49967],
    "cams": [{
        "id": "11755",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16563.jpeg",
        "name": "Washington Fields Rd @ 2000 S, WAS"
    }]
}, {
    "coord": [37.11707, -113.50222],
    "cams": [{
        "id": "11906",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16714.jpeg",
        "name": "Washington Fields Rd @ Industrial Rd, WAS"
    }]
}, {
    "coord": [37.10857, -113.50024],
    "cams": [{
        "id": "11712",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16520.jpeg",
        "name": "Washington Fields Rd @ Washington Dam Rd, WAS"
    }]
}, {
    "coord": [37.198167, -112.991262],
    "cams": [{
        "id": "12194",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17002.jpeg",
        "name": "Zion Park Blvd / SR-9 @ 200 S, SDL"
    }]
}, {
    "coord": [37.166696, -113.01348],
    "cams": [{
        "id": "12192",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17000.jpeg",
        "name": "Zion Park Blvd / SR-9 @ 2400 S, SDL"
    }]
}, {
    "coord": [37.193926, -112.993068],
    "cams": [{
        "id": "12193",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17001.jpeg",
        "name": "Zion Park Blvd / SR-9 @ Lion Blvd, SDL"
    }]
}, {
    "coord": [37.177044, -113.009142],
    "cams": [{
        "id": "12191",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16999.jpeg",
        "name": "Zion Park Blvd / SR-9 @ Quail Ridge Rd, SDL"
    }]
}, {
    "coord": [37.10654, -113.57482],
    "cams": [{
        "id": "10215",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14924.jpeg",
        "name": "100 S @ 400 E / Flood St, STG"
    }]
}, {
    "coord": [37.106321, -113.568354],
    "cams": [{
        "id": "11524",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16333.jpeg",
        "name": "100 S @ 700 E, STG"
    }]
}, {
    "coord": [37.12353, -113.52066],
    "cams": [{
        "id": "11536",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16345.jpeg",
        "name": "3050 E @ 850 N, STG"
    }]
}, {
    "coord": [37.116679, -113.520914],
    "cams": [{
        "id": "11911",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16719.jpeg",
        "name": "3050 E @ Deseret Dr / 450 N, STG"
    }]
}, {
    "coord": [37.09622, -113.57484],
    "cams": [{
        "id": "10218",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14927.jpeg",
        "name": "700 S @ 400 E / Flood St, STG"
    }]
}, {
    "coord": [37.08159, -113.58143],
    "cams": [{
        "id": "10281",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14990.jpeg",
        "name": "Bluff St / Riverside Dr / SR-18 @ Sunland Dr / Convention Center Dr, STG"
    }]
}, {
    "coord": [37.1167, -113.59679],
    "cams": [{
        "id": "10210",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14919.jpeg",
        "name": "Bluff St / SR-18 @ 500 N, STG"
    }]
}, {
    "coord": [37.09632, -113.58695],
    "cams": [{
        "id": "10278",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14987.jpeg",
        "name": "Bluff St / SR-18 @ 700 S, STG"
    }]
}, {
    "coord": [37.08685, -113.58471],
    "cams": [{
        "id": "10280",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14989.jpeg",
        "name": "Bluff St / SR-18 @ Main St / Black Ridge Dr / Hilton Dr, STG"
    }]
}, {
    "coord": [37.10989, -113.59381],
    "cams": [{
        "id": "10206",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14915.jpeg",
        "name": "Bluff St / SR-18 @ St George Blvd / SR-34, STG"
    }]
}, {
    "coord": [37.12447, -113.60046],
    "cams": [{
        "id": "10211",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14920.jpeg",
        "name": "Bluff St / SR-18 @ Sunset Blvd / SR-8, STG"
    }]
}, {
    "coord": [37.080802, -113.604173],
    "cams": [{
        "id": "11720",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16528.jpeg",
        "name": "Dixie Dr @ 1600 S, STG"
    }]
}, {
    "coord": [37.07616, -113.59707],
    "cams": [{
        "id": "11526",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16335.jpeg",
        "name": "Dixie Dr @ 600 W, STG"
    }]
}, {
    "coord": [37.09842, -113.61982],
    "cams": [{
        "id": "11528",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16337.jpeg",
        "name": "Dixie Dr @ Valley View Dr, STG"
    }]
}, {
    "coord": [37.094059, -113.545147],
    "cams": [{
        "id": "12024",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16832.jpeg",
        "name": "Foremaster Dr @ Five Sisters Dr, STG"
    }]
}, {
    "coord": [37.10978, -113.55661],
    "cams": [{
        "id": "11362",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16171.jpeg",
        "name": "I-15 DDI NB @ St George Blvd / SR-34 / MP 8.41, STG"
    }]
}, {
    "coord": [37.10976, -113.55902],
    "cams": [{
        "id": "11361",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16170.jpeg",
        "name": "I-15 DDI SB @ St George Blvd / SR-34 / MP 8.41, STG"
    }]
}, {
    "coord": [37.10607, -113.55897],
    "cams": [{
        "id": "10144",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14853.jpeg",
        "name": "I-15 NB @ 100 S / MP 8.41, STG"
    }]
}, {
    "coord": [37.08839, -113.57753],
    "cams": [{
        "id": "10147",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14856.jpeg",
        "name": "I-15 NB @ 1160 S / MP 6.77, STG"
    }]
}, {
    "coord": [37.11753, -113.54751],
    "cams": [{
        "id": "10158",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14867.jpeg",
        "name": "I-15 NB @ 1680 E / MP 9.47, STG"
    }]
}, {
    "coord": [37.12212, -113.53662],
    "cams": [{
        "id": "10159",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14868.jpeg",
        "name": "I-15 NB @ 2100 E / MP 9.97, STG"
    }]
}, {
    "coord": [37.12411, -113.53215],
    "cams": [{
        "id": "10160",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14869.jpeg",
        "name": "I-15 NB @ 2450 E / MP 10.43, STG"
    }]
}, {
    "coord": [37.10055, -113.56133],
    "cams": [{
        "id": "10145",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14854.jpeg",
        "name": "I-15 NB @ 450 S / MP 8, STG"
    }]
}, {
    "coord": [37.09641, -113.56486],
    "cams": [{
        "id": "10146",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14855.jpeg",
        "name": "I-15 NB @ 700 S / MP 7.65, STG"
    }]
}, {
    "coord": [37.11476, -113.55342],
    "cams": [{
        "id": "10157",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14866.jpeg",
        "name": "I-15 NB @ Eastridge Dr / MP 9.08, STG"
    }]
}, {
    "coord": [37.06869, -113.58383],
    "cams": [{
        "id": "10148",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14857.jpeg",
        "name": "I-15 NB @ Virgin River / MP 5.3, STG"
    }]
}, {
    "coord": [37.08421, -113.583],
    "cams": [{
        "id": "10279",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14988.jpeg",
        "name": "I-15 SB @ Bluff St / SR-18 / MP 6.37, STG"
    }]
}, {
    "coord": [37.07493, -113.58531],
    "cams": [{
        "id": "11009",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15818.jpeg",
        "name": "I-15 SB @ Dixie Dr / MP 5.72, STG"
    }]
}, {
    "coord": [37.10662, -113.58318],
    "cams": [{
        "id": "11525",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16334.jpeg",
        "name": "Main St @ 100 S, STG"
    }]
}, {
    "coord": [37.09621, -113.58358],
    "cams": [{
        "id": "11527",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16336.jpeg",
        "name": "Main St @ 700 S, STG"
    }]
}, {
    "coord": [37.09595, -113.52274],
    "cams": [{
        "id": "11715",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16523.jpeg",
        "name": "Mall Dr / Merril Rd / 2600 S @ Sandia Rd / 3000 E, STG"
    }]
}, {
    "coord": [37.1271, -113.5238],
    "cams": [{
        "id": "10214",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14923.jpeg",
        "name": "Red Cliff Dr / Telegraph St @ Green Spring Dr, WAS"
    }]
}, {
    "coord": [37.11797, -113.54569],
    "cams": [{
        "id": "11819",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16627.jpeg",
        "name": "Red Cliffs Dr @ Crossover St, STG"
    }]
}, {
    "coord": [37.12951, -113.526],
    "cams": [{
        "id": "10213",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14922.jpeg",
        "name": "Red Hills Pkwy / Buena Vista Dr @ Green Spring Dr, WAS"
    }]
}, {
    "coord": [37.11223, -113.5621],
    "cams": [{
        "id": "10219",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14928.jpeg",
        "name": "Red Hills Pkwy @ 1000 E, STG"
    }]
}, {
    "coord": [37.11902, -113.54672],
    "cams": [{
        "id": "11820",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16628.jpeg",
        "name": "Red Hills Pkwy @ Crossover St, STG"
    }]
}, {
    "coord": [37.11761, -113.58183],
    "cams": [{
        "id": "11535",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16344.jpeg",
        "name": "Red Hills Pkwy @ Skyline Dr / 200 E, STG"
    }]
}, {
    "coord": [37.08558, -113.55596],
    "cams": [{
        "id": "10382",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15091.jpeg",
        "name": "River Rd @ 1450 S, STG"
    }]
}, {
    "coord": [37.06673, -113.54865],
    "cams": [{
        "id": "11531",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16340.jpeg",
        "name": "River Rd @ 2450 S, STG"
    }]
}, {
    "coord": [37.09616, -113.55726],
    "cams": [{
        "id": "10216",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14925.jpeg",
        "name": "River Rd @ 700 S / Foremaster Dr, STG"
    }]
}, {
    "coord": [37.07479, -113.55371],
    "cams": [{
        "id": "11532",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16341.jpeg",
        "name": "River Rd @ Fort Pierce Dr, STG"
    }]
}, {
    "coord": [37.08872, -113.55705],
    "cams": [{
        "id": "10217",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14926.jpeg",
        "name": "River Rd @ Riverside Dr, STG"
    }]
}, {
    "coord": [37.104208, -113.530233],
    "cams": [{
        "id": "12265",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17064.jpeg",
        "name": "Riverside Dr @ 2450 E, STG"
    }]
}, {
    "coord": [37.10001, -113.5371],
    "cams": [{
        "id": "11714",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16522.jpeg",
        "name": "Riverside Dr @ Mall Dr, STG"
    }]
}, {
    "coord": [37.10978, -113.5621],
    "cams": [{
        "id": "10205",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14914.jpeg",
        "name": "St George Blvd / SR-34 @ 1000 E, STG"
    }]
}, {
    "coord": [37.10966, -113.57478],
    "cams": [{
        "id": "9810",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14520.jpeg",
        "name": "St George Blvd / SR-34 @ 400 E, STG"
    }]
}, {
    "coord": [37.10966, -113.56845],
    "cams": [{
        "id": "10204",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14913.jpeg",
        "name": "St George Blvd / SR-34 @ 700 E, STG"
    }]
}, {
    "coord": [37.10978, -113.58329],
    "cams": [{
        "id": "10209",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14918.jpeg",
        "name": "St George Blvd / SR-34 @ Main St, STG"
    }]
}, {
    "coord": [37.10963, -113.55469],
    "cams": [{
        "id": "10208",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14917.jpeg",
        "name": "St George Blvd / SR-34 @ River Rd / Red Cliffs Dr, STG"
    }]
}, {
    "coord": [37.12272, -113.62397],
    "cams": [{
        "id": "11533",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16342.jpeg",
        "name": "Sunset Blvd / SR-8 @ Dixie Dr / Dixie Downs Rd, STG"
    }]
}, {
    "coord": [37.12461, -113.60257],
    "cams": [{
        "id": "10383",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15092.jpeg",
        "name": "Sunset Blvd / SR-8 @ Valley View Dr, STG"
    }]
}, {
    "coord": [37.1226, -113.61628],
    "cams": [{
        "id": "10384",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15093.jpeg",
        "name": "Sunset Blvd / SR-8 @ Westridge Dr, STG"
    }]
}, {
    "coord": [37.10369, -113.49967],
    "cams": [{
        "id": "11755",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16563.jpeg",
        "name": "Washington Fields Rd @ 2000 S, WAS"
    }]
}, {
    "coord": [37.11707, -113.50222],
    "cams": [{
        "id": "11906",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16714.jpeg",
        "name": "Washington Fields Rd @ Industrial Rd, WAS"
    }]
}, {
    "coord": [37.10857, -113.50024],
    "cams": [{
        "id": "11712",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16520.jpeg",
        "name": "Washington Fields Rd @ Washington Dam Rd, WAS"
    }]
}, {
    "coord": [40.27867, -111.72064],
    "cams": [{
        "id": "11355",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16164.jpg",
        "name": "1200 W / College Dr @ UVU Event Center Dr / 1000 S, ORM"
    }]
}, {
    "coord": [40.28992, -111.72414],
    "cams": [{
        "id": "10027",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14736.jpeg",
        "name": "1200 W @ 400 S, ORM"
    }]
}, {
    "coord": [40.52678, -111.88629],
    "cams": [{
        "id": "10678",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15487.jpeg",
        "name": "12300 S / SR-71 @ 150 E, DPR"
    }]
}, {
    "coord": [40.52656, -111.89895],
    "cams": [{
        "id": "10575",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15384.jpeg",
        "name": "12300 S / SR-71 @ 265 W, DPR"
    }]
}, {
    "coord": [40.52698, -111.87187],
    "cams": [{
        "id": "304",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux304.jpeg",
        "name": "12300 S / SR-71 @ 700 E / SR-71, DPR"
    }]
}, {
    "coord": [40.52263, -112.01128],
    "cams": [{
        "id": "11967",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16775.jpeg",
        "name": "12600 S / Herriman Blvd @ Main St / 5040 W, HRR"
    }]
}, {
    "coord": [40.5225, -111.95755],
    "cams": [{
        "id": "11827",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16635.jpeg",
        "name": "12600 S / SR-71 @ 2700 W / Silverwolf Blvd, RVT"
    }]
}, {
    "coord": [40.52209, -111.9899],
    "cams": [{
        "id": "11512",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16321.jpeg",
        "name": "12600 S @ 4150 W, RVT"
    }]
}, {
    "coord": [40.52228, -111.9999],
    "cams": [{
        "id": "11026",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15835.jpeg",
        "name": "12600 S @ Legacy Ranch Blvd / 4570 W, RVT"
    }]
}, {
    "coord": [40.482224, -111.896964],
    "cams": [{
        "id": "11638",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16447.jpeg",
        "name": "14600 S / Highland Dr / SR-140 @ Minuteman Dr, DPR"
    }]
}, {
    "coord": [40.48544, -111.90034],
    "cams": [{
        "id": "11507",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16316.jpeg",
        "name": "14600 S / SR-140 @ Pony Express Dr / SR-287, DPR"
    }]
}, {
    "coord": [40.32643, -111.68631],
    "cams": [{
        "id": "9818",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14528.jpeg",
        "name": "1600 N @ 400 E, ORM"
    }]
}, {
    "coord": [40.32642, -111.71526],
    "cams": [{
        "id": "9816",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14526.jpeg",
        "name": "1600 N @ 800 W, ORM"
    }]
}, {
    "coord": [40.32679, -111.69664],
    "cams": [{
        "id": "9817",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14527.jpeg",
        "name": "1600 N @ Main St, ORM"
    }]
}, {
    "coord": [40.32633, -111.72483],
    "cams": [{
        "id": "9815",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14525.jpeg",
        "name": "1600 N ORM / 600 S LDN @ 1200 W ORM / 400 W, LDN"
    }]
}, {
    "coord": [40.41332, -111.91662],
    "cams": [{
        "id": "11247",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-85-MP2-all.gif",
        "name": "2100 N / SR-194 Liveview WB @ Milepost 2.6, LHI"
    }]
}, {
    "coord": [40.41329, -111.88696],
    "cams": [{
        "id": "10721",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15530.jpeg",
        "name": "2100 N / SR-194 WB @ 2300 W, LHI"
    }]
}, {
    "coord": [40.4131, -111.90705],
    "cams": [{
        "id": "12316",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17115.jpeg",
        "name": "2100 N / SR-194 WB @ 3600 W, LHI"
    }]
}, {
    "coord": [40.26336, -111.64741],
    "cams": [{
        "id": "9535",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14302.jpeg",
        "name": "2200 N @ Timpview Dr / 650 E, PVO"
    }]
}, {
    "coord": [40.26372, -111.65597],
    "cams": [{
        "id": "9536",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14303.jpeg",
        "name": "2230 N @ Canyon Rd, PVO"
    }]
}, {
    "coord": [40.26311, -111.66196],
    "cams": [{
        "id": "9538",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14305.jpeg",
        "name": "2230 N @ Freedom Blvd / 200 W, PVO"
    }]
}, {
    "coord": [40.22968, -111.64663],
    "cams": [{
        "id": "9508",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14275.jpeg",
        "name": "300 S / State St / US-89 @ 700 E, PVO"
    }]
}, {
    "coord": [40.22978, -111.65182],
    "cams": [{
        "id": "11838",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16646.jpeg",
        "name": "300 S / US-89 @ 400 E, PVO"
    }]
}, {
    "coord": [40.28279, -111.66307],
    "cams": [{
        "id": "9540",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14307.jpeg",
        "name": "3700 N @ 300 W, PVO"
    }]
}, {
    "coord": [40.30429, -111.72442],
    "cams": [{
        "id": "9822",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14532.jpeg",
        "name": "400 N @ 1200 W, ORM"
    }]
}, {
    "coord": [40.304583, -111.700944],
    "cams": [{
        "id": "12511",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17302.jpeg",
        "name": "400 N @ Orem Blvd, ORM"
    }]
}, {
    "coord": [40.29755, -111.66303],
    "cams": [{
        "id": "9542",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14309.jpeg",
        "name": "4800 N @ 300 W / Riverbottom Rd, PVO"
    }]
}, {
    "coord": [40.24039, -111.65507],
    "cams": [{
        "id": "12219",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17027.jpeg",
        "name": "500 N @ 200 E, PVO"
    }]
}, {
    "coord": [40.25103, -111.66764],
    "cams": [{
        "id": "9526",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14293.jpeg",
        "name": "500 W / State St / US-89 @ Cougar Blvd / Columbia Ln / 1230 N, PVO"
    }]
}, {
    "coord": [40.24041, -111.66743],
    "cams": [{
        "id": "9520",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14287.jpeg",
        "name": "500 W / US-89 @ 500 N, PVO"
    }]
}, {
    "coord": [40.24431, -111.66747],
    "cams": [{
        "id": "9525",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14292.jpeg",
        "name": "500 W / US-89 @ 800 N, PVO"
    }]
}, {
    "coord": [40.23376, -111.6675],
    "cams": [{
        "id": "9550",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14317.jpeg",
        "name": "500 W / US-89 @ Center St / SR-114, PVO"
    }]
}, {
    "coord": [40.22159, -111.66738],
    "cams": [{
        "id": "9676",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14404.jpeg",
        "name": "500 W @ 920 S, PVO"
    }]
}, {
    "coord": [40.551519, -111.872178],
    "cams": [{
        "id": "10674",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15483.jpeg",
        "name": "700 E / SR-71 @ 11000 S, SND"
    }]
}, {
    "coord": [40.5443, -111.872],
    "cams": [{
        "id": "10873",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15682.jpeg",
        "name": "700 E / SR-71 @ 11400 S, SND"
    }]
}, {
    "coord": [40.27819, -111.67607],
    "cams": [{
        "id": "10029",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14738.jpeg",
        "name": "800 E @ 1000 S, ORM"
    }]
}, {
    "coord": [40.31909, -111.67655],
    "cams": [{
        "id": "11593",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16402.jpeg",
        "name": "800 E @ 1200 N, ORM"
    }]
}, {
    "coord": [40.27494, -111.676246],
    "cams": [{
        "id": "12512",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17303.jpeg",
        "name": "800 E @ 1200 S, ORM"
    }]
}, {
    "coord": [40.28235, -111.67643],
    "cams": [{
        "id": "9830",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14540.jpeg",
        "name": "800 E @ 800 S, ORM"
    }]
}, {
    "coord": [40.31188, -111.723375],
    "cams": [{
        "id": "10566",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15375.jpeg",
        "name": "800 N / SR-52 @ 1200 W, ORM"
    }]
}, {
    "coord": [40.31193, -111.68616],
    "cams": [{
        "id": "10026",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14735.jpeg",
        "name": "800 N / SR-52 @ 400 E, ORM"
    }]
}, {
    "coord": [40.31193, -111.67648],
    "cams": [{
        "id": "9274",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux403.jpeg",
        "name": "800 N / SR-52 @ 800 E, ORM"
    }]
}, {
    "coord": [40.31197, -111.71507],
    "cams": [{
        "id": "9821",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14531.jpeg",
        "name": "800 N / SR-52 @ 800 W, ORM"
    }]
}, {
    "coord": [40.31191, -111.66492],
    "cams": [{
        "id": "11390",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16199.jpeg",
        "name": "800 N / SR-52 @ Palisade Dr / 1300 E, ORM"
    }]
}, {
    "coord": [40.28238, -111.70534],
    "cams": [{
        "id": "10028",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14737.jpeg",
        "name": "800 S @ 400 W, ORM"
    }]
}, {
    "coord": [40.282363, -111.69544],
    "cams": [{
        "id": "12514",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17305.jpeg",
        "name": "800 S @ Main St, ORM"
    }]
}, {
    "coord": [40.282354, -111.69096],
    "cams": [{
        "id": "12513",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17304.jpeg",
        "name": "800 S @ Orem Blvd, ORM"
    }]
}, {
    "coord": [40.24521, -111.69035],
    "cams": [{
        "id": "10497",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15306.jpeg",
        "name": "820 N @ Independence Ave, PVO"
    }]
}, {
    "coord": [40.24298, -111.6431],
    "cams": [{
        "id": "9621",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14383.jpeg",
        "name": "900 E @ 700 N, PVO"
    }]
}, {
    "coord": [40.24975, -111.6431],
    "cams": [{
        "id": "9532",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14299.jpeg",
        "name": "900 E @ Birch Ln / Heritage Dr / 1200 N, PVO"
    }]
}, {
    "coord": [40.23396, -111.64324],
    "cams": [{
        "id": "9509",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14276.jpeg",
        "name": "900 E @ Center St, PVO"
    }]
}, {
    "coord": [40.26001, -111.64354],
    "cams": [{
        "id": "9534",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14301.jpeg",
        "name": "900 E @ Temple View Dr, PVO"
    }]
}, {
    "coord": [40.25666, -111.64326],
    "cams": [{
        "id": "9533",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14300.jpeg",
        "name": "900 E @ University Pkwy, PVO"
    }]
}, {
    "coord": [40.500803, -111.885112],
    "cams": [{
        "id": "11951",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16759.jpeg",
        "name": "Bangerter Hwy / 200 E / SR-154 @ 13800 S, DPR"
    }]
}, {
    "coord": [40.54756, -111.98294],
    "cams": [{
        "id": "12447",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17238.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 11200 S, SJO"
    }]
}, {
    "coord": [40.544316, -111.984498],
    "cams": [{
        "id": "9769",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14479.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 11400 S, SJO"
    }]
}, {
    "coord": [40.54127, -111.98464],
    "cams": [{
        "id": "12405",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17204.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 11500 S, SJO"
    }]
}, {
    "coord": [40.52221, -111.98412],
    "cams": [{
        "id": "306",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux306.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 12600 S / SR-71, RVT"
    }]
}, {
    "coord": [40.50772, -111.98259],
    "cams": [{
        "id": "9768",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14478.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 13400 S, RVT"
    }]
}, {
    "coord": [40.50413, -111.89669],
    "cams": [{
        "id": "11881",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16689.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 200 W / MP 0.78, DPR"
    }]
}, {
    "coord": [40.50039, -111.95768],
    "cams": [{
        "id": "9767",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14477.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 2700 W, BLF"
    }]
}, {
    "coord": [40.50402, -111.90076],
    "cams": [{
        "id": "11880",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16688.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 300 W / MP 1.0, DPR"
    }]
}, {
    "coord": [40.50235, -111.90468],
    "cams": [{
        "id": "11879",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16687.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 500 W / MP 1.25, DPR"
    }]
}, {
    "coord": [40.501, -111.90848],
    "cams": [{
        "id": "11878",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16686.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 600 W / MP 1.45, DPR"
    }]
}, {
    "coord": [40.4992, -111.91008],
    "cams": [{
        "id": "11877",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16685.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 700 W / MP 1.6, DPR"
    }]
}, {
    "coord": [40.49681, -111.91378],
    "cams": [{
        "id": "11876",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16684.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 800 W / MP 1.86, DPR"
    }]
}, {
    "coord": [40.5003, -111.93915],
    "cams": [{
        "id": "9766",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14476.jpeg",
        "name": "Bangerter Hwy / SR-154 EB @ Redwood Rd / SR-68, BLF"
    }]
}, {
    "coord": [40.50104, -111.93834],
    "cams": [{
        "id": "11603",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16412.jpeg",
        "name": "Bangerter Hwy / SR-154 WB @ Redwood Rd / SR-68, RVT"
    }]
}, {
    "coord": [40.29326, -111.65303],
    "cams": [{
        "id": "9778",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14488.jpeg",
        "name": "Canyon Rd @ Foothill Dr / 4525 N, PVO"
    }]
}, {
    "coord": [40.23388, -111.68744],
    "cams": [{
        "id": "10567",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15376.jpeg",
        "name": "Center St / SR-114 @ 1600 W, PVO"
    }]
}, {
    "coord": [40.23377, -111.67449],
    "cams": [{
        "id": "9519",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14286.jpeg",
        "name": "Center St / SR-114 @ 900 W, PVO"
    }]
}, {
    "coord": [40.29718, -111.72427],
    "cams": [{
        "id": "9312",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux413.jpeg",
        "name": "Center St @ 1200 W, ORM"
    }]
}, {
    "coord": [40.297267, -111.701323],
    "cams": [{
        "id": "12510",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17301.jpeg",
        "name": "Center St @ 220 W / Garden Park Dr, ORM"
    }]
}, {
    "coord": [40.23365, -111.66394],
    "cams": [{
        "id": "9513",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14280.jpeg",
        "name": "Center St @ 300 W, PVO"
    }]
}, {
    "coord": [40.29708, -111.68623],
    "cams": [{
        "id": "9827",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14537.jpeg",
        "name": "Center St @ 400 E / Tiger Way, ORM"
    }]
}, {
    "coord": [40.29712, -111.7053],
    "cams": [{
        "id": "9310",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux411.jpeg",
        "name": "Center St @ 400 W, ORM"
    }]
}, {
    "coord": [40.29681, -111.6765],
    "cams": [{
        "id": "9317",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux418.jpeg",
        "name": "Center St @ 800 E, ORM"
    }]
}, {
    "coord": [40.29718, -111.71467],
    "cams": [{
        "id": "9825",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14535.jpeg",
        "name": "Center St @ 800 W, ORM"
    }]
}, {
    "coord": [40.29713, -111.69817],
    "cams": [{
        "id": "9826",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14536.jpeg",
        "name": "Center St @ Orem Blvd, ORM"
    }]
}, {
    "coord": [40.45804, -111.47188],
    "cams": [{
        "id": "11189",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15998.jpeg",
        "name": "Charleston Rd / 3600 W / SR-113 @ US-189, CHR"
    }]
}, {
    "coord": [40.25669, -111.67544],
    "cams": [{
        "id": "10109",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14818.jpeg",
        "name": "Columbia Ln @ 1700 N / 950 W, PVO"
    }]
}, {
    "coord": [40.38586, -111.9354],
    "cams": [{
        "id": "11028",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15837.jpeg",
        "name": "Cory B Wride Memorial Hwy / SR-73 @ Foothill Blvd / 800 W, SSP"
    }]
}, {
    "coord": [40.38215, -111.96428],
    "cams": [{
        "id": "11711",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16519.jpeg",
        "name": "Cory B Wride Memorial Hwy / SR-73 @ Mt Airey Dr / MP 33.86, EAG"
    }]
}, {
    "coord": [40.38068, -111.97432],
    "cams": [{
        "id": "11029",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15838.jpeg",
        "name": "Cory B Wride Memorial Hwy / SR-73 @ Ranches Pkwy, EAG"
    }]
}, {
    "coord": [40.25059, -111.66202],
    "cams": [{
        "id": "9524",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14291.jpeg",
        "name": "Cougar Blvd / 1230 N @ Freedom Blvd / 200 W, PVO"
    }]
}, {
    "coord": [40.23537, -111.66224],
    "cams": [{
        "id": "9514",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14281.jpeg",
        "name": "Freedom Blvd / 200 W @ 100 N, PVO"
    }]
}, {
    "coord": [40.23218, -111.66224],
    "cams": [{
        "id": "9512",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14279.jpeg",
        "name": "Freedom Blvd / 200 W @ 100 S, PVO"
    }]
}, {
    "coord": [40.24863, -111.66204],
    "cams": [{
        "id": "9523",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14290.jpeg",
        "name": "Freedom Blvd / 200 W @ 1100 N, PVO"
    }]
}, {
    "coord": [40.22971, -111.66222],
    "cams": [{
        "id": "9511",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14278.jpeg",
        "name": "Freedom Blvd / 200 W @ 300 S / US-89, PVO"
    }]
}, {
    "coord": [40.24042, -111.66219],
    "cams": [{
        "id": "9521",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14288.jpeg",
        "name": "Freedom Blvd / 200 W @ 500 N, PVO"
    }]
}, {
    "coord": [40.24439, -111.66209],
    "cams": [{
        "id": "9522",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14289.jpeg",
        "name": "Freedom Blvd / 200 W @ 800 N, PVO"
    }]
}, {
    "coord": [40.22184, -111.66233],
    "cams": [{
        "id": "9503",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14270.jpeg",
        "name": "Freedom Blvd / 200 W @ 920 S, PVO"
    }]
}, {
    "coord": [40.279044, -111.730578],
    "cams": [{
        "id": "9831",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14541.jpeg",
        "name": "Geneva Rd / SR-114 @ 1000 S / Plant Ln, ORM"
    }]
}, {
    "coord": [40.25206, -111.70578],
    "cams": [{
        "id": "10316",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15025.jpeg",
        "name": "Geneva Rd / SR-114 @ 1390 N, PVO"
    }]
}, {
    "coord": [40.32624, -111.737295],
    "cams": [{
        "id": "10560",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15369.jpeg",
        "name": "Geneva Rd / SR-114 @ 1600 N ORM / 600 S LDN / SR-241, LDN"
    }]
}, {
    "coord": [40.28983, -111.7339],
    "cams": [{
        "id": "9828",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14538.jpeg",
        "name": "Geneva Rd / SR-114 @ 400 S, ORM"
    }]
}, {
    "coord": [40.35075, -111.74073],
    "cams": [{
        "id": "10565",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15374.jpeg",
        "name": "Geneva Rd / SR-114 @ 700 N / SR-129, LDN"
    }]
}, {
    "coord": [40.3117, -111.73447],
    "cams": [{
        "id": "9820",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14530.jpg",
        "name": "Geneva Rd / SR-114 @ 800 N / SR-52, ORM"
    }]
}, {
    "coord": [40.28234, -111.73235],
    "cams": [{
        "id": "11882",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16690.jpeg",
        "name": "Geneva Rd / SR-114 @ 800 S / Springwater Dr, ORM"
    }]
}, {
    "coord": [40.24462, -111.69699],
    "cams": [{
        "id": "9714",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14284.jpeg",
        "name": "Geneva Rd / SR-114 @ 820 N, PVO"
    }]
}, {
    "coord": [40.23389, -111.69472],
    "cams": [{
        "id": "9515",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14282.jpeg",
        "name": "Geneva Rd / SR-114 @ Center St / SR-114, PVO"
    }]
}, {
    "coord": [40.29706, -111.73381],
    "cams": [{
        "id": "9824",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14534.jpeg",
        "name": "Geneva Rd / SR-114 @ Center St, ORM"
    }]
}, {
    "coord": [40.27514, -111.7275],
    "cams": [{
        "id": "10252",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14961.jpeg",
        "name": "Geneva Rd / SR-114 @ University Pkwy / SR-265, ORM"
    }]
}, {
    "coord": [40.33922, -111.7515],
    "cams": [{
        "id": "10895",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15704.jpeg",
        "name": "I-15 NB @ 100 N / MP 274.15, LDN"
    }]
}, {
    "coord": [40.54042, -111.89324],
    "cams": [{
        "id": "10694",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15503.jpeg",
        "name": "I-15 NB @ 11500 S / MP 292.35, DPR"
    }]
}, {
    "coord": [40.53508, -111.89215],
    "cams": [{
        "id": "9656",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux356.jpeg",
        "name": "I-15 NB @ 11900 S / MP 291.98, DPR"
    }]
}, {
    "coord": [40.40279, -111.85124],
    "cams": [{
        "id": "10306",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15015.jpeg",
        "name": "I-15 NB @ 1200 N / MP 281.15, LHI"
    }]
}, {
    "coord": [40.52727, -111.89021],
    "cams": [{
        "id": "9653",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux353.jpeg",
        "name": "I-15 NB @ 12300 S / SR-71 / MP 291.4, DPR"
    }]
}, {
    "coord": [40.49727, -111.89078],
    "cams": [{
        "id": "11721",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16529.jpeg",
        "name": "I-15 NB @ 14000 S / MP 289.34, DPR"
    }]
}, {
    "coord": [40.4866, -111.89563],
    "cams": [{
        "id": "11724",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16532.jpeg",
        "name": "I-15 NB @ 14500 S / MP 288.54, DPR"
    }]
}, {
    "coord": [40.25353, -111.69691],
    "cams": [{
        "id": "11035",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15844.jpeg",
        "name": "I-15 NB @ 1460 N / MP 267.19, PVO"
    }]
}, {
    "coord": [40.47534, -111.90533],
    "cams": [{
        "id": "11727",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16535.jpeg",
        "name": "I-15 NB @ 15200 S / MP 287.6, DPR"
    }]
}, {
    "coord": [40.4706, -111.90863],
    "cams": [{
        "id": "11728",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16536.jpeg",
        "name": "I-15 NB @ 15400 S / MP 287.23, DPR"
    }]
}, {
    "coord": [40.26702, -111.71137],
    "cams": [{
        "id": "11033",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15842.jpeg",
        "name": "I-15 NB @ 1650 S / MP 268.37, ORM"
    }]
}, {
    "coord": [40.40993, -111.86393],
    "cams": [{
        "id": "10083",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14792.jpeg",
        "name": "I-15 NB @ 1850 N / MP 282, LHI"
    }]
}, {
    "coord": [40.3344, -111.74403],
    "cams": [{
        "id": "11032",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15841.jpeg",
        "name": "I-15 NB @ 200 S / MP 273.67, LDN"
    }]
}, {
    "coord": [40.37213, -111.80333],
    "cams": [{
        "id": "10882",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15691.jpeg",
        "name": "I-15 NB @ 200 W / MP 277.71, AFK"
    }]
}, {
    "coord": [40.26107, -111.70547],
    "cams": [{
        "id": "11034",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15843.jpeg",
        "name": "I-15 NB @ 2000 S / MP 267.86, ORM"
    }]
}, {
    "coord": [40.43474, -111.89349],
    "cams": [{
        "id": "11735",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16543.jpeg",
        "name": "I-15 NB @ 3800 N / Adobe Way / MP 284.3, LHI"
    }]
}, {
    "coord": [40.43892, -111.89791],
    "cams": [{
        "id": "11734",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16542.jpeg",
        "name": "I-15 NB @ 4200 N / MP 284.65, LHI"
    }]
}, {
    "coord": [40.36146, -111.78574],
    "cams": [{
        "id": "10685",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15494.jpeg",
        "name": "I-15 NB @ 500 E / SR-180 / MP 276.5, AFK"
    }]
}, {
    "coord": [40.32887, -111.73539],
    "cams": [{
        "id": "9835",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14545.jpeg",
        "name": "I-15 NB @ 500 S / MP 273.04, LDN"
    }]
}, {
    "coord": [40.39573, -111.83944],
    "cams": [{
        "id": "10307",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15016.jpeg",
        "name": "I-15 NB @ 600 E / MP 280.3, LHI"
    }]
}, {
    "coord": [40.31198, -111.72555],
    "cams": [{
        "id": "9271",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux400.jpeg",
        "name": "I-15 NB @ 800 N / SR-52 / MP 271.7, ORM"
    }]
}, {
    "coord": [40.22174, -111.67186],
    "cams": [{
        "id": "11049",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15858.jpeg",
        "name": "I-15 NB @ 920 S / MP 264.54, PVO"
    }]
}, {
    "coord": [40.23419, -111.68448],
    "cams": [{
        "id": "11014",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15823.jpeg",
        "name": "I-15 NB @ Center St / SR-114 / MP 265.62, PVO"
    }]
}, {
    "coord": [40.19793, -111.65031],
    "cams": [{
        "id": "11054",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15863.jpeg",
        "name": "I-15 NB @ East Bay / MP 262.55, PVO"
    }]
}, {
    "coord": [40.43097, -111.89101],
    "cams": [{
        "id": "250",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux250.jpeg",
        "name": "I-15 NB @ Highland Alpine Exit / SR-92 / Timpanogos Hwy / Club House Dr / MP 284, LHI"
    }]
}, {
    "coord": [40.38856, -111.8329],
    "cams": [{
        "id": "10879",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15688.jpeg",
        "name": "I-15 NB @ Main St / SR-73 / MP 279.77, LHI"
    }]
}, {
    "coord": [40.37685, -111.81694],
    "cams": [{
        "id": "10548",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15357.jpeg",
        "name": "I-15 NB @ Pioneer Crossing / Main St / SR-145 / MP 278.58, AFK"
    }]
}, {
    "coord": [40.35042, -111.76855],
    "cams": [{
        "id": "10884",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15693.jpeg",
        "name": "I-15 NB @ Pleasant Grove Blvd / MP 275.35, PLG"
    }]
}, {
    "coord": [40.20852, -111.65896],
    "cams": [{
        "id": "9544",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14311.jpeg",
        "name": "I-15 NB @ University Ave / US-189 / 1860 S / MP 263.4, PVO"
    }]
}, {
    "coord": [40.27496, -111.71794],
    "cams": [{
        "id": "9279",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux407.jpeg",
        "name": "I-15 NB @ University Pkwy / SR-265 / MP 269.1, ORM"
    }]
}, {
    "coord": [40.55017, -111.89676],
    "cams": [{
        "id": "9654",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux357.jpeg",
        "name": "I-15 SB @ 11000 S / MP 293, SJO"
    }]
}, {
    "coord": [40.54467, -111.89566],
    "cams": [{
        "id": "10695",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15504.jpeg",
        "name": "I-15 SB @ 11400 S / MP 292.62, SJO"
    }]
}, {
    "coord": [40.52338, -111.8916],
    "cams": [{
        "id": "12403",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17202.jpeg",
        "name": "I-15 SB @ 12500 S / MP 291.17, DPR"
    }]
}, {
    "coord": [40.52223, -111.89154],
    "cams": [{
        "id": "11752",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16560.jpeg",
        "name": "I-15 SB @ 12600 S / MP 291.1, DPR"
    }]
}, {
    "coord": [40.51511, -111.89189],
    "cams": [{
        "id": "11751",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16559.jpeg",
        "name": "I-15 SB @ 13000 S / MP 290.6, DPR"
    }]
}, {
    "coord": [40.50782, -111.89181],
    "cams": [{
        "id": "11750",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16558.jpeg",
        "name": "I-15 SB @ 13400 S / MP 290.08, DPR"
    }]
}, {
    "coord": [40.49354, -111.89156],
    "cams": [{
        "id": "11722",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16530.jpeg",
        "name": "I-15 SB @ 14200 S / MP 289.09, DPR"
    }]
}, {
    "coord": [40.49036, -111.89306],
    "cams": [{
        "id": "11723",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16531.jpeg",
        "name": "I-15 SB @ 14300 S / MP 288.84, DPR"
    }]
}, {
    "coord": [40.483631, -111.899755],
    "cams": [{
        "id": "11725",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16533.jpeg",
        "name": "I-15 SB @ 14600 S / Highland Dr / SR-140 / MP 288.3, BLF"
    }]
}, {
    "coord": [40.47961, -111.90345],
    "cams": [{
        "id": "11726",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16534.jpeg",
        "name": "I-15 SB @ 15000 S / MP 287.91, BLF"
    }]
}, {
    "coord": [40.46308, -111.91422],
    "cams": [{
        "id": "11729",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16537.jpeg",
        "name": "I-15 SB @ 15800 S / MP 286.64, BLF"
    }]
}, {
    "coord": [40.32616, -111.73338],
    "cams": [{
        "id": "10946",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15755.jpeg",
        "name": "I-15 SB @ 1600 N / SR-241 / MP 272.82, ORM"
    }]
}, {
    "coord": [40.45787, -111.91483],
    "cams": [{
        "id": "11730",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16538.jpeg",
        "name": "I-15 SB @ 16200 S / MP 286.3, BLF"
    }]
}, {
    "coord": [40.23076, -111.68214],
    "cams": [{
        "id": "11048",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15857.jpeg",
        "name": "I-15 SB @ 200 S / MP 265.36, PVO"
    }]
}, {
    "coord": [40.41791, -111.87473],
    "cams": [{
        "id": "10305",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15014.jpeg",
        "name": "I-15 SB @ 2350 N / MP 282.7, LHI"
    }]
}, {
    "coord": [40.4231, -111.88139],
    "cams": [{
        "id": "259",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux259.jpeg",
        "name": "I-15 SB @ 2750 N / MP 283.2, LHI"
    }]
}, {
    "coord": [40.34263, -111.75853],
    "cams": [{
        "id": "10102",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14811.jpeg",
        "name": "I-15 SB @ 300 N / MP 274.61, LDN"
    }]
}, {
    "coord": [40.38317, -111.83051],
    "cams": [{
        "id": "10881",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15690.jpeg",
        "name": "I-15 SB @ 400 S / MP 279.32, LHI"
    }]
}, {
    "coord": [40.44336, -111.90501],
    "cams": [{
        "id": "11733",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16541.jpeg",
        "name": "I-15 SB @ 4600 N / MP 285.12, LHI"
    }]
}, {
    "coord": [40.44583, -111.90849],
    "cams": [{
        "id": "11732",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16540.jpeg",
        "name": "I-15 SB @ 4800 N / MP 285.37, LHI"
    }]
}, {
    "coord": [40.30824, -111.72626],
    "cams": [{
        "id": "10894",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15703.jpeg",
        "name": "I-15 SB @ 600 N / MP 271.44, ORM"
    }]
}, {
    "coord": [40.28539, -111.72604],
    "cams": [{
        "id": "9902",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14611.jpeg",
        "name": "I-15 SB @ 650 S / MP 269.87, ORM"
    }]
}, {
    "coord": [40.24415, -111.69552],
    "cams": [{
        "id": "10947",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15756.jpeg",
        "name": "I-15 SB @ 820 N / MP 266.54, PVO"
    }]
}, {
    "coord": [40.5039, -111.89173],
    "cams": [{
        "id": "9700",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14408.jpeg",
        "name": "I-15 SB @ Bangerter Hwy / SR-154 / MP 289.83, DPR"
    }]
}, {
    "coord": [40.29678, -111.72619],
    "cams": [{
        "id": "10926",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15735.jpeg",
        "name": "I-15 SB @ Center St / MP 270.67, ORM"
    }]
}, {
    "coord": [40.3869, -111.83324],
    "cams": [{
        "id": "10885",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15694.jpeg",
        "name": "I-15 SB @ Main St / SR-73 / MP 279.64, LHI"
    }]
}, {
    "coord": [40.37689, -111.82063],
    "cams": [{
        "id": "10549",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15358.jpeg",
        "name": "I-15 SB @ Pioneer Crossing / Main St / SR-145 / MP 278.6, AFK"
    }]
}, {
    "coord": [40.45056, -111.91364],
    "cams": [{
        "id": "11731",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16539.jpeg",
        "name": "I-15 SB @ Point of the Mountain / MP 285.78, UT"
    }]
}, {
    "coord": [40.2028, -111.65506],
    "cams": [{
        "id": "11050",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15859.jpeg",
        "name": "I-15 SB @ University Ave / 2260 S / MP 263, PVO"
    }]
}, {
    "coord": [40.27566, -111.71985],
    "cams": [{
        "id": "11038",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15847.jpeg",
        "name": "I-15 SB @ University Pkwy / SR-265 / MP 269.12, ORM"
    }]
}, {
    "coord": [40.20711, -111.6668],
    "cams": [{
        "id": "11857",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16665.jpeg",
        "name": "Lakeview Pkwy @ 500 W, PVO"
    }]
}, {
    "coord": [40.37687, -111.81403],
    "cams": [{
        "id": "10546",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15355.jpeg",
        "name": "Main St / SR-145 @ Kawakami Dr / 600 W, AFK"
    }]
}, {
    "coord": [40.50635, -111.41349],
    "cams": [{
        "id": "10636",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15445.jpeg",
        "name": "Main St / US-40 @ 100 S / MP 17, HBR"
    }]
}, {
    "coord": [40.51418, -111.41339],
    "cams": [{
        "id": "10637",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15446.jpeg",
        "name": "Main St / US-40 @ 500 N / MP 16.4, HBR"
    }]
}, {
    "coord": [40.49306, -111.41371],
    "cams": [{
        "id": "10628",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15437.jpeg",
        "name": "Main St / US-40 @ US-189 / 1200 S / MP 17.94, HBR"
    }]
}, {
    "coord": [40.37707, -111.81138],
    "cams": [{
        "id": "10249",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14958.jpeg",
        "name": "Main St / US-89 / SR-145 @ State St / US-89, AFK"
    }]
}, {
    "coord": [40.37687, -111.79588],
    "cams": [{
        "id": "10556",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15365.jpeg",
        "name": "Main St / US-89 @ 100 E / Alpine Hwy / SR-74, AFK"
    }]
}, {
    "coord": [40.52519, -111.8888],
    "cams": [{
        "id": "10676",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15485.jpeg",
        "name": "Minuteman Dr @ 12450 S, DPR"
    }]
}, {
    "coord": [40.52259, -112.00472],
    "cams": [{
        "id": "11016",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15825.jpeg",
        "name": "Mountain View / SR-85 NB @ 12600 S, RVT"
    }]
}, {
    "coord": [40.50799, -112.00333],
    "cams": [{
        "id": "11017",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15826.jpeg",
        "name": "Mountain View / SR-85 NB @ 13400 S, RVT"
    }]
}, {
    "coord": [40.397497, -111.938323],
    "cams": [{
        "id": "12451",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17242.jpeg",
        "name": "Mountain View / SR-85 NB @ Harvest Hills Blvd, SSP"
    }]
}, {
    "coord": [40.46258, -111.95413],
    "cams": [{
        "id": "11018",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15827.jpeg",
        "name": "Mountain View / SR-85 NB @ Porter Rockwell Blvd, HRR"
    }]
}, {
    "coord": [40.55163, -112.02893],
    "cams": [{
        "id": "11756",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16564.jpeg",
        "name": "Mountain View / SR-85 NB @ South Jordan Pkwy / 11000 S, SJO"
    }]
}, {
    "coord": [40.48607, -111.99415],
    "cams": [{
        "id": "11357",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-85%20Juniper-all.gif",
        "name": "Mountain View / SR-85 RWIS NB @ 14600 S / Juniper, HRR"
    }]
}, {
    "coord": [40.54271, -112.02196],
    "cams": [{
        "id": "11022",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15831.jpeg",
        "name": "Mountain View / SR-85 SB @ 11450 S, SJO"
    }]
}, {
    "coord": [40.52938, -112.00926],
    "cams": [{
        "id": "11019",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15828.jpeg",
        "name": "Mountain View / SR-85 SB @ 12200 S, HRR"
    }]
}, {
    "coord": [40.51215, -112.00532],
    "cams": [{
        "id": "11025",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15834.jpeg",
        "name": "Mountain View / SR-85 SB @ 13200 S, RVT"
    }]
}, {
    "coord": [40.53879, -112.01811],
    "cams": [{
        "id": "11020",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15829.jpeg",
        "name": "Mountain View / SR-85 SB @ Daybreak Pkwy, SJO"
    }]
}, {
    "coord": [40.54445, -112.02368],
    "cams": [{
        "id": "11868",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16676.jpeg",
        "name": "Mountain View / SR-85 SB @ Lake Ave / 11400 S, SJO"
    }]
}, {
    "coord": [40.38313, -111.76909],
    "cams": [{
        "id": "11383",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16192.jpeg",
        "name": "North County Blvd / 1100 E / SR-129 @ 300 N, AFK"
    }]
}, {
    "coord": [40.39184, -111.7692],
    "cams": [{
        "id": "11384",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16193.jpeg",
        "name": "North County Blvd / 1100 E / SR-129 @ 700 N, AFK"
    }]
}, {
    "coord": [40.37567, -111.76914],
    "cams": [{
        "id": "11382",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16191.jpeg",
        "name": "North County Blvd / 1100 E, AFK / 2000 W, PLG / SR-129 @ 50 S, AFK / 1100 N, PLG, AFK"
    }]
}, {
    "coord": [40.41555, -111.77339],
    "cams": [{
        "id": "11385",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16194.jpeg",
        "name": "North County Blvd / 4800 W / SR-129 @ Cedar Hills Dr / 10100 N, HLD"
    }]
}, {
    "coord": [40.39898, -111.77348],
    "cams": [{
        "id": "11779",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16587.jpeg",
        "name": "North County Blvd / 900 E / SR-129 @ 1100 N, AFK"
    }]
}, {
    "coord": [40.28981, -111.69456],
    "cams": [{
        "id": "9829",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14539.jpeg",
        "name": "Orem Blvd @ 400 S, ORM"
    }]
}, {
    "coord": [40.37685, -111.82497],
    "cams": [{
        "id": "10547",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15356.jpeg",
        "name": "Pioneer Crossing / SR-145 @ 1020 W, AFK"
    }]
}, {
    "coord": [40.37271, -111.91063],
    "cams": [{
        "id": "10537",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15346.jpeg",
        "name": "Pioneer Crossing / SR-145 @ 10600 W, SSP"
    }]
}, {
    "coord": [40.374489, -111.867036],
    "cams": [{
        "id": "10541",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15350.jpeg",
        "name": "Pioneer Crossing / SR-145 @ 1100 W, LHI"
    }]
}, {
    "coord": [40.3759, -111.87675],
    "cams": [{
        "id": "10539",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15348.jpeg",
        "name": "Pioneer Crossing / SR-145 @ 1700 W, LHI"
    }]
}, {
    "coord": [40.376079, -111.886464],
    "cams": [{
        "id": "10538",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15347.jpeg",
        "name": "Pioneer Crossing / SR-145 @ 2300 W / Saratoga Rd, LHI"
    }]
}, {
    "coord": [40.373606, -111.844429],
    "cams": [{
        "id": "10543",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15352.jpeg",
        "name": "Pioneer Crossing / SR-145 @ 300 E, LHI"
    }]
}, {
    "coord": [40.373606, -111.857234],
    "cams": [{
        "id": "10542",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15351.jpeg",
        "name": "Pioneer Crossing / SR-145 @ 500 W, LHI"
    }]
}, {
    "coord": [40.37308, -111.84917],
    "cams": [{
        "id": "10619",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15428.jpeg",
        "name": "Pioneer Crossing / SR-145 @ Center St, LHI"
    }]
}, {
    "coord": [40.3772, -111.83312],
    "cams": [{
        "id": "10545",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15354.jpeg",
        "name": "Pioneer Crossing / SR-145 @ Mill Pond Rd, LHI"
    }]
}, {
    "coord": [40.36021, -111.75986],
    "cams": [{
        "id": "11391",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16200.jpeg",
        "name": "Pleasant Grove Blvd @ 1300 W / Proctor Ln, PLG"
    }]
}, {
    "coord": [40.35386, -111.76439],
    "cams": [{
        "id": "10558",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15367.jpeg",
        "name": "Pleasant Grove Blvd @ 2000 W / North County Blvd, PLG / 700 N, LDN / SR-129, PLG"
    }]
}, {
    "coord": [40.4065, -111.9381],
    "cams": [{
        "id": "11674",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20Portable5.gif",
        "name": "Portable RWIS 5"
    }]
}, {
    "coord": [40.46375, -111.94989],
    "cams": [{
        "id": "11024",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15833.jpeg",
        "name": "Porter Rockwell Blvd @ 2300 W, HRR"
    }]
}, {
    "coord": [40.31448, -111.65516],
    "cams": [{
        "id": "9543",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14310.jpeg",
        "name": "Provo Canyon Rd / US-189 @ 800 N / SR-52, ORM"
    }]
}, {
    "coord": [40.36426, -111.55762],
    "cams": [{
        "id": "10336",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15045.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Alpine Scenic Hwy / SR-92 / MP 14.26, UT"
    }]
}, {
    "coord": [40.34105, -111.60378],
    "cams": [{
        "id": "10333",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15042.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Bridal Veil Falls / MP 11.15, UT"
    }]
}, {
    "coord": [40.32862, -111.61958],
    "cams": [{
        "id": "10332",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15041.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Canyon Glen Park / MP 9.98, UT"
    }]
}, {
    "coord": [40.32385, -111.64255],
    "cams": [{
        "id": "10331",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15040.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Canyon View Park / MP 8.46, PVO"
    }]
}, {
    "coord": [40.40155, -111.53404],
    "cams": [{
        "id": "10339",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15048.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Lower Deer Creek Rd / MP 17.14, WA"
    }]
}, {
    "coord": [40.39107, -111.54624],
    "cams": [{
        "id": "10338",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15047.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Meadow Dr / MP 16.25, WA"
    }]
}, {
    "coord": [40.34975, -111.58799],
    "cams": [{
        "id": "10334",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15043.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Milepost 12.21, UT"
    }]
}, {
    "coord": [40.32251, -111.64705],
    "cams": [{
        "id": "11705",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16513.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Mouth of Provo Canyon / MP 8.26, ORM"
    }]
}, {
    "coord": [40.32875, -111.62489],
    "cams": [{
        "id": "11706",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16514.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Springdell / MP 9.68, UT"
    }]
}, {
    "coord": [40.35634, -111.57386],
    "cams": [{
        "id": "10335",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15044.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Vivian Park / MP 13.16, UT"
    }]
}, {
    "coord": [40.54417, -111.93872],
    "cams": [{
        "id": "11015",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15824.jpeg",
        "name": "Redwood Rd / SR-68 @ 11400 S, SJO"
    }]
}, {
    "coord": [40.52279, -111.93853],
    "cams": [{
        "id": "305",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux305.jpeg",
        "name": "Redwood Rd / SR-68 @ 12600 S / SR-71, RVT"
    }]
}, {
    "coord": [40.518821, -111.938944],
    "cams": [{
        "id": "12260",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17059.jpeg",
        "name": "Redwood Rd / SR-68 @ 12800 S, RVT"
    }]
}, {
    "coord": [40.507617, -111.938871],
    "cams": [{
        "id": "12261",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17060.jpeg",
        "name": "Redwood Rd / SR-68 @ 13400 S, RVT"
    }]
}, {
    "coord": [40.4895, -111.94003],
    "cams": [{
        "id": "10328",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15037.jpeg",
        "name": "Redwood Rd / SR-68 @ 14400 S / SR-140, BLF"
    }]
}, {
    "coord": [40.413, -111.92307],
    "cams": [{
        "id": "10723",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15532.jpeg",
        "name": "Redwood Rd / SR-68 @ 2100 N / SR-194, LHI"
    }]
}, {
    "coord": [40.33712, -111.91567],
    "cams": [{
        "id": "12144",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16952.jpeg",
        "name": "Redwood Rd / SR-68 @ Grandview Blvd, SSP"
    }]
}, {
    "coord": [40.34433, -111.916],
    "cams": [{
        "id": "12438",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17229.jpeg",
        "name": "Redwood Rd / SR-68 @ Parkway Blvd / Founders Blvd, SSP"
    }]
}, {
    "coord": [40.37277, -111.91633],
    "cams": [{
        "id": "10536",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15345.jpeg",
        "name": "Redwood Rd / SR-68 @ Pioneer Crossing / SR-145, SSP"
    }]
}, {
    "coord": [40.361931, -111.916497],
    "cams": [{
        "id": "11646",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16454.jpeg",
        "name": "Redwood Rd / SR-68 @ Pony Express Pkwy, SSP"
    }]
}, {
    "coord": [40.46256, -111.94261],
    "cams": [{
        "id": "11023",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15832.jpeg",
        "name": "Redwood Rd / SR-68 @ Porter Rockwell Blvd, BLF"
    }]
}, {
    "coord": [40.32627, -111.90548],
    "cams": [{
        "id": "12428",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17221.jpeg",
        "name": "Redwood Rd / SR-68 @ Ring Rd, SSP"
    }]
}, {
    "coord": [40.38736, -111.91649],
    "cams": [{
        "id": "10330",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15039.jpeg",
        "name": "Redwood Rd / SR-68 @ SR-73 / Cedar Fort Rd, SSP"
    }]
}, {
    "coord": [40.31569, -111.89443],
    "cams": [{
        "id": "12429",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17222.jpeg",
        "name": "Redwood Rd / SR-68 @ Stillwater Dr, SSP"
    }]
}, {
    "coord": [40.43468, -111.92925],
    "cams": [{
        "id": "10329",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15038.jpeg",
        "name": "Redwood Rd / SR-68 @ W. G. Williams Ave, UT"
    }]
}, {
    "coord": [40.25648, -111.86713],
    "cams": [{
        "id": "10766",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-68-mp-23.gif",
        "name": "Redwood Rd / SR-68 Liveview SB @ Milepost 22.93, UT"
    }]
}, {
    "coord": [40.3844, -111.95116],
    "cams": [{
        "id": "10834",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-73-mp34.gif",
        "name": "SR-73 Liveview EB @ Milepost 34.57, SSP"
    }]
}, {
    "coord": [40.3658, -112.03748],
    "cams": [{
        "id": "10852",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-73-mp-29.gif",
        "name": "SR-73 Liveview WB @ Eagle Mountain Blvd / MP 29.78, EAG"
    }]
}, {
    "coord": [40.45049, -111.64471],
    "cams": [{
        "id": "10853",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-92-mp-14.gif",
        "name": "SR-92 Liveview WB @ Alpine Loop Scenic Hwy / MP 14.37, UT"
    }]
}, {
    "coord": [40.41295, -111.87269],
    "cams": [{
        "id": "10722",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15531.jpeg",
        "name": "State St / US-89 / I-15 SB Exit @ 2100 N / SR-194, LHI"
    }]
}, {
    "coord": [40.3701, -111.76916],
    "cams": [{
        "id": "10561",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15370.jpeg",
        "name": "State St / US-89 @ 1100 E, AFK / 2000 W, PLG / SR-129, PLG"
    }]
}, {
    "coord": [40.55179, -111.89103],
    "cams": [{
        "id": "12341",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17140.jpeg",
        "name": "State St / US-89 @ 11000 S, SND"
    }]
}, {
    "coord": [40.54747, -111.89129],
    "cams": [{
        "id": "12342",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17141.jpeg",
        "name": "State St / US-89 @ 11235 S / Auto Mall Dr, SND"
    }]
}, {
    "coord": [40.54443, -111.89117],
    "cams": [{
        "id": "10686",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15495.jpeg",
        "name": "State St / US-89 @ 11400 S, SND"
    }]
}, {
    "coord": [40.31913, -111.70491],
    "cams": [{
        "id": "9819",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14529.jpg",
        "name": "State St / US-89 @ 1200 N, ORM"
    }]
}, {
    "coord": [40.52932, -111.89021],
    "cams": [{
        "id": "10677",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15486.jpeg",
        "name": "State St / US-89 @ 12200 S, DPR"
    }]
}, {
    "coord": [40.21593, -111.63609],
    "cams": [{
        "id": "11258",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16067.jpeg",
        "name": "State St / US-89 @ 1320 S, PVO"
    }]
}, {
    "coord": [40.32648, -111.70785],
    "cams": [{
        "id": "9272",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux401.jpeg",
        "name": "State St / US-89 @ 1600 N, ORM"
    }]
}, {
    "coord": [40.26785, -111.68246],
    "cams": [{
        "id": "9834",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14544.jpeg",
        "name": "State St / US-89 @ 1600 S, ORM"
    }]
}, {
    "coord": [40.25905, -111.67479],
    "cams": [{
        "id": "9527",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14294.jpeg",
        "name": "State St / US-89 @ 1720 N / Grandview Ln, PVO"
    }]
}, {
    "coord": [40.20776, -111.6298],
    "cams": [{
        "id": "9554",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14321.jpeg",
        "name": "State St / US-89 @ 1860 S / Slate Canyon Dr, PVO"
    }]
}, {
    "coord": [40.36086, -111.7471],
    "cams": [{
        "id": "11757",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16565.jpeg",
        "name": "State St / US-89 @ 200 S / 220 S, PLG"
    }]
}, {
    "coord": [40.37499, -111.7906],
    "cams": [{
        "id": "12049",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16857.jpeg",
        "name": "State St / US-89 @ 300 E, AFK"
    }]
}, {
    "coord": [40.30447, -111.69735],
    "cams": [{
        "id": "10559",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15368.jpeg",
        "name": "State St / US-89 @ 400 N, ORM"
    }]
}, {
    "coord": [40.37402, -111.78546],
    "cams": [{
        "id": "10251",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14960.jpeg",
        "name": "State St / US-89 @ 500 E / SR-180, AFK"
    }]
}, {
    "coord": [40.35552, -111.73608],
    "cams": [{
        "id": "10574",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15383.jpeg",
        "name": "State St / US-89 @ 700 S / 300 E, PLG"
    }]
}, {
    "coord": [40.31185, -111.70143],
    "cams": [{
        "id": "9273",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux402.jpeg",
        "name": "State St / US-89 @ 800 N / SR-52, ORM"
    }]
}, {
    "coord": [40.28235, -111.68865],
    "cams": [{
        "id": "9314",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux415.jpeg",
        "name": "State St / US-89 @ 800 S, ORM"
    }]
}, {
    "coord": [40.29713, -111.69344],
    "cams": [{
        "id": "9277",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux404.jpeg",
        "name": "State St / US-89 @ Center St, ORM"
    }]
}, {
    "coord": [40.38892, -111.82684],
    "cams": [{
        "id": "10250",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14959.jpeg",
        "name": "State St / US-89 @ Main St / 1200 E / SR-73, LHI"
    }]
}, {
    "coord": [40.35911, -111.74068],
    "cams": [{
        "id": "10569",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15378.jpeg",
        "name": "State St / US-89 @ Main St / SR-114, PLG"
    }]
}, {
    "coord": [40.36572, -111.75127],
    "cams": [{
        "id": "10557",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15366.jpeg",
        "name": "State St / US-89 @ Pleasant Grove Blvd / Center St, PLG"
    }]
}, {
    "coord": [40.27342, -111.68482],
    "cams": [{
        "id": "9278",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux405.jpeg",
        "name": "State St / US-89 @ University Pkwy / SR-265, ORM"
    }]
}, {
    "coord": [40.43201, -111.80238],
    "cams": [{
        "id": "11666",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16474.jpeg",
        "name": "Timpanogos Hwy / 11000 N / SR-92 @ 6000 W, HLD"
    }]
}, {
    "coord": [40.43196, -111.81179],
    "cams": [{
        "id": "11758",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16566.jpeg",
        "name": "Timpanogos Hwy / 11000 N / SR-92 @ 6400 W, HLD"
    }]
}, {
    "coord": [40.43185, -111.78518],
    "cams": [{
        "id": "11010",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15819.jpeg",
        "name": "Timpanogos Hwy / 11000 N / SR-92 @ Alpine Hwy / 5300 W / SR-74, HLD"
    }]
}, {
    "coord": [40.432, -111.77343],
    "cams": [{
        "id": "11388",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16197.jpeg",
        "name": "Timpanogos Hwy / 11000 N / SR-92 @ North County Blvd / 4800 W / SR-129, HLD"
    }]
}, {
    "coord": [40.43234, -111.83057],
    "cams": [{
        "id": "11011",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15820.jpeg",
        "name": "Timpanogos Hwy / 3500 N / SR-92 @ 1200 E / Micron, LHI"
    }]
}, {
    "coord": [40.43194, -111.87329],
    "cams": [{
        "id": "11665",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16473.jpeg",
        "name": "Timpanogos Hwy / 3500 N / SR-92 @ 1450 W, LHI"
    }]
}, {
    "coord": [40.43224, -111.84971],
    "cams": [{
        "id": "11012",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15821.jpeg",
        "name": "Timpanogos Hwy / 3500 N / SR-92 @ Center St, LHI"
    }]
}, {
    "coord": [40.43248, -111.86904],
    "cams": [{
        "id": "11667",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16475.jpeg",
        "name": "Timpanogos Hwy / 3500 N / SR-92 @ Morning Vista Rd / 1200 W, LHI"
    }]
}, {
    "coord": [40.43075, -111.89566],
    "cams": [{
        "id": "11542",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16351.jpeg",
        "name": "Timpanogos Hwy / Club House Dr / SR-92 @ Ashton Blvd / Maple Loop Dr, LHI"
    }]
}, {
    "coord": [40.43439, -111.88097],
    "cams": [{
        "id": "11055",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15864.jpeg",
        "name": "Triumph Blvd @ Cabelas Blvd, LHI"
    }]
}, {
    "coord": [40.26334, -111.65859],
    "cams": [{
        "id": "9537",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14304.jpeg",
        "name": "University Ave / US-189 @ 2230 N, PVO"
    }]
}, {
    "coord": [40.22968, -111.65869],
    "cams": [{
        "id": "10276",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14985.jpeg",
        "name": "University Ave / US-189 @ 300 S / US-89, PVO"
    }]
}, {
    "coord": [40.28279, -111.65856],
    "cams": [{
        "id": "9539",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14306.jpeg",
        "name": "University Ave / US-189 @ 3700 N, PVO"
    }]
}, {
    "coord": [40.28899, -111.65864],
    "cams": [{
        "id": "11442",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16251.jpeg",
        "name": "University Ave / US-189 @ 4200 N, PVO"
    }]
}, {
    "coord": [40.2976, -111.65712],
    "cams": [{
        "id": "9541",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14308.jpeg",
        "name": "University Ave / US-189 @ 4800 N / Foothill Blvd, PVO"
    }]
}, {
    "coord": [40.24038, -111.65866],
    "cams": [{
        "id": "9505",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14272.jpeg",
        "name": "University Ave / US-189 @ 500 N, PVO"
    }]
}, {
    "coord": [40.30278, -111.65591],
    "cams": [{
        "id": "11389",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16198.jpeg",
        "name": "University Ave / US-189 @ 5200 N / River Park Dr, PVO"
    }]
}, {
    "coord": [40.24434, -111.65863],
    "cams": [{
        "id": "9528",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14295.jpeg",
        "name": "University Ave / US-189 @ 800 N, PVO"
    }]
}, {
    "coord": [40.22172, -111.65886],
    "cams": [{
        "id": "9502",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14269.jpeg",
        "name": "University Ave / US-189 @ 920 S, PVO"
    }]
}, {
    "coord": [40.23371, -111.65876],
    "cams": [{
        "id": "9504",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14271.jpeg",
        "name": "University Ave / US-189 @ Center St, PVO"
    }]
}, {
    "coord": [40.25059, -111.65863],
    "cams": [{
        "id": "9529",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14296.jpeg",
        "name": "University Ave / US-189 @ Cougar Blvd / 1230 N, PVO"
    }]
}, {
    "coord": [40.25578, -111.65862],
    "cams": [{
        "id": "9553",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14320.jpeg",
        "name": "University Ave / US-189 @ University Pkwy / 1650 N / SR-265, PVO"
    }]
}, {
    "coord": [40.25578, -111.65035],
    "cams": [{
        "id": "12378",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17177.jpeg",
        "name": "University Pkwy / 1650 N @ 450 E, PVO"
    }]
}, {
    "coord": [40.25613, -111.65609],
    "cams": [{
        "id": "9531",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14298.jpeg",
        "name": "University Pkwy / 1650 N @ Canyon Rd / 150 E, PVO"
    }]
}, {
    "coord": [40.27156, -111.67221],
    "cams": [{
        "id": "12282",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17081.jpeg",
        "name": "University Pkwy / SR-265 @ 1400 S / MP 2.95, ORM"
    }]
}, {
    "coord": [40.26637, -111.67222],
    "cams": [{
        "id": "12283",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17082.jpeg",
        "name": "University Pkwy / SR-265 @ 1700 S / MP 3.33, ORM"
    }]
}, {
    "coord": [40.26328, -111.6675],
    "cams": [{
        "id": "9675",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14403.jpeg",
        "name": "University Pkwy / SR-265 @ 2230 N / Riverside Ave / 550 W, PVO"
    }]
}, {
    "coord": [40.27363, -111.70481],
    "cams": [{
        "id": "9832",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14542.jpeg",
        "name": "University Pkwy / SR-265 @ 400 W, ORM"
    }]
}, {
    "coord": [40.27295, -111.67633],
    "cams": [{
        "id": "9316",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux417.jpeg",
        "name": "University Pkwy / SR-265 @ 800 E, ORM"
    }]
}, {
    "coord": [40.25783, -111.66178],
    "cams": [{
        "id": "10564",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15373.jpeg",
        "name": "University Pkwy / SR-265 @ Freedom Blvd / 200 W, PVO"
    }]
}, {
    "coord": [40.27357, -111.69535],
    "cams": [{
        "id": "9833",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14543.jpeg",
        "name": "University Pkwy / SR-265 @ Main St, ORM"
    }]
}, {
    "coord": [40.27495, -111.71309],
    "cams": [{
        "id": "9306",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux406.jpeg",
        "name": "University Pkwy / SR-265 @ Sandhill Rd, ORM"
    }]
}, {
    "coord": [40.40601, -111.52734],
    "cams": [{
        "id": "10399",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15108.jpeg",
        "name": "US-189 @ Deer Creek Dam / MP 17.87, WA"
    }]
}, {
    "coord": [40.4134, -111.47823],
    "cams": [{
        "id": "11746",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16554.jpeg",
        "name": "US-189 @ Milepost 20.89, WA"
    }]
}, {
    "coord": [40.41846, -111.48935],
    "cams": [{
        "id": "11745",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16553.jpeg",
        "name": "US-189 @ Milepost 21.57, WA"
    }]
}, {
    "coord": [40.46106, -111.46304],
    "cams": [{
        "id": "11190",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15999.jpeg",
        "name": "US-189 @ Milepost 25.36, CHR"
    }]
}, {
    "coord": [40.4558, -111.4707],
    "cams": [{
        "id": "11837",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16645.jpeg",
        "name": "US-189 RWIS EB @ Charleston Rd / 3600 W / SR-113 / MP 24.92, CHR"
    }]
}, {
    "coord": [40.48254, -111.40286],
    "cams": [{
        "id": "12229",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17028.jpeg",
        "name": "US-40 @ 2050 S / MP 18.81, HBR"
    }]
}, {
    "coord": [40.648236, -111.662442],
    "cams": [{
        "id": "11405",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16214.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ Butler / MP 10, SL"
    }]
}, {
    "coord": [40.65035, -111.65022],
    "cams": [{
        "id": "11406",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16215.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ Cardiff Fork / MP 10.74, SL"
    }]
}, {
    "coord": [40.62426, -111.75071],
    "cams": [{
        "id": "11403",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16212.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ Dogwood / MP 4.1, SL"
    }]
}, {
    "coord": [40.63338, -111.72272],
    "cams": [{
        "id": "11404",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16213.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ S-Curves / MP 6.38, SL"
    }]
}, {
    "coord": [40.63774, -111.62091],
    "cams": [{
        "id": "11407",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16216.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ Silver Fork / MP 12.54, SL"
    }]
}, {
    "coord": [40.45804, -111.47188],
    "cams": [{
        "id": "11189",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15998.jpeg",
        "name": "Charleston Rd / 3600 W / SR-113 @ US-189, CHR"
    }]
}, {
    "coord": [40.656679, -111.503247],
    "cams": [{
        "id": "11809",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16617.jpeg",
        "name": "Deer Valley Dr / SR-224 @ Bonanza Dr, PKC"
    }]
}, {
    "coord": [40.64602, -111.49512],
    "cams": [{
        "id": "11100",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-224-MP-4-all.gif",
        "name": "Deer Valley Dr / SR-224 Liveview NB @ Swede Alley / MP 4.73, PKC"
    }]
}, {
    "coord": [40.71954, -111.77901],
    "cams": [{
        "id": "150",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux150.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Chain Up Area East / MP 129.5, SL"
    }]
}, {
    "coord": [40.749, -111.71019],
    "cams": [{
        "id": "158",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux158.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ East Canyon / SR-65 / MP 133.96, SL"
    }]
}, {
    "coord": [40.71142, -111.79006],
    "cams": [{
        "id": "68",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux68.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Exit 130 to SB I-215 E / MP 128.5, SL"
    }]
}, {
    "coord": [40.73393, -111.7473],
    "cams": [{
        "id": "153",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux153.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 131.42, SL"
    }]
}, {
    "coord": [40.74222, -111.73273],
    "cams": [{
        "id": "155",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux155.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 132.53, SL"
    }]
}, {
    "coord": [40.7463, -111.72476],
    "cams": [{
        "id": "156",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux156.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 132.97, SL"
    }]
}, {
    "coord": [40.74778, -111.69954],
    "cams": [{
        "id": "159",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux159.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 134.47, SL"
    }]
}, {
    "coord": [40.74406, -111.69221],
    "cams": [{
        "id": "160",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux160.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 134.93, SL"
    }]
}, {
    "coord": [40.7281, -111.7656],
    "cams": [{
        "id": "11424",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80%20Parleys%20Quarry.gif",
        "name": "I-80 / Parley`s Canyon RWIS EB @ East Quarry / MP 130.36, SL (Low Lite)"
    }]
}, {
    "coord": [40.71767, -111.78416],
    "cams": [{
        "id": "69",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux69.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Chain Up Area West / MP 129.2, SL"
    }]
}, {
    "coord": [40.75235, -111.71423],
    "cams": [{
        "id": "157",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux157.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ East Canyon / SR-65 On-ramp / MP 133.61, SL"
    }]
}, {
    "coord": [40.72914, -111.76554],
    "cams": [{
        "id": "151",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux151.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ East Quarry / MP 130.38, SL"
    }]
}, {
    "coord": [40.74016, -111.66792],
    "cams": [{
        "id": "163",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux163.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Lamb`s Canyon Rd Off-ramp / MP 136.45, SL"
    }]
}, {
    "coord": [40.74167, -111.6754],
    "cams": [{
        "id": "162",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux162.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Lamb`s Canyon Rd On-ramp / MP 135.96, SL"
    }]
}, {
    "coord": [40.73265, -111.75594],
    "cams": [{
        "id": "152",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux152.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Milepost 131.1, SL"
    }]
}, {
    "coord": [40.748466, -111.697635],
    "cams": [{
        "id": "12458",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17249.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Mountain Dell / MP 134.6, SL"
    }]
}, {
    "coord": [40.74147, -111.74178],
    "cams": [{
        "id": "154",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux154.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Mt Aire Canyon Rd / MP 132.01, SL"
    }]
}, {
    "coord": [40.72521, -111.7718],
    "cams": [{
        "id": "70",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux70.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Quarry / MP 129.88, SL"
    }]
}, {
    "coord": [40.74199, -111.68416],
    "cams": [{
        "id": "161",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux161.jpeg",
        "name": "I-80 / Parleys Canyon EB @ Milepost 135.46, SL"
    }]
}, {
    "coord": [40.7433, -111.65681],
    "cams": [{
        "id": "164",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux164.jpeg",
        "name": "I-80 / Parleys Canyon EB @ Milepost 136.95, SL"
    }]
}, {
    "coord": [40.91813, -111.40757],
    "cams": [{
        "id": "11393",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16202.jpeg",
        "name": "I-80 @ 150 N / MP 163.05, CLV"
    }]
}, {
    "coord": [40.81299, -111.40143],
    "cams": [{
        "id": "11392",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16201.jpeg",
        "name": "I-80 @ Wanship / SR-32 / MP 155.46, SU"
    }]
}, {
    "coord": [40.73431, -111.55387],
    "cams": [{
        "id": "169",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux169.jpeg",
        "name": "I-80 EB @ Powderwood Rd / MP 143.46, SU"
    }]
}, {
    "coord": [40.74941, -111.60253],
    "cams": [{
        "id": "166",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux166.jpeg",
        "name": "I-80 EB @ Summit Park / MP 140.13, SU"
    }]
}, {
    "coord": [40.74266, -111.56181],
    "cams": [{
        "id": "168",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux168.jpeg",
        "name": "I-80 EB @ View Area / MP 142.75, SU"
    }]
}, {
    "coord": [40.72102, -111.52196],
    "cams": [{
        "id": "171",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux171.jpeg",
        "name": "I-80 EB @ West of US-40 / MP 145.4, SU"
    }]
}, {
    "coord": [40.7602, -111.47103],
    "cams": [{
        "id": "10798",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80-Mp-149.gif",
        "name": "I-80 Liveview EB @ Milepost 149.62, SU"
    }]
}, {
    "coord": [40.91745, -111.40689],
    "cams": [{
        "id": "11427",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16236.jpeg",
        "name": "I-80 RWIS @ 150 N / MP 163.05, CLV (Low Lite)"
    }]
}, {
    "coord": [40.81372, -111.40083],
    "cams": [{
        "id": "11426",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16235.jpeg",
        "name": "I-80 RWIS @ Wanship / SR-32 / MP 155.46, SU (Low Lite)"
    }]
}, {
    "coord": [40.75228, -111.6248],
    "cams": [{
        "id": "11425",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20Parleys-Summit-all.gif",
        "name": "I-80 RWIS EB @ Parley`s Summit / MP 138.87, SL (Low Lite)"
    }]
}, {
    "coord": [40.7543, -111.57225],
    "cams": [{
        "id": "167",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux167.jpeg",
        "name": "I-80 WB @ Jeremy Ranch / MP 141.8, SU"
    }]
}, {
    "coord": [40.7273, -111.54285],
    "cams": [{
        "id": "170",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux170.jpeg",
        "name": "I-80 WB @ Kimball Jct / SR-224 / MP 144.22, SU"
    }]
}, {
    "coord": [40.73694, -111.48655],
    "cams": [{
        "id": "12457",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17248.jpeg",
        "name": "I-80 WB @ Milepost 147.56, SU"
    }]
}, {
    "coord": [40.75389, -111.62432],
    "cams": [{
        "id": "165",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux165.jpeg",
        "name": "I-80 WB @ Parley`s Summit / MP 138.9, SL"
    }]
}, {
    "coord": [40.7319, -111.49834],
    "cams": [{
        "id": "172",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux172.jpeg",
        "name": "I-80 WB @ Silver Creek Jct / US-40 / MP 146.84, SU"
    }]
}, {
    "coord": [40.66298, -111.50064],
    "cams": [{
        "id": "11810",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16618.jpeg",
        "name": "Kearns Blvd / SR-248 @ Bonanza Dr / Monitor Dr, PKC"
    }]
}, {
    "coord": [40.58493, -111.65407],
    "cams": [{
        "id": "12437",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17228.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Alta Bypass / MP 10.95, SL"
    }]
}, {
    "coord": [40.57169, -111.72864],
    "cams": [{
        "id": "11457",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16266.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Lisa Falls / MP 6.5, SL"
    }]
}, {
    "coord": [40.57123, -111.71266],
    "cams": [{
        "id": "11458",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16267.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Seven Turns / MP 7.4, SL"
    }]
}, {
    "coord": [40.5707, -111.7028],
    "cams": [{
        "id": "11459",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16268.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Tanners Flat / MP 7.94, SL"
    }]
}, {
    "coord": [40.57141, -111.73847],
    "cams": [{
        "id": "11456",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16265.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Upper Vault / MP 5.96, SL"
    }]
}, {
    "coord": [40.57609, -111.68218],
    "cams": [{
        "id": "11461",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16270.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ White Pine Parking / MP 9.2, SL"
    }]
}, {
    "coord": [40.57096, -111.74374],
    "cams": [{
        "id": "11839",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16647.jpeg",
        "name": "Little Cottonwood Rd / SR-210 RWIS EB @ Powerhouse / MP 5.67, SL"
    }]
}, {
    "coord": [40.59104, -111.63377],
    "cams": [{
        "id": "12435",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17226.jpeg",
        "name": "Little Cottonwood Rd / SR-210 WB @ Alta / MP 12.16, ALT"
    }]
}, {
    "coord": [40.57911, -111.67448],
    "cams": [{
        "id": "12436",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17227.jpeg",
        "name": "Little Cottonwood Rd / SR-210 WB @ Upper White Pine / MP 9.7, SL"
    }]
}, {
    "coord": [40.5745, -111.69099],
    "cams": [{
        "id": "11460",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16269.jpeg",
        "name": "Little Cottonwood Rd / SR-210 WB @ White Pine / MP 8.7, SL"
    }]
}, {
    "coord": [40.50635, -111.41349],
    "cams": [{
        "id": "10636",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15445.jpeg",
        "name": "Main St / US-40 @ 100 S / MP 17, HBR"
    }]
}, {
    "coord": [40.51418, -111.41339],
    "cams": [{
        "id": "10637",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15446.jpeg",
        "name": "Main St / US-40 @ 500 N / MP 16.4, HBR"
    }]
}, {
    "coord": [40.49306, -111.41371],
    "cams": [{
        "id": "10628",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15437.jpeg",
        "name": "Main St / US-40 @ US-189 / 1200 S / MP 17.94, HBR"
    }]
}, {
    "coord": [40.57186, -111.77614],
    "cams": [{
        "id": "9895",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14604.jpeg",
        "name": "North Little Cottonwood Rd / Little Cottonwood Canyon Rd / SR-210 @ Little Cottonwood Rd / SR-209, SL"
    }]
}, {
    "coord": [40.656421, -111.506353],
    "cams": [{
        "id": "11065",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15874.jpeg",
        "name": "Park Ave / SR-224 @ Empire Ave / Deer Valley Dr / SR-224, PKC"
    }]
}, {
    "coord": [40.66042, -111.50944],
    "cams": [{
        "id": "9385",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux9201.jpeg",
        "name": "Park Ave / SR-224 @ Kearns Blvd / SR-248, PKC"
    }]
}, {
    "coord": [40.67574, -111.52111],
    "cams": [{
        "id": "11953",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-224-MeadowsDrive-ParkCity.jpeg",
        "name": "Park Ave / SR-224 RWIS @ Meadows Dr, PKC"
    }]
}, {
    "coord": [40.7749, -111.4678],
    "cams": [{
        "id": "12164",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16972.jpeg",
        "name": "Portable RWIS 3"
    }]
}, {
    "coord": [40.72204, -111.54439],
    "cams": [{
        "id": "9386",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux9236.jpeg",
        "name": "SR-224 @ Olympic Pkwy / Newpark Blvd /  MP 11.16, SU"
    }]
}, {
    "coord": [40.68737, -111.54419],
    "cams": [{
        "id": "11129",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-224-MP-8-all.gif",
        "name": "SR-224 Liveview SB @ Canyon Resort Dr / Park West Village / MP 8.76, SU"
    }]
}, {
    "coord": [40.67711, -111.43201],
    "cams": [{
        "id": "11252",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-248-mile4-7all.gif",
        "name": "SR-248 / 1040 W Liveview EB @ Jordanelle Pkwy / Browns Canyon Rd / 13970 N / MP 4.88, WA"
    }]
}, {
    "coord": [40.6338, -111.3849],
    "cams": [{
        "id": "10759",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR248.gif",
        "name": "SR-248 RWIS EB @ Milepost 8.95, WA"
    }]
}, {
    "coord": [40.59081, -111.39031],
    "cams": [{
        "id": "11027",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-32%20Mile%204-all.gif",
        "name": "SR-32 Liveview EB @ Milepost 4.17, WA"
    }]
}, {
    "coord": [40.74835, -111.36388],
    "cams": [{
        "id": "11476",
        "url": "http://www.udottraffic.utah.gov/1_devices/sr-32-mp-23.gif",
        "name": "SR-32 Liveview SB @ Milepost 23, SU"
    }]
}, {
    "coord": [40.82739, -111.65433],
    "cams": [{
        "id": "11500",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-65%20@%20big-mountain-pass.gif",
        "name": "SR-65 RWIS NB @ Big Mountain Pass / SL-MN Co Line / MP 8.4, SL"
    }]
}, {
    "coord": [40.92183, -111.58335],
    "cams": [{
        "id": "11114",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-66-MP-0-all.gif",
        "name": "SR-66 Liveview EB @ East Canyon Reservoir / MP 0.84, MN"
    }]
}, {
    "coord": [40.46106, -111.46304],
    "cams": [{
        "id": "11190",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15999.jpeg",
        "name": "US-189 @ Milepost 25.36, CHR"
    }]
}, {
    "coord": [40.4558, -111.4707],
    "cams": [{
        "id": "11837",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16645.jpeg",
        "name": "US-189 RWIS EB @ Charleston Rd / 3600 W / SR-113 / MP 24.92, CHR"
    }]
}, {
    "coord": [40.48254, -111.40286],
    "cams": [{
        "id": "12229",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17028.jpeg",
        "name": "US-40 @ 2050 S / MP 18.81, HBR"
    }]
}, {
    "coord": [40.711035, -111.481422],
    "cams": [{
        "id": "12210",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17018.jpeg",
        "name": "US-40 @ Milepost 1.85, SU"
    }]
}, {
    "coord": [40.69769, -111.47272],
    "cams": [{
        "id": "9774",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14484.jpeg",
        "name": "US-40 @ Milepost 3, SU"
    }]
}, {
    "coord": [40.5572, -111.426],
    "cams": [{
        "id": "10573",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15382.jpeg",
        "name": "US-40 @ River Rd / SR-32 / MP 13.7, WA"
    }]
}, {
    "coord": [40.71863, -111.48586],
    "cams": [{
        "id": "235",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux235.jpeg",
        "name": "US-40 @ Silver Summit Pkwy / MP 1.31, SU"
    }]
}, {
    "coord": [40.68571, -111.46245],
    "cams": [{
        "id": "203",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux203.jpeg",
        "name": "US-40 @ SR-248 / Kearns Blvd / Quinns Jct / MP 3.89, SU"
    }]
}, {
    "coord": [40.60446, -111.42882],
    "cams": [{
        "id": "10856",
        "url": "http://www.udottraffic.utah.gov/1_devices/us-40-mp-9.gif",
        "name": "US-40 Liveview NB @ Jordanelle Reservoir / MP 9.8, WA"
    }]
}, {
    "coord": [40.65269, -111.45715],
    "cams": [{
        "id": "10757",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20US40%20Mayflower%20Summit.gif",
        "name": "US-40 RWIS SB @ Mayflower Summit / MP 6.13, WA"
    }]
}, {
    "coord": [40.60957, -111.79214],
    "cams": [{
        "id": "11798",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16606.jpeg",
        "name": "Wasatch Blvd / 3650 E / SR-210 @ 7800 S / Bengal Blvd / Honeywood Cove Dr, CWH"
    }]
}, {
    "coord": [40.61965, -111.78925],
    "cams": [{
        "id": "9896",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14605.jpeg",
        "name": "Wasatch Blvd / SR-190/SR-210 @ Big Cottonwood Canyon Rd / Fort Union Blvd / SR-190, CWH"
    }]
}, {
    "coord": [41.13986, -112.06447],
    "cams": [{
        "id": "10275",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14984.jpeg",
        "name": "1800 N / SR-37 @ 2000 W / Midland Dr / SR-108, CTN (Local)"
    }]
}, {
    "coord": [41.17634, -112.02582],
    "cams": [{
        "id": "12207",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17015.jpeg",
        "name": "1900 W / SR-126 @ 4800 S, ROY"
    }]
}, {
    "coord": [41.15453, -112.02589],
    "cams": [{
        "id": "12208",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17016.jpeg",
        "name": "1900 W / SR-126 @ 6000 S, ROY"
    }]
}, {
    "coord": [41.19753, -112.02588],
    "cams": [{
        "id": "9399",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux339.jpeg",
        "name": "1900 W / SR-126 @ Hinkley Dr / SR-79, ROY"
    }]
}, {
    "coord": [41.16736, -112.02603],
    "cams": [{
        "id": "9201",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux328.jpeg",
        "name": "1900 W / SR-126 @ Riverdale Rd / 5300 S / SR-26, ROY"
    }]
}, {
    "coord": [41.03825, -111.93833],
    "cams": [{
        "id": "12068",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16876.jpeg",
        "name": "200 N / SR-273 @ Main St / SR-273, KAY"
    }]
}, {
    "coord": [41.118214, -112.064384],
    "cams": [{
        "id": "12318",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17117.jpeg",
        "name": "2000 W / Midland Dr / SR-108 @ 300 N / SR-107, WPT"
    }]
}, {
    "coord": [41.11076, -112.06455],
    "cams": [{
        "id": "11359",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16168.jpeg",
        "name": "205 S / SR-193 @ 2000 W / SR-108, SYR"
    }]
}, {
    "coord": [41.11027, -112.03249],
    "cams": [{
        "id": "12195",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17003.jpeg",
        "name": "205 S / SR-193 @ Center St, CFD"
    }]
}, {
    "coord": [41.190562, -112.0645],
    "cams": [{
        "id": "12060",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16868.jpeg",
        "name": "4000 S / SR-37 @ 3500 W, WHV"
    }]
}, {
    "coord": [41.19062, -112.09286],
    "cams": [{
        "id": "12009",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16817.jpeg",
        "name": "4000 S / SR-37 @ 4700 W / SR-134, WHV"
    }]
}, {
    "coord": [41.19051, -112.04819],
    "cams": [{
        "id": "12071",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16879.jpeg",
        "name": "4000 S / SR-37 @ Midland Dr / SR-108, ROY"
    }]
}, {
    "coord": [41.10359, -112.022],
    "cams": [{
        "id": "11360",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16169.jpeg",
        "name": "700 S / SR-193 @ Industrial Pkwy, CFD"
    }]
}, {
    "coord": [41.0483, -111.98799],
    "cams": [{
        "id": "10876",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15685.jpeg",
        "name": "Angel St @ Layton Pkwy, LTN"
    }]
}, {
    "coord": [41.08939, -112.06436],
    "cams": [{
        "id": "12070",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16878.jpeg",
        "name": "Antelope Dr / 1700 S / SR-108 @ 2000 W / SR-108, SYR"
    }]
}, {
    "coord": [41.08938, -112.02636],
    "cams": [{
        "id": "12069",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16877.jpeg",
        "name": "Antelope Dr / 1700 S / SR-108 @ Main St, CFD"
    }]
}, {
    "coord": [41.07955, -111.95061],
    "cams": [{
        "id": "11387",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16196.jpeg",
        "name": "Fairfield Rd / 850 E @ Cherry Ln / 1350 N, LTN"
    }]
}, {
    "coord": [41.06744, -111.9503],
    "cams": [{
        "id": "11867",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16675.jpeg",
        "name": "Fairfield Rd / 850 E @ Wasatch Dr / 425 N, LTN"
    }]
}, {
    "coord": [41.060219, -111.975515],
    "cams": [{
        "id": "10679",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15488.jpeg",
        "name": "Gentile St @ Flint St, LTN"
    }]
}, {
    "coord": [41.22244, -111.94817],
    "cams": [{
        "id": "9635",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux433.jpeg",
        "name": "Harrison Blvd / 1200 E / SR-203 @ 24th St, OGD"
    }]
}, {
    "coord": [41.20989, -111.94851],
    "cams": [{
        "id": "9634",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux432.jpeg",
        "name": "Harrison Blvd / 1200 E / SR-203 @ 30th St / SR-79, OGD"
    }]
}, {
    "coord": [41.17595, -111.94949],
    "cams": [{
        "id": "12076",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16884.jpeg",
        "name": "Harrison Blvd / 1200 E / SR-203 @ 4800 S / Edgewood Dr, OGD"
    }]
}, {
    "coord": [41.2417, -111.9452],
    "cams": [{
        "id": "12047",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16855.jpeg",
        "name": "Harrison Blvd / SR-203 @ 12th St / Ogden Canyon Rd / SR-39, OGD"
    }]
}, {
    "coord": [41.19762, -111.9487],
    "cams": [{
        "id": "9398",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux338.jpeg",
        "name": "Harrison Blvd / Wildcat Way / SR-203 @ 36th St, OGD"
    }]
}, {
    "coord": [41.18636, -111.94903],
    "cams": [{
        "id": "9200",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux326.jpeg",
        "name": "Harrison Blvd / Wildcat Way / SR-203 @ 42nd St / Country Hills Dr, OGD"
    }]
}, {
    "coord": [41.08918, -111.97343],
    "cams": [{
        "id": "9637",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux435.jpeg",
        "name": "Hill Field Rd / SR-232 @ 2000 N / Antelope Dr, LTN"
    }]
}, {
    "coord": [41.10352, -111.97344],
    "cams": [{
        "id": "9403",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux423.jpeg",
        "name": "Hill Field Rd / SR-232 @ 3000 N / SR-193, LTN"
    }]
}, {
    "coord": [41.07505, -111.97415],
    "cams": [{
        "id": "9125",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux315.jpeg",
        "name": "Hill Field Rd / SR-232 @ Gordon Ave / 1000 N, LTN"
    }]
}, {
    "coord": [41.07265, -111.97889],
    "cams": [{
        "id": "9405",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux425.jpeg",
        "name": "Hill Field Rd / SR-232 @ Main St / SR-126, LTN"
    }]
}, {
    "coord": [41.2442, -112.01543],
    "cams": [{
        "id": "10073",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14782.jpeg",
        "name": "I-15 NB @ 12th St / 1200 S / SR-39 / MP 344.96, MSV"
    }]
}, {
    "coord": [41.23666, -112.0137],
    "cams": [{
        "id": "10077",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14786.jpeg",
        "name": "I-15 NB @ 1700 S / River Canal / MP 344.5, WHV"
    }]
}, {
    "coord": [41.00663, -111.93194],
    "cams": [{
        "id": "10426",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15135.jpeg",
        "name": "I-15 NB @ 1800 S / MP 326.23, KAY"
    }]
}, {
    "coord": [41.21992, -112.00424],
    "cams": [{
        "id": "10070",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14779.jpeg",
        "name": "I-15 NB @ 24th St / SR-53 / MP 343.1, OGD"
    }]
}, {
    "coord": [41.21772, -112.00242],
    "cams": [{
        "id": "10069",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14778.jpeg",
        "name": "I-15 NB @ 2650 S / 24th St Exit / MP 342.9, OGD"
    }]
}, {
    "coord": [41.3072, -112.02553],
    "cams": [{
        "id": "10079",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14788.jpeg",
        "name": "I-15 NB @ 2700 N / SR-134 / MP 349.42, FRW"
    }]
}, {
    "coord": [41.21294, -111.99902],
    "cams": [{
        "id": "10066",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14775.jpeg",
        "name": "I-15 NB @ 29th St / MP 342.5, OGD"
    }]
}, {
    "coord": [41.20506, -111.99365],
    "cams": [{
        "id": "10067",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14776.jpeg",
        "name": "I-15 NB @ 31st St / Hinkley Dr / SR-79 / MP 341.93, OGD"
    }]
}, {
    "coord": [41.18352, -112.01265],
    "cams": [{
        "id": "9250",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5222.jpeg",
        "name": "I-15 NB @ 4400 S / MP 340.1, RDL"
    }]
}, {
    "coord": [41.17876, -112.01769],
    "cams": [{
        "id": "10397",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15106.jpeg",
        "name": "I-15 NB @ 4600 S / MP 339.68, RDL"
    }]
}, {
    "coord": [41.01998, -111.94211],
    "cams": [{
        "id": "10425",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15134.jpeg",
        "name": "I-15 NB @ 900 S / MP 327.34, KAY"
    }]
}, {
    "coord": [41.08944, -111.99012],
    "cams": [{
        "id": "9346",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux422.jpeg",
        "name": "I-15 NB @ Antelope Dr / 2000 N / SR-108 / MP 332.87, LTN"
    }]
}, {
    "coord": [41.06357, -111.96661],
    "cams": [{
        "id": "10684",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15493.jpeg",
        "name": "I-15 NB @ Church St / MP 330.75, LTN"
    }]
}, {
    "coord": [41.07096, -111.97355],
    "cams": [{
        "id": "226",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux226.jpeg",
        "name": "I-15 NB @ Hill Field Rd / 750 N / SR-232 / MP 331.36, LTN"
    }]
}, {
    "coord": [41.05634, -111.96043],
    "cams": [{
        "id": "10580",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15389.jpeg",
        "name": "I-15 NB @ Layton Pkwy / SR-126 / MP 330.12, LTN"
    }]
}, {
    "coord": [41.17114, -112.0192],
    "cams": [{
        "id": "11465",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16274.jpeg",
        "name": "I-15 NB @ Riverdale Rd / SR-26 / MP 339.15, RDL"
    }]
}, {
    "coord": [40.99875, -111.92023],
    "cams": [{
        "id": "10388",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15097.jpeg",
        "name": "I-15 NB @ Shepard Ln / MP 325.43, FRM"
    }]
}, {
    "coord": [41.319124, -112.026269],
    "cams": [{
        "id": "12153",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-15%20MP350%20FarrWest.jpg",
        "name": "I-15 RWIS NB @ Milepost 350.24, PLV"
    }]
}, {
    "coord": [41.29015, -112.02631],
    "cams": [{
        "id": "10078",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14787.jpeg",
        "name": "I-15 SB @ 1800 N / Harrisville Rd / MP 348.23, FRW"
    }]
}, {
    "coord": [41.03768, -111.94884],
    "cams": [{
        "id": "227",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux227.jpeg",
        "name": "I-15 SB @ 200 N / SR-273 / MP 328.65, KAY"
    }]
}, {
    "coord": [41.2282, -112.01274],
    "cams": [{
        "id": "10074",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14783.jpeg",
        "name": "I-15 SB @ 21st St / SR-104 / MP 343.86, WHV"
    }]
}, {
    "coord": [41.14718, -112.02578],
    "cams": [{
        "id": "10396",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15105.jpeg",
        "name": "I-15 SB @ 2300 N / MP 337.48, SUN"
    }]
}, {
    "coord": [41.21905, -112.00604],
    "cams": [{
        "id": "10075",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14784.jpeg",
        "name": "I-15 SB @ 24th St / Pennsylvania Ave / SR-53 / MP 343.12, OGD"
    }]
}, {
    "coord": [41.26815, -112.02668],
    "cams": [{
        "id": "10072",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14781.jpeg",
        "name": "I-15 SB @ 400 N / Pioneer Rd / MP 346.72, MSV"
    }]
}, {
    "coord": [41.25755, -112.02303],
    "cams": [{
        "id": "10071",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14780.jpeg",
        "name": "I-15 SB @ 400 S / MP 345.93, MSV"
    }]
}, {
    "coord": [41.05276, -111.96133],
    "cams": [{
        "id": "10581",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15390.jpg",
        "name": "I-15 SB @ 550 S / MP 329.9, LTN"
    }]
}, {
    "coord": [41.16137, -112.0234],
    "cams": [{
        "id": "9249",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5223.jpeg",
        "name": "I-15 SB @ 5600 S / SR-97 / MP 338.46, ROY"
    }]
}, {
    "coord": [41.12438, -112.02473],
    "cams": [{
        "id": "9252",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5224.jpeg",
        "name": "I-15 SB @ 650 N / SR-103 / MP 335.89, CFD"
    }]
}, {
    "coord": [41.10325, -112.00428],
    "cams": [{
        "id": "9251",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5225.jpeg",
        "name": "I-15 SB @ 700 S / SR-193 / MP 334.08, CFD"
    }]
}, {
    "coord": [41.11357, -112.01354],
    "cams": [{
        "id": "10550",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15359.jpeg",
        "name": "I-15 SB @ Center St / MP 334.93, CFD"
    }]
}, {
    "coord": [41.07685, -111.97989],
    "cams": [{
        "id": "11744",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16552.jpeg",
        "name": "I-15 SB @ Hill Field Rd / 1150 N / SR-232 / MP 331.86, LTN"
    }]
}, {
    "coord": [41.22112, -112.00922],
    "cams": [{
        "id": "10076",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14785.jpeg",
        "name": "I-15 SB @ Milepost 343.4, OGD"
    }]
}, {
    "coord": [40.98905, -111.90565],
    "cams": [{
        "id": "281",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux281.jpeg",
        "name": "I-15 SB @ Park Ln / 1100 W / SR-225 / MP 324.44, FRM"
    }]
}, {
    "coord": [41.1965, -111.99995],
    "cams": [{
        "id": "10068",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14777.jpeg",
        "name": "I-15 SB @ River Valley Dr / 3650 S / MP 341.17, RDL"
    }]
}, {
    "coord": [41.13787, -111.88626],
    "cams": [{
        "id": "10615",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15424.jpeg",
        "name": "I-84 / Weber Canyon @ Power Plant / MP 89.25, WB"
    }]
}, {
    "coord": [41.13987, -111.84733],
    "cams": [{
        "id": "12409",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17208.jpeg",
        "name": "I-84 / Weber Canyon WB @ Milepost 91.35, MN"
    }]
}, {
    "coord": [41.13744, -111.9136],
    "cams": [{
        "id": "10819",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-84-MP-87.gif",
        "name": "I-84 Liveview @ US-89  / MP 87.8, UIN"
    }]
}, {
    "coord": [41.13858, -111.82744],
    "cams": [{
        "id": "11481",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-84-mp-92.gif",
        "name": "I-84 Liveview WB @ SR-167 / MP 92.42, MN"
    }]
}, {
    "coord": [41.17434, -112.01027],
    "cams": [{
        "id": "9127",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux317.jpeg",
        "name": "I-84 SB @ Riverdale Rd / SR-26 / MP 81.8, RDL"
    }]
}, {
    "coord": [41.05424, -111.96756],
    "cams": [{
        "id": "12057",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16865.jpeg",
        "name": "Layton Pkwy @ 100 W, LTN"
    }]
}, {
    "coord": [40.98545, -111.90102],
    "cams": [{
        "id": "10064",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14773.jpeg",
        "name": "Legacy Pkwy / SR-67 SB @ 250 N / US-89 / MP 12.1, FRM"
    }]
}, {
    "coord": [41.13269, -112.02586],
    "cams": [{
        "id": "11608",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16417.jpeg",
        "name": "Main St / SR-126 @ 1300 N, SUN"
    }]
}, {
    "coord": [41.08917, -112.00106],
    "cams": [{
        "id": "9231",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux322.jpeg",
        "name": "Main St / SR-126 @ Antelope Dr / SR-108, LTN"
    }]
}, {
    "coord": [41.18869, -111.98313],
    "cams": [{
        "id": "9404",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux424.jpeg",
        "name": "Riverdale Rd / SR-26 @ 300 W, RDL"
    }]
}, {
    "coord": [41.178, -112.00116],
    "cams": [{
        "id": "9126",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux316.jpeg",
        "name": "Riverdale Rd / SR-26 @ 900 W, RDL"
    }]
}, {
    "coord": [41.19261, -111.97916],
    "cams": [{
        "id": "9345",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux421.jpeg",
        "name": "Riverdale Rd / SR-26 @ Wall Ave / 40th St / SR-204, RDL"
    }]
}, {
    "coord": [41.207, -111.8163],
    "cams": [{
        "id": "10749",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-167%20TrappersLoop.gif",
        "name": "SR-167 / Trappers Loop RWIS SB @ SR-226 / Snow Basin Rd / MP 6.92, WB"
    }]
}, {
    "coord": [41.21246, -111.85196],
    "cams": [{
        "id": "10786",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-226-Combined.gif",
        "name": "SR-226 Liveview EB @ Snow Basin / MP 0.7, WB"
    }]
}, {
    "coord": [41.25368, -111.84164],
    "cams": [{
        "id": "10785",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-39-Mile13.gif",
        "name": "SR-39 / Ogden Canyon Liveview EB @ SR-158 / MP 13.8, WB"
    }]
}, {
    "coord": [41.11381, -112.02569],
    "cams": [{
        "id": "9636",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux434.jpeg",
        "name": "State St / SR-126 @ Center St, CFD"
    }]
}, {
    "coord": [41.27139, -111.97738],
    "cams": [{
        "id": "12048",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16856.jpeg",
        "name": "US-89 / Harrisville Rd @ Wall Ave / SR-204 / Larsen Ln, HRV"
    }]
}, {
    "coord": [41.14823, -111.93079],
    "cams": [{
        "id": "10394",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15103.jpeg",
        "name": "US-89 / I-84 @ 6300 S / 150 E / MP 407.72, UIN"
    }]
}, {
    "coord": [41.10798, -111.90922],
    "cams": [{
        "id": "10391",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15100.jpeg",
        "name": "US-89 @ 3000 N / SR-193, LTN"
    }]
}, {
    "coord": [41.09175, -111.91075],
    "cams": [{
        "id": "10392",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15101.jpeg",
        "name": "US-89 @ Antelope Dr, LTN"
    }]
}, {
    "coord": [41.03014, -111.9091],
    "cams": [{
        "id": "286",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux286.jpeg",
        "name": "US-89 @ Green Rd / MP 398.86, FRU"
    }]
}, {
    "coord": [41.155351, -111.940559],
    "cams": [{
        "id": "10712",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15521.jpeg",
        "name": "US-89 @ Harrison Blvd / 1550 E / SR-203, SOG"
    }]
}, {
    "coord": [41.13566, -111.91329],
    "cams": [{
        "id": "10395",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15104.jpeg",
        "name": "US-89 @ I-84 EB Exit Ramp, SWE"
    }]
}, {
    "coord": [41.01144, -111.9127],
    "cams": [{
        "id": "284",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux284.jpeg",
        "name": "US-89 @ Main St / SR-106 / SR-273 / MP 397.58, FRM"
    }]
}, {
    "coord": [41.0661, -111.91015],
    "cams": [{
        "id": "10393",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15102.jpeg",
        "name": "US-89 @ Oak Hills Dr / SR-109, LTN"
    }]
}, {
    "coord": [40.9907, -111.90318],
    "cams": [{
        "id": "280",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux280.jpeg",
        "name": "US-89 @ Park Ln / 1100 W / SR-225, FRM"
    }]
}, {
    "coord": [41.01846, -111.9087],
    "cams": [{
        "id": "285",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux285.jpeg",
        "name": "US-89 @ Pedestrian Bridge / MP 398.08, FRU"
    }]
}, {
    "coord": [40.99131, -111.90232],
    "cams": [{
        "id": "10821",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR225mile0-all.gif",
        "name": "US-89 Liveview NB @ Park Lane / SR-225 / MP 396.19, FRM"
    }]
}, {
    "coord": [41.00102, -111.90746],
    "cams": [{
        "id": "283",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux283.jpeg",
        "name": "US-89 NB @ Shepard Ln, FRM"
    }]
}, {
    "coord": [41.00099, -111.90848],
    "cams": [{
        "id": "282",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux282.jpeg",
        "name": "US-89 SB @ Shepard Ln, FRM"
    }]
}, {
    "coord": [41.24417, -111.97832],
    "cams": [{
        "id": "9243",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux331.jpeg",
        "name": "Wall Ave / SR-204 @ 12th St / SR-39, OGD"
    }]
}, {
    "coord": [41.23135, -111.9789],
    "cams": [{
        "id": "12072",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16880.jpeg",
        "name": "Wall Ave / SR-204 @ 20th St / SR-104, OGD"
    }]
}, {
    "coord": [41.22087, -111.979032],
    "cams": [{
        "id": "12337",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17136.jpeg",
        "name": "Wall Ave / SR-204 @ 25th St, OGD"
    }]
}, {
    "coord": [41.21048, -111.97951],
    "cams": [{
        "id": "12338",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17137.jpeg",
        "name": "Wall Ave / SR-204 @ 30th St / SR-79, OGD"
    }]
}, {
    "coord": [41.20819, -111.97917],
    "cams": [{
        "id": "9128",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux318.jpeg",
        "name": "Wall Ave / SR-204 @ 31st St / SR-79, OGD"
    }]
}, {
    "coord": [41.25911, -111.96974],
    "cams": [{
        "id": "12046",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16854.jpeg",
        "name": "Washington Blvd / Harrisville Rd / US-89 @ 2nd St / Washington Blvd / SR-235, OGD"
    }]
}, {
    "coord": [41.30571, -111.96869],
    "cams": [{
        "id": "10293",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15002.jpeg",
        "name": "Washington Blvd / SR-235 @ 2600 N / SR-134, NOG"
    }]
}, {
    "coord": [41.24422, -111.96995],
    "cams": [{
        "id": "9632",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux430.jpeg",
        "name": "Washington Blvd / US-89 @ 12th St / SR-39, OGD"
    }]
}, {
    "coord": [41.231, -111.9705],
    "cams": [{
        "id": "12073",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16881.jpeg",
        "name": "Washington Blvd / US-89 @ 20th St, OGD"
    }]
}, {
    "coord": [41.22276, -111.97038],
    "cams": [{
        "id": "9407",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux427.jpeg",
        "name": "Washington Blvd / US-89 @ 24th St / SR-53, OGD"
    }]
}, {
    "coord": [41.21448, -111.97086],
    "cams": [{
        "id": "12339",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17138.jpeg",
        "name": "Washington Blvd / US-89 @ 28th St, OGD"
    }]
}, {
    "coord": [41.21037, -111.97098],
    "cams": [{
        "id": "12074",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16882.jpeg",
        "name": "Washington Blvd / US-89 @ 30th St / SR-79, OGD"
    }]
}, {
    "coord": [41.20804, -111.97096],
    "cams": [{
        "id": "12340",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17139.jpeg",
        "name": "Washington Blvd / US-89 @ 31st St / SR-79, OGD"
    }]
}, {
    "coord": [41.19053, -111.97117],
    "cams": [{
        "id": "9633",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux431.jpeg",
        "name": "Washington Blvd / US-89 @ 40th St / Chimes View Dr, SOG"
    }]
}, {
    "coord": [41.17036, -111.96869],
    "cams": [{
        "id": "12075",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16883.jpeg",
        "name": "Washington Blvd / US-89 @ Adams Ave Pkwy, OGD"
    }]
}, {
    "coord": [41.2005, -111.97105],
    "cams": [{
        "id": "9406",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux426.jpeg",
        "name": "Washington Blvd / US-89 @ Riverdale Rd / SR-26, OGD"
    }]
}, {
    "coord": [40.558726, -111.902968],
    "cams": [{
        "id": "12263",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17062.jpeg",
        "name": "10600 S / South Jordan Pkwy / SR-151 @ 400 W / Jordan Gateway, SJO"
    }]
}, {
    "coord": [40.55874, -111.91042],
    "cams": [{
        "id": "11966",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16774.jpeg",
        "name": "10600 S / South Jordan Pkwy / SR-151 @ River Front Pkwy / 700 W, SJO"
    }]
}, {
    "coord": [40.52678, -111.88629],
    "cams": [{
        "id": "10678",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15487.jpeg",
        "name": "12300 S / SR-71 @ 150 E, DPR"
    }]
}, {
    "coord": [40.52656, -111.89895],
    "cams": [{
        "id": "10575",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15384.jpeg",
        "name": "12300 S / SR-71 @ 265 W, DPR"
    }]
}, {
    "coord": [40.52698, -111.87187],
    "cams": [{
        "id": "304",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux304.jpeg",
        "name": "12300 S / SR-71 @ 700 E / SR-71, DPR"
    }]
}, {
    "coord": [40.52263, -112.01128],
    "cams": [{
        "id": "11967",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16775.jpeg",
        "name": "12600 S / Herriman Blvd @ Main St / 5040 W, HRR"
    }]
}, {
    "coord": [40.5225, -111.95755],
    "cams": [{
        "id": "11827",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16635.jpeg",
        "name": "12600 S / SR-71 @ 2700 W / Silverwolf Blvd, RVT"
    }]
}, {
    "coord": [40.52209, -111.9899],
    "cams": [{
        "id": "11512",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16321.jpeg",
        "name": "12600 S @ 4150 W, RVT"
    }]
}, {
    "coord": [40.52228, -111.9999],
    "cams": [{
        "id": "11026",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15835.jpeg",
        "name": "12600 S @ Legacy Ranch Blvd / 4570 W, RVT"
    }]
}, {
    "coord": [40.752, -111.85388],
    "cams": [{
        "id": "289",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux289.jpeg",
        "name": "1300 E / Leopard Ln @ 800 S, SLC"
    }]
}, {
    "coord": [40.7607, -111.85391],
    "cams": [{
        "id": "10714",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15523.jpeg",
        "name": "1300 E @ 400 S, SLC"
    }]
}, {
    "coord": [40.74164, -111.89966],
    "cams": [{
        "id": "10715",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15524.jpeg",
        "name": "1300 S @ 300 W, SLC"
    }]
}, {
    "coord": [40.482224, -111.896964],
    "cams": [{
        "id": "11638",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16447.jpeg",
        "name": "14600 S / Highland Dr / SR-140 @ Minuteman Dr, DPR"
    }]
}, {
    "coord": [40.48544, -111.90034],
    "cams": [{
        "id": "11507",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16316.jpeg",
        "name": "14600 S / SR-140 @ Pony Express Dr / SR-287, DPR"
    }]
}, {
    "coord": [40.76501, -111.8911],
    "cams": [{
        "id": "10716",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15525.jpeg",
        "name": "200 S @ Main St, SLC"
    }]
}, {
    "coord": [40.76497, -111.89399],
    "cams": [{
        "id": "9422",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux341.jpeg",
        "name": "200 S @ West Temple St, SLC"
    }]
}, {
    "coord": [40.72571, -111.9023],
    "cams": [{
        "id": "80",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux80.jpeg",
        "name": "2100 S / SR-201 @ 400 W / I-15 NB / MP 17.46, SLC"
    }]
}, {
    "coord": [40.72526, -111.90952],
    "cams": [{
        "id": "78",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux78.jpeg",
        "name": "2100 S / SR-201 @ 650 W / MP 17.1, SLC"
    }]
}, {
    "coord": [40.72549, -111.85394],
    "cams": [{
        "id": "9561",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux343.jpeg",
        "name": "2100 S @ 1300 E, SLC"
    }]
}, {
    "coord": [40.78253, -111.89963],
    "cams": [{
        "id": "11962",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16770.jpeg",
        "name": "300 W / John Stockton Dr / US-89 @ 600 N / SR-268, SLC"
    }]
}, {
    "coord": [40.76941, -111.89946],
    "cams": [{
        "id": "137",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux137.jpeg",
        "name": "300 W / John Stockton Dr / US-89 @ South Temple St, SLC"
    }]
}, {
    "coord": [40.69981, -111.85385],
    "cams": [{
        "id": "12327",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17126.jpeg",
        "name": "3300 S / SR-171 @ 1300 E, MCK"
    }]
}, {
    "coord": [40.69984, -111.85074],
    "cams": [{
        "id": "9646",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux347.jpeg",
        "name": "3300 S / SR-171 @ Highland Dr, SL"
    }]
}, {
    "coord": [40.699684, -111.89398],
    "cams": [{
        "id": "190",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux190.jpeg",
        "name": "3300 S / SR-171 @ West Temple St, SSL"
    }]
}, {
    "coord": [40.69667, -111.95801],
    "cams": [{
        "id": "10198",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14907.jpeg",
        "name": "3500 S / SR-171 @ 2700 W / Constitution Blvd, WVC"
    }]
}, {
    "coord": [40.69664, -111.96753],
    "cams": [{
        "id": "10197",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14906.jpeg",
        "name": "3500 S / SR-171 @ 3200 W, WVC"
    }]
}, {
    "coord": [40.69585, -111.94369],
    "cams": [{
        "id": "177",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux177.jpeg",
        "name": "3500 S / SR-171 @ Decker Lake Dr / 2200 W, WVC"
    }]
}, {
    "coord": [40.68702, -111.89719],
    "cams": [{
        "id": "191",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux191.jpeg",
        "name": "3900 S @ 210 W / Howick St, SSL"
    }]
}, {
    "coord": [40.68694, -111.82467],
    "cams": [{
        "id": "11947",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16755.jpeg",
        "name": "3900 S @ 2300 E, HDY"
    }]
}, {
    "coord": [40.686822, -111.905668],
    "cams": [{
        "id": "11946",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16754.jpeg",
        "name": "3900 S @ 500 W, SSL"
    }]
}, {
    "coord": [40.89352, -111.88051],
    "cams": [{
        "id": "12059",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16867.jpeg",
        "name": "400 N / SR-106 @ Main St, BTF"
    }]
}, {
    "coord": [40.76072, -111.87103],
    "cams": [{
        "id": "9560",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux314.jpeg",
        "name": "400 S / University Blvd / SR-186 @ 700 E / SR-71, SLC"
    }]
}, {
    "coord": [40.76065, -111.89972],
    "cams": [{
        "id": "9423",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux342.jpeg",
        "name": "400 S / US-89 @ 300 W / John Stockton Dr / US-89, SLC"
    }]
}, {
    "coord": [40.68223, -111.9674],
    "cams": [{
        "id": "12190",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16998.jpeg",
        "name": "4100 S @ 3200 W, WVC"
    }]
}, {
    "coord": [40.68205, -112.00569],
    "cams": [{
        "id": "9715",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux349.jpeg",
        "name": "4100 S @ 4800 W, WVC (Local)"
    }]
}, {
    "coord": [40.6742, -111.84159],
    "cams": [{
        "id": "9645",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux346.jpeg",
        "name": "4500 S / SR-266 @ Highland Dr, HDY"
    }]
}, {
    "coord": [40.6676, -111.95795],
    "cams": [{
        "id": "9644",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux345.jpeg",
        "name": "4700 S @ 2700 W, TAY"
    }]
}, {
    "coord": [40.75851, -111.89092],
    "cams": [{
        "id": "138",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux138.jpeg",
        "name": "500 S / Cesar E Chavez Blvd / SR-269 @ Main St, SLC"
    }]
}, {
    "coord": [40.75848, -111.85391],
    "cams": [{
        "id": "140",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux140.jpeg",
        "name": "500 S / University Blvd / SR-186 @ 1300 E, SLC"
    }]
}, {
    "coord": [40.75823, -111.84504],
    "cams": [{
        "id": "9207",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux327.jpeg",
        "name": "500 S / University Blvd / SR-186 @ 1580 E / Guardsman Way, SLC"
    }]
}, {
    "coord": [40.88431, -111.88069],
    "cams": [{
        "id": "9777",
        "url": "http://www.udottraffic.utah.gov/1_devices/Aux14487.jpeg",
        "name": "500 S @ Main St, BTF"
    }]
}, {
    "coord": [40.89401, -111.89221],
    "cams": [{
        "id": "9638",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux436.jpeg",
        "name": "500 W / US-89 @ 400 N / SR-106, BTF"
    }]
}, {
    "coord": [40.88427, -111.89218],
    "cams": [{
        "id": "9639",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux437.jpeg",
        "name": "500 W / US-89 @ 500 S / SR-68, BTF"
    }]
}, {
    "coord": [40.654754, -111.899772],
    "cams": [{
        "id": "12027",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16835.jpeg",
        "name": "5300 S / SR-173 @ 320 W / Commerce Dr, MUR"
    }]
}, {
    "coord": [40.65306, -111.94832],
    "cams": [{
        "id": "10889",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15698.jpeg",
        "name": "5400 S / SR-173 @ 2200 W, TAY"
    }]
}, {
    "coord": [40.65302, -111.95788],
    "cams": [{
        "id": "10890",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15699.jpeg",
        "name": "5400 S / SR-173 @ 2700 W, TAY"
    }]
}, {
    "coord": [40.65306, -111.967354],
    "cams": [{
        "id": "10891",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15700.jpeg",
        "name": "5400 S / SR-173 @ 3200 W, TAY"
    }]
}, {
    "coord": [40.653024, -111.976941],
    "cams": [{
        "id": "10892",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15701.jpeg",
        "name": "5400 S / SR-173 @ 3600 W / Whitewood Dr, TAY"
    }]
}, {
    "coord": [40.65294, -111.97953],
    "cams": [{
        "id": "12395",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17194.jpeg",
        "name": "5400 S / SR-173 @ 3700 W, TAY"
    }]
}, {
    "coord": [40.65321, -111.98247],
    "cams": [{
        "id": "12394",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17193.jpeg",
        "name": "5400 S / SR-173 @ 3800 W, TAY"
    }]
}, {
    "coord": [40.65289, -111.98678],
    "cams": [{
        "id": "11068",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15877.jpeg",
        "name": "5400 S / SR-173 @ 4015 W, TAY"
    }]
}, {
    "coord": [40.65328, -112.03574],
    "cams": [{
        "id": "11511",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16320.jpeg",
        "name": "5400 S / SR-173 @ 6055 W / Upper Ridge Rd / USANA, WVC"
    }]
}, {
    "coord": [40.65387, -111.91046],
    "cams": [{
        "id": "11613",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16422.jpeg",
        "name": "5400 S / SR-173 @ 700 W / Murray Blvd, MUR"
    }]
}, {
    "coord": [40.65256, -111.99658],
    "cams": [{
        "id": "11067",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15876.jpeg",
        "name": "5415 S / 5400 S / SR-173 @ 4420 W, KRN"
    }]
}, {
    "coord": [40.65262, -112.00598],
    "cams": [{
        "id": "192",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux192.jpeg",
        "name": "5415 S / 5400 S / SR-173 @ 4800 W / Charlotte Ave, KRN"
    }]
}, {
    "coord": [40.71109, -112.02493],
    "cams": [{
        "id": "10612",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15421.jpeg",
        "name": "5600 W / SR-172 @ 2700 S / Lake Park Blvd, WVC"
    }]
}, {
    "coord": [40.69665, -112.02507],
    "cams": [{
        "id": "288",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux288.jpeg",
        "name": "5600 W / SR-172 @ 3500 S / SR-171, WVC"
    }]
}, {
    "coord": [40.68222, -112.02454],
    "cams": [{
        "id": "12055",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16863.jpeg",
        "name": "5600 W / SR-172 @ 4100 S, WVC"
    }]
}, {
    "coord": [40.65318, -112.02443],
    "cams": [{
        "id": "11510",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16319.jpeg",
        "name": "5600 W / SR-172 @ 5400 S / SR-173, SL"
    }]
}, {
    "coord": [40.602173, -112.024403],
    "cams": [{
        "id": "12231",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17030.jpeg",
        "name": "5600 W @ 8200 S, WJD"
    }]
}, {
    "coord": [40.63613, -111.80567],
    "cams": [{
        "id": "11950",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16758.jpeg",
        "name": "6200 S / SR-190 @ 3000 E, HDY"
    }]
}, {
    "coord": [40.63255, -111.79972],
    "cams": [{
        "id": "9897",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14606.jpeg",
        "name": "6200 S / Wasatch Blvd / SR-190 @ Wasatch Blvd / Millrock Dr, CWH"
    }]
}, {
    "coord": [40.638514, -111.944439],
    "cams": [{
        "id": "10553",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15362.jpeg",
        "name": "6200 S @ Jordan Canal Rd / Margray Dr, TAY"
    }]
}, {
    "coord": [40.55872, -111.87216],
    "cams": [{
        "id": "9776",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14486.jpeg",
        "name": "700 E / SR-71 @ 10600 S, SND"
    }]
}, {
    "coord": [40.551519, -111.872178],
    "cams": [{
        "id": "10674",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15483.jpeg",
        "name": "700 E / SR-71 @ 11000 S, SND"
    }]
}, {
    "coord": [40.5443, -111.872],
    "cams": [{
        "id": "10873",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15682.jpeg",
        "name": "700 E / SR-71 @ 11400 S, SND"
    }]
}, {
    "coord": [40.74162, -111.87106],
    "cams": [{
        "id": "11515",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16324.jpeg",
        "name": "700 E / SR-71 @ 1300 S, SLC"
    }]
}, {
    "coord": [40.73361, -111.87094],
    "cams": [{
        "id": "11522",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16331.jpeg",
        "name": "700 E / SR-71 @ 1700 S, SLC"
    }]
}, {
    "coord": [40.69981, -111.87134],
    "cams": [{
        "id": "9558",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux313.jpeg",
        "name": "700 E / SR-71 @ 3300 S / SR-171, SSL"
    }]
}, {
    "coord": [40.686902, -111.871644],
    "cams": [{
        "id": "11856",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16664.jpeg",
        "name": "700 E / SR-71 @ 3900 S, MCK"
    }]
}, {
    "coord": [40.67432, -111.87144],
    "cams": [{
        "id": "9631",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux311.jpeg",
        "name": "700 E / SR-71 @ 4500 S / SR-266, MUR"
    }]
}, {
    "coord": [40.74979, -111.87086],
    "cams": [{
        "id": "139",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux139.jpeg",
        "name": "700 E / SR-71 @ 900 S, SLC"
    }]
}, {
    "coord": [40.5882, -111.87224],
    "cams": [{
        "id": "10535",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15344.jpeg",
        "name": "700 E / SR-71 @ 9000 S / SR-209, SND"
    }]
}, {
    "coord": [40.57329, -111.87216],
    "cams": [{
        "id": "9775",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14485.jpeg",
        "name": "700 E / SR-71 @ 9800 S / Sego Lily Dr, SND"
    }]
}, {
    "coord": [40.75415, -111.89099],
    "cams": [{
        "id": "186",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux186.jpeg",
        "name": "700 S @ Main St, SLC"
    }]
}, {
    "coord": [40.621051, -111.910479],
    "cams": [{
        "id": "12476",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17267.jpeg",
        "name": "7200 S / Jordan River Blvd / SR-48 @ 700 W, MDV"
    }]
}, {
    "coord": [40.609648, -112.024606],
    "cams": [{
        "id": "12230",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17029.jpeg",
        "name": "7800 S @ 5600 W, WJD"
    }]
}, {
    "coord": [40.60963, -111.99747],
    "cams": [{
        "id": "11513",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16322.jpeg",
        "name": "7800 S @ Airport Rd / 4450 W, WJD"
    }]
}, {
    "coord": [40.649683, -111.86613],
    "cams": [{
        "id": "12262",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17061.jpeg",
        "name": "900 E / SR-71 @ 5600 S, MUR"
    }]
}, {
    "coord": [40.62195, -111.86617],
    "cams": [{
        "id": "11775",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16583.jpeg",
        "name": "900 E / SR-71 @ Fort Union Blvd / 7100 S, MDV"
    }]
}, {
    "coord": [40.66559, -111.86484],
    "cams": [{
        "id": "9245",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux332.jpeg",
        "name": "900 E / SR-71 @ Van Winkle Expwy / SR-152, MUR"
    }]
}, {
    "coord": [40.58794, -111.88601],
    "cams": [{
        "id": "12450",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17241.jpeg",
        "name": "9000 S / SR-209 @ 150 E / Trax, SND"
    }]
}, {
    "coord": [40.58769, -111.98663],
    "cams": [{
        "id": "12232",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17031.jpeg",
        "name": "9000 S / SR-209 @ 4000 W, WJD"
    }]
}, {
    "coord": [40.5878, -111.91023],
    "cams": [{
        "id": "9642",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux303.jpeg",
        "name": "9000 S / SR-209 @ 700 W, SND"
    }]
}, {
    "coord": [40.57908, -111.82393],
    "cams": [{
        "id": "11299",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16108.jpeg",
        "name": "9400 S / Little Cottonwood Rd / SR-209 @ 2300 E / Quail Hollow Dr, SND"
    }]
}, {
    "coord": [40.58052, -111.85322],
    "cams": [{
        "id": "9347",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux336.jpeg",
        "name": "9400 S / SR-209 @ 1300 E, SND"
    }]
}, {
    "coord": [40.5794, -111.83314],
    "cams": [{
        "id": "9904",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14613.jpeg",
        "name": "9400 S / SR-209 @ 2000 E / Highland Dr, SND"
    }]
}, {
    "coord": [40.60268, -112.0577],
    "cams": [{
        "id": "11468",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16277.jpeg",
        "name": "Bacchus Hwy / SR-111 @ 8200 S, WJD"
    }]
}, {
    "coord": [40.57581, -112.06143],
    "cams": [{
        "id": "11253",
        "url": "http://www.udottraffic.utah.gov/1_devices/SR-111mile0-all.gif",
        "name": "Bacchus Hwy / SR-111 Liveview NB @ New Bingham Hwy / MP 0, WJD"
    }]
}, {
    "coord": [40.63522, -112.05592],
    "cams": [{
        "id": "10755",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR111%20@%20Bacchus.gif",
        "name": "Bacchus Hwy / SR-111 RWIS SB @ 6400 S / MP 4.15, WVC"
    }]
}, {
    "coord": [40.500803, -111.885112],
    "cams": [{
        "id": "11951",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16759.jpeg",
        "name": "Bangerter Hwy / 200 E / SR-154 @ 13800 S, DPR"
    }]
}, {
    "coord": [40.56199, -111.97692],
    "cams": [{
        "id": "9770",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14480.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 10400 S / South Jordan Pkwy / SR-151, SJO"
    }]
}, {
    "coord": [40.54756, -111.98294],
    "cams": [{
        "id": "12447",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17238.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 11200 S, SJO"
    }]
}, {
    "coord": [40.544316, -111.984498],
    "cams": [{
        "id": "9769",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14479.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 11400 S, SJO"
    }]
}, {
    "coord": [40.54127, -111.98464],
    "cams": [{
        "id": "12405",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17204.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 11500 S, SJO"
    }]
}, {
    "coord": [40.52221, -111.98412],
    "cams": [{
        "id": "306",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux306.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 12600 S / SR-71, RVT"
    }]
}, {
    "coord": [40.50772, -111.98259],
    "cams": [{
        "id": "9768",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14478.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 13400 S, RVT"
    }]
}, {
    "coord": [40.50413, -111.89669],
    "cams": [{
        "id": "11881",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16689.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 200 W / MP 0.78, DPR"
    }]
}, {
    "coord": [40.71853, -111.98532],
    "cams": [{
        "id": "267",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux267.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 2400 S / Lake Park Blvd, WVC"
    }]
}, {
    "coord": [40.71164, -111.981],
    "cams": [{
        "id": "268",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux268.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 2700 S / Parkway Blvd, WVC"
    }]
}, {
    "coord": [40.50039, -111.95768],
    "cams": [{
        "id": "9767",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14477.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 2700 W, BLF"
    }]
}, {
    "coord": [40.50402, -111.90076],
    "cams": [{
        "id": "11880",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16688.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 300 W / MP 1.0, DPR"
    }]
}, {
    "coord": [40.70398, -111.97948],
    "cams": [{
        "id": "269",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux269.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 3100 S, WVC"
    }]
}, {
    "coord": [40.69649, -111.98051],
    "cams": [{
        "id": "266",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux266.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 3500 S / SR-171, WVC"
    }]
}, {
    "coord": [40.68239, -111.98188],
    "cams": [{
        "id": "265",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux265.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 4100 S, WVC"
    }]
}, {
    "coord": [40.66735, -111.98115],
    "cams": [{
        "id": "264",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux264.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 4700 S, TAY"
    }]
}, {
    "coord": [40.50235, -111.90468],
    "cams": [{
        "id": "11879",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16687.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 500 W / MP 1.25, DPR"
    }]
}, {
    "coord": [40.65727, -111.9822],
    "cams": [{
        "id": "263",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux263.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 5200 S, TAY"
    }]
}, {
    "coord": [40.65464, -111.98131],
    "cams": [{
        "id": "12387",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17186.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 5300 S, TAY"
    }]
}, {
    "coord": [40.64941, -111.97998],
    "cams": [{
        "id": "12386",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17185.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 5600 S, TAY"
    }]
}, {
    "coord": [40.64758, -111.97864],
    "cams": [{
        "id": "12396",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17195.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 5700 S, TAY"
    }]
}, {
    "coord": [40.501, -111.90848],
    "cams": [{
        "id": "11878",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16686.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 600 W / MP 1.45, DPR"
    }]
}, {
    "coord": [40.63862, -111.9762],
    "cams": [{
        "id": "193",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux193.jpg",
        "name": "Bangerter Hwy / SR-154 @ 6200 S, WJD"
    }]
}, {
    "coord": [40.62595, -111.97678],
    "cams": [{
        "id": "12397",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17196.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 6900 S, WJD"
    }]
}, {
    "coord": [40.4992, -111.91008],
    "cams": [{
        "id": "11877",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16685.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 700 W / MP 1.6, DPR"
    }]
}, {
    "coord": [40.621759, -111.976691],
    "cams": [{
        "id": "12399",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17198.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 7100 S, WJD"
    }]
}, {
    "coord": [40.60931, -111.97615],
    "cams": [{
        "id": "261",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux261.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 7800 S / SR-48, WJD"
    }]
}, {
    "coord": [40.49681, -111.91378],
    "cams": [{
        "id": "11876",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16684.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 800 W / MP 1.86, DPR"
    }]
}, {
    "coord": [40.58985, -111.97759],
    "cams": [{
        "id": "12400",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17199.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 8900 S, WJD"
    }]
}, {
    "coord": [40.5851, -111.9778],
    "cams": [{
        "id": "12402",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17201.jpeg",
        "name": "Bangerter Hwy / SR-154 @ 9150 S, WJD"
    }]
}, {
    "coord": [40.57334, -111.97719],
    "cams": [{
        "id": "9771",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14481.jpg",
        "name": "Bangerter Hwy / SR-154 @ 9800 S, SJO"
    }]
}, {
    "coord": [40.7432, -111.98969],
    "cams": [{
        "id": "10719",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15528.jpeg",
        "name": "Bangerter Hwy / SR-154 @ California Ave, SLC"
    }]
}, {
    "coord": [40.76845, -111.98641],
    "cams": [{
        "id": "46",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux46.jpeg",
        "name": "Bangerter Hwy / SR-154 @ SLC Airport / N of I-80  / MP 24.1, SLC"
    }]
}, {
    "coord": [40.5003, -111.93915],
    "cams": [{
        "id": "9766",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14476.jpeg",
        "name": "Bangerter Hwy / SR-154 EB @ Redwood Rd / SR-68, BLF"
    }]
}, {
    "coord": [40.624202, -111.975842],
    "cams": [{
        "id": "262",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux262.jpeg",
        "name": "Bangerter Hwy / SR-154 NB @ 7000 S, WJD"
    }]
}, {
    "coord": [40.58801, -111.977],
    "cams": [{
        "id": "12401",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17200.jpeg",
        "name": "Bangerter Hwy / SR-154 NB @ 9000 S / SR-209, WJD"
    }]
}, {
    "coord": [40.6242, -111.97707],
    "cams": [{
        "id": "12398",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17197.jpeg",
        "name": "Bangerter Hwy / SR-154 SB @ 7000 S / Jordan Landing Blvd, WJD"
    }]
}, {
    "coord": [40.587641, -111.978138],
    "cams": [{
        "id": "260",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux260.jpeg",
        "name": "Bangerter Hwy / SR-154 SB @ 9000 S / SR-209, WJD"
    }]
}, {
    "coord": [40.50104, -111.93834],
    "cams": [{
        "id": "11603",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16412.jpeg",
        "name": "Bangerter Hwy / SR-154 WB @ Redwood Rd / SR-68, RVT"
    }]
}, {
    "coord": [40.79452, -111.90363],
    "cams": [{
        "id": "180",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux180.jpeg",
        "name": "Beck St / US-89 @ Victory Rd / SR-186, SLC"
    }]
}, {
    "coord": [40.648236, -111.662442],
    "cams": [{
        "id": "11405",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16214.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ Butler / MP 10, SL"
    }]
}, {
    "coord": [40.65035, -111.65022],
    "cams": [{
        "id": "11406",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16215.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ Cardiff Fork / MP 10.74, SL"
    }]
}, {
    "coord": [40.62426, -111.75071],
    "cams": [{
        "id": "11403",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16212.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ Dogwood / MP 4.1, SL"
    }]
}, {
    "coord": [40.63338, -111.72272],
    "cams": [{
        "id": "11404",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16213.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ S-Curves / MP 6.38, SL"
    }]
}, {
    "coord": [40.77982, -111.88988],
    "cams": [{
        "id": "11633",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16442.jpeg",
        "name": "Columbus St / SR-186 @ 500 N, SLC"
    }]
}, {
    "coord": [40.703844, -111.958006],
    "cams": [{
        "id": "175",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux175.jpeg",
        "name": "Constitution Blvd / 2700 W @ 3100 S, WVC"
    }]
}, {
    "coord": [40.7574, -111.83657],
    "cams": [{
        "id": "187",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux187.jpeg",
        "name": "Foothill Dr / Honorary Veterans Blvd / SR-186 @ Mario Capecchi Dr, SLC"
    }]
}, {
    "coord": [40.75071, -111.83067],
    "cams": [{
        "id": "9246",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux333.jpeg",
        "name": "Foothill Dr / Honorary Veterans Blvd / SR-186 @ Sunnyside Ave, SLC"
    }]
}, {
    "coord": [40.75488, -111.8336],
    "cams": [{
        "id": "188",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux188.jpeg",
        "name": "Foothill Dr / Honorary Veterans Blvd / SR-186 @ Wakara Way, SLC"
    }]
}, {
    "coord": [40.73898, -111.82501],
    "cams": [{
        "id": "9265",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux334.jpeg",
        "name": "Foothill Dr / SR-186 @ 2300 E, SLC"
    }]
}, {
    "coord": [40.71695, -111.80947],
    "cams": [{
        "id": "65",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux65.jpeg",
        "name": "Foothill Dr / SR-186 @ Parley`s Way, SLC"
    }]
}, {
    "coord": [40.62628, -111.85473],
    "cams": [{
        "id": "12021",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16829.jpeg",
        "name": "Fort Union Blvd / 6910 S @ 1300 E, CWH"
    }]
}, {
    "coord": [40.62387, -111.82458],
    "cams": [{
        "id": "12022",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16830.jpeg",
        "name": "Fort Union Blvd / 7000 S @ 2300 E, CWH"
    }]
}, {
    "coord": [40.70393, -111.94834],
    "cams": [{
        "id": "9267",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux9174.jpeg",
        "name": "Grizzlies Blvd / 3100 S @ Decker Lake Dr, WVC"
    }]
}, {
    "coord": [40.615336, -111.833568],
    "cams": [{
        "id": "11945",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16753.jpeg",
        "name": "Highland Dr / 2000 E @ Bengal Blvd / Parkridge Dr, CWH"
    }]
}, {
    "coord": [40.62406, -111.83431],
    "cams": [{
        "id": "9643",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux344.jpeg",
        "name": "Highland Dr / 2000 E @ Fort Union Blvd / 7000 S, CWH"
    }]
}, {
    "coord": [40.63837, -111.83419],
    "cams": [{
        "id": "11964",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16772.jpeg",
        "name": "Highland Dr / Van Winkle Expwy / SR-152 @ 6200 S, HDY"
    }]
}, {
    "coord": [40.68712, -111.84497],
    "cams": [{
        "id": "9647",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux348.jpeg",
        "name": "Highland Dr @ 3900 S, SL"
    }]
}, {
    "coord": [40.56697, -111.89907],
    "cams": [{
        "id": "82",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux82.jpeg",
        "name": "I-15 NB @ 10200 S / MP 294.2, SND"
    }]
}, {
    "coord": [40.55949, -111.89728],
    "cams": [{
        "id": "11942",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16750.jpeg",
        "name": "I-15 NB @ 10600 S / SR-151 / MP 293.65, SND"
    }]
}, {
    "coord": [40.55918, -111.8971],
    "cams": [{
        "id": "11943",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16751.jpeg",
        "name": "I-15 NB @ 10600 S / SR-151 / MP 293.65, SND (Tunnel)"
    }]
}, {
    "coord": [40.74455, -111.90366],
    "cams": [{
        "id": "112",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux112.jpeg",
        "name": "I-15 NB @ 1100 S / MP 306.53, SLC"
    }]
}, {
    "coord": [40.54042, -111.89324],
    "cams": [{
        "id": "10694",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15503.jpeg",
        "name": "I-15 NB @ 11500 S / MP 292.35, DPR"
    }]
}, {
    "coord": [40.53508, -111.89215],
    "cams": [{
        "id": "9656",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux356.jpeg",
        "name": "I-15 NB @ 11900 S / MP 291.98, DPR"
    }]
}, {
    "coord": [40.52727, -111.89021],
    "cams": [{
        "id": "9653",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux353.jpeg",
        "name": "I-15 NB @ 12300 S / SR-71 / MP 291.4, DPR"
    }]
}, {
    "coord": [40.49727, -111.89078],
    "cams": [{
        "id": "11721",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16529.jpeg",
        "name": "I-15 NB @ 14000 S / MP 289.34, DPR"
    }]
}, {
    "coord": [40.4866, -111.89563],
    "cams": [{
        "id": "11724",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16532.jpeg",
        "name": "I-15 NB @ 14500 S / MP 288.54, DPR"
    }]
}, {
    "coord": [40.87513, -111.89635],
    "cams": [{
        "id": "10494",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15303.jpeg",
        "name": "I-15 NB @ 1500 S / MP 316.23, WXS"
    }]
}, {
    "coord": [40.47534, -111.90533],
    "cams": [{
        "id": "11727",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16535.jpeg",
        "name": "I-15 NB @ 15200 S / MP 287.6, DPR"
    }]
}, {
    "coord": [40.4706, -111.90863],
    "cams": [{
        "id": "11728",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16536.jpeg",
        "name": "I-15 NB @ 15400 S / MP 287.23, DPR"
    }]
}, {
    "coord": [40.7309, -111.90419],
    "cams": [{
        "id": "106",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux106.jpeg",
        "name": "I-15 NB @ 1800 S / MP 305.6, SLC"
    }]
}, {
    "coord": [40.86128, -111.90137],
    "cams": [{
        "id": "11858",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16666.jpeg",
        "name": "I-15 NB @ 2600 S / SR-93 / MP 315.26, WXS"
    }]
}, {
    "coord": [40.7001, -111.90182],
    "cams": [{
        "id": "102",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux102.jpeg",
        "name": "I-15 NB @ 3300 S / SR-171 / MP 303.49, SSL"
    }]
}, {
    "coord": [40.68973, -111.90266],
    "cams": [{
        "id": "100",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux100.jpeg",
        "name": "I-15 NB @ 3750 S / MP 302.75, SSL"
    }]
}, {
    "coord": [40.76096, -111.9126],
    "cams": [{
        "id": "117",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux117.jpeg",
        "name": "I-15 NB @ 400 S / MP 307.79, SLC"
    }]
}, {
    "coord": [40.68283, -111.90188],
    "cams": [{
        "id": "99",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux99.jpeg",
        "name": "I-15 NB @ 4100 S / MP 302.25, MUR"
    }]
}, {
    "coord": [40.43892, -111.89791],
    "cams": [{
        "id": "11734",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16542.jpeg",
        "name": "I-15 NB @ 4200 N / MP 284.65, LHI"
    }]
}, {
    "coord": [40.67493, -111.90051],
    "cams": [{
        "id": "98",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux98.jpeg",
        "name": "I-15 NB @ 4500 S / SR-266 / MP 301.71, MUR"
    }]
}, {
    "coord": [40.75849, -111.91204],
    "cams": [{
        "id": "115",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux115.jpeg",
        "name": "I-15 NB @ 500 S / MP 307.61, SLC"
    }]
}, {
    "coord": [40.90102, -111.8919],
    "cams": [{
        "id": "9389",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5131.jpeg",
        "name": "I-15 NB @ 500 W / US-89 / MP 318.1, BTF"
    }]
}, {
    "coord": [40.66468, -111.90082],
    "cams": [{
        "id": "96",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux96.jpeg",
        "name": "I-15 NB @ 5000 S / MP 301, MUR"
    }]
}, {
    "coord": [40.65912, -111.90085],
    "cams": [{
        "id": "95",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux95.jpeg",
        "name": "I-15 NB @ 5200 S / MP 300.63, MUR"
    }]
}, {
    "coord": [40.65053, -111.90166],
    "cams": [{
        "id": "93",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux93.jpeg",
        "name": "I-15 NB @ 5550 S / MP 300, MUR"
    }]
}, {
    "coord": [40.78305, -111.91038],
    "cams": [{
        "id": "120",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux120.jpeg",
        "name": "I-15 NB @ 600 N / SR-268 / MP 309.34, SLC"
    }]
}, {
    "coord": [40.75601, -111.90858],
    "cams": [{
        "id": "114",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux114.jpeg",
        "name": "I-15 NB @ 600 S Exit / MP 307.36, SLC"
    }]
}, {
    "coord": [40.62848, -111.90272],
    "cams": [{
        "id": "90",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux90.jpeg",
        "name": "I-15 NB @ 6600 S / MP 298.5, MDV"
    }]
}, {
    "coord": [40.62503, -111.9024],
    "cams": [{
        "id": "12404",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17203.jpeg",
        "name": "I-15 NB @ 6950 S / MP 298.25, MDV"
    }]
}, {
    "coord": [40.60558, -111.9045],
    "cams": [{
        "id": "87",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux87.jpeg",
        "name": "I-15 NB @ 8000 S / MP 296.9, MDV"
    }]
}, {
    "coord": [40.58856, -111.89897],
    "cams": [{
        "id": "85",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux85.jpeg",
        "name": "I-15 NB @ 9000 S / SR-209 / MP 295.66, SND"
    }]
}, {
    "coord": [40.57506, -111.89957],
    "cams": [{
        "id": "83",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux83.jpeg",
        "name": "I-15 NB @ 9600 S / MP 294.76, SND"
    }]
}, {
    "coord": [40.81775, -111.91665],
    "cams": [{
        "id": "9409",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux340.jpeg",
        "name": "I-15 NB @ Beck St / US-89 / MP 312.06, SLC"
    }]
}, {
    "coord": [40.83539, -111.91501],
    "cams": [{
        "id": "9397",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5126.jpeg",
        "name": "I-15 NB @ I-215 North Interchange / MP 313.28, NSL"
    }]
}, {
    "coord": [40.7718, -111.91016],
    "cams": [{
        "id": "118",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux118.jpeg",
        "name": "I-15 NB @ North Temple St / MP 308.59, SLC"
    }]
}, {
    "coord": [40.7938, -111.91761],
    "cams": [{
        "id": "9393",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5121.jpeg",
        "name": "I-15 SB @ 1000 N / MP 310.2, SLC"
    }]
}, {
    "coord": [40.55816, -111.89932],
    "cams": [{
        "id": "81",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux81.jpeg",
        "name": "I-15 SB @ 10600 S / South Jordan Pkwy / SR-151 / MP 293.6, SJO"
    }]
}, {
    "coord": [40.55017, -111.89676],
    "cams": [{
        "id": "9654",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux357.jpeg",
        "name": "I-15 SB @ 11000 S / MP 293, SJO"
    }]
}, {
    "coord": [40.54467, -111.89566],
    "cams": [{
        "id": "10695",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15504.jpeg",
        "name": "I-15 SB @ 11400 S / MP 292.62, SJO"
    }]
}, {
    "coord": [40.52338, -111.8916],
    "cams": [{
        "id": "12403",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17202.jpeg",
        "name": "I-15 SB @ 12500 S / MP 291.17, DPR"
    }]
}, {
    "coord": [40.52223, -111.89154],
    "cams": [{
        "id": "11752",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16560.jpeg",
        "name": "I-15 SB @ 12600 S / MP 291.1, DPR"
    }]
}, {
    "coord": [40.74127, -111.90494],
    "cams": [{
        "id": "111",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux111.jpeg",
        "name": "I-15 SB @ 1300 S / MP 306.33, SLC"
    }]
}, {
    "coord": [40.51511, -111.89189],
    "cams": [{
        "id": "11751",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16559.jpeg",
        "name": "I-15 SB @ 13000 S / MP 290.6, DPR"
    }]
}, {
    "coord": [40.50782, -111.89181],
    "cams": [{
        "id": "11750",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16558.jpeg",
        "name": "I-15 SB @ 13400 S / MP 290.08, DPR"
    }]
}, {
    "coord": [40.93513, -111.89171],
    "cams": [{
        "id": "10402",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15111.jpeg",
        "name": "I-15 SB @ 1400 N / MP 320.46, CVL"
    }]
}, {
    "coord": [40.49354, -111.89156],
    "cams": [{
        "id": "11722",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16530.jpeg",
        "name": "I-15 SB @ 14200 S / MP 289.09, DPR"
    }]
}, {
    "coord": [40.49036, -111.89306],
    "cams": [{
        "id": "11723",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16531.jpeg",
        "name": "I-15 SB @ 14300 S / MP 288.84, DPR"
    }]
}, {
    "coord": [40.483631, -111.899755],
    "cams": [{
        "id": "11725",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16533.jpeg",
        "name": "I-15 SB @ 14600 S / Highland Dr / SR-140 / MP 288.3, BLF"
    }]
}, {
    "coord": [40.73834, -111.90497],
    "cams": [{
        "id": "110",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux110.jpeg",
        "name": "I-15 SB @ 1500 S / MP 306.11, SLC"
    }]
}, {
    "coord": [40.47961, -111.90345],
    "cams": [{
        "id": "11726",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16534.jpeg",
        "name": "I-15 SB @ 15000 S / MP 287.91, BLF"
    }]
}, {
    "coord": [40.46308, -111.91422],
    "cams": [{
        "id": "11729",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16537.jpeg",
        "name": "I-15 SB @ 15800 S / MP 286.64, BLF"
    }]
}, {
    "coord": [40.45787, -111.91483],
    "cams": [{
        "id": "11730",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16538.jpeg",
        "name": "I-15 SB @ 16200 S / MP 286.3, BLF"
    }]
}, {
    "coord": [40.80381, -111.92236],
    "cams": [{
        "id": "9394",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5122.jpeg",
        "name": "I-15 SB @ 1700 N / MP 310.93, SLC"
    }]
}, {
    "coord": [40.72581, -111.90494],
    "cams": [{
        "id": "109",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux109.jpeg",
        "name": "I-15 SB @ 2100 S / SR-201 / MP 305.25, SLC"
    }]
}, {
    "coord": [40.80965, -111.92456],
    "cams": [{
        "id": "9395",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5123.jpeg",
        "name": "I-15 SB @ 2300 N / Warm Springs Rd / MP 311.34, SLC"
    }]
}, {
    "coord": [40.72084, -111.90497],
    "cams": [{
        "id": "105",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux105.jpeg",
        "name": "I-15 SB @ 2300 S / MP 304.9, SSL"
    }]
}, {
    "coord": [40.71547, -111.90472],
    "cams": [{
        "id": "104",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux104.jpeg",
        "name": "I-15 SB @ 2550 S / MP 304.53, SSL"
    }]
}, {
    "coord": [40.86144, -111.90256],
    "cams": [{
        "id": "9402",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5129.jpeg",
        "name": "I-15 SB @ 2600 S  / SR-93 / MP 315.24, WXS"
    }]
}, {
    "coord": [40.70819, -111.90432],
    "cams": [{
        "id": "103",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux103.jpeg",
        "name": "I-15 SB @ 2900 S / MP 304, SSL"
    }]
}, {
    "coord": [40.69945, -111.90294],
    "cams": [{
        "id": "101",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux101.jpeg",
        "name": "I-15 SB @ 3300 S / SR-171 / MP 303.45, SSL"
    }]
}, {
    "coord": [40.77805, -111.91106],
    "cams": [{
        "id": "119",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux119.jpeg",
        "name": "I-15 SB @ 400 N / MP 309.03, SLC"
    }]
}, {
    "coord": [40.89428, -111.89616],
    "cams": [{
        "id": "10389",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15098.jpeg",
        "name": "I-15 SB @ 400 N / SR-106 / MP 317.55, WBN"
    }]
}, {
    "coord": [40.75997, -111.91483],
    "cams": [{
        "id": "116",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux116.jpeg",
        "name": "I-15 SB @ 400 S / MP 307.74, SLC"
    }]
}, {
    "coord": [40.6739, -111.90247],
    "cams": [{
        "id": "97",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux97.jpeg",
        "name": "I-15 SB @ 4500 S / SR-266 / MP 301.65, MUR"
    }]
}, {
    "coord": [40.44336, -111.90501],
    "cams": [{
        "id": "11733",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16541.jpeg",
        "name": "I-15 SB @ 4600 N / MP 285.12, LHI"
    }]
}, {
    "coord": [40.44583, -111.90849],
    "cams": [{
        "id": "11732",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16540.jpeg",
        "name": "I-15 SB @ 4800 N / MP 285.37, LHI"
    }]
}, {
    "coord": [40.88359, -111.89697],
    "cams": [{
        "id": "9408",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5130.jpeg",
        "name": "I-15 SB @ 500 S / SR-68 / MP 316.84, WBN"
    }]
}, {
    "coord": [40.65522, -111.90266],
    "cams": [{
        "id": "9623",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux94.jpeg",
        "name": "I-15 SB @ 5300 S / SR-173 / MP 300.35, MUR"
    }]
}, {
    "coord": [40.64556, -111.90313],
    "cams": [{
        "id": "92",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux92.jpeg",
        "name": "I-15 SB @ 5800 S / MP 299.7, MUR"
    }]
}, {
    "coord": [40.911, -111.89174],
    "cams": [{
        "id": "10493",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15302.jpeg",
        "name": "I-15 SB @ 600 S / MP 318.76, CVL"
    }]
}, {
    "coord": [40.7536, -111.91161],
    "cams": [{
        "id": "113",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux113.jpeg",
        "name": "I-15 SB @ 700 S / MP 307.29, SLC"
    }]
}, {
    "coord": [40.61633, -111.90613],
    "cams": [{
        "id": "88",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux88.jpeg",
        "name": "I-15 SB @ 7400 S / MP 297.6, MDV"
    }]
}, {
    "coord": [40.59808, -111.904],
    "cams": [{
        "id": "86",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux86.jpeg",
        "name": "I-15 SB @ 8400 S / MP 296.4, MDV"
    }]
}, {
    "coord": [40.5859, -111.90085],
    "cams": [{
        "id": "84",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux84.jpeg",
        "name": "I-15 SB @ 9100 S / MP 295.48, SND"
    }]
}, {
    "coord": [40.5039, -111.89173],
    "cams": [{
        "id": "9700",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14408.jpeg",
        "name": "I-15 SB @ Bangerter Hwy / SR-154 / MP 289.83, DPR"
    }]
}, {
    "coord": [40.82844, -111.91606],
    "cams": [{
        "id": "9396",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5125.jpeg",
        "name": "I-15 SB @ Beck St / US-89 / MP 312.8, NSL"
    }]
}, {
    "coord": [40.84219, -111.91578],
    "cams": [{
        "id": "9401",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5127.jpeg",
        "name": "I-15 SB @ Center St / MP 313.73, NSL"
    }]
}, {
    "coord": [40.63661, -111.90504],
    "cams": [{
        "id": "91",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux91.jpeg",
        "name": "I-15 SB @ I-215 South Interchange / MP 299, MUR"
    }]
}, {
    "coord": [40.85044, -111.91245],
    "cams": [{
        "id": "9400",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5128.jpeg",
        "name": "I-15 SB @ Main St / MP 314.31, NSL"
    }]
}, {
    "coord": [40.9211, -111.89134],
    "cams": [{
        "id": "9390",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5132.jpeg",
        "name": "I-15 SB @ Parrish Ln / 400 N / SR-105 / MP 319.51, CVL"
    }]
}, {
    "coord": [40.45056, -111.91364],
    "cams": [{
        "id": "11731",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16539.jpeg",
        "name": "I-15 SB @ Point of the Mountain / MP 285.78, UT"
    }]
}, {
    "coord": [40.700092, -111.794423],
    "cams": [{
        "id": "1",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux1.jpeg",
        "name": "I-215 E NB @ 3300 S / SR-171 / MP 1.84, MCK"
    }]
}, {
    "coord": [40.68937, -111.7971],
    "cams": [{
        "id": "2",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux2.jpeg",
        "name": "I-215 E NB @ 3800 S / MP 2.58, MCK"
    }]
}, {
    "coord": [40.68265, -111.79714],
    "cams": [{
        "id": "4",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux4.jpeg",
        "name": "I-215 E NB @ 4100 S / MP 3.05, MCK"
    }]
}, {
    "coord": [40.66625, -111.80545],
    "cams": [{
        "id": "6",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux6.jpeg",
        "name": "I-215 E NB @ 4800 S / MP 4.27, HDY"
    }]
}, {
    "coord": [40.65701, -111.80678],
    "cams": [{
        "id": "7",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux7.jpeg",
        "name": "I-215 E NB @ 5200 S / MP 4.65, HDY"
    }]
}, {
    "coord": [40.64836, -111.80766],
    "cams": [{
        "id": "8",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux8.jpeg",
        "name": "I-215 E NB @ 5650 S / MP 5.59, HDY"
    }]
}, {
    "coord": [40.63989, -111.80786],
    "cams": [{
        "id": "12407",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17206.jpeg",
        "name": "I-215 E NB @ 6100 S / MP 6.1, HDY"
    }]
}, {
    "coord": [40.63746, -111.80779],
    "cams": [{
        "id": "9",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux9.jpeg",
        "name": "I-215 E NB @ 6200 S / SR-190 / MP 6.34, HDY"
    }]
}, {
    "coord": [40.63451, -111.81117],
    "cams": [{
        "id": "10",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux10.jpeg",
        "name": "I-215 E NB @ 6400 S / MP 6.56, HDY"
    }]
}, {
    "coord": [40.707509, -111.79672],
    "cams": [{
        "id": "148",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux148.jpeg",
        "name": "I-215 E NB @ Parleys Canyon / 2900 S / MP 1.3, MCK"
    }]
}, {
    "coord": [40.68734, -111.7978],
    "cams": [{
        "id": "3",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux3.jpeg",
        "name": "I-215 E SB @ 3900 S / MP 2.73, MCK"
    }]
}, {
    "coord": [40.674755, -111.802909],
    "cams": [{
        "id": "5",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5.jpeg",
        "name": "I-215 E SB @ 4500 S / SR-266 / MP 3.67, MCK"
    }]
}, {
    "coord": [40.83213, -111.93644],
    "cams": [{
        "id": "10681",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15490.jpeg",
        "name": "I-215 N EB On-ramp @ Redwood Rd / SR-68 / MP 27.38, NSL"
    }]
}, {
    "coord": [40.83449, -111.92197],
    "cams": [{
        "id": "271",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux271.jpeg",
        "name": "I-215 N WB @ 450 W / MP 28.54, NSL"
    }]
}, {
    "coord": [40.83432, -111.93618],
    "cams": [{
        "id": "270",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux270.jpeg",
        "name": "I-215 N WB @ Redwood Rd / SR-68 / MP 27.4, NSL (HUB)"
    }]
}, {
    "coord": [40.83504, -111.9352],
    "cams": [{
        "id": "10682",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15491.jpeg",
        "name": "I-215 N WB Off-ramp @ Redwood Rd / SR-68 / MP 27.44, NSL"
    }]
}, {
    "coord": [40.63763, -111.92103],
    "cams": [{
        "id": "21",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux21.jpeg",
        "name": "I-215 S EB @ 1200 W / Murray Pkwy Ave / MP 12.34, MUR"
    }]
}, {
    "coord": [40.63136, -111.83796],
    "cams": [{
        "id": "13",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux13.jpeg",
        "name": "I-215 S EB @ 1900 E / MP 7.98, CWH"
    }]
}, {
    "coord": [40.64688, -111.94916],
    "cams": [{
        "id": "25",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux25.jpeg",
        "name": "I-215 S EB @ 2200 W / MP 14.06, TAY"
    }]
}, {
    "coord": [40.63424, -111.82537],
    "cams": [{
        "id": "12023",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16831.jpeg",
        "name": "I-215 S EB @ 2300 E / MP 7.3, CWH"
    }]
}, {
    "coord": [40.63072, -111.88173],
    "cams": [{
        "id": "17",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17.jpeg",
        "name": "I-215 S EB @ 300 E / MP 10.18, MDV"
    }]
}, {
    "coord": [40.63568, -111.91044],
    "cams": [{
        "id": "20",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux20.jpeg",
        "name": "I-215 S EB @ 700 W / MP 11.8, MUR"
    }]
}, {
    "coord": [40.64253, -111.93745],
    "cams": [{
        "id": "23",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux23.jpeg",
        "name": "I-215 S EB @ Redwood Rd / SR-68 / MP 13.4, TAY"
    }]
}, {
    "coord": [40.63153, -111.88975],
    "cams": [{
        "id": "18",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux18.jpeg",
        "name": "I-215 S EB @ State St / US-89 / MP 10.66, MUR"
    }]
}, {
    "coord": [40.63078, -111.85444],
    "cams": [{
        "id": "14",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14.jpeg",
        "name": "I-215 S WB @ 1300 E / MP 8.87, CWH"
    }]
}, {
    "coord": [40.64432, -111.92868],
    "cams": [{
        "id": "22",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux22.jpeg",
        "name": "I-215 S WB @ 1300 W / MP 12.9, MUR"
    }]
}, {
    "coord": [40.63334, -111.8341],
    "cams": [{
        "id": "12",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux12.jpeg",
        "name": "I-215 S WB @ 2000 E / Highland Dr / SR-152 / MP 7.76, CWH"
    }]
}, {
    "coord": [40.63472, -111.82453],
    "cams": [{
        "id": "11",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux11.jpeg",
        "name": "I-215 S WB @ 2300 E / MP 7.25, HDY"
    }]
}, {
    "coord": [40.63524, -111.89751],
    "cams": [{
        "id": "19",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux19.jpeg",
        "name": "I-215 S WB @ 300 W / MP 11.15, MUR"
    }]
}, {
    "coord": [40.6306, -111.8662],
    "cams": [{
        "id": "16",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16.jpeg",
        "name": "I-215 S WB @ 900 E / SR-71 / MP 9.5, MDV"
    }]
}, {
    "coord": [40.64504, -111.93948],
    "cams": [{
        "id": "24",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux24.jpeg",
        "name": "I-215 S WB @ Redwood Rd / SR-68 / MP 13.5, TAY"
    }]
}, {
    "coord": [40.6304, -111.86241],
    "cams": [{
        "id": "15",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15.jpeg",
        "name": "I-215 S WB @ Union Park Ave / MP 9.31, MDV"
    }]
}, {
    "coord": [40.81321, -111.94893],
    "cams": [{
        "id": "277",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux277.jpeg",
        "name": "I-215 W NB @ 2100 N / MP 25.63, SLC"
    }]
}, {
    "coord": [40.70787, -111.95299],
    "cams": [{
        "id": "32",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux32.jpeg",
        "name": "I-215 W NB @ 2900 S / MP 18.22, WVC"
    }]
}, {
    "coord": [40.69713, -111.94957],
    "cams": [{
        "id": "31",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux31.jpeg",
        "name": "I-215 W NB @ 3500 S / SR-171 / MP 17.58, WVC"
    }]
}, {
    "coord": [40.666368, -111.952245],
    "cams": [{
        "id": "27",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux27.jpeg",
        "name": "I-215 W NB @ 4700 S / SR-266 / MP 15.46, TAY"
    }]
}, {
    "coord": [40.75835, -111.95001],
    "cams": [{
        "id": "39",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux39.jpeg",
        "name": "I-215 W NB @ 500 S / MP 21.75, SLC"
    }]
}, {
    "coord": [40.78505, -111.94855],
    "cams": [{
        "id": "42",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux42.jpeg",
        "name": "I-215 W NB @ 700 N / MP 23.7, SLC"
    }]
}, {
    "coord": [40.750701, -111.948264],
    "cams": [{
        "id": "11747",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16555.jpeg",
        "name": "I-215 W NB @ 900 S / MP 21.3,SLC"
    }]
}, {
    "coord": [40.74052, -111.94832],
    "cams": [{
        "id": "37",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux37.jpeg",
        "name": "I-215 W NB @ California Ave / 1330 S / MP 20.6, SLC"
    }]
}, {
    "coord": [40.77181, -111.94873],
    "cams": [{
        "id": "40",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux40.jpeg",
        "name": "I-215 W NB @ North Temple St / MP 22.8, SLC"
    }]
}, {
    "coord": [40.79582, -111.94972],
    "cams": [{
        "id": "275",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux275.jpeg",
        "name": "I-215 W SB @ 1200 N / MP 24.42, SLC"
    }]
}, {
    "coord": [40.80215, -111.94963],
    "cams": [{
        "id": "276",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux276.jpeg",
        "name": "I-215 W SB @ 1500 N / MP 24.91, SLC"
    }]
}, {
    "coord": [40.72967, -111.95036],
    "cams": [{
        "id": "35",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux35.jpeg",
        "name": "I-215 W SB @ 1900 S / MP 19.82, SLC"
    }]
}, {
    "coord": [40.72103, -111.95302],
    "cams": [{
        "id": "34",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux34.jpeg",
        "name": "I-215 W SB @ 2300 S / MP 19.25, WVC"
    }]
}, {
    "coord": [40.82182, -111.94975],
    "cams": [{
        "id": "278",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux278.jpeg",
        "name": "I-215 W SB @ 2500 N / MP 26.31, SLC"
    }]
}, {
    "coord": [40.71423, -111.95418],
    "cams": [{
        "id": "33",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux33.jpeg",
        "name": "I-215 W SB @ 2600 S / MP 18.71, WVC"
    }]
}, {
    "coord": [40.83029, -111.94639],
    "cams": [{
        "id": "279",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux279.jpeg",
        "name": "I-215 W SB @ 2800 N / MP 26.8, SLC"
    }]
}, {
    "coord": [40.69454, -111.95258],
    "cams": [{
        "id": "30",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux30.jpeg",
        "name": "I-215 W SB @ 3500 S / SR-171 / MP 17.4, WVC"
    }]
}, {
    "coord": [40.68794, -111.95197],
    "cams": [{
        "id": "29",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux29.jpeg",
        "name": "I-215 W SB @ 3900 S / MP 16.9, WVC"
    }]
}, {
    "coord": [40.67644, -111.95258],
    "cams": [{
        "id": "28",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux28.jpeg",
        "name": "I-215 W SB @ 4300 S / MP 16.18, TAY"
    }]
}, {
    "coord": [40.77945, -111.94969],
    "cams": [{
        "id": "41",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux41.jpeg",
        "name": "I-215 W SB @ 450 N / MP 23.31, SLC"
    }]
}, {
    "coord": [40.65984, -111.95302],
    "cams": [{
        "id": "26",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux26.jpeg",
        "name": "I-215 W SB @ 5100 S / MP 14.96, TAY"
    }]
}, {
    "coord": [40.74032, -111.94986],
    "cams": [{
        "id": "36",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux36.jpeg",
        "name": "I-215 W SB @ California Ave / 1330 S / MP 20.5, SLC"
    }]
}, {
    "coord": [40.71954, -111.77901],
    "cams": [{
        "id": "150",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux150.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Chain Up Area East / MP 129.5, SL"
    }]
}, {
    "coord": [40.749, -111.71019],
    "cams": [{
        "id": "158",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux158.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ East Canyon / SR-65 / MP 133.96, SL"
    }]
}, {
    "coord": [40.71142, -111.79006],
    "cams": [{
        "id": "68",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux68.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Exit 130 to SB I-215 E / MP 128.5, SL"
    }]
}, {
    "coord": [40.73393, -111.7473],
    "cams": [{
        "id": "153",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux153.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 131.42, SL"
    }]
}, {
    "coord": [40.74222, -111.73273],
    "cams": [{
        "id": "155",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux155.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 132.53, SL"
    }]
}, {
    "coord": [40.7463, -111.72476],
    "cams": [{
        "id": "156",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux156.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 132.97, SL"
    }]
}, {
    "coord": [40.74778, -111.69954],
    "cams": [{
        "id": "159",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux159.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 134.47, SL"
    }]
}, {
    "coord": [40.74406, -111.69221],
    "cams": [{
        "id": "160",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux160.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 134.93, SL"
    }]
}, {
    "coord": [40.7281, -111.7656],
    "cams": [{
        "id": "11424",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80%20Parleys%20Quarry.gif",
        "name": "I-80 / Parley`s Canyon RWIS EB @ East Quarry / MP 130.36, SL (Low Lite)"
    }]
}, {
    "coord": [40.71767, -111.78416],
    "cams": [{
        "id": "69",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux69.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Chain Up Area West / MP 129.2, SL"
    }]
}, {
    "coord": [40.75235, -111.71423],
    "cams": [{
        "id": "157",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux157.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ East Canyon / SR-65 On-ramp / MP 133.61, SL"
    }]
}, {
    "coord": [40.72914, -111.76554],
    "cams": [{
        "id": "151",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux151.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ East Quarry / MP 130.38, SL"
    }]
}, {
    "coord": [40.74016, -111.66792],
    "cams": [{
        "id": "163",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux163.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Lamb`s Canyon Rd Off-ramp / MP 136.45, SL"
    }]
}, {
    "coord": [40.74167, -111.6754],
    "cams": [{
        "id": "162",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux162.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Lamb`s Canyon Rd On-ramp / MP 135.96, SL"
    }]
}, {
    "coord": [40.73265, -111.75594],
    "cams": [{
        "id": "152",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux152.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Milepost 131.1, SL"
    }]
}, {
    "coord": [40.748466, -111.697635],
    "cams": [{
        "id": "12458",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17249.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Mountain Dell / MP 134.6, SL"
    }]
}, {
    "coord": [40.74147, -111.74178],
    "cams": [{
        "id": "154",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux154.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Mt Aire Canyon Rd / MP 132.01, SL"
    }]
}, {
    "coord": [40.72521, -111.7718],
    "cams": [{
        "id": "70",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux70.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Quarry / MP 129.88, SL"
    }]
}, {
    "coord": [40.74199, -111.68416],
    "cams": [{
        "id": "161",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux161.jpeg",
        "name": "I-80 / Parleys Canyon EB @ Milepost 135.46, SL"
    }]
}, {
    "coord": [40.7433, -111.65681],
    "cams": [{
        "id": "164",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux164.jpeg",
        "name": "I-80 / Parleys Canyon EB @ Milepost 136.95, SL"
    }]
}, {
    "coord": [40.71622, -111.83346],
    "cams": [{
        "id": "60",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux60.jpeg",
        "name": "I-80 @ 2000 E / MP 126.2, SLC"
    }]
}, {
    "coord": [40.7639, -111.91991],
    "cams": [{
        "id": "107",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux107.jpeg",
        "name": "I-80 EB @ 1000 W / MP 118.85, SLC"
    }]
}, {
    "coord": [40.76463, -111.9318],
    "cams": [{
        "id": "11675",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16483.jpeg",
        "name": "I-80 EB @ 1300 W / MP 118.41 SLC"
    }]
}, {
    "coord": [40.71221, -111.82107],
    "cams": [{
        "id": "62",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux62.jpeg",
        "name": "I-80 EB @ 2400 E / MP 126.82, SLC"
    }]
}, {
    "coord": [40.71418, -111.81214],
    "cams": [{
        "id": "63",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux63.jpeg",
        "name": "I-80 EB @ 2800 E / MP 127.39, SL"
    }]
}, {
    "coord": [40.71721, -111.90048],
    "cams": [{
        "id": "53",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux53.jpeg",
        "name": "I-80 EB @ 300 W / MP 122.57, SSL"
    }]
}, {
    "coord": [40.76394, -111.97056],
    "cams": [{
        "id": "48",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux48.jpeg",
        "name": "I-80 EB @ 3200 W / North Temple St / MP 116.33, SLC"
    }]
}, {
    "coord": [40.71116, -111.80048],
    "cams": [{
        "id": "66",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux66.jpeg",
        "name": "I-80 EB @ 3250 E / East of Foothill / MP 127.97, SL"
    }]
}, {
    "coord": [40.76381, -111.97688],
    "cams": [{
        "id": "47",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux47.jpeg",
        "name": "I-80 EB @ 3600 W / MP 115.9, SLC"
    }]
}, {
    "coord": [40.76603, -111.99647],
    "cams": [{
        "id": "43",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux43.jpeg",
        "name": "I-80 EB @ 4400 W / MP 114.75, SLC"
    }]
}, {
    "coord": [40.71829, -111.87026],
    "cams": [{
        "id": "56",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux56.jpeg",
        "name": "I-80 EB @ 700 E / SR-71 / MP 124.15, SLC"
    }]
}, {
    "coord": [40.76389, -111.98733],
    "cams": [{
        "id": "45",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux45.jpeg",
        "name": "I-80 EB @ Bangerter Hwy / 4000 W / SR-154 / MP 115.35, SLC"
    }]
}, {
    "coord": [40.71296, -111.80676],
    "cams": [{
        "id": "64",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux64.jpeg",
        "name": "I-80 EB @ I-215 E / MP 127.66, SL"
    }]
}, {
    "coord": [40.76477, -111.95267],
    "cams": [{
        "id": "49",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux49.jpeg",
        "name": "I-80 EB @ I-215 W SB / MP 117.2, SLC"
    }]
}, {
    "coord": [40.71052, -111.79684],
    "cams": [{
        "id": "67",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux67.jpeg",
        "name": "I-80 EB @ Mouth of Parley`s Canyon / MP 128.23, SL"
    }]
}, {
    "coord": [40.76544, -111.93845],
    "cams": [{
        "id": "9118",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux51.jpeg",
        "name": "I-80 EB @ Redwood Rd / SR-68 / MP 117.9, SLC"
    }]
}, {
    "coord": [40.71753, -111.88783],
    "cams": [{
        "id": "54",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux54.jpeg",
        "name": "I-80 EB @ State St / US-89 / MP 123.32, SSL"
    }]
}, {
    "coord": [40.76512, -111.94356],
    "cams": [{
        "id": "11251",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80mp117-all.gif",
        "name": "I-80 Liveview EB @ 1800 W / MP 117.52, SLC"
    }]
}, {
    "coord": [40.77069, -112.06727],
    "cams": [{
        "id": "11250",
        "url": "http://www.udottraffic.utah.gov/1_devices/I-80-MP-111-all.gif",
        "name": "I-80 Liveview EB @ 7200 W Off Ramp / MP 111, SLC"
    }]
}, {
    "coord": [40.72021, -111.85726],
    "cams": [{
        "id": "57",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux57.jpeg",
        "name": "I-80 WB @ 1200 E / Highland Dr / MP 124.9, SLC"
    }]
}, {
    "coord": [40.72003, -111.85418],
    "cams": [{
        "id": "12325",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17124.jpeg",
        "name": "I-80 WB @ 1300 E / MP 125.1, SLC"
    }]
}, {
    "coord": [40.71922, -111.84178],
    "cams": [{
        "id": "59",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux59.jpeg",
        "name": "I-80 WB @ 1700 E / MP 125.69, SLC"
    }]
}, {
    "coord": [40.76682, -111.94656],
    "cams": [{
        "id": "50",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux50.jpeg",
        "name": "I-80 WB @ 1900 W / MP 117.47, SLC"
    }]
}, {
    "coord": [40.71375, -111.82372],
    "cams": [{
        "id": "61",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux61.jpeg",
        "name": "I-80 WB @ 2300 E / MP 126.74, SLC"
    }]
}, {
    "coord": [40.77237, -112.02489],
    "cams": [{
        "id": "9350",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux337.jpeg",
        "name": "I-80 WB @ 5600 W / SR-172 / MP 113.3, SLC"
    }]
}, {
    "coord": [40.71925, -111.87157],
    "cams": [{
        "id": "55",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux55.jpeg",
        "name": "I-80 WB @ 700 E / SR-71 / MP 124.1, SLC"
    }]
}, {
    "coord": [40.71863, -111.88858],
    "cams": [{
        "id": "147",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux147.jpeg",
        "name": "I-80 WB @ State St / US-89 / MP 123.28, SSL"
    }]
}, {
    "coord": [40.90129, -111.92453],
    "cams": [{
        "id": "10052",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14761.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 1200 N / MP 5.42, WBN"
    }]
}, {
    "coord": [40.93302, -111.89257],
    "cams": [{
        "id": "10059",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14768.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 1275 N / MP 8.3, CVL"
    }]
}, {
    "coord": [40.87031, -111.9384],
    "cams": [{
        "id": "10049",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14758.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 1900 S / MP 3.16, WXS"
    }]
}, {
    "coord": [40.91387, -111.90924],
    "cams": [{
        "id": "10054",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14763.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 2200 N / MP 6.62, WBN"
    }]
}, {
    "coord": [40.86287, -111.94287],
    "cams": [{
        "id": "10048",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14757.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 2500 S / MP 2.5, WXS"
    }]
}, {
    "coord": [40.84945, -111.94262],
    "cams": [{
        "id": "10046",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14755.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 300 N / MP 1.52, NSL"
    }]
}, {
    "coord": [40.89357, -111.933],
    "cams": [{
        "id": "10051",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14760.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 400 N / MP 4.7, WBN"
    }]
}, {
    "coord": [40.92754, -111.89755],
    "cams": [{
        "id": "10058",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14767.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 800 N / MP 7.8, CVL"
    }]
}, {
    "coord": [40.85773, -111.9431],
    "cams": [{
        "id": "10047",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14756.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 900 N / MP 2.14, NSL"
    }]
}, {
    "coord": [40.91667, -111.90314],
    "cams": [{
        "id": "10055",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14764.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ 900 W / MP 7, CVL"
    }]
}, {
    "coord": [40.84059, -111.94164],
    "cams": [{
        "id": "10045",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14754.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ Center St / MP 1, NSL"
    }]
}, {
    "coord": [40.92209, -111.89931],
    "cams": [{
        "id": "10056",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14765.jpeg",
        "name": "Legacy Pkwy / SR-67 NB @ Parrish Ln / SR-105 / MP 7.45, CVL"
    }]
}, {
    "coord": [40.88351, -111.93762],
    "cams": [{
        "id": "10050",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14759.jpeg",
        "name": "Legacy Pkwy / SR-67 SB @ 500 S / MP 4, WXS"
    }]
}, {
    "coord": [40.90648, -111.91826],
    "cams": [{
        "id": "10053",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14762.jpeg",
        "name": "Legacy Pkwy / SR-67 SB @ Pages Ln / MP 6, WBN"
    }]
}, {
    "coord": [40.92134, -111.90037],
    "cams": [{
        "id": "10057",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14766.jpeg",
        "name": "Legacy Pkwy / SR-67 SB @ Parrish Ln / SR-105 / MP 7.4, CVL"
    }]
}, {
    "coord": [40.57796, -111.803],
    "cams": [{
        "id": "10186",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14895.jpeg",
        "name": "Little Cottonwood Rd / 3335 E / SR-209 @ Old Wasatch Blvd / 9710 S, GNT"
    }]
}, {
    "coord": [40.57312, -111.79848],
    "cams": [{
        "id": "11799",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16607.jpeg",
        "name": "Little Cottonwood Rd / 9800 S / SR-209 @ Wasatch Blvd / 3400 E, SL"
    }]
}, {
    "coord": [40.58493, -111.65407],
    "cams": [{
        "id": "12437",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17228.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Alta Bypass / MP 10.95, SL"
    }]
}, {
    "coord": [40.57169, -111.72864],
    "cams": [{
        "id": "11457",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16266.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Lisa Falls / MP 6.5, SL"
    }]
}, {
    "coord": [40.57123, -111.71266],
    "cams": [{
        "id": "11458",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16267.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Seven Turns / MP 7.4, SL"
    }]
}, {
    "coord": [40.5707, -111.7028],
    "cams": [{
        "id": "11459",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16268.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Tanners Flat / MP 7.94, SL"
    }]
}, {
    "coord": [40.57141, -111.73847],
    "cams": [{
        "id": "11456",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16265.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ Upper Vault / MP 5.96, SL"
    }]
}, {
    "coord": [40.57609, -111.68218],
    "cams": [{
        "id": "11461",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16270.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ White Pine Parking / MP 9.2, SL"
    }]
}, {
    "coord": [40.57096, -111.74374],
    "cams": [{
        "id": "11839",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16647.jpeg",
        "name": "Little Cottonwood Rd / SR-210 RWIS EB @ Powerhouse / MP 5.67, SL"
    }]
}, {
    "coord": [40.57911, -111.67448],
    "cams": [{
        "id": "12436",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17227.jpeg",
        "name": "Little Cottonwood Rd / SR-210 WB @ Upper White Pine / MP 9.7, SL"
    }]
}, {
    "coord": [40.5745, -111.69099],
    "cams": [{
        "id": "11460",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16269.jpeg",
        "name": "Little Cottonwood Rd / SR-210 WB @ White Pine / MP 8.7, SL"
    }]
}, {
    "coord": [40.77597, -111.89111],
    "cams": [{
        "id": "10630",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15439.jpeg",
        "name": "Main St / Columbus St / SR-186 @ 300 N, SLC"
    }]
}, {
    "coord": [40.86161, -111.8962],
    "cams": [{
        "id": "9640",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux438.jpeg",
        "name": "Main St / US-89 @ 2600 S / SR-93, BTF"
    }]
}, {
    "coord": [40.76765, -111.836078],
    "cams": [{
        "id": "12077",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16885.jpeg",
        "name": "Mario Capecchi Dr / SR-282 @ 1900 E, SLC"
    }]
}, {
    "coord": [40.52519, -111.8888],
    "cams": [{
        "id": "10676",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15485.jpeg",
        "name": "Minuteman Dr @ 12450 S, DPR"
    }]
}, {
    "coord": [40.52259, -112.00472],
    "cams": [{
        "id": "11016",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15825.jpeg",
        "name": "Mountain View / SR-85 NB @ 12600 S, RVT"
    }]
}, {
    "coord": [40.50799, -112.00333],
    "cams": [{
        "id": "11017",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15826.jpeg",
        "name": "Mountain View / SR-85 NB @ 13400 S, RVT"
    }]
}, {
    "coord": [40.68189, -112.02998],
    "cams": [{
        "id": "12054",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16862.jpeg",
        "name": "Mountain View / SR-85 NB @ 4100 S, WVC"
    }]
}, {
    "coord": [40.67081, -112.03108],
    "cams": [{
        "id": "12052",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16860.jpeg",
        "name": "Mountain View / SR-85 NB @ 4565 S, WVC"
    }]
}, {
    "coord": [40.66439, -112.03455],
    "cams": [{
        "id": "12051",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16859.jpeg",
        "name": "Mountain View / SR-85 NB @ 4825 S, WVC"
    }]
}, {
    "coord": [40.65353, -112.04338],
    "cams": [{
        "id": "11062",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15871.jpeg",
        "name": "Mountain View / SR-85 NB @ 5400 S / SR-173, WVC"
    }]
}, {
    "coord": [40.61319, -112.0375],
    "cams": [{
        "id": "11059",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15868.jpeg",
        "name": "Mountain View / SR-85 NB @ 7600 S, WJD"
    }]
}, {
    "coord": [40.60966, -112.03341],
    "cams": [{
        "id": "11061",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15870.jpeg",
        "name": "Mountain View / SR-85 NB @ 7800 S, WJD"
    }]
}, {
    "coord": [40.58806, -112.02762],
    "cams": [{
        "id": "11060",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15869.jpeg",
        "name": "Mountain View / SR-85 NB @ 9000 S / SR-209, WJD"
    }]
}, {
    "coord": [40.46258, -111.95413],
    "cams": [{
        "id": "11018",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15827.jpeg",
        "name": "Mountain View / SR-85 NB @ Porter Rockwell Blvd, HRR"
    }]
}, {
    "coord": [40.55163, -112.02893],
    "cams": [{
        "id": "11756",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16564.jpeg",
        "name": "Mountain View / SR-85 NB @ South Jordan Pkwy / 11000 S, SJO"
    }]
}, {
    "coord": [40.48607, -111.99415],
    "cams": [{
        "id": "11357",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-85%20Juniper-all.gif",
        "name": "Mountain View / SR-85 RWIS NB @ 14600 S / Juniper, HRR"
    }]
}, {
    "coord": [40.54271, -112.02196],
    "cams": [{
        "id": "11022",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15831.jpeg",
        "name": "Mountain View / SR-85 SB @ 11450 S, SJO"
    }]
}, {
    "coord": [40.52938, -112.00926],
    "cams": [{
        "id": "11019",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15828.jpeg",
        "name": "Mountain View / SR-85 SB @ 12200 S, HRR"
    }]
}, {
    "coord": [40.51215, -112.00532],
    "cams": [{
        "id": "11025",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15834.jpeg",
        "name": "Mountain View / SR-85 SB @ 13200 S, RVT"
    }]
}, {
    "coord": [40.67623, -112.03113],
    "cams": [{
        "id": "12053",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16861.jpeg",
        "name": "Mountain View / SR-85 SB @ 4350 S, WVC"
    }]
}, {
    "coord": [40.64953, -112.04535],
    "cams": [{
        "id": "11056",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15865.jpeg",
        "name": "Mountain View / SR-85 SB @ 5800 S, WVC"
    }]
}, {
    "coord": [40.63936, -112.04688],
    "cams": [{
        "id": "11058",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15867.jpeg",
        "name": "Mountain View / SR-85 SB @ 6200 S, WVC"
    }]
}, {
    "coord": [40.57247, -112.03449],
    "cams": [{
        "id": "11057",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15866.jpeg",
        "name": "Mountain View / SR-85 SB @ 9860 S, WJD"
    }]
}, {
    "coord": [40.53879, -112.01811],
    "cams": [{
        "id": "11020",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15829.jpeg",
        "name": "Mountain View / SR-85 SB @ Daybreak Pkwy, SJO"
    }]
}, {
    "coord": [40.54445, -112.02368],
    "cams": [{
        "id": "11868",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16676.jpeg",
        "name": "Mountain View / SR-85 SB @ Lake Ave / 11400 S, SJO"
    }]
}, {
    "coord": [40.56711, -112.03405],
    "cams": [{
        "id": "11021",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15830.jpeg",
        "name": "Mountain View / SR-85 SB @ Old Bingham Hwy, WJD"
    }]
}, {
    "coord": [40.65894, -112.04162],
    "cams": [{
        "id": "12050",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16858.jpeg",
        "name": "Mountain View / SR-85 SB @ Upper Ridge Rd / 5100 S, WVC"
    }]
}, {
    "coord": [40.6025, -112.00532],
    "cams": [{
        "id": "11064",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15873.jpeg",
        "name": "New Bingham Hwy @ 4800 W, WJD"
    }]
}, {
    "coord": [40.59525, -112.02409],
    "cams": [{
        "id": "11063",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15872.jpeg",
        "name": "New Bingham Hwy @ 5600 W, WJD"
    }]
}, {
    "coord": [40.57186, -111.77614],
    "cams": [{
        "id": "9895",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14604.jpeg",
        "name": "North Little Cottonwood Rd / Little Cottonwood Canyon Rd / SR-210 @ Little Cottonwood Rd / SR-209, SL"
    }]
}, {
    "coord": [40.58925, -111.79356],
    "cams": [{
        "id": "11800",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16608.jpeg",
        "name": "North Little Cottonwood Rd / Wasatch Blvd / 3600 E / SR-210 @ Wasatch Blvd / 8900 S, CWH"
    }]
}, {
    "coord": [40.77157, -111.89663],
    "cams": [{
        "id": "181",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux181.jpeg",
        "name": "North Temple St @ 200 W, SLC"
    }]
}, {
    "coord": [40.92135, -111.87919],
    "cams": [{
        "id": "12067",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16875.jpeg",
        "name": "Parrish Ln / 400 N / SR-105 @ Main St / SR-106, CVL"
    }]
}, {
    "coord": [40.46375, -111.94989],
    "cams": [{
        "id": "11024",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15833.jpeg",
        "name": "Porter Rockwell Blvd @ 2300 W, HRR"
    }]
}, {
    "coord": [40.56206, -111.93818],
    "cams": [{
        "id": "11828",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16636.jpeg",
        "name": "Redwood Rd / SR-68 @ 10400 S / South Jordan Pkwy / SR-151, SJO"
    }]
}, {
    "coord": [40.54417, -111.93872],
    "cams": [{
        "id": "11015",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15824.jpeg",
        "name": "Redwood Rd / SR-68 @ 11400 S, SJO"
    }]
}, {
    "coord": [40.52279, -111.93853],
    "cams": [{
        "id": "305",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux305.jpeg",
        "name": "Redwood Rd / SR-68 @ 12600 S / SR-71, RVT"
    }]
}, {
    "coord": [40.518821, -111.938944],
    "cams": [{
        "id": "12260",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17059.jpeg",
        "name": "Redwood Rd / SR-68 @ 12800 S, RVT"
    }]
}, {
    "coord": [40.507617, -111.938871],
    "cams": [{
        "id": "12261",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17060.jpeg",
        "name": "Redwood Rd / SR-68 @ 13400 S, RVT"
    }]
}, {
    "coord": [40.4895, -111.94003],
    "cams": [{
        "id": "10328",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15037.jpeg",
        "name": "Redwood Rd / SR-68 @ 14400 S / SR-140, BLF"
    }]
}, {
    "coord": [40.72616, -111.93873],
    "cams": [{
        "id": "10222",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14931.jpeg",
        "name": "Redwood Rd / SR-68 @ 2100 S, SLC"
    }]
}, {
    "coord": [40.7206, -111.93873],
    "cams": [{
        "id": "10887",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15696.jpeg",
        "name": "Redwood Rd / SR-68 @ 2320 S, WVC"
    }]
}, {
    "coord": [40.70393, -111.93896],
    "cams": [{
        "id": "9266",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux9173.jpeg",
        "name": "Redwood Rd / SR-68 @ 3100 S, WVC"
    }]
}, {
    "coord": [40.69657, -111.93794],
    "cams": [{
        "id": "176",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux176.jpeg",
        "name": "Redwood Rd / SR-68 @ 3500 S / SR-171, WVC"
    }]
}, {
    "coord": [40.681944, -111.938687],
    "cams": [{
        "id": "11949",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16757.jpeg",
        "name": "Redwood Rd / SR-68 @ 4100 S, TAY"
    }]
}, {
    "coord": [40.6676, -111.93878],
    "cams": [{
        "id": "10733",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15542.jpeg",
        "name": "Redwood Rd / SR-68 @ 4700 S / SR-266, TAY"
    }]
}, {
    "coord": [40.65321, -111.93904],
    "cams": [{
        "id": "9867",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux2123.jpeg",
        "name": "Redwood Rd / SR-68 @ 5400 S / SR-173, TAY"
    }]
}, {
    "coord": [40.63857, -111.9388],
    "cams": [{
        "id": "10554",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15363.jpeg",
        "name": "Redwood Rd / SR-68 @ 6200 S, TAY"
    }]
}, {
    "coord": [40.78489, -111.9396],
    "cams": [{
        "id": "11963",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16771.jpeg",
        "name": "Redwood Rd / SR-68 @ 700 N, SLC"
    }]
}, {
    "coord": [40.62401, -111.93875],
    "cams": [{
        "id": "9630",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux309.jpeg",
        "name": "Redwood Rd / SR-68 @ 7000 S / SR-48, WJD"
    }]
}, {
    "coord": [40.6095, -111.93875],
    "cams": [{
        "id": "9557",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux308.jpeg",
        "name": "Redwood Rd / SR-68 @ 7800 S / SR-48, WJD"
    }]
}, {
    "coord": [40.60236, -111.93871],
    "cams": [{
        "id": "11466",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16275.jpeg",
        "name": "Redwood Rd / SR-68 @ 8200 S / Sugar Factory Rd, WJD"
    }]
}, {
    "coord": [40.58788, -111.93874],
    "cams": [{
        "id": "9555",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux307.jpeg",
        "name": "Redwood Rd / SR-68 @ 9000 S / SR-209, WJD"
    }]
}, {
    "coord": [40.84173, -111.93206],
    "cams": [{
        "id": "12449",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17240.jpeg",
        "name": "Redwood Rd / SR-68 @ Center St, NSL"
    }]
}, {
    "coord": [40.7713, -111.93903],
    "cams": [{
        "id": "11968",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16776.jpeg",
        "name": "Redwood Rd / SR-68 @ North Temple St, SLC"
    }]
}, {
    "coord": [40.46256, -111.94261],
    "cams": [{
        "id": "11023",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15832.jpeg",
        "name": "Redwood Rd / SR-68 @ Porter Rockwell Blvd, BLF"
    }]
}, {
    "coord": [40.75943, -111.84304],
    "cams": [{
        "id": "10255",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14964.jpeg",
        "name": "South Campus Dr / SR-282 @ 1725 E, SLC"
    }]
}, {
    "coord": [40.76239, -111.83564],
    "cams": [{
        "id": "10256",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14965.jpeg",
        "name": "South Campus Dr / SR-282 @ Mario Capecchi Dr, SLC"
    }]
}, {
    "coord": [40.562059, -111.94803],
    "cams": [{
        "id": "11826",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16634.jpeg",
        "name": "South Jordan Pkwy / 10400 S / SR-151 @ 2200 W, SJO"
    }]
}, {
    "coord": [40.76936, -111.87108],
    "cams": [{
        "id": "10717",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15526.jpeg",
        "name": "South Temple St @ 700 E / I St, SLC"
    }]
}, {
    "coord": [40.7694, -111.8911],
    "cams": [{
        "id": "9436",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux428.jpeg",
        "name": "South Temple St @ Main St, SLC"
    }]
}, {
    "coord": [40.72786, -111.96825],
    "cams": [{
        "id": "73",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux73.jpeg",
        "name": "SR-201 / N Frontage Rd @ 3200 W / MP 13.7, SLC"
    }]
}, {
    "coord": [40.72425, -111.92812],
    "cams": [{
        "id": "11933",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16741.jpeg",
        "name": "SR-201 @ 1275 W / MP 15.83, WVC"
    }]
}, {
    "coord": [40.72458, -111.93532],
    "cams": [{
        "id": "9673",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux75.jpeg",
        "name": "SR-201 @ 1600 W / MP 15.47, SLC"
    }]
}, {
    "coord": [40.72496, -111.94709],
    "cams": [{
        "id": "11692",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16500.jpeg",
        "name": "SR-201 @ 2100 W / MP 14.82, SLC"
    }]
}, {
    "coord": [40.72603, -111.95486],
    "cams": [{
        "id": "11693",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16501.jpeg",
        "name": "SR-201 @ 2500 W / MP 14.42, SLC"
    }]
}, {
    "coord": [40.72566, -111.96314],
    "cams": [{
        "id": "74",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux74.jpeg",
        "name": "SR-201 @ 3000 W / MP 14, WVC"
    }]
}, {
    "coord": [40.72495, -111.99979],
    "cams": [{
        "id": "71",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux71.jpeg",
        "name": "SR-201 @ 4600 W / MP 12.11, WVC"
    }]
}, {
    "coord": [40.72439, -112.0246],
    "cams": [{
        "id": "287",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux287.jpeg",
        "name": "SR-201 @ 5600 W / SR-172 / MP 10.8, WVC"
    }]
}, {
    "coord": [40.72532, -112.03924],
    "cams": [{
        "id": "11611",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16420.jpeg",
        "name": "SR-201 @ 6200 W / MP 10.04, WVC"
    }]
}, {
    "coord": [40.71889, -112.05447],
    "cams": [{
        "id": "11612",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16421.jpeg",
        "name": "SR-201 @ 6800 W / MP 9.13, WVC"
    }]
}, {
    "coord": [40.71891, -112.06348],
    "cams": [{
        "id": "9674",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux256.jpeg",
        "name": "SR-201 @ 7200 W / MP 8.7, MAG"
    }]
}, {
    "coord": [40.72475, -111.91356],
    "cams": [{
        "id": "79",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux79.jpeg",
        "name": "SR-201 @ 800 W / MP 16.7, SSL"
    }]
}, {
    "coord": [40.72512, -111.91726],
    "cams": [{
        "id": "77",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux77.jpeg",
        "name": "SR-201 @ 900 W / MP 16.6, SSL"
    }]
}, {
    "coord": [40.72374, -111.92885],
    "cams": [{
        "id": "76",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux76.jpeg",
        "name": "SR-201 EB @ 1300 W / MP 15.8, WVC"
    }]
}, {
    "coord": [40.72446, -111.9847],
    "cams": [{
        "id": "72",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux72.jpeg",
        "name": "SR-201 EB @ Bangerter Hwy / SR-154 / MP 12.82, WVC"
    }]
}, {
    "coord": [40.72651, -111.98782],
    "cams": [{
        "id": "10689",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15498.jpeg",
        "name": "SR-201 WB @ Bangerter Hwy / SR-154 / MP 12.8, SLC"
    }]
}, {
    "coord": [40.82739, -111.65433],
    "cams": [{
        "id": "11500",
        "url": "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-65%20@%20big-mountain-pass.gif",
        "name": "SR-65 RWIS NB @ Big Mountain Pass / SL-MN Co Line / MP 8.4, SL"
    }]
}, {
    "coord": [40.771524, -111.888223],
    "cams": [{
        "id": "11066",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15875.jpeg",
        "name": "State St / SR-186 @ North Temple St / 2nd Ave, SLC"
    }]
}, {
    "coord": [40.56956, -111.8905],
    "cams": [{
        "id": "11965",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16773.jpeg",
        "name": "State St / US-89 @ 10000 S / Sego Lily Dr, SND"
    }]
}, {
    "coord": [40.55854, -111.89113],
    "cams": [{
        "id": "10104",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14813.jpeg",
        "name": "State St / US-89 @ 10600 S, SND"
    }]
}, {
    "coord": [40.55179, -111.89103],
    "cams": [{
        "id": "12341",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17140.jpeg",
        "name": "State St / US-89 @ 11000 S, SND"
    }]
}, {
    "coord": [40.54747, -111.89129],
    "cams": [{
        "id": "12342",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17141.jpeg",
        "name": "State St / US-89 @ 11235 S / Auto Mall Dr, SND"
    }]
}, {
    "coord": [40.54443, -111.89117],
    "cams": [{
        "id": "10686",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15495.jpeg",
        "name": "State St / US-89 @ 11400 S, SND"
    }]
}, {
    "coord": [40.52932, -111.89021],
    "cams": [{
        "id": "10677",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15486.jpeg",
        "name": "State St / US-89 @ 12200 S, DPR"
    }]
}, {
    "coord": [40.74162, -111.88815],
    "cams": [{
        "id": "11514",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16323.jpeg",
        "name": "State St / US-89 @ 1300 S, SLC"
    }]
}, {
    "coord": [40.73367, -111.88802],
    "cams": [{
        "id": "11521",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16330.jpeg",
        "name": "State St / US-89 @ 1700 S, SLC"
    }]
}, {
    "coord": [40.72559, -111.88796],
    "cams": [{
        "id": "141",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux141.jpeg",
        "name": "State St / US-89 @ 2100 S / SR-201, SSL"
    }]
}, {
    "coord": [40.69978, -111.88818],
    "cams": [{
        "id": "142",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux142.jpeg",
        "name": "State St / US-89 @ 3300 S / SR-171, SSL"
    }]
}, {
    "coord": [40.68687, -111.88804],
    "cams": [{
        "id": "11948",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16756.jpeg",
        "name": "State St / US-89 @ 3900 S, SSL"
    }]
}, {
    "coord": [40.76113, -111.88771],
    "cams": [{
        "id": "185",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux185.jpeg",
        "name": "State St / US-89 @ 400 S / University Blvd / SR-186, SLC"
    }]
}, {
    "coord": [40.6743, -111.88826],
    "cams": [{
        "id": "9264",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux5143.jpeg",
        "name": "State St / US-89 @ 4500 S / SR-266, MUR"
    }]
}, {
    "coord": [40.6564, -111.88798],
    "cams": [{
        "id": "144",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux144.jpeg",
        "name": "State St / US-89 @ 5300 S / SR-173, MUR"
    }]
}, {
    "coord": [40.62064, -111.89032],
    "cams": [{
        "id": "11825",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16633.jpeg",
        "name": "State St / US-89 @ 7200 S / Fort Union Blvd / SR-48, MDV"
    }]
}, {
    "coord": [40.60948, -111.89067],
    "cams": [{
        "id": "195",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux195.jpeg",
        "name": "State St / US-89 @ 7800 S, MDV"
    }]
}, {
    "coord": [40.599093, -111.890625],
    "cams": [{
        "id": "12268",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux17067.jpeg",
        "name": "State St / US-89 @ 8375 S / Princeton Dr, SND"
    }]
}, {
    "coord": [40.58843, -111.89051],
    "cams": [{
        "id": "10108",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14817.jpeg",
        "name": "State St / US-89 @ 9000 S / SR-209, SND"
    }]
}, {
    "coord": [40.58028, -111.89048],
    "cams": [{
        "id": "10103",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14812.jpeg",
        "name": "State St / US-89 @ 9400 S, SND"
    }]
}, {
    "coord": [40.58411, -111.89109],
    "cams": [{
        "id": "10893",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux15702.jpeg",
        "name": "State St / US-89 @ Rio Tinto Stadium / 9220 S, SND"
    }]
}, {
    "coord": [40.63334, -111.88937],
    "cams": [{
        "id": "145",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux145.jpeg",
        "name": "State St / US-89 @ Winchester St / 6400 S, MUR"
    }]
}, {
    "coord": [40.62453, -111.85996],
    "cams": [{
        "id": "146",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux146.jpeg",
        "name": "Union Park Ave / 1090 E @ Fort Union Blvd / 7000 S, MDV"
    }]
}, {
    "coord": [40.61075, -111.85332],
    "cams": [{
        "id": "11944",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16752.jpeg",
        "name": "Union Park Ave / 1300 E @ 7755 S / Forbush Ln, SND"
    }]
}, {
    "coord": [40.61781, -111.85794],
    "cams": [{
        "id": "12019",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16827.jpeg",
        "name": "Union Park Ave / 1300 E @ Creek Rd / South Union Ave / 7340 S, CWH"
    }]
}, {
    "coord": [40.62202, -111.85589],
    "cams": [{
        "id": "12020",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16828.jpeg",
        "name": "Union Park Ave @ 1300 E / 7100 S, CWH"
    }]
}, {
    "coord": [40.64922, -111.8487],
    "cams": [{
        "id": "11467",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16276.jpeg",
        "name": "Van Winkle Expwy / SR-152 @ 5600 S, HDY"
    }]
}, {
    "coord": [40.60957, -111.79214],
    "cams": [{
        "id": "11798",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux16606.jpeg",
        "name": "Wasatch Blvd / 3650 E / SR-210 @ 7800 S / Bengal Blvd / Honeywood Cove Dr, CWH"
    }]
}, {
    "coord": [40.61965, -111.78925],
    "cams": [{
        "id": "9896",
        "url": "http://www.udottraffic.utah.gov/1_devices/aux14605.jpeg",
        "name": "Wasatch Blvd / SR-190/SR-210 @ Big Cottonwood Canyon Rd / Fort Union Blvd / SR-190, CWH"
    }]
}, {
    "coord": [41.896, -112.5504],
    "cams": [{
        "id": "10787",
        "url": "http://udottraffic.utah.gov/1_devices/I-84-MP17.gif",
        "name": "I-84 Liveview EB @ Milepost 17.64, BE"
    }]
}, {
    "coord": [41.81014, -112.33939],
    "cams": [{
        "id": "10743",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS I-84 @ Whites Valley-all.gif",
        "name": "I-84 RWIS WB @ Whites Valley / MP 30.45, BE"
    }]
}, {
    "coord": [41.55015, -111.95338],
    "cams": [{
        "id": "9876",
        "url": "http://udottraffic.utah.gov/1_devices/aux14585.jpeg",
        "name": "US-89/91 @ Sardine Summit / MP 10.05, BE"
    }]
}, {
    "coord": [41.9534, -111.4917],
    "cams": [{
        "id": "10826",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS US89 @ Logan Summit.jpg",
        "name": "US-89 RWIS SB @ Logan Summit / MP 489.68, CA"
    }]
}, {
    "coord": [41.41083, -111.58248],
    "cams": [{
        "id": "10820",
        "url": "http://udottraffic.utah.gov/1_devices/sr-39-mp36.gif",
        "name": "SR-39 Liveview EB @ Monte Cristo / MP 36.84, WB"
    }]
}, {
    "coord": [41.25368, -111.84164],
    "cams": [{
        "id": "10785",
        "url": "http://udottraffic.utah.gov/1_devices/SR-39-Mile13.gif",
        "name": "SR-39 / Ogden Canyon Liveview EB @ SR-158 / MP 13.8, WB"
    }]
}, {
    "coord": [41.37888, -111.78401],
    "cams": [{
        "id": "10863",
        "url": "http://udottraffic.utah.gov/1_devices/sr-158-mp11.gif",
        "name": "SR-158 Liveview NB @ Powder Mountain / MP 11.62, WB"
    }]
}, {
    "coord": [41.21246, -111.85196],
    "cams": [{
        "id": "10786",
        "url": "http://udottraffic.utah.gov/1_devices/SR-226-Combined.gif",
        "name": "SR-226 Liveview EB @ Snow Basin / MP 0.7, WB"
    }]
}, {
    "coord": [40.75228, -111.6248],
    "cams": [{
        "id": "11425",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS Parleys-Summit-all.gif",
        "name": "I-80 RWIS EB @ Parley`s Summit / MP 138.87, SL (Low Lite)"
    }]
}, {
    "coord": [41.19522, -111.11397],
    "cams": [{
        "id": "10742",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS I-80-Wahsatch.gif",
        "name": "I-80 RWIS @ Wahsatch Hill / MP 191.2, SU"
    }]
}, {
    "coord": [40.65269, -111.45715],
    "cams": [{
        "id": "10757",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS US40 Mayflower Summit.gif",
        "name": "US-40 RWIS SB @ Mayflower Summit / MP 6.13, WA"
    }]
}, {
    "coord": [40.63774, -111.62091],
    "cams": [{
        "id": "11407",
        "url": "http://udottraffic.utah.gov/1_devices/aux16216.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ Silver Fork / MP 12.54, SL"
    }]
}, {
    "coord": [40.57609, -111.68218],
    "cams": [{
        "id": "11461",
        "url": "http://udottraffic.utah.gov/1_devices/aux16270.jpeg",
        "name": "Little Cottonwood Rd / SR-210 EB @ White Pine Parking / MP 9.2, SL"
    }]
}, {
    "coord": [40.45049, -111.64471],
    "cams": [{
        "id": "10853",
        "url": "http://udottraffic.utah.gov/1_devices/sr-92-mp-14.gif",
        "name": "SR-92 Liveview WB @ Alpine Loop Scenic Hwy / MP 14.37, UT"
    }]
}, {
    "coord": [40.40601, -111.52734],
    "cams": [{
        "id": "10399",
        "url": "http://udottraffic.utah.gov/1_devices/aux15108.jpeg",
        "name": "US-189 @ Deer Creek Dam / MP 17.87, WA"
    }]
}, {
    "coord": [40.8455, -109.64355],
    "cams": [{
        "id": "10784",
        "url": "http://udottraffic.utah.gov/1_devices/sr-44-mp-9.gif",
        "name": "SR-44 Liveview WB @ Milepost 8.98, DG"
    }]
}, {
    "coord": [39.931289, -111.086368],
    "cams": [{
        "id": "10857",
        "url": "http://udottraffic.utah.gov/1_devices/us-6-mp-210.gif",
        "name": "US-6 Liveview WB @ Soldier Summit / MP 210.36, UT"
    }]
}, {
    "coord": [39.8857, -110.7479],
    "cams": [{
        "id": "10756",
        "url": "http://udottraffic.utah.gov/1_devices/Indian-Canyon-Summit.gif",
        "name": "US-191 RWIS NB @ Indian Canyon Summit / MP 266.77, DU"
    }]
}, {
    "coord": [40.7819, -109.471],
    "cams": [{
        "id": "10765",
        "url": "http://udottraffic.utah.gov/1_devices/us-191-mp-380.gif",
        "name": "US-191 Liveview SB @ Milepost 380.8, DG"
    }]
}, {
    "coord": [39.20391, -112.17168],
    "cams": [{
        "id": "11356",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS I-15 @ Scipio Summit.jpeg",
        "name": "I-15 RWIS SB @ Scipio Summit / Exit 184 / MP 183.65, MD"
    }]
}, {
    "coord": [38.63583, -112.61011],
    "cams": [{
        "id": "10735",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS I-15 DogValley-all.gif",
        "name": "I-15 RWIS SB @ Dog Valley / MP 137.27, MD"
    }]
}, {
    "coord": [38.47632, -112.61249],
    "cams": [{
        "id": "11607",
        "url": "http://udottraffic.utah.gov/1_devices/aux16416.jpeg",
        "name": "I-15 NB @ Milepost 125, BV"
    }]
}, {
    "coord": [38.14994, -112.61043],
    "cams": [{
        "id": "11640",
        "url": "http://udottraffic.utah.gov/1_devices/aux16449.jpeg",
        "name": "I-15 NB @ Beaver Ridge / MP 101.33, BV"
    }]
}, {
    "coord": [37.48211, -113.21999],
    "cams": [{
        "id": "10752",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS I-15 New-Harmony.gif",
        "name": "I-15 RWIS NB @ New Harmony / Exit 42 / MP 42.17, RN"
    }]
}, {
    "coord": [38.59124, -112.49404],
    "cams": [{
        "id": "10736",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS I-70-ClearCreek.gif",
        "name": "I-70 RWIS WB @ Clear Creek Summit / MP 7.46, SE"
    }]
}, {
    "coord": [38.78317, -111.49274],
    "cams": [{
        "id": "10858",
        "url": "http://udottraffic.utah.gov/1_devices/I-70_MP82.gif",
        "name": "I-70 Liveview EB @ Milepost 82.4, SE"
    }]
}, {
    "coord": [38.90374, -110.562],
    "cams": [{
        "id": "10741",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS I-70 @ Rattlesnake Bench.jpg",
        "name": "I-70 RWIS WB @ Rattlesnake Bench / MP 137.07, EM"
    }]
}, {
    "coord": [38.86581, -110.80612],
    "cams": [{
        "id": "10740",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS I-70 GhostRocks.jpg",
        "name": "I-70 RWIS EB @ Ghost Rocks / MP 123.11, EM"
    }]
}, {
    "coord": [37.66275, -112.83761],
    "cams": [{
        "id": "10770",
        "url": "http://udottraffic.utah.gov/1_devices/SR-143-MP-18.gif",
        "name": "SR-143 Liveview NB @ Brian Head / MP 18.19, RN"
    }]
}, {
    "coord": [37.66275, -112.83761],
    "cams": [{
        "id": "10770",
        "url": "http://udottraffic.utah.gov/1_devices/SR-143-MP-18.gif",
        "name": "SR-143 Liveview NB @ Brian Head / MP 18.19, RN"
    }]
}, {
    "coord": [38.0432, -111.3269],
    "cams": [{
        "id": "10780",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS Boulder Summit N.jpg",
        "name": "SR-12 RWIS NB @ Boulder Summit / MP 100.86, GA"
    }]
}, {
    "coord": [37.64056, -111.84426],
    "cams": [{
        "id": "10813",
        "url": "http://udottraffic.utah.gov/1_devices/SR-12-MP-41.gif",
        "name": "SR-12 Liveview NB @ Milepost 41.16, GA"
    }]
}, {
    "coord": [37.68643, -112.13755],
    "cams": [{
        "id": "10800",
        "url": "http://udottraffic.utah.gov/1_devices/SR-12-MP-14.gif",
        "name": "SR-12 Liveview EB @ Milepost 14.5, GA"
    }]
}, {
    "coord": [37.75609, -109.39774],
    "cams": [{
        "id": "10750",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS US-191 Monticello N-S.gif",
        "name": "US-191 RWIS NB @ Monticello / MP 62, SJ"
    }]
}, {
    "coord": [38.4502, -111.82265],
    "cams": [{
        "id": "10829",
        "url": "http://udottraffic.utah.gov/1_devices/sr-24-mp-41.gif",
        "name": "SR-24 Liveview EB @ Milepost 40.98, WE"
    }]
}, {
    "coord": [38.02847, -112.52929],
    "cams": [{
        "id": "10754",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS SR20 @ MP10.gif",
        "name": "SR-20 RWIS NB @ Milepost 10.06, RN"
    }]
}, {
    "coord": [39.6206, -111.31352],
    "cams": [{
        "id": "10768",
        "url": "http://udottraffic.utah.gov/1_devices/sr-31-mp-13.gif",
        "name": "SR-31 Liveview WB @ Milepost 13.21, SP"
    }]
}, {
    "coord": [39.072, -113.643],
    "cams": [{
        "id": "10843",
        "url": "http://udottraffic.utah.gov/1_devices/us-6-mp-22.gif",
        "name": "US-6 Liveview EB @ Kings Canyon / MP 22.77, MD"
    }]
}, {
    "coord": [37.5647, -109.8186],
    "cams": [{
        "id": "10781",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS Salvation Knoll.jpg",
        "name": "SR-95 RWIS EB @ Salvation Knoll / MP 97, SJ"
    }]
}, {
    "coord": [40.4872, -111.0344],
    "cams": [{
        "id": "11499",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS-SR35-Wolf-Creek-Pass.gif",
        "name": "SR-35 RWIS EB @ Wolf Creek Pass / MP 19.33, WA"
    }]
}, {
    "coord": [37.56972, -112.79796],
    "cams": [{
        "id": "10816",
        "url": "http://udottraffic.utah.gov/1_devices/sr-14-mp-20.gif",
        "name": "SR-14 Liveview EB @ Milepost 20.38, RN"
    }]
}, {
    "coord": [40.82739, -111.65433],
    "cams": [{
        "id": "11500",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS SR-65 @ big-mountain-pass.gif",
        "name": "SR-65 RWIS NB @ Big Mountain Pass / SL-MN Co Line / MP 8.4, SL"
    }]
}, {
    "coord": [41.9113, -112.6052],
    "cams": [{
        "id": "10774",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS I-84 @ Chaulk Hill.gif",
        "name": "I-84 RWIS WB @ Chaulk Hill / MP 13.79, BE"
    }]
}, {
    "coord": [40.7433, -111.65681],
    "cams": [{
        "id": "164",
        "url": "http://udottraffic.utah.gov/1_devices/aux164.jpeg",
        "name": "I-80 / Parleys Canyon EB @ Milepost 136.95, SL"
    }]
}, {
    "coord": [40.75389, -111.62432],
    "cams": [{
        "id": "165",
        "url": "http://udottraffic.utah.gov/1_devices/aux165.jpeg",
        "name": "I-80 WB @ Parley`s Summit / MP 138.9, SL"
    }]
}, {
    "coord": [40.68571, -111.46245],
    "cams": [{
        "id": "203",
        "url": "http://udottraffic.utah.gov/1_devices/aux203.jpeg",
        "name": "US-40 @ SR-248 / Kearns Blvd / Quinns Jct / MP 3.89, SU"
    }]
}, {
    "coord": [40.65035, -111.65022],
    "cams": [{
        "id": "11406",
        "url": "http://udottraffic.utah.gov/1_devices/aux16215.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ Cardiff Fork / MP 10.74, SL"
    }]
}, {
    "coord": [40.40155, -111.53404],
    "cams": [{
        "id": "10339",
        "url": "http://udottraffic.utah.gov/1_devices/aux15048.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Lower Deer Creek Rd / MP 17.14, WA"
    }]
}, {
    "coord": [40.3133, -111.25728],
    "cams": [{
        "id": "10769",
        "url": "http://udottraffic.utah.gov/1_devices/us-40-mp33.gif",
        "name": "US-40 Liveview SB @ Daniels Summit / MP 33.45, WA"
    }]
}, {
    "coord": [39.93311, -111.15338],
    "cams": [{
        "id": "245",
        "url": "http://udottraffic.utah.gov/1_devices/aux245.jpeg",
        "name": "US-6 @ Gilluly Switchback / MP 206.46, UT"
    }]
}, {
    "coord": [39.86727, -110.76275],
    "cams": [{
        "id": "10767",
        "url": "http://udottraffic.utah.gov/1_devices/us-191-mp-265.gif",
        "name": "US-191 Liveview SB @ Indian Canyon / MP 265.73, DU"
    }]
}, {
    "coord": [40.67725, -109.48624],
    "cams": [{
        "id": "10855",
        "url": "http://udottraffic.utah.gov/1_devices/us-191-mp-372.gif",
        "name": "US-191 Liveview SB @ Milepost 372.31, UN"
    }]
}, {
    "coord": [39.20322, -112.17354],
    "cams": [{
        "id": "11267",
        "url": "http://udottraffic.utah.gov/1_devices/aux16076.jpeg",
        "name": "I-15 SB @ Scipio Summit / Exit 184 / MP 183.65, MD"
    }]
}, {
    "coord": [38.55568, -112.36276],
    "cams": [{
        "id": "10827",
        "url": "http://udottraffic.utah.gov/1_devices/aux15636.jpeg",
        "name": "I-70 Liveview EB @ Milepost 15.84, SE"
    }]
}, {
    "coord": [38.92556, -110.49734],
    "cams": [{
        "id": "10847",
        "url": "http://udottraffic.utah.gov/1_devices/I-70_MP141.gif",
        "name": "I-70 Liveview WB @ Milepost 141.35, EM"
    }]
}, {
    "coord": [37.65328, -112.77898],
    "cams": [{
        "id": "10805",
        "url": "http://udottraffic.utah.gov/1_devices/SR-143-MP-22.gif",
        "name": "SR-143 Liveview EB @ Milepost 21.91, RN"
    }]
}, {
    "coord": [37.65328, -112.77898],
    "cams": [{
        "id": "10805",
        "url": "http://udottraffic.utah.gov/1_devices/SR-143-MP-22.gif",
        "name": "SR-143 Liveview EB @ Milepost 21.91, RN"
    }]
}, {
    "coord": [38.01171, -111.37049],
    "cams": [{
        "id": "10828",
        "url": "http://udottraffic.utah.gov/1_devices/SR-12-MP-97.gif",
        "name": "SR-12 Liveview EB @ Milepost 97.28, GA"
    }]
}, {
    "coord": [37.7205, -112.26213],
    "cams": [{
        "id": "10799",
        "url": "http://udottraffic.utah.gov/1_devices/SR-12-MP-7.gif",
        "name": "SR-12 Liveview EB @ Milepost 7.25, GA"
    }]
}, {
    "coord": [38.0308, -112.5311],
    "cams": [{
        "id": "10801",
        "url": "http://udottraffic.utah.gov/1_devices/sr-20-mp-10.gif",
        "name": "SR-20 Liveview SB @ Milepost 10.02, RN"
    }]
}, {
    "coord": [39.63607, -111.3291],
    "cams": [{
        "id": "10746",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS SR31 @ Skyline.jpg",
        "name": "SR-31 RWIS WB @ Skyline Dr / MP 11.79, SP"
    }]
}, {
    "coord": [37.57033, -112.85798],
    "cams": [{
        "id": "10869",
        "url": "http://udottraffic.utah.gov/1_devices/sr-14-mp17.gif",
        "name": "SR-14 Liveview EB @ Milepost 16.77, RN"
    }]
}, {
    "coord": [40.74016, -111.66792],
    "cams": [{
        "id": "163",
        "url": "http://udottraffic.utah.gov/1_devices/aux163.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Lamb`s Canyon Rd Off-ramp / MP 136.45, SL"
    }]
}, {
    "coord": [40.69769, -111.47272],
    "cams": [{
        "id": "9774",
        "url": "http://udottraffic.utah.gov/1_devices/aux14484.jpeg",
        "name": "US-40 @ Milepost 3, SU"
    }]
}, {
    "coord": [40.648236, -111.662442],
    "cams": [{
        "id": "11405",
        "url": "http://udottraffic.utah.gov/1_devices/aux16214.jpeg",
        "name": "Big Cottonwood Canyon Rd / SR-190 @ Butler / MP 10, SL"
    }]
}, {
    "coord": [40.39107, -111.54624],
    "cams": [{
        "id": "10338",
        "url": "http://udottraffic.utah.gov/1_devices/aux15047.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Meadow Dr / MP 16.25, WA"
    }]
}, {
    "coord": [40.2409, -111.15093],
    "cams": [{
        "id": "10760",
        "url": "http://udottraffic.utah.gov/1_devices/us-40-mp-42.gif",
        "name": "US-40 Liveview EB @ Strawberry Reservoir / MP 42, WA"
    }]
}, {
    "coord": [39.95004, -111.21818],
    "cams": [{
        "id": "214",
        "url": "http://udottraffic.utah.gov/1_devices/aux214.jpeg",
        "name": "US-6 @ Tie Fork Rest Area / MP 202.05, UT"
    }]
}, {
    "coord": [39.2381, -112.13112],
    "cams": [{
        "id": "11268",
        "url": "http://udottraffic.utah.gov/1_devices/aux16077.jpeg",
        "name": "I-15 SB @ Scipio / MP 187.03, MD"
    }]
}, {
    "coord": [37.66449, -112.72498],
    "cams": [{
        "id": "10839",
        "url": "http://udottraffic.utah.gov/1_devices/SR-143mile25-all.gif",
        "name": "SR-143 Liveview WB @ Milepost 25.13, RN"
    }]
}, {
    "coord": [37.66449, -112.72498],
    "cams": [{
        "id": "10839",
        "url": "http://udottraffic.utah.gov/1_devices/SR-143mile25-all.gif",
        "name": "SR-143 Liveview WB @ Milepost 25.13, RN"
    }]
}, {
    "coord": [38.14721, -111.32683],
    "cams": [{
        "id": "10815",
        "url": "http://udottraffic.utah.gov/1_devices/SR-12-MP-109.gif",
        "name": "SR-12 Liveview NB @ GA/WE County Line / MP 109.84, GA"
    }]
}, {
    "coord": [40.74167, -111.6754],
    "cams": [{
        "id": "162",
        "url": "http://udottraffic.utah.gov/1_devices/aux162.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Lamb`s Canyon Rd On-ramp / MP 135.96, SL"
    }]
}, {
    "coord": [40.71863, -111.48586],
    "cams": [{
        "id": "235",
        "url": "http://udottraffic.utah.gov/1_devices/aux235.jpeg",
        "name": "US-40 @ Silver Summit Pkwy / MP 1.31, SU"
    }]
}, {
    "coord": [40.35634, -111.57386],
    "cams": [{
        "id": "10335",
        "url": "http://udottraffic.utah.gov/1_devices/aux15044.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Vivian Park / MP 13.16, UT"
    }]
}, {
    "coord": [39.97246, -111.335651],
    "cams": [{
        "id": "244",
        "url": "http://udottraffic.utah.gov/1_devices/aux244.jpeg",
        "name": "US-6 @ Cedar Haven / Sheep Creek Rd / MP 195.08, UT"
    }]
}, {
    "coord": [37.68589, -112.66491],
    "cams": [{
        "id": "10817",
        "url": "http://udottraffic.utah.gov/1_devices/SR-143-MP31.gif",
        "name": "SR-143 Liveview SB @ Milepost 31.14, GA"
    }]
}, {
    "coord": [37.68589, -112.66491],
    "cams": [{
        "id": "10817",
        "url": "http://udottraffic.utah.gov/1_devices/SR-143-MP31.gif",
        "name": "SR-143 Liveview SB @ Milepost 31.14, GA"
    }]
}, {
    "coord": [40.74199, -111.68416],
    "cams": [{
        "id": "161",
        "url": "http://udottraffic.utah.gov/1_devices/aux161.jpeg",
        "name": "I-80 / Parleys Canyon EB @ Milepost 135.46, SL"
    }]
}, {
    "coord": [40.60446, -111.42882],
    "cams": [{
        "id": "10856",
        "url": "http://udottraffic.utah.gov/1_devices/us-40-mp-9.gif",
        "name": "US-40 Liveview NB @ Jordanelle Reservoir / MP 9.8, WA"
    }]
}, {
    "coord": [40.34975, -111.58799],
    "cams": [{
        "id": "10334",
        "url": "http://udottraffic.utah.gov/1_devices/aux15043.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Milepost 12.21, UT"
    }]
}, {
    "coord": [39.989, -111.37],
    "cams": [{
        "id": "10778",
        "url": "http://udottraffic.utah.gov/1_devices/RWIS US6 Red Narrow.gif",
        "name": "US-6 RWIS EB @ Red Narrows / MP 192.9, UT"
    }]
}, {
    "coord": [40.74406, -111.69221],
    "cams": [{
        "id": "160",
        "url": "http://udottraffic.utah.gov/1_devices/aux160.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 134.93, SL"
    }]
}, {
    "coord": [40.32862, -111.61958],
    "cams": [{
        "id": "10332",
        "url": "http://udottraffic.utah.gov/1_devices/aux15041.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Canyon Glen Park / MP 9.98, UT"
    }]
}, {
    "coord": [40.00091, -111.48781],
    "cams": [{
        "id": "215",
        "url": "http://udottraffic.utah.gov/1_devices/aux215.jpeg",
        "name": "US-6 @ Billies Mtn / MP 186.37, UT"
    }]
}, {
    "coord": [40.74778, -111.69954],
    "cams": [{
        "id": "159",
        "url": "http://udottraffic.utah.gov/1_devices/aux159.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 134.47, SL"
    }]
}, {
    "coord": [40.32385, -111.64255],
    "cams": [{
        "id": "10331",
        "url": "http://udottraffic.utah.gov/1_devices/aux15040.jpeg",
        "name": "Provo Canyon Rd / US-189 @ Canyon View Park / MP 8.46, PVO"
    }]
}, {
    "coord": [39.9126, -111.06233],
    "cams": [{
        "id": "10818",
        "url": "http://udottraffic.utah.gov/1_devices/us-6-mp-212.gif",
        "name": "US-6 Liveview EB @ Milepost 212.13, WA"
    }]
}, {
    "coord": [40.749, -111.71019],
    "cams": [{
        "id": "158",
        "url": "http://udottraffic.utah.gov/1_devices/aux158.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ East Canyon / SR-65 / MP 133.96, SL"
    }]
}, {
    "coord": [39.85886, -111.02763],
    "cams": [{
        "id": "246",
        "url": "http://udottraffic.utah.gov/1_devices/aux246.jpeg",
        "name": "US-6 @ Colton Shed / MP 217.11, UT"
    }]
}, {
    "coord": [40.75235, -111.71423],
    "cams": [{
        "id": "157",
        "url": "http://udottraffic.utah.gov/1_devices/aux157.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ East Canyon / SR-65 On-ramp / MP 133.61, SL"
    }]
}, {
    "coord": [39.81652, -110.9389],
    "cams": [{
        "id": "10806",
        "url": "http://udottraffic.utah.gov/1_devices/us-6-mp-221.gif",
        "name": "US-6 Liveview WB @ Milepost 221.81, UT"
    }]
}, {
    "coord": [40.7463, -111.72476],
    "cams": [{
        "id": "156",
        "url": "http://udottraffic.utah.gov/1_devices/aux156.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 132.97, SL"
    }]
}, {
    "coord": [40.74222, -111.73273],
    "cams": [{
        "id": "155",
        "url": "http://udottraffic.utah.gov/1_devices/aux155.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 132.53, SL"
    }]
}, {
    "coord": [40.74147, -111.74178],
    "cams": [{
        "id": "154",
        "url": "http://udottraffic.utah.gov/1_devices/aux154.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Mt Aire Canyon Rd / MP 132.01, SL"
    }]
}, {
    "coord": [40.73393, -111.7473],
    "cams": [{
        "id": "153",
        "url": "http://udottraffic.utah.gov/1_devices/aux153.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Milepost 131.42, SL"
    }]
}, {
    "coord": [40.73265, -111.75594],
    "cams": [{
        "id": "152",
        "url": "http://udottraffic.utah.gov/1_devices/aux152.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Milepost 131.1, SL"
    }]
}, {
    "coord": [40.72914, -111.76554],
    "cams": [{
        "id": "151",
        "url": "http://udottraffic.utah.gov/1_devices/aux151.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ East Quarry / MP 130.38, SL"
    }]
}, {
    "coord": [40.72521, -111.7718],
    "cams": [{
        "id": "70",
        "url": "http://udottraffic.utah.gov/1_devices/aux70.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Quarry / MP 129.88, SL"
    }]
}, {
    "coord": [40.71954, -111.77901],
    "cams": [{
        "id": "150",
        "url": "http://udottraffic.utah.gov/1_devices/aux150.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Chain Up Area East / MP 129.5, SL"
    }]
}, {
    "coord": [40.71767, -111.78416],
    "cams": [{
        "id": "69",
        "url": "http://udottraffic.utah.gov/1_devices/aux69.jpeg",
        "name": "I-80 / Parley`s Canyon WB @ Chain Up Area West / MP 129.2, SL"
    }]
}, {
    "coord": [40.71142, -111.79006],
    "cams": [{
        "id": "68",
        "url": "http://udottraffic.utah.gov/1_devices/aux68.jpeg",
        "name": "I-80 / Parley`s Canyon EB @ Exit 130 to SB I-215 E / MP 128.5, SL"
    }]
}, {
    "coord": [40.71052, -111.79684],
    "cams": [{
        "id": "67",
        "url": "http://udottraffic.utah.gov/1_devices/aux67.jpeg",
        "name": "I-80 EB @ Mouth of Parley`s Canyon / MP 128.23, SL"
    }]
}, {
    "coord": [40.74941, -111.60253],
    "cams": [{
        "id": "166",
        "url": "http://udottraffic.utah.gov/1_devices/aux166.jpeg",
        "name": "I-80 EB @ Summit Park / MP 140.13, SU"
    }]
}, {
    "coord": [40.7543, -111.57225],
    "cams": [{
        "id": "167",
        "url": "http://udottraffic.utah.gov/1_devices/aux167.jpeg",
        "name": "I-80 WB @ Jeremy Ranch / MP 141.8, SU"
    }]
}, {
    "coord": [40.74266, -111.56181],
    "cams": [{
        "id": "168",
        "url": "http://udottraffic.utah.gov/1_devices/aux168.jpeg",
        "name": "I-80 EB @ View Area / MP 142.75, SU"
    }]
}, {
    "coord": [40.73431, -111.55387],
    "cams": [{
        "id": "169",
        "url": "http://udottraffic.utah.gov/1_devices/aux169.jpeg",
        "name": "I-80 EB @ Powderwood Rd / MP 143.46, SU"
    }]
}, {
    "coord": [40.7273, -111.54285],
    "cams": [{
        "id": "170",
        "url": "http://udottraffic.utah.gov/1_devices/aux170.jpeg",
        "name": "I-80 WB @ Kimball Jct / SR-224 / MP 144.22, SU"
    }]
}];
