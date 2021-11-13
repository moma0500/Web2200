// console.log(document.getElementsByClassName("imtitle"));

let imtitle = ["cat", "dog", "bunny"];
let imfile = ["cat.jpg", "dog.jpg", "bunny.jpg"];
let [cat, dog, bunny] = [false, false,false];

for(i=0;i<document.getElementsByClassName("imtitle").length;i++){
  let imdir = "assets/" + imfile[i];
  console.log(imfile[i]);
  document.getElementsByClassName("imtitle")[i].innerHTML = imtitle[i];
  document.getElementsByClassName("imtile")[i].innerHTML += '<img src=' + imdir + '>';
  document.getElementsByClassName("imtile")[i].setAttribute('id', imtitle[i]);
  // document.getElementById(imtitle[i]).addEventListener("click", function(){alert(this.id)});
  document.getElementById(imtitle[i]).addEventListener("click", function(){changeColor(this.id)});
}

function changeColor(sectionID){
  console.log(sectionID);
  //document.getElementById(sectionID).style.backgroundColor = "#e68ee4";
  document.getElementById(sectionID).classList.toggle("pink");
  if(sectionID == "cat"){
    cat = !cat;
  }else if(sectionID == "dog"){
    dog = !dog;
  }else if(sectionID == "bunny"){
    bunny = !bunny;
  }
  console.log("hello");
}

document.getElementById("next").addEventListener("click", function(){buttonClicked(cat, dog, bunny)});

function buttonClicked(cat,dog,bunny){
  if(cat == true){
    if(dog==true && bunny == false){
      alert("wow, cool that you like dogs and cats, but what about bunnies?");
    }else if(dog == true && bunny == true){
      alert("yay! animal lover!");
    }else if(dog != true && bunny == true){
      alert("wow, cool that you like bunnies and cats, but what about dogs?");
    }else{
      alert("wow, cool that you like cats, but what about dogs and bunnies?");
    }}else if(dog == true){
        if(cat==false && bunny == true){
          alert("wow, cool that you like dogs and bunnies, but what about cats?");
        }else if(cat == false && bunny == false){
          alert("wow, cool that you like dogs, but what about cats and bunnies?");
        }
}else if(bunny == true){
  if(cat == false && dog == false){
  alert("wow, cool that you like bunnies, but what about cats and dogs?");
}
}else{
  alert("who hurt you?");
}
}
