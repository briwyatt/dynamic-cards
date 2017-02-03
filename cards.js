console.log("hello dynamic cards!");




function createCard() {
    var oneCard = document.getElementById("new-card-element");
    oneCard.parentNode.appendChild();
}


// function removeFromDom() {
//     var oneCard = document.getElementById("new-card-element");
//     oneCard.parentNode.removeChild();
// }



var userInput = document.getElementById("textarea");
var userSubmit = document.getElementById("create-button")
var createCardUponClick = userSubmit.addEventListener("click", createCard);

// Create a <p> element and append it to a <div> element:


var newCardBody = document.createElement("Div"); // create a <div> element node for card's body = var newCardBody
newCardBody.id = "newCard"; // give newCardBody an id="newCard"
var para = document.createElement("P"); // Create a <p> element node = var para
var deleteButton = document.createElement("Button"); // create <button> element node = var deleteButton
// deleteButton.id = "deleteButton";						// add id to button				
deleteButton.innerHTML = "delete me"; // add text to delete button



// 	var para = document.createElement("P");                       // Create a <p> element
// var t = document.createTextNode("This is a paragraph.");      // Create a text node
// para.appendChild(t);   




function createCard() {
    // console.log("newCardBody", newCardBody);

    cardWrapper.appendChild(newCardBody); // Append new card body/ outline 
    newCardBody.appendChild(para);    // Append <p> to <div> with id="newCardBody"
    // console.log("para", para);
    // console.log("userInput.value", userInput.value);
    var text = document.createTextNode(userInput.value); // Create a text node element (reference to the user's input)
    para.appendChild(text); // append <text node> with user's submitted input text   to <p>
    newCardBody.appendChild(deleteButton);
};

// function deleteCard(){

// }

//"removeChild(child)" REFERENCE SYNTAX FROM MOZILLA:
// The Node.removeChild() method removes a child node from the DOM. Returns removed node.
// var oldChild = node.removeChild(child);
// OR
// element.removeChild(child);


// child is the child node to be removed from the DOM.
// node is the parent node of child.
// oldChild holds a reference to the removed child node. oldChild === child.


// *** ME TRYING TO SET THE REFERENCE SYNTAX ABOVE TO MY PROJECT: ***

// var oldChild = card-wrapper.removeChild(card-element);
// OR
// element.removeChild(child);