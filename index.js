const androidAutomation = require('./android');
const helper = require('./helper');

async function Test(){

	// Example: Turn Screen Off
	androidAutomation.screenOff();
	await helper.delay(2000);

	// Example: Wake Phone Screen
	androidAutomation.wake();
	await helper.delay(2000);

	// Example: Swipe from (300, 800) to (300, 300)
	await helper.delay(500);
	androidAutomation.swipe(300, 800, 300, 300);
	androidAutomation.swipe(300, 800, 300, 300);
	await helper.delay(500);
	androidAutomation.swipe(300, 800, 300, 300);
	await helper.delay(500);
	androidAutomation.swipe(300, 800, 300, 300);
	await helper.delay(2000);

	// Example: Tap at coordinates (500, 1000)
	androidAutomation.tap(500, 1000);
	await helper.delay(2000);

	// Example: Long press at (200, 400) for 1000ms
	androidAutomation.longPress(200, 400, 1000);
	await helper.delay(2000);

	// Example: Press home button
	androidAutomation.pressHome();
	await helper.delay(2000);

	// Example: Press back button
	androidAutomation.pressBack();
	await helper.delay(2000);

}

// Test()
console.log("Completed Test")

async function LockScreenUnlock(){
	// const screen = androidAutomation.isScreenOn()
	// if(!screen){
	// }
	await androidAutomation.wake()
	await helper.delay(3000);
	androidAutomation.swipe(300, 800, 300, 300);
	await helper.delay(2000);
	androidAutomation.tap(538, 1281)
	await helper.delay(500);
	androidAutomation.tap(538, 1281)
	await helper.delay(500);
	androidAutomation.tap(284, 1549)
	await helper.delay(500);
	androidAutomation.tap(284, 1549)
	await helper.delay(500);
	androidAutomation.tap(800, 1983)
	await helper.delay(2000);
}

async function screenOnCheck(){
	const result = await androidAutomation.isScreenOn()
	if(result){
		console.log("Screen is on");
	} else {
		console.log("Screen is off");
	}
}

// LockScreenUnlock()
// screenOnCheck()