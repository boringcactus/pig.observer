const DEFAULTS = ["420"];
const MANUAL_CACHE_BUST = false;
const CAMERAS = {
    "NYC": [{
        "id": "368",
        "name": "1 Ave @ 110 St",
        "url": "http://207.251.86.238/cctv261.jpg"
    }, {
        "id": "360",
        "name": "1 Ave @ 124 St",
        "url": "http://207.251.86.238/cctv254.jpg"
    }, {
        "id": "1189",
        "name": "1 Ave @ 14 St",
        "url": "http://207.251.86.238/cctv1083.jpg"
    }, {
        "id": "361",
        "name": "1 Ave @ 23 St",
        "url": "http://207.251.86.238/cctv253.jpg"
    }, {
        "id": "550",
        "name": "1 Ave @ 42 St",
        "url": "http://207.251.86.238/cctv490.jpg"
    }, {
        "id": "940",
        "name": "1 Ave @ 62 St",
        "url": "http://207.251.86.238/cctv827.jpg"
    }, {
        "id": "370",
        "name": "1 Ave @ 86 St",
        "url": "http://207.251.86.238/cctv263.jpg"
    }, {
        "id": "537",
        "name": "1 Ave @ 96 St",
        "url": "http://207.251.86.238/cctv644.jpg"
    }, {
        "id": "789",
        "name": "1 Ave @ E 14 St",
        "url": "http://207.251.86.238/cctv696.jpg"
    }, {
        "id": "1028",
        "name": "10 Ave @ 42 St",
        "url": "http://207.251.86.238/cctv914.jpg"
    }, {
        "id": "828",
        "name": "10 Ave @ 57 St",
        "url": "http://207.251.86.238/cctv722.jpg"
    }, {
        "id": "326",
        "name": "11 Ave @ 34 ST",
        "url": "http://207.251.86.238/cctv200.jpg"
    }, {
        "id": "192",
        "name": "11 Ave @ 42 St",
        "url": "http://207.251.86.238/cctv31.jpg"
    }, {
        "id": "548",
        "name": "11 Ave/Rt 9A @ 14 St",
        "url": "http://207.251.86.238/cctv489.jpg"
    }, {
        "id": "545",
        "name": "12 Ave @ 34 St",
        "url": "http://207.251.86.238/cctv486.jpg"
    }, {
        "id": "544",
        "name": "12 Ave @ 42 St",
        "url": "http://207.251.86.238/cctv485.jpg"
    }, {
        "id": "543",
        "name": "12 Ave @ 57 St",
        "url": "http://207.251.86.238/cctv484.jpg"
    }, {
        "id": "247",
        "name": "2 Ave @ 125 St",
        "url": "http://207.251.86.238/cctv102.jpg"
    }, {
        "id": "794",
        "name": "2 Ave @ 23 St",
        "url": "http://207.251.86.238/cctv699.jpg"
    }, {
        "id": "165",
        "name": "2 Ave @ 36 St-Midtown Tunnel",
        "url": "http://207.251.86.238/cctv4.jpg"
    }, {
        "id": "551",
        "name": "2 Ave @ 42 St",
        "url": "http://207.251.86.238/cctv491.jpg"
    }, {
        "id": "366",
        "name": "2 Ave @ 49 St",
        "url": "http://207.251.86.238/cctv258.jpg"
    }, {
        "id": "472",
        "name": "2 Ave @ 58 St",
        "url": "http://207.251.86.238/cctv400.jpg"
    }, {
        "id": "164",
        "name": "2 Ave @ 59 St (QBB)",
        "url": "http://207.251.86.238/cctv3.jpg"
    }, {
        "id": "539",
        "name": "2 Ave @ 72 St",
        "url": "http://207.251.86.238/cctv480.jpg"
    }, {
        "id": "934",
        "name": "2 Ave @ 74 St",
        "url": "http://207.251.86.238/cctv822.jpg"
    }, {
        "id": "846",
        "name": "2 Ave @ E 14 St",
        "url": "http://207.251.86.238/cctv740.jpg"
    }, {
        "id": "328",
        "name": "207 ST @ 9 Ave",
        "url": "http://207.251.86.238/cctv203.jpg"
    }, {
        "id": "1190",
        "name": "3 Ave @ 14 St",
        "url": "http://207.251.86.238/cctv1084.jpg"
    }, {
        "id": "495",
        "name": "3 Ave @ 23 St",
        "url": "http://207.251.86.238/cctv430.jpg"
    }, {
        "id": "403",
        "name": "3 AVE @ 34 ST",
        "url": "http://207.251.86.238/cctv431.jpg"
    }, {
        "id": "398",
        "name": "3 Ave @ 42 St",
        "url": "http://207.251.86.238/cctv290.jpg"
    }, {
        "id": "410",
        "name": "3 Ave @ 49 St",
        "url": "http://207.251.86.238/cctv429.jpg"
    }, {
        "id": "399",
        "name": "3 Ave @ 57 St",
        "url": "http://207.251.86.238/cctv428.jpg"
    }, {
        "id": "845",
        "name": "3 Ave @ E 14 St",
        "url": "http://207.251.86.238/cctv739.jpg"
    }, {
        "id": "1111",
        "name": "3 Ave @ E 163 St",
        "url": "http://207.251.86.238/cctv988.jpg"
    }, {
        "id": "1134",
        "name": "3 Ave @ E 163 St",
        "url": "http://207.251.86.238/cctv1010.jpg"
    }, {
        "id": "1226",
        "name": "3 Ave @ E 86 St",
        "url": "http://207.251.86.238/cctv1119.jpg"
    }, {
        "id": "1039",
        "name": "3rd Av. @ E 156 St.",
        "url": "http://207.251.86.238/cctv925.jpg"
    }, {
        "id": "1030",
        "name": "4 Ave @ Shore Rd",
        "url": "http://207.251.86.238/cctv916.jpg"
    }, {
        "id": "1113",
        "name": "43 Ave @ 27 St",
        "url": "http://207.251.86.238/cctv990.jpg"
    }, {
        "id": "1136",
        "name": "43 Ave @ 27 St",
        "url": "http://207.251.86.238/cctv1012.jpg"
    }, {
        "id": "1160",
        "name": "46 St Bet. 5 Ave & Madison Ave",
        "url": "http://207.251.86.238/cctv1031.jpg"
    }, {
        "id": "1086",
        "name": "47 St Bet. 5 Ave @ Madison Ave- Manhattan",
        "url": "http://207.251.86.238/cctv964.jpg"
    }, {
        "id": "168",
        "name": "5 Ave @ 23 St",
        "url": "http://207.251.86.238/cctv7.jpg"
    }, {
        "id": "415",
        "name": "5 Ave @ 34 St",
        "url": "http://207.251.86.238/cctv305.jpg"
    }, {
        "id": "523",
        "name": "5 Ave @ 42 St",
        "url": "http://207.251.86.238/cctv466.jpg"
    }, {
        "id": "1088",
        "name": "5 Ave @ 46 St",
        "url": "http://207.251.86.238/cctv966.jpg"
    }, {
        "id": "169",
        "name": "5 Ave @ 49 St",
        "url": "http://207.251.86.238/cctv8.jpg"
    }, {
        "id": "409",
        "name": "5 Ave @ 57 St",
        "url": "http://207.251.86.238/cctv299.jpg"
    }, {
        "id": "1184",
        "name": "5 Ave @ 59 St",
        "url": "http://207.251.86.238/cctv183.jpg"
    }, {
        "id": "906",
        "name": "5 Ave @ 65 St",
        "url": "http://207.251.86.238/cctv794.jpg"
    }, {
        "id": "907",
        "name": "5 Ave @ 66 St",
        "url": "http://207.251.86.238/cctv795.jpg"
    }, {
        "id": "1158",
        "name": "5 Ave @ 84 St",
        "url": "http://207.251.86.238/cctv1029.jpg"
    }, {
        "id": "1159",
        "name": "5 Ave @ 86 St",
        "url": "http://207.251.86.238/cctv1030.jpg"
    }, {
        "id": "908",
        "name": "5 Ave @ 96 St",
        "url": "http://207.251.86.238/cctv796.jpg"
    }, {
        "id": "1164",
        "name": "50 St Btwn\u00a08 Ave & Broadway",
        "url": "http://207.251.86.238/cctv1035.jpg"
    }, {
        "id": "509",
        "name": "6 Ave @ 14 St",
        "url": "http://207.251.86.238/cctv446.jpg"
    }, {
        "id": "511",
        "name": "6 Ave @ 23 St",
        "url": "http://207.251.86.238/cctv448.jpg"
    }, {
        "id": "170",
        "name": "6 Ave @ 34 St",
        "url": "http://207.251.86.238/cctv9.jpg"
    }, {
        "id": "173",
        "name": "6 Ave @ 42 St",
        "url": "http://207.251.86.238/cctv12.jpg"
    }, {
        "id": "414",
        "name": "6 Ave @ 57 St",
        "url": "http://207.251.86.238/cctv304.jpg"
    }, {
        "id": "473",
        "name": "6 Ave @ 58 St",
        "url": "http://207.251.86.238/cctv401.jpg"
    }, {
        "id": "717",
        "name": "6 Ave @ West Houston St",
        "url": "http://207.251.86.238/cctv666.jpg"
    }, {
        "id": "529",
        "name": "7 Ave @ 145 St",
        "url": "http://207.251.86.238/cctv471.jpg"
    }, {
        "id": "510",
        "name": "7 Ave @ 23St",
        "url": "http://207.251.86.238/cctv447.jpg"
    }, {
        "id": "501",
        "name": "7 Ave @ 34 St",
        "url": "http://207.251.86.238/cctv440.jpg"
    }, {
        "id": "891",
        "name": "7 Ave @ 43 St",
        "url": "http://207.251.86.238/cctv782.jpg"
    }, {
        "id": "416",
        "name": "7 Ave @ 49 St",
        "url": "http://207.251.86.238/cctv439.jpg"
    }, {
        "id": "1090",
        "name": "7 Ave @ 54 St",
        "url": "http://207.251.86.238/cctv968.jpg"
    }, {
        "id": "504",
        "name": "7 Ave @ 57 St",
        "url": "http://207.251.86.238/cctv444.jpg"
    }, {
        "id": "503",
        "name": "8 Ave @ 14 St",
        "url": "http://207.251.86.238/cctv443.jpg"
    }, {
        "id": "180",
        "name": "8 Ave @ 34 St",
        "url": "http://207.251.86.238/cctv19.jpg"
    }, {
        "id": "181",
        "name": "8 Ave @ 42 St",
        "url": "http://207.251.86.238/cctv20.jpg"
    }, {
        "id": "420",
        "name": "8 Ave @ 49 St",
        "url": "http://207.251.86.238/cctv437.jpg"
    }, {
        "id": "1183",
        "name": "8 Ave @ 57 St",
        "url": "http://207.251.86.238/cctv266.jpg"
    }, {
        "id": "179",
        "name": "8 Ave @ Columbus Cr South",
        "url": "http://207.251.86.238/cctv18.jpg"
    }, {
        "id": "500",
        "name": "8th Ave @ 23 St",
        "url": "http://207.251.86.238/cctv441.jpg"
    }, {
        "id": "229",
        "name": "9 Ave @ 23 St",
        "url": "http://207.251.86.238/cctv355.jpg"
    }, {
        "id": "178",
        "name": "9 Ave @ 34 St",
        "url": "http://207.251.86.238/cctv352.jpg"
    }, {
        "id": "507",
        "name": "9 Ave @ 37 St",
        "url": "http://207.251.86.238/cctv353.jpg"
    }, {
        "id": "506",
        "name": "9 Ave @ 42 St",
        "url": "http://207.251.86.238/cctv351.jpg"
    }, {
        "id": "502",
        "name": "9 Ave @ 49 St",
        "url": "http://207.251.86.238/cctv350.jpg"
    }, {
        "id": "508",
        "name": "9 Ave @ 57 St",
        "url": "http://207.251.86.238/cctv349.jpg"
    }, {
        "id": "1037",
        "name": "Adam C. Powell Blvd @ 110 St/CPN",
        "url": "http://207.251.86.238/cctv923.jpg"
    }, {
        "id": "917",
        "name": "Adams St @ Tillary St",
        "url": "http://207.251.86.238/cctv805.jpg"
    }, {
        "id": "1194",
        "name": "Allan St (1 Ave) @ Houston St (B)",
        "url": "http://207.251.86.238/cctv1088.jpg"
    }, {
        "id": "1117",
        "name": "Allen @ Delancey St",
        "url": "http://207.251.86.238/cctv994.jpg"
    }, {
        "id": "1196",
        "name": "Allen St @ Delancey St (B)",
        "url": "http://207.251.86.238/cctv1090.jpg"
    }, {
        "id": "248",
        "name": "Amsterdam @ 178 St",
        "url": "http://207.251.86.238/cctv112.jpg"
    }, {
        "id": "526",
        "name": "Amsterdam @ 72 St",
        "url": "http://207.251.86.238/cctv468.jpg"
    }, {
        "id": "527",
        "name": "Amsterdam @ 86 St",
        "url": "http://207.251.86.238/cctv469.jpg"
    }, {
        "id": "741",
        "name": "Amsterdam Ave @ 125 St",
        "url": "http://207.251.86.238/cctv689.jpg"
    }, {
        "id": "847",
        "name": "Amsterdam Ave @ 181 St",
        "url": "http://207.251.86.238/cctv741.jpg"
    }, {
        "id": "514",
        "name": "Amsterdam Ave @ 60 St",
        "url": "http://207.251.86.238/cctv455.jpg"
    }, {
        "id": "973",
        "name": "Astoria Blvd @ 108 St",
        "url": "http://207.251.86.238/cctv860.jpg"
    }, {
        "id": "492",
        "name": "Atlantic Ave @ BQE",
        "url": "http://207.251.86.238/cctv425.jpg"
    }, {
        "id": "1112",
        "name": "Atlantic Ave @ Fort Greene Pl",
        "url": "http://207.251.86.238/cctv989.jpg"
    }, {
        "id": "1135",
        "name": "Atlantic Ave @ Fort Greene Pl",
        "url": "http://207.251.86.238/cctv1011.jpg"
    }, {
        "id": "172",
        "name": "Baxter St @ Canal Street",
        "url": "http://207.251.86.238/cctv11.jpg"
    }, {
        "id": "1006",
        "name": "BB - 28 North West Manhattan Tower",
        "url": "http://207.251.86.238/cctv894.jpg"
    }, {
        "id": "993",
        "name": "BB - 47 North Rdwy @ West of Bklyn Twr",
        "url": "http://207.251.86.238/cctv880.jpg"
    }, {
        "id": "994",
        "name": "BB - 50 South Rdwy @ West of Bklyn Twr",
        "url": "http://207.251.86.238/cctv881.jpg"
    }, {
        "id": "995",
        "name": "BB - 66 North Rdwy @ Above Water St/Bklyn",
        "url": "http://207.251.86.238/cctv882.jpg"
    }, {
        "id": "996",
        "name": "BB - 68 South Rdwy @ Above Water St/Bklyn",
        "url": "http://207.251.86.238/cctv883.jpg"
    }, {
        "id": "989",
        "name": "BB -21 North Rdwy @ Above South St",
        "url": "http://207.251.86.238/cctv876.jpg"
    }, {
        "id": "990",
        "name": "BB -24 South Rdwy @ Above South St",
        "url": "http://207.251.86.238/cctv877.jpg"
    }, {
        "id": "991",
        "name": "BB -39 North Rdwy @ Bridge Midspan",
        "url": "http://207.251.86.238/cctv878.jpg"
    }, {
        "id": "974",
        "name": "BB -\u00a0 71 North Rdwy @ Front St \u00a0",
        "url": "http://207.251.86.238/cctv862.jpg"
    }, {
        "id": "982",
        "name": "BB \u2013 15 North Rdwy @ Manhattan Anchorage",
        "url": "http://207.251.86.238/cctv870.jpg"
    }, {
        "id": "983",
        "name": "BB \u2013 16 South Rdwy @ Manhattan Anchorage",
        "url": "http://207.251.86.238/cctv871.jpg"
    }, {
        "id": "980",
        "name": "BB \u2013 25 North Rdwy @ West of Manhattan Twr",
        "url": "http://207.251.86.238/cctv868.jpg"
    }, {
        "id": "981",
        "name": "BB \u2013 26 South Rdwy @ West of Manhattan Twr",
        "url": "http://207.251.86.238/cctv869.jpg"
    }, {
        "id": "1032",
        "name": "BB \u2013 51A Brooklyn Tower \u2013 South Rdwy",
        "url": "http://207.251.86.238/cctv918.jpg"
    }, {
        "id": "1031",
        "name": "BB \u2013 52A Brooklyn Tower \u2013 North Rdwy",
        "url": "http://207.251.86.238/cctv917.jpg"
    }, {
        "id": "963",
        "name": "BB \u2013 64 South Rdwy @ Bklyn Twr Side Sapn",
        "url": "http://207.251.86.238/cctv861.jpg"
    }, {
        "id": "975",
        "name": "BB \u2013 72 South Rdwy @ Front St",
        "url": "http://207.251.86.238/cctv863.jpg"
    }, {
        "id": "1156",
        "name": "BB-22 BQE @ Old Fulton St",
        "url": "http://207.251.86.238/cctv709.jpg"
    }, {
        "id": "998",
        "name": "BB-27A Manhattan Tower South",
        "url": "http://207.251.86.238/cctv886.jpg"
    }, {
        "id": "999",
        "name": "BB-28A Manhattan Tower North",
        "url": "http://207.251.86.238/cctv887.jpg"
    }, {
        "id": "1000",
        "name": "BB-29 North East Manhattan Tower",
        "url": "http://207.251.86.238/cctv888.jpg"
    }, {
        "id": "1001",
        "name": "BB-30 South East Manhattan Tower",
        "url": "http://207.251.86.238/cctv889.jpg"
    }, {
        "id": "1107",
        "name": "BB-43 North Rdwy @ Center Expansion Jt",
        "url": "http://207.251.86.238/cctv984.jpg"
    }, {
        "id": "1108",
        "name": "BB-44 North Rdwy @ 350Ft West of Bklyn Twr",
        "url": "http://207.251.86.238/cctv985.jpg"
    }, {
        "id": "1131",
        "name": "BB-44 North Rdwy @ 350Ft West of Bklyn Twr",
        "url": "http://207.251.86.238/cctv1007.jpg"
    }, {
        "id": "1109",
        "name": "BB-45 South Rdwy @ 350Ft West of Bklyn Twr",
        "url": "http://207.251.86.238/cctv986.jpg"
    }, {
        "id": "1132",
        "name": "BB-45 South Rdwy @ 350Ft West of Bklyn Twr",
        "url": "http://207.251.86.238/cctv1008.jpg"
    }, {
        "id": "1110",
        "name": "BB-46 South Rdwy @ Center Expansion Jt",
        "url": "http://207.251.86.238/cctv987.jpg"
    }, {
        "id": "1002",
        "name": "BB-51 North West Brooklyn Tower",
        "url": "http://207.251.86.238/cctv890.jpg"
    }, {
        "id": "1003",
        "name": "BB-52 South West Brooklyn Tower",
        "url": "http://207.251.86.238/cctv891.jpg"
    }, {
        "id": "1004",
        "name": "BB-53 North East Brooklyn Tower",
        "url": "http://207.251.86.238/cctv892.jpg"
    }, {
        "id": "1005",
        "name": "BB-54 South East Brooklyn Tower",
        "url": "http://207.251.86.238/cctv893.jpg"
    }, {
        "id": "984",
        "name": "BB-63 North Rdwy@ Bklyn Twr East",
        "url": "http://207.251.86.238/cctv872.jpg"
    }, {
        "id": "924",
        "name": "Beach Channel Dr @ Beach 116 St",
        "url": "http://207.251.86.238/cctv813.jpg"
    }, {
        "id": "816",
        "name": "Beach Channel Dr @B 101 St",
        "url": "http://207.251.86.238/cctv712.jpg"
    }, {
        "id": "815",
        "name": "Beach Channel Dr @B 140 St",
        "url": "http://207.251.86.238/cctv711.jpg"
    }, {
        "id": "818",
        "name": "Beach Channel Dr @B 32 St",
        "url": "http://207.251.86.238/cctv714.jpg"
    }, {
        "id": "817",
        "name": "Beach Channel Dr @B 90 St",
        "url": "http://207.251.86.238/cctv713.jpg"
    }, {
        "id": "819",
        "name": "Beach Channel Dr @B Mott Ave",
        "url": "http://207.251.86.238/cctv715.jpg"
    }, {
        "id": "128",
        "name": "Belt Pkwy @ 130 St",
        "url": "http://207.251.86.238/cctv159.jpg"
    }, {
        "id": "699",
        "name": "Belt Pkwy @ 158 Ave",
        "url": "http://207.251.86.238/cctv162.jpg"
    }, {
        "id": "139",
        "name": "Belt Pkwy @ 68 St",
        "url": "http://207.251.86.238/cctv114.jpg"
    }, {
        "id": "518",
        "name": "Belt Pkwy @ Bay 8th St",
        "url": "http://207.251.86.238/cctv461.jpg"
    }, {
        "id": "443",
        "name": "Belt Pkwy @ Brookville Blvd",
        "url": "http://207.251.86.238/cctv335.jpg"
    }, {
        "id": "499",
        "name": "Belt Pkwy @ Cross Island Split",
        "url": "http://207.251.86.238/cctv333.jpg"
    }, {
        "id": "141",
        "name": "Belt Pkwy @ Erskine",
        "url": "http://207.251.86.238/cctv116.jpg"
    }, {
        "id": "132",
        "name": "Belt Pkwy @ Flatbush",
        "url": "http://207.251.86.238/cctv61.jpg"
    }, {
        "id": "140",
        "name": "Belt Pkwy @ Ocean Pkwy",
        "url": "http://207.251.86.238/cctv115.jpg"
    }, {
        "id": "496",
        "name": "Belt Pkwy @ Pennsylvania Ave",
        "url": "http://207.251.86.238/cctv434.jpg"
    }, {
        "id": "497",
        "name": "Belt Pkwy @ Springfield Blvd",
        "url": "http://207.251.86.238/cctv435.jpg"
    }, {
        "id": "918",
        "name": "Boerum Pl @ Fulton St & Joralemon St",
        "url": "http://207.251.86.238/cctv806.jpg"
    }, {
        "id": "1040",
        "name": "Boston Rd. @ E 169 St",
        "url": "http://207.251.86.238/cctv926.jpg"
    }, {
        "id": "1085",
        "name": "Bowery @ Cooper Sq & 4 St",
        "url": "http://207.251.86.238/cctv963.jpg"
    }, {
        "id": "205",
        "name": "BQE @ Hamilton Ave B-G Ramp",
        "url": "http://207.251.86.238/cctv44.jpg"
    }, {
        "id": "942",
        "name": "BQE-09-WB_at_State_St_LL-Ex27",
        "url": "http://207.251.86.238/cctv830.jpg"
    }, {
        "id": "943",
        "name": "BQE-17_E_at_Navy_St-Ex29B",
        "url": "http://207.251.86.238/cctv831.jpg"
    }, {
        "id": "944",
        "name": "BQE-23-EB_at_Division_Ave-Ex31",
        "url": "http://207.251.86.238/cctv832.jpg"
    }, {
        "id": "945",
        "name": "BQE-32-WB_at_ramp_to_LIE-Ex35",
        "url": "http://207.251.86.238/cctv833.jpg"
    }, {
        "id": "670",
        "name": "BQE33 WB at 45th St - Ex35",
        "url": "http://207.251.86.238/cctv543.jpg"
    }, {
        "id": "671",
        "name": "BQE35 EB at 61st St - Ex39",
        "url": "http://207.251.86.238/cctv544.jpg"
    }, {
        "id": "673",
        "name": "BQE40 WB at Northern Blvd - Ex41",
        "url": "http://207.251.86.238/cctv546.jpg"
    }, {
        "id": "986",
        "name": "Br Br - 19 N Rdwy @ FDR Dr",
        "url": "http://207.251.86.238/cctv874.jpg"
    }, {
        "id": "987",
        "name": "Br Br-20 S Rdwy FDR Dr",
        "url": "http://207.251.86.238/cctv875.jpg"
    }, {
        "id": "686",
        "name": "BRE05 WB at Castle Hill Ave Ex52",
        "url": "http://207.251.86.238/cctv637.jpg"
    }, {
        "id": "1106",
        "name": "Broadway @ 125 St",
        "url": "http://207.251.86.238/cctv983.jpg"
    }, {
        "id": "1128",
        "name": "Broadway @ 125 St",
        "url": "http://207.251.86.238/cctv1005.jpg"
    }, {
        "id": "937",
        "name": "Broadway @ 145 St",
        "url": "http://207.251.86.238/cctv825.jpg"
    }, {
        "id": "224",
        "name": "Broadway @ 169 Street",
        "url": "http://207.251.86.238/cctv65.jpg"
    }, {
        "id": "475",
        "name": "Broadway @ 42 St",
        "url": "http://207.251.86.238/cctv403.jpg"
    }, {
        "id": "899",
        "name": "Broadway @ 43 St",
        "url": "http://207.251.86.238/cctv787.jpg"
    }, {
        "id": "1105",
        "name": "Broadway @ 46 St",
        "url": "http://207.251.86.238/cctv982.jpg"
    }, {
        "id": "1127",
        "name": "Broadway @ 46 St",
        "url": "http://207.251.86.238/cctv1004.jpg"
    }, {
        "id": "1102",
        "name": "Broadway @ 46 St- Quad East",
        "url": "http://207.251.86.238/cctv979.jpg"
    }, {
        "id": "1099",
        "name": "Broadway @ 46 St- Quad North",
        "url": "http://207.251.86.238/cctv976.jpg"
    }, {
        "id": "1101",
        "name": "Broadway @ 46 St- Quad South",
        "url": "http://207.251.86.238/cctv978.jpg"
    }, {
        "id": "1100",
        "name": "Broadway @ 46 St- Quad West",
        "url": "http://207.251.86.238/cctv977.jpg"
    }, {
        "id": "187",
        "name": "Broadway @ 46 Street",
        "url": "http://207.251.86.238/cctv26.jpg"
    }, {
        "id": "421",
        "name": "Broadway @ 51 St",
        "url": "http://207.251.86.238/cctv438.jpg"
    }, {
        "id": "739",
        "name": "Broadway @ 96 St",
        "url": "http://207.251.86.238/cctv687.jpg"
    }, {
        "id": "351",
        "name": "Broadway @ Vesey St",
        "url": "http://207.251.86.238/cctv223.jpg"
    }, {
        "id": "452",
        "name": "Brooklyn Bridge - Ped Walk Way",
        "url": "http://207.251.86.238/cctv348.jpg"
    }, {
        "id": "175",
        "name": "Brooklyn Bridge @ Centre Street",
        "url": "http://207.251.86.238/cctv14.jpg"
    }, {
        "id": "668",
        "name": "Brooklyn Queens Expwyat Stewart Avenue",
        "url": "http://207.251.86.238/cctv541.jpg"
    }, {
        "id": "635",
        "name": "Brooklyn Queens Expy - GCP @ 31st Ave",
        "url": "http://207.251.86.238/cctv548.jpg"
    }, {
        "id": "624",
        "name": "Brooklyn Queens Expy @  Metropolitan Ave",
        "url": "http://207.251.86.238/cctv538.jpg"
    }, {
        "id": "611",
        "name": "Brooklyn Queens Expy @ Adams St",
        "url": "http://207.251.86.238/cctv530.jpg"
    }, {
        "id": "595",
        "name": "Brooklyn Queens Expy @ Atlantic Ave",
        "url": "http://207.251.86.238/cctv524.jpg"
    }, {
        "id": "620",
        "name": "Brooklyn Queens Expy @ Broadway St",
        "url": "http://207.251.86.238/cctv536.jpg"
    }, {
        "id": "615",
        "name": "Brooklyn Queens Expy @ Kent Ave",
        "url": "http://207.251.86.238/cctv532.jpg"
    }, {
        "id": "609",
        "name": "Brooklyn Queens Expy @ Middagh St LL",
        "url": "http://207.251.86.238/cctv529.jpg"
    }, {
        "id": "605",
        "name": "Brooklyn Queens Expy @ Middagh St UL",
        "url": "http://207.251.86.238/cctv528.jpg"
    }, {
        "id": "630",
        "name": "Brooklyn Queens Expy @ Morgan Ave",
        "url": "http://207.251.86.238/cctv540.jpg"
    }, {
        "id": "598",
        "name": "Brooklyn Queens Expy @ State St UL",
        "url": "http://207.251.86.238/cctv525.jpg"
    }, {
        "id": "588",
        "name": "Brooklyn Queens Expy @ Union St",
        "url": "http://207.251.86.238/cctv519.jpg"
    }, {
        "id": "1195",
        "name": "Broome St and Lafayette St",
        "url": "http://207.251.86.238/cctv1089.jpg"
    }, {
        "id": "730",
        "name": "Bruckner Blvd @ Lincoln Ave",
        "url": "http://207.251.86.238/cctv678.jpg"
    }, {
        "id": "1015",
        "name": "Bruckner Expwy (BRE-01) WB @ E. 149 St Ex48",
        "url": "http://207.251.86.238/cctv902.jpg"
    }, {
        "id": "1016",
        "name": "Bruckner Expwy (BRE-02) EB @ Hunts Pt Ave Ex 50",
        "url": "http://207.251.86.238/cctv903.jpg"
    }, {
        "id": "1017",
        "name": "Bruckner Expwy (BRE-03) @ Witier St Ex 49",
        "url": "http://207.251.86.238/cctv904.jpg"
    }, {
        "id": "1026",
        "name": "Bruckner Expy @ Bronx River Pkwy",
        "url": "http://207.251.86.238/cctv35.jpg"
    }, {
        "id": "1232",
        "name": "C1-BRE-06_W - WB_at_CBX-Hutch_Int-EX6A",
        "url": "http://207.251.86.238/cctv1124.jpg"
    }, {
        "id": "1172",
        "name": "C1-BRE-08-NB_at_Waterbury_Ave-Ex7B",
        "url": "http://207.251.86.238/cctv1042.jpg"
    }, {
        "id": "1173",
        "name": "C1-BRE-09-SB_at_Lasalle_Ave-Ex7C",
        "url": "http://207.251.86.238/cctv1043.jpg"
    }, {
        "id": "1174",
        "name": "C1-BRE-10-NB_at_Middle_Twn_Rd-Ex7C",
        "url": "http://207.251.86.238/cctv1044.jpg"
    }, {
        "id": "1198",
        "name": "C1-BRE-11-SB_at_Buhre_Ave-Ex8A",
        "url": "http://207.251.86.238/cctv1092.jpg"
    }, {
        "id": "1175",
        "name": "C1-BRP-01-SB_at_E.174th_St-Ex3",
        "url": "http://207.251.86.238/cctv1045.jpg"
    }, {
        "id": "1234",
        "name": "C1-CBE-03_N_NB_at_Nelson_Ave-Ex02A",
        "url": "http://207.251.86.238/cctv1126.jpg"
    }, {
        "id": "1235",
        "name": "C1-CBE-04_N - NB_at_Macombs Rd-Ex2A",
        "url": "http://207.251.86.238/cctv1127.jpg"
    }, {
        "id": "1177",
        "name": "C1-CBE-06_N_NB_at_Weeks Ave-Ext02B",
        "url": "http://207.251.86.238/cctv1047.jpg"
    }, {
        "id": "1178",
        "name": "C1-CBE-10-SB_at_Brx.Rvr_Pkwy-Ex4A",
        "url": "http://207.251.86.238/cctv1048.jpg"
    }, {
        "id": "1236",
        "name": "C1-CBX-17-Med_at_E.Tremont_Ave-Ex10",
        "url": "http://207.251.86.238/cctv1128.jpg"
    }, {
        "id": "1199",
        "name": "C1-CBX-18-Med_at_Pennyfield_Av-TNB",
        "url": "http://207.251.86.238/cctv1093.jpg"
    }, {
        "id": "1179",
        "name": "C1-MDE-01-Cntr_at_E.135th_St-Ex1",
        "url": "http://207.251.86.238/cctv1049.jpg"
    }, {
        "id": "1180",
        "name": "C1-MDE-02-NB_at_Willis_Ave-Ex2",
        "url": "http://207.251.86.238/cctv1050.jpg"
    }, {
        "id": "1237",
        "name": "C1-MDE-03-SB_at_E.138th_St-Ex3",
        "url": "http://207.251.86.238/cctv1129.jpg"
    }, {
        "id": "1239",
        "name": "C1-MDE-04-SB_at_Grand_Concrse-Ex3",
        "url": "http://207.251.86.238/cctv1130.jpg"
    }, {
        "id": "1200",
        "name": "C1-MDE-05-SB_at_E.153rd_St-Ex4",
        "url": "http://207.251.86.238/cctv1094.jpg"
    }, {
        "id": "1238",
        "name": "C1-MDE-05-SB_at_E.153rd_St-Ex4",
        "url": "http://207.251.86.238/cctv1131.jpg"
    }, {
        "id": "1240",
        "name": "C1-MDE-06-NB_at_Macombs_Dam_Br-Ex5",
        "url": "http://207.251.86.238/cctv1132.jpg"
    }, {
        "id": "1202",
        "name": "C1-MDE-09-SB_at_Depot_Pl-Ex7-CBX",
        "url": "http://207.251.86.238/cctv1096.jpg"
    }, {
        "id": "1203",
        "name": "C1-MDE-11-NB_at_W.179th_St-Ex8",
        "url": "http://207.251.86.238/cctv1097.jpg"
    }, {
        "id": "1204",
        "name": "C1-MDE-12-SB_at_Heath_Ave-Ex9",
        "url": "http://207.251.86.238/cctv1098.jpg"
    }, {
        "id": "1206",
        "name": "C1-MDE-14-NB_at_Mosholu_Pkwy-Ex12",
        "url": "http://207.251.86.238/cctv1100.jpg"
    }, {
        "id": "1207",
        "name": "C1-MDE-15-NB_at_Jerome_Ave-Ex13",
        "url": "http://207.251.86.238/cctv1101.jpg"
    }, {
        "id": "1208",
        "name": "C1-SHE-02-SB_at_Cross_Brx_Expwy",
        "url": "http://207.251.86.238/cctv1102.jpg"
    }, {
        "id": "1210",
        "name": "C1-TNE-01-SB_at_Otis-Ave",
        "url": "http://207.251.86.238/cctv1103.jpg"
    }, {
        "id": "1211",
        "name": "C1-TNE-02-Med_at_Randall_Ave",
        "url": "http://207.251.86.238/cctv1104.jpg"
    }, {
        "id": "1242",
        "name": "C2-BQE-11-WB_at_Furmn_St_UP-Ex28A",
        "url": "http://207.251.86.238/cctv1134.jpg"
    }, {
        "id": "1243",
        "name": "C2-BQE-12-WB_at_Furmn_St_LL-Ex28A",
        "url": "http://207.251.86.238/cctv1135.jpg"
    }, {
        "id": "1244",
        "name": "C2-BQE-16-WB_at_Sands_St-Ex29A",
        "url": "http://207.251.86.238/cctv1136.jpg"
    }, {
        "id": "1245",
        "name": "C2-BQE-22-WB_at_Lee_Ave-Ex31",
        "url": "http://207.251.86.238/cctv1137.jpg"
    }, {
        "id": "1246",
        "name": "C2-BQE-25-WB_at_S.5th_St-Ex32",
        "url": "http://207.251.86.238/cctv1138.jpg"
    }, {
        "id": "1212",
        "name": "C2-BQE-26-Cntr_at_Grand_Ave-Ex32",
        "url": "http://207.251.86.238/cctv1105.jpg"
    }, {
        "id": "1247",
        "name": "C2-BQE-29_WB_at_Morgan_Street",
        "url": "http://207.251.86.238/cctv1139.jpg"
    }, {
        "id": "1248",
        "name": "C2-GE-01-WB_at_92nd_St-Vrrazano_Br",
        "url": "http://207.251.86.238/cctv1140.jpg"
    }, {
        "id": "1249",
        "name": "C2-GE-02-WB_at_Ft_Hmiltn_Pkwy-Ex19",
        "url": "http://207.251.86.238/cctv1141.jpg"
    }, {
        "id": "1213",
        "name": "C2-GE-08_E_EB_at_54th_St",
        "url": "http://207.251.86.238/cctv1106.jpg"
    }, {
        "id": "1250",
        "name": "C2-GE-11_E_EB_at_37th_St_Ex23",
        "url": "http://207.251.86.238/cctv1142.jpg"
    }, {
        "id": "1251",
        "name": "C3-KWV-01-NB_at_Tyrllan_Ave-Outrbr",
        "url": "http://207.251.86.238/cctv1143.jpg"
    }, {
        "id": "1252",
        "name": "C3-KWV-02-NB_at_Bloomngdale_Rd-Ex2",
        "url": "http://207.251.86.238/cctv1144.jpg"
    }, {
        "id": "1253",
        "name": "C3-MLK-01-SB_at_Watchogue_Rd-Ex10",
        "url": "http://207.251.86.238/cctv1145.jpg"
    }, {
        "id": "1254",
        "name": "C3-MLK-02-NB_at_Forest_Ave-Ex11",
        "url": "http://207.251.86.238/cctv1146.jpg"
    }, {
        "id": "1255",
        "name": "C3-MLK-03_NB_at_Walkr_St-Bayonne_Br",
        "url": "http://207.251.86.238/cctv1147.jpg"
    }, {
        "id": "1256",
        "name": "C3-SIE-01-WB_at_Forest_Ave",
        "url": "http://207.251.86.238/cctv1148.jpg"
    }, {
        "id": "1257",
        "name": "C3-SIE-02-EB_at_WSE_Int-Ex3",
        "url": "http://207.251.86.238/cctv1149.jpg"
    }, {
        "id": "1258",
        "name": "C3-SIE-03-WB_at_South_Ave-Ex5",
        "url": "http://207.251.86.238/cctv1150.jpg"
    }, {
        "id": "1260",
        "name": "C3-SIE-04-WB_at_Lambert_St_Ex6",
        "url": "http://207.251.86.238/cctv1152.jpg"
    }, {
        "id": "1259",
        "name": "C3-SIE-04A-WB_at_Richmond Ave",
        "url": "http://207.251.86.238/cctv1151.jpg"
    }, {
        "id": "1261",
        "name": "C3-SIE-05-WB_at_MLK-Int-Ex9",
        "url": "http://207.251.86.238/cctv1153.jpg"
    }, {
        "id": "1263",
        "name": "C3-SIE-06-EB_at_Victory_Blvd-Ex10",
        "url": "http://207.251.86.238/cctv1155.jpg"
    }, {
        "id": "1262",
        "name": "C3-SIE-06A-E_at_Crafton_Ave_Ex10",
        "url": "http://207.251.86.238/cctv1154.jpg"
    }, {
        "id": "1264",
        "name": "C3-SIE-07-EB_at_Woolley_Ave-Ex10",
        "url": "http://207.251.86.238/cctv1156.jpg"
    }, {
        "id": "1265",
        "name": "C3-SIE-08-EB_at_Bradley_Ave-Ex11",
        "url": "http://207.251.86.238/cctv1157.jpg"
    }, {
        "id": "1266",
        "name": "C3-SIE-09-EB_at_ Manor_Rd",
        "url": "http://207.251.86.238/cctv1158.jpg"
    }, {
        "id": "1267",
        "name": "C3-SIE-11-EB_at_Renwick_Ave",
        "url": "http://207.251.86.238/cctv1159.jpg"
    }, {
        "id": "1268",
        "name": "C3-SIE-12-WB_Btwn_Clove_Road_and_Richmond_Road",
        "url": "http://207.251.86.238/cctv1160.jpg"
    }, {
        "id": "1269",
        "name": "C3-SIE-13_EB_at_Mosel_Avenue",
        "url": "http://207.251.86.238/cctv1161.jpg"
    }, {
        "id": "1270",
        "name": "C3-SIE-14-WB_at_Hyland_Blvd_Ex14",
        "url": "http://207.251.86.238/cctv1162.jpg"
    }, {
        "id": "1271",
        "name": "C3-SIE-15-EB_at_Fingerboard_Rd_Ex15",
        "url": "http://207.251.86.238/cctv1163.jpg"
    }, {
        "id": "1272",
        "name": "C3-WSE-01-NB_at_Englewood_Ave-Ex2",
        "url": "http://207.251.86.238/cctv1164.jpg"
    }, {
        "id": "1273",
        "name": "C3-WSE-02-SB_at_Woodrow_Rd-Ex3",
        "url": "http://207.251.86.238/cctv1165.jpg"
    }, {
        "id": "1274",
        "name": "C3-WSE-03-SB_at_Bloomngdale_Rd-Ex3",
        "url": "http://207.251.86.238/cctv1166.jpg"
    }, {
        "id": "1275",
        "name": "C3-WSE-04-SB_at_Rossville_Ave-Ex4",
        "url": "http://207.251.86.238/cctv1167.jpg"
    }, {
        "id": "1276",
        "name": "C3-WSE-05-NB_at_Arden_Ave-Ex4",
        "url": "http://207.251.86.238/cctv1168.jpg"
    }, {
        "id": "1277",
        "name": "C3-WSE-06-NB_at_Muldoon_Ave-Ex5",
        "url": "http://207.251.86.238/cctv1169.jpg"
    }, {
        "id": "1278",
        "name": "C3-WSE-07-NB_at_Frsh_Kills_Crk-Ex5",
        "url": "http://207.251.86.238/cctv1170.jpg"
    }, {
        "id": "1279",
        "name": "C3-WSE-08-SB_at_Victory_Blvd-Ex7",
        "url": "http://207.251.86.238/cctv1171.jpg"
    }, {
        "id": "1280",
        "name": "C3-WSE-09-SB_at_Meredith_Blvd-Ex8",
        "url": "http://207.251.86.238/cctv1172.jpg"
    }, {
        "id": "1281",
        "name": "C3-WSE-10-SB_at_South_Ave-Ex8",
        "url": "http://207.251.86.238/cctv1173.jpg"
    }, {
        "id": "1282",
        "name": "C3-WSE-11-SB_at_Edwrd_Crry_Ave-Ex9",
        "url": "http://207.251.86.238/cctv1174.jpg"
    }, {
        "id": "1283",
        "name": "C3-WSE-12-NB_at_Bloomfield_Ave_Ex9",
        "url": "http://207.251.86.238/cctv1175.jpg"
    }, {
        "id": "1284",
        "name": "C4-WST-02-NB_at_Vestry_St",
        "url": "http://207.251.86.238/cctv1176.jpg"
    }, {
        "id": "1285",
        "name": "C4-WST-03-Med_at_Vestry_St",
        "url": "http://207.251.86.238/cctv1177.jpg"
    }, {
        "id": "1286",
        "name": "C4-WST-07-Med_at_W.23rd_St",
        "url": "http://207.251.86.238/cctv1178.jpg"
    }, {
        "id": "1214",
        "name": "C5-BQE-31-EB_at_54th_Ave",
        "url": "http://207.251.86.238/cctv1107.jpg"
    }, {
        "id": "1287",
        "name": "C5-BQE-39-WB_at_Broadway-Ex40",
        "url": "http://207.251.86.238/cctv1179.jpg"
    }, {
        "id": "1288",
        "name": "C5-BQE-42-WB_at_30th_Ave-Ex43",
        "url": "http://207.251.86.238/cctv1180.jpg"
    }, {
        "id": "1289",
        "name": "C5-BQE-44-Med_at_31st_Ave-Ex41",
        "url": "http://207.251.86.238/cctv1181.jpg"
    }, {
        "id": "1290",
        "name": "C5-CVE-01-SB_at_Union_Turnpike",
        "url": "http://207.251.86.238/cctv1182.jpg"
    }, {
        "id": "1291",
        "name": "C5-GCP-07-EB_at_Ditmars_Blvd-Ex9",
        "url": "http://207.251.86.238/cctv1183.jpg"
    }, {
        "id": "1216",
        "name": "C5-GCP-11_EB_at_64th_Ave-Ex10",
        "url": "http://207.251.86.238/cctv1109.jpg"
    }, {
        "id": "1217",
        "name": "C5-GCP-12_WB_at_69th_Rd-Ex11",
        "url": "http://207.251.86.238/cctv1110.jpg"
    }, {
        "id": "1218",
        "name": "C5-GCP-13-EB_at_72nd_Rd-Ex11",
        "url": "http://207.251.86.238/cctv1111.jpg"
    }, {
        "id": "1219",
        "name": "C5-GCP-14_WB_at_76th_Road-Ex13",
        "url": "http://207.251.86.238/cctv1112.jpg"
    }, {
        "id": "1292",
        "name": "C5-GCP-16-EB_at_Conn_at_126th_St",
        "url": "http://207.251.86.238/cctv1184.jpg"
    }, {
        "id": "1293",
        "name": "C5-LIE-02-EB_at_27th_St-Ex15",
        "url": "http://207.251.86.238/cctv1185.jpg"
    }, {
        "id": "1294",
        "name": "C5-LIE-08-EB_48th_St_LL-Ex16",
        "url": "http://207.251.86.238/cctv1186.jpg"
    }, {
        "id": "1295",
        "name": "C5-LIE-11-EB_at_60th_St-Ex18",
        "url": "http://207.251.86.238/cctv1187.jpg"
    }, {
        "id": "1296",
        "name": "C5-LIE-15-WB_at_Queens_Blvd-Ex19",
        "url": "http://207.251.86.238/cctv1188.jpg"
    }, {
        "id": "1297",
        "name": "C5-LIE-17-EB_at_GCP-Ex22A_GCP",
        "url": "http://207.251.86.238/cctv1189.jpg"
    }, {
        "id": "1298",
        "name": "C5-LIE-19-WB_at_138th_St-Ex23",
        "url": "http://207.251.86.238/cctv1190.jpg"
    }, {
        "id": "1299",
        "name": "C5-LIE-22-WB_at_163rd_St-Ex25",
        "url": "http://207.251.86.238/cctv1191.jpg"
    }, {
        "id": "1300",
        "name": "C5-LIE-27-WB_at_Clearview_Exwy-Ex27",
        "url": "http://207.251.86.238/cctv1192.jpg"
    }, {
        "id": "1220",
        "name": "C5-LIE-28-EB_at_213th_St-Ex28",
        "url": "http://207.251.86.238/cctv1113.jpg"
    }, {
        "id": "1221",
        "name": "C5-LIE-29-WB_at_220th_St-Ex29",
        "url": "http://207.251.86.238/cctv1114.jpg"
    }, {
        "id": "1222",
        "name": "C5-LIE-30-WB_at_254th_St-Ex32",
        "url": "http://207.251.86.238/cctv1115.jpg"
    }, {
        "id": "1301",
        "name": "C5-VWE-20_NB_at_Main_Street-Ex8",
        "url": "http://207.251.86.238/cctv1193.jpg"
    }, {
        "id": "1302",
        "name": "C5-VWE-25-NB_at_GCP-Intr.-Ex14",
        "url": "http://207.251.86.238/cctv1194.jpg"
    }, {
        "id": "1303",
        "name": "C5-VWE-28-SB_at_67th_Rd-Ex11",
        "url": "http://207.251.86.238/cctv1195.jpg"
    }, {
        "id": "915",
        "name": "Cadman Plz E/Washington St @ Prospect St",
        "url": "http://207.251.86.238/cctv803.jpg"
    }, {
        "id": "919",
        "name": "Cadman Plz West @ Tillary St",
        "url": "http://207.251.86.238/cctv807.jpg"
    }, {
        "id": "988",
        "name": "Canal St @ Broadway",
        "url": "http://207.251.86.238/cctv884.jpg"
    }, {
        "id": "435",
        "name": "Canal Street @ Allen Street",
        "url": "http://207.251.86.238/cctv325.jpg"
    }, {
        "id": "434",
        "name": "Canal Street @ Chrystie Street",
        "url": "http://207.251.86.238/cctv324.jpg"
    }, {
        "id": "166",
        "name": "Central Park S @ Columbus Cr",
        "url": "http://207.251.86.238/cctv5.jpg"
    }, {
        "id": "965",
        "name": "Central Park West @ 100 St",
        "url": "http://207.251.86.238/cctv852.jpg"
    }, {
        "id": "966",
        "name": "Central Park West @ 65 St",
        "url": "http://207.251.86.238/cctv853.jpg"
    }, {
        "id": "964",
        "name": "Central Park West @ 66 St",
        "url": "http://207.251.86.238/cctv851.jpg"
    }, {
        "id": "968",
        "name": "Central Park West @ 77 St",
        "url": "http://207.251.86.238/cctv855.jpg"
    }, {
        "id": "969",
        "name": "Central Park West @ 81 St",
        "url": "http://207.251.86.238/cctv856.jpg"
    }, {
        "id": "970",
        "name": "Central Park West @ 86 St",
        "url": "http://207.251.86.238/cctv857.jpg"
    }, {
        "id": "971",
        "name": "Central Park West @ 96 St",
        "url": "http://207.251.86.238/cctv858.jpg"
    }, {
        "id": "347",
        "name": "Church St @ Park Pl",
        "url": "http://207.251.86.238/cctv220.jpg"
    }, {
        "id": "163",
        "name": "Church Street @ Vesey",
        "url": "http://207.251.86.238/cctv2.jpg"
    }, {
        "id": "1041",
        "name": "Claremont @ Boston Rd.",
        "url": "http://207.251.86.238/cctv927.jpg"
    }, {
        "id": "448",
        "name": "Clearview Expy @ 26th Ave",
        "url": "http://207.251.86.238/cctv339.jpg"
    }, {
        "id": "449",
        "name": "Clearview Expy @ 35 St",
        "url": "http://207.251.86.238/cctv340.jpg"
    }, {
        "id": "873",
        "name": "College Point Blvd @ 35 Ave",
        "url": "http://207.251.86.238/cctv766.jpg"
    }, {
        "id": "911",
        "name": "College Point Blvd @ Booth Memorial Ave",
        "url": "http://207.251.86.238/cctv799.jpg"
    }, {
        "id": "874",
        "name": "College Point Blvd @ Roosevelt Ave",
        "url": "http://207.251.86.238/cctv767.jpg"
    }, {
        "id": "875",
        "name": "College Point Blvd @ Sanford Ave",
        "url": "http://207.251.86.238/cctv768.jpg"
    }, {
        "id": "505",
        "name": "Columbus St @ 65 Ave",
        "url": "http://207.251.86.238/cctv445.jpg"
    }, {
        "id": "1167",
        "name": "CPW @ 110 St",
        "url": "http://207.251.86.238/cctv1038.jpg"
    }, {
        "id": "524",
        "name": "CPW @ 96 St",
        "url": "http://207.251.86.238/cctv464.jpg"
    }, {
        "id": "706",
        "name": "Cross Bay Blvd @  Wildlife Refuge",
        "url": "http://207.251.86.238/cctv657.jpg"
    }, {
        "id": "1078",
        "name": "Cross Bay Blvd @ 107 Ave",
        "url": "http://207.251.86.238/cctv956.jpg"
    }, {
        "id": "703",
        "name": "Cross Bay Blvd @ 157 Ave",
        "url": "http://207.251.86.238/cctv654.jpg"
    }, {
        "id": "696",
        "name": "Cross Bay Blvd @ 20 Rd",
        "url": "http://207.251.86.238/cctv648.jpg"
    }, {
        "id": "936",
        "name": "Cross Bay Blvd @ 6 Rd",
        "url": "http://207.251.86.238/cctv824.jpg"
    }, {
        "id": "1079",
        "name": "Cross Bay Blvd @ N. Conduit Ave",
        "url": "http://207.251.86.238/cctv957.jpg"
    }, {
        "id": "700",
        "name": "Cross Bay Blvd @ North Channel Bridge",
        "url": "http://207.251.86.238/cctv651.jpg"
    }, {
        "id": "1147",
        "name": "Cross Bronx Exp (CBE-07) SB at Clay Ave (Ex2B)",
        "url": "http://207.251.86.238/cctv1023.jpg"
    }, {
        "id": "1149",
        "name": "Cross Bronx Exp (CBE-12) SB at Ellis Ave (Ex4B)",
        "url": "http://207.251.86.238/cctv1025.jpg"
    }, {
        "id": "1150",
        "name": "Cross Bronx Exp (CBE-13) SB at Cstle Hill Ave (Ex5A)",
        "url": "http://207.251.86.238/cctv1026.jpg"
    }, {
        "id": "1022",
        "name": "Cross Bronx Expwy (CBE-06) NB @ Weeks Av Ex2B",
        "url": "http://207.251.86.238/cctv909.jpg"
    }, {
        "id": "1148",
        "name": "Cross Bronx Expwy (CBE-11)\u00a0 SB at Wood Ave(Ex4B)",
        "url": "http://207.251.86.238/cctv1024.jpg"
    }, {
        "id": "194",
        "name": "Cross Bronx Expy @ Randall Avenue",
        "url": "http://207.251.86.238/cctv33.jpg"
    }, {
        "id": "450",
        "name": "Cross Island Expy @ 14 Ave",
        "url": "http://207.251.86.238/cctv341.jpg"
    }, {
        "id": "281",
        "name": "Cross Island Pkwy @ Bayside Marina",
        "url": "http://207.251.86.238/cctv178.jpg"
    }, {
        "id": "143",
        "name": "Cross Island Pkwy @ Throgsneck",
        "url": "http://207.251.86.238/cctv120.jpg"
    }, {
        "id": "120",
        "name": "Cross Island Pkwy @ Union Tpke",
        "url": "http://207.251.86.238/cctv143.jpg"
    }, {
        "id": "1042",
        "name": "Crotona Pkwy @ Cross Bronx Expwy",
        "url": "http://207.251.86.238/cctv928.jpg"
    }, {
        "id": "674",
        "name": "CVE02 NB at 64th Ave",
        "url": "http://207.251.86.238/cctv552.jpg"
    }, {
        "id": "675",
        "name": "CVE03 SB at 56th Ave",
        "url": "http://207.251.86.238/cctv553.jpg"
    }, {
        "id": "676",
        "name": "CVE04 SB at 48th Ave",
        "url": "http://207.251.86.238/cctv554.jpg"
    }, {
        "id": "1225",
        "name": "Delancy St @ Essex St",
        "url": "http://207.251.86.238/cctv1118.jpg"
    }, {
        "id": "182",
        "name": "Dyer @ 42 Street",
        "url": "http://207.251.86.238/cctv21.jpg"
    }, {
        "id": "1124",
        "name": "Dyer Ave @ 42 St",
        "url": "http://207.251.86.238/cctv1001.jpg"
    }, {
        "id": "1116",
        "name": "E 14 St @ Irving Pl/Lexington Av",
        "url": "http://207.251.86.238/cctv993.jpg"
    }, {
        "id": "810",
        "name": "E 149 St @ River Ave",
        "url": "http://207.251.86.238/cctv706.jpg"
    }, {
        "id": "176",
        "name": "E 57 St @ QBB",
        "url": "http://207.251.86.238/cctv15.jpg"
    }, {
        "id": "177",
        "name": "E 63 St @ QBB",
        "url": "http://207.251.86.238/cctv16.jpg"
    }, {
        "id": "1115",
        "name": "E 8 St @ Lafayette St",
        "url": "http://207.251.86.238/cctv992.jpg"
    }, {
        "id": "1138",
        "name": "E 8 St @ Lafayette St",
        "url": "http://207.251.86.238/cctv1014.jpg"
    }, {
        "id": "791",
        "name": "East Houston St @ Ave B",
        "url": "http://207.251.86.238/cctv698.jpg"
    }, {
        "id": "790",
        "name": "East Houston St @ Ave D",
        "url": "http://207.251.86.238/cctv697.jpg"
    }, {
        "id": "824",
        "name": "Exterior St @ 3 Ave",
        "url": "http://207.251.86.238/cctv718.jpg"
    }, {
        "id": "823",
        "name": "Exterior St @ E 138 St",
        "url": "http://207.251.86.238/cctv717.jpg"
    }, {
        "id": "829",
        "name": "Farmers Blvd @ 147 Ave @ 175 St",
        "url": "http://207.251.86.238/cctv723.jpg"
    }, {
        "id": "835",
        "name": "Farmers Blvd @ N Conduit Ave",
        "url": "http://207.251.86.238/cctv729.jpg"
    }, {
        "id": "795",
        "name": "FDR @ 120 St",
        "url": "http://207.251.86.238/cctv702.jpg"
    }, {
        "id": "735",
        "name": "FDR @ 48 St",
        "url": "http://207.251.86.238/cctv683.jpg"
    }, {
        "id": "734",
        "name": "FDR @ E 127 St",
        "url": "http://207.251.86.238/cctv682.jpg"
    }, {
        "id": "733",
        "name": "FDR @ E 53 St",
        "url": "http://207.251.86.238/cctv681.jpg"
    }, {
        "id": "732",
        "name": "FDR @ E 6 St",
        "url": "http://207.251.86.238/cctv680.jpg"
    }, {
        "id": "731",
        "name": "FDR @ Grand St",
        "url": "http://207.251.86.238/cctv679.jpg"
    }, {
        "id": "865",
        "name": "FDR @ Jackson St",
        "url": "http://207.251.86.238/cctv761.jpg"
    }, {
        "id": "930",
        "name": "FDR Dr @ 10 St",
        "url": "http://207.251.86.238/cctv819.jpg"
    }, {
        "id": "274",
        "name": "FDR Dr @ 111 ST",
        "url": "http://207.251.86.238/cctv166.jpg"
    }, {
        "id": "272",
        "name": "FDR Dr @ 131 ST (3 Ave Br)",
        "url": "http://207.251.86.238/cctv164.jpg"
    }, {
        "id": "188",
        "name": "FDR Dr @ 135 Street",
        "url": "http://207.251.86.238/cctv27.jpg"
    }, {
        "id": "253",
        "name": "FDR Dr @ 23 St",
        "url": "http://207.251.86.238/cctv134.jpg"
    }, {
        "id": "689",
        "name": "FDR Dr @ 38 St",
        "url": "http://207.251.86.238/cctv640.jpg"
    }, {
        "id": "691",
        "name": "FDR Dr @ 79 St",
        "url": "http://207.251.86.238/cctv642.jpg"
    }, {
        "id": "690",
        "name": "FDR Dr @ 90 St",
        "url": "http://207.251.86.238/cctv641.jpg"
    }, {
        "id": "186",
        "name": "FDR Dr @ 96 Street",
        "url": "http://207.251.86.238/cctv25.jpg"
    }, {
        "id": "436",
        "name": "FDR Dr @ Brooklyn Bridge Exit SB",
        "url": "http://207.251.86.238/cctv326.jpg"
    }, {
        "id": "183",
        "name": "FDR Dr @ Catherine Street",
        "url": "http://207.251.86.238/cctv22.jpg"
    }, {
        "id": "223",
        "name": "FDR Dr @ Old Slip",
        "url": "http://207.251.86.238/cctv64.jpg"
    }, {
        "id": "876",
        "name": "Flatbush Ave @ Ave U",
        "url": "http://207.251.86.238/cctv769.jpg"
    }, {
        "id": "839",
        "name": "Flatbush Ave @ Aviator Sports & Golf Club",
        "url": "http://207.251.86.238/cctv738.jpg"
    }, {
        "id": "1089",
        "name": "Flatbush Ave @ DeKalb Ave",
        "url": "http://207.251.86.238/cctv967.jpg"
    }, {
        "id": "844",
        "name": "Flatbush Ave @ Fillmore Ave",
        "url": "http://207.251.86.238/cctv737.jpg"
    }, {
        "id": "486",
        "name": "Flatbush Ave @ Fulton St",
        "url": "http://207.251.86.238/cctv419.jpg"
    }, {
        "id": "877",
        "name": "Flatbush Ave @ Kings Hwy",
        "url": "http://207.251.86.238/cctv770.jpg"
    }, {
        "id": "878",
        "name": "Flatbush Ave @ Marine Park",
        "url": "http://207.251.86.238/cctv771.jpg"
    }, {
        "id": "440",
        "name": "Flatbush Ave @ Willoughby",
        "url": "http://207.251.86.238/cctv330.jpg"
    }, {
        "id": "487",
        "name": "Flatbush Ave and 4 Ave",
        "url": "http://207.251.86.238/cctv420.jpg"
    }, {
        "id": "488",
        "name": "Flatbush Ave and Atlantic Ave",
        "url": "http://207.251.86.238/cctv421.jpg"
    }, {
        "id": "493",
        "name": "Flatbush Ave@ 6 Ave",
        "url": "http://207.251.86.238/cctv426.jpg"
    }, {
        "id": "1008",
        "name": "Flushing Ave @ 54 St",
        "url": "http://207.251.86.238/cctv895.jpg"
    }, {
        "id": "1009",
        "name": "Flushing Ave @ 61 St",
        "url": "http://207.251.86.238/cctv896.jpg"
    }, {
        "id": "1010",
        "name": "Flushing Ave @ Fresh Pond Rd",
        "url": "http://207.251.86.238/cctv897.jpg"
    }, {
        "id": "1011",
        "name": "Flushing Ave @ Grand Ave & 64 St",
        "url": "http://207.251.86.238/cctv898.jpg"
    }, {
        "id": "1029",
        "name": "Flushing Bridge",
        "url": "http://207.251.86.238/cctv915.jpg"
    }, {
        "id": "327",
        "name": "Fordham Rd @ Hughes Ave",
        "url": "http://207.251.86.238/cctv202.jpg"
    }, {
        "id": "318",
        "name": "Fordham Rd and Grand Concourse",
        "url": "http://207.251.86.238/cctv201.jpg"
    }, {
        "id": "841",
        "name": "Ft Washington @ 178 St",
        "url": "http://207.251.86.238/cctv732.jpg"
    }, {
        "id": "840",
        "name": "Ft Washinton @ 179 St",
        "url": "http://207.251.86.238/cctv733.jpg"
    }, {
        "id": "119",
        "name": "GCP @ 166 St",
        "url": "http://207.251.86.238/cctv127.jpg"
    }, {
        "id": "118",
        "name": "GCP @ 214 St",
        "url": "http://207.251.86.238/cctv128.jpg"
    }, {
        "id": "160",
        "name": "GCP @ 31 ST",
        "url": "http://207.251.86.238/cctv108.jpg"
    }, {
        "id": "142",
        "name": "GCP @ Astoria Blvd @ 49 St",
        "url": "http://207.251.86.238/cctv106.jpg"
    }, {
        "id": "378",
        "name": "GCP E Connector  @ 126 St",
        "url": "http://207.251.86.238/cctv269.jpg"
    }, {
        "id": "947",
        "name": "GCP-02-WB_at_46th_St-Ex45",
        "url": "http://207.251.86.238/cctv835.jpg"
    }, {
        "id": "679",
        "name": "GCP06 WB at 27th Ave - Ex6",
        "url": "http://207.251.86.238/cctv607.jpg"
    }, {
        "id": "1152",
        "name": "Gowanus Exp (GE-12) WB at 26th St (Ex23)",
        "url": "http://207.251.86.238/cctv1028.jpg"
    }, {
        "id": "565",
        "name": "Gowanus Expwy @ 72 Street",
        "url": "http://207.251.86.238/cctv505.jpg"
    }, {
        "id": "564",
        "name": "Gowanus Expwy @ 79 Street",
        "url": "http://207.251.86.238/cctv504.jpg"
    }, {
        "id": "566",
        "name": "Gowanus Expwy btwn 6 & 7 Ave",
        "url": "http://207.251.86.238/cctv506.jpg"
    }, {
        "id": "571",
        "name": "Gowanus Expy @ Prospect Interchange",
        "url": "http://207.251.86.238/cctv510.jpg"
    }, {
        "id": "152",
        "name": "GR Brewer @ Belt",
        "url": "http://207.251.86.238/cctv163.jpg"
    }, {
        "id": "1012",
        "name": "Grand Ave @ Hamilton Pl",
        "url": "http://207.251.86.238/cctv899.jpg"
    }, {
        "id": "1013",
        "name": "Grand Ave @ LIE",
        "url": "http://207.251.86.238/cctv900.jpg"
    }, {
        "id": "604",
        "name": "Grand Central Pkwy @ 37 Street",
        "url": "http://207.251.86.238/cctv603.jpg"
    }, {
        "id": "607",
        "name": "Grand Central Pkwy @ 72 Street",
        "url": "http://207.251.86.238/cctv605.jpg"
    }, {
        "id": "608",
        "name": "Grand Central Pkwy @ 75 Street",
        "url": "http://207.251.86.238/cctv606.jpg"
    }, {
        "id": "612",
        "name": "Grand Central Pkwy E/Connector @ Astoria Blvd",
        "url": "http://207.251.86.238/cctv611.jpg"
    }, {
        "id": "812",
        "name": "Grand Concourse @ 161 St",
        "url": "http://207.251.86.238/cctv708.jpg"
    }, {
        "id": "1187",
        "name": "Grand St (Borinquen Pl) @ Union Ave",
        "url": "http://207.251.86.238/cctv1080.jpg"
    }, {
        "id": "519",
        "name": "Grand St @ Allen St",
        "url": "http://207.251.86.238/cctv459.jpg"
    }, {
        "id": "838",
        "name": "Grand St @ Bowery",
        "url": "http://207.251.86.238/cctv734.jpg"
    }, {
        "id": "516",
        "name": "Grand St @ Broadway",
        "url": "http://207.251.86.238/cctv457.jpg"
    }, {
        "id": "1192",
        "name": "Grand St @ Bushwick Ave",
        "url": "http://207.251.86.238/cctv1086.jpg"
    }, {
        "id": "517",
        "name": "Grand St @ Essex St",
        "url": "http://207.251.86.238/cctv458.jpg"
    }, {
        "id": "1188",
        "name": "Grand St @ Graham Ave",
        "url": "http://207.251.86.238/cctv1082.jpg"
    }, {
        "id": "1123",
        "name": "Grand St. @ Clinton St",
        "url": "http://207.251.86.238/cctv1000.jpg"
    }, {
        "id": "512",
        "name": "Greenwich St @ Morris St",
        "url": "http://207.251.86.238/cctv453.jpg"
    }, {
        "id": "832",
        "name": "Guy Brewer Blvd @ N Conduit Ave",
        "url": "http://207.251.86.238/cctv726.jpg"
    }, {
        "id": "871",
        "name": "Hamilton Ave @ Hamilton Pl @ 15 St (N SR)",
        "url": "http://207.251.86.238/cctv763.jpg"
    }, {
        "id": "872",
        "name": "Hamilton Ave @ Hamilton PL @ 15 St (S SR)",
        "url": "http://207.251.86.238/cctv764.jpg"
    }, {
        "id": "1161",
        "name": "Harlem River Dr @ 150 St",
        "url": "http://207.251.86.238/cctv1032.jpg"
    }, {
        "id": "805",
        "name": "Harlem Rvr Dr (FDR) @ 166 St",
        "url": "http://207.251.86.238/cctv705.jpg"
    }, {
        "id": "558",
        "name": "Henry Hudson @ 137 St",
        "url": "http://207.251.86.238/cctv500.jpg"
    }, {
        "id": "554",
        "name": "Henry Hudson @ 158 St",
        "url": "http://207.251.86.238/cctv495.jpg"
    }, {
        "id": "933",
        "name": "Henry Hudson Pkwy @ 125 St",
        "url": "http://207.251.86.238/cctv501.jpg"
    }, {
        "id": "278",
        "name": "Henry Hudson Pkwy @ 232 St",
        "url": "http://207.251.86.238/cctv173.jpg"
    }, {
        "id": "895",
        "name": "Henry Hudson Pkwy @ 70 St",
        "url": "http://207.251.86.238/cctv779.jpg"
    }, {
        "id": "291",
        "name": "Henry Hudson Pkwy @ 96 St",
        "url": "http://207.251.86.238/cctv188.jpg"
    }, {
        "id": "788",
        "name": "Hillside Ave @ Little Neck Pkwy",
        "url": "http://207.251.86.238/cctv695.jpg"
    }, {
        "id": "157",
        "name": "Holland Tunnel",
        "url": "http://207.251.86.238/cctv92.jpg"
    }, {
        "id": "722",
        "name": "Houston St @ Broadway",
        "url": "http://207.251.86.238/cctv671.jpg"
    }, {
        "id": "721",
        "name": "Houston St @ Christies St",
        "url": "http://207.251.86.238/cctv670.jpg"
    }, {
        "id": "201",
        "name": "Hutchinson River Pkwy @ East Tremont",
        "url": "http://207.251.86.238/cctv40.jpg"
    }, {
        "id": "862",
        "name": "Hylan Ave @ Page Ave",
        "url": "http://207.251.86.238/cctv756.jpg"
    }, {
        "id": "861",
        "name": "Hylan Blvd @ Arden Ave",
        "url": "http://207.251.86.238/cctv755.jpg"
    }, {
        "id": "923",
        "name": "Hylan Blvd @ Bay St",
        "url": "http://207.251.86.238/cctv812.jpg"
    }, {
        "id": "859",
        "name": "Hylan Blvd @ Guyon Ave",
        "url": "http://207.251.86.238/cctv753.jpg"
    }, {
        "id": "860",
        "name": "Hylan Blvd @ Huguenot Ave",
        "url": "http://207.251.86.238/cctv754.jpg"
    }, {
        "id": "858",
        "name": "Hylan Blvd @ Richmond Ave",
        "url": "http://207.251.86.238/cctv752.jpg"
    }, {
        "id": "850",
        "name": "Hylan Blvd @ Seaview Ave",
        "url": "http://207.251.86.238/cctv744.jpg"
    }, {
        "id": "863",
        "name": "Hylan Blvd @ Seguine Ave",
        "url": "http://207.251.86.238/cctv757.jpg"
    }, {
        "id": "879",
        "name": "Hylan Blvd @ West Fingerboard Rd & Sand Ln",
        "url": "http://207.251.86.238/cctv772.jpg"
    }, {
        "id": "1191",
        "name": "Irving Pl @ 14 St",
        "url": "http://207.251.86.238/cctv1085.jpg"
    }, {
        "id": "1118",
        "name": "Jackie Robinson Pkwy @ Forest Pk Dr",
        "url": "http://207.251.86.238/cctv995.jpg"
    }, {
        "id": "1141",
        "name": "Jackie Robinson Pkwy @ Forest Pk Dr",
        "url": "http://207.251.86.238/cctv1017.jpg"
    }, {
        "id": "938",
        "name": "Jackie Robinson Pkwy @ Jamaica Ave",
        "url": "http://207.251.86.238/cctv829.jpg"
    }, {
        "id": "897",
        "name": "Jackie Robinson Pkwy @ Queens Blvd",
        "url": "http://207.251.86.238/cctv786.jpg"
    }, {
        "id": "900",
        "name": "Kissena Blvd @ Holly Ave",
        "url": "http://207.251.86.238/cctv788.jpg"
    }, {
        "id": "902",
        "name": "Kissena Blvd @ LIE N S/R",
        "url": "http://207.251.86.238/cctv790.jpg"
    }, {
        "id": "935",
        "name": "Kissena Blvd @ Sanford Ave",
        "url": "http://207.251.86.238/cctv823.jpg"
    }, {
        "id": "530",
        "name": "Lenox Ave @ 125 St",
        "url": "http://207.251.86.238/cctv472.jpg"
    }, {
        "id": "521",
        "name": "Lenox Ave @ 135 St",
        "url": "http://207.251.86.238/cctv450.jpg"
    }, {
        "id": "542",
        "name": "Lexington Ave @ 34 St",
        "url": "http://207.251.86.238/cctv482.jpg"
    }, {
        "id": "413",
        "name": "Lexington Ave @ 42 St",
        "url": "http://207.251.86.238/cctv303.jpg"
    }, {
        "id": "404",
        "name": "Lexington Ave @ 57 ST",
        "url": "http://207.251.86.238/cctv294.jpg"
    }, {
        "id": "540",
        "name": "Lexington Ave @ 72 St",
        "url": "http://207.251.86.238/cctv181.jpg"
    }, {
        "id": "894",
        "name": "LIE @ College Point Blvd",
        "url": "http://207.251.86.238/cctv785.jpg"
    }, {
        "id": "121",
        "name": "LIE @ Kissena Blvd",
        "url": "http://207.251.86.238/cctv129.jpg"
    }, {
        "id": "799",
        "name": "LIE @ Oceania St",
        "url": "http://207.251.86.238/cctv161.jpg"
    }, {
        "id": "216",
        "name": "LIE @ QMT-  Pulaski Br",
        "url": "http://207.251.86.238/cctv55.jpg"
    }, {
        "id": "949",
        "name": "LIE-06-EB_ramp_E_BQE_to_W_LIE",
        "url": "http://207.251.86.238/cctv837.jpg"
    }, {
        "id": "953",
        "name": "LIE-20-WB_at_146th_St-Ex24",
        "url": "http://207.251.86.238/cctv841.jpg"
    }, {
        "id": "661",
        "name": "Long Island Expy @ 172nd St",
        "url": "http://207.251.86.238/cctv571.jpg"
    }, {
        "id": "662",
        "name": "Long Island Expy @ 185th St",
        "url": "http://207.251.86.238/cctv572.jpg"
    }, {
        "id": "650",
        "name": "Long Island Expy @ 48 St UL",
        "url": "http://207.251.86.238/cctv559.jpg"
    }, {
        "id": "651",
        "name": "Long Island Expy @ 48th St LL",
        "url": "http://207.251.86.238/cctv560.jpg"
    }, {
        "id": "666",
        "name": "Long Island Expy @ 58th St LL",
        "url": "http://207.251.86.238/cctv562.jpg"
    }, {
        "id": "654",
        "name": "Long Island Expy @ 75 St",
        "url": "http://207.251.86.238/cctv564.jpg"
    }, {
        "id": "655",
        "name": "Long Island Expy @ 84 St",
        "url": "http://207.251.86.238/cctv565.jpg"
    }, {
        "id": "664",
        "name": "Long Island Expy @ Francis Lewis Blvd",
        "url": "http://207.251.86.238/cctv574.jpg"
    }, {
        "id": "653",
        "name": "Long Island Expy @ Grand Avenue",
        "url": "http://207.251.86.238/cctv563.jpg"
    }, {
        "id": "646",
        "name": "Long Island Expy @ Greenpoint Ave",
        "url": "http://207.251.86.238/cctv556.jpg"
    }, {
        "id": "659",
        "name": "Long Island Expy @ Kissena Blvd",
        "url": "http://207.251.86.238/cctv569.jpg"
    }, {
        "id": "649",
        "name": "Long Island Expy @ ramp to W/B BQE",
        "url": "http://207.251.86.238/cctv558.jpg"
    }, {
        "id": "663",
        "name": "Long Island Expy @ Underhill Ave",
        "url": "http://207.251.86.238/cctv573.jpg"
    }, {
        "id": "652",
        "name": "Long Island Expy btwn 50 St - 58th St",
        "url": "http://207.251.86.238/cctv561.jpg"
    }, {
        "id": "648",
        "name": "Long Island Expy ramp to W/B BQE",
        "url": "http://207.251.86.238/cctv557.jpg"
    }, {
        "id": "294",
        "name": "Macombs Dam Bridge",
        "url": "http://207.251.86.238/cctv191.jpg"
    }, {
        "id": "811",
        "name": "Macombs Dam Bridge @ E 161 St",
        "url": "http://207.251.86.238/cctv707.jpg"
    }, {
        "id": "406",
        "name": "MADISON @ 34 ST",
        "url": "http://207.251.86.238/cctv296.jpg"
    }, {
        "id": "407",
        "name": "MADISON @ 57 ST",
        "url": "http://207.251.86.238/cctv297.jpg"
    }, {
        "id": "522",
        "name": "Madison Ave @ 42 St",
        "url": "http://207.251.86.238/cctv467.jpg"
    }, {
        "id": "1087",
        "name": "Madison Ave @ 46 St \u2013 Manhattan",
        "url": "http://207.251.86.238/cctv965.jpg"
    }, {
        "id": "528",
        "name": "Madison Ave @ 49 St",
        "url": "http://207.251.86.238/cctv470.jpg"
    }, {
        "id": "536",
        "name": "Madison Ave @ 96 St",
        "url": "http://207.251.86.238/cctv475.jpg"
    }, {
        "id": "903",
        "name": "Main St @ LIE N S/R",
        "url": "http://207.251.86.238/cctv791.jpg"
    }, {
        "id": "904",
        "name": "Main St @ Roosevelt Ave",
        "url": "http://207.251.86.238/cctv792.jpg"
    }, {
        "id": "927",
        "name": "Main St @ Sanford Ave",
        "url": "http://207.251.86.238/cctv816.jpg"
    }, {
        "id": "1098",
        "name": "Major Deegan Expwy @ 225 St",
        "url": "http://207.251.86.238/cctv975.jpg"
    }, {
        "id": "1096",
        "name": "Major Deegan Expwy @ 230 St",
        "url": "http://207.251.86.238/cctv974.jpg"
    }, {
        "id": "202",
        "name": "Major Deegan Expy @ S of W 167 Street",
        "url": "http://207.251.86.238/cctv41.jpg"
    }, {
        "id": "1038",
        "name": "Malcolm X Blvd/Lenox Ave @ 110 St/CPN",
        "url": "http://207.251.86.238/cctv924.jpg"
    }, {
        "id": "932",
        "name": "Malcom X Blvd @ 145 St",
        "url": "http://207.251.86.238/cctv821.jpg"
    }, {
        "id": "287",
        "name": "Manhattan BBT Entrance",
        "url": "http://207.251.86.238/cctv184.jpg"
    }, {
        "id": "1044",
        "name": "Marmion Av.\u00a0 @ Cross Bronx Expwy",
        "url": "http://207.251.86.238/cctv930.jpg"
    }, {
        "id": "1049",
        "name": "Med_at_Senger_Pl-Ex18",
        "url": "http://207.251.86.238/cctv934.jpg"
    }, {
        "id": "1054",
        "name": "Med_at_Wilkenson_Ave-Ex3\u00a0",
        "url": "http://207.251.86.238/cctv939.jpg"
    }, {
        "id": "1035",
        "name": "Melrose Ave/Webster Ave @ E 161",
        "url": "http://207.251.86.238/cctv921.jpg"
    }, {
        "id": "1186",
        "name": "Metropolitan Ave @ Berry St",
        "url": "http://207.251.86.238/cctv1081.jpg"
    }, {
        "id": "1121",
        "name": "Metropolitan Ave @ Fresh Pond Rd",
        "url": "http://207.251.86.238/cctv998.jpg"
    }, {
        "id": "1144",
        "name": "Metropolitan Ave @ Fresh Pond Rd",
        "url": "http://207.251.86.238/cctv1020.jpg"
    }, {
        "id": "459",
        "name": "MHB-16 Manhattan Colonade Entr",
        "url": "http://207.251.86.238/cctv371.jpg"
    }, {
        "id": "806",
        "name": "MHB-27 Bklyn N URDWY @ Twr",
        "url": "http://207.251.86.238/cctv393.jpg"
    }, {
        "id": "807",
        "name": "MHB-28 Bklyn LRDW @ Twr",
        "url": "http://207.251.86.238/cctv394.jpg"
    }, {
        "id": "808",
        "name": "MHB-29 Brklyn S URDWY @ Twr",
        "url": "http://207.251.86.238/cctv395.jpg"
    }, {
        "id": "470",
        "name": "MHB-31 Bklyn N URW @ Anch",
        "url": "http://207.251.86.238/cctv397.jpg"
    }, {
        "id": "822",
        "name": "MHB-32 Bklyn S URDW @ Anch",
        "url": "http://207.251.86.238/cctv398.jpg"
    }, {
        "id": "471",
        "name": "MHB-33 Bklyn LRW @ Ex Ramp",
        "url": "http://207.251.86.238/cctv399.jpg"
    }, {
        "id": "446",
        "name": "Montgomergy @ South St",
        "url": "http://207.251.86.238/cctv338.jpg"
    }, {
        "id": "1061",
        "name": "Narrows Rd South @ Fingerboard Rd",
        "url": "http://207.251.86.238/cctv947.jpg"
    }, {
        "id": "1060",
        "name": "Narrows Rd South @ Hylan Blvd",
        "url": "http://207.251.86.238/cctv946.jpg"
    }, {
        "id": "1062",
        "name": "Narrows Rd South @ Lily Pond Ave",
        "url": "http://207.251.86.238/cctv948.jpg"
    }, {
        "id": "1033",
        "name": "NB Cross Brx Expy-Webster Av Exit ramp @ E 174 St & Cater Av",
        "url": "http://207.251.86.238/cctv919.jpg"
    }, {
        "id": "1052",
        "name": "NB_at_Bruckner_Blvd-Ex19",
        "url": "http://207.251.86.238/cctv937.jpg"
    }, {
        "id": "1046",
        "name": "NB_at_Hutch_Rvr_Pkwy-Ex54",
        "url": "http://207.251.86.238/cctv931.jpg"
    }, {
        "id": "1047",
        "name": "NB_at_Lafayette_Ave-Ex11",
        "url": "http://207.251.86.238/cctv932.jpg"
    }, {
        "id": "1057",
        "name": "NB_at_Macombs Rd-Ex2A",
        "url": "http://207.251.86.238/cctv943.jpg"
    }, {
        "id": "1059",
        "name": "NB_at_Marmion Ave-Ex03",
        "url": "http://207.251.86.238/cctv945.jpg"
    }, {
        "id": "1048",
        "name": "NB_at_Randall_Ave-Ex11",
        "url": "http://207.251.86.238/cctv933.jpg"
    }, {
        "id": "1045",
        "name": "NB_at_Undercliff_Ave-Ex1C",
        "url": "http://207.251.86.238/cctv942.jpg"
    }, {
        "id": "1053",
        "name": "NB_at_Waterbury_Ave-Ex19\u00a0",
        "url": "http://207.251.86.238/cctv938.jpg"
    }, {
        "id": "277",
        "name": "NE Thruway @ Conner St",
        "url": "http://207.251.86.238/cctv172.jpg"
    }, {
        "id": "147",
        "name": "New Eng Thru @ Bartow",
        "url": "http://207.251.86.238/cctv122.jpg"
    }, {
        "id": "848",
        "name": "Northern Blvd @ 108 St",
        "url": "http://207.251.86.238/cctv742.jpg"
    }, {
        "id": "849",
        "name": "Northern Blvd @ 114 St",
        "url": "http://207.251.86.238/cctv743.jpg"
    }, {
        "id": "978",
        "name": "Northern Blvd @ 48 St",
        "url": "http://207.251.86.238/cctv866.jpg"
    }, {
        "id": "880",
        "name": "Northern Blvd @ 51 St",
        "url": "http://207.251.86.238/cctv773.jpg"
    }, {
        "id": "979",
        "name": "Northern Blvd @ 61 St",
        "url": "http://207.251.86.238/cctv867.jpg"
    }, {
        "id": "290",
        "name": "Northern Blvd @ 68 St",
        "url": "http://207.251.86.238/cctv187.jpg"
    }, {
        "id": "972",
        "name": "Northern Blvd @ 82 St",
        "url": "http://207.251.86.238/cctv859.jpg"
    }, {
        "id": "977",
        "name": "Northern Blvd @ Broadway",
        "url": "http://207.251.86.238/cctv865.jpg"
    }, {
        "id": "738",
        "name": "Northern Blvd @ Honeywell Bridge",
        "url": "http://207.251.86.238/cctv686.jpg"
    }, {
        "id": "939",
        "name": "Northern Blvd @ Junction Blvd",
        "url": "http://207.251.86.238/cctv828.jpg"
    }, {
        "id": "746",
        "name": "Northern Blvd @ Little Neck Pkwy",
        "url": "http://207.251.86.238/cctv694.jpg"
    }, {
        "id": "925",
        "name": "Northern Blvd @ Main St",
        "url": "http://207.251.86.238/cctv814.jpg"
    }, {
        "id": "881",
        "name": "Northern Blvd @ Parsons Blvd",
        "url": "http://207.251.86.238/cctv774.jpg"
    }, {
        "id": "976",
        "name": "Northern Blvd @ Steinway",
        "url": "http://207.251.86.238/cctv864.jpg"
    }, {
        "id": "882",
        "name": "Northern Blvd @ Union St",
        "url": "http://207.251.86.238/cctv775.jpg"
    }, {
        "id": "723",
        "name": "Ocean Pkwy @ Ave I",
        "url": "http://207.251.86.238/cctv672.jpg"
    }, {
        "id": "707",
        "name": "Ocean Pkwy @ Ave U",
        "url": "http://207.251.86.238/cctv658.jpg"
    }, {
        "id": "852",
        "name": "Ocean Pkwy @ Ave X",
        "url": "http://207.251.86.238/cctv746.jpg"
    }, {
        "id": "853",
        "name": "Ocean Pkwy @ Kings Hwy",
        "url": "http://207.251.86.238/cctv747.jpg"
    }, {
        "id": "851",
        "name": "Ocean Pkwy @ Surf Av @ Sea Breeze Ave",
        "url": "http://207.251.86.238/cctv745.jpg"
    }, {
        "id": "912",
        "name": "Old Fulton St @ Furman St",
        "url": "http://207.251.86.238/cctv800.jpg"
    }, {
        "id": "913",
        "name": "Old Fulton St @ Prospect St",
        "url": "http://207.251.86.238/cctv801.jpg"
    }, {
        "id": "531",
        "name": "Park Ave @ 23 St",
        "url": "http://207.251.86.238/cctv473.jpg"
    }, {
        "id": "419",
        "name": "Park Ave @ 34 St",
        "url": "http://207.251.86.238/cctv309.jpg"
    }, {
        "id": "552",
        "name": "Park Ave @ 57 St",
        "url": "http://207.251.86.238/cctv492.jpg"
    }, {
        "id": "909",
        "name": "Park Ave @ 72 St",
        "url": "http://207.251.86.238/cctv797.jpg"
    }, {
        "id": "910",
        "name": "Park Ave @ 96 St",
        "url": "http://207.251.86.238/cctv798.jpg"
    }, {
        "id": "426",
        "name": "Pearl St @ Dover",
        "url": "http://207.251.86.238/cctv316.jpg"
    }, {
        "id": "427",
        "name": "Pearl Street @ St. James Pl",
        "url": "http://207.251.86.238/cctv317.jpg"
    }, {
        "id": "866",
        "name": "Pelham Pkwy @ Stillwell Ave",
        "url": "http://207.251.86.238/cctv760.jpg"
    }, {
        "id": "883",
        "name": "Pelham Pkwy E/B @ Boston Rd",
        "url": "http://207.251.86.238/cctv776.jpg"
    }, {
        "id": "884",
        "name": "Pelham Pkwy W/B @ Boston Rd",
        "url": "http://207.251.86.238/cctv777.jpg"
    }, {
        "id": "885",
        "name": "Pelham Shore Rd @ City Island Rd",
        "url": "http://207.251.86.238/cctv778.jpg"
    }, {
        "id": "580",
        "name": "Prospect Expy @ 6 Ave",
        "url": "http://207.251.86.238/cctv516.jpg"
    }, {
        "id": "578",
        "name": "Prospect Expy @ 7 Ave",
        "url": "http://207.251.86.238/cctv515.jpg"
    }, {
        "id": "577",
        "name": "Prospect Expy @ 9 Ave",
        "url": "http://207.251.86.238/cctv514.jpg"
    }, {
        "id": "572",
        "name": "Prospect Expy @ Caton Ave",
        "url": "http://207.251.86.238/cctv511.jpg"
    }, {
        "id": "573",
        "name": "Prospect Expy @ Fort Hamilton Pkwy",
        "url": "http://207.251.86.238/cctv512.jpg"
    }, {
        "id": "697",
        "name": "Prospect Pkwy @ 3 Ave",
        "url": "http://207.251.86.238/cctv649.jpg"
    }, {
        "id": "485",
        "name": "QBB @ Crescent St",
        "url": "http://207.251.86.238/cctv418.jpg"
    }, {
        "id": "483",
        "name": "QBB LL CM @ 11 St",
        "url": "http://207.251.86.238/cctv416.jpg"
    }, {
        "id": "890",
        "name": "QBB LL CM @ E Channel",
        "url": "http://207.251.86.238/cctv414.jpg"
    }, {
        "id": "480",
        "name": "QBB LL CM @ W Channel",
        "url": "http://207.251.86.238/cctv412.jpg"
    }, {
        "id": "889",
        "name": "QBB LL CM @ York Ave",
        "url": "http://207.251.86.238/cctv409.jpg"
    }, {
        "id": "928",
        "name": "QBB NOR @ 1 Ave",
        "url": "http://207.251.86.238/cctv817.jpg"
    }, {
        "id": "898",
        "name": "QBB NOR @ W Channel",
        "url": "http://207.251.86.238/cctv411.jpg"
    }, {
        "id": "478",
        "name": "QBB NOR @ York Ave",
        "url": "http://207.251.86.238/cctv407.jpg"
    }, {
        "id": "476",
        "name": "QBB SOR @ 1 Ave",
        "url": "http://207.251.86.238/cctv404.jpg"
    }, {
        "id": "887",
        "name": "QBB SOR @ Sutton Pl",
        "url": "http://207.251.86.238/cctv406.jpg"
    }, {
        "id": "481",
        "name": "QBB UL CM @ Roosevelt",
        "url": "http://207.251.86.238/cctv413.jpg"
    }, {
        "id": "479",
        "name": "QBB UL CM @ York Ave",
        "url": "http://207.251.86.238/cctv408.jpg"
    }, {
        "id": "922",
        "name": "QBB UL Entrance @ Thomson Ave",
        "url": "http://207.251.86.238/cctv811.jpg"
    }, {
        "id": "484",
        "name": "QBB Uramp @ 23 St",
        "url": "http://207.251.86.238/cctv417.jpg"
    }, {
        "id": "124",
        "name": "Qns Blvd @ 65 Ave",
        "url": "http://207.251.86.238/cctv146.jpg"
    }, {
        "id": "126",
        "name": "Qns Blvd @ 65 PL",
        "url": "http://207.251.86.238/cctv148.jpg"
    }, {
        "id": "125",
        "name": "Qns Blvd @ QnCnt Mall",
        "url": "http://207.251.86.238/cctv145.jpg"
    }, {
        "id": "1007",
        "name": "Queens Blvd @ 36 St",
        "url": "http://207.251.86.238/cctv57.jpg"
    }, {
        "id": "921",
        "name": "Queens Blvd @ 39 St - East",
        "url": "http://207.251.86.238/cctv810.jpg"
    }, {
        "id": "1027",
        "name": "Queens Blvd @ 48 St",
        "url": "http://207.251.86.238/cctv913.jpg"
    }, {
        "id": "726",
        "name": "Queens Blvd @ Jackson Ave",
        "url": "http://207.251.86.238/cctv675.jpg"
    }, {
        "id": "728",
        "name": "Queens Blvd @ Skillman",
        "url": "http://207.251.86.238/cctv677.jpg"
    }, {
        "id": "498",
        "name": "Queens Blvd @ Sunnyside Br",
        "url": "http://207.251.86.238/cctv436.jpg"
    }, {
        "id": "1093",
        "name": "Queens Blvd E/B @ 43 St",
        "url": "http://207.251.86.238/cctv971.jpg"
    }, {
        "id": "737",
        "name": "Queens Plaza N @ Northern Blvd",
        "url": "http://207.251.86.238/cctv685.jpg"
    }, {
        "id": "215",
        "name": "Queens Plaza North @ 2811 (Westside)",
        "url": "http://207.251.86.238/cctv54.jpg"
    }, {
        "id": "727",
        "name": "Queens Plz S @ 27 St",
        "url": "http://207.251.86.238/cctv676.jpg"
    }, {
        "id": "833",
        "name": "Rockaway Blvd @ Baisley Blvd",
        "url": "http://207.251.86.238/cctv727.jpg"
    }, {
        "id": "837",
        "name": "Rockaway Blvd @ Brookville Blvd",
        "url": "http://207.251.86.238/cctv731.jpg"
    }, {
        "id": "714",
        "name": "Rockaway Blvd @ Division St",
        "url": "http://207.251.86.238/cctv663.jpg"
    }, {
        "id": "843",
        "name": "Rockaway Blvd @ Farmers Blvd",
        "url": "http://207.251.86.238/cctv736.jpg"
    }, {
        "id": "836",
        "name": "Rockaway Blvd @ Guy Brewer Blvd",
        "url": "http://207.251.86.238/cctv730.jpg"
    }, {
        "id": "842",
        "name": "Rockaway Blvd @ S. Conduit Ave",
        "url": "http://207.251.86.238/cctv735.jpg"
    }, {
        "id": "831",
        "name": "Rockaway Blvd @ Van Wyck Expy E S/R",
        "url": "http://207.251.86.238/cctv725.jpg"
    }, {
        "id": "830",
        "name": "Rockaway Blvd @ Van Wyck Expy W S/R",
        "url": "http://207.251.86.238/cctv724.jpg"
    }, {
        "id": "1165",
        "name": "Roosevelt Ave @ 50 St",
        "url": "http://207.251.86.238/cctv1036.jpg"
    }, {
        "id": "1166",
        "name": "Roosevelt Ave @ 79St",
        "url": "http://207.251.86.238/cctv1037.jpg"
    }, {
        "id": "1168",
        "name": "Roosevelt Ave @ Broadway & \u00a074 st",
        "url": "http://207.251.86.238/cctv1039.jpg"
    }, {
        "id": "1162",
        "name": "Roosevelt Ave @ Main St",
        "url": "http://207.251.86.238/cctv1033.jpg"
    }, {
        "id": "886",
        "name": "Roosevelt Ave @ Parsons Blvd",
        "url": "http://207.251.86.238/cctv780.jpg"
    }, {
        "id": "430",
        "name": "RT. 9A @ N. Moore St",
        "url": "http://207.251.86.238/cctv320.jpg"
    }, {
        "id": "834",
        "name": "S Conduit Ave @ 150 St",
        "url": "http://207.251.86.238/cctv728.jpg"
    }, {
        "id": "920",
        "name": "Sands St @ Adams St",
        "url": "http://207.251.86.238/cctv808.jpg"
    }, {
        "id": "425",
        "name": "Sands St @ BQE Ent",
        "url": "http://207.251.86.238/cctv315.jpg"
    }, {
        "id": "424",
        "name": "Sands St @ Brooklyn Bridge Ent",
        "url": "http://207.251.86.238/cctv314.jpg"
    }, {
        "id": "1058",
        "name": "SB_at_Arthur AveEx3",
        "url": "http://207.251.86.238/cctv944.jpg"
    }, {
        "id": "1051",
        "name": "SB_at_Lafayette_Ave-Ex18",
        "url": "http://207.251.86.238/cctv936.jpg"
    }, {
        "id": "1055",
        "name": "SB_at_NET-Ex4",
        "url": "http://207.251.86.238/cctv940.jpg"
    }, {
        "id": "1071",
        "name": "School Rd @ Bay Ave",
        "url": "http://207.251.86.238/cctv949.jpg"
    }, {
        "id": "855",
        "name": "Seagirt Blvd @ B 9 St",
        "url": "http://207.251.86.238/cctv749.jpg"
    }, {
        "id": "1025",
        "name": "Sheridan Expwy (SHE-01) SB @ Jennings St",
        "url": "http://207.251.86.238/cctv912.jpg"
    }, {
        "id": "112",
        "name": "SIE @ Richmond Ave",
        "url": "http://207.251.86.238/cctv83.jpg"
    }, {
        "id": "344",
        "name": "South St @ Broad St",
        "url": "http://207.251.86.238/cctv210.jpg"
    }, {
        "id": "438",
        "name": "South Street @ Pike Street",
        "url": "http://207.251.86.238/cctv328.jpg"
    }, {
        "id": "1043",
        "name": "Southern Bl.\u00a0 @ Cross Bronx Expwy",
        "url": "http://207.251.86.238/cctv929.jpg"
    }, {
        "id": "744",
        "name": "Springfield Ave @ Jamaica Ave",
        "url": "http://207.251.86.238/cctv692.jpg"
    }, {
        "id": "743",
        "name": "Springfield Blvd @ Merrick Blvd",
        "url": "http://207.251.86.238/cctv691.jpg"
    }, {
        "id": "740",
        "name": "St Nicholas Ave @ 125 St",
        "url": "http://207.251.86.238/cctv688.jpg"
    }, {
        "id": "532",
        "name": "St Nicholas Ave @ 145 St",
        "url": "http://207.251.86.238/cctv476.jpg"
    }, {
        "id": "533",
        "name": "St Nicholas Ave @ 181 St",
        "url": "http://207.251.86.238/cctv477.jpg"
    }, {
        "id": "901",
        "name": "Stillwell Ave @ 86 St",
        "url": "http://207.251.86.238/cctv789.jpg"
    }, {
        "id": "856",
        "name": "Stillwell Ave @ Surf Ave",
        "url": "http://207.251.86.238/cctv750.jpg"
    }, {
        "id": "826",
        "name": "Third Ave Bridge",
        "url": "http://207.251.86.238/cctv720.jpg"
    }, {
        "id": "535",
        "name": "Union Sq @ 14 St",
        "url": "http://207.251.86.238/cctv474.jpg"
    }, {
        "id": "745",
        "name": "Union tpke @ Little Neck Pkwy",
        "url": "http://207.251.86.238/cctv693.jpg"
    }, {
        "id": "1119",
        "name": "Van Dam St @ 48 Ave",
        "url": "http://207.251.86.238/cctv996.jpg"
    }, {
        "id": "1142",
        "name": "Van Dam St @ 48 Ave",
        "url": "http://207.251.86.238/cctv1018.jpg"
    }, {
        "id": "1120",
        "name": "Van Dam St Bet. 48 Ave & Hunter Pt",
        "url": "http://207.251.86.238/cctv997.jpg"
    }, {
        "id": "1143",
        "name": "Van Dam St Bet. 48 Ave & Hunter Pt",
        "url": "http://207.251.86.238/cctv1019.jpg"
    }, {
        "id": "584",
        "name": "Van Wyck Expwy @ 101  Ave SB",
        "url": "http://207.251.86.238/cctv590.jpg"
    }, {
        "id": "582",
        "name": "Van Wyck Expwy @ 101 Ave NB",
        "url": "http://207.251.86.238/cctv589.jpg"
    }, {
        "id": "581",
        "name": "Van Wyck Expwy @ 109 Ave",
        "url": "http://207.251.86.238/cctv588.jpg"
    }, {
        "id": "579",
        "name": "Van Wyck Expwy @ 111 Ave",
        "url": "http://207.251.86.238/cctv587.jpg"
    }, {
        "id": "562",
        "name": "Van Wyck Expwy @ 133 Ave SB",
        "url": "http://207.251.86.238/cctv581.jpg"
    }, {
        "id": "590",
        "name": "Van Wyck Expwy @ 87 Ave",
        "url": "http://207.251.86.238/cctv594.jpg"
    }, {
        "id": "586",
        "name": "Van Wyck Expwy @ 91 Ave",
        "url": "http://207.251.86.238/cctv592.jpg"
    }, {
        "id": "568",
        "name": "Van Wyck Expwy @ Alwick Rd SB",
        "url": "http://207.251.86.238/cctv582.jpg"
    }, {
        "id": "585",
        "name": "Van Wyck Expwy @ Atlantic Ave",
        "url": "http://207.251.86.238/cctv591.jpg"
    }, {
        "id": "926",
        "name": "Van Wyck Expwy @ Avery Ave",
        "url": "http://207.251.86.238/cctv815.jpg"
    }, {
        "id": "599",
        "name": "Van Wyck Expwy @ College Point Blvd.",
        "url": "http://207.251.86.238/cctv600.jpg"
    }, {
        "id": "575",
        "name": "Van Wyck Expwy @ Foch Blvd. SB",
        "url": "http://207.251.86.238/cctv585.jpg"
    }, {
        "id": "594",
        "name": "Van Wyck Expwy @ GCP/Interchange",
        "url": "http://207.251.86.238/cctv597.jpg"
    }, {
        "id": "587",
        "name": "Van Wyck Expwy @ Hillside Ave",
        "url": "http://207.251.86.238/cctv593.jpg"
    }, {
        "id": "591",
        "name": "Van Wyck Expwy @ Queens Blvd.(entrance ramp)",
        "url": "http://207.251.86.238/cctv595.jpg"
    }, {
        "id": "574",
        "name": "Van Wyck Expwy @ Rockaway Blvd.",
        "url": "http://207.251.86.238/cctv583.jpg"
    }, {
        "id": "391",
        "name": "Van Wyck Expy @ S Conduit Ave LL",
        "url": "http://207.251.86.238/cctv281.jpg"
    }, {
        "id": "155",
        "name": "Victory Blvd @ Bay St",
        "url": "http://207.251.86.238/cctv171.jpg"
    }, {
        "id": "154",
        "name": "Victory Blvd @ Jersey St",
        "url": "http://207.251.86.238/cctv170.jpg"
    }, {
        "id": "340",
        "name": "Victory Blvd WOF Campus Dr",
        "url": "http://207.251.86.238/cctv232.jpg"
    }, {
        "id": "954",
        "name": "VWE-02-NB_at_S.Cnduit_Av_UL-Ex1",
        "url": "http://207.251.86.238/cctv842.jpg"
    }, {
        "id": "955",
        "name": "VWE-04-NB_at_133rd_Ave-Ex1",
        "url": "http://207.251.86.238/cctv843.jpg"
    }, {
        "id": "956",
        "name": "VWE-21A-NB_at_QnsBlvd-Et.Rmp-Ex9",
        "url": "http://207.251.86.238/cctv844.jpg"
    }, {
        "id": "958",
        "name": "VWE-26-NB_at_GCP-Intr.-Ex14",
        "url": "http://207.251.86.238/cctv846.jpg"
    }, {
        "id": "959",
        "name": "VWE-27-NB_at_73rd_Terrace-Ex11",
        "url": "http://207.251.86.238/cctv847.jpg"
    }, {
        "id": "960",
        "name": "VWE-29-SB_at_LIE-Ex12",
        "url": "http://207.251.86.238/cctv848.jpg"
    }, {
        "id": "961",
        "name": "VWE-32-NB_at_Northern_Blvd-Ex13",
        "url": "http://207.251.86.238/cctv849.jpg"
    }, {
        "id": "678",
        "name": "VWE08 NB at Foch Blvd - Ex2",
        "url": "http://207.251.86.238/cctv584.jpg"
    }, {
        "id": "914",
        "name": "Washington St @ Prospect St",
        "url": "http://207.251.86.238/cctv802.jpg"
    }, {
        "id": "339",
        "name": "Water St @ John St",
        "url": "http://207.251.86.238/cctv213.jpg"
    }, {
        "id": "338",
        "name": "Water St @ Wall St",
        "url": "http://207.251.86.238/cctv212.jpg"
    }, {
        "id": "985",
        "name": "Water St @ Whitehall",
        "url": "http://207.251.86.238/cctv873.jpg"
    }, {
        "id": "1103",
        "name": "WBB #25 SIR 4 @ Bklyn Twr",
        "url": "http://207.251.86.238/cctv980.jpg"
    }, {
        "id": "1125",
        "name": "WBB #25 SIR 4 @ Bklyn Twr",
        "url": "http://207.251.86.238/cctv1002.jpg"
    }, {
        "id": "1104",
        "name": "WBB #9 SIR 3 @ Mid Span",
        "url": "http://207.251.86.238/cctv981.jpg"
    }, {
        "id": "1126",
        "name": "WBB #9 SIR 3 @ Mid Span",
        "url": "http://207.251.86.238/cctv1003.jpg"
    }, {
        "id": "1091",
        "name": "WBB - 6A South Rdwy @ Delancey St & Clinton St",
        "url": "http://207.251.86.238/cctv969.jpg"
    }, {
        "id": "1092",
        "name": "WBB \u2013 10 NIR-4 @ FDR RD",
        "url": "http://207.251.86.238/cctv970.jpg"
    }, {
        "id": "1094",
        "name": "WBB SIR - 1 @ Manhattan Anchorage",
        "url": "http://207.251.86.238/cctv972.jpg"
    }, {
        "id": "458",
        "name": "WBB-18 @ SOR Cntr Span",
        "url": "http://207.251.86.238/cctv374.jpg"
    }, {
        "id": "1163",
        "name": "WBB-26 SIR @ Kent Ave",
        "url": "http://207.251.86.238/cctv1034.jpg"
    }, {
        "id": "456",
        "name": "WBB-6 North Rdwy @ Delancy St and Clinton St",
        "url": "http://207.251.86.238/cctv361.jpg"
    }, {
        "id": "1080",
        "name": "WBB-7 NIR West of Bklyn Twr",
        "url": "http://207.251.86.238/cctv958.jpg"
    }, {
        "id": "1081",
        "name": "WBB-8 NIR Bklyn Anch./Kent Av",
        "url": "http://207.251.86.238/cctv959.jpg"
    }, {
        "id": "1050",
        "name": "WB_at_CBX-Hutch_Int-EX6A",
        "url": "http://207.251.86.238/cctv935.jpg"
    }, {
        "id": "1036",
        "name": "Webster Ave @ E 165",
        "url": "http://207.251.86.238/cctv922.jpg"
    }, {
        "id": "1034",
        "name": "Webster Ave @ E 180 St",
        "url": "http://207.251.86.238/cctv920.jpg"
    }, {
        "id": "718",
        "name": "West Broadway @ West Houston St",
        "url": "http://207.251.86.238/cctv667.jpg"
    }, {
        "id": "716",
        "name": "West Houston @ Hudson St",
        "url": "http://207.251.86.238/cctv665.jpg"
    }, {
        "id": "725",
        "name": "West Houston @ Varick St",
        "url": "http://207.251.86.238/cctv674.jpg"
    }, {
        "id": "702",
        "name": "West Shore Expy @ Victory Blvd",
        "url": "http://207.251.86.238/cctv653.jpg"
    }, {
        "id": "211",
        "name": "West St @ Canal St",
        "url": "http://207.251.86.238/cctv50.jpg"
    }, {
        "id": "292",
        "name": "West St @ Clarkson",
        "url": "http://207.251.86.238/cctv189.jpg"
    }, {
        "id": "401",
        "name": "West St @ Murray",
        "url": "http://207.251.86.238/cctv71.jpg"
    }, {
        "id": "715",
        "name": "West St @ West Houston St",
        "url": "http://207.251.86.238/cctv664.jpg"
    }, {
        "id": "1230",
        "name": "West st and Battery place",
        "url": "http://207.251.86.238/cctv1123.jpg"
    }, {
        "id": "1227",
        "name": "West st and Chambers",
        "url": "http://207.251.86.238/cctv1120.jpg"
    }, {
        "id": "1228",
        "name": "West st and Fulton",
        "url": "http://207.251.86.238/cctv1121.jpg"
    }, {
        "id": "1229",
        "name": "West st and West Thames (Battery tunnel)",
        "url": "http://207.251.86.238/cctv1122.jpg"
    }, {
        "id": "319",
        "name": "West Street @ Intrepid",
        "url": "http://207.251.86.238/cctv90.jpg"
    }, {
        "id": "602",
        "name": "Whitestone Expwy @ 14 Ave (Median)",
        "url": "http://207.251.86.238/cctv602.jpg"
    }, {
        "id": "601",
        "name": "Whitestone Expwy @ 25 Rd (Median)",
        "url": "http://207.251.86.238/cctv601.jpg"
    }, {
        "id": "1231",
        "name": "Whitestone Expy @ 28 Rd N of Linden Pl",
        "url": "http://207.251.86.238/cctv1196.jpg"
    }, {
        "id": "1077",
        "name": "Woodhaven Blvd @ 101 Ave",
        "url": "http://207.251.86.238/cctv955.jpg"
    }, {
        "id": "1075",
        "name": "Woodhaven Blvd @ 91 Ave",
        "url": "http://207.251.86.238/cctv953.jpg"
    }, {
        "id": "1076",
        "name": "Woodhaven Blvd @ 97 Ave",
        "url": "http://207.251.86.238/cctv954.jpg"
    }, {
        "id": "905",
        "name": "Woodhaven Blvd @ Dry Harbor Rd",
        "url": "http://207.251.86.238/cctv793.jpg"
    }, {
        "id": "796",
        "name": "Woodhaven Blvd @ Furmanville Ave",
        "url": "http://207.251.86.238/cctv703.jpg"
    }, {
        "id": "1072",
        "name": "Woodhaven Blvd @ Hoffman Dr",
        "url": "http://207.251.86.238/cctv950.jpg"
    }, {
        "id": "708",
        "name": "Woodhaven Blvd @ Jamaica Ave",
        "url": "http://207.251.86.238/cctv659.jpg"
    }, {
        "id": "1084",
        "name": "Woodhaven Blvd @ Liberty Ave",
        "url": "http://207.251.86.238/cctv962.jpg"
    }, {
        "id": "792",
        "name": "Woodhaven Blvd @ Myrtle Ave",
        "url": "http://207.251.86.238/cctv701.jpg"
    }, {
        "id": "1074",
        "name": "Woodhaven Blvd @ Park Lane",
        "url": "http://207.251.86.238/cctv952.jpg"
    }, {
        "id": "705",
        "name": "Woodhaven Blvd @ Rockaway Blvd",
        "url": "http://207.251.86.238/cctv656.jpg"
    }, {
        "id": "709",
        "name": "Woodhaven Blvd @ Union Tpke",
        "url": "http://207.251.86.238/cctv660.jpg"
    }, {
        "id": "330",
        "name": "Worth St @ Centre St",
        "url": "http://207.251.86.238/cctv217.jpg"
    }, {
        "id": "433",
        "name": "Worth Street @ Bowery",
        "url": "http://207.251.86.238/cctv323.jpg"
    }, {
        "id": "432",
        "name": "Worth Street @ Lafayette Street",
        "url": "http://207.251.86.238/cctv322.jpg"
    }, {
        "id": "941",
        "name": "York Ave @ 63 St",
        "url": "http://207.251.86.238/cctv826.jpg"
    }]
};
