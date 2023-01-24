/* Exc 1 */
var weight = 65;

console.log(typeof weight );
/* Exc 2 */
let name= "Carlos";
let age= 24;
let stars= 5;
let isSubscried= true;

console.log (`${name} tem ${age} e deu ${stars} estrelas. Sua instrção é ${isSubscried}`);

/* Exc 3 */
let student = {
    name: "Carlos",
    age: 24,
    stars: 5,
    isSubscried: true,
};
console.log (`O estudante ${student.name} tem ${student.age} anos e tirou ${student.stars} estrelas. Seu peso é ${weight}kg`);
console.log(typeof student)

/* Exc 4 */

let students = [
    student
]

console.log(students)
console.log(students[0])

/* Exc 5 */

let Jhow = {
    name: "Jhonatan",
    age: 25,
    stars: 4,
    isSubscried: true,
}

/* let students = [
    student,
    Jhow
] */
/* or */

students [1] = Jhow;
console.log(students[1]);