const QRCode = require('qrcode');
const data = JSON.parse(require('fs').readFileSync('./sanitized_studentData.json'));

const exec = () => {
    for(let i = 0 ; i < data.length ; i++) {
        const {openSeaURL, studentWalletAddress} = data[i];

        QRCode.toFile(`./QRCodes/${studentWalletAddress}.png`, openSeaURL, function (err) {
            if (err) throw err;
            console.log("QR code for OpenSea link saved as opensea_qr.png");
        });
    
    }
}

exec();