const { ScreenOnCheck, LockScreenUnlock } = require("./actions/screen")
const { swipeLeft, swipeRight, swipeUp, swipeDown } = require("./actions/swip")
const { delay } = require("./utils/helper")
const { launchApp } = require("./app")
const { Apps, Keyboard } = require("./enum")
const { typeText, Press } = require("./form")
const { tap } = require("./common")

async function Start() {
	await launchApp(Apps.Chrome);
	await delay(500);
	await tap(300, 563);
	await delay(500);
	await typeText("Test")
	await delay(500);
	await Press(Keyboard.Enter);
}

Start()