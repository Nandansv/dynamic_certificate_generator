require('dotenv').config()
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
// const WEB3  =  require('@web3-storage/w3up-client');
const { GEN } = require('./templates/TMPLT_Cert_Metadata');
let web3Client = '';
// Certificate details
const certificateDetails = {
  title: "Hash It Out: Demystifying Decentralized Systems",
  location: "RGMCET(Autonomous), Nandyal",
  workshopDate: "2025-01-25",
};

const generateCertificate = async (studentDetails) => {
  try {
    // Load the certificate template
    const studentName  = studentDetails.split(',')[0];
    const studentAccountNumber = studentDetails.split(',')[1];
    console.log('Student Name',studentName)
    console.log('Student A/C Address',studentAccountNumber) 
    const templatePath = 'templates/TMPLT_Cert.png'; // Path to your template
    const outputPath = `certificates/${studentAccountNumber.replace(/\s+/g, '_')}.png`; // Save path for the certificate
    const template = await loadImage(templatePath);

    // Create a canvas
    const canvas = createCanvas(template.width, template.height);
    const ctx = canvas.getContext('2d');

    // Draw the template
    ctx.drawImage(template, 0, 0, canvas.width, canvas.height);

    // Add student name
    ctx.font = 'bold 48px Arial';
    ctx.fillStyle = '#000'; // Black color
    ctx.textAlign = 'center';
    ctx.fillText(studentName, canvas.width / 2, canvas.height / 2);
    
    ctx.font = '32px Arial';
    ctx.fillText(studentAccountNumber, canvas.width / 2, canvas.height /2 + 50);

    // Add workshop title
    ctx.font = 'italic 32px Arial';
    ctx.fillText(certificateDetails.title, canvas.width / 2, canvas.height / 2 + 140);

    // Add location and date
    ctx.font = '24px Arial';
    ctx.fillText(certificateDetails.location, canvas.width / 2, canvas.height / 2 + 190);
    ctx.fillText(certificateDetails.workshopDate, canvas.width / 2, canvas.height / 2 + 230);

    // Save the certificate as a PNG file
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outputPath, buffer);

    console.log(`Certificate generated for ${studentName}: ${outputPath}`);
  } catch (error) {
    console.error('Error generating certificate:', error);
  }
};


// const uploadArtifacttoWeb3Store = async () => {
//     try {
//       //Create Web3 Client , if it doesnt exist 
//       if(!web3Client) {
//         web3Client = await WEB3.Client();
//         console.log(web3Client);
        
//         // await web3Client.setCurrentSpace(process.env.WEB3_DID_KEY);
//         //Register Space
//         // await web3Client.
//       }

//     } catch (error) {
//       console.error('Error while uploading Artifacts to Storacha',error);
//     }
// }

const prepareMetadata = async (studentName, studentWalletAddress) => {
  try {
    //Import Template file and generate metadatajsons in /metadata directory
    const generateStudentMetadata = GEN(studentWalletAddress,studentName);
    //Store this in metadata folder
    fs.writeFileSync(`./metadata/${studentWalletAddress}.json`,JSON.stringify(generateStudentMetadata,null,2));

  } catch (error) {
    console.error(error);
  }
}


module.exports.generateCertificate = generateCertificate;
// module.exports.uploadArtifacttoWeb3Store = uploadArtifacttoWeb3Store;
module.exports.prepareMetadata      = prepareMetadata;