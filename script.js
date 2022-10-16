const burgerBtn =  document.querySelector('.burger__btn');
const menu = document.querySelector('.main__menu')
const blurBurger = document.querySelector('.blur')
const body = document.querySelector('body')

blurBurger.addEventListener("click", function() {
    if(menu.classList.contains('active')){
        closeBurger()
    } else {
        closeBurger()
    }
})

burgerBtn.addEventListener('click', function() {
    menu.classList.toggle("active")
    body.classList.toggle("no__scroll")
})
const openBurger = () => {
    menu.classList.add("active")
    body.classList.add("no__scroll")
}
const closeBurger = () => {
    menu.classList.remove("active")
    body.classList.remove("no__scroll")
} 