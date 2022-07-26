//Pesquisa//
function pesquisar(){
    var pesquisa = document.getElementById("pesq")
    pesquisa = String(pesquisa.value)
    pesquisa = pesquisa.toLowerCase()
    switch(pesquisa) {
        case 'anime':
            pag = 10
            img.src = "https://i.pinimg.com/originals/9d/66/5f/9d665f2e5329844fdba5969b9d9f95f9.jpg"
            break
        case 'animes':
            pag = 10
            img.src = "https://i.pinimg.com/originals/9d/66/5f/9d665f2e5329844fdba5969b9d9f95f9.jpg"
            break
        case 'geek':
            pag = 10
            img.src = "https://i.pinimg.com/originals/9d/66/5f/9d665f2e5329844fdba5969b9d9f95f9.jpg"
            break
        case 'arte':
            pag = 4
            img.src = "https://i.pinimg.com/originals/e1/ba/af/e1baaf379f4dd23a15dfe5b6b3ee6538.jpg"
            break
        case 'artes':
            pag = 4
            img.src = "https://i.pinimg.com/originals/e1/ba/af/e1baaf379f4dd23a15dfe5b6b3ee6538.jpg"
            break
        case 'pauta social':
            pag = 2
            img.src = 'https://i.pinimg.com/originals/e2/b6/e3/e2b6e37f7c72e5e9a3975f9d2e77f16d.jpg'
            break
        case 'astronomia':
            pag = 13
            img.src = 'https://i.pinimg.com/originals/c1/80/a4/c180a438c7baf2f916a4e99455df3982.jpg'
            break
        case 'esporte':
            pag = 8
            img.src = "https://i.pinimg.com/originals/89/80/1b/89801bd8545d8a8abc1db768f8c83815.jpg"
            break
        case 'esportes':
            pag = 8
            img.src = "https://i.pinimg.com/originals/89/80/1b/89801bd8545d8a8abc1db768f8c83815.jpg"
            break
        case 'futebol':
            pag = 8
            img.src = "https://i.pinimg.com/originals/89/80/1b/89801bd8545d8a8abc1db768f8c83815.jpg"
            break
        case 'tecnologia':
            pag = 15
            img.src = "https://i.pinimg.com/originals/72/49/21/724921c30d815cfe2e926a82a51e9045.jpg"
            break
        case 'games':
            pag = 15
            img.src = "https://i.pinimg.com/originals/72/49/21/724921c30d815cfe2e926a82a51e9045.jpg"
            break
        case 'sexo':
            alert('Bro?🤨')
            break
        default:
            alert('não entendi 🤔')
            break

    }
}
//Criação das variaveis//

var img = document.getElementById("imagem")
var bc = document.getElementById("back")
var vc = document.getElementById("next")
var pag = 0

bc.innerText = '<'
vc.innerText = '>'


//lógica da troca de páginas//
function proximor(){
    if (pag < 18){
        pag = pag + 1   
        return verificador()
    }
}
function voltar() {
    if (pag > 0) {
        pag = pag -1 
        return verificador()
    }
}
function verificador(){
    switch(pag){
        case 0:
            img.src = "https://i.pinimg.com/originals/28/af/9e/28af9e2b0a791c8171542e45288ac38d.jpg"
            break
        case 1:
            img.src = "https://i.pinimg.com/originals/cb/a8/b6/cba8b6168476ac9d6fa014d3af74a608.jpg"
            break
        case 2:
            img.src = "https://i.pinimg.com/originals/e2/b6/e3/e2b6e37f7c72e5e9a3975f9d2e77f16d.jpg"
            break
        case 3:
            img.src = "https://i.pinimg.com/originals/99/73/37/997337cf7ec7cae2f6bd7175a50e5512.jpg"
            break
        case 4:
            img.src = "https://i.pinimg.com/originals/e1/ba/af/e1baaf379f4dd23a15dfe5b6b3ee6538.jpg"
            break
        case 5:
            img.src = "https://i.pinimg.com/originals/c9/0b/40/c90b40eeb3b78a591f1595ceca359508.jpg"
            break
        case 6:
            img.src = "https://i.pinimg.com/originals/4d/71/4b/4d714b08a4bbdbc1b7997f4328c0f47a.jpg"
            break
        case 7:
            img.src = "https://i.pinimg.com/originals/43/6b/96/436b9658ff13f61a89675fab315b4903.jpg"
            break
        case 8:
            img.src = "https://i.pinimg.com/originals/89/80/1b/89801bd8545d8a8abc1db768f8c83815.jpg"
            break
        case 9:
            img.src = "https://i.pinimg.com/originals/21/14/bc/2114bcce5f48140d5450f9160c7aff90.jpg"
            break
        case 10:
            img.src = "https://i.pinimg.com/originals/9d/66/5f/9d665f2e5329844fdba5969b9d9f95f9.jpg"
            break
        case 11:
            img.src = "https://i.pinimg.com/originals/7e/d0/eb/7ed0ebb335309b569b65ab4418aee3f8.jpg"
            break
        case 12:
            img.src = "https://i.pinimg.com/originals/0a/92/bc/0a92bc75b10000f9aa9588736c7ced1a.jpg"
            break 
        case 13:
            img.src = "https://i.pinimg.com/originals/c1/80/a4/c180a438c7baf2f916a4e99455df3982.jpg"
            break 
        case 14:
            img.src = "https://i.pinimg.com/originals/64/e5/ea/64e5eaa2936137ab2eb0139e7c4e661c.jpg"
            break
        case 15:
            img.src = "https://i.pinimg.com/originals/72/49/21/724921c30d815cfe2e926a82a51e9045.jpg"
            break
        case 16:
            img.src = "https://i.pinimg.com/originals/1f/9a/67/1f9a675f16780e06610bf717b9a0f05c.jpg"
            break
        case 17:
            img.src = "https://i.pinimg.com/originals/e0/71/d1/e071d1e661abefbe37fd7be1a6311875.jpg"
            break
        case 18:
            img.src = "https://i.pinimg.com/originals/59/6b/94/596b943ae72b167dc23e1062dff3b733.jpg"
            break
        default:
            break
    }
}