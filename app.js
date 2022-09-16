console.log("hello there");

// TRAITEMENT DES TABLEAUX

const someArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(someArr);

// exo 1 : doubler les valeurs du tableau

const doubleArr = someArr.map((e) => e * 2);
console.log(doubleArr);

// exo 2 : filtrer un tableau (paire impaire)

const evenArr = someArr.filter((e) => e % 2 == 0);
console.log(evenArr);
const oddArr = someArr.filter((e) => e % 2 !== 0);
console.log(oddArr);

// exo 3 : selectionner la valeur max et min

const maxValueArr = someArr.reduce((max, e) => Math.max(max, e));
console.log(maxValueArr);
const minValueArr = someArr.reduce((min, e) => Math.min(min, e));
console.log(minValueArr);

//  exo 4 : la somme de tout les elements du tableau

const sumValueArr = someArr.reduce((sum, e) => sum + e);
console.log(sumValueArr);

//  exo 5 : true ou false ?
// si la valeur du tableau ou que sa longueur est egale a 0 renvoyer false

const isOddValueArr = someArr.filter((e) => e % 2 != 0).length != 0;
console.log(isOddValueArr);

// Comment je choisi entre map, filter et reduce ?
//
// -mon tableau de sortie est different mais fait la meme longueur MAP
// -mon tableau de sortie est plus petit en longueur FILTER
// -mon "tableau de sortie" est une valeur REDUCE

// TP
//
// combien les hommes gagnerait au total s'ils etaient augmentés de 1000€ chacun ?

const userList = [
  { name: "John", gender: "M", salary: 35000 },
  { name: "Jade", gender: "F", salary: 42000 },
  { name: "Joe", gender: "M", salary: 32000 },
  { name: "Jacky", gender: "F", salary: 38000 },
];
console.log(userList);

// je selectionne uniquement les hommes
// const userM = userList.filter((e) => e.gender == "M");
// console.log(userM);

// j'incremente 1000€
// const augmentationUser = userM.map((user) => (user.salary += 1000));
// console.log(augmentationUser);

// j'additionne les deux
// const sumSalary = augmentationUser.reduce((sum, e) => sum + e);
// console.log(sumSalary);

// on peut tout regrouper en une seule variable

const menSalaryTotal = userList
  .filter((user) => user.gender == "M")
  .map((user) => (user.salary += 1000))
  .reduce((menSalaryTotal, menSalary) => menSalaryTotal + menSalary);
console.log(menSalaryTotal);

// MATH

// nbre aleatoire entre 0 et 1
const xRandom = Math.random();
console.log(xRandom);

// nbre aleatoire entre 0 et 100
const xRandom100 = Math.random() * 100;
console.log(xRandom100);

// nbre entier aleatoire entre 0 et 100
const xRandom100Int = Math.round(Math.random() * 100);
console.log(xRandom100Int);

// function loop() {

// }
// loop();

for (let nbre = 0; nbre < 100; nbre++) {
  const xRandom100Int = Math.round(Math.random() * 100);
  //
  if (xRandom100Int === 0 || xRandom100Int === 101) {
    console.log("alert");
    console.log(xRandom100Int);
  }
}
