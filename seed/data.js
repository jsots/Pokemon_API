import db from "../db/connection.js";
import Pokemon from "../models/Pokemon.js";
import pokemon from "./Pokemon_Stats.json" assert {type: "json"};

const pokemans = pokemon.map((item) => {
    const pokeman = {}
    pokeman.dexNumber = item.dexNumber
    pokeman.name = item.name
    pokeman.type1 = item.type1
    pokeman.type2 = item.type2
    pokeman.total = item.total
    pokeman.hp = item.hp
    pokeman.attack = item.attack
    pokeman.defense = item.defense
    pokeman.sepcialAttack = item.specialAttack
    pokeman.specialDefense = item.specialDefense
    pokeman.speed = item.speed
    pokeman.generation = item.generation
    pokeman.legendary = item.legendary
    pokeman.sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.dexNumber}.png`
    pokeman.shiny = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${item.dexNumber}.png`
    // pokeman.og_art = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.dexNumber}.png`
    // pokeman.og_art_shiny = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${item.dexNumber}.png`
    return pokeman
})

const insertData = async () => {
    // Reset Database
    await db.dropDatabase();
    // Insert Pokemon into the Database
    await Pokemon.insertMany(pokemans);
    // Close DB connection
    db.close();
};

insertData();