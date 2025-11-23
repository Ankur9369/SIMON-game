let gameseq = [];
let userseq = [];
let level = 0;
let started = false;
let Btns = ["red", "green", "blue", "yellow"];

let h2 = document.querySelector("h2");

document.addEventListener("keydown", function () {

    if (started == false) {

        console.log("game started");
        started = true;
        levelup();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);

}

function levelup() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randoidx = Math.floor(Math.random() * 3);
    let randcolor = Btns[randoidx];

    let randBtns = document.querySelector(`.${randcolor}`);
    //console.log(randBtns);
    //console.log(randcolor);
    // console.log(randoidx);


    // to indicate flash
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randBtns);
}

function checkans(idx) {
    // console.log(" curr level", level);

    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length==gameseq.length) {
            setTimeout(levelup, 1000);
            
        }
    }
    else {
        h2.innerHTML = `game over :  your score <b>${level}</b> <br> press any key to restart`;
         document.querySelector("body").style.backgroundColor="red";
        setTimeout( function( ){
            document.querySelector("body").style.backgroundColor="white";
            
        }, 150);
        reset();
    }
} 

function btnPress() {
    

    let btn = this;
    userFlash(btn)
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length - 1);
}
let btns = document.querySelectorAll(".btn");
for (let btn of btns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
userseq=[];
gameseq=[];
level=0;
started=false;
}
