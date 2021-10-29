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
