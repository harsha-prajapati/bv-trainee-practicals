// const getCountryData=function(country){
//     const request=new XMLHttpRequest();
//     request.open('GET',`https://restcountries.com/v2/name/${country}`);
//     request.send();

//     request.addEventListener('load',function(){
//         const [data]=JSON.parse(this.responseText);
//         console.log(data);

//         const html=`
//         <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>${(+data.population/1000000).toFixed(1)}</span>people</p>
//              <p class="country__row"><span>${data.languages[0].name}</span>LANG</p>
//              <p class="country__row"><span></span>${data.currencies[0].name}</p>
//           </div>
//         </article>
//         `;

//         countriesContainer.insertAdjacentHTML('beforeend',html);
//         countriesContainer.style.opacity=1;
//     });
// };
// const btn=document.querySelector('.btn-country');

//synchronous
//asynchronous
//get
//put
//post
//delete
//promise


// const countriesContainer=document.querySelector('.countries');
// const btn=document.querySelector(".btn-country");


// const renderCountry=function(data,className=' '){
   
//         const html=`
//         <article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>${(+data.population/1000000).toFixed(1)}</span>people</p>
//              <p class="country__row"><span>${data.languages[0].name}</span></p>
//              <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>
//         `;

//         countriesContainer.insertAdjacentHTML('beforeend',html);
//         countriesContainer.style.opacity=1;
//     };




// const getCountryAndNeighbour=function(country){
//     const request=new XMLHttpRequest();
//     request.open('GET',`https://restcountries.com/v2/name/${country}`);
//     request.send();

//     request.addEventListener('load',function(){
//         const [data]=JSON.parse(this.responseText);
//         console.log(this.responseText);
        
      
//     //render country 
//     renderCountry(data);

//     //get neighbor country 2
//   //const [neighbour] =data.borders;

//   const neighbour1 = data.borders;

//   for (let each of neighbour1) {
//       let neighbour = each;
//       if (!neighbour) return;

//         const request2=new XMLHttpRequest();
//         request2.open('GET',`https://restcountries.com/v2/alpha/${neighbour}`);
//         request2.send();

//         request2.addEventListener('load',function(){
//         const data2=JSON.parse(this.responseText);
//          //console.log(data2);
//         renderCountry(data2,'neighbour');

// });
//   }

// });
// };

//getCountryAndNeighbour('bharat');



//call backs

setTimeout(()=>{
    console.log("20 secs");
    setTimeout(()=>{
        console.log("10 secs");
        setTimeout(()=>{
            console.log("5 secs");
            },2000)
    },1000)
},3000);
//.....................................................................

//................promises .................................
//Promise is a way to handle Asynchronous operations.(container or placeholder for asynchronous )
//1.pending......neither fullfilled nor rejected
//2.fulfilled.....operation completed sucessfuly
//3.Rejected....operation failed.


//promise chaining...
//Combining multiple .then() or .catch() to a single promise is called promise chaining.
//................................................................
console.log("test start");
setTimeout(()=>console.log('0 seec timer'),0);
Promise.resolve('Resolved promise 1').then(res=>
    console.log(res));
  

Promise.resolve('Resolved promise 2').then(res=>{
  for (let i=0;i<100;i++){
    console.log(res);
  }
});

console.log("test end");

//..............................................................

const lotteryPromise=new Promise(function(resolve,reject){
  console.log('Lotter draw is happening');
setTimeout(function(){
  if (Math.random()>=0.5){
resolve('you win ');
  }else{
reject(new Error('you lost money'));
  }
} , 1000);
});
lotteryPromise.then(res=>console.log(res)).
catch(err=>console.error(err));

//.................async,await............
//async makes function return  a promise.
//await makes a function wait for a promise.only used inside an async function.
//it passes the execution and wait for resolved promise 