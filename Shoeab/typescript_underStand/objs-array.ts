
// const product:{
//     id: string;
//     price: number;
//     tags: string[];
//     details: {
//       title: string;
//       description: string;
//     }
//  } = 
const product={
    id: 'abc1',
    price: 12.99,
    hobbies:['sports','cooking'],
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
  }
  let favoriteAct:string[]; //using this we add only string type of data
// let favoriteAct:any[]; using any we can add any type of data 
  favoriteAct=['sports']    
  console.log(product.details);
  for(const hobby of product.hobbies)
  {
    console.log(hobby.toUpperCase());
  }