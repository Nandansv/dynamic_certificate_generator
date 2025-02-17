module.exports.GEN = (accountAddr,studentName) => ({
    "name": "Hash It Out 2K25: Demystifying Decentralized Systems By (Broadridge India & RGMCET(Autonomous)",
    "description": "Certificate of Attendance",
    "image": `https://ipfs.io/ipfs/bafybeids4jdo3ggrcnu6spqokt4mslgodbrink3lxsedlluukg65bq77ku/${accountAddr.trim()}.png`,
    "attributes": [
        {
            "trait_type": "Issued By",
            "value": "Broadridge India & RGMCET (Autonomous),Nandyal"
        },
        {
            "trait_type": "Recipient",
            "value": `${studentName.trim()}`
        },
        {
            "trait_type": "Date",
            "value": "2025-01-25"
        }
    ]
})