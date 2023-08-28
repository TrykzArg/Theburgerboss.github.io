const icon = document.querySelector('.src-icon');
const search = document.querySelector('.search');
icon.onclick = function () {
    if  ( screen.width <= 1350) {
        search.classList.toggle('active');
    }
    else {    
    }
}

const clear = document.querySelector('.clear');
clear.onclick = function () {
    document.getElementById('mysearch').value = '';
}


  
    class Card {
        constructor( category, name, description, price, image, ) {
            this.category = category;
            this.name = name;
            this.description = description;
            this.price = price;
            this.image = image;
        } 
    
        createCard() {
            return`  
            <article class="cards">
                    <header class="container-img">
                        <picture>
                            <img class="img" src="./img/${this.image}" alt="Burger">
                        </picture>
                    </header>
                    <div class="__card-text">
                        <div class="__card-headtext">
                            <h3 id="product-type" class="__card-type">${this.category}</h3>
                            <h1 class="__card-title">${this.name}</h1>
                        </div>
                        <div class="__card-desc">
                            <p>${this.description}</p>
                        </div>
                    </div>
                    <footer>
                        <div class="__card-price">
                            <h2>
                                <span>$ ${this.price}</span>
                            </h2>
                        </div>
                        <div class="__card-container-button">
                            <button class="add-product" id="cart" onclick>
                                <img class="icon" src="./icons/icon-cart.svg" alt="Cart" />
                                Agregar
                            </button>
                        </div>
                    </footer>
                </article>    
                `

                
            }

        };

let cards = [

    new Card(
    "Burgers",
    "Tasty Simple",
    "Pan de papa - Medallon de carne vacuna 130g - Cheddar - Bacon - Lechuga - Tomate - Salsa Tastty - Porcion de papas Fritas",
    "1900",
    "tasty-simple.jpg",

  ),

    new Card(
    "Burgers",
    "Doble C&B",
    "Pan de papa - Medallon de carne vacuna 130g x2 - Cheddar - Bacon - Porcion de papas Fritas",
    "2000",
    "doble-cyb.jpeg",
    ),

    new Card(
    "Burgers",
    "Clasica",
    "Pan de papa - Medallon de carne vacuna 130g - Cheddar - Lechuga - Tomate - Porcion de papas Fritas",
    "1850",
    "clasica.jpeg",
    ),

    new Card(
    "Burgers",
    "Tasty Doble",
    "Pan de papa - Medallon de carne vacuna 130g x2 - Cheddar - Bacon - Lechuga - Tomate - Salsa Tastty - Porcion de papas Fritas",
    "2150",
    "doble-tasty.jpeg",
    ), 
    
    new Card(
        "Chicken",
        "Cripy Chicken",
        "Pan de papa - Medallon de pollo 130g - Cheddar - Bacon - Lechuga - Tomate - Porcion de papas Fritas",
        "1900",
        "cripy-chicken.jpg",
        ),

    new Card(
        "Veggie",
        "Vegggie Burger",
        "Pan de papa - Medallon de lentejas - Cheddar - Lechuga - Tomate - Palta - Porcion de papas Fritas",
        "1800",
        "veggie-lentejas.jpg",
            ),

    new Card(
        "Drinks",
        "Lata Coca Cola",
        "Lata de Coca Cola 330ml",
        "600",
        "latita-coca.jpg",

    ),

    new Card(
        "Salads",
        "Ensalada Cesar",
        "Lechuga - Tomate - Croutones - Pollo - Salsa Cesar",
        "800",
        "cesar-salad.jpg",

    ),
]

// addToCart();

const containerProducts = document.getElementById('container-products');
let addButtons = document.querySelectorAll('.add-product');
const buttonscategory = document.querySelectorAll('.category-button');
const countProducts = document.getElementById('amount-cart-product');

cards.forEach(card => {
    let htmlArticle = card.createCard();
    containerProducts.innerHTML += htmlArticle;
});
updateAddButtons()

    buttonscategory.forEach(boton => {
        boton.addEventListener('click', (e) => {

            buttonscategory.forEach(boton => boton.classList.remove('active'));
            e.currentTarget.classList.add('active');

            let selectedCategory = e.currentTarget.id;

            let filteredCards;
            if (selectedCategory === 'all-products-button') {
                filteredCards = cards;
            }
            else{ 

              filteredCards = cards.filter(Card => Card.category === selectedCategory);
                }

            containerProducts.innerHTML = '';

            filteredCards.forEach(card => {
                let htmlArticle = card.createCard();
                containerProducts.innerHTML += htmlArticle;

            });
        })
    });


function updateAddButtons() {
    addButtons = document.querySelectorAll('.add-product');

    addButtons.forEach(boton => {
        boton.addEventListener('click', addToCart);

    });
}


let productsInCart = [];

function addToCart(e){
    let idButton = e.currentTarget.category;

    const productadded = cards.find(card => card.category === idButton);
    console.log(productadded);
}