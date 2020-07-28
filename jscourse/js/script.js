// var name='janani';
// console.log(name);
// function operation(x,y,op){
// 	switch(op){
// 		case '+':
// 		   console.log('The addition of the numbers',x+y);
// 		   break;
// 		case '-':
// 		   console.log('The addition of the numbers',x-y);
// 		   break;
// 		case '*':
// 		   console.log('The addition of the numbers',x*y);
// 		   break;
// 		case '/':
// 		   console.log('The division of the number',x/y);
// 		   break;
// 		default:
// 		  console.log('The end of the calculator');
// 		  break;

// 	}

// }
// function chickenFunc(sideish){
// 		sideish=sideish || 'whatever'
// 		console.log(`the sideish is ${sideish}`);
	
	
// }
// chickenFunc('noodles');
//  chickenFunc();
//Objects in js
// var car = new Object();
// car.name="BMW"
// console.log(car.name);
// car.milege="1kmph"
// console.log(car.milege);
// car.wheel=new Object();
// car.wheel.how_many="4";
// console.log(car.wheel.how_many);
// car["logo.pic"]="bmwimg";
// console.log(car["logo.pic"]);
// console.log(car["logo"]);
// console.log(car["wheel"]);
// console.log(car);
//Object Literal



// 

//Multipler fuction


// function multiplyBy3(multiplier){
// 	var multiple =function (x){
// 		return multiplier*x;
// 	}
// 	return multiple;
// }
// var value=multiplyBy3(10);
// console.log(value(2));


// //function as an argument
// function dooperation(num,multiple){
// 	return multiple(num);
// }

// var result = dooperation(10,multiplyBy3);
// console.log(result(2));


// //call by value
// var name="janani";
// var fullName=name;
// console.log('Before updation');
// console.log(name);
// console.log(fullName);
// fullName='jana';
// console.log('After updation');
// console.log(name);
// console.log(fullName);

// //call by reference
// var car=  {
// 	name:'BMW',
// 	speed:'4kmph'
// }
// var car1= car;
// console.log('before updation');
// console.log(car);
// console.log(car1);
// car1.name='Rolls Royce';
// console.log('after updation');
// console.log(car);
// console.log(car1);

// //Function as call by value

// function car1(name){
// 	console.log('Before updation');
// 	console.log(name);
// 	name='bmw';
// 	console.log('after updation');
// 	console.log(name);

// }
// var thing1='Tesla';
// car1(thing1);
// console.log('after updation')
// console.log(thing1);

//Function as call by reference
// function car(obj1) {
// 	console.log('before updation');
// 	console.log(obj1.name);
// 	obj1.name='Rolls';
// 	console.log('after updation');
// 	console.log(obj1.name);

// }
// var value={
// 	name:'bmw'
// }
// console.log(value.name);
// car(value);
// console.log('after updation');
// console.log(value.name);

//'this 'keyword
// function Circle(radius){
// 	this.radius=radius;
// 	console.log(this);
// 	return
// }
// var obj=new Circle(2);
// console.log(obj.radius);
 
// var mountain={
//  showup(){
// 		console.log(this);
// }
	
// }
// mountain.showup();
// var name =new Array();
// name[0]='jana';
// name[1]='moorthy';
// name[2]='Rani';
// name[3]='magesh';
// name[4]=function (){
// 	console.log('my family');
// }
// name[5]={
// 	likedplaces:'kodaikanal,coutrallem'
// };
// console.log(name[5].likedplaces);
// var books=['jana',
// {
// 	fav_author:'apj',
// 	fav_book:'Infodemic'
// },
// function(){
// 	console.log('hi hello');
// }, 'comp' ]
// console.log(books[1].fav_book);
// var names=['jana','indhu','priya','sneha','suga'];
// for (var name in names){
// 	console.log(name + ":" +names[name]);
// }
// names.greetings='dharshini';
// for (var name in names){
// 	console.log(name + ":"+names[name]);
//}
//Immediately invoking function expression
(console.log('janani'));