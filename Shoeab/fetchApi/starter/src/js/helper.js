import { TIMOUT_SEC } from "./config";
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};





export const getJSON=async function(url){
    
    
    try{
        const fetchPro=fetch(url);
        const res = await Promise.race([fetchPro,timeout(TIMOUT_SEC)]);
        const data = await res.json();
        console.log(res, data);
        if (!res.ok) throw new Error(`${res.message} (${res.status})`);
        return data;
    }catch(err)
    {
        alert(err)
    
    }
   
}
