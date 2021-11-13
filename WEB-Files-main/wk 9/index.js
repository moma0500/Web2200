const meals = ["lunch", "dinner", "brunch"];
let meal = "dinner";

for(i=0;i<meals.length;i++){
  document.getElementsByClassName("mtype")[i].innerHTML = "<h2>" + meals[i] + "</h2>";
  document.getElementsByClassName("mtype")[i].addEventListener("click", setActive, false);
  document.getElementsByClassName("mtype")[i].id = meals[i];
  console.log(i);
}


document.getElementById("image").innerHTML = "<img src='assets/" + meal + ".jpg' >"

function setActive(e){
  console.log("clicked");

  let prevmeal = document.getElementsByClassName("active")[0].id + "menu";
  console.log(prevmeal);
  document.getElementById(prevmeal).style.display = 'none';


  document.getElementsByClassName("active")[0].classList.toggle("active");


  if(e.target.tagName == "H2"){
    e.target.parentNode.classList.toggle("active");
    meal = e.target.innerHTML;
  }else{
    e.target.classList.toggle("active");
    meal = e.target.firstChild.innerHTML;
  }
  console.log(meal);
  document.getElementById(meal + "menu").style.display = "block";
  document.getElementById("image").innerHTML = "<img src='assets/" + meal + ".jpg' >"

}
