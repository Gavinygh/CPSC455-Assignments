var receipe_list = document.getElementById("receipe_list");
var addBtn = document.getElementById("addBtn");
var deleteAllBtn = document.getElementById("deleteAllBtn");
var storedReceipes = JSON.stringify({
    "receipeList":[
        {
            "name": "poutine",
            "ingredients": "fries, source",
            "instructions": "bla bla"
        }
        ]
});

function getNewReceipe() {
    return {
        "name": document.getElementById("name").value,
        "ingredients": document.getElementById("ingredients").value,
        "instructions": document.getElementById("instructions").value
    }
}

function preLoadAllReceipes() {
    let receipes = JSON.parse(storedReceipes).receipeList;
    for(let i = 0; i < receipes.length; i++) {
        addReceipeDiv(receipes[i].name, receipes[i].ingredients, receipes[i].instructions);
    }
}

function addReceipeDiv(name, ingredients, instructions) {
    let receipe_div = document.createElement("div");
    let receipe_attributes_list = document.createElement("ul");
    let receipe_name = document.createElement("li");
    let receipe_ingredients = document.createElement("li");
    let receipe_instructions = document.createElement("li");
    let deleteButton = document.createElement("button");
    
    receipe_div.classList.add("receipe_div");
    receipe_attributes_list.classList.add("receipe_attributes_list");
    deleteButton.className = "delete-receipe";
    deleteButton.innerText = "Delete";

    receipe_name.innerText = "Name: " + name;
    receipe_ingredients.innerText = "Ingredients: " + ingredients;
    receipe_instructions.innerText = "Instructions: " + instructions;
    
    receipe_attributes_list.appendChild(receipe_name);
    receipe_attributes_list.appendChild(receipe_ingredients);
    receipe_attributes_list.appendChild(receipe_instructions);
    
    receipe_div.appendChild(receipe_attributes_list);
    receipe_div.appendChild(deleteButton);
    receipe_list.appendChild(receipe_div);
    
    deleteButton.onclick = function() {
        var receipe_div = this.parentNode;
        var receipe_list = receipe_div.parentNode;
        receipe_list.removeChild(receipe_div);
    }
}

addBtn.addEventListener("click", function() {
    let newReceipe = getNewReceipe();
    addReceipeDiv(newReceipe.name, newReceipe.ingredients, newReceipe.instructions);
    var nameInput = document.getElementById("name");
    var ingredientsInput = document.getElementById("ingredients");
    var instructionsInput = document.getElementById("instructions");
    nameInput.value="";
    ingredientsInput.value="";
    instructionsInput.value="";
  });

  deleteAllBtn.addEventListener("click", function() {
    while (receipe_list.firstChild) {
        receipe_list.removeChild(receipe_list.firstChild);
      }
  });