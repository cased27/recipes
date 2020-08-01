//allReciepes arrStructure[
// [0]name
// [1]link
// [2]type
// [3]ingredients
// [4]instructions
// ]

const allRecipes = [
	[
		(name = 'Tartar Sauce'),
		(link = 'https://natashaskitchen.com/tartar-sauce-recipe/'),
		(type = [ 'sauce', 'seafood', 'fish' ]),
		(ingredients = [
			'1 c mayonnaise',
			'1 c finely chopped dill pickles',
			'1 tbsp finely chopped fresh parsley or dill',
			'1 tsp lemon juice',
			'1 tsp sugar',
			'1/4 tsp freshly ground black pepper'
		]),
		(instructions = [ 'Combine & Serve!' ])
	],
	[
		(name = 'Garlic Lime Seasoning'),
		(link = 'https://www.garlicandzest.com/tangy-garlic-lime-shrimp-tacos/'),
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
		])
	],
	[
		(name = 'Creamy Cilantro Sauce'),
		(link = 'https://tasty.co/recipe/grilled-shrimp-tacos-with-creamy-cilantro-sauce'),
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
		(instructions = [ 'Combine & Serve!' ])
	]
];

const elementBody = document.querySelector('body');
const scriptTag = document.querySelector('script');

let elementH3;

function addElements() {
	for (i = 0; i < allRecipes.length; i++) {
		let elementH3 = document.createElement('h3');
		elementBody.insertBefore(elementH3, scriptTag);
		elementH3.innerText = allRecipes[i][0];
		elementH3.insertAdjacentHTML('afterend', '<ul></ul>');
	}
}
addElements();

let elementUl;

function addLiElements() {
	for (let i = 0; i < allRecipes.length; i++) {
		let ingredients = allRecipes[i][3];
		let elementUl = document.querySelector('ul');
		for (j = 0; j < ingredients.length; j++) {
			elementUl.insertAdjacentHTML('afterbegin', '<li></li>');
			let elementLi = document.querySelector('li');
			elementLi.innerText = ingredients[j];
		}
	}
}
addLiElements();

//if i make the elementUl a 'querySelector' i get the text
//but if it's a 'querySelectorAll' it doesn't work
