function Fahrenheit(c){
	var sum = (9 * c / 5) + 32;
	return sum;
}
var result1 = Fahrenheit(38);
var result2 = Fahrenheit(24);
var result3 = Fahrenheit(-1);

document.getElementById("fahr_1").innerHTML = result1;
document.getElementById("fahr_2").innerHTML = result2;
document.getElementById("fahr_3").innerHTML = result3;
//var celsius1 = parseFloat(document.getElementById("celsius_1").innerHTML);
//document.getElementById("fahr_1").innerHTML = Fahrenheit(celsius1);


// #2
var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];
document.getElementById("best_students").innerHTML = classification.slice(-3,);

// #3
var course = {
        'title': "Learn to Code in Python 3",
        'categories': ['programming', 'technology', 'python'],
        '5_stars_reviews': 420,
        '4_stars_reviews': 80,
        '3_stars_reviews': 33,
        '2_stars_reviews': 20,
        '1_stars_reviews': 4,
				'sum': function(){
					return this['5_stars_reviews'] + this['4_stars_reviews'] + this['3_stars_reviews'] + this['2_stars_reviews'] + this['1_stars_reviews'];
				}
    }

		var result = parseInt(((course['5_stars_reviews']) / (course.sum()) * 100)) ;
		// console.log(result);

document.getElementById("course_title").innerHTML = course['title'];
document.getElementById("main_category").innerHTML = course.categories[0];
document.getElementById("reviews_5_stars").innerHTML = result+"%";

// #4

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];

//FIRST SOLUTION
// var lastElement = shoppingList[shoppingList.length - 1];
// shoppingList.pop();
// shoppingList.unshift(lastElement);
//SECOND SOLUTION
shoppingList.unshift(shoppingList.pop());


shoppingList.push('Cheese');
shoppingList.push('Eggs');

console.log(shoppingList);
