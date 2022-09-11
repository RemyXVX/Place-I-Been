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

