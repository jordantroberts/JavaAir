var Airport = function(){this.planes = [], this.weather = new Weather()};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  console.log(this.weather.forecast())
  if (this.weather.forecast() == 'stormy') {
    throw "Too stormy to take off";
  }
  this.planes.pop();
};
