"use strict";

const rp = new RecipePage()
rp.makeCard(300, 340, '#FFF7DD', 'Pesto Pasta', ['Chicken Breast', 'Spaghetti', 'Tomato Sauce', 'Mozarella Cheese', 'Cilantro'])
rp.setTitle('Chicken Parmasean') //This allows the developer to be able to change the title if they want to.
rp.setImage('/pub/images/chicken-parmesan.jpg') // as well as changing the image 
//I wanted a separate function for setting the description because putting the description in the makeCard function as an argument would
//result in a very large line that doesn't look easy to read for developers

rp.setDescription('First, boil your noodles for 10 minutes or until al dente. While the noodles boil, heat up a saucepan on medium\
-high and throw in your tomato sauce, chicken breast, and cilantro. Drain and pour the noodles into the saucepan and mix to coat. this isnt a real\
recipe I just made this up last minute') 

//Here is an example which shows that a new recipe can be make using one line if preferred
const rp2 = new RecipePage()
//Here is the source of the recipe
rp2.makeCard(400, 560, '#5F9EA0', 'Butter Chicken', ['Chicken Thigh', 'Plain Yogurt', 'Garlic', 'Turmuric', 'Salt', 'Chili Powder', 'Cumin'],
'In a bowl, combine chicken with all of the ingredients for the chicken marinade; let marinate for 30 minutes to an hour (or overnight if time allows).\
Heat butter or ghee in the same pan. Fry the onions until they start to sweat (about 6 minutes) while scraping up any browned bits stuck on the bottom of the pan. \
Add crushed tomatoes, chili powder and salt. Let simmer for about 10-15 minutes, stirring occasionally until sauce thickens and becomes a deep brown red colour. \
Remove from heat, scoop mixture into a blender and blend until smooth. You may need to add a couple tablespoons of water to help it blend (up to 1/4 cup). \
Work in batches depending on the size of your blender.', '../pub/images/butter-chicken.jpg')
