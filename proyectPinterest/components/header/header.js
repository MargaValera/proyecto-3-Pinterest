import './header.css'
import { logoComponent } from '../headerComponents/logoComponent'
import { notComponent } from '../headerComponents/imgComponent'
import { messageComponent } from '../headerComponents/msnComponent'
import { selectOption } from '../headerComponents/selectComponent'
import { perfilComponent } from '../headerComponents/perfilcomponent'
import { inputComponent } from '../headerComponents/inputComponent'
// import { headerNotf } from '../headerComponents/imgComponent'

export const headerComponents = () => {
  const header = document.querySelector('header')
  header.className = 'header'
  console.log(header)
  console.log('holamundo')

  header.appendChild(logoComponent())
  header.appendChild(notComponent())
  header.appendChild(messageComponent())
  header.appendChild(selectOption())
  header.appendChild(perfilComponent())
  header.appendChild(inputComponent())
}
// headerComponents()
