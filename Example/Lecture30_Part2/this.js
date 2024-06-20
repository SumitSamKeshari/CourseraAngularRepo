function Person () {
  this.fullName ="Sumit";
  this.fav ="Cookies";

  this.describe = function () {
    console.log('this is: ', this);
    console.log(this.fullName + " likes " + this.fav);
  };
}

var sumit = new Person();
sumit.describe ();

var describe = sumit.describe;
describe();
describe.call(sumit);
