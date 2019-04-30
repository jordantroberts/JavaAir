var Airport = function(weather = new Weather() ){this.planes = [], this.weather = weather};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  console.log(this.weather.forecast())
  if (this.weather.forecast() == 'stormy') {
    throw new Error( "Too stormy to take off");
  }
  this.planes.pop();
};
