// Launch an app by its package name
const launchApp = async (packageName) => {
    const command = `adb shell monkey -p ${packageName} -c android.intent.category.LAUNCHER 1`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`App launched: ${result}`);
    } catch (error) {
        console.error(`Error launching app: ${error}`);
    }
};

// Close an app by its package name
const closeApp = async (packageName) => {
    const command = `adb shell am force-stop ${packageName}`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`App closed: ${result}`);
    } catch (error) {
        console.error(`Error closing app: ${error}`);
    }
};

// Check if an app is installed by its package name
const isAppInstalled = async (packageName) => {
    const command = `adb shell pm list packages | grep ${packageName}`;
    try {
        const result = await executeAdbCommand(command);
        if (result) {
            console.log(`App is installed: ${result}`);
            return true;
        } else {
            console.log(`App is not installed`);
            return false;
        }
    } catch (error) {
        console.error(`Error checking app installation: ${error}`);
        return false;
    }
};
