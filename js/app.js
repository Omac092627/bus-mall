var imageOneEl = document.getElementById('picture1');
var imageTwoEl = document.getElementById('picture2');
var imageThreeEl = document.getElementById('picture3');
var sectionEl = document.getElementById('image-container');
var resultMagic = document.getElementById('results');
var allPictures = [];

function pictureHolder(src, alt, title) {
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

  var pic1 = random(allPictures.length);
  var pic2 = random(allPictures.length);
  var pic3 = random(allPictures.length);

  while (pic1 === pic2) {
    pic2 = random(allPictures.length);
  } if (pic2 === pic3) {
    pic3 = random(allPictures.length);
  } if (pic3 === pic2 && pic3 === pic1) {
    pic1 = random(allPictures.length);
    pic2 = random(allPictures.length);
  }

  imageOneEl.src = allPictures[pic1].src;
  imageOneEl.alt = allPictures[pic1].alt;
  imageOneEl.title = allPictures[pic1].title;

  imageTwoEl.src = allPictures[pic2].src;
  imageTwoEl.alt = allPictures[pic2].alt;
  imageTwoEl.title = allPictures[pic2].title;

  imageThreeEl.src = allPictures[pic3].src;
  imageThreeEl.alt = allPictures[pic3].alt;
  imageThreeEl.title = allPictures[pic3].title
}

function handleClick(e) {
  var clickedPic = e.target.title;
  var viewedPic = e.target.title;
  for (var i = 0; i < allPictures.length; i++) {
    if (clickedPic === allPictures[i].title) {
      allPictures[i].clicked++;
    } if (clickedPic === allPictures[i].title && viewedPic === allPictures[i].title) {
      allPictures[i].total += 1;
    }
  } for (var b = 0; b < allPictures.length; b++) {
    if (viewedPic === allPictures[b].title) {
      allPictures[b].viewed++;

    }

  }



  generate();

}



new pictureHolder('img/bag.jpg', 'bag', 'bag');
new pictureHolder('img/banana.jpg', 'banana', 'banana');
new pictureHolder('img/bathroom.jpg', 'bathroom', 'bathroom');
new pictureHolder('img/boots.jpg', 'boots', 'boots');
new pictureHolder('img/breakfast.jpg', 'breakfast', 'breakfast');
new pictureHolder('img/bubblegum.jpg', 'bubble', 'bubble');
new pictureHolder('img/chair.jpg', 'chair', 'chair');
new pictureHolder('img/cthulhu.jpg', 'cthulhu', 'cthulhu');
new pictureHolder('img/dog-duck.jpg', 'dog', 'dog');
new pictureHolder('img/dragon.jpg', 'dragon', 'dragon');
new pictureHolder('img/pen.jpg', 'pen', 'pen');
new pictureHolder('img/pet-sweep.jpg', 'pet-sweep', 'pet-sweep');
new pictureHolder('img/scissors.jpg', 'scissors', 'scissors');
new pictureHolder('img/shark.jpg', 'shark', 'shark');
new pictureHolder('img/sweep.png', 'sweep', 'sweep');
new pictureHolder('img/tauntaun.jpg', 'tauntaun', 'tauntaun');
new pictureHolder('img/unicorn.jpg', 'unicorn', 'unicorn');
new pictureHolder('img/usb.gif', 'usb', 'usb');
new pictureHolder('img/water-can.jpg', 'water-can', 'water-can');
new pictureHolder('img/wine-glass.jpg', 'wine-glass', 'wine-glass');



sectionEl.addEventListener('click', handleClick);
generate();