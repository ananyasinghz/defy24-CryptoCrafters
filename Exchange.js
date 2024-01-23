// exchange.js
const Web3 = require('web3');
const { abi, evm } = require('./build/contracts/Exchange.json');

const web3 = new Web3('http://localhost:7545'); // Connect to your Ethereum node

const exchangeContract = new web3.eth.Contract(abi, 'CONTRACT_ADDRESS'); // Replace with your contract address

async function exchangeTokens(amount) {
    const accounts = await web3.eth.getAccounts();
    
    // Perform the exchange
    await exchangeContract.methods.exchangeTokens(amount).send({ from: accounts[0] });

    console.log(`Tokens exchanged successfully!`);
}

exchangeTokens(10); // Replace with the desired amount
