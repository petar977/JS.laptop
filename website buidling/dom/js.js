var paragraphs = document.getElementById("p-2");

var paragraphs2 = document.getElementsByClassName('my-class');
console.log(paragraphs2.length);

var items = document.querySelectorAll("p");

console.log(items.length);

paragraphs.innerHTML = "nestoljepo";

var input = document.getElementById('first-name');
input.setAttribute('type', 'button');
input.addEventListener("click", displayMessage);
function displayMessage() {
    alert("Sta ima brate moj")
}
paragraphs.style.color = "blue";


var div = document.getElementById("my-div");

let eventCounter = 0;

div.addEventListener("click", function (e) {
    console.log(e.target);
});

document.addEventListener("keydown", logKey);

function logKey(e) {
    console.log(e.key);
}

var items = document.getElementsByTagName("li");

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("click", function (e) {
        alert(e.target.innerHTML);
    });

}

var link = document.getElementById("the-link");
link.addEventListener("click", preventDefaultEvent);

function preventDefaultEvent(e) {

    e.preventDefault();
    console.log("Default event is prevented!");
    return false

}

var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');

div1.addEventListener('click', eventhendler);
div2.addEventListener('click', eventhendler);
div3.addEventListener('click', eventhendler);

function eventhendler (e){
    console.log ("hello from " + e.target.id);
    //e.stopPropagation();
}