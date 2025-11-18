const objetNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ""];

const grille = document.getElementById("grid-container");
const newGame = document.getElementById("btn-start");


// Ici on fait en sorte que le tableau est désordonnée à chaque partie comme dans un vrai jeu
const shuffleNumbers = (array) => {
  array.sort(() => Math.random() - 0.5);
};

// dynamiser le btn Start new game
newGame.addEventListener("click", () => {
  shuffleNumbers(objetNumbers);   //mélanger les numéros
  grille.textContent = "";        //vider la grille

  // Ici on parcours chaque numero du tableau et on crée une div dynamiquement,
  // on ajoute une class card avec un dataset pour le repérer plus facilement, et on met le contenu de la constante = nombre
  objetNumbers.forEach((number) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.card = number;
    card.textContent = number;

    //on lie parent-enfant
    grille.appendChild(card);
  });
});




//logique JS
/*
1. Créer tableau [1..15, '']
2. Mélanger le tableau
3. Afficher les cases
4. Quand on clique sur une case :
    a. Trouver son index
    b. Trouver l’index de la case vide
    c. Si elle est voisine → échanger
5. Réafficher
 */