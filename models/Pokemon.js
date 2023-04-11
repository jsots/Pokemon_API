import mongoose from "mongoose";
const Schema = mongoose.Schema;

let Pokemon = new Schema ({
    "id": String,
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
    "legendary": String
})

export default mongoose.model("pokemon", Pokemon)