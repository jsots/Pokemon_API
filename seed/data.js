import db from "../db/connection.js";
import Pokemon from "../models/Pokemon.js";
import pokemon from "./Pokemon_Stats.json" assert {type: "json"};

const insertData = async () => {
    // Reset Database
    await db.dropDatabase();
    // Insert Pokemon into the Database
    await Pokemon.insertMany(pokemon);
    // Close DB connection
    db.close();
};

insertData();