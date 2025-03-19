const { wake, tap, isScreenOn, pressHome } = require("../common");
const { delay } = require("../utils/helper");
const { swipeUp } = require("./swip");

async function LockScreenUnlock() {
    const screen = await isScreenOn()
    if (!screen) {
        await wake()
        await delay(3000);
    }
    await swipeUp();
    await delay(1000);
    await tap(538, 1281)
    await delay(1);
    await tap(538, 1281)
    await delay(1);
    await tap(284, 1549)
    await delay(1);
    await tap(284, 1549)
    await delay(1);
    await tap(800, 1983)
    await delay(1000);
    await pressHome();
}

async function ScreenOnCheck() {
    const result = await isScreenOn()
    if (result) {
        console.log("Screen is on");
    } else {
        console.log("Screen is off");
    }
}

module.exports = {
    LockScreenUnlock,
    ScreenOnCheck
}