import Pokemon from "../models/Pokemon.js";

export const getPokemon = async (req, res) => {
    try {
        const pokemon = await Pokemon.find();
        pokemon.sort((a,b) => a.dexNumber - b.dexNumber)
        res.json(pokemon);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error: error.mesage}); // Not needed, but it will hang otherwise. Status 500 says the specific error which is internal server error. 
    }
};

export const getPokemonByType = async (req, res) => {
    try {
        const pokemon = await Pokemon.find({$or:[ {"type1": `${req.params.type}`}, {"type2": `${req.params.type}`}]});
        res.json(pokemon);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error: error.mesage}); // Not needed, but it will hang otherwise. Status 500 says the specific error which is internal server error. 
    }
};

export const getLegendaryPokemon = async (req, res) => {
    try {
        const pokemon = await Pokemon.find({"legendary": "True"});
        res.json(pokemon);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error: error.mesage}); // Not needed, but it will hang otherwise. Status 500 says the specific error which is internal server error. 
    }
};

export const getPokemonByGen = async (req, res) => {
    try {
        const pokemon = await Pokemon.find({"generation": `${req.params.gen}`});
        res.json(pokemon);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error: error.mesage}); // Not needed, but it will hang otherwise. Status 500 says the specific error which is internal server error. 
    }
};

export const getOnePokemon = async (req, res) => {
    try {
        const pokemon = await Pokemon.find({"dexNumber": `${req.params.dexnum}`});
        res.json(pokemon);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error: error.mesage}); // Not needed, but it will hang otherwise. Status 500 says the specific error which is internal server error.  
    }
}

export const createPokemon = async (req, res) => {
    try {
        const pokemon = new Pokemon(req.body); // When creating a pokemon you need req.body in order to populate with all thier information.
        await pokemon.save();
        res.json(pokemon);
    } catch (error) {
        console.log(error.message);
        res.status(201).json({error: error.mesage}); // Not needed, but it will hang otherwise. Status 201 says the specific error known as created. 
    }
}

export const updatePokemon = async (req, res) => {
    const { id } = req.params; // Deconstruct by isolating the id.
    const pokemon = await Pokemon.findByIdAndUpdate(id, req.body)
    res.status(200).json(pokemon)
}

export const deletePokemon = async (req, res) => {
    try {
        const { id } = req.params
        const deleted = await Pokemon.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Pokemon Deleted!") // This informs when a pokemon was successfully deleted. 
        }
        throw new Error("Pokemon not found"); // this happens if there isnt a pokemon with the id that was typed in
    } catch (error) {
        console.log(error.message);
        res.status(500).json({error: error.mesage}); // Not needed, but it will hang otherwise. Status 201 says the specific error known as created. 
    }
}