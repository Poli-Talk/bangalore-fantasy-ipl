    var captain = "//div[contains(@class,'df-cap ')]//div[@class='df-pitch__plyr-name']//span";
    var viceCaptain = "//div[contains(@class,'df-vcap ')]//div[@class='df-pitch__plyr-name']//span";
    var ranks = document.getElementsByClassName('df-tbl__cell df-tbl__cell--amt');
    var manager = "//div[@class='df-overlay__title']";
    var manager = "//div[@class='df-overlay__title']";
    var closeBox = document.getElementsByClassName('dfi-close');
    var first = document.getElementsByClassName('df-plyrSel__thumb');
    //const playingTeams = ["MI", "CSK", "PBKS", "KKR", "SRH", "DC", "RR", "RCB"];
    const playingTeams = ["CSK","PBKS"];
    var csvStyleData = "";

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    managerRank = 1;
    for (const eachPlayer of first) {
        eachPlayer.click();
        await sleep(2000);
        let managerName = document.evaluate(manager, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        let mName = managerName.singleNodeValue.textContent;
        let rankofPlayer = ranks[managerRank].firstElementChild.innerText;
        rankofPlayer = rankofPlayer.toString().replace("#", "");
        managerRank++;
        csvStyleData += mName + "\t";
        csvStyleData += rankofPlayer + "\t";

        const teamNames = document.getElementsByClassName("df-pitch__team");
        const playerNames = document.getElementsByClassName("df-pitch__plyr-name");

        const listOfPlayers = [];
        for (playerIndex = 0; playerIndex <= 10; playerIndex++) {
            for (const playingTeam of playingTeams) {
                if (teamNames[playerIndex].firstElementChild.innerHTML == playingTeam) {
                    //csvStyleData += playerNames[playerIndex].firstElementChild.innerHTML + "\t";
                    listOfPlayers.push(playerNames[playerIndex].firstElementChild.innerHTML);
                }
            }
        }
        listOfPlayers.sort();
        for (const player of listOfPlayers) {
            csvStyleData += player + "\t";
        }
        csvStyleData += "\n";

    }

    console.log(csvStyleData);