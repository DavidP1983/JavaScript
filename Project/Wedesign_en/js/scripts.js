// Mobile Menu
document.getElementById("hamburguer-icon").onclick = function () {
  var show = document.getElementById("sliding-header-menu-outer");
  show.classList.add("show-menu");
};

document.getElementById(
  "sliding-header-menu-close-button"
).onclick = function () {
  var show = document.getElementById("sliding-header-menu-outer");
  show.classList.remove("show-menu");
};
// About us Tab

var aboutUs = {
  Mission:
    "Duis ac leo nisi. Mauris nec ex id lorem commodo rutrum rutrum a est. Cras facilisis sit amet lectus non posuere. Nullam non magna non enim blandit elementum.",
  Vision:
    "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  Values:
    "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>",
};

var unseletectedColor = "#646872";
var seletectedColor = "#e68a00";

var tab = document.getElementsByClassName("single-tab");
for (var i = 0; i < tab.length; i++) {
  tab[i].onclick = function () {
    var val = this.innerHTML;
    // console.log(aboutUs[val]);
    document.getElementById("box-text").innerHTML = aboutUs[val];
    for (var a = 0; a < tab.length; a++) {
      tab[a].style.backgroundColor = unseletectedColor;
      // tab[a].style.fontWeight = "normal";
    }
    this.style.backgroundColor = seletectedColor;
    // this.style.fontWeight = "bold";
    this.style.transition = "1s";
  };
}

// Service slider

var ourServices = [
  {
    title: "Web design",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.",
  },

  {
    title: "Branding",
    text:
      "Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.",
  },

  {
    title: "Digital Marketing",
    text:
      "Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.",
  },
];

var prev = document.getElementById("service-previous");
var next = document.getElementById("service-next");
// console.log(next.nextSibling);
var serviceTitle = document.getElementById("service-title");
var serviceText = document.getElementById("service-text");

var currentIndex = 0;
var count = 0;

next.onclick = function () {
  // console.log(currentIndex++); //Идет счет клика на стрелку

  if (currentIndex == 1) {
    console.log(currentIndex);
    var elements = next.getElementsByTagName("p");
    next.removeChild(elements[0]);
  }

  currentIndex += 1;
  serviceTitle.innerHTML = ourServices[currentIndex].title;
  serviceText.innerHTML = ourServices[currentIndex].text;
  var color = document.getElementsByClassName(
    "service-stripe small-12 columns no-padding"
  );
  for (var i = 0; i < color.length; i++) {
    if (count == color.length - 1) {
      count += 1;
      color[i].style.backgroundColor = "#804d00"; //Branding
      color[i].style.transition = "2s";
    } else if (count > color.length - 1) {
      color[i].style.backgroundColor = "#e68a00"; //Digital
      color[i].style.transition = "2s";
    }
  }
};

prev.onclick = function () {
  if (currentIndex > 1) {
    console.log(currentIndex);
    var para = document.createElement("p");
    var node = document.createTextNode(">");
    para.appendChild(node);
    next.appendChild(para);
  }

  currentIndex -= 1;
  serviceTitle.innerHTML = ourServices[currentIndex].title;
  serviceText.innerHTML = ourServices[currentIndex].text;
  var color = document.getElementsByClassName(
    "service-stripe small-12 columns no-padding"
  );

  for (var a = 0; a < color.length; a++) {
    if (count > color.length - 1) {
      count -= 1;
      color[a].style.backgroundColor = "#804d00"; //Digital
      color[a].style.transition = "2s";
    } else if (count == color.length - 1) {
      color[a].style.backgroundColor = "#2A2D34"; //Branding
      color[a].style.transition = "2s";
    }
  }
};

// next.onclick = function(){
//   if(currentIndex == (ourServices.length -1)){
//     currentIndex=0;
//   }else{
//       currentIndex+=1;
//       // console.log(currentIndex);
//   }
//   var title = ourServices[currentIndex].title;
//   var text = ourServices[currentIndex].text;
//   serviceTitle.innerHTML = title;
//   serviceText.innerHTML = text;
// }
//
// prev.onclick = function(){
//   if(currentIndex == 0){
//     currentIndex= ourServices.length -1;
//   }else{
//       currentIndex-=1;
//   }
//
//   var title = ourServices[currentIndex].title;
//   var text = ourServices[currentIndex].text;
//   serviceTitle.innerHTML = title;
//   serviceText.innerHTML = text;
// }

// Footer
var date = new Date();
var newYear = document.getElementById("current_year");
newYear.innerHTML = "2018" + "-" + date.getFullYear();

// document.getElementById("current_year").innerHTML = new.Date().getFullYear();
