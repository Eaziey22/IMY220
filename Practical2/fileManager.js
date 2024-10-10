//you do not need to install fs

const fs = require('fs');
//const fs = require('fs').promises; // If you want to use the promises API

function fileRead(fileName){
    try{
        // Reading the file synchronously
        const data = fs.readFileSync(fileName); 
        
        // Parsing the content into JSON and returning it
        return JSON.parse(data);
    }catch(err){
        console.error('error reading the file:', err);

        return null;
    }
    
}

function fileWrite(fileName,newContent){

    try{
        // Converting the new content into a JSON string
        const jsonContent = JSON.stringify(newContent, null, 2); // The second argument is for indentation

        fs.writeFileSync(fileName, jsonContent);
    }catch(err){
        console.error('Error writing ro file', err);
    }
    

}

// Exporting both functions for use in other files
module.exports = { fileRead, fileWrite };

