import { getImages } from '../scr/api'
// import { header } from '../header/header'

export const inputComponent = (place) => {
  const headerInput = document.createElement('input')
  headerInput.setAttribute('type', 'text')
  headerInput.id = 'input'
  headerInput.placeholder = 'buscar'
  headerInput.addEventListener('change', function () {
    getImages(headerInput.value)
  })
  place.appendChild(headerInput)
}
