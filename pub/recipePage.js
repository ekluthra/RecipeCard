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
        this.ingredients = ingredients
        this.description = description

        const card  = document.createElement('div');
        card.style = `width: ${width}px; height: ${height}px; margin: 10px; background-color:${color}; border-radius:20px; box-shadow: 5px 10px 8px #888888; outline:1px solid black;`

        this.cardTitleDiv.style = 'height:10%; text-align:center;'
        this.setTitle(title);
        card.append(this.cardTitleDiv)

        this.imageDiv.style = 'height:40%; padding:5px;'
        this.setImage(image)
        card.append(this.imageDiv)

        this.ingredientsDiv.style='height:40%; background-color:Blue; padding:2px;'
        //this.ingredientsDiv.innerHTML = ...
        card.append(this.ingredientsDiv)



        this.cards.push(card)

        const body = document.querySelector('body')
        body.append(card)
    },

    setTitle: function(title){
        this.title=title
        this.cardTitleDiv.innerHTML = `<h3> ${title} </h3>`
    },

    addIngredients: function(ingredients){
        this.ingredients.append(ingredients)
    },

    setImage: function(source){
        this.image = source
        this.imageDiv.innerHTML = `<img src = '${source}' style="max-width:100%; max-height:100%; display:block; margin:auto;"/>`
    },

    setDescription: function(description){
        this.description = description
    }

}


