function Fahrenheit(c){
	var sum = (9 * c / 5) + 32;
	return sum;
}


document.getElementById("convert").onclick = function(){
	var temp = document.getElementById("temp_celsius").value;
	if(temp == ""){
		alert("The temprature informed is invalid");
	}else{
	document.getElementById("temp_fahr").innerHTML = (Fahrenheit(temp)).toFixed(2);
}
document.getElementById("temp_celsius").value = "";
}

// # 2
var end = 2050;
document.getElementById("anos_copa").innerHTML = "";
for(var start = 2022; start <= end; start+=4){
	document.getElementById("anos_copa").innerHTML += "<li>" + start + "</li>";
}
 /* var currentYear = 2022;
while(currentYear <= 2050){
	document.getElementById("anos_copa").innerHTML += "<li>" + currentYear + "</li>";
	currentYear +=4;
} */


// # 3
document.getElementById("calculate").onclick = function(){
var absences = (document.getElementById("absences").value);
var grade1 = parseFloat(document.getElementById("grade1").value);
var grade2 = parseFloat(document.getElementById("grade2").value);
var totalClasse = parseFloat((absences / 20)*100);
var totalMark = parseFloat((grade1 + grade2) / 2);

if(grade1 == "" || grade2 == "" || absences == ""){
	alert("All fields must be filled");
} else{

// var text; use it to run the text
if(totalClasse >= 70 && totalMark >= 65){
	document.getElementById("result").innerHTML = "Student was approved" + "</br>" + "Grade: " + totalMark + "</br>" + "Absences: " + totalClasse +"%";
}else {
	if(totalClasse < 70 && totalMark < 65){
		document.getElementById("result").innerHTML = "Student fail: " + "</br>" + "Grade: " + totalMark + "</br>" + "Absences: " + totalClasse +"%";
	} else{
		if(totalClasse < 70 ){
			document.getElementById("result").innerHTML =
			"Student fail: " +  "Absences: " + totalClasse +"%";
		}else{
			document.getElementById("result").innerHTML =
			"Student fail: " +  "Grade: " + totalMark;
		}
	}
}
}
}



var sales = [

			 {
					 'student': 'Jason Gomes',
					 'date': '10/06/2018',
					 'amount': 34.99,
					 'refundRequested': null

			 },

			 {
					 'student': 'Carlos Blue',
					 'date': '10/06/2018',
					 'amount': 29.99,
					 'refundRequested': null

			 },

			 {
					 'student': 'Martin Heyes',
					 'date': '11/06/2018',
					 'amount': 39.99,
					 'refundRequested': '13/06/2018'

			 },

			 {
					 'student': 'Isabella Hopkins',
					 'date': '11/06/2018',
					 'amount': 29.99,
					 'refundRequested': null

			 },

			 {
					 'student': 'Andrew Walt',
					 'date': '12/06/2018',
					 'amount': 34.99,
					 'refundRequested': null

			 }

	 ];

var total=0;
	document.getElementById("course_sales").innerHTML = " ";
				for(var a = 0; a < sales.length; a++){
					var saleList = sales[a].refundRequested;
					if(saleList == null){
						document.getElementById("course_sales").innerHTML +=
						"<td>" + sales[a].student + "</td>" + "<td>" + sales[a].date + "</td>" + "<td>" + sales[a].amount + "</td>";
             total+= sales[a].amount;
						document.getElementById("total_sold").innerHTML = parseFloat(total);
					}

				}
