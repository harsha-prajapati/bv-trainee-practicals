const store=document.getElementById('store_button');
const retrive=document.getElementById('retrieve_button');
// console.log('hello');
const userNm='A1222';
const user={
    nameof:'shoeabPatel',
    city:'jalgaon',
    hobbies:['sports','travelling']
}
store.addEventListener('click',()=>{
    sessionStorage.setItem('uid',userNm)
    // localStorage.setItem('name',userNm);
    localStorage.setItem('user',JSON.stringify(user));

})
retrive.addEventListener('click',()=>{
    const extract=sessionStorage.getItem('uid');
    // const extract=localStorage.getItem('name');
    const extractedUser=JSON.parse(localStorage.getItem('user'));
    console.log(extractedUser);
    if(extract)
    {
        console.log('extracted id'+extract)
    }
    else
    {
        console.log('no id occured');
    }
})


// const store=document.getElementById('store_button');
// const retrive=document.getElementById('retrieve_button');
// const userNm='Shoeab';
// // console.log('hello')
// const user={
//     nameof:'shoeabPatel',
//     city:'jalgaon',
//     hobbies:['sports','travelling']
// }
// store.addEventListener('click',()=>{
   
//     document.cookie=`uNm=${userNm}`;
//     document.cookie=`user=${JSON.stringify(user)}`;

// })

// retrive.addEventListener('click',()=>{
//    const cookieData= console.log(document.cookie);
//    });
