; (function () {
  var db = {
    "1": {
      "ID": "1",
      "shortname": "swine",
      "groupid": "12",
      "dollar": "13.17",
      "experience": "7.25",
      "malus": "1",
      "danger": "1",
      "luck": "0",
      "level": "4",
      "skills": [
        "animal",
        "animal",
        "leadership",
        "endurance",
        "tough"
      ],
      "yields": [
        {
          "itemID": "700000",
          "ID": "1",
          "prob": "43.18"
        }
      ]
    },
    "2": {
      "ID": "2",
      "shortname": "scarecrow",
      "groupid": "7",
      "dollar": "8.37",
      "experience": "11.5",
      "malus": "0",
      "danger": "20",
      "luck": "2",
      "level": "3",
      "skills": [
        "animal",
        "tactic",
        "pitfall",
        "shot",
        "build"
      ],
      "yields": [
        {
          "itemID": "757000",
          "ID": "2",
          "prob": "57.58"
        }
      ]
    },
    "3": {
      "ID": "3",
      "shortname": "wanted",
      "groupid": "27",
      "dollar": "11.17",
      "experience": "11.49",
      "malus": "0",
      "danger": "10",
      "luck": "0",
      "level": "4",
      "skills": [
        "pitfall",
        "finger_dexterity",
        "hide",
        "ride",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "743000",
          "ID": "3",
          "prob": "24.94"
        }
      ]
    },
    "4": {
      "ID": "4",
      "shortname": "tabacco",
      "groupid": "7",
      "dollar": "17.57",
      "experience": "7.33",
      "malus": "0",
      "danger": "2",
      "luck": "2",
      "level": "3",
      "skills": [
        "trade",
        "tactic",
        "finger_dexterity",
        "finger_dexterity",
        "tough"
      ],
      "yields": [
        {
          "itemID": "702000",
          "ID": "4",
          "prob": "38.55"
        }
      ]
    },
    "5": {
      "ID": "5",
      "shortname": "cotton",
      "groupid": "7",
      "dollar": "8.46",
      "experience": "12.93",
      "malus": "1",
      "danger": "3",
      "luck": "0",
      "level": "3",
      "skills": [
        "trade",
        "leadership",
        "finger_dexterity",
        "endurance",
        "tough"
      ],
      "yields": [
        {
          "itemID": "704000",
          "ID": "5",
          "prob": "52.8"
        }
      ]
    },
    "6": {
      "ID": "6",
      "shortname": "sugar",
      "groupid": "8",
      "dollar": "16.46",
      "experience": "9.73",
      "malus": "3",
      "danger": "1",
      "luck": "4",
      "level": "4",
      "skills": [
        "trade",
        "repair",
        "finger_dexterity",
        "tough",
        "punch"
      ],
      "yields": [
        {
          "itemID": "703000",
          "ID": "6",
          "prob": "33.59"
        }
      ]
    },
    "7": {
      "ID": "7",
      "shortname": "angle",
      "groupid": "3",
      "dollar": "8.32",
      "experience": "7.25",
      "malus": "2",
      "danger": "2",
      "luck": "6",
      "level": "3",
      "skills": [
        "repair",
        "swim",
        "swim",
        "swim",
        "hide"
      ],
      "yields": [
        {
          "itemID": "782000",
          "ID": "7",
          "prob": "4.95"
        },
        {
          "itemID": "705000",
          "ID": "7",
          "prob": "36.52"
        }
      ]
    },
    "8": {
      "ID": "8",
      "shortname": "cereal",
      "groupid": "7",
      "dollar": "11.17",
      "experience": "15.25",
      "malus": "10",
      "danger": "4",
      "luck": "2",
      "level": "5",
      "skills": [
        "finger_dexterity",
        "ride",
        "endurance",
        "tough",
        "punch"
      ],
      "yields": [
        {
          "itemID": "701000",
          "ID": "8",
          "prob": "48.01"
        }
      ]
    },
    "9": {
      "ID": "9",
      "shortname": "berry",
      "groupid": "10",
      "dollar": "11.17",
      "experience": "15.25",
      "malus": "15",
      "danger": "6",
      "luck": "5",
      "level": "6",
      "skills": [
        "finger_dexterity",
        "finger_dexterity",
        "hide",
        "tough",
        "tough"
      ],
      "yields": [
        {
          "itemID": "706000",
          "ID": "9",
          "prob": "23.04"
        }
      ]
    },
    "10": {
      "ID": "10",
      "shortname": "sheeps",
      "groupid": "12",
      "dollar": "13.17",
      "experience": "14.18",
      "malus": "11",
      "danger": "2",
      "luck": "0",
      "level": "5",
      "skills": [
        "animal",
        "animal",
        "leadership",
        "endurance",
        "tough"
      ],
      "yields": [
        {
          "itemID": "707000",
          "ID": "10",
          "prob": "43.18"
        }
      ]
    },
    "11": {
      "ID": "11",
      "shortname": "newspaper",
      "groupid": "27",
      "dollar": "17.59",
      "experience": "7.25",
      "malus": "8",
      "danger": "1",
      "luck": "2",
      "level": "5",
      "skills": [
        "appearance",
        "trade",
        "trade",
        "ride",
        "ride"
      ],
      "yields": [
        {
          "itemID": "744000",
          "ID": "11",
          "prob": "53.82"
        }
      ]
    },
    "12": {
      "ID": "12",
      "shortname": "cut",
      "groupid": "8",
      "dollar": "16.32",
      "experience": "16.31",
      "malus": "21",
      "danger": "3",
      "luck": "3",
      "level": "6",
      "skills": [
        "animal",
        "animal",
        "finger_dexterity",
        "ride",
        "punch"
      ],
      "yields": [
        {
          "itemID": "765000",
          "ID": "12",
          "prob": "9.67"
        }
      ]
    },
    "13": {
      "ID": "13",
      "shortname": "grinding",
      "groupid": "14",
      "dollar": "22.74",
      "experience": "16.31",
      "malus": "24",
      "danger": "5",
      "luck": "0",
      "level": "7",
      "skills": [
        "finger_dexterity",
        "ride",
        "endurance",
        "tough",
        "punch"
      ],
      "yields": [
        {
          "itemID": "745000",
          "ID": "13",
          "prob": "33.59"
        }
      ]
    },
    "14": {
      "ID": "14",
      "shortname": "corn",
      "groupid": "8",
      "dollar": "14.97",
      "experience": "16.31",
      "malus": "22",
      "danger": "5",
      "luck": "8",
      "level": "7",
      "skills": [
        "appearance",
        "animal",
        "trade",
        "tactic",
        "finger_dexterity"
      ],
      "yields": [
        {
          "itemID": "748000",
          "ID": "14",
          "prob": "24.01"
        }
      ]
    },
    "15": {
      "ID": "15",
      "shortname": "beans",
      "groupid": "8",
      "dollar": "20.97",
      "experience": "16.31",
      "malus": "22",
      "danger": "5",
      "luck": "4",
      "level": "7",
      "skills": [
        "animal",
        "tactic",
        "leadership",
        "finger_dexterity",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "746000",
          "ID": "15",
          "prob": "24.94"
        }
      ]
    },
    "16": {
      "ID": "16",
      "shortname": "fort_guard",
      "groupid": "20",
      "dollar": "13.17",
      "experience": "18.18",
      "malus": "24",
      "danger": "7",
      "luck": "2",
      "level": "10",
      "skills": [
        "appearance",
        "appearance",
        "leadership",
        "shot",
        "reflex"
      ],
      "yields": [
        {
          "itemID": "758000",
          "ID": "16",
          "prob": "1.9"
        }
      ]
    },
    "17": {
      "ID": "17",
      "shortname": "tanning",
      "groupid": "14",
      "dollar": "23.59",
      "experience": "22.49",
      "malus": "39",
      "danger": "18",
      "luck": "5",
      "level": "9",
      "skills": [
        "trade",
        "finger_dexterity",
        "swim",
        "endurance",
        "tough"
      ],
      "yields": [
        {
          "itemID": "712000",
          "ID": "17",
          "prob": "33.59"
        }
      ]
    },
    "18": {
      "ID": "18",
      "shortname": "digging",
      "groupid": "6",
      "dollar": "22.74",
      "experience": "11.49",
      "malus": "30",
      "danger": "7",
      "luck": "5",
      "level": "8",
      "skills": [
        "trade",
        "trade",
        "swim",
        "reflex",
        "tough"
      ],
      "yields": [
        {
          "itemID": "1791000",
          "ID": "18",
          "prob": "1.9"
        },
        {
          "itemID": "708000",
          "ID": "18",
          "prob": "27"
        }
      ]
    },
    "19": {
      "ID": "19",
      "shortname": "grave",
      "groupid": "22",
      "dollar": "26.59",
      "experience": "20.47",
      "malus": "75",
      "danger": "9",
      "luck": "22",
      "level": "19",
      "skills": [
        "ride",
        "endurance",
        "tough",
        "punch",
        "build"
      ],
      "yields": [
        {
          "itemID": "736000",
          "ID": "19",
          "prob": "17.28"
        }
      ]
    },
    "20": {
      "ID": "20",
      "shortname": "turkey",
      "groupid": "1",
      "dollar": "13.17",
      "experience": "21.9",
      "malus": "42",
      "danger": "21",
      "luck": "7",
      "level": "8",
      "skills": [
        "pitfall",
        "shot",
        "hide",
        "hide",
        "reflex"
      ],
      "yields": [
        {
          "itemID": "709000",
          "ID": "20",
          "prob": "24.94"
        }
      ]
    },
    "21": {
      "ID": "21",
      "shortname": "rail",
      "groupid": "25",
      "dollar": "21.97",
      "experience": "24.31",
      "malus": "44",
      "danger": "10",
      "luck": "5",
      "level": "11",
      "skills": [
        "leadership",
        "repair",
        "endurance",
        "build",
        "build"
      ],
      "yields": [
        {
          "itemID": "766000",
          "ID": "21",
          "prob": "62.51"
        }
      ]
    },
    "22": {
      "ID": "22",
      "shortname": "cow",
      "groupid": "12",
      "dollar": "16.32",
      "experience": "23.74",
      "malus": "38",
      "danger": "11",
      "luck": "0",
      "level": "9",
      "skills": [
        "animal",
        "tactic",
        "reflex",
        "ride",
        "ride"
      ],
      "yields": [
        {
          "itemID": "710000",
          "ID": "22",
          "prob": "28.8"
        }
      ]
    },
    "23": {
      "ID": "23",
      "shortname": "fence",
      "groupid": "13",
      "dollar": "18.8",
      "experience": "19.74",
      "malus": "35",
      "danger": "6",
      "luck": "5",
      "level": "8",
      "skills": [
        "animal",
        "animal",
        "repair",
        "repair",
        "finger_dexterity"
      ],
      "yields": [
        {
          "itemID": "747000",
          "ID": "23",
          "prob": "21.1"
        }
      ]
    },
    "24": {
      "ID": "24",
      "shortname": "saw",
      "groupid": "14",
      "dollar": "30.97",
      "experience": "20.47",
      "malus": "63",
      "danger": "32",
      "luck": "6",
      "level": "15",
      "skills": [
        "trade",
        "finger_dexterity",
        "finger_dexterity",
        "reflex",
        "reflex"
      ],
      "yields": [
        {
          "itemID": "742000",
          "ID": "24",
          "prob": "9.67"
        }
      ]
    },
    "25": {
      "ID": "25",
      "shortname": "stone",
      "groupid": "5",
      "dollar": "27.25",
      "experience": "17.28",
      "malus": "52",
      "danger": "33",
      "luck": "9",
      "level": "13",
      "skills": [
        "reflex",
        "endurance",
        "punch",
        "punch",
        "punch"
      ],
      "yields": [
        {
          "itemID": "716000",
          "ID": "25",
          "prob": "43.18"
        }
      ]
    },
    "26": {
      "ID": "26",
      "shortname": "straighten",
      "groupid": "3",
      "dollar": "19.97",
      "experience": "26.39",
      "malus": "84",
      "danger": "12",
      "luck": "15",
      "level": "21",
      "skills": [
        "tactic",
        "swim",
        "swim",
        "swim",
        "build"
      ],
      "yields": [
        {
          "itemID": "795000",
          "ID": "26",
          "prob": "38.51"
        }
      ]
    },
    "27": {
      "ID": "27",
      "shortname": "wood",
      "groupid": "10",
      "dollar": "27.97",
      "experience": "14.18",
      "malus": "47",
      "danger": "21",
      "luck": "2",
      "level": "12",
      "skills": [
        "appearance",
        "reflex",
        "endurance",
        "punch",
        "punch"
      ],
      "yields": [
        {
          "itemID": "711000",
          "ID": "27",
          "prob": "19.27"
        }
      ]
    },
    "28": {
      "ID": "28",
      "shortname": "irrigation",
      "groupid": "25",
      "dollar": "18.8",
      "experience": "21.19",
      "malus": "44",
      "danger": "6",
      "luck": "15",
      "level": "11",
      "skills": [
        "tactic",
        "leadership",
        "repair",
        "ride",
        "build"
      ],
      "yields": [
        {
          "itemID": "736000",
          "ID": "28",
          "prob": "22.07"
        }
      ]
    },
    "29": {
      "ID": "29",
      "shortname": "brand",
      "groupid": "12",
      "dollar": "19.97",
      "experience": "27.97",
      "malus": "49",
      "danger": "35",
      "luck": "0",
      "level": "12",
      "skills": [
        "animal",
        "animal",
        "pitfall",
        "reflex",
        "ride"
      ],
      "yields": [
        {
          "itemID": "740000",
          "ID": "29",
          "prob": "12.47"
        }
      ]
    },
    "30": {
      "ID": "30",
      "shortname": "wire",
      "groupid": "13",
      "dollar": "27.25",
      "experience": "21.19",
      "malus": "57",
      "danger": "30",
      "luck": "6",
      "level": "14",
      "skills": [
        "animal",
        "pitfall",
        "finger_dexterity",
        "finger_dexterity",
        "build"
      ],
      "yields": [
        {
          "itemID": "739000",
          "ID": "30",
          "prob": "22.07"
        }
      ]
    },
    "31": {
      "ID": "31",
      "shortname": "dam",
      "groupid": "3",
      "dollar": "14.97",
      "experience": "24.31",
      "malus": "53",
      "danger": "41",
      "luck": "9",
      "level": "13",
      "skills": [
        "animal",
        "tactic",
        "tactic",
        "swim",
        "swim"
      ],
      "yields": [
        {
          "itemID": "714000",
          "ID": "31",
          "prob": "33.59"
        }
      ]
    },
    "32": {
      "ID": "32",
      "shortname": "gems",
      "groupid": "5",
      "dollar": "32.17",
      "experience": "16.31",
      "malus": "74",
      "danger": "4",
      "luck": "8",
      "level": "17",
      "skills": [
        "trade",
        "trade",
        "finger_dexterity",
        "swim",
        "swim"
      ],
      "yields": [
        {
          "itemID": "720000",
          "ID": "32",
          "prob": "11.52"
        }
      ]
    },
    "33": {
      "ID": "33",
      "shortname": "claim",
      "groupid": "24",
      "dollar": "35.17",
      "experience": "12.93",
      "malus": "56",
      "danger": "29",
      "luck": "4",
      "level": "14",
      "skills": [
        "appearance",
        "trade",
        "swim",
        "endurance",
        "build"
      ],
      "yields": [
        {
          "itemID": "755000",
          "ID": "33",
          "prob": "19.27"
        }
      ]
    },
    "34": {
      "ID": "34",
      "shortname": "chuck_wagon",
      "groupid": "17",
      "dollar": "16.32",
      "experience": "26.98",
      "malus": "133",
      "danger": "11",
      "luck": "42",
      "level": "31",
      "skills": [
        "trade",
        "leadership",
        "repair",
        "repair",
        "ride"
      ],
      "yields": [
        {
          "itemID": "722000",
          "ID": "34",
          "prob": "14.39"
        }
      ]
    },
    "35": {
      "ID": "35",
      "shortname": "break_in",
      "groupid": "11",
      "dollar": "24.39",
      "experience": "30.98",
      "malus": "71",
      "danger": "52",
      "luck": "10",
      "level": "16",
      "skills": [
        "animal",
        "pitfall",
        "reflex",
        "ride",
        "ride"
      ],
      "yields": [
        {
          "itemID": "787000",
          "ID": "35",
          "prob": "17.28"
        }
      ]
    },
    "36": {
      "ID": "36",
      "shortname": "trade",
      "groupid": "23",
      "dollar": "25.97",
      "experience": "11.49",
      "malus": "84",
      "danger": "12",
      "luck": "25",
      "level": "21",
      "skills": [
        "appearance",
        "appearance",
        "trade",
        "trade",
        "pitfall"
      ],
      "yields": [
        {
          "itemID": "774000",
          "ID": "36",
          "prob": "0.94"
        },
        {
          "itemID": "715000",
          "ID": "36",
          "prob": "24.94"
        }
      ]
    },
    "37": {
      "ID": "37",
      "shortname": "mast",
      "groupid": "25",
      "dollar": "29.8",
      "experience": "27.97",
      "malus": "74",
      "danger": "14",
      "luck": "3",
      "level": "18",
      "skills": [
        "repair",
        "swim",
        "punch",
        "build",
        "build"
      ],
      "yields": [
        {
          "itemID": "767000",
          "ID": "37",
          "prob": "13.51"
        }
      ]
    },
    "38": {
      "ID": "38",
      "shortname": "spring",
      "groupid": "24",
      "dollar": "20.97",
      "experience": "31.32",
      "malus": "102",
      "danger": "19",
      "luck": "23",
      "level": "25",
      "skills": [
        "tactic",
        "leadership",
        "swim",
        "endurance",
        "build"
      ],
      "yields": [
        {
          "itemID": "741000",
          "ID": "38",
          "prob": "15.36"
        }
      ]
    },
    "39": {
      "ID": "39",
      "shortname": "beaver",
      "groupid": "1",
      "dollar": "35.59",
      "experience": "23.74",
      "malus": "119",
      "danger": "21",
      "luck": "6",
      "level": "30",
      "skills": [
        "pitfall",
        "pitfall",
        "pitfall",
        "hide",
        "hide"
      ],
      "yields": [
        {
          "itemID": "771000",
          "ID": "39",
          "prob": "22.07"
        },
        {
          "itemID": "714000",
          "ID": "39",
          "prob": "32.64"
        }
      ]
    },
    "40": {
      "ID": "40",
      "shortname": "coal",
      "groupid": "5",
      "dollar": "34.59",
      "experience": "21.9",
      "malus": "85",
      "danger": "13",
      "luck": "0",
      "level": "22",
      "skills": [
        "trade",
        "finger_dexterity",
        "reflex",
        "punch",
        "punch"
      ],
      "yields": [
        {
          "itemID": "721000",
          "ID": "40",
          "prob": "25.9"
        }
      ]
    },
    "41": {
      "ID": "41",
      "shortname": "print",
      "groupid": "14",
      "dollar": "34.59",
      "experience": "25.39",
      "malus": "82",
      "danger": "7",
      "luck": "5",
      "level": "20",
      "skills": [
        "leadership",
        "repair",
        "finger_dexterity",
        "endurance",
        "tough"
      ],
      "yields": [
        {
          "itemID": "744000",
          "ID": "41",
          "prob": "62.51"
        }
      ]
    },
    "42": {
      "ID": "42",
      "shortname": "fishing",
      "groupid": "3",
      "dollar": "17.59",
      "experience": "26.98",
      "malus": "90",
      "danger": "38",
      "luck": "23",
      "level": "23",
      "skills": [
        "leadership",
        "pitfall",
        "pitfall",
        "swim",
        "swim"
      ],
      "yields": [
        {
          "itemID": "717000",
          "ID": "42",
          "prob": "54.71"
        },
        {
          "itemID": "705000",
          "ID": "42",
          "prob": "31.68"
        }
      ]
    },
    "43": {
      "ID": "43",
      "shortname": "trainstation",
      "groupid": "25",
      "dollar": "23.59",
      "experience": "36.31",
      "malus": "112",
      "danger": "15",
      "luck": "7",
      "level": "28",
      "skills": [
        "leadership",
        "repair",
        "finger_dexterity",
        "build",
        "build"
      ],
      "yields": [
        {
          "itemID": "759000",
          "ID": "43",
          "prob": "10.55"
        }
      ]
    },
    "44": {
      "ID": "44",
      "shortname": "windmeel",
      "groupid": "25",
      "dollar": "39.97",
      "experience": "34.98",
      "malus": "163",
      "danger": "18",
      "luck": "6",
      "level": "38",
      "skills": [
        "tactic",
        "leadership",
        "ride",
        "endurance",
        "build"
      ],
      "yields": [
        {
          "itemID": "756000",
          "ID": "44",
          "prob": "4.95"
        }
      ]
    },
    "45": {
      "ID": "45",
      "shortname": "explore",
      "groupid": "24",
      "dollar": "8.32",
      "experience": "35.65",
      "malus": "111",
      "danger": "37",
      "luck": "22",
      "level": "27",
      "skills": [
        "leadership",
        "shot",
        "swim",
        "ride",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "760000",
          "ID": "45",
          "prob": "14.39"
        }
      ]
    },
    "46": {
      "ID": "46",
      "shortname": "float",
      "groupid": "4",
      "dollar": "30.97",
      "experience": "35.65",
      "malus": "137",
      "danger": "52",
      "luck": "0",
      "level": "33",
      "skills": [
        "tactic",
        "swim",
        "swim",
        "swim",
        "reflex"
      ],
      "yields": [
        {
          "itemID": "711000",
          "ID": "46",
          "prob": "52.81"
        }
      ]
    },
    "47": {
      "ID": "47",
      "shortname": "bridge",
      "groupid": "4",
      "dollar": "27.25",
      "experience": "31.32",
      "malus": "107",
      "danger": "53",
      "luck": "18",
      "level": "26",
      "skills": [
        "repair",
        "swim",
        "swim",
        "endurance",
        "build"
      ],
      "yields": [
        {
          "itemID": "761000",
          "ID": "47",
          "prob": "13.51"
        }
      ]
    },
    "48": {
      "ID": "48",
      "shortname": "springe",
      "groupid": "11",
      "dollar": "34.17",
      "experience": "35.65",
      "malus": "134",
      "danger": "42",
      "luck": "0",
      "level": "32",
      "skills": [
        "animal",
        "animal",
        "ride",
        "ride",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "749000",
          "ID": "48",
          "prob": "17.28"
        }
      ]
    },
    "49": {
      "ID": "49",
      "shortname": "coffin",
      "groupid": "28",
      "dollar": "39.97",
      "experience": "17.28",
      "malus": "118",
      "danger": "20",
      "luck": "15",
      "level": "29",
      "skills": [
        "appearance",
        "repair",
        "repair",
        "reflex",
        "build"
      ],
      "yields": [
        {
          "itemID": "734000",
          "ID": "49",
          "prob": "19.27"
        }
      ]
    },
    "50": {
      "ID": "50",
      "shortname": "dynamite",
      "groupid": "17",
      "dollar": "30.97",
      "experience": "20.47",
      "malus": "144",
      "danger": "93",
      "luck": "64",
      "level": "35",
      "skills": [
        "appearance",
        "finger_dexterity",
        "shot",
        "reflex",
        "ride"
      ],
      "yields": [
        {
          "itemID": "737000",
          "ID": "50",
          "prob": "24.01"
        }
      ]
    },
    "51": {
      "ID": "51",
      "shortname": "coyote",
      "groupid": "1",
      "dollar": "25.97",
      "experience": "34.98",
      "malus": "140",
      "danger": "45",
      "luck": "26",
      "level": "34",
      "skills": [
        "pitfall",
        "shot",
        "hide",
        "endurance",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "718000",
          "ID": "51",
          "prob": "13.51"
        }
      ]
    },
    "52": {
      "ID": "52",
      "shortname": "buffalo",
      "groupid": "1",
      "dollar": "31.49",
      "experience": "40.8",
      "malus": "178",
      "danger": "72",
      "luck": "0",
      "level": "41",
      "skills": [
        "animal",
        "tactic",
        "leadership",
        "pitfall",
        "ride"
      ],
      "yields": [
        {
          "itemID": "724000",
          "ID": "52",
          "prob": "10.55"
        }
      ]
    },
    "53": {
      "ID": "53",
      "shortname": "fort",
      "groupid": "26",
      "dollar": "35.97",
      "experience": "43.17",
      "malus": "224",
      "danger": "35",
      "luck": "17",
      "level": "49",
      "skills": [
        "leadership",
        "leadership",
        "repair",
        "pitfall",
        "build"
      ],
      "yields": [
        {
          "itemID": "762000",
          "ID": "53",
          "prob": "5.76"
        }
      ]
    },
    "54": {
      "ID": "54",
      "shortname": "indians",
      "groupid": "23",
      "dollar": "22.74",
      "experience": "21.9",
      "malus": "223",
      "danger": "34",
      "luck": "63",
      "level": "48",
      "skills": [
        "appearance",
        "appearance",
        "trade",
        "trade",
        "pitfall"
      ],
      "yields": [
        {
          "itemID": "719000",
          "ID": "54",
          "prob": "10.55"
        }
      ]
    },
    "55": {
      "ID": "55",
      "shortname": "clearing",
      "groupid": "10",
      "dollar": "46.97",
      "experience": "17.28",
      "malus": "178",
      "danger": "16",
      "luck": "9",
      "level": "41",
      "skills": [
        "tactic",
        "leadership",
        "reflex",
        "punch",
        "punch"
      ],
      "yields": [
        {
          "itemID": "711000",
          "ID": "55",
          "prob": "71.98"
        }
      ]
    },
    "56": {
      "ID": "56",
      "shortname": "silver",
      "groupid": "6",
      "dollar": "51.17",
      "experience": "17.28",
      "malus": "193",
      "danger": "32",
      "luck": "0",
      "level": "42",
      "skills": [
        "trade",
        "trade",
        "finger_dexterity",
        "tough",
        "punch"
      ],
      "yields": [
        {
          "itemID": "725000",
          "ID": "56",
          "prob": "16.31"
        }
      ]
    },
    "57": {
      "ID": "57",
      "shortname": "diligence_guard",
      "groupid": "20",
      "dollar": "36.49",
      "experience": "44.74",
      "malus": "403",
      "danger": "43",
      "luck": "45",
      "level": "71",
      "skills": [
        "leadership",
        "leadership",
        "repair",
        "shot",
        "ride"
      ],
      "yields": [
        {
          "itemID": "780000",
          "ID": "57",
          "prob": "24.94"
        }
      ]
    },
    "58": {
      "ID": "58",
      "shortname": "wolf",
      "groupid": "2",
      "dollar": "29.8",
      "experience": "41.1",
      "malus": "207",
      "danger": "67",
      "luck": "15",
      "level": "44",
      "skills": [
        "animal",
        "pitfall",
        "pitfall",
        "hide",
        "hide"
      ],
      "yields": [
        {
          "itemID": "763000",
          "ID": "58",
          "prob": "10.55"
        }
      ]
    },
    "59": {
      "ID": "59",
      "shortname": "track",
      "groupid": "20",
      "dollar": "21.97",
      "experience": "40.25",
      "malus": "212",
      "danger": "33",
      "luck": "30",
      "level": "45",
      "skills": [
        "tactic",
        "leadership",
        "leadership",
        "hide",
        "hide"
      ],
      "yields": [
        {
          "itemID": "778000",
          "ID": "59",
          "prob": "11.52"
        }
      ]
    },
    "60": {
      "ID": "60",
      "shortname": "ox",
      "groupid": "15",
      "dollar": "47.59",
      "experience": "31.74",
      "malus": "237",
      "danger": "43",
      "luck": "18",
      "level": "53",
      "skills": [
        "animal",
        "pitfall",
        "pitfall",
        "hide",
        "reflex"
      ],
      "yields": [
        {
          "itemID": "787000",
          "ID": "60",
          "prob": "12.47"
        }
      ]
    },
    "61": {
      "ID": "61",
      "shortname": "guard",
      "groupid": "20",
      "dollar": "32.17",
      "experience": "32.13",
      "malus": "221",
      "danger": "4",
      "luck": "38",
      "level": "47",
      "skills": [
        "appearance",
        "appearance",
        "shot",
        "reflex",
        "punch"
      ],
      "yields": [
        {
          "itemID": "750000",
          "ID": "61",
          "prob": "0.94"
        }
      ]
    },
    "62": {
      "ID": "62",
      "shortname": "bible",
      "groupid": "28",
      "dollar": "16.32",
      "experience": "40.59",
      "malus": "235",
      "danger": "77",
      "luck": "52",
      "level": "52",
      "skills": [
        "appearance",
        "appearance",
        "trade",
        "ride",
        "tough"
      ],
      "yields": [
        {
          "itemID": "768000",
          "ID": "62",
          "prob": "15.36"
        }
      ]
    },
    "63": {
      "ID": "63",
      "shortname": "ponyexpress",
      "groupid": "17",
      "dollar": "25.97",
      "experience": "36.64",
      "malus": "225",
      "danger": "44",
      "luck": "51",
      "level": "50",
      "skills": [
        "animal",
        "shot",
        "ride",
        "ride",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "779000",
          "ID": "63",
          "prob": "4.95"
        }
      ]
    },
    "64": {
      "ID": "64",
      "shortname": "weapons",
      "groupid": "23",
      "dollar": "25.97",
      "experience": "32.13",
      "malus": "257",
      "danger": "82",
      "luck": "72",
      "level": "54",
      "skills": [
        "trade",
        "trade",
        "repair",
        "shot",
        "hide"
      ],
      "yields": [
        {
          "itemID": "783000",
          "ID": "64",
          "prob": "1.9"
        }
      ]
    },
    "65": {
      "ID": "65",
      "shortname": "dead",
      "groupid": "22",
      "dollar": "25.17",
      "experience": "21.9",
      "malus": "265",
      "danger": "34",
      "luck": "90",
      "level": "55",
      "skills": [
        "repair",
        "finger_dexterity",
        "finger_dexterity",
        "hide",
        "tough"
      ],
      "yields": [
        {
          "itemID": "774000",
          "ID": "65",
          "prob": "0.94"
        },
        {
          "itemID": "723000",
          "ID": "65",
          "prob": "0.94"
        }
      ]
    },
    "66": {
      "ID": "66",
      "shortname": "grizzly",
      "groupid": "2",
      "dollar": "32.17",
      "experience": "44.93",
      "malus": "280",
      "danger": "71",
      "luck": "35",
      "level": "57",
      "skills": [
        "animal",
        "pitfall",
        "pitfall",
        "shot",
        "hide"
      ],
      "yields": [
        {
          "itemID": "731000",
          "ID": "66",
          "prob": "1.9"
        }
      ]
    },
    "67": {
      "ID": "67",
      "shortname": "oil",
      "groupid": "22",
      "dollar": "53.17",
      "experience": "27.97",
      "malus": "294",
      "danger": "7",
      "luck": "20",
      "level": "59",
      "skills": [
        "trade",
        "leadership",
        "endurance",
        "tough",
        "build"
      ],
      "yields": [
        {
          "itemID": "752000",
          "ID": "67",
          "prob": "14.39"
        }
      ]
    },
    "68": {
      "ID": "68",
      "shortname": "treasure_hunting",
      "groupid": "22",
      "dollar": "29.17",
      "experience": "25.39",
      "malus": "293",
      "danger": "24",
      "luck": "83",
      "level": "58",
      "skills": [
        "tactic",
        "repair",
        "repair",
        "hide",
        "hide"
      ],
      "yields": [
        {
          "itemID": "726000",
          "ID": "68",
          "prob": "0.94"
        }
      ]
    },
    "69": {
      "ID": "69",
      "shortname": "army",
      "groupid": "19",
      "dollar": "44.65",
      "experience": "44.47",
      "malus": "298",
      "danger": "35",
      "luck": "17",
      "level": "60",
      "skills": [
        "appearance",
        "pitfall",
        "shot",
        "swim",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "727000",
          "ID": "69",
          "prob": "3.84"
        }
      ]
    },
    "70": {
      "ID": "70",
      "shortname": "steal",
      "groupid": "15",
      "dollar": "42.17",
      "experience": "37.28",
      "malus": "371",
      "danger": "66",
      "luck": "74",
      "level": "67",
      "skills": [
        "finger_dexterity",
        "pitfall",
        "shot",
        "hide",
        "reflex"
      ],
      "yields": [
        {
          "itemID": "728000",
          "ID": "70",
          "prob": "3.84"
        }
      ]
    },
    "71": {
      "ID": "71",
      "shortname": "mercenary",
      "groupid": "19",
      "dollar": "55.39",
      "experience": "37.9",
      "malus": "331",
      "danger": "65",
      "luck": "23",
      "level": "63",
      "skills": [
        "appearance",
        "repair",
        "shot",
        "swim",
        "tough"
      ],
      "yields": [
        {
          "itemID": "1708000",
          "ID": "71",
          "prob": "45.1"
        }
      ]
    },
    "72": {
      "ID": "72",
      "shortname": "bandits",
      "groupid": "18",
      "dollar": "33.59",
      "experience": "44.2",
      "malus": "384",
      "danger": "83",
      "luck": "85",
      "level": "69",
      "skills": [
        "tactic",
        "leadership",
        "hide",
        "endurance",
        "tough"
      ],
      "yields": [
        {
          "itemID": "729000",
          "ID": "72",
          "prob": "5.76"
        }
      ]
    },
    "73": {
      "ID": "73",
      "shortname": "aggression",
      "groupid": "16",
      "dollar": "51.65",
      "experience": "28.8",
      "malus": "421",
      "danger": "86",
      "luck": "78",
      "level": "75",
      "skills": [
        "appearance",
        "tactic",
        "pitfall",
        "hide",
        "hide"
      ],
      "yields": [
        {
          "itemID": "774000",
          "ID": "73",
          "prob": "0.94"
        },
        {
          "itemID": "730000",
          "ID": "73",
          "prob": "2.87"
        }
      ]
    },
    "74": {
      "ID": "74",
      "shortname": "diligence_aggression",
      "groupid": "16",
      "dollar": "40.25",
      "experience": "43.74",
      "malus": "475",
      "danger": "67",
      "luck": "95",
      "level": "83",
      "skills": [
        "appearance",
        "tactic",
        "leadership",
        "pitfall",
        "shot"
      ],
      "yields": [
        {
          "itemID": "733000",
          "ID": "74",
          "prob": "14.39"
        }
      ]
    },
    "75": {
      "ID": "75",
      "shortname": "bounty",
      "groupid": "18",
      "dollar": "55.39",
      "experience": "30.98",
      "malus": "425",
      "danger": "72",
      "luck": "79",
      "level": "76",
      "skills": [
        "appearance",
        "pitfall",
        "shot",
        "endurance",
        "punch"
      ],
      "yields": [
        {
          "itemID": "1756000",
          "ID": "75",
          "prob": "33.59"
        }
      ]
    },
    "76": {
      "ID": "76",
      "shortname": "captured",
      "groupid": "20",
      "dollar": "30.97",
      "experience": "42.65",
      "malus": "437",
      "danger": "44",
      "luck": "85",
      "level": "79",
      "skills": [
        "tactic",
        "tactic",
        "hide",
        "reflex",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "764000",
          "ID": "76",
          "prob": "7.68"
        }
      ]
    },
    "77": {
      "ID": "77",
      "shortname": "train",
      "groupid": "16",
      "dollar": "48.49",
      "experience": "47.04",
      "malus": "505",
      "danger": "96",
      "luck": "92",
      "level": "86",
      "skills": [
        "trade",
        "pitfall",
        "shot",
        "hide",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "1755000",
          "ID": "77",
          "prob": "1.9"
        }
      ]
    },
    "78": {
      "ID": "78",
      "shortname": "burglary",
      "groupid": "15",
      "dollar": "52.25",
      "experience": "31.74",
      "malus": "517",
      "danger": "26",
      "luck": "81",
      "level": "87",
      "skills": [
        "trade",
        "tactic",
        "hide",
        "hide",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "786000",
          "ID": "78",
          "prob": "3.84"
        }
      ]
    },
    "79": {
      "ID": "79",
      "shortname": "quackery",
      "groupid": "21",
      "dollar": "47.97",
      "experience": "37.28",
      "malus": "315",
      "danger": "67",
      "luck": "52",
      "level": "62",
      "skills": [
        "appearance",
        "trade",
        "pitfall",
        "shot",
        "hide"
      ],
      "yields": [
        {
          "itemID": "794000",
          "ID": "79",
          "prob": "11.52"
        }
      ]
    },
    "80": {
      "ID": "80",
      "shortname": "peace",
      "groupid": "19",
      "dollar": "35.97",
      "experience": "42.49",
      "malus": "366",
      "danger": "44",
      "luck": "76",
      "level": "66",
      "skills": [
        "appearance",
        "trade",
        "shot",
        "hide",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "751000",
          "ID": "80",
          "prob": "7.68"
        }
      ]
    },
    "82": {
      "ID": "82",
      "shortname": "ship",
      "groupid": "28",
      "dollar": "52.8",
      "experience": "32.13",
      "malus": "347",
      "danger": "14",
      "luck": "15",
      "level": "64",
      "skills": [
        "leadership",
        "leadership",
        "swim",
        "swim",
        "punch"
      ],
      "yields": [
        {
          "itemID": "788000",
          "ID": "82",
          "prob": "13.51"
        }
      ]
    },
    "83": {
      "ID": "83",
      "shortname": "smuggle",
      "groupid": "17",
      "dollar": "46.97",
      "experience": "35.65",
      "malus": "410",
      "danger": "56",
      "luck": "83",
      "level": "72",
      "skills": [
        "appearance",
        "trade",
        "shot",
        "swim",
        "hide"
      ],
      "yields": [
        {
          "itemID": "729000",
          "ID": "83",
          "prob": "24.94"
        }
      ]
    },
    "84": {
      "ID": "84",
      "shortname": "ranch",
      "groupid": "26",
      "dollar": "33.59",
      "experience": "40.59",
      "malus": "220",
      "danger": "24",
      "luck": "17",
      "level": "46",
      "skills": [
        "animal",
        "ride",
        "endurance",
        "build",
        "build"
      ],
      "yields": [
        {
          "itemID": "784000",
          "ID": "84",
          "prob": "33.59"
        }
      ]
    },
    "85": {
      "ID": "85",
      "shortname": "iron",
      "groupid": "5",
      "dollar": "43.59",
      "experience": "30.98",
      "malus": "176",
      "danger": "29",
      "luck": "15",
      "level": "40",
      "skills": [
        "repair",
        "finger_dexterity",
        "reflex",
        "punch",
        "build"
      ],
      "yields": [
        {
          "itemID": "790000",
          "ID": "85",
          "prob": "27"
        },
        {
          "itemID": "753000",
          "ID": "85",
          "prob": "1.9"
        }
      ]
    },
    "86": {
      "ID": "86",
      "shortname": "agave",
      "groupid": "9",
      "dollar": "32.17",
      "experience": "34.65",
      "malus": "152",
      "danger": "27",
      "luck": "12",
      "level": "37",
      "skills": [
        "finger_dexterity",
        "endurance",
        "tough",
        "tough",
        "punch"
      ],
      "yields": [
        {
          "itemID": "792000",
          "ID": "86",
          "prob": "13.51"
        }
      ]
    },
    "87": {
      "ID": "87",
      "shortname": "tomato",
      "groupid": "9",
      "dollar": "24.39",
      "experience": "20.47",
      "malus": "42",
      "danger": "11",
      "luck": "7",
      "level": "10",
      "skills": [
        "trade",
        "finger_dexterity",
        "tactic",
        "leadership",
        "ride"
      ],
      "yields": [
        {
          "itemID": "793000",
          "ID": "87",
          "prob": "40.31"
        }
      ]
    },
    "88": {
      "ID": "88",
      "shortname": "horseshoe",
      "groupid": "11",
      "dollar": "25.17",
      "experience": "29.25",
      "malus": "92",
      "danger": "23",
      "luck": "9",
      "level": "24",
      "skills": [
        "animal",
        "animal",
        "ride",
        "ride",
        "punch"
      ],
      "yields": [
        {
          "itemID": "754000",
          "ID": "88",
          "prob": "21.1"
        }
      ]
    },
    "90": {
      "ID": "90",
      "shortname": "fire",
      "groupid": "24",
      "dollar": "25.97",
      "experience": "34.32",
      "malus": "228",
      "danger": "45",
      "luck": "65",
      "level": "51",
      "skills": [
        "tactic",
        "leadership",
        "reflex",
        "tough",
        "build"
      ],
      "yields": [
        {
          "itemID": "781000",
          "ID": "90",
          "prob": "1.9"
        }
      ]
    },
    "91": {
      "ID": "91",
      "shortname": "orange",
      "groupid": "9",
      "dollar": "25.17",
      "experience": "27.97",
      "malus": "66",
      "danger": "21",
      "luck": "10",
      "level": "15",
      "skills": [
        "tactic",
        "repair",
        "pitfall",
        "reflex",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "791000",
          "ID": "91",
          "prob": "24.01"
        }
      ]
    },
    "92": {
      "ID": "92",
      "shortname": "muck_out",
      "groupid": "13",
      "dollar": "14.96",
      "experience": "14.21",
      "malus": "7",
      "danger": "6",
      "luck": "2",
      "level": "6",
      "skills": [
        "animal",
        "animal",
        "repair",
        "ride",
        "tough"
      ],
      "yields": [
        {
          "itemID": "797000",
          "ID": "92",
          "prob": "14.38"
        }
      ]
    },
    "93": {
      "ID": "93",
      "shortname": "shoes",
      "groupid": "27",
      "dollar": "13.17",
      "experience": "9.65",
      "malus": "0",
      "danger": "2",
      "luck": "3",
      "level": "4",
      "skills": [
        "appearance",
        "trade",
        "finger_dexterity",
        "pitfall",
        "hide"
      ],
      "yields": [
        {
          "itemID": "789000",
          "ID": "93",
          "prob": "31.68"
        }
      ]
    },
    "94": {
      "ID": "94",
      "shortname": "socks_darn",
      "groupid": "27",
      "dollar": "8.32",
      "experience": "12.93",
      "malus": "0",
      "danger": "2",
      "luck": "0",
      "level": "5",
      "skills": [
        "finger_dexterity",
        "finger_dexterity",
        "endurance",
        "tough",
        "tough"
      ],
      "yields": [
        {
          "itemID": "1807000",
          "ID": "94",
          "prob": "24.01"
        }
      ]
    },
    "95": {
      "ID": "95",
      "shortname": "potatoe",
      "groupid": "9",
      "dollar": "19.97",
      "experience": "38.18",
      "malus": "112",
      "danger": "5",
      "luck": "5",
      "level": "28",
      "skills": [
        "finger_dexterity",
        "endurance",
        "endurance",
        "tough",
        "tough"
      ],
      "yields": [
        {
          "itemID": "1808000",
          "ID": "95",
          "prob": "52.81"
        }
      ]
    },
    "96": {
      "ID": "96",
      "shortname": "feed_animal",
      "groupid": "13",
      "dollar": "27.25",
      "experience": "40.25",
      "malus": "146",
      "danger": "20",
      "luck": "10",
      "level": "36",
      "skills": [
        "animal",
        "animal",
        "leadership",
        "tough",
        "punch"
      ],
      "yields": [
        {
          "itemID": "1809000",
          "ID": "96",
          "prob": "35.52"
        }
      ]
    },
    "97": {
      "ID": "97",
      "shortname": "pumpkin",
      "groupid": "9",
      "dollar": "41.17",
      "experience": "35.65",
      "malus": "174",
      "danger": "10",
      "luck": "10",
      "level": "39",
      "skills": [
        "tactic",
        "endurance",
        "tough",
        "punch",
        "punch"
      ],
      "yields": [
        {
          "itemID": "1810000",
          "ID": "97",
          "prob": "44.14"
        }
      ]
    },
    "98": {
      "ID": "98",
      "shortname": "blueberries",
      "groupid": "8",
      "dollar": "43.59",
      "experience": "32.13",
      "malus": "199",
      "danger": "15",
      "luck": "35",
      "level": "43",
      "skills": [
        "punch",
        "finger_dexterity",
        "ride",
        "ride",
        "tough"
      ],
      "yields": [
        {
          "itemID": "1811000",
          "ID": "98",
          "prob": "43.18"
        }
      ]
    },
    "99": {
      "ID": "99",
      "shortname": "plant_trees",
      "groupid": "10",
      "dollar": "36.49",
      "experience": "27.97",
      "malus": "225",
      "danger": "25",
      "luck": "54",
      "level": "50",
      "skills": [
        "tactic",
        "finger_dexterity",
        "ride",
        "build",
        "build"
      ],
      "yields": [
        {
          "itemID": "1812000",
          "ID": "99",
          "prob": "22.07"
        }
      ]
    },
    "100": {
      "ID": "100",
      "shortname": "gather_feathers",
      "groupid": "24",
      "dollar": "41.8",
      "experience": "26.98",
      "malus": "275",
      "danger": "15",
      "luck": "60",
      "level": "56",
      "skills": [
        "trade",
        "tactic",
        "repair",
        "repair",
        "finger_dexterity"
      ],
      "yields": [
        {
          "itemID": "1813000",
          "ID": "100",
          "prob": "11.52"
        }
      ]
    },
    "101": {
      "ID": "101",
      "shortname": "lotus_gathering",
      "groupid": "4",
      "dollar": "44.32",
      "experience": "35.65",
      "malus": "350",
      "danger": "20",
      "luck": "35",
      "level": "65",
      "skills": [
        "repair",
        "finger_dexterity",
        "swim",
        "swim",
        "tough"
      ],
      "yields": [
        {
          "itemID": "1814000",
          "ID": "101",
          "prob": "4.95"
        }
      ]
    },
    "102": {
      "ID": "102",
      "shortname": "crab_hunting",
      "groupid": "4",
      "dollar": "48.49",
      "experience": "39.17",
      "malus": "375",
      "danger": "12",
      "luck": "35",
      "level": "68",
      "skills": [
        "finger_dexterity",
        "swim",
        "swim",
        "reflex",
        "tough"
      ],
      "yields": [
        {
          "itemID": "1815000",
          "ID": "102",
          "prob": "9.67"
        }
      ]
    },
    "103": {
      "ID": "103",
      "shortname": "teaching",
      "groupid": "28",
      "dollar": "44.32",
      "experience": "45.19",
      "malus": "400",
      "danger": "23",
      "luck": "5",
      "level": "70",
      "skills": [
        "appearance",
        "appearance",
        "leadership",
        "pitfall",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "1816000",
          "ID": "103",
          "prob": "43.18"
        }
      ]
    },
    "104": {
      "ID": "104",
      "shortname": "sheriff_work",
      "groupid": "19",
      "dollar": "48.49",
      "experience": "44.47",
      "malus": "410",
      "danger": "45",
      "luck": "56",
      "level": "73",
      "skills": [
        "appearance",
        "leadership",
        "shot",
        "shot",
        "reflex"
      ],
      "yields": [
        {
          "itemID": "1817000",
          "ID": "104",
          "prob": "33.59"
        }
      ]
    },
    "105": {
      "ID": "105",
      "shortname": "sulfur_gathering",
      "groupid": "6",
      "dollar": "51.17",
      "experience": "31.74",
      "malus": "420",
      "danger": "32",
      "luck": "78",
      "level": "74",
      "skills": [
        "repair",
        "reflex",
        "reflex",
        "punch",
        "punch"
      ],
      "yields": [
        {
          "itemID": "1818000",
          "ID": "105",
          "prob": "52.81"
        }
      ]
    },
    "106": {
      "ID": "106",
      "shortname": "wildwater",
      "groupid": "4",
      "dollar": "53.32",
      "experience": "43.97",
      "malus": "425",
      "danger": "57",
      "luck": "30",
      "level": "77",
      "skills": [
        "tactic",
        "swim",
        "swim",
        "reflex",
        "reflex"
      ],
      "yields": []
    },
    "107": {
      "ID": "107",
      "shortname": "gambler",
      "groupid": "21",
      "dollar": "48.49",
      "experience": "39.4",
      "malus": "430",
      "danger": "63",
      "luck": "69",
      "level": "78",
      "skills": [
        "appearance",
        "trade",
        "shot",
        "hide",
        "reflex"
      ],
      "yields": [
        {
          "itemID": "1819000",
          "ID": "107",
          "prob": "33.59"
        }
      ]
    },
    "108": {
      "ID": "108",
      "shortname": "rattlesnake",
      "groupid": "2",
      "dollar": "49.97",
      "experience": "35.97",
      "malus": "440",
      "danger": "73",
      "luck": "71",
      "level": "80",
      "skills": [
        "animal",
        "pitfall",
        "hide",
        "reflex",
        "reflex"
      ],
      "yields": [
        {
          "itemID": "1820000",
          "ID": "108",
          "prob": "19.27"
        }
      ]
    },
    "109": {
      "ID": "109",
      "shortname": "salpeter_gathering",
      "groupid": "6",
      "dollar": "46.97",
      "experience": "38.18",
      "malus": "450",
      "danger": "27",
      "luck": "58",
      "level": "81",
      "skills": [
        "repair",
        "finger_dexterity",
        "endurance",
        "tough",
        "tough"
      ],
      "yields": [
        {
          "itemID": "1821000",
          "ID": "109",
          "prob": "43.18"
        }
      ]
    },
    "110": {
      "ID": "110",
      "shortname": "horse_transport",
      "groupid": "11",
      "dollar": "48.17",
      "experience": "45.9",
      "malus": "450",
      "danger": "48",
      "luck": "69",
      "level": "82",
      "skills": [
        "animal",
        "animal",
        "leadership",
        "ride",
        "ride"
      ],
      "yields": [
        {
          "itemID": "1822000",
          "ID": "110",
          "prob": "22.07"
        }
      ]
    },
    "111": {
      "ID": "111",
      "shortname": "rodeo",
      "groupid": "21",
      "dollar": "51.17",
      "experience": "39.17",
      "malus": "499",
      "danger": "78",
      "luck": "69",
      "level": "84",
      "skills": [
        "animal",
        "pitfall",
        "ride",
        "ride",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "1823000",
          "ID": "111",
          "prob": "4.95"
        }
      ]
    },
    "112": {
      "ID": "112",
      "shortname": "travelling_salesman",
      "groupid": "23",
      "dollar": "45.97",
      "experience": "35.97",
      "malus": "500",
      "danger": "67",
      "luck": "97",
      "level": "85",
      "skills": [
        "appearance",
        "trade",
        "trade",
        "pitfall",
        "tough"
      ],
      "yields": []
    },
    "113": {
      "ID": "113",
      "shortname": "con_artist",
      "groupid": "21",
      "dollar": "51.65",
      "experience": "47.49",
      "malus": "520",
      "danger": "83",
      "luck": "35",
      "level": "88",
      "skills": [
        "appearance",
        "trade",
        "tactic",
        "pitfall",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "1836000",
          "ID": "113",
          "prob": "15.36"
        }
      ]
    },
    "114": {
      "ID": "114",
      "shortname": "cougar",
      "groupid": "2",
      "dollar": "41.39",
      "experience": "47.49",
      "malus": "540",
      "danger": "93",
      "luck": "39",
      "level": "89",
      "skills": [
        "animal",
        "tactic",
        "pitfall",
        "shot",
        "shot"
      ],
      "yields": [
        {
          "itemID": "1824000",
          "ID": "114",
          "prob": "27"
        }
      ]
    },
    "115": {
      "ID": "115",
      "shortname": "indigo_gathering",
      "groupid": "10",
      "dollar": "54.17",
      "experience": "43.74",
      "malus": "590",
      "danger": "69",
      "luck": "29",
      "level": "91",
      "skills": [
        "trade",
        "tactic",
        "finger_dexterity",
        "finger_dexterity",
        "reflex"
      ],
      "yields": [
        {
          "itemID": "1825000",
          "ID": "115",
          "prob": "19.25"
        }
      ]
    },
    "116": {
      "ID": "116",
      "shortname": "alcohol",
      "groupid": "17",
      "dollar": "50.59",
      "experience": "47.97",
      "malus": "600",
      "danger": "56",
      "luck": "34",
      "level": "92",
      "skills": [
        "leadership",
        "shot",
        "hide",
        "hide",
        "ride"
      ],
      "yields": [
        {
          "itemID": "1826000",
          "ID": "116",
          "prob": "43.18"
        }
      ]
    },
    "117": {
      "ID": "117",
      "shortname": "lead_gathering",
      "groupid": "6",
      "dollar": "54.65",
      "experience": "43.49",
      "malus": "620",
      "danger": "72",
      "luck": "22",
      "level": "93",
      "skills": [
        "leadership",
        "finger_dexterity",
        "repair",
        "repair",
        "punch"
      ],
      "yields": [
        {
          "itemID": "1827000",
          "ID": "117",
          "prob": "52.81"
        }
      ]
    },
    "118": {
      "ID": "118",
      "shortname": "gem_gathering",
      "groupid": "6",
      "dollar": "55.17",
      "experience": "44.93",
      "malus": "640",
      "danger": "77",
      "luck": "23",
      "level": "94",
      "skills": [
        "repair",
        "shot",
        "endurance",
        "punch",
        "punch"
      ],
      "yields": []
    },
    "119": {
      "ID": "119",
      "shortname": "mission",
      "groupid": "26",
      "dollar": "55.39",
      "experience": "45.9",
      "malus": "570",
      "danger": "38",
      "luck": "54",
      "level": "90",
      "skills": [
        "repair",
        "endurance",
        "punch",
        "build",
        "build"
      ],
      "yields": [
        {
          "itemID": "1831000",
          "ID": "119",
          "prob": "11.52"
        }
      ]
    },
    "120": {
      "ID": "120",
      "shortname": "casino",
      "groupid": "26",
      "dollar": "51.65",
      "experience": "48.13",
      "malus": "650",
      "danger": "47",
      "luck": "23",
      "level": "95",
      "skills": [
        "leadership",
        "repair",
        "build",
        "build",
        "build"
      ],
      "yields": [
        {
          "itemID": "1832000",
          "ID": "120",
          "prob": "38.51"
        }
      ]
    },
    "121": {
      "ID": "121",
      "shortname": "marshall",
      "groupid": "19",
      "dollar": "54.17",
      "experience": "47.74",
      "malus": "700",
      "danger": "94",
      "luck": "60",
      "level": "96",
      "skills": [
        "appearance",
        "pitfall",
        "shot",
        "shot",
        "ride"
      ],
      "yields": [
        {
          "itemID": "1833000",
          "ID": "121",
          "prob": "3.84"
        }
      ]
    },
    "122": {
      "ID": "122",
      "shortname": "shatter_gang",
      "groupid": "18",
      "dollar": "53.32",
      "experience": "42.98",
      "malus": "725",
      "danger": "99",
      "luck": "89",
      "level": "97",
      "skills": [
        "tactic",
        "pitfall",
        "hide",
        "hide",
        "endurance"
      ],
      "yields": []
    },
    "123": {
      "ID": "123",
      "shortname": "bankrobbery",
      "groupid": "16",
      "dollar": "55.65",
      "experience": "46.39",
      "malus": "740",
      "danger": "89",
      "luck": "30",
      "level": "98",
      "skills": [
        "trade",
        "leadership",
        "pitfall",
        "hide",
        "hide"
      ],
      "yields": [
        {
          "itemID": "1837000",
          "ID": "123",
          "prob": "0.94"
        }
      ]
    },
    "124": {
      "ID": "124",
      "shortname": "free_slaves",
      "groupid": "18",
      "dollar": "53.32",
      "experience": "48.39",
      "malus": "750",
      "danger": "92",
      "luck": "28",
      "level": "99",
      "skills": [
        "appearance",
        "tactic",
        "leadership",
        "shot",
        "swim"
      ],
      "yields": [
        {
          "itemID": "1834000",
          "ID": "124",
          "prob": "16.31"
        }
      ]
    },
    "125": {
      "ID": "125",
      "shortname": "buffelo_bill",
      "groupid": "21",
      "dollar": "55.39",
      "experience": "48.59",
      "malus": "800",
      "danger": "70",
      "luck": "65",
      "level": "100",
      "skills": [
        "appearance",
        "appearance",
        "animal",
        "shot",
        "ride"
      ],
      "yields": [
        {
          "itemID": "1835000",
          "ID": "125",
          "prob": "11.52"
        }
      ]
    },
    "126": {
      "ID": "126",
      "shortname": "build_palisade",
      "groupid": "26",
      "dollar": "35.97",
      "experience": "41.65",
      "malus": "300",
      "danger": "30",
      "luck": "20",
      "level": "66",
      "skills": [
        "leadership",
        "repair",
        "endurance",
        "punch",
        "build"
      ],
      "yields": []
    },
    "127": {
      "ID": "127",
      "shortname": "spearfishing",
      "groupid": "3",
      "dollar": "11.17",
      "experience": "7.25",
      "malus": "2",
      "danger": "20",
      "luck": "2",
      "level": "2",
      "skills": [
        "punch",
        "punch",
        "endurance",
        "endurance",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "2160000",
          "ID": "127",
          "prob": "95.98"
        }
      ]
    },
    "128": {
      "ID": "128",
      "shortname": "gather_spices",
      "groupid": "7",
      "dollar": "0",
      "experience": "9.73",
      "malus": "0",
      "danger": "1",
      "luck": "0",
      "level": "1",
      "skills": [
        "punch",
        "punch",
        "punch",
        "punch",
        "punch"
      ],
      "yields": [
        {
          "itemID": "2161000",
          "ID": "128",
          "prob": "95.98"
        }
      ]
    },
    "129": {
      "ID": "129",
      "shortname": "grind_coffee",
      "groupid": "27",
      "dollar": "11.17",
      "experience": "9.73",
      "malus": "2",
      "danger": "20",
      "luck": "2",
      "level": "2",
      "skills": [
        "reflex",
        "finger_dexterity",
        "tough",
        "endurance",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "2162000",
          "ID": "129",
          "prob": "95.98"
        }
      ]
    },
    "130": {
      "ID": "130",
      "shortname": "lambs",
      "groupid": "12",
      "dollar": "11.17",
      "experience": "11.49",
      "malus": "0",
      "danger": "10",
      "luck": "1",
      "level": "1",
      "skills": [
        "endurance",
        "endurance",
        "endurance",
        "tough",
        "tough"
      ],
      "yields": [
        {
          "itemID": "2163000",
          "ID": "130",
          "prob": "95.98"
        }
      ]
    },
    "131": {
      "ID": "131",
      "shortname": "trapper",
      "groupid": "32",
      "dollar": "53.32",
      "experience": "45.65",
      "malus": "810",
      "danger": "40",
      "luck": "23",
      "level": "101",
      "skills": [
        "animal",
        "animal",
        "pitfall",
        "swim",
        "swim"
      ],
      "yields": [
        {
          "itemID": "2445000",
          "ID": "131",
          "prob": "13.49"
        }
      ]
    },
    "132": {
      "ID": "132",
      "shortname": "play_piano",
      "groupid": "33",
      "dollar": "50.25",
      "experience": "47.97",
      "malus": "820",
      "danger": "30",
      "luck": "21",
      "level": "102",
      "skills": [
        "appearance",
        "tactic",
        "finger_dexterity",
        "finger_dexterity",
        "tough"
      ],
      "yields": [
        {
          "itemID": "2436000",
          "ID": "132",
          "prob": "30.71"
        }
      ]
    },
    "133": {
      "ID": "133",
      "shortname": "guide_greenhorns",
      "groupid": "31",
      "dollar": "51.39",
      "experience": "48.8",
      "malus": "830",
      "danger": "50",
      "luck": "33",
      "level": "103",
      "skills": [
        "animal",
        "leadership",
        "pitfall",
        "ride",
        "punch"
      ],
      "yields": [
        {
          "itemID": "2432000",
          "ID": "133",
          "prob": "19.25"
        }
      ]
    },
    "134": {
      "ID": "134",
      "shortname": "construct_lazarett",
      "groupid": "29",
      "dollar": "50.97",
      "experience": "47.49",
      "malus": "840",
      "danger": "20",
      "luck": "55",
      "level": "104",
      "skills": [
        "tactic",
        "repair",
        "endurance",
        "build",
        "build"
      ],
      "yields": [
        {
          "itemID": "2435000",
          "ID": "134",
          "prob": "16.31"
        }
      ]
    },
    "135": {
      "ID": "135",
      "shortname": "translator",
      "groupid": "34",
      "dollar": "56.97",
      "experience": "48.8",
      "malus": "850",
      "danger": "43",
      "luck": "34",
      "level": "105",
      "skills": [
        "appearance",
        "tactic",
        "leadership",
        "reflex",
        "tough"
      ],
      "yields": [
        {
          "itemID": "2441000",
          "ID": "135",
          "prob": "12.47"
        }
      ]
    },
    "136": {
      "ID": "136",
      "shortname": "arm_wrestling",
      "groupid": "33",
      "dollar": "57.97",
      "experience": "48.39",
      "malus": "860",
      "danger": "78",
      "luck": "83",
      "level": "106",
      "skills": [
        "tough",
        "finger_dexterity",
        "reflex",
        "endurance",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "2450000",
          "ID": "136",
          "prob": "21.1"
        }
      ]
    },
    "137": {
      "ID": "137",
      "shortname": "harvest_pepper",
      "groupid": "32",
      "dollar": "55.39",
      "experience": "47.04",
      "malus": "870",
      "danger": "48",
      "luck": "56",
      "level": "107",
      "skills": [
        "tactic",
        "finger_dexterity",
        "tough",
        "tough",
        "punch"
      ],
      "yields": [
        {
          "itemID": "2447000",
          "ID": "137",
          "prob": "22.07"
        }
      ]
    },
    "138": {
      "ID": "138",
      "shortname": "grave_digger",
      "groupid": "30",
      "dollar": "51.97",
      "experience": "44.74",
      "malus": "880",
      "danger": "67",
      "luck": "91",
      "level": "108",
      "skills": [
        "repair",
        "repair",
        "endurance",
        "punch",
        "build"
      ],
      "yields": [
        {
          "itemID": "2452000",
          "ID": "138",
          "prob": "16.31"
        }
      ]
    },
    "139": {
      "ID": "139",
      "shortname": "bodyguard",
      "groupid": "34",
      "dollar": "59.49",
      "experience": "50.07",
      "malus": "890",
      "danger": "96",
      "luck": "87",
      "level": "109",
      "skills": [
        "appearance",
        "leadership",
        "shot",
        "hide",
        "punch"
      ],
      "yields": [
        {
          "itemID": "2440000",
          "ID": "139",
          "prob": "18.27"
        }
      ]
    },
    "140": {
      "ID": "140",
      "shortname": "melting_bullets",
      "groupid": "29",
      "dollar": "57.97",
      "experience": "49.49",
      "malus": "900",
      "danger": "85",
      "luck": "67",
      "level": "110",
      "skills": [
        "tactic",
        "repair",
        "finger_dexterity",
        "reflex",
        "reflex"
      ],
      "yields": [
        {
          "itemID": "2430000",
          "ID": "140",
          "prob": "9.67"
        }
      ]
    },
    "141": {
      "ID": "141",
      "shortname": "track_big_game",
      "groupid": "32",
      "dollar": "54.65",
      "experience": "54.8",
      "malus": "910",
      "danger": "94",
      "luck": "74",
      "level": "111",
      "skills": [
        "animal",
        "animal",
        "hide",
        "hide",
        "ride"
      ],
      "yields": [
        {
          "itemID": "2438000",
          "ID": "141",
          "prob": "20.13"
        }
      ]
    },
    "142": {
      "ID": "142",
      "shortname": "embassador",
      "groupid": "34",
      "dollar": "59.97",
      "experience": "52.31",
      "malus": "920",
      "danger": "78",
      "luck": "82",
      "level": "112",
      "skills": [
        "appearance",
        "trade",
        "trade",
        "pitfall",
        "pitfall"
      ],
      "yields": [
        {
          "itemID": "2443000",
          "ID": "142",
          "prob": "8.64"
        }
      ]
    },
    "143": {
      "ID": "143",
      "shortname": "plan_reservat",
      "groupid": "31",
      "dollar": "58.17",
      "experience": "52.5",
      "malus": "930",
      "danger": "81",
      "luck": "81",
      "level": "113",
      "skills": [
        "trade",
        "leadership",
        "ride",
        "build",
        "build"
      ],
      "yields": [
        {
          "itemID": "2444000",
          "ID": "143",
          "prob": "8.64"
        }
      ]
    },
    "144": {
      "ID": "144",
      "shortname": "colonialize_areas",
      "groupid": "31",
      "dollar": "58.59",
      "experience": "52.93",
      "malus": "940",
      "danger": "89",
      "luck": "85",
      "level": "114",
      "skills": [
        "pitfall",
        "swim",
        "swim",
        "build",
        "build"
      ],
      "yields": [
        {
          "itemID": "2442000",
          "ID": "144",
          "prob": "24.01"
        }
      ]
    },
    "145": {
      "ID": "145",
      "shortname": "gunslinger",
      "groupid": "33",
      "dollar": "57.59",
      "experience": "55.49",
      "malus": "950",
      "danger": "96",
      "luck": "82",
      "level": "115",
      "skills": [
        "appearance",
        "shot",
        "shot",
        "hide",
        "ride"
      ],
      "yields": [
        {
          "itemID": "2446000",
          "ID": "145",
          "prob": "24.94"
        }
      ]
    },
    "146": {
      "ID": "146",
      "shortname": "loge",
      "groupid": "34",
      "dollar": "58.97",
      "experience": "52.74",
      "malus": "960",
      "danger": "76",
      "luck": "83",
      "level": "116",
      "skills": [
        "trade",
        "tactic",
        "pitfall",
        "hide",
        "ride"
      ],
      "yields": [
        {
          "itemID": "2448000",
          "ID": "146",
          "prob": "5.76"
        }
      ]
    },
    "147": {
      "ID": "147",
      "shortname": "stage_performer",
      "groupid": "33",
      "dollar": "55.17",
      "experience": "55.17",
      "malus": "970",
      "danger": "56",
      "luck": "67",
      "level": "117",
      "skills": [
        "appearance",
        "leadership",
        "shot",
        "hide",
        "reflex"
      ],
      "yields": [
        {
          "itemID": "2449000",
          "ID": "147",
          "prob": "13.51"
        }
      ]
    },
    "148": {
      "ID": "148",
      "shortname": "peace_officer",
      "groupid": "29",
      "dollar": "60.17",
      "experience": "52.5",
      "malus": "980",
      "danger": "67",
      "luck": "57",
      "level": "118",
      "skills": [
        "appearance",
        "tactic",
        "shot",
        "ride",
        "punch"
      ],
      "yields": [
        {
          "itemID": "2453000",
          "ID": "148",
          "prob": "10.55"
        }
      ]
    },
    "149": {
      "ID": "149",
      "shortname": "preacher",
      "groupid": "30",
      "dollar": "45.32",
      "experience": "54.6",
      "malus": "990",
      "danger": "56",
      "luck": "78",
      "level": "119",
      "skills": [
        "trade",
        "leadership",
        "hide",
        "endurance",
        "tough"
      ],
      "yields": [
        {
          "itemID": "2454000",
          "ID": "149",
          "prob": "27.84"
        }
      ]
    },
    "150": {
      "ID": "150",
      "shortname": "build_settlement",
      "groupid": "30",
      "dollar": "55.65",
      "experience": "54.24",
      "malus": "1000",
      "danger": "37",
      "luck": "47",
      "level": "120",
      "skills": [
        "repair",
        "repair",
        "finger_dexterity",
        "build",
        "build"
      ],
      "yields": [
        {
          "itemID": "2433000",
          "ID": "150",
          "prob": "23.04"
        }
      ]
    },
    "151": {
      "ID": "151",
      "shortname": "recruit_soldiers",
      "groupid": "29",
      "dollar": "58.17",
      "experience": "56.13",
      "malus": "1010",
      "danger": "49",
      "luck": "57",
      "level": "121",
      "skills": [
        "tactic",
        "leadership",
        "ride",
        "endurance",
        "tough"
      ],
      "yields": [
        {
          "itemID": "2431000",
          "ID": "151",
          "prob": "1.9"
        }
      ]
    },
    "152": {
      "ID": "152",
      "shortname": "order_troops",
      "groupid": "29",
      "dollar": "54.65",
      "experience": "59.32",
      "malus": "1020",
      "danger": "67",
      "luck": "23",
      "level": "122",
      "skills": [
        "trade",
        "leadership",
        "pitfall",
        "pitfall",
        "reflex"
      ],
      "yields": [
        {
          "itemID": "2439000",
          "ID": "152",
          "prob": "10.55"
        }
      ]
    },
    "153": {
      "ID": "153",
      "shortname": "hunt_aligators",
      "groupid": "32",
      "dollar": "55.17",
      "experience": "61.59",
      "malus": "1030",
      "danger": "87",
      "luck": "12",
      "level": "123",
      "skills": [
        "animal",
        "swim",
        "swim",
        "swim",
        "hide"
      ],
      "yields": [
        {
          "itemID": "2455000",
          "ID": "153",
          "prob": "25.9"
        }
      ]
    },
    "154": {
      "ID": "154",
      "shortname": "destille_alkohol",
      "groupid": "33",
      "dollar": "61.49",
      "experience": "52.13",
      "malus": "1040",
      "danger": "93",
      "luck": "34",
      "level": "124",
      "skills": [
        "trade",
        "tactic",
        "repair",
        "finger_dexterity",
        "reflex"
      ],
      "yields": [
        {
          "itemID": "2456000",
          "ID": "154",
          "prob": "17.28"
        }
      ]
    },
    "155": {
      "ID": "155",
      "shortname": "trading_office",
      "groupid": "30",
      "dollar": "57.59",
      "experience": "47.04",
      "malus": "1050",
      "danger": "63",
      "luck": "121",
      "level": "125",
      "skills": [
        "trade",
        "trade",
        "trade",
        "shot",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "1975000",
          "ID": "155",
          "prob": "14.39"
        }
      ]
    },
    "156": {
      "ID": "156",
      "shortname": "craft_dynamite",
      "groupid": "32",
      "dollar": "62.17",
      "experience": "49.65",
      "malus": "1060",
      "danger": "99",
      "luck": "65",
      "level": "126",
      "skills": [
        "finger_dexterity",
        "finger_dexterity",
        "hide",
        "reflex",
        "reflex"
      ],
      "yields": [
        {
          "itemID": "2451000",
          "ID": "156",
          "prob": "17.28"
        }
      ]
    },
    "157": {
      "ID": "157",
      "shortname": "lead_expedition",
      "groupid": "31",
      "dollar": "59.25",
      "experience": "54.8",
      "malus": "1070",
      "danger": "87",
      "luck": "87",
      "level": "127",
      "skills": [
        "animal",
        "swim",
        "swim",
        "ride",
        "tough"
      ],
      "yields": [
        {
          "itemID": "2458000",
          "ID": "157",
          "prob": "31.68"
        }
      ]
    },
    "158": {
      "ID": "158",
      "shortname": "work_wells_fargo",
      "groupid": "30",
      "dollar": "58.32",
      "experience": "52.93",
      "malus": "1080",
      "danger": "76",
      "luck": "110",
      "level": "128",
      "skills": [
        "animal",
        "animal",
        "repair",
        "swim",
        "ride"
      ],
      "yields": [
        {
          "itemID": "2457000",
          "ID": "158",
          "prob": "16.31"
        }
      ]
    },
    "159": {
      "ID": "159",
      "shortname": "work_pinkerton_agent",
      "groupid": "34",
      "dollar": "60.59",
      "experience": "56.93",
      "malus": "1090",
      "danger": "94",
      "luck": "56",
      "level": "129",
      "skills": [
        "appearance",
        "shot",
        "hide",
        "punch",
        "punch"
      ],
      "yields": [
        {
          "itemID": "2437000",
          "ID": "159",
          "prob": "8.64"
        }
      ]
    },
    "160": {
      "ID": "160",
      "shortname": "explore_west",
      "groupid": "31",
      "dollar": "59.74",
      "experience": "55.68",
      "malus": "1100",
      "danger": "89",
      "luck": "110",
      "level": "130",
      "skills": [
        "animal",
        "trade",
        "pitfall",
        "swim",
        "endurance"
      ],
      "yields": [
        {
          "itemID": "2434000",
          "ID": "160",
          "prob": "4.95"
        }
      ]
    }
  };
  function sendBack() {
    document.dispatchEvent(new CustomEvent('7yhqb5zz6Vv66Mcq', { 'detail': db }));
    document.removeEventListener('KfPv2FP6GFg5Cbfj', sendBack);
  }
  function handleRequest() {
    document.addEventListener('KfPv2FP6GFg5Cbfj', sendBack);  
  }
  handleRequest();
})()