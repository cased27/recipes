//allRecipes arrStructure[
// [0]name
// [1]type
// [2]ingredients
// [3]instructions
// [4]link (<a>"original recipe")
// ]

const allRecipes = [
	[
		(name = 'Tartar Sauce'),
		(type = [ 'sauce', 'seafood', 'fish' ]),
		(ingredients = [
			'1 c mayonnaise',
			'1 c finely chopped dill pickles',
			'1 tbsp finely chopped fresh parsley or dill',
			'1 tsp lemon juice',
			'1 tsp sugar',
			'1/4 tsp freshly ground black pepper'
		]),
		(instructions = [ 'Combine & Serve!' ]),
		'https://natashaskitchen.com/tartar-sauce-recipe/'
	],
	[
		(name = 'Garlic Lime Seasoning'),
		(type = [ 'mexican', 'shrimp tacos', 'seasoning', 'fish', 'seafood' ]),
		(ingredients = [
			'1/2 tsp salt',
			'1/4 tsp black pepper',
			'1 tsp ground cumin',
			'1/2 tsp smoked paprika',
			'pinch cayenne pepper',
			'1 tsp olive oil',
			'3 cloves garlic',
			'1 lime zested & juiced',
			'1/4 c chopped cilantro - optional'
		]),
		(instructions = [
			'Combine all ingredients',
			'Massage the mixture in a large bowl with the shrimp until well mixed in',
			'Cook shrimp'
		]),
		'https://www.garlicandzest.com/tangy-garlic-lime-shrimp-tacos/'
	],
	[
		(name = 'Creamy Cilantro Sauce'),
		(type = [ 'mexican', 'shrimp tacos', 'sauce', 'fish', 'seafood' ]),
		(ingredients = [
			'1 c sour cream',
			'3 tbsp fresh minced cilantro',
			'1 tsp lime zest',
			'1/4 tsp salt',
			'2 tbsp lime juice',
			'3 c mixed cabbage',
			'1 tbsp very minced jalopeno'
		]),
		(instructions = [ 'Combine & Serve!' ]),
		'https://tasty.co/recipe/grilled-shrimp-tacos-with-creamy-cilantro-sauce'
	]
];

const elementBody = document.querySelector('body');
const scriptTag = document.querySelector('script');

function addElements() {
	for (i = 0; i < allRecipes.length; i++) {
		const newH3 = document.createElement('h3');
		elementBody.insertBefore(newH3, scriptTag);
		newH3.innerText = allRecipes[i][0];
		newH3.insertAdjacentHTML('afterend', '<section class="link">Original Recipe</section>');
		newH3.insertAdjacentHTML('afterend', '<section class="instructions"><ul class="instUl"></ul></section>');
		newH3.insertAdjacentHTML('afterend', '<section class="ingredients"><ul class="ingUl"></ul></section>');
	}

	// const instrucSection = document.querySelectorAll('section .instructions');
}

addElements();

const elementsH3 = elementBody.querySelectorAll('h3');
const ingUl = Array.from(document.querySelectorAll('.ingUl'));
const instUl = Array.from(document.querySelectorAll('.instUl'));

function addIngElements() {
	allRecipes.forEach((recipe) => {
		let ingredients = recipe[2];
		ingredients.forEach((ingredient) => {
			const newLis = document.createElement('li');
			newLis.innerHTML = ingredient;
			newLis.className = 'ingLis';
			console.log(newLis);
			// ingUl.forEach((index) => {
			// 	index.insertAdjacentElement('afterbegin', newLis);
			// });
			for (let i = 0; i < newLis.length; i++) {
				ingUl[i].insertAdjacentElement('afterbegin', newLis);
			}
		});
		// const elementsLi = Array.from(document.querySelectorAll('.ingLis'));
		// console.log(elementsLi);
		// ingUl.innerHTML = elementsLi;
		//console.log(ingUl);
	});
}

// for (let i = 0; i < allRecipes.length; i++) {
// 	console.log(i);
// 	let ingredients = allRecipes[i][2];
// console.log(ingredients);
// ingredients.forEach((ingredient) => {
// 	const newLis = document.createElement('li');
// 	newLis.innerHTML = ingredient;
// 	console.log(newLis);
// });

// for (j = 0; j < ingredients.length; j++) {
// 	console.log(j);
// 	const newLis = document.createElement('li');
// 	newLis.innerHTML = ingredients[j];
// 	elementsUl.forEach((elementUl) => {
// 		elementUl.insertAdjacentElement('afterbegin', newLis);
// 	});
// }

addIngElements();

//
