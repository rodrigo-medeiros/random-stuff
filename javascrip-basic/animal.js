function Animal (nameArg, specieArg) {
  var name = nameArg;
  var specie = specieArg;

  this.showName = function () {
    return name;
  };

  return {
    showName: this.showName
  };
}

Animal.prototype.showSpecie = function () {
  console.log(this);
};

var dog = new Animal('Guizmo', 'dog');

console.log(dog);
console.log(dog.showName());
