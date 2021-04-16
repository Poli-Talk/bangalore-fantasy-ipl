var captain = "//div[contains(@class,'df-cap ')]//div[@class='df-pitch__plyr-name']//span";
var viceCaptain = "//div[contains(@class,'df-vcap ')]//div[@class='df-pitch__plyr-name']//span";
var manager = "//div[@class='df-overlay__title']";
var transfersRemaining = "//div[@class='df-transfer__head df-transfer__head--rowCol']//span[3]";
var closeBox = document.getElementsByClassName('dfi-close');
var first = document.getElementsByClassName('df-plyrSel__thumb');
var overall = document.getElementsByClassName('swiper-slide swiper-slide-next');
var lastTransfersXpath = "//span[@class='df-transfer__overall']";
var over = "//li[@class='swiper-slide swiper-slide-next']";
var reachedMatchDayOne = false;
var own = 0;
var fullArray = "";
var gamesPassed = 4;
var timeout = 1000;

var managerTransfersLeft = [["PoliTalk", "10"], ["Pratheek2007", "13"],
["venkatvasili64", "10"], ["KINGS SHADOWS", "8"], ["KiwiDiv", "9"], ["RAMES3024TU", "11"],
["ChaituX1", "7"], ["NAYANATHARA BATCH", "11"], ["GabbarSinghKeFauz", "8"],
["Deccan Missiles", "10"], ["SR Cricketers", "9"], ["Rockers 1209", "16"], ["PRANE1868RS", "14"],
["tattoo inside brain", "14"], ["Avengers II", "11"], ["Dhoniku whistle podu", "9"],
["MSGatti Army", "10"], ["Paapampati XI", "6"], ["RISING PHOENIX", "6"], ["CHAKRIV REBELS", "6"],
["vinnu3969", "14"], ["san lannisters", "13"], ["SaanviSumeha", "6"], ["suddu3333333333", "9"],
["Vultures 2020", "9"], ["100RABHS ELEVEN", "6"], ["DVNRK2KL", "13"], ["IndiaRockzzzz", "5"],
["CPRPanthers", "8"], ["SuperStars Hyderabad", "6"], ["LITHIN76UV", "11"], ["Avadakadavra", "8"],
["League of Dark Knights", "13"], ["SchumiTheChamp", "3"]];



function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

doWork();

async function doWork() {

    for (const eachPlayer of first) {
        reachedMatchDayOne = false;
        own++;
        eachPlayer.click();
        await sleep(timeout);
        let managerName = document.evaluate(manager, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        let mName = managerName.singleNodeValue.textContent;
        let rTransfers = 0;
        if (own != 1) {
            let overClick = document.evaluate(over, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            overClick.singleNodeValue.click();
            await sleep(timeout);
            let remainingTransfers = document.evaluate(transfersRemaining, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            rTransfers = remainingTransfers.singleNodeValue.textContent.replace("Transfers Left", "");;
        }

        await sleep(timeout);
        fullArray = fullArray + "{\"" + mName + "\",\"" + rTransfers + "\" },";
        console.log(fullArray);
    }
}

