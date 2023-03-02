import clearPage from '../../clear.js'

const menu = () => {
  clearPage()
  const content = document.querySelector('#content')

  const heading = document.createElement('div')
  heading.id = 'heading'
  heading.innerHTML = 'MENU'

  content.appendChild(heading)
}

export default menu
