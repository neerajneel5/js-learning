(function(){

	var DEBUG = true
	// creating obj/ reference variables using built in constructor
	var obj = new Object()
	obj.fname = 'Mango'
	obj.sweet = 8
	obj.color = "yellow"
	// console.log(obj)


	//creating obj using user defined constructor->> when required to creatate more objects
	var Fruit = function(fname,color,sweet){
		this.fname = fname
		this.color = color
		this.sweet = sweet
	}
	var fruit = new Fruit('mango','yellow',8)
	// console.log(fruit)


	// creating obj using literals

	var obj = {}
	obj.fname = 'Mango'
	obj.sweet = 8
	obj.color = 'yellow'
	// console.log(obj)


	// obj property name could be string/ number(not safe to use it)

	var person = {
		'name':'Neel',
		age:23,
		100:1
	}
	// console.log(person[100])// person.100 is wrong


	// 2-Prototype pattern for creating objects

	function Employee(){}
	Employee.prototype.firstName = "Neel"
	console.log("Employee", Employee.prototype)

	//2 way to access a properties 1- using dot 2- bracket notation
	//if any property doesn't exists, then returned value is "undefined"


	// two types of properties every objets have
	//1- own properties
	//2- inherited properties(in prototype object)
	var school = {schoolName:'MIT'}
	console.log("schoolName" in school)
	console.log("schoolType" in school)
	console.log("toString" in school)
	console.log(school.hasOwnProperty('schoolName'))
	console.log(school.hasOwnProperty('toString'))


	// looping through object's properties
	// for / for in loop


	var school = {
		'name':"MIT",
		'isAccredited':true,
		'location':'Massachusetts'
	}

	for(var item in school){
		console.log(school[''+item])
	}

	// Deleting Properties of an object (delete operator)
	// can't delete- inherited & Global object properties
	var christmasList = {
		'mike':'book',
		'jason':'sweater'
	}	

	console.log(delete christmasList.mike)
	for(var property in christmasList)
		console.log(property)


	// Selialize(to transfer obj via Http ) & Deserialize(convert it obj from string)
	//use JSON.stringify() to Serialize
	//user JSON.pares() to deserialize

	DEBUG && console.log(school = JSON.stringify(school))
	DEBUG && console.log(JSON.parse(school))


	// OOP in javascript
	/*
		only eencapsulation & inheritance is apply in js
		Encapsulation:This allows us to abstract or localize specific set of functionalities on objects.
		Inheritance:
	*/

	//Encapsulation

	function User(name,email){
		this.name=name
		this.email=email
		this.quizeScore=[]
		this.currentScore = 0
	}

	User.prototype = {
		constructor: User,
		saveScore:function(score){
			this.quizeScore.push(score)
		},
		showNameAndScore:function(){
			var score = (this.quizeScore.length > 0 ? this.quizeScore.join(","):"No Score yet!")
			return this.name + "score" + score;
		},
		changeEmail:function(newEmail){
			this.email = newEmail
			return "New Email saved"+ this.email
		}
	}

	// instance of user
	var firstuser = new User("neel","neeraj.neel5@gmail.com")
	firstuser.saveScore(15)
	firstuser.saveScore(35)
	console.log(firstuser)
}()); 