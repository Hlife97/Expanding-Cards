const cards = document.querySelectorAll(".card")

cards.forEach(el => {
    el.addEventListener('click', ()=>{
        removeActiveClasses()
        el.classList.add("active")
    })
});

function removeActiveClasses() {
    cards.forEach(card =>{
        card.classList.remove("active")
    })
}