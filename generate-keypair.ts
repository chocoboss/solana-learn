import { Keypair } from "@solana/web3.js";
import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

// const keypair = Keypair.generate();
// console.log(`✅ Generated keypair!`)
// console.log(`The public key is: `, keypair.publicKey.toBase58());
// console.log(`The secret key is: `, keypair.secretKey);
// console.log(`✅ Finished!`);

const readKeypair = getKeypairFromEnvironment("SECRET_KEY");

//3VLY1jFf5EKdcnMGUt3TMN6Cs8XZwC5u1BDC5EGdJ6Mw
console.log(`The public key is: `, readKeypair.publicKey.toBase58());
