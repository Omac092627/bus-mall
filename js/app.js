'use strict'


var imageOneEl = document.getElementById('picture1');
var imageTwoEl = document.getElementById('picture2');
var imageThreeEl = document.getElementById('picture3');
var sectionEl = document.getElementById('image-container');

var allPictures = [];
var recentPictures = [];
var allTotalClicked = [];
var allViews = [];

function PictureHolder(src, alt, title) {
  this.src = src;
  this.alt = alt;
  this.title = title;
  this.clicked = 0;
  this.viewed = 0;
  this.total = 0;
  this.rounds = 25;
  allPictures.push(this);
  allViews.push(this.viewed);
  allTotalClicked.push(this.total);
};

function random(max) {
  return Math.floor(Math.random() * max);
};

function generate() {
  while (recentPictures.length > 6) {
    recentPictures.shift();
  }
  var pic1 = random(allPictures.length);
  while (recentPictures.includes(pic1)) {
    pic1 = random(allPictures.length);
  }
  var pic2 = random(allPictures.length);
  while (recentPictures.includes(pic2)) {
    pic2 = random(allPictures.length);
  }
  var pic3 = random(allPictures.length);
  while (recentPictures.includes(pic3)) {
    pic3 = random(allPictures.length);
  }

  while (pic1 === pic2) {
    pic2 = random(allPictures.length);
  } if (pic2 === pic3) {
    pic3 = random(allPictures.length);
  } if (pic3 === pic1) {
    pic1 = random(allPictures.length);
  } if (pic2 === pic1) {
    pic1 = random(allPictures.length)
  }


  imageOneEl.src = allPictures[pic1].src;
  imageOneEl.alt = allPictures[pic1].alt;
  imageOneEl.title = allPictures[pic1].title;
  recentPictures.push(pic1);

  imageTwoEl.src = allPictures[pic2].src;
  imageTwoEl.alt = allPictures[pic2].alt;
  imageTwoEl.title = allPictures[pic2].title;
  recentPictures.push(pic2);

  imageThreeEl.src = allPictures[pic3].src;
  imageThreeEl.alt = allPictures[pic3].alt;
  imageThreeEl.title = allPictures[pic3].title
  recentPictures.push(pic3);

}


function handleClick(e) {
  var clickedPic = e.target.title;
  var viewedPic = e.target.title;

  for (var i = 0; i < allPictures.length; i++) {
    if (clickedPic === allPictures[i].title) {
      allPictures[i].clicked++;
      allPictures[i].rounds--;
    }
    if (clickedPic === allPictures[i].title && viewedPic === allPictures[i].title) {
      allPictures[i].total += 1;
    }
  }

  for (var b = 0; b < allPictures.length; b++) {
    if (viewedPic === allPictures[b].title) {
      allPictures[b].viewed++;
      allPictures[b].rounds--;
    }
    for (var c = 0; c < allPictures.length; c++) {
      if (clickedPic === 1) {
        allPictures[c].shift();
      }
    }
  }
  generate();
};




new PictureHolder('img/bag.jpg', 'bag', 'bag');
new PictureHolder('img/banana.jpg', 'banana', 'banana');
new PictureHolder('img/bathroom.jpg', 'bathroom', 'bathroom');
new PictureHolder('img/boots.jpg', 'boots', 'boots');
new PictureHolder('img/breakfast.jpg', 'breakfast', 'breakfast');
new PictureHolder('img/bubblegum.jpg', 'bubble', 'bubble');
new PictureHolder('img/chair.jpg', 'chair', 'chair');
new PictureHolder('img/cthulhu.jpg', 'cthulhu', 'cthulhu');
new PictureHolder('img/dog-duck.jpg', 'dog', 'dog');
new PictureHolder('img/dragon.jpg', 'dragon', 'dragon');
new PictureHolder('img/pen.jpg', 'pen', 'pen');
new PictureHolder('img/pet-sweep.jpg', 'pet-sweep', 'pet-sweep');
new PictureHolder('img/scissors.jpg', 'scissors', 'scissors');
new PictureHolder('img/shark.jpg', 'shark', 'shark');
new PictureHolder('img/sweep.png', 'sweep', 'sweep');
new PictureHolder('img/tauntaun.jpg', 'tauntaun', 'tauntaun');
new PictureHolder('img/unicorn.jpg', 'unicorn', 'unicorn');
new PictureHolder('img/usb.gif', 'usb', 'usb');
new PictureHolder('img/water-can.jpg', 'water-can', 'water-can');
new PictureHolder('img/wine-glass.jpg', 'wine-glass', 'wine-glass');



sectionEl.addEventListener('click', handleClick);
generate();
