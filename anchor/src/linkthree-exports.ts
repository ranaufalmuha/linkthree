// Here we export some useful types and functions for interacting with the Anchor program.
import { AnchorProvider, Program } from '@coral-xyz/anchor';
import { Cluster, PublicKey } from '@solana/web3.js';
import LinkthreeIDL from '../target/idl/linkthree.json';
import type { Linkthree } from '../target/types/linkthree';

// Re-export the generated IDL and type
export { Linkthree, LinkthreeIDL };

// The programId is imported from the program IDL.
export const LINKTHREE_PROGRAM_ID = new PublicKey(LinkthreeIDL.address);

// This is a helper function to get the Linkthree Anchor program.
export function getLinkthreeProgram(provider: AnchorProvider) {
  return new Program(LinkthreeIDL as Linkthree, provider);
}

// This is a helper function to get the program ID for the Linkthree program depending on the cluster.
export function getLinkthreeProgramId(cluster: Cluster) {
  switch (cluster) {
    case 'devnet':
    case 'testnet':
    case 'mainnet-beta':
    default:
      return LINKTHREE_PROGRAM_ID;
  }
}
