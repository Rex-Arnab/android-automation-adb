const { executeAdbCommand } = require("./android");

const tap = async (x, y) => {
    const command = `adb shell input tap ${x} ${y}`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Tap successful: ${result}`);
    } catch (error) {
        console.error(`Error during tap: ${error}`);
    }
};

const swipe = async (x1, y1, x2, y2) => {
    const command = `adb shell input swipe ${x1} ${y1} ${x2} ${y2}`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Swipe successful: ${result}`);
    } catch (error) {
        console.error(`Error during swipe: ${error}`);
    }
};

const longPress = async (x, y, duration) => {
    const command = `adb shell input touchscreen swipe ${x} ${y} ${x} ${y} ${duration}`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Long press successful: ${result}`);
    } catch (error) {
        console.error(`Error during long press: ${error}`);
    }
};

const pressHome = async () => {
    const command = `adb shell input keyevent 3`; // KeyEvent 3 is the HOME button
    try {
        const result = await executeAdbCommand(command);
        console.log(`Home button pressed: ${result}`);
    } catch (error) {
        console.error(`Error pressing Home: ${error}`);
    }
};

const pressBack = async () => {
    const command = `adb shell input keyevent 4`; // KeyEvent 4 is the BACK button
    try {
        const result = await executeAdbCommand(command);
        console.log(`Back button pressed: ${result}`);
    } catch (error) {
        console.error(`Error pressing Back: ${error}`);
    }
};


// Wake the device (simulate pressing the power button to wake up the device)
const wake = async () => {
    const command = `adb shell input keyevent 26`; // KeyEvent 26 is the POWER button
    try {
        const result = await executeAdbCommand(command);
        console.log(`Device woke up: ${result}`);
    } catch (error) {
        console.error(`Error waking up device: ${error}`);
    }
};

// Turn off the screen (simulate pressing the power button to turn off the screen)
const screenOff = async () => {
    const command = `adb shell input keyevent 26`; // KeyEvent 26 is the POWER button
    try {
        const result = await executeAdbCommand(command);
        console.log(`Device screen turned off: ${result}`);
    } catch (error) {
        console.error(`Error turning off screen: ${error}`);
    }
};

// Check if the screen is on
const isScreenOn = async () => {
    const command = `adb shell dumpsys deviceidle | grep 'm[A-Z]' | grep 'mScreenOn'`;
    try {
        const result = await executeAdbCommand(command);
        if (result.includes('mScreenOn=true')) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(`Error checking screen state: ${error}`);
        return false;
    }
};


module.exports = {
    swipe,
    tap,
    longPress,
    pressHome,
    pressBack,
    wake,
    screenOff,
    isScreenOn,
}