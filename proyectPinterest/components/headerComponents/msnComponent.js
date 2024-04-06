export const messageComponent = (place) => {
  const headerMessage = document.createElement('img')
  headerMessage.src = './components/assets/notificacion.png'
  headerMessage.id = 'message'
  headerMessage.alt = 'message'
  place.appendChild(headerMessage)
}
