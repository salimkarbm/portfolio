const navLinks = document.querySelector('.navbar')
const  navToggle = document.querySelector('#navToggle')
const humbuger = document.querySelectorAll('.navIcon')
const showHamburger = document.querySelector("#humbuger")

//listen for a dom event
document.addEventListener('DOMContentLoaded', navbar)

//dynamically add navigations
function navbar() {
  let html = ''
  let links = [
    ['Home', '#home'],
    ['About', '#about'],
    ['portfolio', '#portfolio'],
    ['Contact', '#contact'],
  ]
  for (i = 0; i < links.length; i++) {
    let link = links[i]
    html +=
      // html +
      `<li class="nav-item"><a data-switcher  class="onhover" href="${link[1]}" data-tab=${i}>${link[0]}</a></li>`
  }
  navLinks.innerHTML = html
  navLinks.firstElementChild.classList.add('is-active')
}

//listen for click events on navigations
navLinks.addEventListener('click', navLinksClick)

//activate active state when clicked
function navLinksClick(e) {
  const links = document.querySelectorAll('[data-switcher]')
  for (let i = 0; i < links.length; i++) {
    const tab = links[i]
    tab.addEventListener('click', function () {
      document
        .querySelector('.nav-item.is-active')
        .classList.remove('is-active')
      tab.parentElement.classList.add('is-active')
      navLinks.classList.remove("open")
    })
  }
  scrollSection(e)
}

//scroll when click
function scrollSection(e) {
  e.preventDefault()
  const href = e.target.getAttribute('href')
  window.scrollTo({
    top: document.querySelector(href).offsetTop,
    behavior: 'smooth',
  })
}


//menu toggle
navToggle.addEventListener('click', () =>{
  //drop down menu on click
  navLinks.classList.toggle("open")
  humbuger.forEach(icon =>{
    icon.classList.toggle('hidden')
  })
 
}
)


//listen for resize on the window
window.addEventListener('resize',()=>{
  if(document.body.clientWidth > 720){
     navLinks.classList.remove("open")
     humbuger.forEach(icon =>{
      icon.classList.add('hidden')
    })
    showHamburger.classList.remove("hidden")
  }
 
})