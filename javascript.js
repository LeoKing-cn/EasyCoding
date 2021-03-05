// js基本数据类型
Number String Boolean null undefined Object Symbol BigInt
// 引用类型
Object : function Array Date 

//  对象是通过函数创建的，而函数又是一种对象。

// js创建对象
// 1.new+object
var person = new Object();
person.name = "";
// 2.字面式-是一种语法糖本质还是第一种
var person = {name:""};
// 3.构造函数
function Person(name){
	this.name = name;
}
var person1 = new Person("");
// 4.原型模式
Person.prototype.name = "";
// 5.es6类的方式
class Person{
	var name="",
	make(){
		
	}
}

// js创建数组
// 1.常规方式
var arr = new Array("1");
// 2.字面
var arr = [];
// 3.es6创建数组
var arr = Array.of(3);
var arr = Array.from(arguments);


// js