const recipies = [
  {
    id: 1,
    user: 'William',
    name: 'Pizza',
    servings: '14 inch pizza',
    category: 'Dinner',
    country: 'Italy',
    ingredients: [
      { measurement: '125g', ingredient: 'tapioca flour' },
      { measurement: '125g', ingredient: 'rice flour' },
      { measurement: '50g', ingredient: 'oat flour' },
      { measurement: '2', ingredient: 'egg whites' },
      { measurement: '2Tbs', ingredient: 'olive oil' },
      { measurement: '2tss', ingredient: 'sugar' },
      { measurement: '2tsp', ingredient: 'yeast' },
      { measurement: '1tsp', ingredient: 'xantham gum' },
      { measurement: '1tsp', ingredient: 'salt' },
      { measurement: '2/3 cup', ingredient: 'milk' },
    ],
    instructions:
      'Heat oven to 450 degrees Farenheit. Mix the flours, xantham gum and salt together in a bowl and set aside. Heat the milk up to about 105-110 degrees Fahrenheit, add the sugar and yeast and let it sit for about 5 min. Mix the wet ingredients together and then add the dry ingredients. Mix all together until it forms a nice pizza dough. Preheat dough for 5 minutes. Add toppings and cook the pizza for about 8-10 min. Enjoy!',
    date: '10/05/19',
  },
  {
    id: 2,
    user: 'William',
    name: 'Chocolate cake',
    servings: 'One cake',
    category: 'Dessert',
    country: 'Not specified',
    ingredients: [
      { measurement: '125g', ingredient: 'tapioca flour' },
      { measurement: '125g', ingredient: 'rice flour' },
      { measurement: '50g', ingredient: 'oat flour' },
      { measurement: '2', ingredient: 'egg whites' },
      { measurement: '2Tbs', ingredient: 'olive oil' },
      { measurement: '2tss', ingredient: 'sugar' },
      { measurement: '2tsp', ingredient: 'yeast' },
      { measurement: '1tsp', ingredient: 'xantham gum' },
      { measurement: '1tsp', ingredient: 'salt' },
      { measurement: '2/3 cup', ingredient: 'milk' },
    ],
    instructions:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod necessitatibus expedita provident nam ipsam optio sequi id quia itaque facere obcaecati velit vitae aliquam nemo repudiandae, iusto tempore voluptatum ut. Reprehenderit natus distinctio illo atque ipsum, rerum eum quae cum? Nihil labore mollitia quas nemo ullam, soluta natus, molestiae autem reiciendis vero dolore accusantium aut nulla porro. Eos!',
    date: '08/12/20',
  },
  {
    id: 3,
    user: 'Kelly',
    name: 'Baugettes',
    servings: '12 baguettes',
    category: 'Breads',
    country: 'France',
    ingredients: [
      { measurement: '125g', ingredient: 'tapioca flour' },
      { measurement: '125g', ingredient: 'rice flour' },
      { measurement: '50g', ingredient: 'oat flour' },
      { measurement: '2', ingredient: 'egg whites' },
      { measurement: '2Tbs', ingredient: 'olive oil' },
      { measurement: '2tss', ingredient: 'sugar' },
      { measurement: '2tsp', ingredient: 'yeast' },
      { measurement: '1tsp', ingredient: 'xantham gum' },
      { measurement: '1tsp', ingredient: 'salt' },
      { measurement: '2/3 cup', ingredient: 'milk' },
    ],
    instructions:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod necessitatibus expedita provident nam ipsam optio sequi id quia itaque facere obcaecati velit vitae aliquam nemo repudiandae, iusto tempore voluptatum ut. Reprehenderit natus distinctio illo atque ipsum, rerum eum quae cum? Nihil labore mollitia quas nemo ullam, soluta natus, molestiae autem reiciendis vero dolore accusantium aut nulla porro. Eos!',
    date: '09/21/19',
  },
  {
    id: 4,
    user: 'Kelly',
    name: 'Pretzels',
    servings: '48 pretzels',
    category: 'Breads',
    country: 'Not specified',
    ingredients: [
      { measurement: '125g', ingredient: 'tapioca flour' },
      { measurement: '125g', ingredient: 'rice flour' },
      { measurement: '50g', ingredient: 'oat flour' },
      { measurement: '2', ingredient: 'egg whites' },
      { measurement: '2Tbs', ingredient: 'olive oil' },
      { measurement: '2tss', ingredient: 'sugar' },
      { measurement: '2tsp', ingredient: 'yeast' },
      { measurement: '1tsp', ingredient: 'xantham gum' },
      { measurement: '1tsp', ingredient: 'salt' },
      { measurement: '2/3 cup', ingredient: 'milk' },
    ],
    instructions:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod necessitatibus expedita provident nam ipsam optio sequi id quia itaque facere obcaecati velit vitae aliquam nemo repudiandae, iusto tempore voluptatum ut. Reprehenderit natus distinctio illo atque ipsum, rerum eum quae cum? Nihil labore mollitia quas nemo ullam, soluta natus, molestiae autem reiciendis vero dolore accusantium aut nulla porro. Eos!',
    date: '02/02/20',
  },
  {
    id: 5,
    user: 'John',
    name: 'Falafel',
    servings: '4 people',
    category: 'Dinner',
    country: 'Libanon',
    ingredients: [
      { measurement: '125g', ingredient: 'tapioca flour' },
      { measurement: '125g', ingredient: 'rice flour' },
      { measurement: '50g', ingredient: 'oat flour' },
      { measurement: '2', ingredient: 'egg whites' },
      { measurement: '2Tbs', ingredient: 'olive oil' },
      { measurement: '2tss', ingredient: 'sugar' },
      { measurement: '2tsp', ingredient: 'yeast' },
      { measurement: '1tsp', ingredient: 'xantham gum' },
      { measurement: '1tsp', ingredient: 'salt' },
      { measurement: '2/3 cup', ingredient: 'milk' },
    ],
    instructions:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod necessitatibus expedita provident nam ipsam optio sequi id quia itaque facere obcaecati velit vitae aliquam nemo repudiandae, iusto tempore voluptatum ut. Reprehenderit natus distinctio illo atque ipsum, rerum eum quae cum? Nihil labore mollitia quas nemo ullam, soluta natus, molestiae autem reiciendis vero dolore accusantium aut nulla porro. Eos!',
    date: '08/23/20',
  },
  {
    id: 6,
    user: 'John',
    name: 'Kebab',
    servings: '4 people',
    category: 'Dinner',
    country: 'Turkey',
    ingredients: [
      { measurement: '125g', ingredient: 'tapioca flour' },
      { measurement: '125g', ingredient: 'rice flour' },
      { measurement: '50g', ingredient: 'oat flour' },
      { measurement: '2', ingredient: 'egg whites' },
      { measurement: '2Tbs', ingredient: 'olive oil' },
      { measurement: '2tss', ingredient: 'sugar' },
      { measurement: '2tsp', ingredient: 'yeast' },
      { measurement: '1tsp', ingredient: 'xantham gum' },
      { measurement: '1tsp', ingredient: 'salt' },
      { measurement: '2/3 cup', ingredient: 'milk' },
    ],
    instructions:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod necessitatibus expedita provident nam ipsam optio sequi id quia itaque facere obcaecati velit vitae aliquam nemo repudiandae, iusto tempore voluptatum ut. Reprehenderit natus distinctio illo atque ipsum, rerum eum quae cum? Nihil labore mollitia quas nemo ullam, soluta natus, molestiae autem reiciendis vero dolore accusantium aut nulla porro. Eos!',
    date: '08/24/20',
  },
  {
    id: 7,
    user: 'John',
    name: 'Omelette',
    servings: '2 people',
    category: 'Breakfast',
    country: 'France',
    ingredients: [
      { measurement: '125g', ingredient: 'tapioca flour' },
      { measurement: '125g', ingredient: 'rice flour' },
      { measurement: '50g', ingredient: 'oat flour' },
      { measurement: '50', ingredient: 'eggs' },
      { measurement: '2Tbs', ingredient: 'olive oil' },
      { measurement: '2tss', ingredient: 'sugar' },
      { measurement: '2tsp', ingredient: 'yeast' },
      { measurement: '1tsp', ingredient: 'xantham gum' },
      { measurement: '1tsp', ingredient: 'salt' },
      { measurement: '2/3 cup', ingredient: 'milk' },
    ],
    instructions:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod necessitatibus expedita provident nam ipsam optio sequi id quia itaque facere obcaecati velit vitae aliquam nemo repudiandae, iusto tempore voluptatum ut. Reprehenderit natus distinctio illo atque ipsum, rerum eum quae cum? Nihil labore mollitia quas nemo ullam, soluta natus, molestiae autem reiciendis vero dolore accusantium aut nulla porro. Eos!',
    date: '06/13/19',
  },
  {
    id: 8,
    user: 'Olivia',
    name: 'Hamburgers',
    servings: '6 burgers',
    category: 'Dinner',
    country: 'USA',
    ingredients: [
      { measurement: '125g', ingredient: 'tapioca flour' },
      { measurement: '500g', ingredient: 'ground beef' },
      { measurement: '50g', ingredient: 'oat flour' },
      { measurement: '2', ingredient: 'egg whites' },
      { measurement: '2Tbs', ingredient: 'olive oil' },
      { measurement: '2tss', ingredient: 'sugar' },
      { measurement: '2tsp', ingredient: 'yeast' },
      { measurement: '1tsp', ingredient: 'xantham gum' },
      { measurement: '1tsp', ingredient: 'salt' },
      { measurement: '2/3 cup', ingredient: 'milk' },
    ],
    instructions:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod necessitatibus expedita provident nam ipsam optio sequi id quia itaque facere obcaecati velit vitae aliquam nemo repudiandae, iusto tempore voluptatum ut. Reprehenderit natus distinctio illo atque ipsum, rerum eum quae cum? Nihil labore mollitia quas nemo ullam, soluta natus, molestiae autem reiciendis vero dolore accusantium aut nulla porro. Eos!',
    date: '11/28/19',
  },
  {
    id: 9,
    user: 'Olivia',
    name: 'Wet Burritos',
    servings: '6 people',
    category: 'Dinner',
    country: 'Mexico',
    ingredients: [
      { measurement: '6', ingredient: 'tortillas' },
      { measurement: '1LB', ingredient: 'ground beef' },
      { measurement: '50g', ingredient: 'oat flour' },
      { measurement: '2', ingredient: 'egg whites' },
      { measurement: '2Tbs', ingredient: 'olive oil' },
      { measurement: '2tss', ingredient: 'sugar' },
      { measurement: '2tsp', ingredient: 'yeast' },
      { measurement: '1tsp', ingredient: 'xantham gum' },
      { measurement: '1tsp', ingredient: 'salt' },
      { measurement: '2/3 cup', ingredient: 'milk' },
    ],
    instructions:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod necessitatibus expedita provident nam ipsam optio sequi id quia itaque facere obcaecati velit vitae aliquam nemo repudiandae, iusto tempore voluptatum ut. Reprehenderit natus distinctio illo atque ipsum, rerum eum quae cum? Nihil labore mollitia quas nemo ullam, soluta natus, molestiae autem reiciendis vero dolore accusantium aut nulla porro. Eos!',
    date: '02/13/20',
  },
  {
    id: 10,
    user: 'Kevin',
    name: 'Strawberry Shortbread',
    servings: '4 people',
    category: 'Dessert',
    country: 'USA',
    ingredients: [
      { measurement: '125g', ingredient: 'wheat flour' },
      { measurement: '200g', ingredient: 'sugar' },
      { measurement: '100g', ingredient: 'strawberries' },
      { measurement: '2', ingredient: 'egg whites' },
      { measurement: '2Tbs', ingredient: 'olive oil' },
      { measurement: '2tss', ingredient: 'sugar' },
      { measurement: '2tsp', ingredient: 'yeast' },
      { measurement: '1tsp', ingredient: 'xantham gum' },
      { measurement: '1tsp', ingredient: 'salt' },
      { measurement: '2/3 cup', ingredient: 'milk' },
    ],
    instructions:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod necessitatibus expedita provident nam ipsam optio sequi id quia itaque facere obcaecati velit vitae aliquam nemo repudiandae, iusto tempore voluptatum ut. Reprehenderit natus distinctio illo atque ipsum, rerum eum quae cum? Nihil labore mollitia quas nemo ullam, soluta natus, molestiae autem reiciendis vero dolore accusantium aut nulla porro. Eos!',
    date: '12/12/19',
  },
];

export const recipesPerPage = () => 5;

export const getAllRecipes = () => recipies;

export const getUserRecipes = (name) => {
  return recipies.filter((recipe) => recipe.user === name);
};

export const getRecipeById = (id) => {
  return recipies.filter((recipe) => recipe.id === id);
};

export const categories = [
  'Breakfast',
  'Lunch',
  'Dinner',
  'Dessert',
  'Drinks',
  'Sides',
  'Breads',
  'Other',
];

export const getUserRecipesBySearch = (user, search) => {
  // const userRecipes = getUserRecipes(user);
  const userRecipes = getAllRecipes();
  console.log(search);
  let searchRecipes = [];
  if (
    (search.category === '' || search.category === '0') &&
    search.text === ''
  ) {
    return userRecipes;
  } else if (
    (search.category === '' || search.category === '0') &&
    search.text !== ''
  ) {
    searchRecipes = userRecipes.filter((recipe) =>
      recipe.name.toLowerCase().includes(search.text.toLowerCase())
    );
    return searchRecipes;
  } else {
    if (search.text !== '') {
      searchRecipes = userRecipes.filter(
        (recipe) =>
          recipe.category === search.category &&
          recipe.name.toLowerCase().includes(search.text.toLowerCase())
      );
    } else {
      searchRecipes = userRecipes.filter(
        (recipe) => recipe.category === search.category
      );
    }

    return searchRecipes;
  }
};
