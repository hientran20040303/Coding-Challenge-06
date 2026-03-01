class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `${this.name} supervises a team of ${this.teamSize} in the ${this.department} department.`;
    }
}

let employer1 = new Employee("Yutaka Nakamura", "Key Animation");
let employer2 = new Employee("Kevin Penkin", "Music Composition");
let manager1 = new Manager("Naoko Yamada", "Directing", 45);
let manager2 = new Manager("Masao Maruyama", "Production", 30);

class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        console.log("- Company Employee List -");
        this.employees.forEach(emp => {
            console.log(emp.describe());
        });
    }
}

let myCompany = new Company();

myCompany.addEmployee(employer1);
myCompany.addEmployee(employer2);
myCompany.addEmployee(manager1);
myCompany.addEmployee(manager2);

myCompany.listEmployees();