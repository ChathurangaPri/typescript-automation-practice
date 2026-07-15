// CallBack functions are the functions that are used in another function
// it is not executed directly but executed inside another function

// callback function
/* function showMessage(message:string): void {
    console.log(message);
    
}

function showGreeting(name:string, smg:(message:string) =>void) {
    console.log(name);
    smg("Hello")
    
}

showGreeting("chathu", showMessage) */


function displaySum(result:number):void {
    console.log(result);
    
}

function summation(a:number, b:number, callback:(result:number) => void) {
    let result = a+b;
    callback(result);
}

summation(1,2,displaySum);