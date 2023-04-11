import { Router } from "express"; // Destructuring the express object and pulling router.
import pokemonRoutes from "./pokemon.js";


const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/pokemon", pokemonRoutes);

export default router;

