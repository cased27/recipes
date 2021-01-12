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
    name: 'Chicken / Turkey Pot Pie',
    ingredientsId: 'pPie1',
		instructionsId: 'pPie2',
		linkId: 'pPie3',
		recipeBodyId: 'pPie4',
    type: ['leftovers', 'dinner'],
		ingredients: [
			'2c frozen peas & carrots',
			'2c frozen green beans',
			'1c sliced celery',
			'2/3c butter',
			'2/c chopped onion',
			'2/3c flour',
			'1 tsp salt',
			'1 tsp black pepper',
			'1/2 tsp celery seed',
			'1/2 tsp onion powder',
			'1/2 tsp italian seasoning',
			'1 3/4 c chicken broth',
			'1 1/3 c milk',
			'4c cubed cooked meat',
			'4 (9") unbaked pie crusts (Pillsbury roll, bottom only, in souffle ramekins'
	],
		instructions: [
			'Preheat oven to 425',
			'Place peas, carrots, green beans and celery into saucepan',
			'Cover with water, bring to boil, an dsimmer over med-low heat until celery is tender (8 min)',
			'Drain veggies into colander and set aside',
			'Melt butter in saucepan over med heat',
			'Cook onion until translucent (about 5 min)',
			'Stir in 2/3c flour, salt, pepper, celery seed, onion powder, Italian seasoning. Slowly whisk in chicken broth and milk until mixture comes to simmer and thickens',
			'Remove from heat, stir the cooked veggies and meat into filling until well combined',
			'Fit the baking dishes with the pie crust and spoon filling into each. Roll the edge to seal (no need to cover the top)',
			'Bake 30-35 min or until golden brown and filling is bubbly',
			'Place aluminum foil on top to prevent the crust from over-cooking'
	],
		link: 'https://www.allrecipes.com/recipe/215447/dads-leftover-turkey-pot-pie/',
	},
{
    name: 'Cheese Souffle',
    ingredientsId: 'cSouffle1',
		instructionsId: 'cSouffle2',
		linkId: 'cSouffle3',
		recipeBodyId: 'cSouffle4',
    type: ['french', 'cheese', 'danish'],
		ingredients: [
			'1/4 c butter',
			'1/4 c flour',
			'1 1/4 c milk',
			'1/4 tsp cayenne',
			'1/4 tsp salt',
			'1 1/2 c shredded cheese (sharp cheddar, pepper-jack, gruyere, parmesan; mix and match)',
			'6 lrg eggs, separated',
			'1/4 tsp cream of tartar'
	],
		instructions: [
			'Preheat to 375',
			'Generously butter 2-quart souffle dish or 6 1.25-cup souffle dishes (if using small dishes separate them 2" apart in baking pan)',
			'Melt butter in pot over med heat',
			'Add flour, stir until smooth and bubbling',
			'Stir in milk, cayenne, and salt. Continue stirring until sauce boils and thickens (3-4 min) and remove from heat',
			'Add cheese and stir until melted',
			'Add egg yoks (yellows) an dstir until blended and smooth',
			'In mixer whisk egg whites, add cream of tartar until short, stiff, moist peaks form',
			'With flexible spatula, fold 1/3 of cheese sauce into whites until well blended',
			'Add remaining cheese sauce and gently fold in until blended',
			'Scrape batter into prepared souffle dish. If more than 3/4 full, use foil collar',
			'Draw a circle on the surface of batter with tip of knife  (about 1" from rim) to help form a crown while baking - if desired',
			'Bake at 375 until top is golden or deep brown and cracks look fairly dry (25-30 min for small dishes)'
	],
		link: 'https://www.sunset.com/recipe/classic-cheese-souffl'
		},
	{
    name: "Chicken Khoa Soi PASTE",
    ingredientsId: "kSoi1",
		instructionsId: "kSoi2",
    linkId: "kSoi3",
    recipeBodyId: "kSoi4",
    type: ['soup', 'thai', 'chiang mai'],
		ingredients: [
			'4 large dried New Mexico or guajillo chiles (stemmed, halved, seeded)',
			'2 med shallots, halved',
			'8 garlic cloves',
			'1 2" piece ginger (peeled, sliced)',
			'1/4 cup chopped cilantro stems',
			'1 tbsp ground coriander',
			'1 tbsp ground turmeric',
			'1 tsp curry powder'
	],
		instructions: [
			'Place chilis in pot of boiling water, cover, and let soak until softened (25-30 min; do not cook, just keep water hot)',
			'Drain chilis, reserving liquid',
			'Puree chilis, shallots, garlic, ginger, cilantro stems, coriander, turmeric, curry powder, and 2 tbps (or more) of chili soaking liquid until smooth'
	],
		link: 'https://www.bonappetit.com/recipe/chicken-khao-soi'
	},
	{
		name: "Chicken Khoa Soi SOUP",
		ingredientsId: "kSoiSoup1",
		instructionsId: "kSoiSoup2",
		linkId: "kSoiSoup3",
		recipeBodyId: "kSoiSoup4",
		type: ['soup', 'thai', 'chiang mai'],
		ingredients: [
			'2 tbsp vegetable oil',
			'2 14-oz unsweetened coconut milk cans',
			'2 cups low-sodium chicken broth',
			'1.5 lbs skinless, boneless chicken thighs (halved lengthwise)',
			'1 lb chinese egg noodles',
			'3 tbsp (or more) fish sauce',
			'1 tbsp light brown sugar',
			'salt (to taste)',
			'sliced red onioni, bean sprouts, cilantro sprigs, crispy fried onions/shallots, chili oil, lime wedges (for serving)'
	],
		instructions: [
			'Heat oil in large heavy pot over med heat. Add paste.',
			'Cook, stirring constantly, until slightly darkened (4-6 min)',
			'Add coconut milk and broth',
			'Bring to boil and add chicken',
			'Reduce heat and simmer until chicken is fork-tender (20-25 min)',
			'Transfer chicken to plate, let cool slightly, and shred',
			'Cook noodles according to package directions',
			'Add chicken back to broth with 3 tbsp fish sauce and sugar',
			'Season with salt (or more fish sauce if needed)',
			'Serve with desired toppings'
	],
			link: 'https://www.bonappetit.com/recipe/chicken-khao-soi'
	},
	{
		name           : 'Tartar Sauce',
		ingredientsId  : 'tSauce1',
		instructionsId : 'tSauce2',
		linkId         : 'tSauce3',
		recipeBodyId   : 'tSauce4',
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
		recipeBodyId   : 'gSeason4',
		type           : [ 'mexican', 'tacos', 'seasoning', 'fish', 'seafood' ],
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
		recipeBodyId   : 'cSauce4',
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
	},
	{
		name           : 'Meatballs',
		ingredientsId  : 'mballs1',
		instructionsId : 'mballs2',
		linkId         : 'mballs3',
		recipeBodyId   : 'mballs4',
		type           : [ 'italian', 'beef', 'pasta' ],
		ingredients    : [
			'2 lbs ground beef',
			'1/2 lb ground pork',
			'2 c Italian flavored bread crumbs (Progresso brand preferred)',
			'4 eggs',
			'1 c milk',
			'1 c parsley',
			'1 c (+) finely grated Parmesan cheese',
			'1 tbsp olive oil',
			'2 garlic cloves (+) finely chopped',
			'1 onion (+) minced (yellow or sweet)',
			'1/2 c pine nuts (optional)'
		],
		instructions   : [
			'Mix all ingredients in a large bowl thoroughly',
			'Let stand for 30 min',
			'Preheat oven to 350ºF',
			'Place foil on baking sheet',
			'Place meatballs in med-sized balls onto baking sheet',
			'Bake for 25 min'
		],
		link           : 'https://www.bigoven.com/recipe/doms-moms-meatballs/168707'
	},
	{
		name           : 'Roasted Garlic & Cheese',
		ingredientsId  : 'gCheese1',
		instructionsId : 'gCheese2',
		linkId         : 'gCheese3',
		recipeBodyId   : 'gCheese4',
		type           : [ 'italian', 'cheese', 'appetizer' ],
		ingredients    : [
			'2 bulbs garlic, unpeeled, with tops sliced off',
			'3 tbsp butter',
			'1/3 c extra-virgin olive oil',
			'Salt & Pepper',
			'1 squeeze honey',
			'2 fresh rosemary sprigs',
			'3 bay leaves',
			"7-9 oz / 200-250g Camembert Cheese (plastic wrap & lid removed but placed in it's original wooden box)",
			'1 baguette/ bread of choice'
		],
		instructions   : [
			'Preheat oven to 400ºF',
			'Place the garlic, cut side down, in a large roasting pan.',
			'Add the butter, oil, a pinch of salt, a couple of twists of black pepper, the honey, rosemary, and bay leaves',
			'Bake for 30-35 min',
			'Remove from oven, cut a large cross in the top of the Camembert, and put back in oven for an additional 5-10 min',
			'warm bread (if desired)',
			'Once the garlic is soft and the cheese is gooey, remove from oven'
		],
		link           : 'https://www.foodnetwork.com/recipes/camembert-and-roasted-garlic-1962245'
	},
	{
		name           : 'Fish Taco Sauce',
		ingredientsId  : 'ftSauce1',
		instructionsId : 'ftSauce2',
		linkId         : 'ftSauce3',
		recipeBodyId   : 'ftSauce4',
		type           : [ 'fish', 'seafood', 'tacos', 'sauce', 'mexican' ],
		ingredients    : [
			'1/2 c sour cream',
			'1/3 c mayonnaise',
			'2 tbsp lime juice',
			'1 tsp garlic powder',
			'1 tsp Sriracha sauce (or to taste)'
		],
		instructions   : [ 'Combine all ingredients and mix well' ],
		link           : 'https://natashaskitchen.com/fish-tacos-recipe/'
	},
	{
		name           : 'Fish Taco Seasoning',
		ingredientsId  : 'ftSeason1',
		instructionsId : 'ftSeason2',
		linkId         : 'ftSeason3',
		recipeBodyId   : 'ftSeason4',
		type           : [ 'fish', 'seafood', 'tacos', 'seasoning', 'mexican' ],
		ingredients    : [ '1/2 tsp cumin', '1/2 tsp cayenne pepper', '1 tsp salt', '1/4 tsp black pepper' ],
		instructions   : [
			'Mix all ingredients',
			'Evenly spread over both sides of fish',
			'Preheat oven to 375F',
			'Place fish on foil on baking sheet',
			'Add a dot of butter and sprinkle of olive oil over fish',
			'Bake for 20-25 min'
		],
		link           : 'https://natashaskitchen.com/fish-tacos-recipe/'
	},
	{
		name           : 'Salmon: Baked Honey & Garlic',
		ingredientsId  : 'bSalmon1',
		instructionsId : 'bSalmon2',
		linkId         : 'bSalmon3',
		recipeBodyId   : 'bSalmon4',
		type           : [ 'italian', 'seafood', 'fish', 'baked' ],
		ingredients    : [
			'2 lemons, thinly sliced',
			'1 large salmon filet (~3 lb)',
			'salt & black pepper',
			'6 tbsp butter, melted',
			'2 tbsp honey',
			'3 cloves garlic, minced',
			'1 tsp chopped thyme leaves',
			'1 tsp dried oregano',
			'fresh parsley, chopped (optional garnish)'
		],
		instructions   : [
			'Preheat oven to 350F',
			'Line baking sheet with foil and grease with olive oil/butter',
			'lay lemon slices in center of the foil (under the fish)',
			'season both sides of salmon with salt & pepper',
			'place on top of lemon slices',
			'in a small bowl, whisk together butter, honey, garlic, thyme, and oregano',
			'Pour over salmon and fold up foil around salmon',
			'Bake 25 min (or until salmon is cooked through',
			'Broil for 2 min to thicken butter mixture',
			'garnish with parsley before serving, if desired'
		],
		link           : 'https://www.delish.com/cooking/recipe-ideas/recipes/a55315/best-baked-salmon-recipe/'
	},
	{
		name           : 'Macaroni Salad',
		ingredientsId  : 'macSalad1',
		instructionsId : 'macSalad2',
		linkId         : 'macSalad3',
		recipeBodyId   : 'macSalad4',
		type           : [ 'italian', 'salad', 'fresh' ],
		ingredients    : [
			'SALAD:',
			'8 oz (250g) dry macaroni pasta',
			'1/2 med red bell pepper (capsicum), seeded and finely chopped',
			'1/2 medium sweet onion, finely diced',
			'2 small carrot, peeled and shredded',
			'3 dill pickles, finely chopped',
			'DRESSING:',
			'1 c mayonnaise',
			'1/4 c sour cream',
			'2 tbsp vinegar, (adjust to taste)',
			'1 tbsp Dijon mustard',
			'2 tbsp fresh parsley, chopped',
			'1 tbsp fresh chives',
			'1 tsp sugar',
			'1 1/2 tsp minced garlic',
			'1/4 tsp salt',
			'1/2 tsp pepper'
		],
		instructions   : [
			'Bring lrg pot of salted water to boil over high heat',
			'Add pasta and boil until al-dente',
			'Chop all Salad ingredients and add them to a large serving bowl',
			'Mix all dressing ingredients together in small bowl',
			'When pasta is cooked, drain and rinse in cool running water',
			'Combine Salad & pasta and mix well',
			'add Dressing and mix well (adjust salt, vinegar, and pepper to taste)',
			'set aside for 15 min to let ingredients warm close to room temp and settle into each other prior to serving'
		],
		link           : 'https://cafedelites.com/macaroni-salad/'
	},
	{
		name           : 'Pizza Dough (regular)',
		ingredientsId  : 'regPDough1',
		instructionsId : 'regPDough2',
		linkId         : 'regPDough3',
		recipeBodyId   : 'regPDough4',
		type           : [ 'italian', 'pizza' ],
		ingredients    : [
			'2 - 2 1/3 c all-purpose flour',
			'1 packet instant yeast (2 1/4 tsp)',
			'1 1/2 tsp sugar',
			'3/4 tsp salt',
			'1/4 tsp garlic powder and/or dried basil leaves',
			'2 tbsp (+) olive oil',
			'3/4 c warm water'
		],
		instructions   : [
			'Combine 1 c flour, yeast, sugar, salt, (and garlic, if desired) into large (mixing) bowl',
			'Add olive oil & warm water. Mix very well with wooden spoon (or mixer hook',
			'Gradually add the other cup of flour (and any additional flour) until the dough is a cohesive, elastic ball and beginning to pull away from sides of bowl. The dough will be sticky but manageable',
			'Get another large bowl and drizzle generously with olive oil and rub up on sides of bowl',
			'Dust hands with flour and form the dough into a round ball',
			'Transfer into oiled bowl and roll around bowl to coat with oil',
			'Cover bowl with plastic wrap and place in a warm place for 30 min for dough to rise (it should double in size)',
			'Preheat oven to 425ºF',
			'Gently deflate pizza and knead it breifly, only 3-5 times',
			'add parchment paper to baking sheet',
			'work dough out into an even, flat surface on parchment paper',
			'poke holes in dough to avoid bubbles from forming (optional)',
			'add a layer of pizza sauce. Then bake in oven for 5-7 min',
			'remove from oven, add cheese and rest of toppings, then replace in oven for another 5-10 min'
		],
		link           : 'https://sugarspunrun.com/the-best-pizza-dough-recipe/'
	},
	{
		name           : 'Sourdough Bread',
		ingredientsId  : 'sourBread1',
		instructionsId : 'sourBread2',
		linkId         : 'sourBread3',
		recipeBodyId   : 'sourBread4',
		type           : [ 'italian', 'bread' ],
		ingredients    : [
			'STARTER:',
			'2 c warm water',
			'1 packet (2 1/4 tsp) active dry yeast',
			'3 1/2 c flour',
			'2 tbsp sugar',
			'BREAD:',
			'4 c flour',
			'2 tsp salt',
			'1 1/4 c water',
			'1 c starter, stirred well before using'
		],
		instructions   : [
			'In a glass bowl, add water and yeast. Mix yeast into the water and let it sit for a couple minutes.',
			'Add in the rest of the ingredients for the starter. Mix well until everything is fully incorporated.',
			'Wrap the bowl with clear wrap, making sure not to tightly seal the bowl. Let the starter breathe a little and keep it in a dark place at room temperature.Stir every 12 hours until making the dough. The starter will rise and shrink each day and you should see bubbles, letting you know that the yeast is being activated!',
			'On day 5, combine all ingredients into a bowl, and knead for 10 minutes on low if using a machine; if kneading by hand, knead for 20 minutes until dough is stretchy yet doesn’t stick to your hands.',
			'While the dough is kneading, store your starter for future use.Your starter will last forever as long as you maintain and care for it.It can stay in the fridge',
			'To replenish your starter, simply add 1 cup of flour(125g) and ½ cup of water(120ml), mix, and place it back in the fridge.Leave it out overnight to get to room temperature before preparing the dough.',
			'Place kneaded dough into a large floured bowl with a towel over the top, then sprinkle flour and let it rise for 12 hours.',
			'Place risen dough onto a floured board and knead for a few minutes.',
			'Place it into a floured proofing basket or a medium bowl, sprinkle flour and let it rise for another 4 hours.',
			'Preheat oven to 480ºF(250ºC).',
			'Flip the dough onto a parchment paper, and transfer the dough and paper into a large cast- iron dutch oven.',
			'Score the top of the bread.',
			'Place the lid on top and bake for 30 minutes.',
			'Take the lid off and bake for another 15 minutes or until the crust is golden brown.',
			'Transfer onto a cooling rack and let it rest for an hour. Knock the bottom of the bread to listen for a hollow knock.'
		],
		link           : 'https://tasty.co/recipe/how-to-make-homemade-sourdough-bread'
	},
	{
		name           : 'Sushi Rice',
		ingredientsId  : 'sRice1',
		instructionsId : 'sRice2',
		linkId         : 'sRice3',
		recipeBodyId   : 'sRice4',
		type           : [ 'japanese', 'sushi', 'rice', 'fish' ],
		ingredients    : [
			'2 c sushi grade rice (or round/arborio if unavail)',
			'2 3/4 c water',
			'7 tbsp rice vinegar (unflavored preferred)',
			'3 tsp white sugar (omit if rice vinegar is flavored)'
		],
		instructions   : [
			'Run rice in strainer until the water comes out clear',
			'put rice and water in large pot and let stand for 30m(stir lightly)',
			'Cover pot and bring to boil over med heat',
			'once boiling, reduce to low heat and simmer for 25m(or until water evaporates)',
			'Remove from heat and let stand for 15m',
			'in a separate small bowl, mix together the rice vinegar and sugar until sugar is dissolved',
			'Add the vinegar mixture to the rice and fluff it into the rice using a large fork',
			'Allow the rice to cool completely before using for sushi'
		],
		link           : 'https://www.lafujimama.com/sushi-rice-the-secret-behind-delicious-sushi/'
	},
	{
		name           : 'Sushi Fish Prep',
		ingredientsId  : 'sfPrep1',
		instructionsId : 'sfPrep2',
		linkId         : 'sfPrep3',
		recipeBodyId   : 'sfPrep4',
		type           : [ 'japanese', 'seafood', 'fish' ],
		ingredients    : [
			'make sure to buy ‘sushi - grade’ fish',
			'If not, you must freeze the fish solid to kill off parasites. The fish needs to be frozen for at least 24h at -30 C or it can be frozen at -4 F for 7 days',
			'If frozen, defrost the fish completely in the fridge the night before use',
			'Preferred fish: salmon, ahi tuna, crab'
		],
		instructions   : [
			'For salmon, cut against the grain of the flesh lines',
			'For ahi tuna, cut off rounded chunk and filet the rest'
		],
		link           : 'https://www.youtube.com/watch?time_continue=96&v=ykk4dHMsSz4&feature=emb_title'
	},
	{
		name           : 'Sushi Rolls',
		ingredientsId  : 'sushiRolls1',
		instructionsId : 'sushiRolls2',
		linkId         : 'sushiRolls3',
		recipeBodyId   : 'sushiRolls4',
		type           : [ 'japanese', 'fish', 'seafood' ],
		ingredients    : [
			'Sushi Rice - prepared (see recipe for details)',
			'Sushi Fish - prepared (see recipe for details)',
			'Sushi Paper',
			'Bamboo rollers (helpful but optional)',
			'Clear plastic wrap',
			'small bowl of water',
			'Sushi insides/additions - prepared (mango, avocado, cucumber, all sliced long and thin)',
			'sauces (spicy mayo, wasabi, soy sauce, ginger)'
		],
		instructions   : [
			'on a flat surface, place a square of plastic wrap on the surface that is larger than the size of your sushi paper',
			'place the sushi paper, smooth side down, on the plastic wrap',
			'dip your hands in the water bowl before getting the rice(because it is super sticky)',
			'get a handful of rice and press it on your sushi paper.leave about 1 in of sushi paper paper blank (without rice) which will be used to seal the wrap after rolling.You do not need too much rice but it should be relatively evenly spread on the paper',
			'Add you insides, fish, sauces, etc towards the bottom of the sushi paper',
			'Roll the sushi using the plastic wrap and once you have made one full rotation, use the plastic wrap to delicately squeeze the roll tight. Then lift the plastic wrap and continue the roll (without rolling the plastic wrap into the sushi)',
			'when you get to the end of the sushi paper, dip your finger in the water bowl and dab the top of the sushi paper with the water to slightly wet it along the top. Then roll the rest of your sushi roll onto the wetted paper to seal the roll',
			'To cut, first you cut the roll in half. Then you stack the 2 rolls up vertically (ie in rows) and cut them together to your preferred size'
		],
		link           : 'https://www.youtube.com/watch?v=yGG01tj9wi4&t=163s'
	},
	{
		name           : 'Pizza Dough (Sourdough)',
		ingredientsId  : 'sdoughPizza1',
		instructionsId : 'sdoughPizza2',
		linkId         : 'sdoughPizza3',
		recipeBodyId   : 'sdoughPizza4',
		type           : [ 'italian', 'pizza' ],
		ingredients    : [
			'1 c sourdough starter',
			'1/2 c lukewarm water',
			'2 1/2 c all-purpose flour',
			'1 tsp salt',
			'1/2 tsp instant/ active yeast'
		],
		instructions   : [
			'Stir any liquid on top of your refrigerated starter back into it before measuring 1 cup into a large mixing bowl.',
			'Add the water, flour, salt, and yeast. Mix to combine, then knead for about 7 minutes in a mixer with the dough hook, until the dough wraps itself around the hook and cleans the side of the bowl.',
			'Place the dough in a large lightly floured bowl, cover and let rise until almost doubled in bulk (~2-4 hrs). For a faster rise, place the dough in a warm spot, or double the yeast.',
			'Add parchment paper to the baking sheet.',
			'Roll dough flat(and optionally drizzle with olive oil',
			'If the dough is pulling back, let rest for 15 min before continuing',
			'Preheat oven to 450ºF',
			'Add sauce to the dough and bake for 5-7 min',
			'Remove from oven, add cheese and other toppings, then continue baking for 7-10 min more',
			''
		],
		link           : 'https://www.kingarthurbaking.com/recipes/sourdough-pizza-crust-recipe'
	},
	{
		name           : 'Breakfast Burrito',
		ingredientsId  : 'bBurr1',
		instructionsId : 'bBurr2',
		linkId         : 'bBurr3',
		recipeBodyId   : 'bBurr4',
		type           : [ 'mexican', 'breakfast' ],
		ingredients    : [
			'crispy hash browns',
			'eggs (not seasoned)',
			'potato chips (salted, ruffles salt & pepper)',
			'sausage',
			'bacon',
			'avocado',
			'sour cream',
			'cheese',
			'toasted tortilla',
			'salsa'
		],
		instructions   : [
			'cook the hash browns until crispy, set aside',
			'cook the sausage and bacon, set aside',
			'cook the eggs, without seasoning, using some of the sausage/bacon grease, set aside',
			'slice avocado',
			'add all ingredients to tortilla, wrap tortilla, and toast the wrapped burrito on the skillet until browned and crispy',
			"This is Derek's recipe but the link is for another very good recipe"
		],
		link           : 'https://www.onceuponachef.com/recipes/breakfast-burritos.html'
	},
	{
		name           : 'Coleslaw',
		ingredientsId  : 'slaw1',
		instructionsId : 'slaw2',
		linkId         : 'slaw3',
		recipeBodyId   : 'slaw4',
		type           : [ 'side', 'salad' ],
		ingredients    : [
			'purple cabbage',
			'dill',
			'finely chopped dill pickles',
			'Lemon',
			'salt & pepper',
			'garlic',
			'paprika / red pepper flakes',
			'pickle juice',
			'mayonnaise / sour cream',
			'diced jalopeno'
		],
		instructions   : [
			'prepare and mix the ingredients well',
			"This is Derek's recipe but the link is for another very good recipe"
		],
		link           : 'https://www.allrecipes.com/recipe/240784/easy-coleslaw-dressing/'
	},
	{
		name           : 'Texas Queso Dip',
		ingredientsId  : 'tqDip1',
		instructionsId : 'tqDip2',
		linkId         : 'tqDip3',
		recipeBodyId   : 'tqDip4',
		type           : [ 'mexican', 'chips', 'dip', 'cheese' ],
		ingredients    : [
			'1 block velveeta cheese',
			'2 cans rotel, chilled',
			'1 can black beans (include liquid)',
			'milk',
			'avocado, sliced',
			'sour cream'
		],
		instructions   : [
			'Cut the block of cheese into 1/2" cubes',
			'Pour in 1 can of rotel with juice. Drain the other can and add to mixture',
			'Add 1 can  black beans with juice',
			'Mix it all together. If too thick, add milk to thin it out',
			'Once melted, add diced avocado and a touch of sour cream (to taste)',
			"This is Lauren's recipe. The link is for a highly recommended similar recipe"
		],
		link           : 'https://www.thekitchn.com/recipe-rotel-famous-queso-dip-recipes-from-the-kitchn-208398'
	},
	{
		name           : 'Cookies: Brown Butter Salties',
		ingredientsId  : 'bbsalt1',
		instructionsId : 'bbsalt2',
		linkId         : 'bbsalt3',
		recipeBodyId   : 'bbsalt4',
		type           : [ 'dessert', 'cookies', 'sweets' ],
		ingredients    : [
			'3/4 c butter',
			'1/2 c lightly packed brown sugar',
			'1 tsp vanilla',
			'1 1/3 c flour',
			'1 tsp baking powder',
			'pinch of coarse sea salt',
			'handful of sliced almonds for decoration (optional)'
		],
		instructions   : [
			'Preheat the oven to 325ºF. Line a baking sheet with parchment paper',
			'In saucepan over medium heat, melt butter until it starts to brown (be careful not to burn it; let it melt, brown, and the foam subside to form a nutty color)',
			'Pour butter into medium bowl and stir in brown sugar and vanilla.',
			'In a separate small bowl, whisk together the flour and baking powder',
			'With a spoon, stir four mixture into butter mixture until well combined',
			'Drop dough onto baking sheet, sprinkle with sea salt and lightly press it into the top of the cookies. Add almonds to the top of cookies',
			'Bake for 12 min'
		],
		link           : 'https://wakeandbakemama.com/2018/06/11/brown-butter-salties/'
	},
	{
		name           : 'Sausage Kale Pasta',
		ingredientsId  : 'skalepasta1',
		instructionsId : 'skalepasta2',
		linkId         : 'skalepasta3',
		recipeBodyId   : 'skalepasta4',
		type           : [ 'pasta', 'italian', 'sausage', 'kale' ],
		ingredients    : [
			'1 block Pecornino or Parmesan Cheese',
			'1 package Italian sausage',
			'1 package Kale',
			'16 oz heavy cream',
			'1 c chicken broth',
			'1/2 bag quinoa + rice pasta'
		],
		instructions   : [
			'Cook pasta and set aside',
			'Cook sausage',
			'add 1/2 the cream and all the broth to the sausage. Lower heat to simmer until sausage thickens (approx 7-10 min)',
			'add 1/2 - 3/4 of the bag of kale. Simmer until kale is limp (use lid)',
			'Add pasta and mix together. Add desired amount of cheese'
		],
		link           : 'https://kalynskitchen.com/recipe-for-pasta-with-hot-italian/'
	}
];
