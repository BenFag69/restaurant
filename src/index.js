import home from './pages/home/home.js'
import menu from './pages/menu/menu.js'
import contact from './pages/contact/contact.js'
import initial from './initial.js'
import clearPage from './clear.js'
import './styles/home.css'

const tabSwitch = function () {
  const homePage = document.querySelector('#home')
  homePage.addEventListener('click', () => {
    clearPage()
    home()
  })

  const menuPage = document.querySelector('#menu')
  menuPage.addEventListener('click', () => {
    clearPage()
    menu()
  })

  const contactPage = document.querySelector('#contact')
  contactPage.addEventListener('click', () => {
    clearPage()
    contact()
  })
}

initial()
tabSwitch()
