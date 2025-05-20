//🎯 Objectif : fetch, then, DOM, createElement, insertion dynamique.
//🟢 Niveau 1 – Affichage des données dans la console
//Fais une requête fetch() vers l’API et affiche les données dans la console.
//Affiche dans la console tous les titres des produits.
//```js
//fetch("https://fakestoreapi.com/products")
//.then(response => response.json())
//.then(data => {
// affiche ici tous les titres des produits
//});
//```
//🟡 Niveau 2 – Création dynamique des cartes
//Crée une div avec l’id="product-container" dans ton HTML.
//Affiche chaque produit sous forme de carte contenant :
//l’image (product.image)
//le nom (product.title)
//le prix (product.price)
//🟥 Niveau 3 – Style CSS de base
//Ajoute du style dans style.css :
//des cartes blanches avec ombre légère,
//image en haut, titre et prix en dessous,
//conteneur central en flex-wrap avec gap entre les cartes.
//Bonus : effet hover (agrandissement léger au survol).
//🟥🟥 Niveau 4 – Filtrage par catégorie
//Affiche uniquement les produits de la catégorie "jewelery" (ou une autre de ton choix).
//Deux méthodes possibles :
//Utilise directement l’URL : https://fakestoreapi.com/products/category/jewelery
//ou filtre en JS avec `.filter(product => product.category === "jewelery")`
//✅ Objectif final
//Tu dois obtenir une mini boutique avec plusieurs cartes dynamiques stylées, et une requête API propre.

let allProducts = [];

//récuperation des infos produits dans le JSON
fetch(`test.json`)
    .then(response => response.json())
    .then(data => {
    let div = document.createElement('div');
    div.id = "product-container";
    let section = document.getElementById('section1');
    section.appendChild(div);

    data.forEach(product => {
        let card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-category', product.category);

        let img = document.createElement('img');
        img.src = product.image;
        img.alt = product.title;

        let title = document.createElement('h3');
        title.textContent = product.title;

        let price = document.createElement('p');
        price.textContent = product.price + "$";

        let button = document.createElement('button');
        button.className = `buttonproduct`
        button.textContent = 'Acheter';
        button.addEventListener(`click`, () => {
            window.open(`https://longdogechallenge.com/`);
        })

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(button);

        div.appendChild(card);
    });

    //ajout du flitre par catégorie au clique
    let boutons = document.getElementsByClassName('buttonfilter');
        Array.from(boutons).forEach(bouton => {
            bouton.addEventListener('click', () => {
                let categorie = bouton.getAttribute('data-category');
                let cartes = document.getElementsByClassName('product-card');

                Array.from(cartes).forEach(carte => {
                    if (carte.getAttribute('data-category') === categorie || categorie === 'all') {
                        carte.style.display = "flex";
                    } else {
                        carte.style.display = "none";
                    }
                });
            });
        });
    });
