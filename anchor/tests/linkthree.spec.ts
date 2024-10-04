import * as anchor from '@coral-xyz/anchor';
import { Program } from '@coral-xyz/anchor';
import { Keypair } from '@solana/web3.js';
import { Linkthree } from '../target/types/linkthree';

describe('linkthree', () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);
  const payer = provider.wallet as anchor.Wallet;

  const program = anchor.workspace.Linkthree as Program<Linkthree>;

  const linkthreeKeypair = Keypair.generate();

  it('Initialize Linkthree', async () => {
    await program.methods
      .initialize()
      .accounts({
        linkthree: linkthreeKeypair.publicKey,
        payer: payer.publicKey,
      })
      .signers([linkthreeKeypair])
      .rpc();

    const currentCount = await program.account.linkthree.fetch(
      linkthreeKeypair.publicKey
    );

    expect(currentCount.count).toEqual(0);
  });

  it('Increment Linkthree', async () => {
    await program.methods
      .increment()
      .accounts({ linkthree: linkthreeKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.linkthree.fetch(
      linkthreeKeypair.publicKey
    );

    expect(currentCount.count).toEqual(1);
  });

  it('Increment Linkthree Again', async () => {
    await program.methods
      .increment()
      .accounts({ linkthree: linkthreeKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.linkthree.fetch(
      linkthreeKeypair.publicKey
    );

    expect(currentCount.count).toEqual(2);
  });

  it('Decrement Linkthree', async () => {
    await program.methods
      .decrement()
      .accounts({ linkthree: linkthreeKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.linkthree.fetch(
      linkthreeKeypair.publicKey
    );

    expect(currentCount.count).toEqual(1);
  });

  it('Set linkthree value', async () => {
    await program.methods
      .set(42)
      .accounts({ linkthree: linkthreeKeypair.publicKey })
      .rpc();

    const currentCount = await program.account.linkthree.fetch(
      linkthreeKeypair.publicKey
    );

    expect(currentCount.count).toEqual(42);
  });

  it('Set close the linkthree account', async () => {
    await program.methods
      .close()
      .accounts({
        payer: payer.publicKey,
        linkthree: linkthreeKeypair.publicKey,
      })
      .rpc();

    // The account should no longer exist, returning null.
    const userAccount = await program.account.linkthree.fetchNullable(
      linkthreeKeypair.publicKey
    );
    expect(userAccount).toBeNull();
  });
});
