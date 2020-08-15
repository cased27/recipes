import allRecipes from './recipeData.js';

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
		const fullRecipeContainer = document.createElement('div'); //contains all recipe info & the title
		const recipeTitle = document.createElement('h3');
		const recipeBody = document.createElement('div'); // contains all recipe info NOT the title
		elementBody.append(fullRecipeContainer);
		fullRecipeContainer.append(recipeBody);
		fullRecipeContainer.prepend(recipeTitle);
		recipeBody.setAttribute('id', `${recipe.recipeBodyId}`);
		recipeBody.className = 'hidden';
		fullRecipeContainer.className = 'col-sm-5';
		recipeTitle.innerText = recipe.name;
		recipeTitle.className = 'title';
		recipeBody.insertAdjacentHTML('afterbegin', `<section id="${recipe.linkId}"></section>`);
		recipeBody.insertAdjacentHTML(
			'afterbegin',
			`<h4 class="subtitle">Instructions</h4><section class="instructions"><ul id="${recipe.instructionsId}"></ul></section>`
		);
		recipeBody.insertAdjacentHTML(
			'afterbegin',
			`<h4 class="subtitle">Ingredients</h4><section class="ingredients"><ul id="${recipe.ingredientsId}"></ul></section>`
		);

		const ingredients = recipe.ingredients;
		const instructions = recipe.instructions;
		const links = recipe.link;
		const ingredientsList = document.querySelector(`#${recipe.ingredientsId}`);
		const instructionsList = document.querySelector(`#${recipe.instructionsId}`);
		const linkAnchor = document.querySelector(`#${recipe.linkId}`);
		addItems(ingredients, ingredientsList, 'ingredient');
		addItems(instructions, instructionsList, 'instruction');
		addLinks(links, linkAnchor);

		rowContainer.append(fullRecipeContainer); // adding content into parent 'row' div

		//adding Event Listener to toggle recipes upon click of title
		recipeTitle.addEventListener('click', function() {
			recipeBody.classList.toggle('appear');
			recipeBody.classList.remove('col-sm-5');
			fullRecipeContainer.classList.toggle('col-sm-12');
		});
	});
}
//adding ingredients & instructions lists
function addItems(items, itemsList, addClass) {
	items.forEach((item) => {
		const bulletPoints = document.createElement('li');
		bulletPoints.innerHTML = item;
		bulletPoints.className = addClass;
		itemsList.append(bulletPoints);
	});
}
//adding links to bottom of recipe
function addLinks(links, linkAnchor) {
	const newAnchor = document.createElement('a');
	newAnchor.href = links;
	newAnchor.target = 'blank';
	newAnchor.innerText = 'Original Recipe';
	linkAnchor.append(newAnchor);
}

addElements();

//add animation
// let start = Date.now();

// let timer = setInterval(function() {
// 	let timePassed = Date.now() - start;
// 	if (timePassed >= 1000) {
// 		clearInterval(timer);
// 		return;
// 	}
// 	draw(timePassed);
// }, 20);

// function draw(timePassed) {
// 	mixerL.style.left = timePassed / 5 + 'px';
// 	mixerR.style.right = timePassed / 5 + 'px';
// }
