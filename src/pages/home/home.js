const home = () => {
  const content = document.querySelector('#content')

  const heading = document.createElement('div')
  heading.id = 'heading'
  heading.innerHTML = "Faiseur D'argent"

  content.appendChild(heading)
}

export default home
