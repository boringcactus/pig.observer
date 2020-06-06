const DEFAULTS = ["CMR-0039", "CMR-0176", "CMR-0223", "CMR-0088", "CMR-0089", "CMR-0309", "CMR-0257"];
const MANUAL_CACHE_BUST = false;
const CAMERAS = [{
    "coord": [47.526783365445, -122.392755787503],
    "cams": [{
        "id": "CMR-0112",
        "name": "Fauntleroy Way SW & SW Cloverdale St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Fauntleroy_SW_Cloverdale_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5611064685211, -122.38677811046],
    "cams": [{
        "id": "CMR-0093",
        "name": "California Ave SW & SW Alaska St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/California_SW_Alaska_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0038",
        "name": "42nd Ave SW & SW Alaska St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/42_SW_Alaska_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5756262519552, -122.386760647909],
    "cams": [{
        "id": "CMR-0252",
        "name": "California Ave SW & SW Hanford St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/California_SW_Hanford_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5811953428481, -122.386545754984],
    "cams": [{
        "id": "CMR-0251",
        "name": "California Ave SW & SW Admiral Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/California_SW_Admiral_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5811758573888, -122.383888739442],
    "cams": [{
        "id": "CMR-0250",
        "name": "41st Ave SW & SW Admiral Way ",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/41_SW_Admiral_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5611250678466, -122.38148149011],
    "cams": [{
        "id": "CMR-0113",
        "name": "Fauntleroy Way SW & SW Alaska St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Fauntleroy_SW_Alaska_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5174878695499, -122.376884588643],
    "cams": [{
        "id": "CMR-0324",
        "name": "35th Ave SW & SW Roxburty St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/35_SW_Roxbury_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6906091088433, -122.376806120068],
    "cams": [{
        "id": "CMR-0008",
        "name": "15th Ave NW & NW 85th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/15_NW_85_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5210700150219, -122.376761491833],
    "cams": [{
        "id": "CMR-0325",
        "name": "35th Ave SW & SW Barton St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/35_SW_Barton_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6763573642042, -122.376758804153],
    "cams": [{
        "id": "CMR-0007",
        "name": "15th Ave NW & NW 65th St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/15_NW_65_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0006",
        "name": "15th Ave NW & NW 65th St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/15_NW_65_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5337424126265, -122.376618643878],
    "cams": [{
        "id": "CMR-0326",
        "name": "35th Ave SW & SW Holden St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/35_SW_Holden_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5446825743866, -122.376445041825],
    "cams": [{
        "id": "CMR-0323",
        "name": "35th Ave SW & SW Morgan St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/35_SW_Morgan_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6485862077929, -122.376378124213],
    "cams": [{
        "id": "CMR-0012",
        "name": "15th Ave W & W Dravus St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/15_W_Dravus_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6538875432776, -122.37625660604],
    "cams": [{
        "id": "CMR-0013",
        "name": "15th Ave W & W Emerson St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/15_W_Emerson_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6685143331236, -122.376214714437],
    "cams": [{
        "id": "CMR-0010",
        "name": "15th Ave NW & NW Market St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/15_NW_Market_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0011",
        "name": "15th Ave NW & NW Market St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/15_NW_Market_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5651238016122, -122.376185419228],
    "cams": [{
        "id": "CMR-0032",
        "name": "35th Ave SW @ Fauntleroy Way SW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/35_SW_Fauntleroy_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6376608647405, -122.37614275829],
    "cams": [{
        "id": "CMR-0292",
        "name": "15th Ave W & W Armory Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/15_W_Armory_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6636507376882, -122.375301172478],
    "cams": [{
        "id": "CMR-0009",
        "name": "15th Ave NW & NW Leary Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/15_NW_Leary_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5700989519474, -122.372998932967],
    "cams": [{
        "id": "CMR-0230",
        "name": "Harbor Ave SW & S Spokane St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Harbor_SW_Spokane_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0144",
        "name": "W Seattle Bridge near SW Charlestown St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/WSea_FwyPullOut_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6265845211322, -122.368356997257],
    "cams": [{
        "id": "CMR-0108",
        "name": "Elliott Ave W & W Mercer Pl",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Elliott_W_Mercer_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6589442548554, -122.364716102887],
    "cams": [{
        "id": "CMR-2023",
        "name": "Leary Way NW & NW 43rd St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Leary_NW_43_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6206637082587, -122.360928384914],
    "cams": [{
        "id": "CMR-0145",
        "name": "Western Ave & Elliott St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Western_Elliott_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5719553516523, -122.360048337557],
    "cams": [{
        "id": "CMR-0094",
        "name": "Chelan Ave SW & W Marginal Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Chelan_SW_WMarg_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6245829742264, -122.3567092204],
    "cams": [{
        "id": "CMR-0234",
        "name": "Queen Anne Ave N & Roy St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/QAnne_N_Roy_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0135",
        "name": "Queen Anne Ave N & Mercer St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/QAnne_N_Mercer_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5710898158208, -122.356156743638],
    "cams": [{
        "id": "CMR-0143",
        "name": "W Seattle Bridge @ Delridge Way Exit",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/WSB_Delridge_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.72323366965, -122.355546709909],
    "cams": [{
        "id": "CMR-0247",
        "name": "Greenwood Ave N & N 130th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Greenwood_N_130_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.719601359593, -122.355538539101],
    "cams": [{
        "id": "CMR-0246",
        "name": "Greenwood Ave N & N 125th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Greenwood_N_125_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.7141587837849, -122.355515915087],
    "cams": [{
        "id": "CMR-0245",
        "name": "Greenwood Ave N & N 117th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Greenwood_N_117_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6186020668845, -122.355453142208],
    "cams": [{
        "id": "CMR-0017",
        "name": "1st Ave & Denny Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/1_N_Denny_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.7050835418972, -122.355452745492],
    "cams": [{
        "id": "CMR-0206",
        "name": "Greenwood Ave N & N 105th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Greenwood_N_105_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5173603817861, -122.35516490084],
    "cams": [{
        "id": "CMR-0327",
        "name": "16th Ave SW & SW Roxbury St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/16_SW_Roxbury_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0328",
        "name": "15th Ave SW & SW Roxbury St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/15_SW_Roxbury_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.61558794207, -122.354224267395],
    "cams": [{
        "id": "CMR-0171",
        "name": "1st Ave & Broad St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/1_Broad_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0182",
        "name": "Western Ave & Broad St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Western_Broad_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0106",
        "name": "Elliott Ave & Broad St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Elliott_Broad_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6514848607212, -122.35135641689],
    "cams": [{
        "id": "CMR-2024",
        "name": "Fremont Ave N & N 34th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Fremont_N_34_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0109",
        "name": "Evanston Ave N & N 36th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Evanston_N_36_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0114",
        "name": "Fremont Ave N & N 36th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Fremont_N_36_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6128137525168, -122.351186003136],
    "cams": [{
        "id": "CMR-0261",
        "name": "Alaskan Way & Wall St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Alaskan_Wall_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0167",
        "name": "1st Ave & Wall St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/1_Wall_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0168",
        "name": "1st Ave & Wall St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/1_Wall_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0186",
        "name": "Western Ave & Wall St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Western_Wall_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6460832145314, -122.349721404918],
    "cams": [{
        "id": "CMR-0041",
        "name": "4th Ave N & Dexter Ave N",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Westlake_N_Dexter_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5716135958586, -122.349102369545],
    "cams": [{
        "id": "CMR-0001",
        "name": "11th Ave SW & SW Spokane St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/11_SW_Spokane_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0142",
        "name": "W Seattle Bridge Mid-Span",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/WSB_Midspan_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6185762662733, -122.348925203631],
    "cams": [{
        "id": "CMR-0096",
        "name": "4th Ave N & Denny Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/4_Denny_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0051",
        "name": "5th Ave N & Broad St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_Broad_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6245614784179, -122.347571019883],
    "cams": [{
        "id": "CMR-0220",
        "name": "Taylor Ave & Mercer St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Taylor_N_Mercer_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0162",
        "name": "5th Ave & Mercer St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_Mercer_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0163",
        "name": "5th Ave N & Mercer St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_Mercer_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6429973969194, -122.347158115227],
    "cams": [{
        "id": "SR99Raye",
        "name": "SR-99 @ Raye St",
        "url": "https://images.wsdot.wa.gov/nw/099vc03415.jpg"
    }]
}, {
    "coord": [47.6621454421964, -122.347149389976],
    "cams": [{
        "id": "CMR-0077",
        "name": "Aurora Ave N & N 46th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_46_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6160460616869, -122.347025066089],
    "cams": [{
        "id": "CMR-0185",
        "name": "2nd Ave & Battery St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/2_Battery_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0040",
        "name": "4th Ave & Battery St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/4_Battery_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0169",
        "name": "3rd Ave & Wall St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/3_Wall_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0048",
        "name": "5th Ave & Battery St West Side",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_Battery_West.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.7232154241878, -122.346797387064],
    "cams": [{
        "id": "CMR-0074",
        "name": "Aurora Ave N & N 130th St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_130_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0073",
        "name": "Aurora Ave N & N 130th St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_130_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6905682904906, -122.346387043107],
    "cams": [{
        "id": "CMR-0078",
        "name": "Aurora Ave N & N 85th St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_85_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0079",
        "name": "Aurora Ave N & N 87th St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_87_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.7334976926491, -122.345090029483],
    "cams": [{
        "id": "CMR-0075",
        "name": "Aurora Ave N & N 145th St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_145_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0076",
        "name": "Aurora Ave N & N 145th St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_145_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6220647432819, -122.345031226465],
    "cams": [{
        "id": "SR99Harrison",
        "name": "SR-99 @ Harrson St",
        "url": "https://images.wsdot.wa.gov/nw/099vc03266.jpg"
    }, {
        "id": "CMR-0236",
        "name": "Aurora Ave N & Harrison St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_Harrison_NS.stream/playlist.m3u8"
    }, {
        "id": "SR99Republican",
        "name": "SR-99 @ Republican St",
        "url": "https://images.wsdot.wa.gov/nw/099vc03275.jpg"
    }, {
        "id": "CMR-0235",
        "name": "6th Ave N & SR 99",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/6_N_SR99_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.7147767546112, -122.34485254875],
    "cams": [{
        "id": "CMR-0072",
        "name": "Aurora Ave N & N 117th Pl",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_117_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.7050512140763, -122.34469412927],
    "cams": [{
        "id": "CMR-0071",
        "name": "Aurora Ave N & N 105th St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_105_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0070",
        "name": "Aurora Ave N & N 103rd St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_103_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6941856706384, -122.344564970113],
    "cams": [{
        "id": "CMR-0080",
        "name": "Aurora Ave N & N 90th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_90_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6827723734034, -122.34448441424],
    "cams": [{
        "id": "CMR-0082",
        "name": "Aurora Ave N & N Winona St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_Winona_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6180216947241, -122.344451716526],
    "cams": [{
        "id": "CMR-0098",
        "name": "Dexter Ave & Denny Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Dexter_Denny_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0056",
        "name": "6th Ave & Wall St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/6_Wall_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0047",
        "name": "5th Ave & Battery St East Side",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_Battery_East.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6132712237851, -122.344353398467],
    "cams": [{
        "id": "CMR-0264",
        "name": "2nd Ave & Blanchard St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/2_Blanchard_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6262676405473, -122.343599693037],
    "cams": [{
        "id": "CMR-0211",
        "name": "Dexter Ave N & Mercer St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Dexter_N_Mercer_EW.stream/playlist.m3u8"
    }, {
        "id": "SR99Valley",
        "name": "SR-99 @ Valley St",
        "url": "https://images.wsdot.wa.gov/nw/099vc03298.jpg"
    }, {
        "id": "CMR-0081",
        "name": "Aurora Ave N & Ward St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_Ward_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6305863732788, -122.343520715635],
    "cams": [{
        "id": "SR99Comstock",
        "name": "SR-99 @ Comstock St",
        "url": "https://images.wsdot.wa.gov/nw/099vc03329.jpg"
    }]
}, {
    "coord": [47.6357534454735, -122.343482563802],
    "cams": [{
        "id": "CMR-0068",
        "name": "Aurora Ave N & Howe St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_Howe_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6080424828119, -122.341879022605],
    "cams": [{
        "id": "CMR-0165",
        "name": "Alaskan Way & University St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Alaskan_University_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0164",
        "name": "Alaskan Way & Pike St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Alaskan_Pike_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6102747139617, -122.341343432833],
    "cams": [{
        "id": "CMR-0302",
        "name": "2nd Ave & Pike St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/2_Pike_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0303",
        "name": "2nd Ave & Pike St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/2_Pike_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0016",
        "name": "1st Ave & Stewart St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/1_Stewart_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0030",
        "name": "2nd Ave & Stewart St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/2_Stewart_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0034",
        "name": "3rd Ave & Stewart st",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/3_Stewart_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.665034446401, -122.340207471558],
    "cams": [{
        "id": "CMR-0115",
        "name": "Greenlake Way N & N 50th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Greenlake_N_50_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6130625956446, -122.340032897312],
    "cams": [{
        "id": "CMR-0257",
        "name": "4th Ave & Pine St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/4_Pine_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0039",
        "name": "4th Ave & Olive St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/4_Olive_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0170",
        "name": "6th Ave & Lenora St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/6_Lenora_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0174",
        "name": "4th Ave & Virginia St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/4_Virginia_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.575579772593, -122.339990401689],
    "cams": [{
        "id": "CMR-0100",
        "name": "E Marginal Way S & S Hanford St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/EMarg_S_Hanford_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6208789314884, -122.339768872858],
    "cams": [{
        "id": "CMR-0260",
        "name": "Westlake Ave N & Harrison St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Westlake_N_Harrison_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0266",
        "name": "9th Ave N & Thomas St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/9_N_Thomas_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6246868623836, -122.339741460748],
    "cams": [{
        "id": "CMR-0146",
        "name": "Westlake Ave & Valley St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Westlake_Broad_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0203",
        "name": "9th Ave N & Roy St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/9_Broad_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0154",
        "name": "9th Ave N & Mercer St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/9_N_Mercer_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5717003272892, -122.339680068171],
    "cams": [{
        "id": "CMR-0233",
        "name": "E Marginal Way S & S Spokane St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/EMarg_S_Spokane_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5838592083257, -122.339552447146],
    "cams": [{
        "id": "SR99Walker",
        "name": "SR-99 @ S Walker St",
        "url": "https://images.wsdot.wa.gov/nw/099vc02969.jpg"
    }]
}, {
    "coord": [47.5644997971235, -122.339439176042],
    "cams": [{
        "id": "CMR-0102",
        "name": "E Marginal Way S & S Idaho St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/EMarg_S_Idaho_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5799412206267, -122.339339033066],
    "cams": [{
        "id": "SR99Lander",
        "name": "SR-99 @ S Lander St",
        "url": "https://images.wsdot.wa.gov/nw/099vc02946.jpg"
    }, {
        "id": "CMR-0066",
        "name": "SR-99 @ S Lander St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/SR99_Lander_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5574125251765, -122.339110501153],
    "cams": [{
        "id": "CMR-0101",
        "name": "E Marginal Way S @ Hudson St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/EMarg_S_Hudson_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6078281622825, -122.339105334457],
    "cams": [{
        "id": "CMR-0304",
        "name": "3rd Ave & Union St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/3_Union_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0217",
        "name": "1st Ave & Seneca St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/1_Seneca_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0178",
        "name": "1st Ave & Union St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/1_Union_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0069",
        "name": "2nd Ave & University St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/2_University_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.705095075481, -122.338647885626],
    "cams": [{
        "id": "CMR-0228",
        "name": "N 105th St & N Northgate Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Northgate_N_105_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6185342697586, -122.33848456777],
    "cams": [{
        "id": "CMR-0267",
        "name": "Westlake Ave & Denny Way EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Westlake_Denny_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0184",
        "name": "Westlake Ave & Denny Way NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Westlake_Denny_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6037813454162, -122.338424089133],
    "cams": [{
        "id": "CMR-0256",
        "name": "1st Ave & Madison St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/1_Madison_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0153",
        "name": "Alaskan Way & Madison St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Alaskan_Madison_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0065",
        "name": "Alaskan Way & Yesler Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Alaskan_Yesler_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0204",
        "name": "Alaskan Way & Marion St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Alaskan_Marion_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0179",
        "name": "Western Ave & Spring St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Western_Spring_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6150567522376, -122.337454236311],
    "cams": [{
        "id": "CMR-0321",
        "name": "6th Ave & Stewart St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/6_Stewart_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0173",
        "name": "7th Ave & Virginia St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/7_Virginia_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5903192144579, -122.337417197342],
    "cams": [{
        "id": "CMR-0293",
        "name": "Colorado Ave S & S Royal Brougham Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Colorado_S_RoyalB_S_Portal.stream/playlist.m3u8"
    }, {
        "id": "SR99AtlanticE",
        "name": "SR-99 @ S Atlantic St E",
        "url": "https://images.wsdot.wa.gov/nw/099vc03022.jpg"
    }, {
        "id": "SR99AtlanticW",
        "name": "SR-99 @ S Atlantic St W",
        "url": "https://images.wsdot.wa.gov/nw/099vc03015.jpg"
    }, {
        "id": "CMR-0158",
        "name": "Alaskan Way S & S Atlantic St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/EMarg_S_Atlantic_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0157",
        "name": "SR-99 & S Atlantic St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/SR99_Atlantic_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6126653480321, -122.337393603937],
    "cams": [{
        "id": "CMR-0309",
        "name": "5th Ave & Pike St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_Pike_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0176",
        "name": "5th Ave & Pine St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_Pine_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0223",
        "name": "5th Ave & Pine St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_Pine_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0055",
        "name": "6th Ave & Pine St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/6_Pine_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0046",
        "name": "5th Ave & Westlake Ave",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_Westlake_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6246851329908, -122.337130441839],
    "cams": [{
        "id": "CMR-0202",
        "name": "Terry Ave N & Mercer St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Terry_N_Mercer_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6077631776921, -122.335975793525],
    "cams": [{
        "id": "CMR-0305",
        "name": "3rd Ave & Spring St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/3_Spring_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0255",
        "name": "5th Ave & Union St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_Union_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0035",
        "name": "3rd Ave & University St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/3_University_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0191",
        "name": "3rd Ave & Seneca St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/3_Seneca_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.592529936814, -122.335896327176],
    "cams": [{
        "id": "SR99RoyalBrNBRmp",
        "name": "SR-99 @ S Royal Br Way NB on ramp",
        "url": "https://images.wsdot.wa.gov/nw/099vc03042.jpg"
    }, {
        "id": "SR99RoyalBrWay",
        "name": "SR-99 @ S Royal Brougham Way ",
        "url": "https://images.wsdot.wa.gov/nw/099vc03037.jpg"
    }, {
        "id": "CMR-0022",
        "name": "1st Ave S & S Royal Brougham Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/1_S_RoyalB_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5964794288196, -122.335535063331],
    "cams": [{
        "id": "CMR-0294",
        "name": "Alaskan Way S & S Dearborn St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Alaskan_S_Dearborn_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6044464653489, -122.334477234653],
    "cams": [{
        "id": "CMR-0180",
        "name": "4th Ave & Madison St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/4_Madison_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0033",
        "name": "3rd Ave & Columbia St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/3_Columbia_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0265",
        "name": "2nd Ave & James St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/2_James_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0218",
        "name": "2nd Ave & Marion St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/2_Marion_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6156164804957, -122.334436320215],
    "cams": [{
        "id": "CMR-0175",
        "name": "9th Ave & Stewart St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/9_Stewart_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0059",
        "name": "8th Ave & Howell St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/8_Howell_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0172",
        "name": "9th Ave & Pine St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/9_Pine_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6245312629793, -122.334336287868],
    "cams": [{
        "id": "I5MercerRamp",
        "name": "I-5 @ Mercer St, Ramps",
        "url": "https://images.wsdot.wa.gov/nw/005vc16679.jpg"
    }, {
        "id": "CMR-0259",
        "name": "Fairview Ave N & Republican St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Fairview_N_Republican_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0110",
        "name": "Fairview Ave N & N Mercer St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Fairview_Mercer_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6185172890584, -122.334254881063],
    "cams": [{
        "id": "CMR-0315",
        "name": "Fairview Ave & Denny Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Fairview_Denny_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0317",
        "name": "Fairview Ave & Boren Ave",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Fairview_Boren_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5574124436288, -122.334213717238],
    "cams": [{
        "id": "CMR-0243",
        "name": "1st Ave S & S Hudson St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/1_S_Hudson_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5903121649965, -122.334195452719],
    "cams": [{
        "id": "CMR-0020",
        "name": "1st Ave S & S Atlantic St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/1_S_Atlantic_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5715738165183, -122.334194746373],
    "cams": [{
        "id": "CMR-0231",
        "name": "1st Ave S & S Spokane St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/1_S_Spokane_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0159",
        "name": "1st Ave S & Spokane Viaduct",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/1_S_Spokane_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5861085739595, -122.334192270697],
    "cams": [{
        "id": "CMR-0021",
        "name": "1st Ave S & S Holgate St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/1_S_Holgate_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5992048296114, -122.334188031112],
    "cams": [{
        "id": "CMR-0189",
        "name": "1st Ave S & Jackson St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/1_S_Jackson_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6017223394586, -122.334178594358],
    "cams": [{
        "id": "CMR-0310",
        "name": "1st Ave & Yesler Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/1_Yesler_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5480054375079, -122.334167922253],
    "cams": [{
        "id": "CMR-0019",
        "name": "1st Ave S & E Marginal Way S",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/1_S_EMarg_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5445712279814, -122.334134079067],
    "cams": [{
        "id": "SR99Michigan",
        "name": "SR-99 @ S Michigan St",
        "url": "https://images.wsdot.wa.gov/nw/099vc02701.jpg"
    }]
}, {
    "coord": [47.7086630675308, -122.333993043483],
    "cams": [{
        "id": "CMR-0229",
        "name": "Meridian Ave N & N Northgate Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Meridian_N_Northgate_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5368709324057, -122.333838848747],
    "cams": [{
        "id": "SR99WMarg",
        "name": "SR-99 @ West Marginal Way",
        "url": "https://images.wsdot.wa.gov/nw/099vc02671.jpg"
    }]
}, {
    "coord": [47.5266733814464, -122.333752432553],
    "cams": [{
        "id": "SR509Cloverdale",
        "name": "SR-509 @ S Cloverdale St",
        "url": "https://images.wsdot.wa.gov/nw/509vc02956.jpg"
    }]
}, {
    "coord": [47.6116063503657, -122.333353806917],
    "cams": [{
        "id": "I5UniversitySB",
        "name": "I-5 @ University St, SB",
        "url": "https://images.wsdot.wa.gov/nw/005vc16571.jpg"
    }, {
        "id": "I5UniversityRamp",
        "name": "I-5 @ University St Ramp",
        "url": "https://images.wsdot.wa.gov/nw/005vc16574.jpg"
    }, {
        "id": "I5UniversityNB",
        "name": "I-5 @ University St, NB",
        "url": "https://images.wsdot.wa.gov/nw/005vc16580.jpg"
    }, {
        "id": "I5UnionRev",
        "name": "I-5 @ Union St, REV",
        "url": "https://images.wsdot.wa.gov/nw/005vc16588.jpg"
    }, {
        "id": "CMR-0058",
        "name": "7th Ave & Pike St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/7_Pike_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.627229798797, -122.332738264644],
    "cams": [{
        "id": "CMR-0111",
        "name": "Fairview Ave N @ Valley St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Fairview_Valley_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6072663106152, -122.332451280888],
    "cams": [{
        "id": "CMR-0291",
        "name": "5th Ave & Spring St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_Spring_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0181",
        "name": "5th Ave & Madison St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_Madison_EW.stream/playlist.m3u8"
    }, {
        "id": "I5Seneca",
        "name": "I-5 @ Seneca St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16563.jpg"
    }, {
        "id": "CMR-0194",
        "name": "5th Ave & Marion St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_Marion_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0188",
        "name": "6th Ave & Seneca St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/6_Seneca_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0050",
        "name": "5th Ave & Madison St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_Madison_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5341477690239, -122.332132652351],
    "cams": [{
        "id": "SR99Holden",
        "name": "SR-99 @ S Holden St",
        "url": "https://images.wsdot.wa.gov/nw/099vc02605.jpg"
    }]
}, {
    "coord": [47.5448814252887, -122.331306047744],
    "cams": [{
        "id": "CMR-0044",
        "name": "4th Ave S & Michigan St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/4_S_Michigan_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0103",
        "name": "E Marginal Way S & S Michigan St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/EMarg_S_Michigan_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.603825431736, -122.33124065872],
    "cams": [{
        "id": "CMR-0308",
        "name": "4th Ave & James St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/4_James_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0318",
        "name": "6th Ave & Cherry St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/6_Cherry_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0036",
        "name": "3rd Ave & Yesler Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/3_Yesler_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0049",
        "name": "5th Ave & James St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_James_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0155",
        "name": "4th Ave & Cherry St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/4_Cherry_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0156",
        "name": "4th Ave & Cherry St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/4_Cherry_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6182737638499, -122.330999409799],
    "cams": [{
        "id": "CMR-0316",
        "name": "Howell St & Minor Ave",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Minor_Howell_EW.stream/playlist.m3u8"
    }, {
        "id": "I5JohnRev",
        "name": "I-5 @ John St, REV",
        "url": "https://images.wsdot.wa.gov/nw/005vc16644.jpg"
    }, {
        "id": "CMR-0104",
        "name": "Eastlake Ave E & E Stewart St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Eastlake_E_Stewart_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0097",
        "name": "Denny Way & Yale St / Stewart St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Stewart_Denny_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.613061916438, -122.330452164904],
    "cams": [{
        "id": "CMR-0312",
        "name": "Boren Ave & Pike St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Boren_Pike_EW.stream/playlist.m3u8"
    }, {
        "id": "I5PikeNB",
        "name": "I-5 @ Pike St, NB",
        "url": "https://images.wsdot.wa.gov/nw/005vc16598.jpg"
    }, {
        "id": "I5PikeRev",
        "name": "I-5 @ Pike St REV",
        "url": "https://images.wsdot.wa.gov/nw/005vc16602.jpg"
    }, {
        "id": "I5PikeSB",
        "name": "I-5 @ Pike St, SB",
        "url": "https://images.wsdot.wa.gov/nw/005vc16597.jpg"
    }, {
        "id": "I5Pine",
        "name": "I-5 @ Pine St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16607.jpg"
    }]
}, {
    "coord": [47.7544203765442, -122.330440354288],
    "cams": [{
        "id": "I5175S",
        "name": "I-5 @ NE 175th St, S",
        "url": "https://images.wsdot.wa.gov/nw/005vc17603.jpg"
    }]
}, {
    "coord": [47.5999913152798, -122.330342446612],
    "cams": [{
        "id": "CMR-0311",
        "name": "4th Ave S & S Washington St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/4_S_Washington_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0320",
        "name": "2nd Ave Ext S & S Main St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/2_Ext_Main_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0043",
        "name": "4th Ave S & S Jackson St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/4_S_Jackson_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5167459280615, -122.33010663801],
    "cams": [{
        "id": "SR50996",
        "name": "SR-509 @ S 96th St",
        "url": "https://images.wsdot.wa.gov/nw/509vc02893.jpg"
    }]
}, {
    "coord": [47.7059242634874, -122.330013852289],
    "cams": [{
        "id": "I5107",
        "name": "I-5 @ NE 107th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc17263.jpg"
    }, {
        "id": "I5NGW",
        "name": "I-5 @ Northgate Way",
        "url": "https://images.wsdot.wa.gov/nw/005vc17277.jpg"
    }]
}, {
    "coord": [47.5923770079254, -122.33000137074],
    "cams": [{
        "id": "CMR-0314",
        "name": "4th Ave S & S Royal Brougham Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/4_S_RoyalB_EW.stream/playlist.m3u8"
    }, {
        "id": "I903",
        "name": "I-90 @ 3rd Ave S",
        "url": "https://images.wsdot.wa.gov/nw/090vc00202.jpg"
    }, {
        "id": "I904",
        "name": "I-90 @ 4th Ave S",
        "url": "https://images.wsdot.wa.gov/nw/090vc00207.jpg"
    }, {
        "id": "CMR-0042",
        "name": "4th Ave S & S Atlantic St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/4_S_Atlantic_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0045",
        "name": "4th Ave S s/o I-90 TD",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/4_S_I90_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6069690255386, -122.329695072368],
    "cams": [{
        "id": "I5MarionRev",
        "name": "I-5 @ Marion St Rev",
        "url": "https://images.wsdot.wa.gov/nw/005vc16556.jpg"
    }, {
        "id": "I5Marion",
        "name": "I-5 @ Marion St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16550.jpg"
    }]
}, {
    "coord": [47.6258990107112, -122.329357642907],
    "cams": [{
        "id": "I5MercerRev",
        "name": "I-5 @ Mercer St, REV",
        "url": "https://images.wsdot.wa.gov/nw/005vc16675.jpg"
    }, {
        "id": "I5MercerNBRamps",
        "name": "I-5 @ Mercer St NB Ramps",
        "url": "https://images.wsdot.wa.gov/nw/005vc16687.jpg"
    }, {
        "id": "I5Mercer",
        "name": "I-5 @ Mercer St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16702.jpg"
    }]
}, {
    "coord": [47.7471190991167, -122.329143223748],
    "cams": [{
        "id": "I5MetroBusBarn",
        "name": "I-5 @ METRO Bus Barn",
        "url": "https://images.wsdot.wa.gov/nw/005vc17552.jpg"
    }]
}, {
    "coord": [47.5715761413729, -122.329103756928],
    "cams": [{
        "id": "CMR-0160",
        "name": "4th Ave S & Spokane Viaduct",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/4_S_Spokane_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0232",
        "name": "4th Ave S & S Spokane St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/4_S_Spokane_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.586170117905, -122.329062263223],
    "cams": [{
        "id": "CMR-0262",
        "name": "4th Ave S & S Holgate St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/4_S_Holgate_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6904533643645, -122.32888979798],
    "cams": [{
        "id": "I585",
        "name": "I-5 @ NE 85th st",
        "url": "https://images.wsdot.wa.gov/nw/005vc17153.jpg"
    }]
}, {
    "coord": [47.7408629682472, -122.328675618726],
    "cams": [{
        "id": "I5155",
        "name": "I-5 @ NE 155th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc17510.jpg"
    }]
}, {
    "coord": [47.6205535179359, -122.328645695205],
    "cams": [{
        "id": "I5DennyWay",
        "name": "I-5 @ Denny Way",
        "url": "https://images.wsdot.wa.gov/nw/005vc16645.jpg"
    }]
}, {
    "coord": [47.7086287210764, -122.32863426516],
    "cams": [{
        "id": "CMR-0018",
        "name": "1st Ave NE & NE Northgate Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/1_NE_Northgate_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.757083603028, -122.32830407468],
    "cams": [{
        "id": "I5175N",
        "name": "I-5 @ NE 175th St, N",
        "url": "https://images.wsdot.wa.gov/nw/005vc17627.jpg"
    }]
}, {
    "coord": [47.595794048079, -122.327683359293],
    "cams": [{
        "id": "CMR-0053",
        "name": "5th Ave S & S Dearborn St / Airport Way S",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_S_Dearborn_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6008733303239, -122.327659715466],
    "cams": [{
        "id": "CMR-0258",
        "name": "5th Ave S & S Washington St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_S_Washington_NS.stream/playlist.m3u8"
    }, {
        "id": "I5Yesler",
        "name": "I-5 @ Yesler St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16508.jpg"
    }]
}, {
    "coord": [47.6046251801379, -122.32697031433],
    "cams": [{
        "id": "CMR-0319",
        "name": "7th Ave & James St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/7_James_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0060",
        "name": "9th Ave & James St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/9_James_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6107654358673, -122.326444271777],
    "cams": [{
        "id": "CMR-0088",
        "name": "Boren Ave & Madison St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Boren_Madison_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0089",
        "name": "Boren Ave & Seneca St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Boren_Seneca_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6867817999298, -122.326283677026],
    "cams": [{
        "id": "I580Rev",
        "name": "I-5 @ NE 80th St, Rev",
        "url": "https://images.wsdot.wa.gov/nw/005vc17124.jpg"
    }]
}, {
    "coord": [47.5462500030823, -122.326153219037],
    "cams": [{
        "id": "CMR-0244",
        "name": "6th Ave S & S Michigan St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/6_S_Michigan_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5713810393612, -122.325959659239],
    "cams": [{
        "id": "CMR-0057",
        "name": "6th Ave S & S Spokane St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/6_S_Spokane_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.7158824495625, -122.325692003751],
    "cams": [{
        "id": "I5120",
        "name": "I-5 @ NE 120th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc17338.jpg"
    }]
}, {
    "coord": [47.6649531437703, -122.325619609701],
    "cams": [{
        "id": "CMR-0116",
        "name": "Latona Ave NE & NE 50th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Latona_NE_50_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5991907580923, -122.325055208023],
    "cams": [{
        "id": "CMR-0306",
        "name": "S Jackson St & Maynard Ave S",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Maynard_S_Jackson_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.7086021690831, -122.324517229029],
    "cams": [{
        "id": "CMR-0134",
        "name": "5th Ave NE & NE Northgate Way EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_NE_Northgate_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0226",
        "name": "5th Ave NE & Northgate Way 2",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_NE_Northgate2.stream/playlist.m3u8"
    }, {
        "id": "CMR-0052",
        "name": "5th Ave NE & NE Northgate Way NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/5_NE_Northgate_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5264711264479, -122.324292895006],
    "cams": [{
        "id": "SR99Cloverdale",
        "name": "SR-99 @ S Cloverdale St",
        "url": "https://images.wsdot.wa.gov/nw/099vc02545.jpg"
    }]
}, {
    "coord": [47.5929299760437, -122.323884725507],
    "cams": [{
        "id": "I90AirportWayWB",
        "name": "I-90 @ Airport Way WB",
        "url": "https://images.wsdot.wa.gov/nw/090vc00237.jpg"
    }]
}, {
    "coord": [47.7631215972442, -122.323642734863],
    "cams": [{
        "id": "I5195",
        "name": "I-5 @ NE 195th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc17720.jpg"
    }]
}, {
    "coord": [47.723119338455, -122.323564666173],
    "cams": [{
        "id": "I5130",
        "name": "I-5 @ NE 130th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc17386.jpg"
    }]
}, {
    "coord": [47.6423682937089, -122.322867474489],
    "cams": [{
        "id": "I5Roanoke",
        "name": "I-5 @ Roanoke St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16802.jpg"
    }]
}, {
    "coord": [47.733879337139, -122.322858747001],
    "cams": [{
        "id": "I5145",
        "name": "I-5 @ NE 145th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc17461.jpg"
    }]
}, {
    "coord": [47.564885610065, -122.322774162253],
    "cams": [{
        "id": "I5Oregon",
        "name": "I-5 @ S Oregon St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16237.jpg"
    }, {
        "id": "CMR-0061",
        "name": "Airport Way S & S Industrial Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Airport_S_Industrial_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6545142975276, -122.322600748414],
    "cams": [{
        "id": "I5SCB",
        "name": "I-5 @ Ship Canal Bridge",
        "url": "https://images.wsdot.wa.gov/nw/005vc16887.jpg"
    }]
}, {
    "coord": [47.6498191703927, -122.322561390285],
    "cams": [{
        "id": "I5EastlakeRev",
        "name": "I-5 @ Eastlake Ave, Rev",
        "url": "https://images.wsdot.wa.gov/nw/005vc16859.jpg"
    }, {
        "id": "CMR-0105",
        "name": "Harvard Ave E & Eastlake Ave E",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Eastlake_E_Harvard_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.661328228727, -122.322159610332],
    "cams": [{
        "id": "I545",
        "name": "I-5 @ NE 45th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16939.jpg"
    }]
}, {
    "coord": [47.6652334378005, -122.321724659768],
    "cams": [{
        "id": "I550",
        "name": "I-5 @ NE 50th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16965.jpg"
    }]
}, {
    "coord": [47.5585357440512, -122.321538696725],
    "cams": [{
        "id": "I5Hudson",
        "name": "I-5 @ S Hudson St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16195.jpg"
    }, {
        "id": "I5Ferdinand",
        "name": "I-5 @ S Ferdinand St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16204.jpg"
    }]
}, {
    "coord": [47.5475029552911, -122.321438928243],
    "cams": [{
        "id": "CMR-0249",
        "name": "Carleton Ave S & S Bailey St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Carleton_S_Bailey_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0095",
        "name": "Corson Ave S & S Bailey St / S Michigan St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Corson_S_Bailey_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5798078132385, -122.321397755729],
    "cams": [{
        "id": "I5Forest",
        "name": "I-5 @ S Forest St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16342.jpg"
    }, {
        "id": "CMR-0062",
        "name": "Airport Way S & S Lander St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Airport_S_Lander_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6819432005947, -122.321160490137],
    "cams": [{
        "id": "SR522I5Ramps",
        "name": "SR-522 @ I-5 Ramps",
        "url": "https://images.wsdot.wa.gov/nw/522vc00034.jpg"
    }, {
        "id": "I5LakeCityWayRev",
        "name": "I-5 @ Lake City Way, REV",
        "url": "https://images.wsdot.wa.gov/nw/005vc17082.jpg"
    }, {
        "id": "I5LCW",
        "name": "I-5 @ Lake City Way",
        "url": "https://images.wsdot.wa.gov/nw/005vc17078.jpg"
    }]
}, {
    "coord": [47.6250492040136, -122.320892987778],
    "cams": [{
        "id": "CMR-0092",
        "name": "Broadway & E Roy St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Broadway_E_Roy_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.619907747612, -122.320872891674],
    "cams": [{
        "id": "CMR-0313",
        "name": "Broadway & E John St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Broadway_E_John_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6568207553148, -122.320849587232],
    "cams": [{
        "id": "I5742",
        "name": "I-5 @ 7th Ave NE @ NE 42nd St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16908.jpg"
    }]
}, {
    "coord": [47.613779257072, -122.320775573091],
    "cams": [{
        "id": "CMR-0090",
        "name": "Broadway & E Pike St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Broadway_E_Pike_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0091",
        "name": "Broadway & E Pike St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Broadway_E_Pike_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6072184199276, -122.320752363658],
    "cams": [{
        "id": "CMR-0307",
        "name": "Broadway & James St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Broadway_E_James_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5936599330367, -122.320353131175],
    "cams": [{
        "id": "I90NBtoEBramp",
        "name": "I-90 @ I-5 NB to EB Ramp",
        "url": "https://images.wsdot.wa.gov/nw/090vc00255.jpg"
    }, {
        "id": "I5I90",
        "name": "I-5 & I-90 Interchange",
        "url": "https://images.wsdot.wa.gov/nw/090vc00245.jpg"
    }]
}, {
    "coord": [47.5837355209811, -122.319976367805],
    "cams": [{
        "id": "I5Walker",
        "name": "I-5 @ S Walker St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16377.jpg"
    }]
}, {
    "coord": [47.5707672968377, -122.319947962659],
    "cams": [{
        "id": "I5Court",
        "name": "I-5 @ S Court St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16287.jpg"
    }, {
        "id": "I5Spokane",
        "name": "I-5 @ S Spokane St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16297.jpg"
    }]
}, {
    "coord": [47.5860093485833, -122.319651975222],
    "cams": [{
        "id": "I5Holgate",
        "name": "I-5 @ S Holgate St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16396.jpg"
    }]
}, {
    "coord": [47.6824903573992, -122.318191907741],
    "cams": [{
        "id": "SR522Roosevelt",
        "name": "SR-522 & Roosevelt Tunnel",
        "url": "https://images.wsdot.wa.gov/nw/522vc00048.jpg"
    }, {
        "id": "CMR-0139",
        "name": "Roosevelt Ave NE & NE 75th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Roosevelt_NE_75_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5991890635057, -122.317222846502],
    "cams": [{
        "id": "CMR-0002",
        "name": "12th Ave S & Boren Ave S",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/12_S_Boren_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0193",
        "name": "12th Ave S & S Jackson St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/12_S_Jackson_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.7847201419572, -122.316540499754],
    "cams": [{
        "id": "I5236",
        "name": "I-5 @ 236th St SW",
        "url": "https://images.wsdot.wa.gov/nw/005vc17828.jpg"
    }]
}, {
    "coord": [47.5198199296859, -122.316446706859],
    "cams": [{
        "id": "SR99DesMoines",
        "name": "SR-99 @ Des Moines Mem Drive",
        "url": "https://images.wsdot.wa.gov/nw/099vc02481.jpg"
    }]
}, {
    "coord": [47.6649173423808, -122.315238736955],
    "cams": [{
        "id": "CMR-0225",
        "name": "12th Ave NE & NE 50th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/12_NE_50_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5264329899026, -122.31501862852],
    "cams": [{
        "id": "CMR-0003",
        "name": "14th Ave S & S Cloverdale St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/14_S_Cloverdale_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.7981553549713, -122.3145955773],
    "cams": [{
        "id": "I5220",
        "name": "I-5 @ 220th St SW",
        "url": "https://images.wsdot.wa.gov/nw/005vc17928.jpg"
    }]
}, {
    "coord": [47.5950826382885, -122.314532431565],
    "cams": [{
        "id": "I90CorwinPl",
        "name": "I-90 @ Corwin Pl",
        "url": "https://images.wsdot.wa.gov/nw/090vc00292.jpg"
    }]
}, {
    "coord": [47.5992367401292, -122.314174340809],
    "cams": [{
        "id": "CMR-0004",
        "name": "14th Ave S & S Jackson St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/14_S_Jackson_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5342672543368, -122.31319753214],
    "cams": [{
        "id": "CMR-0099",
        "name": "E Marginal Way S & 16th Ave S",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/EMarg_S_16_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6830594119807, -122.313171390387],
    "cams": [{
        "id": "CMR-0005",
        "name": "15th Ave NE & NE 75th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/15_NE_75_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6529759648743, -122.312464144313],
    "cams": [{
        "id": "CMR-0214",
        "name": "15th Ave NE & NE Pacific St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/15_NE_Pacific_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.7085284071896, -122.312430359882],
    "cams": [{
        "id": "CMR-0227",
        "name": "15th Ave NE & NE Northgate Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/15_NE_Northgate_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6562056506076, -122.312126423703],
    "cams": [{
        "id": "CMR-0215",
        "name": "15th Ave NE & NE Campus Pkwy",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/15_NE_Campus_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6866249590887, -122.312069743646],
    "cams": [{
        "id": "CMR-0117",
        "name": "16th Ave NE & Lake City Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/LCW_NE_16_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0118",
        "name": "15th Ave NE & NE 80th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/15_NE_80_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6612619540965, -122.311993309104],
    "cams": [{
        "id": "CMR-0216",
        "name": "15th Ave NE & NE 45th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/15_NE_45_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5485670761825, -122.311731349827],
    "cams": [{
        "id": "I5Albro/Swift",
        "name": "I-5 @ Albro Pl/Swift Ave",
        "url": "https://images.wsdot.wa.gov/nw/005vc16122.jpg"
    }, {
        "id": "I5Albro",
        "name": "I-5 @ S Albro St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16123.jpg"
    }]
}, {
    "coord": [47.595873882117, -122.311529602467],
    "cams": [{
        "id": "CMR-0136",
        "name": "Rainier Ave S & S Dearborn St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Dearborn_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6150445597966, -122.311459488251],
    "cams": [{
        "id": "CMR-0014",
        "name": "16th Ave E & E Madison St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/16_E_Madison_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.2898232414808, -122.310131705601],
    "cams": [{
        "id": "I5SR18West",
        "name": "I-5 @ SR-18, West",
        "url": "https://images.wsdot.wa.gov/nw/005vc14196.jpg"
    }]
}, {
    "coord": [47.6757805303696, -122.308714404261],
    "cams": [{
        "id": "CMR-0015",
        "name": "18th Ave NE & NE 65th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/18_NE_65_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5462630375419, -122.30828008982],
    "cams": [{
        "id": "I5Graham",
        "name": "I-5 @ S Graham St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16097.jpg"
    }, {
        "id": "I5SwiftRamp",
        "name": "I-5 @ Swift Ave, NB Ramp",
        "url": "https://images.wsdot.wa.gov/nw/005vc16103.jpg"
    }]
}, {
    "coord": [47.5905601829465, -122.307469295992],
    "cams": [{
        "id": "CMR-0279",
        "name": "Rainier Ave S & S Massachusetts St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Massachusetts_NS.stream/playlist.m3u8"
    }, {
        "id": "I90Rainier",
        "name": "I-90 @ Rainier Ave S",
        "url": "https://images.wsdot.wa.gov/nw/090vc00329.jpg"
    }]
}, {
    "coord": [47.2861230345386, -122.307232241989],
    "cams": [{
        "id": "I5SR18South",
        "name": "I-5 @ SR 18, South",
        "url": "https://images.wsdot.wa.gov/nw/005vc14188.jpg"
    }]
}, {
    "coord": [47.2898232841511, -122.306034730133],
    "cams": [{
        "id": "I5SR18",
        "name": "I-5 & SR-18",
        "url": "https://images.wsdot.wa.gov/nw/005vc14205.jpg"
    }]
}, {
    "coord": [47.6440481487706, -122.305511873391],
    "cams": [{
        "id": "SR520MontlakeRmp",
        "name": "SR-520 @ Montlake Ramp",
        "url": "https://images.wsdot.wa.gov/nw/520vc00095.jpg"
    }, {
        "id": "SR52020",
        "name": "SR-520 @ 20th Ave E",
        "url": "https://images.wsdot.wa.gov/nw/520vc00083.jpg"
    }, {
        "id": "CMR-0129",
        "name": "Montlake Blvd NE & NE Lake Washington Blvd",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Montlake_E_LakeWash_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6490160751425, -122.30460365605],
    "cams": [{
        "id": "CMR-0132",
        "name": "Montlake Blvd E & Pacific St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Montlake_NE_Pacific_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0131",
        "name": "Montlake Blvd NE @ NE Pacific St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Montlake_NE_Pacific_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6184201499922, -122.303650196027],
    "cams": [{
        "id": "CMR-0025",
        "name": "23rd Ave E & E Madison St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/23_E_Madison_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0026",
        "name": "23rd Ave E & E Madison St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/23_E_Madison_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5845418647111, -122.302909504046],
    "cams": [{
        "id": "CMR-0213",
        "name": "Rainier Ave S & S Hill St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Hill_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6082657222401, -122.302768189568],
    "cams": [{
        "id": "CMR-0024",
        "name": "23rd Ave E & E Cherry St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/23_E_Cherry_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0023",
        "name": "23rd Ave E & E Cherry St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/23_E_Cherry_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5918931226422, -122.302500166511],
    "cams": [{
        "id": "CMR-0300",
        "name": "23rd Ave S & S Judkins St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/23_S_Judkins_NS.stream/playlist.m3u8"
    }, {
        "id": "I9018",
        "name": "I-90 @ 18th Ave S",
        "url": "https://images.wsdot.wa.gov/nw/090vc00318.jpg"
    }]
}, {
    "coord": [47.6043269613021, -122.302427170314],
    "cams": [{
        "id": "CMR-0242",
        "name": "23rd Ave & E Alder St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/23_Alder_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5995592091369, -122.302234233208],
    "cams": [{
        "id": "CMR-0027",
        "name": "23rd Ave S & S Jackson St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/23_S_Jackson_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0028",
        "name": "23rd Ave S & S Jackson St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/23_S_Jackson_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5955706966396, -122.302222006208],
    "cams": [{
        "id": "CMR-0299",
        "name": "23rd Ave S & S Dearborn St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/23_S_Dearborn_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5086817642504, -122.301994083173],
    "cams": [{
        "id": "SR99102",
        "name": "SR-99 @ S102nd St",
        "url": "https://images.wsdot.wa.gov/nw/099vc02375.jpg"
    }]
}, {
    "coord": [47.3021535806456, -122.301714934861],
    "cams": [{
        "id": "I5333",
        "name": "I-5 @ S 333rd St",
        "url": "https://images.wsdot.wa.gov/nw/005vc14300.jpg"
    }]
}, {
    "coord": [47.6590590452522, -122.301149172458],
    "cams": [{
        "id": "CMR-0130",
        "name": "Montlake Blvd NE & 25th Ave NE",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Montlake_NE_25_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6442909314318, -122.300868181418],
    "cams": [{
        "id": "SR52025",
        "name": "SR-520 @ 25th Ave E",
        "url": "https://images.wsdot.wa.gov/nw/520vc00117.jpg"
    }, {
        "id": "SR520Montlake",
        "name": "SR-520 @ Montlake Blvd",
        "url": "https://images.wsdot.wa.gov/nw/520vc00093.jpg"
    }]
}, {
    "coord": [47.6757742208191, -122.300651546798],
    "cams": [{
        "id": "CMR-0029",
        "name": "25th Ave NE & NE 66th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/25_NE_66_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5385732800319, -122.300283826649],
    "cams": [{
        "id": "I5MidBoeing",
        "name": "I-5 @ Mid Boeing Field",
        "url": "https://images.wsdot.wa.gov/nw/005vc15970.jpg"
    }]
}, {
    "coord": [47.4654020700073, -122.300173341573],
    "cams": [{
        "id": "SR518154",
        "name": "SR-518 @ S 154th St",
        "url": "https://images.wsdot.wa.gov/nw/518vc00162.jpg"
    }]
}, {
    "coord": [47.8104208452361, -122.299040819612],
    "cams": [{
        "id": "I544",
        "name": "I-5 @ 44th Ave W",
        "url": "https://images.wsdot.wa.gov/nw/005vc18065.jpg"
    }]
}, {
    "coord": [47.534480567524, -122.298849939383],
    "cams": [{
        "id": "I5Webster",
        "name": "I-5 @ S Webster St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16006.jpg"
    }, {
        "id": "CMR-0064",
        "name": "Airport Way S & King County Airport",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Airport_S_Othello_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5783500445387, -122.298150713097],
    "cams": [{
        "id": "CMR-0124",
        "name": "Rainier Ave S at MLK Way S",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Rainier_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0280",
        "name": "Rainier Ave S & S McClellan St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_McClellan_NS.stream/playlist.m3u8"
    }, {
        "id": "CMR-0123",
        "name": "MLK Way S at Rainier Ave S",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Rainier_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5992328403028, -122.297414682213],
    "cams": [{
        "id": "CMR-0270",
        "name": "MLK Jr Way S & S Jackson St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Jackson_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5000197189865, -122.297332034021],
    "cams": [{
        "id": "SR99SR599",
        "name": "SR-99 @ SR-599",
        "url": "https://images.wsdot.wa.gov/nw/099vc02308.jpg"
    }]
}, {
    "coord": [47.3138090222423, -122.297090283746],
    "cams": [{
        "id": "I5320",
        "name": "I-5 @ S 320th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc14379.jpg"
    }]
}, {
    "coord": [47.3577208234647, -122.296834175254],
    "cams": [{
        "id": "I5272",
        "name": "I-5 @ S 272nd St",
        "url": "https://images.wsdot.wa.gov/nw/005vc14683.jpg"
    }]
}, {
    "coord": [47.6016561533033, -122.296767841218],
    "cams": [{
        "id": "CMR-0269",
        "name": "MLK Jr Way & E Yesler Way",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/MLK_E_Yesler_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5662923414745, -122.296688931258],
    "cams": [{
        "id": "CMR-0271",
        "name": "MLK Jr Way S & S Dakota St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Dakota_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6079966244096, -122.296254306729],
    "cams": [{
        "id": "CMR-0268",
        "name": "MLK Jr Way & E Cherry St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/MLK_E_Cherry_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5344112483913, -122.295696160393],
    "cams": [{
        "id": "I5Austin",
        "name": "I-5 @ S Austin St",
        "url": "https://images.wsdot.wa.gov/nw/005vc16000.jpg"
    }]
}, {
    "coord": [47.3179222947485, -122.295635886547],
    "cams": [{
        "id": "I5317",
        "name": "I-5 @ S 317th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc14400.jpg"
    }]
}, {
    "coord": [47.7191325524873, -122.295319709727],
    "cams": [{
        "id": "CMR-0120",
        "name": "Lake City Way NE & NE 125th St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/LCW_NE_125_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0119",
        "name": "Lake City Way & NE 125th St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/LCW_NE_125_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.4637230749811, -122.295134029595],
    "cams": [{
        "id": "SR518Airport",
        "name": "SR-518 @ Airport Drive",
        "url": "https://images.wsdot.wa.gov/nw/518vc00228.jpg"
    }]
}, {
    "coord": [47.3938229474603, -122.295033917788],
    "cams": [{
        "id": "SR99SR516",
        "name": "SR-99 @ SR-516",
        "url": "https://images.wsdot.wa.gov/nw/099vc01549.jpg"
    }]
}, {
    "coord": [47.3259343148302, -122.294163316783],
    "cams": [{
        "id": "I5308",
        "name": "I-5 @ S 308th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc14460.jpg"
    }]
}, {
    "coord": [47.5729186050248, -122.294005642248],
    "cams": [{
        "id": "CMR-0281",
        "name": "Rainier Ave S & S Walden St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Walden_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6436137692348, -122.29385683641],
    "cams": [{
        "id": "SR520LkWaBlvdRmp",
        "name": "SR-520 @ Lake Wa Blvd Ramp",
        "url": "https://images.wsdot.wa.gov/nw/520vc00130.jpg"
    }]
}, {
    "coord": [47.3694204590972, -122.293835972766],
    "cams": [{
        "id": "I5260",
        "name": "I-5 @ S 260th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc14772.jpg"
    }]
}, {
    "coord": [47.5608084474838, -122.293240252334],
    "cams": [{
        "id": "CMR-0125",
        "name": "MLK Way S & S Alaska St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Alaska_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0126",
        "name": "MLK Way S & S Alaska St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Alaska_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6758633974811, -122.29298523241],
    "cams": [{
        "id": "CMR-0031",
        "name": "32nd Ave NE & NE 65th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/32_NE_65_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.3433204266954, -122.292935181084],
    "cams": [{
        "id": "I5288",
        "name": "I-5 @ S 288th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc14605.jpg"
    }]
}, {
    "coord": [47.6612433063045, -122.29286352236],
    "cams": [{
        "id": "CMR-0133",
        "name": "NE 45th St & Union Bay",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/UnionBay_NE_45_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.40832251777, -122.292630959512],
    "cams": [{
        "id": "I5216",
        "name": "I-5 @ S 216th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc15036.jpg"
    }]
}, {
    "coord": [47.7282882740876, -122.292250178049],
    "cams": [{
        "id": "CMR-0121",
        "name": "Lake City Way & NE 137th St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/LCW_NE_137_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.38069128396, -122.291569114184],
    "cams": [{
        "id": "I5248",
        "name": "I-5 @ S 248th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc14844.jpg"
    }]
}, {
    "coord": [47.3914235370848, -122.29093707677],
    "cams": [{
        "id": "I5SR516",
        "name": "I-5 & SR-516",
        "url": "https://images.wsdot.wa.gov/nw/005vc14918.jpg"
    }]
}, {
    "coord": [47.5697706142502, -122.290698864857],
    "cams": [{
        "id": "CMR-0282",
        "name": "Rainier Ave S & S Charlestown St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Charlestown_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6448873681393, -122.290239017016],
    "cams": [{
        "id": "SR520Foster",
        "name": "SR-520 @ Foster Island",
        "url": "https://images.wsdot.wa.gov/nw/520vc00158.jpg"
    }]
}, {
    "coord": [47.5198260104985, -122.289610837433],
    "cams": [{
        "id": "I5Benefit",
        "name": "I-5 @ S Benefit St",
        "url": "https://images.wsdot.wa.gov/nw/005vc15887.jpg"
    }]
}, {
    "coord": [47.739616960714, -122.289549324315],
    "cams": [{
        "id": "SR522153",
        "name": "SR-522 @ NE 153rd St",
        "url": "https://images.wsdot.wa.gov/nw/522vc00467.jpg"
    }]
}, {
    "coord": [47.4658245408025, -122.288861039666],
    "cams": [{
        "id": "SR99154",
        "name": "SR-99 @ S 154th St",
        "url": "https://images.wsdot.wa.gov/nw/099vc02054.jpg"
    }]
}, {
    "coord": [47.5903854975816, -122.288521294998],
    "cams": [{
        "id": "I90EastPortalMBT",
        "name": "I-90 @ East Portal MBT",
        "url": "https://images.wsdot.wa.gov/nw/090vc00422.jpg"
    }]
}, {
    "coord": [47.5640950386063, -122.288185946316],
    "cams": [{
        "id": "CMR-0283",
        "name": "Rainier Ave S & S Genesee St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Genesee_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5136075966867, -122.288112064107],
    "cams": [{
        "id": "CMR-0063",
        "name": "Airport Way S & S Norfolk St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Airport_S_Norfolk_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5512302715191, -122.288095734492],
    "cams": [{
        "id": "CMR-0272",
        "name": "MLK Jr Way S & S Orcas St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Orcas_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.4206211131748, -122.287435203034],
    "cams": [{
        "id": "I5200",
        "name": "I-5 @ S 200th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc15128.jpg"
    }]
}, {
    "coord": [47.560747677192, -122.287026759308],
    "cams": [{
        "id": "CMR-0284",
        "name": "Rainier Ave S & S Alaska St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Alaska_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.4975986072776, -122.287017526046],
    "cams": [{
        "id": "SR599EMarg",
        "name": "SR-599 @ Marginal Way",
        "url": "https://images.wsdot.wa.gov/nw/599vc00141.jpg"
    }]
}, {
    "coord": [47.5460584126582, -122.285452019525],
    "cams": [{
        "id": "CMR-0273",
        "name": "MLK Jr Way S & S Graham St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Graham_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.4630212277364, -122.285131881643],
    "cams": [{
        "id": "SR518SR99",
        "name": "SR-518 @ SR-99",
        "url": "https://images.wsdot.wa.gov/nw/518vc00252.jpg"
    }]
}, {
    "coord": [47.7482421536213, -122.284797767688],
    "cams": [{
        "id": "SR522165",
        "name": "SR-522 @ NE 165th St",
        "url": "https://images.wsdot.wa.gov/nw/522vc00536.jpg"
    }]
}, {
    "coord": [47.5570411201773, -122.284629529032],
    "cams": [{
        "id": "CMR-0138",
        "name": "Rainier Ave S & S Hudson St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Hudson_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5901669619067, -122.28359967523],
    "cams": [{
        "id": "I90WHighrise",
        "name": "I-90 @ W Highrise",
        "url": "https://images.wsdot.wa.gov/nw/090vc00441.jpg"
    }]
}, {
    "coord": [47.5084153312669, -122.282192856365],
    "cams": [{
        "id": "I5BoeingAccRdN",
        "name": "I-5 @ Boeing Access Rd, North",
        "url": "https://images.wsdot.wa.gov/nw/005vc15805.jpg"
    }]
}, {
    "coord": [47.4918511302266, -122.282190116871],
    "cams": [{
        "id": "SR599MetroBusBrn",
        "name": "SR-599 @ Metro Bus Barn",
        "url": "https://images.wsdot.wa.gov/nw/599vc00116.jpg"
    }]
}, {
    "coord": [47.5371848895509, -122.281168319882],
    "cams": [{
        "id": "CMR-0127",
        "name": "MLK Way & S Othello St EW",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Othello_EW.stream/playlist.m3u8"
    }, {
        "id": "CMR-0128",
        "name": "MLK Way S & S Othello St NS",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Othello_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.505554524325, -122.279552158123],
    "cams": [{
        "id": "I5BoeingAccRdS",
        "name": "I-5 @ Boeing Access Rd, South",
        "url": "https://images.wsdot.wa.gov/nw/005vc15785.jpg"
    }]
}, {
    "coord": [47.5261172507256, -122.279013422719],
    "cams": [{
        "id": "CMR-0274",
        "name": "MLK Jr Way S & S Cloverdale St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Cloverdale_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5232707076439, -122.278982484521],
    "cams": [{
        "id": "CMR-0275",
        "name": "MLK Jr Way S & S Henderson St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Henderson_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5134293101433, -122.278671356082],
    "cams": [{
        "id": "CMR-0276",
        "name": "MLK Jr Way S & S Norfolk St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Norfolk_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5079911925027, -122.278367005221],
    "cams": [{
        "id": "SR900BoeingAccRd",
        "name": "SR-900 @ S Boeing Access Rd",
        "url": "https://images.wsdot.wa.gov/nw/900vc00592.jpg"
    }]
}, {
    "coord": [47.5511760252476, -122.277664109778],
    "cams": [{
        "id": "CMR-0285",
        "name": "Rainier Ave S & S Orcas St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Orcas_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.8216650979368, -122.277354254216],
    "cams": [{
        "id": "I5196",
        "name": "I-5 @ 196th St SW",
        "url": "https://images.wsdot.wa.gov/nw/005vc18155.jpg"
    }]
}, {
    "coord": [47.4656229243612, -122.276632499203],
    "cams": [{
        "id": "SR51846",
        "name": "SR-518 @ 46th Ave S",
        "url": "https://images.wsdot.wa.gov/nw/518vc00322.jpg"
    }]
}, {
    "coord": [47.546026624252, -122.275988663552],
    "cams": [{
        "id": "CMR-0286",
        "name": "Rainier Ave S & S Graham St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Graham_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.486020017639, -122.275831182616],
    "cams": [{
        "id": "SR599133",
        "name": "SR-599 @ S 133rd St",
        "url": "https://images.wsdot.wa.gov/nw/599vc00041.jpg"
    }]
}, {
    "coord": [47.4992307380273, -122.273436678718],
    "cams": [{
        "id": "I5MLKJrWaySouth",
        "name": "I-5 @ MLK Jr Way, South",
        "url": "https://images.wsdot.wa.gov/nw/005vc15718.jpg"
    }, {
        "id": "I5MLKJrWayNorth",
        "name": "I-5 @ MLK Jr Way, North",
        "url": "https://images.wsdot.wa.gov/nw/005vc15735.jpg"
    }]
}, {
    "coord": [47.4322216624788, -122.271130820795],
    "cams": [{
        "id": "I5188",
        "name": "I-5 @ S 188th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc15230.jpg"
    }]
}, {
    "coord": [47.4831000001883, -122.270999999585],
    "cams": [{
        "id": "I5SR599",
        "name": "I-5 @ SR-599",
        "url": "https://images.wsdot.wa.gov/nw/005vc15591.jpg"
    }]
}, {
    "coord": [47.5369578783704, -122.270274016104],
    "cams": [{
        "id": "CMR-0287",
        "name": "Rainier Ave S & S Othello St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Othello_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5898833227723, -122.270240627029],
    "cams": [{
        "id": "I90Midspan",
        "name": "I-90 Midspan",
        "url": "https://images.wsdot.wa.gov/nw/090vc00508.jpg"
    }]
}, {
    "coord": [47.4633226948557, -122.27013187804],
    "cams": [{
        "id": "SR51851",
        "name": "SR-518 @ 51st Ave S",
        "url": "https://images.wsdot.wa.gov/nw/518vc00349.jpg"
    }]
}, {
    "coord": [47.4744999994649, -122.269999999961],
    "cams": [{
        "id": "I5144",
        "name": "I-5 @ S 144th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc15531.jpg"
    }]
}, {
    "coord": [47.529130115378, -122.269987052353],
    "cams": [{
        "id": "CMR-0288",
        "name": "Rainier Ave S & S Rose St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Rose_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5233072686686, -122.269986039045],
    "cams": [{
        "id": "CMR-0137",
        "name": "Rainier Ave S & S Henderson St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Henderson_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.5201471616782, -122.269718990555],
    "cams": [{
        "id": "CMR-0289",
        "name": "Rainier Ave S & 51st Ave S",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_51_EW.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.6418585131378, -122.269155116689],
    "cams": [{
        "id": "SR520WHighrise",
        "name": "SR-520 West Highrise",
        "url": "https://images.wsdot.wa.gov/nw/520vc00241.jpg"
    }]
}, {
    "coord": [47.4960975154944, -122.269075350074],
    "cams": [{
        "id": "CMR-0277",
        "name": "MLK Jr Way S & S Juniper St",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Juniper_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.4436237506455, -122.268132608323],
    "cams": [{
        "id": "I5178",
        "name": "I-5 @ S 178th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc15315.jpg"
    }]
}, {
    "coord": [47.4648999995966, -122.265999999061],
    "cams": [{
        "id": "I5Southcenter",
        "name": "I-5 @ Southcenter",
        "url": "https://images.wsdot.wa.gov/nw/005vc15453.jpg"
    }]
}, {
    "coord": [47.4915267514359, -122.264704816063],
    "cams": [{
        "id": "I5DuwamishRiver",
        "name": "I-5 @ Duwamish River",
        "url": "https://images.wsdot.wa.gov/nw/005vc15664.jpg"
    }]
}, {
    "coord": [47.4617206047642, -122.264630947659],
    "cams": [{
        "id": "I5SR518",
        "name": "I-5 @ SR-518",
        "url": "https://images.wsdot.wa.gov/nw/005vc15452.jpg"
    }]
}, {
    "coord": [47.4570999993901, -122.263999998912],
    "cams": [{
        "id": "I5Klickitat",
        "name": "I-5 @ Klickitat Drive",
        "url": "https://images.wsdot.wa.gov/nw/005vc15410.jpg"
    }]
}, {
    "coord": [47.8311707647017, -122.263254863373],
    "cams": [{
        "id": "I5186",
        "name": "I-5 @ 186th St SW",
        "url": "https://images.wsdot.wa.gov/nw/005vc18250.jpg"
    }]
}, {
    "coord": [47.7581208743822, -122.262034322138],
    "cams": [{
        "id": "SR52261",
        "name": "SR-522 @ 61st Ave NE",
        "url": "https://images.wsdot.wa.gov/nw/522vc00661.jpg"
    }]
}, {
    "coord": [47.5202643966723, -122.26158231719],
    "cams": [{
        "id": "CMR-0290",
        "name": "Rainier Ave S & 57th Ave S",
        "stream": "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_57_NS.stream/playlist.m3u8"
    }]
}, {
    "coord": [47.4623233452939, -122.259931025353],
    "cams": [{
        "id": "I405Southcenter",
        "name": "I-405 @ Southcenter",
        "url": "https://images.wsdot.wa.gov/nw/405vc00034.jpg"
    }]
}, {
    "coord": [47.2817316662809, -122.258496738965],
    "cams": [{
        "id": "SR167353",
        "name": "SR-167 @ 353rd St",
        "url": "https://images.wsdot.wa.gov/nw/167vc01311.jpg"
    }]
}, {
    "coord": [47.8503123477099, -122.256571499141],
    "cams": [{
        "id": "I5164",
        "name": "I-5 @ 164th St SW",
        "url": "https://images.wsdot.wa.gov/nw/005vc18391.jpg"
    }]
}, {
    "coord": [47.6396599205232, -122.254913811958],
    "cams": [{
        "id": "SR520MidBr",
        "name": "SR-520 @ Mid Bridge",
        "url": "https://images.wsdot.wa.gov/nw/520vc00293.jpg"
    }]
}, {
    "coord": [47.825194568555, -122.253660966526],
    "cams": [{
        "id": "I405FilbertRd",
        "name": "I-405 @ Filbert Rd",
        "url": "https://images.wsdot.wa.gov/nw/405vc02951.jpg"
    }]
}, {
    "coord": [47.5896368597716, -122.252256456969],
    "cams": [{
        "id": "I90EHighrise",
        "name": "I-90 @ E Highrise",
        "url": "https://images.wsdot.wa.gov/nw/090vc00579.jpg"
    }, {
        "id": "I90WMercerWay",
        "name": "I-90 @ W Mercer Way",
        "url": "https://images.wsdot.wa.gov/nw/090vc00604.jpg"
    }]
}, {
    "coord": [47.6386502991795, -122.248463864341],
    "cams": [{
        "id": "SR520EastBr",
        "name": "SR-520 @ East Bridge",
        "url": "https://images.wsdot.wa.gov/nw/520vc00341.jpg"
    }]
}, {
    "coord": [47.4631206970603, -122.247830487263],
    "cams": [{
        "id": "SR181GradyWay",
        "name": "SR-181 @ Grady Way",
        "url": "https://images.wsdot.wa.gov/nw/181vc01142.jpg"
    }, {
        "id": "I405WValleyHwy",
        "name": "I-405 @ W Valley Hwy",
        "url": "https://images.wsdot.wa.gov/nw/405vc00088.jpg"
    }]
}, {
    "coord": [47.377923736945, -122.244434401583],
    "cams": [{
        "id": "SR167SR516",
        "name": "SR-167 @ SR-516",
        "url": "https://images.wsdot.wa.gov/nw/167vc01964.jpg"
    }]
}, {
    "coord": [47.3412227195102, -122.243831498211],
    "cams": [{
        "id": "SR16737",
        "name": "SR-167 @ 37th St NW",
        "url": "https://images.wsdot.wa.gov/nw/167vc01710.jpg"
    }]
}, {
    "coord": [47.7573199451721, -122.243737280723],
    "cams": [{
        "id": "SR52273",
        "name": "SR-522 @ 73rd Ave NE",
        "url": "https://images.wsdot.wa.gov/nw/522vc00750.jpg"
    }]
}, {
    "coord": [47.8203189127968, -122.242740914502],
    "cams": [{
        "id": "I405DamsonRd",
        "name": "I-405 @ Damson Rd",
        "url": "https://images.wsdot.wa.gov/nw/405vc02895.jpg"
    }]
}, {
    "coord": [47.6375941673906, -122.241775339396],
    "cams": [{
        "id": "SR520EHighrise",
        "name": "SR-520 East Highrise",
        "url": "https://images.wsdot.wa.gov/nw/520vc00400.jpg"
    }]
}, {
    "coord": [47.4652226329961, -122.241429049668],
    "cams": [{
        "id": "I405LongacresDr",
        "name": "I-405 @ Longacres Dr SW",
        "url": "https://images.wsdot.wa.gov/nw/405vc00140.jpg"
    }]
}, {
    "coord": [47.3215237246154, -122.241427941253],
    "cams": [{
        "id": "SR16715",
        "name": "SR-167 @ 15th St NW",
        "url": "https://images.wsdot.wa.gov/nw/167vc01580.jpg"
    }]
}, {
    "coord": [47.5899760669968, -122.237873625635],
    "cams": [{
        "id": "I9076",
        "name": "I-90 @ 76th Ave SE",
        "url": "https://images.wsdot.wa.gov/nw/090vc00670.jpg"
    }]
}, {
    "coord": [47.4667218286256, -122.235631096517],
    "cams": [{
        "id": "I405Oaksdale",
        "name": "I-405 @ Oaksdale Ave ",
        "url": "https://images.wsdot.wa.gov/nw/405vc00163.jpg"
    }]
}, {
    "coord": [47.8819026621768, -122.232726239471],
    "cams": [{
        "id": "I5128",
        "name": "I-5 @ 128th St SW",
        "url": "https://images.wsdot.wa.gov/nw/005vc18648.jpg"
    }]
}, {
    "coord": [47.6361598224296, -122.229013477296],
    "cams": [{
        "id": "SR52084",
        "name": "SR-520 @ 84th Ave NE",
        "url": "https://images.wsdot.wa.gov/nw/520vc00455.jpg"
    }]
}, {
    "coord": [47.4014855641491, -122.224345619772],
    "cams": [{
        "id": "SR167222",
        "name": "SR-167 @ S 222nd St",
        "url": "https://images.wsdot.wa.gov/nw/167vc02189.jpg"
    }]
}, {
    "coord": [47.6376601302372, -122.22309565435],
    "cams": [{
        "id": "SR52088",
        "name": "SR-520 @ 88th Ave NE",
        "url": "https://images.wsdot.wa.gov/nw/520vc00492.jpg"
    }]
}, {
    "coord": [47.4275834977062, -122.221513633043],
    "cams": [{
        "id": "SR167194",
        "name": "SR-167 @ S 194th St",
        "url": "https://images.wsdot.wa.gov/nw/167vc02352.jpg"
    }]
}, {
    "coord": [47.4142174223084, -122.221394161698],
    "cams": [{
        "id": "SR167212",
        "name": "SR-167 @ S 212th St",
        "url": "https://images.wsdot.wa.gov/nw/167vc02241.jpg"
    }]
}, {
    "coord": [47.5821197211006, -122.219732445475],
    "cams": [{
        "id": "I90ShorewoodW",
        "name": "I-90 @ Shorewood, West",
        "url": "https://images.wsdot.wa.gov/nw/090vc00756.jpg"
    }]
}, {
    "coord": [47.4676222282923, -122.21933419536],
    "cams": [{
        "id": "I405SR167",
        "name": "I-405 @ SR-167",
        "url": "https://images.wsdot.wa.gov/nw/405vc00229.jpg"
    }]
}, {
    "coord": [47.6406215734384, -122.217733998278],
    "cams": [{
        "id": "SR52092",
        "name": "SR-520 @ 92nd Ave NE",
        "url": "https://images.wsdot.wa.gov/nw/520vc00522.jpg"
    }]
}, {
    "coord": [47.7945206330215, -122.214235862736],
    "cams": [{
        "id": "I405SR527",
        "name": "I-405 @ SR-527",
        "url": "https://images.wsdot.wa.gov/nw/405vc02674.jpg"
    }]
}, {
    "coord": [47.4693236522333, -122.207828929878],
    "cams": [{
        "id": "I405TalbotRd",
        "name": "I-405 @ Talbot Rd S",
        "url": "https://images.wsdot.wa.gov/nw/405vc00277.jpg"
    }]
}, {
    "coord": [47.9157499959374, -122.207507557558],
    "cams": [{
        "id": "I5SR526",
        "name": "I-5 @ SR-526",
        "url": "https://images.wsdot.wa.gov/nw/005vc18935.jpg"
    }]
}, {
    "coord": [47.7890031172773, -122.203638156978],
    "cams": [{
        "id": "I405232",
        "name": "I-405 @ 232nd St SE",
        "url": "https://images.wsdot.wa.gov/nw/405vc02594.jpg"
    }]
}, {
    "coord": [47.6425431072267, -122.202429645359],
    "cams": [{
        "id": "SR520BellevueWay",
        "name": "SR-520 @ Bellevue Way NE",
        "url": "https://images.wsdot.wa.gov/nw/520vc00593.jpg"
    }]
}, {
    "coord": [47.9549215305148, -122.200251032169],
    "cams": [{
        "id": "I547",
        "name": "I-5 @ 47th St SE",
        "url": "https://images.wsdot.wa.gov/nw/005vc19195.jpg"
    }]
}, {
    "coord": [47.5120482740227, -122.198627583864],
    "cams": [{
        "id": "I40524th",
        "name": "I-405 @ NE 24th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc00602.jpg"
    }]
}, {
    "coord": [47.5315220886693, -122.197636458131],
    "cams": [{
        "id": "I40544",
        "name": "I-405 @ NE 44th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc00747.jpg"
    }]
}, {
    "coord": [47.6403354445453, -122.196666539469],
    "cams": [{
        "id": "SR520108N",
        "name": "SR-520 @ 108th Ave NE, N",
        "url": "https://images.wsdot.wa.gov/nw/520vc00620.jpg"
    }, {
        "id": "SR520108S",
        "name": "SR-520 @ 108th Ave NE, S",
        "url": "https://images.wsdot.wa.gov/nw/520vc00624.jpg"
    }]
}, {
    "coord": [47.5008216068243, -122.196529755308],
    "cams": [{
        "id": "I405ParkDr",
        "name": "I-405 @ NE Park Dr",
        "url": "https://images.wsdot.wa.gov/nw/405vc00537.jpg"
    }]
}, {
    "coord": [47.9335625706663, -122.196241241801],
    "cams": [{
        "id": "I573SB",
        "name": "I-5 @ 73rd St SE, SB",
        "url": "https://images.wsdot.wa.gov/nw/005vc19039.jpg"
    }, {
        "id": "I573NB",
        "name": "I-5 @ 73rd St SE, NB",
        "url": "https://images.wsdot.wa.gov/nw/005vc19041.jpg"
    }]
}, {
    "coord": [47.4850918236684, -122.195775029204],
    "cams": [{
        "id": "I405SR169",
        "name": "I-405 @ SR-169",
        "url": "https://images.wsdot.wa.gov/nw/405vc00417.jpg"
    }]
}, {
    "coord": [47.5441388871431, -122.195558012852],
    "cams": [{
        "id": "I40564",
        "name": "I-405 @ SE 64th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc00840.jpg"
    }]
}, {
    "coord": [47.7783798424066, -122.192787059042],
    "cams": [{
        "id": "I405243",
        "name": "I-405 @ 243rd St SE",
        "url": "https://images.wsdot.wa.gov/nw/405vc02510.jpg"
    }]
}, {
    "coord": [47.4925208947191, -122.19213527366],
    "cams": [{
        "id": "I405SunsetBlvd",
        "name": "I-405 @ Sunset Blvd",
        "url": "https://images.wsdot.wa.gov/nw/405vc00475.jpg"
    }]
}, {
    "coord": [47.9766516294226, -122.19066803636],
    "cams": [{
        "id": "I5Pacific",
        "name": "I-5 @ Pacific Ave",
        "url": "https://images.wsdot.wa.gov/nw/005vc19357.jpg"
    }]
}, {
    "coord": [47.5793613709898, -122.190599926367],
    "cams": [{
        "id": "I90BellevueWay",
        "name": "I-90 @ Bellevue Way",
        "url": "https://images.wsdot.wa.gov/nw/090vc00921.jpg"
    }]
}, {
    "coord": [47.6339604619614, -122.189598597932],
    "cams": [{
        "id": "I405SR520",
        "name": "I-405 @ SR-520",
        "url": "https://images.wsdot.wa.gov/nw/405vc01483.jpg"
    }]
}, {
    "coord": [47.6308218701761, -122.189535456165],
    "cams": [{
        "id": "I40522",
        "name": "I-405 @ NE 22nd St",
        "url": "https://images.wsdot.wa.gov/nw/405vc01469.jpg"
    }]
}, {
    "coord": [47.769118982504, -122.189034546582],
    "cams": [{
        "id": "I405195",
        "name": "I-405 @ NE 195th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc02452.jpg"
    }]
}, {
    "coord": [47.7220287316714, -122.188772853922],
    "cams": [{
        "id": "I405132",
        "name": "I-405 @ NE 132nd St",
        "url": "https://images.wsdot.wa.gov/nw/405vc02095.jpg"
    }]
}, {
    "coord": [47.6266219300849, -122.188734419226],
    "cams": [{
        "id": "I40520",
        "name": "I-405 @ NE 20th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc01458.jpg"
    }]
}, {
    "coord": [47.61974791858, -122.188535917601],
    "cams": [{
        "id": "I40514",
        "name": "I-405 @ NE 14th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc01427.jpg"
    }]
}, {
    "coord": [47.6159796237416, -122.188535810285],
    "cams": [{
        "id": "I4058",
        "name": "I-405 @ NE 8th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc01383.jpg"
    }, {
        "id": "I4058",
        "name": "I-405 @ SE 8th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc01286.jpg"
    }]
}, {
    "coord": [47.6126307724065, -122.188535714974],
    "cams": [{
        "id": "I4054",
        "name": "I-405 @ NE 4th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc01355.jpg"
    }]
}, {
    "coord": [47.9804166590946, -122.188143159798],
    "cams": [{
        "id": "I5US2",
        "name": "I-5 @ US-2",
        "url": "https://images.wsdot.wa.gov/nw/005vc19389.jpg"
    }]
}, {
    "coord": [47.6085213168902, -122.18803235411],
    "cams": [{
        "id": "I405Main",
        "name": "I-405 @ Main St",
        "url": "https://images.wsdot.wa.gov/nw/405vc01331.jpg"
    }]
}, {
    "coord": [47.6530177505856, -122.187044984538],
    "cams": [{
        "id": "I40559",
        "name": "I-405 @ NE 59th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc01675.jpg"
    }]
}, {
    "coord": [47.7503203763164, -122.187034601058],
    "cams": [{
        "id": "I405175",
        "name": "I-405 @ NE 175th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc02337.jpg"
    }]
}, {
    "coord": [47.6654016604448, -122.186963491212],
    "cams": [{
        "id": "I40570",
        "name": "I-405 @ NE 70th Pl",
        "url": "https://images.wsdot.wa.gov/nw/405vc01742.jpg"
    }]
}, {
    "coord": [47.6321226848026, -122.186933740689],
    "cams": [{
        "id": "SR520I405",
        "name": "SR-520 @ I-405 SE Quad",
        "url": "https://images.wsdot.wa.gov/nw/520vc00701.jpg"
    }]
}, {
    "coord": [47.6441078734586, -122.186902094402],
    "cams": [{
        "id": "I40539",
        "name": "I-405 @ NE 39th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc01575.jpg"
    }]
}, {
    "coord": [47.7441865865779, -122.186778473852],
    "cams": [{
        "id": "I405160",
        "name": "I-405 @ NE 160th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc02256.jpg"
    }]
}, {
    "coord": [47.5621959439019, -122.186437015934],
    "cams": [{
        "id": "I40545",
        "name": "I-405 @ SE 45th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc00986.jpg"
    }]
}, {
    "coord": [47.7146898428887, -122.185176272038],
    "cams": [{
        "id": "I405128",
        "name": "I-405 @ NE 128th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc02066.jpg"
    }]
}, {
    "coord": [47.9834967125887, -122.184790653528],
    "cams": [{
        "id": "I5Everett",
        "name": "I-5 @ Everett Ave",
        "url": "https://images.wsdot.wa.gov/nw/005vc19406.jpg"
    }]
}, {
    "coord": [47.7584150414092, -122.184707938294],
    "cams": [{
        "id": "I405SR522",
        "name": "I-405 @ SR-522",
        "url": "https://images.wsdot.wa.gov/nw/405vc02371.jpg"
    }]
}, {
    "coord": [48.0500321752279, -122.184649131771],
    "cams": [{
        "id": "I5SR528",
        "name": "I-5 @ SR-528",
        "url": "https://images.wsdot.wa.gov/nw/005vc19910.jpg"
    }]
}, {
    "coord": [47.6771205979225, -122.184035234279],
    "cams": [{
        "id": "I40585",
        "name": "I-405 @ NE 85th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc01801.jpg"
    }]
}, {
    "coord": [47.9890287680282, -122.183244975482],
    "cams": [{
        "id": "I5MarineViewDr",
        "name": "I-5 @ Marine View Dr",
        "url": "https://images.wsdot.wa.gov/nw/005vc19469.jpg"
    }]
}, {
    "coord": [47.6025208704259, -122.183034587181],
    "cams": [{
        "id": "I4058",
        "name": "I-405 @ NE 8th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc01383.jpg"
    }, {
        "id": "I4058",
        "name": "I-405 @ SE 8th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc01286.jpg"
    }]
}, {
    "coord": [47.6876587266854, -122.182058304139],
    "cams": [{
        "id": "I405100",
        "name": "I-405 @ NE 100th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc01887.jpg"
    }]
}, {
    "coord": [47.5927098886924, -122.180637538912],
    "cams": [{
        "id": "I40520SB",
        "name": "I-405 @ SE 20th St, SB",
        "url": "https://images.wsdot.wa.gov/nw/405vc01194.jpg"
    }, {
        "id": "I40520NB",
        "name": "I-405 @ SE 20th St, NB",
        "url": "https://images.wsdot.wa.gov/nw/405vc01199.jpg"
    }]
}, {
    "coord": [48.0408461083806, -122.180233642406],
    "cams": [{
        "id": "I5SR529",
        "name": "I-5 @ SR 529",
        "url": "https://images.wsdot.wa.gov/nw/005vc19843.jpg"
    }]
}, {
    "coord": [47.9935049337898, -122.179491329979],
    "cams": [{
        "id": "I515",
        "name": "I-5 @ 15th St",
        "url": "https://images.wsdot.wa.gov/nw/005vc19534.jpg"
    }]
}, {
    "coord": [47.5701228803295, -122.178235015246],
    "cams": [{
        "id": "I405CoalCreek",
        "name": "I-405 @ Coal Creek Pkwy",
        "url": "https://images.wsdot.wa.gov/nw/405vc01016.jpg"
    }]
}, {
    "coord": [47.97808997016, -122.177500360178],
    "cams": [{
        "id": "US2HomeacresRd",
        "name": "US-2 @ Homeacres Rd",
        "url": "https://images.wsdot.wa.gov/nw/002vc00068.jpg"
    }]
}, {
    "coord": [48.0277549964141, -122.176580862565],
    "cams": [{
        "id": "I37",
        "name": "I-5 @ 37th St NE",
        "url": "https://images.wsdot.wa.gov/nw/005vc19754.jpg"
    }]
}, {
    "coord": [47.5753435798207, -122.175695617276],
    "cams": [{
        "id": "I40540",
        "name": "I-405 @ SE 40th St",
        "url": "https://images.wsdot.wa.gov/nw/405vc01066.jpg"
    }]
}, {
    "coord": [48.0189340863506, -122.17459437467],
    "cams": [{
        "id": "I526",
        "name": "I-5 @ 26th St NE",
        "url": "https://images.wsdot.wa.gov/nw/005vc19684.jpg"
    }]
}, {
    "coord": [47.580521709187, -122.174436082017],
    "cams": [{
        "id": "I405Factoria",
        "name": "I-405 @ Factoria",
        "url": "https://images.wsdot.wa.gov/nw/405vc01106.jpg"
    }]
}, {
    "coord": [48.0076118824834, -122.172663382562],
    "cams": [{
        "id": "I512",
        "name": "I-5 @ 12th St NE",
        "url": "https://images.wsdot.wa.gov/nw/005vc19601.jpg"
    }]
}, {
    "coord": [47.6301201421667, -122.167135474673],
    "cams": [{
        "id": "SR520130",
        "name": "SR-520 @ 130th Ave NE",
        "url": "https://images.wsdot.wa.gov/nw/520vc00800.jpg"
    }]
}, {
    "coord": [47.5803234021559, -122.166531972722],
    "cams": [{
        "id": "I90133",
        "name": "I-90 @ 133rd Ave SE",
        "url": "https://images.wsdot.wa.gov/nw/090vc01049.jpg"
    }]
}, {
    "coord": [47.7587203709091, -122.16183503279],
    "cams": [{
        "id": "SR522SR202",
        "name": "SR-522 @ SR-202",
        "url": "https://images.wsdot.wa.gov/nw/522vc01207.jpg"
    }]
}, {
    "coord": [47.6337366073175, -122.144422199575],
    "cams": [{
        "id": "SR520148",
        "name": "SR-520 @ 148th Ave NE",
        "url": "https://images.wsdot.wa.gov/nw/520vc00918.jpg"
    }]
}, {
    "coord": [47.5797208841026, -122.141529763478],
    "cams": [{
        "id": "I90150",
        "name": "I-90 @ 150th Ave SE",
        "url": "https://images.wsdot.wa.gov/nw/090vc01154.jpg"
    }]
}, {
    "coord": [47.9781092718083, -122.140244484598],
    "cams": [{
        "id": "US2EbeySlough",
        "name": "US-2 @ Ebey Slough",
        "url": "https://images.wsdot.wa.gov/nw/002vc00207.jpg"
    }]
}, {
    "coord": [47.57916499809, -122.134918203302],
    "cams": [{
        "id": "I90161",
        "name": "I-90 @ 161st Ave SE",
        "url": "https://images.wsdot.wa.gov/nw/090vc01190.jpg"
    }]
}, {
    "coord": [47.8354893477585, -122.124427068116],
    "cams": [{
        "id": "SR9180",
        "name": "SR-9 @ 180th St SE",
        "url": "https://images.wsdot.wa.gov/nw/009vc00376.jpg"
    }]
}, {
    "coord": [47.6696214177986, -122.107831582823],
    "cams": [{
        "id": "SR520RedmondWay",
        "name": "SR-520 @ Redmond Way",
        "url": "https://images.wsdot.wa.gov/nw/520vc01283.jpg"
    }]
}, {
    "coord": [47.5593242682273, -122.088534798902],
    "cams": [{
        "id": "I90192",
        "name": "I-90 @ 192nd Ave SE",
        "url": "https://images.wsdot.wa.gov/nw/090vc01446.jpg"
    }]
}, {
    "coord": [47.5490210703518, -122.062434092768],
    "cams": [{
        "id": "I90SR900",
        "name": "I-90 @ SR-900",
        "url": "https://images.wsdot.wa.gov/nw/090vc01581.jpg"
    }]
}, {
    "coord": [47.5407074586553, -122.037733070806],
    "cams": [{
        "id": "I90FrontSt",
        "name": "I-90 @ Front St",
        "url": "https://images.wsdot.wa.gov/nw/090vc01702.jpg"
    }]
}];
