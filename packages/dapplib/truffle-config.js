require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan raise ranch prosper harvest casual equal gift'; 
let testAccounts = [
"0x8b192ca7d9f5ccfa65e708e5fa9abd53790ed0532230d1cfe78be0417695d666",
"0x1f7718fabfcd95f51d5435d282158ae9929167af464302912c8de4218bdea664",
"0x091b2558ff2330ddf0cae5e048c2b7fe8a5fd1e36ad5b464174760d10acda094",
"0x0d75a3de32017f130e52c64eaba2d1a8d278e0a1deb8867ce62aca03cc99e102",
"0xa5e4040272fb1c94cec2fb8928aee09bcae188ddbe0edc2c96ee804e5d27eca6",
"0x668dc6b3d0c0e30181722555008821f4efcd722cabda0a7ed0e1ea9a5c3e29a2",
"0x357f12df4f8d961b65ef7036a1a0f5473cc56976023a356de444c25bea44f74a",
"0x74188a7f1d350089a232deeeb225fd8801fc73393ae0f6c5a71e9250aeb06599",
"0xba567479eb1fee8a845843fb6b33b4ffedbf4dca5731def1e054285909e7681f",
"0x896ba05d96bc1a8ad3121c4e55d80b3e165992f5539b4365499dfc48325026c9"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
