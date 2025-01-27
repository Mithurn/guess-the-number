'use strict';
 
// console.log(document.querySelector('.details').textContent);
// document.querySelector('.details').textContent='correct number';

// document.querySelector('.question-mark').textContent=15;
// document.querySelector('.score').textContent=8;

// document.querySelector('.input-box').value=8;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;


document.querySelector('.check-button').addEventListener
('click',function(){
  const guess = Number(document.querySelector ('.input-box').value);


//if else condition

    if(guess == 0){
  console.log(document.querySelector('.details').textContent='no number');
}else if (guess == secretNumber){
  console.log(document.querySelector('.details').textContent='correct number!');
  console.log(document.querySelector('.title').textContent= 'you fucking winn!!!');  
  document.querySelector('.body').style.backgroundColor = '#60b347';
  document.querySelector('.question-mark').textContent=secretNumber;

  if(score>highscore){
    console.log(document.querySelector('.high-score').textContent=document.querySelector('.score').textContent=score);
  }
}else if (guess < secretNumber ){
  console.log(document.querySelector('.details').textContent='go bigger');
  score--;
  document.querySelector('.score').textContent=score;
  if(score<0 ){
    document.querySelector('.score').textContent=0;
    console.log(document.querySelector('.title').textContent= 'you fucking lose!!!');  

    console.log(document.querySelector('.details').textContent='Loserrrrr');
    document.querySelector('.body').style.backgroundColor = 'red';

  }
}else if(guess>secretNumber){
  console.log(document.querySelector('.details').textContent='go lower');
  score--;
  document.querySelector('.score').textContent=score;
  if(score<0){
    document.querySelector('.score').textContent=0;
    console.log(document.querySelector('.title').textContent= 'you fucking lose!!!');  

    console.log(document.querySelector('.details').textContent='Loserrrrr');
    document.querySelector('.body').style.backgroundColor = 'red';


  }
}
    }
  );


// playing again

document.querySelector('.again-button').addEventListener
('click',function(){
  score=20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.details').textContent='start guessing';
  document.querySelector('.score').textContent=score;
  document.querySelector('.question-mark').textContent='?';
 document.querySelector('.input-box').value='';
 console.log(document.querySelector('.title').textContent= 'guess the number');  
  document.querySelector('.body').style.backgroundColor = ' rgb(31, 6, 50)';
})



