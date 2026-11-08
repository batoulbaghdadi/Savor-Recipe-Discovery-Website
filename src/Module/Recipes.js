
 const recipes = [
  
  // BREAKFAST
  

  {
    id: 1,
    name: "Avocado Toast",
    category: "Breakfast",
    prepTime: 5,
    cookTime: 5,
    totalTime: 10,
    servings: 2,
    difficulty: "Easy",
    image: "../assets/BreakFast/AvocadoToast.jpeg",
    description: "Crispy sourdough toast topped with creamy avocado and poached eggs.",
    tags: ["Healthy", "Vegetarian", "Quick"],
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "2 eggs",
      "1 teaspoon lemon juice",
      "1 tablespoon olive oil",
      "Salt and black pepper",
      "Chili flakes (optional)"
    ],
    instructions: [
      "Toast the sourdough bread until golden and crispy.",
      "Cut the avocado in half, remove the pit, and scoop the flesh into a bowl.",
      "Mash the avocado with lemon juice, salt, and black pepper.",
      "Poach the eggs in gently simmering water for about 3 minutes.",
      "Spread the mashed avocado over the toasted bread.",
      "Place one poached egg on each slice.",
      "Drizzle with olive oil and sprinkle with chili flakes before serving."
    ]
  },

  {
    id: 2,
    name: "Fluffy Pancakes",
    category: "Breakfast",
    prepTime: 10,
    cookTime: 15,
    totalTime: 25,
    servings: 4,
    difficulty: "Easy",
    image: "../assets/BreakFast/FluffyPancakes.jpeg",
    description: "Soft, fluffy golden pancakes served with maple syrup and fresh strawberries.",
    tags: ["Sweet", "Vegetarian", "Family Favorite"],
    ingredients: [
      "1 1/2 cups all-purpose flour",
      "2 tablespoons sugar",
      "2 teaspoons baking powder",
      "1/4 teaspoon salt",
      "1 egg",
      "1 1/4 cups milk",
      "3 tablespoons melted butter",
      "1 teaspoon vanilla extract",
      "Maple syrup and strawberries for serving"
    ],
    instructions: [
      "Mix the flour, sugar, baking powder, and salt in a large bowl.",
      "In another bowl, whisk the egg, milk, melted butter, and vanilla.",
      "Pour the wet ingredients into the dry ingredients.",
      "Mix gently until combined. Small lumps are fine.",
      "Heat a lightly buttered pan over medium heat.",
      "Pour about 1/4 cup of batter for each pancake.",
      "Cook until bubbles appear, then flip and cook until golden.",
      "Serve with maple syrup and fresh strawberries."
    ]
  },

  {
    id: 3,
    name: "Berry Smoothie Bowl",
    category: "Breakfast",
    prepTime: 10,
    cookTime: 0,
    totalTime: 10,
    servings: 1,
    difficulty: "Easy",
    image: "../assets/BreakFast/Bowl.jpeg",
    description: "A refreshing smoothie bowl with berries, banana, creamy yogurt, and crunchy granola.",
    tags: ["Healthy", "Vegetarian", "No-Cook"],
    ingredients: [
      "1 frozen banana",
      "1/2 cup frozen strawberries",
      "1/2 cup frozen mixed berries",
      "1/3 cup plain Greek yogurt",
      "2 tablespoons milk",
      "2 tablespoons granola",
      "Fresh strawberries for topping",
      "1 teaspoon chia seeds"
    ],
    instructions: [
      "Add the frozen banana, strawberries, mixed berries, yogurt, and milk to a blender.",
      "Blend until smooth and thick.",
      "Add a little more milk if needed, but keep the mixture thick.",
      "Pour into a serving bowl.",
      "Top with granola, fresh strawberries, and chia seeds.",
      "Serve immediately."
    ]
  },

  {
    id: 4,
    name: "French Toast",
    category: "Breakfast",
    prepTime: 5,
    cookTime: 10,
    totalTime: 15,
    servings: 2,
    difficulty: "Easy",
    image: "../assets/BreakFast/FrenchToast.jpeg",
    description: "Golden, buttery French toast with a soft center and a hint of cinnamon.",
    tags: ["Sweet", "Vegetarian", "Quick"],
    ingredients: [
      "4 slices thick bread",
      "2 eggs",
      "1/2 cup milk",
      "1 teaspoon vanilla extract",
      "1/2 teaspoon cinnamon",
      "1 tablespoon butter",
      "1 tablespoon sugar",
      "Powdered sugar and berries for serving"
    ],
    instructions: [
      "Whisk the eggs, milk, vanilla, cinnamon, and sugar in a shallow bowl.",
      "Dip each slice of bread into the mixture, coating both sides.",
      "Melt butter in a pan over medium heat.",
      "Place the bread slices in the pan.",
      "Cook for 2–3 minutes on each side until golden brown.",
      "Serve warm with powdered sugar and fresh berries."
    ]
  },


  // LUNCH


  {
    id: 5,
    name: "Creamy Chicken Alfredo",
    category: "Lunch",
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 3,
    difficulty: "Easy",
    image: "../assets/Lunch/Alfredo.jpeg",
    description: "Tender chicken and fettuccine pasta coated in a rich, creamy Parmesan sauce.",
    tags: ["Pasta", "Comfort Food", "Popular"],
    ingredients: [
      "250g fettuccine pasta",
      "300g chicken breast",
      "1 tablespoon olive oil",
      "2 tablespoons butter",
      "2 garlic cloves, minced",
      "1 cup cooking cream",
      "1/2 cup grated Parmesan cheese",
      "Salt and black pepper",
      "Fresh parsley"
    ],
    instructions: [
      "Cook the fettuccine in salted boiling water according to the package instructions.",
      "Cut the chicken into strips and season with salt and pepper.",
      "Heat olive oil in a pan and cook the chicken until golden and fully cooked.",
      "Remove the chicken and set aside.",
      "In the same pan, melt the butter and sauté the garlic for about 30 seconds.",
      "Add the cooking cream and simmer gently for 2–3 minutes.",
      "Stir in the Parmesan cheese until the sauce becomes smooth.",
      "Add the cooked pasta and chicken to the sauce.",
      "Toss everything together and garnish with fresh parsley."
    ]
  },

  {
    id: 6,
    name: "Rice Bowl",
    category: "Lunch",
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    servings: 2,
    difficulty: "Easy",
    image: "../assets/Lunch/RiceBowl.jpeg",
    description: "A colorful bowl of seasoned rice, grilled chicken, fresh vegetables, and creamy yogurt sauce.",
    tags: ["Healthy", "Mediterranean", "High Protein"],
    ingredients: [
      "1 cup basmati rice",
      "250g chicken breast",
      "1 cucumber",
      "1 tomato",
      "1/2 avocado",
      "1 tablespoon olive oil",
      "1/2 teaspoon paprika",
      "1/2 teaspoon garlic powder",
      "Salt and black pepper",
      "1/2 cup Greek yogurt",
      "1 teaspoon lemon juice"
    ],
    instructions: [
      "Rinse the rice and cook according to the package instructions.",
      "Season the chicken with paprika, garlic powder, salt, and pepper.",
      "Heat olive oil in a pan and cook the chicken until fully cooked.",
      "Cut the cucumber and tomato into small pieces.",
      "Prepare the sauce by mixing Greek yogurt with lemon juice and a pinch of salt.",
      "Divide the cooked rice between two bowls.",
      "Add the sliced chicken, cucumber, tomato, and avocado.",
      "Drizzle with the yogurt sauce and serve."
    ]
  },

  {
    id: 7,
    name: "Creamy Mushroom Risotto",
    category: "Lunch",
    prepTime: 10,
    cookTime: 30,
    totalTime: 40,
    servings: 3,
    difficulty: "Medium",
    image: "../assets/Lunch/Risotto.jpeg",
    description: "Creamy Italian rice cooked slowly with mushrooms, butter, and Parmesan cheese.",
    tags: ["Vegetarian", "Italian", "Comfort Food"],
    ingredients: [
      "1 cup Arborio rice",
      "200g mushrooms, sliced",
      "1 small onion, finely chopped",
      "2 garlic cloves, minced",
      "4 cups warm vegetable broth",
      "2 tablespoons butter",
      "1 tablespoon olive oil",
      "1/3 cup grated Parmesan cheese",
      "Salt and black pepper",
      "Fresh parsley"
    ],
    instructions: [
      "Warm the vegetable broth in a saucepan and keep it hot.",
      "Heat olive oil and one tablespoon of butter in a large pan.",
      "Add the onion and cook until soft.",
      "Add the garlic and mushrooms and cook until the mushrooms are tender.",
      "Stir in the Arborio rice and cook for one minute.",
      "Add one ladle of warm broth and stir until absorbed.",
      "Continue adding broth one ladle at a time, stirring frequently.",
      "Cook for about 18–20 minutes until the rice is creamy and tender.",
      "Stir in the remaining butter and Parmesan cheese.",
      "Season with salt and pepper and garnish with parsley."
    ]
  },

  {
    id: 8,
    name: "Chicken Pesto Pasta",
    category: "Lunch",
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 3,
    difficulty: "Easy",
    image: "../assets/Lunch/PestoPasta.jpeg",
    description: "A delicious combination of pasta, juicy chicken, basil pesto, and Parmesan.",
    tags: ["Pasta", "Italian", "Quick"],
    ingredients: [
      "250g penne pasta",
      "250g chicken breast",
      "3 tablespoons basil pesto",
      "1 tablespoon olive oil",
      "1/4 cup cooking cream",
      "1/4 cup grated Parmesan cheese",
      "1 garlic clove, minced",
      "Salt and black pepper",
      "Fresh basil leaves"
    ],
    instructions: [
      "Cook the penne pasta according to the package instructions.",
      "Cut the chicken into bite-sized pieces.",
      "Heat olive oil in a pan and cook the chicken until golden and fully cooked.",
      "Add the minced garlic and cook for 30 seconds.",
      "Stir in the basil pesto and cooking cream.",
      "Add a little pasta water to loosen the sauce if necessary.",
      "Add the cooked pasta and toss until coated.",
      "Stir in Parmesan cheese and season with salt and pepper.",
      "Garnish with fresh basil before serving."
    ]
  },

  
  // DINNER
 

  {
    id: 9,
    name: "Lemon Garlic Salmon",
    category: "Dinner",
    prepTime: 10,
    cookTime: 20,
    totalTime: 30,
    servings: 2,
    difficulty: "Easy",
    image: "../assets/Dinner/Salmon.jpeg",
    description: "Tender salmon fillets baked with lemon, garlic, herbs, and roasted vegetables.",
    tags: ["Healthy", "Seafood", "High Protein"],
    ingredients: [
      "2 salmon fillets",
      "2 tablespoons olive oil",
      "2 garlic cloves, minced",
      "1 lemon",
      "1 teaspoon dried oregano",
      "Salt and black pepper",
      "200g asparagus",
      "200g baby potatoes",
      "Fresh parsley"
    ],
    instructions: [
      "Preheat the oven to 200°C.",
      "Cut the baby potatoes in half and boil for about 8 minutes.",
      "Place the potatoes and asparagus on a baking tray.",
      "Drizzle the vegetables with olive oil and season with salt and pepper.",
      "Mix the garlic, olive oil, lemon juice, oregano, salt, and pepper.",
      "Place the salmon fillets on the tray and brush with the garlic mixture.",
      "Bake for 12–15 minutes, depending on the thickness of the salmon, until cooked through.",
      "Serve with fresh lemon slices and parsley."
    ]
  },

  {
    id: 10,
    name: "Classic Lasagna",
    category: "Dinner",
    prepTime: 25,
    cookTime: 45,
    totalTime: 70,
    servings: 6,
    difficulty: "Medium",
    image: "../assets/Dinner/Lasagna.jpeg",
    description: "Layers of pasta, rich meat sauce, creamy béchamel, and melted cheese.",
    tags: ["Italian", "Comfort Food", "Family Favorite"],
    ingredients: [
      "9 lasagna sheets",
      "400g ground beef",
      "1 onion, chopped",
      "2 garlic cloves, minced",
      "400g tomato sauce",
      "2 tablespoons tomato paste",
      "2 tablespoons olive oil",
      "2 cups milk",
      "2 tablespoons butter",
      "2 tablespoons flour",
      "1 cup shredded mozzarella",
      "1/2 cup grated Parmesan",
      "Salt and black pepper",
      "1/2 teaspoon dried oregano"
    ],
    instructions: [
      "Preheat the oven to 180°C.",
      "Heat olive oil in a pan and cook the onion until soft.",
      "Add garlic and ground beef. Cook until browned.",
      "Add tomato sauce, tomato paste, oregano, salt, and pepper.",
      "Simmer the meat sauce for 15 minutes.",
      "For the béchamel, melt butter in a saucepan.",
      "Add flour and whisk for one minute.",
      "Gradually pour in the milk while whisking until smooth and thick.",
      "Spread a layer of meat sauce in a baking dish.",
      "Add lasagna sheets, béchamel, and mozzarella.",
      "Repeat the layers until all ingredients are used.",
      "Finish with béchamel, mozzarella, and Parmesan.",
      "Bake for 35–40 minutes until golden and bubbling.",
      "Allow to rest for 10 minutes before slicing."
    ]
  },

  {
    id: 11,
    name: "Creamy Garlic Chicken",
    category: "Dinner",
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    servings: 3,
    difficulty: "Easy",
    image: "../assets/Dinner/GarlicChicken.jpeg",
    description: "Juicy chicken breasts in a smooth garlic cream sauce with herbs and Parmesan.",
    tags: ["High Protein", "Comfort Food", "Popular"],
    ingredients: [
      "3 chicken breasts",
      "1 tablespoon olive oil",
      "2 tablespoons butter",
      "4 garlic cloves, minced",
      "1 cup cooking cream",
      "1/2 cup chicken broth",
      "1/4 cup grated Parmesan",
      "1 teaspoon dried thyme",
      "Salt and black pepper",
      "Fresh parsley"
    ],
    instructions: [
      "Season the chicken breasts with salt, pepper, and thyme.",
      "Heat olive oil in a large pan over medium heat.",
      "Cook the chicken for about 5–7 minutes per side until fully cooked.",
      "Remove the chicken and set aside.",
      "Melt butter in the same pan.",
      "Add garlic and cook for about 30 seconds.",
      "Pour in the chicken broth and cooking cream.",
      "Add Parmesan and stir until the sauce thickens slightly.",
      "Return the chicken to the pan and simmer for 3–4 minutes.",
      "Garnish with fresh parsley and serve."
    ]
  },

  {
    id: 12,
    name: "Italian Meatballs",
    category: "Dinner",
    prepTime: 15,
    cookTime: 25,
    totalTime: 40,
    servings: 4,
    difficulty: "Medium",
    image: "../assets/Dinner/Meatballs.jpeg",
    description: "Tender homemade beef meatballs simmered in a rich tomato sauce with fresh basil.",
    tags: ["Italian", "Family Favorite", "Comfort Food"],
    ingredients: [
      "400g ground beef",
      "1/3 cup breadcrumbs",
      "1 egg",
      "2 garlic cloves, minced",
      "1/4 cup grated Parmesan",
      "2 tablespoons chopped parsley",
      "1 tablespoon olive oil",
      "400g tomato sauce",
      "1/2 teaspoon dried oregano",
      "Salt and black pepper",
      "Fresh basil"
    ],
    instructions: [
      "Combine ground beef, breadcrumbs, egg, garlic, Parmesan, parsley, salt, and pepper in a bowl.",
      "Mix gently until combined.",
      "Shape the mixture into small meatballs.",
      "Heat olive oil in a large pan.",
      "Brown the meatballs on all sides.",
      "Add the tomato sauce and oregano.",
      "Cover and simmer for 15–20 minutes until the meatballs are fully cooked.",
      "Garnish with fresh basil and extra Parmesan.",
      "Serve with spaghetti, rice, or toasted bread."
    ]
  },

 
  // DESSERTS


  {
    id: 13,
    name: "Classic Tiramisu",
    category: "Dessert",
    prepTime: 25,
    cookTime: 0,
    totalTime: 25,
    servings: 6,
    difficulty: "Medium",
    image: "../assets/Desserts/Tiramisu.jpeg",
    description: "A classic Italian dessert made with coffee-soaked ladyfingers and creamy mascarpone.",
    tags: ["Italian", "No-Bake", "Coffee"],
    ingredients: [
      "250g mascarpone cheese",
      "200ml whipping cream",
      "1/3 cup sugar",
      "1 teaspoon vanilla extract",
      "200g ladyfinger biscuits",
      "1 cup cooled strong coffee",
      "2 tablespoons cocoa powder"
    ],
    instructions: [
      "Prepare strong coffee and allow it to cool completely.",
      "Whip the cream with sugar and vanilla until soft peaks form.",
      "Gently fold the mascarpone into the whipped cream until smooth.",
      "Dip each ladyfinger quickly into the cooled coffee.",
      "Arrange a layer of coffee-soaked ladyfingers in a dish.",
      "Spread half of the mascarpone mixture over the biscuits.",
      "Repeat with another layer of ladyfingers and cream.",
      "Cover and refrigerate for at least 6 hours.",
      "Dust generously with cocoa powder before serving."
    ]
  },

  {
    id: 14,
    name: "Strawberry Cheesecake",
    category: "Dessert",
    prepTime: 25,
    cookTime: 0,
    totalTime: 25,
    servings: 8,
    difficulty: "Medium",
    image: "../assets/Desserts/CheeseCake.jpeg",
    description: "A creamy no-bake cheesecake with a buttery biscuit base and fresh strawberry topping.",
    tags: ["Sweet", "No-Bake", "Vegetarian"],
    ingredients: [
      "200g digestive biscuits",
      "90g melted butter",
      "400g cream cheese",
      "1/2 cup powdered sugar",
      "1 teaspoon vanilla extract",
      "200ml whipping cream",
      "200g fresh strawberries",
      "2 tablespoons strawberry jam"
    ],
    instructions: [
      "Crush the digestive biscuits into fine crumbs.",
      "Mix the crumbs with melted butter.",
      "Press the mixture firmly into the bottom of a springform pan.",
      "Refrigerate the base for 20 minutes.",
      "Beat the cream cheese, powdered sugar, and vanilla until smooth.",
      "Whip the cream separately until thick.",
      "Gently fold the whipped cream into the cream cheese mixture.",
      "Spread the filling evenly over the biscuit base.",
      "Refrigerate for at least 6 hours until firm.",
      "Top with fresh strawberries and strawberry jam before serving."
    ]
  },

  {
    id: 15,
    name: "Chocolate Lava Cake",
    category: "Dessert",
    prepTime: 10,
    cookTime: 12,
    totalTime: 22,
    servings: 4,
    difficulty: "Medium",
    image: "../assets/Desserts/LavaCake.jpeg",
    description: "Rich individual chocolate cakes with a warm, gooey chocolate center.",
    tags: ["Chocolate", "Sweet", "Quick"],
    ingredients: [
      "100g dark chocolate",
      "100g butter",
      "2 eggs",
      "2 egg yolks",
      "1/4 cup sugar",
      "2 tablespoons all-purpose flour",
      "1 teaspoon vanilla extract",
      "Butter and cocoa powder for ramekins",
      "Vanilla ice cream for serving"
    ],
    instructions: [
      "Preheat the oven to 200°C.",
      "Grease four ramekins with butter and dust with cocoa powder.",
      "Melt the chocolate and butter together gently.",
      "In another bowl, whisk the eggs, egg yolks, and sugar.",
      "Add the melted chocolate mixture and vanilla.",
      "Fold in the flour until just combined.",
      "Divide the batter between the ramekins.",
      "Bake for 10–12 minutes until the edges are set but the centers remain soft.",
      "Let the cakes rest for one minute.",
      "Carefully turn them onto plates and serve immediately with vanilla ice cream."
    ]
  },

  {
    id: 16,
    name: "Cinnamon Rolls",
    category: "Dessert",
    prepTime: 25,
    cookTime: 25,
    totalTime: 50,
    servings: 8,
    difficulty: "Medium",
    image: "../assets/Desserts/CinnamonRolls.jpeg",
    description: "Soft, fluffy rolls filled with cinnamon sugar and topped with a creamy glaze.",
    tags: ["Sweet", "Baking", "Family Favorite"],
    ingredients: [
      "3 cups all-purpose flour",
      "2 1/4 teaspoons instant yeast",
      "1/4 cup sugar",
      "3/4 cup warm milk",
      "1 egg",
      "1/4 cup melted butter",
      "1/2 teaspoon salt",
      "1/3 cup softened butter for filling",
      "1/2 cup brown sugar",
      "1 tablespoon ground cinnamon",
      "100g cream cheese",
      "1/2 cup powdered sugar",
      "1 tablespoon milk for glaze"
    ],
    instructions: [
      "Combine flour, yeast, sugar, and salt in a large bowl.",
      "Add warm milk, egg, and melted butter.",
      "Knead until a soft dough forms.",
      "Cover and let rise in a warm place until doubled in size, about 1 hour.",
      "Roll the dough into a large rectangle.",
      "Spread softened butter over the dough.",
      "Mix brown sugar and cinnamon, then sprinkle evenly over the butter.",
      "Roll the dough tightly into a log.",
      "Cut into 8 equal rolls and place in a greased baking dish.",
      "Cover and let rise for another 30 minutes.",
      "Preheat the oven to 180°C.",
      "Bake for 20–25 minutes until golden.",
      "Beat cream cheese, powdered sugar, and milk until smooth.",
      "Spread the glaze over the warm cinnamon rolls and serve."
    ]
  }
];
export default recipes;