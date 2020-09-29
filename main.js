const table = document.querySelector('table');
const prefix = "https://spreadsheets.google.com/feeds/list/";
const sheetId = "1w_tkqGHWKj5UjI5EqNTKTXUTeawppDc5UJuHaVMKBn0";
const suffix = "/od6/public/values?alt=json";
const spreadsheetURL = prefix + sheetId + suffix;
const tableHeads = document.querySelectorAll("th");

var json_obj = JSON.parse(getData(spreadsheetURL));

function getData(url) {
    var HttpReq = new XMLHttpRequest(); // a new request
    HttpReq.open("GET", url, false);
    HttpReq.send(null);
    return HttpReq.responseText;
}

for (const eachManager of json_obj.feed.entry) {
    let todayPostionData = eachManager.gsx$todaysposition.$t;
    let teamNameData = eachManager.gsx$teamname.$t;
    let managerNameData = eachManager.gsx$managername.$t;
    let scoredTodayData = eachManager.gsx$scoredtoday.$t;
    let overallPostionData = eachManager.gsx$overallposition.$t;
    let currentPointsData = eachManager.gsx$currentpoints.$t;
    let pointsForPolePositionData = eachManager.gsx$pointsfor1.$t;
    let transfersLeftData = eachManager.gsx$transfersleft.$t;
    let captainData = eachManager.gsx$captain.$t;
    let viceCaptainData = eachManager.gsx$vicecaptain.$t;
    let pointsPerTransferData = parseInt(currentPointsData) / (110 - parseInt(transfersLeftData));
    let estimatedFinalPointsData = parseInt(currentPointsData) + parseFloat(pointsPerTransferData) * parseInt(transfersLeftData);

    let gridTable = document.querySelector('table');
    let row = gridTable.insertRow();
    let todayPostion = row.insertCell();
    let teamName = row.insertCell();
    let managerName = row.insertCell();
    let captain = row.insertCell();
    let viceCaptain = row.insertCell();
    let scoredToday = row.insertCell();
    let overallPostion = row.insertCell();
    let currentPoints = row.insertCell();
    let transfersLeft = row.insertCell();
    let pointsPerTransfer = row.insertCell();
    let estimatedFinalPoints = row.insertCell();
    let pointsForPolePosition = row.insertCell();



    if (scoredToday !== "null") {
        todayPostion.innerHTML = todayPostionData;
        teamName.innerHTML = teamNameData;
        managerName.innerHTML = managerNameData;
        scoredToday.innerHTML = scoredTodayData;
        overallPostion.innerHTML = overallPostionData;
        currentPoints.innerHTML = currentPointsData;
        pointsForPolePosition.innerHTML = pointsForPolePositionData;
        transfersLeft.innerHTML = transfersLeftData;
        captain.innerHTML = captainData;
        pointsPerTransfer.innerHTML = pointsPerTransferData.toFixed(2);
        estimatedFinalPoints.innerHTML = estimatedFinalPointsData.toFixed(0);
        viceCaptain.innerHTML = viceCaptainData;
    }
}

const fullTable = document.getElementsByTagName('tr');

for (const eachRow of fullTable) {
    const eachData = eachRow.getElementsByTagName('td');
    let overallPositionIndex = 7;
    let transfersLeftIndex = 9;
    let loopCounter = 0;
    for (const dataElement of eachData) {
        loopCounter++;

        if (loopCounter == 1 || loopCounter == overallPositionIndex) {
            dataElement.classList.add('first-cell');
        }

        if (loopCounter == transfersLeftIndex) {
            dataElement.classList.add('transfers-left');
        }

        if (loopCounter == overallPositionIndex && parseInt(dataElement.innerHTML) < 6) {
            // console.log(dataElement);
            eachRow.classList.add('top-5');
        }
        else if (loopCounter == overallPositionIndex && parseInt(dataElement.innerHTML) > 5) {
            eachRow.classList.add('not-top-5');
        }
    }

}


function sortTableAsc(ele) {
    let table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("leadertable");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        // console.log("table.rows" + table.rows+ "rows.length "+rows.length);
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("td")[ele];
            y = rows[i + 1].getElementsByTagName("td")[ele];
            // Check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

/* for (let index = 0; index < tableHeads.length; index++) {
    //tableHeads[index].addEventListener('click', sortTable(index));
    tableHeads[index].addEventListener('click', console.log(index));
    tableHeads[index].addEventListener('click', sortTable(3));;
} */

function actionAsc(ind) {
    return function () {
        console.log(ind);
        sortTableAsc(ind);
    }
};

function actionDesc(ind) {
    return function () {
        console.log(ind);
        sortTableDesc(ind);
    }
};


for (let index = 0; index < tableHeads.length; index++) {
    if (index == 0 || index == 6 || index == 9)
        tableHeads[index].addEventListener('click', actionAsc(index));
}

for (let index = 0; index < tableHeads.length; index++) {
    if (index == 8 || index == 10 || index == 9)
        tableHeads[index].addEventListener('click', actionDesc(index));
}


function sortTableDesc(ele) {
    let table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("leadertable");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        // console.log("table.rows" + table.rows+ "rows.length "+rows.length);
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("td")[ele];
            y = rows[i + 1].getElementsByTagName("td")[ele];
            // Check if the two rows should switch place:
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}