// window.alert("Hello World!");

let screenWidth = screen.width;
let screenHeight = screen.height;
let availableWidth = screen.availWidth;
let availableHeight = screen.availHeight;
let colorDepth = screen.colorDepth;


console.log("Screen width: " + screenWidth + "\n" +
    "Screen height: " + screenHeight + "\n" +
    "Available screen width: " + availableWidth + "\n" +
    "Available screen height: " + availableHeight + "\n" +
    "Color depth: " + colorDepth + "\n");

let href = location.href;
let hostname = location.hostname;
let pathname = location.pathname;
let protocol = location.protocol;

console.log("Href: " + href + "\n" +
    "Hostname: " + hostname + "\n" +
    "Pathname: " + pathname + "\n" +
    "Protocol: " + protocol + "\n");