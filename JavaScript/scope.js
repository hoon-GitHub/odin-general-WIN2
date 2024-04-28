const age = 100;

function go1() {
    const hair = 'blonde';
    const age = 200; // shadowed variable
    console.log(age);
    console.log(hair);
}

go1();
console.log(age);

function isCool(name) {
    if(name === 'wes') {
      var cool = true;
    }
    console.log(cool);
    return cool;
}

const dog = 'snickers';
function logDog() {
  console.log(dog);
}
function go2() {
  const dog = 'sunny';
  logDog();
}
go2();