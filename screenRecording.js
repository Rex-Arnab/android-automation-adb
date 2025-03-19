// Start screen recording
const startScreenRecording = async () => {
    const command = `adb shell screenrecord /sdcard/demo.mp4`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Screen recording started: ${result}`);
    } catch (error) {
        console.error(`Error starting screen recording: ${error}`);
    }
};

// Stop screen recording
const stopScreenRecording = async () => {
    const command = `adb shell pkill -l 9 screenrecord`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Screen recording stopped: ${result}`);
    } catch (error) {
        console.error(`Error stopping screen recording: ${error}`);
    }
};
