console.log("les Array..............................");

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
console.log("les Math..........................");

// trouve un nombre decimal entre 0 et 1
const randomX = Math.random();
console.log(randomX);

// trouve un nombre entier entre 0 et 10
// arrondir à l'entier le plus proche
const random0 = Math.round(randomX * 10);
console.log(random0);

// trouve un nombre entier entre 1 et 10
// arrondir à l'entier supérieur
const random1 = Math.ceil(randomX * 10);
console.log(random1);

// trouve un nombre entre 0 et 9
// arrondir à l'entier inférieur
const random2 = Math.floor(randomX * 10);
console.log(random2);

// constante d'euler
const euler = Math.E;
console.log(euler);

// Pi
const pi = Math.PI;
console.log(pi);

// trouve la valeur max2
const maxValue = Math.max(11, 242, 3, 420, 50, 26, 75, 8, 9);
console.log(maxValue);

// trouve la valeur min
const minValue = Math.min(4405, 877, 5584, 5436, 1247, 420, 478, 3194);
console.log(minValue);

// eleve un nombre x a sa puissance x2 (x, x2)
const puissance = Math.pow(2, 3);
console.log(puissance);

// calcul la racine carrée
const racine = Math.sqrt(4);
console.log(racine);

// retire la partie decimale d'un nombre
const trunc = Math.trunc(25.258);
console.log(trunc);
