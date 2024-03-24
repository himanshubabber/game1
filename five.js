let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");



const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const draw = () => {
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
  };
let compchoicef=()=>{
    let option=["rock","paper","scissors"];
    let idx=Math.floor(Math.random()*3);
    return option[idx];
}
let showresults=(userwin,userchoice,compchoice)=>{
if(userwin){
    userscore++;
    userscorepara.innerText = userscore;
    msg.innerText = `You win! Your ${userchoice} beats ${compchoice}😊🎉🎉`;
    msg.style.backgroundColor = "green";
}
else{
    compscore++;
    compscorepara.innerText = compscore;
    compscorepara.innerText = compscore;
    msg.innerText = `You lost. ${compchoice} beats your ${userchoice}😢`;
    msg.style.backgroundColor = "red";
}


}
let playgame=(userchoice)=>{
  let compchoice=compchoicef();
   
  if(userchoice===compchoice){
    draw();
  }
  else {
    let userwin=true;
    if(userchoice==="rock"){
     userwin= compchoice==="paper" ? false : true;

    }
    else if(userchoice==="paper"){
        userwin= compchoice==="rock" ? true : false;
    }
    else{
        //user choice scissor
        
        userwin= compchoice==="rock" ? false : true;
    }
    showresults(userwin,userchoice,compchoice);
  }



  
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    let  userchoice=choice.getAttribute("id");
     console.log("userchoice ",userchoice);
    playgame(userchoice);
    });
});


let btn1=document.querySelector("#id2");
let currmode="light";
btn1.addEventListener("click",(e)=>{
    console.log("you are trying to change mode");
    if(currmode==="light"){
        currmode="dark";
        // document.querySelector("body").style.background="black";
        document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
    }
    else{
        currmode="light";
        // document.querySelector("body").style.background="white";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
    console.log(currmode);
});