const stellarSdk = require('@stellar/stellar-sdk');
require('dotenv').config();

const server = new stellarSdk.Horizon.Server('https://horizon-testnet.stellar.org');
const AssetCode = 'ANIME'; // Asset code for the NFTs
const networkPassphrase = stellarSdk.Networks.TESTNET;

const crypto = require("crypto");

// const metadataHash = crypto.createHash("sha256").update(metadataUrl).digest();
exports.mintNFT = async (to, tokenId, metadataURI) => {
  try {
    const sourceKeypair = stellarSdk.Keypair.fromSecret(process.env.STELLAR_SECRET);
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
      .addMemo(Memo.text("NFTMint"))
      .setTimeout(30)
      .build();

    transaction.sign(sourceKeypair);
    const result = await server.submitTransaction(transaction);
    console.log(`✅ Minted NFT ${tokenId} to ${to}`);
    console.log(result.hash);
    return result;
  } catch (error) {
    console.error('Error minting NFT:', error);
    throw error;
  }
  
};
