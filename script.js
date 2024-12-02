//On donne l'url du site a appeller
fetch('https://fakestoreapi.com/products')
    .then((rep) => {
        //javascript reçoit unne reponse de l'api (object js pas exploitable directement)=> il faut le transformer en json
        return rep.json()
    })
    .then(donnee => {
        //ensuite j'ai access ici à ma donnée
        console.log(donnee)
        //ici j'ai une liste de produit
        //je boucle sur le tableau de données :
        donnee.forEach(prod => {
            affiche(prod)

        });

    })

// Afficher les données
// je créer les variables qui stockeront le chemin vers la donnée
// je cible mon élement HTML qui va "recevoir" les cartes document.querryselector
// j'ajoute le template de ma carte remplie dynamiquement à l'element HTML (.innerHTML +=)

function affiche(prod) {
    let titre = `${prod.title}`;
    let prix = `${prod.price}`;
    let categorie = `${prod.category}`;
    let descript = `${prod.description}`;
    let imag = `${prod.image}`;
    let avis = `${prod.rating}`;

let container =document.querySelector(".container")
    container.innerHTML += `<div class="lacarte">
        <div>
            <p class="positioin bgBlack">${categorie}</p>
            <img src="${imag}" alt="">
        </div>
        <div class="pdDiv">
            <h3>${titre}</h3>
            <p>${descript}</p>
            <div class="flex spaceBetween">
                <div class="flex spaceBetween">
                    <p>note 3,5 </p> <a href="">${avis}</a>
                </div>
                <p>${prix} $</p>
            </div>
            <a href="" class="btn">Ajouter aux panier</a>
        </div>
    </div>`

}