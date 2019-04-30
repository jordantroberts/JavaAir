var Weather = function(){};

Weather.prototype.forecast = function(){
  return Math.random()<= 0.2 ? "stormy" : "sunny"
};
