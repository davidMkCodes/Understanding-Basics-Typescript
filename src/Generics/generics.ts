// const names: Array<string> = ['Max', 'David'];
// name[0].split(' ');

// const promise = new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This is done!');
//     }, 2000);
// });
//
// promise.then(data => {
//     data.split(' ');
// });

//---------------------

function merge<T extends object, U extends object>(objA: T, objB: U){
    return {objA, objB};
};

const mergedObj = merge({name: 'Max', hobbies: ['Sports']}, {age: 30});
console.log(mergedObj);

//----------------------

interface Lengthy{
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T){
    let descriptionText = 'Got no value';

    if(element.length === 1)
        descriptionText = 'Got 1 element';
    else if(element.length > 0)
        descriptionText = 'Got ' + element.length + ' elements';


    return [element, descriptionText];
}

console.log(countAndDescribe(['Sports', 'Cooking']));

//----------------------

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Max'}, 'name');

//-----------------------

class DataStorage<T extends string | number | boolean>{
    private data: T[] = [];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        if(this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('David');
textStorage.addItem('Jimmy');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.addItem(30);
console.log(numberStorage.getItems());

// const objStorage = new DataStorage<object>();
// objStorage.addItem({name: 'David'});
// objStorage.addItem({name: 'Jimmy'});
// objStorage.removeItem({name: 'David'});
// console.log(objStorage.getItems());

//---------------


interface CourseGoal{
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title:string,
    description: string,
    date:Date
): CourseGoal{
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
};

const names: Readonly<string[]> = ['David', 'Sports'];
// names.push('Jimmy');
// names.pop();
