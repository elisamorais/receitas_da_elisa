'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')
const closeModal = () => document.getElementById('modal')
    .classList.remove('active')

    //CRUD - CREATE READ UPDADE DELETE.

    const tempReceita = {
        titulo: "Bolinho",
        ingredientes:"Ovos",
        preparo: "bata os ovos"
    }

    const createReceita = (Receita) => {
        localStorage.setItem("teste para o crud")
    }
   //Eventos 
document.getElementById('cadastrarReceita')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    add.addEventListener('click', closeModal)





