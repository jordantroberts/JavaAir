describe('Airport', function(){

  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    weather = new Weather();
  });

  it('allows plane to land', function(){
    airport.land(plane);
    expect(airport.planes).toContain(plane)
  });

  it('instruct plane to take off', function(){
    spyOn(airport, 'weather').and.returnValue(weather)
    spyOn(weather, 'forecast').and.returnValue('sunny');
    console.log(weather.forecast())
      console.log(airport.weather.forecast())
    console.log("--------------------")
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.planes).not.toContain(plane);
  });

  it('raises error if plane tries to take off in storm', function(){
    spyOn(weather, 'forecast').and.returnValue('stormy');
    console.log(weather.forecast())
    console.log("++++++++++++++++++")
    airport.land(plane);
    expect(function(){
      airport.takeoff(plane)}).toThrowError("Too stormy to take off");
  });
});
