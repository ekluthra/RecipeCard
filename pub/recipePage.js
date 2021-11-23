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
        card.style = `width: ${width}px; height: ${height}px; margin: 10px; background-color:${color}; border-radius:20px; perspective: 1000px; box-shadow: 5px 10px 8px #888888; outline:1px solid black;`

        const cardContainer = document.createElement('div')
        cardContainer.style = 'position: relative; width: 100%; height: 100%; transition: transform 0.5s; transform-style: preserve-3d;'

        const cardFront = document.createElement('div')
        cardFront.className = 'card-front'
        cardFront.style = 'position: absolute; width:100%; height:100%;'
        cardFront.setAttribute('onMouseOver','console.log("mouseOver")')

        const cardBack = document.createElement('div')
        cardBack.classList = 'card-back'

        this.cardTitleDiv.style = 'height:10%; text-align:center;'
        this.setTitle(title);
        cardFront.append(this.cardTitleDiv)

        this.imageDiv.style = 'height:40%; padding:5px;'
        this.setImage(image)
        cardFront.append(this.imageDiv)

        this.ingredientsDiv.style='height:40%; padding:2px;'
        this.addIngredients(ingredients)
        cardFront.append(this.ingredientsDiv)

        this.cards.push(card)

        cardContainer.append(cardFront)

        card.append(cardContainer)
        const body = document.querySelector('body')
        body.append(card)
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
    }

}


