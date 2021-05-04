console.log("this is ex1.js");

var firstName = "David";
var lastName = "Piruzashvili";
var age = 2021;
age -= 1983;

var message = "Hi, my name is " + firstName +" " + lastName + " ,I'm" +" " + age.toString() + " " + "years old and I'm learning Javascript.";

document.getElementById("student_message").innerHTML = message;

// #3

var num_1 = 101;
num_1 += 7;
document.getElementById("result").innerHTML = (num_1 / 2).toFixed(2);

// var num1 = parseInt( document.getElementById("num_1").innerHTML);
// var num2 = parseInt( document.getElementById("num_2").innerHTML);
// var average = (num1 + num2) / 2;
// average = average.toFixed(2);
// document.getElementById("result").innerHTML = average;


// #4

var phone1 = "988866552";
var phone2 = "99087612366";
var phone3 = 876543123;

//console.log(phone1 == 9);
//console.log(phone2 == 9);
//console.log(string == 9);

var string = phone3.toString();

if(phone1.length == 9){
	console.log("phone1" + " valid");
}else{
		console.log("phone1 "+ " invalid");
}
if(phone2.length  == 9){
	console.log("phone2" + " valid");
}else{
	console.log("phone2" + " invalid");
}
if(string.length == 9){
	console.log("phone3", " valid");
}else{
		console.log("phone3" + " invalid");
}


// #5
var power = Math.pow(32,6);
console.log("result is = ", power );

// #6
var quantity = "25";
    var number = 6;
    var pressure;
    var temperature = null;

    console.log(quantity += quantity);
    console.log( (7+5) / number + 2 );
    console.log(pressure);
    console.log(temperature);
    console.log(typeof pressure);
    console.log(typeof temperature);

// # 7
		var url_1 = "www.udemy.com";
		document.getElementById("url_2").innerHTML = url_1.replace(url_1, " https://"+ url_1);

	// or
	// var url1 = "https://" + document.getElementById("url_1").innerHTML;
	// document.getElementById("url_2").innerHTML = url1;

	// var url2 = (document.getElementById("url_3").innerHTML).replace("https://", "");
	// document.getElementById("url_4").innerHTML = url2;


		var url_2 = "https://www.google.com";
		document.getElementById("url_4").innerHTML = url_2.replace("https://", "");
