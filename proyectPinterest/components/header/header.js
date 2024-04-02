import './header.css'
import { getImages } from './components/scr/api'

const inputValue = ''

export const printHeader = () => {
  const header = document.querySelector('header')
  header.className = 'header'

  const headerLogo = document.createElement('img')
  const headerInput = document.createElement('input')
  const headerNotf = document.createElement('img')
  const headerMessage = document.createElement('img')
  const headerPerfil = document.createElement('img')

  headerLogo.src = './components/assets/pinterest.png'
  headerLogo.id = 'logo'
  headerInput.setAttribute('type', 'text')
  headerInput.id = 'input'
  headerInput.placeholder = 'buscar'
  headerNotf.src = './components/assets/comentario.png'
  headerMessage.src = './components/assets/notificacion.png'
  headerPerfil.src = './components/assets/usuario-de-perfil.png'

  const selectOption = () => {
    const selectOptions = ['Inicio', 'Explorar', 'Crear']

    const selectElement = document.createElement('select')

    selectOptions.forEach((option) => {
      const optionElement = document.createElement('option')
      optionElement.textContent = option
      selectElement.appendChild(optionElement)
    })

    header.appendChild(selectElement)
  }

  header.appendChild(headerLogo)
  selectOption()
  header.appendChild(headerInput)
  header.appendChild(headerNotf)
  header.appendChild(headerMessage)
  header.appendChild(headerPerfil)

  // Agregar evento de escucha para detectar cambios en el input
  headerInput.addEventListener('change', function () {
    inputValue.length = 0
    inputValue.push(this.value.trim())
    getImages(inputValue)
    // console.log(inputValue) // Almacenar el valor actual del input en la variable global
  })
}

// export { inputValue }

//  Agregar funcionalidad a los botones.
