import clearPage from '../../clear.js'

const contact = () => {
  clearPage()
  const content = document.querySelector('#content')

  const heading = document.createElement('div')
  heading.id = 'heading'
  heading.innerHTML = 'Contact'

  content.appendChild(heading)
}

export default contact
