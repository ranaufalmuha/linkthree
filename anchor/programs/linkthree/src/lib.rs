#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;

declare_id!("CWPtWybP2yNXgPHWnzSuCjyoTaXqzbcGu52THbNdvV6t");

#[program]
pub mod linkthree {
    use super::*;

  pub fn close(_ctx: Context<CloseLinkthree>) -> Result<()> {
    Ok(())
  }

  pub fn decrement(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.linkthree.count = ctx.accounts.linkthree.count.checked_sub(1).unwrap();
    Ok(())
  }

  pub fn increment(ctx: Context<Update>) -> Result<()> {
    ctx.accounts.linkthree.count = ctx.accounts.linkthree.count.checked_add(1).unwrap();
    Ok(())
  }

  pub fn initialize(_ctx: Context<InitializeLinkthree>) -> Result<()> {
    Ok(())
  }

  pub fn set(ctx: Context<Update>, value: u8) -> Result<()> {
    ctx.accounts.linkthree.count = value.clone();
    Ok(())
  }
}

#[derive(Accounts)]
pub struct InitializeLinkthree<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  init,
  space = 8 + Linkthree::INIT_SPACE,
  payer = payer
  )]
  pub linkthree: Account<'info, Linkthree>,
  pub system_program: Program<'info, System>,
}
#[derive(Accounts)]
pub struct CloseLinkthree<'info> {
  #[account(mut)]
  pub payer: Signer<'info>,

  #[account(
  mut,
  close = payer, // close account and return lamports to payer
  )]
  pub linkthree: Account<'info, Linkthree>,
}

#[derive(Accounts)]
pub struct Update<'info> {
  #[account(mut)]
  pub linkthree: Account<'info, Linkthree>,
}

#[account]
#[derive(InitSpace)]
pub struct Linkthree {
  count: u8,
}
