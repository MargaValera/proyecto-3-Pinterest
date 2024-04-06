// import { header } from '../header/header'

export const notComponent = (place) => {
  const headerNotf = document.createElement('img')
  headerNotf.src = './components/assets/comentario.png'
  headerNotf.id = 'notification'

  place.appendChild(headerNotf)
}
// notComponent()
