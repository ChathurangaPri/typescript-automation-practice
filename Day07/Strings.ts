// Declaration of strings
let str1:string = "String with double quote";
let str2:string = 'String with single quote';
let str3:string = `String with back tick`;

console.log(str1);
console.log(str2);
console.log(str3);

let num:number = 10;
console.log("Number is: ", num);
console.log(`Number is ${num}`);

// str.length - length of the string
let str:string = "Hello TypeScript";
console.log(str.length);

// str.toUpperCase()
console.log(str.toUpperCase());

// str.toLowerCase()
console.log(str.toLowerCase());

// str.charAt(index)
console.log(str.charAt(4));

// str.indexOf(string)
console.log(str.indexOf("Type"));

// str.subString(start, end)
console.log(str.substring(0,5));

// str.includes()
console.log(str.includes("ell"));

// str.startsWith(string)
console.log(str.startsWith("gh"));
console.log(str.startsWith("He"));

// str.endsWith(string)
console.log(str.endsWith("t"));
console.log(str.endsWith("yu"));

// str.replace(initial string, new string)
console.log(str.replace("Hello", "Hi"));

// str.split(delimeter)
// delimeter = the character to split
let newStr:string [] = str.split(" ")
console.log(newStr[0]);
console.log(newStr[1]);

// ex
let myString: string = "abc@gmail.com,xyz"
let splitStr: string[]= myString.split(",");
console.log("email: ",splitStr[0]);
console.log("password: ",splitStr[1]);


// str.trim() - removes whitespace from both sides
let originalString:string = "   Welcome to Typescript";
console.log(originalString.trim());

// str.trimStart() - removes whitespace from front
console.log(originalString.trimStart());


// str.trimEnd() - removes whitespace from the end
console.log(originalString.trimEnd());


// str.concat(string)
let myStr1:string = "Welcome ";
let myStr2:string = "to Typescript";
let myStr3:string = "!";
console.log(myStr1.concat(myStr2));
console.log("abc".concat("def")); // can use directly on string
console.log(myStr1.concat(myStr2.concat(myStr3)));



// Concept of string imutability
// Whatever done for the string can not change the original string value
myStr1 = "Welcome ";
let updatedString: string = myStr1.concat(myStr2);
console.log(updatedString);
console.log(myStr1);


// multiline string - use back tick not ""/ ''
let multilineString:string = `Hi 
                                Chathu`;
console.log(multilineString);
















