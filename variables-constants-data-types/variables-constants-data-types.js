const x = 10;
const y = 2.5;
const name = "Leo";
const lastName = "Souza";
const t = true;
const theBiggestInt = 9007199254740991n;
const alsoHuge = BigInt(9007199254740991);


const id = Symbol("id")

const user = {
    name: "Leonardo",
    age: 24,
    [id]: 12345,
}

console.log(user)
console.log(Object.keys(user))
console.log(user[id])

console.log(typeof(x));
console.log(typeof(y));
console.log(typeof(name));
console.log(typeof(lastName));
console.log(typeof(theBiggestInt))
console.log(typeof(alsoHuge))