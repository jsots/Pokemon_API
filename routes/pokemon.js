import { Router } from "express";
import * as controllers from "../controllers/pokemon.js";

const router = Router()

router.get("/", controllers.getPokemon);
router.get("/legendary", controllers.getLegendaryPokemon);
router.get("/:id", controllers.getOnePokemon);
router.get("/type/:type", controllers.getPokemonByType);
router.post("/", controllers.createPokemon);
router.put("/:id", controllers.updatePokemon);
router.delete("/:id", controllers.deletePokemon);

export default router