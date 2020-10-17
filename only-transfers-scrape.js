var captain = "//div[contains(@class,'df-cap ')]//div[@class='df-pitch__plyr-name']//span";
var viceCaptain = "//div[contains(@class,'df-vcap ')]//div[@class='df-pitch__plyr-name']//span";
var manager = "//div[@class='df-overlay__title']";
var closeBox = document.getElementsByClassName('dfi-close');
var first = document.getElementsByClassName('df-plyrSel__thumb');
var overall = document.getElementsByClassName('swiper-slide swiper-slide-next');
var lastTransfersXpath = "//span[@class='df-transfer__overall']";
var over = "//li[@class='swiper-slide swiper-slide-next']";
var reachedMatchDayOne = false;
var own = 0;
var fullArray = "";
var gamesPassed = 28;
var timeout = 1000;

var managerTransfersLeft = [["PoliTalk", "53"], ["Avadakadavra", "69"],
["SaanviSumeha", "60"], ["SuperStars Hyderabad", "66"], ["venkatvasili64", "70"],
["Chilukuri11", "63"], ["Deccan Missiles", "62"], ["VIKRAMs DREAM 11", "83"],
["IndiaRockzzzz", "55"], ["Vultures 2020", "72"], ["ANANDYE WARRIORS", "69"],
["Rockers 1209", "57"], ["Pratheek2007", "50"], ["LITHINK KINGSMEN", "75"], ["MSGatti Army", "54"],
["HardHitterz", "67"], ["Phoenix0795", "76"], ["NEWINDI WANDERERS", "71"], ["CHAKRIV REBELS", "59"],
["CPRPanthers", "57"], ["PRANEET BANDITS", "71"], ["LAXMAN10204CD", "52"], ["KINGS SHADOWS", "55"],
["SchumiTheChamp", "60"], ["VaraSmashers", "41"], ["SatyaG Chargers", "45"],
["SR Cricketers", "70"], ["JAGGUIX", "80"], ["GabbarSinghKeFauz", "45"], ["Avengers II", "54"],
["CHENKAR SULTANS", "51"], ["SAACHINNN", "15"], ["GAJJALA PANTHERS 4224", "0"], ["PHV8496", "0"]];



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

        // let lastTransfers = document.evaluate(lastTransfersXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        // let lastTransfersCount = lastTransfers.singleNodeValue.textContent;

        let totalTransfersMade = 0;
        if (own != 1) {
            let overClick = document.evaluate(over, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            overClick.singleNodeValue.click();
            await sleep(timeout);

            let transfersMade = document.getElementsByClassName('df-transfer__overall');
            for (const transfers of transfersMade) {
                totalTransfersMade = totalTransfersMade + parseInt(transfers.getElementsByTagName('em')[0].textContent.toString().trim());
                break;
            }
        }

        for (managerTransfers of managerTransfersLeft) {
            if (managerTransfers[0] == mName) {
                totalTransfersMade = parseInt(managerTransfers[1]) + totalTransfersMade;
            }
        }


        await sleep(timeout);
        fullArray = fullArray + "{\"" + mName + "\",\"" + totalTransfersMade + "\" },";
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

