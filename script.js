(function() {
    "use strict";

const detailsForm = document.querySelector('#destination_details_form');
console.log(detailsForm);
// console.log("Hi");
detailsForm.addEventListener("submit", handleFormSubmit);
function handleFormSubmit(event) {
    event.preventDefault();
    console.log("Hi");

    //targetting the elements using .element[id] it will only work for select, textarea, input type text
    const destName = event.target.elements["name"].value;
    const dstLocation = event.target.elements["location"].value;
    const destPhoto = event.target.elements["photo"].value;
    const destDesc = event.target.elements["description"].value;
    console.log(destName, dstLocation, destPhoto, destDesc);

    for (let i = 0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = "";
        //clearing out input value
    }
    //create card here

    const wishListContainer = document.getElementById("destination_container");
    console.log(wishListContainer);

    if (wishListContainer.children.length === 0) {
        document.getElementById("title").innerHTML = "My Wish List";
    }
    else {
        console.log(wishListContainer.children.length);
    }

    const destCard = craeteDestinationCard(destName, dstLocation, destPhoto, destDesc);

    document.querySelector("#destination_container").appendChild(destCard);

}

function craeteDestinationCard(name, location, photoURL, description) {
    const card = document.createElement("div");
    card.className = 'card';

    const img = document.createElement("img");
    img.setAttribute("alt", name);
    // img.setAttribute("src",photoURL);

    const constantPhotoUrl = "Image.jpg";
    if (photoURL.length === 0) {
        img.setAttribute("src", constantPhotoUrl);
    }
    else {
        img.setAttribute("src", photoURL);
    }
    card.appendChild(img);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h3");
    cardTitle.innerText = name;
    cardBody.appendChild(cardTitle);

    const cardSubtitle = document.createElement("h4");
    cardSubtitle.innerText = location;
    cardBody.appendChild(cardSubtitle);

    if (description.length !== 0) {
        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = description;
        cardBody.appendChild(cardText);
    }

    const cardDeleteBtn = document.createElement("button");
    cardDeleteBtn.innerText = "Remove";

    cardDeleteBtn.addEventListener("click", removeDestination);
    cardBody.appendChild(cardDeleteBtn);


    card.appendChild(cardBody);
    return card;
}

function removeDestination(event) {
    const card = event.target.parentElement.parentElement;
    card.remove();
}
})();