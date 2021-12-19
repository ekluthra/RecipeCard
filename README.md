# Welcome to RecipeCard!
### Landing page: https://secret-sands-52672.herokuapp.com/
#### As a sidenode, please try to use chrome to open the landing page, as some of the animations are unavailable/buggy on other browsers
### Documentation page: https://blooming-coast-64063.herokuapp.com/

### Getting Started:
First, be sure to include JQuery and the RecipePage library at the top of your HTML file after downloading recipePage.js from pub/, as such:

    <script defer src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>  
    <script defer type="text/javascript" src='recipePage.js'></script>`

Here's a code snippet for some basic functionality

    const rp = new RecipePage() //declaring a new RecipePage  
    rp.makeCard(300, 340, '#FFF7DD', '', [],"","", [], 'body') //making a card with only size, color, and parent element  
    rp.setTitle('Chicken Parmasean') //Setting the title of the recipe rp.setImage('https://www.eatwell101.com/wp-content/uploads/2018/09/parmesan-chicken-casserole-recipe-12.jpg') //setting an image  
    rp.addIngredients(['Chicken Breast', 'Spaghetti', 'Tomato Sauce']) //adding ingredients list  
    rp.setDescription('Here is how you make the recipe!') // a description of the recipe to make`
