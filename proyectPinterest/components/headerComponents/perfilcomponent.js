export const perfilComponent = (place) => {
  const headerPerfil = document.createElement('img')
  headerPerfil.src = './components/assets/usuario-de-perfil.png'
  headerPerfil.id = 'perfil'
  place.appendChild(headerPerfil)
}
