describe('Airport', function(){

  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    weather = new Weather();
    airport = new Airport(weather);
    plane = new Plane();
    
  });

  it('allows plane to land', function(){
    airport.land(plane);
    expect(airport.planes).toContain(plane)
  });

  it('instruct plane to take off', function(){
    spyOn(weather, 'forecast').and.returnValue('sunny');
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.planes).not.toContain(plane);
  });

  it('raises error if plane tries to take off in storm', function(){
    spyOn(weather, 'forecast').and.returnValue('stormy');
    airport.land(plane);
    expect(function(){
      airport.takeoff(plane)}).toThrowError("Too stormy to take off");
  });
});
