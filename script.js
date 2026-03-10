// TIMER HUBUNGAN

const startDate = new Date("October 4, 2025 00:00:00").getTime();

function updateTimer(){

const now = new Date().getTime();

const distance = now - startDate;

const days = Math.floor(distance / (1000*60*60*24));

const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance % (1000*60*60))/(1000*60));

const seconds = Math.floor((distance % (1000*60))/1000);

document.getElementById("timer").innerHTML =
"Kita bersama selama " +
days + " hari " +
hours + " jam " +
minutes + " menit " +
seconds + " detik ❤️";

}

setInterval(updateTimer,1000);


// LOVE LETTER

function openLetter(){

const letter = document.getElementById("letter");

if(letter.style.display === "block"){

letter.style.display="none";

}else{

letter.style.display="block";

}

}


// TOMBOL SAYANG + CONFETTI

function sayLove(){

for(let i=0;i<100;i++){

createHeart();

}

alert("Aku juga sayang kamu ❤️");

}


function createHeart(){

const heart = document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-20px";

heart.style.fontSize="20px";

heart.style.animation="fall 3s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},3000);

}


// ANIMASI JATUH

const style = document.createElement('style');

style.innerHTML = `
@keyframes fall{
to{
transform:translateY(100vh);
opacity:0;
}
}
`;

document.head.appendChild(style);


// GALAXY BACKGROUND

const canvas = document.getElementById("galaxy");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i=0;i<200;i++){

stars.push({

x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*2,
d:Math.random()*0.5

});

}

function drawStars(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="white";

for(let i=0;i<stars.length;i++){

let s = stars[i];

ctx.beginPath();

ctx.arc(s.x,s.y,s.r,0,Math.PI*2);

ctx.fill();

}

moveStars();

}

function moveStars(){

for(let i=0;i<stars.length;i++){

let s = stars[i];

s.y += s.d;

if(s.y > canvas.height){

s.y = 0;
s.x = Math.random()*canvas.width;

}

}

}

function animate(){

drawStars();

requestAnimationFrame(animate);

}

animate();