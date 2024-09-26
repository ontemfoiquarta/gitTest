let browser = prompt("What's your favorite browser?");
let input = browser.toLowerCase()

if(input == "edge") {
    alert ("You've got the edge!")
} else if (browser == "chrome"
    || input == "firefox"
    || input == "safari"
    || input == "opera") {
    alert ("Okay, we support those too")
} else {
    alert ("We hope that this page looks ok")
}
