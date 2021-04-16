var captain = "//div[contains(@class,'df-cap ')]//div[@class='df-pitch__plyr-name']//span";
var viceCaptain = "//div[contains(@class,'df-vcap ')]//div[@class='df-pitch__plyr-name']//span";
var manager = "//div[@class='df-overlay__title']";
var boosterCount = "//div[@class='df-cmo__pickPlayer-booster-icon']";
var boosterImgReferenceText = "//div[@class='df-cmo__pickPlayer-booster-icon'][2]//img";
var closeBox = document.getElementsByClassName('dfi-close');
var first = document.getElementsByClassName('df-plyrSel__thumb');
var overall = document.getElementsByClassName('swiper-slide swiper-slide-next');
var over = "//li[@class='swiper-slide swiper-slide-next']";
var reachedMatchDayOne = false;
var own = 0;
var fullArray = "";
var gamesPassed = 1;
var timeout = 1500;
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
        await sleep(timeout);
        //console.log(eachPlayer);
        let captainName = document.evaluate(captain, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        let viceCaptainName = document.evaluate(viceCaptain, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        let managerName = document.evaluate(manager, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        let boosterCounter = document.getElementsByClassName('df-cmo__pickPlayer-booster-icon').length;
        let cName = captainName.singleNodeValue.textContent;
        let vcName = viceCaptainName.singleNodeValue.textContent;
        let mName = managerName.singleNodeValue.textContent;
        //console.log(cName);
        //console.log(vcName);
        // console.log(mName);

        let bType = "0";
        let understandableBoosterName = '0';

        if (boosterCounter > 1) {
            let boosterType = document.evaluate(boosterImgReferenceText, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            let bType = boosterType.singleNodeValue.getAttribute('src').replace("/season/static-assets/build/images/booster-icons/", "").replace(".svg", "");
            //console.log(bType);
            if (bType == 'arrow_white-border') {
                understandableBoosterName = 'UT'
            } else if (bType == '3x_white-border') {
                understandableBoosterName = '3X'
            } if (bType == '2x_white-border') {
                understandableBoosterName = '2X'
            }

        }


        await sleep(timeout);
        fullArray = fullArray + "{\"" + mName + "\",\"" + cName + "," + vcName + "," + understandableBoosterName + "\" },";
    }
    console.log(fullArray);
}
