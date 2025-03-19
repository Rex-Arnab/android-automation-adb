// Enable Bluetooth
const enableBluetooth = async () => {
    const command = `adb shell am start -a android.bluetooth.adapter.action.REQUEST_ENABLE`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Bluetooth enabled: ${result}`);
    } catch (error) {
        console.error(`Error enabling Bluetooth: ${error}`);
    }
};

// Disable Bluetooth
const disableBluetooth = async () => {
    const command = `adb shell am start -a android.bluetooth.adapter.action.REQUEST_DISABLE`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Bluetooth disabled: ${result}`);
    } catch (error) {
        console.error(`Error disabling Bluetooth: ${error}`);
    }
};

// Check Bluetooth status
const checkBluetoothStatus = async () => {
    const command = `adb shell dumpsys bluetooth_manager | grep 'State'`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Bluetooth status: ${result}`);
    } catch (error) {
        console.error(`Error checking Bluetooth status: ${error}`);
    }
};
