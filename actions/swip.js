const { swipe } = require("../common");

async function swipeDown() {
    swipe(300, 800, 300, 300);
}

async function swipeRight() {
    swipe(800, 300, 300, 300);
}

async function swipeLeft() {
    swipe(300, 300, 800, 300);
}

async function swipeUp() {
    swipe(300, 300, 300, 800);
}

module.exports = {
    swipeDown,
    swipeLeft,
    swipeRight,
    swipeUp
}