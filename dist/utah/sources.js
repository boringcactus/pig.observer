const DEFAULTS = ["139"];
const CAMERAS = {
  Richfield: [
    {
      id: "12433",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17224.jpeg",
      name: "1300 S / SR-120 @ Technology Dr / College Ave, RFD"
    },
    {
      id: "11431",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16240.jpeg",
      name: "I-70 EB @ Sage Flat Rd / MP 54.4, SLA"
    },
    {
      id: "11718",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16526.jpeg",
      name: "I-70 EB @ State St / US-89 / MP 56.73, SLA"
    },
    {
      id: "11300",
      url: "http://www.udottraffic.utah.gov/1_devices/I-70-MP45%20all.gif",
      name: "I-70 Liveview @ Milepost 45.05, SE"
    },
    {
      id: "11483",
      url: "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-70%20SR-24.gif",
      name: "I-70 RWIS @ SR-24 / MP 49.33, SIG"
    },
    {
      id: "12025",
      url:
        "http://www.udottraffic.utah.gov/1_devices/I-70%20MP%2038%20Richfield.gif",
      name: "I-70 RWIS EB @ 300 N / MP 38.77, RFD"
    },
    {
      id: "9782",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14492.jpeg",
      name: "Main St / SR-118 / SR-120 @ 1300 S / SR-120, RFD"
    },
    {
      id: "9922",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14631.jpeg",
      name: "Main St / SR-120 @ 300 N / SR-118, RFD"
    },
    {
      id: "9920",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14629.jpeg",
      name: "Main St / SR-120 @ 800 S, RFD"
    },
    {
      id: "9921",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14630.jpeg",
      name: "Main St / SR-120 @ Center St, RFD"
    },
    {
      id: "10837",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-24-mp-22.gif",
      name: "SR-24 Liveview NB @ Milepost 22.45, SE"
    }
  ],
  "US-6": [
    {
      id: "244",
      url: "http://www.udottraffic.utah.gov/1_devices/aux244.jpeg",
      name: "US-6 @ Cedar Haven / Sheep Creek Rd / MP 195.08, UT"
    },
    {
      id: "214",
      url: "http://www.udottraffic.utah.gov/1_devices/aux214.jpeg",
      name: "US-6 @ Tie Fork Rest Area / MP 202.05, UT"
    },
    {
      id: "243",
      url: "http://www.udottraffic.utah.gov/1_devices/aux243.jpeg",
      name: "US-6 @ US-89 / MP 187.47, UT"
    },
    {
      id: "10778",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20US6%20Red%20Narrow.gif",
      name: "US-6 RWIS EB @ Red Narrows / MP 192.9, UT"
    }
  ],
  Sandy: [
    {
      id: "12263",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17062.jpeg",
      name: "10600 S / South Jordan Pkwy / SR-151 @ 400 W / Jordan Gateway, SJO"
    },
    {
      id: "11966",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16774.jpeg",
      name:
        "10600 S / South Jordan Pkwy / SR-151 @ River Front Pkwy / 700 W, SJO"
    },
    {
      id: "10678",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15487.jpeg",
      name: "12300 S / SR-71 @ 150 E, DPR"
    },
    {
      id: "10575",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15384.jpeg",
      name: "12300 S / SR-71 @ 265 W, DPR"
    },
    {
      id: "304",
      url: "http://www.udottraffic.utah.gov/1_devices/aux304.jpeg",
      name: "12300 S / SR-71 @ 700 E / SR-71, DPR"
    },
    {
      id: "11967",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16775.jpeg",
      name: "12600 S / Herriman Blvd @ Main St / 5040 W, HRR"
    },
    {
      id: "11827",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16635.jpeg",
      name: "12600 S / SR-71 @ 2700 W / Silverwolf Blvd, RVT"
    },
    {
      id: "11512",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16321.jpeg",
      name: "12600 S @ 4150 W, RVT"
    },
    {
      id: "11026",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15835.jpeg",
      name: "12600 S @ Legacy Ranch Blvd / 4570 W, RVT"
    },
    {
      id: "11638",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16447.jpeg",
      name: "14600 S / Highland Dr / SR-140 @ Minuteman Dr, DPR"
    },
    {
      id: "11507",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16316.jpeg",
      name: "14600 S / SR-140 @ Pony Express Dr / SR-287, DPR"
    },
    {
      id: "191",
      url: "http://www.udottraffic.utah.gov/1_devices/aux191.jpeg",
      name: "3900 S @ 210 W / Howick St, SSL"
    },
    {
      id: "11947",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16755.jpeg",
      name: "3900 S @ 2300 E, HDY"
    },
    {
      id: "11946",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16754.jpeg",
      name: "3900 S @ 500 W, SSL"
    },
    {
      id: "12190",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16998.jpeg",
      name: "4100 S @ 3200 W, WVC"
    },
    {
      id: "9715",
      url: "http://www.udottraffic.utah.gov/1_devices/aux349.jpeg",
      name: "4100 S @ 4800 W, WVC (Local)"
    },
    {
      id: "9645",
      url: "http://www.udottraffic.utah.gov/1_devices/aux346.jpeg",
      name: "4500 S / SR-266 @ Highland Dr, HDY"
    },
    {
      id: "9644",
      url: "http://www.udottraffic.utah.gov/1_devices/aux345.jpeg",
      name: "4700 S @ 2700 W, TAY"
    },
    {
      id: "12027",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16835.jpeg",
      name: "5300 S / SR-173 @ 320 W / Commerce Dr, MUR"
    },
    {
      id: "10889",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15698.jpeg",
      name: "5400 S / SR-173 @ 2200 W, TAY"
    },
    {
      id: "10890",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15699.jpeg",
      name: "5400 S / SR-173 @ 2700 W, TAY"
    },
    {
      id: "10891",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15700.jpeg",
      name: "5400 S / SR-173 @ 3200 W, TAY"
    },
    {
      id: "10892",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15701.jpeg",
      name: "5400 S / SR-173 @ 3600 W / Whitewood Dr, TAY"
    },
    {
      id: "12395",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17194.jpeg",
      name: "5400 S / SR-173 @ 3700 W, TAY"
    },
    {
      id: "12394",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17193.jpeg",
      name: "5400 S / SR-173 @ 3800 W, TAY"
    },
    {
      id: "11068",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15877.jpeg",
      name: "5400 S / SR-173 @ 4015 W, TAY"
    },
    {
      id: "11511",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16320.jpeg",
      name: "5400 S / SR-173 @ 6055 W / Upper Ridge Rd / USANA, WVC"
    },
    {
      id: "11613",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16422.jpeg",
      name: "5400 S / SR-173 @ 700 W / Murray Blvd, MUR"
    },
    {
      id: "11067",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15876.jpeg",
      name: "5415 S / 5400 S / SR-173 @ 4420 W, KRN"
    },
    {
      id: "192",
      url: "http://www.udottraffic.utah.gov/1_devices/aux192.jpeg",
      name: "5415 S / 5400 S / SR-173 @ 4800 W / Charlotte Ave, KRN"
    },
    {
      id: "12055",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16863.jpeg",
      name: "5600 W / SR-172 @ 4100 S, WVC"
    },
    {
      id: "11510",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16319.jpeg",
      name: "5600 W / SR-172 @ 5400 S / SR-173, SL"
    },
    {
      id: "12231",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17030.jpeg",
      name: "5600 W @ 8200 S, WJD"
    },
    {
      id: "11950",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16758.jpeg",
      name: "6200 S / SR-190 @ 3000 E, HDY"
    },
    {
      id: "9897",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14606.jpeg",
      name: "6200 S / Wasatch Blvd / SR-190 @ Wasatch Blvd / Millrock Dr, CWH"
    },
    {
      id: "10553",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15362.jpeg",
      name: "6200 S @ Jordan Canal Rd / Margray Dr, TAY"
    },
    {
      id: "9776",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14486.jpeg",
      name: "700 E / SR-71 @ 10600 S, SND"
    },
    {
      id: "10674",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15483.jpeg",
      name: "700 E / SR-71 @ 11000 S, SND"
    },
    {
      id: "10873",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15682.jpeg",
      name: "700 E / SR-71 @ 11400 S, SND"
    },
    {
      id: "11856",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16664.jpeg",
      name: "700 E / SR-71 @ 3900 S, MCK"
    },
    {
      id: "9631",
      url: "http://www.udottraffic.utah.gov/1_devices/aux311.jpeg",
      name: "700 E / SR-71 @ 4500 S / SR-266, MUR"
    },
    {
      id: "10535",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15344.jpeg",
      name: "700 E / SR-71 @ 9000 S / SR-209, SND"
    },
    {
      id: "9775",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14485.jpeg",
      name: "700 E / SR-71 @ 9800 S / Sego Lily Dr, SND"
    },
    {
      id: "12476",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17267.jpeg",
      name: "7200 S / Jordan River Blvd / SR-48 @ 700 W, MDV"
    },
    {
      id: "12230",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17029.jpeg",
      name: "7800 S @ 5600 W, WJD"
    },
    {
      id: "11513",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16322.jpeg",
      name: "7800 S @ Airport Rd / 4450 W, WJD"
    },
    {
      id: "12262",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17061.jpeg",
      name: "900 E / SR-71 @ 5600 S, MUR"
    },
    {
      id: "11775",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16583.jpeg",
      name: "900 E / SR-71 @ Fort Union Blvd / 7100 S, MDV"
    },
    {
      id: "9245",
      url: "http://www.udottraffic.utah.gov/1_devices/aux332.jpeg",
      name: "900 E / SR-71 @ Van Winkle Expwy / SR-152, MUR"
    },
    {
      id: "12450",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17241.jpeg",
      name: "9000 S / SR-209 @ 150 E / Trax, SND"
    },
    {
      id: "12232",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17031.jpeg",
      name: "9000 S / SR-209 @ 4000 W, WJD"
    },
    {
      id: "9642",
      url: "http://www.udottraffic.utah.gov/1_devices/aux303.jpeg",
      name: "9000 S / SR-209 @ 700 W, SND"
    },
    {
      id: "11299",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16108.jpeg",
      name:
        "9400 S / Little Cottonwood Rd / SR-209 @ 2300 E / Quail Hollow Dr, SND"
    },
    {
      id: "9347",
      url: "http://www.udottraffic.utah.gov/1_devices/aux336.jpeg",
      name: "9400 S / SR-209 @ 1300 E, SND"
    },
    {
      id: "9904",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14613.jpeg",
      name: "9400 S / SR-209 @ 2000 E / Highland Dr, SND"
    },
    {
      id: "11468",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16277.jpeg",
      name: "Bacchus Hwy / SR-111 @ 8200 S, WJD"
    },
    {
      id: "11253",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-111mile0-all.gif",
      name: "Bacchus Hwy / SR-111 Liveview NB @ New Bingham Hwy / MP 0, WJD"
    },
    {
      id: "10755",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR111%20@%20Bacchus.gif",
      name: "Bacchus Hwy / SR-111 RWIS SB @ 6400 S / MP 4.15, WVC"
    },
    {
      id: "11951",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16759.jpeg",
      name: "Bangerter Hwy / 200 E / SR-154 @ 13800 S, DPR"
    },
    {
      id: "9770",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14480.jpeg",
      name: "Bangerter Hwy / SR-154 @ 10400 S / South Jordan Pkwy / SR-151, SJO"
    },
    {
      id: "12447",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17238.jpeg",
      name: "Bangerter Hwy / SR-154 @ 11200 S, SJO"
    },
    {
      id: "9769",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14479.jpeg",
      name: "Bangerter Hwy / SR-154 @ 11400 S, SJO"
    },
    {
      id: "12405",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17204.jpeg",
      name: "Bangerter Hwy / SR-154 @ 11500 S, SJO"
    },
    {
      id: "306",
      url: "http://www.udottraffic.utah.gov/1_devices/aux306.jpeg",
      name: "Bangerter Hwy / SR-154 @ 12600 S / SR-71, RVT"
    },
    {
      id: "9768",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14478.jpeg",
      name: "Bangerter Hwy / SR-154 @ 13400 S, RVT"
    },
    {
      id: "11881",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16689.jpeg",
      name: "Bangerter Hwy / SR-154 @ 200 W / MP 0.78, DPR"
    },
    {
      id: "9767",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14477.jpeg",
      name: "Bangerter Hwy / SR-154 @ 2700 W, BLF"
    },
    {
      id: "11880",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16688.jpeg",
      name: "Bangerter Hwy / SR-154 @ 300 W / MP 1.0, DPR"
    },
    {
      id: "265",
      url: "http://www.udottraffic.utah.gov/1_devices/aux265.jpeg",
      name: "Bangerter Hwy / SR-154 @ 4100 S, WVC"
    },
    {
      id: "264",
      url: "http://www.udottraffic.utah.gov/1_devices/aux264.jpeg",
      name: "Bangerter Hwy / SR-154 @ 4700 S, TAY"
    },
    {
      id: "11879",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16687.jpeg",
      name: "Bangerter Hwy / SR-154 @ 500 W / MP 1.25, DPR"
    },
    {
      id: "263",
      url: "http://www.udottraffic.utah.gov/1_devices/aux263.jpeg",
      name: "Bangerter Hwy / SR-154 @ 5200 S, TAY"
    },
    {
      id: "12387",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17186.jpeg",
      name: "Bangerter Hwy / SR-154 @ 5300 S, TAY"
    },
    {
      id: "12386",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17185.jpeg",
      name: "Bangerter Hwy / SR-154 @ 5600 S, TAY"
    },
    {
      id: "12396",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17195.jpeg",
      name: "Bangerter Hwy / SR-154 @ 5700 S, TAY"
    },
    {
      id: "11878",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16686.jpeg",
      name: "Bangerter Hwy / SR-154 @ 600 W / MP 1.45, DPR"
    },
    {
      id: "193",
      url: "http://www.udottraffic.utah.gov/1_devices/aux193.jpg",
      name: "Bangerter Hwy / SR-154 @ 6200 S, WJD"
    },
    {
      id: "12397",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17196.jpeg",
      name: "Bangerter Hwy / SR-154 @ 6900 S, WJD"
    },
    {
      id: "11877",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16685.jpeg",
      name: "Bangerter Hwy / SR-154 @ 700 W / MP 1.6, DPR"
    },
    {
      id: "12399",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17198.jpeg",
      name: "Bangerter Hwy / SR-154 @ 7100 S, WJD"
    },
    {
      id: "261",
      url: "http://www.udottraffic.utah.gov/1_devices/aux261.jpeg",
      name: "Bangerter Hwy / SR-154 @ 7800 S / SR-48, WJD"
    },
    {
      id: "11876",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16684.jpeg",
      name: "Bangerter Hwy / SR-154 @ 800 W / MP 1.86, DPR"
    },
    {
      id: "12400",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17199.jpeg",
      name: "Bangerter Hwy / SR-154 @ 8900 S, WJD"
    },
    {
      id: "12402",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17201.jpeg",
      name: "Bangerter Hwy / SR-154 @ 9150 S, WJD"
    },
    {
      id: "9771",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14481.jpg",
      name: "Bangerter Hwy / SR-154 @ 9800 S, SJO"
    },
    {
      id: "9766",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14476.jpeg",
      name: "Bangerter Hwy / SR-154 EB @ Redwood Rd / SR-68, BLF"
    },
    {
      id: "262",
      url: "http://www.udottraffic.utah.gov/1_devices/aux262.jpeg",
      name: "Bangerter Hwy / SR-154 NB @ 7000 S, WJD"
    },
    {
      id: "12401",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17200.jpeg",
      name: "Bangerter Hwy / SR-154 NB @ 9000 S / SR-209, WJD"
    },
    {
      id: "12398",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17197.jpeg",
      name: "Bangerter Hwy / SR-154 SB @ 7000 S / Jordan Landing Blvd, WJD"
    },
    {
      id: "260",
      url: "http://www.udottraffic.utah.gov/1_devices/aux260.jpeg",
      name: "Bangerter Hwy / SR-154 SB @ 9000 S / SR-209, WJD"
    },
    {
      id: "11603",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16412.jpeg",
      name: "Bangerter Hwy / SR-154 WB @ Redwood Rd / SR-68, RVT"
    },
    {
      id: "11405",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16214.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ Butler / MP 10, SL"
    },
    {
      id: "11406",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16215.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ Cardiff Fork / MP 10.74, SL"
    },
    {
      id: "11403",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16212.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ Dogwood / MP 4.1, SL"
    },
    {
      id: "11404",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16213.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ S-Curves / MP 6.38, SL"
    },
    {
      id: "11407",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16216.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ Silver Fork / MP 12.54, SL"
    },
    {
      id: "12021",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16829.jpeg",
      name: "Fort Union Blvd / 6910 S @ 1300 E, CWH"
    },
    {
      id: "12022",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16830.jpeg",
      name: "Fort Union Blvd / 7000 S @ 2300 E, CWH"
    },
    {
      id: "11945",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16753.jpeg",
      name: "Highland Dr / 2000 E @ Bengal Blvd / Parkridge Dr, CWH"
    },
    {
      id: "9643",
      url: "http://www.udottraffic.utah.gov/1_devices/aux344.jpeg",
      name: "Highland Dr / 2000 E @ Fort Union Blvd / 7000 S, CWH"
    },
    {
      id: "11964",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16772.jpeg",
      name: "Highland Dr / Van Winkle Expwy / SR-152 @ 6200 S, HDY"
    },
    {
      id: "9647",
      url: "http://www.udottraffic.utah.gov/1_devices/aux348.jpeg",
      name: "Highland Dr @ 3900 S, SL"
    },
    {
      id: "82",
      url: "http://www.udottraffic.utah.gov/1_devices/aux82.jpeg",
      name: "I-15 NB @ 10200 S / MP 294.2, SND"
    },
    {
      id: "11942",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16750.jpeg",
      name: "I-15 NB @ 10600 S / SR-151 / MP 293.65, SND"
    },
    {
      id: "11943",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16751.jpeg",
      name: "I-15 NB @ 10600 S / SR-151 / MP 293.65, SND (Tunnel)"
    },
    {
      id: "10694",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15503.jpeg",
      name: "I-15 NB @ 11500 S / MP 292.35, DPR"
    },
    {
      id: "9656",
      url: "http://www.udottraffic.utah.gov/1_devices/aux356.jpeg",
      name: "I-15 NB @ 11900 S / MP 291.98, DPR"
    },
    {
      id: "9653",
      url: "http://www.udottraffic.utah.gov/1_devices/aux353.jpeg",
      name: "I-15 NB @ 12300 S / SR-71 / MP 291.4, DPR"
    },
    {
      id: "11721",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16529.jpeg",
      name: "I-15 NB @ 14000 S / MP 289.34, DPR"
    },
    {
      id: "11724",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16532.jpeg",
      name: "I-15 NB @ 14500 S / MP 288.54, DPR"
    },
    {
      id: "11727",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16535.jpeg",
      name: "I-15 NB @ 15200 S / MP 287.6, DPR"
    },
    {
      id: "11728",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16536.jpeg",
      name: "I-15 NB @ 15400 S / MP 287.23, DPR"
    },
    {
      id: "100",
      url: "http://www.udottraffic.utah.gov/1_devices/aux100.jpeg",
      name: "I-15 NB @ 3750 S / MP 302.75, SSL"
    },
    {
      id: "11735",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16543.jpeg",
      name: "I-15 NB @ 3800 N / Adobe Way / MP 284.3, LHI"
    },
    {
      id: "99",
      url: "http://www.udottraffic.utah.gov/1_devices/aux99.jpeg",
      name: "I-15 NB @ 4100 S / MP 302.25, MUR"
    },
    {
      id: "11734",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16542.jpeg",
      name: "I-15 NB @ 4200 N / MP 284.65, LHI"
    },
    {
      id: "98",
      url: "http://www.udottraffic.utah.gov/1_devices/aux98.jpeg",
      name: "I-15 NB @ 4500 S / SR-266 / MP 301.71, MUR"
    },
    {
      id: "96",
      url: "http://www.udottraffic.utah.gov/1_devices/aux96.jpeg",
      name: "I-15 NB @ 5000 S / MP 301, MUR"
    },
    {
      id: "95",
      url: "http://www.udottraffic.utah.gov/1_devices/aux95.jpeg",
      name: "I-15 NB @ 5200 S / MP 300.63, MUR"
    },
    {
      id: "93",
      url: "http://www.udottraffic.utah.gov/1_devices/aux93.jpeg",
      name: "I-15 NB @ 5550 S / MP 300, MUR"
    },
    {
      id: "90",
      url: "http://www.udottraffic.utah.gov/1_devices/aux90.jpeg",
      name: "I-15 NB @ 6600 S / MP 298.5, MDV"
    },
    {
      id: "12404",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17203.jpeg",
      name: "I-15 NB @ 6950 S / MP 298.25, MDV"
    },
    {
      id: "87",
      url: "http://www.udottraffic.utah.gov/1_devices/aux87.jpeg",
      name: "I-15 NB @ 8000 S / MP 296.9, MDV"
    },
    {
      id: "85",
      url: "http://www.udottraffic.utah.gov/1_devices/aux85.jpeg",
      name: "I-15 NB @ 9000 S / SR-209 / MP 295.66, SND"
    },
    {
      id: "83",
      url: "http://www.udottraffic.utah.gov/1_devices/aux83.jpeg",
      name: "I-15 NB @ 9600 S / MP 294.76, SND"
    },
    {
      id: "250",
      url: "http://www.udottraffic.utah.gov/1_devices/aux250.jpeg",
      name:
        "I-15 NB @ Highland Alpine Exit / SR-92 / Timpanogos Hwy / Club House Dr / MP 284, LHI"
    },
    {
      id: "81",
      url: "http://www.udottraffic.utah.gov/1_devices/aux81.jpeg",
      name: "I-15 SB @ 10600 S / South Jordan Pkwy / SR-151 / MP 293.6, SJO"
    },
    {
      id: "9654",
      url: "http://www.udottraffic.utah.gov/1_devices/aux357.jpeg",
      name: "I-15 SB @ 11000 S / MP 293, SJO"
    },
    {
      id: "10695",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15504.jpeg",
      name: "I-15 SB @ 11400 S / MP 292.62, SJO"
    },
    {
      id: "12403",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17202.jpeg",
      name: "I-15 SB @ 12500 S / MP 291.17, DPR"
    },
    {
      id: "11752",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16560.jpeg",
      name: "I-15 SB @ 12600 S / MP 291.1, DPR"
    },
    {
      id: "11751",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16559.jpeg",
      name: "I-15 SB @ 13000 S / MP 290.6, DPR"
    },
    {
      id: "11750",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16558.jpeg",
      name: "I-15 SB @ 13400 S / MP 290.08, DPR"
    },
    {
      id: "11722",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16530.jpeg",
      name: "I-15 SB @ 14200 S / MP 289.09, DPR"
    },
    {
      id: "11723",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16531.jpeg",
      name: "I-15 SB @ 14300 S / MP 288.84, DPR"
    },
    {
      id: "11725",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16533.jpeg",
      name: "I-15 SB @ 14600 S / Highland Dr / SR-140 / MP 288.3, BLF"
    },
    {
      id: "11726",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16534.jpeg",
      name: "I-15 SB @ 15000 S / MP 287.91, BLF"
    },
    {
      id: "11729",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16537.jpeg",
      name: "I-15 SB @ 15800 S / MP 286.64, BLF"
    },
    {
      id: "11730",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16538.jpeg",
      name: "I-15 SB @ 16200 S / MP 286.3, BLF"
    },
    {
      id: "97",
      url: "http://www.udottraffic.utah.gov/1_devices/aux97.jpeg",
      name: "I-15 SB @ 4500 S / SR-266 / MP 301.65, MUR"
    },
    {
      id: "11733",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16541.jpeg",
      name: "I-15 SB @ 4600 N / MP 285.12, LHI"
    },
    {
      id: "11732",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16540.jpeg",
      name: "I-15 SB @ 4800 N / MP 285.37, LHI"
    },
    {
      id: "9623",
      url: "http://www.udottraffic.utah.gov/1_devices/aux94.jpeg",
      name: "I-15 SB @ 5300 S / SR-173 / MP 300.35, MUR"
    },
    {
      id: "92",
      url: "http://www.udottraffic.utah.gov/1_devices/aux92.jpeg",
      name: "I-15 SB @ 5800 S / MP 299.7, MUR"
    },
    {
      id: "88",
      url: "http://www.udottraffic.utah.gov/1_devices/aux88.jpeg",
      name: "I-15 SB @ 7400 S / MP 297.6, MDV"
    },
    {
      id: "86",
      url: "http://www.udottraffic.utah.gov/1_devices/aux86.jpeg",
      name: "I-15 SB @ 8400 S / MP 296.4, MDV"
    },
    {
      id: "84",
      url: "http://www.udottraffic.utah.gov/1_devices/aux84.jpeg",
      name: "I-15 SB @ 9100 S / MP 295.48, SND"
    },
    {
      id: "9700",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14408.jpeg",
      name: "I-15 SB @ Bangerter Hwy / SR-154 / MP 289.83, DPR"
    },
    {
      id: "91",
      url: "http://www.udottraffic.utah.gov/1_devices/aux91.jpeg",
      name: "I-15 SB @ I-215 South Interchange / MP 299, MUR"
    },
    {
      id: "11731",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16539.jpeg",
      name: "I-15 SB @ Point of the Mountain / MP 285.78, UT"
    },
    {
      id: "2",
      url: "http://www.udottraffic.utah.gov/1_devices/aux2.jpeg",
      name: "I-215 E NB @ 3800 S / MP 2.58, MCK"
    },
    {
      id: "4",
      url: "http://www.udottraffic.utah.gov/1_devices/aux4.jpeg",
      name: "I-215 E NB @ 4100 S / MP 3.05, MCK"
    },
    {
      id: "6",
      url: "http://www.udottraffic.utah.gov/1_devices/aux6.jpeg",
      name: "I-215 E NB @ 4800 S / MP 4.27, HDY"
    },
    {
      id: "7",
      url: "http://www.udottraffic.utah.gov/1_devices/aux7.jpeg",
      name: "I-215 E NB @ 5200 S / MP 4.65, HDY"
    },
    {
      id: "8",
      url: "http://www.udottraffic.utah.gov/1_devices/aux8.jpeg",
      name: "I-215 E NB @ 5650 S / MP 5.59, HDY"
    },
    {
      id: "12407",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17206.jpeg",
      name: "I-215 E NB @ 6100 S / MP 6.1, HDY"
    },
    {
      id: "9",
      url: "http://www.udottraffic.utah.gov/1_devices/aux9.jpeg",
      name: "I-215 E NB @ 6200 S / SR-190 / MP 6.34, HDY"
    },
    {
      id: "10",
      url: "http://www.udottraffic.utah.gov/1_devices/aux10.jpeg",
      name: "I-215 E NB @ 6400 S / MP 6.56, HDY"
    },
    {
      id: "3",
      url: "http://www.udottraffic.utah.gov/1_devices/aux3.jpeg",
      name: "I-215 E SB @ 3900 S / MP 2.73, MCK"
    },
    {
      id: "5",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5.jpeg",
      name: "I-215 E SB @ 4500 S / SR-266 / MP 3.67, MCK"
    },
    {
      id: "21",
      url: "http://www.udottraffic.utah.gov/1_devices/aux21.jpeg",
      name: "I-215 S EB @ 1200 W / Murray Pkwy Ave / MP 12.34, MUR"
    },
    {
      id: "13",
      url: "http://www.udottraffic.utah.gov/1_devices/aux13.jpeg",
      name: "I-215 S EB @ 1900 E / MP 7.98, CWH"
    },
    {
      id: "25",
      url: "http://www.udottraffic.utah.gov/1_devices/aux25.jpeg",
      name: "I-215 S EB @ 2200 W / MP 14.06, TAY"
    },
    {
      id: "12023",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16831.jpeg",
      name: "I-215 S EB @ 2300 E / MP 7.3, CWH"
    },
    {
      id: "17",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17.jpeg",
      name: "I-215 S EB @ 300 E / MP 10.18, MDV"
    },
    {
      id: "20",
      url: "http://www.udottraffic.utah.gov/1_devices/aux20.jpeg",
      name: "I-215 S EB @ 700 W / MP 11.8, MUR"
    },
    {
      id: "23",
      url: "http://www.udottraffic.utah.gov/1_devices/aux23.jpeg",
      name: "I-215 S EB @ Redwood Rd / SR-68 / MP 13.4, TAY"
    },
    {
      id: "18",
      url: "http://www.udottraffic.utah.gov/1_devices/aux18.jpeg",
      name: "I-215 S EB @ State St / US-89 / MP 10.66, MUR"
    },
    {
      id: "14",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14.jpeg",
      name: "I-215 S WB @ 1300 E / MP 8.87, CWH"
    },
    {
      id: "22",
      url: "http://www.udottraffic.utah.gov/1_devices/aux22.jpeg",
      name: "I-215 S WB @ 1300 W / MP 12.9, MUR"
    },
    {
      id: "12",
      url: "http://www.udottraffic.utah.gov/1_devices/aux12.jpeg",
      name: "I-215 S WB @ 2000 E / Highland Dr / SR-152 / MP 7.76, CWH"
    },
    {
      id: "11",
      url: "http://www.udottraffic.utah.gov/1_devices/aux11.jpeg",
      name: "I-215 S WB @ 2300 E / MP 7.25, HDY"
    },
    {
      id: "19",
      url: "http://www.udottraffic.utah.gov/1_devices/aux19.jpeg",
      name: "I-215 S WB @ 300 W / MP 11.15, MUR"
    },
    {
      id: "16",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16.jpeg",
      name: "I-215 S WB @ 900 E / SR-71 / MP 9.5, MDV"
    },
    {
      id: "24",
      url: "http://www.udottraffic.utah.gov/1_devices/aux24.jpeg",
      name: "I-215 S WB @ Redwood Rd / SR-68 / MP 13.5, TAY"
    },
    {
      id: "15",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15.jpeg",
      name: "I-215 S WB @ Union Park Ave / MP 9.31, MDV"
    },
    {
      id: "27",
      url: "http://www.udottraffic.utah.gov/1_devices/aux27.jpeg",
      name: "I-215 W NB @ 4700 S / SR-266 / MP 15.46, TAY"
    },
    {
      id: "29",
      url: "http://www.udottraffic.utah.gov/1_devices/aux29.jpeg",
      name: "I-215 W SB @ 3900 S / MP 16.9, WVC"
    },
    {
      id: "28",
      url: "http://www.udottraffic.utah.gov/1_devices/aux28.jpeg",
      name: "I-215 W SB @ 4300 S / MP 16.18, TAY"
    },
    {
      id: "26",
      url: "http://www.udottraffic.utah.gov/1_devices/aux26.jpeg",
      name: "I-215 W SB @ 5100 S / MP 14.96, TAY"
    },
    {
      id: "10186",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14895.jpeg",
      name:
        "Little Cottonwood Rd / 3335 E / SR-209 @ Old Wasatch Blvd / 9710 S, GNT"
    },
    {
      id: "11799",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16607.jpeg",
      name: "Little Cottonwood Rd / 9800 S / SR-209 @ Wasatch Blvd / 3400 E, SL"
    },
    {
      id: "12437",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17228.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Alta Bypass / MP 10.95, SL"
    },
    {
      id: "11457",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16266.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Lisa Falls / MP 6.5, SL"
    },
    {
      id: "11458",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16267.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Seven Turns / MP 7.4, SL"
    },
    {
      id: "11459",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16268.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Tanners Flat / MP 7.94, SL"
    },
    {
      id: "11456",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16265.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Upper Vault / MP 5.96, SL"
    },
    {
      id: "11461",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16270.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ White Pine Parking / MP 9.2, SL"
    },
    {
      id: "11839",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16647.jpeg",
      name: "Little Cottonwood Rd / SR-210 RWIS EB @ Powerhouse / MP 5.67, SL"
    },
    {
      id: "12435",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17226.jpeg",
      name: "Little Cottonwood Rd / SR-210 WB @ Alta / MP 12.16, ALT"
    },
    {
      id: "12436",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17227.jpeg",
      name: "Little Cottonwood Rd / SR-210 WB @ Upper White Pine / MP 9.7, SL"
    },
    {
      id: "11460",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16269.jpeg",
      name: "Little Cottonwood Rd / SR-210 WB @ White Pine / MP 8.7, SL"
    },
    {
      id: "10676",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15485.jpeg",
      name: "Minuteman Dr @ 12450 S, DPR"
    },
    {
      id: "11016",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15825.jpeg",
      name: "Mountain View / SR-85 NB @ 12600 S, RVT"
    },
    {
      id: "11017",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15826.jpeg",
      name: "Mountain View / SR-85 NB @ 13400 S, RVT"
    },
    {
      id: "12054",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16862.jpeg",
      name: "Mountain View / SR-85 NB @ 4100 S, WVC"
    },
    {
      id: "12052",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16860.jpeg",
      name: "Mountain View / SR-85 NB @ 4565 S, WVC"
    },
    {
      id: "12051",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16859.jpeg",
      name: "Mountain View / SR-85 NB @ 4825 S, WVC"
    },
    {
      id: "11062",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15871.jpeg",
      name: "Mountain View / SR-85 NB @ 5400 S / SR-173, WVC"
    },
    {
      id: "11059",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15868.jpeg",
      name: "Mountain View / SR-85 NB @ 7600 S, WJD"
    },
    {
      id: "11061",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15870.jpeg",
      name: "Mountain View / SR-85 NB @ 7800 S, WJD"
    },
    {
      id: "11060",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15869.jpeg",
      name: "Mountain View / SR-85 NB @ 9000 S / SR-209, WJD"
    },
    {
      id: "11018",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15827.jpeg",
      name: "Mountain View / SR-85 NB @ Porter Rockwell Blvd, HRR"
    },
    {
      id: "11756",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16564.jpeg",
      name: "Mountain View / SR-85 NB @ South Jordan Pkwy / 11000 S, SJO"
    },
    {
      id: "11357",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-85%20Juniper-all.gif",
      name: "Mountain View / SR-85 RWIS NB @ 14600 S / Juniper, HRR"
    },
    {
      id: "11022",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15831.jpeg",
      name: "Mountain View / SR-85 SB @ 11450 S, SJO"
    },
    {
      id: "11019",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15828.jpeg",
      name: "Mountain View / SR-85 SB @ 12200 S, HRR"
    },
    {
      id: "11025",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15834.jpeg",
      name: "Mountain View / SR-85 SB @ 13200 S, RVT"
    },
    {
      id: "12053",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16861.jpeg",
      name: "Mountain View / SR-85 SB @ 4350 S, WVC"
    },
    {
      id: "11056",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15865.jpeg",
      name: "Mountain View / SR-85 SB @ 5800 S, WVC"
    },
    {
      id: "11058",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15867.jpeg",
      name: "Mountain View / SR-85 SB @ 6200 S, WVC"
    },
    {
      id: "11057",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15866.jpeg",
      name: "Mountain View / SR-85 SB @ 9860 S, WJD"
    },
    {
      id: "11020",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15829.jpeg",
      name: "Mountain View / SR-85 SB @ Daybreak Pkwy, SJO"
    },
    {
      id: "11868",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16676.jpeg",
      name: "Mountain View / SR-85 SB @ Lake Ave / 11400 S, SJO"
    },
    {
      id: "11021",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15830.jpeg",
      name: "Mountain View / SR-85 SB @ Old Bingham Hwy, WJD"
    },
    {
      id: "12050",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16858.jpeg",
      name: "Mountain View / SR-85 SB @ Upper Ridge Rd / 5100 S, WVC"
    },
    {
      id: "11064",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15873.jpeg",
      name: "New Bingham Hwy @ 4800 W, WJD"
    },
    {
      id: "11063",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15872.jpeg",
      name: "New Bingham Hwy @ 5600 W, WJD"
    },
    {
      id: "9895",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14604.jpeg",
      name:
        "North Little Cottonwood Rd / Little Cottonwood Canyon Rd / SR-210 @ Little Cottonwood Rd / SR-209, SL"
    },
    {
      id: "11800",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16608.jpeg",
      name:
        "North Little Cottonwood Rd / Wasatch Blvd / 3600 E / SR-210 @ Wasatch Blvd / 8900 S, CWH"
    },
    {
      id: "11024",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15833.jpeg",
      name: "Porter Rockwell Blvd @ 2300 W, HRR"
    },
    {
      id: "11828",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16636.jpeg",
      name: "Redwood Rd / SR-68 @ 10400 S / South Jordan Pkwy / SR-151, SJO"
    },
    {
      id: "11015",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15824.jpeg",
      name: "Redwood Rd / SR-68 @ 11400 S, SJO"
    },
    {
      id: "305",
      url: "http://www.udottraffic.utah.gov/1_devices/aux305.jpeg",
      name: "Redwood Rd / SR-68 @ 12600 S / SR-71, RVT"
    },
    {
      id: "12260",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17059.jpeg",
      name: "Redwood Rd / SR-68 @ 12800 S, RVT"
    },
    {
      id: "12261",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17060.jpeg",
      name: "Redwood Rd / SR-68 @ 13400 S, RVT"
    },
    {
      id: "10328",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15037.jpeg",
      name: "Redwood Rd / SR-68 @ 14400 S / SR-140, BLF"
    },
    {
      id: "11949",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16757.jpeg",
      name: "Redwood Rd / SR-68 @ 4100 S, TAY"
    },
    {
      id: "10733",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15542.jpeg",
      name: "Redwood Rd / SR-68 @ 4700 S / SR-266, TAY"
    },
    {
      id: "9867",
      url: "http://www.udottraffic.utah.gov/1_devices/aux2123.jpeg",
      name: "Redwood Rd / SR-68 @ 5400 S / SR-173, TAY"
    },
    {
      id: "10554",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15363.jpeg",
      name: "Redwood Rd / SR-68 @ 6200 S, TAY"
    },
    {
      id: "9630",
      url: "http://www.udottraffic.utah.gov/1_devices/aux309.jpeg",
      name: "Redwood Rd / SR-68 @ 7000 S / SR-48, WJD"
    },
    {
      id: "9557",
      url: "http://www.udottraffic.utah.gov/1_devices/aux308.jpeg",
      name: "Redwood Rd / SR-68 @ 7800 S / SR-48, WJD"
    },
    {
      id: "11466",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16275.jpeg",
      name: "Redwood Rd / SR-68 @ 8200 S / Sugar Factory Rd, WJD"
    },
    {
      id: "9555",
      url: "http://www.udottraffic.utah.gov/1_devices/aux307.jpeg",
      name: "Redwood Rd / SR-68 @ 9000 S / SR-209, WJD"
    },
    {
      id: "11023",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15832.jpeg",
      name: "Redwood Rd / SR-68 @ Porter Rockwell Blvd, BLF"
    },
    {
      id: "10329",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15038.jpeg",
      name: "Redwood Rd / SR-68 @ W. G. Williams Ave, UT"
    },
    {
      id: "11826",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16634.jpeg",
      name: "South Jordan Pkwy / 10400 S / SR-151 @ 2200 W, SJO"
    },
    {
      id: "10853",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-92-mp-14.gif",
      name: "SR-92 Liveview WB @ Alpine Loop Scenic Hwy / MP 14.37, UT"
    },
    {
      id: "11965",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16773.jpeg",
      name: "State St / US-89 @ 10000 S / Sego Lily Dr, SND"
    },
    {
      id: "10104",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14813.jpeg",
      name: "State St / US-89 @ 10600 S, SND"
    },
    {
      id: "12341",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17140.jpeg",
      name: "State St / US-89 @ 11000 S, SND"
    },
    {
      id: "12342",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17141.jpeg",
      name: "State St / US-89 @ 11235 S / Auto Mall Dr, SND"
    },
    {
      id: "10686",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15495.jpeg",
      name: "State St / US-89 @ 11400 S, SND"
    },
    {
      id: "10677",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15486.jpeg",
      name: "State St / US-89 @ 12200 S, DPR"
    },
    {
      id: "11948",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16756.jpeg",
      name: "State St / US-89 @ 3900 S, SSL"
    },
    {
      id: "9264",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5143.jpeg",
      name: "State St / US-89 @ 4500 S / SR-266, MUR"
    },
    {
      id: "144",
      url: "http://www.udottraffic.utah.gov/1_devices/aux144.jpeg",
      name: "State St / US-89 @ 5300 S / SR-173, MUR"
    },
    {
      id: "11825",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16633.jpeg",
      name: "State St / US-89 @ 7200 S / Fort Union Blvd / SR-48, MDV"
    },
    {
      id: "195",
      url: "http://www.udottraffic.utah.gov/1_devices/aux195.jpeg",
      name: "State St / US-89 @ 7800 S, MDV"
    },
    {
      id: "12268",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17067.jpeg",
      name: "State St / US-89 @ 8375 S / Princeton Dr, SND"
    },
    {
      id: "10108",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14817.jpeg",
      name: "State St / US-89 @ 9000 S / SR-209, SND"
    },
    {
      id: "10103",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14812.jpeg",
      name: "State St / US-89 @ 9400 S, SND"
    },
    {
      id: "10893",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15702.jpeg",
      name: "State St / US-89 @ Rio Tinto Stadium / 9220 S, SND"
    },
    {
      id: "145",
      url: "http://www.udottraffic.utah.gov/1_devices/aux145.jpeg",
      name: "State St / US-89 @ Winchester St / 6400 S, MUR"
    },
    {
      id: "11666",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16474.jpeg",
      name: "Timpanogos Hwy / 11000 N / SR-92 @ 6000 W, HLD"
    },
    {
      id: "11758",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16566.jpeg",
      name: "Timpanogos Hwy / 11000 N / SR-92 @ 6400 W, HLD"
    },
    {
      id: "11010",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15819.jpeg",
      name:
        "Timpanogos Hwy / 11000 N / SR-92 @ Alpine Hwy / 5300 W / SR-74, HLD"
    },
    {
      id: "11388",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16197.jpeg",
      name:
        "Timpanogos Hwy / 11000 N / SR-92 @ North County Blvd / 4800 W / SR-129, HLD"
    },
    {
      id: "11011",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15820.jpeg",
      name: "Timpanogos Hwy / 3500 N / SR-92 @ 1200 E / Micron, LHI"
    },
    {
      id: "11665",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16473.jpeg",
      name: "Timpanogos Hwy / 3500 N / SR-92 @ 1450 W, LHI"
    },
    {
      id: "11012",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15821.jpeg",
      name: "Timpanogos Hwy / 3500 N / SR-92 @ Center St, LHI"
    },
    {
      id: "11667",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16475.jpeg",
      name: "Timpanogos Hwy / 3500 N / SR-92 @ Morning Vista Rd / 1200 W, LHI"
    },
    {
      id: "11542",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16351.jpeg",
      name:
        "Timpanogos Hwy / Club House Dr / SR-92 @ Ashton Blvd / Maple Loop Dr, LHI"
    },
    {
      id: "11055",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15864.jpeg",
      name: "Triumph Blvd @ Cabelas Blvd, LHI"
    },
    {
      id: "146",
      url: "http://www.udottraffic.utah.gov/1_devices/aux146.jpeg",
      name: "Union Park Ave / 1090 E @ Fort Union Blvd / 7000 S, MDV"
    },
    {
      id: "11944",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16752.jpeg",
      name: "Union Park Ave / 1300 E @ 7755 S / Forbush Ln, SND"
    },
    {
      id: "12019",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16827.jpeg",
      name: "Union Park Ave / 1300 E @ Creek Rd / South Union Ave / 7340 S, CWH"
    },
    {
      id: "12020",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16828.jpeg",
      name: "Union Park Ave @ 1300 E / 7100 S, CWH"
    },
    {
      id: "11467",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16276.jpeg",
      name: "Van Winkle Expwy / SR-152 @ 5600 S, HDY"
    },
    {
      id: "11798",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16606.jpeg",
      name:
        "Wasatch Blvd / 3650 E / SR-210 @ 7800 S / Bengal Blvd / Honeywood Cove Dr, CWH"
    },
    {
      id: "9896",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14605.jpeg",
      name:
        "Wasatch Blvd / SR-190/SR-210 @ Big Cottonwood Canyon Rd / Fort Union Blvd / SR-190, CWH"
    }
  ],
  Farmington: [
    {
      id: "12068",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16876.jpeg",
      name: "200 N / SR-273 @ Main St / SR-273, KAY"
    },
    {
      id: "12059",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16867.jpeg",
      name: "400 N / SR-106 @ Main St, BTF"
    },
    {
      id: "9777",
      url: "http://www.udottraffic.utah.gov/1_devices/Aux14487.jpeg",
      name: "500 S @ Main St, BTF"
    },
    {
      id: "9638",
      url: "http://www.udottraffic.utah.gov/1_devices/aux436.jpeg",
      name: "500 W / US-89 @ 400 N / SR-106, BTF"
    },
    {
      id: "9639",
      url: "http://www.udottraffic.utah.gov/1_devices/aux437.jpeg",
      name: "500 W / US-89 @ 500 S / SR-68, BTF"
    },
    {
      id: "11360",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16169.jpeg",
      name: "700 S / SR-193 @ Industrial Pkwy, CFD"
    },
    {
      id: "10876",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15685.jpeg",
      name: "Angel St @ Layton Pkwy, LTN"
    },
    {
      id: "12070",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16878.jpeg",
      name: "Antelope Dr / 1700 S / SR-108 @ 2000 W / SR-108, SYR"
    },
    {
      id: "12069",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16877.jpeg",
      name: "Antelope Dr / 1700 S / SR-108 @ Main St, CFD"
    },
    {
      id: "11387",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16196.jpeg",
      name: "Fairfield Rd / 850 E @ Cherry Ln / 1350 N, LTN"
    },
    {
      id: "11867",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16675.jpeg",
      name: "Fairfield Rd / 850 E @ Wasatch Dr / 425 N, LTN"
    },
    {
      id: "10679",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15488.jpeg",
      name: "Gentile St @ Flint St, LTN"
    },
    {
      id: "9637",
      url: "http://www.udottraffic.utah.gov/1_devices/aux435.jpeg",
      name: "Hill Field Rd / SR-232 @ 2000 N / Antelope Dr, LTN"
    },
    {
      id: "9403",
      url: "http://www.udottraffic.utah.gov/1_devices/aux423.jpeg",
      name: "Hill Field Rd / SR-232 @ 3000 N / SR-193, LTN"
    },
    {
      id: "9125",
      url: "http://www.udottraffic.utah.gov/1_devices/aux315.jpeg",
      name: "Hill Field Rd / SR-232 @ Gordon Ave / 1000 N, LTN"
    },
    {
      id: "9405",
      url: "http://www.udottraffic.utah.gov/1_devices/aux425.jpeg",
      name: "Hill Field Rd / SR-232 @ Main St / SR-126, LTN"
    },
    {
      id: "10494",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15303.jpeg",
      name: "I-15 NB @ 1500 S / MP 316.23, WXS"
    },
    {
      id: "10426",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15135.jpeg",
      name: "I-15 NB @ 1800 S / MP 326.23, KAY"
    },
    {
      id: "11858",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16666.jpeg",
      name: "I-15 NB @ 2600 S / SR-93 / MP 315.26, WXS"
    },
    {
      id: "9389",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5131.jpeg",
      name: "I-15 NB @ 500 W / US-89 / MP 318.1, BTF"
    },
    {
      id: "10425",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15134.jpeg",
      name: "I-15 NB @ 900 S / MP 327.34, KAY"
    },
    {
      id: "9346",
      url: "http://www.udottraffic.utah.gov/1_devices/aux422.jpeg",
      name: "I-15 NB @ Antelope Dr / 2000 N / SR-108 / MP 332.87, LTN"
    },
    {
      id: "10684",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15493.jpeg",
      name: "I-15 NB @ Church St / MP 330.75, LTN"
    },
    {
      id: "226",
      url: "http://www.udottraffic.utah.gov/1_devices/aux226.jpeg",
      name: "I-15 NB @ Hill Field Rd / 750 N / SR-232 / MP 331.36, LTN"
    },
    {
      id: "10580",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15389.jpeg",
      name: "I-15 NB @ Layton Pkwy / SR-126 / MP 330.12, LTN"
    },
    {
      id: "10388",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15097.jpeg",
      name: "I-15 NB @ Shepard Ln / MP 325.43, FRM"
    },
    {
      id: "9392",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5135.jpeg",
      name: "I-15 NB @ State St / MP 323.66, FRM"
    },
    {
      id: "10402",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15111.jpeg",
      name: "I-15 SB @ 1400 N / MP 320.46, CVL"
    },
    {
      id: "227",
      url: "http://www.udottraffic.utah.gov/1_devices/aux227.jpeg",
      name: "I-15 SB @ 200 N / SR-273 / MP 328.65, KAY"
    },
    {
      id: "9388",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5133.jpeg",
      name: "I-15 SB @ 2100 N / MP 321.34, CVL"
    },
    {
      id: "9402",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5129.jpeg",
      name: "I-15 SB @ 2600 S  / SR-93 / MP 315.24, WXS"
    },
    {
      id: "10389",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15098.jpeg",
      name: "I-15 SB @ 400 N / SR-106 / MP 317.55, WBN"
    },
    {
      id: "9408",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5130.jpeg",
      name: "I-15 SB @ 500 S / SR-68 / MP 316.84, WBN"
    },
    {
      id: "10581",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15390.jpg",
      name: "I-15 SB @ 550 S / MP 329.9, LTN"
    },
    {
      id: "10493",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15302.jpeg",
      name: "I-15 SB @ 600 S / MP 318.76, CVL"
    },
    {
      id: "9251",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5225.jpeg",
      name: "I-15 SB @ 700 S / SR-193 / MP 334.08, CFD"
    },
    {
      id: "9391",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5134.jpeg",
      name: "I-15 SB @ Glover Ln / MP 322.54, FRM"
    },
    {
      id: "11744",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16552.jpeg",
      name: "I-15 SB @ Hill Field Rd / 1150 N / SR-232 / MP 331.86, LTN"
    },
    {
      id: "9400",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5128.jpeg",
      name: "I-15 SB @ Main St / MP 314.31, NSL"
    },
    {
      id: "281",
      url: "http://www.udottraffic.utah.gov/1_devices/aux281.jpeg",
      name: "I-15 SB @ Park Ln / 1100 W / SR-225 / MP 324.44, FRM"
    },
    {
      id: "9390",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5132.jpeg",
      name: "I-15 SB @ Parrish Ln / 400 N / SR-105 / MP 319.51, CVL"
    },
    {
      id: "12057",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16865.jpeg",
      name: "Layton Pkwy @ 100 W, LTN"
    },
    {
      id: "10052",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14761.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 1200 N / MP 5.42, WBN"
    },
    {
      id: "10059",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14768.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 1275 N / MP 8.3, CVL"
    },
    {
      id: "10061",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14770.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 1550 S / MP 9.8, FRM"
    },
    {
      id: "10060",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14769.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 1900 N / MP 9.16, CVL"
    },
    {
      id: "10049",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14758.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 1900 S / MP 3.16, WXS"
    },
    {
      id: "10063",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14772.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 200 S / MP 11.4, FRM"
    },
    {
      id: "10054",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14763.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 2200 N / MP 6.62, WBN"
    },
    {
      id: "10048",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14757.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 2500 S / MP 2.5, WXS"
    },
    {
      id: "10046",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14755.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 300 N / MP 1.52, NSL"
    },
    {
      id: "10051",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14760.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 400 N / MP 4.7, WBN"
    },
    {
      id: "10058",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14767.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 800 N / MP 7.8, CVL"
    },
    {
      id: "10047",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14756.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 900 N / MP 2.14, NSL"
    },
    {
      id: "10055",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14764.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 900 W / MP 7, CVL"
    },
    {
      id: "10056",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14765.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ Parrish Ln / SR-105 / MP 7.45, CVL"
    },
    {
      id: "10064",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14773.jpeg",
      name: "Legacy Pkwy / SR-67 SB @ 250 N / US-89 / MP 12.1, FRM"
    },
    {
      id: "10050",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14759.jpeg",
      name: "Legacy Pkwy / SR-67 SB @ 500 S / MP 4, WXS"
    },
    {
      id: "10062",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14771.jpeg",
      name: "Legacy Pkwy / SR-67 SB @ Glover Ln / MP 10.5, FRM"
    },
    {
      id: "10053",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14762.jpeg",
      name: "Legacy Pkwy / SR-67 SB @ Pages Ln / MP 6, WBN"
    },
    {
      id: "10057",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14766.jpeg",
      name: "Legacy Pkwy / SR-67 SB @ Parrish Ln / SR-105 / MP 7.4, CVL"
    },
    {
      id: "9231",
      url: "http://www.udottraffic.utah.gov/1_devices/aux322.jpeg",
      name: "Main St / SR-126 @ Antelope Dr / SR-108, LTN"
    },
    {
      id: "9640",
      url: "http://www.udottraffic.utah.gov/1_devices/aux438.jpeg",
      name: "Main St / US-89 @ 2600 S / SR-93, BTF"
    },
    {
      id: "12067",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16875.jpeg",
      name: "Parrish Ln / 400 N / SR-105 @ Main St / SR-106, CVL"
    },
    {
      id: "10392",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15101.jpeg",
      name: "US-89 @ Antelope Dr, LTN"
    },
    {
      id: "286",
      url: "http://www.udottraffic.utah.gov/1_devices/aux286.jpeg",
      name: "US-89 @ Green Rd / MP 398.86, FRU"
    },
    {
      id: "284",
      url: "http://www.udottraffic.utah.gov/1_devices/aux284.jpeg",
      name: "US-89 @ Main St / SR-106 / SR-273 / MP 397.58, FRM"
    },
    {
      id: "10393",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15102.jpeg",
      name: "US-89 @ Oak Hills Dr / SR-109, LTN"
    },
    {
      id: "280",
      url: "http://www.udottraffic.utah.gov/1_devices/aux280.jpeg",
      name: "US-89 @ Park Ln / 1100 W / SR-225, FRM"
    },
    {
      id: "285",
      url: "http://www.udottraffic.utah.gov/1_devices/aux285.jpeg",
      name: "US-89 @ Pedestrian Bridge / MP 398.08, FRU"
    },
    {
      id: "10821",
      url: "http://www.udottraffic.utah.gov/1_devices/SR225mile0-all.gif",
      name: "US-89 Liveview NB @ Park Lane / SR-225 / MP 396.19, FRM"
    },
    {
      id: "283",
      url: "http://www.udottraffic.utah.gov/1_devices/aux283.jpeg",
      name: "US-89 NB @ Shepard Ln, FRM"
    },
    {
      id: "282",
      url: "http://www.udottraffic.utah.gov/1_devices/aux282.jpeg",
      name: "US-89 SB @ Shepard Ln, FRM"
    }
  ],
  Statewide: [
    {
      id: "12517",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17308.jpeg",
      name: "100 N / SR-55 @ Carbon Ave / SR-10, PRC"
    },
    {
      id: "10215",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14924.jpeg",
      name: "100 S @ 400 E / Flood St, STG"
    },
    {
      id: "11524",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16333.jpeg",
      name: "100 S @ 700 E, STG"
    },
    {
      id: "11470",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16279.jpeg",
      name: "1000 N / SR-112 @ 200 W, TLE"
    },
    {
      id: "11650",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16458.jpeg",
      name: "1000 W / SR-252 @ 1000 N, LGN"
    },
    {
      id: "11516",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16325.jpeg",
      name: "1000 W / SR-252 @ 200 N / SR-30, LGN"
    },
    {
      id: "11649",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16457.jpeg",
      name: "1000 W / SR-252 @ 600 S / Mendon Rd, LGN"
    },
    {
      id: "12263",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17062.jpeg",
      name: "10600 S / South Jordan Pkwy / SR-151 @ 400 W / Jordan Gateway, SJO"
    },
    {
      id: "11966",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16774.jpeg",
      name:
        "10600 S / South Jordan Pkwy / SR-151 @ River Front Pkwy / 700 W, SJO"
    },
    {
      id: "9878",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14587.jpeg",
      name: "1100 S / US-89/91 @ Main St / US-89 / SR-13, BRC"
    },
    {
      id: "11355",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16164.jpg",
      name: "1200 W / College Dr @ UVU Event Center Dr / 1000 S, ORM"
    },
    {
      id: "10027",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14736.jpeg",
      name: "1200 W @ 400 S, ORM"
    },
    {
      id: "10678",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15487.jpeg",
      name: "12300 S / SR-71 @ 150 E, DPR"
    },
    {
      id: "10575",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15384.jpeg",
      name: "12300 S / SR-71 @ 265 W, DPR"
    },
    {
      id: "304",
      url: "http://www.udottraffic.utah.gov/1_devices/aux304.jpeg",
      name: "12300 S / SR-71 @ 700 E / SR-71, DPR"
    },
    {
      id: "11967",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16775.jpeg",
      name: "12600 S / Herriman Blvd @ Main St / 5040 W, HRR"
    },
    {
      id: "11827",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16635.jpeg",
      name: "12600 S / SR-71 @ 2700 W / Silverwolf Blvd, RVT"
    },
    {
      id: "11512",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16321.jpeg",
      name: "12600 S @ 4150 W, RVT"
    },
    {
      id: "11026",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15835.jpeg",
      name: "12600 S @ Legacy Ranch Blvd / 4570 W, RVT"
    },
    {
      id: "289",
      url: "http://www.udottraffic.utah.gov/1_devices/aux289.jpeg",
      name: "1300 E / Leopard Ln @ 800 S, SLC"
    },
    {
      id: "10714",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15523.jpeg",
      name: "1300 E @ 400 S, SLC"
    },
    {
      id: "12433",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17224.jpeg",
      name: "1300 S / SR-120 @ Technology Dr / College Ave, RFD"
    },
    {
      id: "10715",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15524.jpeg",
      name: "1300 S @ 300 W, SLC"
    },
    {
      id: "11823",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16631.jpeg",
      name: "1400 N / SR-75 @ Mountain Springs Pkwy / 1100 W, SPV"
    },
    {
      id: "11648",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16456.jpeg",
      name: "1400 N @ 400 E, LGN"
    },
    {
      id: "11638",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16447.jpeg",
      name: "14600 S / Highland Dr / SR-140 @ Minuteman Dr, DPR"
    },
    {
      id: "11507",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16316.jpeg",
      name: "14600 S / SR-140 @ Pony Express Dr / SR-287, DPR"
    },
    {
      id: "11217",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16026.jpeg",
      name: "1500 E / US-40 @ 2500 S / MP 147.9, NPL"
    },
    {
      id: "11328",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-13-MP-11-all.gif",
      name: "1600 E / SR-13 Liveview SB @ Main St / SR-102 / MP 11.17, TRE"
    },
    {
      id: "9818",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14528.jpeg",
      name: "1600 N @ 400 E, ORM"
    },
    {
      id: "9816",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14526.jpeg",
      name: "1600 N @ 800 W, ORM"
    },
    {
      id: "9817",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14527.jpeg",
      name: "1600 N @ Main St, ORM"
    },
    {
      id: "9815",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14525.jpeg",
      name: "1600 N ORM / 600 S LDN @ 1200 W ORM / 400 W, LDN"
    },
    {
      id: "10275",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14984.jpeg",
      name: "1800 N / SR-37 @ 2000 W / Midland Dr / SR-108, CTN (Local)"
    },
    {
      id: "12207",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17015.jpeg",
      name: "1900 W / SR-126 @ 4800 S, ROY"
    },
    {
      id: "12208",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17016.jpeg",
      name: "1900 W / SR-126 @ 6000 S, ROY"
    },
    {
      id: "9399",
      url: "http://www.udottraffic.utah.gov/1_devices/aux339.jpeg",
      name: "1900 W / SR-126 @ Hinkley Dr / SR-79, ROY"
    },
    {
      id: "9201",
      url: "http://www.udottraffic.utah.gov/1_devices/aux328.jpeg",
      name: "1900 W / SR-126 @ Riverdale Rd / 5300 S / SR-26, ROY"
    },
    {
      id: "11776",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16584.jpeg",
      name: "200 E / US-40 @ 200 N / US-40 / SR-121 / MP 114.58, RSV"
    },
    {
      id: "10302",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15011.jpeg",
      name: "200 N / Freedom Blvd / SR-56 @ 1225 W / I-15 NB Ramps, CDC"
    },
    {
      id: "10303",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15012.jpeg",
      name: "200 N / Freedom Blvd / SR-56 @ 1400 W / I-15 SB Ramps, CDC"
    },
    {
      id: "12068",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16876.jpeg",
      name: "200 N / SR-273 @ Main St / SR-273, KAY"
    },
    {
      id: "12455",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17246.jpeg",
      name: "200 N / SR-56 @ Cove Dr, CDC"
    },
    {
      id: "11902",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16710.jpeg",
      name: "200 N / US-40 @ 1500 E / MP 115.42, BAL"
    },
    {
      id: "12127",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16935.jpeg",
      name: "200 N / US-40 @ 5750 E / Whiterocks Hwy / MP 119.66, FTD"
    },
    {
      id: "11777",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16585.jpeg",
      name: "200 N / US-40 @ 7500 E / MP 121.41, FTD"
    },
    {
      id: "10716",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15525.jpeg",
      name: "200 S @ Main St, SLC"
    },
    {
      id: "9422",
      url: "http://www.udottraffic.utah.gov/1_devices/aux341.jpeg",
      name: "200 S @ West Temple St, SLC"
    },
    {
      id: "11673",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16481.jpeg",
      name: "200 W / US-91 @ Main St / SR-142, RMD"
    },
    {
      id: "12318",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17117.jpeg",
      name: "2000 W / Midland Dr / SR-108 @ 300 N / SR-107, WPT"
    },
    {
      id: "11359",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16168.jpeg",
      name: "205 S / SR-193 @ 2000 W / SR-108, SYR"
    },
    {
      id: "12195",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17003.jpeg",
      name: "205 S / SR-193 @ Center St, CFD"
    },
    {
      id: "11247",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-85-MP2-all.gif",
      name: "2100 N / SR-194 Liveview WB @ Milepost 2.6, LHI"
    },
    {
      id: "10721",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15530.jpeg",
      name: "2100 N / SR-194 WB @ 2300 W, LHI"
    },
    {
      id: "12316",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17115.jpeg",
      name: "2100 N / SR-194 WB @ 3600 W, LHI"
    },
    {
      id: "80",
      url: "http://www.udottraffic.utah.gov/1_devices/aux80.jpeg",
      name: "2100 S / SR-201 @ 400 W / I-15 NB / MP 17.46, SLC"
    },
    {
      id: "78",
      url: "http://www.udottraffic.utah.gov/1_devices/aux78.jpeg",
      name: "2100 S / SR-201 @ 650 W / MP 17.1, SLC"
    },
    {
      id: "9561",
      url: "http://www.udottraffic.utah.gov/1_devices/aux343.jpeg",
      name: "2100 S @ 1300 E, SLC"
    },
    {
      id: "9535",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14302.jpeg",
      name: "2200 N @ Timpview Dr / 650 E, PVO"
    },
    {
      id: "9536",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14303.jpeg",
      name: "2230 N @ Canyon Rd, PVO"
    },
    {
      id: "9538",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14305.jpeg",
      name: "2230 N @ Freedom Blvd / 200 W, PVO"
    },
    {
      id: "9508",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14275.jpeg",
      name: "300 S / State St / US-89 @ 700 E, PVO"
    },
    {
      id: "12475",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17266.jpeg",
      name: "300 S / US-89 @ 100 E / US-89/US-89A, KNB"
    },
    {
      id: "11838",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16646.jpeg",
      name: "300 S / US-89 @ 400 E, PVO"
    },
    {
      id: "11962",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16770.jpeg",
      name: "300 W / John Stockton Dr / US-89 @ 600 N / SR-268, SLC"
    },
    {
      id: "137",
      url: "http://www.udottraffic.utah.gov/1_devices/aux137.jpeg",
      name: "300 W / John Stockton Dr / US-89 @ South Temple St, SLC"
    },
    {
      id: "11536",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16345.jpeg",
      name: "3050 E @ 850 N, STG"
    },
    {
      id: "11911",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16719.jpeg",
      name: "3050 E @ Deseret Dr / 450 N, STG"
    },
    {
      id: "12327",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17126.jpeg",
      name: "3300 S / SR-171 @ 1300 E, MCK"
    },
    {
      id: "9646",
      url: "http://www.udottraffic.utah.gov/1_devices/aux347.jpeg",
      name: "3300 S / SR-171 @ Highland Dr, SL"
    },
    {
      id: "190",
      url: "http://www.udottraffic.utah.gov/1_devices/aux190.jpeg",
      name: "3300 S / SR-171 @ West Temple St, SSL"
    },
    {
      id: "10198",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14907.jpeg",
      name: "3500 S / SR-171 @ 2700 W / Constitution Blvd, WVC"
    },
    {
      id: "10197",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14906.jpeg",
      name: "3500 S / SR-171 @ 3200 W, WVC"
    },
    {
      id: "177",
      url: "http://www.udottraffic.utah.gov/1_devices/aux177.jpeg",
      name: "3500 S / SR-171 @ Decker Lake Dr / 2200 W, WVC"
    },
    {
      id: "9540",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14307.jpeg",
      name: "3700 N @ 300 W, PVO"
    },
    {
      id: "191",
      url: "http://www.udottraffic.utah.gov/1_devices/aux191.jpeg",
      name: "3900 S @ 210 W / Howick St, SSL"
    },
    {
      id: "11947",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16755.jpeg",
      name: "3900 S @ 2300 E, HDY"
    },
    {
      id: "11946",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16754.jpeg",
      name: "3900 S @ 500 W, SSL"
    },
    {
      id: "12059",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16867.jpeg",
      name: "400 N / SR-106 @ Main St, BTF"
    },
    {
      id: "12272",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17071.jpeg",
      name: "400 N / SR-147 @ Spanish Fork Pkwy / 2550 E, SPF"
    },
    {
      id: "9822",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14532.jpeg",
      name: "400 N @ 1200 W, ORM"
    },
    {
      id: "12511",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17302.jpeg",
      name: "400 N @ Orem Blvd, ORM"
    },
    {
      id: "12257",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17056.jpeg",
      name: "400 S / SR-77 @ 2200 W, SPV"
    },
    {
      id: "11464",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16273.jpeg",
      name: "400 S / SR-77 @ 950 W, SPV"
    },
    {
      id: "9560",
      url: "http://www.udottraffic.utah.gov/1_devices/aux314.jpeg",
      name: "400 S / University Blvd / SR-186 @ 700 E / SR-71, SLC"
    },
    {
      id: "9423",
      url: "http://www.udottraffic.utah.gov/1_devices/aux342.jpeg",
      name: "400 S / US-89 @ 300 W / John Stockton Dr / US-89, SLC"
    },
    {
      id: "11517",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-23MP24.gif",
      name:
        "400 W / SR-23 Liveview SB @ Main St / 10200 N / SR-142 / MP 24.32, TNT"
    },
    {
      id: "12060",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16868.jpeg",
      name: "4000 S / SR-37 @ 3500 W, WHV"
    },
    {
      id: "12009",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16817.jpeg",
      name: "4000 S / SR-37 @ 4700 W / SR-134, WHV"
    },
    {
      id: "12071",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16879.jpeg",
      name: "4000 S / SR-37 @ Midland Dr / SR-108, ROY"
    },
    {
      id: "12190",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16998.jpeg",
      name: "4100 S @ 3200 W, WVC"
    },
    {
      id: "9715",
      url: "http://www.udottraffic.utah.gov/1_devices/aux349.jpeg",
      name: "4100 S @ 4800 W, WVC (Local)"
    },
    {
      id: "9645",
      url: "http://www.udottraffic.utah.gov/1_devices/aux346.jpeg",
      name: "4500 S / SR-266 @ Highland Dr, HDY"
    },
    {
      id: "9644",
      url: "http://www.udottraffic.utah.gov/1_devices/aux345.jpeg",
      name: "4700 S @ 2700 W, TAY"
    },
    {
      id: "9542",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14309.jpeg",
      name: "4800 N @ 300 W / Riverbottom Rd, PVO"
    },
    {
      id: "11778",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16586.jpeg",
      name: "500 N / SR-121 @ 2000 W / Aggie Blvd / MP 38.32, MAE"
    },
    {
      id: "12219",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17027.jpeg",
      name: "500 N @ 200 E, PVO"
    },
    {
      id: "138",
      url: "http://www.udottraffic.utah.gov/1_devices/aux138.jpeg",
      name: "500 S / Cesar E Chavez Blvd / SR-269 @ Main St, SLC"
    },
    {
      id: "140",
      url: "http://www.udottraffic.utah.gov/1_devices/aux140.jpeg",
      name: "500 S / University Blvd / SR-186 @ 1300 E, SLC"
    },
    {
      id: "9207",
      url: "http://www.udottraffic.utah.gov/1_devices/aux327.jpeg",
      name: "500 S / University Blvd / SR-186 @ 1580 E / Guardsman Way, SLC"
    },
    {
      id: "9777",
      url: "http://www.udottraffic.utah.gov/1_devices/Aux14487.jpeg",
      name: "500 S @ Main St, BTF"
    },
    {
      id: "9526",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14293.jpeg",
      name: "500 W / State St / US-89 @ Cougar Blvd / Columbia Ln / 1230 N, PVO"
    },
    {
      id: "9638",
      url: "http://www.udottraffic.utah.gov/1_devices/aux436.jpeg",
      name: "500 W / US-89 @ 400 N / SR-106, BTF"
    },
    {
      id: "9520",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14287.jpeg",
      name: "500 W / US-89 @ 500 N, PVO"
    },
    {
      id: "9639",
      url: "http://www.udottraffic.utah.gov/1_devices/aux437.jpeg",
      name: "500 W / US-89 @ 500 S / SR-68, BTF"
    },
    {
      id: "9525",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14292.jpeg",
      name: "500 W / US-89 @ 800 N, PVO"
    },
    {
      id: "9550",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14317.jpeg",
      name: "500 W / US-89 @ Center St / SR-114, PVO"
    },
    {
      id: "9676",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14404.jpeg",
      name: "500 W @ 920 S, PVO"
    },
    {
      id: "12027",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16835.jpeg",
      name: "5300 S / SR-173 @ 320 W / Commerce Dr, MUR"
    },
    {
      id: "10889",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15698.jpeg",
      name: "5400 S / SR-173 @ 2200 W, TAY"
    },
    {
      id: "10890",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15699.jpeg",
      name: "5400 S / SR-173 @ 2700 W, TAY"
    },
    {
      id: "10891",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15700.jpeg",
      name: "5400 S / SR-173 @ 3200 W, TAY"
    },
    {
      id: "10892",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15701.jpeg",
      name: "5400 S / SR-173 @ 3600 W / Whitewood Dr, TAY"
    },
    {
      id: "12395",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17194.jpeg",
      name: "5400 S / SR-173 @ 3700 W, TAY"
    },
    {
      id: "12394",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17193.jpeg",
      name: "5400 S / SR-173 @ 3800 W, TAY"
    },
    {
      id: "11068",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15877.jpeg",
      name: "5400 S / SR-173 @ 4015 W, TAY"
    },
    {
      id: "11511",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16320.jpeg",
      name: "5400 S / SR-173 @ 6055 W / Upper Ridge Rd / USANA, WVC"
    },
    {
      id: "11613",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16422.jpeg",
      name: "5400 S / SR-173 @ 700 W / Murray Blvd, MUR"
    },
    {
      id: "11067",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15876.jpeg",
      name: "5415 S / 5400 S / SR-173 @ 4420 W, KRN"
    },
    {
      id: "192",
      url: "http://www.udottraffic.utah.gov/1_devices/aux192.jpeg",
      name: "5415 S / 5400 S / SR-173 @ 4800 W / Charlotte Ave, KRN"
    },
    {
      id: "10612",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15421.jpeg",
      name: "5600 W / SR-172 @ 2700 S / Lake Park Blvd, WVC"
    },
    {
      id: "288",
      url: "http://www.udottraffic.utah.gov/1_devices/aux288.jpeg",
      name: "5600 W / SR-172 @ 3500 S / SR-171, WVC"
    },
    {
      id: "12055",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16863.jpeg",
      name: "5600 W / SR-172 @ 4100 S, WVC"
    },
    {
      id: "11510",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16319.jpeg",
      name: "5600 W / SR-172 @ 5400 S / SR-173, SL"
    },
    {
      id: "12231",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17030.jpeg",
      name: "5600 W @ 8200 S, WJD"
    },
    {
      id: "11950",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16758.jpeg",
      name: "6200 S / SR-190 @ 3000 E, HDY"
    },
    {
      id: "9897",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14606.jpeg",
      name: "6200 S / Wasatch Blvd / SR-190 @ Wasatch Blvd / Millrock Dr, CWH"
    },
    {
      id: "10553",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15362.jpeg",
      name: "6200 S @ Jordan Canal Rd / Margray Dr, TAY"
    },
    {
      id: "9776",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14486.jpeg",
      name: "700 E / SR-71 @ 10600 S, SND"
    },
    {
      id: "10674",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15483.jpeg",
      name: "700 E / SR-71 @ 11000 S, SND"
    },
    {
      id: "10873",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15682.jpeg",
      name: "700 E / SR-71 @ 11400 S, SND"
    },
    {
      id: "11515",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16324.jpeg",
      name: "700 E / SR-71 @ 1300 S, SLC"
    },
    {
      id: "11522",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16331.jpeg",
      name: "700 E / SR-71 @ 1700 S, SLC"
    },
    {
      id: "9558",
      url: "http://www.udottraffic.utah.gov/1_devices/aux313.jpeg",
      name: "700 E / SR-71 @ 3300 S / SR-171, SSL"
    },
    {
      id: "11856",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16664.jpeg",
      name: "700 E / SR-71 @ 3900 S, MCK"
    },
    {
      id: "9631",
      url: "http://www.udottraffic.utah.gov/1_devices/aux311.jpeg",
      name: "700 E / SR-71 @ 4500 S / SR-266, MUR"
    },
    {
      id: "139",
      url: "http://www.udottraffic.utah.gov/1_devices/aux139.jpeg",
      name: "700 E / SR-71 @ 900 S, SLC"
    },
    {
      id: "10535",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15344.jpeg",
      name: "700 E / SR-71 @ 9000 S / SR-209, SND"
    },
    {
      id: "9775",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14485.jpeg",
      name: "700 E / SR-71 @ 9800 S / Sego Lily Dr, SND"
    },
    {
      id: "11360",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16169.jpeg",
      name: "700 S / SR-193 @ Industrial Pkwy, CFD"
    },
    {
      id: "10218",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14927.jpeg",
      name: "700 S @ 400 E / Flood St, STG"
    },
    {
      id: "186",
      url: "http://www.udottraffic.utah.gov/1_devices/aux186.jpeg",
      name: "700 S @ Main St, SLC"
    },
    {
      id: "12476",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17267.jpeg",
      name: "7200 S / Jordan River Blvd / SR-48 @ 700 W, MDV"
    },
    {
      id: "12230",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17029.jpeg",
      name: "7800 S @ 5600 W, WJD"
    },
    {
      id: "11513",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16322.jpeg",
      name: "7800 S @ Airport Rd / 4450 W, WJD"
    },
    {
      id: "10029",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14738.jpeg",
      name: "800 E @ 1000 S, ORM"
    },
    {
      id: "11593",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16402.jpeg",
      name: "800 E @ 1200 N, ORM"
    },
    {
      id: "12512",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17303.jpeg",
      name: "800 E @ 1200 S, ORM"
    },
    {
      id: "9830",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14540.jpeg",
      name: "800 E @ 800 S, ORM"
    },
    {
      id: "10566",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15375.jpeg",
      name: "800 N / SR-52 @ 1200 W, ORM"
    },
    {
      id: "10026",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14735.jpeg",
      name: "800 N / SR-52 @ 400 E, ORM"
    },
    {
      id: "9274",
      url: "http://www.udottraffic.utah.gov/1_devices/aux403.jpeg",
      name: "800 N / SR-52 @ 800 E, ORM"
    },
    {
      id: "9821",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14531.jpeg",
      name: "800 N / SR-52 @ 800 W, ORM"
    },
    {
      id: "11390",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16199.jpeg",
      name: "800 N / SR-52 @ Palisade Dr / 1300 E, ORM"
    },
    {
      id: "10028",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14737.jpeg",
      name: "800 S @ 400 W, ORM"
    },
    {
      id: "12514",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17305.jpeg",
      name: "800 S @ Main St, ORM"
    },
    {
      id: "12513",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17304.jpeg",
      name: "800 S @ Orem Blvd, ORM"
    },
    {
      id: "10497",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15306.jpeg",
      name: "820 N @ Independence Ave, PVO"
    },
    {
      id: "12010",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16818.jpeg",
      name: "8400 W / Bacchus Hwy / SR-111 @ 2700 S / Main St, MAG"
    },
    {
      id: "12262",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17061.jpeg",
      name: "900 E / SR-71 @ 5600 S, MUR"
    },
    {
      id: "11775",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16583.jpeg",
      name: "900 E / SR-71 @ Fort Union Blvd / 7100 S, MDV"
    },
    {
      id: "9245",
      url: "http://www.udottraffic.utah.gov/1_devices/aux332.jpeg",
      name: "900 E / SR-71 @ Van Winkle Expwy / SR-152, MUR"
    },
    {
      id: "9621",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14383.jpeg",
      name: "900 E @ 700 N, PVO"
    },
    {
      id: "9532",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14299.jpeg",
      name: "900 E @ Birch Ln / Heritage Dr / 1200 N, PVO"
    },
    {
      id: "9509",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14276.jpeg",
      name: "900 E @ Center St, PVO"
    },
    {
      id: "9534",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14301.jpeg",
      name: "900 E @ Temple View Dr, PVO"
    },
    {
      id: "9533",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14300.jpeg",
      name: "900 E @ University Pkwy, PVO"
    },
    {
      id: "12450",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17241.jpeg",
      name: "9000 S / SR-209 @ 150 E / Trax, SND"
    },
    {
      id: "12232",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17031.jpeg",
      name: "9000 S / SR-209 @ 4000 W, WJD"
    },
    {
      id: "9642",
      url: "http://www.udottraffic.utah.gov/1_devices/aux303.jpeg",
      name: "9000 S / SR-209 @ 700 W, SND"
    },
    {
      id: "11299",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16108.jpeg",
      name:
        "9400 S / Little Cottonwood Rd / SR-209 @ 2300 E / Quail Hollow Dr, SND"
    },
    {
      id: "9347",
      url: "http://www.udottraffic.utah.gov/1_devices/aux336.jpeg",
      name: "9400 S / SR-209 @ 1300 E, SND"
    },
    {
      id: "9904",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14613.jpeg",
      name: "9400 S / SR-209 @ 2000 E / Highland Dr, SND"
    },
    {
      id: "10876",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15685.jpeg",
      name: "Angel St @ Layton Pkwy, LTN"
    },
    {
      id: "12070",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16878.jpeg",
      name: "Antelope Dr / 1700 S / SR-108 @ 2000 W / SR-108, SYR"
    },
    {
      id: "12069",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16877.jpeg",
      name: "Antelope Dr / 1700 S / SR-108 @ Main St, CFD"
    },
    {
      id: "11468",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16277.jpeg",
      name: "Bacchus Hwy / SR-111 @ 8200 S, WJD"
    },
    {
      id: "11253",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-111mile0-all.gif",
      name: "Bacchus Hwy / SR-111 Liveview NB @ New Bingham Hwy / MP 0, WJD"
    },
    {
      id: "10755",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR111%20@%20Bacchus.gif",
      name: "Bacchus Hwy / SR-111 RWIS SB @ 6400 S / MP 4.15, WVC"
    },
    {
      id: "11951",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16759.jpeg",
      name: "Bangerter Hwy / 200 E / SR-154 @ 13800 S, DPR"
    },
    {
      id: "9770",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14480.jpeg",
      name: "Bangerter Hwy / SR-154 @ 10400 S / South Jordan Pkwy / SR-151, SJO"
    },
    {
      id: "12447",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17238.jpeg",
      name: "Bangerter Hwy / SR-154 @ 11200 S, SJO"
    },
    {
      id: "9769",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14479.jpeg",
      name: "Bangerter Hwy / SR-154 @ 11400 S, SJO"
    },
    {
      id: "12405",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17204.jpeg",
      name: "Bangerter Hwy / SR-154 @ 11500 S, SJO"
    },
    {
      id: "306",
      url: "http://www.udottraffic.utah.gov/1_devices/aux306.jpeg",
      name: "Bangerter Hwy / SR-154 @ 12600 S / SR-71, RVT"
    },
    {
      id: "9768",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14478.jpeg",
      name: "Bangerter Hwy / SR-154 @ 13400 S, RVT"
    },
    {
      id: "11881",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16689.jpeg",
      name: "Bangerter Hwy / SR-154 @ 200 W / MP 0.78, DPR"
    },
    {
      id: "267",
      url: "http://www.udottraffic.utah.gov/1_devices/aux267.jpeg",
      name: "Bangerter Hwy / SR-154 @ 2400 S / Lake Park Blvd, WVC"
    },
    {
      id: "268",
      url: "http://www.udottraffic.utah.gov/1_devices/aux268.jpeg",
      name: "Bangerter Hwy / SR-154 @ 2700 S / Parkway Blvd, WVC"
    },
    {
      id: "9767",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14477.jpeg",
      name: "Bangerter Hwy / SR-154 @ 2700 W, BLF"
    },
    {
      id: "11880",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16688.jpeg",
      name: "Bangerter Hwy / SR-154 @ 300 W / MP 1.0, DPR"
    },
    {
      id: "269",
      url: "http://www.udottraffic.utah.gov/1_devices/aux269.jpeg",
      name: "Bangerter Hwy / SR-154 @ 3100 S, WVC"
    },
    {
      id: "266",
      url: "http://www.udottraffic.utah.gov/1_devices/aux266.jpeg",
      name: "Bangerter Hwy / SR-154 @ 3500 S / SR-171, WVC"
    },
    {
      id: "265",
      url: "http://www.udottraffic.utah.gov/1_devices/aux265.jpeg",
      name: "Bangerter Hwy / SR-154 @ 4100 S, WVC"
    },
    {
      id: "264",
      url: "http://www.udottraffic.utah.gov/1_devices/aux264.jpeg",
      name: "Bangerter Hwy / SR-154 @ 4700 S, TAY"
    },
    {
      id: "11879",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16687.jpeg",
      name: "Bangerter Hwy / SR-154 @ 500 W / MP 1.25, DPR"
    },
    {
      id: "263",
      url: "http://www.udottraffic.utah.gov/1_devices/aux263.jpeg",
      name: "Bangerter Hwy / SR-154 @ 5200 S, TAY"
    },
    {
      id: "12387",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17186.jpeg",
      name: "Bangerter Hwy / SR-154 @ 5300 S, TAY"
    },
    {
      id: "12386",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17185.jpeg",
      name: "Bangerter Hwy / SR-154 @ 5600 S, TAY"
    },
    {
      id: "12396",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17195.jpeg",
      name: "Bangerter Hwy / SR-154 @ 5700 S, TAY"
    },
    {
      id: "11878",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16686.jpeg",
      name: "Bangerter Hwy / SR-154 @ 600 W / MP 1.45, DPR"
    },
    {
      id: "193",
      url: "http://www.udottraffic.utah.gov/1_devices/aux193.jpg",
      name: "Bangerter Hwy / SR-154 @ 6200 S, WJD"
    },
    {
      id: "12397",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17196.jpeg",
      name: "Bangerter Hwy / SR-154 @ 6900 S, WJD"
    },
    {
      id: "11877",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16685.jpeg",
      name: "Bangerter Hwy / SR-154 @ 700 W / MP 1.6, DPR"
    },
    {
      id: "12399",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17198.jpeg",
      name: "Bangerter Hwy / SR-154 @ 7100 S, WJD"
    },
    {
      id: "261",
      url: "http://www.udottraffic.utah.gov/1_devices/aux261.jpeg",
      name: "Bangerter Hwy / SR-154 @ 7800 S / SR-48, WJD"
    },
    {
      id: "11876",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16684.jpeg",
      name: "Bangerter Hwy / SR-154 @ 800 W / MP 1.86, DPR"
    },
    {
      id: "12400",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17199.jpeg",
      name: "Bangerter Hwy / SR-154 @ 8900 S, WJD"
    },
    {
      id: "12402",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17201.jpeg",
      name: "Bangerter Hwy / SR-154 @ 9150 S, WJD"
    },
    {
      id: "9771",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14481.jpg",
      name: "Bangerter Hwy / SR-154 @ 9800 S, SJO"
    },
    {
      id: "10719",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15528.jpeg",
      name: "Bangerter Hwy / SR-154 @ California Ave, SLC"
    },
    {
      id: "46",
      url: "http://www.udottraffic.utah.gov/1_devices/aux46.jpeg",
      name: "Bangerter Hwy / SR-154 @ SLC Airport / N of I-80  / MP 24.1, SLC"
    },
    {
      id: "9766",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14476.jpeg",
      name: "Bangerter Hwy / SR-154 EB @ Redwood Rd / SR-68, BLF"
    },
    {
      id: "262",
      url: "http://www.udottraffic.utah.gov/1_devices/aux262.jpeg",
      name: "Bangerter Hwy / SR-154 NB @ 7000 S, WJD"
    },
    {
      id: "12401",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17200.jpeg",
      name: "Bangerter Hwy / SR-154 NB @ 9000 S / SR-209, WJD"
    },
    {
      id: "12398",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17197.jpeg",
      name: "Bangerter Hwy / SR-154 SB @ 7000 S / Jordan Landing Blvd, WJD"
    },
    {
      id: "260",
      url: "http://www.udottraffic.utah.gov/1_devices/aux260.jpeg",
      name: "Bangerter Hwy / SR-154 SB @ 9000 S / SR-209, WJD"
    },
    {
      id: "11603",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16412.jpeg",
      name: "Bangerter Hwy / SR-154 WB @ Redwood Rd / SR-68, RVT"
    },
    {
      id: "180",
      url: "http://www.udottraffic.utah.gov/1_devices/aux180.jpeg",
      name: "Beck St / US-89 @ Victory Rd / SR-186, SLC"
    },
    {
      id: "11405",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16214.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ Butler / MP 10, SL"
    },
    {
      id: "11406",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16215.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ Cardiff Fork / MP 10.74, SL"
    },
    {
      id: "11403",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16212.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ Dogwood / MP 4.1, SL"
    },
    {
      id: "11404",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16213.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ S-Curves / MP 6.38, SL"
    },
    {
      id: "11407",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16216.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ Silver Fork / MP 12.54, SL"
    },
    {
      id: "11386",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-101-MP-13.gif",
      name:
        "Blacksmith Fork Canyon Rd / SR-101 Liveview @ Left Hand Fork Rd / MP 13.1, CA"
    },
    {
      id: "10281",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14990.jpeg",
      name:
        "Bluff St / Riverside Dr / SR-18 @ Sunland Dr / Convention Center Dr, STG"
    },
    {
      id: "10210",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14919.jpeg",
      name: "Bluff St / SR-18 @ 500 N, STG"
    },
    {
      id: "10278",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14987.jpeg",
      name: "Bluff St / SR-18 @ 700 S, STG"
    },
    {
      id: "10280",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14989.jpeg",
      name: "Bluff St / SR-18 @ Main St / Black Ridge Dr / Hilton Dr, STG"
    },
    {
      id: "10212",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14921.jpeg",
      name: "Bluff St / SR-18 @ Snow Canyon Pkwy / Red Hills Pkwy, STG"
    },
    {
      id: "10206",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14915.jpeg",
      name: "Bluff St / SR-18 @ St George Blvd / SR-34, STG"
    },
    {
      id: "10211",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14920.jpeg",
      name: "Bluff St / SR-18 @ Sunset Blvd / SR-8, STG"
    },
    {
      id: "10380",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15089.jpeg",
      name: "Brigham Rd @ Desert Hills Dr, STG"
    },
    {
      id: "11530",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16339.jpeg",
      name: "Brigham Rd @ Hidden Valley Dr, STG"
    },
    {
      id: "12056",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16864.jpeg",
      name: "Canyon Rd / SR-198 @ 1100 E, SPF"
    },
    {
      id: "12434",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17225.jpeg",
      name: "Canyon Rd / SR-198 @ 1400 E, SPF"
    },
    {
      id: "9778",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14488.jpeg",
      name: "Canyon Rd @ Foothill Dr / 4525 N, PVO"
    },
    {
      id: "10567",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15376.jpeg",
      name: "Center St / SR-114 @ 1600 W, PVO"
    },
    {
      id: "9519",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14286.jpeg",
      name: "Center St / SR-114 @ 900 W, PVO"
    },
    {
      id: "11475",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-61-mp-4.gif",
      name: "Center St / SR-61 Liveview EB @ 800 W / SR-200, LEW"
    },
    {
      id: "11952",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16760.jpeg",
      name: "Center St @ 1150 E, SPF"
    },
    {
      id: "9312",
      url: "http://www.udottraffic.utah.gov/1_devices/aux413.jpeg",
      name: "Center St @ 1200 W, ORM"
    },
    {
      id: "12510",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17301.jpeg",
      name: "Center St @ 220 W / Garden Park Dr, ORM"
    },
    {
      id: "9513",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14280.jpeg",
      name: "Center St @ 300 W, PVO"
    },
    {
      id: "9827",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14537.jpeg",
      name: "Center St @ 400 E / Tiger Way, ORM"
    },
    {
      id: "9310",
      url: "http://www.udottraffic.utah.gov/1_devices/aux411.jpeg",
      name: "Center St @ 400 W, ORM"
    },
    {
      id: "9317",
      url: "http://www.udottraffic.utah.gov/1_devices/aux418.jpeg",
      name: "Center St @ 800 E, ORM"
    },
    {
      id: "9825",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14535.jpeg",
      name: "Center St @ 800 W, ORM"
    },
    {
      id: "9826",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14536.jpeg",
      name: "Center St @ Orem Blvd, ORM"
    },
    {
      id: "11189",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15998.jpeg",
      name: "Charleston Rd / 3600 W / SR-113 @ US-189, CHR"
    },
    {
      id: "10109",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14818.jpeg",
      name: "Columbia Ln @ 1700 N / 950 W, PVO"
    },
    {
      id: "11633",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16442.jpeg",
      name: "Columbus St / SR-186 @ 500 N, SLC"
    },
    {
      id: "175",
      url: "http://www.udottraffic.utah.gov/1_devices/aux175.jpeg",
      name: "Constitution Blvd / 2700 W @ 3100 S, WVC"
    },
    {
      id: "11028",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15837.jpeg",
      name: "Cory B Wride Memorial Hwy / SR-73 @ Foothill Blvd / 800 W, SSP"
    },
    {
      id: "11711",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16519.jpeg",
      name: "Cory B Wride Memorial Hwy / SR-73 @ Mt Airey Dr / MP 33.86, EAG"
    },
    {
      id: "11029",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15838.jpeg",
      name: "Cory B Wride Memorial Hwy / SR-73 @ Ranches Pkwy, EAG"
    },
    {
      id: "9524",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14291.jpeg",
      name: "Cougar Blvd / 1230 N @ Freedom Blvd / 200 W, PVO"
    },
    {
      id: "11809",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16617.jpeg",
      name: "Deer Valley Dr / SR-224 @ Bonanza Dr, PKC"
    },
    {
      id: "11100",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-224-MP-4-all.gif",
      name: "Deer Valley Dr / SR-224 Liveview NB @ Swede Alley / MP 4.73, PKC"
    },
    {
      id: "11720",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16528.jpeg",
      name: "Dixie Dr @ 1600 S, STG"
    },
    {
      id: "11526",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16335.jpeg",
      name: "Dixie Dr @ 600 W, STG"
    },
    {
      id: "11528",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16337.jpeg",
      name: "Dixie Dr @ Valley View Dr, STG"
    },
    {
      id: "11761",
      url: "http://www.udottraffic.utah.gov/1_devices/SR65%20mp22.gif",
      name:
        "East Canyon Rd / SR-65 Liveview NB @ MN/SU County Line / MP 21.76, MN"
    },
    {
      id: "11387",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16196.jpeg",
      name: "Fairfield Rd / 850 E @ Cherry Ln / 1350 N, LTN"
    },
    {
      id: "11867",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16675.jpeg",
      name: "Fairfield Rd / 850 E @ Wasatch Dr / 425 N, LTN"
    },
    {
      id: "187",
      url: "http://www.udottraffic.utah.gov/1_devices/aux187.jpeg",
      name:
        "Foothill Dr / Honorary Veterans Blvd / SR-186 @ Mario Capecchi Dr, SLC"
    },
    {
      id: "9246",
      url: "http://www.udottraffic.utah.gov/1_devices/aux333.jpeg",
      name: "Foothill Dr / Honorary Veterans Blvd / SR-186 @ Sunnyside Ave, SLC"
    },
    {
      id: "188",
      url: "http://www.udottraffic.utah.gov/1_devices/aux188.jpeg",
      name: "Foothill Dr / Honorary Veterans Blvd / SR-186 @ Wakara Way, SLC"
    },
    {
      id: "9265",
      url: "http://www.udottraffic.utah.gov/1_devices/aux334.jpeg",
      name: "Foothill Dr / SR-186 @ 2300 E, SLC"
    },
    {
      id: "65",
      url: "http://www.udottraffic.utah.gov/1_devices/aux65.jpeg",
      name: "Foothill Dr / SR-186 @ Parley`s Way, SLC"
    },
    {
      id: "12024",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16832.jpeg",
      name: "Foremaster Dr @ Five Sisters Dr, STG"
    },
    {
      id: "12021",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16829.jpeg",
      name: "Fort Union Blvd / 6910 S @ 1300 E, CWH"
    },
    {
      id: "12022",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16830.jpeg",
      name: "Fort Union Blvd / 7000 S @ 2300 E, CWH"
    },
    {
      id: "9514",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14281.jpeg",
      name: "Freedom Blvd / 200 W @ 100 N, PVO"
    },
    {
      id: "9512",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14279.jpeg",
      name: "Freedom Blvd / 200 W @ 100 S, PVO"
    },
    {
      id: "9523",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14290.jpeg",
      name: "Freedom Blvd / 200 W @ 1100 N, PVO"
    },
    {
      id: "9511",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14278.jpeg",
      name: "Freedom Blvd / 200 W @ 300 S / US-89, PVO"
    },
    {
      id: "9521",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14288.jpeg",
      name: "Freedom Blvd / 200 W @ 500 N, PVO"
    },
    {
      id: "9522",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14289.jpeg",
      name: "Freedom Blvd / 200 W @ 800 N, PVO"
    },
    {
      id: "9503",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14270.jpeg",
      name: "Freedom Blvd / 200 W @ 920 S, PVO"
    },
    {
      id: "9831",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14541.jpeg",
      name: "Geneva Rd / SR-114 @ 1000 S / Plant Ln, ORM"
    },
    {
      id: "10316",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15025.jpeg",
      name: "Geneva Rd / SR-114 @ 1390 N, PVO"
    },
    {
      id: "10560",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15369.jpeg",
      name: "Geneva Rd / SR-114 @ 1600 N ORM / 600 S LDN / SR-241, LDN"
    },
    {
      id: "9828",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14538.jpeg",
      name: "Geneva Rd / SR-114 @ 400 S, ORM"
    },
    {
      id: "10565",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15374.jpeg",
      name: "Geneva Rd / SR-114 @ 700 N / SR-129, LDN"
    },
    {
      id: "9820",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14530.jpg",
      name: "Geneva Rd / SR-114 @ 800 N / SR-52, ORM"
    },
    {
      id: "11882",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16690.jpeg",
      name: "Geneva Rd / SR-114 @ 800 S / Springwater Dr, ORM"
    },
    {
      id: "9714",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14284.jpeg",
      name: "Geneva Rd / SR-114 @ 820 N, PVO"
    },
    {
      id: "9515",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14282.jpeg",
      name: "Geneva Rd / SR-114 @ Center St / SR-114, PVO"
    },
    {
      id: "9824",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14534.jpeg",
      name: "Geneva Rd / SR-114 @ Center St, ORM"
    },
    {
      id: "10252",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14961.jpeg",
      name: "Geneva Rd / SR-114 @ University Pkwy / SR-265, ORM"
    },
    {
      id: "10679",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15488.jpeg",
      name: "Gentile St @ Flint St, LTN"
    },
    {
      id: "9267",
      url: "http://www.udottraffic.utah.gov/1_devices/aux9174.jpeg",
      name: "Grizzlies Blvd / 3100 S @ Decker Lake Dr, WVC"
    },
    {
      id: "9635",
      url: "http://www.udottraffic.utah.gov/1_devices/aux433.jpeg",
      name: "Harrison Blvd / 1200 E / SR-203 @ 24th St, OGD"
    },
    {
      id: "9634",
      url: "http://www.udottraffic.utah.gov/1_devices/aux432.jpeg",
      name: "Harrison Blvd / 1200 E / SR-203 @ 30th St / SR-79, OGD"
    },
    {
      id: "12076",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16884.jpeg",
      name: "Harrison Blvd / 1200 E / SR-203 @ 4800 S / Edgewood Dr, OGD"
    },
    {
      id: "12047",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16855.jpeg",
      name: "Harrison Blvd / SR-203 @ 12th St / Ogden Canyon Rd / SR-39, OGD"
    },
    {
      id: "9398",
      url: "http://www.udottraffic.utah.gov/1_devices/aux338.jpeg",
      name: "Harrison Blvd / Wildcat Way / SR-203 @ 36th St, OGD"
    },
    {
      id: "9200",
      url: "http://www.udottraffic.utah.gov/1_devices/aux326.jpeg",
      name:
        "Harrison Blvd / Wildcat Way / SR-203 @ 42nd St / Country Hills Dr, OGD"
    },
    {
      id: "11945",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16753.jpeg",
      name: "Highland Dr / 2000 E @ Bengal Blvd / Parkridge Dr, CWH"
    },
    {
      id: "9643",
      url: "http://www.udottraffic.utah.gov/1_devices/aux344.jpeg",
      name: "Highland Dr / 2000 E @ Fort Union Blvd / 7000 S, CWH"
    },
    {
      id: "11964",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16772.jpeg",
      name: "Highland Dr / Van Winkle Expwy / SR-152 @ 6200 S, HDY"
    },
    {
      id: "9647",
      url: "http://www.udottraffic.utah.gov/1_devices/aux348.jpeg",
      name: "Highland Dr @ 3900 S, SL"
    },
    {
      id: "9637",
      url: "http://www.udottraffic.utah.gov/1_devices/aux435.jpeg",
      name: "Hill Field Rd / SR-232 @ 2000 N / Antelope Dr, LTN"
    },
    {
      id: "9403",
      url: "http://www.udottraffic.utah.gov/1_devices/aux423.jpeg",
      name: "Hill Field Rd / SR-232 @ 3000 N / SR-193, LTN"
    },
    {
      id: "9125",
      url: "http://www.udottraffic.utah.gov/1_devices/aux315.jpeg",
      name: "Hill Field Rd / SR-232 @ Gordon Ave / 1000 N, LTN"
    },
    {
      id: "9405",
      url: "http://www.udottraffic.utah.gov/1_devices/aux425.jpeg",
      name: "Hill Field Rd / SR-232 @ Main St / SR-126, LTN"
    },
    {
      id: "11883",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16691.jpeg",
      name: "I-15 @ Main St / US-6 / MP 244.8, STQ"
    },
    {
      id: "11362",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16171.jpeg",
      name: "I-15 DDI NB @ St George Blvd / SR-34 / MP 8.41, STG"
    },
    {
      id: "11361",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16170.jpeg",
      name: "I-15 DDI SB @ St George Blvd / SR-34 / MP 8.41, STG"
    },
    {
      id: "11759",
      url: "http://www.udottraffic.utah.gov/1_devices/I-15_MP365.gif",
      name: "I-15 Liveview @ Promontory Rd / 900 N / SR-13 / MM 365.57, BRC"
    },
    {
      id: "10859",
      url: "http://www.udottraffic.utah.gov/1_devices/I-15_MP232.gif",
      name: "I-15 Liveview NB @ Mona / Exit 233 / SR-54 / MP 232.88, JU"
    },
    {
      id: "11072",
      url: "http://www.udottraffic.utah.gov/1_devices/I-15-MP-94-all.gif",
      name: "I-15 Liveview NB @ SR-20 / MP 94, RN"
    },
    {
      id: "11619",
      url:
        "http://www.udottraffic.utah.gov/1_devices/I-15_Summit_Exit_MP_70-all.gif",
      name: "I-15 Liveview NB @ Summit Exit / MP 70.02, RN"
    },
    {
      id: "10797",
      url: "http://www.udottraffic.utah.gov/1_devices/I-15_MP400.gif",
      name: "I-15 Liveview NB @ UT/ID State Line / MP 400.59, BE"
    },
    {
      id: "11103",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-240-MP-0-all.gif",
      name: "I-15 Liveview SB @ 6900 N / SR-240 / MP 372.83, HYV"
    },
    {
      id: "10771",
      url: "http://www.udottraffic.utah.gov/1_devices/I-15_MP37.gif",
      name: "I-15 Liveview SB @ Blackridge / Exit 36 / MP 36.77, WN"
    },
    {
      id: "10763",
      url: "http://www.udottraffic.utah.gov/1_devices/I-15_MP194.gif",
      name: "I-15 Liveview SB @ JU/MD Co Line / MP 194.55, JU"
    },
    {
      id: "10850",
      url: "http://www.udottraffic.utah.gov/1_devices/I-15_MP218.gif",
      name: "I-15 Liveview SB @ Milepost 218.8, JU"
    },
    {
      id: "10867",
      url: "http://www.udottraffic.utah.gov/1_devices/I-15_MP245.gif",
      name: "I-15 Liveview SB @ Santaquin / Exit 244 / US-6 / MP 245.06, STQ"
    },
    {
      id: "10895",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15704.jpeg",
      name: "I-15 NB @ 100 N / MP 274.15, LDN"
    },
    {
      id: "10144",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14853.jpeg",
      name: "I-15 NB @ 100 S / MP 8.41, STG"
    },
    {
      id: "9698",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14406.jpeg",
      name: "I-15 NB @ 10000 N / MP 377.93, TRE"
    },
    {
      id: "82",
      url: "http://www.udottraffic.utah.gov/1_devices/aux82.jpeg",
      name: "I-15 NB @ 10200 S / MP 294.2, SND"
    },
    {
      id: "11942",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16750.jpeg",
      name: "I-15 NB @ 10600 S / SR-151 / MP 293.65, SND"
    },
    {
      id: "11943",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16751.jpeg",
      name: "I-15 NB @ 10600 S / SR-151 / MP 293.65, SND (Tunnel)"
    },
    {
      id: "112",
      url: "http://www.udottraffic.utah.gov/1_devices/aux112.jpeg",
      name: "I-15 NB @ 1100 S / MP 306.53, SLC"
    },
    {
      id: "11440",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16249.jpeg",
      name: "I-15 NB @ 1100 S / US-91 / MP 362, BRC"
    },
    {
      id: "10694",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15503.jpeg",
      name: "I-15 NB @ 11500 S / MP 292.35, DPR"
    },
    {
      id: "10147",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14856.jpeg",
      name: "I-15 NB @ 1160 S / MP 6.77, STG"
    },
    {
      id: "9656",
      url: "http://www.udottraffic.utah.gov/1_devices/aux356.jpeg",
      name: "I-15 NB @ 11900 S / MP 291.98, DPR"
    },
    {
      id: "10306",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15015.jpeg",
      name: "I-15 NB @ 1200 N / MP 281.15, LHI"
    },
    {
      id: "11263",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16072.jpeg",
      name: "I-15 NB @ 1200 S / MP 355.15, WIL"
    },
    {
      id: "9653",
      url: "http://www.udottraffic.utah.gov/1_devices/aux353.jpeg",
      name: "I-15 NB @ 12300 S / SR-71 / MP 291.4, DPR"
    },
    {
      id: "10073",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14782.jpeg",
      name: "I-15 NB @ 12th St / 1200 S / SR-39 / MP 344.96, MSV"
    },
    {
      id: "9720",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14425.jpeg",
      name: "I-15 NB @ 1400 N / SR-75 / MP 261.83, SPV"
    },
    {
      id: "11721",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16529.jpeg",
      name: "I-15 NB @ 14000 S / MP 289.34, DPR"
    },
    {
      id: "11724",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16532.jpeg",
      name: "I-15 NB @ 14500 S / MP 288.54, DPR"
    },
    {
      id: "11035",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15844.jpeg",
      name: "I-15 NB @ 1460 N / MP 267.19, PVO"
    },
    {
      id: "10494",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15303.jpeg",
      name: "I-15 NB @ 1500 S / MP 316.23, WXS"
    },
    {
      id: "11727",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16535.jpeg",
      name: "I-15 NB @ 15200 S / MP 287.6, DPR"
    },
    {
      id: "11728",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16536.jpeg",
      name: "I-15 NB @ 15400 S / MP 287.23, DPR"
    },
    {
      id: "11051",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15860.jpeg",
      name: "I-15 NB @ 1600 S / MP 258.86, SPV"
    },
    {
      id: "11033",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15842.jpeg",
      name: "I-15 NB @ 1650 S / MP 268.37, ORM"
    },
    {
      id: "10158",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14867.jpeg",
      name: "I-15 NB @ 1680 E / MP 9.47, STG"
    },
    {
      id: "10077",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14786.jpeg",
      name: "I-15 NB @ 1700 S / River Canal / MP 344.5, WHV"
    },
    {
      id: "106",
      url: "http://www.udottraffic.utah.gov/1_devices/aux106.jpeg",
      name: "I-15 NB @ 1800 S / MP 305.6, SLC"
    },
    {
      id: "10426",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15135.jpeg",
      name: "I-15 NB @ 1800 S / MP 326.23, KAY"
    },
    {
      id: "10083",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14792.jpeg",
      name: "I-15 NB @ 1850 N / MP 282, LHI"
    },
    {
      id: "11032",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15841.jpeg",
      name: "I-15 NB @ 200 S / MP 273.67, LDN"
    },
    {
      id: "9875",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14584.jpeg",
      name: "I-15 NB @ 200 S / MP 356.35, WIL"
    },
    {
      id: "10882",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15691.jpeg",
      name: "I-15 NB @ 200 W / MP 277.71, AFK"
    },
    {
      id: "11034",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15843.jpeg",
      name: "I-15 NB @ 2000 S / MP 267.86, ORM"
    },
    {
      id: "10159",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14868.jpeg",
      name: "I-15 NB @ 2100 E / MP 9.97, STG"
    },
    {
      id: "10160",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14869.jpeg",
      name: "I-15 NB @ 2450 E / MP 10.43, STG"
    },
    {
      id: "10070",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14779.jpeg",
      name: "I-15 NB @ 24th St / SR-53 / MP 343.1, OGD"
    },
    {
      id: "11858",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16666.jpeg",
      name: "I-15 NB @ 2600 S / SR-93 / MP 315.26, WXS"
    },
    {
      id: "10069",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14778.jpeg",
      name: "I-15 NB @ 2650 S / 24th St Exit / MP 342.9, OGD"
    },
    {
      id: "10079",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14788.jpeg",
      name: "I-15 NB @ 2700 N / SR-134 / MP 349.42, FRW"
    },
    {
      id: "10066",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14775.jpeg",
      name: "I-15 NB @ 29th St / MP 342.5, OGD"
    },
    {
      id: "11053",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15862.jpeg",
      name: "I-15 NB @ 300 N / MP 256.15, SPF"
    },
    {
      id: "10067",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14776.jpeg",
      name: "I-15 NB @ 31st St / Hinkley Dr / SR-79 / MP 341.93, OGD"
    },
    {
      id: "102",
      url: "http://www.udottraffic.utah.gov/1_devices/aux102.jpeg",
      name: "I-15 NB @ 3300 S / SR-171 / MP 303.49, SSL"
    },
    {
      id: "11264",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16073.jpeg",
      name: "I-15 NB @ 3400 S / MP 359.5, PRY"
    },
    {
      id: "100",
      url: "http://www.udottraffic.utah.gov/1_devices/aux100.jpeg",
      name: "I-15 NB @ 3750 S / MP 302.75, SSL"
    },
    {
      id: "11735",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16543.jpeg",
      name: "I-15 NB @ 3800 N / Adobe Way / MP 284.3, LHI"
    },
    {
      id: "11297",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16106.jpeg",
      name: "I-15 NB @ 400 N / MP 250.33, PSN"
    },
    {
      id: "117",
      url: "http://www.udottraffic.utah.gov/1_devices/aux117.jpeg",
      name: "I-15 NB @ 400 S / MP 307.79, SLC"
    },
    {
      id: "10390",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15099.jpeg",
      name: "I-15 NB @ 400 S / SR-77 / MP 260, SPV"
    },
    {
      id: "99",
      url: "http://www.udottraffic.utah.gov/1_devices/aux99.jpeg",
      name: "I-15 NB @ 4100 S / MP 302.25, MUR"
    },
    {
      id: "11734",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16542.jpeg",
      name: "I-15 NB @ 4200 N / MP 284.65, LHI"
    },
    {
      id: "9250",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5222.jpeg",
      name: "I-15 NB @ 4400 S / MP 340.1, RDL"
    },
    {
      id: "10145",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14854.jpeg",
      name: "I-15 NB @ 450 S / MP 8, STG"
    },
    {
      id: "98",
      url: "http://www.udottraffic.utah.gov/1_devices/aux98.jpeg",
      name: "I-15 NB @ 4500 S / SR-266 / MP 301.71, MUR"
    },
    {
      id: "10397",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15106.jpeg",
      name: "I-15 NB @ 4600 S / MP 339.68, RDL"
    },
    {
      id: "10685",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15494.jpeg",
      name: "I-15 NB @ 500 E / SR-180 / MP 276.5, AFK"
    },
    {
      id: "9835",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14545.jpeg",
      name: "I-15 NB @ 500 S / MP 273.04, LDN"
    },
    {
      id: "115",
      url: "http://www.udottraffic.utah.gov/1_devices/aux115.jpeg",
      name: "I-15 NB @ 500 S / MP 307.61, SLC"
    },
    {
      id: "10431",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15140.jpeg",
      name: "I-15 NB @ 500 W / MP 11.38, WAS"
    },
    {
      id: "9389",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5131.jpeg",
      name: "I-15 NB @ 500 W / US-89 / MP 318.1, BTF"
    },
    {
      id: "96",
      url: "http://www.udottraffic.utah.gov/1_devices/aux96.jpeg",
      name: "I-15 NB @ 5000 S / MP 301, MUR"
    },
    {
      id: "95",
      url: "http://www.udottraffic.utah.gov/1_devices/aux95.jpeg",
      name: "I-15 NB @ 5200 S / MP 300.63, MUR"
    },
    {
      id: "93",
      url: "http://www.udottraffic.utah.gov/1_devices/aux93.jpeg",
      name: "I-15 NB @ 5550 S / MP 300, MUR"
    },
    {
      id: "10307",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15016.jpeg",
      name: "I-15 NB @ 600 E / MP 280.3, LHI"
    },
    {
      id: "120",
      url: "http://www.udottraffic.utah.gov/1_devices/aux120.jpeg",
      name: "I-15 NB @ 600 N / SR-268 / MP 309.34, SLC"
    },
    {
      id: "10385",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15094.jpeg",
      name: "I-15 NB @ 600 S / MP 255, SPF"
    },
    {
      id: "114",
      url: "http://www.udottraffic.utah.gov/1_devices/aux114.jpeg",
      name: "I-15 NB @ 600 S Exit / MP 307.36, SLC"
    },
    {
      id: "90",
      url: "http://www.udottraffic.utah.gov/1_devices/aux90.jpeg",
      name: "I-15 NB @ 6600 S / MP 298.5, MDV"
    },
    {
      id: "12404",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17203.jpeg",
      name: "I-15 NB @ 6950 S / MP 298.25, MDV"
    },
    {
      id: "10146",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14855.jpeg",
      name: "I-15 NB @ 700 S / MP 7.65, STG"
    },
    {
      id: "11266",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16075.jpeg",
      name: "I-15 NB @ 750 N / Willard Bay / SR-315 / MP 357.6, WIL"
    },
    {
      id: "11262",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16071.jpeg",
      name: "I-15 NB @ 7850 S / MP 353.73, BE"
    },
    {
      id: "9271",
      url: "http://www.udottraffic.utah.gov/1_devices/aux400.jpeg",
      name: "I-15 NB @ 800 N / SR-52 / MP 271.7, ORM"
    },
    {
      id: "87",
      url: "http://www.udottraffic.utah.gov/1_devices/aux87.jpeg",
      name: "I-15 NB @ 8000 S / MP 296.9, MDV"
    },
    {
      id: "11261",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16070.jpeg",
      name: "I-15 NB @ 8650 S / MP 352.8, BE"
    },
    {
      id: "10425",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15134.jpeg",
      name: "I-15 NB @ 900 S / MP 327.34, KAY"
    },
    {
      id: "85",
      url: "http://www.udottraffic.utah.gov/1_devices/aux85.jpeg",
      name: "I-15 NB @ 9000 S / SR-209 / MP 295.66, SND"
    },
    {
      id: "11049",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15858.jpeg",
      name: "I-15 NB @ 920 S / MP 264.54, PVO"
    },
    {
      id: "83",
      url: "http://www.udottraffic.utah.gov/1_devices/aux83.jpeg",
      name: "I-15 NB @ 9600 S / MP 294.76, SND"
    },
    {
      id: "9346",
      url: "http://www.udottraffic.utah.gov/1_devices/aux422.jpeg",
      name: "I-15 NB @ Antelope Dr / 2000 N / SR-108 / MP 332.87, LTN"
    },
    {
      id: "11640",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16449.jpeg",
      name: "I-15 NB @ Beaver Ridge / MP 101.33, BV"
    },
    {
      id: "9409",
      url: "http://www.udottraffic.utah.gov/1_devices/aux340.jpeg",
      name: "I-15 NB @ Beck St / US-89 / MP 312.06, SLC"
    },
    {
      id: "10152",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14861.jpeg",
      name: "I-15 NB @ Bluegrass Way / MP 2.39, STG"
    },
    {
      id: "10149",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14858.jpeg",
      name: "I-15 NB @ Brigham Rd / MP 4.65, STG"
    },
    {
      id: "10927",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15736.jpg",
      name: "I-15 NB @ Cedar City / 2700 S / MP 54.1, RN"
    },
    {
      id: "11463",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16272.jpeg",
      name: "I-15 NB @ Center St / MP 116.4, BV"
    },
    {
      id: "11014",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15823.jpeg",
      name: "I-15 NB @ Center St / SR-114 / MP 265.62, PVO"
    },
    {
      id: "10684",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15493.jpeg",
      name: "I-15 NB @ Church St / MP 330.75, LTN"
    },
    {
      id: "11054",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15863.jpeg",
      name: "I-15 NB @ East Bay / MP 262.55, PVO"
    },
    {
      id: "10157",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14866.jpeg",
      name: "I-15 NB @ Eastridge Dr / MP 9.08, STG"
    },
    {
      id: "10928",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15737.jpeg",
      name: "I-15 NB @ Fillmore / MP 161.43, MD"
    },
    {
      id: "250",
      url: "http://www.udottraffic.utah.gov/1_devices/aux250.jpeg",
      name:
        "I-15 NB @ Highland Alpine Exit / SR-92 / Timpanogos Hwy / Club House Dr / MP 284, LHI"
    },
    {
      id: "226",
      url: "http://www.udottraffic.utah.gov/1_devices/aux226.jpeg",
      name: "I-15 NB @ Hill Field Rd / 750 N / SR-232 / MP 331.36, LTN"
    },
    {
      id: "9397",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5126.jpeg",
      name: "I-15 NB @ I-215 North Interchange / MP 313.28, NSL"
    },
    {
      id: "10570",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15379.jpeg",
      name: "I-15 NB @ I-70 / Cove Fort / MP 130.15, BV"
    },
    {
      id: "10580",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15389.jpeg",
      name: "I-15 NB @ Layton Pkwy / SR-126 / MP 330.12, LTN"
    },
    {
      id: "10432",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15141.jpeg",
      name: "I-15 NB @ Main St / MP 12, WAS"
    },
    {
      id: "11047",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15856.jpeg",
      name: "I-15 NB @ Main St / SR-156 / MP 257.35, SPF"
    },
    {
      id: "10879",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15688.jpeg",
      name: "I-15 NB @ Main St / SR-73 / MP 279.77, LHI"
    },
    {
      id: "10150",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14859.jpeg",
      name: "I-15 NB @ Man O War Rd / MP 3.96, STG"
    },
    {
      id: "11641",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16450.jpeg",
      name: "I-15 NB @ Milepost 103.25, BV"
    },
    {
      id: "11462",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16271.jpeg",
      name: "I-15 NB @ Milepost 114.35, BV"
    },
    {
      id: "11505",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16314.jpeg",
      name: "I-15 NB @ Milepost 115.42, BV"
    },
    {
      id: "11609",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16418.jpeg",
      name: "I-15 NB @ Milepost 122.1, BV"
    },
    {
      id: "11607",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16416.jpeg",
      name: "I-15 NB @ Milepost 125, BV"
    },
    {
      id: "10427",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15136.jpeg",
      name: "I-15 NB @ Milepost 14.02, WAS"
    },
    {
      id: "10428",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15137.jpeg",
      name: "I-15 NB @ Milepost 14.5, WAS"
    },
    {
      id: "10429",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15138.jpeg",
      name: "I-15 NB @ Milepost 15.38, WAS"
    },
    {
      id: "12269",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17068.jpeg",
      name: "I-15 NB @ Milepost 22.19, LED"
    },
    {
      id: "11276",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16085.jpeg",
      name: "I-15 NB @ Milepost 90.05, RN (Local)"
    },
    {
      id: "10154",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14863.jpeg",
      name: "I-15 NB @ North of POE / MP 1.17, STG"
    },
    {
      id: "118",
      url: "http://www.udottraffic.utah.gov/1_devices/aux118.jpeg",
      name: "I-15 NB @ North Temple St / MP 308.59, SLC"
    },
    {
      id: "10548",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15357.jpeg",
      name: "I-15 NB @ Pioneer Crossing / Main St / SR-145 / MP 278.58, AFK"
    },
    {
      id: "10884",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15693.jpeg",
      name: "I-15 NB @ Pleasant Grove Blvd / MP 275.35, PLG"
    },
    {
      id: "11465",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16274.jpeg",
      name: "I-15 NB @ Riverdale Rd / SR-26 / MP 339.15, RDL"
    },
    {
      id: "10388",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15097.jpeg",
      name: "I-15 NB @ Shepard Ln / MP 325.43, FRM"
    },
    {
      id: "12270",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17069.jpeg",
      name: "I-15 NB @ Silver Reef Rd / MP 23.6, LED"
    },
    {
      id: "10155",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14864.jpeg",
      name: "I-15 NB @ South of POE / MP 0.67, STG"
    },
    {
      id: "10403",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15112.jpeg",
      name: "I-15 NB @ Southern Pkwy / SR-7 / MP 2.12, STG"
    },
    {
      id: "11265",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16074.jpeg",
      name: "I-15 NB @ SR-126 / MP 351.9, BE"
    },
    {
      id: "12271",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17070.jpeg",
      name: "I-15 NB @ SR-17 / MP 27.5, TOQ"
    },
    {
      id: "10718",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15527.jpeg",
      name: "I-15 NB @ SR-30 / MP 385.3, BE"
    },
    {
      id: "9392",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5135.jpeg",
      name: "I-15 NB @ State St / MP 323.66, FRM"
    },
    {
      id: "10430",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15139.jpeg",
      name: "I-15 NB @ State St / SR-9 / MP 15.91, WAS"
    },
    {
      id: "9544",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14311.jpeg",
      name: "I-15 NB @ University Ave / US-189 / 1860 S / MP 263.4, PVO"
    },
    {
      id: "9279",
      url: "http://www.udottraffic.utah.gov/1_devices/aux407.jpeg",
      name: "I-15 NB @ University Pkwy / SR-265 / MP 269.1, ORM"
    },
    {
      id: "10156",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14865.jpeg",
      name: "I-15 NB @ UT/AZ State Line / MP 0.14, STG"
    },
    {
      id: "10148",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14857.jpeg",
      name: "I-15 NB @ Virgin River / MP 5.3, STG"
    },
    {
      id: "10434",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15143.jpeg",
      name: "I-15 NB @ Washington Pkwy / MP 13.39, WAS"
    },
    {
      id: "11908",
      url:
        "http://www.udottraffic.utah.gov/1_devices/I-15%20Paragonah%20MP%2083.gif",
      name: "I-15 RWIS @ Milepost 83.8, RN"
    },
    {
      id: "10751",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-15%20@%20Sevier%20River-all.gif",
      name: "I-15 RWIS @ Sevier River / MP 200.11, JU"
    },
    {
      id: "12420",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS_I-15_NorthBrighamCity.gif",
      name: "I-15 RWIS NB @ 4000 N / MP 368.83, BE"
    },
    {
      id: "12410",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS_I-15_Lampson_Canyon.gif",
      name: "I-15 RWIS NB @ Lampson Canyon / MP 215.06, JU"
    },
    {
      id: "12153",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-15%20MP350%20FarrWest.jpg",
      name: "I-15 RWIS NB @ Milepost 350.24, PLV"
    },
    {
      id: "10752",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-15%20New-Harmony.gif",
      name: "I-15 RWIS NB @ New Harmony / Exit 42 / MP 42.17, RN"
    },
    {
      id: "10833",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-15%20@%20Plymouth.gif",
      name: "I-15 RWIS NB @ Plymouth / Exit 392 / SR-13 / MP 392.37, BE"
    },
    {
      id: "12515",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-15%20@%20Portage.gif",
      name: "I-15 RWIS NB @ Portage / MP 398, BE"
    },
    {
      id: "12411",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS_I-15_Rocky_Ridge.gif",
      name: "I-15 RWIS NB @ Rocky Ridge / MP 241.4, JU"
    },
    {
      id: "11273",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16082.jpeg",
      name: "I-15 RWIS NB @ Willard/Perry POE / MP 358.88, PRY"
    },
    {
      id: "10735",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-15%20DogValley-all.gif",
      name: "I-15 RWIS SB @ Dog Valley / MP 137.27, MD"
    },
    {
      id: "11885",
      url: "http://www.udottraffic.utah.gov/1_devices/I-15%20SB%20MP%20169.gif",
      name: "I-15 RWIS SB @ Milepost 169, MD"
    },
    {
      id: "11356",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-15%20@%20Scipio%20Summit.jpeg",
      name: "I-15 RWIS SB @ Scipio Summit / Exit 184 / MP 183.65, MD"
    },
    {
      id: "9393",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5121.jpeg",
      name: "I-15 SB @ 1000 N / MP 310.2, SLC"
    },
    {
      id: "81",
      url: "http://www.udottraffic.utah.gov/1_devices/aux81.jpeg",
      name: "I-15 SB @ 10600 S / South Jordan Pkwy / SR-151 / MP 293.6, SJO"
    },
    {
      id: "11260",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16069.jpeg",
      name: "I-15 SB @ 1100 N / MP 358.2, WIL"
    },
    {
      id: "11441",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16250.jpeg",
      name: "I-15 SB @ 1100 S / US-91 / MP 362, BRC"
    },
    {
      id: "9654",
      url: "http://www.udottraffic.utah.gov/1_devices/aux357.jpeg",
      name: "I-15 SB @ 11000 S / MP 293, SJO"
    },
    {
      id: "10695",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15504.jpeg",
      name: "I-15 SB @ 11400 S / MP 292.62, SJO"
    },
    {
      id: "12403",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17202.jpeg",
      name: "I-15 SB @ 12500 S / MP 291.17, DPR"
    },
    {
      id: "11752",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16560.jpeg",
      name: "I-15 SB @ 12600 S / MP 291.1, DPR"
    },
    {
      id: "111",
      url: "http://www.udottraffic.utah.gov/1_devices/aux111.jpeg",
      name: "I-15 SB @ 1300 S / MP 306.33, SLC"
    },
    {
      id: "11751",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16559.jpeg",
      name: "I-15 SB @ 13000 S / MP 290.6, DPR"
    },
    {
      id: "11750",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16558.jpeg",
      name: "I-15 SB @ 13400 S / MP 290.08, DPR"
    },
    {
      id: "10402",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15111.jpeg",
      name: "I-15 SB @ 1400 N / MP 320.46, CVL"
    },
    {
      id: "10922",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15731.jpeg",
      name: "I-15 SB @ 1400 N / SR-75 / MP 261.79, SPV"
    },
    {
      id: "11722",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16530.jpeg",
      name: "I-15 SB @ 14200 S / MP 289.09, DPR"
    },
    {
      id: "11723",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16531.jpeg",
      name: "I-15 SB @ 14300 S / MP 288.84, DPR"
    },
    {
      id: "11725",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16533.jpeg",
      name: "I-15 SB @ 14600 S / Highland Dr / SR-140 / MP 288.3, BLF"
    },
    {
      id: "110",
      url: "http://www.udottraffic.utah.gov/1_devices/aux110.jpeg",
      name: "I-15 SB @ 1500 S / MP 306.11, SLC"
    },
    {
      id: "11726",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16534.jpeg",
      name: "I-15 SB @ 15000 S / MP 287.91, BLF"
    },
    {
      id: "11729",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16537.jpeg",
      name: "I-15 SB @ 15800 S / MP 286.64, BLF"
    },
    {
      id: "10946",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15755.jpeg",
      name: "I-15 SB @ 1600 N / SR-241 / MP 272.82, ORM"
    },
    {
      id: "11730",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16538.jpeg",
      name: "I-15 SB @ 16200 S / MP 286.3, BLF"
    },
    {
      id: "9394",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5122.jpeg",
      name: "I-15 SB @ 1700 N / MP 310.93, SLC"
    },
    {
      id: "10078",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14787.jpeg",
      name: "I-15 SB @ 1800 N / Harrisville Rd / MP 348.23, FRW"
    },
    {
      id: "227",
      url: "http://www.udottraffic.utah.gov/1_devices/aux227.jpeg",
      name: "I-15 SB @ 200 N / SR-273 / MP 328.65, KAY"
    },
    {
      id: "11048",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15857.jpeg",
      name: "I-15 SB @ 200 S / MP 265.36, PVO"
    },
    {
      id: "11275",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16084.jpeg",
      name: "I-15 SB @ 2000 N / MP 61.27, CDC (Local)"
    },
    {
      id: "9388",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5133.jpeg",
      name: "I-15 SB @ 2100 N / MP 321.34, CVL"
    },
    {
      id: "109",
      url: "http://www.udottraffic.utah.gov/1_devices/aux109.jpeg",
      name: "I-15 SB @ 2100 S / SR-201 / MP 305.25, SLC"
    },
    {
      id: "10074",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14783.jpeg",
      name: "I-15 SB @ 21st St / SR-104 / MP 343.86, WHV"
    },
    {
      id: "10396",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15105.jpeg",
      name: "I-15 SB @ 2300 N / MP 337.48, SUN"
    },
    {
      id: "9395",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5123.jpeg",
      name: "I-15 SB @ 2300 N / Warm Springs Rd / MP 311.34, SLC"
    },
    {
      id: "105",
      url: "http://www.udottraffic.utah.gov/1_devices/aux105.jpeg",
      name: "I-15 SB @ 2300 S / MP 304.9, SSL"
    },
    {
      id: "10305",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15014.jpeg",
      name: "I-15 SB @ 2350 N / MP 282.7, LHI"
    },
    {
      id: "10075",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14784.jpeg",
      name: "I-15 SB @ 24th St / Pennsylvania Ave / SR-53 / MP 343.12, OGD"
    },
    {
      id: "104",
      url: "http://www.udottraffic.utah.gov/1_devices/aux104.jpeg",
      name: "I-15 SB @ 2550 S / MP 304.53, SSL"
    },
    {
      id: "9402",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5129.jpeg",
      name: "I-15 SB @ 2600 S  / SR-93 / MP 315.24, WXS"
    },
    {
      id: "11259",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16068.jpeg",
      name: "I-15 SB @ 2650 S / MP 360.62, PRY"
    },
    {
      id: "259",
      url: "http://www.udottraffic.utah.gov/1_devices/aux259.jpeg",
      name: "I-15 SB @ 2750 N / MP 283.2, LHI"
    },
    {
      id: "103",
      url: "http://www.udottraffic.utah.gov/1_devices/aux103.jpeg",
      name: "I-15 SB @ 2900 S / MP 304, SSL"
    },
    {
      id: "10102",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14811.jpeg",
      name: "I-15 SB @ 300 N / MP 274.61, LDN"
    },
    {
      id: "101",
      url: "http://www.udottraffic.utah.gov/1_devices/aux101.jpeg",
      name: "I-15 SB @ 3300 S / SR-171 / MP 303.45, SSL"
    },
    {
      id: "119",
      url: "http://www.udottraffic.utah.gov/1_devices/aux119.jpeg",
      name: "I-15 SB @ 400 N / MP 309.03, SLC"
    },
    {
      id: "10072",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14781.jpeg",
      name: "I-15 SB @ 400 N / Pioneer Rd / MP 346.72, MSV"
    },
    {
      id: "10389",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15098.jpeg",
      name: "I-15 SB @ 400 N / SR-106 / MP 317.55, WBN"
    },
    {
      id: "10881",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15690.jpeg",
      name: "I-15 SB @ 400 S / MP 279.32, LHI"
    },
    {
      id: "116",
      url: "http://www.udottraffic.utah.gov/1_devices/aux116.jpeg",
      name: "I-15 SB @ 400 S / MP 307.74, SLC"
    },
    {
      id: "10071",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14780.jpeg",
      name: "I-15 SB @ 400 S / MP 345.93, MSV"
    },
    {
      id: "97",
      url: "http://www.udottraffic.utah.gov/1_devices/aux97.jpeg",
      name: "I-15 SB @ 4500 S / SR-266 / MP 301.65, MUR"
    },
    {
      id: "11733",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16541.jpeg",
      name: "I-15 SB @ 4600 N / MP 285.12, LHI"
    },
    {
      id: "11732",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16540.jpeg",
      name: "I-15 SB @ 4800 N / MP 285.37, LHI"
    },
    {
      id: "10433",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15142.jpeg",
      name: "I-15 SB @ 500 E / MP 12.53, WAS"
    },
    {
      id: "11046",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15855.jpeg",
      name: "I-15 SB @ 500 N / MP 260.89, SPV"
    },
    {
      id: "9408",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5130.jpeg",
      name: "I-15 SB @ 500 S / SR-68 / MP 316.84, WBN"
    },
    {
      id: "9623",
      url: "http://www.udottraffic.utah.gov/1_devices/aux94.jpeg",
      name: "I-15 SB @ 5300 S / SR-173 / MP 300.35, MUR"
    },
    {
      id: "10581",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15390.jpg",
      name: "I-15 SB @ 550 S / MP 329.9, LTN"
    },
    {
      id: "9249",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5223.jpeg",
      name: "I-15 SB @ 5600 S / SR-97 / MP 338.46, ROY"
    },
    {
      id: "92",
      url: "http://www.udottraffic.utah.gov/1_devices/aux92.jpeg",
      name: "I-15 SB @ 5800 S / MP 299.7, MUR"
    },
    {
      id: "10894",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15703.jpeg",
      name: "I-15 SB @ 600 N / MP 271.44, ORM"
    },
    {
      id: "10493",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15302.jpeg",
      name: "I-15 SB @ 600 S / MP 318.76, CVL"
    },
    {
      id: "9252",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5224.jpeg",
      name: "I-15 SB @ 650 N / SR-103 / MP 335.89, CFD"
    },
    {
      id: "9902",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14611.jpeg",
      name: "I-15 SB @ 650 S / MP 269.87, ORM"
    },
    {
      id: "113",
      url: "http://www.udottraffic.utah.gov/1_devices/aux113.jpeg",
      name: "I-15 SB @ 700 S / MP 307.29, SLC"
    },
    {
      id: "9251",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5225.jpeg",
      name: "I-15 SB @ 700 S / SR-193 / MP 334.08, CFD"
    },
    {
      id: "88",
      url: "http://www.udottraffic.utah.gov/1_devices/aux88.jpeg",
      name: "I-15 SB @ 7400 S / MP 297.6, MDV"
    },
    {
      id: "12408",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17207.jpeg",
      name: "I-15 SB @ 800 N / MP 364.92, BRC"
    },
    {
      id: "11298",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16107.jpeg",
      name: "I-15 SB @ 800 S / SR-178 / MP 248.81, PSN"
    },
    {
      id: "11296",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16105.jpeg",
      name: "I-15 SB @ 8000 S / SR-164 / MP 253.56, UT"
    },
    {
      id: "10947",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15756.jpeg",
      name: "I-15 SB @ 820 N / MP 266.54, PVO"
    },
    {
      id: "86",
      url: "http://www.udottraffic.utah.gov/1_devices/aux86.jpeg",
      name: "I-15 SB @ 8400 S / MP 296.4, MDV"
    },
    {
      id: "84",
      url: "http://www.udottraffic.utah.gov/1_devices/aux84.jpeg",
      name: "I-15 SB @ 9100 S / MP 295.48, SND"
    },
    {
      id: "9700",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14408.jpeg",
      name: "I-15 SB @ Bangerter Hwy / SR-154 / MP 289.83, DPR"
    },
    {
      id: "11031",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15840.jpeg",
      name: "I-15 SB @ Beaver / MP 113.3, BV"
    },
    {
      id: "9396",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5125.jpeg",
      name: "I-15 SB @ Beck St / US-89 / MP 312.8, NSL"
    },
    {
      id: "10886",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15695.jpeg",
      name: "I-15 SB @ Blackridge / Exit 36 / MP 36.77, WN (Local)"
    },
    {
      id: "10279",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14988.jpeg",
      name: "I-15 SB @ Bluff St / SR-18 / MP 6.37, STG"
    },
    {
      id: "10153",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14862.jpeg",
      name: "I-15 SB @ Brigham Rd / MP 4.65, STG"
    },
    {
      id: "10926",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15735.jpeg",
      name: "I-15 SB @ Center St / MP 270.67, ORM"
    },
    {
      id: "9401",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5127.jpeg",
      name: "I-15 SB @ Center St / MP 313.73, NSL"
    },
    {
      id: "10550",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15359.jpeg",
      name: "I-15 SB @ Center St / MP 334.93, CFD"
    },
    {
      id: "11454",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16263.jpeg",
      name: "I-15 SB @ Cross Hollow Rd / MP 57, CDC"
    },
    {
      id: "11009",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15818.jpeg",
      name: "I-15 SB @ Dixie Dr / MP 5.72, STG"
    },
    {
      id: "11639",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16448.jpeg",
      name: "I-15 SB @ Freemont Rd / MP 99.7, RN"
    },
    {
      id: "9391",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5134.jpeg",
      name: "I-15 SB @ Glover Ln / MP 322.54, FRM"
    },
    {
      id: "11744",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16552.jpeg",
      name: "I-15 SB @ Hill Field Rd / 1150 N / SR-232 / MP 331.86, LTN"
    },
    {
      id: "91",
      url: "http://www.udottraffic.utah.gov/1_devices/aux91.jpeg",
      name: "I-15 SB @ I-215 South Interchange / MP 299, MUR"
    },
    {
      id: "10571",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15380.jpeg",
      name: "I-15 SB @ I-70 / Cove Fort / MP 135.3, MD"
    },
    {
      id: "11632",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16441.jpeg",
      name: "I-15 SB @ I-70 Interchange / MP 132.18, MD"
    },
    {
      id: "9400",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5128.jpeg",
      name: "I-15 SB @ Main St / MP 314.31, NSL"
    },
    {
      id: "11295",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16104.jpeg",
      name: "I-15 SB @ Main St / SR-115 / MP 251, PSN"
    },
    {
      id: "10555",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15364.jpeg",
      name: "I-15 SB @ Main St / SR-156 / MP 257.35, SPF"
    },
    {
      id: "11428",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16237.jpeg",
      name: "I-15 SB @ Main St / SR-160 / MP 111.77, BVR"
    },
    {
      id: "10885",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15694.jpeg",
      name: "I-15 SB @ Main St / SR-73 / MP 279.64, LHI"
    },
    {
      id: "11502",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16311.jpeg",
      name: "I-15 SB @ Manderfield Rd / MP 120.15, BV"
    },
    {
      id: "11642",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16451.jpeg",
      name: "I-15 SB @ Milepost 105.7, BV"
    },
    {
      id: "12328",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17127.jpeg",
      name: "I-15 SB @ Milepost 113.65, BV"
    },
    {
      id: "11504",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16313.jpeg",
      name: "I-15 SB @ Milepost 117.42, BV"
    },
    {
      id: "11503",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16312.jpeg",
      name: "I-15 SB @ Milepost 118.42, BV"
    },
    {
      id: "11501",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16310.jpeg",
      name: "I-15 SB @ Milepost 121.04, BV"
    },
    {
      id: "11610",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16419.jpeg",
      name: "I-15 SB @ Milepost 122.87, BV"
    },
    {
      id: "11606",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16415.jpeg",
      name: "I-15 SB @ Milepost 127.86, BV"
    },
    {
      id: "11013",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15822.jpeg",
      name: "I-15 SB @ Milepost 29.45, TOQ"
    },
    {
      id: "10076",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14785.jpeg",
      name: "I-15 SB @ Milepost 343.4, OGD"
    },
    {
      id: "281",
      url: "http://www.udottraffic.utah.gov/1_devices/aux281.jpeg",
      name: "I-15 SB @ Park Ln / 1100 W / SR-225 / MP 324.44, FRM"
    },
    {
      id: "9390",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5132.jpeg",
      name: "I-15 SB @ Parrish Ln / 400 N / SR-105 / MP 319.51, CVL"
    },
    {
      id: "10549",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15358.jpeg",
      name: "I-15 SB @ Pioneer Crossing / Main St / SR-145 / MP 278.6, AFK"
    },
    {
      id: "11731",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16539.jpeg",
      name: "I-15 SB @ Point of the Mountain / MP 285.78, UT"
    },
    {
      id: "10068",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14777.jpeg",
      name: "I-15 SB @ River Valley Dr / 3650 S / MP 341.17, RDL"
    },
    {
      id: "11268",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16077.jpeg",
      name: "I-15 SB @ Scipio / MP 187.03, MD"
    },
    {
      id: "10929",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15738.jpeg",
      name: "I-15 SB @ Scipio / MP 190.66, MD"
    },
    {
      id: "11267",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16076.jpeg",
      name: "I-15 SB @ Scipio Summit / Exit 184 / MP 183.65, MD"
    },
    {
      id: "10151",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14860.jpeg",
      name: "I-15 SB @ Sugar Leo Rd / MP 3.04, STG"
    },
    {
      id: "11050",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15859.jpeg",
      name: "I-15 SB @ University Ave / 2260 S / MP 263, PVO"
    },
    {
      id: "11038",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15847.jpeg",
      name: "I-15 SB @ University Pkwy / SR-265 / MP 269.12, ORM"
    },
    {
      id: "11052",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15861.jpeg",
      name: "I-15 SB @ US-6 / MP 257.68, SPF"
    },
    {
      id: "1",
      url: "http://www.udottraffic.utah.gov/1_devices/aux1.jpeg",
      name: "I-215 E NB @ 3300 S / SR-171 / MP 1.84, MCK"
    },
    {
      id: "2",
      url: "http://www.udottraffic.utah.gov/1_devices/aux2.jpeg",
      name: "I-215 E NB @ 3800 S / MP 2.58, MCK"
    },
    {
      id: "4",
      url: "http://www.udottraffic.utah.gov/1_devices/aux4.jpeg",
      name: "I-215 E NB @ 4100 S / MP 3.05, MCK"
    },
    {
      id: "6",
      url: "http://www.udottraffic.utah.gov/1_devices/aux6.jpeg",
      name: "I-215 E NB @ 4800 S / MP 4.27, HDY"
    },
    {
      id: "7",
      url: "http://www.udottraffic.utah.gov/1_devices/aux7.jpeg",
      name: "I-215 E NB @ 5200 S / MP 4.65, HDY"
    },
    {
      id: "8",
      url: "http://www.udottraffic.utah.gov/1_devices/aux8.jpeg",
      name: "I-215 E NB @ 5650 S / MP 5.59, HDY"
    },
    {
      id: "12407",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17206.jpeg",
      name: "I-215 E NB @ 6100 S / MP 6.1, HDY"
    },
    {
      id: "9",
      url: "http://www.udottraffic.utah.gov/1_devices/aux9.jpeg",
      name: "I-215 E NB @ 6200 S / SR-190 / MP 6.34, HDY"
    },
    {
      id: "10",
      url: "http://www.udottraffic.utah.gov/1_devices/aux10.jpeg",
      name: "I-215 E NB @ 6400 S / MP 6.56, HDY"
    },
    {
      id: "148",
      url: "http://www.udottraffic.utah.gov/1_devices/aux148.jpeg",
      name: "I-215 E NB @ Parleys Canyon / 2900 S / MP 1.3, MCK"
    },
    {
      id: "3",
      url: "http://www.udottraffic.utah.gov/1_devices/aux3.jpeg",
      name: "I-215 E SB @ 3900 S / MP 2.73, MCK"
    },
    {
      id: "5",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5.jpeg",
      name: "I-215 E SB @ 4500 S / SR-266 / MP 3.67, MCK"
    },
    {
      id: "10681",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15490.jpeg",
      name: "I-215 N EB On-ramp @ Redwood Rd / SR-68 / MP 27.38, NSL"
    },
    {
      id: "271",
      url: "http://www.udottraffic.utah.gov/1_devices/aux271.jpeg",
      name: "I-215 N WB @ 450 W / MP 28.54, NSL"
    },
    {
      id: "270",
      url: "http://www.udottraffic.utah.gov/1_devices/aux270.jpeg",
      name: "I-215 N WB @ Redwood Rd / SR-68 / MP 27.4, NSL (HUB)"
    },
    {
      id: "10682",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15491.jpeg",
      name: "I-215 N WB Off-ramp @ Redwood Rd / SR-68 / MP 27.44, NSL"
    },
    {
      id: "21",
      url: "http://www.udottraffic.utah.gov/1_devices/aux21.jpeg",
      name: "I-215 S EB @ 1200 W / Murray Pkwy Ave / MP 12.34, MUR"
    },
    {
      id: "13",
      url: "http://www.udottraffic.utah.gov/1_devices/aux13.jpeg",
      name: "I-215 S EB @ 1900 E / MP 7.98, CWH"
    },
    {
      id: "25",
      url: "http://www.udottraffic.utah.gov/1_devices/aux25.jpeg",
      name: "I-215 S EB @ 2200 W / MP 14.06, TAY"
    },
    {
      id: "12023",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16831.jpeg",
      name: "I-215 S EB @ 2300 E / MP 7.3, CWH"
    },
    {
      id: "17",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17.jpeg",
      name: "I-215 S EB @ 300 E / MP 10.18, MDV"
    },
    {
      id: "20",
      url: "http://www.udottraffic.utah.gov/1_devices/aux20.jpeg",
      name: "I-215 S EB @ 700 W / MP 11.8, MUR"
    },
    {
      id: "23",
      url: "http://www.udottraffic.utah.gov/1_devices/aux23.jpeg",
      name: "I-215 S EB @ Redwood Rd / SR-68 / MP 13.4, TAY"
    },
    {
      id: "18",
      url: "http://www.udottraffic.utah.gov/1_devices/aux18.jpeg",
      name: "I-215 S EB @ State St / US-89 / MP 10.66, MUR"
    },
    {
      id: "14",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14.jpeg",
      name: "I-215 S WB @ 1300 E / MP 8.87, CWH"
    },
    {
      id: "22",
      url: "http://www.udottraffic.utah.gov/1_devices/aux22.jpeg",
      name: "I-215 S WB @ 1300 W / MP 12.9, MUR"
    },
    {
      id: "12",
      url: "http://www.udottraffic.utah.gov/1_devices/aux12.jpeg",
      name: "I-215 S WB @ 2000 E / Highland Dr / SR-152 / MP 7.76, CWH"
    },
    {
      id: "11",
      url: "http://www.udottraffic.utah.gov/1_devices/aux11.jpeg",
      name: "I-215 S WB @ 2300 E / MP 7.25, HDY"
    },
    {
      id: "19",
      url: "http://www.udottraffic.utah.gov/1_devices/aux19.jpeg",
      name: "I-215 S WB @ 300 W / MP 11.15, MUR"
    },
    {
      id: "16",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16.jpeg",
      name: "I-215 S WB @ 900 E / SR-71 / MP 9.5, MDV"
    },
    {
      id: "24",
      url: "http://www.udottraffic.utah.gov/1_devices/aux24.jpeg",
      name: "I-215 S WB @ Redwood Rd / SR-68 / MP 13.5, TAY"
    },
    {
      id: "15",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15.jpeg",
      name: "I-215 S WB @ Union Park Ave / MP 9.31, MDV"
    },
    {
      id: "277",
      url: "http://www.udottraffic.utah.gov/1_devices/aux277.jpeg",
      name: "I-215 W NB @ 2100 N / MP 25.63, SLC"
    },
    {
      id: "32",
      url: "http://www.udottraffic.utah.gov/1_devices/aux32.jpeg",
      name: "I-215 W NB @ 2900 S / MP 18.22, WVC"
    },
    {
      id: "31",
      url: "http://www.udottraffic.utah.gov/1_devices/aux31.jpeg",
      name: "I-215 W NB @ 3500 S / SR-171 / MP 17.58, WVC"
    },
    {
      id: "27",
      url: "http://www.udottraffic.utah.gov/1_devices/aux27.jpeg",
      name: "I-215 W NB @ 4700 S / SR-266 / MP 15.46, TAY"
    },
    {
      id: "39",
      url: "http://www.udottraffic.utah.gov/1_devices/aux39.jpeg",
      name: "I-215 W NB @ 500 S / MP 21.75, SLC"
    },
    {
      id: "42",
      url: "http://www.udottraffic.utah.gov/1_devices/aux42.jpeg",
      name: "I-215 W NB @ 700 N / MP 23.7, SLC"
    },
    {
      id: "11747",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16555.jpeg",
      name: "I-215 W NB @ 900 S / MP 21.3,SLC"
    },
    {
      id: "37",
      url: "http://www.udottraffic.utah.gov/1_devices/aux37.jpeg",
      name: "I-215 W NB @ California Ave / 1330 S / MP 20.6, SLC"
    },
    {
      id: "40",
      url: "http://www.udottraffic.utah.gov/1_devices/aux40.jpeg",
      name: "I-215 W NB @ North Temple St / MP 22.8, SLC"
    },
    {
      id: "275",
      url: "http://www.udottraffic.utah.gov/1_devices/aux275.jpeg",
      name: "I-215 W SB @ 1200 N / MP 24.42, SLC"
    },
    {
      id: "276",
      url: "http://www.udottraffic.utah.gov/1_devices/aux276.jpeg",
      name: "I-215 W SB @ 1500 N / MP 24.91, SLC"
    },
    {
      id: "35",
      url: "http://www.udottraffic.utah.gov/1_devices/aux35.jpeg",
      name: "I-215 W SB @ 1900 S / MP 19.82, SLC"
    },
    {
      id: "34",
      url: "http://www.udottraffic.utah.gov/1_devices/aux34.jpeg",
      name: "I-215 W SB @ 2300 S / MP 19.25, WVC"
    },
    {
      id: "278",
      url: "http://www.udottraffic.utah.gov/1_devices/aux278.jpeg",
      name: "I-215 W SB @ 2500 N / MP 26.31, SLC"
    },
    {
      id: "33",
      url: "http://www.udottraffic.utah.gov/1_devices/aux33.jpeg",
      name: "I-215 W SB @ 2600 S / MP 18.71, WVC"
    },
    {
      id: "279",
      url: "http://www.udottraffic.utah.gov/1_devices/aux279.jpeg",
      name: "I-215 W SB @ 2800 N / MP 26.8, SLC"
    },
    {
      id: "30",
      url: "http://www.udottraffic.utah.gov/1_devices/aux30.jpeg",
      name: "I-215 W SB @ 3500 S / SR-171 / MP 17.4, WVC"
    },
    {
      id: "29",
      url: "http://www.udottraffic.utah.gov/1_devices/aux29.jpeg",
      name: "I-215 W SB @ 3900 S / MP 16.9, WVC"
    },
    {
      id: "28",
      url: "http://www.udottraffic.utah.gov/1_devices/aux28.jpeg",
      name: "I-215 W SB @ 4300 S / MP 16.18, TAY"
    },
    {
      id: "41",
      url: "http://www.udottraffic.utah.gov/1_devices/aux41.jpeg",
      name: "I-215 W SB @ 450 N / MP 23.31, SLC"
    },
    {
      id: "26",
      url: "http://www.udottraffic.utah.gov/1_devices/aux26.jpeg",
      name: "I-215 W SB @ 5100 S / MP 14.96, TAY"
    },
    {
      id: "36",
      url: "http://www.udottraffic.utah.gov/1_devices/aux36.jpeg",
      name: "I-215 W SB @ California Ave / 1330 S / MP 20.5, SLC"
    },
    {
      id: "11431",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16240.jpeg",
      name: "I-70 EB @ Sage Flat Rd / MP 54.4, SLA"
    },
    {
      id: "11718",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16526.jpeg",
      name: "I-70 EB @ State St / US-89 / MP 56.73, SLA"
    },
    {
      id: "11429",
      url: "http://www.udottraffic.utah.gov/1_devices/I-70%20MP%20115-all.gif",
      name: "I-70 Liveview @ Devils Canyon / MP 115.68, EM"
    },
    {
      id: "11302",
      url: "http://www.udottraffic.utah.gov/1_devices/I-70-MP-206-all.gif",
      name: "I-70 Liveview @ Milepost 206.1, GR"
    },
    {
      id: "11300",
      url: "http://www.udottraffic.utah.gov/1_devices/I-70-MP45%20all.gif",
      name: "I-70 Liveview @ Milepost 45.05, SE"
    },
    {
      id: "11271",
      url: "http://www.udottraffic.utah.gov/1_devices/I-70Mile131-all.gif",
      name: "I-70 Liveview @ Temple Mount Rd / MP 131.1, EM"
    },
    {
      id: "11272",
      url: "http://www.udottraffic.utah.gov/1_devices/I-70mile182-all.gif",
      name: "I-70 Liveview @ US-191 / Crescent Jct / MP 182.2, GR"
    },
    {
      id: "11301",
      url: "http://www.udottraffic.utah.gov/1_devices/I-70%20MP%2063-all.gif",
      name: "I-70 Liveview EB @ Gooseberry Rd / MP 63.57, SE"
    },
    {
      id: "10827",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15636.jpeg",
      name: "I-70 Liveview EB @ Milepost 15.84, SE"
    },
    {
      id: "10858",
      url: "http://www.udottraffic.utah.gov/1_devices/I-70_MP82.gif",
      name: "I-70 Liveview EB @ Milepost 82.4, SE"
    },
    {
      id: "11620",
      url: "http://www.udottraffic.utah.gov/1_devices/I-70_MP74-all.gif",
      name: "I-70 Liveview WB @ Convulsion Rd / MP 73.52, SE"
    },
    {
      id: "10847",
      url: "http://www.udottraffic.utah.gov/1_devices/I-70_MP141.gif",
      name: "I-70 Liveview WB @ Milepost 141.35, EM"
    },
    {
      id: "10846",
      url: "http://www.udottraffic.utah.gov/1_devices/I-70_MP226.gif",
      name: "I-70 Liveview WB @ Milepost 226.4, GR"
    },
    {
      id: "11274",
      url: "http://www.udottraffic.utah.gov/1_devices/I-70-FishCreek-all.gif",
      name: "I-70 RWIS @ Fish Creek / MP 11.31, SE"
    },
    {
      id: "11483",
      url: "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-70%20SR-24.gif",
      name: "I-70 RWIS @ SR-24 / MP 49.33, SIG"
    },
    {
      id: "12025",
      url:
        "http://www.udottraffic.utah.gov/1_devices/I-70%20MP%2038%20Richfield.gif",
      name: "I-70 RWIS EB @ 300 N / MP 38.77, RFD"
    },
    {
      id: "10740",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-70%20GhostRocks.jpg",
      name: "I-70 RWIS EB @ Ghost Rocks / MP 123.11, EM"
    },
    {
      id: "10736",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-70-ClearCreek.gif",
      name: "I-70 RWIS WB @ Clear Creek Summit / MP 7.46, SE"
    },
    {
      id: "10737",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-70%20Fremont-West.jpeg",
      name: "I-70 RWIS WB @ Fremont Jct / MP 93, SE"
    },
    {
      id: "10741",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-70%20@%20Rattlesnake%20Bench.jpg",
      name: "I-70 RWIS WB @ Rattlesnake Bench / MP 137.07, EM"
    },
    {
      id: "11430",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16239.jpeg",
      name: "I-70 WB @ Crescent Jct / MP 180.85, GR"
    },
    {
      id: "10572",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15381.jpeg",
      name: "I-70 WB @ I-15 / Cove Fort / MP 2.4, MD"
    },
    {
      id: "11719",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16527.jpeg",
      name: "I-70 WB @ Salina VMS / MP 58.66, SE"
    },
    {
      id: "150",
      url: "http://www.udottraffic.utah.gov/1_devices/aux150.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Chain Up Area East / MP 129.5, SL"
    },
    {
      id: "158",
      url: "http://www.udottraffic.utah.gov/1_devices/aux158.jpeg",
      name: "I-80 / Parley`s Canyon EB @ East Canyon / SR-65 / MP 133.96, SL"
    },
    {
      id: "68",
      url: "http://www.udottraffic.utah.gov/1_devices/aux68.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Exit 130 to SB I-215 E / MP 128.5, SL"
    },
    {
      id: "153",
      url: "http://www.udottraffic.utah.gov/1_devices/aux153.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Milepost 131.42, SL"
    },
    {
      id: "155",
      url: "http://www.udottraffic.utah.gov/1_devices/aux155.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Milepost 132.53, SL"
    },
    {
      id: "156",
      url: "http://www.udottraffic.utah.gov/1_devices/aux156.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Milepost 132.97, SL"
    },
    {
      id: "159",
      url: "http://www.udottraffic.utah.gov/1_devices/aux159.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Milepost 134.47, SL"
    },
    {
      id: "160",
      url: "http://www.udottraffic.utah.gov/1_devices/aux160.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Milepost 134.93, SL"
    },
    {
      id: "11424",
      url:
        "http://www.udottraffic.utah.gov/1_devices/I-80%20Parleys%20Quarry.gif",
      name:
        "I-80 / Parley`s Canyon RWIS EB @ East Quarry / MP 130.36, SL (Low Lite)"
    },
    {
      id: "69",
      url: "http://www.udottraffic.utah.gov/1_devices/aux69.jpeg",
      name: "I-80 / Parley`s Canyon WB @ Chain Up Area West / MP 129.2, SL"
    },
    {
      id: "157",
      url: "http://www.udottraffic.utah.gov/1_devices/aux157.jpeg",
      name:
        "I-80 / Parley`s Canyon WB @ East Canyon / SR-65 On-ramp / MP 133.61, SL"
    },
    {
      id: "151",
      url: "http://www.udottraffic.utah.gov/1_devices/aux151.jpeg",
      name: "I-80 / Parley`s Canyon WB @ East Quarry / MP 130.38, SL"
    },
    {
      id: "163",
      url: "http://www.udottraffic.utah.gov/1_devices/aux163.jpeg",
      name:
        "I-80 / Parley`s Canyon WB @ Lamb`s Canyon Rd Off-ramp / MP 136.45, SL"
    },
    {
      id: "162",
      url: "http://www.udottraffic.utah.gov/1_devices/aux162.jpeg",
      name:
        "I-80 / Parley`s Canyon WB @ Lamb`s Canyon Rd On-ramp / MP 135.96, SL"
    },
    {
      id: "152",
      url: "http://www.udottraffic.utah.gov/1_devices/aux152.jpeg",
      name: "I-80 / Parley`s Canyon WB @ Milepost 131.1, SL"
    },
    {
      id: "12458",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17249.jpeg",
      name: "I-80 / Parley`s Canyon WB @ Mountain Dell / MP 134.6, SL"
    },
    {
      id: "154",
      url: "http://www.udottraffic.utah.gov/1_devices/aux154.jpeg",
      name: "I-80 / Parley`s Canyon WB @ Mt Aire Canyon Rd / MP 132.01, SL"
    },
    {
      id: "70",
      url: "http://www.udottraffic.utah.gov/1_devices/aux70.jpeg",
      name: "I-80 / Parley`s Canyon WB @ Quarry / MP 129.88, SL"
    },
    {
      id: "161",
      url: "http://www.udottraffic.utah.gov/1_devices/aux161.jpeg",
      name: "I-80 / Parleys Canyon EB @ Milepost 135.46, SL"
    },
    {
      id: "164",
      url: "http://www.udottraffic.utah.gov/1_devices/aux164.jpeg",
      name: "I-80 / Parleys Canyon EB @ Milepost 136.95, SL"
    },
    {
      id: "11393",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16202.jpeg",
      name: "I-80 @ 150 N / MP 163.05, CLV"
    },
    {
      id: "60",
      url: "http://www.udottraffic.utah.gov/1_devices/aux60.jpeg",
      name: "I-80 @ 2000 E / MP 126.2, SLC"
    },
    {
      id: "11392",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16201.jpeg",
      name: "I-80 @ Wanship / SR-32 / MP 155.46, SU"
    },
    {
      id: "107",
      url: "http://www.udottraffic.utah.gov/1_devices/aux107.jpeg",
      name: "I-80 EB @ 1000 W / MP 118.85, SLC"
    },
    {
      id: "11675",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16483.jpeg",
      name: "I-80 EB @ 1300 W / MP 118.41 SLC"
    },
    {
      id: "62",
      url: "http://www.udottraffic.utah.gov/1_devices/aux62.jpeg",
      name: "I-80 EB @ 2400 E / MP 126.82, SLC"
    },
    {
      id: "63",
      url: "http://www.udottraffic.utah.gov/1_devices/aux63.jpeg",
      name: "I-80 EB @ 2800 E / MP 127.39, SL"
    },
    {
      id: "53",
      url: "http://www.udottraffic.utah.gov/1_devices/aux53.jpeg",
      name: "I-80 EB @ 300 W / MP 122.57, SSL"
    },
    {
      id: "48",
      url: "http://www.udottraffic.utah.gov/1_devices/aux48.jpeg",
      name: "I-80 EB @ 3200 W / North Temple St / MP 116.33, SLC"
    },
    {
      id: "66",
      url: "http://www.udottraffic.utah.gov/1_devices/aux66.jpeg",
      name: "I-80 EB @ 3250 E / East of Foothill / MP 127.97, SL"
    },
    {
      id: "47",
      url: "http://www.udottraffic.utah.gov/1_devices/aux47.jpeg",
      name: "I-80 EB @ 3600 W / MP 115.9, SLC"
    },
    {
      id: "43",
      url: "http://www.udottraffic.utah.gov/1_devices/aux43.jpeg",
      name: "I-80 EB @ 4400 W / MP 114.75, SLC"
    },
    {
      id: "56",
      url: "http://www.udottraffic.utah.gov/1_devices/aux56.jpeg",
      name: "I-80 EB @ 700 E / SR-71 / MP 124.15, SLC"
    },
    {
      id: "45",
      url: "http://www.udottraffic.utah.gov/1_devices/aux45.jpeg",
      name: "I-80 EB @ Bangerter Hwy / 4000 W / SR-154 / MP 115.35, SLC"
    },
    {
      id: "64",
      url: "http://www.udottraffic.utah.gov/1_devices/aux64.jpeg",
      name: "I-80 EB @ I-215 E / MP 127.66, SL"
    },
    {
      id: "49",
      url: "http://www.udottraffic.utah.gov/1_devices/aux49.jpeg",
      name: "I-80 EB @ I-215 W SB / MP 117.2, SLC"
    },
    {
      id: "67",
      url: "http://www.udottraffic.utah.gov/1_devices/aux67.jpeg",
      name: "I-80 EB @ Mouth of Parley`s Canyon / MP 128.23, SL"
    },
    {
      id: "169",
      url: "http://www.udottraffic.utah.gov/1_devices/aux169.jpeg",
      name: "I-80 EB @ Powderwood Rd / MP 143.46, SU"
    },
    {
      id: "9118",
      url: "http://www.udottraffic.utah.gov/1_devices/aux51.jpeg",
      name: "I-80 EB @ Redwood Rd / SR-68 / MP 117.9, SLC"
    },
    {
      id: "10611",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15420.jpeg",
      name: "I-80 EB @ SR-36 / Exit 99 / MP 98.6, TE"
    },
    {
      id: "54",
      url: "http://www.udottraffic.utah.gov/1_devices/aux54.jpeg",
      name: "I-80 EB @ State St / US-89 / MP 123.32, SSL"
    },
    {
      id: "166",
      url: "http://www.udottraffic.utah.gov/1_devices/aux166.jpeg",
      name: "I-80 EB @ Summit Park / MP 140.13, SU"
    },
    {
      id: "168",
      url: "http://www.udottraffic.utah.gov/1_devices/aux168.jpeg",
      name: "I-80 EB @ View Area / MP 142.75, SU"
    },
    {
      id: "9898",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14607.jpeg",
      name: "I-80 EB @ Wendover / UT MP -1.4 / NV MP 409.25, WEN (Local)"
    },
    {
      id: "171",
      url: "http://www.udottraffic.utah.gov/1_devices/aux171.jpeg",
      name: "I-80 EB @ West of US-40 / MP 145.4, SU"
    },
    {
      id: "11251",
      url: "http://www.udottraffic.utah.gov/1_devices/I-80mp117-all.gif",
      name: "I-80 Liveview EB @ 1800 W / MP 117.52, SLC"
    },
    {
      id: "11250",
      url: "http://www.udottraffic.utah.gov/1_devices/I-80-MP-111-all.gif",
      name: "I-80 Liveview EB @ 7200 W Off Ramp / MP 111, SLC"
    },
    {
      id: "11082",
      url: "http://www.udottraffic.utah.gov/1_devices/I-80-MP-172-all.gif",
      name: "I-80 Liveview EB @ Echo Canyon / MP 172, SU"
    },
    {
      id: "11079",
      url: "http://www.udottraffic.utah.gov/1_devices/I-80-MP-107-all.gif",
      name: "I-80 Liveview EB @ Milepost 107.26, SL"
    },
    {
      id: "10798",
      url: "http://www.udottraffic.utah.gov/1_devices/I-80-Mp-149.gif",
      name: "I-80 Liveview EB @ Milepost 149.62, SU"
    },
    {
      id: "11254",
      url: "http://www.udottraffic.utah.gov/1_devices/I-80%20M176-all.gif",
      name: "I-80 Liveview EB @ Milepost 176.4, SU"
    },
    {
      id: "10812",
      url: "http://www.udottraffic.utah.gov/1_devices/I-80-MP-186.gif",
      name: "I-80 Liveview EB @ Milepost 186.78, SU"
    },
    {
      id: "11621",
      url: "http://www.udottraffic.utah.gov/1_devices/I-80-SR-196_MP-76.gif",
      name:
        "I-80 Liveview EB @ Skull Valley Rd / Rowley Jct / SR-196 / MP 76.3, TE"
    },
    {
      id: "10790",
      url: "http://www.udottraffic.utah.gov/1_devices/I-80-MP-62.gif",
      name: "I-80 Liveview WB @ Lakeside / Military Area / Exit 62, TE"
    },
    {
      id: "11326",
      url: "http://www.udottraffic.utah.gov/1_devices/I-80mile11all.gif",
      name: "I-80 Liveview WB @ Milepost 11.8, TE"
    },
    {
      id: "11075",
      url: "http://www.udottraffic.utah.gov/1_devices/I-80-MP40.gif",
      name: "I-80 Liveview WB @ Milepost 40, TE"
    },
    {
      id: "11634",
      url: "http://www.udottraffic.utah.gov/1_devices/I-80-MP80.gif",
      name: "I-80 Liveview WB @ Milepost 79.88, TE"
    },
    {
      id: "11635",
      url: "http://www.udottraffic.utah.gov/1_devices/I-80-MP87.gif",
      name: "I-80 Liveview WB @ Milepost 86.92, TE"
    },
    {
      id: "11636",
      url: "http://www.udottraffic.utah.gov/1_devices/I-80-MP92.gif",
      name: "I-80 Liveview WB @ Milepost 91.77, TE"
    },
    {
      id: "11076",
      url: "http://www.udottraffic.utah.gov/1_devices/I-80-MP-102-all.gif",
      name: "I-80 Liveview WB @ Salt Lake Marina / MP 102.22, SL"
    },
    {
      id: "11427",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16236.jpeg",
      name: "I-80 RWIS @ 150 N / MP 163.05, CLV (Low Lite)"
    },
    {
      id: "10776",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-80%20@%20MP29.gif",
      name: "I-80 RWIS @ Milepost 28.68, TE"
    },
    {
      id: "10777",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-80%20@%20MP78%20W.jpg",
      name: "I-80 RWIS @ Milepost 78, TE"
    },
    {
      id: "10742",
      url: "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-80-Wahsatch.gif",
      name: "I-80 RWIS @ Wahsatch Hill / MP 191.2, SU"
    },
    {
      id: "11426",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16235.jpeg",
      name: "I-80 RWIS @ Wanship / SR-32 / MP 155.46, SU (Low Lite)"
    },
    {
      id: "12101",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS_I-80_MP71_EastDelle.jpg",
      name: "I-80 RWIS EB @ East Delle / MP 70.75, TE"
    },
    {
      id: "11425",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20Parleys-Summit-all.gif",
      name: "I-80 RWIS EB @ Parley`s Summit / MP 138.87, SL (Low Lite)"
    },
    {
      id: "12102",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS_I-80_MP68_WestDelle.jpg",
      name: "I-80 RWIS EB @ West Delle / MP 68.3, TE"
    },
    {
      id: "10739",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-80%20Grassy%20Knolls-all.gif",
      name: "I-80 RWIS WB @ Grassy Knolls Rest Area / MP 54.8, TE"
    },
    {
      id: "10775",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-80%20@%20MP1.jpg",
      name: "I-80 RWIS WB @ Milepost 1.24, WEN"
    },
    {
      id: "57",
      url: "http://www.udottraffic.utah.gov/1_devices/aux57.jpeg",
      name: "I-80 WB @ 1200 E / Highland Dr / MP 124.9, SLC"
    },
    {
      id: "12325",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17124.jpeg",
      name: "I-80 WB @ 1300 E / MP 125.1, SLC"
    },
    {
      id: "59",
      url: "http://www.udottraffic.utah.gov/1_devices/aux59.jpeg",
      name: "I-80 WB @ 1700 E / MP 125.69, SLC"
    },
    {
      id: "50",
      url: "http://www.udottraffic.utah.gov/1_devices/aux50.jpeg",
      name: "I-80 WB @ 1900 W / MP 117.47, SLC"
    },
    {
      id: "61",
      url: "http://www.udottraffic.utah.gov/1_devices/aux61.jpeg",
      name: "I-80 WB @ 2300 E / MP 126.74, SLC"
    },
    {
      id: "9350",
      url: "http://www.udottraffic.utah.gov/1_devices/aux337.jpeg",
      name: "I-80 WB @ 5600 W / SR-172 / MP 113.3, SLC"
    },
    {
      id: "55",
      url: "http://www.udottraffic.utah.gov/1_devices/aux55.jpeg",
      name: "I-80 WB @ 700 E / SR-71 / MP 124.1, SLC"
    },
    {
      id: "10386",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15095.jpeg",
      name: "I-80 WB @ Echo Canyon / Rest Stop / MP 170.44, SU (Local)"
    },
    {
      id: "167",
      url: "http://www.udottraffic.utah.gov/1_devices/aux167.jpeg",
      name: "I-80 WB @ Jeremy Ranch / MP 141.8, SU"
    },
    {
      id: "170",
      url: "http://www.udottraffic.utah.gov/1_devices/aux170.jpeg",
      name: "I-80 WB @ Kimball Jct / SR-224 / MP 144.22, SU"
    },
    {
      id: "12457",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17248.jpeg",
      name: "I-80 WB @ Milepost 147.56, SU"
    },
    {
      id: "165",
      url: "http://www.udottraffic.utah.gov/1_devices/aux165.jpeg",
      name: "I-80 WB @ Parley`s Summit / MP 138.9, SL"
    },
    {
      id: "172",
      url: "http://www.udottraffic.utah.gov/1_devices/aux172.jpeg",
      name: "I-80 WB @ Silver Creek Jct / US-40 / MP 146.84, SU"
    },
    {
      id: "11668",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16476.jpeg",
      name: "I-80 WB @ SR-201 / MP 101.45, TE"
    },
    {
      id: "147",
      url: "http://www.udottraffic.utah.gov/1_devices/aux147.jpeg",
      name: "I-80 WB @ State St / US-89 / MP 123.28, SSL"
    },
    {
      id: "10615",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15424.jpeg",
      name: "I-84 / Weber Canyon @ Power Plant / MP 89.25, WB"
    },
    {
      id: "12409",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17208.jpeg",
      name: "I-84 / Weber Canyon WB @ Milepost 91.35, MN"
    },
    {
      id: "10819",
      url: "http://www.udottraffic.utah.gov/1_devices/I-84-MP-87.gif",
      name: "I-84 Liveview @ US-89  / MP 87.8, UIN"
    },
    {
      id: "11257",
      url: "http://www.udottraffic.utah.gov/1_devices/I-84mile20-all.gif",
      name: "I-84 Liveview EB @ Blue Creek / MP 20.36, BE"
    },
    {
      id: "11482",
      url: "http://www.udottraffic.utah.gov/1_devices/I-84-MP119.gif",
      name: "I-84 Liveview EB @ I-80 / Echo Jct / MP 119.6, SU"
    },
    {
      id: "10787",
      url: "http://www.udottraffic.utah.gov/1_devices/I-84-MP17.gif",
      name: "I-84 Liveview EB @ Milepost 17.64, BE"
    },
    {
      id: "11086",
      url: "http://www.udottraffic.utah.gov/1_devices/I-84-MP-26-all.gif",
      name: "I-84 Liveview EB @ SR-83 / MP 26.57, HWL"
    },
    {
      id: "11481",
      url: "http://www.udottraffic.utah.gov/1_devices/I-84-mp-92.gif",
      name: "I-84 Liveview WB @ SR-167 / MP 92.42, MN"
    },
    {
      id: "10774",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-84%20@%20Chaulk%20Hill.gif",
      name: "I-84 RWIS WB @ Chaulk Hill / MP 13.79, BE"
    },
    {
      id: "10860",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15669.jpg",
      name: "I-84 RWIS WB @ Devils Slide / MP 111.74, MN"
    },
    {
      id: "10743",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-84%20@%20Whites%20Valley-all.gif",
      name: "I-84 RWIS WB @ Whites Valley / MP 30.45, BE"
    },
    {
      id: "9127",
      url: "http://www.udottraffic.utah.gov/1_devices/aux317.jpeg",
      name: "I-84 SB @ Riverdale Rd / SR-26 / MP 81.8, RDL"
    },
    {
      id: "10713",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15522.jpeg",
      name: "I-84 WB @ I-15 SB / MP 41.66, TRE"
    },
    {
      id: "11810",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16618.jpeg",
      name: "Kearns Blvd / SR-248 @ Bonanza Dr / Monitor Dr, PKC"
    },
    {
      id: "11857",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16665.jpeg",
      name: "Lakeview Pkwy @ 500 W, PVO"
    },
    {
      id: "12057",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16865.jpeg",
      name: "Layton Pkwy @ 100 W, LTN"
    },
    {
      id: "10052",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14761.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 1200 N / MP 5.42, WBN"
    },
    {
      id: "10059",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14768.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 1275 N / MP 8.3, CVL"
    },
    {
      id: "10061",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14770.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 1550 S / MP 9.8, FRM"
    },
    {
      id: "10060",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14769.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 1900 N / MP 9.16, CVL"
    },
    {
      id: "10049",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14758.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 1900 S / MP 3.16, WXS"
    },
    {
      id: "10063",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14772.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 200 S / MP 11.4, FRM"
    },
    {
      id: "10054",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14763.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 2200 N / MP 6.62, WBN"
    },
    {
      id: "10048",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14757.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 2500 S / MP 2.5, WXS"
    },
    {
      id: "10046",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14755.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 300 N / MP 1.52, NSL"
    },
    {
      id: "10051",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14760.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 400 N / MP 4.7, WBN"
    },
    {
      id: "10058",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14767.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 800 N / MP 7.8, CVL"
    },
    {
      id: "10047",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14756.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 900 N / MP 2.14, NSL"
    },
    {
      id: "10055",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14764.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 900 W / MP 7, CVL"
    },
    {
      id: "10045",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14754.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ Center St / MP 1, NSL"
    },
    {
      id: "10056",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14765.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ Parrish Ln / SR-105 / MP 7.45, CVL"
    },
    {
      id: "10064",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14773.jpeg",
      name: "Legacy Pkwy / SR-67 SB @ 250 N / US-89 / MP 12.1, FRM"
    },
    {
      id: "10050",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14759.jpeg",
      name: "Legacy Pkwy / SR-67 SB @ 500 S / MP 4, WXS"
    },
    {
      id: "10062",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14771.jpeg",
      name: "Legacy Pkwy / SR-67 SB @ Glover Ln / MP 10.5, FRM"
    },
    {
      id: "10053",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14762.jpeg",
      name: "Legacy Pkwy / SR-67 SB @ Pages Ln / MP 6, WBN"
    },
    {
      id: "10057",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14766.jpeg",
      name: "Legacy Pkwy / SR-67 SB @ Parrish Ln / SR-105 / MP 7.4, CVL"
    },
    {
      id: "10186",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14895.jpeg",
      name:
        "Little Cottonwood Rd / 3335 E / SR-209 @ Old Wasatch Blvd / 9710 S, GNT"
    },
    {
      id: "11799",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16607.jpeg",
      name: "Little Cottonwood Rd / 9800 S / SR-209 @ Wasatch Blvd / 3400 E, SL"
    },
    {
      id: "12437",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17228.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Alta Bypass / MP 10.95, SL"
    },
    {
      id: "11457",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16266.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Lisa Falls / MP 6.5, SL"
    },
    {
      id: "11458",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16267.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Seven Turns / MP 7.4, SL"
    },
    {
      id: "11459",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16268.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Tanners Flat / MP 7.94, SL"
    },
    {
      id: "11456",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16265.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Upper Vault / MP 5.96, SL"
    },
    {
      id: "11461",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16270.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ White Pine Parking / MP 9.2, SL"
    },
    {
      id: "11839",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16647.jpeg",
      name: "Little Cottonwood Rd / SR-210 RWIS EB @ Powerhouse / MP 5.67, SL"
    },
    {
      id: "12435",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17226.jpeg",
      name: "Little Cottonwood Rd / SR-210 WB @ Alta / MP 12.16, ALT"
    },
    {
      id: "12436",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17227.jpeg",
      name: "Little Cottonwood Rd / SR-210 WB @ Upper White Pine / MP 9.7, SL"
    },
    {
      id: "11460",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16269.jpeg",
      name: "Little Cottonwood Rd / SR-210 WB @ White Pine / MP 8.7, SL"
    },
    {
      id: "10630",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15439.jpeg",
      name: "Main St / Columbus St / SR-186 @ 300 N, SLC"
    },
    {
      id: "9782",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14492.jpeg",
      name: "Main St / SR-118 / SR-120 @ 1300 S / SR-120, RFD"
    },
    {
      id: "9922",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14631.jpeg",
      name: "Main St / SR-120 @ 300 N / SR-118, RFD"
    },
    {
      id: "9920",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14629.jpeg",
      name: "Main St / SR-120 @ 800 S, RFD"
    },
    {
      id: "9921",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14630.jpeg",
      name: "Main St / SR-120 @ Center St, RFD"
    },
    {
      id: "11608",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16417.jpeg",
      name: "Main St / SR-126 @ 1300 N, SUN"
    },
    {
      id: "9231",
      url: "http://www.udottraffic.utah.gov/1_devices/aux322.jpeg",
      name: "Main St / SR-126 @ Antelope Dr / SR-108, LTN"
    },
    {
      id: "10304",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15013.jpeg",
      name: "Main St / SR-130 @ 200 N / Freedom Blvd / SR-56, CDC"
    },
    {
      id: "10387",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15096.jpeg",
      name: "Main St / SR-130 @ 200 S / SR-289, CDC"
    },
    {
      id: "12456",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17247.jpeg",
      name: "Main St / SR-130 @ Coal Creek Rd, CDC"
    },
    {
      id: "11453",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16262.jpeg",
      name: "Main St / SR-130 @ Cross Hollow Rd / Old Hwy 91, CDC"
    },
    {
      id: "10546",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15355.jpeg",
      name: "Main St / SR-145 @ Kawakami Dr / 600 W, AFK"
    },
    {
      id: "11716",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16524.jpeg",
      name: "Main St / SR-156 @ 1000 N, SPF"
    },
    {
      id: "11717",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16525.jpeg",
      name: "Main St / SR-156 @ 300 S / SR-198, SPF"
    },
    {
      id: "11753",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16561.jpeg",
      name: "Main St / SR-156 @ 400 N / SR-147, SPF"
    },
    {
      id: "11484",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16293.jpeg",
      name: "Main St / SR-156 @ 800 N, SPF"
    },
    {
      id: "11651",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16459.jpeg",
      name: "Main St / SR-165 @ 100 N PVD / 1200 S LGN, PVD"
    },
    {
      id: "11824",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16632.jpeg",
      name: "Main St / SR-198 @ Arrowhead Trail Rd / SR-164, SPF"
    },
    {
      id: "10296",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15005.jpeg",
      name: "Main St / SR-36 @ 1000 N, TLE"
    },
    {
      id: "10297",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15006.jpeg",
      name: "Main St / SR-36 @ 2000 N, TLE"
    },
    {
      id: "12375",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17174.jpeg",
      name: "Main St / SR-36 @ Tooele Shed / Coleman St / MP 52.63, TLE"
    },
    {
      id: "12519",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17310.jpeg",
      name: "Main St / SR-55 @ 300 S, PRC"
    },
    {
      id: "12518",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17309.jpeg",
      name: "Main St / SR-55 @ 700 E, PRC"
    },
    {
      id: "11875",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16683.jpeg",
      name: "Main St / SR-63 @ Center St, BCC"
    },
    {
      id: "11537",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16346.jpeg",
      name: "Main St / US-191 @ 300 S, MAB"
    },
    {
      id: "9925",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14634.jpeg",
      name: "Main St / US-191 @ 400 E / Jackson St, MAB"
    },
    {
      id: "12026",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16834.jpeg",
      name: "Main St / US-191 @ Center St / US-491, MNC"
    },
    {
      id: "9923",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14632.jpeg",
      name: "Main St / US-191 @ Center St, MAB"
    },
    {
      id: "9924",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14633.jpeg",
      name: "Main St / US-191 @ Kane Creek Blvd, MAB"
    },
    {
      id: "10496",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15305.jpeg",
      name: "Main St / US-40 @ 100 S / MP 143.4, VNL"
    },
    {
      id: "10636",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15445.jpeg",
      name: "Main St / US-40 @ 100 S / MP 17, HBR"
    },
    {
      id: "11910",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16718.jpeg",
      name: "Main St / US-40 @ 2000 W / Hancock Cove Rd / MP 111.5, RSV"
    },
    {
      id: "11901",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16709.jpeg",
      name: "Main St / US-40 @ 2100 W / MP 141.64, VNL"
    },
    {
      id: "10637",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15446.jpeg",
      name: "Main St / US-40 @ 500 N / MP 16.4, HBR"
    },
    {
      id: "11909",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16717.jpeg",
      name: "Main St / US-40 @ Center St / SR-87 / MP 86.54, DCH"
    },
    {
      id: "10628",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15437.jpeg",
      name: "Main St / US-40 @ US-189 / 1200 S / MP 17.94, HBR"
    },
    {
      id: "10495",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15304.jpeg",
      name: "Main St / US-40 @ Vernal Ave / US-191 / MP 144.3, VNL"
    },
    {
      id: "10249",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14958.jpeg",
      name: "Main St / US-89 / SR-145 @ State St / US-89, AFK"
    },
    {
      id: "10556",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15365.jpeg",
      name: "Main St / US-89 @ 100 E / Alpine Hwy / SR-74, AFK"
    },
    {
      id: "11840",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16648.jpeg",
      name: "Main St / US-89 @ 1400 N / SR-75, SPV"
    },
    {
      id: "9640",
      url: "http://www.udottraffic.utah.gov/1_devices/aux438.jpeg",
      name: "Main St / US-89 @ 2600 S / SR-93, BTF"
    },
    {
      id: "10398",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15107.jpeg",
      name: "Main St / US-89 @ 400 S / SR-77, SPV"
    },
    {
      id: "12264",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17063.jpeg",
      name: "Main St / US-89 @ 750 N / SR-315, WIL"
    },
    {
      id: "11891",
      url: "http://www.udottraffic.utah.gov/1_devices/US89mile116.gif",
      name: "Main St / US-89 Liveview SB @ 50 S / MP 116, HAT"
    },
    {
      id: "11652",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16460.jpeg",
      name: "Main St / US-89/91 @ 100 S, LGN"
    },
    {
      id: "11672",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16480.jpeg",
      name: "Main St / US-89/91 @ 200 N / SR-30, LGN"
    },
    {
      id: "11653",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16461.jpeg",
      name: "Main St / US-89/91 @ 400 N / US-89, LGN"
    },
    {
      id: "11702",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16510.jpeg",
      name: "Main St / US-91 @ 1000 N, LGN"
    },
    {
      id: "11709",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16517.jpeg",
      name: "Main St / US-91 @ 1400 N, LGN"
    },
    {
      id: "11655",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16463.jpeg",
      name: "Main St / US-91 @ 2500 N / SR-252, NLG"
    },
    {
      id: "11671",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16479.jpeg",
      name: "Main St / US-91 @ 300 S, SMF"
    },
    {
      id: "11703",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16511.jpeg",
      name: "Main St / US-91 @ Hyde Park Ln, HYD"
    },
    {
      id: "11525",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16334.jpeg",
      name: "Main St @ 100 S, STG"
    },
    {
      id: "11527",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16336.jpeg",
      name: "Main St @ 700 S, STG"
    },
    {
      id: "11715",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16523.jpeg",
      name: "Mall Dr / Merril Rd / 2600 S @ Sandia Rd / 3000 E, STG"
    },
    {
      id: "12077",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16885.jpeg",
      name: "Mario Capecchi Dr / SR-282 @ 1900 E, SLC"
    },
    {
      id: "10676",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15485.jpeg",
      name: "Minuteman Dr @ 12450 S, DPR"
    },
    {
      id: "11016",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15825.jpeg",
      name: "Mountain View / SR-85 NB @ 12600 S, RVT"
    },
    {
      id: "11017",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15826.jpeg",
      name: "Mountain View / SR-85 NB @ 13400 S, RVT"
    },
    {
      id: "12054",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16862.jpeg",
      name: "Mountain View / SR-85 NB @ 4100 S, WVC"
    },
    {
      id: "12052",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16860.jpeg",
      name: "Mountain View / SR-85 NB @ 4565 S, WVC"
    },
    {
      id: "12051",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16859.jpeg",
      name: "Mountain View / SR-85 NB @ 4825 S, WVC"
    },
    {
      id: "11062",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15871.jpeg",
      name: "Mountain View / SR-85 NB @ 5400 S / SR-173, WVC"
    },
    {
      id: "11059",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15868.jpeg",
      name: "Mountain View / SR-85 NB @ 7600 S, WJD"
    },
    {
      id: "11061",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15870.jpeg",
      name: "Mountain View / SR-85 NB @ 7800 S, WJD"
    },
    {
      id: "11060",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15869.jpeg",
      name: "Mountain View / SR-85 NB @ 9000 S / SR-209, WJD"
    },
    {
      id: "12451",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17242.jpeg",
      name: "Mountain View / SR-85 NB @ Harvest Hills Blvd, SSP"
    },
    {
      id: "11018",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15827.jpeg",
      name: "Mountain View / SR-85 NB @ Porter Rockwell Blvd, HRR"
    },
    {
      id: "11756",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16564.jpeg",
      name: "Mountain View / SR-85 NB @ South Jordan Pkwy / 11000 S, SJO"
    },
    {
      id: "11357",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-85%20Juniper-all.gif",
      name: "Mountain View / SR-85 RWIS NB @ 14600 S / Juniper, HRR"
    },
    {
      id: "11022",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15831.jpeg",
      name: "Mountain View / SR-85 SB @ 11450 S, SJO"
    },
    {
      id: "11019",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15828.jpeg",
      name: "Mountain View / SR-85 SB @ 12200 S, HRR"
    },
    {
      id: "11025",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15834.jpeg",
      name: "Mountain View / SR-85 SB @ 13200 S, RVT"
    },
    {
      id: "12053",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16861.jpeg",
      name: "Mountain View / SR-85 SB @ 4350 S, WVC"
    },
    {
      id: "11056",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15865.jpeg",
      name: "Mountain View / SR-85 SB @ 5800 S, WVC"
    },
    {
      id: "11058",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15867.jpeg",
      name: "Mountain View / SR-85 SB @ 6200 S, WVC"
    },
    {
      id: "11057",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15866.jpeg",
      name: "Mountain View / SR-85 SB @ 9860 S, WJD"
    },
    {
      id: "11020",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15829.jpeg",
      name: "Mountain View / SR-85 SB @ Daybreak Pkwy, SJO"
    },
    {
      id: "11868",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16676.jpeg",
      name: "Mountain View / SR-85 SB @ Lake Ave / 11400 S, SJO"
    },
    {
      id: "11021",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15830.jpeg",
      name: "Mountain View / SR-85 SB @ Old Bingham Hwy, WJD"
    },
    {
      id: "12050",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16858.jpeg",
      name: "Mountain View / SR-85 SB @ Upper Ridge Rd / 5100 S, WVC"
    },
    {
      id: "11064",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15873.jpeg",
      name: "New Bingham Hwy @ 4800 W, WJD"
    },
    {
      id: "11063",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15872.jpeg",
      name: "New Bingham Hwy @ 5600 W, WJD"
    },
    {
      id: "11383",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16192.jpeg",
      name: "North County Blvd / 1100 E / SR-129 @ 300 N, AFK"
    },
    {
      id: "11384",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16193.jpeg",
      name: "North County Blvd / 1100 E / SR-129 @ 700 N, AFK"
    },
    {
      id: "11382",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16191.jpeg",
      name:
        "North County Blvd / 1100 E, AFK / 2000 W, PLG / SR-129 @ 50 S, AFK / 1100 N, PLG, AFK"
    },
    {
      id: "11385",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16194.jpeg",
      name:
        "North County Blvd / 4800 W / SR-129 @ Cedar Hills Dr / 10100 N, HLD"
    },
    {
      id: "11779",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16587.jpeg",
      name: "North County Blvd / 900 E / SR-129 @ 1100 N, AFK"
    },
    {
      id: "9895",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14604.jpeg",
      name:
        "North Little Cottonwood Rd / Little Cottonwood Canyon Rd / SR-210 @ Little Cottonwood Rd / SR-209, SL"
    },
    {
      id: "11800",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16608.jpeg",
      name:
        "North Little Cottonwood Rd / Wasatch Blvd / 3600 E / SR-210 @ Wasatch Blvd / 8900 S, CWH"
    },
    {
      id: "181",
      url: "http://www.udottraffic.utah.gov/1_devices/aux181.jpeg",
      name: "North Temple St @ 200 W, SLC"
    },
    {
      id: "9829",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14539.jpeg",
      name: "Orem Blvd @ 400 S, ORM"
    },
    {
      id: "11065",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15874.jpeg",
      name: "Park Ave / SR-224 @ Empire Ave / Deer Valley Dr / SR-224, PKC"
    },
    {
      id: "9385",
      url: "http://www.udottraffic.utah.gov/1_devices/aux9201.jpeg",
      name: "Park Ave / SR-224 @ Kearns Blvd / SR-248, PKC"
    },
    {
      id: "11953",
      url:
        "http://www.udottraffic.utah.gov/1_devices/SR-224-MeadowsDrive-ParkCity.jpeg",
      name: "Park Ave / SR-224 RWIS @ Meadows Dr, PKC"
    },
    {
      id: "12067",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16875.jpeg",
      name: "Parrish Ln / 400 N / SR-105 @ Main St / SR-106, CVL"
    },
    {
      id: "10547",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15356.jpeg",
      name: "Pioneer Crossing / SR-145 @ 1020 W, AFK"
    },
    {
      id: "10537",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15346.jpeg",
      name: "Pioneer Crossing / SR-145 @ 10600 W, SSP"
    },
    {
      id: "10541",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15350.jpeg",
      name: "Pioneer Crossing / SR-145 @ 1100 W, LHI"
    },
    {
      id: "10539",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15348.jpeg",
      name: "Pioneer Crossing / SR-145 @ 1700 W, LHI"
    },
    {
      id: "10538",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15347.jpeg",
      name: "Pioneer Crossing / SR-145 @ 2300 W / Saratoga Rd, LHI"
    },
    {
      id: "10543",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15352.jpeg",
      name: "Pioneer Crossing / SR-145 @ 300 E, LHI"
    },
    {
      id: "10542",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15351.jpeg",
      name: "Pioneer Crossing / SR-145 @ 500 W, LHI"
    },
    {
      id: "10619",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15428.jpeg",
      name: "Pioneer Crossing / SR-145 @ Center St, LHI"
    },
    {
      id: "10545",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15354.jpeg",
      name: "Pioneer Crossing / SR-145 @ Mill Pond Rd, LHI"
    },
    {
      id: "11534",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16343.jpeg",
      name: "Pioneer Pkwy @ Rachel Dr, SCL"
    },
    {
      id: "11391",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16200.jpeg",
      name: "Pleasant Grove Blvd @ 1300 W / Proctor Ln, PLG"
    },
    {
      id: "10558",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15367.jpeg",
      name:
        "Pleasant Grove Blvd @ 2000 W / North County Blvd, PLG / 700 N, LDN / SR-129, PLG"
    },
    {
      id: "11489",
      url: "http://www.udottraffic.utah.gov/1_devices/RWIS%20Portable2.gif",
      name: "Portable RWIS 2"
    },
    {
      id: "12164",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16972.jpeg",
      name: "Portable RWIS 3"
    },
    {
      id: "11490",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16299.jpeg",
      name: "Portable RWIS 4"
    },
    {
      id: "11674",
      url: "http://www.udottraffic.utah.gov/1_devices/RWIS%20Portable5.gif",
      name: "Portable RWIS 5"
    },
    {
      id: "11491",
      url: "http://www.udottraffic.utah.gov/1_devices/Portable_Traffic_1.jpg",
      name: "Portable Traffic #1"
    },
    {
      id: "11492",
      url: "http://www.udottraffic.utah.gov/1_devices/Portable_Traffic2.jpg",
      name: "Portable Traffic #2"
    },
    {
      id: "11024",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15833.jpeg",
      name: "Porter Rockwell Blvd @ 2300 W, HRR"
    },
    {
      id: "9543",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14310.jpeg",
      name: "Provo Canyon Rd / US-189 @ 800 N / SR-52, ORM"
    },
    {
      id: "10336",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15045.jpeg",
      name:
        "Provo Canyon Rd / US-189 @ Alpine Scenic Hwy / SR-92 / MP 14.26, UT"
    },
    {
      id: "10333",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15042.jpeg",
      name: "Provo Canyon Rd / US-189 @ Bridal Veil Falls / MP 11.15, UT"
    },
    {
      id: "10332",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15041.jpeg",
      name: "Provo Canyon Rd / US-189 @ Canyon Glen Park / MP 9.98, UT"
    },
    {
      id: "10331",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15040.jpeg",
      name: "Provo Canyon Rd / US-189 @ Canyon View Park / MP 8.46, PVO"
    },
    {
      id: "10339",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15048.jpeg",
      name: "Provo Canyon Rd / US-189 @ Lower Deer Creek Rd / MP 17.14, WA"
    },
    {
      id: "10338",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15047.jpeg",
      name: "Provo Canyon Rd / US-189 @ Meadow Dr / MP 16.25, WA"
    },
    {
      id: "10334",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15043.jpeg",
      name: "Provo Canyon Rd / US-189 @ Milepost 12.21, UT"
    },
    {
      id: "11705",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16513.jpeg",
      name: "Provo Canyon Rd / US-189 @ Mouth of Provo Canyon / MP 8.26, ORM"
    },
    {
      id: "11706",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16514.jpeg",
      name: "Provo Canyon Rd / US-189 @ Springdell / MP 9.68, UT"
    },
    {
      id: "10335",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15044.jpeg",
      name: "Provo Canyon Rd / US-189 @ Vivian Park / MP 13.16, UT"
    },
    {
      id: "10214",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14923.jpeg",
      name: "Red Cliff Dr / Telegraph St @ Green Spring Dr, WAS"
    },
    {
      id: "11819",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16627.jpeg",
      name: "Red Cliffs Dr @ Crossover St, STG"
    },
    {
      id: "10213",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14922.jpeg",
      name: "Red Hills Pkwy / Buena Vista Dr @ Green Spring Dr, WAS"
    },
    {
      id: "10219",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14928.jpeg",
      name: "Red Hills Pkwy @ 1000 E, STG"
    },
    {
      id: "11820",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16628.jpeg",
      name: "Red Hills Pkwy @ Crossover St, STG"
    },
    {
      id: "11535",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16344.jpeg",
      name: "Red Hills Pkwy @ Skyline Dr / 200 E, STG"
    },
    {
      id: "11828",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16636.jpeg",
      name: "Redwood Rd / SR-68 @ 10400 S / South Jordan Pkwy / SR-151, SJO"
    },
    {
      id: "11015",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15824.jpeg",
      name: "Redwood Rd / SR-68 @ 11400 S, SJO"
    },
    {
      id: "305",
      url: "http://www.udottraffic.utah.gov/1_devices/aux305.jpeg",
      name: "Redwood Rd / SR-68 @ 12600 S / SR-71, RVT"
    },
    {
      id: "12260",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17059.jpeg",
      name: "Redwood Rd / SR-68 @ 12800 S, RVT"
    },
    {
      id: "12261",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17060.jpeg",
      name: "Redwood Rd / SR-68 @ 13400 S, RVT"
    },
    {
      id: "10328",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15037.jpeg",
      name: "Redwood Rd / SR-68 @ 14400 S / SR-140, BLF"
    },
    {
      id: "10723",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15532.jpeg",
      name: "Redwood Rd / SR-68 @ 2100 N / SR-194, LHI"
    },
    {
      id: "10222",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14931.jpeg",
      name: "Redwood Rd / SR-68 @ 2100 S, SLC"
    },
    {
      id: "10887",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15696.jpeg",
      name: "Redwood Rd / SR-68 @ 2320 S, WVC"
    },
    {
      id: "9266",
      url: "http://www.udottraffic.utah.gov/1_devices/aux9173.jpeg",
      name: "Redwood Rd / SR-68 @ 3100 S, WVC"
    },
    {
      id: "176",
      url: "http://www.udottraffic.utah.gov/1_devices/aux176.jpeg",
      name: "Redwood Rd / SR-68 @ 3500 S / SR-171, WVC"
    },
    {
      id: "11949",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16757.jpeg",
      name: "Redwood Rd / SR-68 @ 4100 S, TAY"
    },
    {
      id: "10733",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15542.jpeg",
      name: "Redwood Rd / SR-68 @ 4700 S / SR-266, TAY"
    },
    {
      id: "9867",
      url: "http://www.udottraffic.utah.gov/1_devices/aux2123.jpeg",
      name: "Redwood Rd / SR-68 @ 5400 S / SR-173, TAY"
    },
    {
      id: "10554",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15363.jpeg",
      name: "Redwood Rd / SR-68 @ 6200 S, TAY"
    },
    {
      id: "11963",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16771.jpeg",
      name: "Redwood Rd / SR-68 @ 700 N, SLC"
    },
    {
      id: "9630",
      url: "http://www.udottraffic.utah.gov/1_devices/aux309.jpeg",
      name: "Redwood Rd / SR-68 @ 7000 S / SR-48, WJD"
    },
    {
      id: "9557",
      url: "http://www.udottraffic.utah.gov/1_devices/aux308.jpeg",
      name: "Redwood Rd / SR-68 @ 7800 S / SR-48, WJD"
    },
    {
      id: "11466",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16275.jpeg",
      name: "Redwood Rd / SR-68 @ 8200 S / Sugar Factory Rd, WJD"
    },
    {
      id: "9555",
      url: "http://www.udottraffic.utah.gov/1_devices/aux307.jpeg",
      name: "Redwood Rd / SR-68 @ 9000 S / SR-209, WJD"
    },
    {
      id: "12449",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17240.jpeg",
      name: "Redwood Rd / SR-68 @ Center St, NSL"
    },
    {
      id: "12144",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16952.jpeg",
      name: "Redwood Rd / SR-68 @ Grandview Blvd, SSP"
    },
    {
      id: "11968",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16776.jpeg",
      name: "Redwood Rd / SR-68 @ North Temple St, SLC"
    },
    {
      id: "12438",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17229.jpeg",
      name: "Redwood Rd / SR-68 @ Parkway Blvd / Founders Blvd, SSP"
    },
    {
      id: "10536",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15345.jpeg",
      name: "Redwood Rd / SR-68 @ Pioneer Crossing / SR-145, SSP"
    },
    {
      id: "11646",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16454.jpeg",
      name: "Redwood Rd / SR-68 @ Pony Express Pkwy, SSP"
    },
    {
      id: "11023",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15832.jpeg",
      name: "Redwood Rd / SR-68 @ Porter Rockwell Blvd, BLF"
    },
    {
      id: "12428",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17221.jpeg",
      name: "Redwood Rd / SR-68 @ Ring Rd, SSP"
    },
    {
      id: "10330",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15039.jpeg",
      name: "Redwood Rd / SR-68 @ SR-73 / Cedar Fort Rd, SSP"
    },
    {
      id: "12429",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17222.jpeg",
      name: "Redwood Rd / SR-68 @ Stillwater Dr, SSP"
    },
    {
      id: "10329",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15038.jpeg",
      name: "Redwood Rd / SR-68 @ W. G. Williams Ave, UT"
    },
    {
      id: "10766",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-68-mp-23.gif",
      name: "Redwood Rd / SR-68 Liveview SB @ Milepost 22.93, UT"
    },
    {
      id: "12078",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR68%20MP%2016.gif",
      name: "Redwood Rd / SR-68 RWIS SB @ Milepost 16.3, UT"
    },
    {
      id: "10382",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15091.jpeg",
      name: "River Rd @ 1450 S, STG"
    },
    {
      id: "11531",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16340.jpeg",
      name: "River Rd @ 2450 S, STG"
    },
    {
      id: "10216",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14925.jpeg",
      name: "River Rd @ 700 S / Foremaster Dr, STG"
    },
    {
      id: "11713",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16521.jpeg",
      name: "River Rd @ Brigham Rd, STG"
    },
    {
      id: "11532",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16341.jpeg",
      name: "River Rd @ Fort Pierce Dr, STG"
    },
    {
      id: "11754",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16562.jpeg",
      name: "River Rd @ Horseman Park Dr, STG"
    },
    {
      id: "10217",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14926.jpeg",
      name: "River Rd @ Riverside Dr, STG"
    },
    {
      id: "9404",
      url: "http://www.udottraffic.utah.gov/1_devices/aux424.jpeg",
      name: "Riverdale Rd / SR-26 @ 300 W, RDL"
    },
    {
      id: "9126",
      url: "http://www.udottraffic.utah.gov/1_devices/aux316.jpeg",
      name: "Riverdale Rd / SR-26 @ 900 W, RDL"
    },
    {
      id: "9345",
      url: "http://www.udottraffic.utah.gov/1_devices/aux421.jpeg",
      name: "Riverdale Rd / SR-26 @ Wall Ave / 40th St / SR-204, RDL"
    },
    {
      id: "12265",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17064.jpeg",
      name: "Riverside Dr @ 2450 E, STG"
    },
    {
      id: "11714",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16522.jpeg",
      name: "Riverside Dr @ Mall Dr, STG"
    },
    {
      id: "11529",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16338.jpeg",
      name: "Santa Clara Dr @ Canyon View Dr, SCL"
    },
    {
      id: "11887",
      url: "http://www.udottraffic.utah.gov/1_devices/SR196mile16.gif",
      name: "Skull Valley Rd / SR-196 Liveview NB @ Milepost 16, TE"
    },
    {
      id: "10381",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15090.jpeg",
      name: "Snow Canyon Pkwy @ Dixie Downs Rd / Lakota Dr, STG"
    },
    {
      id: "10255",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14964.jpeg",
      name: "South Campus Dr / SR-282 @ 1725 E, SLC"
    },
    {
      id: "10256",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14965.jpeg",
      name: "South Campus Dr / SR-282 @ Mario Capecchi Dr, SLC"
    },
    {
      id: "11826",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16634.jpeg",
      name: "South Jordan Pkwy / 10400 S / SR-151 @ 2200 W, SJO"
    },
    {
      id: "10717",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15526.jpeg",
      name: "South Temple St @ 700 E / I St, SLC"
    },
    {
      id: "9436",
      url: "http://www.udottraffic.utah.gov/1_devices/aux428.jpeg",
      name: "South Temple St @ Main St, SLC"
    },
    {
      id: "10729",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15538.jpeg",
      name: "Southern Pkwy / SR-7 @ Desert Canyons Pkwy / MP 6.5, STG"
    },
    {
      id: "10727",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15536.jpeg",
      name: "Southern Pkwy / SR-7 @ Milepost 1.67, STG"
    },
    {
      id: "10728",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15537.jpeg",
      name: "Southern Pkwy / SR-7 @ Milepost 5.14, STG"
    },
    {
      id: "10730",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15539.jpeg",
      name: "Southern Pkwy / SR-7 @ Milepost 7.24, STG"
    },
    {
      id: "10731",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15540.jpeg",
      name: "Southern Pkwy / SR-7 EB @ Airport Pkwy / MP 7.7, STG"
    },
    {
      id: "10732",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15541.jpeg",
      name: "Southern Pkwy / SR-7 WB @ Airport Pkwy / MP 7.68, STG"
    },
    {
      id: "10726",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15535.jpeg",
      name: "Southern Pkwy / SR-7 WB @ River Rd / Hwy 5 / MP 3.76, STG"
    },
    {
      id: "11269",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-10%20MP%2060-all.gif",
      name: "SR-10 Liveview NB @ SR-122 / MP 60.93, CC"
    },
    {
      id: "11888",
      url: "http://www.udottraffic.utah.gov/1_devices/SR10mile18.gif",
      name: "SR-10 Liveview SB @ Milepost 18, EM"
    },
    {
      id: "11889",
      url: "http://www.udottraffic.utah.gov/1_devices/SR10mile33.gif",
      name: "SR-10 Liveview SB @ Milepost 33, EM"
    },
    {
      id: "12377",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-10%20@%20PoisonSpringBench.gif",
      name: "SR-10 RWIS SB @ Poison Spring Bench / MP 54.1, EM"
    },
    {
      id: "11091",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-100-MP-16-all.gif",
      name: "SR-100 Liveview NB @ US-50 / MP 16.9, MD"
    },
    {
      id: "10838",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-101-MP-21.gif",
      name: "SR-101 Liveview EB @ Hardware Ranch / MP 21.74, CA"
    },
    {
      id: "10800",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-12-MP-14.gif",
      name: "SR-12 Liveview EB @ Milepost 14.5, GA"
    },
    {
      id: "10799",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-12-MP-7.gif",
      name: "SR-12 Liveview EB @ Milepost 7.25, GA"
    },
    {
      id: "10828",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-12-MP-97.gif",
      name: "SR-12 Liveview EB @ Milepost 97.28, GA"
    },
    {
      id: "10815",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-12-MP-109.gif",
      name: "SR-12 Liveview NB @ GA/WE County Line / MP 109.84, GA"
    },
    {
      id: "10813",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-12-MP-41.gif",
      name: "SR-12 Liveview NB @ Milepost 41.16, GA"
    },
    {
      id: "10780",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20Boulder%20Summit%20N.jpg",
      name: "SR-12 RWIS NB @ Boulder Summit / MP 100.86, GA"
    },
    {
      id: "11480",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-121-mp-25.gif",
      name: "SR-121 Liveview EB @ Milepost 25.9, UN"
    },
    {
      id: "10832",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-130-mp-31.gif",
      name: "SR-130 Liveview NB @ Milepost 31.5, RN"
    },
    {
      id: "10804",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-132-MP20.gif",
      name: "SR-132 Liveview EB @ Milepost 20, JU"
    },
    {
      id: "10835",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-132-mp-44.gif",
      name: "SR-132 Liveview EB @ Milepost 43.98, SP"
    },
    {
      id: "12058",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16866.jpeg",
      name: "SR-138 @ Stansbury Pkwy, STP"
    },
    {
      id: "10869",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-14-mp17.gif",
      name: "SR-14 Liveview EB @ Milepost 16.77, RN"
    },
    {
      id: "10816",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-14-mp-20.gif",
      name: "SR-14 Liveview EB @ Milepost 20.38, RN"
    },
    {
      id: "11518",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-14-MP31.gif",
      name: "SR-14 Liveview WB @ Lake Dr / MP 30.95, KN"
    },
    {
      id: "11094",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-142-MP-4-all.gif",
      name: "SR-142 / 200 E Liveview NB @ 9650 N / MP 4.1, CA"
    },
    {
      id: "10805",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-143-MP-22.gif",
      name: "SR-143 Liveview EB @ Milepost 21.91, RN"
    },
    {
      id: "10770",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-143-MP-18.gif",
      name: "SR-143 Liveview NB @ Brian Head / MP 18.19, RN"
    },
    {
      id: "11630",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-143-MP13.gif",
      name: "SR-143 Liveview NB @ Milepost 13.05. RN"
    },
    {
      id: "10817",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-143-MP31.gif",
      name: "SR-143 Liveview SB @ Milepost 31.14, GA"
    },
    {
      id: "10839",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-143mile25-all.gif",
      name: "SR-143 Liveview WB @ Milepost 25.13, RN"
    },
    {
      id: "11479",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-150-mp-50.gif",
      name: "SR-150 Liveview SB @ Milepost 50, SU"
    },
    {
      id: "11508",
      url: "http://www.udottraffic.utah.gov/1_devices/Bald-Mountain.gif",
      name: "SR-150 RWIS EB @ Bald Mountain Pass / MP 29.2, SU"
    },
    {
      id: "11523",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-153-Summit.gif",
      name: "SR-153 RWIS EB @ Puffer Lake / MP 20.24, BV"
    },
    {
      id: "10863",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-158-mp11.gif",
      name: "SR-158 Liveview NB @ Powder Mountain / MP 11.62, WB"
    },
    {
      id: "10753",
      url: "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-16-MP-1.gif",
      name: "SR-16 RWIS SB @ Milepost 0.54, RI"
    },
    {
      id: "11469",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-165-MP-2-all.gif",
      name: "SR-165 / 200 W Liveview @ 8800 S / MP 0.73, PDS"
    },
    {
      id: "10749",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-167%20TrappersLoop.gif",
      name:
        "SR-167 / Trappers Loop RWIS SB @ SR-226 / Snow Basin Rd / MP 6.92, WB"
    },
    {
      id: "11628",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-18-MP35.gif",
      name: "SR-18 Liveview SB @ Milepost 35.62, WN"
    },
    {
      id: "10794",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-199-mp-0.gif",
      name: "SR-199 Liveview WB @ Skull Valley Rd / SR-196 / MP 0.07, DUG"
    },
    {
      id: "11455",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-199-JohnsonsPass.gif",
      name: "SR-199 RWIS EB @ Johnson Pass / MP 12, TE"
    },
    {
      id: "10801",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-20-mp-10.gif",
      name: "SR-20 Liveview SB @ Milepost 10.02, RN"
    },
    {
      id: "10754",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR20%20@%20MP10.gif",
      name: "SR-20 RWIS NB @ Milepost 10.06, RN"
    },
    {
      id: "73",
      url: "http://www.udottraffic.utah.gov/1_devices/aux73.jpeg",
      name: "SR-201 / N Frontage Rd @ 3200 W / MP 13.7, SLC"
    },
    {
      id: "11933",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16741.jpeg",
      name: "SR-201 @ 1275 W / MP 15.83, WVC"
    },
    {
      id: "9673",
      url: "http://www.udottraffic.utah.gov/1_devices/aux75.jpeg",
      name: "SR-201 @ 1600 W / MP 15.47, SLC"
    },
    {
      id: "11692",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16500.jpeg",
      name: "SR-201 @ 2100 W / MP 14.82, SLC"
    },
    {
      id: "11693",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16501.jpeg",
      name: "SR-201 @ 2500 W / MP 14.42, SLC"
    },
    {
      id: "74",
      url: "http://www.udottraffic.utah.gov/1_devices/aux74.jpeg",
      name: "SR-201 @ 3000 W / MP 14, WVC"
    },
    {
      id: "71",
      url: "http://www.udottraffic.utah.gov/1_devices/aux71.jpeg",
      name: "SR-201 @ 4600 W / MP 12.11, WVC"
    },
    {
      id: "287",
      url: "http://www.udottraffic.utah.gov/1_devices/aux287.jpeg",
      name: "SR-201 @ 5600 W / SR-172 / MP 10.8, WVC"
    },
    {
      id: "11611",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16420.jpeg",
      name: "SR-201 @ 6200 W / MP 10.04, WVC"
    },
    {
      id: "11612",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16421.jpeg",
      name: "SR-201 @ 6800 W / MP 9.13, WVC"
    },
    {
      id: "9674",
      url: "http://www.udottraffic.utah.gov/1_devices/aux256.jpeg",
      name: "SR-201 @ 7200 W / MP 8.7, MAG"
    },
    {
      id: "79",
      url: "http://www.udottraffic.utah.gov/1_devices/aux79.jpeg",
      name: "SR-201 @ 800 W / MP 16.7, SSL"
    },
    {
      id: "257",
      url: "http://www.udottraffic.utah.gov/1_devices/aux257.jpeg",
      name: "SR-201 @ 8400 W / SR-111 / MP 7.2, MAG"
    },
    {
      id: "77",
      url: "http://www.udottraffic.utah.gov/1_devices/aux77.jpeg",
      name: "SR-201 @ 900 W / MP 16.6, SSL"
    },
    {
      id: "11669",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16477.jpeg",
      name: "SR-201 @ Milepost 3.2, SL"
    },
    {
      id: "11670",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16478.jpeg",
      name: "SR-201 @ Milepost 6.0, MAG"
    },
    {
      id: "11637",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16446.jpeg",
      name: "SR-201 @ SR-202 / MP 2.78, SL"
    },
    {
      id: "76",
      url: "http://www.udottraffic.utah.gov/1_devices/aux76.jpeg",
      name: "SR-201 EB @ 1300 W / MP 15.8, WVC"
    },
    {
      id: "72",
      url: "http://www.udottraffic.utah.gov/1_devices/aux72.jpeg",
      name: "SR-201 EB @ Bangerter Hwy / SR-154 / MP 12.82, WVC"
    },
    {
      id: "10689",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15498.jpeg",
      name: "SR-201 WB @ Bangerter Hwy / SR-154 / MP 12.8, SLC"
    },
    {
      id: "10842",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-21-mp-44.gif",
      name: "SR-21 Liveview EB @ Milepost 44.93, BV"
    },
    {
      id: "11098",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-21-MP-96-all.gif",
      name: "SR-21 Liveview EB @ Minersville Lake / MP 96.1, BV"
    },
    {
      id: "9386",
      url: "http://www.udottraffic.utah.gov/1_devices/aux9236.jpeg",
      name: "SR-224 @ Olympic Pkwy / Newpark Blvd /  MP 11.16, SU"
    },
    {
      id: "11129",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-224-MP-8-all.gif",
      name:
        "SR-224 Liveview SB @ Canyon Resort Dr / Park West Village / MP 8.76, SU"
    },
    {
      id: "10786",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-226-Combined.gif",
      name: "SR-226 Liveview EB @ Snow Basin / MP 0.7, WB"
    },
    {
      id: "10829",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-24-mp-41.gif",
      name: "SR-24 Liveview EB @ Milepost 40.98, WE"
    },
    {
      id: "10837",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-24-mp-22.gif",
      name: "SR-24 Liveview NB @ Milepost 22.45, SE"
    },
    {
      id: "11270",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-24-MP-30.gif",
      name: "SR-24 Liveview SB @ Koosharem Reservoir / MP 30.62, SE"
    },
    {
      id: "11252",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-248-mile4-7all.gif",
      name:
        "SR-248 / 1040 W Liveview EB @ Jordanelle Pkwy / Browns Canyon Rd / 13970 N / MP 4.88, WA"
    },
    {
      id: "10759",
      url: "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR248.gif",
      name: "SR-248 RWIS EB @ Milepost 8.95, WA"
    },
    {
      id: "11069",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-25-MP-3-all.gif",
      name: "SR-25 Liveview EB @ Fish Lake / MP 3.97, SE"
    },
    {
      id: "11631",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-257-MP33.gif",
      name: "SR-257 Liveview NB @ Milepost 33.27, MD"
    },
    {
      id: "11618",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-276%20MP%2021.gif",
      name: "SR-276 Liveview NB @  Milepost 20.58, GA"
    },
    {
      id: "10866",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-28-mp-15.gif",
      name: "SR-28 Liveview SB @ Milepost 14.96, SP"
    },
    {
      id: "11760",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-30%20mp%20112.gif",
      name: "SR-30 Liveview EB @ Kimball Ln / MP 112.53, GRC"
    },
    {
      id: "11107",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-30-MP-2-all.gif",
      name: "SR-30 Liveview EB @ Milepost 2.3, BE"
    },
    {
      id: "11329",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-30-mp-124.gif",
      name: "SR-30 Liveview EB @ Otter Creek Rd / MP 124.15, RI"
    },
    {
      id: "10802",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-30-MP-131-all.gif",
      name: "SR-30 Liveview EB @ SR-16 / Manhead Rd / MP 131.68, RI"
    },
    {
      id: "11477",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-30-mp-44.gif",
      name: "SR-30 Liveview EB @ Warm Springs Rd / MP 44, BE"
    },
    {
      id: "10824",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR30%20in%20Box%20Elder%20-%20Cache%20County.gif",
      name: "SR-30 RWIS WB @ BE/CA County Line / MP 99.24, BE"
    },
    {
      id: "10773",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR30%20@%20Curlew%20Jct.gif",
      name: "SR-30 RWIS WB @ Curlew Junction / MP 72.36, BE"
    },
    {
      id: "11110",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-31-MP-18.gif",
      name: "SR-31 Liveview EB @ Miller Flat Rd / MP 18.38, SP"
    },
    {
      id: "10768",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-31-mp-13.gif",
      name: "SR-31 Liveview WB @ Milepost 13.21, SP"
    },
    {
      id: "10746",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR31%20@%20Skyline.jpg",
      name: "SR-31 RWIS WB @ Skyline Dr / MP 11.79, SP"
    },
    {
      id: "11027",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-32%20Mile%204-all.gif",
      name: "SR-32 Liveview EB @ Milepost 4.17, WA"
    },
    {
      id: "11476",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-32-mp-23.gif",
      name: "SR-32 Liveview SB @ Milepost 23, SU"
    },
    {
      id: "11704",
      url: "http://www.udottraffic.utah.gov/1_devices/SR32-Mile19.gif",
      name: "SR-32 Liveview WB @ Milepost 19.55, SU"
    },
    {
      id: "12385",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-32%20@%20Marion.gif",
      name: "SR-32 RWIS NB @ Rob Young Ln / MP 16.46, SU"
    },
    {
      id: "10782",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR35%20@%20Wolf%20Creek.gif",
      name: "SR-35 RWIS @ Wolf Creek / MP 9.92, WA"
    },
    {
      id: "11499",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS-SR35-Wolf-Creek-Pass.gif",
      name: "SR-35 RWIS EB @ Wolf Creek Pass / MP 19.33, WA"
    },
    {
      id: "10298",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15007.jpeg",
      name: "SR-36 @ Erda Way / 4100 N, ERD"
    },
    {
      id: "12209",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17017.jpeg",
      name: "SR-36 @ Saddleback Blvd, TE (Local)"
    },
    {
      id: "10294",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15003.jpeg",
      name: "SR-36 @ SR-138 / Mills Jct / Center St, STP"
    },
    {
      id: "10295",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15004.jpeg",
      name: "SR-36 @ Village Blvd, STP"
    },
    {
      id: "10791",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-36-mp18.gif",
      name: "SR-36 Liveview SB @ Milepost 17.88, TE"
    },
    {
      id: "10785",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-39-Mile13.gif",
      name: "SR-39 / Ogden Canyon Liveview EB @ SR-158 / MP 13.8, WB"
    },
    {
      id: "10820",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-39-mp36.gif",
      name: "SR-39 Liveview EB @ Monte Cristo / MP 36.84, WB"
    },
    {
      id: "10772",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-42-mp-0.gif",
      name: "SR-42 Liveview EB @ Idaho State Line / MP 0.43, BE"
    },
    {
      id: "10784",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-44-mp-9.gif",
      name: "SR-44 Liveview WB @ Milepost 8.98, DG"
    },
    {
      id: "10851",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-45-MP-15-all.gif",
      name: "SR-45 Liveview SB @ Milepost 15.55, UN"
    },
    {
      id: "12317",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17116.jpeg",
      name: "SR-51 @ 1600 S, SPV"
    },
    {
      id: "12065",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16873.jpeg",
      name: "SR-51 @ Expressway Ln / 980 N, SPF"
    },
    {
      id: "11614",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-56-MP0-53.gif",
      name: "SR-56 Liveview EB @ Milepost 0.53, RN"
    },
    {
      id: "11111",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-56-MP42-all.gif",
      name: "SR-56 Liveview EB @ Milepost 42.2, RN"
    },
    {
      id: "11629",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-59-MP-10.gif",
      name: "SR-59 Liveview NB @ Milepost 9.92, APV"
    },
    {
      id: "11617",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-62MP26.gif",
      name: "SR-62 Liveview NB @ Milepost 26.28, PT"
    },
    {
      id: "11500",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-65%20@%20big-mountain-pass.gif",
      name: "SR-65 RWIS NB @ Big Mountain Pass / SL-MN Co Line / MP 8.4, SL"
    },
    {
      id: "11114",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-66-MP-0-all.gif",
      name: "SR-66 Liveview EB @ East Canyon Reservoir / MP 0.84, MN"
    },
    {
      id: "11821",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-72-mp-158.gif",
      name: "SR-72 Liveview NB @ Hogans Pass / MP 15.8, SE"
    },
    {
      id: "11890",
      url: "http://www.udottraffic.utah.gov/1_devices/SR72mile30.gif",
      name: "SR-72 Liveview SB @ Milepost 30, SE"
    },
    {
      id: "11474",
      url: "http://www.udottraffic.utah.gov/1_devices/sr73mp20.gif",
      name: "SR-73 / Cedar Valley Rd Liveview EB @ Milepost 20, FRF"
    },
    {
      id: "11473",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-73-mp-26.gif",
      name: "SR-73 Liveview EB @ Milepost 26, CDF"
    },
    {
      id: "10834",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-73-mp34.gif",
      name: "SR-73 Liveview EB @ Milepost 34.57, SSP"
    },
    {
      id: "10792",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-73-mp-16.gif",
      name: "SR-73 Liveview EB @ TE/UT County Line / MP 15.84, UT"
    },
    {
      id: "11117",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-73-MP-24-all.gif",
      name: "SR-73 Liveview NB @ Cedar Valley Rd / MP 24.4, CDF"
    },
    {
      id: "10852",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-73-mp-29.gif",
      name: "SR-73 Liveview WB @ Eagle Mountain Blvd / MP 29.78, EAG"
    },
    {
      id: "10795",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-83-mp-13.gif",
      name: "SR-83 Liveview EB @ SR-102 / MP 13.07, BE"
    },
    {
      id: "11255",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-83mile18-all.gif",
      name: "SR-83 Liveview SB @ ATK Thiokol / MP 18.5, BE"
    },
    {
      id: "11120",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-88-MP-9-all.gif",
      name: "SR-88 Liveview SB @ Pelican Lake / MP 9.03, UN"
    },
    {
      id: "10853",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-92-mp-14.gif",
      name: "SR-92 Liveview WB @ Alpine Loop Scenic Hwy / MP 14.37, UT"
    },
    {
      id: "10781",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20Salvation%20Knoll.jpg",
      name: "SR-95 RWIS EB @ Salvation Knoll / MP 97, SJ"
    },
    {
      id: "10205",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14914.jpeg",
      name: "St George Blvd / SR-34 @ 1000 E, STG"
    },
    {
      id: "9810",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14520.jpeg",
      name: "St George Blvd / SR-34 @ 400 E, STG"
    },
    {
      id: "10204",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14913.jpeg",
      name: "St George Blvd / SR-34 @ 700 E, STG"
    },
    {
      id: "10209",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14918.jpeg",
      name: "St George Blvd / SR-34 @ Main St, STG"
    },
    {
      id: "10208",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14917.jpeg",
      name: "St George Blvd / SR-34 @ River Rd / Red Cliffs Dr, STG"
    },
    {
      id: "9636",
      url: "http://www.udottraffic.utah.gov/1_devices/aux434.jpeg",
      name: "State St / SR-126 @ Center St, CFD"
    },
    {
      id: "11066",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15875.jpeg",
      name: "State St / SR-186 @ North Temple St / 2nd Ave, SLC"
    },
    {
      id: "11905",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16713.jpeg",
      name: "State St / SR-198 @ 1400 S, PSN"
    },
    {
      id: "11869",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16677.jpeg",
      name: "State St / SR-9 / SR-17 @ 500 N / SR-9, LVR"
    },
    {
      id: "11874",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16682.jpeg",
      name: "State St / SR-9 @ 3700 W / Sand Hollow Rd, HRC (Local)"
    },
    {
      id: "11873",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16681.jpeg",
      name: "State St / SR-9 @ 5300 W / SR-318, HRC"
    },
    {
      id: "11872",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16680.jpeg",
      name: "State St / SR-9 @ 6300 W / Telegraph Rd / Old Hwy 91, HRC"
    },
    {
      id: "11870",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16678.jpeg",
      name: "State St / SR-9 @ 700 W / Airport Rd, HRC"
    },
    {
      id: "11871",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16679.jpeg",
      name: "State St / SR-9 @ Main St / SR-59, HRC"
    },
    {
      id: "10722",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15531.jpeg",
      name: "State St / US-89 / I-15 SB Exit @ 2100 N / SR-194, LHI"
    },
    {
      id: "11965",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16773.jpeg",
      name: "State St / US-89 @ 10000 S / Sego Lily Dr, SND"
    },
    {
      id: "10104",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14813.jpeg",
      name: "State St / US-89 @ 10600 S, SND"
    },
    {
      id: "10561",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15370.jpeg",
      name: "State St / US-89 @ 1100 E, AFK / 2000 W, PLG / SR-129, PLG"
    },
    {
      id: "12341",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17140.jpeg",
      name: "State St / US-89 @ 11000 S, SND"
    },
    {
      id: "12342",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17141.jpeg",
      name: "State St / US-89 @ 11235 S / Auto Mall Dr, SND"
    },
    {
      id: "10686",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15495.jpeg",
      name: "State St / US-89 @ 11400 S, SND"
    },
    {
      id: "9819",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14529.jpg",
      name: "State St / US-89 @ 1200 N, ORM"
    },
    {
      id: "10677",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15486.jpeg",
      name: "State St / US-89 @ 12200 S, DPR"
    },
    {
      id: "11514",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16323.jpeg",
      name: "State St / US-89 @ 1300 S, SLC"
    },
    {
      id: "11258",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16067.jpeg",
      name: "State St / US-89 @ 1320 S, PVO"
    },
    {
      id: "9272",
      url: "http://www.udottraffic.utah.gov/1_devices/aux401.jpeg",
      name: "State St / US-89 @ 1600 N, ORM"
    },
    {
      id: "9834",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14544.jpeg",
      name: "State St / US-89 @ 1600 S, ORM"
    },
    {
      id: "11521",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16330.jpeg",
      name: "State St / US-89 @ 1700 S, SLC"
    },
    {
      id: "9527",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14294.jpeg",
      name: "State St / US-89 @ 1720 N / Grandview Ln, PVO"
    },
    {
      id: "9554",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14321.jpeg",
      name: "State St / US-89 @ 1860 S / Slate Canyon Dr, PVO"
    },
    {
      id: "11757",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16565.jpeg",
      name: "State St / US-89 @ 200 S / 220 S, PLG"
    },
    {
      id: "141",
      url: "http://www.udottraffic.utah.gov/1_devices/aux141.jpeg",
      name: "State St / US-89 @ 2100 S / SR-201, SSL"
    },
    {
      id: "12049",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16857.jpeg",
      name: "State St / US-89 @ 300 E, AFK"
    },
    {
      id: "142",
      url: "http://www.udottraffic.utah.gov/1_devices/aux142.jpeg",
      name: "State St / US-89 @ 3300 S / SR-171, SSL"
    },
    {
      id: "11948",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16756.jpeg",
      name: "State St / US-89 @ 3900 S, SSL"
    },
    {
      id: "10559",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15368.jpeg",
      name: "State St / US-89 @ 400 N, ORM"
    },
    {
      id: "185",
      url: "http://www.udottraffic.utah.gov/1_devices/aux185.jpeg",
      name: "State St / US-89 @ 400 S / University Blvd / SR-186, SLC"
    },
    {
      id: "9264",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5143.jpeg",
      name: "State St / US-89 @ 4500 S / SR-266, MUR"
    },
    {
      id: "10251",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14960.jpeg",
      name: "State St / US-89 @ 500 E / SR-180, AFK"
    },
    {
      id: "144",
      url: "http://www.udottraffic.utah.gov/1_devices/aux144.jpeg",
      name: "State St / US-89 @ 5300 S / SR-173, MUR"
    },
    {
      id: "10574",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15383.jpeg",
      name: "State St / US-89 @ 700 S / 300 E, PLG"
    },
    {
      id: "11825",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16633.jpeg",
      name: "State St / US-89 @ 7200 S / Fort Union Blvd / SR-48, MDV"
    },
    {
      id: "195",
      url: "http://www.udottraffic.utah.gov/1_devices/aux195.jpeg",
      name: "State St / US-89 @ 7800 S, MDV"
    },
    {
      id: "9273",
      url: "http://www.udottraffic.utah.gov/1_devices/aux402.jpeg",
      name: "State St / US-89 @ 800 N / SR-52, ORM"
    },
    {
      id: "9314",
      url: "http://www.udottraffic.utah.gov/1_devices/aux415.jpeg",
      name: "State St / US-89 @ 800 S, ORM"
    },
    {
      id: "12268",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17067.jpeg",
      name: "State St / US-89 @ 8375 S / Princeton Dr, SND"
    },
    {
      id: "10108",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14817.jpeg",
      name: "State St / US-89 @ 9000 S / SR-209, SND"
    },
    {
      id: "10103",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14812.jpeg",
      name: "State St / US-89 @ 9400 S, SND"
    },
    {
      id: "9277",
      url: "http://www.udottraffic.utah.gov/1_devices/aux404.jpeg",
      name: "State St / US-89 @ Center St, ORM"
    },
    {
      id: "10250",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14959.jpeg",
      name: "State St / US-89 @ Main St / 1200 E / SR-73, LHI"
    },
    {
      id: "10569",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15378.jpeg",
      name: "State St / US-89 @ Main St / SR-114, PLG"
    },
    {
      id: "10557",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15366.jpeg",
      name: "State St / US-89 @ Pleasant Grove Blvd / Center St, PLG"
    },
    {
      id: "10893",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15702.jpeg",
      name: "State St / US-89 @ Rio Tinto Stadium / 9220 S, SND"
    },
    {
      id: "9278",
      url: "http://www.udottraffic.utah.gov/1_devices/aux405.jpeg",
      name: "State St / US-89 @ University Pkwy / SR-265, ORM"
    },
    {
      id: "145",
      url: "http://www.udottraffic.utah.gov/1_devices/aux145.jpeg",
      name: "State St / US-89 @ Winchester St / 6400 S, MUR"
    },
    {
      id: "11533",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16342.jpeg",
      name: "Sunset Blvd / SR-8 @ Dixie Dr / Dixie Downs Rd, STG"
    },
    {
      id: "10383",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15092.jpeg",
      name: "Sunset Blvd / SR-8 @ Valley View Dr, STG"
    },
    {
      id: "10384",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15093.jpeg",
      name: "Sunset Blvd / SR-8 @ Westridge Dr, STG"
    },
    {
      id: "11907",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16715.jpeg",
      name: "Telegraph Rd @ Highland Pkwy, WAS"
    },
    {
      id: "11157",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15966.jpeg",
      name: "Telegraph St / State St @ 300 E / Washington Fields Rd, WAS"
    },
    {
      id: "11156",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15965.jpeg",
      name: "Telegraph St / State St @ Main St, WAS"
    },
    {
      id: "11666",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16474.jpeg",
      name: "Timpanogos Hwy / 11000 N / SR-92 @ 6000 W, HLD"
    },
    {
      id: "11758",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16566.jpeg",
      name: "Timpanogos Hwy / 11000 N / SR-92 @ 6400 W, HLD"
    },
    {
      id: "11010",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15819.jpeg",
      name:
        "Timpanogos Hwy / 11000 N / SR-92 @ Alpine Hwy / 5300 W / SR-74, HLD"
    },
    {
      id: "11388",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16197.jpeg",
      name:
        "Timpanogos Hwy / 11000 N / SR-92 @ North County Blvd / 4800 W / SR-129, HLD"
    },
    {
      id: "11011",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15820.jpeg",
      name: "Timpanogos Hwy / 3500 N / SR-92 @ 1200 E / Micron, LHI"
    },
    {
      id: "11665",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16473.jpeg",
      name: "Timpanogos Hwy / 3500 N / SR-92 @ 1450 W, LHI"
    },
    {
      id: "11012",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15821.jpeg",
      name: "Timpanogos Hwy / 3500 N / SR-92 @ Center St, LHI"
    },
    {
      id: "11667",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16475.jpeg",
      name: "Timpanogos Hwy / 3500 N / SR-92 @ Morning Vista Rd / 1200 W, LHI"
    },
    {
      id: "11542",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16351.jpeg",
      name:
        "Timpanogos Hwy / Club House Dr / SR-92 @ Ashton Blvd / Maple Loop Dr, LHI"
    },
    {
      id: "11055",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15864.jpeg",
      name: "Triumph Blvd @ Cabelas Blvd, LHI"
    },
    {
      id: "146",
      url: "http://www.udottraffic.utah.gov/1_devices/aux146.jpeg",
      name: "Union Park Ave / 1090 E @ Fort Union Blvd / 7000 S, MDV"
    },
    {
      id: "11944",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16752.jpeg",
      name: "Union Park Ave / 1300 E @ 7755 S / Forbush Ln, SND"
    },
    {
      id: "12019",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16827.jpeg",
      name: "Union Park Ave / 1300 E @ Creek Rd / South Union Ave / 7340 S, CWH"
    },
    {
      id: "12020",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16828.jpeg",
      name: "Union Park Ave @ 1300 E / 7100 S, CWH"
    },
    {
      id: "9537",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14304.jpeg",
      name: "University Ave / US-189 @ 2230 N, PVO"
    },
    {
      id: "10276",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14985.jpeg",
      name: "University Ave / US-189 @ 300 S / US-89, PVO"
    },
    {
      id: "9539",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14306.jpeg",
      name: "University Ave / US-189 @ 3700 N, PVO"
    },
    {
      id: "11442",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16251.jpeg",
      name: "University Ave / US-189 @ 4200 N, PVO"
    },
    {
      id: "9541",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14308.jpeg",
      name: "University Ave / US-189 @ 4800 N / Foothill Blvd, PVO"
    },
    {
      id: "9505",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14272.jpeg",
      name: "University Ave / US-189 @ 500 N, PVO"
    },
    {
      id: "11389",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16198.jpeg",
      name: "University Ave / US-189 @ 5200 N / River Park Dr, PVO"
    },
    {
      id: "9528",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14295.jpeg",
      name: "University Ave / US-189 @ 800 N, PVO"
    },
    {
      id: "9502",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14269.jpeg",
      name: "University Ave / US-189 @ 920 S, PVO"
    },
    {
      id: "9504",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14271.jpeg",
      name: "University Ave / US-189 @ Center St, PVO"
    },
    {
      id: "9529",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14296.jpeg",
      name: "University Ave / US-189 @ Cougar Blvd / 1230 N, PVO"
    },
    {
      id: "9553",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14320.jpeg",
      name: "University Ave / US-189 @ University Pkwy / 1650 N / SR-265, PVO"
    },
    {
      id: "12378",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17177.jpeg",
      name: "University Pkwy / 1650 N @ 450 E, PVO"
    },
    {
      id: "9531",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14298.jpeg",
      name: "University Pkwy / 1650 N @ Canyon Rd / 150 E, PVO"
    },
    {
      id: "12282",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17081.jpeg",
      name: "University Pkwy / SR-265 @ 1400 S / MP 2.95, ORM"
    },
    {
      id: "12283",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17082.jpeg",
      name: "University Pkwy / SR-265 @ 1700 S / MP 3.33, ORM"
    },
    {
      id: "9675",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14403.jpeg",
      name: "University Pkwy / SR-265 @ 2230 N / Riverside Ave / 550 W, PVO"
    },
    {
      id: "9832",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14542.jpeg",
      name: "University Pkwy / SR-265 @ 400 W, ORM"
    },
    {
      id: "9316",
      url: "http://www.udottraffic.utah.gov/1_devices/aux417.jpeg",
      name: "University Pkwy / SR-265 @ 800 E, ORM"
    },
    {
      id: "10564",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15373.jpeg",
      name: "University Pkwy / SR-265 @ Freedom Blvd / 200 W, PVO"
    },
    {
      id: "9833",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14543.jpeg",
      name: "University Pkwy / SR-265 @ Main St, ORM"
    },
    {
      id: "9306",
      url: "http://www.udottraffic.utah.gov/1_devices/aux406.jpeg",
      name: "University Pkwy / SR-265 @ Sandhill Rd, ORM"
    },
    {
      id: "10399",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15108.jpeg",
      name: "US-189 @ Deer Creek Dam / MP 17.87, WA"
    },
    {
      id: "11746",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16554.jpeg",
      name: "US-189 @ Milepost 20.89, WA"
    },
    {
      id: "11745",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16553.jpeg",
      name: "US-189 @ Milepost 21.57, WA"
    },
    {
      id: "11190",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15999.jpeg",
      name: "US-189 @ Milepost 25.36, CHR"
    },
    {
      id: "11837",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16645.jpeg",
      name: "US-189 RWIS EB @ Charleston Rd / 3600 W / SR-113 / MP 24.92, CHR"
    },
    {
      id: "10810",
      url: "http://www.udottraffic.utah.gov/1_devices/US-191-MP-259.gif",
      name: "US-191 Liveview NB @ Emma Park Rd / MP 259.27, CC"
    },
    {
      id: "10809",
      url: "http://www.udottraffic.utah.gov/1_devices/us-191-mp-80.gif",
      name: "US-191 Liveview NB @ Milepost 80.7, SJ"
    },
    {
      id: "10767",
      url: "http://www.udottraffic.utah.gov/1_devices/us-191-mp-265.gif",
      name: "US-191 Liveview SB @ Indian Canyon / MP 265.73, DU"
    },
    {
      id: "10855",
      url: "http://www.udottraffic.utah.gov/1_devices/us-191-mp-372.gif",
      name: "US-191 Liveview SB @ Milepost 372.31, UN"
    },
    {
      id: "10765",
      url: "http://www.udottraffic.utah.gov/1_devices/us-191-mp-380.gif",
      name: "US-191 Liveview SB @ Milepost 380.8, DG"
    },
    {
      id: "10845",
      url: "http://www.udottraffic.utah.gov/1_devices/us-191-mp-103.gif",
      name: "US-191 Liveview SB @ SR-46 / La Sal Jct / MP 103.55, SJ"
    },
    {
      id: "12044",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16852.jpeg",
      name: "US-191 NB @ Arches Entrance Rd / MP 130.28, GR"
    },
    {
      id: "11677",
      url: "http://www.udottraffic.utah.gov/1_devices/archesEntrance.gif",
      name: "US-191 NB @ Arches National Park / MP 130, GR"
    },
    {
      id: "11708",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16516.jpeg",
      name: "US-191 NB @ Devils Canyon / MP 61.18, SJ"
    },
    {
      id: "12045",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16853.jpeg",
      name: "US-191 NB @ SR-128 / MP 128.2, MAB"
    },
    {
      id: "10756",
      url: "http://www.udottraffic.utah.gov/1_devices/Indian-Canyon-Summit.gif",
      name: "US-191 RWIS NB @ Indian Canyon Summit / MP 266.77, DU"
    },
    {
      id: "10750",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20US-191%20Monticello%20N-S.gif",
      name: "US-191 RWIS NB @ Monticello / MP 62, SJ"
    },
    {
      id: "12229",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17028.jpeg",
      name: "US-40 @ 2050 S / MP 18.81, HBR"
    },
    {
      id: "12210",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17018.jpeg",
      name: "US-40 @ Milepost 1.85, SU"
    },
    {
      id: "9774",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14484.jpeg",
      name: "US-40 @ Milepost 3, SU"
    },
    {
      id: "10573",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15382.jpeg",
      name: "US-40 @ River Rd / SR-32 / MP 13.7, WA"
    },
    {
      id: "235",
      url: "http://www.udottraffic.utah.gov/1_devices/aux235.jpeg",
      name: "US-40 @ Silver Summit Pkwy / MP 1.31, SU"
    },
    {
      id: "203",
      url: "http://www.udottraffic.utah.gov/1_devices/aux203.jpeg",
      name: "US-40 @ SR-248 / Kearns Blvd / Quinns Jct / MP 3.89, SU"
    },
    {
      id: "12485",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17276.jpeg",
      name: "US-40 EB @ Strawberry Reservoir / MP 42, WA"
    },
    {
      id: "10862",
      url: "http://www.udottraffic.utah.gov/1_devices/us-40-mp-49.gif",
      name: "US-40 Liveview EB @ Milepost 49.14, WA"
    },
    {
      id: "11126",
      url: "http://www.udottraffic.utah.gov/1_devices/US-40-MP-69-all.gif",
      name: "US-40 Liveview EB @ Milepost 69.81, DU"
    },
    {
      id: "10760",
      url: "http://www.udottraffic.utah.gov/1_devices/us-40-mp-42.gif",
      name: "US-40 Liveview EB @ Strawberry Reservoir / MP 42, WA"
    },
    {
      id: "11123",
      url: "http://www.udottraffic.utah.gov/1_devices/US-40-MP-59-all.gif",
      name: "US-40 Liveview EB @ WA/DU County Line / MP 59, DU"
    },
    {
      id: "10856",
      url: "http://www.udottraffic.utah.gov/1_devices/us-40-mp-9.gif",
      name: "US-40 Liveview NB @ Jordanelle Reservoir / MP 9.8, WA"
    },
    {
      id: "10769",
      url: "http://www.udottraffic.utah.gov/1_devices/us-40-mp33.gif",
      name: "US-40 Liveview SB @ Daniels Summit / MP 33.45, WA"
    },
    {
      id: "11030",
      url: "http://www.udottraffic.utah.gov/1_devices/US-40-MP-27-all.gif",
      name: "US-40 Liveview SB @ Milepost 27.53, WA"
    },
    {
      id: "11472",
      url: "http://www.udottraffic.utah.gov/1_devices/us-40-mp-134.gif",
      name: "US-40 Liveview WB @ Milepost 134.85, UN"
    },
    {
      id: "10849",
      url: "http://www.udottraffic.utah.gov/1_devices/us-40-mp173.gif",
      name: "US-40 Liveview WB @ Milepost 173.6, UN"
    },
    {
      id: "12430",
      url: "http://www.udottraffic.utah.gov/1_devices/RWIS_US-40_Fruitland.gif",
      name: "US-40 RWIS EB @ Fruitland / MP 66, DU"
    },
    {
      id: "10747",
      url: "http://www.udottraffic.utah.gov/1_devices/RWIS%20StarvationRes.gif",
      name: "US-40 RWIS EB @ Starvation Reservoir / MP 81.5, DU"
    },
    {
      id: "10757",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20US40%20Mayflower%20Summit.gif",
      name: "US-40 RWIS SB @ Mayflower Summit / MP 6.13, WA"
    },
    {
      id: "12258",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17057.jpeg",
      name: "US-40 SB @ Daniels Summit / MP 33.43, WA"
    },
    {
      id: "12259",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17058.jpeg",
      name: "US-40 SB @ Daniels Summit / MP 34.21, WA"
    },
    {
      id: "10811",
      url: "http://www.udottraffic.utah.gov/1_devices/us-491-mp-13.gif",
      name: "US-491 Liveview EB @ Milepost 13.13, SJ"
    },
    {
      id: "12452",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-491-MonticelloPOE.gif",
      name: "US-491 RWIS WB @ Monticello POE / MP 2, SJ"
    },
    {
      id: "10840",
      url: "http://www.udottraffic.utah.gov/1_devices/us-50-mp-148.gif",
      name: "US-50 Liveview SB @ MD/SE County Line / MP 148.15, MD"
    },
    {
      id: "248",
      url: "http://www.udottraffic.utah.gov/1_devices/aux248.jpeg",
      name: "US-6 @ 1000 N / MP 231.74, HLP"
    },
    {
      id: "9926",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14635.jpeg",
      name: "US-6 @ 2550 E, SPF"
    },
    {
      id: "240",
      url: "http://www.udottraffic.utah.gov/1_devices/aux240.jpeg",
      name: "US-6 @ 800 N / Expressway Ln, SPF"
    },
    {
      id: "215",
      url: "http://www.udottraffic.utah.gov/1_devices/aux215.jpeg",
      name: "US-6 @ Billies Mtn / MP 186.37, UT"
    },
    {
      id: "242",
      url: "http://www.udottraffic.utah.gov/1_devices/aux242.jpeg",
      name: "US-6 @ Canyon Rd / SR-198 / MP 177.12, SPF"
    },
    {
      id: "244",
      url: "http://www.udottraffic.utah.gov/1_devices/aux244.jpeg",
      name: "US-6 @ Cedar Haven / Sheep Creek Rd / MP 195.08, UT"
    },
    {
      id: "241",
      url: "http://www.udottraffic.utah.gov/1_devices/aux241.jpeg",
      name: "US-6 @ Center St / 1430 E, SPF"
    },
    {
      id: "246",
      url: "http://www.udottraffic.utah.gov/1_devices/aux246.jpeg",
      name: "US-6 @ Colton Shed / MP 217.11, UT"
    },
    {
      id: "245",
      url: "http://www.udottraffic.utah.gov/1_devices/aux245.jpeg",
      name: "US-6 @ Gilluly Switchback / MP 206.46, UT"
    },
    {
      id: "11707",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16515.jpeg",
      name: "US-6 @ Main St / MP 232.7, HLP"
    },
    {
      id: "214",
      url: "http://www.udottraffic.utah.gov/1_devices/aux214.jpeg",
      name: "US-6 @ Tie Fork Rest Area / MP 202.05, UT"
    },
    {
      id: "12173",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16981.jpeg",
      name: "US-6 @ US-191 / MP 229.82, CC"
    },
    {
      id: "243",
      url: "http://www.udottraffic.utah.gov/1_devices/aux243.jpeg",
      name: "US-6 @ US-89 / MP 187.47, UT"
    },
    {
      id: "10843",
      url: "http://www.udottraffic.utah.gov/1_devices/us-6-mp-22.gif",
      name: "US-6 Liveview EB @ Kings Canyon / MP 22.77, MD"
    },
    {
      id: "10818",
      url: "http://www.udottraffic.utah.gov/1_devices/us-6-mp-212.gif",
      name: "US-6 Liveview EB @ Milepost 212.13, WA"
    },
    {
      id: "10796",
      url: "http://www.udottraffic.utah.gov/1_devices/us-6-mp278.gif",
      name: "US-6 Liveview EB @ Milepost 278.17, EM"
    },
    {
      id: "11622",
      url: "http://www.udottraffic.utah.gov/1_devices/US-6MP269.gif",
      name: "US-6 Liveview NB @ Milepost 268.02, EM"
    },
    {
      id: "10803",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-132-mp-0.gif",
      name: "US-6 Liveview SB @ SR-132 / MP 105.28, LDL"
    },
    {
      id: "10806",
      url: "http://www.udottraffic.utah.gov/1_devices/us-6-mp-221.gif",
      name: "US-6 Liveview WB @ Milepost 221.81, UT"
    },
    {
      id: "10857",
      url: "http://www.udottraffic.utah.gov/1_devices/us-6-mp-210.gif",
      name: "US-6 Liveview WB @ Soldier Summit / MP 210.36, UT"
    },
    {
      id: "11602",
      url: "http://www.udottraffic.utah.gov/1_devices/US-6@Helper-RWIS.gif",
      name: "US-6 RWIS EB @ 200 N / MP 232.4, HLP"
    },
    {
      id: "10783",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20US6%20@%20Eureka.jpg",
      name: "US-6 RWIS EB @ Eureka / MP 141.04, EUR"
    },
    {
      id: "10778",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20US6%20Red%20Narrow.gif",
      name: "US-6 RWIS EB @ Red Narrows / MP 192.9, UT"
    },
    {
      id: "12406",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20US-6%20@%20SR-123.gif",
      name: "US-6 RWIS EB @ SR-123 / MP 256, CC"
    },
    {
      id: "12516",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17307.jpeg",
      name: "US-6 WB @ Carbon Ave / SR-10, PRC"
    },
    {
      id: "11912",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16720.jpeg",
      name: "US-6 WB @ Soldier Summit / MP 210.36, UT"
    },
    {
      id: "12048",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16856.jpeg",
      name: "US-89 / Harrisville Rd @ Wall Ave / SR-204 / Larsen Ln, HRV"
    },
    {
      id: "10394",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15103.jpeg",
      name: "US-89 / I-84 @ 6300 S / 150 E / MP 407.72, UIN"
    },
    {
      id: "10391",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15100.jpeg",
      name: "US-89 @ 3000 N / SR-193, LTN"
    },
    {
      id: "10392",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15101.jpeg",
      name: "US-89 @ Antelope Dr, LTN"
    },
    {
      id: "286",
      url: "http://www.udottraffic.utah.gov/1_devices/aux286.jpeg",
      name: "US-89 @ Green Rd / MP 398.86, FRU"
    },
    {
      id: "10712",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15521.jpeg",
      name: "US-89 @ Harrison Blvd / 1550 E / SR-203, SOG"
    },
    {
      id: "10395",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15104.jpeg",
      name: "US-89 @ I-84 EB Exit Ramp, SWE"
    },
    {
      id: "284",
      url: "http://www.udottraffic.utah.gov/1_devices/aux284.jpeg",
      name: "US-89 @ Main St / SR-106 / SR-273 / MP 397.58, FRM"
    },
    {
      id: "10393",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15102.jpeg",
      name: "US-89 @ Oak Hills Dr / SR-109, LTN"
    },
    {
      id: "280",
      url: "http://www.udottraffic.utah.gov/1_devices/aux280.jpeg",
      name: "US-89 @ Park Ln / 1100 W / SR-225, FRM"
    },
    {
      id: "285",
      url: "http://www.udottraffic.utah.gov/1_devices/aux285.jpeg",
      name: "US-89 @ Pedestrian Bridge / MP 398.08, FRU"
    },
    {
      id: "11789",
      url: "http://www.udottraffic.utah.gov/1_devices/us-89-mp-244.gif",
      name: "US-89 Liveview EB @ Milepost 244.6, SP"
    },
    {
      id: "10831",
      url: "http://www.udottraffic.utah.gov/1_devices/us-89-mp-183.gif",
      name: "US-89 Liveview NB @ Big Rock Candy Mtn / MP 183.85, PT"
    },
    {
      id: "11903",
      url: "http://www.udottraffic.utah.gov/1_devices/US89mile71.gif",
      name:
        "US-89 Liveview NB @ Kanab Canyon Rd / Angel Canyon Rd / Hancock Rd / MP 71.9, KN"
    },
    {
      id: "11623",
      url: "http://www.udottraffic.utah.gov/1_devices/US-89_MP-151.gif",
      name: "US-89 Liveview NB @ Milepost 151.33, GA"
    },
    {
      id: "10823",
      url: "http://www.udottraffic.utah.gov/1_devices/us-89-mp290.gif",
      name: "US-89 Liveview NB @ Milepost 290.11, SP"
    },
    {
      id: "10821",
      url: "http://www.udottraffic.utah.gov/1_devices/SR225mile0-all.gif",
      name: "US-89 Liveview NB @ Park Lane / SR-225 / MP 396.19, FRM"
    },
    {
      id: "10822",
      url: "http://www.udottraffic.utah.gov/1_devices/US-89-MP-267-all.gif",
      name: "US-89 Liveview NB @ SR-132 / Pigeon Hollow Jct / MP 267.37, SP"
    },
    {
      id: "10807",
      url: "http://www.udottraffic.utah.gov/1_devices/us-89-mp-103.gif",
      name: "US-89 Liveview NB @ SR-14 / Long Valley Jct / MP 103.7, KN"
    },
    {
      id: "10788",
      url: "http://www.udottraffic.utah.gov/1_devices/us-89-mp-424.gif",
      name: "US-89 Liveview SB @ 7850 S / MP 424.94, BE"
    },
    {
      id: "10841",
      url: "http://www.udottraffic.utah.gov/1_devices/US-89-mp470.GIF",
      name: "US-89 Liveview SB @ Logan Canyon / MP 470.56, CA"
    },
    {
      id: "11788",
      url: "http://www.udottraffic.utah.gov/1_devices/us-89-mp-234.gif",
      name: "US-89 Liveview SB @ Milepost 234.47, SP"
    },
    {
      id: "11904",
      url: "http://www.udottraffic.utah.gov/1_devices/US89mile43.gif",
      name: "US-89 Liveview SB @ Milepost 43.2, KN"
    },
    {
      id: "10808",
      url: "http://www.udottraffic.utah.gov/1_devices/us-89-mp-502.gif",
      name: "US-89 Liveview SB @ UT/ID State Line / MP 502.57, RI"
    },
    {
      id: "10764",
      url: "http://www.udottraffic.utah.gov/1_devices/us-89-mp-297.gif",
      name: "US-89 Liveview SB @ UT/SP County Line / MP 297.03, SP"
    },
    {
      id: "283",
      url: "http://www.udottraffic.utah.gov/1_devices/aux283.jpeg",
      name: "US-89 NB @ Shepard Ln, FRM"
    },
    {
      id: "11884",
      url: "http://www.udottraffic.utah.gov/1_devices/US-89%20MP%20460.gif",
      name: "US-89 RWIS EB @ USU / 900 E / MP 460.2, LGN"
    },
    {
      id: "10826",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20US89%20@%20Logan%20Summit.jpg",
      name: "US-89 RWIS SB @ Logan Summit / MP 489.68, CA"
    },
    {
      id: "282",
      url: "http://www.udottraffic.utah.gov/1_devices/aux282.jpeg",
      name: "US-89 SB @ Shepard Ln, FRM"
    },
    {
      id: "12095",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16903.jpeg",
      name: "US-89/91 @ 100 S / MP 5.61, MTU"
    },
    {
      id: "12196",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17004.jpeg",
      name: "US-89/91 @ 1000 W / SR-252, LGN"
    },
    {
      id: "11654",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16462.jpeg",
      name: "US-89/91 @ 1700 S / Park Ave / 600 W, LGN"
    },
    {
      id: "9877",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14586.jpeg",
      name: "US-89/91 @ 950 S / MP 17.18, WVL"
    },
    {
      id: "12100",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16908.jpeg",
      name: "US-89/91 @ Main St / SR-101 / MP 19.18, WVL"
    },
    {
      id: "11656",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16464.jpeg",
      name: "US-89/91 @ Main St / SR-165, LGN"
    },
    {
      id: "12096",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16904.jpeg",
      name: "US-89/91 @ Milepost 12.26, CA"
    },
    {
      id: "12097",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16905.jpeg",
      name: "US-89/91 @ Milepost 13.93, WVL"
    },
    {
      id: "12098",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16906.jpeg",
      name: "US-89/91 @ Milepost 14.31, WVL"
    },
    {
      id: "12099",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16907.jpeg",
      name: "US-89/91 @ Milepost 15.17, WVL"
    },
    {
      id: "9876",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14585.jpeg",
      name: "US-89/91 @ Sardine Summit / MP 10.05, BE"
    },
    {
      id: "11624",
      url: "http://www.udottraffic.utah.gov/1_devices/US-91_MP-38.gif",
      name: "US-91 Liveview NB @ 8600 N / MP 37.72, CA"
    },
    {
      id: "11256",
      url: "http://www.udottraffic.utah.gov/1_devices/US-91-mile45-all.gif",
      name: "US-91 Liveview NB @ UT/ID State Line / MP 45.27, CA"
    },
    {
      id: "11467",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16276.jpeg",
      name: "Van Winkle Expwy / SR-152 @ 5600 S, HDY"
    },
    {
      id: "9243",
      url: "http://www.udottraffic.utah.gov/1_devices/aux331.jpeg",
      name: "Wall Ave / SR-204 @ 12th St / SR-39, OGD"
    },
    {
      id: "12072",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16880.jpeg",
      name: "Wall Ave / SR-204 @ 20th St / SR-104, OGD"
    },
    {
      id: "12337",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17136.jpeg",
      name: "Wall Ave / SR-204 @ 25th St, OGD"
    },
    {
      id: "12338",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17137.jpeg",
      name: "Wall Ave / SR-204 @ 30th St / SR-79, OGD"
    },
    {
      id: "9128",
      url: "http://www.udottraffic.utah.gov/1_devices/aux318.jpeg",
      name: "Wall Ave / SR-204 @ 31st St / SR-79, OGD"
    },
    {
      id: "11798",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16606.jpeg",
      name:
        "Wasatch Blvd / 3650 E / SR-210 @ 7800 S / Bengal Blvd / Honeywood Cove Dr, CWH"
    },
    {
      id: "9896",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14605.jpeg",
      name:
        "Wasatch Blvd / SR-190/SR-210 @ Big Cottonwood Canyon Rd / Fort Union Blvd / SR-190, CWH"
    },
    {
      id: "12046",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16854.jpeg",
      name:
        "Washington Blvd / Harrisville Rd / US-89 @ 2nd St / Washington Blvd / SR-235, OGD"
    },
    {
      id: "10293",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15002.jpeg",
      name: "Washington Blvd / SR-235 @ 2600 N / SR-134, NOG"
    },
    {
      id: "9632",
      url: "http://www.udottraffic.utah.gov/1_devices/aux430.jpeg",
      name: "Washington Blvd / US-89 @ 12th St / SR-39, OGD"
    },
    {
      id: "12073",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16881.jpeg",
      name: "Washington Blvd / US-89 @ 20th St, OGD"
    },
    {
      id: "9407",
      url: "http://www.udottraffic.utah.gov/1_devices/aux427.jpeg",
      name: "Washington Blvd / US-89 @ 24th St / SR-53, OGD"
    },
    {
      id: "12339",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17138.jpeg",
      name: "Washington Blvd / US-89 @ 28th St, OGD"
    },
    {
      id: "12074",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16882.jpeg",
      name: "Washington Blvd / US-89 @ 30th St / SR-79, OGD"
    },
    {
      id: "12340",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17139.jpeg",
      name: "Washington Blvd / US-89 @ 31st St / SR-79, OGD"
    },
    {
      id: "9633",
      url: "http://www.udottraffic.utah.gov/1_devices/aux431.jpeg",
      name: "Washington Blvd / US-89 @ 40th St / Chimes View Dr, SOG"
    },
    {
      id: "12075",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16883.jpeg",
      name: "Washington Blvd / US-89 @ Adams Ave Pkwy, OGD"
    },
    {
      id: "9406",
      url: "http://www.udottraffic.utah.gov/1_devices/aux426.jpeg",
      name: "Washington Blvd / US-89 @ Riverdale Rd / SR-26, OGD"
    },
    {
      id: "11755",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16563.jpeg",
      name: "Washington Fields Rd @ 2000 S, WAS"
    },
    {
      id: "11906",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16714.jpeg",
      name: "Washington Fields Rd @ Industrial Rd, WAS"
    },
    {
      id: "11712",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16520.jpeg",
      name: "Washington Fields Rd @ Washington Dam Rd, WAS"
    },
    {
      id: "12194",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17002.jpeg",
      name: "Zion Park Blvd / SR-9 @ 200 S, SDL"
    },
    {
      id: "12192",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17000.jpeg",
      name: "Zion Park Blvd / SR-9 @ 2400 S, SDL"
    },
    {
      id: "12193",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17001.jpeg",
      name: "Zion Park Blvd / SR-9 @ Lion Blvd, SDL"
    },
    {
      id: "12191",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16999.jpeg",
      name: "Zion Park Blvd / SR-9 @ Quail Ridge Rd, SDL"
    }
  ],
  "St. George": [
    {
      id: "10215",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14924.jpeg",
      name: "100 S @ 400 E / Flood St, STG"
    },
    {
      id: "11524",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16333.jpeg",
      name: "100 S @ 700 E, STG"
    },
    {
      id: "11536",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16345.jpeg",
      name: "3050 E @ 850 N, STG"
    },
    {
      id: "11911",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16719.jpeg",
      name: "3050 E @ Deseret Dr / 450 N, STG"
    },
    {
      id: "10218",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14927.jpeg",
      name: "700 S @ 400 E / Flood St, STG"
    },
    {
      id: "10281",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14990.jpeg",
      name:
        "Bluff St / Riverside Dr / SR-18 @ Sunland Dr / Convention Center Dr, STG"
    },
    {
      id: "10210",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14919.jpeg",
      name: "Bluff St / SR-18 @ 500 N, STG"
    },
    {
      id: "10278",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14987.jpeg",
      name: "Bluff St / SR-18 @ 700 S, STG"
    },
    {
      id: "10280",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14989.jpeg",
      name: "Bluff St / SR-18 @ Main St / Black Ridge Dr / Hilton Dr, STG"
    },
    {
      id: "10206",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14915.jpeg",
      name: "Bluff St / SR-18 @ St George Blvd / SR-34, STG"
    },
    {
      id: "10211",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14920.jpeg",
      name: "Bluff St / SR-18 @ Sunset Blvd / SR-8, STG"
    },
    {
      id: "11720",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16528.jpeg",
      name: "Dixie Dr @ 1600 S, STG"
    },
    {
      id: "11526",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16335.jpeg",
      name: "Dixie Dr @ 600 W, STG"
    },
    {
      id: "11528",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16337.jpeg",
      name: "Dixie Dr @ Valley View Dr, STG"
    },
    {
      id: "12024",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16832.jpeg",
      name: "Foremaster Dr @ Five Sisters Dr, STG"
    },
    {
      id: "11362",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16171.jpeg",
      name: "I-15 DDI NB @ St George Blvd / SR-34 / MP 8.41, STG"
    },
    {
      id: "11361",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16170.jpeg",
      name: "I-15 DDI SB @ St George Blvd / SR-34 / MP 8.41, STG"
    },
    {
      id: "10144",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14853.jpeg",
      name: "I-15 NB @ 100 S / MP 8.41, STG"
    },
    {
      id: "10147",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14856.jpeg",
      name: "I-15 NB @ 1160 S / MP 6.77, STG"
    },
    {
      id: "10158",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14867.jpeg",
      name: "I-15 NB @ 1680 E / MP 9.47, STG"
    },
    {
      id: "10159",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14868.jpeg",
      name: "I-15 NB @ 2100 E / MP 9.97, STG"
    },
    {
      id: "10160",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14869.jpeg",
      name: "I-15 NB @ 2450 E / MP 10.43, STG"
    },
    {
      id: "10145",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14854.jpeg",
      name: "I-15 NB @ 450 S / MP 8, STG"
    },
    {
      id: "10146",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14855.jpeg",
      name: "I-15 NB @ 700 S / MP 7.65, STG"
    },
    {
      id: "10157",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14866.jpeg",
      name: "I-15 NB @ Eastridge Dr / MP 9.08, STG"
    },
    {
      id: "10148",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14857.jpeg",
      name: "I-15 NB @ Virgin River / MP 5.3, STG"
    },
    {
      id: "10279",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14988.jpeg",
      name: "I-15 SB @ Bluff St / SR-18 / MP 6.37, STG"
    },
    {
      id: "11009",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15818.jpeg",
      name: "I-15 SB @ Dixie Dr / MP 5.72, STG"
    },
    {
      id: "11525",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16334.jpeg",
      name: "Main St @ 100 S, STG"
    },
    {
      id: "11527",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16336.jpeg",
      name: "Main St @ 700 S, STG"
    },
    {
      id: "11715",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16523.jpeg",
      name: "Mall Dr / Merril Rd / 2600 S @ Sandia Rd / 3000 E, STG"
    },
    {
      id: "10214",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14923.jpeg",
      name: "Red Cliff Dr / Telegraph St @ Green Spring Dr, WAS"
    },
    {
      id: "11819",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16627.jpeg",
      name: "Red Cliffs Dr @ Crossover St, STG"
    },
    {
      id: "10213",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14922.jpeg",
      name: "Red Hills Pkwy / Buena Vista Dr @ Green Spring Dr, WAS"
    },
    {
      id: "10219",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14928.jpeg",
      name: "Red Hills Pkwy @ 1000 E, STG"
    },
    {
      id: "11820",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16628.jpeg",
      name: "Red Hills Pkwy @ Crossover St, STG"
    },
    {
      id: "11535",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16344.jpeg",
      name: "Red Hills Pkwy @ Skyline Dr / 200 E, STG"
    },
    {
      id: "10382",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15091.jpeg",
      name: "River Rd @ 1450 S, STG"
    },
    {
      id: "11531",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16340.jpeg",
      name: "River Rd @ 2450 S, STG"
    },
    {
      id: "10216",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14925.jpeg",
      name: "River Rd @ 700 S / Foremaster Dr, STG"
    },
    {
      id: "11532",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16341.jpeg",
      name: "River Rd @ Fort Pierce Dr, STG"
    },
    {
      id: "10217",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14926.jpeg",
      name: "River Rd @ Riverside Dr, STG"
    },
    {
      id: "12265",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17064.jpeg",
      name: "Riverside Dr @ 2450 E, STG"
    },
    {
      id: "11714",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16522.jpeg",
      name: "Riverside Dr @ Mall Dr, STG"
    },
    {
      id: "10205",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14914.jpeg",
      name: "St George Blvd / SR-34 @ 1000 E, STG"
    },
    {
      id: "9810",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14520.jpeg",
      name: "St George Blvd / SR-34 @ 400 E, STG"
    },
    {
      id: "10204",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14913.jpeg",
      name: "St George Blvd / SR-34 @ 700 E, STG"
    },
    {
      id: "10209",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14918.jpeg",
      name: "St George Blvd / SR-34 @ Main St, STG"
    },
    {
      id: "10208",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14917.jpeg",
      name: "St George Blvd / SR-34 @ River Rd / Red Cliffs Dr, STG"
    },
    {
      id: "11533",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16342.jpeg",
      name: "Sunset Blvd / SR-8 @ Dixie Dr / Dixie Downs Rd, STG"
    },
    {
      id: "10383",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15092.jpeg",
      name: "Sunset Blvd / SR-8 @ Valley View Dr, STG"
    },
    {
      id: "10384",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15093.jpeg",
      name: "Sunset Blvd / SR-8 @ Westridge Dr, STG"
    },
    {
      id: "11755",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16563.jpeg",
      name: "Washington Fields Rd @ 2000 S, WAS"
    },
    {
      id: "11906",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16714.jpeg",
      name: "Washington Fields Rd @ Industrial Rd, WAS"
    },
    {
      id: "11712",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16520.jpeg",
      name: "Washington Fields Rd @ Washington Dam Rd, WAS"
    }
  ],
  "Provo / Orem": [
    {
      id: "11355",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16164.jpg",
      name: "1200 W / College Dr @ UVU Event Center Dr / 1000 S, ORM"
    },
    {
      id: "10027",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14736.jpeg",
      name: "1200 W @ 400 S, ORM"
    },
    {
      id: "10678",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15487.jpeg",
      name: "12300 S / SR-71 @ 150 E, DPR"
    },
    {
      id: "10575",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15384.jpeg",
      name: "12300 S / SR-71 @ 265 W, DPR"
    },
    {
      id: "304",
      url: "http://www.udottraffic.utah.gov/1_devices/aux304.jpeg",
      name: "12300 S / SR-71 @ 700 E / SR-71, DPR"
    },
    {
      id: "11967",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16775.jpeg",
      name: "12600 S / Herriman Blvd @ Main St / 5040 W, HRR"
    },
    {
      id: "11827",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16635.jpeg",
      name: "12600 S / SR-71 @ 2700 W / Silverwolf Blvd, RVT"
    },
    {
      id: "11512",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16321.jpeg",
      name: "12600 S @ 4150 W, RVT"
    },
    {
      id: "11026",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15835.jpeg",
      name: "12600 S @ Legacy Ranch Blvd / 4570 W, RVT"
    },
    {
      id: "11638",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16447.jpeg",
      name: "14600 S / Highland Dr / SR-140 @ Minuteman Dr, DPR"
    },
    {
      id: "11507",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16316.jpeg",
      name: "14600 S / SR-140 @ Pony Express Dr / SR-287, DPR"
    },
    {
      id: "9818",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14528.jpeg",
      name: "1600 N @ 400 E, ORM"
    },
    {
      id: "9816",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14526.jpeg",
      name: "1600 N @ 800 W, ORM"
    },
    {
      id: "9817",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14527.jpeg",
      name: "1600 N @ Main St, ORM"
    },
    {
      id: "9815",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14525.jpeg",
      name: "1600 N ORM / 600 S LDN @ 1200 W ORM / 400 W, LDN"
    },
    {
      id: "11247",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-85-MP2-all.gif",
      name: "2100 N / SR-194 Liveview WB @ Milepost 2.6, LHI"
    },
    {
      id: "10721",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15530.jpeg",
      name: "2100 N / SR-194 WB @ 2300 W, LHI"
    },
    {
      id: "12316",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17115.jpeg",
      name: "2100 N / SR-194 WB @ 3600 W, LHI"
    },
    {
      id: "9535",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14302.jpeg",
      name: "2200 N @ Timpview Dr / 650 E, PVO"
    },
    {
      id: "9536",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14303.jpeg",
      name: "2230 N @ Canyon Rd, PVO"
    },
    {
      id: "9538",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14305.jpeg",
      name: "2230 N @ Freedom Blvd / 200 W, PVO"
    },
    {
      id: "9508",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14275.jpeg",
      name: "300 S / State St / US-89 @ 700 E, PVO"
    },
    {
      id: "11838",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16646.jpeg",
      name: "300 S / US-89 @ 400 E, PVO"
    },
    {
      id: "9540",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14307.jpeg",
      name: "3700 N @ 300 W, PVO"
    },
    {
      id: "9822",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14532.jpeg",
      name: "400 N @ 1200 W, ORM"
    },
    {
      id: "12511",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17302.jpeg",
      name: "400 N @ Orem Blvd, ORM"
    },
    {
      id: "9542",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14309.jpeg",
      name: "4800 N @ 300 W / Riverbottom Rd, PVO"
    },
    {
      id: "12219",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17027.jpeg",
      name: "500 N @ 200 E, PVO"
    },
    {
      id: "9526",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14293.jpeg",
      name: "500 W / State St / US-89 @ Cougar Blvd / Columbia Ln / 1230 N, PVO"
    },
    {
      id: "9520",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14287.jpeg",
      name: "500 W / US-89 @ 500 N, PVO"
    },
    {
      id: "9525",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14292.jpeg",
      name: "500 W / US-89 @ 800 N, PVO"
    },
    {
      id: "9550",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14317.jpeg",
      name: "500 W / US-89 @ Center St / SR-114, PVO"
    },
    {
      id: "9676",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14404.jpeg",
      name: "500 W @ 920 S, PVO"
    },
    {
      id: "10674",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15483.jpeg",
      name: "700 E / SR-71 @ 11000 S, SND"
    },
    {
      id: "10873",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15682.jpeg",
      name: "700 E / SR-71 @ 11400 S, SND"
    },
    {
      id: "10029",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14738.jpeg",
      name: "800 E @ 1000 S, ORM"
    },
    {
      id: "11593",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16402.jpeg",
      name: "800 E @ 1200 N, ORM"
    },
    {
      id: "12512",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17303.jpeg",
      name: "800 E @ 1200 S, ORM"
    },
    {
      id: "9830",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14540.jpeg",
      name: "800 E @ 800 S, ORM"
    },
    {
      id: "10566",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15375.jpeg",
      name: "800 N / SR-52 @ 1200 W, ORM"
    },
    {
      id: "10026",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14735.jpeg",
      name: "800 N / SR-52 @ 400 E, ORM"
    },
    {
      id: "9274",
      url: "http://www.udottraffic.utah.gov/1_devices/aux403.jpeg",
      name: "800 N / SR-52 @ 800 E, ORM"
    },
    {
      id: "9821",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14531.jpeg",
      name: "800 N / SR-52 @ 800 W, ORM"
    },
    {
      id: "11390",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16199.jpeg",
      name: "800 N / SR-52 @ Palisade Dr / 1300 E, ORM"
    },
    {
      id: "10028",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14737.jpeg",
      name: "800 S @ 400 W, ORM"
    },
    {
      id: "12514",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17305.jpeg",
      name: "800 S @ Main St, ORM"
    },
    {
      id: "12513",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17304.jpeg",
      name: "800 S @ Orem Blvd, ORM"
    },
    {
      id: "10497",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15306.jpeg",
      name: "820 N @ Independence Ave, PVO"
    },
    {
      id: "9621",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14383.jpeg",
      name: "900 E @ 700 N, PVO"
    },
    {
      id: "9532",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14299.jpeg",
      name: "900 E @ Birch Ln / Heritage Dr / 1200 N, PVO"
    },
    {
      id: "9509",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14276.jpeg",
      name: "900 E @ Center St, PVO"
    },
    {
      id: "9534",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14301.jpeg",
      name: "900 E @ Temple View Dr, PVO"
    },
    {
      id: "9533",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14300.jpeg",
      name: "900 E @ University Pkwy, PVO"
    },
    {
      id: "11951",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16759.jpeg",
      name: "Bangerter Hwy / 200 E / SR-154 @ 13800 S, DPR"
    },
    {
      id: "12447",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17238.jpeg",
      name: "Bangerter Hwy / SR-154 @ 11200 S, SJO"
    },
    {
      id: "9769",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14479.jpeg",
      name: "Bangerter Hwy / SR-154 @ 11400 S, SJO"
    },
    {
      id: "12405",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17204.jpeg",
      name: "Bangerter Hwy / SR-154 @ 11500 S, SJO"
    },
    {
      id: "306",
      url: "http://www.udottraffic.utah.gov/1_devices/aux306.jpeg",
      name: "Bangerter Hwy / SR-154 @ 12600 S / SR-71, RVT"
    },
    {
      id: "9768",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14478.jpeg",
      name: "Bangerter Hwy / SR-154 @ 13400 S, RVT"
    },
    {
      id: "11881",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16689.jpeg",
      name: "Bangerter Hwy / SR-154 @ 200 W / MP 0.78, DPR"
    },
    {
      id: "9767",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14477.jpeg",
      name: "Bangerter Hwy / SR-154 @ 2700 W, BLF"
    },
    {
      id: "11880",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16688.jpeg",
      name: "Bangerter Hwy / SR-154 @ 300 W / MP 1.0, DPR"
    },
    {
      id: "11879",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16687.jpeg",
      name: "Bangerter Hwy / SR-154 @ 500 W / MP 1.25, DPR"
    },
    {
      id: "11878",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16686.jpeg",
      name: "Bangerter Hwy / SR-154 @ 600 W / MP 1.45, DPR"
    },
    {
      id: "11877",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16685.jpeg",
      name: "Bangerter Hwy / SR-154 @ 700 W / MP 1.6, DPR"
    },
    {
      id: "11876",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16684.jpeg",
      name: "Bangerter Hwy / SR-154 @ 800 W / MP 1.86, DPR"
    },
    {
      id: "9766",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14476.jpeg",
      name: "Bangerter Hwy / SR-154 EB @ Redwood Rd / SR-68, BLF"
    },
    {
      id: "11603",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16412.jpeg",
      name: "Bangerter Hwy / SR-154 WB @ Redwood Rd / SR-68, RVT"
    },
    {
      id: "9778",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14488.jpeg",
      name: "Canyon Rd @ Foothill Dr / 4525 N, PVO"
    },
    {
      id: "10567",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15376.jpeg",
      name: "Center St / SR-114 @ 1600 W, PVO"
    },
    {
      id: "9519",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14286.jpeg",
      name: "Center St / SR-114 @ 900 W, PVO"
    },
    {
      id: "9312",
      url: "http://www.udottraffic.utah.gov/1_devices/aux413.jpeg",
      name: "Center St @ 1200 W, ORM"
    },
    {
      id: "12510",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17301.jpeg",
      name: "Center St @ 220 W / Garden Park Dr, ORM"
    },
    {
      id: "9513",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14280.jpeg",
      name: "Center St @ 300 W, PVO"
    },
    {
      id: "9827",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14537.jpeg",
      name: "Center St @ 400 E / Tiger Way, ORM"
    },
    {
      id: "9310",
      url: "http://www.udottraffic.utah.gov/1_devices/aux411.jpeg",
      name: "Center St @ 400 W, ORM"
    },
    {
      id: "9317",
      url: "http://www.udottraffic.utah.gov/1_devices/aux418.jpeg",
      name: "Center St @ 800 E, ORM"
    },
    {
      id: "9825",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14535.jpeg",
      name: "Center St @ 800 W, ORM"
    },
    {
      id: "9826",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14536.jpeg",
      name: "Center St @ Orem Blvd, ORM"
    },
    {
      id: "11189",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15998.jpeg",
      name: "Charleston Rd / 3600 W / SR-113 @ US-189, CHR"
    },
    {
      id: "10109",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14818.jpeg",
      name: "Columbia Ln @ 1700 N / 950 W, PVO"
    },
    {
      id: "11028",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15837.jpeg",
      name: "Cory B Wride Memorial Hwy / SR-73 @ Foothill Blvd / 800 W, SSP"
    },
    {
      id: "11711",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16519.jpeg",
      name: "Cory B Wride Memorial Hwy / SR-73 @ Mt Airey Dr / MP 33.86, EAG"
    },
    {
      id: "11029",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15838.jpeg",
      name: "Cory B Wride Memorial Hwy / SR-73 @ Ranches Pkwy, EAG"
    },
    {
      id: "9524",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14291.jpeg",
      name: "Cougar Blvd / 1230 N @ Freedom Blvd / 200 W, PVO"
    },
    {
      id: "9514",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14281.jpeg",
      name: "Freedom Blvd / 200 W @ 100 N, PVO"
    },
    {
      id: "9512",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14279.jpeg",
      name: "Freedom Blvd / 200 W @ 100 S, PVO"
    },
    {
      id: "9523",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14290.jpeg",
      name: "Freedom Blvd / 200 W @ 1100 N, PVO"
    },
    {
      id: "9511",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14278.jpeg",
      name: "Freedom Blvd / 200 W @ 300 S / US-89, PVO"
    },
    {
      id: "9521",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14288.jpeg",
      name: "Freedom Blvd / 200 W @ 500 N, PVO"
    },
    {
      id: "9522",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14289.jpeg",
      name: "Freedom Blvd / 200 W @ 800 N, PVO"
    },
    {
      id: "9503",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14270.jpeg",
      name: "Freedom Blvd / 200 W @ 920 S, PVO"
    },
    {
      id: "9831",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14541.jpeg",
      name: "Geneva Rd / SR-114 @ 1000 S / Plant Ln, ORM"
    },
    {
      id: "10316",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15025.jpeg",
      name: "Geneva Rd / SR-114 @ 1390 N, PVO"
    },
    {
      id: "10560",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15369.jpeg",
      name: "Geneva Rd / SR-114 @ 1600 N ORM / 600 S LDN / SR-241, LDN"
    },
    {
      id: "9828",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14538.jpeg",
      name: "Geneva Rd / SR-114 @ 400 S, ORM"
    },
    {
      id: "10565",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15374.jpeg",
      name: "Geneva Rd / SR-114 @ 700 N / SR-129, LDN"
    },
    {
      id: "9820",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14530.jpg",
      name: "Geneva Rd / SR-114 @ 800 N / SR-52, ORM"
    },
    {
      id: "11882",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16690.jpeg",
      name: "Geneva Rd / SR-114 @ 800 S / Springwater Dr, ORM"
    },
    {
      id: "9714",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14284.jpeg",
      name: "Geneva Rd / SR-114 @ 820 N, PVO"
    },
    {
      id: "9515",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14282.jpeg",
      name: "Geneva Rd / SR-114 @ Center St / SR-114, PVO"
    },
    {
      id: "9824",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14534.jpeg",
      name: "Geneva Rd / SR-114 @ Center St, ORM"
    },
    {
      id: "10252",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14961.jpeg",
      name: "Geneva Rd / SR-114 @ University Pkwy / SR-265, ORM"
    },
    {
      id: "10895",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15704.jpeg",
      name: "I-15 NB @ 100 N / MP 274.15, LDN"
    },
    {
      id: "10694",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15503.jpeg",
      name: "I-15 NB @ 11500 S / MP 292.35, DPR"
    },
    {
      id: "9656",
      url: "http://www.udottraffic.utah.gov/1_devices/aux356.jpeg",
      name: "I-15 NB @ 11900 S / MP 291.98, DPR"
    },
    {
      id: "10306",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15015.jpeg",
      name: "I-15 NB @ 1200 N / MP 281.15, LHI"
    },
    {
      id: "9653",
      url: "http://www.udottraffic.utah.gov/1_devices/aux353.jpeg",
      name: "I-15 NB @ 12300 S / SR-71 / MP 291.4, DPR"
    },
    {
      id: "11721",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16529.jpeg",
      name: "I-15 NB @ 14000 S / MP 289.34, DPR"
    },
    {
      id: "11724",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16532.jpeg",
      name: "I-15 NB @ 14500 S / MP 288.54, DPR"
    },
    {
      id: "11035",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15844.jpeg",
      name: "I-15 NB @ 1460 N / MP 267.19, PVO"
    },
    {
      id: "11727",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16535.jpeg",
      name: "I-15 NB @ 15200 S / MP 287.6, DPR"
    },
    {
      id: "11728",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16536.jpeg",
      name: "I-15 NB @ 15400 S / MP 287.23, DPR"
    },
    {
      id: "11033",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15842.jpeg",
      name: "I-15 NB @ 1650 S / MP 268.37, ORM"
    },
    {
      id: "10083",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14792.jpeg",
      name: "I-15 NB @ 1850 N / MP 282, LHI"
    },
    {
      id: "11032",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15841.jpeg",
      name: "I-15 NB @ 200 S / MP 273.67, LDN"
    },
    {
      id: "10882",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15691.jpeg",
      name: "I-15 NB @ 200 W / MP 277.71, AFK"
    },
    {
      id: "11034",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15843.jpeg",
      name: "I-15 NB @ 2000 S / MP 267.86, ORM"
    },
    {
      id: "11735",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16543.jpeg",
      name: "I-15 NB @ 3800 N / Adobe Way / MP 284.3, LHI"
    },
    {
      id: "11734",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16542.jpeg",
      name: "I-15 NB @ 4200 N / MP 284.65, LHI"
    },
    {
      id: "10685",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15494.jpeg",
      name: "I-15 NB @ 500 E / SR-180 / MP 276.5, AFK"
    },
    {
      id: "9835",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14545.jpeg",
      name: "I-15 NB @ 500 S / MP 273.04, LDN"
    },
    {
      id: "10307",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15016.jpeg",
      name: "I-15 NB @ 600 E / MP 280.3, LHI"
    },
    {
      id: "9271",
      url: "http://www.udottraffic.utah.gov/1_devices/aux400.jpeg",
      name: "I-15 NB @ 800 N / SR-52 / MP 271.7, ORM"
    },
    {
      id: "11049",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15858.jpeg",
      name: "I-15 NB @ 920 S / MP 264.54, PVO"
    },
    {
      id: "11014",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15823.jpeg",
      name: "I-15 NB @ Center St / SR-114 / MP 265.62, PVO"
    },
    {
      id: "11054",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15863.jpeg",
      name: "I-15 NB @ East Bay / MP 262.55, PVO"
    },
    {
      id: "250",
      url: "http://www.udottraffic.utah.gov/1_devices/aux250.jpeg",
      name:
        "I-15 NB @ Highland Alpine Exit / SR-92 / Timpanogos Hwy / Club House Dr / MP 284, LHI"
    },
    {
      id: "10879",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15688.jpeg",
      name: "I-15 NB @ Main St / SR-73 / MP 279.77, LHI"
    },
    {
      id: "10548",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15357.jpeg",
      name: "I-15 NB @ Pioneer Crossing / Main St / SR-145 / MP 278.58, AFK"
    },
    {
      id: "10884",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15693.jpeg",
      name: "I-15 NB @ Pleasant Grove Blvd / MP 275.35, PLG"
    },
    {
      id: "9544",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14311.jpeg",
      name: "I-15 NB @ University Ave / US-189 / 1860 S / MP 263.4, PVO"
    },
    {
      id: "9279",
      url: "http://www.udottraffic.utah.gov/1_devices/aux407.jpeg",
      name: "I-15 NB @ University Pkwy / SR-265 / MP 269.1, ORM"
    },
    {
      id: "9654",
      url: "http://www.udottraffic.utah.gov/1_devices/aux357.jpeg",
      name: "I-15 SB @ 11000 S / MP 293, SJO"
    },
    {
      id: "10695",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15504.jpeg",
      name: "I-15 SB @ 11400 S / MP 292.62, SJO"
    },
    {
      id: "12403",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17202.jpeg",
      name: "I-15 SB @ 12500 S / MP 291.17, DPR"
    },
    {
      id: "11752",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16560.jpeg",
      name: "I-15 SB @ 12600 S / MP 291.1, DPR"
    },
    {
      id: "11751",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16559.jpeg",
      name: "I-15 SB @ 13000 S / MP 290.6, DPR"
    },
    {
      id: "11750",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16558.jpeg",
      name: "I-15 SB @ 13400 S / MP 290.08, DPR"
    },
    {
      id: "11722",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16530.jpeg",
      name: "I-15 SB @ 14200 S / MP 289.09, DPR"
    },
    {
      id: "11723",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16531.jpeg",
      name: "I-15 SB @ 14300 S / MP 288.84, DPR"
    },
    {
      id: "11725",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16533.jpeg",
      name: "I-15 SB @ 14600 S / Highland Dr / SR-140 / MP 288.3, BLF"
    },
    {
      id: "11726",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16534.jpeg",
      name: "I-15 SB @ 15000 S / MP 287.91, BLF"
    },
    {
      id: "11729",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16537.jpeg",
      name: "I-15 SB @ 15800 S / MP 286.64, BLF"
    },
    {
      id: "10946",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15755.jpeg",
      name: "I-15 SB @ 1600 N / SR-241 / MP 272.82, ORM"
    },
    {
      id: "11730",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16538.jpeg",
      name: "I-15 SB @ 16200 S / MP 286.3, BLF"
    },
    {
      id: "11048",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15857.jpeg",
      name: "I-15 SB @ 200 S / MP 265.36, PVO"
    },
    {
      id: "10305",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15014.jpeg",
      name: "I-15 SB @ 2350 N / MP 282.7, LHI"
    },
    {
      id: "259",
      url: "http://www.udottraffic.utah.gov/1_devices/aux259.jpeg",
      name: "I-15 SB @ 2750 N / MP 283.2, LHI"
    },
    {
      id: "10102",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14811.jpeg",
      name: "I-15 SB @ 300 N / MP 274.61, LDN"
    },
    {
      id: "10881",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15690.jpeg",
      name: "I-15 SB @ 400 S / MP 279.32, LHI"
    },
    {
      id: "11733",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16541.jpeg",
      name: "I-15 SB @ 4600 N / MP 285.12, LHI"
    },
    {
      id: "11732",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16540.jpeg",
      name: "I-15 SB @ 4800 N / MP 285.37, LHI"
    },
    {
      id: "10894",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15703.jpeg",
      name: "I-15 SB @ 600 N / MP 271.44, ORM"
    },
    {
      id: "9902",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14611.jpeg",
      name: "I-15 SB @ 650 S / MP 269.87, ORM"
    },
    {
      id: "10947",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15756.jpeg",
      name: "I-15 SB @ 820 N / MP 266.54, PVO"
    },
    {
      id: "9700",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14408.jpeg",
      name: "I-15 SB @ Bangerter Hwy / SR-154 / MP 289.83, DPR"
    },
    {
      id: "10926",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15735.jpeg",
      name: "I-15 SB @ Center St / MP 270.67, ORM"
    },
    {
      id: "10885",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15694.jpeg",
      name: "I-15 SB @ Main St / SR-73 / MP 279.64, LHI"
    },
    {
      id: "10549",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15358.jpeg",
      name: "I-15 SB @ Pioneer Crossing / Main St / SR-145 / MP 278.6, AFK"
    },
    {
      id: "11731",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16539.jpeg",
      name: "I-15 SB @ Point of the Mountain / MP 285.78, UT"
    },
    {
      id: "11050",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15859.jpeg",
      name: "I-15 SB @ University Ave / 2260 S / MP 263, PVO"
    },
    {
      id: "11038",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15847.jpeg",
      name: "I-15 SB @ University Pkwy / SR-265 / MP 269.12, ORM"
    },
    {
      id: "11857",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16665.jpeg",
      name: "Lakeview Pkwy @ 500 W, PVO"
    },
    {
      id: "10546",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15355.jpeg",
      name: "Main St / SR-145 @ Kawakami Dr / 600 W, AFK"
    },
    {
      id: "10636",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15445.jpeg",
      name: "Main St / US-40 @ 100 S / MP 17, HBR"
    },
    {
      id: "10637",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15446.jpeg",
      name: "Main St / US-40 @ 500 N / MP 16.4, HBR"
    },
    {
      id: "10628",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15437.jpeg",
      name: "Main St / US-40 @ US-189 / 1200 S / MP 17.94, HBR"
    },
    {
      id: "10249",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14958.jpeg",
      name: "Main St / US-89 / SR-145 @ State St / US-89, AFK"
    },
    {
      id: "10556",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15365.jpeg",
      name: "Main St / US-89 @ 100 E / Alpine Hwy / SR-74, AFK"
    },
    {
      id: "10676",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15485.jpeg",
      name: "Minuteman Dr @ 12450 S, DPR"
    },
    {
      id: "11016",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15825.jpeg",
      name: "Mountain View / SR-85 NB @ 12600 S, RVT"
    },
    {
      id: "11017",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15826.jpeg",
      name: "Mountain View / SR-85 NB @ 13400 S, RVT"
    },
    {
      id: "12451",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17242.jpeg",
      name: "Mountain View / SR-85 NB @ Harvest Hills Blvd, SSP"
    },
    {
      id: "11018",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15827.jpeg",
      name: "Mountain View / SR-85 NB @ Porter Rockwell Blvd, HRR"
    },
    {
      id: "11756",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16564.jpeg",
      name: "Mountain View / SR-85 NB @ South Jordan Pkwy / 11000 S, SJO"
    },
    {
      id: "11357",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-85%20Juniper-all.gif",
      name: "Mountain View / SR-85 RWIS NB @ 14600 S / Juniper, HRR"
    },
    {
      id: "11022",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15831.jpeg",
      name: "Mountain View / SR-85 SB @ 11450 S, SJO"
    },
    {
      id: "11019",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15828.jpeg",
      name: "Mountain View / SR-85 SB @ 12200 S, HRR"
    },
    {
      id: "11025",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15834.jpeg",
      name: "Mountain View / SR-85 SB @ 13200 S, RVT"
    },
    {
      id: "11020",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15829.jpeg",
      name: "Mountain View / SR-85 SB @ Daybreak Pkwy, SJO"
    },
    {
      id: "11868",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16676.jpeg",
      name: "Mountain View / SR-85 SB @ Lake Ave / 11400 S, SJO"
    },
    {
      id: "11383",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16192.jpeg",
      name: "North County Blvd / 1100 E / SR-129 @ 300 N, AFK"
    },
    {
      id: "11384",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16193.jpeg",
      name: "North County Blvd / 1100 E / SR-129 @ 700 N, AFK"
    },
    {
      id: "11382",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16191.jpeg",
      name:
        "North County Blvd / 1100 E, AFK / 2000 W, PLG / SR-129 @ 50 S, AFK / 1100 N, PLG, AFK"
    },
    {
      id: "11385",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16194.jpeg",
      name:
        "North County Blvd / 4800 W / SR-129 @ Cedar Hills Dr / 10100 N, HLD"
    },
    {
      id: "11779",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16587.jpeg",
      name: "North County Blvd / 900 E / SR-129 @ 1100 N, AFK"
    },
    {
      id: "9829",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14539.jpeg",
      name: "Orem Blvd @ 400 S, ORM"
    },
    {
      id: "10547",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15356.jpeg",
      name: "Pioneer Crossing / SR-145 @ 1020 W, AFK"
    },
    {
      id: "10537",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15346.jpeg",
      name: "Pioneer Crossing / SR-145 @ 10600 W, SSP"
    },
    {
      id: "10541",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15350.jpeg",
      name: "Pioneer Crossing / SR-145 @ 1100 W, LHI"
    },
    {
      id: "10539",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15348.jpeg",
      name: "Pioneer Crossing / SR-145 @ 1700 W, LHI"
    },
    {
      id: "10538",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15347.jpeg",
      name: "Pioneer Crossing / SR-145 @ 2300 W / Saratoga Rd, LHI"
    },
    {
      id: "10543",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15352.jpeg",
      name: "Pioneer Crossing / SR-145 @ 300 E, LHI"
    },
    {
      id: "10542",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15351.jpeg",
      name: "Pioneer Crossing / SR-145 @ 500 W, LHI"
    },
    {
      id: "10619",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15428.jpeg",
      name: "Pioneer Crossing / SR-145 @ Center St, LHI"
    },
    {
      id: "10545",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15354.jpeg",
      name: "Pioneer Crossing / SR-145 @ Mill Pond Rd, LHI"
    },
    {
      id: "11391",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16200.jpeg",
      name: "Pleasant Grove Blvd @ 1300 W / Proctor Ln, PLG"
    },
    {
      id: "10558",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15367.jpeg",
      name:
        "Pleasant Grove Blvd @ 2000 W / North County Blvd, PLG / 700 N, LDN / SR-129, PLG"
    },
    {
      id: "11674",
      url: "http://www.udottraffic.utah.gov/1_devices/RWIS%20Portable5.gif",
      name: "Portable RWIS 5"
    },
    {
      id: "11024",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15833.jpeg",
      name: "Porter Rockwell Blvd @ 2300 W, HRR"
    },
    {
      id: "9543",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14310.jpeg",
      name: "Provo Canyon Rd / US-189 @ 800 N / SR-52, ORM"
    },
    {
      id: "10336",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15045.jpeg",
      name:
        "Provo Canyon Rd / US-189 @ Alpine Scenic Hwy / SR-92 / MP 14.26, UT"
    },
    {
      id: "10333",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15042.jpeg",
      name: "Provo Canyon Rd / US-189 @ Bridal Veil Falls / MP 11.15, UT"
    },
    {
      id: "10332",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15041.jpeg",
      name: "Provo Canyon Rd / US-189 @ Canyon Glen Park / MP 9.98, UT"
    },
    {
      id: "10331",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15040.jpeg",
      name: "Provo Canyon Rd / US-189 @ Canyon View Park / MP 8.46, PVO"
    },
    {
      id: "10339",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15048.jpeg",
      name: "Provo Canyon Rd / US-189 @ Lower Deer Creek Rd / MP 17.14, WA"
    },
    {
      id: "10338",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15047.jpeg",
      name: "Provo Canyon Rd / US-189 @ Meadow Dr / MP 16.25, WA"
    },
    {
      id: "10334",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15043.jpeg",
      name: "Provo Canyon Rd / US-189 @ Milepost 12.21, UT"
    },
    {
      id: "11705",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16513.jpeg",
      name: "Provo Canyon Rd / US-189 @ Mouth of Provo Canyon / MP 8.26, ORM"
    },
    {
      id: "11706",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16514.jpeg",
      name: "Provo Canyon Rd / US-189 @ Springdell / MP 9.68, UT"
    },
    {
      id: "10335",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15044.jpeg",
      name: "Provo Canyon Rd / US-189 @ Vivian Park / MP 13.16, UT"
    },
    {
      id: "11015",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15824.jpeg",
      name: "Redwood Rd / SR-68 @ 11400 S, SJO"
    },
    {
      id: "305",
      url: "http://www.udottraffic.utah.gov/1_devices/aux305.jpeg",
      name: "Redwood Rd / SR-68 @ 12600 S / SR-71, RVT"
    },
    {
      id: "12260",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17059.jpeg",
      name: "Redwood Rd / SR-68 @ 12800 S, RVT"
    },
    {
      id: "12261",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17060.jpeg",
      name: "Redwood Rd / SR-68 @ 13400 S, RVT"
    },
    {
      id: "10328",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15037.jpeg",
      name: "Redwood Rd / SR-68 @ 14400 S / SR-140, BLF"
    },
    {
      id: "10723",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15532.jpeg",
      name: "Redwood Rd / SR-68 @ 2100 N / SR-194, LHI"
    },
    {
      id: "12144",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16952.jpeg",
      name: "Redwood Rd / SR-68 @ Grandview Blvd, SSP"
    },
    {
      id: "12438",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17229.jpeg",
      name: "Redwood Rd / SR-68 @ Parkway Blvd / Founders Blvd, SSP"
    },
    {
      id: "10536",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15345.jpeg",
      name: "Redwood Rd / SR-68 @ Pioneer Crossing / SR-145, SSP"
    },
    {
      id: "11646",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16454.jpeg",
      name: "Redwood Rd / SR-68 @ Pony Express Pkwy, SSP"
    },
    {
      id: "11023",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15832.jpeg",
      name: "Redwood Rd / SR-68 @ Porter Rockwell Blvd, BLF"
    },
    {
      id: "12428",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17221.jpeg",
      name: "Redwood Rd / SR-68 @ Ring Rd, SSP"
    },
    {
      id: "10330",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15039.jpeg",
      name: "Redwood Rd / SR-68 @ SR-73 / Cedar Fort Rd, SSP"
    },
    {
      id: "12429",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17222.jpeg",
      name: "Redwood Rd / SR-68 @ Stillwater Dr, SSP"
    },
    {
      id: "10329",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15038.jpeg",
      name: "Redwood Rd / SR-68 @ W. G. Williams Ave, UT"
    },
    {
      id: "10766",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-68-mp-23.gif",
      name: "Redwood Rd / SR-68 Liveview SB @ Milepost 22.93, UT"
    },
    {
      id: "10834",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-73-mp34.gif",
      name: "SR-73 Liveview EB @ Milepost 34.57, SSP"
    },
    {
      id: "10852",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-73-mp-29.gif",
      name: "SR-73 Liveview WB @ Eagle Mountain Blvd / MP 29.78, EAG"
    },
    {
      id: "10853",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-92-mp-14.gif",
      name: "SR-92 Liveview WB @ Alpine Loop Scenic Hwy / MP 14.37, UT"
    },
    {
      id: "10722",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15531.jpeg",
      name: "State St / US-89 / I-15 SB Exit @ 2100 N / SR-194, LHI"
    },
    {
      id: "10561",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15370.jpeg",
      name: "State St / US-89 @ 1100 E, AFK / 2000 W, PLG / SR-129, PLG"
    },
    {
      id: "12341",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17140.jpeg",
      name: "State St / US-89 @ 11000 S, SND"
    },
    {
      id: "12342",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17141.jpeg",
      name: "State St / US-89 @ 11235 S / Auto Mall Dr, SND"
    },
    {
      id: "10686",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15495.jpeg",
      name: "State St / US-89 @ 11400 S, SND"
    },
    {
      id: "9819",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14529.jpg",
      name: "State St / US-89 @ 1200 N, ORM"
    },
    {
      id: "10677",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15486.jpeg",
      name: "State St / US-89 @ 12200 S, DPR"
    },
    {
      id: "11258",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16067.jpeg",
      name: "State St / US-89 @ 1320 S, PVO"
    },
    {
      id: "9272",
      url: "http://www.udottraffic.utah.gov/1_devices/aux401.jpeg",
      name: "State St / US-89 @ 1600 N, ORM"
    },
    {
      id: "9834",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14544.jpeg",
      name: "State St / US-89 @ 1600 S, ORM"
    },
    {
      id: "9527",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14294.jpeg",
      name: "State St / US-89 @ 1720 N / Grandview Ln, PVO"
    },
    {
      id: "9554",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14321.jpeg",
      name: "State St / US-89 @ 1860 S / Slate Canyon Dr, PVO"
    },
    {
      id: "11757",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16565.jpeg",
      name: "State St / US-89 @ 200 S / 220 S, PLG"
    },
    {
      id: "12049",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16857.jpeg",
      name: "State St / US-89 @ 300 E, AFK"
    },
    {
      id: "10559",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15368.jpeg",
      name: "State St / US-89 @ 400 N, ORM"
    },
    {
      id: "10251",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14960.jpeg",
      name: "State St / US-89 @ 500 E / SR-180, AFK"
    },
    {
      id: "10574",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15383.jpeg",
      name: "State St / US-89 @ 700 S / 300 E, PLG"
    },
    {
      id: "9273",
      url: "http://www.udottraffic.utah.gov/1_devices/aux402.jpeg",
      name: "State St / US-89 @ 800 N / SR-52, ORM"
    },
    {
      id: "9314",
      url: "http://www.udottraffic.utah.gov/1_devices/aux415.jpeg",
      name: "State St / US-89 @ 800 S, ORM"
    },
    {
      id: "9277",
      url: "http://www.udottraffic.utah.gov/1_devices/aux404.jpeg",
      name: "State St / US-89 @ Center St, ORM"
    },
    {
      id: "10250",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14959.jpeg",
      name: "State St / US-89 @ Main St / 1200 E / SR-73, LHI"
    },
    {
      id: "10569",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15378.jpeg",
      name: "State St / US-89 @ Main St / SR-114, PLG"
    },
    {
      id: "10557",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15366.jpeg",
      name: "State St / US-89 @ Pleasant Grove Blvd / Center St, PLG"
    },
    {
      id: "9278",
      url: "http://www.udottraffic.utah.gov/1_devices/aux405.jpeg",
      name: "State St / US-89 @ University Pkwy / SR-265, ORM"
    },
    {
      id: "11666",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16474.jpeg",
      name: "Timpanogos Hwy / 11000 N / SR-92 @ 6000 W, HLD"
    },
    {
      id: "11758",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16566.jpeg",
      name: "Timpanogos Hwy / 11000 N / SR-92 @ 6400 W, HLD"
    },
    {
      id: "11010",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15819.jpeg",
      name:
        "Timpanogos Hwy / 11000 N / SR-92 @ Alpine Hwy / 5300 W / SR-74, HLD"
    },
    {
      id: "11388",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16197.jpeg",
      name:
        "Timpanogos Hwy / 11000 N / SR-92 @ North County Blvd / 4800 W / SR-129, HLD"
    },
    {
      id: "11011",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15820.jpeg",
      name: "Timpanogos Hwy / 3500 N / SR-92 @ 1200 E / Micron, LHI"
    },
    {
      id: "11665",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16473.jpeg",
      name: "Timpanogos Hwy / 3500 N / SR-92 @ 1450 W, LHI"
    },
    {
      id: "11012",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15821.jpeg",
      name: "Timpanogos Hwy / 3500 N / SR-92 @ Center St, LHI"
    },
    {
      id: "11667",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16475.jpeg",
      name: "Timpanogos Hwy / 3500 N / SR-92 @ Morning Vista Rd / 1200 W, LHI"
    },
    {
      id: "11542",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16351.jpeg",
      name:
        "Timpanogos Hwy / Club House Dr / SR-92 @ Ashton Blvd / Maple Loop Dr, LHI"
    },
    {
      id: "11055",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15864.jpeg",
      name: "Triumph Blvd @ Cabelas Blvd, LHI"
    },
    {
      id: "9537",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14304.jpeg",
      name: "University Ave / US-189 @ 2230 N, PVO"
    },
    {
      id: "10276",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14985.jpeg",
      name: "University Ave / US-189 @ 300 S / US-89, PVO"
    },
    {
      id: "9539",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14306.jpeg",
      name: "University Ave / US-189 @ 3700 N, PVO"
    },
    {
      id: "11442",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16251.jpeg",
      name: "University Ave / US-189 @ 4200 N, PVO"
    },
    {
      id: "9541",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14308.jpeg",
      name: "University Ave / US-189 @ 4800 N / Foothill Blvd, PVO"
    },
    {
      id: "9505",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14272.jpeg",
      name: "University Ave / US-189 @ 500 N, PVO"
    },
    {
      id: "11389",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16198.jpeg",
      name: "University Ave / US-189 @ 5200 N / River Park Dr, PVO"
    },
    {
      id: "9528",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14295.jpeg",
      name: "University Ave / US-189 @ 800 N, PVO"
    },
    {
      id: "9502",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14269.jpeg",
      name: "University Ave / US-189 @ 920 S, PVO"
    },
    {
      id: "9504",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14271.jpeg",
      name: "University Ave / US-189 @ Center St, PVO"
    },
    {
      id: "9529",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14296.jpeg",
      name: "University Ave / US-189 @ Cougar Blvd / 1230 N, PVO"
    },
    {
      id: "9553",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14320.jpeg",
      name: "University Ave / US-189 @ University Pkwy / 1650 N / SR-265, PVO"
    },
    {
      id: "12378",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17177.jpeg",
      name: "University Pkwy / 1650 N @ 450 E, PVO"
    },
    {
      id: "9531",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14298.jpeg",
      name: "University Pkwy / 1650 N @ Canyon Rd / 150 E, PVO"
    },
    {
      id: "12282",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17081.jpeg",
      name: "University Pkwy / SR-265 @ 1400 S / MP 2.95, ORM"
    },
    {
      id: "12283",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17082.jpeg",
      name: "University Pkwy / SR-265 @ 1700 S / MP 3.33, ORM"
    },
    {
      id: "9675",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14403.jpeg",
      name: "University Pkwy / SR-265 @ 2230 N / Riverside Ave / 550 W, PVO"
    },
    {
      id: "9832",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14542.jpeg",
      name: "University Pkwy / SR-265 @ 400 W, ORM"
    },
    {
      id: "9316",
      url: "http://www.udottraffic.utah.gov/1_devices/aux417.jpeg",
      name: "University Pkwy / SR-265 @ 800 E, ORM"
    },
    {
      id: "10564",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15373.jpeg",
      name: "University Pkwy / SR-265 @ Freedom Blvd / 200 W, PVO"
    },
    {
      id: "9833",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14543.jpeg",
      name: "University Pkwy / SR-265 @ Main St, ORM"
    },
    {
      id: "9306",
      url: "http://www.udottraffic.utah.gov/1_devices/aux406.jpeg",
      name: "University Pkwy / SR-265 @ Sandhill Rd, ORM"
    },
    {
      id: "10399",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15108.jpeg",
      name: "US-189 @ Deer Creek Dam / MP 17.87, WA"
    },
    {
      id: "11746",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16554.jpeg",
      name: "US-189 @ Milepost 20.89, WA"
    },
    {
      id: "11745",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16553.jpeg",
      name: "US-189 @ Milepost 21.57, WA"
    },
    {
      id: "11190",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15999.jpeg",
      name: "US-189 @ Milepost 25.36, CHR"
    },
    {
      id: "11837",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16645.jpeg",
      name: "US-189 RWIS EB @ Charleston Rd / 3600 W / SR-113 / MP 24.92, CHR"
    },
    {
      id: "12229",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17028.jpeg",
      name: "US-40 @ 2050 S / MP 18.81, HBR"
    }
  ],
  "Park City": [
    {
      id: "11405",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16214.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ Butler / MP 10, SL"
    },
    {
      id: "11406",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16215.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ Cardiff Fork / MP 10.74, SL"
    },
    {
      id: "11403",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16212.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ Dogwood / MP 4.1, SL"
    },
    {
      id: "11404",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16213.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ S-Curves / MP 6.38, SL"
    },
    {
      id: "11407",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16216.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ Silver Fork / MP 12.54, SL"
    },
    {
      id: "11189",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15998.jpeg",
      name: "Charleston Rd / 3600 W / SR-113 @ US-189, CHR"
    },
    {
      id: "11809",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16617.jpeg",
      name: "Deer Valley Dr / SR-224 @ Bonanza Dr, PKC"
    },
    {
      id: "11100",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-224-MP-4-all.gif",
      name: "Deer Valley Dr / SR-224 Liveview NB @ Swede Alley / MP 4.73, PKC"
    },
    {
      id: "150",
      url: "http://www.udottraffic.utah.gov/1_devices/aux150.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Chain Up Area East / MP 129.5, SL"
    },
    {
      id: "158",
      url: "http://www.udottraffic.utah.gov/1_devices/aux158.jpeg",
      name: "I-80 / Parley`s Canyon EB @ East Canyon / SR-65 / MP 133.96, SL"
    },
    {
      id: "68",
      url: "http://www.udottraffic.utah.gov/1_devices/aux68.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Exit 130 to SB I-215 E / MP 128.5, SL"
    },
    {
      id: "153",
      url: "http://www.udottraffic.utah.gov/1_devices/aux153.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Milepost 131.42, SL"
    },
    {
      id: "155",
      url: "http://www.udottraffic.utah.gov/1_devices/aux155.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Milepost 132.53, SL"
    },
    {
      id: "156",
      url: "http://www.udottraffic.utah.gov/1_devices/aux156.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Milepost 132.97, SL"
    },
    {
      id: "159",
      url: "http://www.udottraffic.utah.gov/1_devices/aux159.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Milepost 134.47, SL"
    },
    {
      id: "160",
      url: "http://www.udottraffic.utah.gov/1_devices/aux160.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Milepost 134.93, SL"
    },
    {
      id: "11424",
      url:
        "http://www.udottraffic.utah.gov/1_devices/I-80%20Parleys%20Quarry.gif",
      name:
        "I-80 / Parley`s Canyon RWIS EB @ East Quarry / MP 130.36, SL (Low Lite)"
    },
    {
      id: "69",
      url: "http://www.udottraffic.utah.gov/1_devices/aux69.jpeg",
      name: "I-80 / Parley`s Canyon WB @ Chain Up Area West / MP 129.2, SL"
    },
    {
      id: "157",
      url: "http://www.udottraffic.utah.gov/1_devices/aux157.jpeg",
      name:
        "I-80 / Parley`s Canyon WB @ East Canyon / SR-65 On-ramp / MP 133.61, SL"
    },
    {
      id: "151",
      url: "http://www.udottraffic.utah.gov/1_devices/aux151.jpeg",
      name: "I-80 / Parley`s Canyon WB @ East Quarry / MP 130.38, SL"
    },
    {
      id: "163",
      url: "http://www.udottraffic.utah.gov/1_devices/aux163.jpeg",
      name:
        "I-80 / Parley`s Canyon WB @ Lamb`s Canyon Rd Off-ramp / MP 136.45, SL"
    },
    {
      id: "162",
      url: "http://www.udottraffic.utah.gov/1_devices/aux162.jpeg",
      name:
        "I-80 / Parley`s Canyon WB @ Lamb`s Canyon Rd On-ramp / MP 135.96, SL"
    },
    {
      id: "152",
      url: "http://www.udottraffic.utah.gov/1_devices/aux152.jpeg",
      name: "I-80 / Parley`s Canyon WB @ Milepost 131.1, SL"
    },
    {
      id: "12458",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17249.jpeg",
      name: "I-80 / Parley`s Canyon WB @ Mountain Dell / MP 134.6, SL"
    },
    {
      id: "154",
      url: "http://www.udottraffic.utah.gov/1_devices/aux154.jpeg",
      name: "I-80 / Parley`s Canyon WB @ Mt Aire Canyon Rd / MP 132.01, SL"
    },
    {
      id: "70",
      url: "http://www.udottraffic.utah.gov/1_devices/aux70.jpeg",
      name: "I-80 / Parley`s Canyon WB @ Quarry / MP 129.88, SL"
    },
    {
      id: "161",
      url: "http://www.udottraffic.utah.gov/1_devices/aux161.jpeg",
      name: "I-80 / Parleys Canyon EB @ Milepost 135.46, SL"
    },
    {
      id: "164",
      url: "http://www.udottraffic.utah.gov/1_devices/aux164.jpeg",
      name: "I-80 / Parleys Canyon EB @ Milepost 136.95, SL"
    },
    {
      id: "11393",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16202.jpeg",
      name: "I-80 @ 150 N / MP 163.05, CLV"
    },
    {
      id: "11392",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16201.jpeg",
      name: "I-80 @ Wanship / SR-32 / MP 155.46, SU"
    },
    {
      id: "169",
      url: "http://www.udottraffic.utah.gov/1_devices/aux169.jpeg",
      name: "I-80 EB @ Powderwood Rd / MP 143.46, SU"
    },
    {
      id: "166",
      url: "http://www.udottraffic.utah.gov/1_devices/aux166.jpeg",
      name: "I-80 EB @ Summit Park / MP 140.13, SU"
    },
    {
      id: "168",
      url: "http://www.udottraffic.utah.gov/1_devices/aux168.jpeg",
      name: "I-80 EB @ View Area / MP 142.75, SU"
    },
    {
      id: "171",
      url: "http://www.udottraffic.utah.gov/1_devices/aux171.jpeg",
      name: "I-80 EB @ West of US-40 / MP 145.4, SU"
    },
    {
      id: "10798",
      url: "http://www.udottraffic.utah.gov/1_devices/I-80-Mp-149.gif",
      name: "I-80 Liveview EB @ Milepost 149.62, SU"
    },
    {
      id: "11427",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16236.jpeg",
      name: "I-80 RWIS @ 150 N / MP 163.05, CLV (Low Lite)"
    },
    {
      id: "11426",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16235.jpeg",
      name: "I-80 RWIS @ Wanship / SR-32 / MP 155.46, SU (Low Lite)"
    },
    {
      id: "11425",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20Parleys-Summit-all.gif",
      name: "I-80 RWIS EB @ Parley`s Summit / MP 138.87, SL (Low Lite)"
    },
    {
      id: "167",
      url: "http://www.udottraffic.utah.gov/1_devices/aux167.jpeg",
      name: "I-80 WB @ Jeremy Ranch / MP 141.8, SU"
    },
    {
      id: "170",
      url: "http://www.udottraffic.utah.gov/1_devices/aux170.jpeg",
      name: "I-80 WB @ Kimball Jct / SR-224 / MP 144.22, SU"
    },
    {
      id: "12457",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17248.jpeg",
      name: "I-80 WB @ Milepost 147.56, SU"
    },
    {
      id: "165",
      url: "http://www.udottraffic.utah.gov/1_devices/aux165.jpeg",
      name: "I-80 WB @ Parley`s Summit / MP 138.9, SL"
    },
    {
      id: "172",
      url: "http://www.udottraffic.utah.gov/1_devices/aux172.jpeg",
      name: "I-80 WB @ Silver Creek Jct / US-40 / MP 146.84, SU"
    },
    {
      id: "11810",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16618.jpeg",
      name: "Kearns Blvd / SR-248 @ Bonanza Dr / Monitor Dr, PKC"
    },
    {
      id: "12437",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17228.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Alta Bypass / MP 10.95, SL"
    },
    {
      id: "11457",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16266.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Lisa Falls / MP 6.5, SL"
    },
    {
      id: "11458",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16267.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Seven Turns / MP 7.4, SL"
    },
    {
      id: "11459",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16268.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Tanners Flat / MP 7.94, SL"
    },
    {
      id: "11456",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16265.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Upper Vault / MP 5.96, SL"
    },
    {
      id: "11461",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16270.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ White Pine Parking / MP 9.2, SL"
    },
    {
      id: "11839",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16647.jpeg",
      name: "Little Cottonwood Rd / SR-210 RWIS EB @ Powerhouse / MP 5.67, SL"
    },
    {
      id: "12435",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17226.jpeg",
      name: "Little Cottonwood Rd / SR-210 WB @ Alta / MP 12.16, ALT"
    },
    {
      id: "12436",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17227.jpeg",
      name: "Little Cottonwood Rd / SR-210 WB @ Upper White Pine / MP 9.7, SL"
    },
    {
      id: "11460",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16269.jpeg",
      name: "Little Cottonwood Rd / SR-210 WB @ White Pine / MP 8.7, SL"
    },
    {
      id: "10636",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15445.jpeg",
      name: "Main St / US-40 @ 100 S / MP 17, HBR"
    },
    {
      id: "10637",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15446.jpeg",
      name: "Main St / US-40 @ 500 N / MP 16.4, HBR"
    },
    {
      id: "10628",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15437.jpeg",
      name: "Main St / US-40 @ US-189 / 1200 S / MP 17.94, HBR"
    },
    {
      id: "9895",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14604.jpeg",
      name:
        "North Little Cottonwood Rd / Little Cottonwood Canyon Rd / SR-210 @ Little Cottonwood Rd / SR-209, SL"
    },
    {
      id: "11065",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15874.jpeg",
      name: "Park Ave / SR-224 @ Empire Ave / Deer Valley Dr / SR-224, PKC"
    },
    {
      id: "9385",
      url: "http://www.udottraffic.utah.gov/1_devices/aux9201.jpeg",
      name: "Park Ave / SR-224 @ Kearns Blvd / SR-248, PKC"
    },
    {
      id: "11953",
      url:
        "http://www.udottraffic.utah.gov/1_devices/SR-224-MeadowsDrive-ParkCity.jpeg",
      name: "Park Ave / SR-224 RWIS @ Meadows Dr, PKC"
    },
    {
      id: "12164",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16972.jpeg",
      name: "Portable RWIS 3"
    },
    {
      id: "9386",
      url: "http://www.udottraffic.utah.gov/1_devices/aux9236.jpeg",
      name: "SR-224 @ Olympic Pkwy / Newpark Blvd /  MP 11.16, SU"
    },
    {
      id: "11129",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-224-MP-8-all.gif",
      name:
        "SR-224 Liveview SB @ Canyon Resort Dr / Park West Village / MP 8.76, SU"
    },
    {
      id: "11252",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-248-mile4-7all.gif",
      name:
        "SR-248 / 1040 W Liveview EB @ Jordanelle Pkwy / Browns Canyon Rd / 13970 N / MP 4.88, WA"
    },
    {
      id: "10759",
      url: "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR248.gif",
      name: "SR-248 RWIS EB @ Milepost 8.95, WA"
    },
    {
      id: "11027",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-32%20Mile%204-all.gif",
      name: "SR-32 Liveview EB @ Milepost 4.17, WA"
    },
    {
      id: "11476",
      url: "http://www.udottraffic.utah.gov/1_devices/sr-32-mp-23.gif",
      name: "SR-32 Liveview SB @ Milepost 23, SU"
    },
    {
      id: "11500",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-65%20@%20big-mountain-pass.gif",
      name: "SR-65 RWIS NB @ Big Mountain Pass / SL-MN Co Line / MP 8.4, SL"
    },
    {
      id: "11114",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-66-MP-0-all.gif",
      name: "SR-66 Liveview EB @ East Canyon Reservoir / MP 0.84, MN"
    },
    {
      id: "11190",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15999.jpeg",
      name: "US-189 @ Milepost 25.36, CHR"
    },
    {
      id: "11837",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16645.jpeg",
      name: "US-189 RWIS EB @ Charleston Rd / 3600 W / SR-113 / MP 24.92, CHR"
    },
    {
      id: "12229",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17028.jpeg",
      name: "US-40 @ 2050 S / MP 18.81, HBR"
    },
    {
      id: "12210",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17018.jpeg",
      name: "US-40 @ Milepost 1.85, SU"
    },
    {
      id: "9774",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14484.jpeg",
      name: "US-40 @ Milepost 3, SU"
    },
    {
      id: "10573",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15382.jpeg",
      name: "US-40 @ River Rd / SR-32 / MP 13.7, WA"
    },
    {
      id: "235",
      url: "http://www.udottraffic.utah.gov/1_devices/aux235.jpeg",
      name: "US-40 @ Silver Summit Pkwy / MP 1.31, SU"
    },
    {
      id: "203",
      url: "http://www.udottraffic.utah.gov/1_devices/aux203.jpeg",
      name: "US-40 @ SR-248 / Kearns Blvd / Quinns Jct / MP 3.89, SU"
    },
    {
      id: "10856",
      url: "http://www.udottraffic.utah.gov/1_devices/us-40-mp-9.gif",
      name: "US-40 Liveview NB @ Jordanelle Reservoir / MP 9.8, WA"
    },
    {
      id: "10757",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20US40%20Mayflower%20Summit.gif",
      name: "US-40 RWIS SB @ Mayflower Summit / MP 6.13, WA"
    },
    {
      id: "11798",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16606.jpeg",
      name:
        "Wasatch Blvd / 3650 E / SR-210 @ 7800 S / Bengal Blvd / Honeywood Cove Dr, CWH"
    },
    {
      id: "9896",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14605.jpeg",
      name:
        "Wasatch Blvd / SR-190/SR-210 @ Big Cottonwood Canyon Rd / Fort Union Blvd / SR-190, CWH"
    }
  ],
  Ogden: [
    {
      id: "10275",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14984.jpeg",
      name: "1800 N / SR-37 @ 2000 W / Midland Dr / SR-108, CTN (Local)"
    },
    {
      id: "12207",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17015.jpeg",
      name: "1900 W / SR-126 @ 4800 S, ROY"
    },
    {
      id: "12208",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17016.jpeg",
      name: "1900 W / SR-126 @ 6000 S, ROY"
    },
    {
      id: "9399",
      url: "http://www.udottraffic.utah.gov/1_devices/aux339.jpeg",
      name: "1900 W / SR-126 @ Hinkley Dr / SR-79, ROY"
    },
    {
      id: "9201",
      url: "http://www.udottraffic.utah.gov/1_devices/aux328.jpeg",
      name: "1900 W / SR-126 @ Riverdale Rd / 5300 S / SR-26, ROY"
    },
    {
      id: "12068",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16876.jpeg",
      name: "200 N / SR-273 @ Main St / SR-273, KAY"
    },
    {
      id: "12318",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17117.jpeg",
      name: "2000 W / Midland Dr / SR-108 @ 300 N / SR-107, WPT"
    },
    {
      id: "11359",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16168.jpeg",
      name: "205 S / SR-193 @ 2000 W / SR-108, SYR"
    },
    {
      id: "12195",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17003.jpeg",
      name: "205 S / SR-193 @ Center St, CFD"
    },
    {
      id: "12060",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16868.jpeg",
      name: "4000 S / SR-37 @ 3500 W, WHV"
    },
    {
      id: "12009",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16817.jpeg",
      name: "4000 S / SR-37 @ 4700 W / SR-134, WHV"
    },
    {
      id: "12071",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16879.jpeg",
      name: "4000 S / SR-37 @ Midland Dr / SR-108, ROY"
    },
    {
      id: "11360",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16169.jpeg",
      name: "700 S / SR-193 @ Industrial Pkwy, CFD"
    },
    {
      id: "10876",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15685.jpeg",
      name: "Angel St @ Layton Pkwy, LTN"
    },
    {
      id: "12070",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16878.jpeg",
      name: "Antelope Dr / 1700 S / SR-108 @ 2000 W / SR-108, SYR"
    },
    {
      id: "12069",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16877.jpeg",
      name: "Antelope Dr / 1700 S / SR-108 @ Main St, CFD"
    },
    {
      id: "11387",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16196.jpeg",
      name: "Fairfield Rd / 850 E @ Cherry Ln / 1350 N, LTN"
    },
    {
      id: "11867",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16675.jpeg",
      name: "Fairfield Rd / 850 E @ Wasatch Dr / 425 N, LTN"
    },
    {
      id: "10679",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15488.jpeg",
      name: "Gentile St @ Flint St, LTN"
    },
    {
      id: "9635",
      url: "http://www.udottraffic.utah.gov/1_devices/aux433.jpeg",
      name: "Harrison Blvd / 1200 E / SR-203 @ 24th St, OGD"
    },
    {
      id: "9634",
      url: "http://www.udottraffic.utah.gov/1_devices/aux432.jpeg",
      name: "Harrison Blvd / 1200 E / SR-203 @ 30th St / SR-79, OGD"
    },
    {
      id: "12076",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16884.jpeg",
      name: "Harrison Blvd / 1200 E / SR-203 @ 4800 S / Edgewood Dr, OGD"
    },
    {
      id: "12047",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16855.jpeg",
      name: "Harrison Blvd / SR-203 @ 12th St / Ogden Canyon Rd / SR-39, OGD"
    },
    {
      id: "9398",
      url: "http://www.udottraffic.utah.gov/1_devices/aux338.jpeg",
      name: "Harrison Blvd / Wildcat Way / SR-203 @ 36th St, OGD"
    },
    {
      id: "9200",
      url: "http://www.udottraffic.utah.gov/1_devices/aux326.jpeg",
      name:
        "Harrison Blvd / Wildcat Way / SR-203 @ 42nd St / Country Hills Dr, OGD"
    },
    {
      id: "9637",
      url: "http://www.udottraffic.utah.gov/1_devices/aux435.jpeg",
      name: "Hill Field Rd / SR-232 @ 2000 N / Antelope Dr, LTN"
    },
    {
      id: "9403",
      url: "http://www.udottraffic.utah.gov/1_devices/aux423.jpeg",
      name: "Hill Field Rd / SR-232 @ 3000 N / SR-193, LTN"
    },
    {
      id: "9125",
      url: "http://www.udottraffic.utah.gov/1_devices/aux315.jpeg",
      name: "Hill Field Rd / SR-232 @ Gordon Ave / 1000 N, LTN"
    },
    {
      id: "9405",
      url: "http://www.udottraffic.utah.gov/1_devices/aux425.jpeg",
      name: "Hill Field Rd / SR-232 @ Main St / SR-126, LTN"
    },
    {
      id: "10073",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14782.jpeg",
      name: "I-15 NB @ 12th St / 1200 S / SR-39 / MP 344.96, MSV"
    },
    {
      id: "10077",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14786.jpeg",
      name: "I-15 NB @ 1700 S / River Canal / MP 344.5, WHV"
    },
    {
      id: "10426",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15135.jpeg",
      name: "I-15 NB @ 1800 S / MP 326.23, KAY"
    },
    {
      id: "10070",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14779.jpeg",
      name: "I-15 NB @ 24th St / SR-53 / MP 343.1, OGD"
    },
    {
      id: "10069",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14778.jpeg",
      name: "I-15 NB @ 2650 S / 24th St Exit / MP 342.9, OGD"
    },
    {
      id: "10079",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14788.jpeg",
      name: "I-15 NB @ 2700 N / SR-134 / MP 349.42, FRW"
    },
    {
      id: "10066",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14775.jpeg",
      name: "I-15 NB @ 29th St / MP 342.5, OGD"
    },
    {
      id: "10067",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14776.jpeg",
      name: "I-15 NB @ 31st St / Hinkley Dr / SR-79 / MP 341.93, OGD"
    },
    {
      id: "9250",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5222.jpeg",
      name: "I-15 NB @ 4400 S / MP 340.1, RDL"
    },
    {
      id: "10397",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15106.jpeg",
      name: "I-15 NB @ 4600 S / MP 339.68, RDL"
    },
    {
      id: "10425",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15134.jpeg",
      name: "I-15 NB @ 900 S / MP 327.34, KAY"
    },
    {
      id: "9346",
      url: "http://www.udottraffic.utah.gov/1_devices/aux422.jpeg",
      name: "I-15 NB @ Antelope Dr / 2000 N / SR-108 / MP 332.87, LTN"
    },
    {
      id: "10684",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15493.jpeg",
      name: "I-15 NB @ Church St / MP 330.75, LTN"
    },
    {
      id: "226",
      url: "http://www.udottraffic.utah.gov/1_devices/aux226.jpeg",
      name: "I-15 NB @ Hill Field Rd / 750 N / SR-232 / MP 331.36, LTN"
    },
    {
      id: "10580",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15389.jpeg",
      name: "I-15 NB @ Layton Pkwy / SR-126 / MP 330.12, LTN"
    },
    {
      id: "11465",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16274.jpeg",
      name: "I-15 NB @ Riverdale Rd / SR-26 / MP 339.15, RDL"
    },
    {
      id: "10388",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15097.jpeg",
      name: "I-15 NB @ Shepard Ln / MP 325.43, FRM"
    },
    {
      id: "12153",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20I-15%20MP350%20FarrWest.jpg",
      name: "I-15 RWIS NB @ Milepost 350.24, PLV"
    },
    {
      id: "10078",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14787.jpeg",
      name: "I-15 SB @ 1800 N / Harrisville Rd / MP 348.23, FRW"
    },
    {
      id: "227",
      url: "http://www.udottraffic.utah.gov/1_devices/aux227.jpeg",
      name: "I-15 SB @ 200 N / SR-273 / MP 328.65, KAY"
    },
    {
      id: "10074",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14783.jpeg",
      name: "I-15 SB @ 21st St / SR-104 / MP 343.86, WHV"
    },
    {
      id: "10396",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15105.jpeg",
      name: "I-15 SB @ 2300 N / MP 337.48, SUN"
    },
    {
      id: "10075",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14784.jpeg",
      name: "I-15 SB @ 24th St / Pennsylvania Ave / SR-53 / MP 343.12, OGD"
    },
    {
      id: "10072",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14781.jpeg",
      name: "I-15 SB @ 400 N / Pioneer Rd / MP 346.72, MSV"
    },
    {
      id: "10071",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14780.jpeg",
      name: "I-15 SB @ 400 S / MP 345.93, MSV"
    },
    {
      id: "10581",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15390.jpg",
      name: "I-15 SB @ 550 S / MP 329.9, LTN"
    },
    {
      id: "9249",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5223.jpeg",
      name: "I-15 SB @ 5600 S / SR-97 / MP 338.46, ROY"
    },
    {
      id: "9252",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5224.jpeg",
      name: "I-15 SB @ 650 N / SR-103 / MP 335.89, CFD"
    },
    {
      id: "9251",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5225.jpeg",
      name: "I-15 SB @ 700 S / SR-193 / MP 334.08, CFD"
    },
    {
      id: "10550",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15359.jpeg",
      name: "I-15 SB @ Center St / MP 334.93, CFD"
    },
    {
      id: "11744",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16552.jpeg",
      name: "I-15 SB @ Hill Field Rd / 1150 N / SR-232 / MP 331.86, LTN"
    },
    {
      id: "10076",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14785.jpeg",
      name: "I-15 SB @ Milepost 343.4, OGD"
    },
    {
      id: "281",
      url: "http://www.udottraffic.utah.gov/1_devices/aux281.jpeg",
      name: "I-15 SB @ Park Ln / 1100 W / SR-225 / MP 324.44, FRM"
    },
    {
      id: "10068",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14777.jpeg",
      name: "I-15 SB @ River Valley Dr / 3650 S / MP 341.17, RDL"
    },
    {
      id: "10615",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15424.jpeg",
      name: "I-84 / Weber Canyon @ Power Plant / MP 89.25, WB"
    },
    {
      id: "12409",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17208.jpeg",
      name: "I-84 / Weber Canyon WB @ Milepost 91.35, MN"
    },
    {
      id: "10819",
      url: "http://www.udottraffic.utah.gov/1_devices/I-84-MP-87.gif",
      name: "I-84 Liveview @ US-89  / MP 87.8, UIN"
    },
    {
      id: "11481",
      url: "http://www.udottraffic.utah.gov/1_devices/I-84-mp-92.gif",
      name: "I-84 Liveview WB @ SR-167 / MP 92.42, MN"
    },
    {
      id: "9127",
      url: "http://www.udottraffic.utah.gov/1_devices/aux317.jpeg",
      name: "I-84 SB @ Riverdale Rd / SR-26 / MP 81.8, RDL"
    },
    {
      id: "12057",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16865.jpeg",
      name: "Layton Pkwy @ 100 W, LTN"
    },
    {
      id: "10064",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14773.jpeg",
      name: "Legacy Pkwy / SR-67 SB @ 250 N / US-89 / MP 12.1, FRM"
    },
    {
      id: "11608",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16417.jpeg",
      name: "Main St / SR-126 @ 1300 N, SUN"
    },
    {
      id: "9231",
      url: "http://www.udottraffic.utah.gov/1_devices/aux322.jpeg",
      name: "Main St / SR-126 @ Antelope Dr / SR-108, LTN"
    },
    {
      id: "9404",
      url: "http://www.udottraffic.utah.gov/1_devices/aux424.jpeg",
      name: "Riverdale Rd / SR-26 @ 300 W, RDL"
    },
    {
      id: "9126",
      url: "http://www.udottraffic.utah.gov/1_devices/aux316.jpeg",
      name: "Riverdale Rd / SR-26 @ 900 W, RDL"
    },
    {
      id: "9345",
      url: "http://www.udottraffic.utah.gov/1_devices/aux421.jpeg",
      name: "Riverdale Rd / SR-26 @ Wall Ave / 40th St / SR-204, RDL"
    },
    {
      id: "10749",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-167%20TrappersLoop.gif",
      name:
        "SR-167 / Trappers Loop RWIS SB @ SR-226 / Snow Basin Rd / MP 6.92, WB"
    },
    {
      id: "10786",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-226-Combined.gif",
      name: "SR-226 Liveview EB @ Snow Basin / MP 0.7, WB"
    },
    {
      id: "10785",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-39-Mile13.gif",
      name: "SR-39 / Ogden Canyon Liveview EB @ SR-158 / MP 13.8, WB"
    },
    {
      id: "9636",
      url: "http://www.udottraffic.utah.gov/1_devices/aux434.jpeg",
      name: "State St / SR-126 @ Center St, CFD"
    },
    {
      id: "12048",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16856.jpeg",
      name: "US-89 / Harrisville Rd @ Wall Ave / SR-204 / Larsen Ln, HRV"
    },
    {
      id: "10394",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15103.jpeg",
      name: "US-89 / I-84 @ 6300 S / 150 E / MP 407.72, UIN"
    },
    {
      id: "10391",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15100.jpeg",
      name: "US-89 @ 3000 N / SR-193, LTN"
    },
    {
      id: "10392",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15101.jpeg",
      name: "US-89 @ Antelope Dr, LTN"
    },
    {
      id: "286",
      url: "http://www.udottraffic.utah.gov/1_devices/aux286.jpeg",
      name: "US-89 @ Green Rd / MP 398.86, FRU"
    },
    {
      id: "10712",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15521.jpeg",
      name: "US-89 @ Harrison Blvd / 1550 E / SR-203, SOG"
    },
    {
      id: "10395",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15104.jpeg",
      name: "US-89 @ I-84 EB Exit Ramp, SWE"
    },
    {
      id: "284",
      url: "http://www.udottraffic.utah.gov/1_devices/aux284.jpeg",
      name: "US-89 @ Main St / SR-106 / SR-273 / MP 397.58, FRM"
    },
    {
      id: "10393",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15102.jpeg",
      name: "US-89 @ Oak Hills Dr / SR-109, LTN"
    },
    {
      id: "280",
      url: "http://www.udottraffic.utah.gov/1_devices/aux280.jpeg",
      name: "US-89 @ Park Ln / 1100 W / SR-225, FRM"
    },
    {
      id: "285",
      url: "http://www.udottraffic.utah.gov/1_devices/aux285.jpeg",
      name: "US-89 @ Pedestrian Bridge / MP 398.08, FRU"
    },
    {
      id: "10821",
      url: "http://www.udottraffic.utah.gov/1_devices/SR225mile0-all.gif",
      name: "US-89 Liveview NB @ Park Lane / SR-225 / MP 396.19, FRM"
    },
    {
      id: "283",
      url: "http://www.udottraffic.utah.gov/1_devices/aux283.jpeg",
      name: "US-89 NB @ Shepard Ln, FRM"
    },
    {
      id: "282",
      url: "http://www.udottraffic.utah.gov/1_devices/aux282.jpeg",
      name: "US-89 SB @ Shepard Ln, FRM"
    },
    {
      id: "9243",
      url: "http://www.udottraffic.utah.gov/1_devices/aux331.jpeg",
      name: "Wall Ave / SR-204 @ 12th St / SR-39, OGD"
    },
    {
      id: "12072",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16880.jpeg",
      name: "Wall Ave / SR-204 @ 20th St / SR-104, OGD"
    },
    {
      id: "12337",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17136.jpeg",
      name: "Wall Ave / SR-204 @ 25th St, OGD"
    },
    {
      id: "12338",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17137.jpeg",
      name: "Wall Ave / SR-204 @ 30th St / SR-79, OGD"
    },
    {
      id: "9128",
      url: "http://www.udottraffic.utah.gov/1_devices/aux318.jpeg",
      name: "Wall Ave / SR-204 @ 31st St / SR-79, OGD"
    },
    {
      id: "12046",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16854.jpeg",
      name:
        "Washington Blvd / Harrisville Rd / US-89 @ 2nd St / Washington Blvd / SR-235, OGD"
    },
    {
      id: "10293",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15002.jpeg",
      name: "Washington Blvd / SR-235 @ 2600 N / SR-134, NOG"
    },
    {
      id: "9632",
      url: "http://www.udottraffic.utah.gov/1_devices/aux430.jpeg",
      name: "Washington Blvd / US-89 @ 12th St / SR-39, OGD"
    },
    {
      id: "12073",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16881.jpeg",
      name: "Washington Blvd / US-89 @ 20th St, OGD"
    },
    {
      id: "9407",
      url: "http://www.udottraffic.utah.gov/1_devices/aux427.jpeg",
      name: "Washington Blvd / US-89 @ 24th St / SR-53, OGD"
    },
    {
      id: "12339",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17138.jpeg",
      name: "Washington Blvd / US-89 @ 28th St, OGD"
    },
    {
      id: "12074",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16882.jpeg",
      name: "Washington Blvd / US-89 @ 30th St / SR-79, OGD"
    },
    {
      id: "12340",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17139.jpeg",
      name: "Washington Blvd / US-89 @ 31st St / SR-79, OGD"
    },
    {
      id: "9633",
      url: "http://www.udottraffic.utah.gov/1_devices/aux431.jpeg",
      name: "Washington Blvd / US-89 @ 40th St / Chimes View Dr, SOG"
    },
    {
      id: "12075",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16883.jpeg",
      name: "Washington Blvd / US-89 @ Adams Ave Pkwy, OGD"
    },
    {
      id: "9406",
      url: "http://www.udottraffic.utah.gov/1_devices/aux426.jpeg",
      name: "Washington Blvd / US-89 @ Riverdale Rd / SR-26, OGD"
    }
  ],
  "Salt Lake City": [
    {
      id: "12263",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17062.jpeg",
      name: "10600 S / South Jordan Pkwy / SR-151 @ 400 W / Jordan Gateway, SJO"
    },
    {
      id: "11966",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16774.jpeg",
      name:
        "10600 S / South Jordan Pkwy / SR-151 @ River Front Pkwy / 700 W, SJO"
    },
    {
      id: "10678",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15487.jpeg",
      name: "12300 S / SR-71 @ 150 E, DPR"
    },
    {
      id: "10575",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15384.jpeg",
      name: "12300 S / SR-71 @ 265 W, DPR"
    },
    {
      id: "304",
      url: "http://www.udottraffic.utah.gov/1_devices/aux304.jpeg",
      name: "12300 S / SR-71 @ 700 E / SR-71, DPR"
    },
    {
      id: "11967",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16775.jpeg",
      name: "12600 S / Herriman Blvd @ Main St / 5040 W, HRR"
    },
    {
      id: "11827",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16635.jpeg",
      name: "12600 S / SR-71 @ 2700 W / Silverwolf Blvd, RVT"
    },
    {
      id: "11512",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16321.jpeg",
      name: "12600 S @ 4150 W, RVT"
    },
    {
      id: "11026",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15835.jpeg",
      name: "12600 S @ Legacy Ranch Blvd / 4570 W, RVT"
    },
    {
      id: "289",
      url: "http://www.udottraffic.utah.gov/1_devices/aux289.jpeg",
      name: "1300 E / Leopard Ln @ 800 S, SLC"
    },
    {
      id: "10714",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15523.jpeg",
      name: "1300 E @ 400 S, SLC"
    },
    {
      id: "10715",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15524.jpeg",
      name: "1300 S @ 300 W, SLC"
    },
    {
      id: "11638",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16447.jpeg",
      name: "14600 S / Highland Dr / SR-140 @ Minuteman Dr, DPR"
    },
    {
      id: "11507",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16316.jpeg",
      name: "14600 S / SR-140 @ Pony Express Dr / SR-287, DPR"
    },
    {
      id: "10716",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15525.jpeg",
      name: "200 S @ Main St, SLC"
    },
    {
      id: "9422",
      url: "http://www.udottraffic.utah.gov/1_devices/aux341.jpeg",
      name: "200 S @ West Temple St, SLC"
    },
    {
      id: "80",
      url: "http://www.udottraffic.utah.gov/1_devices/aux80.jpeg",
      name: "2100 S / SR-201 @ 400 W / I-15 NB / MP 17.46, SLC"
    },
    {
      id: "78",
      url: "http://www.udottraffic.utah.gov/1_devices/aux78.jpeg",
      name: "2100 S / SR-201 @ 650 W / MP 17.1, SLC"
    },
    {
      id: "9561",
      url: "http://www.udottraffic.utah.gov/1_devices/aux343.jpeg",
      name: "2100 S @ 1300 E, SLC"
    },
    {
      id: "11962",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16770.jpeg",
      name: "300 W / John Stockton Dr / US-89 @ 600 N / SR-268, SLC"
    },
    {
      id: "137",
      url: "http://www.udottraffic.utah.gov/1_devices/aux137.jpeg",
      name: "300 W / John Stockton Dr / US-89 @ South Temple St, SLC"
    },
    {
      id: "12327",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17126.jpeg",
      name: "3300 S / SR-171 @ 1300 E, MCK"
    },
    {
      id: "9646",
      url: "http://www.udottraffic.utah.gov/1_devices/aux347.jpeg",
      name: "3300 S / SR-171 @ Highland Dr, SL"
    },
    {
      id: "190",
      url: "http://www.udottraffic.utah.gov/1_devices/aux190.jpeg",
      name: "3300 S / SR-171 @ West Temple St, SSL"
    },
    {
      id: "10198",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14907.jpeg",
      name: "3500 S / SR-171 @ 2700 W / Constitution Blvd, WVC"
    },
    {
      id: "10197",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14906.jpeg",
      name: "3500 S / SR-171 @ 3200 W, WVC"
    },
    {
      id: "177",
      url: "http://www.udottraffic.utah.gov/1_devices/aux177.jpeg",
      name: "3500 S / SR-171 @ Decker Lake Dr / 2200 W, WVC"
    },
    {
      id: "191",
      url: "http://www.udottraffic.utah.gov/1_devices/aux191.jpeg",
      name: "3900 S @ 210 W / Howick St, SSL"
    },
    {
      id: "11947",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16755.jpeg",
      name: "3900 S @ 2300 E, HDY"
    },
    {
      id: "11946",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16754.jpeg",
      name: "3900 S @ 500 W, SSL"
    },
    {
      id: "12059",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16867.jpeg",
      name: "400 N / SR-106 @ Main St, BTF"
    },
    {
      id: "9560",
      url: "http://www.udottraffic.utah.gov/1_devices/aux314.jpeg",
      name: "400 S / University Blvd / SR-186 @ 700 E / SR-71, SLC"
    },
    {
      id: "9423",
      url: "http://www.udottraffic.utah.gov/1_devices/aux342.jpeg",
      name: "400 S / US-89 @ 300 W / John Stockton Dr / US-89, SLC"
    },
    {
      id: "12190",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16998.jpeg",
      name: "4100 S @ 3200 W, WVC"
    },
    {
      id: "9715",
      url: "http://www.udottraffic.utah.gov/1_devices/aux349.jpeg",
      name: "4100 S @ 4800 W, WVC (Local)"
    },
    {
      id: "9645",
      url: "http://www.udottraffic.utah.gov/1_devices/aux346.jpeg",
      name: "4500 S / SR-266 @ Highland Dr, HDY"
    },
    {
      id: "9644",
      url: "http://www.udottraffic.utah.gov/1_devices/aux345.jpeg",
      name: "4700 S @ 2700 W, TAY"
    },
    {
      id: "138",
      url: "http://www.udottraffic.utah.gov/1_devices/aux138.jpeg",
      name: "500 S / Cesar E Chavez Blvd / SR-269 @ Main St, SLC"
    },
    {
      id: "140",
      url: "http://www.udottraffic.utah.gov/1_devices/aux140.jpeg",
      name: "500 S / University Blvd / SR-186 @ 1300 E, SLC"
    },
    {
      id: "9207",
      url: "http://www.udottraffic.utah.gov/1_devices/aux327.jpeg",
      name: "500 S / University Blvd / SR-186 @ 1580 E / Guardsman Way, SLC"
    },
    {
      id: "9777",
      url: "http://www.udottraffic.utah.gov/1_devices/Aux14487.jpeg",
      name: "500 S @ Main St, BTF"
    },
    {
      id: "9638",
      url: "http://www.udottraffic.utah.gov/1_devices/aux436.jpeg",
      name: "500 W / US-89 @ 400 N / SR-106, BTF"
    },
    {
      id: "9639",
      url: "http://www.udottraffic.utah.gov/1_devices/aux437.jpeg",
      name: "500 W / US-89 @ 500 S / SR-68, BTF"
    },
    {
      id: "12027",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16835.jpeg",
      name: "5300 S / SR-173 @ 320 W / Commerce Dr, MUR"
    },
    {
      id: "10889",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15698.jpeg",
      name: "5400 S / SR-173 @ 2200 W, TAY"
    },
    {
      id: "10890",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15699.jpeg",
      name: "5400 S / SR-173 @ 2700 W, TAY"
    },
    {
      id: "10891",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15700.jpeg",
      name: "5400 S / SR-173 @ 3200 W, TAY"
    },
    {
      id: "10892",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15701.jpeg",
      name: "5400 S / SR-173 @ 3600 W / Whitewood Dr, TAY"
    },
    {
      id: "12395",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17194.jpeg",
      name: "5400 S / SR-173 @ 3700 W, TAY"
    },
    {
      id: "12394",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17193.jpeg",
      name: "5400 S / SR-173 @ 3800 W, TAY"
    },
    {
      id: "11068",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15877.jpeg",
      name: "5400 S / SR-173 @ 4015 W, TAY"
    },
    {
      id: "11511",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16320.jpeg",
      name: "5400 S / SR-173 @ 6055 W / Upper Ridge Rd / USANA, WVC"
    },
    {
      id: "11613",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16422.jpeg",
      name: "5400 S / SR-173 @ 700 W / Murray Blvd, MUR"
    },
    {
      id: "11067",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15876.jpeg",
      name: "5415 S / 5400 S / SR-173 @ 4420 W, KRN"
    },
    {
      id: "192",
      url: "http://www.udottraffic.utah.gov/1_devices/aux192.jpeg",
      name: "5415 S / 5400 S / SR-173 @ 4800 W / Charlotte Ave, KRN"
    },
    {
      id: "10612",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15421.jpeg",
      name: "5600 W / SR-172 @ 2700 S / Lake Park Blvd, WVC"
    },
    {
      id: "288",
      url: "http://www.udottraffic.utah.gov/1_devices/aux288.jpeg",
      name: "5600 W / SR-172 @ 3500 S / SR-171, WVC"
    },
    {
      id: "12055",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16863.jpeg",
      name: "5600 W / SR-172 @ 4100 S, WVC"
    },
    {
      id: "11510",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16319.jpeg",
      name: "5600 W / SR-172 @ 5400 S / SR-173, SL"
    },
    {
      id: "12231",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17030.jpeg",
      name: "5600 W @ 8200 S, WJD"
    },
    {
      id: "11950",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16758.jpeg",
      name: "6200 S / SR-190 @ 3000 E, HDY"
    },
    {
      id: "9897",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14606.jpeg",
      name: "6200 S / Wasatch Blvd / SR-190 @ Wasatch Blvd / Millrock Dr, CWH"
    },
    {
      id: "10553",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15362.jpeg",
      name: "6200 S @ Jordan Canal Rd / Margray Dr, TAY"
    },
    {
      id: "9776",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14486.jpeg",
      name: "700 E / SR-71 @ 10600 S, SND"
    },
    {
      id: "10674",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15483.jpeg",
      name: "700 E / SR-71 @ 11000 S, SND"
    },
    {
      id: "10873",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15682.jpeg",
      name: "700 E / SR-71 @ 11400 S, SND"
    },
    {
      id: "11515",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16324.jpeg",
      name: "700 E / SR-71 @ 1300 S, SLC"
    },
    {
      id: "11522",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16331.jpeg",
      name: "700 E / SR-71 @ 1700 S, SLC"
    },
    {
      id: "9558",
      url: "http://www.udottraffic.utah.gov/1_devices/aux313.jpeg",
      name: "700 E / SR-71 @ 3300 S / SR-171, SSL"
    },
    {
      id: "11856",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16664.jpeg",
      name: "700 E / SR-71 @ 3900 S, MCK"
    },
    {
      id: "9631",
      url: "http://www.udottraffic.utah.gov/1_devices/aux311.jpeg",
      name: "700 E / SR-71 @ 4500 S / SR-266, MUR"
    },
    {
      id: "139",
      url: "http://www.udottraffic.utah.gov/1_devices/aux139.jpeg",
      name: "700 E / SR-71 @ 900 S, SLC"
    },
    {
      id: "10535",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15344.jpeg",
      name: "700 E / SR-71 @ 9000 S / SR-209, SND"
    },
    {
      id: "9775",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14485.jpeg",
      name: "700 E / SR-71 @ 9800 S / Sego Lily Dr, SND"
    },
    {
      id: "186",
      url: "http://www.udottraffic.utah.gov/1_devices/aux186.jpeg",
      name: "700 S @ Main St, SLC"
    },
    {
      id: "12476",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17267.jpeg",
      name: "7200 S / Jordan River Blvd / SR-48 @ 700 W, MDV"
    },
    {
      id: "12230",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17029.jpeg",
      name: "7800 S @ 5600 W, WJD"
    },
    {
      id: "11513",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16322.jpeg",
      name: "7800 S @ Airport Rd / 4450 W, WJD"
    },
    {
      id: "12262",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17061.jpeg",
      name: "900 E / SR-71 @ 5600 S, MUR"
    },
    {
      id: "11775",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16583.jpeg",
      name: "900 E / SR-71 @ Fort Union Blvd / 7100 S, MDV"
    },
    {
      id: "9245",
      url: "http://www.udottraffic.utah.gov/1_devices/aux332.jpeg",
      name: "900 E / SR-71 @ Van Winkle Expwy / SR-152, MUR"
    },
    {
      id: "12450",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17241.jpeg",
      name: "9000 S / SR-209 @ 150 E / Trax, SND"
    },
    {
      id: "12232",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17031.jpeg",
      name: "9000 S / SR-209 @ 4000 W, WJD"
    },
    {
      id: "9642",
      url: "http://www.udottraffic.utah.gov/1_devices/aux303.jpeg",
      name: "9000 S / SR-209 @ 700 W, SND"
    },
    {
      id: "11299",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16108.jpeg",
      name:
        "9400 S / Little Cottonwood Rd / SR-209 @ 2300 E / Quail Hollow Dr, SND"
    },
    {
      id: "9347",
      url: "http://www.udottraffic.utah.gov/1_devices/aux336.jpeg",
      name: "9400 S / SR-209 @ 1300 E, SND"
    },
    {
      id: "9904",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14613.jpeg",
      name: "9400 S / SR-209 @ 2000 E / Highland Dr, SND"
    },
    {
      id: "11468",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16277.jpeg",
      name: "Bacchus Hwy / SR-111 @ 8200 S, WJD"
    },
    {
      id: "11253",
      url: "http://www.udottraffic.utah.gov/1_devices/SR-111mile0-all.gif",
      name: "Bacchus Hwy / SR-111 Liveview NB @ New Bingham Hwy / MP 0, WJD"
    },
    {
      id: "10755",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR111%20@%20Bacchus.gif",
      name: "Bacchus Hwy / SR-111 RWIS SB @ 6400 S / MP 4.15, WVC"
    },
    {
      id: "11951",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16759.jpeg",
      name: "Bangerter Hwy / 200 E / SR-154 @ 13800 S, DPR"
    },
    {
      id: "9770",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14480.jpeg",
      name: "Bangerter Hwy / SR-154 @ 10400 S / South Jordan Pkwy / SR-151, SJO"
    },
    {
      id: "12447",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17238.jpeg",
      name: "Bangerter Hwy / SR-154 @ 11200 S, SJO"
    },
    {
      id: "9769",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14479.jpeg",
      name: "Bangerter Hwy / SR-154 @ 11400 S, SJO"
    },
    {
      id: "12405",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17204.jpeg",
      name: "Bangerter Hwy / SR-154 @ 11500 S, SJO"
    },
    {
      id: "306",
      url: "http://www.udottraffic.utah.gov/1_devices/aux306.jpeg",
      name: "Bangerter Hwy / SR-154 @ 12600 S / SR-71, RVT"
    },
    {
      id: "9768",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14478.jpeg",
      name: "Bangerter Hwy / SR-154 @ 13400 S, RVT"
    },
    {
      id: "11881",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16689.jpeg",
      name: "Bangerter Hwy / SR-154 @ 200 W / MP 0.78, DPR"
    },
    {
      id: "267",
      url: "http://www.udottraffic.utah.gov/1_devices/aux267.jpeg",
      name: "Bangerter Hwy / SR-154 @ 2400 S / Lake Park Blvd, WVC"
    },
    {
      id: "268",
      url: "http://www.udottraffic.utah.gov/1_devices/aux268.jpeg",
      name: "Bangerter Hwy / SR-154 @ 2700 S / Parkway Blvd, WVC"
    },
    {
      id: "9767",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14477.jpeg",
      name: "Bangerter Hwy / SR-154 @ 2700 W, BLF"
    },
    {
      id: "11880",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16688.jpeg",
      name: "Bangerter Hwy / SR-154 @ 300 W / MP 1.0, DPR"
    },
    {
      id: "269",
      url: "http://www.udottraffic.utah.gov/1_devices/aux269.jpeg",
      name: "Bangerter Hwy / SR-154 @ 3100 S, WVC"
    },
    {
      id: "266",
      url: "http://www.udottraffic.utah.gov/1_devices/aux266.jpeg",
      name: "Bangerter Hwy / SR-154 @ 3500 S / SR-171, WVC"
    },
    {
      id: "265",
      url: "http://www.udottraffic.utah.gov/1_devices/aux265.jpeg",
      name: "Bangerter Hwy / SR-154 @ 4100 S, WVC"
    },
    {
      id: "264",
      url: "http://www.udottraffic.utah.gov/1_devices/aux264.jpeg",
      name: "Bangerter Hwy / SR-154 @ 4700 S, TAY"
    },
    {
      id: "11879",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16687.jpeg",
      name: "Bangerter Hwy / SR-154 @ 500 W / MP 1.25, DPR"
    },
    {
      id: "263",
      url: "http://www.udottraffic.utah.gov/1_devices/aux263.jpeg",
      name: "Bangerter Hwy / SR-154 @ 5200 S, TAY"
    },
    {
      id: "12387",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17186.jpeg",
      name: "Bangerter Hwy / SR-154 @ 5300 S, TAY"
    },
    {
      id: "12386",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17185.jpeg",
      name: "Bangerter Hwy / SR-154 @ 5600 S, TAY"
    },
    {
      id: "12396",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17195.jpeg",
      name: "Bangerter Hwy / SR-154 @ 5700 S, TAY"
    },
    {
      id: "11878",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16686.jpeg",
      name: "Bangerter Hwy / SR-154 @ 600 W / MP 1.45, DPR"
    },
    {
      id: "193",
      url: "http://www.udottraffic.utah.gov/1_devices/aux193.jpg",
      name: "Bangerter Hwy / SR-154 @ 6200 S, WJD"
    },
    {
      id: "12397",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17196.jpeg",
      name: "Bangerter Hwy / SR-154 @ 6900 S, WJD"
    },
    {
      id: "11877",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16685.jpeg",
      name: "Bangerter Hwy / SR-154 @ 700 W / MP 1.6, DPR"
    },
    {
      id: "12399",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17198.jpeg",
      name: "Bangerter Hwy / SR-154 @ 7100 S, WJD"
    },
    {
      id: "261",
      url: "http://www.udottraffic.utah.gov/1_devices/aux261.jpeg",
      name: "Bangerter Hwy / SR-154 @ 7800 S / SR-48, WJD"
    },
    {
      id: "11876",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16684.jpeg",
      name: "Bangerter Hwy / SR-154 @ 800 W / MP 1.86, DPR"
    },
    {
      id: "12400",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17199.jpeg",
      name: "Bangerter Hwy / SR-154 @ 8900 S, WJD"
    },
    {
      id: "12402",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17201.jpeg",
      name: "Bangerter Hwy / SR-154 @ 9150 S, WJD"
    },
    {
      id: "9771",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14481.jpg",
      name: "Bangerter Hwy / SR-154 @ 9800 S, SJO"
    },
    {
      id: "10719",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15528.jpeg",
      name: "Bangerter Hwy / SR-154 @ California Ave, SLC"
    },
    {
      id: "46",
      url: "http://www.udottraffic.utah.gov/1_devices/aux46.jpeg",
      name: "Bangerter Hwy / SR-154 @ SLC Airport / N of I-80  / MP 24.1, SLC"
    },
    {
      id: "9766",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14476.jpeg",
      name: "Bangerter Hwy / SR-154 EB @ Redwood Rd / SR-68, BLF"
    },
    {
      id: "262",
      url: "http://www.udottraffic.utah.gov/1_devices/aux262.jpeg",
      name: "Bangerter Hwy / SR-154 NB @ 7000 S, WJD"
    },
    {
      id: "12401",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17200.jpeg",
      name: "Bangerter Hwy / SR-154 NB @ 9000 S / SR-209, WJD"
    },
    {
      id: "12398",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17197.jpeg",
      name: "Bangerter Hwy / SR-154 SB @ 7000 S / Jordan Landing Blvd, WJD"
    },
    {
      id: "260",
      url: "http://www.udottraffic.utah.gov/1_devices/aux260.jpeg",
      name: "Bangerter Hwy / SR-154 SB @ 9000 S / SR-209, WJD"
    },
    {
      id: "11603",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16412.jpeg",
      name: "Bangerter Hwy / SR-154 WB @ Redwood Rd / SR-68, RVT"
    },
    {
      id: "180",
      url: "http://www.udottraffic.utah.gov/1_devices/aux180.jpeg",
      name: "Beck St / US-89 @ Victory Rd / SR-186, SLC"
    },
    {
      id: "11405",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16214.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ Butler / MP 10, SL"
    },
    {
      id: "11406",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16215.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ Cardiff Fork / MP 10.74, SL"
    },
    {
      id: "11403",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16212.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ Dogwood / MP 4.1, SL"
    },
    {
      id: "11404",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16213.jpeg",
      name: "Big Cottonwood Canyon Rd / SR-190 @ S-Curves / MP 6.38, SL"
    },
    {
      id: "11633",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16442.jpeg",
      name: "Columbus St / SR-186 @ 500 N, SLC"
    },
    {
      id: "175",
      url: "http://www.udottraffic.utah.gov/1_devices/aux175.jpeg",
      name: "Constitution Blvd / 2700 W @ 3100 S, WVC"
    },
    {
      id: "187",
      url: "http://www.udottraffic.utah.gov/1_devices/aux187.jpeg",
      name:
        "Foothill Dr / Honorary Veterans Blvd / SR-186 @ Mario Capecchi Dr, SLC"
    },
    {
      id: "9246",
      url: "http://www.udottraffic.utah.gov/1_devices/aux333.jpeg",
      name: "Foothill Dr / Honorary Veterans Blvd / SR-186 @ Sunnyside Ave, SLC"
    },
    {
      id: "188",
      url: "http://www.udottraffic.utah.gov/1_devices/aux188.jpeg",
      name: "Foothill Dr / Honorary Veterans Blvd / SR-186 @ Wakara Way, SLC"
    },
    {
      id: "9265",
      url: "http://www.udottraffic.utah.gov/1_devices/aux334.jpeg",
      name: "Foothill Dr / SR-186 @ 2300 E, SLC"
    },
    {
      id: "65",
      url: "http://www.udottraffic.utah.gov/1_devices/aux65.jpeg",
      name: "Foothill Dr / SR-186 @ Parley`s Way, SLC"
    },
    {
      id: "12021",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16829.jpeg",
      name: "Fort Union Blvd / 6910 S @ 1300 E, CWH"
    },
    {
      id: "12022",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16830.jpeg",
      name: "Fort Union Blvd / 7000 S @ 2300 E, CWH"
    },
    {
      id: "9267",
      url: "http://www.udottraffic.utah.gov/1_devices/aux9174.jpeg",
      name: "Grizzlies Blvd / 3100 S @ Decker Lake Dr, WVC"
    },
    {
      id: "11945",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16753.jpeg",
      name: "Highland Dr / 2000 E @ Bengal Blvd / Parkridge Dr, CWH"
    },
    {
      id: "9643",
      url: "http://www.udottraffic.utah.gov/1_devices/aux344.jpeg",
      name: "Highland Dr / 2000 E @ Fort Union Blvd / 7000 S, CWH"
    },
    {
      id: "11964",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16772.jpeg",
      name: "Highland Dr / Van Winkle Expwy / SR-152 @ 6200 S, HDY"
    },
    {
      id: "9647",
      url: "http://www.udottraffic.utah.gov/1_devices/aux348.jpeg",
      name: "Highland Dr @ 3900 S, SL"
    },
    {
      id: "82",
      url: "http://www.udottraffic.utah.gov/1_devices/aux82.jpeg",
      name: "I-15 NB @ 10200 S / MP 294.2, SND"
    },
    {
      id: "11942",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16750.jpeg",
      name: "I-15 NB @ 10600 S / SR-151 / MP 293.65, SND"
    },
    {
      id: "11943",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16751.jpeg",
      name: "I-15 NB @ 10600 S / SR-151 / MP 293.65, SND (Tunnel)"
    },
    {
      id: "112",
      url: "http://www.udottraffic.utah.gov/1_devices/aux112.jpeg",
      name: "I-15 NB @ 1100 S / MP 306.53, SLC"
    },
    {
      id: "10694",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15503.jpeg",
      name: "I-15 NB @ 11500 S / MP 292.35, DPR"
    },
    {
      id: "9656",
      url: "http://www.udottraffic.utah.gov/1_devices/aux356.jpeg",
      name: "I-15 NB @ 11900 S / MP 291.98, DPR"
    },
    {
      id: "9653",
      url: "http://www.udottraffic.utah.gov/1_devices/aux353.jpeg",
      name: "I-15 NB @ 12300 S / SR-71 / MP 291.4, DPR"
    },
    {
      id: "11721",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16529.jpeg",
      name: "I-15 NB @ 14000 S / MP 289.34, DPR"
    },
    {
      id: "11724",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16532.jpeg",
      name: "I-15 NB @ 14500 S / MP 288.54, DPR"
    },
    {
      id: "10494",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15303.jpeg",
      name: "I-15 NB @ 1500 S / MP 316.23, WXS"
    },
    {
      id: "11727",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16535.jpeg",
      name: "I-15 NB @ 15200 S / MP 287.6, DPR"
    },
    {
      id: "11728",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16536.jpeg",
      name: "I-15 NB @ 15400 S / MP 287.23, DPR"
    },
    {
      id: "106",
      url: "http://www.udottraffic.utah.gov/1_devices/aux106.jpeg",
      name: "I-15 NB @ 1800 S / MP 305.6, SLC"
    },
    {
      id: "11858",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16666.jpeg",
      name: "I-15 NB @ 2600 S / SR-93 / MP 315.26, WXS"
    },
    {
      id: "102",
      url: "http://www.udottraffic.utah.gov/1_devices/aux102.jpeg",
      name: "I-15 NB @ 3300 S / SR-171 / MP 303.49, SSL"
    },
    {
      id: "100",
      url: "http://www.udottraffic.utah.gov/1_devices/aux100.jpeg",
      name: "I-15 NB @ 3750 S / MP 302.75, SSL"
    },
    {
      id: "117",
      url: "http://www.udottraffic.utah.gov/1_devices/aux117.jpeg",
      name: "I-15 NB @ 400 S / MP 307.79, SLC"
    },
    {
      id: "99",
      url: "http://www.udottraffic.utah.gov/1_devices/aux99.jpeg",
      name: "I-15 NB @ 4100 S / MP 302.25, MUR"
    },
    {
      id: "11734",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16542.jpeg",
      name: "I-15 NB @ 4200 N / MP 284.65, LHI"
    },
    {
      id: "98",
      url: "http://www.udottraffic.utah.gov/1_devices/aux98.jpeg",
      name: "I-15 NB @ 4500 S / SR-266 / MP 301.71, MUR"
    },
    {
      id: "115",
      url: "http://www.udottraffic.utah.gov/1_devices/aux115.jpeg",
      name: "I-15 NB @ 500 S / MP 307.61, SLC"
    },
    {
      id: "9389",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5131.jpeg",
      name: "I-15 NB @ 500 W / US-89 / MP 318.1, BTF"
    },
    {
      id: "96",
      url: "http://www.udottraffic.utah.gov/1_devices/aux96.jpeg",
      name: "I-15 NB @ 5000 S / MP 301, MUR"
    },
    {
      id: "95",
      url: "http://www.udottraffic.utah.gov/1_devices/aux95.jpeg",
      name: "I-15 NB @ 5200 S / MP 300.63, MUR"
    },
    {
      id: "93",
      url: "http://www.udottraffic.utah.gov/1_devices/aux93.jpeg",
      name: "I-15 NB @ 5550 S / MP 300, MUR"
    },
    {
      id: "120",
      url: "http://www.udottraffic.utah.gov/1_devices/aux120.jpeg",
      name: "I-15 NB @ 600 N / SR-268 / MP 309.34, SLC"
    },
    {
      id: "114",
      url: "http://www.udottraffic.utah.gov/1_devices/aux114.jpeg",
      name: "I-15 NB @ 600 S Exit / MP 307.36, SLC"
    },
    {
      id: "90",
      url: "http://www.udottraffic.utah.gov/1_devices/aux90.jpeg",
      name: "I-15 NB @ 6600 S / MP 298.5, MDV"
    },
    {
      id: "12404",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17203.jpeg",
      name: "I-15 NB @ 6950 S / MP 298.25, MDV"
    },
    {
      id: "87",
      url: "http://www.udottraffic.utah.gov/1_devices/aux87.jpeg",
      name: "I-15 NB @ 8000 S / MP 296.9, MDV"
    },
    {
      id: "85",
      url: "http://www.udottraffic.utah.gov/1_devices/aux85.jpeg",
      name: "I-15 NB @ 9000 S / SR-209 / MP 295.66, SND"
    },
    {
      id: "83",
      url: "http://www.udottraffic.utah.gov/1_devices/aux83.jpeg",
      name: "I-15 NB @ 9600 S / MP 294.76, SND"
    },
    {
      id: "9409",
      url: "http://www.udottraffic.utah.gov/1_devices/aux340.jpeg",
      name: "I-15 NB @ Beck St / US-89 / MP 312.06, SLC"
    },
    {
      id: "9397",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5126.jpeg",
      name: "I-15 NB @ I-215 North Interchange / MP 313.28, NSL"
    },
    {
      id: "118",
      url: "http://www.udottraffic.utah.gov/1_devices/aux118.jpeg",
      name: "I-15 NB @ North Temple St / MP 308.59, SLC"
    },
    {
      id: "9393",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5121.jpeg",
      name: "I-15 SB @ 1000 N / MP 310.2, SLC"
    },
    {
      id: "81",
      url: "http://www.udottraffic.utah.gov/1_devices/aux81.jpeg",
      name: "I-15 SB @ 10600 S / South Jordan Pkwy / SR-151 / MP 293.6, SJO"
    },
    {
      id: "9654",
      url: "http://www.udottraffic.utah.gov/1_devices/aux357.jpeg",
      name: "I-15 SB @ 11000 S / MP 293, SJO"
    },
    {
      id: "10695",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15504.jpeg",
      name: "I-15 SB @ 11400 S / MP 292.62, SJO"
    },
    {
      id: "12403",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17202.jpeg",
      name: "I-15 SB @ 12500 S / MP 291.17, DPR"
    },
    {
      id: "11752",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16560.jpeg",
      name: "I-15 SB @ 12600 S / MP 291.1, DPR"
    },
    {
      id: "111",
      url: "http://www.udottraffic.utah.gov/1_devices/aux111.jpeg",
      name: "I-15 SB @ 1300 S / MP 306.33, SLC"
    },
    {
      id: "11751",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16559.jpeg",
      name: "I-15 SB @ 13000 S / MP 290.6, DPR"
    },
    {
      id: "11750",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16558.jpeg",
      name: "I-15 SB @ 13400 S / MP 290.08, DPR"
    },
    {
      id: "10402",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15111.jpeg",
      name: "I-15 SB @ 1400 N / MP 320.46, CVL"
    },
    {
      id: "11722",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16530.jpeg",
      name: "I-15 SB @ 14200 S / MP 289.09, DPR"
    },
    {
      id: "11723",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16531.jpeg",
      name: "I-15 SB @ 14300 S / MP 288.84, DPR"
    },
    {
      id: "11725",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16533.jpeg",
      name: "I-15 SB @ 14600 S / Highland Dr / SR-140 / MP 288.3, BLF"
    },
    {
      id: "110",
      url: "http://www.udottraffic.utah.gov/1_devices/aux110.jpeg",
      name: "I-15 SB @ 1500 S / MP 306.11, SLC"
    },
    {
      id: "11726",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16534.jpeg",
      name: "I-15 SB @ 15000 S / MP 287.91, BLF"
    },
    {
      id: "11729",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16537.jpeg",
      name: "I-15 SB @ 15800 S / MP 286.64, BLF"
    },
    {
      id: "11730",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16538.jpeg",
      name: "I-15 SB @ 16200 S / MP 286.3, BLF"
    },
    {
      id: "9394",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5122.jpeg",
      name: "I-15 SB @ 1700 N / MP 310.93, SLC"
    },
    {
      id: "109",
      url: "http://www.udottraffic.utah.gov/1_devices/aux109.jpeg",
      name: "I-15 SB @ 2100 S / SR-201 / MP 305.25, SLC"
    },
    {
      id: "9395",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5123.jpeg",
      name: "I-15 SB @ 2300 N / Warm Springs Rd / MP 311.34, SLC"
    },
    {
      id: "105",
      url: "http://www.udottraffic.utah.gov/1_devices/aux105.jpeg",
      name: "I-15 SB @ 2300 S / MP 304.9, SSL"
    },
    {
      id: "104",
      url: "http://www.udottraffic.utah.gov/1_devices/aux104.jpeg",
      name: "I-15 SB @ 2550 S / MP 304.53, SSL"
    },
    {
      id: "9402",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5129.jpeg",
      name: "I-15 SB @ 2600 S  / SR-93 / MP 315.24, WXS"
    },
    {
      id: "103",
      url: "http://www.udottraffic.utah.gov/1_devices/aux103.jpeg",
      name: "I-15 SB @ 2900 S / MP 304, SSL"
    },
    {
      id: "101",
      url: "http://www.udottraffic.utah.gov/1_devices/aux101.jpeg",
      name: "I-15 SB @ 3300 S / SR-171 / MP 303.45, SSL"
    },
    {
      id: "119",
      url: "http://www.udottraffic.utah.gov/1_devices/aux119.jpeg",
      name: "I-15 SB @ 400 N / MP 309.03, SLC"
    },
    {
      id: "10389",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15098.jpeg",
      name: "I-15 SB @ 400 N / SR-106 / MP 317.55, WBN"
    },
    {
      id: "116",
      url: "http://www.udottraffic.utah.gov/1_devices/aux116.jpeg",
      name: "I-15 SB @ 400 S / MP 307.74, SLC"
    },
    {
      id: "97",
      url: "http://www.udottraffic.utah.gov/1_devices/aux97.jpeg",
      name: "I-15 SB @ 4500 S / SR-266 / MP 301.65, MUR"
    },
    {
      id: "11733",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16541.jpeg",
      name: "I-15 SB @ 4600 N / MP 285.12, LHI"
    },
    {
      id: "11732",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16540.jpeg",
      name: "I-15 SB @ 4800 N / MP 285.37, LHI"
    },
    {
      id: "9408",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5130.jpeg",
      name: "I-15 SB @ 500 S / SR-68 / MP 316.84, WBN"
    },
    {
      id: "9623",
      url: "http://www.udottraffic.utah.gov/1_devices/aux94.jpeg",
      name: "I-15 SB @ 5300 S / SR-173 / MP 300.35, MUR"
    },
    {
      id: "92",
      url: "http://www.udottraffic.utah.gov/1_devices/aux92.jpeg",
      name: "I-15 SB @ 5800 S / MP 299.7, MUR"
    },
    {
      id: "10493",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15302.jpeg",
      name: "I-15 SB @ 600 S / MP 318.76, CVL"
    },
    {
      id: "113",
      url: "http://www.udottraffic.utah.gov/1_devices/aux113.jpeg",
      name: "I-15 SB @ 700 S / MP 307.29, SLC"
    },
    {
      id: "88",
      url: "http://www.udottraffic.utah.gov/1_devices/aux88.jpeg",
      name: "I-15 SB @ 7400 S / MP 297.6, MDV"
    },
    {
      id: "86",
      url: "http://www.udottraffic.utah.gov/1_devices/aux86.jpeg",
      name: "I-15 SB @ 8400 S / MP 296.4, MDV"
    },
    {
      id: "84",
      url: "http://www.udottraffic.utah.gov/1_devices/aux84.jpeg",
      name: "I-15 SB @ 9100 S / MP 295.48, SND"
    },
    {
      id: "9700",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14408.jpeg",
      name: "I-15 SB @ Bangerter Hwy / SR-154 / MP 289.83, DPR"
    },
    {
      id: "9396",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5125.jpeg",
      name: "I-15 SB @ Beck St / US-89 / MP 312.8, NSL"
    },
    {
      id: "9401",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5127.jpeg",
      name: "I-15 SB @ Center St / MP 313.73, NSL"
    },
    {
      id: "91",
      url: "http://www.udottraffic.utah.gov/1_devices/aux91.jpeg",
      name: "I-15 SB @ I-215 South Interchange / MP 299, MUR"
    },
    {
      id: "9400",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5128.jpeg",
      name: "I-15 SB @ Main St / MP 314.31, NSL"
    },
    {
      id: "9390",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5132.jpeg",
      name: "I-15 SB @ Parrish Ln / 400 N / SR-105 / MP 319.51, CVL"
    },
    {
      id: "11731",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16539.jpeg",
      name: "I-15 SB @ Point of the Mountain / MP 285.78, UT"
    },
    {
      id: "1",
      url: "http://www.udottraffic.utah.gov/1_devices/aux1.jpeg",
      name: "I-215 E NB @ 3300 S / SR-171 / MP 1.84, MCK"
    },
    {
      id: "2",
      url: "http://www.udottraffic.utah.gov/1_devices/aux2.jpeg",
      name: "I-215 E NB @ 3800 S / MP 2.58, MCK"
    },
    {
      id: "4",
      url: "http://www.udottraffic.utah.gov/1_devices/aux4.jpeg",
      name: "I-215 E NB @ 4100 S / MP 3.05, MCK"
    },
    {
      id: "6",
      url: "http://www.udottraffic.utah.gov/1_devices/aux6.jpeg",
      name: "I-215 E NB @ 4800 S / MP 4.27, HDY"
    },
    {
      id: "7",
      url: "http://www.udottraffic.utah.gov/1_devices/aux7.jpeg",
      name: "I-215 E NB @ 5200 S / MP 4.65, HDY"
    },
    {
      id: "8",
      url: "http://www.udottraffic.utah.gov/1_devices/aux8.jpeg",
      name: "I-215 E NB @ 5650 S / MP 5.59, HDY"
    },
    {
      id: "12407",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17206.jpeg",
      name: "I-215 E NB @ 6100 S / MP 6.1, HDY"
    },
    {
      id: "9",
      url: "http://www.udottraffic.utah.gov/1_devices/aux9.jpeg",
      name: "I-215 E NB @ 6200 S / SR-190 / MP 6.34, HDY"
    },
    {
      id: "10",
      url: "http://www.udottraffic.utah.gov/1_devices/aux10.jpeg",
      name: "I-215 E NB @ 6400 S / MP 6.56, HDY"
    },
    {
      id: "148",
      url: "http://www.udottraffic.utah.gov/1_devices/aux148.jpeg",
      name: "I-215 E NB @ Parleys Canyon / 2900 S / MP 1.3, MCK"
    },
    {
      id: "3",
      url: "http://www.udottraffic.utah.gov/1_devices/aux3.jpeg",
      name: "I-215 E SB @ 3900 S / MP 2.73, MCK"
    },
    {
      id: "5",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5.jpeg",
      name: "I-215 E SB @ 4500 S / SR-266 / MP 3.67, MCK"
    },
    {
      id: "10681",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15490.jpeg",
      name: "I-215 N EB On-ramp @ Redwood Rd / SR-68 / MP 27.38, NSL"
    },
    {
      id: "271",
      url: "http://www.udottraffic.utah.gov/1_devices/aux271.jpeg",
      name: "I-215 N WB @ 450 W / MP 28.54, NSL"
    },
    {
      id: "270",
      url: "http://www.udottraffic.utah.gov/1_devices/aux270.jpeg",
      name: "I-215 N WB @ Redwood Rd / SR-68 / MP 27.4, NSL (HUB)"
    },
    {
      id: "10682",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15491.jpeg",
      name: "I-215 N WB Off-ramp @ Redwood Rd / SR-68 / MP 27.44, NSL"
    },
    {
      id: "21",
      url: "http://www.udottraffic.utah.gov/1_devices/aux21.jpeg",
      name: "I-215 S EB @ 1200 W / Murray Pkwy Ave / MP 12.34, MUR"
    },
    {
      id: "13",
      url: "http://www.udottraffic.utah.gov/1_devices/aux13.jpeg",
      name: "I-215 S EB @ 1900 E / MP 7.98, CWH"
    },
    {
      id: "25",
      url: "http://www.udottraffic.utah.gov/1_devices/aux25.jpeg",
      name: "I-215 S EB @ 2200 W / MP 14.06, TAY"
    },
    {
      id: "12023",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16831.jpeg",
      name: "I-215 S EB @ 2300 E / MP 7.3, CWH"
    },
    {
      id: "17",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17.jpeg",
      name: "I-215 S EB @ 300 E / MP 10.18, MDV"
    },
    {
      id: "20",
      url: "http://www.udottraffic.utah.gov/1_devices/aux20.jpeg",
      name: "I-215 S EB @ 700 W / MP 11.8, MUR"
    },
    {
      id: "23",
      url: "http://www.udottraffic.utah.gov/1_devices/aux23.jpeg",
      name: "I-215 S EB @ Redwood Rd / SR-68 / MP 13.4, TAY"
    },
    {
      id: "18",
      url: "http://www.udottraffic.utah.gov/1_devices/aux18.jpeg",
      name: "I-215 S EB @ State St / US-89 / MP 10.66, MUR"
    },
    {
      id: "14",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14.jpeg",
      name: "I-215 S WB @ 1300 E / MP 8.87, CWH"
    },
    {
      id: "22",
      url: "http://www.udottraffic.utah.gov/1_devices/aux22.jpeg",
      name: "I-215 S WB @ 1300 W / MP 12.9, MUR"
    },
    {
      id: "12",
      url: "http://www.udottraffic.utah.gov/1_devices/aux12.jpeg",
      name: "I-215 S WB @ 2000 E / Highland Dr / SR-152 / MP 7.76, CWH"
    },
    {
      id: "11",
      url: "http://www.udottraffic.utah.gov/1_devices/aux11.jpeg",
      name: "I-215 S WB @ 2300 E / MP 7.25, HDY"
    },
    {
      id: "19",
      url: "http://www.udottraffic.utah.gov/1_devices/aux19.jpeg",
      name: "I-215 S WB @ 300 W / MP 11.15, MUR"
    },
    {
      id: "16",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16.jpeg",
      name: "I-215 S WB @ 900 E / SR-71 / MP 9.5, MDV"
    },
    {
      id: "24",
      url: "http://www.udottraffic.utah.gov/1_devices/aux24.jpeg",
      name: "I-215 S WB @ Redwood Rd / SR-68 / MP 13.5, TAY"
    },
    {
      id: "15",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15.jpeg",
      name: "I-215 S WB @ Union Park Ave / MP 9.31, MDV"
    },
    {
      id: "277",
      url: "http://www.udottraffic.utah.gov/1_devices/aux277.jpeg",
      name: "I-215 W NB @ 2100 N / MP 25.63, SLC"
    },
    {
      id: "32",
      url: "http://www.udottraffic.utah.gov/1_devices/aux32.jpeg",
      name: "I-215 W NB @ 2900 S / MP 18.22, WVC"
    },
    {
      id: "31",
      url: "http://www.udottraffic.utah.gov/1_devices/aux31.jpeg",
      name: "I-215 W NB @ 3500 S / SR-171 / MP 17.58, WVC"
    },
    {
      id: "27",
      url: "http://www.udottraffic.utah.gov/1_devices/aux27.jpeg",
      name: "I-215 W NB @ 4700 S / SR-266 / MP 15.46, TAY"
    },
    {
      id: "39",
      url: "http://www.udottraffic.utah.gov/1_devices/aux39.jpeg",
      name: "I-215 W NB @ 500 S / MP 21.75, SLC"
    },
    {
      id: "42",
      url: "http://www.udottraffic.utah.gov/1_devices/aux42.jpeg",
      name: "I-215 W NB @ 700 N / MP 23.7, SLC"
    },
    {
      id: "11747",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16555.jpeg",
      name: "I-215 W NB @ 900 S / MP 21.3,SLC"
    },
    {
      id: "37",
      url: "http://www.udottraffic.utah.gov/1_devices/aux37.jpeg",
      name: "I-215 W NB @ California Ave / 1330 S / MP 20.6, SLC"
    },
    {
      id: "40",
      url: "http://www.udottraffic.utah.gov/1_devices/aux40.jpeg",
      name: "I-215 W NB @ North Temple St / MP 22.8, SLC"
    },
    {
      id: "275",
      url: "http://www.udottraffic.utah.gov/1_devices/aux275.jpeg",
      name: "I-215 W SB @ 1200 N / MP 24.42, SLC"
    },
    {
      id: "276",
      url: "http://www.udottraffic.utah.gov/1_devices/aux276.jpeg",
      name: "I-215 W SB @ 1500 N / MP 24.91, SLC"
    },
    {
      id: "35",
      url: "http://www.udottraffic.utah.gov/1_devices/aux35.jpeg",
      name: "I-215 W SB @ 1900 S / MP 19.82, SLC"
    },
    {
      id: "34",
      url: "http://www.udottraffic.utah.gov/1_devices/aux34.jpeg",
      name: "I-215 W SB @ 2300 S / MP 19.25, WVC"
    },
    {
      id: "278",
      url: "http://www.udottraffic.utah.gov/1_devices/aux278.jpeg",
      name: "I-215 W SB @ 2500 N / MP 26.31, SLC"
    },
    {
      id: "33",
      url: "http://www.udottraffic.utah.gov/1_devices/aux33.jpeg",
      name: "I-215 W SB @ 2600 S / MP 18.71, WVC"
    },
    {
      id: "279",
      url: "http://www.udottraffic.utah.gov/1_devices/aux279.jpeg",
      name: "I-215 W SB @ 2800 N / MP 26.8, SLC"
    },
    {
      id: "30",
      url: "http://www.udottraffic.utah.gov/1_devices/aux30.jpeg",
      name: "I-215 W SB @ 3500 S / SR-171 / MP 17.4, WVC"
    },
    {
      id: "29",
      url: "http://www.udottraffic.utah.gov/1_devices/aux29.jpeg",
      name: "I-215 W SB @ 3900 S / MP 16.9, WVC"
    },
    {
      id: "28",
      url: "http://www.udottraffic.utah.gov/1_devices/aux28.jpeg",
      name: "I-215 W SB @ 4300 S / MP 16.18, TAY"
    },
    {
      id: "41",
      url: "http://www.udottraffic.utah.gov/1_devices/aux41.jpeg",
      name: "I-215 W SB @ 450 N / MP 23.31, SLC"
    },
    {
      id: "26",
      url: "http://www.udottraffic.utah.gov/1_devices/aux26.jpeg",
      name: "I-215 W SB @ 5100 S / MP 14.96, TAY"
    },
    {
      id: "36",
      url: "http://www.udottraffic.utah.gov/1_devices/aux36.jpeg",
      name: "I-215 W SB @ California Ave / 1330 S / MP 20.5, SLC"
    },
    {
      id: "150",
      url: "http://www.udottraffic.utah.gov/1_devices/aux150.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Chain Up Area East / MP 129.5, SL"
    },
    {
      id: "158",
      url: "http://www.udottraffic.utah.gov/1_devices/aux158.jpeg",
      name: "I-80 / Parley`s Canyon EB @ East Canyon / SR-65 / MP 133.96, SL"
    },
    {
      id: "68",
      url: "http://www.udottraffic.utah.gov/1_devices/aux68.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Exit 130 to SB I-215 E / MP 128.5, SL"
    },
    {
      id: "153",
      url: "http://www.udottraffic.utah.gov/1_devices/aux153.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Milepost 131.42, SL"
    },
    {
      id: "155",
      url: "http://www.udottraffic.utah.gov/1_devices/aux155.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Milepost 132.53, SL"
    },
    {
      id: "156",
      url: "http://www.udottraffic.utah.gov/1_devices/aux156.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Milepost 132.97, SL"
    },
    {
      id: "159",
      url: "http://www.udottraffic.utah.gov/1_devices/aux159.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Milepost 134.47, SL"
    },
    {
      id: "160",
      url: "http://www.udottraffic.utah.gov/1_devices/aux160.jpeg",
      name: "I-80 / Parley`s Canyon EB @ Milepost 134.93, SL"
    },
    {
      id: "11424",
      url:
        "http://www.udottraffic.utah.gov/1_devices/I-80%20Parleys%20Quarry.gif",
      name:
        "I-80 / Parley`s Canyon RWIS EB @ East Quarry / MP 130.36, SL (Low Lite)"
    },
    {
      id: "69",
      url: "http://www.udottraffic.utah.gov/1_devices/aux69.jpeg",
      name: "I-80 / Parley`s Canyon WB @ Chain Up Area West / MP 129.2, SL"
    },
    {
      id: "157",
      url: "http://www.udottraffic.utah.gov/1_devices/aux157.jpeg",
      name:
        "I-80 / Parley`s Canyon WB @ East Canyon / SR-65 On-ramp / MP 133.61, SL"
    },
    {
      id: "151",
      url: "http://www.udottraffic.utah.gov/1_devices/aux151.jpeg",
      name: "I-80 / Parley`s Canyon WB @ East Quarry / MP 130.38, SL"
    },
    {
      id: "163",
      url: "http://www.udottraffic.utah.gov/1_devices/aux163.jpeg",
      name:
        "I-80 / Parley`s Canyon WB @ Lamb`s Canyon Rd Off-ramp / MP 136.45, SL"
    },
    {
      id: "162",
      url: "http://www.udottraffic.utah.gov/1_devices/aux162.jpeg",
      name:
        "I-80 / Parley`s Canyon WB @ Lamb`s Canyon Rd On-ramp / MP 135.96, SL"
    },
    {
      id: "152",
      url: "http://www.udottraffic.utah.gov/1_devices/aux152.jpeg",
      name: "I-80 / Parley`s Canyon WB @ Milepost 131.1, SL"
    },
    {
      id: "12458",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17249.jpeg",
      name: "I-80 / Parley`s Canyon WB @ Mountain Dell / MP 134.6, SL"
    },
    {
      id: "154",
      url: "http://www.udottraffic.utah.gov/1_devices/aux154.jpeg",
      name: "I-80 / Parley`s Canyon WB @ Mt Aire Canyon Rd / MP 132.01, SL"
    },
    {
      id: "70",
      url: "http://www.udottraffic.utah.gov/1_devices/aux70.jpeg",
      name: "I-80 / Parley`s Canyon WB @ Quarry / MP 129.88, SL"
    },
    {
      id: "161",
      url: "http://www.udottraffic.utah.gov/1_devices/aux161.jpeg",
      name: "I-80 / Parleys Canyon EB @ Milepost 135.46, SL"
    },
    {
      id: "164",
      url: "http://www.udottraffic.utah.gov/1_devices/aux164.jpeg",
      name: "I-80 / Parleys Canyon EB @ Milepost 136.95, SL"
    },
    {
      id: "60",
      url: "http://www.udottraffic.utah.gov/1_devices/aux60.jpeg",
      name: "I-80 @ 2000 E / MP 126.2, SLC"
    },
    {
      id: "107",
      url: "http://www.udottraffic.utah.gov/1_devices/aux107.jpeg",
      name: "I-80 EB @ 1000 W / MP 118.85, SLC"
    },
    {
      id: "11675",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16483.jpeg",
      name: "I-80 EB @ 1300 W / MP 118.41 SLC"
    },
    {
      id: "62",
      url: "http://www.udottraffic.utah.gov/1_devices/aux62.jpeg",
      name: "I-80 EB @ 2400 E / MP 126.82, SLC"
    },
    {
      id: "63",
      url: "http://www.udottraffic.utah.gov/1_devices/aux63.jpeg",
      name: "I-80 EB @ 2800 E / MP 127.39, SL"
    },
    {
      id: "53",
      url: "http://www.udottraffic.utah.gov/1_devices/aux53.jpeg",
      name: "I-80 EB @ 300 W / MP 122.57, SSL"
    },
    {
      id: "48",
      url: "http://www.udottraffic.utah.gov/1_devices/aux48.jpeg",
      name: "I-80 EB @ 3200 W / North Temple St / MP 116.33, SLC"
    },
    {
      id: "66",
      url: "http://www.udottraffic.utah.gov/1_devices/aux66.jpeg",
      name: "I-80 EB @ 3250 E / East of Foothill / MP 127.97, SL"
    },
    {
      id: "47",
      url: "http://www.udottraffic.utah.gov/1_devices/aux47.jpeg",
      name: "I-80 EB @ 3600 W / MP 115.9, SLC"
    },
    {
      id: "43",
      url: "http://www.udottraffic.utah.gov/1_devices/aux43.jpeg",
      name: "I-80 EB @ 4400 W / MP 114.75, SLC"
    },
    {
      id: "56",
      url: "http://www.udottraffic.utah.gov/1_devices/aux56.jpeg",
      name: "I-80 EB @ 700 E / SR-71 / MP 124.15, SLC"
    },
    {
      id: "45",
      url: "http://www.udottraffic.utah.gov/1_devices/aux45.jpeg",
      name: "I-80 EB @ Bangerter Hwy / 4000 W / SR-154 / MP 115.35, SLC"
    },
    {
      id: "64",
      url: "http://www.udottraffic.utah.gov/1_devices/aux64.jpeg",
      name: "I-80 EB @ I-215 E / MP 127.66, SL"
    },
    {
      id: "49",
      url: "http://www.udottraffic.utah.gov/1_devices/aux49.jpeg",
      name: "I-80 EB @ I-215 W SB / MP 117.2, SLC"
    },
    {
      id: "67",
      url: "http://www.udottraffic.utah.gov/1_devices/aux67.jpeg",
      name: "I-80 EB @ Mouth of Parley`s Canyon / MP 128.23, SL"
    },
    {
      id: "9118",
      url: "http://www.udottraffic.utah.gov/1_devices/aux51.jpeg",
      name: "I-80 EB @ Redwood Rd / SR-68 / MP 117.9, SLC"
    },
    {
      id: "54",
      url: "http://www.udottraffic.utah.gov/1_devices/aux54.jpeg",
      name: "I-80 EB @ State St / US-89 / MP 123.32, SSL"
    },
    {
      id: "11251",
      url: "http://www.udottraffic.utah.gov/1_devices/I-80mp117-all.gif",
      name: "I-80 Liveview EB @ 1800 W / MP 117.52, SLC"
    },
    {
      id: "11250",
      url: "http://www.udottraffic.utah.gov/1_devices/I-80-MP-111-all.gif",
      name: "I-80 Liveview EB @ 7200 W Off Ramp / MP 111, SLC"
    },
    {
      id: "57",
      url: "http://www.udottraffic.utah.gov/1_devices/aux57.jpeg",
      name: "I-80 WB @ 1200 E / Highland Dr / MP 124.9, SLC"
    },
    {
      id: "12325",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17124.jpeg",
      name: "I-80 WB @ 1300 E / MP 125.1, SLC"
    },
    {
      id: "59",
      url: "http://www.udottraffic.utah.gov/1_devices/aux59.jpeg",
      name: "I-80 WB @ 1700 E / MP 125.69, SLC"
    },
    {
      id: "50",
      url: "http://www.udottraffic.utah.gov/1_devices/aux50.jpeg",
      name: "I-80 WB @ 1900 W / MP 117.47, SLC"
    },
    {
      id: "61",
      url: "http://www.udottraffic.utah.gov/1_devices/aux61.jpeg",
      name: "I-80 WB @ 2300 E / MP 126.74, SLC"
    },
    {
      id: "9350",
      url: "http://www.udottraffic.utah.gov/1_devices/aux337.jpeg",
      name: "I-80 WB @ 5600 W / SR-172 / MP 113.3, SLC"
    },
    {
      id: "55",
      url: "http://www.udottraffic.utah.gov/1_devices/aux55.jpeg",
      name: "I-80 WB @ 700 E / SR-71 / MP 124.1, SLC"
    },
    {
      id: "147",
      url: "http://www.udottraffic.utah.gov/1_devices/aux147.jpeg",
      name: "I-80 WB @ State St / US-89 / MP 123.28, SSL"
    },
    {
      id: "10052",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14761.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 1200 N / MP 5.42, WBN"
    },
    {
      id: "10059",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14768.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 1275 N / MP 8.3, CVL"
    },
    {
      id: "10049",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14758.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 1900 S / MP 3.16, WXS"
    },
    {
      id: "10054",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14763.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 2200 N / MP 6.62, WBN"
    },
    {
      id: "10048",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14757.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 2500 S / MP 2.5, WXS"
    },
    {
      id: "10046",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14755.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 300 N / MP 1.52, NSL"
    },
    {
      id: "10051",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14760.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 400 N / MP 4.7, WBN"
    },
    {
      id: "10058",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14767.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 800 N / MP 7.8, CVL"
    },
    {
      id: "10047",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14756.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 900 N / MP 2.14, NSL"
    },
    {
      id: "10055",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14764.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ 900 W / MP 7, CVL"
    },
    {
      id: "10045",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14754.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ Center St / MP 1, NSL"
    },
    {
      id: "10056",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14765.jpeg",
      name: "Legacy Pkwy / SR-67 NB @ Parrish Ln / SR-105 / MP 7.45, CVL"
    },
    {
      id: "10050",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14759.jpeg",
      name: "Legacy Pkwy / SR-67 SB @ 500 S / MP 4, WXS"
    },
    {
      id: "10053",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14762.jpeg",
      name: "Legacy Pkwy / SR-67 SB @ Pages Ln / MP 6, WBN"
    },
    {
      id: "10057",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14766.jpeg",
      name: "Legacy Pkwy / SR-67 SB @ Parrish Ln / SR-105 / MP 7.4, CVL"
    },
    {
      id: "10186",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14895.jpeg",
      name:
        "Little Cottonwood Rd / 3335 E / SR-209 @ Old Wasatch Blvd / 9710 S, GNT"
    },
    {
      id: "11799",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16607.jpeg",
      name: "Little Cottonwood Rd / 9800 S / SR-209 @ Wasatch Blvd / 3400 E, SL"
    },
    {
      id: "12437",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17228.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Alta Bypass / MP 10.95, SL"
    },
    {
      id: "11457",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16266.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Lisa Falls / MP 6.5, SL"
    },
    {
      id: "11458",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16267.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Seven Turns / MP 7.4, SL"
    },
    {
      id: "11459",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16268.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Tanners Flat / MP 7.94, SL"
    },
    {
      id: "11456",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16265.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ Upper Vault / MP 5.96, SL"
    },
    {
      id: "11461",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16270.jpeg",
      name: "Little Cottonwood Rd / SR-210 EB @ White Pine Parking / MP 9.2, SL"
    },
    {
      id: "11839",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16647.jpeg",
      name: "Little Cottonwood Rd / SR-210 RWIS EB @ Powerhouse / MP 5.67, SL"
    },
    {
      id: "12436",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17227.jpeg",
      name: "Little Cottonwood Rd / SR-210 WB @ Upper White Pine / MP 9.7, SL"
    },
    {
      id: "11460",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16269.jpeg",
      name: "Little Cottonwood Rd / SR-210 WB @ White Pine / MP 8.7, SL"
    },
    {
      id: "10630",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15439.jpeg",
      name: "Main St / Columbus St / SR-186 @ 300 N, SLC"
    },
    {
      id: "9640",
      url: "http://www.udottraffic.utah.gov/1_devices/aux438.jpeg",
      name: "Main St / US-89 @ 2600 S / SR-93, BTF"
    },
    {
      id: "12077",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16885.jpeg",
      name: "Mario Capecchi Dr / SR-282 @ 1900 E, SLC"
    },
    {
      id: "10676",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15485.jpeg",
      name: "Minuteman Dr @ 12450 S, DPR"
    },
    {
      id: "11016",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15825.jpeg",
      name: "Mountain View / SR-85 NB @ 12600 S, RVT"
    },
    {
      id: "11017",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15826.jpeg",
      name: "Mountain View / SR-85 NB @ 13400 S, RVT"
    },
    {
      id: "12054",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16862.jpeg",
      name: "Mountain View / SR-85 NB @ 4100 S, WVC"
    },
    {
      id: "12052",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16860.jpeg",
      name: "Mountain View / SR-85 NB @ 4565 S, WVC"
    },
    {
      id: "12051",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16859.jpeg",
      name: "Mountain View / SR-85 NB @ 4825 S, WVC"
    },
    {
      id: "11062",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15871.jpeg",
      name: "Mountain View / SR-85 NB @ 5400 S / SR-173, WVC"
    },
    {
      id: "11059",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15868.jpeg",
      name: "Mountain View / SR-85 NB @ 7600 S, WJD"
    },
    {
      id: "11061",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15870.jpeg",
      name: "Mountain View / SR-85 NB @ 7800 S, WJD"
    },
    {
      id: "11060",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15869.jpeg",
      name: "Mountain View / SR-85 NB @ 9000 S / SR-209, WJD"
    },
    {
      id: "11018",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15827.jpeg",
      name: "Mountain View / SR-85 NB @ Porter Rockwell Blvd, HRR"
    },
    {
      id: "11756",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16564.jpeg",
      name: "Mountain View / SR-85 NB @ South Jordan Pkwy / 11000 S, SJO"
    },
    {
      id: "11357",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-85%20Juniper-all.gif",
      name: "Mountain View / SR-85 RWIS NB @ 14600 S / Juniper, HRR"
    },
    {
      id: "11022",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15831.jpeg",
      name: "Mountain View / SR-85 SB @ 11450 S, SJO"
    },
    {
      id: "11019",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15828.jpeg",
      name: "Mountain View / SR-85 SB @ 12200 S, HRR"
    },
    {
      id: "11025",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15834.jpeg",
      name: "Mountain View / SR-85 SB @ 13200 S, RVT"
    },
    {
      id: "12053",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16861.jpeg",
      name: "Mountain View / SR-85 SB @ 4350 S, WVC"
    },
    {
      id: "11056",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15865.jpeg",
      name: "Mountain View / SR-85 SB @ 5800 S, WVC"
    },
    {
      id: "11058",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15867.jpeg",
      name: "Mountain View / SR-85 SB @ 6200 S, WVC"
    },
    {
      id: "11057",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15866.jpeg",
      name: "Mountain View / SR-85 SB @ 9860 S, WJD"
    },
    {
      id: "11020",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15829.jpeg",
      name: "Mountain View / SR-85 SB @ Daybreak Pkwy, SJO"
    },
    {
      id: "11868",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16676.jpeg",
      name: "Mountain View / SR-85 SB @ Lake Ave / 11400 S, SJO"
    },
    {
      id: "11021",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15830.jpeg",
      name: "Mountain View / SR-85 SB @ Old Bingham Hwy, WJD"
    },
    {
      id: "12050",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16858.jpeg",
      name: "Mountain View / SR-85 SB @ Upper Ridge Rd / 5100 S, WVC"
    },
    {
      id: "11064",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15873.jpeg",
      name: "New Bingham Hwy @ 4800 W, WJD"
    },
    {
      id: "11063",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15872.jpeg",
      name: "New Bingham Hwy @ 5600 W, WJD"
    },
    {
      id: "9895",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14604.jpeg",
      name:
        "North Little Cottonwood Rd / Little Cottonwood Canyon Rd / SR-210 @ Little Cottonwood Rd / SR-209, SL"
    },
    {
      id: "11800",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16608.jpeg",
      name:
        "North Little Cottonwood Rd / Wasatch Blvd / 3600 E / SR-210 @ Wasatch Blvd / 8900 S, CWH"
    },
    {
      id: "181",
      url: "http://www.udottraffic.utah.gov/1_devices/aux181.jpeg",
      name: "North Temple St @ 200 W, SLC"
    },
    {
      id: "12067",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16875.jpeg",
      name: "Parrish Ln / 400 N / SR-105 @ Main St / SR-106, CVL"
    },
    {
      id: "11024",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15833.jpeg",
      name: "Porter Rockwell Blvd @ 2300 W, HRR"
    },
    {
      id: "11828",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16636.jpeg",
      name: "Redwood Rd / SR-68 @ 10400 S / South Jordan Pkwy / SR-151, SJO"
    },
    {
      id: "11015",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15824.jpeg",
      name: "Redwood Rd / SR-68 @ 11400 S, SJO"
    },
    {
      id: "305",
      url: "http://www.udottraffic.utah.gov/1_devices/aux305.jpeg",
      name: "Redwood Rd / SR-68 @ 12600 S / SR-71, RVT"
    },
    {
      id: "12260",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17059.jpeg",
      name: "Redwood Rd / SR-68 @ 12800 S, RVT"
    },
    {
      id: "12261",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17060.jpeg",
      name: "Redwood Rd / SR-68 @ 13400 S, RVT"
    },
    {
      id: "10328",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15037.jpeg",
      name: "Redwood Rd / SR-68 @ 14400 S / SR-140, BLF"
    },
    {
      id: "10222",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14931.jpeg",
      name: "Redwood Rd / SR-68 @ 2100 S, SLC"
    },
    {
      id: "10887",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15696.jpeg",
      name: "Redwood Rd / SR-68 @ 2320 S, WVC"
    },
    {
      id: "9266",
      url: "http://www.udottraffic.utah.gov/1_devices/aux9173.jpeg",
      name: "Redwood Rd / SR-68 @ 3100 S, WVC"
    },
    {
      id: "176",
      url: "http://www.udottraffic.utah.gov/1_devices/aux176.jpeg",
      name: "Redwood Rd / SR-68 @ 3500 S / SR-171, WVC"
    },
    {
      id: "11949",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16757.jpeg",
      name: "Redwood Rd / SR-68 @ 4100 S, TAY"
    },
    {
      id: "10733",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15542.jpeg",
      name: "Redwood Rd / SR-68 @ 4700 S / SR-266, TAY"
    },
    {
      id: "9867",
      url: "http://www.udottraffic.utah.gov/1_devices/aux2123.jpeg",
      name: "Redwood Rd / SR-68 @ 5400 S / SR-173, TAY"
    },
    {
      id: "10554",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15363.jpeg",
      name: "Redwood Rd / SR-68 @ 6200 S, TAY"
    },
    {
      id: "11963",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16771.jpeg",
      name: "Redwood Rd / SR-68 @ 700 N, SLC"
    },
    {
      id: "9630",
      url: "http://www.udottraffic.utah.gov/1_devices/aux309.jpeg",
      name: "Redwood Rd / SR-68 @ 7000 S / SR-48, WJD"
    },
    {
      id: "9557",
      url: "http://www.udottraffic.utah.gov/1_devices/aux308.jpeg",
      name: "Redwood Rd / SR-68 @ 7800 S / SR-48, WJD"
    },
    {
      id: "11466",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16275.jpeg",
      name: "Redwood Rd / SR-68 @ 8200 S / Sugar Factory Rd, WJD"
    },
    {
      id: "9555",
      url: "http://www.udottraffic.utah.gov/1_devices/aux307.jpeg",
      name: "Redwood Rd / SR-68 @ 9000 S / SR-209, WJD"
    },
    {
      id: "12449",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17240.jpeg",
      name: "Redwood Rd / SR-68 @ Center St, NSL"
    },
    {
      id: "11968",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16776.jpeg",
      name: "Redwood Rd / SR-68 @ North Temple St, SLC"
    },
    {
      id: "11023",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15832.jpeg",
      name: "Redwood Rd / SR-68 @ Porter Rockwell Blvd, BLF"
    },
    {
      id: "10255",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14964.jpeg",
      name: "South Campus Dr / SR-282 @ 1725 E, SLC"
    },
    {
      id: "10256",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14965.jpeg",
      name: "South Campus Dr / SR-282 @ Mario Capecchi Dr, SLC"
    },
    {
      id: "11826",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16634.jpeg",
      name: "South Jordan Pkwy / 10400 S / SR-151 @ 2200 W, SJO"
    },
    {
      id: "10717",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15526.jpeg",
      name: "South Temple St @ 700 E / I St, SLC"
    },
    {
      id: "9436",
      url: "http://www.udottraffic.utah.gov/1_devices/aux428.jpeg",
      name: "South Temple St @ Main St, SLC"
    },
    {
      id: "73",
      url: "http://www.udottraffic.utah.gov/1_devices/aux73.jpeg",
      name: "SR-201 / N Frontage Rd @ 3200 W / MP 13.7, SLC"
    },
    {
      id: "11933",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16741.jpeg",
      name: "SR-201 @ 1275 W / MP 15.83, WVC"
    },
    {
      id: "9673",
      url: "http://www.udottraffic.utah.gov/1_devices/aux75.jpeg",
      name: "SR-201 @ 1600 W / MP 15.47, SLC"
    },
    {
      id: "11692",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16500.jpeg",
      name: "SR-201 @ 2100 W / MP 14.82, SLC"
    },
    {
      id: "11693",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16501.jpeg",
      name: "SR-201 @ 2500 W / MP 14.42, SLC"
    },
    {
      id: "74",
      url: "http://www.udottraffic.utah.gov/1_devices/aux74.jpeg",
      name: "SR-201 @ 3000 W / MP 14, WVC"
    },
    {
      id: "71",
      url: "http://www.udottraffic.utah.gov/1_devices/aux71.jpeg",
      name: "SR-201 @ 4600 W / MP 12.11, WVC"
    },
    {
      id: "287",
      url: "http://www.udottraffic.utah.gov/1_devices/aux287.jpeg",
      name: "SR-201 @ 5600 W / SR-172 / MP 10.8, WVC"
    },
    {
      id: "11611",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16420.jpeg",
      name: "SR-201 @ 6200 W / MP 10.04, WVC"
    },
    {
      id: "11612",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16421.jpeg",
      name: "SR-201 @ 6800 W / MP 9.13, WVC"
    },
    {
      id: "9674",
      url: "http://www.udottraffic.utah.gov/1_devices/aux256.jpeg",
      name: "SR-201 @ 7200 W / MP 8.7, MAG"
    },
    {
      id: "79",
      url: "http://www.udottraffic.utah.gov/1_devices/aux79.jpeg",
      name: "SR-201 @ 800 W / MP 16.7, SSL"
    },
    {
      id: "77",
      url: "http://www.udottraffic.utah.gov/1_devices/aux77.jpeg",
      name: "SR-201 @ 900 W / MP 16.6, SSL"
    },
    {
      id: "76",
      url: "http://www.udottraffic.utah.gov/1_devices/aux76.jpeg",
      name: "SR-201 EB @ 1300 W / MP 15.8, WVC"
    },
    {
      id: "72",
      url: "http://www.udottraffic.utah.gov/1_devices/aux72.jpeg",
      name: "SR-201 EB @ Bangerter Hwy / SR-154 / MP 12.82, WVC"
    },
    {
      id: "10689",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15498.jpeg",
      name: "SR-201 WB @ Bangerter Hwy / SR-154 / MP 12.8, SLC"
    },
    {
      id: "11500",
      url:
        "http://www.udottraffic.utah.gov/1_devices/RWIS%20SR-65%20@%20big-mountain-pass.gif",
      name: "SR-65 RWIS NB @ Big Mountain Pass / SL-MN Co Line / MP 8.4, SL"
    },
    {
      id: "11066",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15875.jpeg",
      name: "State St / SR-186 @ North Temple St / 2nd Ave, SLC"
    },
    {
      id: "11965",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16773.jpeg",
      name: "State St / US-89 @ 10000 S / Sego Lily Dr, SND"
    },
    {
      id: "10104",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14813.jpeg",
      name: "State St / US-89 @ 10600 S, SND"
    },
    {
      id: "12341",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17140.jpeg",
      name: "State St / US-89 @ 11000 S, SND"
    },
    {
      id: "12342",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17141.jpeg",
      name: "State St / US-89 @ 11235 S / Auto Mall Dr, SND"
    },
    {
      id: "10686",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15495.jpeg",
      name: "State St / US-89 @ 11400 S, SND"
    },
    {
      id: "10677",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15486.jpeg",
      name: "State St / US-89 @ 12200 S, DPR"
    },
    {
      id: "11514",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16323.jpeg",
      name: "State St / US-89 @ 1300 S, SLC"
    },
    {
      id: "11521",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16330.jpeg",
      name: "State St / US-89 @ 1700 S, SLC"
    },
    {
      id: "141",
      url: "http://www.udottraffic.utah.gov/1_devices/aux141.jpeg",
      name: "State St / US-89 @ 2100 S / SR-201, SSL"
    },
    {
      id: "142",
      url: "http://www.udottraffic.utah.gov/1_devices/aux142.jpeg",
      name: "State St / US-89 @ 3300 S / SR-171, SSL"
    },
    {
      id: "11948",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16756.jpeg",
      name: "State St / US-89 @ 3900 S, SSL"
    },
    {
      id: "185",
      url: "http://www.udottraffic.utah.gov/1_devices/aux185.jpeg",
      name: "State St / US-89 @ 400 S / University Blvd / SR-186, SLC"
    },
    {
      id: "9264",
      url: "http://www.udottraffic.utah.gov/1_devices/aux5143.jpeg",
      name: "State St / US-89 @ 4500 S / SR-266, MUR"
    },
    {
      id: "144",
      url: "http://www.udottraffic.utah.gov/1_devices/aux144.jpeg",
      name: "State St / US-89 @ 5300 S / SR-173, MUR"
    },
    {
      id: "11825",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16633.jpeg",
      name: "State St / US-89 @ 7200 S / Fort Union Blvd / SR-48, MDV"
    },
    {
      id: "195",
      url: "http://www.udottraffic.utah.gov/1_devices/aux195.jpeg",
      name: "State St / US-89 @ 7800 S, MDV"
    },
    {
      id: "12268",
      url: "http://www.udottraffic.utah.gov/1_devices/aux17067.jpeg",
      name: "State St / US-89 @ 8375 S / Princeton Dr, SND"
    },
    {
      id: "10108",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14817.jpeg",
      name: "State St / US-89 @ 9000 S / SR-209, SND"
    },
    {
      id: "10103",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14812.jpeg",
      name: "State St / US-89 @ 9400 S, SND"
    },
    {
      id: "10893",
      url: "http://www.udottraffic.utah.gov/1_devices/aux15702.jpeg",
      name: "State St / US-89 @ Rio Tinto Stadium / 9220 S, SND"
    },
    {
      id: "145",
      url: "http://www.udottraffic.utah.gov/1_devices/aux145.jpeg",
      name: "State St / US-89 @ Winchester St / 6400 S, MUR"
    },
    {
      id: "146",
      url: "http://www.udottraffic.utah.gov/1_devices/aux146.jpeg",
      name: "Union Park Ave / 1090 E @ Fort Union Blvd / 7000 S, MDV"
    },
    {
      id: "11944",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16752.jpeg",
      name: "Union Park Ave / 1300 E @ 7755 S / Forbush Ln, SND"
    },
    {
      id: "12019",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16827.jpeg",
      name: "Union Park Ave / 1300 E @ Creek Rd / South Union Ave / 7340 S, CWH"
    },
    {
      id: "12020",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16828.jpeg",
      name: "Union Park Ave @ 1300 E / 7100 S, CWH"
    },
    {
      id: "11467",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16276.jpeg",
      name: "Van Winkle Expwy / SR-152 @ 5600 S, HDY"
    },
    {
      id: "11798",
      url: "http://www.udottraffic.utah.gov/1_devices/aux16606.jpeg",
      name:
        "Wasatch Blvd / 3650 E / SR-210 @ 7800 S / Bengal Blvd / Honeywood Cove Dr, CWH"
    },
    {
      id: "9896",
      url: "http://www.udottraffic.utah.gov/1_devices/aux14605.jpeg",
      name:
        "Wasatch Blvd / SR-190/SR-210 @ Big Cottonwood Canyon Rd / Fort Union Blvd / SR-190, CWH"
    }
  ]
};
