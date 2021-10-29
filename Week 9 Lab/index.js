let weekdays = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let images = ["sunday.jpeg", "monday.jpeg", "tuesday.jpeg", "wednesday.jpeg", "thursday.jpeg", "friday.jpeg", "saturday.jpeg"];
let prevday; //used to remember where the old tab is

//populate divs
for (i = 0; i < document.getElementsByClassName("weekday").length; i++) {
  // console.log(weekdays[i]);
  document.getElementsByClassName("weekday")[i].innerHTML = "<h2>" + weekdays[i] + "<h2>";

  document.getElementsByClassName("weekday")[i].addEventListener('click', setActive, false);

  document.getElementsByClassName("weekday")[i].id = weekdays[i]; //adding weekday ids to tab divs
}

document.getElementById('sunday').classList.toggle('active');
document.getElementById("image").innerHTML = "<img src='assets/" + images[0] + "' >";


function setActive(e) {

  prevday = document.getElementsByClassName("active")[0].id;

  if (prevday != undefined) {
    document.getElementById(prevday).classList.toggle("active");
    document.getElementById(prevday + "todo").style.display = "none";

  }

  if (e.target.tagName == "H2") {

    e.target.parentNode.classList.toggle("active");
  } else {
    e.target.classList.toggle("active");
  }

  weekday = document.getElementsByClassName('active')[0].id;
  console.log(weekday);
  document.getElementById(weekday + "todo").style.display = "block";
  document.getElementById('image').innerHTML = "<img src= 'assets/" + weekday + ".jpeg'>";
}

//survey
document.getElementById("stressed").addEventListener("click", buttonStressed);
document.getElementById("angry").addEventListener("click", buttonAngry);
document.getElementById("sad").addEventListener("click", buttonSad);
document.getElementById("meh").addEventListener("click", buttonMeh);
document.getElementById("okay").addEventListener("click", buttonOkay);
document.getElementById("great").addEventListener("click", buttonGreat);



function buttonStressed() {
  alert("I'm sorry you're stressed today. Treat yourself today when you get the chance.");
  document.getElementById("survey").style.backgroundColor = "yellow";
}

function buttonAngry() {
  alert("Take a deep breath... go on a walk. Calm down. Go sweat that frustration out at the gym.");
  document.getElementById("survey").style.backgroundColor = "red";
}

function buttonSad() {
  alert("Keep your head up. Know that nothing is permanent and you will be okay in the long run.");
  document.getElementById("survey").style.backgroundColor = "darkblue";
}

function buttonMeh() {
  alert("Get outside! Do something fun RIGHT NOW!");
  document.getElementById("survey").style.backgroundColor = "beige";
}

function buttonOkay() {
  alert("Not every day can be the best. I'm just glad it's not a bad one.");
  document.getElementById("survey").style.backgroundColor = "lightgreen";
}

function buttonGreat() {
  alert("YAY!!! Happy for you :)");
  document.getElementById("survey").style.backgroundColor = "green";
}







// let meals = ["breakfast", "lunch", "dinner"];
// let images = ["breakfast.png", "lunch.png", "dinner.png"];
// let prevmeal;
//
// for (i = 0; i < document.getElementsByClassName("meal").length; i++) {
//   document.getElementsByClassName("meal")[i].innerHTML = "<h2>" + meals[i] + "</h2>";
//
//   document.getElementsByClassName("meal")[i].addEventListener('click', setActive, false);
//
//   document.getElementsByClassName("meal")[i].id = meals[i];
//
//   // document.getElementById("one").addEventListener('click', setActiveButton, false);
//   // document.getElementById("two").addEventListener('click', setActiveButton, false);

// }
//
// document.getElementById("breakfast").classList.toggle('active');
// document.getElementById("image").innerHTML = "<img src= 'assets/" + images[0] + "' >";
//
// function setActive(e) {
//
//
//   prevmeal = document.getElementsByClassName("active")[0].id;
//   if (prevmeal != undefined) {
//     document.getElementById(prevmeal).classList.toggle("active");
//     document.getElementById(prevmeal + "menu").style.display = "none";
//
//
//   }
//   // console.log("previous meal: " + prevmeal);
//   // prevmeal.classList.toggle('active');
//
//
//   if (e.target.tagName == "H2") {
//     e.target.parentNode.classList.toggle("active");
//   } else {
//     e.target.classList.toggle("active");
//   }
//
//   meal = document.getElementsByClassName("active")[0].id;
//     console.log(meal);
//     document.getElementById(meal + "menu").style.display = "block";
//     document.getElementById("image").innerHTML = "<img src='assets/" + meal + ".png'>";
//
//
// }
//
//
// // function setActiveButton(e){
// //   e.target.classList.toggle("active");
// // }
