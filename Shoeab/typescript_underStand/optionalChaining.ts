//optional chaining
const  fetchData={
    id:'A121',
    name:'shoeab',
    job:{title:'softwareEngineer',description:'trainee react'},
}
// console.log(fetchData.job && fetchData.job.title); use in javascript for avoiding runtime error
    console.log(fetchData?.job?.title);