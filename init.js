const fs   = require('fs');
const { generateCertificate, prepareMetadata } = require('./utils');



/**
 * Take input of Student Name, Address pairs and split up,
    * Step1 :  Create a StudentData.json w/ datastructure , {name :"StudentName",walletAddress: "XYZ",imageUri: "", ipfsUri:""}
    * Step2 :  Iterate over StudentData.json , create certificates in certificates folder using "generateCertificates()" function
    * Step3 :  Iterate over StudentData.json, Perform certificate upload using storacha module and update "imageUri" property of that student 
    * Step4 :  Iterate over StudentData.json , Construct WalletAddress.json per student that stores all the metadata of the image and store all .json files in /metadata folder.
    * Step5 :  Iterate over StudentData.json , upload all the WalletAddress.json files to storacha and obtain IPFS url , update it back in StudentData.json file.
 */
const exec = async (studentInfo) => {
    const StudentData   =  [];
    try {
        for(let student of studentInfo) {
            const studentStub          = {
                studentName : "",
                studentWalletAddress : "",
                imageURI : "",
                ipfsURI : "",
                web3CID : ""
            }
            //Split StudentInfo w/ , and extract student name and wallet address
            studentStub.studentName          = student.split(',')[0];
            studentStub.studentWalletAddress = student.split(',')[1];
            
            // //Step1
            // StudentData.push({studentName,studentWalletAddress,ipfsImageURI:"",ipfsMetadataURI:""});

            //Step2 : Generate Image
            generateCertificate(student);

            //Step3 : Upload this to IPFS location and acquire IPFS URL
            studentStub.imageURI            = `https://ipfs.io/ipfs/bafybeids4jdo3ggrcnu6spqokt4mslgodbrink3lxsedlluukg65bq77ku/${studentStub.studentWalletAddress.trim()}.png`

            //Step4 : Create Metadata using above information and store in /metadata folder

            await prepareMetadata(studentStub.studentName, studentStub.studentWalletAddress);

            studentStub.ipfsURI            = `https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/${studentStub.studentWalletAddress.trim()}.json`

            StudentData.push(studentStub);

        }
        // if(!fs.existsSync('./StudentData.json')) {
        //     fs.createWriteStream('./StudentData.json',{})
        // }
        fs.writeFileSync('./StudentData.json',JSON.stringify(StudentData,null,2))

    } catch (error) {
        console.error(error);
        return;        
    }
}


// Get student names from command-line arguments
const studentInfo = process.argv.slice(2);

if (studentInfo.length === 0) {
  console.log('Please provide student names as arguments.');
  process.exit(1);
}

exec(studentInfo)
    // .then(() => )
        