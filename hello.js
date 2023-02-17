const sayHellotoConsole = function (name) {
  console.log("Hello, " + name)
}

sayHello("Caliban")
sayHello("Miranda")
sayHello("Ferdinand")

const returnSayHello = function (name) {
  return "Hello, " + name
}

const greeting = returnSayHello("John")
console.log(greeting)
