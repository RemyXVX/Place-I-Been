// logic for places to see
function PlaceCollection () {
  this.place = {};
  this.currentId = 0
}

PlaceCollection.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.place[place.id] = place;
}

PlaceCollection.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlaceCollection.prototype.findPlace = function(id) {
  if (this.place[id] !== undefined) {
    return this.place[id];
  }
  return false;
};

// logic for individual places

function placeToSee (locationPlace,landmarkPlace, foodPlace) {
  this.locationPlace = locationPlace;
  this.landmarkPlace = landmarkPlace;
  this.foodPlace = foodPlace;
}

// UI

let placeCollect = new PlaceCollection();

function listPlace(placeCollectDisplay) {
  let placeDiv = document.querySelector("div#place1");
  placeDiv.innerText =  null;
  const ul = document.createElement("ul");
  Object.keys(placeCollectDisplay.place).forEach(function(key) {
    const place = placeCollectDisplay.findPlace(key);
    const li = document.createElement("li");
    li.append(place);
    li.setAttribute("id", place.id);
    ul.append(li);
  });
  placeDiv.append(ul);
};

function formSubmission(event) {
  event.preventDefault();
  const inputPlace = document.querySelector("input#placeName").value;
  const inputLandmark = document.querySelector("input#newLand").value;
  const inputFood = document.querySelector("input#newFood").value;
  let nuPlace = new placeToSee(inputPlace, inputLandmark, inputFood);
  placeCollect.addPlace(nuPlace);
  listPlace(placeCollect);
};

window.addEventListener("load", function (){
  document.querySelector("form#new-location").addEventListener("submit", formSubmission);
});
//hello