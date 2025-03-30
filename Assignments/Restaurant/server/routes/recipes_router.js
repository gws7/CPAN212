import express from "express";
import recipes_controller from "../controllers/recipes_controller.js";

const router = express.Router();

//Get all recipes
router.get("/", recipes_controller.getAllRecipes);

//Get specific recipe
router.get("/recipe/:id", recipes_controller.getRecipe);

//Add new recipe
router.post("/recipe", recipes_controller.addRecipe);

//Edit a Recipe
router.put("/recipe/:id", recipes_controller.editRecipe);

//Delete a recipe
router.delete("/delete/:id", recipes_controller.deleteRecipe);

export default router;