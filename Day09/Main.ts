import { appName, add, Formatter } from "./Module";
// import { add } from "./Module";
// to use the exported things we have to use import in relevant functions

console.log(appName);

console.log(add(10,20));

let x = new Formatter;
console.log(x.toUpperCase("module"));

