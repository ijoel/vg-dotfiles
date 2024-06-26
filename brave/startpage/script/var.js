// All the variable for the app
// Their name are explicit

var username = "Vidianos"
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
    ["!g", "https://www.google.com/search?q="],
    ["!y", "https://www.youtube.com/results?search_query="],
    ["!a", "https://wiki.archlinux.org/index.php?search="],
    ["!r", "https://www.reddit.com/search/?q="],
    ["!l", "https://lutris.net/games?q="],
    ["!p", "https://www.protondb.com/search?q="],
    ["!c", "https://lolchess.gg/search?region=EUNE&name="],
    ["!w", "https://www.wolframalpha.com/input/?i="],
    ["!s", "https://www.sciencedirect.com/search?qs="],
    ["!t", "https://translate.google.com/?sl=auto&tl=en&text="],
    ["!b", "https://bulbapedia.bulbagarden.net/w/index.php?title="]
];
var favorites = [
    [ "University",
      [
	  ["Chemeng" , "https://www.chemeng.ntua.gr/", "ch"],
	  ["ChemengCourses" , "https://courses.chemeng.ntua.gr/", "cc"],
	  ["Submissions" , "https://www.chemeng.ntua.gr/submission/", "cs"],
	  ["Wolfram Alpha" , "https://www.wolframalpha.com", "wa"],
	  ["Chemeng Forum" , "https://forum.chemeng.ntua.gr/", "cf"],
	  ["Science Direct" , "https://www.sciencedirect.com/", "sc"],
	  ["Research Rabbit" , "https://www.researchrabbitapp.com/home", "rr"],
	  ["Scopus" , "https://www.scopus.com/search/form.uri?display=basic#basic", "sc"],
	  ["IPSEN Tools" , "https://tools.ipsen.ntua.gr/ipsentools/web/index.php?r=site%2Ftools", "ips"],
	  ["Helios", "https://helios.ntua.gr/my/", "h"]
      ]
    ],
    [ "Socials",
      [
	  ["Messenger" , "https://www.messenger.com", "ms"],
	  ["Twitch" , "https://www.twitch.tv", "tw"],
	  ["Personal Github" , "https://github.com/Vidianos-Giannitsis", "gh"],
	  ["Youtube" , "https://www.youtube.com/", "yt"],
	  ["Discord" , "https://discord.com/channels/@me", "dc"],
	  ["Reddit", "https://www.reddit.com/", "rd"],
	  ["Matrix", "https://app.element.io/", "mtr"],
	  ["Mobilizon", "https://mobilizon.fr/@m_x_research", "mb"],
	  ["Instagram" , "https://instagram.com/", "in"]
      ]
    ],
    [ "Documentation pages",
      [
	  ["Emacs", "https://www.gnu.org/software/emacs/manual/html_node/emacs/index.html", "em"],
	  ["Octave" , "https://octave.org/doc/v5.2.0/", "oc"],
	  ["Org-Roam" , "https://www.orgroam.com/manual.html", "or"],
	  ["Org-Roam-Bibtex" , "https://github.com/org-roam/org-roam-bibtex", "orb"],
	  ["Org-Roam Discourse", "https://org-roam.discourse.group/", "ord"],
	  ["Qtile", "http://docs.qtile.org/en/latest/", "qt"],
	  ["Clojure", "https://www.braveclojure.com/clojure-for-the-brave-and-true/", "clj"]
      ]
    ],
    [ "Games",
      [
	  ["Dod", "https://www.dod.gr", "d"],
	  ["LolChess Account", "https://lolchess.gg/profile/eune/auroradraco", "lcm"],
	  ["Proton", "https://www.protondb.com/", "pr"],
	  ["MC Biome Finder", "https://www.chunkbase.com/apps/biome-finder#-3038289977291799158", "bf"],
	  ["Smogon", "https://smogon.com", "sm"],
	  ["Showdown", "https://play.pokemonshowdown.com/", "ps"],
	  ["Damage Calc", "https://calc.pokemonshowdown.com/index.html", "calc"],
	  ["Type Chart", "https://www.smogon.com/dex/sm/types/", "tc"],
	  ["RR Dex", "https://funnotbun.github.io/?table=speciesTable&", "rrp"],
	  ["RR Changelog", "https://docs.google.com/spreadsheets/d/1bhgRoclN54ur0NqjpqYzRO-OtNlFb1bWWhFilgzYOls/edit#gid=1231377635", "rrc"],
	  ["DuelingBook", "https://www.duelingbook.com/", "db"],
	  ["Master Duel Meta", "https://www.masterduelmeta.com/", "mdm"],
	  ["Pack Opener", "https://db.ygoprodeck.com/pack-open/", "po"]
      ]
    ],
    [ "Draft League",
      [
	  ["JJDL Doc", "https://docs.google.com/spreadsheets/d/1fLTY4qCIeeGz0kTGlQ0V9x4OhjWfsaefiZFS8oeT6EM/edit#gid=97112776", "jj"],
	  ["RR Doc", "https://docs.google.com/spreadsheets/d/1sN6qiEOaT6vMtBhpS9qP4HnpMUYHZmMHoic8fOfgmYU/edit#gid=1875583273", "rrd"],
	  ["DLC Prep Doc", "https://docs.google.com/spreadsheets/d/1-6lKYjsoXxAF3vrNjKeRAYyFrkHmPrQxSGAbBDpHcsE/edit#gid=1575484654", "dpd"],
	  ["RR Showdown", "https://play.radicalred.net/", "rrs"],
	  ["DL Showdown", "https://dl.psim.us/", "dl"],
	  ["Damage Calc", "https://calc.pokemonshowdown.com/index.html", "calc"],
	  ["RR Calc", "https://calc.radicalred.net/", "rcalc"]
      ]
    ],

    [ "Other",
      [
	  ["Darebee", "https://darebee.com/", "d"],
	  ["MIT SciML Course", "https://book.sciml.ai/", "mit"],
	  ["UDE Examples", "https://github.com/ChrisRackauckas/universal_differential_equations/tree/master", "ude"],
	  ["Raindrop", "https://app.raindrop.io/my/0", "rd"],
	  ["Hex Color Codes", "https://www.color-hex.com/", "ch"],
	  ["Word Counter", "https://wordcounter.net/", "wc"],
	  ["Detexify", "https://detexify.kirelabs.org/classify.html", "dt"]
      ]
    ],
];
var feeds = [
];
