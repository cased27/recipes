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

function addElements(recipes) {
	rowContainer.innerHTML = '';
	recipes.forEach((recipe) => {
		const fullRecipeContainer = document.createElement('div'); //contains all recipe info & the title
		const recipeTitle = document.createElement('h3');
		const recipeBody = document.createElement('div'); // contains all recipe info NOT the title
		addRecipeBody(recipeBody, recipe);
		addRecipeContainer(fullRecipeContainer, recipeBody, recipeTitle);
		addRecipeTitle(recipeTitle, recipe);

		const ingredients = recipe.ingredients;
		const instructions = recipe.instructions;
		const links = recipe.link;
		const ingredientsList = document.querySelector(`#${recipe.ingredientsId}`);
		const instructionsList = document.querySelector(`#${recipe.instructionsId}`);
		const linkAnchor = document.querySelector(`#${recipe.linkId}`);
		addItems(ingredients, ingredientsList, 'ingredient');
		addItems(instructions, instructionsList, 'instruction');
		addLinks(links, linkAnchor);
		addClick(recipeTitle, recipeBody, fullRecipeContainer);

		rowContainer.append(fullRecipeContainer); // adding content into parent 'row' div
	});
}

function addRecipeContainer(fullRecipeContainer, recipeBody, recipeTitle) {
	elementBody.append(fullRecipeContainer);
	fullRecipeContainer.append(recipeBody);
	fullRecipeContainer.prepend(recipeTitle);
	fullRecipeContainer.className = 'col-sm-5 recipeContainer';
}

function addRecipeTitle(recipeTitle, recipe) {
	recipeTitle.innerText = recipe.name;
	recipeTitle.className = 'title';
}

function addRecipeBody(recipeBody, recipe) {
	recipeBody.setAttribute('id', `${recipe.recipeBodyId}`);
	recipeBody.className = 'hidden';
	recipeBody.insertAdjacentHTML('afterbegin', `<section id="${recipe.linkId}"></section>`);
	recipeBody.insertAdjacentHTML(
		'afterbegin',
		`<h4 class="subtitle">Instructions</h4><section class="instructions"><ul id="${recipe.instructionsId}"></ul></section>`
	);
	recipeBody.insertAdjacentHTML(
		'afterbegin',
		`<h4 class="subtitle">Ingredients</h4><section class="ingredients"><ul id="${recipe.ingredientsId}"></ul></section>`
	);
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

//adding click func to recipe titles
function addClick(recipeTitle, recipeBody, fullRecipeContainer) {
	recipeTitle.addEventListener('click', function() {
		recipeBody.classList.toggle('appear');
		recipeBody.classList.remove('col-sm-5');
		fullRecipeContainer.classList.toggle('col-sm-12');
	});
}

addElements(allRecipes);

// add search feature

function findMatches(wordToMatch, allRecipes) {
	return allRecipes.filter((recipe) => {
		//recipe type or name matches search word
		const regex = new RegExp(wordToMatch, 'gi');
		return recipe.name.match(regex);
	});
}

function displayMatches() {
	const matchArray = findMatches(this.value, allRecipes);
	addElements(matchArray);
}

const searchInput = document.querySelector('.search');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
