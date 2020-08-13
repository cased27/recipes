// import allRecipes from './recipeData.js';
// import { allRecipes } from './recipeData.js';

const allRecipes = [
	{
		name           : 'Tartar Sauce',
		ingredientsId  : 'tSauce1',
		instructionsId : 'tSauce2',
		linkId         : 'tSauce3',
		type           : [ 'sauce', 'seafood', 'fish' ],
		ingredients    : [
			'1 c mayonnaise',
			'1 c finely chopped dill pickles',
			'1 tbsp finely chopped fresh parsley or dill',
			'1 tsp lemon juice',
			'1 tsp sugar',
			'1/4 tsp freshly ground black pepper'
		],
		instructions   : [
			'Remove the insides/seeds of the pickles (it makes them easier to finely chop)',
			'Combine all ingredients & Serve!'
		],
		link           : 'https://natashaskitchen.com/tartar-sauce-recipe/'
	},
	{
		name           : 'Shrimp Taco Garlic Lime Seasoning',
		ingredientsId  : 'gSeason1',
		instructionsId : 'gSeason2',
		linkId         : 'gSeason3',
		type           : [ 'mexican', 'shrimp tacos', 'seasoning', 'fish', 'seafood' ],
		ingredients    : [
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
		instructions   : [
			'Combine all ingredients',
			'Massage the mixture in a large bowl with the shrimp until well mixed in',
			'Cook shrimp'
		],
		link           : 'https://www.garlicandzest.com/tangy-garlic-lime-shrimp-tacos/'
	},
	{
		name           : 'Shrimp Taco Creamy Cilantro Sauce',
		ingredientsId  : 'cSauce1',
		instructionsId : 'cSauce2',
		linkId         : 'cSauce3',
		type           : [ 'mexican', 'shrimp tacos', 'sauce', 'fish', 'seafood' ],
		ingredients    : [
			'1 c sour cream',
			'3 tbsp fresh minced cilantro',
			'1 tsp lime zest',
			'1/4 tsp salt',
			'2 tbsp lime juice',
			'3 c mixed cabbage',
			'1 tbsp very minced jalopeno'
		],
		instructions   : [ 'Combine & Serve!' ],
		link           : 'https://tasty.co/recipe/grilled-shrimp-tacos-with-creamy-cilantro-sauce'
	}
];

// Alphabetize Recipes
allRecipes.sort((a, b) => a.name.localeCompare(b.name));

const elementBody = document.querySelector('body');

//Div Structure for Bootstrap Layout
const contentContainer = document.createElement('div');
const rowContainer = document.createElement('div');

createDivs(contentContainer, 'container');
createDivs(rowContainer, 'row');

function createDivs(element, addClass) {
	elementBody.append(element);
	element.className = addClass;
}
contentContainer.append(rowContainer);

// adding structure & elements with content

function addElements() {
	allRecipes.forEach((recipe) => {
		const recipeContainer = document.createElement('div');
		const recipeTitle = document.createElement('h3');
		elementBody.append(recipeContainer);
		recipeContainer.append(recipeTitle);
		recipeContainer.className = 'col-sm';
		recipeTitle.innerText = recipe.name;
		recipeTitle.insertAdjacentHTML('afterend', `<section id="${recipe.linkId}"></section>`);
		recipeTitle.insertAdjacentHTML(
			'afterend',
			`<h4>Instructions</h4><section class="instructions"><ul id="${recipe.instructionsId}"></ul></section>`
		);
		recipeTitle.insertAdjacentHTML(
			'afterend',
			`<h4>Ingredients</h4><section class="ingredients"><ul id="${recipe.ingredientsId}"></ul></section>`
		);

		// recipeContainer.insertAdjacentHTML('afterbegin', '<div class="row"></div>');
		// recipeContainer.insertAdjacentHTML('beforebegin', '<div class="container"></div>');

		const ingredients = recipe.ingredients;
		const instructions = recipe.instructions;
		const links = recipe.link;
		const ingredientsList = document.querySelector(`#${recipe.ingredientsId}`);
		const instructionsList = document.querySelector(`#${recipe.instructionsId}`);
		const linkAnchor = document.querySelector(`#${recipe.linkId}`);

		addItems(ingredients, ingredientsList, 'ingredient');
		addItems(instructions, instructionsList, 'instruction');
		addLinks(links, linkAnchor);
		rowContainer.append(recipeContainer); // adding content into parent 'row' div
	});
}

function addItems(items, itemsList, addClass) {
	items.forEach((item) => {
		const bulletPoints = document.createElement('li');
		bulletPoints.innerHTML = item;
		bulletPoints.className = addClass;
		itemsList.append(bulletPoints);
	});
}

function addLinks(links, linkAnchor) {
	const newAnchor = document.createElement('a');
	newAnchor.href = links;
	newAnchor.innerText = 'Original Recipe';
	linkAnchor.append(newAnchor);
}

addElements();
