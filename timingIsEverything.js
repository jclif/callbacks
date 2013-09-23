function Clock(){
  this.time = new Date();
}

Clock.prototype.run = function () {
  that = this;
  global.setInterval(function () {
    console.log(that.time.getHours() + ":" + that.time.getMinutes() + ":" + that.time.getSeconds());
    that.time.setTime(that.time.getTime()+5000)
  }, 5000)
};



var clock = new Clock();
clock.run();

