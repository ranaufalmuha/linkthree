#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;

declare_id!("CWPtWybP2yNXgPHWnzSuCjyoTaXqzbcGu52THbNdvV6t");

#[program]
pub mod linkthree {
    use anchor_lang::solana_program::system_program;

    use super::*;

    // Close the Linkthree account
    pub fn close(_ctx: Context<CloseLinkthree>) -> Result<()> {
        Ok(())
    }

    // Decrement the count value
    pub fn decrement(ctx: Context<Update>) -> Result<()> {
        ctx.accounts.linkthree.count = ctx.accounts.linkthree.count.checked_sub(1).unwrap();
        Ok(())
    }

    // Increment the count value
    pub fn increment(ctx: Context<Update>) -> Result<()> {
        ctx.accounts.linkthree.count = ctx.accounts.linkthree.count.checked_add(1).unwrap();
        Ok(())
    }

    // Set the count value
    pub fn set(ctx: Context<Update>, value: u8) -> Result<()> {
        ctx.accounts.linkthree.count = value;
        Ok(())
    }

    // ============================================

    // Initialize the Linkthree account
    pub fn initialize(
        ctx: Context<InitializeLinkthree>,
        owner: Pubkey,
        username: String,
        full_name: String,
        photo_profile: String,
        position: String,
        description: String,
        social: [Social; 100],
        links: [Link; 100],
    ) -> Result<()> {
        let linkthree = &mut ctx.accounts.linkthree;

        // Check if username already exists using the PDA
        let _username_key =
            Pubkey::find_program_address(&[b"username", username.as_bytes()], ctx.program_id).0;

        // Fail if the PDA account for the username already exists
        if !ctx
            .accounts
            .username_account
            .to_account_info()
            .owner
            .eq(&system_program::ID)
        {
            return Err(ErrorCode::UsernameAlreadyTaken.into());
        }

        linkthree.count = 0;
        linkthree.owner = owner;
        linkthree.username = username.clone();
        linkthree.full_name = full_name;
        linkthree.photo_profile = photo_profile;
        linkthree.position = position;
        linkthree.description = description;
        linkthree.social = social;
        linkthree.links = links;

        // Store the username in a PDA
        let username_account = &mut ctx.accounts.username_account;
        username_account.username = username;

        Ok(())
    }

    // Function to update all attributes at once
    pub fn update_all(
        ctx: Context<Update>,
        new_username: String,
        new_full_name: String,
        new_photo_profile: String,
        new_position: String,
        new_description: String,
        new_social: [Social; 100],
        new_links: [Link; 100],
    ) -> Result<()> {
        let linkthree = &mut ctx.accounts.linkthree;

        // Update profil
        linkthree.username = new_username;
        linkthree.full_name = new_full_name;
        linkthree.photo_profile = new_photo_profile;
        linkthree.position = new_position;
        linkthree.description = new_description;
        linkthree.social = new_social;
        linkthree.links = new_links;

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

    // PDA to store the username
    #[account(
        init,
        seeds = [b"username", linkthree.username.as_bytes()],
        bump,
        payer = payer,
        space = 8 + 40 // Enough space for username storage
    )]
    pub username_account: Account<'info, UsernameAccount>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct CloseLinkthree<'info> {
    #[account(mut)]
    pub payer: Signer<'info>,

    #[account(
        mut,
        close = payer, // Close account and return lamports to payer
    )]
    pub linkthree: Account<'info, Linkthree>,
}

#[derive(Accounts)]
pub struct Update<'info> {
    #[account(mut)]
    pub linkthree: Account<'info, Linkthree>,
}

// ============================================

#[account]
#[derive(InitSpace)]
pub struct Linkthree {
    count: u8,

    pub owner: Pubkey,
    #[max_len(20)]
    pub username: String,
    #[max_len(50)]
    pub full_name: String,
    #[max_len(500)]
    pub photo_profile: String,
    #[max_len(50)]
    pub position: String,
    #[max_len(300)]
    pub description: String,
    pub social: [Social; 100],
    pub links: [Link; 100],
}

#[derive(Clone, AnchorSerialize, AnchorDeserialize, InitSpace)]
pub struct Social {
    // count: u8,
    #[max_len(50)]
    pub icon: String,
    #[max_len(100)]
    pub url: String,
}

#[derive(Clone, AnchorSerialize, AnchorDeserialize, InitSpace)]
pub struct Link {
    // count: u8,
    #[max_len(50)]
    pub name: String,
    #[max_len(500)]
    pub image_background: String,
    #[max_len(500)]
    pub url: String,
}

// PDA to track the username uniqueness
#[account]
pub struct UsernameAccount {
    pub username: String,
}

#[error_code]
pub enum ErrorCode {
    #[msg("The username is already taken.")]
    UsernameAlreadyTaken,
}
