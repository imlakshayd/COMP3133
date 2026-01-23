const fs = require('fs')

//path to the file where you want to save the data
let filePath = "output_data.txt"

console.log(`Trying to write data to ${filePath}....`);

let dataBuffer = Buffer.from("Yellow warning - snow with wind up to 10 cm of snow")


//write to file asycnhronously 
//overwrites existing content if any file is not provided
fs.writeFile(filePath, dataBuffer, (error) => {
    if (error){
        console.log(`Option 1 - Unable to write to file ${filePath} : ${JSON.stringify(error)}`);
        }else{
        console.log(`Option 1 - Data written successfully to file ${filePath} using fs.writeFile()`);
        }
    }
)

//dataBuffer = "9237935059792338020453543651356435135"

dataBuffer =  "\n this is a new message from option attempt \n \n \n this will expand multiple lines"

//append the data to previous one
fs.writeFile(filePath, dataBuffer, {flag : 'a'}, (error) => {
    if (error){
        console.log(`\nOption 2 - Unable to write to file ${filePath} : ${JSON.stringify(error)}`);
        }else{
        console.log(`\nOption 2 - Data written successfully to file ${filePath} using fs.writeFile()`);
        }
    }
)

//write to file synchronously
dataBuffer = Buffer.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

const err = fs.writeFileSync(filePath, dataBuffer)

if (err){
    console.log(`Option 3 - Unable to write to file ${filePath} : ${JSON.stringify(err)}`);
}else{
    console.log(`\nOption 3 - Data successfully written to ${filePath}`);
}

// //delete the file
// console.log(`\Trying to delete the file ${filePath}`);

// fs.unlink(filePath, (err) => {
//     if(err){
//         console.log(`Error while trying to delete file ${filePath} : ${JSON.stringify(err)}`);
//     }else{
//         console.log(`File ${filePath} deleted successfully`);
//     }
// })