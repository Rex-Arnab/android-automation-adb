// Type text into a field (x, y) - Simulates typing text into an input field
const typeText = async (x, y, text) => {
    const command = `adb shell input text "${text}"`;
    try {
        const result = await executeAdbCommand(command);
        console.log(`Text typed successfully: ${result}`);
    } catch (error) {
        console.error(`Error typing text: ${error}`);
    }
};

// Clear text from a field (x, y) - Simulates clearing text in an input field
const clearText = async (x, y) => {
    const command = `adb shell input keyevent 67`; // KeyEvent 67 is the BACKSPACE key
    try {
        const result = await executeAdbCommand(command);
        console.log(`Text cleared successfully: ${result}`);
    } catch (error) {
        console.error(`Error clearing text: ${error}`);
    }
};
