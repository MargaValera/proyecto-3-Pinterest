import './backGround.css'

//! líneas de fondo

export const fondo = () => {
  const linesContainer = document.createElement('div')
  linesContainer.className = 'lines'
  for (let i = 0; i < 3; i++) {
    const line = document.createElement('div')
    line.className = 'line'
    linesContainer.appendChild(line)
  }
  document.body.appendChild(linesContainer)
}
