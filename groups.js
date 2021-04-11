const groupboxes = document.getElementById('groupcontainer');
const prefixGroup = "https://spreadsheets.google.com/feeds/list/";
const sheetIdGroup = "1Fqe5LiCWPGAZEmZnW4qnAyTbDtD0-eaglU5wUVtxfFw";
const suffixGroup = "/od6/public/values?alt=json";
const spreadsheetURLGroup = prefixGroup + sheetIdGroup + suffixGroup;
//const tableHeads = document.querySelectorAll("th");
const prefixGroupHistory = "https://spreadsheets.google.com/feeds/list/";
const sheetIdGroupHistory = "1xWQQWNeeFL8uPKDPsLmT5gnkKKdxBVsbohyCtmx8XEc";
const suffixGroupHistory = "/od6/public/values?alt=json";
const spreadsheetURLHistory = prefixGroupHistory + sheetIdGroupHistory + suffixGroupHistory;
const teamandManagerMaxLength = 15;

//console.log(spreadsheetURLGroup);
var json_obj_Group = JSON.parse(getData(spreadsheetURLGroup));
var json_obj_History = JSON.parse(getData(spreadsheetURLHistory));

function getData(url) {
	var HttpReq = new XMLHttpRequest(); // a new request
	HttpReq.open("GET", url, false);
	HttpReq.send(null);
	return HttpReq.responseText;
}


for (const eachGroup of json_obj_Group.feed.entry) {

	let groupData = eachGroup.gsx$group.$t;
	let averageData = eachGroup.gsx$average.$t;
	let team1Data = eachGroup.gsx$team1.$t.substring(0,teamandManagerMaxLength);
	let manager1Data = eachGroup.gsx$manager1.$t.substring(0,teamandManagerMaxLength);
	let points1Data = eachGroup.gsx$points1.$t;
	let team2Data = eachGroup.gsx$team2.$t.substring(0,teamandManagerMaxLength);
	let manager2Data = eachGroup.gsx$manager2.$t.substring(0,teamandManagerMaxLength);
	let points2Data = eachGroup.gsx$points2.$t;
	let team3Data = eachGroup.gsx$team3.$t.substring(0,teamandManagerMaxLength);
	let manager3Data = eachGroup.gsx$manager3.$t.substring(0,teamandManagerMaxLength);
	let points3Data = eachGroup.gsx$points3.$t;
	let team4Data = eachGroup.gsx$team4.$t.substring(0,teamandManagerMaxLength);
	let manager4Data = eachGroup.gsx$manager4.$t.substring(0,teamandManagerMaxLength);
	let points4Data = eachGroup.gsx$points4.$t;
	let team5Data = eachGroup.gsx$team5.$t.substring(0,teamandManagerMaxLength);
	let manager5Data = eachGroup.gsx$manager5.$t.substring(0,teamandManagerMaxLength);
	let points5Data = eachGroup.gsx$points5.$t;

	var groupbox = document.createElement("div");
	groupbox.classList.add("group-box");
	groupboxes.appendChild(groupbox);

	var groupDataNode = document.createElement("div");
	groupDataNode.classList.add("group-name-score");
	var nodeText = document.createTextNode(groupData + " - " + averageData);
	groupDataNode.appendChild(nodeText);
	groupbox.appendChild(groupDataNode);

	var teamDataNode = document.createElement("div");
	teamDataNode.classList.add("team-title");
	var nodeText = document.createTextNode("Team Name");
	teamDataNode.appendChild(nodeText);
	groupbox.appendChild(teamDataNode);
	var managerDataNode = document.createElement("div");
	managerDataNode.classList.add("manager-title");
	var nodeText = document.createTextNode("Manager Name");
	managerDataNode.appendChild(nodeText);
	groupbox.appendChild(managerDataNode);
	var pointsDataNode = document.createElement("div");
	pointsDataNode.classList.add("points-title");
	var nodeText = document.createTextNode("Points");
	pointsDataNode.appendChild(nodeText);
	groupbox.appendChild(pointsDataNode);

	var team1DataNode = document.createElement("div");
	team1DataNode.classList.add("team-name-1");
	var nodeText = document.createTextNode(team1Data);
	team1DataNode.appendChild(nodeText);
	groupbox.appendChild(team1DataNode);
	var manager1DataNode = document.createElement("div");
	manager1DataNode.classList.add("manager-name-1");
	var nodeText = document.createTextNode(manager1Data);
	manager1DataNode.appendChild(nodeText);
	groupbox.appendChild(manager1DataNode);
	var points1DataNode = document.createElement("div");
	points1DataNode.classList.add("points-1");
	var nodeText = document.createTextNode(points1Data);
	points1DataNode.appendChild(nodeText);
	groupbox.appendChild(points1DataNode);

	var team2DataNode = document.createElement("div");
	team2DataNode.classList.add("team-name-2");
	var nodeText = document.createTextNode(team2Data);
	team2DataNode.appendChild(nodeText);
	groupbox.appendChild(team2DataNode);
	var manager2DataNode = document.createElement("div");
	manager2DataNode.classList.add("manager-name-2");
	var nodeText = document.createTextNode(manager2Data);
	manager2DataNode.appendChild(nodeText); groupbox.appendChild(manager2DataNode);
	var points2DataNode = document.createElement("div");
	points2DataNode.classList.add("points-2");
	var nodeText = document.createTextNode(points2Data);
	points2DataNode.appendChild(nodeText);
	groupbox.appendChild(points2DataNode);

	var team3DataNode = document.createElement("div");
	team3DataNode.classList.add("team-name-3");
	var nodeText = document.createTextNode(team3Data);
	team3DataNode.appendChild(nodeText); groupbox.appendChild(team3DataNode);
	var manager3DataNode = document.createElement("div");
	manager3DataNode.classList.add("manager-name-3");
	var nodeText = document.createTextNode(manager3Data);
	manager3DataNode.appendChild(nodeText);
	groupbox.appendChild(manager3DataNode);
	var points3DataNode = document.createElement("div");
	points3DataNode.classList.add("points-3");
	var nodeText = document.createTextNode(points3Data);
	points3DataNode.appendChild(nodeText);
	groupbox.appendChild(points3DataNode);

	var team4DataNode = document.createElement("div");
	team4DataNode.classList.add("team-name-4");
	var nodeText = document.createTextNode(team4Data);
	team4DataNode.appendChild(nodeText); groupbox.appendChild(team4DataNode);
	var manager4DataNode = document.createElement("div");
	manager4DataNode.classList.add("manager-name-4");
	var nodeText = document.createTextNode(manager4Data);
	manager4DataNode.appendChild(nodeText);
	groupbox.appendChild(manager4DataNode);
	var points4DataNode = document.createElement("div");
	points4DataNode.classList.add("points-4");
	var nodeText = document.createTextNode(points4Data);
	points4DataNode.appendChild(nodeText);
	groupbox.appendChild(points4DataNode);

	var team5DataNode = document.createElement("div");
	team5DataNode.classList.add("team-name-5");
	var nodeText = document.createTextNode(team5Data);
	team5DataNode.appendChild(nodeText); groupbox.appendChild(team5DataNode);
	var manager5DataNode = document.createElement("div");
	manager5DataNode.classList.add("manager-name-5");
	var nodeText = document.createTextNode(manager5Data);
	manager5DataNode.appendChild(nodeText);
	groupbox.appendChild(manager5DataNode);
	var points5DataNode = document.createElement("div");
	points5DataNode.classList.add("points-5");
	var nodeText = document.createTextNode(points5Data);
	points5DataNode.appendChild(nodeText);
	groupbox.appendChild(points5DataNode);



}




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


let columnNames = (json_obj_History.feed.entry[0].content.$t).split(":");

let columns = Object.keys(json_obj_History.feed.entry[0]).length - 8;
for (i = 0; i < columnNames.length; i++) {
	if (columnNames[i].includes("day")) {
		indexOfDay = columnNames[i].indexOf("day") + 3;
		dayAndMonth = columnNames[i].substring(indexOfDay);
		colName = "";
		if (dayAndMonth.length == 3) {
			if (dayAndMonth.substring(0, 2) == "04") {
				colName = "Apr - " + dayAndMonth.substring(2);
			}
			else if (dayAndMonth.substring(0, 2) == "05") {
				colName = "May - " + dayAndMonth.substring(2);
			}
			addColumn(colName);
		}
		else {
			if (dayAndMonth.substring(0, 2) == "04") {
				colName = "Apr - " + dayAndMonth.substring(2);
			}
			else if (dayAndMonth.substring(0, 2) == "05") {
				colName = "May - " + dayAndMonth.substring(2);
			}
			// colName = dayAndMonth.substring(2) + "/" + dayAndMonth.substring(0, 2);
			addColumn(colName);
		}

	}
}

for (const eachManager of json_obj_History.feed.entry) {
	let noOfAddRankData = 0;
	let gridTable = document.querySelector('table');
	let row = gridTable.insertRow();
	let teamName = row.insertCell();
	let managerName = row.insertCell();
	let currentScore = row.insertCell();

	let teamNameData = eachManager.gsx$teamname.$t;
	let managerNameData = eachManager.gsx$topscorer.$t;
	let currentScoreData = eachManager.gsx$currentscore.$t;

	teamName.innerHTML = teamNameData;
	managerName.innerHTML = managerNameData;
	currentScore.innerHTML = currentScoreData;
	let entriesArray = Object.entries(eachManager);
	for (monthNum = 4; monthNum < 12; monthNum++) {
		for (dayNum = 1; dayNum < 32; dayNum++) {
			let suffixCol = "0" + monthNum + "" + dayNum;
			let rankData = "gsx$day" + suffixCol;
			if (monthNum == 05) {
				//console.log(rankData);
			}
			try {
				let addRankData = eachManager[rankData].$t;
				let addRankCol = row.insertCell();
				addRankCol.innerHTML = addRankData;
				addRankCol.style.textAlign = "center";
				if (parseInt(addRankData) < 2) {
					addRankCol.style.color = "yellow";
				}
				noOfAddRankData++;
			} catch (error) {

			}
			if (noOfAddRankData == columns) {
				noOfAddRankData = 0;
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
