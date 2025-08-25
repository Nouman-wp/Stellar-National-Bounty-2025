const stellarSdk = require('@stellar/stellar-sdk');
require('dotenv').config();

const server = new stellarSdk.Horizon.Server('https://horizon-testnet.stellar.org');
const AssetCode = 'ANIME'; // Asset code for the NFTs
const networkPassphrase = stellarSdk.Networks.TESTNET;


exports.mintNFT = async (to, tokenId, metadataURI) => {
  try {
    const sourceKeypair = stellarSdk.Keypair.fromSecret(process.env.STELLAR_SECRET_KEY);
    const sourceAccount = await server.loadAccount(sourceKeypair.publicKey());
    
    // Create a new asset (NFT) with the metadata
    const nftAsset = new stellarSdk.Asset(
      `NFT${tokenId}`,
      sourceKeypair.publicKey()
    );

    const transaction = new stellarSdk.TransactionBuilder(sourceAccount, {
      fee: await server.fetchBaseFee(),
      networkPassphrase: networkPassphrase,
    })
      .addOperation(
        stellarSdk.Operation.payment({
          destination: to,
          asset: nftAsset,
          amount: "1", // NFTs typically have amount of 1
        })
      )
      .addMemo(stellarSdk.Memo.text(metadataURI))
      .setTimeout(30)
      .build();

    transaction.sign(sourceKeypair);
    const result = await server.submitTransaction(transaction);
    console.log(`✅ Minted NFT ${tokenId} to ${to}`);
    return result;
  } catch (error) {
    console.error('Error minting NFT:', error);
    throw error;
  }
};
