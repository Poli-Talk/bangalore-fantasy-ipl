// const tableHeads = document.querySelectorAll("th");
const prefix = "https://spreadsheets.google.com/feeds/list/";
const sheetId = "1hl4VuuIuzVgPzFK3z-NAG2-qoG1nP-SYBybvcZiU3tU";
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

function addColumn(dayAndMonth) {
	var tblHeadObj = document.getElementById('gameweekLeaderTable').tHead;
	for (var h = 0; h < tblHeadObj.rows.length; h++) {
		var newTH = document.createElement('th');
		tblHeadObj.rows[h].appendChild(newTH);
		newTH.innerHTML = "" + dayAndMonth;
	}
}


let columnNames = (json_obj.feed.entry[0].content.$t).split(":");
console.log(columnNames);

let columns = Object.keys(json_obj.feed.entry[0]).length - 8;
for (i = 0; i < columnNames.length; i++) {
	if (columnNames[i].includes("day")) {
		indexOfDay = columnNames[i].indexOf("day") + 3;
		dayAndMonth = columnNames[i].substring(indexOfDay);
		colName = "";
		if (dayAndMonth.length == 3) {
			if (dayAndMonth.substring(0, 2) == "10") {
				colName = "Oct - " + dayAndMonth.substring(2);
			}
			else if (dayAndMonth.substring(0, 2) == "11") {
				colName = "Nov - " + dayAndMonth.substring(2);
			}
			addColumn(colName);
		}
		else {
			if (dayAndMonth.substring(0, 2) == "10") {
				colName = "Oct - " + dayAndMonth.substring(2);
			}
			else if (dayAndMonth.substring(0, 2) == "11") {
				colName = "Nov - " + dayAndMonth.substring(2);
			}
			// colName = dayAndMonth.substring(2) + "/" + dayAndMonth.substring(0, 2);
			addColumn(colName);
		}

	}
}

for (const eachManager of json_obj.feed.entry) {
	let noOfAddRankData = 0;
	let gridTable = document.querySelector('table');
	let row = gridTable.insertRow();
	let teamName = row.insertCell();
	let managerName = row.insertCell();

	let teamNameData = eachManager.gsx$teamname.$t;
	let managerNameData = eachManager.gsx$managername.$t;

	teamName.innerHTML = teamNameData;
	managerName.innerHTML = managerNameData;
	let entriesArray = Object.entries(eachManager);
	for (monthNum = 10; monthNum < 12; monthNum++) {
		for (dayNum = 1; dayNum < 32; dayNum++) {
			let suffixCol = monthNum + "" + dayNum;
			let rankData = "gsx$day" + suffixCol;
			try {
				let addRankData = eachManager[rankData].$t;
				let addRankCol = row.insertCell();
				addRankCol.innerHTML = addRankData;
				addRankCol.style.textAlign = "center";
				if (parseInt(addRankData) < 6) {
					addRankCol.style.color = "yellow";
				}
				noOfAddRankData++;
			} catch (error) {

			}
			if (noOfAddRankData == columns) {
				break;
			}
		}
		if (noOfAddRankData == columns) {
			break;
		}
	}
}


function sortTableAsc(ele) {
	let table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById("gameweekLeaderTable");
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
			if (parseInt(x.innerHTML.toLowerCase()) > parseInt(y.innerHTML.toLowerCase())) {
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

function actionAsc(ind) {
	return function () {
		console.log(ind);
		sortTableAsc(ind);
	}
};

for (let index = 0; index < document.querySelectorAll("th").length; index++) {
	document.querySelectorAll("th")[index].addEventListener('click', actionAsc(index));
}