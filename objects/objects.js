const book = {
  title: "Unicorn",
  author: "Leo",
  year: 1900,
  availability: true
}

console.log("Title:", book.title, "Availabity:", book.availability)
console.log(book['title'], book['availability'])

const { title, year } = book

console.log(`O livro ${title} foi publicado em ${year}`)

//Map

const userInfo = new Map();

userInfo.set("username", "leomartins");
userInfo.set("active", true);
userInfo.set("score", 1050);

function viewMap() {
  console.log(`UserInfo: ${userInfo.get("username")},
  ${userInfo.get("active")} ${userInfo.get("score")}`)
}

viewMap()

const person = {
  name: "Leo",
  age: 24,
  country: "Brasil"
}

const { name, age, country } = person

console.log(`${name}, faz ${age} anos esse ano aqui no ${country}`)

const productInfo = new Map()

productInfo.set("name", "Fone de ouvido")
productInfo.set("price", 299)
productInfo.set("stock", true)

function showProductInfo() {
  console.log(`
Produto: ${productInfo.get("name")}
Preco: ${productInfo.get("price")}
Disponivel: ${productInfo.get("stock")}

`)
}

showProductInfo()
