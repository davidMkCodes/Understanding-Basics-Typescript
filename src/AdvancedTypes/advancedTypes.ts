type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Max',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric;

const t: Universal = 25;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable){
    if(typeof a === 'string' || typeof b === 'string')
        return a.toString() + b.toString();

    return a + b;
}

const result = add('David',' M');
result.split(' ');

const fetchedUserData = {
    id: 'u1',
    name: 'Max',
    job: {title: 'CEO', description: 'My own company'}
};

console.log(fetchedUserData.job && fetchedUserData.job.title);

const userInput = '';
const storedData = userInput ?? 'DEFAULT';
console.log(storedData);


type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee){
    console.log('Name: ' + emp.name);

    if('privileges' in emp)
        console.log('Privileges: ' + emp.privileges);

    if('startDate' in emp)
        console.log('Start Date: ' + emp.startDate);
}

printEmployeeInformation(e1);

class Car{
    drive(){
        console.log('Driving');
    }
}

class Truck{
    drive(){
        console.log('Driving a truck...');
    }

    loadCargo(amount: number){
        console.log('Loading cargo... ' + amount);
    }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck)
        vehicle.loadCargo(1000);
}

useVehicle(v1);
useVehicle(v2);

interface Bird{
    species: 'bird';
    flyingSpeed: number;
}

interface Horse{
    species: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal){
    if(animal.species === 'bird')
        console.log('Moving with speed: ' + animal.flyingSpeed);
    else
        console.log('Moving with speed: ' + animal.runningSpeed);
}

const a1: Animal = {
    species: 'horse',
    runningSpeed: 100
}

moveAnimal(a1);

const userInputElement = document.getElementById('user-input') as HTMLInputElement;
userInputElement.value = 'Hi there!';

interface ErrorContainer{
    [prop: string] : string;
}

const errorBag: ErrorContainer = {
    email: 'Not a valid email!',
    username: 'Must start with a capital character!'
};