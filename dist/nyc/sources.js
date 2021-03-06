const DEFAULTS = ["420"];
const MANUAL_CACHE_BUST = false;
const CAMERAS = [
    {
        "coord": [40.79142677512476, -73.93807411193848],
        "cams": [
            {
                "id": "368",
                "name": "1 Ave @ 110 St",
                "url": "https://jpg.nyctmc.org/cctv261.jpg"
            },
            {
                "id": "274",
                "name": "FDR Dr @ 111 ST",
                "url": "https://jpg.nyctmc.org/cctv166.jpg"
            }
        ]
    },
    {
        "coord": [40.800426144169315, -73.93155097961426],
        "cams": [
            {
                "id": "360",
                "name": "1 Ave @ 124 St",
                "url": "https://jpg.nyctmc.org/cctv254.jpg"
            },
            {
                "id": "247",
                "name": "2 Ave @ 125 St",
                "url": "https://jpg.nyctmc.org/cctv102.jpg"
            },
            {
                "id": "734",
                "name": "FDR @ E 127 St",
                "url": "https://jpg.nyctmc.org/cctv682.jpg"
            }
        ]
    },
    {
        "coord": [40.731361, -73.982486],
        "cams": [
            {
                "id": "1189",
                "name": "1 Ave @ 14 St",
                "url": "https://jpg.nyctmc.org/cctv1083.jpg"
            },
            {
                "id": "789",
                "name": "1 Ave @ E 14 St",
                "url": "https://jpg.nyctmc.org/cctv696.jpg"
            },
            {
                "id": "846",
                "name": "2 Ave @ E 14 St",
                "url": "https://jpg.nyctmc.org/cctv740.jpg"
            }
        ]
    },
    {
        "coord": [40.7359741672444, -73.97828578948975],
        "cams": [
            {
                "id": "361",
                "name": "1 Ave @ 23 St",
                "url": "https://jpg.nyctmc.org/cctv253.jpg"
            }
        ]
    },
    {
        "coord": [40.74803725830298, -73.9694881439209],
        "cams": [
            {
                "id": "550",
                "name": "1 Ave @ 42 St",
                "url": "https://jpg.nyctmc.org/cctv490.jpg"
            },
            {
                "id": "551",
                "name": "2 Ave @ 42 St",
                "url": "https://jpg.nyctmc.org/cctv491.jpg"
            }
        ]
    },
    {
        "coord": [40.761501, -73.960542],
        "cams": [
            {
                "id": "940",
                "name": "1 Ave @ 62 St",
                "url": "https://jpg.nyctmc.org/cctv827.jpg"
            },
            {
                "id": "177",
                "name": "E 63 St @ QBB",
                "url": "https://jpg.nyctmc.org/cctv16.jpg"
            },
            {
                "id": "889",
                "name": "QBB LL CM @ York Ave",
                "url": "https://jpg.nyctmc.org/cctv409.jpg"
            },
            {
                "id": "478",
                "name": "QBB NOR @ York Ave",
                "url": "https://jpg.nyctmc.org/cctv407.jpg"
            },
            {
                "id": "476",
                "name": "QBB SOR @ 1 Ave",
                "url": "https://jpg.nyctmc.org/cctv404.jpg"
            },
            {
                "id": "887",
                "name": "QBB SOR @ Sutton Pl",
                "url": "https://jpg.nyctmc.org/cctv406.jpg"
            },
            {
                "id": "479",
                "name": "QBB UL CM @ York Ave",
                "url": "https://jpg.nyctmc.org/cctv408.jpg"
            },
            {
                "id": "941",
                "name": "York Ave @ 63 St",
                "url": "https://jpg.nyctmc.org/cctv826.jpg"
            }
        ]
    },
    {
        "coord": [40.7760243030083, -73.9493179321289],
        "cams": [
            {
                "id": "370",
                "name": "1 Ave @ 86 St",
                "url": "https://jpg.nyctmc.org/cctv263.jpg"
            }
        ]
    },
    {
        "coord": [40.783304, -73.944662],
        "cams": [
            {
                "id": "537",
                "name": "1 Ave @ 96 St",
                "url": "https://jpg.nyctmc.org/cctv644.jpg"
            },
            {
                "id": "186",
                "name": "FDR Dr @ 96 Street",
                "url": "https://jpg.nyctmc.org/cctv25.jpg"
            }
        ]
    },
    {
        "coord": [40.752424, -74.000899],
        "cams": [
            {
                "id": "1028",
                "name": "10 Ave @ 42 St",
                "url": "https://jpg.nyctmc.org/cctv914.jpg"
            },
            {
                "id": "326",
                "name": "11 Ave @ 34 ST",
                "url": "https://jpg.nyctmc.org/cctv200.jpg"
            }
        ]
    },
    {
        "coord": [40.769126, -73.98858],
        "cams": [
            {
                "id": "828",
                "name": "10 Ave @ 57 St",
                "url": "https://jpg.nyctmc.org/cctv722.jpg"
            },
            {
                "id": "514",
                "name": "Amsterdam Ave @ 60 St",
                "url": "https://jpg.nyctmc.org/cctv455.jpg"
            }
        ]
    },
    {
        "coord": [40.75990312387116, -73.99815559387207],
        "cams": [
            {
                "id": "192",
                "name": "11 Ave @ 42 St",
                "url": "https://jpg.nyctmc.org/cctv31.jpg"
            }
        ]
    },
    {
        "coord": [40.74182715312056, -74.00879859924316],
        "cams": [
            {
                "id": "548",
                "name": "11 Ave/Rt 9A @ 14 St",
                "url": "https://jpg.nyctmc.org/cctv489.jpg"
            }
        ]
    },
    {
        "coord": [40.75629482445485, -74.00450706481934],
        "cams": [
            {
                "id": "545",
                "name": "12 Ave @ 34 St",
                "url": "https://jpg.nyctmc.org/cctv486.jpg"
            }
        ]
    },
    {
        "coord": [40.761268375278135, -74.00090217590332],
        "cams": [
            {
                "id": "544",
                "name": "12 Ave @ 42 St",
                "url": "https://jpg.nyctmc.org/cctv485.jpg"
            },
            {
                "id": "319",
                "name": "West Street @ Intrepid",
                "url": "https://jpg.nyctmc.org/cctv90.jpg"
            }
        ]
    },
    {
        "coord": [40.77072684694955, -73.99420738220215],
        "cams": [
            {
                "id": "543",
                "name": "12 Ave @ 57 St",
                "url": "https://jpg.nyctmc.org/cctv484.jpg"
            }
        ]
    },
    {
        "coord": [40.737876, -73.980926],
        "cams": [
            {
                "id": "794",
                "name": "2 Ave @ 23 St",
                "url": "https://jpg.nyctmc.org/cctv699.jpg"
            },
            {
                "id": "495",
                "name": "3 Ave @ 23 St",
                "url": "https://jpg.nyctmc.org/cctv430.jpg"
            }
        ]
    },
    {
        "coord": [40.745338697450066, -73.97489547729492],
        "cams": [
            {
                "id": "165",
                "name": "2 Ave @ 36 St-Midtown Tunnel",
                "url": "https://jpg.nyctmc.org/cctv4.jpg"
            }
        ]
    },
    {
        "coord": [40.7534015420061, -73.96884441375732],
        "cams": [
            {
                "id": "366",
                "name": "2 Ave @ 49 St",
                "url": "https://jpg.nyctmc.org/cctv258.jpg"
            },
            {
                "id": "410",
                "name": "3 Ave @ 49 St",
                "url": "https://jpg.nyctmc.org/cctv429.jpg"
            }
        ]
    },
    {
        "coord": [40.75925299429778, -73.96468162536621],
        "cams": [
            {
                "id": "472",
                "name": "2 Ave @ 58 St",
                "url": "https://jpg.nyctmc.org/cctv400.jpg"
            },
            {
                "id": "164",
                "name": "2 Ave @ 59 St (QBB)",
                "url": "https://jpg.nyctmc.org/cctv3.jpg"
            },
            {
                "id": "399",
                "name": "3 Ave @ 57 St",
                "url": "https://jpg.nyctmc.org/cctv428.jpg"
            },
            {
                "id": "176",
                "name": "E 57 St @ QBB",
                "url": "https://jpg.nyctmc.org/cctv15.jpg"
            }
        ]
    },
    {
        "coord": [40.76799670467506, -73.9582872390747],
        "cams": [
            {
                "id": "539",
                "name": "2 Ave @ 72 St",
                "url": "https://jpg.nyctmc.org/cctv480.jpg"
            },
            {
                "id": "934",
                "name": "2 Ave @ 74 St",
                "url": "https://jpg.nyctmc.org/cctv822.jpg"
            }
        ]
    },
    {
        "coord": [40.86283581665962, -73.91700267791748],
        "cams": [
            {
                "id": "328",
                "name": "207 ST @ 9 Ave",
                "url": "https://jpg.nyctmc.org/cctv203.jpg"
            }
        ]
    },
    {
        "coord": [40.733275, -73.987279],
        "cams": [
            {
                "id": "1190",
                "name": "3 Ave @ 14 St",
                "url": "https://jpg.nyctmc.org/cctv1084.jpg"
            },
            {
                "id": "845",
                "name": "3 Ave @ E 14 St",
                "url": "https://jpg.nyctmc.org/cctv739.jpg"
            },
            {
                "id": "1116",
                "name": "E 14 St @ Irving Pl/Lexington Av",
                "url": "https://jpg.nyctmc.org/cctv993.jpg"
            },
            {
                "id": "1191",
                "name": "Irving Pl @ 14 St",
                "url": "https://jpg.nyctmc.org/cctv1085.jpg"
            }
        ]
    },
    {
        "coord": [40.74481848035928, -73.97798538208008],
        "cams": [
            {
                "id": "403",
                "name": "3 AVE @ 34 ST",
                "url": "https://jpg.nyctmc.org/cctv431.jpg"
            },
            {
                "id": "542",
                "name": "Lexington Ave @ 34 St",
                "url": "https://jpg.nyctmc.org/cctv482.jpg"
            }
        ]
    },
    {
        "coord": [40.74989042341799, -73.97429466247559],
        "cams": [
            {
                "id": "398",
                "name": "3 Ave @ 42 St",
                "url": "https://jpg.nyctmc.org/cctv290.jpg"
            },
            {
                "id": "413",
                "name": "Lexington Ave @ 42 St",
                "url": "https://jpg.nyctmc.org/cctv303.jpg"
            }
        ]
    },
    {
        "coord": [40.824129, -73.9087],
        "cams": [
            {
                "id": "1111",
                "name": "3 Ave @ E 163 St",
                "url": "https://jpg.nyctmc.org/cctv988.jpg"
            },
            {
                "id": "1134",
                "name": "3 Ave @ E 163 St",
                "url": "https://jpg.nyctmc.org/cctv1010.jpg"
            }
        ]
    },
    {
        "coord": [40.778737, -73.953921],
        "cams": [
            {
                "id": "1226",
                "name": "3 Ave @ E 86 St",
                "url": "https://jpg.nyctmc.org/cctv1119.jpg"
            }
        ]
    },
    {
        "coord": [40.820328, -73.913069],
        "cams": [
            {
                "id": "1039",
                "name": "3rd Av. @ E 156 St.",
                "url": "https://jpg.nyctmc.org/cctv925.jpg"
            }
        ]
    },
    {
        "coord": [40.61136, -74.034782],
        "cams": [
            {
                "id": "1030",
                "name": "4 Ave @ Shore Rd",
                "url": "https://jpg.nyctmc.org/cctv916.jpg"
            }
        ]
    },
    {
        "coord": [40.748228, -73.9417],
        "cams": [
            {
                "id": "1113",
                "name": "43 Ave @ 27 St",
                "url": "https://jpg.nyctmc.org/cctv990.jpg"
            },
            {
                "id": "1136",
                "name": "43 Ave @ 27 St",
                "url": "https://jpg.nyctmc.org/cctv1012.jpg"
            },
            {
                "id": "485",
                "name": "QBB @ Crescent St",
                "url": "https://jpg.nyctmc.org/cctv418.jpg"
            },
            {
                "id": "484",
                "name": "QBB Uramp @ 23 St",
                "url": "https://jpg.nyctmc.org/cctv417.jpg"
            },
            {
                "id": "727",
                "name": "Queens Plz S @ 27 St",
                "url": "https://jpg.nyctmc.org/cctv676.jpg"
            }
        ]
    },
    {
        "coord": [40.7557483, -73.9784187],
        "cams": [
            {
                "id": "1160",
                "name": "46 St Bet. 5 Ave & Madison Ave",
                "url": "https://jpg.nyctmc.org/cctv1031.jpg"
            },
            {
                "id": "1086",
                "name": "47 St Bet. 5 Ave @ Madison Ave- Manhattan",
                "url": "https://jpg.nyctmc.org/cctv964.jpg"
            },
            {
                "id": "1088",
                "name": "5 Ave @ 46 St",
                "url": "https://jpg.nyctmc.org/cctv966.jpg"
            },
            {
                "id": "169",
                "name": "5 Ave @ 49 St",
                "url": "https://jpg.nyctmc.org/cctv8.jpg"
            },
            {
                "id": "1087",
                "name": "Madison Ave @ 46 St \u2013 Manhattan",
                "url": "https://jpg.nyctmc.org/cctv965.jpg"
            },
            {
                "id": "528",
                "name": "Madison Ave @ 49 St",
                "url": "https://jpg.nyctmc.org/cctv470.jpg"
            }
        ]
    },
    {
        "coord": [40.74068911286629, -73.9894437789917],
        "cams": [
            {
                "id": "168",
                "name": "5 Ave @ 23 St",
                "url": "https://jpg.nyctmc.org/cctv7.jpg"
            }
        ]
    },
    {
        "coord": [40.747549574689174, -73.98446559906006],
        "cams": [
            {
                "id": "415",
                "name": "5 Ave @ 34 St",
                "url": "https://jpg.nyctmc.org/cctv305.jpg"
            },
            {
                "id": "406",
                "name": "MADISON @ 34 ST",
                "url": "https://jpg.nyctmc.org/cctv296.jpg"
            }
        ]
    },
    {
        "coord": [40.752621309453865, -73.98068904876709],
        "cams": [
            {
                "id": "523",
                "name": "5 Ave @ 42 St",
                "url": "https://jpg.nyctmc.org/cctv466.jpg"
            },
            {
                "id": "522",
                "name": "Madison Ave @ 42 St",
                "url": "https://jpg.nyctmc.org/cctv467.jpg"
            }
        ]
    },
    {
        "coord": [40.76217852730423, -73.97377967834473],
        "cams": [
            {
                "id": "409",
                "name": "5 Ave @ 57 St",
                "url": "https://jpg.nyctmc.org/cctv299.jpg"
            },
            {
                "id": "1184",
                "name": "5 Ave @ 59 St",
                "url": "https://jpg.nyctmc.org/cctv183.jpg"
            },
            {
                "id": "407",
                "name": "MADISON @ 57 ST",
                "url": "https://jpg.nyctmc.org/cctv297.jpg"
            }
        ]
    },
    {
        "coord": [40.768025, -73.970282],
        "cams": [
            {
                "id": "906",
                "name": "5 Ave @ 65 St",
                "url": "https://jpg.nyctmc.org/cctv794.jpg"
            },
            {
                "id": "907",
                "name": "5 Ave @ 66 St",
                "url": "https://jpg.nyctmc.org/cctv795.jpg"
            }
        ]
    },
    {
        "coord": [40.780233, -73.961397],
        "cams": [
            {
                "id": "1158",
                "name": "5 Ave @ 84 St",
                "url": "https://jpg.nyctmc.org/cctv1029.jpg"
            },
            {
                "id": "1159",
                "name": "5 Ave @ 86 St",
                "url": "https://jpg.nyctmc.org/cctv1030.jpg"
            }
        ]
    },
    {
        "coord": [40.787916, -73.955752],
        "cams": [
            {
                "id": "908",
                "name": "5 Ave @ 96 St",
                "url": "https://jpg.nyctmc.org/cctv796.jpg"
            },
            {
                "id": "536",
                "name": "Madison Ave @ 96 St",
                "url": "https://jpg.nyctmc.org/cctv475.jpg"
            }
        ]
    },
    {
        "coord": [40.761861, -73.985123],
        "cams": [
            {
                "id": "1164",
                "name": "50 St Btwn\u00a08 Ave & Broadway",
                "url": "https://jpg.nyctmc.org/cctv1035.jpg"
            },
            {
                "id": "416",
                "name": "7 Ave @ 49 St",
                "url": "https://jpg.nyctmc.org/cctv439.jpg"
            },
            {
                "id": "420",
                "name": "8 Ave @ 49 St",
                "url": "https://jpg.nyctmc.org/cctv437.jpg"
            },
            {
                "id": "421",
                "name": "Broadway @ 51 St",
                "url": "https://jpg.nyctmc.org/cctv438.jpg"
            }
        ]
    },
    {
        "coord": [40.7364944535093, -73.99656772613525],
        "cams": [
            {
                "id": "509",
                "name": "6 Ave @ 14 St",
                "url": "https://jpg.nyctmc.org/cctv446.jpg"
            }
        ]
    },
    {
        "coord": [40.74208727387333, -73.99266242980957],
        "cams": [
            {
                "id": "511",
                "name": "6 Ave @ 23 St",
                "url": "https://jpg.nyctmc.org/cctv448.jpg"
            }
        ]
    },
    {
        "coord": [40.74881754464601, -73.98746967315674],
        "cams": [
            {
                "id": "170",
                "name": "6 Ave @ 34 St",
                "url": "https://jpg.nyctmc.org/cctv9.jpg"
            }
        ]
    },
    {
        "coord": [40.75408423797857, -73.98390769958496],
        "cams": [
            {
                "id": "173",
                "name": "6 Ave @ 42 St",
                "url": "https://jpg.nyctmc.org/cctv12.jpg"
            }
        ]
    },
    {
        "coord": [40.763446218285964, -73.97695541381836],
        "cams": [
            {
                "id": "414",
                "name": "6 Ave @ 57 St",
                "url": "https://jpg.nyctmc.org/cctv304.jpg"
            },
            {
                "id": "473",
                "name": "6 Ave @ 58 St",
                "url": "https://jpg.nyctmc.org/cctv401.jpg"
            }
        ]
    },
    {
        "coord": [40.728348, -74.002878],
        "cams": [
            {
                "id": "717",
                "name": "6 Ave @ West Houston St",
                "url": "https://jpg.nyctmc.org/cctv666.jpg"
            },
            {
                "id": "725",
                "name": "West Houston @ Varick St",
                "url": "https://jpg.nyctmc.org/cctv674.jpg"
            }
        ]
    },
    {
        "coord": [40.820727097919615, -73.93880367279053],
        "cams": [
            {
                "id": "529",
                "name": "7 Ave @ 145 St",
                "url": "https://jpg.nyctmc.org/cctv471.jpg"
            },
            {
                "id": "932",
                "name": "Malcom X Blvd @ 145 St",
                "url": "https://jpg.nyctmc.org/cctv821.jpg"
            }
        ]
    },
    {
        "coord": [40.74332283355683, -73.99545192718506],
        "cams": [
            {
                "id": "510",
                "name": "7 Ave @ 23St",
                "url": "https://jpg.nyctmc.org/cctv447.jpg"
            },
            {
                "id": "500",
                "name": "8th Ave @ 23 St",
                "url": "https://jpg.nyctmc.org/cctv441.jpg"
            }
        ]
    },
    {
        "coord": [40.75015051263462, -73.9905595779419],
        "cams": [
            {
                "id": "501",
                "name": "7 Ave @ 34 St",
                "url": "https://jpg.nyctmc.org/cctv440.jpg"
            }
        ]
    },
    {
        "coord": [40.756691, -73.986476],
        "cams": [
            {
                "id": "891",
                "name": "7 Ave @ 43 St",
                "url": "https://jpg.nyctmc.org/cctv782.jpg"
            },
            {
                "id": "475",
                "name": "Broadway @ 42 St",
                "url": "https://jpg.nyctmc.org/cctv403.jpg"
            },
            {
                "id": "899",
                "name": "Broadway @ 43 St",
                "url": "https://jpg.nyctmc.org/cctv787.jpg"
            },
            {
                "id": "1105",
                "name": "Broadway @ 46 St",
                "url": "https://jpg.nyctmc.org/cctv982.jpg"
            },
            {
                "id": "1127",
                "name": "Broadway @ 46 St",
                "url": "https://jpg.nyctmc.org/cctv1004.jpg"
            },
            {
                "id": "1102",
                "name": "Broadway @ 46 St- Quad East",
                "url": "https://jpg.nyctmc.org/cctv979.jpg"
            },
            {
                "id": "1099",
                "name": "Broadway @ 46 St- Quad North",
                "url": "https://jpg.nyctmc.org/cctv976.jpg"
            },
            {
                "id": "1101",
                "name": "Broadway @ 46 St- Quad South",
                "url": "https://jpg.nyctmc.org/cctv978.jpg"
            },
            {
                "id": "1100",
                "name": "Broadway @ 46 St- Quad West",
                "url": "https://jpg.nyctmc.org/cctv977.jpg"
            },
            {
                "id": "187",
                "name": "Broadway @ 46 Street",
                "url": "https://jpg.nyctmc.org/cctv26.jpg"
            }
        ]
    },
    {
        "coord": [40.763617, -73.981436],
        "cams": [
            {
                "id": "1090",
                "name": "7 Ave @ 54 St",
                "url": "https://jpg.nyctmc.org/cctv968.jpg"
            },
            {
                "id": "504",
                "name": "7 Ave @ 57 St",
                "url": "https://jpg.nyctmc.org/cctv444.jpg"
            }
        ]
    },
    {
        "coord": [40.73896575770038, -74.00231838226318],
        "cams": [
            {
                "id": "503",
                "name": "8 Ave @ 14 St",
                "url": "https://jpg.nyctmc.org/cctv443.jpg"
            },
            {
                "id": "1286",
                "name": "C4-WST-07-Med_at_W.23rd_St",
                "url": "https://jpg.nyctmc.org/cctv1178.jpg"
            }
        ]
    },
    {
        "coord": [40.75135341202851, -73.99339199066162],
        "cams": [
            {
                "id": "180",
                "name": "8 Ave @ 34 St",
                "url": "https://jpg.nyctmc.org/cctv19.jpg"
            },
            {
                "id": "178",
                "name": "9 Ave @ 34 St",
                "url": "https://jpg.nyctmc.org/cctv352.jpg"
            }
        ]
    },
    {
        "coord": [40.75629482445485, -73.98957252502441],
        "cams": [
            {
                "id": "181",
                "name": "8 Ave @ 42 St",
                "url": "https://jpg.nyctmc.org/cctv20.jpg"
            }
        ]
    },
    {
        "coord": [40.766796, -73.9829],
        "cams": [
            {
                "id": "1183",
                "name": "8 Ave @ 57 St",
                "url": "https://jpg.nyctmc.org/cctv266.jpg"
            },
            {
                "id": "179",
                "name": "8 Ave @ Columbus Cr South",
                "url": "https://jpg.nyctmc.org/cctv18.jpg"
            },
            {
                "id": "508",
                "name": "9 Ave @ 57 St",
                "url": "https://jpg.nyctmc.org/cctv349.jpg"
            },
            {
                "id": "166",
                "name": "Central Park S @ Columbus Cr",
                "url": "https://jpg.nyctmc.org/cctv5.jpg"
            }
        ]
    },
    {
        "coord": [40.745793884066536, -74.00120258331299],
        "cams": [
            {
                "id": "229",
                "name": "9 Ave @ 23 St",
                "url": "https://jpg.nyctmc.org/cctv355.jpg"
            }
        ]
    },
    {
        "coord": [40.75447434681541, -73.99463653564453],
        "cams": [
            {
                "id": "507",
                "name": "9 Ave @ 37 St",
                "url": "https://jpg.nyctmc.org/cctv353.jpg"
            }
        ]
    },
    {
        "coord": [40.757595135105426, -73.99244785308838],
        "cams": [
            {
                "id": "506",
                "name": "9 Ave @ 42 St",
                "url": "https://jpg.nyctmc.org/cctv351.jpg"
            },
            {
                "id": "182",
                "name": "Dyer @ 42 Street",
                "url": "https://jpg.nyctmc.org/cctv21.jpg"
            },
            {
                "id": "1124",
                "name": "Dyer Ave @ 42 St",
                "url": "https://jpg.nyctmc.org/cctv1001.jpg"
            }
        ]
    },
    {
        "coord": [40.76198349577638, -73.98922920227051],
        "cams": [
            {
                "id": "502",
                "name": "9 Ave @ 49 St",
                "url": "https://jpg.nyctmc.org/cctv350.jpg"
            }
        ]
    },
    {
        "coord": [40.799492, -73.955209],
        "cams": [
            {
                "id": "1037",
                "name": "Adam C. Powell Blvd @ 110 St/CPN",
                "url": "https://jpg.nyctmc.org/cctv923.jpg"
            }
        ]
    },
    {
        "coord": [40.696346, -73.988845],
        "cams": [
            {
                "id": "917",
                "name": "Adams St @ Tillary St",
                "url": "https://jpg.nyctmc.org/cctv805.jpg"
            },
            {
                "id": "919",
                "name": "Cadman Plz West @ Tillary St",
                "url": "https://jpg.nyctmc.org/cctv807.jpg"
            },
            {
                "id": "471",
                "name": "MHB-33 Bklyn LRW @ Ex Ramp",
                "url": "https://jpg.nyctmc.org/cctv399.jpg"
            }
        ]
    },
    {
        "coord": [40.710749, -73.959917],
        "cams": [
            {
                "id": "1194",
                "name": "Allan St (1 Ave) @ Houston St (B)",
                "url": "https://jpg.nyctmc.org/cctv1088.jpg"
            }
        ]
    },
    {
        "coord": [40.719374, -73.9902],
        "cams": [
            {
                "id": "1117",
                "name": "Allen @ Delancey St",
                "url": "https://jpg.nyctmc.org/cctv994.jpg"
            },
            {
                "id": "1196",
                "name": "Allen St @ Delancey St (B)",
                "url": "https://jpg.nyctmc.org/cctv1090.jpg"
            },
            {
                "id": "1225",
                "name": "Delancy St @ Essex St",
                "url": "https://jpg.nyctmc.org/cctv1118.jpg"
            },
            {
                "id": "519",
                "name": "Grand St @ Allen St",
                "url": "https://jpg.nyctmc.org/cctv459.jpg"
            }
        ]
    },
    {
        "coord": [40.850354, -73.940604],
        "cams": [
            {
                "id": "248",
                "name": "Amsterdam @ 178 St",
                "url": "https://jpg.nyctmc.org/cctv112.jpg"
            },
            {
                "id": "841",
                "name": "Ft Washington @ 178 St",
                "url": "https://jpg.nyctmc.org/cctv732.jpg"
            },
            {
                "id": "840",
                "name": "Ft Washinton @ 179 St",
                "url": "https://jpg.nyctmc.org/cctv733.jpg"
            }
        ]
    },
    {
        "coord": [40.77787668796429, -73.98141860961914],
        "cams": [
            {
                "id": "526",
                "name": "Amsterdam @ 72 St",
                "url": "https://jpg.nyctmc.org/cctv468.jpg"
            }
        ]
    },
    {
        "coord": [40.78687789346236, -73.97489547729492],
        "cams": [
            {
                "id": "527",
                "name": "Amsterdam @ 86 St",
                "url": "https://jpg.nyctmc.org/cctv469.jpg"
            }
        ]
    },
    {
        "coord": [40.813323, -73.956265],
        "cams": [
            {
                "id": "741",
                "name": "Amsterdam Ave @ 125 St",
                "url": "https://jpg.nyctmc.org/cctv689.jpg"
            }
        ]
    },
    {
        "coord": [40.84833, -73.930868],
        "cams": [
            {
                "id": "847",
                "name": "Amsterdam Ave @ 181 St",
                "url": "https://jpg.nyctmc.org/cctv741.jpg"
            }
        ]
    },
    {
        "coord": [40.760433, -73.861412],
        "cams": [
            {
                "id": "973",
                "name": "Astoria Blvd @ 108 St",
                "url": "https://jpg.nyctmc.org/cctv860.jpg"
            },
            {
                "id": "848",
                "name": "Northern Blvd @ 108 St",
                "url": "https://jpg.nyctmc.org/cctv742.jpg"
            }
        ]
    },
    {
        "coord": [40.69075876767013, -73.9984130859375],
        "cams": [
            {
                "id": "492",
                "name": "Atlantic Ave @ BQE",
                "url": "https://jpg.nyctmc.org/cctv425.jpg"
            },
            {
                "id": "942",
                "name": "BQE-09-WB_at_State_St_LL-Ex27",
                "url": "https://jpg.nyctmc.org/cctv830.jpg"
            },
            {
                "id": "595",
                "name": "Brooklyn Queens Expy @ Atlantic Ave",
                "url": "https://jpg.nyctmc.org/cctv524.jpg"
            },
            {
                "id": "598",
                "name": "Brooklyn Queens Expy @ State St UL",
                "url": "https://jpg.nyctmc.org/cctv525.jpg"
            }
        ]
    },
    {
        "coord": [40.683598, -73.9759],
        "cams": [
            {
                "id": "1112",
                "name": "Atlantic Ave @ Fort Greene Pl",
                "url": "https://jpg.nyctmc.org/cctv989.jpg"
            },
            {
                "id": "1135",
                "name": "Atlantic Ave @ Fort Greene Pl",
                "url": "https://jpg.nyctmc.org/cctv1011.jpg"
            },
            {
                "id": "487",
                "name": "Flatbush Ave and 4 Ave",
                "url": "https://jpg.nyctmc.org/cctv420.jpg"
            },
            {
                "id": "488",
                "name": "Flatbush Ave and Atlantic Ave",
                "url": "https://jpg.nyctmc.org/cctv421.jpg"
            }
        ]
    },
    {
        "coord": [40.71662313269983, -73.99918556213379],
        "cams": [
            {
                "id": "172",
                "name": "Baxter St @ Canal Street",
                "url": "https://jpg.nyctmc.org/cctv11.jpg"
            }
        ]
    },
    {
        "coord": [40.707339, -73.998294], "cams": [
            {
                "id": "1006",
                "name": "BB - 28 North West Manhattan Tower",
                "url": "https://jpg.nyctmc.org/cctv894.jpg"
            },
            {
                "id": "994",
                "name": "BB - 50 South Rdwy @ West of Bklyn Twr",
                "url": "https://jpg.nyctmc.org/cctv881.jpg"
            },
            {
                "id": "989",
                "name": "BB -21 North Rdwy @ Above South St",
                "url": "https://jpg.nyctmc.org/cctv876.jpg"
            },
            {
                "id": "990",
                "name": "BB -24 South Rdwy @ Above South St",
                "url": "https://jpg.nyctmc.org/cctv877.jpg"
            },
            {
                "id": "991",
                "name": "BB -39 North Rdwy @ Bridge Midspan",
                "url": "https://jpg.nyctmc.org/cctv878.jpg"
            },
            {
                "id": "982",
                "name": "BB \u2013 15 North Rdwy @ Manhattan Anchorage",
                "url": "https://jpg.nyctmc.org/cctv870.jpg"
            },
            {
                "id": "983",
                "name": "BB \u2013 16 South Rdwy @ Manhattan Anchorage",
                "url": "https://jpg.nyctmc.org/cctv871.jpg"
            },
            {
                "id": "980",
                "name": "BB \u2013 25 North Rdwy @ West of Manhattan Twr",
                "url": "https://jpg.nyctmc.org/cctv868.jpg"
            },
            {
                "id": "981",
                "name": "BB \u2013 26 South Rdwy @ West of Manhattan Twr",
                "url": "https://jpg.nyctmc.org/cctv869.jpg"
            },
            {
                "id": "998",
                "name": "BB-27A Manhattan Tower South",
                "url": "https://jpg.nyctmc.org/cctv886.jpg"
            },
            {
                "id": "999",
                "name": "BB-28A Manhattan Tower North",
                "url": "https://jpg.nyctmc.org/cctv887.jpg"
            },
            {
                "id": "1000",
                "name": "BB-29 North East Manhattan Tower",
                "url": "https://jpg.nyctmc.org/cctv888.jpg"
            },
            {
                "id": "1001",
                "name": "BB-30 South East Manhattan Tower",
                "url": "https://jpg.nyctmc.org/cctv889.jpg"
            },
            {
                "id": "1107",
                "name": "BB-43 North Rdwy @ Center Expansion Jt",
                "url": "https://jpg.nyctmc.org/cctv984.jpg"
            },
            {
                "id": "1110",
                "name": "BB-46 South Rdwy @ Center Expansion Jt",
                "url": "https://jpg.nyctmc.org/cctv987.jpg"
            },
            {
                "id": "986",
                "name": "Br Br - 19 N Rdwy @ FDR Dr",
                "url": "https://jpg.nyctmc.org/cctv874.jpg"
            },
            {
                "id": "987",
                "name": "Br Br-20 S Rdwy FDR Dr",
                "url": "https://jpg.nyctmc.org/cctv875.jpg"
            },
            {
                "id": "452",
                "name": "Brooklyn Bridge - Ped Walk Way",
                "url": "https://jpg.nyctmc.org/cctv348.jpg"
            },
            {
                "id": "436",
                "name": "FDR Dr @ Brooklyn Bridge Exit SB",
                "url": "https://jpg.nyctmc.org/cctv326.jpg"
            },
            {
                "id": "183",
                "name": "FDR Dr @ Catherine Street",
                "url": "https://jpg.nyctmc.org/cctv22.jpg"
            }
        ]
    },
    {
        "coord": [40.705446, -73.9959166], "cams": [
            {
                "id": "993",
                "name": "BB - 47 North Rdwy @ West of Bklyn Twr",
                "url": "https://jpg.nyctmc.org/cctv880.jpg"
            },
            {
                "id": "1032",
                "name": "BB \u2013 51A Brooklyn Tower \u2013 South Rdwy",
                "url": "https://jpg.nyctmc.org/cctv918.jpg"
            },
            {
                "id": "1031",
                "name": "BB \u2013 52A Brooklyn Tower \u2013 North Rdwy",
                "url": "https://jpg.nyctmc.org/cctv917.jpg"
            },
            {
                "id": "963",
                "name": "BB \u2013 64 South Rdwy @ Bklyn Twr Side Sapn",
                "url": "https://jpg.nyctmc.org/cctv861.jpg"
            },
            {
                "id": "1108",
                "name": "BB-44 North Rdwy @ 350Ft West of Bklyn Twr",
                "url": "https://jpg.nyctmc.org/cctv985.jpg"
            },
            {
                "id": "1131",
                "name": "BB-44 North Rdwy @ 350Ft West of Bklyn Twr",
                "url": "https://jpg.nyctmc.org/cctv1007.jpg"
            },
            {
                "id": "1109",
                "name": "BB-45 South Rdwy @ 350Ft West of Bklyn Twr",
                "url": "https://jpg.nyctmc.org/cctv986.jpg"
            },
            {
                "id": "1002",
                "name": "BB-51 North West Brooklyn Tower",
                "url": "https://jpg.nyctmc.org/cctv890.jpg"
            },
            {
                "id": "1003",
                "name": "BB-52 South West Brooklyn Tower",
                "url": "https://jpg.nyctmc.org/cctv891.jpg"
            },
            {
                "id": "1004",
                "name": "BB-53 North East Brooklyn Tower",
                "url": "https://jpg.nyctmc.org/cctv892.jpg"
            },
            {
                "id": "1005",
                "name": "BB-54 South East Brooklyn Tower",
                "url": "https://jpg.nyctmc.org/cctv893.jpg"
            },
            {
                "id": "984",
                "name": "BB-63 North Rdwy@ Bklyn Twr East",
                "url": "https://jpg.nyctmc.org/cctv872.jpg"
            },
            {
                "id": "912",
                "name": "Old Fulton St @ Furman St",
                "url": "https://jpg.nyctmc.org/cctv800.jpg"
            }
        ]
    },
    {
        "coord": [40.703392, -73.99335],
        "cams": [
            {
                "id": "995",
                "name": "BB - 66 North Rdwy @ Above Water St/Bklyn",
                "url": "https://jpg.nyctmc.org/cctv882.jpg"
            },
            {
                "id": "996",
                "name": "BB - 68 South Rdwy @ Above Water St/Bklyn",
                "url": "https://jpg.nyctmc.org/cctv883.jpg"
            },
            {
                "id": "974",
                "name": "BB -\u00a0 71 North Rdwy @ Front St \u00a0",
                "url": "https://jpg.nyctmc.org/cctv862.jpg"
            },
            {
                "id": "975",
                "name": "BB \u2013 72 South Rdwy @ Front St",
                "url": "https://jpg.nyctmc.org/cctv863.jpg"
            },
            {
                "id": "1156",
                "name": "BB-22 BQE @ Old Fulton St",
                "url": "https://jpg.nyctmc.org/cctv709.jpg"
            },
            {
                "id": "609",
                "name": "Brooklyn Queens Expy @ Middagh St LL",
                "url": "https://jpg.nyctmc.org/cctv529.jpg"
            },
            {
                "id": "605",
                "name": "Brooklyn Queens Expy @ Middagh St UL",
                "url": "https://jpg.nyctmc.org/cctv528.jpg"
            }
        ]
    },
    {
        "coord": [40.58174, -73.838443],
        "cams": [
            {
                "id": "924",
                "name": "Beach Channel Dr @ Beach 116 St",
                "url": "https://jpg.nyctmc.org/cctv813.jpg"
            }
        ]
    },
    {
        "coord": [40.585808, -73.823158],
        "cams": [
            {
                "id": "816",
                "name": "Beach Channel Dr @B 101 St",
                "url": "https://jpg.nyctmc.org/cctv712.jpg"
            }
        ]
    },
    {
        "coord": [40.57757, -73.859754],
        "cams": [
            {
                "id": "815",
                "name": "Beach Channel Dr @B 140 St",
                "url": "https://jpg.nyctmc.org/cctv711.jpg"
            }
        ]
    },
    {
        "coord": [40.598651, -73.766059],
        "cams": [
            {
                "id": "818",
                "name": "Beach Channel Dr @B 32 St",
                "url": "https://jpg.nyctmc.org/cctv714.jpg"
            }
        ]
    },
    {
        "coord": [40.589356, -73.815578],
        "cams": [
            {
                "id": "817",
                "name": "Beach Channel Dr @B 90 St",
                "url": "https://jpg.nyctmc.org/cctv713.jpg"
            }
        ]
    },
    {
        "coord": [40.605347, -73.75518],
        "cams": [
            {
                "id": "819",
                "name": "Beach Channel Dr @B Mott Ave",
                "url": "https://jpg.nyctmc.org/cctv715.jpg"
            }
        ]
    },
    {
        "coord": [40.6666, -73.8104],
        "cams": [
            {
                "id": "128",
                "name": "Belt Pkwy @ 130 St",
                "url": "https://jpg.nyctmc.org/cctv159.jpg"
            }
        ]
    },
    {
        "coord": [40.659301, -73.854457],
        "cams": [
            {
                "id": "699",
                "name": "Belt Pkwy @ 158 Ave",
                "url": "https://jpg.nyctmc.org/cctv162.jpg"
            }
        ]
    },
    {
        "coord": [40.639032474561056, -74.03562068939209],
        "cams": [
            {
                "id": "139",
                "name": "Belt Pkwy @ 68 St",
                "url": "https://jpg.nyctmc.org/cctv114.jpg"
            }
        ]
    },
    {
        "coord": [40.60439255008019, -74.01698586190183],
        "cams": [
            {
                "id": "518",
                "name": "Belt Pkwy @ Bay 8th St",
                "url": "https://jpg.nyctmc.org/cctv461.jpg"
            }
        ]
    },
    {
        "coord": [40.66527499112987, -73.74040603637695],
        "cams": [
            {
                "id": "443",
                "name": "Belt Pkwy @ Brookville Blvd",
                "url": "https://jpg.nyctmc.org/cctv335.jpg"
            }
        ]
    },
    {
        "coord": [40.68288359591785, -73.72645854949951],
        "cams": [
            {
                "id": "499",
                "name": "Belt Pkwy @ Cross Island Split",
                "url": "https://jpg.nyctmc.org/cctv333.jpg"
            }
        ]
    },
    {
        "coord": [40.650917771261284, -73.86576175689697],
        "cams": [
            {
                "id": "141",
                "name": "Belt Pkwy @ Erskine",
                "url": "https://jpg.nyctmc.org/cctv116.jpg"
            }
        ]
    },
    {
        "coord": [40.59564132857263, -73.90764713287354],
        "cams": [
            {
                "id": "132",
                "name": "Belt Pkwy @ Flatbush",
                "url": "https://jpg.nyctmc.org/cctv61.jpg"
            }
        ]
    },
    {
        "coord": [40.58325730655326, -73.96665573120117],
        "cams": [
            {
                "id": "140",
                "name": "Belt Pkwy @ Ocean Pkwy",
                "url": "https://jpg.nyctmc.org/cctv115.jpg"
            }
        ]
    },
    {
        "coord": [40.642516876713096, -73.8758897781372],
        "cams": [
            {
                "id": "496",
                "name": "Belt Pkwy @ Pennsylvania Ave",
                "url": "https://jpg.nyctmc.org/cctv434.jpg"
            }
        ]
    },
    {
        "coord": [40.66527499112987, -73.75757217407227],
        "cams": [
            {
                "id": "497",
                "name": "Belt Pkwy @ Springfield Blvd",
                "url": "https://jpg.nyctmc.org/cctv435.jpg"
            }
        ]
    },
    {
        "coord": [40.692174, -73.98913],
        "cams": [
            {
                "id": "918",
                "name": "Boerum Pl @ Fulton St & Joralemon St",
                "url": "https://jpg.nyctmc.org/cctv806.jpg"
            },
            {
                "id": "1242",
                "name": "C2-BQE-11-WB_at_Furmn_St_UP-Ex28A",
                "url": "https://jpg.nyctmc.org/cctv1134.jpg"
            },
            {
                "id": "1243",
                "name": "C2-BQE-12-WB_at_Furmn_St_LL-Ex28A",
                "url": "https://jpg.nyctmc.org/cctv1135.jpg"
            }
        ]
    },
    {
        "coord": [40.831378, -73.900286],
        "cams": [
            {
                "id": "1040",
                "name": "Boston Rd. @ E 169 St",
                "url": "https://jpg.nyctmc.org/cctv926.jpg"
            }
        ]
    },
    {
        "coord": [40.727155, -73.991628],
        "cams": [
            {
                "id": "1085",
                "name": "Bowery @ Cooper Sq & 4 St",
                "url": "https://jpg.nyctmc.org/cctv963.jpg"
            }
        ]
    },
    {
        "coord": [40.6750400413786, -74.00030136108398],
        "cams": [
            {
                "id": "205",
                "name": "BQE @ Hamilton Ave B-G Ramp",
                "url": "https://jpg.nyctmc.org/cctv44.jpg"
            }
        ]
    },
    {
        "coord": [40.696418, -73.980496],
        "cams": [
            {
                "id": "943",
                "name": "BQE-17_E_at_Navy_St-Ex29B",
                "url": "https://jpg.nyctmc.org/cctv831.jpg"
            }
        ]
    },
    {
        "coord": [40.707191, -73.957735],
        "cams": [
            {
                "id": "944",
                "name": "BQE-23-EB_at_Division_Ave-Ex31",
                "url": "https://jpg.nyctmc.org/cctv832.jpg"
            },
            {
                "id": "620",
                "name": "Brooklyn Queens Expy @ Broadway St",
                "url": "https://jpg.nyctmc.org/cctv536.jpg"
            }
        ]
    },
    {
        "coord": [40.735292, -73.91917],
        "cams": [
            {
                "id": "945",
                "name": "BQE-32-WB_at_ramp_to_LIE-Ex35",
                "url": "https://jpg.nyctmc.org/cctv833.jpg"
            },
            {
                "id": "670",
                "name": "BQE33 WB at 45th St - Ex35",
                "url": "https://jpg.nyctmc.org/cctv543.jpg"
            },
            {
                "id": "651",
                "name": "Long Island Expy @ 48th St LL",
                "url": "https://jpg.nyctmc.org/cctv560.jpg"
            },
            {
                "id": "649",
                "name": "Long Island Expy @ ramp to W/B BQE",
                "url": "https://jpg.nyctmc.org/cctv558.jpg"
            }
        ]
    },
    {
        "coord": [40.73825, -73.903635],
        "cams": [
            {
                "id": "671",
                "name": "BQE35 EB at 61st St - Ex39",
                "url": "https://jpg.nyctmc.org/cctv544.jpg"
            }
        ]
    },
    {
        "coord": [40.754149, -73.898635],
        "cams": [
            {
                "id": "673",
                "name": "BQE40 WB at Northern Blvd - Ex41",
                "url": "https://jpg.nyctmc.org/cctv546.jpg"
            },
            {
                "id": "979",
                "name": "Northern Blvd @ 61 St",
                "url": "https://jpg.nyctmc.org/cctv867.jpg"
            },
            {
                "id": "290",
                "name": "Northern Blvd @ 68 St",
                "url": "https://jpg.nyctmc.org/cctv187.jpg"
            }
        ]
    },
    {
        "coord": [40.827303, -73.849905],
        "cams": [
            {
                "id": "686",
                "name": "BRE05 WB at Castle Hill Ave Ex52",
                "url": "https://jpg.nyctmc.org/cctv637.jpg"
            }
        ]
    },
    {
        "coord": [40.81575, -73.9585],
        "cams": [
            {
                "id": "1106",
                "name": "Broadway @ 125 St",
                "url": "https://jpg.nyctmc.org/cctv983.jpg"
            },
            {
                "id": "1128",
                "name": "Broadway @ 125 St",
                "url": "https://jpg.nyctmc.org/cctv1005.jpg"
            }
        ]
    },
    {
        "coord": [40.826446, -73.950423],
        "cams": [
            {
                "id": "937",
                "name": "Broadway @ 145 St",
                "url": "https://jpg.nyctmc.org/cctv825.jpg"
            }
        ]
    },
    {
        "coord": [40.84085950690562, -73.93914699554443],
        "cams": [
            {
                "id": "224",
                "name": "Broadway @ 169 Street",
                "url": "https://jpg.nyctmc.org/cctv65.jpg"
            }
        ]
    },
    {
        "coord": [40.794668, -73.971788],
        "cams": [
            {
                "id": "739",
                "name": "Broadway @ 96 St",
                "url": "https://jpg.nyctmc.org/cctv687.jpg"
            }
        ]
    },
    {
        "coord": [40.710637808196715, -74.00854110717773],
        "cams": [
            {
                "id": "351",
                "name": "Broadway @ Vesey St",
                "url": "https://jpg.nyctmc.org/cctv223.jpg"
            },
            {
                "id": "347",
                "name": "Church St @ Park Pl",
                "url": "https://jpg.nyctmc.org/cctv220.jpg"
            },
            {
                "id": "163",
                "name": "Church Street @ Vesey",
                "url": "https://jpg.nyctmc.org/cctv2.jpg"
            }
        ]
    },
    {
        "coord": [40.711776362449456, -74.00472164154053],
        "cams": [
            {
                "id": "175",
                "name": "Brooklyn Bridge @ Centre Street",
                "url": "https://jpg.nyctmc.org/cctv14.jpg"
            }
        ]
    },
    {
        "coord": [40.725389, -73.93316],
        "cams": [
            {
                "id": "668",
                "name": "Brooklyn Queens Expwyat Stewart Avenue",
                "url": "https://jpg.nyctmc.org/cctv541.jpg"
            }
        ]
    },
    {
        "coord": [40.75766, -73.90106],
        "cams": [
            {
                "id": "635",
                "name": "Brooklyn Queens Expy - GCP @ 31st Ave",
                "url": "https://jpg.nyctmc.org/cctv548.jpg"
            }
        ]
    },
    {
        "coord": [40.71407, -73.953137],
        "cams": [
            {
                "id": "624",
                "name": "Brooklyn Queens Expy @  Metropolitan Ave",
                "url": "https://jpg.nyctmc.org/cctv538.jpg"
            }
        ]
    },
    {
        "coord": [40.701366, -73.98865],
        "cams": [
            {
                "id": "611",
                "name": "Brooklyn Queens Expy @ Adams St",
                "url": "https://jpg.nyctmc.org/cctv530.jpg"
            },
            {
                "id": "915",
                "name": "Cadman Plz E/Washington St @ Prospect St",
                "url": "https://jpg.nyctmc.org/cctv803.jpg"
            },
            {
                "id": "470",
                "name": "MHB-31 Bklyn N URW @ Anch",
                "url": "https://jpg.nyctmc.org/cctv397.jpg"
            },
            {
                "id": "822",
                "name": "MHB-32 Bklyn S URDW @ Anch",
                "url": "https://jpg.nyctmc.org/cctv398.jpg"
            },
            {
                "id": "913",
                "name": "Old Fulton St @ Prospect St",
                "url": "https://jpg.nyctmc.org/cctv801.jpg"
            },
            {
                "id": "920",
                "name": "Sands St @ Adams St",
                "url": "https://jpg.nyctmc.org/cctv808.jpg"
            },
            {
                "id": "424",
                "name": "Sands St @ Brooklyn Bridge Ent",
                "url": "https://jpg.nyctmc.org/cctv314.jpg"
            },
            {
                "id": "914",
                "name": "Washington St @ Prospect St",
                "url": "https://jpg.nyctmc.org/cctv802.jpg"
            }
        ]
    },
    {
        "coord": [40.69925119494625, -73.96137714385986],
        "cams": [
            {
                "id": "615",
                "name": "Brooklyn Queens Expy @ Kent Ave",
                "url": "https://jpg.nyctmc.org/cctv532.jpg"
            }
        ]
    },
    {
        "coord": [40.723242, -73.939254],
        "cams": [
            {
                "id": "630",
                "name": "Brooklyn Queens Expy @ Morgan Ave",
                "url": "https://jpg.nyctmc.org/cctv540.jpg"
            }
        ]
    },
    {
        "coord": [40.684397, -74.001245],
        "cams": [
            {
                "id": "588",
                "name": "Brooklyn Queens Expy @ Union St",
                "url": "https://jpg.nyctmc.org/cctv519.jpg"
            }
        ]
    },
    {
        "coord": [40.721091, -73.998074],
        "cams": [
            {
                "id": "1195",
                "name": "Broome St and Lafayette St",
                "url": "https://jpg.nyctmc.org/cctv1089.jpg"
            },
            {
                "id": "516",
                "name": "Grand St @ Broadway",
                "url": "https://jpg.nyctmc.org/cctv457.jpg"
            }
        ]
    },
    {
        "coord": [40.807681, -73.929512],
        "cams": [
            {
                "id": "730",
                "name": "Bruckner Blvd @ Lincoln Ave",
                "url": "https://jpg.nyctmc.org/cctv678.jpg"
            },
            {
                "id": "1237",
                "name": "C1-MDE-03-SB_at_E.138th_St-Ex3",
                "url": "https://jpg.nyctmc.org/cctv1129.jpg"
            },
            {
                "id": "1239",
                "name": "C1-MDE-04-SB_at_Grand_Concrse-Ex3",
                "url": "https://jpg.nyctmc.org/cctv1130.jpg"
            },
            {
                "id": "824",
                "name": "Exterior St @ 3 Ave",
                "url": "https://jpg.nyctmc.org/cctv718.jpg"
            }
        ]
    },
    {
        "coord": [40.809519, -73.903004],
        "cams": [
            {
                "id": "1015",
                "name": "Bruckner Expwy (BRE-01) WB @ E. 149 St Ex48",
                "url": "https://jpg.nyctmc.org/cctv902.jpg"
            }
        ]
    },
    {
        "coord": [40.819954, -73.890441],
        "cams": [
            {
                "id": "1016",
                "name": "Bruckner Expwy (BRE-02) EB @ Hunts Pt Ave Ex 50",
                "url": "https://jpg.nyctmc.org/cctv903.jpg"
            }
        ]
    },
    {
        "coord": [40.822617, -73.885982],
        "cams": [
            {
                "id": "1017",
                "name": "Bruckner Expwy (BRE-03) @ Witier St Ex 49",
                "url": "https://jpg.nyctmc.org/cctv904.jpg"
            }
        ]
    },
    {
        "coord": [40.8238122990785, -73.871726989746],
        "cams": [
            {
                "id": "1026",
                "name": "Bruckner Expy @ Bronx River Pkwy",
                "url": "https://jpg.nyctmc.org/cctv35.jpg"
            }
        ]
    },
    {
        "coord": [40.82, -73.83],
        "cams": [
            {
                "id": "1232",
                "name": "C1-BRE-06_W - WB_at_CBX-Hutch_Int-EX6A",
                "url": "https://jpg.nyctmc.org/cctv1124.jpg"
            }
        ]
    },
    {
        "coord": [40.838087, -73.824953],
        "cams": [
            {
                "id": "1172",
                "name": "C1-BRE-08-NB_at_Waterbury_Ave-Ex7B",
                "url": "https://jpg.nyctmc.org/cctv1042.jpg"
            },
            {
                "id": "1173",
                "name": "C1-BRE-09-SB_at_Lasalle_Ave-Ex7C",
                "url": "https://jpg.nyctmc.org/cctv1043.jpg"
            },
            {
                "id": "1210",
                "name": "C1-TNE-01-SB_at_Otis-Ave",
                "url": "https://jpg.nyctmc.org/cctv1103.jpg"
            }
        ]
    },
    {
        "coord": [40.84549, -73.825543],
        "cams": [
            {
                "id": "1174",
                "name": "C1-BRE-10-NB_at_Middle_Twn_Rd-Ex7C",
                "url": "https://jpg.nyctmc.org/cctv1044.jpg"
            }
        ]
    },
    {
        "coord": [40.84897, -73.827533],
        "cams": [
            {
                "id": "1198",
                "name": "C1-BRE-11-SB_at_Buhre_Ave-Ex8A",
                "url": "https://jpg.nyctmc.org/cctv1092.jpg"
            }
        ]
    },
    {
        "coord": [40.834406, -73.874177],
        "cams": [
            {
                "id": "1175",
                "name": "C1-BRP-01-SB_at_E.174th_St-Ex3",
                "url": "https://jpg.nyctmc.org/cctv1045.jpg"
            },
            {
                "id": "1178",
                "name": "C1-CBE-10-SB_at_Brx.Rvr_Pkwy-Ex4A",
                "url": "https://jpg.nyctmc.org/cctv1048.jpg"
            }
        ]
    },
    {
        "coord": [40.84, -73.92],
        "cams": [
            {
                "id": "1234",
                "name": "C1-CBE-03_N_NB_at_Nelson_Ave-Ex02A",
                "url": "https://jpg.nyctmc.org/cctv1126.jpg"
            }
        ]
    },
    {
        "coord": [40.84, -73.91],
        "cams": [
            {
                "id": "1235",
                "name": "C1-CBE-04_N - NB_at_Macombs Rd-Ex2A",
                "url": "https://jpg.nyctmc.org/cctv1127.jpg"
            }
        ]
    },
    {
        "coord": [40.84482, -73.907408],
        "cams": [
            {
                "id": "1177",
                "name": "C1-CBE-06_N_NB_at_Weeks Ave-Ext02B",
                "url": "https://jpg.nyctmc.org/cctv1047.jpg"
            },
            {
                "id": "1147",
                "name": "Cross Bronx Exp (CBE-07) SB at Clay Ave (Ex2B)",
                "url": "https://jpg.nyctmc.org/cctv1023.jpg"
            },
            {
                "id": "1022",
                "name": "Cross Bronx Expwy (CBE-06) NB @ Weeks Av Ex2B",
                "url": "https://jpg.nyctmc.org/cctv909.jpg"
            }
        ]
    },
    {
        "coord": [40.82, -73.81],
        "cams": [
            {
                "id": "1236",
                "name": "C1-CBX-17-Med_at_E.Tremont_Ave-Ex10",
                "url": "https://jpg.nyctmc.org/cctv1128.jpg"
            },
            {
                "id": "1199",
                "name": "C1-CBX-18-Med_at_Pennyfield_Av-TNB",
                "url": "https://jpg.nyctmc.org/cctv1093.jpg"
            }
        ]
    },
    {
        "coord": [40.803545, -73.916135],
        "cams": [
            {
                "id": "1179",
                "name": "C1-MDE-01-Cntr_at_E.135th_St-Ex1",
                "url": "https://jpg.nyctmc.org/cctv1049.jpg"
            }
        ]
    },
    {
        "coord": [40.806729, -73.923727],
        "cams": [
            {
                "id": "1180",
                "name": "C1-MDE-02-NB_at_Willis_Ave-Ex2",
                "url": "https://jpg.nyctmc.org/cctv1050.jpg"
            }
        ]
    },
    {
        "coord": [40.825097, -73.931354],
        "cams": [
            {
                "id": "1200",
                "name": "C1-MDE-05-SB_at_E.153rd_St-Ex4",
                "url": "https://jpg.nyctmc.org/cctv1094.jpg"
            }
        ]
    },
    {
        "coord": [40.82, -73.93],
        "cams": [
            {
                "id": "1238",
                "name": "C1-MDE-05-SB_at_E.153rd_St-Ex4",
                "url": "https://jpg.nyctmc.org/cctv1131.jpg"
            },
            {
                "id": "1240",
                "name": "C1-MDE-06-NB_at_Macombs_Dam_Br-Ex5",
                "url": "https://jpg.nyctmc.org/cctv1132.jpg"
            },
            {
                "id": "810",
                "name": "E 149 St @ River Ave",
                "url": "https://jpg.nyctmc.org/cctv706.jpg"
            }
        ]
    },
    {
        "coord": [40.84154, -73.928612],
        "cams": [
            {
                "id": "1202",
                "name": "C1-MDE-09-SB_at_Depot_Pl-Ex7-CBX",
                "url": "https://jpg.nyctmc.org/cctv1096.jpg"
            }
        ]
    },
    {
        "coord": [40.855126, -73.918007],
        "cams": [
            {
                "id": "1203",
                "name": "C1-MDE-11-NB_at_W.179th_St-Ex8",
                "url": "https://jpg.nyctmc.org/cctv1097.jpg"
            }
        ]
    },
    {
        "coord": [40.867065, -73.908921],
        "cams": [
            {
                "id": "1204",
                "name": "C1-MDE-12-SB_at_Heath_Ave-Ex9",
                "url": "https://jpg.nyctmc.org/cctv1098.jpg"
            }
        ]
    },
    {
        "coord": [40.889129, -73.888492],
        "cams": [
            {
                "id": "1206",
                "name": "C1-MDE-14-NB_at_Mosholu_Pkwy-Ex12",
                "url": "https://jpg.nyctmc.org/cctv1100.jpg"
            }
        ]
    },
    {
        "coord": [40.897282, -73.879845],
        "cams": [
            {
                "id": "1207",
                "name": "C1-MDE-15-NB_at_Jerome_Ave-Ex13",
                "url": "https://jpg.nyctmc.org/cctv1101.jpg"
            }
        ]
    },
    {
        "coord": [40.837446, -73.880984],
        "cams": [
            {
                "id": "1208",
                "name": "C1-SHE-02-SB_at_Cross_Brx_Expwy",
                "url": "https://jpg.nyctmc.org/cctv1102.jpg"
            }
        ]
    },
    {
        "coord": [40.827977, -73.817743],
        "cams": [
            {
                "id": "1211",
                "name": "C1-TNE-02-Med_at_Randall_Ave",
                "url": "https://jpg.nyctmc.org/cctv1104.jpg"
            }
        ]
    },
    {
        "coord": [40.69, -73.98],
        "cams": [
            {
                "id": "1244",
                "name": "C2-BQE-16-WB_at_Sands_St-Ex29A",
                "url": "https://jpg.nyctmc.org/cctv1136.jpg"
            },
            {
                "id": "1089",
                "name": "Flatbush Ave @ DeKalb Ave",
                "url": "https://jpg.nyctmc.org/cctv967.jpg"
            },
            {
                "id": "486",
                "name": "Flatbush Ave @ Fulton St",
                "url": "https://jpg.nyctmc.org/cctv419.jpg"
            },
            {
                "id": "440",
                "name": "Flatbush Ave @ Willoughby",
                "url": "https://jpg.nyctmc.org/cctv330.jpg"
            }
        ]
    },
    {
        "coord": [40.7, -73.95],
        "cams": [
            {
                "id": "1245",
                "name": "C2-BQE-22-WB_at_Lee_Ave-Ex31",
                "url": "https://jpg.nyctmc.org/cctv1137.jpg"
            },
            {
                "id": "1246",
                "name": "C2-BQE-25-WB_at_S.5th_St-Ex32",
                "url": "https://jpg.nyctmc.org/cctv1138.jpg"
            }
        ]
    },
    {
        "coord": [40.710536, -73.95588],
        "cams": [
            {
                "id": "1212",
                "name": "C2-BQE-26-Cntr_at_Grand_Ave-Ex32",
                "url": "https://jpg.nyctmc.org/cctv1105.jpg"
            }
        ]
    },
    {
        "coord": [40.72, -73.93],
        "cams": [
            {
                "id": "1247",
                "name": "C2-BQE-29_WB_at_Morgan_Street",
                "url": "https://jpg.nyctmc.org/cctv1139.jpg"
            }
        ]
    },
    {
        "coord": [40.61, -74.02],
        "cams": [
            {
                "id": "1248",
                "name": "C2-GE-01-WB_at_92nd_St-Vrrazano_Br",
                "url": "https://jpg.nyctmc.org/cctv1140.jpg"
            }
        ]
    },
    {
        "coord": [40.62, -74.02],
        "cams": [
            {
                "id": "1249",
                "name": "C2-GE-02-WB_at_Ft_Hmiltn_Pkwy-Ex19",
                "url": "https://jpg.nyctmc.org/cctv1141.jpg"
            }
        ]
    },
    {
        "coord": [40.645287, -74.01669],
        "cams": [
            {
                "id": "1213",
                "name": "C2-GE-08_E_EB_at_54th_St",
                "url": "https://jpg.nyctmc.org/cctv1106.jpg"
            }
        ]
    },
    {
        "coord": [40.65, -74.01],
        "cams": [
            {
                "id": "1250",
                "name": "C2-GE-11_E_EB_at_37th_St_Ex23",
                "url": "https://jpg.nyctmc.org/cctv1142.jpg"
            }
        ]
    },
    {
        "coord": [40.52, -74.23],
        "cams": [
            {
                "id": "1251",
                "name": "C3-KWV-01-NB_at_Tyrllan_Ave-Outrbr",
                "url": "https://jpg.nyctmc.org/cctv1143.jpg"
            }
        ]
    },
    {
        "coord": [40.52, -74.21],
        "cams": [
            {
                "id": "1252",
                "name": "C3-KWV-02-NB_at_Bloomngdale_Rd-Ex2",
                "url": "https://jpg.nyctmc.org/cctv1144.jpg"
            }
        ]
    },
    {
        "coord": [40.61, -74.15],
        "cams": [
            {
                "id": "1253",
                "name": "C3-MLK-01-SB_at_Watchogue_Rd-Ex10",
                "url": "https://jpg.nyctmc.org/cctv1145.jpg"
            },
            {
                "id": "1259",
                "name": "C3-SIE-04A-WB_at_Richmond Ave",
                "url": "https://jpg.nyctmc.org/cctv1151.jpg"
            },
            {
                "id": "1261",
                "name": "C3-SIE-05-WB_at_MLK-Int-Ex9",
                "url": "https://jpg.nyctmc.org/cctv1153.jpg"
            }
        ]
    },
    {
        "coord": [40.62, -74.14],
        "cams": [
            {
                "id": "1254",
                "name": "C3-MLK-02-NB_at_Forest_Ave-Ex11",
                "url": "https://jpg.nyctmc.org/cctv1146.jpg"
            }
        ]
    },
    {
        "coord": [40.63, -74.14],
        "cams": [
            {
                "id": "1255",
                "name": "C3-MLK-03_NB_at_Walkr_St-Bayonne_Br",
                "url": "https://jpg.nyctmc.org/cctv1147.jpg"
            }
        ]
    },
    {
        "coord": [40.62, -74.17],
        "cams": [
            {
                "id": "1256",
                "name": "C3-SIE-01-WB_at_Forest_Ave",
                "url": "https://jpg.nyctmc.org/cctv1148.jpg"
            },
            {
                "id": "1257",
                "name": "C3-SIE-02-EB_at_WSE_Int-Ex3",
                "url": "https://jpg.nyctmc.org/cctv1149.jpg"
            }
        ]
    },
    {
        "coord": [40.62, -74.16],
        "cams": [
            {
                "id": "1258",
                "name": "C3-SIE-03-WB_at_South_Ave-Ex5",
                "url": "https://jpg.nyctmc.org/cctv1150.jpg"
            }
        ]
    },
    {
        "coord": [40.61, -74.16],
        "cams": [
            {
                "id": "1260",
                "name": "C3-SIE-04-WB_at_Lambert_St_Ex6",
                "url": "https://jpg.nyctmc.org/cctv1152.jpg"
            }
        ]
    },
    {
        "coord": [40.6, -74.15],
        "cams": [
            {
                "id": "1263",
                "name": "C3-SIE-06-EB_at_Victory_Blvd-Ex10",
                "url": "https://jpg.nyctmc.org/cctv1155.jpg"
            }
        ]
    },
    {
        "coord": [40.6, -74.14],
        "cams": [
            {
                "id": "1262",
                "name": "C3-SIE-06A-E_at_Crafton_Ave_Ex10",
                "url": "https://jpg.nyctmc.org/cctv1154.jpg"
            },
            {
                "id": "1264",
                "name": "C3-SIE-07-EB_at_Woolley_Ave-Ex10",
                "url": "https://jpg.nyctmc.org/cctv1156.jpg"
            }
        ]
    },
    {
        "coord": [40.6, -74.13],
        "cams": [
            {
                "id": "1265",
                "name": "C3-SIE-08-EB_at_Bradley_Ave-Ex11",
                "url": "https://jpg.nyctmc.org/cctv1157.jpg"
            }
        ]
    },
    {
        "coord": [40.61, -74.1],
        "cams": [
            {
                "id": "1266",
                "name": "C3-SIE-09-EB_at_ Manor_Rd",
                "url": "https://jpg.nyctmc.org/cctv1158.jpg"
            },
            {
                "id": "1267",
                "name": "C3-SIE-11-EB_at_Renwick_Ave",
                "url": "https://jpg.nyctmc.org/cctv1159.jpg"
            }
        ]
    },
    {
        "coord": [40.6, -74.07],
        "cams": [
            {
                "id": "1268",
                "name": "C3-SIE-12-WB_Btwn_Clove_Road_and_Richmond_Road",
                "url": "https://jpg.nyctmc.org/cctv1160.jpg"
            },
            {
                "id": "1270",
                "name": "C3-SIE-14-WB_at_Hyland_Blvd_Ex14",
                "url": "https://jpg.nyctmc.org/cctv1162.jpg"
            },
            {
                "id": "879",
                "name": "Hylan Blvd @ West Fingerboard Rd & Sand Ln",
                "url": "https://jpg.nyctmc.org/cctv772.jpg"
            }
        ]
    },
    {
        "coord": [40.6, -74.06],
        "cams": [
            {
                "id": "1269",
                "name": "C3-SIE-13_EB_at_Mosel_Avenue",
                "url": "https://jpg.nyctmc.org/cctv1161.jpg"
            },
            {
                "id": "1271",
                "name": "C3-SIE-15-EB_at_Fingerboard_Rd_Ex15",
                "url": "https://jpg.nyctmc.org/cctv1163.jpg"
            }
        ]
    },
    {
        "coord": [40.53, -74.22],
        "cams": [
            {
                "id": "1272",
                "name": "C3-WSE-01-NB_at_Englewood_Ave-Ex2",
                "url": "https://jpg.nyctmc.org/cctv1164.jpg"
            }
        ]
    },
    {
        "coord": [40.54, -74.22],
        "cams": [
            {
                "id": "1273",
                "name": "C3-WSE-02-SB_at_Woodrow_Rd-Ex3",
                "url": "https://jpg.nyctmc.org/cctv1165.jpg"
            },
            {
                "id": "1274",
                "name": "C3-WSE-03-SB_at_Bloomngdale_Rd-Ex3",
                "url": "https://jpg.nyctmc.org/cctv1166.jpg"
            }
        ]
    },
    {
        "coord": [40.55, -74.21],
        "cams": [
            {
                "id": "1275",
                "name": "C3-WSE-04-SB_at_Rossville_Ave-Ex4",
                "url": "https://jpg.nyctmc.org/cctv1167.jpg"
            }
        ]
    },
    {
        "coord": [40.56, -74.19],
        "cams": [
            {
                "id": "1276",
                "name": "C3-WSE-05-NB_at_Arden_Ave-Ex4",
                "url": "https://jpg.nyctmc.org/cctv1168.jpg"
            },
            {
                "id": "1277",
                "name": "C3-WSE-06-NB_at_Muldoon_Ave-Ex5",
                "url": "https://jpg.nyctmc.org/cctv1169.jpg"
            }
        ]
    },
    {
        "coord": [40.57, -74.19],
        "cams": [
            {
                "id": "1278",
                "name": "C3-WSE-07-NB_at_Frsh_Kills_Crk-Ex5",
                "url": "https://jpg.nyctmc.org/cctv1170.jpg"
            }
        ]
    },
    {
        "coord": [40.58, -74.19],
        "cams": [
            {
                "id": "1279",
                "name": "C3-WSE-08-SB_at_Victory_Blvd-Ex7",
                "url": "https://jpg.nyctmc.org/cctv1171.jpg"
            }
        ]
    },
    {
        "coord": [40.59, -74.19],
        "cams": [
            {
                "id": "1280",
                "name": "C3-WSE-09-SB_at_Meredith_Blvd-Ex8",
                "url": "https://jpg.nyctmc.org/cctv1172.jpg"
            }
        ]
    },
    {
        "coord": [40.6, -74.18],
        "cams": [
            {
                "id": "1281",
                "name": "C3-WSE-10-SB_at_South_Ave-Ex8",
                "url": "https://jpg.nyctmc.org/cctv1173.jpg"
            },
            {
                "id": "1282",
                "name": "C3-WSE-11-SB_at_Edwrd_Crry_Ave-Ex9",
                "url": "https://jpg.nyctmc.org/cctv1174.jpg"
            }
        ]
    },
    {
        "coord": [40.61, -74.18],
        "cams": [
            {
                "id": "1283",
                "name": "C3-WSE-12-NB_at_Bloomfield_Ave_Ex9",
                "url": "https://jpg.nyctmc.org/cctv1175.jpg"
            }
        ]
    },
    {
        "coord": [40.72, -74.01],
        "cams": [
            {
                "id": "1284",
                "name": "C4-WST-02-NB_at_Vestry_St",
                "url": "https://jpg.nyctmc.org/cctv1176.jpg"
            },
            {
                "id": "1285",
                "name": "C4-WST-03-Med_at_Vestry_St",
                "url": "https://jpg.nyctmc.org/cctv1177.jpg"
            },
            {
                "id": "430",
                "name": "RT. 9A @ N. Moore St",
                "url": "https://jpg.nyctmc.org/cctv320.jpg"
            }
        ]
    },
    {
        "coord": [40.732548, -73.924803],
        "cams": [
            {
                "id": "1214",
                "name": "C5-BQE-31-EB_at_54th_Ave",
                "url": "https://jpg.nyctmc.org/cctv1107.jpg"
            },
            {
                "id": "648",
                "name": "Long Island Expy ramp to W/B BQE",
                "url": "https://jpg.nyctmc.org/cctv557.jpg"
            }
        ]
    },
    {
        "coord": [40.74, -73.89],
        "cams": [
            {
                "id": "1287",
                "name": "C5-BQE-39-WB_at_Broadway-Ex40",
                "url": "https://jpg.nyctmc.org/cctv1179.jpg"
            }
        ]
    },
    {
        "coord": [40.75, -73.9],
        "cams": [
            {
                "id": "1288",
                "name": "C5-BQE-42-WB_at_30th_Ave-Ex43",
                "url": "https://jpg.nyctmc.org/cctv1180.jpg"
            }
        ]
    },
    {
        "coord": [40.75, -73.89],
        "cams": [
            {
                "id": "1289",
                "name": "C5-BQE-44-Med_at_31st_Ave-Ex41",
                "url": "https://jpg.nyctmc.org/cctv1181.jpg"
            }
        ]
    },
    {
        "coord": [40.73, -73.76],
        "cams": [
            {
                "id": "1290",
                "name": "C5-CVE-01-SB_at_Union_Turnpike",
                "url": "https://jpg.nyctmc.org/cctv1182.jpg"
            }
        ]
    },
    {
        "coord": [40.75, -73.85],
        "cams": [
            {
                "id": "1291",
                "name": "C5-GCP-07-EB_at_Ditmars_Blvd-Ex9",
                "url": "https://jpg.nyctmc.org/cctv1183.jpg"
            }
        ]
    },
    {
        "coord": [40.734074, -73.844484],
        "cams": [
            {
                "id": "1216",
                "name": "C5-GCP-11_EB_at_64th_Ave-Ex10",
                "url": "https://jpg.nyctmc.org/cctv1109.jpg"
            }
        ]
    },
    {
        "coord": [40.726696, -73.837873],
        "cams": [
            {
                "id": "1217",
                "name": "C5-GCP-12_WB_at_69th_Rd-Ex11",
                "url": "https://jpg.nyctmc.org/cctv1110.jpg"
            }
        ]
    },
    {
        "coord": [40.721099, -73.835199],
        "cams": [
            {
                "id": "1218",
                "name": "C5-GCP-13-EB_at_72nd_Rd-Ex11",
                "url": "https://jpg.nyctmc.org/cctv1111.jpg"
            }
        ]
    },
    {
        "coord": [40.71676, -73.830245],
        "cams": [
            {
                "id": "1219",
                "name": "C5-GCP-14_WB_at_76th_Road-Ex13",
                "url": "https://jpg.nyctmc.org/cctv1112.jpg"
            },
            {
                "id": "897",
                "name": "Jackie Robinson Pkwy @ Queens Blvd",
                "url": "https://jpg.nyctmc.org/cctv786.jpg"
            }
        ]
    },
    {
        "coord": [40.71, -73.82],
        "cams": [
            {
                "id": "1292",
                "name": "C5-GCP-16-EB_at_Conn_at_126th_St",
                "url": "https://jpg.nyctmc.org/cctv1184.jpg"
            },
            {
                "id": "1302",
                "name": "C5-VWE-25-NB_at_GCP-Intr.-Ex14",
                "url": "https://jpg.nyctmc.org/cctv1194.jpg"
            },
            {
                "id": "591",
                "name": "Van Wyck Expwy @ Queens Blvd.(entrance ramp)",
                "url": "https://jpg.nyctmc.org/cctv595.jpg"
            },
            {
                "id": "956",
                "name": "VWE-21A-NB_at_QnsBlvd-Et.Rmp-Ex9",
                "url": "https://jpg.nyctmc.org/cctv844.jpg"
            }
        ]
    },
    {
        "coord": [40.73, -73.94],
        "cams": [
            {
                "id": "1293",
                "name": "C5-LIE-02-EB_at_27th_St-Ex15",
                "url": "https://jpg.nyctmc.org/cctv1185.jpg"
            }
        ]
    },
    {
        "coord": [40.73, -73.91],
        "cams": [
            {
                "id": "1294",
                "name": "C5-LIE-08-EB_48th_St_LL-Ex16",
                "url": "https://jpg.nyctmc.org/cctv1186.jpg"
            },
            {
                "id": "666",
                "name": "Long Island Expy @ 58th St LL",
                "url": "https://jpg.nyctmc.org/cctv562.jpg"
            }
        ]
    },
    {
        "coord": [40.72, -73.9],
        "cams": [
            {
                "id": "1295",
                "name": "C5-LIE-11-EB_at_60th_St-Ex18",
                "url": "https://jpg.nyctmc.org/cctv1187.jpg"
            }
        ]
    },
    {
        "coord": [40.73, -73.86],
        "cams": [
            {
                "id": "1296",
                "name": "C5-LIE-15-WB_at_Queens_Blvd-Ex19",
                "url": "https://jpg.nyctmc.org/cctv1188.jpg"
            }
        ]
    },
    {
        "coord": [40.74, -73.84],
        "cams": [
            {
                "id": "1297",
                "name": "C5-LIE-17-EB_at_GCP-Ex22A_GCP",
                "url": "https://jpg.nyctmc.org/cctv1189.jpg"
            }
        ]
    },
    {
        "coord": [40.74, -73.82],
        "cams": [
            {
                "id": "1298",
                "name": "C5-LIE-19-WB_at_138th_St-Ex23",
                "url": "https://jpg.nyctmc.org/cctv1190.jpg"
            },
            {
                "id": "953",
                "name": "LIE-20-WB_at_146th_St-Ex24",
                "url": "https://jpg.nyctmc.org/cctv841.jpg"
            }
        ]
    },
    {
        "coord": [40.73, -73.8],
        "cams": [
            {
                "id": "1299",
                "name": "C5-LIE-22-WB_at_163rd_St-Ex25",
                "url": "https://jpg.nyctmc.org/cctv1191.jpg"
            }
        ]
    },
    {
        "coord": [40.74, -73.76],
        "cams": [
            {
                "id": "1300",
                "name": "C5-LIE-27-WB_at_Clearview_Exwy-Ex27",
                "url": "https://jpg.nyctmc.org/cctv1192.jpg"
            }
        ]
    },
    {
        "coord": [40.74669647, -73.76365673],
        "cams": [
            {
                "id": "1220",
                "name": "C5-LIE-28-EB_at_213th_St-Ex28",
                "url": "https://jpg.nyctmc.org/cctv1113.jpg"
            }
        ]
    },
    {
        "coord": [40.74907941, -73.75828283],
        "cams": [
            {
                "id": "1221",
                "name": "C5-LIE-29-WB_at_220th_St-Ex29",
                "url": "https://jpg.nyctmc.org/cctv1114.jpg"
            }
        ]
    },
    {
        "coord": [40.763711, -73.726771],
        "cams": [
            {
                "id": "1222",
                "name": "C5-LIE-30-WB_at_254th_St-Ex32",
                "url": "https://jpg.nyctmc.org/cctv1115.jpg"
            }
        ]
    },
    {
        "coord": [40.7, -73.81],
        "cams": [
            {
                "id": "1301",
                "name": "C5-VWE-20_NB_at_Main_Street-Ex8",
                "url": "https://jpg.nyctmc.org/cctv1193.jpg"
            }
        ]
    },
    {
        "coord": [40.73, -73.83],
        "cams": [
            {
                "id": "1303",
                "name": "C5-VWE-28-SB_at_67th_Rd-Ex11",
                "url": "https://jpg.nyctmc.org/cctv1195.jpg"
            }
        ]
    },
    {
        "coord": [40.719655, -74.001842],
        "cams": [
            {
                "id": "988",
                "name": "Canal St @ Broadway",
                "url": "https://jpg.nyctmc.org/cctv884.jpg"
            }
        ]
    },
    {
        "coord": [40.714411227628915, -73.99223327636719],
        "cams": [
            {
                "id": "435",
                "name": "Canal Street @ Allen Street",
                "url": "https://jpg.nyctmc.org/cctv325.jpg"
            },
            {
                "id": "434",
                "name": "Canal Street @ Chrystie Street",
                "url": "https://jpg.nyctmc.org/cctv324.jpg"
            }
        ]
    },
    {
        "coord": [40.79421, -73.962857],
        "cams": [
            {
                "id": "965",
                "name": "Central Park West @ 100 St",
                "url": "https://jpg.nyctmc.org/cctv852.jpg"
            }
        ]
    },
    {
        "coord": [40.771797, -73.979217],
        "cams": [
            {
                "id": "966",
                "name": "Central Park West @ 65 St",
                "url": "https://jpg.nyctmc.org/cctv853.jpg"
            },
            {
                "id": "964",
                "name": "Central Park West @ 66 St",
                "url": "https://jpg.nyctmc.org/cctv851.jpg"
            },
            {
                "id": "505",
                "name": "Columbus St @ 65 Ave",
                "url": "https://jpg.nyctmc.org/cctv445.jpg"
            }
        ]
    },
    {
        "coord": [40.779481, -73.973578],
        "cams": [
            {
                "id": "968",
                "name": "Central Park West @ 77 St",
                "url": "https://jpg.nyctmc.org/cctv855.jpg"
            }
        ]
    },
    {
        "coord": [40.782031, -73.971734],
        "cams": [
            {
                "id": "969",
                "name": "Central Park West @ 81 St",
                "url": "https://jpg.nyctmc.org/cctv856.jpg"
            }
        ]
    },
    {
        "coord": [40.785302, -73.969353],
        "cams": [
            {
                "id": "970",
                "name": "Central Park West @ 86 St",
                "url": "https://jpg.nyctmc.org/cctv857.jpg"
            }
        ]
    },
    {
        "coord": [40.791667, -73.964697],
        "cams": [
            {
                "id": "971",
                "name": "Central Park West @ 96 St",
                "url": "https://jpg.nyctmc.org/cctv858.jpg"
            },
            {
                "id": "524",
                "name": "CPW @ 96 St",
                "url": "https://jpg.nyctmc.org/cctv464.jpg"
            }
        ]
    },
    {
        "coord": [40.834938, -73.894132],
        "cams": [
            {
                "id": "1041",
                "name": "Claremont @ Boston Rd.",
                "url": "https://jpg.nyctmc.org/cctv927.jpg"
            }
        ]
    },
    {
        "coord": [40.77543932860701, -73.7841796875],
        "cams": [
            {
                "id": "448",
                "name": "Clearview Expy @ 26th Ave",
                "url": "https://jpg.nyctmc.org/cctv339.jpg"
            }
        ]
    },
    {
        "coord": [40.76653408231532, -73.78096103668213],
        "cams": [
            {
                "id": "449",
                "name": "Clearview Expy @ 35 St",
                "url": "https://jpg.nyctmc.org/cctv340.jpg"
            }
        ]
    },
    {
        "coord": [40.763583, -73.836038],
        "cams": [
            {
                "id": "873",
                "name": "College Point Blvd @ 35 Ave",
                "url": "https://jpg.nyctmc.org/cctv766.jpg"
            },
            {
                "id": "1029",
                "name": "Flushing Bridge",
                "url": "https://jpg.nyctmc.org/cctv915.jpg"
            }
        ]
    },
    {
        "coord": [40.747994, -73.833113],
        "cams": [
            {
                "id": "911",
                "name": "College Point Blvd @ Booth Memorial Ave",
                "url": "https://jpg.nyctmc.org/cctv799.jpg"
            },
            {
                "id": "599",
                "name": "Van Wyck Expwy @ College Point Blvd.",
                "url": "https://jpg.nyctmc.org/cctv600.jpg"
            }
        ]
    },
    {
        "coord": [40.758092, -73.834234],
        "cams": [
            {
                "id": "874",
                "name": "College Point Blvd @ Roosevelt Ave",
                "url": "https://jpg.nyctmc.org/cctv767.jpg"
            }
        ]
    },
    {
        "coord": [40.75467, -73.833092],
        "cams": [
            {
                "id": "875",
                "name": "College Point Blvd @ Sanford Ave",
                "url": "https://jpg.nyctmc.org/cctv768.jpg"
            }
        ]
    },
    {
        "coord": [40.800325, -73.958392],
        "cams": [
            {
                "id": "1167",
                "name": "CPW @ 110 St",
                "url": "https://jpg.nyctmc.org/cctv1038.jpg"
            }
        ]
    },
    {
        "coord": [40.61998, -73.8257],
        "cams": [
            {
                "id": "706",
                "name": "Cross Bay Blvd @  Wildlife Refuge",
                "url": "https://jpg.nyctmc.org/cctv657.jpg"
            }
        ]
    },
    {
        "coord": [40.678784, -73.844359],
        "cams": [
            {
                "id": "1078",
                "name": "Cross Bay Blvd @ 107 Ave",
                "url": "https://jpg.nyctmc.org/cctv956.jpg"
            },
            {
                "id": "1084",
                "name": "Woodhaven Blvd @ Liberty Ave",
                "url": "https://jpg.nyctmc.org/cctv962.jpg"
            },
            {
                "id": "705",
                "name": "Woodhaven Blvd @ Rockaway Blvd",
                "url": "https://jpg.nyctmc.org/cctv656.jpg"
            }
        ]
    },
    {
        "coord": [40.662511, -73.840815],
        "cams": [
            {
                "id": "703",
                "name": "Cross Bay Blvd @ 157 Ave",
                "url": "https://jpg.nyctmc.org/cctv654.jpg"
            }
        ]
    },
    {
        "coord": [40.598884, -73.820711],
        "cams": [
            {
                "id": "696",
                "name": "Cross Bay Blvd @ 20 Rd",
                "url": "https://jpg.nyctmc.org/cctv648.jpg"
            }
        ]
    },
    {
        "coord": [40.609628, -73.819118],
        "cams": [
            {
                "id": "936",
                "name": "Cross Bay Blvd @ 6 Rd",
                "url": "https://jpg.nyctmc.org/cctv824.jpg"
            }
        ]
    },
    {
        "coord": [40.668793, -73.842395],
        "cams": [
            {
                "id": "1079",
                "name": "Cross Bay Blvd @ N. Conduit Ave",
                "url": "https://jpg.nyctmc.org/cctv957.jpg"
            }
        ]
    },
    {
        "coord": [40.588759, -73.819342],
        "cams": [
            {
                "id": "700",
                "name": "Cross Bay Blvd @ North Channel Bridge",
                "url": "https://jpg.nyctmc.org/cctv651.jpg"
            }
        ]
    },
    {
        "coord": [40.831822, -73.855202],
        "cams": [
            {
                "id": "1149",
                "name": "Cross Bronx Exp (CBE-12) SB at Ellis Ave (Ex4B)",
                "url": "https://jpg.nyctmc.org/cctv1025.jpg"
            }
        ]
    },
    {
        "coord": [40.830405, -73.85045],
        "cams": [
            {
                "id": "1150",
                "name": "Cross Bronx Exp (CBE-13) SB at Cstle Hill Ave (Ex5A)",
                "url": "https://jpg.nyctmc.org/cctv1026.jpg"
            }
        ]
    },
    {
        "coord": [40.83502, -73.865929],
        "cams": [
            {
                "id": "1148",
                "name": "Cross Bronx Expwy (CBE-11)\u00a0 SB at Wood Ave(Ex4B)",
                "url": "https://jpg.nyctmc.org/cctv1024.jpg"
            }
        ]
    },
    {
        "coord": [40.82407209894054, -73.82426261901855],
        "cams": [
            {
                "id": "194",
                "name": "Cross Bronx Expy @ Randall Avenue",
                "url": "https://jpg.nyctmc.org/cctv33.jpg"
            },
            {
                "id": "1048",
                "name": "NB_at_Randall_Ave-Ex11",
                "url": "https://jpg.nyctmc.org/cctv933.jpg"
            }
        ]
    },
    {
        "coord": [40.787365288545566, -73.81597995758057],
        "cams": [
            {
                "id": "450",
                "name": "Cross Island Expy @ 14 Ave",
                "url": "https://jpg.nyctmc.org/cctv341.jpg"
            }
        ]
    },
    {
        "coord": [40.779278, -73.768564],
        "cams": [
            {
                "id": "281",
                "name": "Cross Island Pkwy @ Bayside Marina",
                "url": "https://jpg.nyctmc.org/cctv178.jpg"
            }
        ]
    },
    {
        "coord": [40.788185, -73.790539],
        "cams": [
            {
                "id": "143",
                "name": "Cross Island Pkwy @ Throgsneck",
                "url": "https://jpg.nyctmc.org/cctv120.jpg"
            }
        ]
    },
    {
        "coord": [40.740168859407845, -73.72650146484375],
        "cams": [
            {
                "id": "120",
                "name": "Cross Island Pkwy @ Union Tpke",
                "url": "https://jpg.nyctmc.org/cctv143.jpg"
            }
        ]
    },
    {
        "coord": [40.840259, -73.885677],
        "cams": [
            {
                "id": "1042",
                "name": "Crotona Pkwy @ Cross Bronx Expwy",
                "url": "https://jpg.nyctmc.org/cctv928.jpg"
            },
            {
                "id": "1043",
                "name": "Southern Bl.\u00a0 @ Cross Bronx Expwy",
                "url": "https://jpg.nyctmc.org/cctv929.jpg"
            }
        ]
    },
    {
        "coord": [40.741934, -73.770174],
        "cams": [
            {
                "id": "674",
                "name": "CVE02 NB at 64th Ave",
                "url": "https://jpg.nyctmc.org/cctv552.jpg"
            }
        ]
    },
    {
        "coord": [40.748147, -73.773658],
        "cams": [
            {
                "id": "675",
                "name": "CVE03 SB at 56th Ave",
                "url": "https://jpg.nyctmc.org/cctv553.jpg"
            }
        ]
    },
    {
        "coord": [40.752691, -73.775804],
        "cams": [
            {
                "id": "676",
                "name": "CVE04 SB at 48th Ave",
                "url": "https://jpg.nyctmc.org/cctv554.jpg"
            }
        ]
    },
    {
        "coord": [40.730175, -73.9911],
        "cams": [
            {
                "id": "1115",
                "name": "E 8 St @ Lafayette St",
                "url": "https://jpg.nyctmc.org/cctv992.jpg"
            },
            {
                "id": "1138",
                "name": "E 8 St @ Lafayette St",
                "url": "https://jpg.nyctmc.org/cctv1014.jpg"
            }
        ]
    },
    {
        "coord": [40.721437, -73.983838],
        "cams": [
            {
                "id": "791",
                "name": "East Houston St @ Ave B",
                "url": "https://jpg.nyctmc.org/cctv698.jpg"
            }
        ]
    },
    {
        "coord": [40.719876, -73.978731],
        "cams": [
            {
                "id": "790",
                "name": "East Houston St @ Ave D",
                "url": "https://jpg.nyctmc.org/cctv697.jpg"
            }
        ]
    },
    {
        "coord": [40.81369, -73.931416],
        "cams": [
            {
                "id": "823",
                "name": "Exterior St @ E 138 St",
                "url": "https://jpg.nyctmc.org/cctv717.jpg"
            }
        ]
    },
    {
        "coord": [40.661198, -73.770991],
        "cams": [
            {
                "id": "829",
                "name": "Farmers Blvd @ 147 Ave @ 175 St",
                "url": "https://jpg.nyctmc.org/cctv723.jpg"
            }
        ]
    },
    {
        "coord": [40.667436, -73.766763],
        "cams": [
            {
                "id": "835",
                "name": "Farmers Blvd @ N Conduit Ave",
                "url": "https://jpg.nyctmc.org/cctv729.jpg"
            }
        ]
    },
    {
        "coord": [40.796969, -73.929317],
        "cams": [
            {
                "id": "795",
                "name": "FDR @ 120 St",
                "url": "https://jpg.nyctmc.org/cctv702.jpg"
            }
        ]
    },
    {
        "coord": [40.751693, -73.965239],
        "cams": [
            {
                "id": "735",
                "name": "FDR @ 48 St",
                "url": "https://jpg.nyctmc.org/cctv683.jpg"
            }
        ]
    },
    {
        "coord": [40.754739, -73.96219],
        "cams": [
            {
                "id": "733",
                "name": "FDR @ E 53 St",
                "url": "https://jpg.nyctmc.org/cctv681.jpg"
            }
        ]
    },
    {
        "coord": [40.721494, -73.974554],
        "cams": [
            {
                "id": "732",
                "name": "FDR @ E 6 St",
                "url": "https://jpg.nyctmc.org/cctv680.jpg"
            },
            {
                "id": "930",
                "name": "FDR Dr @ 10 St",
                "url": "https://jpg.nyctmc.org/cctv819.jpg"
            }
        ]
    },
    {
        "coord": [40.713209, -73.977491],
        "cams": [
            {
                "id": "731",
                "name": "FDR @ Grand St",
                "url": "https://jpg.nyctmc.org/cctv679.jpg"
            },
            {
                "id": "1092",
                "name": "WBB \u2013 10 NIR-4 @ FDR RD",
                "url": "https://jpg.nyctmc.org/cctv970.jpg"
            },
            {
                "id": "1094",
                "name": "WBB SIR - 1 @ Manhattan Anchorage",
                "url": "https://jpg.nyctmc.org/cctv972.jpg"
            }
        ]
    },
    {
        "coord": [40.710992, -73.980565],
        "cams": [
            {
                "id": "865",
                "name": "FDR @ Jackson St",
                "url": "https://jpg.nyctmc.org/cctv761.jpg"
            }
        ]
    },
    {
        "coord": [40.806370906488624, -73.9333963394165],
        "cams": [
            {
                "id": "272",
                "name": "FDR Dr @ 131 ST (3 Ave Br)",
                "url": "https://jpg.nyctmc.org/cctv164.jpg"
            },
            {
                "id": "826",
                "name": "Third Ave Bridge",
                "url": "https://jpg.nyctmc.org/cctv720.jpg"
            }
        ]
    },
    {
        "coord": [40.81095093393647, -73.93438339233398],
        "cams": [
            {
                "id": "188",
                "name": "FDR Dr @ 135 Street",
                "url": "https://jpg.nyctmc.org/cctv27.jpg"
            }
        ]
    },
    {
        "coord": [40.734803508271256, -73.97468090057373],
        "cams": [
            {
                "id": "253",
                "name": "FDR Dr @ 23 St",
                "url": "https://jpg.nyctmc.org/cctv134.jpg"
            }
        ]
    },
    {
        "coord": [40.744441, -73.971242],
        "cams": [
            {
                "id": "689",
                "name": "FDR Dr @ 38 St",
                "url": "https://jpg.nyctmc.org/cctv640.jpg"
            }
        ]
    },
    {
        "coord": [40.770256, -73.947626],
        "cams": [
            {
                "id": "691",
                "name": "FDR Dr @ 79 St",
                "url": "https://jpg.nyctmc.org/cctv642.jpg"
            }
        ]
    },
    {
        "coord": [40.777422, -73.942713],
        "cams": [
            {
                "id": "690",
                "name": "FDR Dr @ 90 St",
                "url": "https://jpg.nyctmc.org/cctv641.jpg"
            }
        ]
    },
    {
        "coord": [40.70315539593832, -74.0070390701294],
        "cams": [
            {
                "id": "223",
                "name": "FDR Dr @ Old Slip",
                "url": "https://jpg.nyctmc.org/cctv64.jpg"
            },
            {
                "id": "338",
                "name": "Water St @ Wall St",
                "url": "https://jpg.nyctmc.org/cctv212.jpg"
            }
        ]
    },
    {
        "coord": [40.609864, -73.922379],
        "cams": [
            {
                "id": "876",
                "name": "Flatbush Ave @ Ave U",
                "url": "https://jpg.nyctmc.org/cctv769.jpg"
            }
        ]
    },
    {
        "coord": [40.5902, -73.900803],
        "cams": [
            {
                "id": "839",
                "name": "Flatbush Ave @ Aviator Sports & Golf Club",
                "url": "https://jpg.nyctmc.org/cctv738.jpg"
            }
        ]
    },
    {
        "coord": [40.614704, -73.928063],
        "cams": [
            {
                "id": "844",
                "name": "Flatbush Ave @ Fillmore Ave",
                "url": "https://jpg.nyctmc.org/cctv737.jpg"
            }
        ]
    },
    {
        "coord": [40.622374, -73.936664],
        "cams": [
            {
                "id": "877",
                "name": "Flatbush Ave @ Kings Hwy",
                "url": "https://jpg.nyctmc.org/cctv770.jpg"
            }
        ]
    },
    {
        "coord": [40.601134, -73.913036],
        "cams": [
            {
                "id": "878",
                "name": "Flatbush Ave @ Marine Park",
                "url": "https://jpg.nyctmc.org/cctv771.jpg"
            }
        ]
    },
    {
        "coord": [40.67930366476232, -73.97455215454102],
        "cams": [
            {
                "id": "493",
                "name": "Flatbush Ave@ 6 Ave",
                "url": "https://jpg.nyctmc.org/cctv426.jpg"
            }
        ]
    },
    {
        "coord": [40.715065, -73.913276],
        "cams": [
            {
                "id": "1008",
                "name": "Flushing Ave @ 54 St",
                "url": "https://jpg.nyctmc.org/cctv895.jpg"
            }
        ]
    },
    {
        "coord": [40.721009, -73.904092],
        "cams": [
            {
                "id": "1009",
                "name": "Flushing Ave @ 61 St",
                "url": "https://jpg.nyctmc.org/cctv896.jpg"
            },
            {
                "id": "1010",
                "name": "Flushing Ave @ Fresh Pond Rd",
                "url": "https://jpg.nyctmc.org/cctv897.jpg"
            }
        ]
    },
    {
        "coord": [40.722749, -73.901592],
        "cams": [
            {
                "id": "1011",
                "name": "Flushing Ave @ Grand Ave & 64 St",
                "url": "https://jpg.nyctmc.org/cctv898.jpg"
            }
        ]
    },
    {
        "coord": [40.85754528867217, -73.88408660888672],
        "cams": [
            {
                "id": "327",
                "name": "Fordham Rd @ Hughes Ave",
                "url": "https://jpg.nyctmc.org/cctv202.jpg"
            }
        ]
    },
    {
        "coord": [40.86179721873436, -73.89670372009277],
        "cams": [
            {
                "id": "318",
                "name": "Fordham Rd and Grand Concourse",
                "url": "https://jpg.nyctmc.org/cctv201.jpg"
            }
        ]
    },
    {
        "coord": [40.716879, -73.800069],
        "cams": [
            {
                "id": "119",
                "name": "GCP @ 166 St",
                "url": "https://jpg.nyctmc.org/cctv127.jpg"
            }
        ]
    },
    {
        "coord": [40.72693354386121, -73.75370979309082],
        "cams": [
            {
                "id": "118",
                "name": "GCP @ 214 St",
                "url": "https://jpg.nyctmc.org/cctv128.jpg"
            }
        ]
    },
    {
        "coord": [40.77010932458492, -73.9171314239502],
        "cams": [
            {
                "id": "160",
                "name": "GCP @ 31 ST",
                "url": "https://jpg.nyctmc.org/cctv108.jpg"
            }
        ]
    },
    {
        "coord": [40.767003136241364, -73.90119144603271],
        "cams": [
            {
                "id": "142",
                "name": "GCP @ Astoria Blvd @ 49 St",
                "url": "https://jpg.nyctmc.org/cctv106.jpg"
            }
        ]
    },
    {
        "coord": [40.759919, -73.846248],
        "cams": [
            {
                "id": "378",
                "name": "GCP E Connector  @ 126 St",
                "url": "https://jpg.nyctmc.org/cctv269.jpg"
            }
        ]
    },
    {
        "coord": [40.768396, -73.905687],
        "cams": [
            {
                "id": "947",
                "name": "GCP-02-WB_at_46th_St-Ex45",
                "url": "https://jpg.nyctmc.org/cctv835.jpg"
            }
        ]
    },
    {
        "coord": [40.771572, -73.876061],
        "cams": [
            {
                "id": "679",
                "name": "GCP06 WB at 27th Ave - Ex6",
                "url": "https://jpg.nyctmc.org/cctv607.jpg"
            }
        ]
    },
    {
        "coord": [40.661152, -74.000813],
        "cams": [
            {
                "id": "1152",
                "name": "Gowanus Exp (GE-12) WB at 26th St (Ex23)",
                "url": "https://jpg.nyctmc.org/cctv1028.jpg"
            }
        ]
    },
    {
        "coord": [40.628871, -74.01736],
        "cams": [
            {
                "id": "565",
                "name": "Gowanus Expwy @ 72 Street",
                "url": "https://jpg.nyctmc.org/cctv505.jpg"
            }
        ]
    },
    {
        "coord": [40.623855, -74.019785],
        "cams": [
            {
                "id": "564",
                "name": "Gowanus Expwy @ 79 Street",
                "url": "https://jpg.nyctmc.org/cctv504.jpg"
            }
        ]
    },
    {
        "coord": [40.633219, -74.016266],
        "cams": [
            {
                "id": "566",
                "name": "Gowanus Expwy btwn 6 & 7 Ave",
                "url": "https://jpg.nyctmc.org/cctv506.jpg"
            }
        ]
    },
    {
        "coord": [40.6669025988096, -73.99570941925049],
        "cams": [
            {
                "id": "571",
                "name": "Gowanus Expy @ Prospect Interchange",
                "url": "https://jpg.nyctmc.org/cctv510.jpg"
            },
            {
                "id": "871",
                "name": "Hamilton Ave @ Hamilton Pl @ 15 St (N SR)",
                "url": "https://jpg.nyctmc.org/cctv763.jpg"
            },
            {
                "id": "872",
                "name": "Hamilton Ave @ Hamilton PL @ 15 St (S SR)",
                "url": "https://jpg.nyctmc.org/cctv764.jpg"
            },
            {
                "id": "697",
                "name": "Prospect Pkwy @ 3 Ave",
                "url": "https://jpg.nyctmc.org/cctv649.jpg"
            }
        ]
    },
    {
        "coord": [40.66673983982907, -73.77096176147461],
        "cams": [
            {
                "id": "152",
                "name": "GR Brewer @ Belt",
                "url": "https://jpg.nyctmc.org/cctv163.jpg"
            },
            {
                "id": "832",
                "name": "Guy Brewer Blvd @ N Conduit Ave",
                "url": "https://jpg.nyctmc.org/cctv726.jpg"
            }
        ]
    },
    {
        "coord": [40.724536, -73.898416],
        "cams": [
            {
                "id": "1012",
                "name": "Grand Ave @ Hamilton Pl",
                "url": "https://jpg.nyctmc.org/cctv899.jpg"
            },
            {
                "id": "653",
                "name": "Long Island Expy @ Grand Avenue",
                "url": "https://jpg.nyctmc.org/cctv563.jpg"
            }
        ]
    },
    {
        "coord": [40.725764, -73.895635],
        "cams": [
            {
                "id": "1013",
                "name": "Grand Ave @ LIE",
                "url": "https://jpg.nyctmc.org/cctv900.jpg"
            }
        ]
    },
    {
        "coord": [40.769492, -73.912797],
        "cams": [
            {
                "id": "604",
                "name": "Grand Central Pkwy @ 37 Street",
                "url": "https://jpg.nyctmc.org/cctv603.jpg"
            }
        ]
    },
    {
        "coord": [40.767022, -73.896918],
        "cams": [
            {
                "id": "607",
                "name": "Grand Central Pkwy @ 72 Street",
                "url": "https://jpg.nyctmc.org/cctv605.jpg"
            }
        ]
    },
    {
        "coord": [40.766372, -73.8937],
        "cams": [
            {
                "id": "608",
                "name": "Grand Central Pkwy @ 75 Street",
                "url": "https://jpg.nyctmc.org/cctv606.jpg"
            }
        ]
    },
    {
        "coord": [40.758115, -73.852715],
        "cams": [
            {
                "id": "612",
                "name": "Grand Central Pkwy E/Connector @ Astoria Blvd",
                "url": "https://jpg.nyctmc.org/cctv611.jpg"
            },
            {
                "id": "849",
                "name": "Northern Blvd @ 114 St",
                "url": "https://jpg.nyctmc.org/cctv743.jpg"
            }
        ]
    },
    {
        "coord": [40.826849, -73.922609],
        "cams": [
            {
                "id": "812",
                "name": "Grand Concourse @ 161 St",
                "url": "https://jpg.nyctmc.org/cctv708.jpg"
            }
        ]
    },
    {
        "coord": [40.71096, -73.951087],
        "cams": [
            {
                "id": "1187",
                "name": "Grand St (Borinquen Pl) @ Union Ave",
                "url": "https://jpg.nyctmc.org/cctv1080.jpg"
            }
        ]
    },
    {
        "coord": [40.718427, -73.99483],
        "cams": [
            {
                "id": "838",
                "name": "Grand St @ Bowery",
                "url": "https://jpg.nyctmc.org/cctv734.jpg"
            },
            {
                "id": "459",
                "name": "MHB-16 Manhattan Colonade Entr",
                "url": "https://jpg.nyctmc.org/cctv371.jpg"
            }
        ]
    },
    {
        "coord": [40.712024, -73.940835],
        "cams": [
            {
                "id": "1192",
                "name": "Grand St @ Bushwick Ave",
                "url": "https://jpg.nyctmc.org/cctv1086.jpg"
            }
        ]
    },
    {
        "coord": [40.71590752439506, -73.98880004882812],
        "cams": [
            {
                "id": "517",
                "name": "Grand St @ Essex St",
                "url": "https://jpg.nyctmc.org/cctv458.jpg"
            },
            {
                "id": "1123",
                "name": "Grand St. @ Clinton St",
                "url": "https://jpg.nyctmc.org/cctv1000.jpg"
            }
        ]
    },
    {
        "coord": [40.7116462, -73.943913],
        "cams": [
            {
                "id": "1188",
                "name": "Grand St @ Graham Ave",
                "url": "https://jpg.nyctmc.org/cctv1082.jpg"
            }
        ]
    },
    {
        "coord": [40.70562793820589, -74.01412010192871],
        "cams": [
            {
                "id": "512",
                "name": "Greenwich St @ Morris St",
                "url": "https://jpg.nyctmc.org/cctv453.jpg"
            },
            {
                "id": "287",
                "name": "Manhattan BBT Entrance",
                "url": "https://jpg.nyctmc.org/cctv184.jpg"
            },
            {
                "id": "1229",
                "name": "West st and West Thames (Battery tunnel)",
                "url": "https://jpg.nyctmc.org/cctv1122.jpg"
            }
        ]
    },
    {
        "coord": [40.824074, -73.934464],
        "cams": [
            {
                "id": "1161",
                "name": "Harlem River Dr @ 150 St",
                "url": "https://jpg.nyctmc.org/cctv1032.jpg"
            }
        ]
    },
    {
        "coord": [40.836133, -73.934883],
        "cams": [
            {
                "id": "805",
                "name": "Harlem Rvr Dr (FDR) @ 166 St",
                "url": "https://jpg.nyctmc.org/cctv705.jpg"
            }
        ]
    },
    {
        "coord": [40.82199367154931, -73.95725727081299],
        "cams": [
            {
                "id": "558",
                "name": "Henry Hudson @ 137 St",
                "url": "https://jpg.nyctmc.org/cctv500.jpg"
            }
        ]
    },
    {
        "coord": [40.835891916032764, -73.94871711730957],
        "cams": [
            {
                "id": "554",
                "name": "Henry Hudson @ 158 St",
                "url": "https://jpg.nyctmc.org/cctv495.jpg"
            }
        ]
    },
    {
        "coord": [40.818617, -73.96099],
        "cams": [
            {
                "id": "933",
                "name": "Henry Hudson Pkwy @ 125 St",
                "url": "https://jpg.nyctmc.org/cctv501.jpg"
            }
        ]
    },
    {
        "coord": [40.88383147475169, -73.91451358795166],
        "cams": [
            {
                "id": "278",
                "name": "Henry Hudson Pkwy @ 232 St",
                "url": "https://jpg.nyctmc.org/cctv173.jpg"
            }
        ]
    },
    {
        "coord": [40.779679, -73.988462],
        "cams": [
            {
                "id": "895",
                "name": "Henry Hudson Pkwy @ 70 St",
                "url": "https://jpg.nyctmc.org/cctv779.jpg"
            }
        ]
    },
    {
        "coord": [40.795617968801466, -73.97618293762207],
        "cams": [
            {
                "id": "291",
                "name": "Henry Hudson Pkwy @ 96 St",
                "url": "https://jpg.nyctmc.org/cctv188.jpg"
            }
        ]
    },
    {
        "coord": [40.736207, -73.713777],
        "cams": [
            {
                "id": "788",
                "name": "Hillside Ave @ Little Neck Pkwy",
                "url": "https://jpg.nyctmc.org/cctv695.jpg"
            }
        ]
    },
    {
        "coord": [40.725925, -74.009506],
        "cams": [
            {
                "id": "157",
                "name": "Holland Tunnel",
                "url": "https://jpg.nyctmc.org/cctv92.jpg"
            },
            {
                "id": "211",
                "name": "West St @ Canal St",
                "url": "https://jpg.nyctmc.org/cctv50.jpg"
            }
        ]
    },
    {
        "coord": [40.725458, -73.996756],
        "cams": [
            {
                "id": "722",
                "name": "Houston St @ Broadway",
                "url": "https://jpg.nyctmc.org/cctv671.jpg"
            }
        ]
    },
    {
        "coord": [40.724006, -73.990992],
        "cams": [
            {
                "id": "721",
                "name": "Houston St @ Christies St",
                "url": "https://jpg.nyctmc.org/cctv670.jpg"
            }
        ]
    },
    {
        "coord": [40.507726, -74.230003],
        "cams": [
            {
                "id": "862",
                "name": "Hylan Ave @ Page Ave",
                "url": "https://jpg.nyctmc.org/cctv756.jpg"
            }
        ]
    },
    {
        "coord": [40.529434, -74.161351],
        "cams": [
            {
                "id": "861",
                "name": "Hylan Blvd @ Arden Ave",
                "url": "https://jpg.nyctmc.org/cctv755.jpg"
            }
        ]
    },
    {
        "coord": [40.61405, -74.066176],
        "cams": [
            {
                "id": "923",
                "name": "Hylan Blvd @ Bay St",
                "url": "https://jpg.nyctmc.org/cctv812.jpg"
            }
        ]
    },
    {
        "coord": [40.560385, -74.120024],
        "cams": [
            {
                "id": "859",
                "name": "Hylan Blvd @ Guyon Ave",
                "url": "https://jpg.nyctmc.org/cctv753.jpg"
            }
        ]
    },
    {
        "coord": [40.524067, -74.186177],
        "cams": [
            {
                "id": "860",
                "name": "Hylan Blvd @ Huguenot Ave",
                "url": "https://jpg.nyctmc.org/cctv754.jpg"
            }
        ]
    },
    {
        "coord": [40.534229, -74.153896],
        "cams": [
            {
                "id": "858",
                "name": "Hylan Blvd @ Richmond Ave",
                "url": "https://jpg.nyctmc.org/cctv752.jpg"
            }
        ]
    },
    {
        "coord": [40.586632, -74.091912],
        "cams": [
            {
                "id": "850",
                "name": "Hylan Blvd @ Seaview Ave",
                "url": "https://jpg.nyctmc.org/cctv744.jpg"
            }
        ]
    },
    {
        "coord": [40.519122, -74.197091],
        "cams": [
            {
                "id": "863",
                "name": "Hylan Blvd @ Seguine Ave",
                "url": "https://jpg.nyctmc.org/cctv757.jpg"
            }
        ]
    },
    {
        "coord": [40.70273, -73.8624],
        "cams": [
            {
                "id": "1118",
                "name": "Jackie Robinson Pkwy @ Forest Pk Dr",
                "url": "https://jpg.nyctmc.org/cctv995.jpg"
            },
            {
                "id": "1141",
                "name": "Jackie Robinson Pkwy @ Forest Pk Dr",
                "url": "https://jpg.nyctmc.org/cctv1017.jpg"
            }
        ]
    },
    {
        "coord": [40.678191, -73.897749],
        "cams": [
            {
                "id": "938",
                "name": "Jackie Robinson Pkwy @ Jamaica Ave",
                "url": "https://jpg.nyctmc.org/cctv829.jpg"
            }
        ]
    },
    {
        "coord": [40.750627, -73.819113],
        "cams": [
            {
                "id": "900",
                "name": "Kissena Blvd @ Holly Ave",
                "url": "https://jpg.nyctmc.org/cctv788.jpg"
            }
        ]
    },
    {
        "coord": [40.739234, -73.815061],
        "cams": [
            {
                "id": "902",
                "name": "Kissena Blvd @ LIE N S/R",
                "url": "https://jpg.nyctmc.org/cctv790.jpg"
            },
            {
                "id": "121",
                "name": "LIE @ Kissena Blvd",
                "url": "https://jpg.nyctmc.org/cctv129.jpg"
            },
            {
                "id": "659",
                "name": "Long Island Expy @ Kissena Blvd",
                "url": "https://jpg.nyctmc.org/cctv569.jpg"
            }
        ]
    },
    {
        "coord": [40.757138, -73.827106],
        "cams": [
            {
                "id": "935",
                "name": "Kissena Blvd @ Sanford Ave",
                "url": "https://jpg.nyctmc.org/cctv823.jpg"
            },
            {
                "id": "927",
                "name": "Main St @ Sanford Ave",
                "url": "https://jpg.nyctmc.org/cctv816.jpg"
            }
        ]
    },
    {
        "coord": [40.80798, -73.945472],
        "cams": [
            {
                "id": "530",
                "name": "Lenox Ave @ 125 St",
                "url": "https://jpg.nyctmc.org/cctv472.jpg"
            }
        ]
    },
    {
        "coord": [40.813322029621865, -73.94060611724854],
        "cams": [
            {
                "id": "521",
                "name": "Lenox Ave @ 135 St",
                "url": "https://jpg.nyctmc.org/cctv450.jpg"
            }
        ]
    },
    {
        "coord": [40.760065655270964, -73.96875858306885],
        "cams": [
            {
                "id": "404",
                "name": "Lexington Ave @ 57 ST",
                "url": "https://jpg.nyctmc.org/cctv294.jpg"
            },
            {
                "id": "552",
                "name": "Park Ave @ 57 St",
                "url": "https://jpg.nyctmc.org/cctv492.jpg"
            }
        ]
    },
    {
        "coord": [40.76971930750302, -73.96202087402344],
        "cams": [
            {
                "id": "540",
                "name": "Lexington Ave @ 72 St",
                "url": "https://jpg.nyctmc.org/cctv181.jpg"
            },
            {
                "id": "909",
                "name": "Park Ave @ 72 St",
                "url": "https://jpg.nyctmc.org/cctv797.jpg"
            }
        ]
    },
    {
        "coord": [40.744001, -73.837011],
        "cams": [
            {
                "id": "894",
                "name": "LIE @ College Point Blvd",
                "url": "https://jpg.nyctmc.org/cctv785.jpg"
            },
            {
                "id": "960",
                "name": "VWE-29-SB_at_LIE-Ex12",
                "url": "https://jpg.nyctmc.org/cctv848.jpg"
            }
        ]
    },
    {
        "coord": [40.7458, -73.767759],
        "cams": [
            {
                "id": "799",
                "name": "LIE @ Oceania St",
                "url": "https://jpg.nyctmc.org/cctv161.jpg"
            }
        ]
    },
    {
        "coord": [40.74091672247484, -73.95339488983154],
        "cams": [
            {
                "id": "216",
                "name": "LIE @ QMT-  Pulaski Br",
                "url": "https://jpg.nyctmc.org/cctv55.jpg"
            }
        ]
    },
    {
        "coord": [40.733208, -73.921545],
        "cams": [
            {
                "id": "949",
                "name": "LIE-06-EB_ramp_E_BQE_to_W_LIE",
                "url": "https://jpg.nyctmc.org/cctv837.jpg"
            },
            {
                "id": "650",
                "name": "Long Island Expy @ 48 St UL",
                "url": "https://jpg.nyctmc.org/cctv559.jpg"
            }
        ]
    },
    {
        "coord": [40.738072, -73.797433],
        "cams": [
            {
                "id": "661",
                "name": "Long Island Expy @ 172nd St",
                "url": "https://jpg.nyctmc.org/cctv571.jpg"
            }
        ]
    },
    {
        "coord": [40.739972, -73.790251],
        "cams": [
            {
                "id": "662",
                "name": "Long Island Expy @ 185th St",
                "url": "https://jpg.nyctmc.org/cctv572.jpg"
            }
        ]
    },
    {
        "coord": [40.728409, -73.886147],
        "cams": [
            {
                "id": "654",
                "name": "Long Island Expy @ 75 St",
                "url": "https://jpg.nyctmc.org/cctv564.jpg"
            }
        ]
    },
    {
        "coord": [40.729801, -73.877454],
        "cams": [
            {
                "id": "655",
                "name": "Long Island Expy @ 84 St",
                "url": "https://jpg.nyctmc.org/cctv565.jpg"
            }
        ]
    },
    {
        "coord": [40.743389, -73.774497],
        "cams": [
            {
                "id": "664",
                "name": "Long Island Expy @ Francis Lewis Blvd",
                "url": "https://jpg.nyctmc.org/cctv574.jpg"
            }
        ]
    },
    {
        "coord": [40.736478, -73.928855],
        "cams": [
            {
                "id": "646",
                "name": "Long Island Expy @ Greenpoint Ave",
                "url": "https://jpg.nyctmc.org/cctv556.jpg"
            }
        ]
    },
    {
        "coord": [40.742773, -73.780607],
        "cams": [
            {
                "id": "663",
                "name": "Long Island Expy @ Underhill Ave",
                "url": "https://jpg.nyctmc.org/cctv573.jpg"
            }
        ]
    },
    {
        "coord": [40.730618, -73.914372],
        "cams": [
            {
                "id": "652",
                "name": "Long Island Expy btwn 50 St - 58th St",
                "url": "https://jpg.nyctmc.org/cctv561.jpg"
            }
        ]
    },
    {
        "coord": [40.828115, -73.931447],
        "cams": [
            {
                "id": "294",
                "name": "Macombs Dam Bridge",
                "url": "https://jpg.nyctmc.org/cctv191.jpg"
            },
            {
                "id": "811",
                "name": "Macombs Dam Bridge @ E 161 St",
                "url": "https://jpg.nyctmc.org/cctv707.jpg"
            }
        ]
    },
    {
        "coord": [40.742587, -73.825432],
        "cams": [
            {
                "id": "903",
                "name": "Main St @ LIE N S/R",
                "url": "https://jpg.nyctmc.org/cctv791.jpg"
            }
        ]
    },
    {
        "coord": [40.759565, -73.830121],
        "cams": [
            {
                "id": "904",
                "name": "Main St @ Roosevelt Ave",
                "url": "https://jpg.nyctmc.org/cctv792.jpg"
            },
            {
                "id": "1162",
                "name": "Roosevelt Ave @ Main St",
                "url": "https://jpg.nyctmc.org/cctv1033.jpg"
            }
        ]
    },
    {
        "coord": [40.8732637, -73.9058863],
        "cams": [
            {
                "id": "1098",
                "name": "Major Deegan Expwy @ 225 St",
                "url": "https://jpg.nyctmc.org/cctv975.jpg"
            }
        ]
    },
    {
        "coord": [40.8765141, -73.9047832],
        "cams": [
            {
                "id": "1096",
                "name": "Major Deegan Expwy @ 230 St",
                "url": "https://jpg.nyctmc.org/cctv974.jpg"
            }
        ]
    },
    {
        "coord": [40.836801045460255, -73.93009185791016],
        "cams": [
            {
                "id": "202",
                "name": "Major Deegan Expy @ S of W 167 Street",
                "url": "https://jpg.nyctmc.org/cctv41.jpg"
            }
        ]
    },
    {
        "coord": [40.798238, -73.952408],
        "cams": [
            {
                "id": "1038",
                "name": "Malcolm X Blvd/Lenox Ave @ 110 St/CPN",
                "url": "https://jpg.nyctmc.org/cctv924.jpg"
            }
        ]
    },
    {
        "coord": [40.841586, -73.888508],
        "cams": [
            {
                "id": "1044",
                "name": "Marmion Av.\u00a0 @ Cross Bronx Expwy",
                "url": "https://jpg.nyctmc.org/cctv930.jpg"
            },
            {
                "id": "1059",
                "name": "NB_at_Marmion Ave-Ex03",
                "url": "https://jpg.nyctmc.org/cctv945.jpg"
            }
        ]
    },
    {
        "coord": [40.820135, -73.836092],
        "cams": [
            {
                "id": "1049",
                "name": "Med_at_Senger_Pl-Ex18",
                "url": "https://jpg.nyctmc.org/cctv934.jpg"
            }
        ]
    },
    {
        "coord": [40.851993, -73.835938],
        "cams": [
            {
                "id": "1054",
                "name": "Med_at_Wilkenson_Ave-Ex3\u00a0",
                "url": "https://jpg.nyctmc.org/cctv939.jpg"
            }
        ]
    },
    {
        "coord": [40.824194, -73.913826],
        "cams": [
            {
                "id": "1035",
                "name": "Melrose Ave/Webster Ave @ E 161",
                "url": "https://jpg.nyctmc.org/cctv921.jpg"
            }
        ]
    },
    {
        "coord": [40.715924, -73.961926],
        "cams": [
            {
                "id": "1186",
                "name": "Metropolitan Ave @ Berry St",
                "url": "https://jpg.nyctmc.org/cctv1081.jpg"
            }
        ]
    },
    {
        "coord": [40.71261, -73.9004],
        "cams": [
            {
                "id": "1121",
                "name": "Metropolitan Ave @ Fresh Pond Rd",
                "url": "https://jpg.nyctmc.org/cctv998.jpg"
            },
            {
                "id": "1144",
                "name": "Metropolitan Ave @ Fresh Pond Rd",
                "url": "https://jpg.nyctmc.org/cctv1020.jpg"
            }
        ]
    },
    {
        "coord": [40.705112, -73.989272],
        "cams": [
            {
                "id": "806",
                "name": "MHB-27 Bklyn N URDWY @ Twr",
                "url": "https://jpg.nyctmc.org/cctv393.jpg"
            },
            {
                "id": "807",
                "name": "MHB-28 Bklyn LRDW @ Twr",
                "url": "https://jpg.nyctmc.org/cctv394.jpg"
            },
            {
                "id": "808",
                "name": "MHB-29 Brklyn S URDWY @ Twr",
                "url": "https://jpg.nyctmc.org/cctv395.jpg"
            }
        ]
    },
    {
        "coord": [40.710689, -73.984656],
        "cams": [
            {
                "id": "446",
                "name": "Montgomergy @ South St",
                "url": "https://jpg.nyctmc.org/cctv338.jpg"
            }
        ]
    },
    {
        "coord": [40.603647, -74.069355],
        "cams": [
            {
                "id": "1061",
                "name": "Narrows Rd South @ Fingerboard Rd",
                "url": "https://jpg.nyctmc.org/cctv947.jpg"
            }
        ]
    },
    {
        "coord": [40.605488, -74.076704],
        "cams": [
            {
                "id": "1060",
                "name": "Narrows Rd South @ Hylan Blvd",
                "url": "https://jpg.nyctmc.org/cctv946.jpg"
            }
        ]
    },
    {
        "coord": [40.601206, -74.065126],
        "cams": [
            {
                "id": "1062",
                "name": "Narrows Rd South @ Lily Pond Ave",
                "url": "https://jpg.nyctmc.org/cctv948.jpg"
            }
        ]
    },
    {
        "coord": [40.844531, -73.903627],
        "cams": [
            {
                "id": "1033",
                "name": "NB Cross Brx Expy-Webster Av Exit ramp @ E 174 St & Cater Av",
                "url": "https://jpg.nyctmc.org/cctv919.jpg"
            }
        ]
    },
    {
        "coord": [40.831915, -73.83819],
        "cams": [
            {
                "id": "1052",
                "name": "NB_at_Bruckner_Blvd-Ex19",
                "url": "https://jpg.nyctmc.org/cctv937.jpg"
            },
            {
                "id": "1053",
                "name": "NB_at_Waterbury_Ave-Ex19\u00a0",
                "url": "https://jpg.nyctmc.org/cctv938.jpg"
            }
        ]
    },
    {
        "coord": [40.828595, -73.837973],
        "cams": [
            {
                "id": "1046",
                "name": "NB_at_Hutch_Rvr_Pkwy-Ex54",
                "url": "https://jpg.nyctmc.org/cctv931.jpg"
            }
        ]
    },
    {
        "coord": [40.827323, -73.832001],
        "cams": [
            {
                "id": "1047",
                "name": "NB_at_Lafayette_Ave-Ex11",
                "url": "https://jpg.nyctmc.org/cctv932.jpg"
            }
        ]
    },
    {
        "coord": [40.844926, -73.917694],
        "cams": [
            {
                "id": "1057",
                "name": "NB_at_Macombs Rd-Ex2A",
                "url": "https://jpg.nyctmc.org/cctv943.jpg"
            }
        ]
    },
    {
        "coord": [40.844609, -73.924637],
        "cams": [
            {
                "id": "1045",
                "name": "NB_at_Undercliff_Ave-Ex1C",
                "url": "https://jpg.nyctmc.org/cctv942.jpg"
            }
        ]
    },
    {
        "coord": [40.8839, -73.8259],
        "cams": [
            {
                "id": "277",
                "name": "NE Thruway @ Conner St",
                "url": "https://jpg.nyctmc.org/cctv172.jpg"
            }
        ]
    },
    {
        "coord": [40.868476, -73.832667],
        "cams": [
            {
                "id": "147",
                "name": "New Eng Thru @ Bartow",
                "url": "https://jpg.nyctmc.org/cctv122.jpg"
            }
        ]
    },
    {
        "coord": [40.753647, -73.914468],
        "cams": [
            {
                "id": "978",
                "name": "Northern Blvd @ 48 St",
                "url": "https://jpg.nyctmc.org/cctv866.jpg"
            }
        ]
    },
    {
        "coord": [40.752967, -73.910238],
        "cams": [
            {
                "id": "880",
                "name": "Northern Blvd @ 51 St",
                "url": "https://jpg.nyctmc.org/cctv773.jpg"
            }
        ]
    },
    {
        "coord": [40.755492, -73.885347],
        "cams": [
            {
                "id": "972",
                "name": "Northern Blvd @ 82 St",
                "url": "https://jpg.nyctmc.org/cctv859.jpg"
            }
        ]
    },
    {
        "coord": [40.753292, -73.906896],
        "cams": [
            {
                "id": "977",
                "name": "Northern Blvd @ Broadway",
                "url": "https://jpg.nyctmc.org/cctv865.jpg"
            }
        ]
    },
    {
        "coord": [40.752004, -73.931943],
        "cams": [
            {
                "id": "738",
                "name": "Northern Blvd @ Honeywell Bridge",
                "url": "https://jpg.nyctmc.org/cctv686.jpg"
            }
        ]
    },
    {
        "coord": [40.756845, -73.873712],
        "cams": [
            {
                "id": "939",
                "name": "Northern Blvd @ Junction Blvd",
                "url": "https://jpg.nyctmc.org/cctv828.jpg"
            }
        ]
    },
    {
        "coord": [40.770649, -73.735503],
        "cams": [
            {
                "id": "746",
                "name": "Northern Blvd @ Little Neck Pkwy",
                "url": "https://jpg.nyctmc.org/cctv694.jpg"
            }
        ]
    },
    {
        "coord": [40.762967, -73.831958],
        "cams": [
            {
                "id": "925",
                "name": "Northern Blvd @ Main St",
                "url": "https://jpg.nyctmc.org/cctv814.jpg"
            }
        ]
    },
    {
        "coord": [40.764641, -73.82347],
        "cams": [
            {
                "id": "881",
                "name": "Northern Blvd @ Parsons Blvd",
                "url": "https://jpg.nyctmc.org/cctv774.jpg"
            }
        ]
    },
    {
        "coord": [40.752466, -73.924313],
        "cams": [
            {
                "id": "976",
                "name": "Northern Blvd @ Steinway",
                "url": "https://jpg.nyctmc.org/cctv864.jpg"
            }
        ]
    },
    {
        "coord": [40.763955, -73.828126],
        "cams": [
            {
                "id": "882",
                "name": "Northern Blvd @ Union St",
                "url": "https://jpg.nyctmc.org/cctv775.jpg"
            }
        ]
    },
    {
        "coord": [40.626558, -73.970924],
        "cams": [
            {
                "id": "723",
                "name": "Ocean Pkwy @ Ave I",
                "url": "https://jpg.nyctmc.org/cctv672.jpg"
            }
        ]
    },
    {
        "coord": [40.59785, -73.9655],
        "cams": [
            {
                "id": "707",
                "name": "Ocean Pkwy @ Ave U",
                "url": "https://jpg.nyctmc.org/cctv658.jpg"
            }
        ]
    },
    {
        "coord": [40.591079, -73.965347],
        "cams": [
            {
                "id": "852",
                "name": "Ocean Pkwy @ Ave X",
                "url": "https://jpg.nyctmc.org/cctv746.jpg"
            }
        ]
    },
    {
        "coord": [40.605697, -73.966819],
        "cams": [
            {
                "id": "853",
                "name": "Ocean Pkwy @ Kings Hwy",
                "url": "https://jpg.nyctmc.org/cctv747.jpg"
            }
        ]
    },
    {
        "coord": [40.575219, -73.968764],
        "cams": [
            {
                "id": "851",
                "name": "Ocean Pkwy @ Surf Av @ Sea Breeze Ave",
                "url": "https://jpg.nyctmc.org/cctv745.jpg"
            }
        ]
    },
    {
        "coord": [40.73938847159067, -73.9863109588623],
        "cams": [
            {
                "id": "531",
                "name": "Park Ave @ 23 St",
                "url": "https://jpg.nyctmc.org/cctv473.jpg"
            }
        ]
    },
    {
        "coord": [40.74618404154383, -73.98124694824219],
        "cams": [
            {
                "id": "419",
                "name": "Park Ave @ 34 St",
                "url": "https://jpg.nyctmc.org/cctv309.jpg"
            }
        ]
    },
    {
        "coord": [40.786516, -73.952456],
        "cams": [
            {
                "id": "910",
                "name": "Park Ave @ 96 St",
                "url": "https://jpg.nyctmc.org/cctv798.jpg"
            }
        ]
    },
    {
        "coord": [40.70868595561338, -74.00193214416504],
        "cams": [
            {
                "id": "426",
                "name": "Pearl St @ Dover",
                "url": "https://jpg.nyctmc.org/cctv316.jpg"
            },
            {
                "id": "427",
                "name": "Pearl Street @ St. James Pl",
                "url": "https://jpg.nyctmc.org/cctv317.jpg"
            }
        ]
    },
    {
        "coord": [40.856678, -73.836682],
        "cams": [
            {
                "id": "866",
                "name": "Pelham Pkwy @ Stillwell Ave",
                "url": "https://jpg.nyctmc.org/cctv760.jpg"
            }
        ]
    },
    {
        "coord": [40.855609, -73.869347],
        "cams": [
            {
                "id": "883",
                "name": "Pelham Pkwy E/B @ Boston Rd",
                "url": "https://jpg.nyctmc.org/cctv776.jpg"
            },
            {
                "id": "884",
                "name": "Pelham Pkwy W/B @ Boston Rd",
                "url": "https://jpg.nyctmc.org/cctv777.jpg"
            }
        ]
    },
    {
        "coord": [40.864552, -73.813781],
        "cams": [
            {
                "id": "885",
                "name": "Pelham Shore Rd @ City Island Rd",
                "url": "https://jpg.nyctmc.org/cctv778.jpg"
            }
        ]
    },
    {
        "coord": [40.662427, -73.988693],
        "cams": [
            {
                "id": "580",
                "name": "Prospect Expy @ 6 Ave",
                "url": "https://jpg.nyctmc.org/cctv516.jpg"
            },
            {
                "id": "578",
                "name": "Prospect Expy @ 7 Ave",
                "url": "https://jpg.nyctmc.org/cctv515.jpg"
            }
        ]
    },
    {
        "coord": [40.657429, -73.983135],
        "cams": [
            {
                "id": "577",
                "name": "Prospect Expy @ 9 Ave",
                "url": "https://jpg.nyctmc.org/cctv514.jpg"
            }
        ]
    },
    {
        "coord": [40.647792, -73.974938],
        "cams": [
            {
                "id": "572",
                "name": "Prospect Expy @ Caton Ave",
                "url": "https://jpg.nyctmc.org/cctv511.jpg"
            },
            {
                "id": "573",
                "name": "Prospect Expy @ Fort Hamilton Pkwy",
                "url": "https://jpg.nyctmc.org/cctv512.jpg"
            }
        ]
    },
    {
        "coord": [40.75268632918292, -73.94644260406494],
        "cams": [
            {
                "id": "483",
                "name": "QBB LL CM @ 11 St",
                "url": "https://jpg.nyctmc.org/cctv416.jpg"
            }
        ]
    },
    {
        "coord": [40.757631, -73.956358],
        "cams": [
            {
                "id": "890",
                "name": "QBB LL CM @ E Channel",
                "url": "https://jpg.nyctmc.org/cctv414.jpg"
            },
            {
                "id": "480",
                "name": "QBB LL CM @ W Channel",
                "url": "https://jpg.nyctmc.org/cctv412.jpg"
            },
            {
                "id": "898",
                "name": "QBB NOR @ W Channel",
                "url": "https://jpg.nyctmc.org/cctv411.jpg"
            },
            {
                "id": "888",
                "name": "QBB SOR @ W Channel",
                "url": "https://jpg.nyctmc.org/cctv410.jpg"
            },
            {
                "id": "481",
                "name": "QBB UL CM @ Roosevelt",
                "url": "https://jpg.nyctmc.org/cctv413.jpg"
            }
        ]
    },
    {
        "coord": [40.745235, -73.9377],
        "cams": [
            {
                "id": "922",
                "name": "QBB UL Entrance @ Thomson Ave",
                "url": "https://jpg.nyctmc.org/cctv811.jpg"
            },
            {
                "id": "498",
                "name": "Queens Blvd @ Sunnyside Br",
                "url": "https://jpg.nyctmc.org/cctv436.jpg"
            }
        ]
    },
    {
        "coord": [40.72797425371559, -73.85765075683594],
        "cams": [
            {
                "id": "124",
                "name": "Qns Blvd @ 65 Ave",
                "url": "https://jpg.nyctmc.org/cctv146.jpg"
            }
        ]
    },
    {
        "coord": [40.741495, -73.898293],
        "cams": [
            {
                "id": "126",
                "name": "Qns Blvd @ 65 PL",
                "url": "https://jpg.nyctmc.org/cctv148.jpg"
            }
        ]
    },
    {
        "coord": [40.73356779034111, -73.86932373046875],
        "cams": [
            {
                "id": "125",
                "name": "Qns Blvd @ QnCnt Mall",
                "url": "https://jpg.nyctmc.org/cctv145.jpg"
            },
            {
                "id": "1072",
                "name": "Woodhaven Blvd @ Hoffman Dr",
                "url": "https://jpg.nyctmc.org/cctv950.jpg"
            }
        ]
    },
    {
        "coord": [40.744584, -73.928866],
        "cams": [
            {
                "id": "1007",
                "name": "Queens Blvd @ 36 St",
                "url": "https://jpg.nyctmc.org/cctv57.jpg"
            },
            {
                "id": "921",
                "name": "Queens Blvd @ 39 St - East",
                "url": "https://jpg.nyctmc.org/cctv810.jpg"
            }
        ]
    },
    {
        "coord": [40.743075, -73.916846],
        "cams": [
            {
                "id": "1027",
                "name": "Queens Blvd @ 48 St",
                "url": "https://jpg.nyctmc.org/cctv913.jpg"
            },
            {
                "id": "1165",
                "name": "Roosevelt Ave @ 50 St",
                "url": "https://jpg.nyctmc.org/cctv1036.jpg"
            }
        ]
    },
    {
        "coord": [40.7489478, -73.9373769],
        "cams": [
            {
                "id": "726",
                "name": "Queens Blvd @ Jackson Ave",
                "url": "https://jpg.nyctmc.org/cctv675.jpg"
            },
            {
                "id": "737",
                "name": "Queens Plaza N @ Northern Blvd",
                "url": "https://jpg.nyctmc.org/cctv685.jpg"
            },
            {
                "id": "215",
                "name": "Queens Plaza North @ 2811 (Westside)",
                "url": "https://jpg.nyctmc.org/cctv54.jpg"
            }
        ]
    },
    {
        "coord": [40.7460324, -73.9344491],
        "cams": [
            {
                "id": "728",
                "name": "Queens Blvd @ Skillman",
                "url": "https://jpg.nyctmc.org/cctv677.jpg"
            }
        ]
    },
    {
        "coord": [40.743316, -73.921505],
        "cams": [
            {
                "id": "1093",
                "name": "Queens Blvd E/B @ 43 St",
                "url": "https://jpg.nyctmc.org/cctv971.jpg"
            }
        ]
    },
    {
        "coord": [40.672635, -73.785637],
        "cams": [
            {
                "id": "833",
                "name": "Rockaway Blvd @ Baisley Blvd",
                "url": "https://jpg.nyctmc.org/cctv727.jpg"
            }
        ]
    },
    {
        "coord": [40.640648, -73.743377],
        "cams": [
            {
                "id": "837",
                "name": "Rockaway Blvd @ Brookville Blvd",
                "url": "https://jpg.nyctmc.org/cctv731.jpg"
            }
        ]
    },
    {
        "coord": [40.63702097456225, -73.74043371586913],
        "cams": [
            {
                "id": "714",
                "name": "Rockaway Blvd @ Division St",
                "url": "https://jpg.nyctmc.org/cctv663.jpg"
            }
        ]
    },
    {
        "coord": [40.659656, -73.773968],
        "cams": [
            {
                "id": "843",
                "name": "Rockaway Blvd @ Farmers Blvd",
                "url": "https://jpg.nyctmc.org/cctv736.jpg"
            }
        ]
    },
    {
        "coord": [40.656274, -73.767364],
        "cams": [
            {
                "id": "836",
                "name": "Rockaway Blvd @ Guy Brewer Blvd",
                "url": "https://jpg.nyctmc.org/cctv730.jpg"
            }
        ]
    },
    {
        "coord": [40.6668, -73.779833],
        "cams": [
            {
                "id": "842",
                "name": "Rockaway Blvd @ S. Conduit Ave",
                "url": "https://jpg.nyctmc.org/cctv735.jpg"
            }
        ]
    },
    {
        "coord": [40.674354, -73.801268],
        "cams": [
            {
                "id": "831",
                "name": "Rockaway Blvd @ Van Wyck Expy E S/R",
                "url": "https://jpg.nyctmc.org/cctv725.jpg"
            },
            {
                "id": "830",
                "name": "Rockaway Blvd @ Van Wyck Expy W S/R",
                "url": "https://jpg.nyctmc.org/cctv724.jpg"
            },
            {
                "id": "568",
                "name": "Van Wyck Expwy @ Alwick Rd SB",
                "url": "https://jpg.nyctmc.org/cctv582.jpg"
            },
            {
                "id": "574",
                "name": "Van Wyck Expwy @ Rockaway Blvd.",
                "url": "https://jpg.nyctmc.org/cctv583.jpg"
            }
        ]
    },
    {
        "coord": [40.747351, -73.8867],
        "cams": [
            {
                "id": "1166",
                "name": "Roosevelt Ave @ 79St",
                "url": "https://jpg.nyctmc.org/cctv1037.jpg"
            }
        ]
    },
    {
        "coord": [40.746808, -73.891632],
        "cams": [
            {
                "id": "1168",
                "name": "Roosevelt Ave @ Broadway & \u00a074 st",
                "url": "https://jpg.nyctmc.org/cctv1039.jpg"
            }
        ]
    },
    {
        "coord": [40.761617, -73.822077],
        "cams": [
            {
                "id": "886",
                "name": "Roosevelt Ave @ Parsons Blvd",
                "url": "https://jpg.nyctmc.org/cctv780.jpg"
            }
        ]
    },
    {
        "coord": [40.665993, -73.78955],
        "cams": [
            {
                "id": "834",
                "name": "S Conduit Ave @ 150 St",
                "url": "https://jpg.nyctmc.org/cctv728.jpg"
            }
        ]
    },
    {
        "coord": [40.69918612299095, -73.98476600646973],
        "cams": [
            {
                "id": "425",
                "name": "Sands St @ BQE Ent",
                "url": "https://jpg.nyctmc.org/cctv315.jpg"
            }
        ]
    },
    {
        "coord": [40.843935, -73.895622],
        "cams": [
            {
                "id": "1058",
                "name": "SB_at_Arthur AveEx3",
                "url": "https://jpg.nyctmc.org/cctv944.jpg"
            }
        ]
    },
    {
        "coord": [40.82484, -73.836742],
        "cams": [
            {
                "id": "1051",
                "name": "SB_at_Lafayette_Ave-Ex18",
                "url": "https://jpg.nyctmc.org/cctv936.jpg"
            }
        ]
    },
    {
        "coord": [40.860857, -73.828593],
        "cams": [
            {
                "id": "1055",
                "name": "SB_at_NET-Ex4",
                "url": "https://jpg.nyctmc.org/cctv940.jpg"
            }
        ]
    },
    {
        "coord": [40.607106, -74.060997],
        "cams": [
            {
                "id": "1071",
                "name": "School Rd @ Bay Ave",
                "url": "https://jpg.nyctmc.org/cctv949.jpg"
            }
        ]
    },
    {
        "coord": [40.596501, -73.744193],
        "cams": [
            {
                "id": "855",
                "name": "Seagirt Blvd @ B 9 St",
                "url": "https://jpg.nyctmc.org/cctv749.jpg"
            }
        ]
    },
    {
        "coord": [40.830583, -73.885398],
        "cams": [
            {
                "id": "1025",
                "name": "Sheridan Expwy (SHE-01) SB @ Jennings St",
                "url": "https://jpg.nyctmc.org/cctv912.jpg"
            }
        ]
    },
    {
        "coord": [40.614885, -74.157435],
        "cams": [
            {
                "id": "112",
                "name": "SIE @ Richmond Ave",
                "url": "https://jpg.nyctmc.org/cctv83.jpg"
            }
        ]
    },
    {
        "coord": [40.701797, -74.011144],
        "cams": [
            {
                "id": "344",
                "name": "South St @ Broad St",
                "url": "https://jpg.nyctmc.org/cctv210.jpg"
            },
            {
                "id": "985",
                "name": "Water St @ Whitehall",
                "url": "https://jpg.nyctmc.org/cctv873.jpg"
            }
        ]
    },
    {
        "coord": [40.7092715173956, -73.99154663085938],
        "cams": [
            {
                "id": "438",
                "name": "South Street @ Pike Street",
                "url": "https://jpg.nyctmc.org/cctv328.jpg"
            }
        ]
    },
    {
        "coord": [40.718516, -73.735207],
        "cams": [
            {
                "id": "744",
                "name": "Springfield Ave @ Jamaica Ave",
                "url": "https://jpg.nyctmc.org/cctv692.jpg"
            }
        ]
    },
    {
        "coord": [40.680209, -73.753356],
        "cams": [
            {
                "id": "743",
                "name": "Springfield Blvd @ Merrick Blvd",
                "url": "https://jpg.nyctmc.org/cctv691.jpg"
            }
        ]
    },
    {
        "coord": [40.810107, -73.952585],
        "cams": [
            {
                "id": "740",
                "name": "St Nicholas Ave @ 125 St",
                "url": "https://jpg.nyctmc.org/cctv688.jpg"
            }
        ]
    },
    {
        "coord": [40.824429, -73.944747],
        "cams": [
            {
                "id": "532",
                "name": "St Nicholas Ave @ 145 St",
                "url": "https://jpg.nyctmc.org/cctv476.jpg"
            }
        ]
    },
    {
        "coord": [40.849657, -73.933675],
        "cams": [
            {
                "id": "533",
                "name": "St Nicholas Ave @ 181 St",
                "url": "https://jpg.nyctmc.org/cctv477.jpg"
            }
        ]
    },
    {
        "coord": [40.596706, -73.985239],
        "cams": [
            {
                "id": "901",
                "name": "Stillwell Ave @ 86 St",
                "url": "https://jpg.nyctmc.org/cctv789.jpg"
            }
        ]
    },
    {
        "coord": [40.575565, -73.981202],
        "cams": [
            {
                "id": "856",
                "name": "Stillwell Ave @ Surf Ave",
                "url": "https://jpg.nyctmc.org/cctv750.jpg"
            }
        ]
    },
    {
        "coord": [40.735226, -73.990946],
        "cams": [
            {
                "id": "535",
                "name": "Union Sq @ 14 St",
                "url": "https://jpg.nyctmc.org/cctv474.jpg"
            }
        ]
    },
    {
        "coord": [40.743982, -73.717583],
        "cams": [
            {
                "id": "745",
                "name": "Union tpke @ Little Neck Pkwy",
                "url": "https://jpg.nyctmc.org/cctv693.jpg"
            }
        ]
    },
    {
        "coord": [40.741099, -73.9343],
        "cams": [
            {
                "id": "1119",
                "name": "Van Dam St @ 48 Ave",
                "url": "https://jpg.nyctmc.org/cctv996.jpg"
            },
            {
                "id": "1142",
                "name": "Van Dam St @ 48 Ave",
                "url": "https://jpg.nyctmc.org/cctv1018.jpg"
            },
            {
                "id": "1120",
                "name": "Van Dam St Bet. 48 Ave & Hunter Pt",
                "url": "https://jpg.nyctmc.org/cctv997.jpg"
            },
            {
                "id": "1143",
                "name": "Van Dam St Bet. 48 Ave & Hunter Pt",
                "url": "https://jpg.nyctmc.org/cctv1019.jpg"
            }
        ]
    },
    {
        "coord": [40.693773, -73.81193],
        "cams": [
            {
                "id": "584",
                "name": "Van Wyck Expwy @ 101  Ave SB",
                "url": "https://jpg.nyctmc.org/cctv590.jpg"
            },
            {
                "id": "582",
                "name": "Van Wyck Expwy @ 101 Ave NB",
                "url": "https://jpg.nyctmc.org/cctv589.jpg"
            }
        ]
    },
    {
        "coord": [40.687341, -73.807777],
        "cams": [
            {
                "id": "581",
                "name": "Van Wyck Expwy @ 109 Ave",
                "url": "https://jpg.nyctmc.org/cctv588.jpg"
            }
        ]
    },
    {
        "coord": [40.684474, -73.806756],
        "cams": [
            {
                "id": "579",
                "name": "Van Wyck Expwy @ 111 Ave",
                "url": "https://jpg.nyctmc.org/cctv587.jpg"
            }
        ]
    },
    {
        "coord": [40.669369, -73.80159],
        "cams": [
            {
                "id": "562",
                "name": "Van Wyck Expwy @ 133 Ave SB",
                "url": "https://jpg.nyctmc.org/cctv581.jpg"
            },
            {
                "id": "955",
                "name": "VWE-04-NB_at_133rd_Ave-Ex1",
                "url": "https://jpg.nyctmc.org/cctv843.jpg"
            }
        ]
    },
    {
        "coord": [40.706768, -73.819027],
        "cams": [
            {
                "id": "590",
                "name": "Van Wyck Expwy @ 87 Ave",
                "url": "https://jpg.nyctmc.org/cctv594.jpg"
            }
        ]
    },
    {
        "coord": [40.699832, -73.814823],
        "cams": [
            {
                "id": "586",
                "name": "Van Wyck Expwy @ 91 Ave",
                "url": "https://jpg.nyctmc.org/cctv592.jpg"
            },
            {
                "id": "585",
                "name": "Van Wyck Expwy @ Atlantic Ave",
                "url": "https://jpg.nyctmc.org/cctv591.jpg"
            }
        ]
    },
    {
        "coord": [40.751959, -73.83615],
        "cams": [
            {
                "id": "926",
                "name": "Van Wyck Expwy @ Avery Ave",
                "url": "https://jpg.nyctmc.org/cctv815.jpg"
            }
        ]
    },
    {
        "coord": [40.677796, -73.80354],
        "cams": [
            {
                "id": "575",
                "name": "Van Wyck Expwy @ Foch Blvd. SB",
                "url": "https://jpg.nyctmc.org/cctv585.jpg"
            },
            {
                "id": "678",
                "name": "VWE08 NB at Foch Blvd - Ex2",
                "url": "https://jpg.nyctmc.org/cctv584.jpg"
            }
        ]
    },
    {
        "coord": [40.716877, -73.826497],
        "cams": [
            {
                "id": "594",
                "name": "Van Wyck Expwy @ GCP/Interchange",
                "url": "https://jpg.nyctmc.org/cctv597.jpg"
            },
            {
                "id": "958",
                "name": "VWE-26-NB_at_GCP-Intr.-Ex14",
                "url": "https://jpg.nyctmc.org/cctv846.jpg"
            }
        ]
    },
    {
        "coord": [40.703875, -73.8167],
        "cams": [
            {
                "id": "587",
                "name": "Van Wyck Expwy @ Hillside Ave",
                "url": "https://jpg.nyctmc.org/cctv593.jpg"
            }
        ]
    },
    {
        "coord": [40.666235, -73.801711],
        "cams": [
            {
                "id": "391",
                "name": "Van Wyck Expy @ S Conduit Ave LL",
                "url": "https://jpg.nyctmc.org/cctv281.jpg"
            },
            {
                "id": "954",
                "name": "VWE-02-NB_at_S.Cnduit_Av_UL-Ex1",
                "url": "https://jpg.nyctmc.org/cctv842.jpg"
            }
        ]
    },
    {
        "coord": [40.637748, -74.076018],
        "cams": [
            {
                "id": "155",
                "name": "Victory Blvd @ Bay St",
                "url": "https://jpg.nyctmc.org/cctv171.jpg"
            }
        ]
    },
    {
        "coord": [40.635735, -74.083777],
        "cams": [
            {
                "id": "154",
                "name": "Victory Blvd @ Jersey St",
                "url": "https://jpg.nyctmc.org/cctv170.jpg"
            }
        ]
    },
    {
        "coord": [40.608768, -74.153616],
        "cams": [
            {
                "id": "340",
                "name": "Victory Blvd WOF Campus Dr",
                "url": "https://jpg.nyctmc.org/cctv232.jpg"
            }
        ]
    },
    {
        "coord": [40.722917, -73.827542],
        "cams": [
            {
                "id": "959",
                "name": "VWE-27-NB_at_73rd_Terrace-Ex11",
                "url": "https://jpg.nyctmc.org/cctv847.jpg"
            }
        ]
    },
    {
        "coord": [40.762527, -73.839458],
        "cams": [
            {
                "id": "961",
                "name": "VWE-32-NB_at_Northern_Blvd-Ex13",
                "url": "https://jpg.nyctmc.org/cctv849.jpg"
            }
        ]
    },
    {
        "coord": [40.70605086387406, -74.00485038757324],
        "cams": [
            {
                "id": "339",
                "name": "Water St @ John St",
                "url": "https://jpg.nyctmc.org/cctv213.jpg"
            }
        ]
    },
    {
        "coord": [40.712875, -73.97],
        "cams": [
            {
                "id": "1103",
                "name": "WBB #25 SIR 4 @ Bklyn Twr",
                "url": "https://jpg.nyctmc.org/cctv980.jpg"
            },
            {
                "id": "1125",
                "name": "WBB #25 SIR 4 @ Bklyn Twr",
                "url": "https://jpg.nyctmc.org/cctv1002.jpg"
            },
            {
                "id": "1104",
                "name": "WBB #9 SIR 3 @ Mid Span",
                "url": "https://jpg.nyctmc.org/cctv981.jpg"
            },
            {
                "id": "1126",
                "name": "WBB #9 SIR 3 @ Mid Span",
                "url": "https://jpg.nyctmc.org/cctv1003.jpg"
            },
            {
                "id": "458",
                "name": "WBB-18 @ SOR Cntr Span",
                "url": "https://jpg.nyctmc.org/cctv374.jpg"
            },
            {
                "id": "1163",
                "name": "WBB-26 SIR @ Kent Ave",
                "url": "https://jpg.nyctmc.org/cctv1034.jpg"
            },
            {
                "id": "1080",
                "name": "WBB-7 NIR West of Bklyn Twr",
                "url": "https://jpg.nyctmc.org/cctv958.jpg"
            }
        ]
    },
    {
        "coord": [40.717485, -73.985361],
        "cams": [
            {
                "id": "1091",
                "name": "WBB - 6A South Rdwy @ Delancey St & Clinton St",
                "url": "https://jpg.nyctmc.org/cctv969.jpg"
            },
            {
                "id": "456",
                "name": "WBB-6 North Rdwy @ Delancy St and Clinton St",
                "url": "https://jpg.nyctmc.org/cctv361.jpg"
            }
        ]
    },
    {
        "coord": [40.7120848, -73.9670222],
        "cams": [
            {
                "id": "1081",
                "name": "WBB-8 NIR Bklyn Anch./Kent Av",
                "url": "https://jpg.nyctmc.org/cctv959.jpg"
            }
        ]
    },
    {
        "coord": [40.829767, -73.834824],
        "cams": [
            {
                "id": "1050",
                "name": "WB_at_CBX-Hutch_Int-EX6A",
                "url": "https://jpg.nyctmc.org/cctv935.jpg"
            }
        ]
    },
    {
        "coord": [40.827872, -73.912005],
        "cams": [
            {
                "id": "1036",
                "name": "Webster Ave @ E 165",
                "url": "https://jpg.nyctmc.org/cctv922.jpg"
            }
        ]
    },
    {
        "coord": [40.851889, -73.898344],
        "cams": [
            {
                "id": "1034",
                "name": "Webster Ave @ E 180 St",
                "url": "https://jpg.nyctmc.org/cctv920.jpg"
            }
        ]
    },
    {
        "coord": [40.726958, -73.999928],
        "cams": [
            {
                "id": "718",
                "name": "West Broadway @ West Houston St",
                "url": "https://jpg.nyctmc.org/cctv667.jpg"
            }
        ]
    },
    {
        "coord": [40.728739, -74.007137],
        "cams": [
            {
                "id": "716",
                "name": "West Houston @ Hudson St",
                "url": "https://jpg.nyctmc.org/cctv665.jpg"
            }
        ]
    },
    {
        "coord": [40.590118, -74.193442],
        "cams": [
            {
                "id": "702",
                "name": "West Shore Expy @ Victory Blvd",
                "url": "https://jpg.nyctmc.org/cctv653.jpg"
            }
        ]
    },
    {
        "coord": [40.729832, -74.010658],
        "cams": [
            {
                "id": "292",
                "name": "West St @ Clarkson",
                "url": "https://jpg.nyctmc.org/cctv189.jpg"
            },
            {
                "id": "715",
                "name": "West St @ West Houston St",
                "url": "https://jpg.nyctmc.org/cctv664.jpg"
            }
        ]
    },
    {
        "coord": [40.714443756177076, -74.01326179504395],
        "cams": [
            {
                "id": "401",
                "name": "West St @ Murray",
                "url": "https://jpg.nyctmc.org/cctv71.jpg"
            },
            {
                "id": "1227",
                "name": "West st and Chambers",
                "url": "https://jpg.nyctmc.org/cctv1120.jpg"
            },
            {
                "id": "1228",
                "name": "West st and Fulton",
                "url": "https://jpg.nyctmc.org/cctv1121.jpg"
            }
        ]
    },
    {
        "coord": [40.704944, -74.017341],
        "cams": [
            {
                "id": "1230",
                "name": "West st and Battery place",
                "url": "https://jpg.nyctmc.org/cctv1123.jpg"
            }
        ]
    },
    {
        "coord": [40.786576, -73.824043],
        "cams": [
            {
                "id": "602",
                "name": "Whitestone Expwy @ 14 Ave (Median)",
                "url": "https://jpg.nyctmc.org/cctv602.jpg"
            }
        ]
    },
    {
        "coord": [40.776191, -73.828214],
        "cams": [
            {
                "id": "601",
                "name": "Whitestone Expwy @ 25 Rd (Median)",
                "url": "https://jpg.nyctmc.org/cctv601.jpg"
            }
        ]
    },
    {
        "coord": [40.772841, -73.830771],
        "cams": [
            {
                "id": "1231",
                "name": "Whitestone Expy @ 28 Rd N of Linden Pl",
                "url": "https://jpg.nyctmc.org/cctv1196.jpg"
            }
        ]
    },
    {
        "coord": [40.6841, -73.8463],
        "cams": [
            {
                "id": "1077",
                "name": "Woodhaven Blvd @ 101 Ave",
                "url": "https://jpg.nyctmc.org/cctv955.jpg"
            },
            {
                "id": "1076",
                "name": "Woodhaven Blvd @ 97 Ave",
                "url": "https://jpg.nyctmc.org/cctv954.jpg"
            }
        ]
    },
    {
        "coord": [40.689827, -73.850018],
        "cams": [
            {
                "id": "1075",
                "name": "Woodhaven Blvd @ 91 Ave",
                "url": "https://jpg.nyctmc.org/cctv953.jpg"
            }
        ]
    },
    {
        "coord": [40.727879, -73.870974],
        "cams": [
            {
                "id": "905",
                "name": "Woodhaven Blvd @ Dry Harbor Rd",
                "url": "https://jpg.nyctmc.org/cctv793.jpg"
            }
        ]
    },
    {
        "coord": [40.720287, -73.865571],
        "cams": [
            {
                "id": "796",
                "name": "Woodhaven Blvd @ Furmanville Ave",
                "url": "https://jpg.nyctmc.org/cctv703.jpg"
            }
        ]
    },
    {
        "coord": [40.694, -73.852],
        "cams": [
            {
                "id": "708",
                "name": "Woodhaven Blvd @ Jamaica Ave",
                "url": "https://jpg.nyctmc.org/cctv659.jpg"
            }
        ]
    },
    {
        "coord": [40.702613, -73.855269],
        "cams": [
            {
                "id": "792",
                "name": "Woodhaven Blvd @ Myrtle Ave",
                "url": "https://jpg.nyctmc.org/cctv701.jpg"
            }
        ]
    },
    {
        "coord": [40.6975306, -73.8527054],
        "cams": [
            {
                "id": "1074",
                "name": "Woodhaven Blvd @ Park Lane",
                "url": "https://jpg.nyctmc.org/cctv952.jpg"
            }
        ]
    },
    {
        "coord": [40.70561, -73.8582],
        "cams": [
            {
                "id": "709",
                "name": "Woodhaven Blvd @ Union Tpke",
                "url": "https://jpg.nyctmc.org/cctv660.jpg"
            }
        ]
    },
    {
        "coord": [40.71437869906487, -74.00197505950928],
        "cams": [
            {
                "id": "330",
                "name": "Worth St @ Centre St",
                "url": "https://jpg.nyctmc.org/cctv217.jpg"
            },
            {
                "id": "432",
                "name": "Worth Street @ Lafayette Street",
                "url": "https://jpg.nyctmc.org/cctv322.jpg"
            }
        ]
    },
    {
        "coord": [40.71275225059959, -73.99828433990479],
        "cams": [
            {
                "id": "433",
                "name": "Worth Street @ Bowery",
                "url": "https://jpg.nyctmc.org/cctv323.jpg"
            }
        ]
    }
];
