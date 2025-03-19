const { launchApp } = require("../app");
const { pressHome } = require("../common");
const { delay } = require("../helper");

async function OpenWhatsapp() {
    await pressHome();
    await delay(1000);
    await launchApp(Apps.WhatsappBusiness)
}

module.exports = {
    OpenWhatsapp
}