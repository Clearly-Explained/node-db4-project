const recipes = [
  { recipe_name: "Pizza" },
  { recipe_name: "Fajitas" },
]

const ingredients = [
  { ingredient_name: "dough" },
  { ingredient_name: "tortilla" },
  { ingredient_name: "fillings" },
  { ingredient_name: "toppings" },
]

const steps = [
  { step_number: 1, step_text: "prepare dough", recipe_id: 1 },
  { step_number: 2, step_text: "add toppings", recipe_id: 1 },
  { step_number: 1, step_text: "prepare tortilla", recipe_id: 2 },
  { step_number: 2, step_text: "add fillings", recipe_id: 2 },
]

const step_ingredients = [
  { quantity: 1, ingredient_id: "1", step_id: 1 },
  { quantity: 2, ingredient_id: "3", step_id: 1 },
  { quantity: 1, ingredient_id: "2", step_id: 2 },
  { quantity: 2, ingredient_id: "4", step_id: 2 },
]

exports.seed = async function (knex) {
  await knex("recipes").insert(recipes)
  await knex("ingredients").insert(ingredients)
  await knex("steps").insert(steps)
  await knex("step_ingredients").insert(step_ingredients)
};