"use strict";

function RecipePage() {
    
    this.cards = []
    this.flippable = true
    this.title = ""
    this.ingredients = []
    this.description = ""
    this.image = ""

    this.cardTitleDiv = document.createElement('div')
    this.ingredientsDiv = document.createElement('div')
    this.descriptionDiv = document.createElement('div')
    this.imageDiv = document.createElement('div')

}

RecipePage.prototype = {
    
    makeCard: function(width, height, color, title, ingredients, description, image) {
        this.description = description

        const card  = document.createElement('div')
        card.classList.add('card')
        card.setAttribute('onClick', 'flipCard()')

        const cardContainer = document.createElement('div')
        cardContainer.style = `width: ${width}px; height: ${height}px; margin: 10px; background-color:${color}; border-radius:20px; box-shadow: 5px 10px 8px #888888; outline:1px solid black;`
        cardContainer.classList.add('card-container') 

        const cardFront = document.createElement('div')
        cardFront.className = 'card-front'
        cardFront.style = 'position: relative; height:100%; width:100%;'

        const cardBack = document.createElement('div')
        cardBack.className = 'card-back'
        cardBack.style  = 'position: relative; height:100%; width: 100%;'

        this.cardTitleDiv.style = 'height:10%; text-align:center;'
        this.setTitle(title);
        cardFront.append(this.cardTitleDiv)

        this.imageDiv.style = 'height:40%; padding:5px;'
        this.setImage(image)
        cardFront.append(this.imageDiv)

        this.ingredientsDiv.style='height:40%; padding:2px;'
        this.addIngredients(ingredients)
        cardFront.append(this.ingredientsDiv)

        this.setDescription('bruh')
        cardBack.append(this.descriptionDiv)

        card.append(cardFront)
        card.append(cardBack)
        cardContainer.append(card)

        this.cards.push(card)

        const body = document.querySelector('body')
        body.append(cardContainer)
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
            console.log(ingredient)
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
        this.descriptionDiv.innerHTML = 'description'
    },

}

// flipping functionality reference used: https://jsfiddle.net/james2doyle/qsQun/
function flipCard() {
    $('.card').toggleClass('flipped');
}


