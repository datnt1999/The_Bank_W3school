// Change BackGround Javascript
myIndex = 0
images = ["url('./assets/img/chicago.jpg')","url('./assets/img/ny.jpg')","url('./assets/img/la.jpg')"]
carousel()
function carousel(){
    if (myIndex > 3){myIndex = 0}
    x = document.getElementsByClassName("slider")[0]
    x.style.backgroundImage = images[myIndex]
    myIndex++
    setTimeout(carousel,3000)
}
// Buy ticket CLICK
btnBuys = document.querySelectorAll(".js-buy-ticket")
modal = document.querySelector(".modal")
modalContainer = document.querySelector(".modal-container")
modalClose = document.querySelector(".js-modal-close")
function showModal(){
    modal.classList.add("open")
}
function hideModal(){
    modal.classList.remove("open")
}
for (let btn of btnBuys){
    btn.addEventListener('click',showModal)
}
modal.addEventListener('click',hideModal)
modalContainer.addEventListener('click',function(event){
    event.stopPropagation()
})
// code menu bar
header = document.getElementsByTagName('header')[0]
mobileMenu = document.querySelector(".mobile-menu-btn")
headerHeight = header.clientHeight
mobileMenu.onclick = function () {
    if(header.clientHeight === headerHeight){
        header.style.height = 'auto'
    }
    else{
        header.style.height = '46px'
    }
}
var listLinkNav = document.querySelectorAll("a")
for (tam of listLinkNav){
    tam.onclick = function(event){
        moreMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if(moreMenu){
            event.preventDefault()
        }
        else{
            header.style.height = "46px"
        }
    }
}