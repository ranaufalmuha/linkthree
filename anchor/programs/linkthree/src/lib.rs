#![allow(clippy::result_large_err)]

use anchor_lang::prelude::*;

declare_id!("CWPtWybP2yNXgPHWnzSuCjyoTaXqzbcGu52THbNdvV6t");

#[program]
pub mod linkthree {
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

    // Initialize the Linkthree account
    pub fn initialize(
        ctx: Context<InitializeLinkthree>,
        owner: Pubkey,
        username: String,
        name: String,
        photo_profile: String,
        position: String,
        description: String,
    ) -> Result<()> {
        let linkthree = &mut ctx.accounts.linkthree;
        linkthree.count = 0;
        linkthree.owner = owner;
        linkthree.username = username;
        linkthree.name = name;
        linkthree.photo_profile = photo_profile;
        linkthree.position = position;
        linkthree.description = description;
        Ok(())
    }

    // Function to update all attributes at once
    pub fn update_all(
        ctx: Context<Update>,
        new_username: String,
        new_name: String,
        new_photo_profile: String,
        new_position: String,
        new_description: String,
    ) -> Result<()> {
        let linkthree = &mut ctx.accounts.linkthree;
        linkthree.username = new_username;
        linkthree.name = new_name;
        linkthree.photo_profile = new_photo_profile;
        linkthree.position = new_position;
        linkthree.description = new_description;
        Ok(())
    }

    // Add or update a social entry in the array
    pub fn upsert_social(ctx: Context<Update>, index: u8, icon: String, url: String) -> Result<()> {
        let linkthree = &mut ctx.accounts.linkthree;
        if (index as usize) < linkthree.social.len() {
            linkthree.social[index as usize] = Social { icon, url };
        }
        Ok(())
    }

    // Add or update a link entry in the array
    pub fn upsert_link(
        ctx: Context<Update>,
        index: u8,
        image_background: String,
        url: String,
    ) -> Result<()> {
        let linkthree = &mut ctx.accounts.linkthree;
        if (index as usize) < linkthree.links.len() {
            linkthree.links[index as usize] = Link {
                image_background,
                url,
            };
        }
        Ok(())
    }

    // Delete a social entry by index
    pub fn delete_social(ctx: Context<Update>, index: u8) -> Result<()> {
        let linkthree = &mut ctx.accounts.linkthree;
        if (index as usize) < linkthree.social.len() {
            linkthree.social[index as usize] = Social {
                icon: String::new(),
                url: String::new(),
            };
        }
        Ok(())
    }

    // Delete a link entry by index
    pub fn delete_link(ctx: Context<Update>, index: u8) -> Result<()> {
        let linkthree = &mut ctx.accounts.linkthree;
        if (index as usize) < linkthree.links.len() {
            linkthree.links[index as usize] = Link {
                image_background: String::new(),
                url: String::new(),
            };
        }
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
        close = payer, // Close account and return lamports to payer
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

    pub owner: Pubkey,
    #[max_len(20)]
    pub username: String,
    #[max_len(50)]
    pub name: String,
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
    #[max_len(500)]
    pub image_background: String,
    #[max_len(500)]
    pub url: String,
}
