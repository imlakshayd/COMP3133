const fs = require('fs')

const filePath = "input_countries.csv"

// Files to be deleted
const files = ["canada.txt", "usa.txt"]

console.log(`Trying to delete canada.txt and usa.txt files if they exist....`);

// Delete canada.txt and usa.txt if already exist
files.forEach(file => {
  fs.unlink(file, (err) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.log(`File ${file} does not exist (nothing to delete)`);
      } else {
        console.log(`Error while trying to delete file ${file} : ${JSON.stringify(err)}`);
      }
    } else {
      console.log(`File ${file} deleted successfully`);
    }
  });
});


// Filter data of Canada and United States and write data to canada.txt / usa.txt
fs.readFile(filePath, "utf-8", (err, data) => {
    if (err){
        console.log(`Unable to read from ${filePath} : ${JSON.stringify(err)}`);
    }else if (data){
        const rows = data.trim().split("\n") 
        
        const header = rows[0].trim()
        fs.writeFile("canada.txt", header + "\n", "utf-8", (hErr) => {
        if (hErr) console.log(`Unable to write header to canada.txt : ${JSON.stringify(hErr)}`);
        });
        fs.writeFile("usa.txt", header + "\n", "utf-8", (hErr) => {
        if (hErr) console.log(`Unable to write header to usa.txt : ${JSON.stringify(hErr)}`);
        });

        let fields = []
        let country = ""
        let filePathToWrite = ""
        let dataToWrite = ""

rows.slice(1).forEach(record => {
  const fields = record.split(",");
  const countryRaw = fields[0].trim();          // for accurate logging
  const country = countryRaw.toLowerCase();     // for comparisons

  if (country === "canada") {
    const filePathToWrite = "canada.txt";
    const dataToWrite = `${record}\n`;

    fs.appendFile(filePathToWrite, dataToWrite, "utf-8", (writeErr) => {
      if (writeErr) {
        console.log(`Unable to append to ${filePathToWrite} : ${JSON.stringify(writeErr)}`)
      } else {
        console.log(`Record for ${countryRaw} written sucessfully to ${filePathToWrite}`)
      }
    });

  } else if (country === "united states") {
    const filePathToWrite = "usa.txt";
    const dataToWrite = `${record}\n`;

    fs.appendFile(filePathToWrite, dataToWrite, "utf-8", (writeErr) => {
      if (writeErr) {
        console.log(`Unable to append to ${filePathToWrite} : ${JSON.stringify(writeErr)}`)
      } else {
        console.log(`Record for ${countryRaw} written sucessfully to ${filePathToWrite}`)
      }
    });
  }
})
    } else {
        console.log(`No data available from file.`);
    }
})  
