// structure of each recipe addition:
// {
//     name:
//     ingredientsId:
//     instructionsId:
//     linkId:
//     recipeBodyId:
//     type:
//     ingredients:
//     instructions:
//     link:
// 	}

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

export default allRecipes;
// export { allRecipes };
