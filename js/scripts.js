// logic for places to see
function PlacesCollection () {
  this.places = {};
  this.currentId = 0
}

PlacesCollection.prototype.addPlace = function(places) {
  places.id = this.assignId();
  this.places[places.id] = places;
}

PlacesCollection.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

PlacesCollection.prototype.findPlace = function(id) {
  if (this.places[id] !== undefined) {
    return this.places[id];
  }
  return false;
};

// logic for individual places

function placesToSee (locationPlace,landmarkPlace, foodPlace) {
  this.locationPlace = locationPlace;
  this.landmarkPlace = landmarkPlace;
  this.foodPlace = foodPlace;
}

// UI

let placesCollect = new PlacesCollection();

function listContacts(placesCollectDisplay) {
  let placesDiv = document.querySelector("div#place1");
  placesDiv.innerText =  null;
  const ul = document.createElement("ul");
  Object.keys(placesCollectDisplay.places).forEach(function(key) {
    const contact = placesCollectDisplay.findContact(key);
    const li = document.createElement("li");
    li.append(places);
    li.setAttribute("id", places.id);
    ul.append(li);
  });
  placesDiv.append(ul);
};
