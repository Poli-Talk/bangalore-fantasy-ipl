var captain = "//div[contains(@class,'df-cap ')]//div[@class='df-pitch__plyr-name']//span";
var viceCaptain = "//div[contains(@class,'df-vcap ')]//div[@class='df-pitch__plyr-name']//span";
var manager = "//div[@class='df-overlay__title']";
var closeBox = document.getElementsByClassName('dfi-close');
var first = document.getElementsByClassName('df-plyrSel__thumb');
var overall = document.getElementsByClassName('swiper-slide swiper-slide-next');
var over = "//li[@class='swiper-slide swiper-slide-next']";
var own = 0;
var fullArray = "";
var gamesPassed = 25;
var timeout = 9000;


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

doWork();

async function doWork() {

    for (const eachPlayer of first) {
        own++;
        eachPlayer.click();
        await sleep(5000);
        let captainName = document.evaluate(captain, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        let viceCaptainName = document.evaluate(viceCaptain, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        let managerName = document.evaluate(manager, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        let cName = captainName.singleNodeValue.textContent;
        let vcName = viceCaptainName.singleNodeValue.textContent;
        let mName = managerName.singleNodeValue.textContent;

        let totalTransfersMade = 0;
        if (own != 1) {
            let overClick = document.evaluate(over, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            overClick.singleNodeValue.click();
            await sleep(timeout);

            for (index = 1; index <= gamesPassed; index++) {
                scrollTillEnd();
            }
            await sleep(timeout);
            let transfersMade = document.getElementsByClassName('df-transfer__overall');
            console.log(transfersMade);
            for (const transfers of transfersMade) {
                totalTransfersMade = totalTransfersMade + parseInt(transfers.getElementsByTagName('em')[0].textContent.toString().trim());
            }
        }

        await sleep(5000);

        fullArray = fullArray + "{\"" + mName + "\",\"" + cName + "," + vcName + "," + totalTransfersMade + "\" },";
        console.log(fullArray);
    }
}

async function scrollTillEnd() {
    await sleep(300);
    let elmnt = document.getElementsByClassName("df-contest__box df-teamPreview ");
    for (lone of elmnt) {
        await sleep(300);
        lone.scrollIntoView();
    }
}
