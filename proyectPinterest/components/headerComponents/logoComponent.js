import { getImages } from '../callApi/api'

export const logoComponent = (place) => {
  const headerLogo = document.createElement('img')
  headerLogo.src = './components/assets/pinterest.png'
  headerLogo.id = 'logo'
  headerLogo.addEventListener('click', function () {
    getImages()
  })
  place.appendChild(headerLogo)
}
