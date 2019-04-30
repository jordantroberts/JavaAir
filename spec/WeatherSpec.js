describe('Weather', function(){

  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  it('is stormy 20% of the time', function(){
    spyOn(Math, "random").and.returnValue(0.1);
    expect(weather.forecast()).toEqual('stormy');
  });

  it('is sunny 80% of the time', function(){
    spyOn(Math, "random").and.returnValue(0.9);
    expect(weather.forecast()).toEqual('sunny');
  });
});
