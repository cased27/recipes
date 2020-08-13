//id, value, keyword are used to specifically identify different values within each recipe in order for them to appear within their proper <section> on the HTML pg. Each needs to be different/unique from the next; code won't work if they are named the same!

const allRecipes = [
	{
		name         : 'Tartar Sauce',
		id           : 'ingredientsId1',
		value        : 'instructionsId1',
		keyword      : 'linkId1',
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
		name         : 'Shrimp Taco Garlic Lime Seasoning',
		id           : 'ingredientsId2',
		value        : 'instructionsId2',
		keyword      : 'linkId2',
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
		name         : 'Shrimp Taco Creamy Cilantro Sauce',
		id           : 'ingredientsId3',
		value        : 'instructionsId3',
		keyword      : 'linkId3',
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

export default allRecipes;
// export { allRecipes };
