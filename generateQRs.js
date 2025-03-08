const QRCode = require('qrcode');
const data = JSON.parse(require('fs').readFileSync('./LAT_StudentData_.json'));

const exec = () => {
    for(let i = 0 ; i < data.length ; i++) {
        const {openSeaUrl, studentWalletAddress} = data[i];

        QRCode.toFile(`./QRCodes_2/${studentWalletAddress}99.png`, openSeaUrl, function (err) {
            if (err) throw err;
            console.log("QR code for OpenSea link saved as opensea_qr.png");
        });
    
    }
}

exec();