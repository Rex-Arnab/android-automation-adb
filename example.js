// Check WhatsApp messages automation
async function checkWhatsAppMessages() {
    await LockScreenUnlock(); // Unlock the device first
    await delay(2000);
    await launchApp(Apps.WhatsappBusiness);
    await delay(3000);
    await swipeDown(); // Refresh chats
    await delay(1000);
    await pressHome();
}

// Perform multiple searches in Chrome
async function performSearches(searchTerms) {
    await launchApp(Apps.Chrome);
    await delay(2000);

    for (const term of searchTerms) {
        await tap(300, 563); // Tap search bar
        await delay(500);
        await typeText(term);
        await delay(500);
        await Press(Keyboard.Enter);
        await delay(2000);
    }
}

// Usage:
performSearches(['weather today', 'news', 'tech updates']);

// Check multiple social media apps
async function checkSocialMedia() {
    await ScreenOnCheck();

    // Check Telegram
    await launchApp(Apps.Telegram);
    await delay(3000);
    await swipeDown();
    await delay(1000);

    // Check WhatsApp
    await launchApp(Apps.WhatsApp);
    await delay(3000);
    await swipeDown();
    await delay(1000);

    // Check Pinterest
    await launchApp(Apps.Pinterest);
    await delay(3000);
    await swipeDown();
    await delay(1000);

    await pressHome();
}

// Navigate through an app with specific pattern
async function appNavigation() {
    await launchApp(Apps.PocketFM);
    await delay(2000);

    // Navigate through different sections
    await swipeLeft();
    await delay(1000);
    await swipeRight();
    await delay(1000);
    await swipeUp();
    await delay(1000);
    await swipeDown();
    await delay(1000);

    // Tap specific coordinates (example locations)
    await tap(300, 500);
    await delay(1000);
    await tap(300, 600);
    await delay(1000);

    await pressHome();
}