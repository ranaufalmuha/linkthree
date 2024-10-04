'use client';

import { getLinkthreeProgram, getLinkthreeProgramId } from '@linkthree/anchor';
import { Program } from '@coral-xyz/anchor';
import { useConnection } from '@solana/wallet-adapter-react';
import { Cluster, Keypair, PublicKey } from '@solana/web3.js';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import toast from 'react-hot-toast';
import { useCluster } from '../cluster/cluster-data-access';
import { useAnchorProvider } from '../solana/solana-provider';
import { useTransactionToast } from '../ui/ui-layout';

export function useLinkthreeProgram() {
  const { connection } = useConnection();
  const { cluster } = useCluster();
  const transactionToast = useTransactionToast();
  const provider = useAnchorProvider();
  const programId = useMemo(
    () => getLinkthreeProgramId(cluster.network as Cluster),
    [cluster]
  );
  const program = getLinkthreeProgram(provider);

  const accounts = useQuery({
    queryKey: ['linkthree', 'all', { cluster }],
    queryFn: () => program.account.linkthree.all(),
  });

  const getProgramAccount = useQuery({
    queryKey: ['get-program-account', { cluster }],
    queryFn: () => connection.getParsedAccountInfo(programId),
  });

  const initialize = useMutation({
    mutationKey: ['linkthree', 'initialize', { cluster }],
    mutationFn: (keypair: Keypair) =>
      program.methods
        .initialize()
        .accounts({ linkthree: keypair.publicKey })
        .signers([keypair])
        .rpc(),
    onSuccess: (signature) => {
      transactionToast(signature);
      return accounts.refetch();
    },
    onError: () => toast.error('Failed to initialize account'),
  });

  return {
    program,
    programId,
    accounts,
    getProgramAccount,
    initialize,
  };
}

export function useLinkthreeProgramAccount({
  account,
}: {
  account: PublicKey;
}) {
  const { cluster } = useCluster();
  const transactionToast = useTransactionToast();
  const { program, accounts } = useLinkthreeProgram();

  const accountQuery = useQuery({
    queryKey: ['linkthree', 'fetch', { cluster, account }],
    queryFn: () => program.account.linkthree.fetch(account),
  });

  const closeMutation = useMutation({
    mutationKey: ['linkthree', 'close', { cluster, account }],
    mutationFn: () =>
      program.methods.close().accounts({ linkthree: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accounts.refetch();
    },
  });

  const decrementMutation = useMutation({
    mutationKey: ['linkthree', 'decrement', { cluster, account }],
    mutationFn: () =>
      program.methods.decrement().accounts({ linkthree: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accountQuery.refetch();
    },
  });

  const incrementMutation = useMutation({
    mutationKey: ['linkthree', 'increment', { cluster, account }],
    mutationFn: () =>
      program.methods.increment().accounts({ linkthree: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accountQuery.refetch();
    },
  });

  const setMutation = useMutation({
    mutationKey: ['linkthree', 'set', { cluster, account }],
    mutationFn: (value: number) =>
      program.methods.set(value).accounts({ linkthree: account }).rpc(),
    onSuccess: (tx) => {
      transactionToast(tx);
      return accountQuery.refetch();
    },
  });

  return {
    accountQuery,
    closeMutation,
    decrementMutation,
    incrementMutation,
    setMutation,
  };
}
