let hero = document.querySelector("#hero");

let info = document.querySelector(".info");


let gallary = document.querySelector(".galary");

let car = document.querySelector("#tar");

let carinfo = document.querySelector(".carinfo");

let heading = document.querySelector(".carinfo h1");


let para = document.querySelector(".carinfo p");


gallary.addEventListener("click", function(data){
  
    let img = data.target.parentNode.childNodes[1].src;
    
    let head = data.target.parentNode.childNodes[3].textContent;
    let para1 = data.target.parentNode.childNodes[5].textContent;
  
   
  if(img){

   document.getElementById("gal").click();
    document.getElementById("head").scrollIntoView({behavior:"smooth"});

    car.setAttribute("src",img);
    info.style.display = "none";
    carinfo.style.display = "flex";
    heading.textContent = head;
    para.textContent = para1;
    console.log(data)

   
  }


       car.animate(
  [
    // keyframes
    { transform: "scale(0) rotateY(6deg)" },
    { transform: "scale(1)" },
  ],
  {
    // timing options
    duration: 1000,
    iterations: 1,
  },
);
  



});