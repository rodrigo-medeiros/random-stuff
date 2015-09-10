function returnTest (arg) {
  this.name = 1;
  return (name = arg || 'lakdf');
}

console.log(returnTest());
