let boxes = document.querySelectorAll(".box");
let audioting = new Audio("ting.mp3");
let winmusic = new Audio("music.mp3");
let gameover = new Audio("gameover.mp3");
let count1=0;
let count2=0;
console.log(boxes)
let winpattern = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]]

let turn = true;

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("clicked");
        if (box.innerText === '') {
            if (turn) {


                box.innerText = "X";
                audioting.play()
                turn = false;
               
                document.querySelector("h3").innerHTML="TURN FOR O"
            }
            else {
                box.innerText = "O";
                audioting.play()
                turn = true;
               
                document.querySelector("h3").innerHTML="TURN FOR X";
            }
        }

        checkWin();
       
    })
})

const checkWin = () => {
    for (pattern of winpattern) {
        let val0 = boxes[pattern[0]].innerText;
        let val1 = boxes[pattern[1]].innerText;
        let val2 = boxes[pattern[2]].innerText;

        if (val0 != "" && val1 != "" && val2 != "") {
            if (val0 === val1 && val1 === val2) {
                console.log("winner" ,val0);
                gameover.play();
                document.querySelector(".boximg").getElementsByTagName("img")[0].style.width="200px";
                document.querySelector("h3").innerHTML="WINNER IS  "+ val0;
                if(val0 ==='X'){
                    count1 +=1
                    document.getElementById('p1').innerHTML="PLAYER 1 : "+count1;   
                }else if(val0 ==='O' ){
                    count2 +=1
                    document.getElementById('p2').innerHTML="PLAYER 2 : "+count2;
                }
               
                

            }
        }
    }
}

let btn =document.querySelector("button")
btn.addEventListener ("click",() =>{
    boxes.forEach((box) => {
          box.innerText='';
    })
    turn = true;
    document.querySelector("h3").innerHTML="TURN FOR X"
    document.querySelector(".boximg").getElementsByTagName("img")[0].style.width="0px";

})