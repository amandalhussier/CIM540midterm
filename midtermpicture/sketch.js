var mouseX;
var mouseY;

var cheetah;
var harpy;
var scholar;
var map;

var button;

var imageSize = 100;
var bgImageSize = 1000;
var blurbSize = 200;

function preload(){
  cheetah = loadImage("Chetah.png");
  harpy = loadImage("Harpy.png");
  scholar = loadImage("Scholarship.png");
  map = loadImage("Map.png");
}

function setup() {
  createCanvas(1000,1000);
//Need to make a donation button here
}



function draw() {
  image(map, 0, 0, bgImageSize, bgImageSize);
  image(cheetah, 530, 770, imageSize, imageSize); //cheetah
  image(harpy, 130, 520, imageSize, imageSize); //harpy
  image(scholar, 170, 380, imageSize, imageSize); //scholar

//Cheetah Blurb
if(mouseX >= 430 && mouseX < 630 && mouseY >= 670 && mouseY < 870) {
    console.log("Cheetah");
    fill(255);
    rect(530, 770, blurbSize, blurbSize);
    text("Sponsorship of Anatolian Shepherd dogs in South Africa through the nonprofit Cheetah Outreach. These dogs are bred to protect livestock from cheetah attacks with a success rate of over 85% and have reduced the number of cheetah casualties that arise from the human-wildlife conflict.");
  }

//Harpy Blurb
if(mouseX >= 80 && mouseX < 180 && mouseY >= 420 && mouseY < 620) {
    console.log("Harpy");
    fill (255);
    rect(130, 520, blurbSize, blurbSize);
    text("Harpy eagle conservation project in Panama. This project spurred the 2002 law that designated the harpy eagle as the official bird of Panama.");
  }

//Scholarship Blurb
if(mouseX >= 120 && mouseX < 220 && mouseY >= 330 && mouseY < 430) {
    console.log("Scholarship");
    fill (255);
    rect(170, 380, blurbSize, blurbSize);
    text("An annual $5,000 scholarship to a graduate student in the Department of Wildlife Ecology and Conservation at the University of Florida. This scholarship reflects Ron's deep commitment to training the next generation of conservationists.");
  }

}
