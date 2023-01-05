const { ethers } = require('ethers')
require('dotenv').config()

const provider = new ethers.providers.getDefaultProvider('http://127.0.0.1:8545/')

const WethAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
const compoundAddress = '0xc00e94Cb662C3520282E6f5717214004A7f26888'

async function main() {
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY)

    const ConnectedWallet = wallet.connect(provider)

    const abi = require('./abi.json')

    const WethContract = new ethers.Contract(WethAddress, abi, provider)

    const symbol =  await WethContract.symbol()

    console.log('Token symbol:', symbol)

    const name =  await WethContract.name()

    console.log('Token name:', name)

 }
 main();