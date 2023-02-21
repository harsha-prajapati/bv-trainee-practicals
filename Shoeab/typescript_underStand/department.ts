class Department
{
    // private readonly id:string;
    // private readonly name:string;
    private employees:string[]=[];
    constructor(public readonly name:string,private  num:string)
    {   
            // this.name=name;
            // this.num=num;
    }
    describe()
    {
        console.log(`department (${this.name} ,id${this.num} )`);
    }
    addEmployee(employee:string)
    {
        this.employees.push(employee)
    }
    printEmployeeInformation()
    {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}
const accounting=new Department('accounting','A121');
// console.log(accounting);
accounting.addEmployee('shoeab');
accounting.addEmployee('Sakib');
// accounting.employees[2]='samir';
accounting.describe();
accounting.printEmployeeInformation();

// const accountCopy={name:'DUMMY',describe:accounting.describe};
// accountCopy.describe();