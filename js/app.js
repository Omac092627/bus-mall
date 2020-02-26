'use strict'

var rounds = 25;

var imageOneEl = document.getElementById('picture1');
var imageTwoEl = document.getElementById('picture2');
var imageThreeEl = document.getElementById('picture3');
var sectionEl = document.getElementById('image-container');
var canvasEl = document.getElementById('myChart');
var voteAgain = document.getElementById('button1');
var allPictures = [];
var recentPictures = [];

if (localStorage.length > 0) {
  var localStoragePictures = localStorage.getItem('Products');
  var parsePictures = JSON.parse(localStoragePictures);
  allPictures = parsePictures;
} else {
  storeNewItems();
}


function PictureHolder(src, alt, title) {
  this.src = src;
  this.alt = alt;
  this.title = title;
  this.clicked = 0;
  this.viewed = 0;
  this.total = 0;
  allPictures.push(this);
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
    pic1 = random(allPictures.length);
  } if (pic1 === pic3) {
    pic3 = random(allPictures.length);
  } if (pic3 === pic2) {
    pic2 = random(allPictures.length);
  }
  imageOneEl.src = allPictures[pic1].src;
  imageOneEl.alt = allPictures[pic1].alt;
  imageOneEl.title = allPictures[pic1].title;
  recentPictures.push(pic1);
  allPictures[pic1].viewed++;

  imageTwoEl.src = allPictures[pic2].src;
  imageTwoEl.alt = allPictures[pic2].alt;
  imageTwoEl.title = allPictures[pic2].title;
  recentPictures.push(pic2);
  allPictures[pic2].viewed++;

  imageThreeEl.src = allPictures[pic3].src;
  imageThreeEl.alt = allPictures[pic3].alt;
  imageThreeEl.title = allPictures[pic3].title
  recentPictures.push(pic3);
  allPictures[pic3].viewed++;
}

function storeNewItems() {
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
}

function handleClick(e) {
  var clickedPic = e.target.title;
  var viewedPic = e.target.title;

  for (var i = 0; i < allPictures.length; i++) {
    if (clickedPic === allPictures[i].title) {
      allPictures[i].clicked++;
      rounds--;
      var votesEl = document.getElementById('vote1');
      votesEl.textContent = rounds;
    }
    if (clickedPic === allPictures[i].title && viewedPic === allPictures[i].title) {
      allPictures[i].total += 1;
    }
  } if (rounds === 0) {
    sectionEl.removeEventListener('click', handleClick)
    chartGen();
    var stringify = JSON.stringify(allPictures);
    localStorage.setItem('Products', stringify);
  }

  generate();
};
sectionEl.addEventListener('click', handleClick);
generate();


function chartGen() {
  var productName = [];
  var votes = [];
  var viewed = [];


  for (var i = 0; i < allPictures.length; i++) {
    productName.push(allPictures[i].alt);
    votes.push(allPictures[i].clicked);
    viewed.push(allPictures[i].viewed);

  }


  var ctx = canvasEl.getContext('2d');


  new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Number of Votes',
        data: votes,
        backgroundColor: [
          'rgba(240, 52, 52, 1)',
          'rgba(42, 187, 155, 1)',
          'rgba(44, 130, 201, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(240, 52, 52, 1)',
          'rgba(42, 187, 155, 1)',
          'rgba(44, 130, 201, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(240, 52, 52, 1)',
          'rgba(42, 187, 155, 1)',
          'rgba(44, 130, 201, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(240, 52, 52, 1)',
          'rgba(44, 130, 201, 1)'
        ],
      }, {
        label: 'Number of Views',
        data: viewed,
        borderColor: [
          'rgba(240, 52, 52, 1)',
          'rgba(42, 187, 155, 1)',
          'rgba(44, 130, 201, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(240, 52, 52, 1)',
          'rgba(42, 187, 155, 1)',
          'rgba(44, 130, 201, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(240, 52, 52, 1)',
          'rgba(42, 187, 155, 1)',
          'rgba(44, 130, 201, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(240, 52, 52, 1)',
          'rgba(44, 130, 201, 1)'
        ],
        borderWidth: 2,
        // Changes this dataset to become a line
        type: 'line'
      }],
      labels: productName,
    },
  });
}



function handleClick1(e) {
  location.reload();
  localStorage.clear();
}
voteAgain.addEventListener('click', handleClick1);
