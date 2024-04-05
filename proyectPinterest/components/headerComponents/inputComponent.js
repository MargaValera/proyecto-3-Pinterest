import { getImages } from '../scr/api'
// import { header } from '../header/header'

export const inputComponent = () => {
  const headerInput = document.createElement('input')
  headerInput.setAttribute('type', 'text')
  headerInput.id = 'input'
  headerInput.addEventListener('change', function () {
    getImages(headerInput.value)
  })
  // header.appendChild(headerInput)
  console.log(headerInput)
}
inputComponent()
