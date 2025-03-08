module.exports.GEN = (accountAddr,studentName) => ({
    "name": "Hash It Out 2K25: Demystifying Decentralized Systems By (Broadridge India & RGMCET(Autonomous)",
    "description": "Certificate of Attendance",
    "image": `https://ipfs.io/ipfs/bafybeigtfwepg2irkl66j524n5sxad4yqzulv64qk3zthxoaxlmur6ifka/${accountAddr.trim()}.png`,
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