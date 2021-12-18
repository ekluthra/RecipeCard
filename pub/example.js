"use strict";

/* This is a simple way of declaring a RecipePage 
The developer can choose to simple pass in the mandtory arguments at 
first, (width, height, ... , parent) and then later on, set the rest of the
elements with built-in functions. This allows for a smaller makeCard 
function call, keeping the code cleaner and easier to read.
*/ 

const rp = new RecipePage()
rp.makeCard(300, 340, '#FFF7DD', '', [],"","", [], 'example1')
rp.setTitle('Chicken Parmasean') //This allows the developer to be able to change the title if they want to.
rp.setImage('https://www.eatwell101.com/wp-content/uploads/2018/09/parmesan-chicken-casserole-recipe-12.jpg') // as well as changing the image 
//I wanted a separate function for setting the description because putting the description in the makeCard function as an argument would
//result in a very large line that doesn't look easy to read for developers
rp.addIngredients(['Chicken Breast', 'Spaghetti', 'Tomato Sauce', 'Mozarella Cheese', 'Cilantro'])
rp.setDescription('First, boil your noodles for 10 minutes or until al dente. While the noodles boil, heat up a saucepan on medium\
-high and throw in your tomato sauce, chicken breast, and cilantro. Drain and pour the noodles into the saucepan and mix to coat. this isnt a real\
recipe I just made this up last minute') 

/* Here is another way to make a RecipePage, which passes in all the arguments at once if preferred 
*/ 
const rp2 = new RecipePage()
rp2.makeCard(400, 460, '#5F9EA0', 'Spicy Korean Tofu', ['Tofu', 'Gochujang sauce', 'Brown sugar', 'Soy sauce', 'Frozen veggies', 'Garlic', 'Onion'],
'Sautee the tofu until lightly browned, or bake for 15 minutes. Mix sugar, soy sauce, gochujang sauce, and some water. Cook garlic and onion. Throw in tofu and sauce.', 'https://www.maangchi.com/wp-content/uploads/2016/02/dubujorim-insta.jpg', ['spicy', 'vegetarian'], 'example2')


/* This final example is of a non-flippable card, meaning that 
the last parameter is false, and you cannot flip the card on the
DOM, so the description of the recipe is on the front of the card*/
const rp3 = new RecipePage()

rp3.makeCard(300,600,' #ccff99', 'Butter Chicken', ['Chicken Thigh', 'Plain Yogurt', 'Garlic', 'Turmuric', 'Salt', 'Chili Powder', 'Cumin'], 'Mix chicken with all ingredients for the chicken marinade. Heat butter or ghee in the same pan. Fry the onions. Add crushed tomatoes, chili powder and salt. Blend mixture. Pour onto cooked chicken', 'https://c.ndtvimg.com/2021-08/0okn1nfo_butter-chicken-meatballs_625x300_04_August_21.jpg', ['spicy'], 'example3', false)
