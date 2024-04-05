export const messageComponent = () => {
  const headerMessage = document.createElement('img')
  headerMessage.src = './components/assets/notificacion.png'
  headerMessage.id = 'message'
  headerMessage.alt = 'message'
  console.log(headerMessage)
}
messageComponent()
