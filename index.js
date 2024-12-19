/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer"; // User interaction
import qr from "qr-image"; // QR code generation
import fs from "fs"; // File system access



inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        name: "URL",
        message: "Enter the Website URL",
        
    }, 
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!


    var url = answers.URL ;
    // const Qr = require('qr-image');
 
    var qr_png = qr.image(url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('qr_img.png')); 
    
    // var png_string = qr.imageSync('I love QR!', { type: 'png' });
    


  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      throw error.isTtyError ;
    } else {
      // Something else went wrong
    }
  });
  
  
  