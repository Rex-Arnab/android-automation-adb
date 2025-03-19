const { executeAdbCommand } = require("./android");

// Enable Wi-Fi
const enableWifi = async () => {
    const command = `adb shell svc wifi enable`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Wi-Fi enabled: ${result}`);
    } catch (error) {
        console.error(`Error enabling Wi-Fi: ${error}`);
    }
};

// Disable Wi-Fi
const disableWifi = async () => {
    const command = `adb shell svc wifi disable`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Wi-Fi disabled: ${result}`);
    } catch (error) {
        console.error(`Error disabling Wi-Fi: ${error}`);
    }
};

// Check Wi-Fi status
const checkWifiStatus = async () => {
    const command = `adb shell dumpsys wifi | grep 'Wi-Fi is'`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Wi-Fi status: ${result}`);
    } catch (error) {
        console.error(`Error checking Wi-Fi status: ${error}`);
    }
};

module.exports = {
    enableWifi,
    disableWifi,
    checkWifiStatus
}