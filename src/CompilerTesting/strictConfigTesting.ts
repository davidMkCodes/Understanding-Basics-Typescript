let appId = 'abc';
const button = document.querySelector('button');

function addNums(n1: number, n2: number){
    if(n1+n2 > 0)
        return n1+n2;

    return;
}

function clickHandler(message : string){
    //let username = 'max';
    console.log('Clicked!' + message);
}

if(button)
    button.addEventListener('click', clickHandler.bind(null, "hello"));