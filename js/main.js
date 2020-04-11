(() => {
	
console.log("startup msg")

//defines
let monsters = document.querySelectorAll(".monster"),
	dropboxes = document.querySelectorAll(".dropbox"),
    audioElement = document.querySelectorAll("audio"),
    dataset = document.querySelectorAll(".data"),
    green = document.querySelector(".green"),
    red = document.querySelector(".red"),
    blue = document.querySelector(".blue"),
    slate = document.querySelector(".slate"),
    orange = document.querySelector(".orange"),
    yellow = document.querySelector(".yellow");

var redmusic = new Audio({src:['../audio/redmusic.mp3'], loop: true}),
	greenmusic = new Audio({src:['../audio/greenmusic.wav'], loop: true}),
	yellowmusic = new Audio({src:['../audio/yellowmusic.wav'], loop: true}),
	bluemusic = new Audio({src:['../audio/bluemusic.wav'], loop: true}),
	slatemusic = new Audio({src:['../audio/slatemusic.wav'], loop: true}),
	orangemusic = new Audio({src:['../audio/orangemusic.wav'], loop: true});
//=====ALL=====

//dropbox listeners for dragging over and dropping
dropboxes.forEach(dropbox => {
	dropbox.addEventListener("dragover", onDragOver)
});

function onDragOver(event) {
	console.log("dragged over zone");
	event.preventDefault();
	//nothing happens on drag over
}


//GREEN

green.addEventListener("dragstart", onDragStartG);

function onDragStartG(event) {
	console.log("drag started");
	//set what is being dragged
	let data = event.dataTransfer.setData("text/plain", this.id);
	dropboxes.forEach (dropbox => {dropbox.addEventListener("drop", onDropG)});
}

function onDropG(event) {
	console.log("dropped green in dropbox");
	event.preventDefault();
	//define currentImage to the dataset of the selected monster
	let data = event.dataTransfer.getData("text/plain", this.id);
	//selecting what monster to show when dropped
    event.target.appendChild(document.querySelector(".green"));
    greenmusic.play();

}


//RED

red.addEventListener("dragstart", onDragStartRed);

function onDragStartRed(event) {
	console.log("drag started");
	//set what is being dragged
	let data = event.dataTransfer.setData("text/plain", this.id);
	dropboxes.forEach (dropbox => {dropbox.addEventListener("drop", onDropRed)});
}

function onDropRed(event) {
	console.log("dropped red in dropbox");
	event.preventDefault();
	//define currentImage to the dataset of the selected monster
	let data = event.dataTransfer.getData("text/plain", this.id);
	//selecting what monster to show when dropped
    event.target.appendChild(document.querySelector(".red"));
    redmusic.play();
}

//BLUE

blue.addEventListener("dragstart", onDragStartBlue);

function onDragStartBlue(event) {
	console.log("drag started");
	//set what is being dragged
	let data = event.dataTransfer.setData("text/plain", this.id);
	dropboxes.forEach (dropbox => {dropbox.addEventListener("drop", onDropBlue)});
}

function onDropBlue(event) {
	console.log("dropped blue in dropbox");
	event.preventDefault();
	//define currentImage to the dataset of the selected monster
	let data = event.dataTransfer.getData("text/plain", this.id);
	//selecting what monster to show when dropped
    event.target.appendChild(document.querySelector(".blue"));
    bluemusic.play();
}

//YELLOW

yellow.addEventListener("dragstart", onDragStartYellow);

function onDragStartYellow(event) {
	console.log("drag started");
	//set what is being dragged
	let data = event.dataTransfer.setData("text/plain", this.id);
	dropboxes.forEach (dropbox => {dropbox.addEventListener("drop", onDropYellow)});
}

function onDropYellow(event) {
	console.log("dropped yellow in dropbox");
	event.preventDefault();
	//define currentImage to the dataset of the selected monster
	let data = event.dataTransfer.getData("text/plain", this.id);
	//selecting what monster to show when dropped
    event.target.appendChild(document.querySelector(".yellow"));
    yellowmusic.play();
}

//SLATE

slate.addEventListener("dragstart", onDragStartSlate);

function onDragStartSlate(event) {
	console.log("drag started");
	//set what is being dragged
	let data = event.dataTransfer.setData("text/plain", this.id);
	dropboxes.forEach (dropbox => {dropbox.addEventListener("drop", onDropSlate)});
}

function onDropSlate(event) {
	console.log("dropped slate in dropbox");
	event.preventDefault();
	//define currentImage to the dataset of the selected monster
	let data = event.dataTransfer.getData("text/plain", this.id);
	//selecting what monster to show when dropped
    event.target.appendChild(document.querySelector(".slate"));
    slatemusic.play();
}

//ORANGE

orange.addEventListener("dragstart", onDragStartOrange);

function onDragStartOrange(event) {
	console.log("drag started");
	//set what is being dragged
	let data = event.dataTransfer.setData("text/plain", this.id);
	dropboxes.forEach (dropbox => {dropbox.addEventListener("drop", onDropOrange)});
}

function onDropOrange(event) {
	console.log("dropped orange in dropbox");
	event.preventDefault();
	//define currentImage to the dataset of the selected monster
	let data = event.dataTransfer.getData("text/plain", this.id);
	//selecting what monster to show when dropped
    event.target.appendChild(document.querySelector(".orange"));
    orangemusic.play();
}











})();