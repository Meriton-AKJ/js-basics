//1
const paragraphes = document.querySelectorAll(".content p");
console.log(paragraphes);

const paragraphe = document.getElementsByName("special");
console.log(paragraphe);

const firstParagraphe = document.querySelector(".content p");
console.log(firstParagraphe);


const divResult = document.querySelector(".result");
divResult.innerHTML = `<p>Nombre total de paragraphes : ${paragraphes.length}</p>
                       <p>Contenu :</p>
                       <ul>
                       ${Array.from(paragraphes)
                            .map(p => `<li>${textContent}</li>`)
                            .join('')}
                       `;


//2
const newParagraphe = document.createElement("p");
Newparagraphe.textContent = "Nouveau paragraphe ajouté";


const paragrapheChangeMe = document.querySelector("#change-me")

paragrapheChangeMe.after(newParagraphe);

paragrapheChangeMe.textContent = "Contenu modifié";

const divResult = document.querySelector(".result");
divResult.innerHTML = `<p>Contenu du premier paragraphe : ${paragrapheChangeMe.textContent}</p>`
                       `<p>Contenu du deuxième paragraphe : ${newParagraphe.textContent}`
                       ;


//3
//Créer un nouveau paragraphe
const cssNewParagraphe = document.createElement("p");
cssNewParagraphe.textContent = "Paragraphe à styliser";

//Ajouter la classe "highlight"
cssNewParagraphe.classList.add("highlight");

//Insérer ce paragraphe dans la div "content"
const paragrapheContent = document.querySelector(".content");
paragrapheContent.appendChild(cssNewParagraphe);

//Vérifier si le paragraphe a bien la classe "highlight"
const divResult = document.querySelector(".result");
if (cssNewParagraphe.classList.contains("highlight")) {
  divResult.textContent = "Le paragraphe a bien la classe highlight !";
} else {
  divResult.textContent = "Le paragraphe n'a pas la classe highlight.";
}

//4
// Créer la liste ul
const maListe = document.createElement("ul");
maListe.id = "maListe";

//Créer et ajouter les trois éléments li
for (let i = 1; i <= 3; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  maListe.appendChild(li);
}

//Insérer la liste dans la div "list-container"
const listContainer = document.querySelector(".list-container");
listContainer.appendChild(maListe);

//Afficher le nombre total d'éléments dans la liste
const divResult = document.querySelector(".result");
divResult.textContent = `Le nombre total d'éléments dans la liste : ${maListe.children.length}`;
