//required modules.
const request = require('request');
const fs = require('fs');

//getting the command-line input
const args = process.argv.slice(2);
let httpReq = args[0];
let writeTo = args[1];

//this function takes in the command line arguments, calls the website request, and then writes to file.
const copyBody = function(page, save) {
  request(page, (err, resp, body) => {
    
    if (err) {
      console.log('error:', err);
      console.log('status', resp);
    } else {
      
      fs.writeFile(save, body, (err) => {
        if (err) {
          console.log("failed to write to local path: ", save);
        } else {
          console.log(`Downloaded and saved ${body.length} bytes to ${save}`);
        }        
      });  
    }
  });
};
//calls the function
copyBody(httpReq, writeTo);