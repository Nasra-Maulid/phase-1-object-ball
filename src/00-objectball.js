function gameObject() {
    debugger; // Start of the function
    return {
        home: {
            debugger; // Inspect "home" object construction
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                debugger; // Inspect "players" construction
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            debugger; // Inspect "away" object construction
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                debugger; // Inspect "players" construction in "away"
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}
function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
  
  console.log(homeTeamName());
  // logs "Brooklyn Nets"

  function homeTeamName() {
    return gameObject()["home"]["teamName"];
  }
  
  console.log(homeTeamName());
  // logs "Brooklyn Nets"

  let oo = { foo: 42, bar: 83, "key w/ spaces": true };
console.log(oo["foo"]);
console.log(oo["bar"]);
console.log(oo["key w/ spaces"]);

console.log(oo.foo);
console.log(oo.bar);

let oo = { foo: 42, bar: 83, baz: 79 };
for (let key in oo) {
  let value = oo[key];
  console.log("key:", key, "value:", value);
}
let oo = { foo: 42, bar: 83, baz: 79 };
console.log("   Object.keys(oo) =>", Object.keys(oo));
console.log(" Object.values(oo) =>", Object.values(oo));
console.log("Object.entries(oo) =>", Object.entries(oo));

function numPointsScored(playerName) {
    debugger;
    const game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].points;
        }
    }
}

function shoeSize(playerName) {
    debugger;
    const game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName].shoe;
        }
    }
}

function teamColors(teamName) {
    debugger;
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return game[team].colors;
        }
    }
}
function teamNames() {
    debugger;
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    debugger;
    const game = gameObject();
    for (let team in game) {
        if (game[team].teamName === teamName) {
            return Object.values(game[team].players).map(player => player.number);
        }
    }
}
function playerStats(playerName) {
    debugger;
    const game = gameObject();
    for (let team in game) {
        if (game[team].players[playerName]) {
            return game[team].players[playerName];
        }
    }
}

function bigShoeRebounds() {
    debugger;
    const game = gameObject();
    let largestShoe = 0;
    let rebounds = 0;
    for (let team in game) {
        for (let player in game[team].players) {
            if (game[team].players[player].shoe > largestShoe) {
                largestShoe = game[team].players[player].shoe;
                rebounds = game[team].players[player].rebounds;
            }
        }
    }
    return rebounds;
}

