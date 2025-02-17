function ethAddressToDecimal(ethAddress) {
    // Remove the '0x' prefix if it exists
    let hex = ethAddress.toLowerCase().replace(/^0x/, '');
    
    // Convert the hexadecimal string to a BigInt decimal number
    let decimal = BigInt("0x" + hex).toString();
    
    return decimal;
}

// Example usage
let ethAddress = "0xB341630F6E9fA0143c29708E351C515D9d6565fC ";
console.log(ethAddressToDecimal(ethAddress));

function decimalToEthAddress(decimal) {
    // Convert decimal string to a hexadecimal string
    let hex = BigInt(decimal).toString(16);
    
    // Ensure the hex string is 40 characters long by padding with leading zeros
    hex = hex.padStart(40, '0');
    
    // Return with '0x' prefix
    return "0x" + hex;
}

// console.log(decimalToEthAddress("3118688820392746329322682428264346166340918829"))


// const constructJson = () => {
//     const dataset = JSON.parse(require('fs').readFileSync('./StudentData.json','utf-8'));
//     console.log(Array.isArray(dataset),typeof dataset,dataset.length);
//     const info = dataset.map(e => ({tokenId : e.studentWalletAddress, tokenURI: e.ipfsURI}));
//     require('fs').writeFileSync('./data.json',JSON.stringify(info,null,2));
// }

// constructJson();

const generateTokenId = () => {
    const dataset = JSON.parse(require('fs').readFileSync('./uniq_data.json'));
    console.log(dataset.length);
    return dataset.map(
        e => ({
            tokenRef : ethAddressToDecimal(e.tokenId),
            tokenId : e.tokenId,
            tokenURI : e.tokenURI
        })
    )
}

// require('fs').writeFileSync('./data_x.json',JSON.stringify(generateTokenId(),null,3));
//console.log(JSON.parse(require('fs').readFileSync('./transfer_data.json')).length);
const removeDupes = () => {
    const data = [
        {
          "tokenId": "0xcfd2722e29699cc3ac533bde716124aad9a4ea17",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xcfd2722e29699cc3ac533bde716124aad9a4ea17.json"
        },
        {
          "tokenId": "0x664C71510C2dFD531c19950d34b1A0efFfb45812",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x664C71510C2dFD531c19950d34b1A0efFfb45812.json"
        },
        {
          "tokenId": "0x2e51f2830Cd8bF9f7356F5e2433d5493609e6063",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x2e51f2830Cd8bF9f7356F5e2433d5493609e6063.json"
        },
        {
          "tokenId": "0x092C17A420743A6f4BB40F4c0c16Ed58714cF040",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x092C17A420743A6f4BB40F4c0c16Ed58714cF040.json"
        },
        {
          "tokenId": "0x30081C02a0f222047356eb079e370E1B3b6553b0",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x30081C02a0f222047356eb079e370E1B3b6553b0.json"
        },
        {
          "tokenId": "0x3f2a83Bc67282364610dD060Cbf34D51222F96Fe",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x3f2a83Bc67282364610dD060Cbf34D51222F96Fe.json"
        },
        {
          "tokenId": "0x66995F54b77450Ba457F62A5F07C0852e9212714",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x66995F54b77450Ba457F62A5F07C0852e9212714.json"
        },
        {
          "tokenId": "0xD780Ba5721756506457E8876421f84fEdD9666Be",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xD780Ba5721756506457E8876421f84fEdD9666Be.json"
        },
        {
          "tokenId": "0x46EC8573844d55168280f5Ea675AcA06777fAB05",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x46EC8573844d55168280f5Ea675AcA06777fAB05.json"
        },
        {
          "tokenId": "0xCb6014749A286C563Aa4a9d375912cD3154Bb3a3",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xCb6014749A286C563Aa4a9d375912cD3154Bb3a3.json"
        },
        {
          "tokenId": "0xde115E44586e81BFF8a86b1226cE2899211Ae581",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xde115E44586e81BFF8a86b1226cE2899211Ae581.json"
        },
        {
          "tokenId": "0x24A4b29250e859D364d604792f2aA48fC5151aa2",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x24A4b29250e859D364d604792f2aA48fC5151aa2.json"
        },
        {
          "tokenId": "0x0c9373B74CFF161da03e658f2Ef3BF1C79722D64",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x0c9373B74CFF161da03e658f2Ef3BF1C79722D64.json"
        },
        {
          "tokenId": "0xa7ab3ed491c94f329454f38d42565658d2bf5e72",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xa7ab3ed491c94f329454f38d42565658d2bf5e72.json"
        },
        {
          "tokenId": "0xE1b9C191DE78364B53f97FECA7409859ae45e28b",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xE1b9C191DE78364B53f97FECA7409859ae45e28b.json"
        },
        {
          "tokenId": "0x8fDaf004FC2fB7137e6b1CC757f99c5847399595",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x8fDaf004FC2fB7137e6b1CC757f99c5847399595.json"
        },
        {
          "tokenId": "0xC6371e822C112E199225ea6D6240B561C109aACd",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xC6371e822C112E199225ea6D6240B561C109aACd.json"
        },
        {
          "tokenId": "0xb1be5Ee74A061a531d1CbCB04088Cd3A2835a981",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xb1be5Ee74A061a531d1CbCB04088Cd3A2835a981.json"
        },
        {
          "tokenId": "0xc77356aFBC69ad050BD4B7077a43A084eC41e889",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xc77356aFBC69ad050BD4B7077a43A084eC41e889.json"
        },
        {
          "tokenId": "0x9baEbD075B43215602A69C9148c8225b6Dc73c29",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x9baEbD075B43215602A69C9148c8225b6Dc73c29.json"
        },
        {
          "tokenId": "0x31e782672ba047DC11A0BC6fCBfff33D75525F71",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x31e782672ba047DC11A0BC6fCBfff33D75525F71.json"
        },
        {
          "tokenId": "0xB054457699f9955bcDCD89A60CDd0686b2B205b5",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xB054457699f9955bcDCD89A60CDd0686b2B205b5.json"
        },
        {
          "tokenId": "0xEa613f816A99f67320eCDf0a260b127952f9364f",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xEa613f816A99f67320eCDf0a260b127952f9364f.json"
        },
        {
          "tokenId": "0xb6532aae5c7969ff7e8a7382d7a84ef2e9435daa",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xb6532aae5c7969ff7e8a7382d7a84ef2e9435daa.json"
        },
        {
          "tokenId": "0x3Cd047b2b588B198543245b74eEB14FC5166BA1A",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x3Cd047b2b588B198543245b74eEB14FC5166BA1A.json"
        },
        {
          "tokenId": "0x3Cd047b2b588B198543245b74eEB14FC5166BA1A",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x3Cd047b2b588B198543245b74eEB14FC5166BA1A.json"
        },
        {
          "tokenId": "0x46a41AC6D03b0f87AB05180921C4045d79f92B00",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x46a41AC6D03b0f87AB05180921C4045d79f92B00.json"
        },
        {
          "tokenId": "0x1d2c76D539e4eFC763A5dfe539FCcB2cdACAb7Aa",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x1d2c76D539e4eFC763A5dfe539FCcB2cdACAb7Aa.json"
        },
        {
          "tokenId": "0xFA673928d6C5fdcAa84b4e43EA0d61a5b6941665",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xFA673928d6C5fdcAa84b4e43EA0d61a5b6941665.json"
        },
        {
          "tokenId": "0xB44BB88829EbAEc295B97825b2BC456CFaf81dFb",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xB44BB88829EbAEc295B97825b2BC456CFaf81dFb.json"
        },
        {
          "tokenId": "0x9b8e3FCB4EBaD7a1A41A79446d94522b1bB3cB2c",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x9b8e3FCB4EBaD7a1A41A79446d94522b1bB3cB2c.json"
        },
        {
          "tokenId": "0x3e1DA52f941AF7E176b16D4fDf0b926BCCBC02A1",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x3e1DA52f941AF7E176b16D4fDf0b926BCCBC02A1.json"
        },
        {
          "tokenId": "0xafa7dcbbef6331b8eabc46c01d1eca7352e0089c",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xafa7dcbbef6331b8eabc46c01d1eca7352e0089c.json"
        },
        {
          "tokenId": "0x043d6Ae4f732156aFeF53a9CCD2Cf5f03B775d88",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x043d6Ae4f732156aFeF53a9CCD2Cf5f03B775d88.json"
        },
        {
          "tokenId": "0x9B48657E8bC5Eb4c271c0e53850843bFbDd8Fd8b",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x9B48657E8bC5Eb4c271c0e53850843bFbDd8Fd8b.json"
        },
        {
          "tokenId": "0xcb2ceb126b44097895cf5753e74ef9eabd07d47a",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xcb2ceb126b44097895cf5753e74ef9eabd07d47a.json"
        },
        {
          "tokenId": "0x23C89b9539E62c39e00e27a860d8E424b900Ca02",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x23C89b9539E62c39e00e27a860d8E424b900Ca02.json"
        },
        {
          "tokenId": "0x9017D386a423c08EEa898fB7930c4a1579d5E1cc",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x9017D386a423c08EEa898fB7930c4a1579d5E1cc.json"
        },
        {
          "tokenId": "0x47A6a9Ada9c332aD73f52C6328b89B3a269A60Dd",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x47A6a9Ada9c332aD73f52C6328b89B3a269A60Dd.json"
        },
        {
          "tokenId": "0x3637C85C4DB10f0DE42b176cdC01009CB57dDC57",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x3637C85C4DB10f0DE42b176cdC01009CB57dDC57.json"
        },
        {
          "tokenId": "0x01bFf4644D05ce89b36Da331C005EE4e4399191e",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x01bFf4644D05ce89b36Da331C005EE4e4399191e.json"
        },
        {
          "tokenId": "0x3Bc1039bdBC9f12D7cb08D425e418b10C644A756",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x3Bc1039bdBC9f12D7cb08D425e418b10C644A756.json"
        },
        {
          "tokenId": "0xcB2A587E06445Dd7dd537406f0D3bA7Eb16B0A3c",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xcB2A587E06445Dd7dd537406f0D3bA7Eb16B0A3c.json"
        },
        {
          "tokenId": "0x6Ce161ceB366EFd1F22466603dA5Fb9d7e6896e0",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x6Ce161ceB366EFd1F22466603dA5Fb9d7e6896e0.json"
        },
        {
          "tokenId": "0xe2717185139dfD84dd0c5271bE7CCcf5d64e46d9",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xe2717185139dfD84dd0c5271bE7CCcf5d64e46d9.json"
        },
        {
          "tokenId": "0xFB0ACcE1879faF2f062faBEe59768b6B5eae2d3B",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xFB0ACcE1879faF2f062faBEe59768b6B5eae2d3B.json"
        },
        {
          "tokenId": "0xe2ac78d8b85ffae235a96fb859cd3546c4d3a0c3",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xe2ac78d8b85ffae235a96fb859cd3546c4d3a0c3.json"
        },
        {
          "tokenId": "0x68D467E665dC20674098D8CeC45916cD504c400e",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x68D467E665dC20674098D8CeC45916cD504c400e.json"
        },
        {
          "tokenId": "0x3Cd047b2b588B198543245b74eEB14FC5166BA1A",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x3Cd047b2b588B198543245b74eEB14FC5166BA1A.json"
        },
        {
          "tokenId": "0xc6Cb2aa04c805029Cb1574fbf5AF888eFc780acB",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xc6Cb2aa04c805029Cb1574fbf5AF888eFc780acB.json"
        },
        {
          "tokenId": "0x0A05987990A3C00e736620f777C235Cba339FBfd",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x0A05987990A3C00e736620f777C235Cba339FBfd.json"
        },
        {
          "tokenId": "0x9e89A8bd82BC0a36f21c98b3353Ca4deb093c611",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x9e89A8bd82BC0a36f21c98b3353Ca4deb093c611.json"
        },
        {
          "tokenId": "0xc6Cb2aa04c805029Cb1574fbf5AF888eFc780acB",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xc6Cb2aa04c805029Cb1574fbf5AF888eFc780acB.json"
        },
        {
          "tokenId": "0x3b25e44099Cd7D43ACA84741B0004714ce4Ab182",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x3b25e44099Cd7D43ACA84741B0004714ce4Ab182.json"
        },
        {
          "tokenId": "0x5d8DB26A3f3C831754C97102ebd2408a185E7d7F",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x5d8DB26A3f3C831754C97102ebd2408a185E7d7F.json"
        },
        {
          "tokenId": "0x206da9aF90b724A1248852E4C7E5c2A141A283E5",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x206da9aF90b724A1248852E4C7E5c2A141A283E5.json"
        },
        {
          "tokenId": "0x75256196FF64215c2E9cfBd510f78466BA7a309E",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x75256196FF64215c2E9cfBd510f78466BA7a309E.json"
        },
        {
          "tokenId": "0xa96A436814a095f2CAdF4fD19EE9699F37Dcc124",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xa96A436814a095f2CAdF4fD19EE9699F37Dcc124.json"
        },
        {
          "tokenId": "0x0b3B4B1111715B0a55AeBec8b49b550699D6426f",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x0b3B4B1111715B0a55AeBec8b49b550699D6426f.json"
        },
        {
          "tokenId": "0x62918695Ebe3442883d9979cBc5aB819Aa121318",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x62918695Ebe3442883d9979cBc5aB819Aa121318.json"
        },
        {
          "tokenId": "0xEfbC5a06e7f36D11B0912249bc3Ce5298225b66e",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xEfbC5a06e7f36D11B0912249bc3Ce5298225b66e.json"
        },
        {
          "tokenId": "0xDf27A12a3D60F7Cf8da24fD3b5269a4153cfA7E4",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xDf27A12a3D60F7Cf8da24fD3b5269a4153cfA7E4.json"
        },
        {
          "tokenId": "0x251317Ac29d8c75E3947177A257E76a3560a4d02",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x251317Ac29d8c75E3947177A257E76a3560a4d02.json"
        },
        {
          "tokenId": "0xba5D61F4612eD8178f5d70Ae288746D484ceEa93",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xba5D61F4612eD8178f5d70Ae288746D484ceEa93.json"
        },
        {
          "tokenId": "0xB7D9F4eB133427D74C44c922b844f1db6d3CCf35",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xB7D9F4eB133427D74C44c922b844f1db6d3CCf35.json"
        },
        {
          "tokenId": "0xc6Cb2aa04c805029Cb1574fbf5AF888eFc780acB",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xc6Cb2aa04c805029Cb1574fbf5AF888eFc780acB.json"
        },
        {
          "tokenId": "0x2e6346dbE3523495AAEF15b294b4373380D3C8a7",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x2e6346dbE3523495AAEF15b294b4373380D3C8a7.json"
        },
        {
          "tokenId": "0x94d481964a8404693d5D9dc4fA1ae947e4068FdD",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x94d481964a8404693d5D9dc4fA1ae947e4068FdD.json"
        },
        {
          "tokenId": "0x43c1DcD6AeBB063f07cff2dD45b242bECf08Ffb6",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x43c1DcD6AeBB063f07cff2dD45b242bECf08Ffb6.json"
        },
        {
          "tokenId": "0xB74a98A9b56D39Ba6911A725CEbc5b0f2b5c1E97",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xB74a98A9b56D39Ba6911A725CEbc5b0f2b5c1E97.json"
        },
        {
          "tokenId": "0xC9e336D89459a749a7a262e3Be635801a69Fe46d",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xC9e336D89459a749a7a262e3Be635801a69Fe46d.json"
        },
        {
          "tokenId": "0x031D66282b662f16f75bA4b5c00e0c75B7139c1e",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0x031D66282b662f16f75bA4b5c00e0c75B7139c1e.json"
        },
        {
          "tokenId": "0xE718d0218F958106F8f4CD64b5D544134aC26De1",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xE718d0218F958106F8f4CD64b5D544134aC26De1.json"
        },
        {
          "tokenId": "0xb0F200a80EED3Ef54e2dBa65FA970efd00106728",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xb0F200a80EED3Ef54e2dBa65FA970efd00106728.json"
        },
        {
          "tokenId": "0xB341630F6E9fA0143c29708E351C515D9d6565fC ",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xB341630F6E9fA0143c29708E351C515D9d6565fC%20.json"
        },
        {
          "tokenId": "0xe2717185139dfD84dd0c5271bE7CCcf5d64e46d9",
          "tokenURI": "https://ipfs.io/ipfs/bafybeiaxnumjcpirdwmf2md5s722rxilplqxqvmggocjxdyqvyhda7smgq/0xe2717185139dfD84dd0c5271bE7CCcf5d64e46d9.json"
        }
      ];

      const uniqueData = data.filter((obj, index, self) =>
        index === self.findIndex((o) => o.tokenId === obj.tokenId)
    );
    require('fs').writeFileSync('./uniq_data.json',JSON.stringify(uniqueData,null,3))
    //   console.log(uniqueData.length);
}

// removeDupes()

const sanitizeStudentData = () => {
    const studentData = JSON.parse(require('fs').readFileSync('./StudentData.json'));
    const uniqueData = studentData.filter((obj, index, self) =>
        index === self.findIndex((o) => o.studentWalletAddress === obj.studentWalletAddress)
    );
    console.log(uniqueData.length);
    const unx = uniqueData.map(e => ({...e,openSeaURL: `https://opensea.io/item/matic/0xd9067208c7a21e617fe2be5d40a21c3226556b95/${ethAddressToDecimal(e.studentWalletAddress)}` }))
    require('fs').writeFileSync('./sanitized_studentData.json',JSON.stringify(unx,null,3));

}

// sanitizeStudentData();

// https://ipfs.io/ipfs/bafybeidjunyb375blkblgfgtf53qexfnq6v64uobi2nm7wvh5rvmd4mrvy/0xB341630F6E9fA0143c29708E351C515D9d6565fC.png

// 
// 
// https://ipfs.io/ipfs/bafybeidjunyb375blkblgfgtf53qexfnq6v64uobi2nm7wvh5rvmd4mrvy/0xB341630F6E9fA0143c29708E351C515D9d6565fC.png
// 0xB341630F6E9fA0143c29708E351C515D9d6565fC.png

// https://ipfs.io/ipfs/bafybeiejnhpllrpyoy5hask2znbvuv54yof2xo57y6dhfayies6ftq5u2m/BM_0xB341630F6E9fA0143c29708E351C515D9d6565fC.png
// https://ipfs.io/ipfs/bafybeiftyhs5xm6rpgnumei42gh73uixuyf36aacd2rierizn6tmqd5kdm/0xB341630F6E9fA0143c29708E351C515D9d6565fC.json
// https://bafybeiejnhpllrpyoy5hask2znbvuv54yof2xo57y6dhfayies6ftq5u2m.ipfs.w3s.link/BM_0xB341630F6E9fA0143c29708E351C515D9d6565fC.png

// https://bafybeiftyhs5xm6rpgnumei42gh73uixuyf36aacd2rierizn6tmqd5kdm.ipfs.w3s.link/0xB341630F6E9fA0143c29708E351C515D9d6565fC.json

// https://ipfs.io/ipfs/bafybeiftyhs5xm6rpgnumei42gh73uixuyf36aacd2rierizn6tmqd5kdm/0xB341630F6E9fA0143c29708E351C515D9d6565fC.json

// 0x89210Ae4A762662E3D2310d4d48B3c17F7E4B6c9_01


// 0x89210Ae4A762662E3D2310d4d48B3c17F7E4B6c9