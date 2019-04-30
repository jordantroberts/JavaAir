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

});
