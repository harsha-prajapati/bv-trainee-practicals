import { async } from "regenerator-runtime";
import { API_URL } from "./config";
import { getJSON } from "./helper";
export const state = {
    recipe: {},
};

export const loadRecipe = async function (id)
 {
    try {
        const data=await getJSON(`${API_URL}${id}`);
       

        const { recipe } = data.data;
        state.recipe = {
        
                    title:recipe.title,
                    price:recipe.price,
                    category:recipe.category,
                    description:recipe.description,
                    image:recipe.image_url
        };
        console.log(state.recipe);
    }
    catch (err) {
        return alert(err);


    }

};
// export const loadSearchResults= async function(query)
// {
//     try{
//         state.search.query=query;
//         const data=await getJSON(`${API_URL}?search=${query}`);
//         console.log(data);
//         state.search.result=data.data.recipes.map(rec=>{
//             return {
//                 id: rec.id,
//             title: rec.title,
//             publisher: rec.publisher,
//             image: rec.image_url,

//             }
            
//         })
//         console.log(state.search.result)
//     }catch(err)
//     {
//         alert(err);
//     }
    
// };
// loadSearchResults('pizza');