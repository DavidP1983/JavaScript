$.ajax({
  url: "https://restcountries.eu/rest/v2/all",
  type: "GET",
  dataType: "json",
  success: function (data) {
    console.log(data);
    countries(data);
    // countr(data);
  },
  error: function () {
    console.log("Error");
  },
});
function countries(data) {
  // console.log(country);
  for (var i = 0; i < data.length; i++) {
    var country = data[i].name;
    var capital = data[i].capital;
    var code = data[i].alpha3Code;
    // var flag = data[i].flag;
    option(country, capital, code);
    // flags(flag); // Создал таг и вставил текст
  }
}
// создал таг
function option(element, element2, element3) {
  var para = document.createElement("option");
  var node = document.createTextNode(
    element + ": " + element2 + ", " + element3
  );
  para.appendChild(node);

  var element = document.getElementById("countries");
  element.appendChild(para);
  // localStorage.setItem("flag", element4);
}

$("#countries").change(function () {
  var selected_option = $("#countries option:selected").text();
  var str = $("#countries option:selected").text();
  var last_code = str.split(" ").pop();

  localStorage.setItem("country", selected_option);
  localStorage.setItem("code", last_code);
  localStorage.setItem(
    "flag",
    "https://restcountries.eu/data/" + last_code.toLowerCase() + ".svg"
  );

  selected_item();
});

function selected_item() {
  var previousYear = new Date().getFullYear() - 1;
  $("#previousYear").text("");
  $("#selectedCountry").text("");
  $("#holidayList").html("");

  var optionValue = localStorage.getItem("country");
  var optionValue_code = localStorage.getItem("code");
  var flag = localStorage.getItem("flag");
  $("#countries option:selected").text(optionValue).val(optionValue);
  $(":selected").css("background-color", "red");

  // Я убрал лишние слова до страны
  var optionValue2 = localStorage.getItem("country");
  var country = optionValue2.indexOf(":");
  var resetCountry = optionValue2.slice(0, country);
  $("#selectedCountry").text(resetCountry);
  $("#previousYear").text(previousYear);

  //*************************************
  $("p img:first").remove();
  $("#selectedCountry").before(
    "<img style='width:50px; height:50px; padding:20px 20px  20px 20px;border-radius:50%;margin-bottom:-30px;box-shadow:0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);margin-left:20px;' src=" +
      flag +
      ">&nbsp;&nbsp;"
  );

  $.ajax({
    url:
      "https://holidayapi.com/v1/holidays?pretty&key=" +
      "20ad4a71-05cc-49ef-b174-ea3b7b5f3d27" +
      "&country=" +
      optionValue_code +
      "&year=" +
      previousYear,
    type: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);
      holiday(data);
    },
    error: function () {
      console.log("Error");
    },
  });
}

function holiday(data) {
  $("li").each(function () {
    var removeItem = this.remove();
  });
  for (var a = 0; a < data.holidays.length; a++) {
    var name = data.holidays[a].name;
    var date = data.holidays[a].date;
    console.log(name, date);
    if (data.holidays[a].public == false) {
      var x = delete data.holidays[a];
      console.log(x);
    } else if (data.holidays[a].public == true) {
      $("#holidayList li").show(5000);
      $("#holidayList").append(
        "<li style='margin-top:0.5em;display:none;'>" +
          date +
          " " +
          "<strong style='margin-left:2.5em;color:#1a1a00;text-shadow:1px 1px 3px #00cccc '>" +
          name +
          "<storng>" +
          "</li>"
      );
      $("#holidayList li:last").show(5000);
    }
  }
}

if (localStorage.country) {
  selected_item();
}

// 2

var courses =
  '[{"title": "PHP","reviews": []},{"title": "Javascript","reviews": [5,5,4.5,4,5,5,5,4.5]},{"title":"Python","reviews": [5,5,4,4,5,3,5,4,4,5]},{"title": "Machine Learning","reviews": [5,5,4.5]}]';

function average_reviews(data) {
  var obj = JSON.parse(data);
  for (var i = 0; i < obj.length; i++) {
    obj[i].average = "";
  }

  for (var a = 0; a < obj.length; a++) {
    var obj_lenght = obj[a].reviews;
    console.log(obj_lenght);
    try {
      if (!obj_lenght.length) throw "No reviews.";
      if (obj_lenght.length < 5) throw "Not enough reviews yet.";

      var calcul_aver = 0;
      for (var b = 0; b < obj_lenght.length; b++) {
        calcul_aver += obj_lenght[b];
        console.log(calcul_aver);
      }
      var array_aver = Math.round(calcul_aver / obj_lenght.length);
      obj[a].average = array_aver;
    } catch (err) {
      console.log((obj[a].average = err));
    }
  }
  return JSON.stringify(obj);
  // console.log(obj);
}
console.log(average_reviews(courses));
// var courses_json = JSON.stringify(courses);
// console.log(average_reviews(courses_json));
