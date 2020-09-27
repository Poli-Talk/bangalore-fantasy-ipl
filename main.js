function getData(url) {
    var HttpReq = new XMLHttpRequest(); // a new request
    HttpReq.open("GET", url, false);
    HttpReq.send(null);
    return HttpReq.responseText;
}

const table = document.querySelector('table');

const prefix = "https://spreadsheets.google.com/feeds/list/";
const sheetId = "1w_tkqGHWKj5UjI5EqNTKTXUTeawppDc5UJuHaVMKBn0";
const suffix = "/od6/public/values?alt=json";

const spreadsheetURL = prefix + sheetId + suffix;

var json_obj = JSON.parse(getData(spreadsheetURL));

for (const eachManager of json_obj.feed.entry) {
    let todayPostionData = eachManager.gsx$todaysposition.$t;
    let teamNameData = eachManager.gsx$teamname.$t;
    let managerNameData = eachManager.gsx$managername.$t;
    let scoredTodayData = eachManager.gsx$scoredtoday.$t;
    let overallPostionData = eachManager.gsx$overallposition.$t;
    let currentPointsData = eachManager.gsx$currentpoints.$t;
    let pointsForPolePositionData = eachManager.gsx$pointsfor1.$t;

    let gridTable = document.querySelector('table');
    let row = gridTable.insertRow();
    let todayPostion = row.insertCell();
    let teamName = row.insertCell();
    let managerName = row.insertCell();
    let scoredToday = row.insertCell();
    let overallPostion = row.insertCell();
    let currentPoints = row.insertCell();
    let pointsForPolePosition = row.insertCell();

    todayPostion.innerHTML = todayPostionData;
    teamName.innerHTML = teamNameData;
    managerName.innerHTML = managerNameData;
    scoredToday.innerHTML = scoredTodayData;
    overallPostion.innerHTML = overallPostionData;
    currentPoints.innerHTML = currentPointsData;
    pointsForPolePosition.innerHTML = pointsForPolePositionData;

}

const fullTable = document.getElementsByTagName('tr');

for (const eachRow of fullTable) {
    const eachData = eachRow.getElementsByTagName('td');
    let overallPositionIndex = 5;
    let loopCounter = 0;
    for (const dataElement of eachData) {
        loopCounter++;

        if (loopCounter == 1 || loopCounter == 5) {
            dataElement.classList.add('first-cell');
        }

        if (loopCounter == overallPositionIndex && parseInt(dataElement.innerHTML) < 6) {
            console.log(dataElement);
            eachRow.classList.add('top-5');
        }
        else if (loopCounter == overallPositionIndex && parseInt(dataElement.innerHTML) > 5) {
            eachRow.classList.add('not-top-5');
        }
    }

}