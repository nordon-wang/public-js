@fn1
@fn2(111)
@fn3
class MyDecorator{
  @radyonly msg = 'hello'
}

function fn1(target) {
  target.foo = 'bar'
}

function fn2(value) {
  return function (target) {
    target.count = value
  }
}

function fn3(target) {
  target.prototype.name = 'n'
}

function radyonly(target, name, descriptor) {
  console.log(target, name, descriptor);
  descriptor.writable = false
  
}

console.log(MyDecorator.foo);
console.log(MyDecorator.count);
console.log(new MyDecorator());


