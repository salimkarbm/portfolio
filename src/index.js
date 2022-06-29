const menu = document.querySelector('.menu')
const  navToggle = document.querySelector('.nav-toggle')
const openIcon = document.querySelector('.open-icon');
const closeIcon = document.querySelector('.close-icon');
const menuItems = document.querySelectorAll('.menuItem');

// const humbuger = document.querySelectorAll('.navIcon')
// const showHamburger = document.querySelector("#humbuger")

//listen for a dom event
document.addEventListener('DOMContentLoaded', navbar)

//dynamically add navigations
function navbar() {
  let html = ''
  let links = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Portfolio', '#portfolio'],
    ['Skils', '#skils'],
    ['Contact', '#contact'],
  ]
  for (i = 0; i < links.length; i++) {
    let link = links[i]
    html +=
      // html +
      `<li class="nav-item"><a data-switcher class="menuItem" href="${link[1]}" data-tab=${i}>${link[0]}</a></li>`
  }
  menu.innerHTML = html
  menu.firstElementChild.classList.add('active')
}
// //menu toggle
function toggleMenu() {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
   }
   else {
    menu.classList.add("show-menu");
    closeIcon.style.display = "block";
    openIcon.style.display = "none";
  }
}
navToggle.addEventListener("click", toggleMenu);
menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", toggleMenu);
});
// navToggle.addEventListener('click', () =>{
//   //drop down menu on click
//   navLinks.classList.toggle("open-icon")
//   humbuger.forEach(icon =>{
//     icon.classList.toggle('close-icon')
//   })
// }
// )

//listen for resize on the window
window.addEventListener('resize',()=>{
  if(document.body.clientWidth > 720){
     menu.classList.remove("open-icon")
     humbuger.forEach(icon =>{
      icon.classList.add('close-icon')
    })
    showHamburger.classList.remove("close-icon")
  }
 
})

//listen for click events on navigations
menu.addEventListener('click', navLinksClick)
//activate active state when clicked
function navLinksClick(e) {
  const links = document.querySelectorAll('[data-switcher]')
  for (let i = 0; i < links.length; i++) {
    const tab = links[i]
    tab.addEventListener('click', function () {
      document
        .querySelector('.nav-item.active')
        .classList.remove('active')
      tab.parentElement.classList.add('active')
      navLinks.classList.remove("open-icon")
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