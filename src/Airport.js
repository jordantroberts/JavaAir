var Airport = function(weather = new Weather() ){this.planes = [], this.weather = weather; this.CAPACITY = 20; };

Airport.prototype.land = function(plane) {
  if (this.weather.forecast() == 'stormy') {
    throw new Error( "Too stormy to land");
  }

  
  if (this.planes.length >= this.CAPACITY) {
    throw new Error( "Airport is full");
  }

  this.planes.push(plane);
};

Airport.prototype.takeoff = function(plane) {
  console.log(this.weather.forecast())
  if (this.weather.forecast() == 'stormy') {
    throw new Error( "Too stormy to take off");
  }
  this.planes.pop();
};
