const allRecipes = [
	{
		name         : 'Tartar Sauce',
		id           : 'tartarSauce',
		type         : [ 'sauce', 'seafood', 'fish' ],
		ingredients  : [
			'1 c mayonnaise',
			'1 c finely chopped dill pickles',
			'1 tbsp finely chopped fresh parsley or dill',
			'1 tsp lemon juice',
			'1 tsp sugar',
			'1/4 tsp freshly ground black pepper'
		],
		instructions : [
			'Remove the insides/seeds of the pickles (it makes them easier to finely chop)',
			'Combine all ingredients & Serve!'
		],
		link         : 'https://natashaskitchen.com/tartar-sauce-recipe/'
	},
	{
		name         : 'Garlic Lime Seasoning',
		id           : 'garlicSeasoning',
		type         : [ 'mexican', 'shrimp tacos', 'seasoning', 'fish', 'seafood' ],
		ingredients  : [
			'1/2 tsp salt',
			'1/4 tsp black pepper',
			'1 tsp ground cumin',
			'1/2 tsp smoked paprika',
			'pinch cayenne pepper',
			'1 tsp olive oil',
			'3 cloves garlic',
			'1 lime zested & juiced',
			'1/4 c chopped cilantro - optional'
		],
		instructions : [
			'Combine all ingredients',
			'Massage the mixture in a large bowl with the shrimp until well mixed in',
			'Cook shrimp'
		],
		link         : 'https://www.garlicandzest.com/tangy-garlic-lime-shrimp-tacos/'
	},
	{
		name         : 'Creamy Cilantro Sauce',
		id           : 'cilantroSauce',
		type         : [ 'mexican', 'shrimp tacos', 'sauce', 'fish', 'seafood' ],
		ingredients  : [
			'1 c sour cream',
			'3 tbsp fresh minced cilantro',
			'1 tsp lime zest',
			'1/4 tsp salt',
			'2 tbsp lime juice',
			'3 c mixed cabbage',
			'1 tbsp very minced jalopeno'
		],
		instructions : [ 'Combine & Serve!' ],
		link         : 'https://tasty.co/recipe/grilled-shrimp-tacos-with-creamy-cilantro-sauce'
	}
];

const elementBody = document.querySelector('body');
const scriptTag = document.querySelector('script');

function addElements() {
	allRecipes.forEach((recipe) => {
		const newDiv = document.createElement('div');
		const newH3 = document.createElement('h3');
		elementBody.append(newDiv);
		newDiv.append(newH3);
		newH3.innerText = recipe.name;
		newH3.insertAdjacentHTML('afterend', '<section class="link">Original Recipe</section>');
		newH3.insertAdjacentHTML(
			'afterend',
			`<h4>Instructions</h4><section class="instructions"><ul id="${recipe.instructions}"></ul></section>`
		);
		newH3.insertAdjacentHTML(
			'afterend',
			`<h4>Ingredients</h4><section class="ingredients"><ul id="${recipe.id}"></ul></section>`
		);
		const ingredients = recipe.ingredients;
		const instructions = recipe.instructions;
		const recipeId = document.querySelector(`#${recipe.id}`);
		addIngredients(ingredients, recipeId);
		addInstructions(instructions, recipeId);
	});
}

addElements();

const elementsH3 = elementBody.querySelectorAll('h3');

function addIngredients(ingredients, recipeId) {
	ingredients.forEach((ingredient) => {
		const newLis = document.createElement('li');
		newLis.innerHTML = ingredient;
		newLis.className = 'ingredient';
		recipeId.append(newLis);
	});
}

function addInstructions(instructions, recipeId) {
	instructions.forEach((instruction) => {
		const newLis = document.createElement('li');
		newLis.innerHTML = instruction;
		newLis.className = 'instruction';
		recipeId.append(newLis);
	});
}
