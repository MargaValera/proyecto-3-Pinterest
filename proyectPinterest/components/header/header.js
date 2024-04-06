import './header.css'
import { logoComponent } from '../headerComponents/logoComponent'
import { notComponent } from '../headerComponents/imgComponent'
import { messageComponent } from '../headerComponents/msnComponent'
import { selectOption } from '../headerComponents/selectComponent'
import { perfilComponent } from '../headerComponents/perfilcomponent'
import { inputComponent } from '../headerComponents/inputComponent'

export const headerComponents = () => {
  const header = document.querySelector('header')
  // document.body.appendChild(header)
  header.className = 'header'

  logoComponent(header)
  selectOption(header)
  inputComponent(header)
  notComponent(header)
  messageComponent(header)
  perfilComponent(header)
}

// headerComponents()
