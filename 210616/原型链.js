function F() { }
Object.prototype.a=function(){
    console.log("a")
}

Function.prototype.b=function(){
    console.log('b')
}

let f=new F();
f.a()
// f.b() f不是Function的实例，因为它本来就不是构造函数，调用的是function的原型链上的相关属性和方法，只能访问到Object的原型链，所以f.a()输出a，而f.b()报错
F.a()
F.b()
// console.log('asdfasdf')
