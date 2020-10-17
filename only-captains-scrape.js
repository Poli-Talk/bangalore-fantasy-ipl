var captain = "//div[contains(@class,'df-cap ')]//div[@class='df-pitch__plyr-name']//span";
var viceCaptain = "//div[contains(@class,'df-vcap ')]//div[@class='df-pitch__plyr-name']//span";
var manager = "//div[@class='df-overlay__title']";
var closeBox = document.getElementsByClassName('dfi-close');
var first = document.getElementsByClassName('df-plyrSel__thumb');
var overall = document.getElementsByClassName('swiper-slide swiper-slide-next');
var over = "//li[@class='swiper-slide swiper-slide-next']";
var reachedMatchDayOne = false;
var own = 0;
var fullArray = "";
var gamesPassed = 35;
var timeout = 9000;
var totalTransfersMade = 0;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

doWork();

async function doWork() {

    for (const eachPlayer of first) {
        reachedMatchDayOne = false;
        own++;
        eachPlayer.click();
        await sleep(500);
        let captainName = document.evaluate(captain, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        let viceCaptainName = document.evaluate(viceCaptain, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        let managerName = document.evaluate(manager, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        let cName = captainName.singleNodeValue.textContent;
        let vcName = viceCaptainName.singleNodeValue.textContent;
        let mName = managerName.singleNodeValue.textContent;
        await sleep(500);
        fullArray = fullArray + "{\"" + mName + "\",\"" + cName + "," + vcName + "," + totalTransfersMade + "\" },";
    }
    console.log(fullArray);
}

