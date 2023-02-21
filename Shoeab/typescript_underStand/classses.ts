class employee {
    // creating private class members
    private emp_Name: string;
    private age_of_emp: number;
    private role: string = "Content Writer";
    // getters to get the name of the employee
    public get name() {
       return this.emp_Name;
    }
    //  getter to get the age
    public get age() {
       return this.age_of_emp;
    }
 }
 
 // Creating the object of the Student class
 let man = new employee();
 
 // Call the getter without paranthesis
 let name_Value = man.name;
 // Print the name
 console.log("The name of the employee is " + name_Value);
 console.log("The age of the employee is " + man.age);