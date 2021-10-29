let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let image = ["sunday.jpeg", "monday.jpeg", "tuesday.jpeg", "wednesday.jpeg", "thursday.jpeg", "friday.jpeg", "saturday.jpeg"];
let prevday;

for (i = 0; i < document.getElementsByClassName("day").length; i++) {
  document.getElementsByClassName("day")[i].innerHTML = "<h2>" + days[i] + "</h2>";

  document.getElementsByClassName("day")[i].addEventListener('click', setActive, false);

  document.getElementsByClassName("day")[i].id = days[i];

}


document.getElementById("sunday").classList.toggle('active');
// document.getElementById("image").innerHTML = "<img src= 'assets/" + image[0] + "' >";

function setActive(e){

  prevday = document.getElementsByClassName("active")[0].id;
  if(prevday != undefined) {
    document.getElementById(prevday).classList.toggle("active");
    document.getElementById(prevday + "dotw").style.display = "none";

  }

  if (e.target.tagName == "H2") {
    e.target.parentNode.classList.toggle("active");
  }else{
    e.target.classList.toggle("active");
  }

day = document.getElementsByClassName("active")[0].id;
  document.getElementById(day + "dotw").style.display = "block";
  document.getElementById("image").innerHTML = "<img src='assets/" + day + ".jpeg'>"

}
