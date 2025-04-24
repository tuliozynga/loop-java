//const app = document.querySelector("#app")
const app = document.getElementById("app")

const nomes = ["daniel" , "fretz" , "faustino" , "cristiane" , "rodrigo"]
const idades = [20,33,98,60,33,55,43,22,93,88]
const ul =document.createElement("ul")
const tamanho = nomes.length -1

// for(let i=0; i<=tamanho; i++){
//     const lista = document.createElement("li")
//     lista.innerText = nomes[i]
//     ul.appendChild(lista)
//}
// for ( const pos in nomes){
//     const lista = document.createElement("li")
//     lista.innerText = nomes[pos]
//     ul.appendChild(lista)
// }
for ( const idade of idades){
    if(idade > 99 ){
        break
    }
    if(idade % 2 == 0){
        continue 
    }
    const lista = document.createElement("li")
    lista.innerText = idade
    ul.appendChild(lista)
    
}




app.appendChild(ul)