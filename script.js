const botãoAbrir = document.querySelector(".header > button")
const botãoFechar = document.querySelector(".header nav button")

const body = document.querySelector("body")
const nav = document.querySelector(".header.mobile")

console.log(body)

botãoAbrir.addEventListener('click', abrirMenu)
botãoFechar.addEventListener('click', fecharMenu)

function abrirMenu() {
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}

function fecharMenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}