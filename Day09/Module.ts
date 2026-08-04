// to convert variables, fuctions, class, as modules use export keyword
export let appName = "Calculator";

export function add(a:number, b:number):number{
    return a+b;
}

export class Formatter{
    toUpperCase(word:string):string{
        return word.toUpperCase();
    }
}