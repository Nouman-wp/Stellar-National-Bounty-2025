#![no_std]
use soroban_sdk::{contract, contractimpl, symbol_short, Address, Env, Map};

#[contract]
pub struct NftContract;

#[contractimpl]
impl NftContract {

    pub fn mint(env: Env, to: Address, token_id: u32) {
        let mut store: Map<u32, Address> = env
            .storage()
            .persistent()
            .get(&symbol_short!("owners"))
            .unwrap_or(Map::new(&env));


        if store.contains_key(token_id) {
            panic!("Token already minted");
        }

        store.set(token_id, to.clone());
        env.storage().persistent().set(&symbol_short!("owners"), &store);
    }

    pub fn owner_of(env: Env, token_id: u32) -> Option<Address> {
        let store: Map<u32, Address> = env
            .storage()
            .persistent()
            .get(&symbol_short!("owners"))
            .unwrap_or(Map::new(&env));
        store.get(token_id)
    }
}
