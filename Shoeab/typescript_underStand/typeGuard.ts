type Admin={
    name:string;
    previlage:string[];
};
type Employee={
    name:string;
    startDate:Date;
};
type ElivatedEmployee= Admin & Employee;
const e1:ElivatedEmployee={
    name:'shoeab',
    previlage:['create-server'],
    startDate:new Date()
};
type Combinable=string|number;
// type Numeric=number|boolean;
// type Universal=Combinable & Numeric;
function add(a:Combinable,b:Combinable)
{
    if(typeof a==='string' || typeof b==='string')
    {
        return a.toString()+b.toString();
    }else{
        return a+b;
    }
}
console.log(add(4,5));
console.log(add('4',5));

type UnKnownEmp=Admin | Employee;
function unknownEmpInfo(emp:UnKnownEmp)
{
    console.log('Emoloyee Name:'+emp.name);
    if('previlage' in emp)
    {
        console.log('previlage:'+emp.previlage)
    }
    if('startDate' in emp)
    {
        console.log('StartDate:'+emp.startDate)
    }
}
unknownEmpInfo(e1)


//typeguards

class Car{
    drive()
    {
        console.log('driving...')
    }
}
class Truck{
    drive()
    {
        console.log('driving a truck...')
    }
    loadCargo(load:number)
    {
console.log('loading cargo:'+load)
    
    }
}
type Vehicle=Car|Truck;
const v1=new Car();
const v2=new Truck();
function useVehicle(vehicle:Vehicle)
{
    vehicle.drive();
    if('loadCargo' in vehicle)
    {
        vehicle.loadCargo(12333);
    }
}
useVehicle(v1);
useVehicle(v2);
