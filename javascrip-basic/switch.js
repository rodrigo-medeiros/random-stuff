// Single case switch
var name = "Guizmo";

switch (name) {
  case "Bart":
    console.log("It's a cat!");
    break;
  case "Guizmo":
    console.log("It's a dog!");
    break;
  default:
    console.log("I don't know what it is...");
}

// Multi case switch
var value = 0;

switch (value) {
  case 0:
  case 1:
  case 2  :
  console.log("Value is", value + ".");
  break;
  default:
  console.log("Value is greater than 2.");
}
