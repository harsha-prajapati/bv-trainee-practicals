const button=document.querySelector('button');
// button.onclick=function()
// {
//     // 
// }

const onClickButtonHandler=()=>{
console.log('clicked')
}
// button.onclick=onClickButtonHandler();


button.addEventListener('click',onClickButtonHandler);