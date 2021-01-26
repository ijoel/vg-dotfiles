// All the variable for the app
// Their name are explicit

var username = "AuroraDraco"
var clientid = "be212a58528168962a39c64052c1d88e";
var redirecturi = "http://localhost:8002/callback.html";
var locations = [
  "784201",
  "784302"
];
var images = [
  "1412446496031.jpg",
  "1417804954510.jpg",
  "1422771896804.jpg",
  "1424655132831.jpg",
  "1425939966695.jpg",
  "1429482830109.jpg",
  "1429569823779.jpg",
  "1437167260211.jpg",
  "1437214448937.jpg",
  "1437214448937.jpg",
  "1444816416285.jpg",
  "1444827390885.jpg",
  "1444827771939.jpg",
  "1445223016379.jpg",
  "1445223050369.jpg",
  "1445370353275.jpg",
  "1445705808951.jpg",
  "1445713184723.jpg",
  "1448399280112.jpg",
  "1450066383293.jpg",
  "1450074394745.jpg"
];
var searchs = [
  ["!g", "https://www.google.ch/#q="],
  ["!y", "https://www.youtube.com/results?search_query="],
  ["!a", "https://wiki.archlinux.org/index.php?search="],
  ["!r", "https://www.reddit.com/search/?q="],
  ["!l", "https://lutris.net/games?q="],
  ["!p", "https://www.protondb.com/search?q="],
  ["!t", "https://lolchess.gg/search?region=EUNE&name="],
  ["!w", "https://www.wolframalpha.com/input/?i="],
  ["!s", "https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q="],
  ["!b", "https://bulbapedia.bulbagarden.net/w/index.php?title="]
];
var favorites = [
  [ "University",
    [
      ["Chemeng" , "https://www.chemeng.ntua.gr/", "ch"],
      ["MyCourses" , "https://mycourses.ntua.gr/index.php", "mc"],
      ["Submissions" , "https://www.chemeng.ntua.gr/submission/", "cs"],
      ["Wolfram Alpha" , "https://www.wolframalpha.com", "wa"],
      ["ChemengCourses" , "https://courses.chemeng.ntua.gr/", "cc"]
    ]
  ],
  [ "Socials",
    [
      ["Messenger" , "https://www.messenger.com", "ms"],
      ["Twitch" , "https://www.twitch.tv", "tw"],
      ["Personal Github" , "https://github.com/AuroraDragoon", "gh"],
      ["Youtube" , "https://www.youtube.com/", "yt"],
      ["Discord" , "https://discord.com/channels/@me", "dc"],
      ["Instagram" , "https://instagram.com/", "in"]
    ]
  ],
  [ "Documentations/Manuals",
    [
      ["Emacs", "https://www.gnu.org/software/emacs/manual/html_node/emacs/index.html", "em"],
      ["Octave" , "https://octave.org/doc/v5.2.0/", "oc"],
      ["Qtile", "http://docs.qtile.org/en/latest/", "qt"]
    ]
  ],
  [ "Reddit",
    [
      ["Main Page", "https://www.reddit.com/", "rm"],
      ["Emacs Subreddit", "https://www.reddit.com/r/emacs/", "er"],
      ["r/unixporn", "https://www.reddit.com/r/unixporn/", "up"],
      ["CompetitiveTFT", "https://www.reddit.com/r/CompetitiveTFT/", "ct"],
      ["TFT Subreddit", "https://www.reddit.com/r/TeamfightTactics/", "tft"]
    ]
  ],
  [ "Pokemon",
    [
      ["PokemonShowdown", "https://play.pokemonshowdown.com/", "ps"],
      ["Smogon", "https://smogon.com", "sm"],
      ["Damage Calc", "https://calc.pokemonshowdown.com/index.html", "calc"],
      ["EV training guide", "https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_effort_value_yield", "ev"],
      ["Unbound Learnsets", "https://github.com/Skeli789/Dynamic-Pokemon-Expansion/blob/Unbound/src/Learnsets.c", "ul"],
      ["Unbound Egg Moves", "https://github.com/Skeli789/Dynamic-Pokemon-Expansion/blob/Unbound/src/Egg_Moves.c", "ue"]
    ]
  ],
  [ "Other Games",
    [
      ["LolChess Main", "https://lolchess.gg/profile/eune/auroradraco", "lcm"],
      ["Lutris", "https://lutris.net/", "lt"],
      ["Proton", "https://www.protondb.com/", "pr"],
      ["Dod", "https://www.dod.gr", "d"],
      ["LolChess Smurf", "https://lolchess.gg/profile/eune/spiritualbanana", "lcs"]
    ]
  ]
];
var feeds = [
  ["Chemeng News", "https://feeds.feedburner.com/chemengntua"]
];