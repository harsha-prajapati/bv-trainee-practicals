//only use in class
//function name start with capital
//property,method ,class uper call
//function can take atlest one argument as a constructor

// function Deco(constructor: Function) {
//   console.log(constructor);
//   console.log("Deco Call......");
// }
// @Deco

function Deco() {
  //always return one function
  return function (_: Function) {
    console.log("Deco Call......");
  };
}

function Fillhtml(template: string, id: string) {
  return function (_: Function) {
    const ele = document.getElementById(id);
    if (ele) {
      ele.innerHTML = template;
    } else {
      alert("Template Not Found");
    }
  };
}
function Checkcall() {
  //always return one function
  return function (_: Function) {
    console.log("Check Call......");
  };
}
function Checkcalla() {
  //always return one function
  return function (_: Function) {
    console.log("Check Calla......");
  };
}

@Fillhtml("<h1 style=color:blue>Decorators Example</h1>", "app")
@Deco()
@Checkcalla()
@Checkcall()
class Person {
  name = "vishal";
  constructor() {
    console.log("Person Call.....");
  }
}
const names = new Person();

// -----------Instance of object: The object for which we want to add property.
//the Greeter Class instance is stored in the target variable.
// -----------propertyName: The name of the property
// ---------Configuration Object: It is an object with specifications of property.
//we will add the getter and setter function as the specification.

function ModifyMessage(sender: string) {
  return function (target: any, propertyKey: string) {
    let modifiedMessage: string;

    // Return modifiedMessage whenever the message is asked
    const getter = function () {
      return modifiedMessage;
    };

    // Set the modifiedMessage value
    const setter = function () {
      modifiedMessage = `Hello from ${sender}!`;
    };

    // Overwrite the original message with
    // modifiedMessage we just created
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}
ModifyMessage("");
class Greeter {
  // Modify message property using decorator
  @ModifyMessage("ModifyMsg")
  firstMessage: string;

  secondMessage: string;

  constructor() {
    this.firstMessage = "Hi there!";
    this.secondMessage = "Hi there!";
  }

  greet() {
    console.log(`first message: ${this.firstMessage}`);
    console.log(`second message: ${this.secondMessage}`);
  }
}

let myGreeter = new Greeter();
myGreeter.greet();
