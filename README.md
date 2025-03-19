# Android Automation using ADB

This project provides an automation framework for Android devices using ADB. It lets you simulate taps, swipes, and more to automate actions on your device.

## Getting Started

1. **Connect your Device:**
    Make sure your Android device is connected with USB debugging enabled. Run:
    ```
    adb devices
    ```
    Your device should appear in the list.

2. **Developer Options:**
    Enable USB debugging and activate "Show pointer location" in the Developer Options. This assists in gathering coordinate data for taps, swipes, etc.

## Features

- Launch apps on your device.
- Simulate user interactions like tap, swipe, and long-press.
- Example commands for common actions.

## Example Code

To open Chrome and simulate typing text:

```javascript
const { launchApp } = require("./app");
const { tap } = require("./common");
const { typeText, Press } = require("./form");
const { delay } = require("./utils/helper");
const { Apps, Keyboard } = require("./enum");

async function Start() {
     await launchApp(Apps.Chrome);
     await delay(500);
     await tap(300, 563);  // Example coordinates from pointer location
     await delay(500);
     await typeText("Test");
     await delay(500);
     await Press(Keyboard.Enter);
}

Start();
```

This snippet launches Chrome, taps on a specific coordinate, types "Test", and presses the enter key.

# ISSUES

## Wireless Control

it is possible to enable the TCP/IP connection manually using `adb`:

1. Plug the device into a USB port on your computer.
2. Connect the device to the same Wi-Fi network as your computer.
3. Get your device IP address, in Settings → About phone → Status, or by
   executing this command:

    ```bash
    adb shell ip route | awk '{print $9}'
    ```

4. Enable `adb` over TCP/IP on your device: `adb tcpip 5555`.
5. Unplug your device.
6. Connect to your device: `adb connect DEVICE_IP:5555` _(replace `DEVICE_IP`
with the device IP address you found)_.
1. use the automation while your device is connected and showing in `adb devices`.
2. Run `adb disconnect` once you're done.

Since Android 11, a [wireless debugging option][adb-wireless] allows you to
bypass having to physically connect your device to your computer.

[adb-wireless]: https://developer.android.com/studio/command-line/adb#wireless-android11-command-line

## No Device is Showing (linux only / windows WSL maybe)

if your android device is not showing in `adb devices` command, then follow the following steps
1. Add your $USER to `plugdev` group - `sudo usermod -a -G plugdev $USER`
2. Remove your phone if connected
3. create a file at `/etc/udev/rules.d/51-android.rules` - without this file your device will not be added to adb request list
4. (if possible) - add enter in it
   1. open the rule file - `sudo nano /etc/udev/rules.d/51-android.rules`
   2. add your device rule - `SUBSYSTEM=="usb", ATTR{idVendor}=="[Vendor ID]", ATTR{idProduct}=="[Product ID]", MODE="0666", GROUP="plugdev"` - Your will find them with `lsusb`
   3. give appropiate permissions - `sudo chmod 644 /etc/udev/rules.d/51-android.rules`
   4. (NOTE): if you do not add your device info, at least create the rule file
5. Phone -> Settings -> Developer Options -> `Revoke USB debugging autorisations`
6. sudo kill-server
7. sudo start-server
8. adb devices - it should show a permissing dialog in your phone

(note): If it worked then happy automation, otherwise its time to research

## Additional Examples

You can also automate other actions such as swiping or interacting with apps like WhatsApp. Look into the respective action files (e.g., `actions/whatsapp.js` and `actions/swip.js`) for more details.

Happy automating!