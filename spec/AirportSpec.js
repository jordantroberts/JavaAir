describe('Airport', function(){

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it('allows plane to land', function(){
    airport.land(plane);
    expect(airport.planes).toContain(plane)
  });

  it('instruct plane to take off', function(){
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.planes).not.toContain(plane);
  });

});
