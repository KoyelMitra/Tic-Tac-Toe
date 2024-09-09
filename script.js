let boxs=document.querySelectorAll("#box");
let reset=document.querySelector("#reset");
let newButton=document.querySelector("#new-btn");
let msgcontain=document.querySelector(".msg");
let msg=document.querySelector("#msg")
let turn=true;//false
const winpatterns=[ 
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6] ];
const resetGame=()=>{
    turn0=true;
    enableBoxs();
    msgcontain.classList.add("hide");
}  
boxs.forEach(box => {
box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turn){
        box.innerText="O";
        box.style.color="red";
        turn=false;
    }
    else{
        box.innerText="X";
        box.style.color="yellow";
        turn=true;
    }
    box.disabled=true;
    count++;
    let isWinner=checkWinner();
    if (count === 9 && !isWinner) {
        gameDraw();
      }
});   
});
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgcontain.classList.remove("hide");
    disableBoxes();
  };
const  enableBoxs=()=>{
    for (let box of boxs){
        box.disabled=false;
        box.innerText="";
    }
}
const  disableBoxs=()=>{
    for (let box of boxs){
        box.disabled=true;
    }
}
const showwinner=(winner)=>{
  msg.innerText=`Congratulation, Winner is ${winner}`;
  msgcontain.classList.remove("hide");
  disableBoxs();
}
const checkWinner =()=>{
for (let pattern of winpatterns){
    pos1=boxs[pattern[0]].innerText;
    pos2=boxs[pattern[1]].innerText;
    pos3=boxs[pattern[2]].innerText;
    if(pos1 !="" && pos2 !="" && pos3 !="")
    {
        if(pos1===pos2 && pos2===pos3)
        { console.log("winner",pos1);

            showwinner(pos1);
        }

    }
}
};
newButton.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);