## Tipos de dados

Existem alguns tipos de dados em javascript, alguns deles são:

- string
- number
- boolean
- null: Valor nulo, o desenvolvedor que ira colocar
- undefined: Quando o valor nao foi definido ainda
- BigInt: O BigInt deve ser usado quando o valor exceder Dois elevado à potência de cinquenta e três.
- Symbol: Ele é usado para evitar conflitos entre identificadores de objetos. Quando usamos um Symbol como chave de um objeto, essa "etiqueta" se torna única e inacessível para qualquer pessoa que não tenha acesso ao próprio símbolo. Isso garante que, mesmo que alguém tente usar o mesmo nome de identificador, ele não sobrescreva o valor associado ao Symbol.

## Armazenando esses dados

Para armazenarmos esses dados usamos variaveis e constantes. Utilizando as palavras reservadas let e const, sendo let para variáveis mutáveis e const para imutáveis.

```JS
const x = 10;  
const y = 2.5;  
const name = "Leo";  
const lastName = "Souza";  
let t = true;
```

Pense nessas variáveis como se fossem caixas, e cada “caixa” terá seu próprio conteúdo, onde quando quisermos acessar podemos simplesmente chama-la e ele estará la dentro. Porem o let e const são caixas com regras diferentes, na “caixa” let, podemos sobrescrever o conteúdo que esta dentro dela, ela nos deixa fazer isto, ja na “caixa” const, não podemos sobrescrever, o valor que for declarado nela, permanecera nela enquanto ela existir.