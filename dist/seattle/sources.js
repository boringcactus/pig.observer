const DEFAULTS = ["CMR-0039", "CMR-0176", "CMR-0223", "CMR-0088", "CMR-0089", "CMR-0309", "CMR-0257"];
const MANUAL_CACHE_BUST = false;
const CAMERAS = {
    Ballard: [
        {
            id: "CMR-0006",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/15_NW_65_EW.stream/playlist.m3u8",
            name: "15th Ave NW & NW 65th St EW"
        },
        {
            id: "CMR-0007",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/15_NW_65_NS.stream/playlist.m3u8",
            name: "15th Ave NW & NW 65th St NS"
        },
        {
            id: "CMR-0008",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/15_NW_85_NS.stream/playlist.m3u8",
            name: "15th Ave NW & NW 85th St"
        },
        {
            id: "CMR-0009",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/15_NW_Leary_EW.stream/playlist.m3u8",
            name: "15th Ave NW & NW Leary Way"
        },
        {
            id: "CMR-0010",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/15_NW_Market_EW.stream/playlist.m3u8",
            name: "15th Ave NW & NW Market St EW"
        },
        {
            id: "CMR-0011",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/15_NW_Market_NS.stream/playlist.m3u8",
            name: "15th Ave NW & NW Market St NS"
        }
    ],
    Central: [
        {
            id: "CMR-0004",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/14_S_Jackson_EW.stream/playlist.m3u8",
            name: "14th Ave S & S Jackson St"
        },
        {
            id: "CMR-0014",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/16_E_Madison_EW.stream/playlist.m3u8",
            name: "16th Ave E & E Madison St"
        },
        {
            id: "CMR-0242",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/23_Alder_NS.stream/playlist.m3u8",
            name: "23rd Ave & E Alder St"
        },
        {
            id: "CMR-0023",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/23_E_Cherry_EW.stream/playlist.m3u8",
            name: "23rd Ave E & E Cherry St EW"
        },
        {
            id: "CMR-0024",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/23_E_Cherry_NS.stream/playlist.m3u8",
            name: "23rd Ave E & E Cherry St NS"
        },
        {
            id: "CMR-0299",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/23_S_Dearborn_NS.stream/playlist.m3u8",
            name: "23rd Ave S & S Dearborn St"
        },
        {
            id: "CMR-0027",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/23_S_Jackson_EW.stream/playlist.m3u8",
            name: "23rd Ave S & S Jackson St"
        },
        {
            id: "CMR-0028",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/23_S_Jackson_NS.stream/playlist.m3u8",
            name: "23rd Ave S & S Jackson St NS"
        },
        {
            id: "CMR-0300",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/23_S_Judkins_NS.stream/playlist.m3u8",
            name: "23rd Ave S & S Judkins St"
        },
        {
            id: "CMR-0268",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/MLK_E_Cherry_NS.stream/playlist.m3u8",
            name: "MLK Jr Way & E Cherry St"
        },
        {
            id: "CMR-0269",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/MLK_E_Yesler_NS.stream/playlist.m3u8",
            name: "MLK Jr Way & E Yesler Way"
        },
        {
            id: "CMR-0270",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Jackson_NS.stream/playlist.m3u8",
            name: "MLK Jr Way S & S Jackson St"
        }
    ],
    Delridge: [
        {
            id: "CMR-0328",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/15_SW_Roxbury_NS.stream/playlist.m3u8",
            name: "15th Ave SW & SW Roxbury St"
        },
        {
            id: "CMR-0327",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/16_SW_Roxbury_EW.stream/playlist.m3u8",
            name: "16th Ave SW & SW Roxbury St"
        },
        {
            id: "CMR-0323",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/35_SW_Morgan_NS.stream/playlist.m3u8",
            name: "35th Ave SW & SW Morgan St"
        }
    ],
    Downtown: [
        {
            id: "CMR-0193",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/12_S_Jackson_EW.stream/playlist.m3u8",
            name: "12th Ave S & S Jackson St"
        },
        {
            id: "CMR-0171",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/1_Broad_NS.stream/playlist.m3u8",
            name: "1st Ave & Broad St"
        },
        {
            id: "CMR-0256",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/1_Madison_NS.stream/playlist.m3u8",
            name: "1st Ave & Madison St"
        },
        {
            id: "CMR-0217",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/1_Seneca_EW.stream/playlist.m3u8",
            name: "1st Ave & Seneca St"
        },
        {
            id: "CMR-0016",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/1_Stewart_NS.stream/playlist.m3u8",
            name: "1st Ave & Stewart St"
        },
        {
            id: "CMR-0178",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/1_Union_NS.stream/playlist.m3u8",
            name: "1st Ave & Union St"
        },
        {
            id: "CMR-0167",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/1_Wall_EW.stream/playlist.m3u8",
            name: "1st Ave & Wall St EW"
        },
        {
            id: "CMR-0168",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/1_Wall_NS.stream/playlist.m3u8",
            name: "1st Ave & Wall St NS"
        },
        {
            id: "CMR-0310",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/1_Yesler_EW.stream/playlist.m3u8",
            name: "1st Ave & Yesler Way"
        },
        {
            id: "CMR-0189",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/1_S_Jackson_EW.stream/playlist.m3u8",
            name: "1st Ave S & Jackson St"
        },
        {
            id: "CMR-0185",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/2_Battery_NS.stream/playlist.m3u8",
            name: "2nd Ave & Battery St"
        },
        {
            id: "CMR-0264",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/2_Blanchard_NS.stream/playlist.m3u8",
            name: "2nd Ave & Blanchard St"
        },
        {
            id: "CMR-0265",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/2_James_EW.stream/playlist.m3u8",
            name: "2nd Ave & James St"
        },
        {
            id: "CMR-0218",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/2_Marion_NS.stream/playlist.m3u8",
            name: "2nd Ave & Marion St"
        },
        {
            id: "CMR-0302",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/2_Pike_NS.stream/playlist.m3u8",
            name: "2nd Ave & Pike St NS"
        },
        {
            id: "CMR-0030",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/2_Stewart_NS.stream/playlist.m3u8",
            name: "2nd Ave & Stewart St"
        },
        {
            id: "CMR-0069",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/2_University_NS.stream/playlist.m3u8",
            name: "2nd Ave & University St"
        },
        {
            id: "CMR-0320",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/2_Ext_Main_NS.stream/playlist.m3u8",
            name: "2nd Ave Ext S & S Main St"
        },
        {
            id: "CMR-0033",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/3_Columbia_EW.stream/playlist.m3u8",
            name: "3rd Ave & Columbia St"
        },
        {
            id: "CMR-0191",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/3_Seneca_EW.stream/playlist.m3u8",
            name: "3rd Ave & Seneca St"
        },
        {
            id: "CMR-0305",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/3_Spring_EW.stream/playlist.m3u8",
            name: "3rd Ave & Spring St"
        },
        {
            id: "CMR-0034",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/3_Stewart_NS.stream/playlist.m3u8",
            name: "3rd Ave & Stewart st"
        },
        {
            id: "CMR-0304",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/3_Union_EW.stream/playlist.m3u8",
            name: "3rd Ave & Union St"
        },
        {
            id: "CMR-0035",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/3_University_NS.stream/playlist.m3u8",
            name: "3rd Ave & University St"
        },
        {
            id: "CMR-0169",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/3_Wall_NS.stream/playlist.m3u8",
            name: "3rd Ave & Wall St"
        },
        {
            id: "CMR-0036",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/3_Yesler_NS.stream/playlist.m3u8",
            name: "3rd Ave & Yesler Way"
        },
        {
            id: "CMR-0040",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/4_Battery_EW.stream/playlist.m3u8",
            name: "4th Ave & Battery St"
        },
        {
            id: "CMR-0155",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/4_Cherry_EW.stream/playlist.m3u8",
            name: "4th Ave & Cherry St EW"
        },
        {
            id: "CMR-0156",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/4_Cherry_NS.stream/playlist.m3u8",
            name: "4th Ave & Cherry St NS"
        },
        {
            id: "CMR-0308",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/4_James_NS.stream/playlist.m3u8",
            name: "4th Ave & James St"
        },
        {
            id: "CMR-0180",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/4_Madison_NS.stream/playlist.m3u8",
            name: "4th Ave & Madison St"
        },
        {
            id: "CMR-0039",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/4_Olive_NS.stream/playlist.m3u8",
            name: "4th Ave & Olive St"
        },
        {
            id: "CMR-0257",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/4_Pine_NS.stream/playlist.m3u8",
            name: "4th Ave & Pine St"
        },
        {
            id: "CMR-0174",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/4_Virginia_EW.stream/playlist.m3u8",
            name: "4th Ave & Virginia St"
        },
        {
            id: "CMR-0043",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/4_S_Jackson_NS.stream/playlist.m3u8",
            name: "4th Ave S & S Jackson St"
        },
        {
            id: "CMR-0311",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/4_S_Washington_NS.stream/playlist.m3u8",
            name: "4th Ave S & S Washington St"
        },
        {
            id: "CMR-0047",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_Battery_East.stream/playlist.m3u8",
            name: "5th Ave & Battery St East Side"
        },
        {
            id: "CMR-0048",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_Battery_West.stream/playlist.m3u8",
            name: "5th Ave & Battery St West Side"
        },
        {
            id: "CMR-0049",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_James_EW.stream/playlist.m3u8",
            name: "5th Ave & James St"
        },
        {
            id: "CMR-0181",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_Madison_EW.stream/playlist.m3u8",
            name: "5th Ave & Madison St EW"
        },
        {
            id: "CMR-0194",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_Marion_EW.stream/playlist.m3u8",
            name: "5th Ave & Marion St"
        },
        {
            id: "CMR-0309",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_Pike_NS.stream/playlist.m3u8",
            name: "5th Ave & Pike St"
        },
        {
            id: "CMR-0176",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_Pine_EW.stream/playlist.m3u8",
            name: "5th Ave & Pine St EW"
        },
        {
            id: "CMR-0223",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_Pine_NS.stream/playlist.m3u8",
            name: "5th Ave & Pine St NS"
        },
        {
            id: "CMR-0291",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_Spring_EW.stream/playlist.m3u8",
            name: "5th Ave & Spring St"
        },
        {
            id: "CMR-0255",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_Union_EW.stream/playlist.m3u8",
            name: "5th Ave & Union St"
        },
        {
            id: "CMR-0046",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_Westlake_NS.stream/playlist.m3u8",
            name: "5th Ave & Westlake Ave"
        },
        {
            id: "CMR-0053",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_S_Dearborn_NS.stream/playlist.m3u8",
            name: "5th Ave S & S Dearborn St / Airport Way S"
        },
        {
            id: "CMR-0258",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_S_Washington_NS.stream/playlist.m3u8",
            name: "5th Ave S & S Washington St"
        },
        {
            id: "CMR-0318",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/6_Cherry_NS.stream/playlist.m3u8",
            name: "6th Ave & Cherry St"
        },
        {
            id: "CMR-0170",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/6_Lenora_NS.stream/playlist.m3u8",
            name: "6th Ave & Lenora St"
        },
        {
            id: "CMR-0055",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/6_Pine_EW.stream/playlist.m3u8",
            name: "6th Ave & Pine St"
        },
        {
            id: "CMR-0188",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/6_Seneca_NS.stream/playlist.m3u8",
            name: "6th Ave & Seneca St"
        },
        {
            id: "CMR-0321",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/6_Stewart_EW.stream/playlist.m3u8",
            name: "6th Ave & Stewart St"
        },
        {
            id: "CMR-0056",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/6_Wall_EW.stream/playlist.m3u8",
            name: "6th Ave & Wall St"
        },
        {
            id: "CMR-0058",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/7_Pike_EW.stream/playlist.m3u8",
            name: "7th Ave & Pike St"
        },
        {
            id: "CMR-0173",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/7_Virginia_EW.stream/playlist.m3u8",
            name: "7th Ave & Virginia St"
        },
        {
            id: "CMR-0059",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/8_Howell_EW.stream/playlist.m3u8",
            name: "8th Ave & Howell St"
        },
        {
            id: "CMR-0172",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/9_Pine_EW.stream/playlist.m3u8",
            name: "9th Ave & Pine St"
        },
        {
            id: "CMR-0175",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/9_Stewart_EW.stream/playlist.m3u8",
            name: "9th Ave & Stewart St"
        },
        {
            id: "CMR-0153",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Alaskan_Madison_NS.stream/playlist.m3u8",
            name: "Alaskan Way & Madison St"
        },
        {
            id: "CMR-0204",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Alaskan_Marion_NS.stream/playlist.m3u8",
            name: "Alaskan Way & Marion St"
        },
        {
            id: "CMR-0164",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Alaskan_Pike_NS.stream/playlist.m3u8",
            name: "Alaskan Way & Pike St"
        },
        {
            id: "CMR-0165",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Alaskan_University_NS.stream/playlist.m3u8",
            name: "Alaskan Way & University St"
        },
        {
            id: "CMR-0261",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Alaskan_Wall_NS.stream/playlist.m3u8",
            name: "Alaskan Way & Wall St"
        },
        {
            id: "CMR-0065",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Alaskan_Yesler_NS.stream/playlist.m3u8",
            name: "Alaskan Way & Yesler Way"
        },
        {
            id: "CMR-0294",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Alaskan_S_Dearborn_NS.stream/playlist.m3u8",
            name: "Alaskan Way S & S Dearborn St"
        },
        {
            id: "CMR-0097",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Stewart_Denny_EW.stream/playlist.m3u8",
            name: "Denny Way & Yale St / Stewart St"
        },
        {
            id: "CMR-0106",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Elliott_Broad_NS.stream/playlist.m3u8",
            name: "Elliott Ave & Broad St"
        },
        {
            id: "CMR-0317",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Fairview_Boren_NS.stream/playlist.m3u8",
            name: "Fairview Ave & Boren Ave"
        },
        {
            id: "CMR-0316",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Minor_Howell_EW.stream/playlist.m3u8",
            name: "Howell St & Minor Ave"
        },
        {
            id: "CMR-0136",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Dearborn_NS.stream/playlist.m3u8",
            name: "Rainier Ave S & S Dearborn St"
        },
        {
            id: "CMR-0306",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Maynard_S_Jackson_EW.stream/playlist.m3u8",
            name: "S Jackson St & Maynard Ave S"
        },
        {
            id: "CMR-0182",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Western_Broad_NS.stream/playlist.m3u8",
            name: "Western Ave & Broad St"
        },
        {
            id: "CMR-0179",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Western_Spring_NS.stream/playlist.m3u8",
            name: "Western Ave & Spring St"
        },
        {
            id: "CMR-0186",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Western_Wall_NS.stream/playlist.m3u8",
            name: "Western Ave & Wall St"
        }
    ],
    East: [
        {
            id: "CMR-0002",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/12_S_Boren_NS.stream/playlist.m3u8",
            name: "12th Ave S & Boren Ave S"
        },
        {
            id: "CMR-0025",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/23_E_Madison_EW.stream/playlist.m3u8",
            name: "23rd Ave E & E Madison St EW"
        },
        {
            id: "CMR-0026",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/23_E_Madison_NS.stream/playlist.m3u8",
            name: "23rd Ave E & E Madison St NS"
        },
        {
            id: "CMR-0319",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/7_James_EW.stream/playlist.m3u8",
            name: "7th Ave & James St"
        },
        {
            id: "CMR-0060",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/9_James_EW.stream/playlist.m3u8",
            name: "9th Ave & James St"
        },
        {
            id: "CMR-0088",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Boren_Madison_EW.stream/playlist.m3u8",
            name: "Boren Ave & Madison St"
        },
        {
            id: "CMR-0312",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Boren_Pike_EW.stream/playlist.m3u8",
            name: "Boren Ave & Pike St"
        },
        {
            id: "CMR-0089",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Boren_Seneca_NS.stream/playlist.m3u8",
            name: "Boren Ave & Seneca St"
        },
        {
            id: "CMR-0313",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Broadway_E_John_NS.stream/playlist.m3u8",
            name: "Broadway & E John St"
        },
        {
            id: "CMR-0090",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Broadway_E_Pike_EW.stream/playlist.m3u8",
            name: "Broadway & E Pike St EW"
        },
        {
            id: "CMR-0091",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Broadway_E_Pike_NS.stream/playlist.m3u8",
            name: "Broadway & E Pike St NS"
        },
        {
            id: "CMR-0092",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Broadway_E_Roy_NS.stream/playlist.m3u8",
            name: "Broadway & E Roy St"
        },
        {
            id: "CMR-0307",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Broadway_E_James_EW.stream/playlist.m3u8",
            name: "Broadway & James St"
        },
        {
            id: "CMR-0105",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Eastlake_E_Harvard_NS.stream/playlist.m3u8",
            name: "Harvard Ave E & Eastlake Ave E"
        },
        {
            id: "CMR-0129",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Montlake_E_LakeWash_NS.stream/playlist.m3u8",
            name: "Montlake Blvd NE & NE Lake Washington Blvd"
        }
    ],
    "Greater Duwamish": [
        {
            id: "CMR-0001",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/11_SW_Spokane_EW.stream/playlist.m3u8",
            name: "11th Ave SW & SW Spokane St"
        },
        {
            id: "CMR-0003",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/14_S_Cloverdale_NS.stream/playlist.m3u8",
            name: "14th Ave S & S Cloverdale St"
        },
        {
            id: "CMR-0019",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/1_S_EMarg_NS.stream/playlist.m3u8",
            name: "1st Ave S & E Marginal Way S"
        },
        {
            id: "CMR-0020",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/1_S_Atlantic_NS.stream/playlist.m3u8",
            name: "1st Ave S & S Atlantic St"
        },
        {
            id: "CMR-0021",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/1_S_Holgate_NS.stream/playlist.m3u8",
            name: "1st Ave S & S Holgate St"
        },
        {
            id: "CMR-0243",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/1_S_Hudson_NS.stream/playlist.m3u8",
            name: "1st Ave S & S Hudson St"
        },
        {
            id: "CMR-0022",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/1_S_RoyalB_EW.stream/playlist.m3u8",
            name: "1st Ave S & S Royal Brougham Way"
        },
        {
            id: "CMR-0231",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/1_S_Spokane_NS.stream/playlist.m3u8",
            name: "1st Ave S & S Spokane St NS"
        },
        {
            id: "CMR-0159",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/1_S_Spokane_EW.stream/playlist.m3u8",
            name: "1st Ave S & Spokane Viaduct"
        },
        {
            id: "CMR-0044",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/4_S_Michigan_NS.stream/playlist.m3u8",
            name: "4th Ave S & Michigan St"
        },
        {
            id: "CMR-0042",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/4_S_Atlantic_EW.stream/playlist.m3u8",
            name: "4th Ave S & S Atlantic St"
        },
        {
            id: "CMR-0262",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/4_S_Holgate_NS.stream/playlist.m3u8",
            name: "4th Ave S & S Holgate St"
        },
        {
            id: "CMR-0314",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/4_S_RoyalB_EW.stream/playlist.m3u8",
            name: "4th Ave S & S Royal Brougham Way"
        },
        {
            id: "CMR-0232",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/4_S_Spokane_NS.stream/playlist.m3u8",
            name: "4th Ave S & S Spokane St NS"
        },
        {
            id: "CMR-0160",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/4_S_Spokane_EW.stream/playlist.m3u8",
            name: "4th Ave S & Spokane Viaduct"
        },
        {
            id: "CMR-0045",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/4_S_I90_NS.stream/playlist.m3u8",
            name: "4th Ave S s/o I-90 TD"
        },
        {
            id: "CMR-0244",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/6_S_Michigan_EW.stream/playlist.m3u8",
            name: "6th Ave S & S Michigan St"
        },
        {
            id: "CMR-0057",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/6_S_Spokane_EW.stream/playlist.m3u8",
            name: "6th Ave S & S Spokane St"
        },
        {
            id: "CMR-0064",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Airport_S_Othello_NS.stream/playlist.m3u8",
            name: "Airport Way S & King County Airport"
        },
        {
            id: "CMR-0061",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Airport_S_Industrial_NS.stream/playlist.m3u8",
            name: "Airport Way S & S Industrial Way"
        },
        {
            id: "CMR-0062",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Airport_S_Lander_NS.stream/playlist.m3u8",
            name: "Airport Way S & S Lander St"
        },
        {
            id: "CMR-0063",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Airport_S_Norfolk_NS.stream/playlist.m3u8",
            name: "Airport Way S & S Norfolk St"
        },
        {
            id: "CMR-0158",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/EMarg_S_Atlantic_NS.stream/playlist.m3u8",
            name: "Alaskan Way S & S Atlantic St"
        },
        {
            id: "CMR-0249",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Carleton_S_Bailey_NS.stream/playlist.m3u8",
            name: "Carleton Ave S & S Bailey St"
        },
        {
            id: "CMR-0293",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Colorado_S_RoyalB_S_Portal.stream/playlist.m3u8",
            name: "Colorado Ave S & S Royal Brougham Way"
        },
        {
            id: "CMR-0095",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Corson_S_Bailey_EW.stream/playlist.m3u8",
            name: "Corson Ave S & S Bailey St / S Michigan St"
        },
        {
            id: "CMR-0099",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/EMarg_S_16_NS.stream/playlist.m3u8",
            name: "E Marginal Way S & 16th Ave S"
        },
        {
            id: "CMR-0100",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/EMarg_S_Hanford_NS.stream/playlist.m3u8",
            name: "E Marginal Way S & S Hanford St"
        },
        {
            id: "CMR-0102",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/EMarg_S_Idaho_NS.stream/playlist.m3u8",
            name: "E Marginal Way S & S Idaho St"
        },
        {
            id: "CMR-0103",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/EMarg_S_Michigan_NS.stream/playlist.m3u8",
            name: "E Marginal Way S & S Michigan St"
        },
        {
            id: "CMR-0233",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/EMarg_S_Spokane_EW.stream/playlist.m3u8",
            name: "E Marginal Way S & S Spokane St"
        },
        {
            id: "CMR-0101",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/EMarg_S_Hudson_NS.stream/playlist.m3u8",
            name: "E Marginal Way S @ Hudson St"
        },
        {
            id: "CMR-0271",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Dakota_NS.stream/playlist.m3u8",
            name: "MLK Jr Way S & S Dakota St"
        },
        {
            id: "CMR-0276",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Norfolk_NS.stream/playlist.m3u8",
            name: "MLK Jr Way S & S Norfolk St"
        },
        {
            id: "CMR-0213",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Hill_NS.stream/playlist.m3u8",
            name: "Rainier Ave S & S Hill St"
        },
        {
            id: "CMR-0279",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Massachusetts_NS.stream/playlist.m3u8",
            name: "Rainier Ave S & S Massachusetts St"
        },
        {
            id: "CMR-0124",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Rainier_EW.stream/playlist.m3u8",
            name: "Rainier Ave S at MLK Way S"
        },
        {
            id: "CMR-0157",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/SR99_Atlantic_NS.stream/playlist.m3u8",
            name: "SR-99 & S Atlantic St"
        },
        {
            id: "CMR-0066",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/SR99_Lander_NS.stream/playlist.m3u8",
            name: "SR-99 @ S Lander St"
        },
        {
            id: "CMR-0142",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/WSB_Midspan_EW.stream/playlist.m3u8",
            name: "W Seattle Bridge Mid-Span"
        }
    ],
    "Lake Union": [
        {
            id: "CMR-0096",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/4_Denny_EW.stream/playlist.m3u8",
            name: "4th Ave N & Denny Way"
        },
        {
            id: "CMR-0154",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/9_N_Mercer_EW.stream/playlist.m3u8",
            name: "9th Ave N & Mercer St"
        },
        {
            id: "CMR-0266",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/9_N_Thomas_NS.stream/playlist.m3u8",
            name: "9th Ave N & Thomas St"
        },
        {
            id: "CMR-0236",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_Harrison_NS.stream/playlist.m3u8",
            name: "Aurora Ave N & Harrison St"
        },
        {
            id: "CMR-0077",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_46_NS.stream/playlist.m3u8",
            name: "Aurora Ave N & N 46th St"
        },
        {
            id: "CMR-0098",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Dexter_Denny_EW.stream/playlist.m3u8",
            name: "Dexter Ave & Denny Way"
        },
        {
            id: "CMR-0104",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Eastlake_E_Stewart_NS.stream/playlist.m3u8",
            name: "Eastlake Ave E & E Stewart St"
        },
        {
            id: "CMR-0109",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Evanston_N_36_EW.stream/playlist.m3u8",
            name: "Evanston Ave N & N 36th St"
        },
        {
            id: "CMR-0315",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Fairview_Denny_NS.stream/playlist.m3u8",
            name: "Fairview Ave & Denny Way"
        },
        {
            id: "CMR-0110",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Fairview_Mercer_EW.stream/playlist.m3u8",
            name: "Fairview Ave N & N Mercer St"
        },
        {
            id: "CMR-0259",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Fairview_N_Republican_NS.stream/playlist.m3u8",
            name: "Fairview Ave N & Republican St"
        },
        {
            id: "CMR-0111",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Fairview_Valley_NS.stream/playlist.m3u8",
            name: "Fairview Ave N @ Valley St"
        },
        {
            id: "CMR-2024",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Fremont_N_34_NS.stream/playlist.m3u8",
            name: "Fremont Ave N & N 34th St"
        },
        {
            id: "CMR-0114",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Fremont_N_36_NS.stream/playlist.m3u8",
            name: "Fremont Ave N & N 36th St"
        },
        {
            id: "CMR-2023",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Leary_NW_43_EW.stream/playlist.m3u8",
            name: "Leary Way NW & NW 43rd St"
        },
        {
            id: "CMR-0202",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Terry_N_Mercer_EW.stream/playlist.m3u8",
            name: "Terry Ave N & Mercer St"
        },
        {
            id: "CMR-0267",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Westlake_Denny_EW.stream/playlist.m3u8",
            name: "Westlake Ave & Denny Way EW"
        },
        {
            id: "CMR-0260",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Westlake_N_Harrison_NS.stream/playlist.m3u8",
            name: "Westlake Ave N & Harrison St"
        }
    ],
    "Magnolia/Queen Anne": [
        {
            id: "CMR-0292",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/15_W_Armory_NS.stream/playlist.m3u8",
            name: "15th Ave W & W Armory Way"
        },
        {
            id: "CMR-0012",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/15_W_Dravus_NS.stream/playlist.m3u8",
            name: "15th Ave W & W Dravus St"
        },
        {
            id: "CMR-0013",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/15_W_Emerson_NS.stream/playlist.m3u8",
            name: "15th Ave W & W Emerson St"
        },
        {
            id: "CMR-0017",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/1_N_Denny_EW.stream/playlist.m3u8",
            name: "1st Ave & Denny Way"
        },
        {
            id: "CMR-0041",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Westlake_N_Dexter_NS.stream/playlist.m3u8",
            name: "4th Ave N & Dexter Ave N"
        },
        {
            id: "CMR-0162",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_Mercer_EW.stream/playlist.m3u8",
            name: "5th Ave & Mercer St EW"
        },
        {
            id: "CMR-0051",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_Broad_NS.stream/playlist.m3u8",
            name: "5th Ave N & Broad St"
        },
        {
            id: "CMR-0163",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_Mercer_NS.stream/playlist.m3u8",
            name: "5th Ave N & Mercer St NS"
        },
        {
            id: "CMR-0235",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/6_N_SR99_NS.stream/playlist.m3u8",
            name: "6th Ave N & SR 99"
        },
        {
            id: "CMR-0203",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/9_Broad_NS.stream/playlist.m3u8",
            name: "9th Ave N & Roy St"
        },
        {
            id: "CMR-0068",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_Howe_NS.stream/playlist.m3u8",
            name: "Aurora Ave N & Howe St"
        },
        {
            id: "CMR-0081",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_Ward_NS.stream/playlist.m3u8",
            name: "Aurora Ave N & Ward St"
        },
        {
            id: "CMR-0211",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Dexter_N_Mercer_EW.stream/playlist.m3u8",
            name: "Dexter Ave N & Mercer St"
        },
        {
            id: "CMR-0108",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Elliott_W_Mercer_NS.stream/playlist.m3u8",
            name: "Elliott Ave W & W Mercer Pl"
        },
        {
            id: "CMR-0135",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/QAnne_N_Mercer_EW.stream/playlist.m3u8",
            name: "Queen Anne Ave N & Mercer St"
        },
        {
            id: "CMR-0234",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/QAnne_N_Roy_NS.stream/playlist.m3u8",
            name: "Queen Anne Ave N & Roy St"
        },
        {
            id: "CMR-0220",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Taylor_N_Mercer_EW.stream/playlist.m3u8",
            name: "Taylor Ave & Mercer St"
        },
        {
            id: "CMR-0145",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Western_Elliott_NS.stream/playlist.m3u8",
            name: "Western Ave & Elliott St"
        },
        {
            id: "CMR-0146",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Westlake_Broad_NS.stream/playlist.m3u8",
            name: "Westlake Ave & Valley St"
        }
    ],
    North: [
        {
            id: "CMR-0227",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/15_NE_Northgate_EW.stream/playlist.m3u8",
            name: "15th Ave NE & NE Northgate Way"
        },
        {
            id: "CMR-0018",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/1_NE_Northgate_EW.stream/playlist.m3u8",
            name: "1st Ave NE & NE Northgate Way"
        },
        {
            id: "CMR-0134",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_NE_Northgate_EW.stream/playlist.m3u8",
            name: "5th Ave NE & NE Northgate Way EW"
        },
        {
            id: "CMR-0052",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_NE_Northgate_NS.stream/playlist.m3u8",
            name: "5th Ave NE & NE Northgate Way NS"
        },
        {
            id: "CMR-0226",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/5_NE_Northgate2.stream/playlist.m3u8",
            name: "5th Ave NE & Northgate Way 2"
        },
        {
            id: "CMR-0119",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/LCW_NE_125_NS.stream/playlist.m3u8",
            name: "Lake City Way & NE 125th St NS"
        },
        {
            id: "CMR-0121",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/LCW_NE_137_NS.stream/playlist.m3u8",
            name: "Lake City Way & NE 137th St"
        },
        {
            id: "CMR-0120",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/LCW_NE_125_EW.stream/playlist.m3u8",
            name: "Lake City Way NE & NE 125th St EW"
        }
    ],
    Northeast: [
        {
            id: "CMR-0225",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/12_NE_50_EW.stream/playlist.m3u8",
            name: "12th Ave NE & NE 50th St"
        },
        {
            id: "CMR-0216",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/15_NE_45_EW.stream/playlist.m3u8",
            name: "15th Ave NE & NE 45th St"
        },
        {
            id: "CMR-0005",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/15_NE_75_NS.stream/playlist.m3u8",
            name: "15th Ave NE & NE 75th St"
        },
        {
            id: "CMR-0118",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/15_NE_80_NS.stream/playlist.m3u8",
            name: "15th Ave NE & NE 80th St"
        },
        {
            id: "CMR-0215",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/15_NE_Campus_NS.stream/playlist.m3u8",
            name: "15th Ave NE & NE Campus Pkwy"
        },
        {
            id: "CMR-0214",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/15_NE_Pacific_NS.stream/playlist.m3u8",
            name: "15th Ave NE & NE Pacific St"
        },
        {
            id: "CMR-0015",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/18_NE_65_EW.stream/playlist.m3u8",
            name: "18th Ave NE & NE 65th St"
        },
        {
            id: "CMR-0029",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/25_NE_66_NS.stream/playlist.m3u8",
            name: "25th Ave NE & NE 66th St"
        },
        {
            id: "CMR-0031",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/32_NE_65_EW.stream/playlist.m3u8",
            name: "32nd Ave NE & NE 65th St"
        },
        {
            id: "CMR-0132",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Montlake_NE_Pacific_EW.stream/playlist.m3u8",
            name: "Montlake Blvd E & Pacific St EW"
        },
        {
            id: "CMR-0130",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Montlake_NE_25_NS.stream/playlist.m3u8",
            name: "Montlake Blvd NE & 25th Ave NE"
        },
        {
            id: "CMR-0131",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Montlake_NE_Pacific_NS.stream/playlist.m3u8",
            name: "Montlake Blvd NE @ NE Pacific St"
        },
        {
            id: "CMR-0133",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/UnionBay_NE_45_EW.stream/playlist.m3u8",
            name: "NE 45th St & Union Bay"
        }
    ],
    Northwest: [
        {
            id: "CMR-0070",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_103_NS.stream/playlist.m3u8",
            name: "Aurora Ave N & N 103rd St"
        },
        {
            id: "CMR-0071",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_105_EW.stream/playlist.m3u8",
            name: "Aurora Ave N & N 105th St EW"
        },
        {
            id: "CMR-0072",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_117_NS.stream/playlist.m3u8",
            name: "Aurora Ave N & N 117th Pl"
        },
        {
            id: "CMR-0073",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_130_EW.stream/playlist.m3u8",
            name: "Aurora Ave N & N 130th St EW"
        },
        {
            id: "CMR-0074",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_130_NS.stream/playlist.m3u8",
            name: "Aurora Ave N & N 130th St NS"
        },
        {
            id: "CMR-0075",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_145_EW.stream/playlist.m3u8",
            name: "Aurora Ave N & N 145th St EW"
        },
        {
            id: "CMR-0076",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_145_NS.stream/playlist.m3u8",
            name: "Aurora Ave N & N 145th St NS"
        },
        {
            id: "CMR-0078",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_85_EW.stream/playlist.m3u8",
            name: "Aurora Ave N & N 85th St EW"
        },
        {
            id: "CMR-0079",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_87_NS.stream/playlist.m3u8",
            name: "Aurora Ave N & N 87th St NS"
        },
        {
            id: "CMR-0080",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_90_NS.stream/playlist.m3u8",
            name: "Aurora Ave N & N 90th St"
        },
        {
            id: "CMR-0082",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Aurora_N_Winona_NS.stream/playlist.m3u8",
            name: "Aurora Ave N & N Winona St"
        },
        {
            id: "CMR-0115",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Greenlake_N_50_NS.stream/playlist.m3u8",
            name: "Greenlake Way N & N 50th St"
        },
        {
            id: "CMR-0206",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Greenwood_N_105_NS.stream/playlist.m3u8",
            name: "Greenwood Ave N & N 105th St"
        },
        {
            id: "CMR-0245",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Greenwood_N_117_NS.stream/playlist.m3u8",
            name: "Greenwood Ave N & N 117th St"
        },
        {
            id: "CMR-0246",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Greenwood_N_125_EW.stream/playlist.m3u8",
            name: "Greenwood Ave N & N 125th St"
        },
        {
            id: "CMR-0247",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Greenwood_N_130_NS.stream/playlist.m3u8",
            name: "Greenwood Ave N & N 130th St"
        },
        {
            id: "CMR-0116",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Latona_NE_50_EW.stream/playlist.m3u8",
            name: "Latona Ave NE & NE 50th St"
        },
        {
            id: "CMR-0229",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Meridian_N_Northgate_EW.stream/playlist.m3u8",
            name: "Meridian Ave N & N Northgate Way"
        },
        {
            id: "CMR-0228",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Northgate_N_105_EW.stream/playlist.m3u8",
            name: "N 105th St & N Northgate Way"
        }
    ],
    Southeast: [
        {
            id: "CMR-0274",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Cloverdale_NS.stream/playlist.m3u8",
            name: "MLK Jr Way S & S Cloverdale St"
        },
        {
            id: "CMR-0273",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Graham_NS.stream/playlist.m3u8",
            name: "MLK Jr Way S & S Graham St"
        },
        {
            id: "CMR-0277",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Juniper_NS.stream/playlist.m3u8",
            name: "MLK Jr Way S & S Juniper St"
        },
        {
            id: "CMR-0272",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Orcas_NS.stream/playlist.m3u8",
            name: "MLK Jr Way S & S Orcas St"
        },
        {
            id: "CMR-0127",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Othello_EW.stream/playlist.m3u8",
            name: "MLK Way & S Othello St EW"
        },
        {
            id: "CMR-0125",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Alaska_EW.stream/playlist.m3u8",
            name: "MLK Way S & S Alaska St EW"
        },
        {
            id: "CMR-0126",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Alaska_NS.stream/playlist.m3u8",
            name: "MLK Way S & S Alaska St NS"
        },
        {
            id: "CMR-0128",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Othello_NS.stream/playlist.m3u8",
            name: "MLK Way S & S Othello St NS"
        },
        {
            id: "CMR-0123",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/MLK_S_Rainier_NS.stream/playlist.m3u8",
            name: "MLK Way S at Rainier Ave S"
        },
        {
            id: "CMR-0289",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_51_EW.stream/playlist.m3u8",
            name: "Rainier Ave S & 51st Ave S"
        },
        {
            id: "CMR-0290",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_57_NS.stream/playlist.m3u8",
            name: "Rainier Ave S & 57th Ave S"
        },
        {
            id: "CMR-0284",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Alaska_NS.stream/playlist.m3u8",
            name: "Rainier Ave S & S Alaska St"
        },
        {
            id: "CMR-0282",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Charlestown_NS.stream/playlist.m3u8",
            name: "Rainier Ave S & S Charlestown St"
        },
        {
            id: "CMR-0283",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Genesee_NS.stream/playlist.m3u8",
            name: "Rainier Ave S & S Genesee St"
        },
        {
            id: "CMR-0286",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Graham_EW.stream/playlist.m3u8",
            name: "Rainier Ave S & S Graham St"
        },
        {
            id: "CMR-0137",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Henderson_NS.stream/playlist.m3u8",
            name: "Rainier Ave S & S Henderson St"
        },
        {
            id: "CMR-0138",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Hudson_NS.stream/playlist.m3u8",
            name: "Rainier Ave S & S Hudson St"
        },
        {
            id: "CMR-0280",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_McClellan_NS.stream/playlist.m3u8",
            name: "Rainier Ave S & S McClellan St"
        },
        {
            id: "CMR-0285",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Orcas_NS.stream/playlist.m3u8",
            name: "Rainier Ave S & S Orcas St"
        },
        {
            id: "CMR-0287",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Othello_NS.stream/playlist.m3u8",
            name: "Rainier Ave S & S Othello St"
        },
        {
            id: "CMR-0288",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Rose_NS.stream/playlist.m3u8",
            name: "Rainier Ave S & S Rose St"
        },
        {
            id: "CMR-0281",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Rainier_S_Walden_NS.stream/playlist.m3u8",
            name: "Rainier Ave S & S Walden St"
        }
    ],
    Southwest: [
        {
            id: "CMR-0325",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/35_SW_Barton_EW.stream/playlist.m3u8",
            name: "35th Ave SW & SW Barton St"
        },
        {
            id: "CMR-0326",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/35_SW_Holden_NS.stream/playlist.m3u8",
            name: "35th Ave SW & SW Holden St"
        },
        {
            id: "CMR-0324",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/35_SW_Roxbury_EW.stream/playlist.m3u8",
            name: "35th Ave SW & SW Roxburty St"
        },
        {
            id: "CMR-0032",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/35_SW_Fauntleroy_NS.stream/playlist.m3u8",
            name: "35th Ave SW @ Fauntleroy Way SW"
        },
        {
            id: "CMR-0250",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/41_SW_Admiral_EW.stream/playlist.m3u8",
            name: "41st Ave SW & SW Admiral Way "
        },
        {
            id: "CMR-0038",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/42_SW_Alaska_EW.stream/playlist.m3u8",
            name: "42nd Ave SW & SW Alaska St"
        },
        {
            id: "CMR-0251",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/California_SW_Admiral_NS.stream/playlist.m3u8",
            name: "California Ave SW & SW Admiral Way"
        },
        {
            id: "CMR-0093",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/California_SW_Alaska_NS.stream/playlist.m3u8",
            name: "California Ave SW & SW Alaska St"
        },
        {
            id: "CMR-0252",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/California_SW_Hanford_NS.stream/playlist.m3u8",
            name: "California Ave SW & SW Hanford St"
        },
        {
            id: "CMR-0094",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Chelan_SW_WMarg_EW.stream/playlist.m3u8",
            name: "Chelan Ave SW & W Marginal Way"
        },
        {
            id: "CMR-0113",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Fauntleroy_SW_Alaska_NS.stream/playlist.m3u8",
            name: "Fauntleroy Way SW & SW Alaska St"
        },
        {
            id: "CMR-0112",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Fauntleroy_SW_Cloverdale_NS.stream/playlist.m3u8",
            name: "Fauntleroy Way SW & SW Cloverdale St"
        },
        {
            id: "CMR-0230",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/Harbor_SW_Spokane_EW.stream/playlist.m3u8",
            name: "Harbor Ave SW & S Spokane St"
        },
        {
            id: "CMR-0144",
            stream:
                "https://58cc2dce193dd.streamlock.net:443/live/WSea_FwyPullOut_EW.stream/playlist.m3u8",
            name: "W Seattle Bridge near SW Charlestown St"
        }
    ]
};
