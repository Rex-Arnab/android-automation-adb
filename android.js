const { exec } = require('child_process');

const executeAdbCommand = (command) => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`exec error: ${error}`);
                return;
            }
            if (stderr) {
                console.log("ERROR:",stderr);
                reject(`stderr: ${stderr}`);
                return;
            }
            resolve(stdout);
        });
    });
};

// Tap function (x, y) - Simulates a tap on the screen
const tap = async (x, y) => {
    const command = `adb shell input tap ${x} ${y}`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Tap successful: ${result}`);
    } catch (error) {
        console.error(`Error during tap: ${error}`);
    }
};

// Swipe function (x1, y1, x2, y2) - Simulates a swipe from (x1, y1) to (x2, y2)
const swipe = async (x1, y1, x2, y2) => {
    const command = `adb shell input swipe ${x1} ${y1} ${x2} ${y2}`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Swipe successful: ${result}`);
    } catch (error) {
        console.error(`Error during swipe: ${error}`);
    }
};

// Long press function (x, y, duration) - Simulates a long press at (x, y) for the given duration (milliseconds)
const longPress = async (x, y, duration) => {
    const command = `adb shell input touchscreen swipe ${x} ${y} ${x} ${y} ${duration}`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Long press successful: ${result}`);
    } catch (error) {
        console.error(`Error during long press: ${error}`);
    }
};

// Home button press function
const pressHome = async () => {
    const command = `adb shell input keyevent 3`; // KeyEvent 3 is the HOME button
    try {
        const result = await executeAdbCommand(command);
        console.log(`Home button pressed: ${result}`);
    } catch (error) {
        console.error(`Error pressing Home: ${error}`);
    }
};

// Back button press function
const pressBack = async () => {
    const command = `adb shell input keyevent 4`; // KeyEvent 4 is the BACK button
    try {
        const result = await executeAdbCommand(command);
        console.log(`Back button pressed: ${result}`);
    } catch (error) {
        console.error(`Error pressing Back: ${error}`);
    }
};

// Function to execute a custom shell command
const executeShellCommand = async (command) => {
    try {
        const result = await executeAdbCommand(command);
        console.log(`Command executed successfully: ${result}`);
    } catch (error) {
        console.error(`Error executing command: ${error}`);
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
    const command = `adb shell dumpsys deviceidle | grep '\bm[A-Z]' | grep 'mScreenOn'`;
    try {
        const result = await executeAdbCommand(command);
        if (result.includes('mScreenOn=true')) {
            console.log('Screen is ON');
            return true;
        } else {
            console.log('Screen is OFF');
            return false;
        }
    } catch (error) {
        console.error(`Error checking screen state: ${error}`);
        return false;
    }
};


// Exporting the functions to be used as a library
module.exports = {
    tap,
    swipe,
    longPress,
    pressHome,
    pressBack,
    wake,
    screenOff,
    isScreenOn,
    executeShellCommand
};
