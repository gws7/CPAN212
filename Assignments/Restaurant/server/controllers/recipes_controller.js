import Recipe from "../models/recipe.js";

//Fetch All Recipes
const getAllRecipes = async (req, res) => {
    try {
        console.log("Attempting to fetch all recipes...");
        const recipes = await Recipe.find({});
        console.log("Found recipes:", recipes);
        if (!recipes || recipes.length === 0) {
            console.log("No recipes found in database");
        }
        res.json(recipes);
    } catch (error) {
        console.error("Error in getAllRecipes:", error);
        res.status(500).json({message: "error fetching recipes", error: error.message});
    }
};

//Find Specific Recipe
const getRecipe = async (req, res) => {
    try {
        const specificRecipe = await Recipe.findById(req.params.id);

        if(!specificRecipe) {
            return res.status(400).json({message: "Invalid id"})
        }

        res.json(specificRecipe)
    } catch (error) {
        console.log("error finding recipe: ", error);
        res.status(500).json({message: "Error finding your recipe"});
    }
}

//Add a Recipe to Collection
const addRecipe = async (req, res) => {
    try {
        const {name, description, difficulty, ingredients, steps} = req.body;

        const newRecipe = new Recipe({
            name,
            description,
            difficulty,
            ingredients,
            steps,
        })

        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        console.error("error adding recipe: ", error);
        res.status(400).json({message: "Error adding recipe", error});
    }
};

//Edit a Recipe
const editRecipe = async (req, res) => {
    try {
        const {name, description, difficulty, ingredients, steps} = req.body;
        const updatedRecipe = await Recipe.findByIdAndUpdate(
            req.params.id, req.body,
            {new: true},
        );
        if (!updatedRecipe)
            return res.status(404).json({ message: "Recipe not found" });
        res.json(updatedRecipe);
    } catch (error) {
        res.status(400).json({message: "Error updating book", error})
    }
}

//Delete a Recipe
const deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        
        if(!recipe){
            return res.status(404).json({message: "Recipe not found"});
        }
        console.log("Found Recipe: ")
        await Recipe.findByIdAndDelete(req.params.id);
        res.json({message: "Recipe Deleted"});
    } catch (error) {
        res.status(500).json({message: "Error deleting recipe", error});
    }
}

export default {
    getAllRecipes,
    getRecipe,
    addRecipe,
    editRecipe,
    deleteRecipe,
};