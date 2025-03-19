const { executeAdbCommand } = require("./android");

// Take a screenshot and save it to a specific location on the device
const takeScreenshot = async (savePath = "/sdcard/screenshot.png") => {
    const command = `adb shell screencap -p ${savePath}`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Screenshot taken: ${result}`);
    } catch (error) {
        console.error(`Error taking screenshot: ${error}`);
    }
};

// Pull the screenshot from the device to the local machine
const pullScreenshot = async (savePath = "/sdcard/screenshot.png", localPath = "./screenshot.png") => {
    const command = `adb pull ${savePath} ${localPath}`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Screenshot pulled to local machine: ${result}`);
    } catch (error) {
        console.error(`Error pulling screenshot: ${error}`);
    }
};

module.exports = {
    takeScreenshot,
    pullScreenshot
}