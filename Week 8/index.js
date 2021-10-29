// //generate random number
// console.log(Math.random(10));
//
// //generate random int
// console.log(Math.floor(Math.random() * 10));
//
// console.log(document.getElementsByClassName("options"));

const images = ["cat.jpeg", "dog.jpeg", "hamster.jpeg"];
const title = ["cat", "dog", "hamster"];


for (i = 0; i < document.getElementsByClassName("options").length; i++) {
  document.getElementsByClassName('label')[i].innerHTML = title[i];

  // console.log(document.getElementsByClassName("options")[i].innerHTML);

  document.getElementsByClassName("options")[i].innerHTML += '<img src="assets/' + images[i] + ' ">';
//set the id of each section
  document.getElementsByClassName("options")[i].setAttribute("id", title[i]);
//call change color with the name of the id
  document.getElementsByClassName("options")[i].addEventListener("click", function() {
    changeColor(this.id)
  });
}


function changeColor(sectionID) {
  console.log(sectionID);
  document.getElementById(sectionID).classList.toggle("blue");

}
