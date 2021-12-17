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
    
    makeCard: function(width, height, color, title, ingredients, description, image) {
        const card  = document.createElement('div')
        card.classList.add('card')
        card.classList.add(`cardId-${this.id}`)
        card.setAttribute('onClick', `flipCard(${this.id})`)

        const cardContainer = document.createElement('div')
        cardContainer.style = `width: ${width}px; height: ${height}px; margin: 10px; background-color:${color}; border-radius:20px; box-shadow: 5px 10px 8px #888888; outline:1px solid black;`
        cardContainer.classList.add('card-container') 

        const cardFront = document.createElement('div')
        cardFront.className = 'card-front'
        cardFront.style = 'position: absolute; height:100%; width:100%;'

        const cardBack = document.createElement('div')
        cardBack.className = 'card-back'
        cardBack.style  = 'position: absolute; height:100%; width: 100%;'

        this.cardTitleDiv.style = 'height:10%; text-align:center;'
        this.setTitle(title);
        cardFront.append(this.cardTitleDiv)

        this.imageDiv.style = 'height:40%; padding:5px;'
        this.setImage(image)
        cardFront.append(this.imageDiv)

        this.ingredientsDiv.style='max-height:40%; padding:2px;'
        this.addIngredients(ingredients)
        this.ingredientsDiv.setAttribute('onClick', 'event.stopPropagation();')
        cardFront.append(this.ingredientsDiv)

        this.descriptionDiv.style='margin:10px; padding:10px;'
        this.setDescription(description)
        cardBack.append(this.descriptionDiv)

        card.append(cardFront)
        card.append(cardBack)
        cardContainer.append(card)

        recipePages.push(card)

        const body = document.querySelector('body')
        body.append(cardContainer)
        numRecipes++;
        console.log(this.id)
        console.log(numRecipes)
        console.log(recipePages)
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
