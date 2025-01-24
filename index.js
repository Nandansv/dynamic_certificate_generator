const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

// Certificate details
const certificateDetails = {
  title: "Hash It Out: Demystifying Decentralized Systems",
  location: "RGMCET(Autonomous), Nandyal",
  workshopDate: new Date().toISOString() + ' UTC',
};

const generateCertificate = async (studentDetails) => {
  try {
    // Load the certificate template
    const studentName  = studentDetails.split(',')[0];
    const studentAccountNumber = studentDetails.split(',')[1];
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

// Get student names from command-line arguments
const studentNames = process.argv.slice(2);

if (studentNames.length === 0) {
  console.log('Please provide student names as arguments.');
  process.exit(1);
}

// Ensure the output directory exists
if (!fs.existsSync('certificates')) {
  fs.mkdirSync('certificates');
}

// Generate certificates for all students
studentNames.forEach(generateCertificate);
