const { exec } = require('child_process');

const executeAdbCommand = (command) => {
    return new Promise((resolve, reject) => {
        console.log("command", command)
        exec(command, (error, stdout, stderr) => {
            console.log(stdout)
            if (error) {
                reject(`exec error: ${error}`);
                return;
            }
            if (stderr) {
                console.log("ERROR:", stderr);
                reject(`stderr: ${stderr}`);
                return;
            }
            resolve(stdout);
        });
    });
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



// Exporting the functions to be used as a library
module.exports = {
    executeShellCommand,
    executeAdbCommand
};
