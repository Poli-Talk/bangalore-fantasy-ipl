
const prefix = "https://spreadsheets.google.com/feeds/list/";
const sheetId = "1RTH2ju9ytDz7oB6KoljPI8mwe4gtpfu1hyfprj0jiIY";
const suffix = "/od6/public/values?alt=json";
const spreadsheetURL = prefix + sheetId + suffix;
console.log(spreadsheetURL);
const tableHeads = document.querySelectorAll("th");

var json_obj = JSON.parse(getData(spreadsheetURL));

function getData(url) {
    var HttpReq = new XMLHttpRequest(); // a new request
    HttpReq.open("GET", url, false);
    HttpReq.send(null);
    return HttpReq.responseText;
}

function addData(playerInfo, teamClass) {
    if (playerInfo.gsx$postion.$t == "WICKET KEEPER") {
        let nameClass = 'wicket-keeper-name' + " " + teamClass;
        let priceClass = 'wicket-keeper-price' + " " + teamClass;
        let pointsClass = 'wicket-keeper-points' + " " + teamClass;

        let name = document.getElementsByClassName(nameClass);
        let price = document.getElementsByClassName(priceClass);
        let points = document.getElementsByClassName(pointsClass);

        name[0].innerHTML = playerInfo.gsx$name.$t;
        price[0].innerHTML = playerInfo.gsx$price.$t;
        points[0].innerHTML = playerInfo.gsx$points.$t;
    }

    if (playerInfo.gsx$postion.$t == "BATSMAN") {
        let nameClass = 'batsman-name' + " " + teamClass;
        let priceClass = 'batsman-price' + " " + teamClass;
        let pointsClass = 'batsman-points' + " " + teamClass;

        let name = document.getElementsByClassName(nameClass);
        let price = document.getElementsByClassName(priceClass);
        let points = document.getElementsByClassName(pointsClass);

        name[0].innerHTML = playerInfo.gsx$name.$t;
        price[0].innerHTML = playerInfo.gsx$price.$t;
        points[0].innerHTML = playerInfo.gsx$points.$t;
    }

    if (playerInfo.gsx$postion.$t == "ALL ROUNDER") {
        let nameClass = 'all-rounder-name' + " " + teamClass;
        let priceClass = 'all-rounder-price' + " " + teamClass;
        let pointsClass = 'all-rounder-points' + " " + teamClass;

        let name = document.getElementsByClassName(nameClass);
        let price = document.getElementsByClassName(priceClass);
        let points = document.getElementsByClassName(pointsClass);

        name[0].innerHTML = playerInfo.gsx$name.$t;
        price[0].innerHTML = playerInfo.gsx$price.$t;
        points[0].innerHTML = playerInfo.gsx$points.$t;
    }

    if (playerInfo.gsx$postion.$t == "BOWLER") {
        let nameClass = 'bowler-name' + " " + teamClass;
        let priceClass = 'bowler-price' + " " + teamClass;
        let pointsClass = 'bowler-points' + " " + teamClass;

        let name = document.getElementsByClassName(nameClass);
        let price = document.getElementsByClassName(priceClass);
        let points = document.getElementsByClassName(pointsClass);

        name[0].innerHTML = playerInfo.gsx$name.$t;
        price[0].innerHTML = playerInfo.gsx$price.$t;
        points[0].innerHTML = playerInfo.gsx$points.$t;
    }
}

for (const playerInfo of json_obj.feed.entry) {

    switch (playerInfo.gsx$abbr.$t) {
        case "CSK": addData(playerInfo, 'csk');
            break;
        case "DC": addData(playerInfo, 'dc');
            break;
        case "KXIP": addData(playerInfo, 'kxip');
            break;
        case "KKR": addData(playerInfo, 'kkr');
            break;
        case "MI": addData(playerInfo, 'mi');
            break;
        case "RR": addData(playerInfo, 'rr');
            break;
        case "RCB": addData(playerInfo, 'rcb');
            break;
        case "SRH": addData(playerInfo, 'srh');
            break;
    }

}

const cskOption = document.getElementById('csk-option');
const dcOption = document.getElementById('dc-option');
const kxipOption = document.getElementById('kxip-option');
const kkrOption = document.getElementById('kkr-option');
const miOption = document.getElementById('mi-option');
const rrOption = document.getElementById('rr-option');
const rcbOption = document.getElementById('rcb-option');
const srhOption = document.getElementById('srh-option');

const selectOrUnselect = (e) => {
    let selectedTeam = e.target.innerHTML;

    if (e.target.classList.contains('button-select')) {
        e.target.classList.remove('button-select');
        e.target.classList.add('button-unselect');

        let allTeamGrids = document.getElementsByClassName('team-code');
        for (let eachTeamGrid of allTeamGrids) {
            if (eachTeamGrid.innerHTML == selectedTeam) {
                eachTeamGrid.parentElement.classList.add('all-black');
                break;
            }
        }
    }
    else if (e.target.classList.contains('button-unselect')) {
        e.target.classList.remove('button-unselect');
        e.target.classList.add('button-select');

        let allTeamGrids = document.getElementsByClassName('team-code');
        for (let eachTeamGrid of allTeamGrids) {
            if (eachTeamGrid.innerHTML == selectedTeam) {
                eachTeamGrid.parentElement.classList.remove('all-black');
                break;
            }
        }
    }

};

cskOption.addEventListener('click', selectOrUnselect);
dcOption.addEventListener('click', selectOrUnselect);
kxipOption.addEventListener('click', selectOrUnselect);
kkrOption.addEventListener('click', selectOrUnselect);
miOption.addEventListener('click', selectOrUnselect);
rrOption.addEventListener('click', selectOrUnselect);
rcbOption.addEventListener('click', selectOrUnselect);
srhOption.addEventListener('click', selectOrUnselect);