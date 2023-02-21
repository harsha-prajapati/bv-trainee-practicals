// autobind decorator
function autobind(
    _: any,
    _2: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      }
    };
    return adjDescriptor;
  }
  
  // ProjectInput Class
  class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;
  
    constructor() {
      this.templateElement = document.getElementById(
        'project-input'
      )! as HTMLTemplateElement;
      this.hostElement = document.getElementById('app')! as HTMLDivElement;
  
      const importedNode = document.importNode(
        this.templateElement.content,
        true
      );
      this.element = importedNode.firstElementChild as HTMLFormElement;
      this.element.id = 'user-input';
  
      this.titleInputElement = this.element.querySelector(
        '#title'
      ) as HTMLInputElement;
      this.descriptionInputElement = this.element.querySelector(
        '#description'
      ) as HTMLInputElement;
      this.peopleInputElement = this.element.querySelector(
        '#people'
      ) as HTMLInputElement;
  
      this.configure();
      this.attach();
    }
  
    @autobind
    private submitHandler(event: Event) {
      event.preventDefault();
      console.log(this.titleInputElement.value);
    }
  
    private configure() {
      this.element.addEventListener('submit', this.submitHandler);
    }
  
    private attach() {
      this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
  }
  
  const prjInput = new ProjectInput();



  //abstract class
  abstract class Person
  {
    name:string;
    constructor(name:string)
    {
        this.name=name;
     
    }
    display():string{
        return 'hello how are you....'
    }
    abstract find(name:string):any;
   
  }
  class Student extends Person{
    stdId:number;
    constructor(name:string,stdId:number)
    {
        super(name);
        this.stdId=stdId;
    }
    find(name:string)
    {
        return `your name is ${name}`;
    }
  }
  const obj=new Student('shoeab',12343)
  console.log(obj.stdId);
  console.log(obj.display());
  console.log(obj.find('sakib'));