import allRecipes from './recipeData.js';
// import { allRecipes } from './recipeData.js';

const elementBody = document.querySelector('body');

function addElements() {
	allRecipes.forEach((recipe) => {
		const recipeContainer = document.createElement('div');
		const recipeTitle = document.createElement('h3');
		const divider = document.createElement('hr');
		elementBody.append(recipeContainer);
		recipeContainer.prepend(divider);
		recipeContainer.append(recipeTitle);
		recipeTitle.innerText = recipe.name;
		recipeTitle.insertAdjacentHTML('afterend', `<section id="${recipe.keyword}"></section>`);
		recipeTitle.insertAdjacentHTML(
			'afterend',
			`<h4>Instructions</h4><section class="instructions"><ul id="${recipe.value}"></ul></section>`
		);
		recipeTitle.insertAdjacentHTML(
			'afterend',
			`<h4>Ingredients</h4><section class="ingredients"><ul id="${recipe.id}"></ul></section>`
		);
		const ingredients = recipe.ingredients;
		const instructions = recipe.instructions;
		const links = recipe.link;
		const ingredientsList = document.querySelector(`#${recipe.id}`);
		const instructionsList = document.querySelector(`#${recipe.value}`);
		const linkAnchor = document.querySelector(`#${recipe.keyword}`);

		addItems(ingredients, ingredientsList, 'ingredient');
		addItems(instructions, instructionsList, 'instruction');
		addLinks(links, linkAnchor);
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
