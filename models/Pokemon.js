import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Pokemon = new Schema ({
    "dexNumber": String,
    "name": String,
    "type1": String,
    "type2": String,
    "total": String,
    "hp": String,
    "attack": String,
    "defense": String,
    "specialAttack": String,
    "specialDefense": String,
    "speed": String,
    "generation": String,
    "legendary": String,
    "sprite": String,
    "shiny_sprite": String,
    "og_art": String,
    "og_art_shiny": String
})

export default mongoose.model("pokemon", Pokemon)