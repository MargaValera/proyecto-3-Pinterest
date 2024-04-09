import './footer.css'

const contentFooter = () => {
  return `
    <h4>Copyright 2024 - Pinterest - Created with Love, By Marga Valera</h4>
    `
}

export const printFooter = () => {
  const footer = document.createElement('footer')
  footer.className = 'footer'
  footer.innerHTML = contentFooter()
  document.body.appendChild(footer)
}
