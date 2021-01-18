const sayHello = function() {
  alert('Hello World!')
}

setTimeout(sayHello, 3000);



const sayHello = function () {
  alert("Hello");
}
const timer = setInterval(sayHello, 3000);

clearInterval(timer);