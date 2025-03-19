// Enable Location Services
const enableLocation = async () => {
    const command = `adb shell settings put secure location_providers_allowed +gps`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Location Services enabled: ${result}`);
    } catch (error) {
        console.error(`Error enabling location: ${error}`);
    }
};

// Disable Location Services
const disableLocation = async () => {
    const command = `adb shell settings put secure location_providers_allowed -gps`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Location Services disabled: ${result}`);
    } catch (error) {
        console.error(`Error disabling location: ${error}`);
    }
};
