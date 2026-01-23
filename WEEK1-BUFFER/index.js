console.log("Week 1  - Buffer Example");

//create a buffer from string data
let buf1 = Buffer.from("Hello");

console.log(buf1);

buf1 = Buffer.from("Lakshay");
console.log(buf1);

console.log(`Lakshay - ${buf1}`);
console.log("Lakshay - ", buf1);

console.log(buf1.toJSON());

console.log();
console.log(`number of elements in buffer  : ${buf1.length}`);
console.log(`first element : ${buf1[0]}`);
console.log(`element on index 4 : ${buf1[4]}`);
console.log(`element on index 10 : ${buf1[10]}`); //undefined

console.log();

for(let i = 0; i < buf1.length; i++) {
    console.log(`i : ${i}, buf1[${i}] = ${buf1[i]}`);
}

console.log();
console.log(`Buffer in String format : ${buf1.toString()}`);
console.log(`Buffer in JSON format : ${buf1.toJSON()}`);
console.log(`Buffer in Hex format : ${buf1.toString('hex')}`);
console.log(`Buffer in UTF-8 format : ${buf1.toString('utf-8')}`);
console.log(`Buffer in UTF-16LE format : ${buf1.toString('utf-16le')}`);
console.log(`Buffer in Base64 format : ${buf1.toString('base64')}`);

buf1 = Buffer.from('🚩 😋 😎')

console.log();
console.log(`Buffer in String format : ${buf1.toString()}`);
console.log(`Buffer in JSON format : ${buf1.toJSON()}`);
console.log(`Buffer in Hex format : ${buf1.toString('hex')}`);
console.log(`Buffer in UTF-8 format : ${buf1.toString('utf-8')}`);
console.log(`Buffer in UTF-16LE format : ${buf1.toString('utf-16le')}`);
console.log(`Buffer in Base64 format : ${buf1.toString('base64')}`);

console.log(`length of buf1 : ${buf1.length}`);

//allocate a buffer of specific size when creating it
let buf2 = Buffer.alloc(10); //10 bytes

console.log();
console.log(`buf2 : ${buf2}`);
console.log(`length of buf2 : ${buf2.length}`);

//can't use indices to write data to Buffer
buf2[0] = "A";
buf2[2] = "😀";
buf2[9] = "P";

console.log();
console.log(`buf2 : `, buf2);
console.log(`buf2 in string format : ${buf2.toString()}`);

buf2.write("A", 0);
buf2.write("😀", 2);
buf2.write("P", 9);

console.log();
console.log(`buf2 : `, buf2);
console.log(`buf2 in string format : ${buf2.toString()}`);

buf2.write("U", 4) // will overwrite at index 4 and any existing data

console.log();
console.log(`buf2 : `, buf2);
console.log(`buf2 in string format : ${buf2.toString()}`);

buf2.write("Hello", 3) // will overwrite at index 3 and any existing data

console.log();
console.log(`buf2 : `, buf2);
console.log(`buf2 in string format : ${buf2.toString()}`);

// `ERR_OUT_OF_RANGE`: Attempt to write outside buffer bounds
// buf2.write("Z", 15);

buf2 = Buffer.from([65, 66, 67, 68, 69, 70]); //ASCII values

console.log();
console.log(`buf2 : `, buf2);
console.log(`buf2 in string format : ${buf2.toString()}`);

buf2 = Buffer.from([97, 98, 99, 100, 101, 102]); //ASCII values

console.log();
console.log(`buf2 : `, buf2);
console.log(`buf2 in string format : ${buf2.toString()}`);

buf1 = Buffer.from("COMP");
buf2 = Buffer.from("3133");
// buf2 = Buffer.from(3133);
//ERR_INVALID_ARG_TYPE  - can't create buffer from number must be a string or array

//concat() combines two buffers into a new buffer and returns it
let buf3 = Buffer.concat([buf1, buf2]);

console.log();
console.log(`buf3 : `, buf3);
console.log(`buf3 in string format : ${buf3.toString()}`);

// Error: The "list" argument must be of type Buffer. Received type string
// buf3 = Buffer.concat(["ABCD", buf2 ]);

buf2.copy(buf3); //copies buf2 data into buf3 starting at index 0 of buf3

console.log();
console.log(`buf2 : `, buf2);
console.log(`buf2 in string format : ${buf2.toString()}`);
console.log(`buf3 : `, buf3);
console.log(`buf3 in string format : ${buf3.toString()}`);

buf2 = Buffer.from("ABC");
buf2.copy(buf3); //copies buf2 data into buf3 starting at index 0 of buf3

console.log();
console.log(`buf2 : `, buf2);
console.log(`buf2 in string format : ${buf2.toString()}`);
console.log(`buf3 : `, buf3);
console.log(`buf3 in string format : ${buf3.toString()}`);

//Buffer.compare() compares two buffers and returns
// 0 - if both are equal
// 1 - if buf1 > buf2
// -1 - if buf1 < buf2

buf1 = Buffer.from("hello");
buf2 = Buffer.from("hello");
buf3 = Buffer.from("morning");

let output = Buffer.compare(buf1, buf2);

console.log();
console.log(`Comparing buf1 and buf2 : ${output}`); //returns 0

output = Buffer.compare(buf1, buf3);

console.log();
console.log(`Comparing buf1 and buf3 : ${output}`); //returns -1

output = Buffer.compare(buf3, buf1);
console.log();
console.log(`Comparing buf3 and buf1 : ${output}`); //returns 1

// case sensitivity check
buf2 = Buffer.from("HELLO");
output = Buffer.compare(buf1, buf2);
console.log();
console.log(`Comparing buf1 and buf2 : ${output}`); //returns 1