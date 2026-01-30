let button = document.querySelector(".bttn");
let reg = document.querySelector(".log");
let loig = document.querySelector("#btn");

let login = document.querySelector("#login");
let profile = document.querySelector("#phto");
 let file= document.querySelector("#file");




button.addEventListener("click", (data)=>{
    data.preventDefault();
    let form = document.querySelector(".form");
    let nmm = document.querySelector("#naam");
    let adrs = document.querySelector("#adrs");
    let age = document.querySelector("#age");
    let username = document.querySelector("#user");
     let email = document.querySelector("#email");
     let password = document.querySelector("#password");
     
    let occupation = document.querySelector('input[name="occupation"]:checked');
    let gender = document.querySelector("#selct");
    
    
 
   document.querySelector("#emailError").textContent = "";
     document.querySelector("#passwordError").textContent ="";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    let isValid = true;

    if(!emailans){
        document.querySelector("#emailError").textContent = "Email is incorrect.";
        document.querySelector("#emailError").style.display = "initial";
        isValid = false;
    }

    if (!passwordans){
        document.querySelector("#passwordError").textContent = "Password is incorrect.";
         document.querySelector("#passwordError").style.display = "initial";
            isValid = false;
    }

    if (isValid) {
        // document.querySelector("#resultMessage").textContent = "Everything is Good!";
        // setTimeout(() => {
        // window.location.href = "index.html"},2000);
         const userdata = {
        nmm: nmm.value,
        adrs: adrs.value, 
        age: age.value,
        email: email.value,
        occupation: occupation? occupation.value:"",
        gender: gender.value,
        username: username.value,
        passward: password.value
    };


    localStorage.setItem("usr", JSON.stringify(userdata));
    alert("Info Saved");
    form.style.display = "none";
    login.style.display ="flex";
    }

    
   

    // console.log(JSON.parse(localStorage.getItem("usr")));
});
 
reg.addEventListener("click", (data)=>{
    data.preventDefault();
    let form = document.querySelector(".form");
    form.style.display = "none";
    login.style.display ="flex"; 
});


loig.addEventListener("click",(data)=>{
    data.preventDefault();
   let mail = document.querySelector("#lemail");
let pass = document.querySelector("#lpassword");

    let gg = JSON.parse(localStorage.getItem("usr"));
    let naav = document.querySelector("#naav");
    let adres = document.querySelector("#gao");
    let age = document.querySelector("#vaay");
    let kaam = document.querySelector("#kaam");
    let gen = document.querySelector("#gen");
    let dash = document.querySelector(".dashbord");
    let Lid = document.querySelector("#Lid");
    
    if(Lid.value === gg.username && pass.value === gg.passward && mail.value === gg.email){

        // console.log("gg");
        dash.style.display = "flex";
        login.style.display ="none";

        // document.querySelector("img").setAttribute("src"," ");
        naav.textContent = `Name: ${gg.nmm}`;
        adres.textContent =`Address ${gg.adrs}`;
        mail.textContent = `email: ${gg.email}`;
        age.textContent = `Age: ${gg.age}`;


        kaam.textContent = `occupation: ${gg.occupation}`;
        gen.textContent = `Gender: ${gg.gender}`;
    }
    else{

        alert("You entered wrong credential");
    }
    
});

profile.addEventListener("click", ()=>{
   file.click();
   file.addEventListener("change",(val)=>{
    let prfl = val.target.parentNodes;
    console.log( val)
    let you = document.querySelector("#proimg");

    you.setAttribute("src",prfl);


   });

});




  