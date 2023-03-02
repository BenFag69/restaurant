import home from './pages/home/home.js'

const initial = function () {
  const navBar = document.createElement('div')
  navBar.id = 'nav'

  const homePage = document.createElement('button')
  homePage.innerHTML = 'Home'
  homePage.id = 'home'

  const menuPage = document.createElement('button')
  menuPage.innerHTML = 'Menu'
  menuPage.id = 'menu'

  const contactPage = document.createElement('button')
  contactPage.innerHTML = 'Contact'
  contactPage.id = 'contact'

  document.body.appendChild(navBar)
  navBar.appendChild(homePage)
  navBar.appendChild(menuPage)
  navBar.appendChild(contactPage)
  home()
}

export default initial
