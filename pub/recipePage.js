"use strict";

let numRecipes = 0;
const recipePages = [];


function RecipePage() {
    
    this.flippable = true
    this.title = ""
    this.ingredients = []
    this.description = ""
    this.image = ""
    this.id = numRecipes;
    this.tags = []

    this.cardTitleDiv = document.createElement('div')
    this.ingredientsDiv = document.createElement('div')
    this.descriptionDiv = document.createElement('div')
    this.imageDiv = document.createElement('div')
    this.tagsDiv = document.createElement('div')

}

RecipePage.prototype = {
    
    makeCard: function(width, height, color, title, ingredients, description, image, tags, parent, flippable=true) {
        this.flippable = flippable

        const card  = document.createElement('div')
        card.classList.add('card')
        card.classList.add(`cardId-${this.id}`);
        if(this.flippable){
            card.setAttribute('onClick', `flipCard(${this.id})`)
        }

        const cardContainer = document.createElement('div')
        cardContainer.style = `width: ${width}px; height: ${height}px; margin: 10px; background-color:${color}; border-radius:20px; box-shadow: 5px 10px 8px #888888; outline:1px solid black;`
        cardContainer.classList.add('card-container') 

        const cardFront = document.createElement('div')
        cardFront.className = 'card-front'
        cardFront.style = 'position: absolute; height:100%; width:100%;'

        const cardBack = document.createElement('div')
        cardBack.className = 'card-back'
        cardBack.style  = 'position: absolute; height:100%; width: 100%;'
        
        const unflippableFront = document.createElement('div')
        unflippableFront.className = 'unflippable-front'
        unflippableFront.style = 'position: absolute; height:100%; width:100%;'

        this.cardTitleDiv.style = 'height:10%; text-align:center;'
        this.setTitle(title);
        (this.flippable ? cardFront.append(this.cardTitleDiv) : unflippableFront.append(this.cardTitleDiv))

        this.imageDiv.style = 'height:40%; padding:5px;'
        this.setImage(image);
        (this.flippable ? cardFront.append(this.imageDiv) : unflippableFront.append(this.imageDiv))

        this.ingredientsDiv.style='max-height:40%; padding:2px;'
        this.addIngredients(ingredients);
        this.ingredientsDiv.setAttribute('onClick', 'event.stopPropagation();');
        (this.flippable ? cardFront.append(this.ingredientsDiv) : unflippableFront.append(this.ingredientsDiv))

        this.tagsDiv.className = 'tags'
        this.addTags(tags);
        (this.flippable ? cardFront.append(this.tagsDiv) : unflippableFront.append(this.tagsDiv))

        this.descriptionDiv.style='margin:10px; padding:10px;'
        this.setDescription(description);
        (this.flippable ? cardBack.append(this.descriptionDiv) : unflippableFront.append(this.descriptionDiv))
        if(this.flippable){
            card.append(cardFront)
            card.append(cardBack)
        }else{
            card.append(unflippableFront)
        }
        
        cardContainer.append(card)

        recipePages.push(card)

        const body = document.getElementById(parent)
        body.append(cardContainer)
        numRecipes++;
    },

    addTags: function(tags){
        tags.forEach(function(tag){
            this.tags.push(tag)
            const tagDiv = document.createElement('div')
            if(tag==='spicy'){
                tagDiv.innerHTML = '<img src = "./images/spicy.png" style="width:35px; float:left; margin:5px;"/>'
            }
            if(tag==='vegetarian'){
                tagDiv.innerHTML = '<img src = "./images/vegetarian.png" style="width:35px; float:left; margin:5px;"/>'
            }
            this.tagsDiv.append(tagDiv)
        }.bind(this));
    },

    setTitle: function(title){
        this.title=title
        this.cardTitleDiv.innerHTML = `<h3> ${title} </h3>`
    },

    
    addIngredients: function(ingredients){
        this.ingredients.push(...ingredients)
        const ingredientsList = document.createElement("ul")
        ingredientsList.style = "list-style-type: none; columns=2; -webkit-columns: 2; -moz-columns: 2;"
        ingredientsList.innerHTML = this.ingredients.map(function(ingredient){
            return '<li><input type="checkbox">' + ingredient + '</li>';
        }).join('');
        this.ingredientsDiv.append(ingredientsList)
    },

    setImage: function(source){
        this.image = source
        this.imageDiv.innerHTML = `<img src = '${source}' style="max-width:100%; max-height:100%; display:block; margin:auto;"/>`
    },

    setDescription: function(description){
        this.description = description
        this.descriptionDiv.innerHTML = `${description}`
    },

}

// flipping functionality reference used: https://jsfiddle.net/james2doyle/qsQun/
function flipCard(cardId) {
    $(`.cardId-${cardId}`).toggleClass('flipped');
}

function setTheme(theme) {
    $('.card-container').css('background-color', theme);
}