// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent="correctNumber";
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;
// console.log(document.querySelector('.guess').value);
// console.log(document.querySelector('.guess').value=22);

//Handling a click event
const number=Math.trunc(Math.random()*20)+1;
let score=20;
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);
    if(!guess)
    {
        document.querySelector('.message').textContent="no number!"
    }else if(guess===number)
    {
        document.querySelector('.message').textContent="you are correct!!!";
        document.querySelector('.number').textContent=number;
        document.querySelector('body').style.backgroundColor ='#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').style.height='15rem';
    }else if(guess>number)
    {
        if(score>1)
        {
            document.querySelector('.message').textContent="number is too High";
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent="You lost the game";
            document.querySelector('.score').textContent=0;
        }
      
    }else if(guess<=number){
        if(score>1)
        {
            document.querySelector('.message').textContent="number is too low";
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.score').textContent=0;
        };
    }
});
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    const number=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent="Start guessing.....";
    document.querySelector('.score').textContent=score;
    document.querySelector('.guess').value='';
    document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor ='#222';
    document.querySelector('.number').style.width='15rem';

});