

// console.log ( document.getElementsByClassName("options") );
// console.log( document.getElementsByClassName("options")[0].innerHTML);
const images = ["pizza.jpg", "salad.jpg", "sushi.jpg"];
const title = ["pizza", "salad", "sushi"];

for(i=0;i<document.getElementsByClassName('options').length;i++){
  document.getElementsByClassName('label')[i].innerHTML = title[i];

  // console.log(document.getElementsByClassName("options")[i].innerHTML);

  // document.getElementsByClassName("options")[i].innerHTML += "<img src='assets/pizza.jpg'>";

  document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/' + images[i] + ' "> ';
  //set the id of each section
  document.getElementsByClassName("options")[i].setAttribute("id", title[i]);
  //call changeColor with the ID of the section when clicked
  document.getElementsByClassName("options")[i].addEventListener("click", function(){changeColor(this.id)});
}

function changeColor(sectionID){
  console.log(sectionID);
  document.getElementById(sectionID).classList.toggle("blue");
}
