abstract class Department{
    // private id: string;
    // private name: string;
    static fiscalYear = 2020;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id;
        // this.name = name;
    }

    static createEmployee(name: string){
        return { name: name};
    }
    abstract describe(this: Department) : void;

    addEmployee(employee: string){
        this.employees.push(employee);
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department{
    admins: string[];

    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    describe(){
        console.log('IT Department - ID: '+ this.id);
    }
}

class AccountingDepartment extends Department{
    private lastReport: string;
    private static instance: AccountingDepartment;

    private constructor(id: string, private reports: string[]) {
        super(id, 'IT');
        this.lastReport = reports[0];
    }

    static getInstance(){
        if(this.instance){
            return this.instance;
        }

        this.instance = new AccountingDepartment('d2', []);
        return this.instance;
    }

    describe(){
        console.log('Accounting Department - ID: ', this.id);
    }

    get mostRecentReport(){
        if(this.lastReport)
            return this.lastReport;

        throw new Error('No Report Found');
    }

    set mostRecentReport(value:string){
        if(!value)
            throw new Error("Please pass in a valid value");

        this.addReport(value);
    }

    addEmployee(employee: string) {
        if(employee === 'Max')
            return;

        this.employees.push(employee);
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports(){
        console.log(this.reports);
    }
}

const employee1 = Department.createEmployee('Max');
const employee2 = Department.createEmployee('David');
console.log(employee1, employee2, Department.fiscalYear);

let IT = new ITDepartment("d1", ['Max']);
IT.addEmployee("Max");
IT.addEmployee("David");

IT.describe();
// IT.printEmployeeInformation()
console.log(IT);

const accounting = AccountingDepartment.getInstance();
accounting.addReport('Report #1');
// console.log(accounting.mostRecentReport);
accounting.describe();
// accounting.printReports();
console.log(accounting);
// const accountingCopy = { name: "test", describe: accounting.describe};
// accountingCopy.describe();