const emojis = [
    "💵",
    "💵",
    "🍔",
    "🍔",
    "🚛",
    "🚛",
    "👽",
    "👽",
    "💩",
    "💩",
    "🤡",
    "🤡",
    "🐵",
    "🐵",
    "🧛‍♂️",
    "🧛‍♂️"
]// Adição dos emojis utilizados

let openCards = [] // Array para os cards com emojis

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2: -1)) 
// Ordem aleatória dos cards emojis

for(let i = 0; i < emojis.length; i++){
    let box = document.createElement("div")
    box.className = "item"
    box.innerHTML = shuffleEmojis[i]
    box.onclick = handleClick
    document.querySelector(".game").appendChild(box)

/* 
Criando um for para percorrer os emojis. Criado uma div chamada box que vai receber a classe de nome "item". Criado um local onde cada emoji vai ficar e sorteado os seus locais
*/
}

function handleClick(){
    if(this.classList.contains("boxOpen") || openCards.includes(this)){
        return
    }

    if(openCards.length < 2){
        this.classList.add("boxOpen")
        openCards.push(this)
    }

    if(openCards.length == 2){
        setTimeout(checkMatch, 500)
    }

/*
Função que funciona a cada clique do usuário nos cards. Incrementei um if para evitar duplo clique no mesmo card. 1 if salva o boxOpen dentro de uma openCard como selecionado. 2 if compara se os dois cards são iguais e trata a função checkMatch
*/    
}

function checkMatch(){
    if(openCards[0].innerHTML === openCards[1].innerHTML){
        openCards[0].classList.add("boxMatch")
        openCards[1].classList.add("boxMatch")
    }else{
        openCards[0].classList.remove("boxOpen")
        openCards[1].classList.remove("boxOpen")
    }

    openCards = []

    if(document.querySelectorAll(".boxMatch").length === emojis.length){
        alert(" !!! Você venceu !!! ")
    }

/*
Função que verifica os cards. Caso sejam iguais ele add boxMatch. Caso sejam diferentes ele remove o boxOpen. OpenCards no final para voltar ao normal. Alert para mostrar que você concluiu o jogo.
*/    
}