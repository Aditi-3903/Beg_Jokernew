let hero = document.querySelector("#hero");

let info = document.querySelector(".info");


let gallary = document.querySelector(".galary");

let car = document.querySelector("#tar");

let carinfo = document.querySelector(".carinfo");

let heading = document.querySelector(".carinfo h1");


let para = document.querySelector(".carinfo p");

//   let proicn = document.querySelector("#Pro");
 let nav = document.querySelector(".nav");
 let menuicn = document.querySelector("#menu");
 let dash = document.querySelector(".dashbordOne");
let proicn = document.querySelector("#Pro");

 

        menuicn.addEventListener("click",()=>{

          nav.classList.toggle("active");
        });


         proicn.addEventListener("click", () => {
 
    //   dash.style.display = "flex";
   dash.classList.toggle("show");
   let gh = JSON.parse(localStorage.getItem("usrData"));
   let naav = document.querySelector("#naav");
    let adres = document.querySelector("#gao");
    let age = document.querySelector("#vaay");
    let kaam = document.querySelector("#kaam");
    let gen = document.querySelector("#gen");

   

        naav.textContent = `Name: ${gh.Name}`;
        adres.textContent =`Address ${gh.Address}`;
        mail.textContent = `Email: ${gh.Email}`;
        age.textContent = `Age: ${gh.Age}`;
        kaam.textContent = `Occupation: ${gh.Occupation}`;
        gen.textContent = `Gender: ${gh.Gender}`;

 });







  //  let gg = JSON.parse(localStorage.getItem("usr"));
  //   let naav = document.querySelector("#naav");
  //   let adres = document.querySelector("#gao");
  //   let age = document.querySelector("#vaay");
  //   let kaam = document.querySelector("#kaam");
  //   let gen = document.querySelector("#gen");
  //   // let Lid = document.querySelector("#Lid");
    
  //   naav.textContent = `Name: ${gg.nmm}`;
  //       adres.textContent =`Address ${gg.adrs}`;
  //       mail.textContent = `Email: ${gg.email}`;
  //       age.textContent = `Age: ${gg.age}`;

  //       kaam.textContent = `Occupation: ${gg.occupation}`;
  //       gen.textContent = `Gender: ${gg.gender}`;
   

//  });

 
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

