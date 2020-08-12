const allRecipes = [
	{
		name         : 'Tartar Sauce',
		id           : 'tSauce1',
		value        : 'tSauce2',
		keyword      : 'tSauce3',
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
		link         : [ 'https://natashaskitchen.com/tartar-sauce-recipe/' ]
	},
	{
		name         : 'Shrimp Taco Garlic Lime Seasoning',
		id           : 'gSeasoning1',
		value        : 'gSeasoning2',
		keyword      : 'gSeasoning3',
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
		link         : [ 'https://www.garlicandzest.com/tangy-garlic-lime-shrimp-tacos/' ]
	},
	{
		name         : 'Shrimp Taco Creamy Cilantro Sauce',
		id           : 'cSauce1',
		value        : 'cSauce2',
		keyword      : 'cSauce3',
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
		link         : [ 'https://tasty.co/recipe/grilled-shrimp-tacos-with-creamy-cilantro-sauce' ]
	}
];

const elementBody = document.querySelector('body');

function addElements() {
	allRecipes.forEach((recipe) => {
		const newDiv = document.createElement('div');
		const newH3 = document.createElement('h3');
		const divider = document.createElement('hr');
		elementBody.append(newDiv);
		newDiv.prepend(divider);
		newDiv.append(newH3);
		newH3.innerText = recipe.name;
		newH3.insertAdjacentHTML('afterend', `<section id="${recipe.keyword}"></section>`);
		newH3.insertAdjacentHTML(
			'afterend',
			`<h4>Instructions</h4><section class="instructions"><ul id="${recipe.value}"></ul></section>`
		);
		newH3.insertAdjacentHTML(
			'afterend',
			`<h4>Ingredients</h4><section class="ingredients"><ul id="${recipe.id}"></ul></section>`
		);
		const ingredients = recipe.ingredients;
		const instructions = recipe.instructions;
		const links = recipe.link;
		const ingredientsList = document.querySelector(`#${recipe.id}`);
		const instructionsList = document.querySelector(`#${recipe.value}`);
		const linkAnchor = document.querySelector(`#${recipe.keyword}`);
		console.log(linkAnchor);
		addIngredients(ingredients, ingredientsList);
		addInstructions(instructions, instructionsList);
		addLinks(links, linkAnchor);
	});
}

addElements();

function addLinks(links, linkAnchor) {
	const newAnchor = document.createElement('a');
	newAnchor.href = links;
	newAnchor.innerText = 'Original Recipe';
	console.log(linkAnchor.append(newAnchor));
}

function addIngredients(ingredients, ingredientsList) {
	ingredients.forEach((ingredient) => {
		const newLis = document.createElement('li');
		newLis.innerHTML = ingredient;
		newLis.className = 'ingredient';
		ingredientsList.append(newLis);
	});
}

function addInstructions(instructions, instructionsList) {
	instructions.forEach((instruction) => {
		const newLis = document.createElement('li');
		newLis.innerHTML = instruction;
		newLis.className = 'instruction';
		instructionsList.append(newLis);
	});
}
