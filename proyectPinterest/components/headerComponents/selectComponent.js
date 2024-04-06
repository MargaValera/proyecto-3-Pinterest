export const selectOption = (place) => {
  const selectOptions = ['Inicio', 'Explorar', 'Crear']

  const selectElement = document.createElement('select')

  selectOptions.forEach((option) => {
    const optionElement = document.createElement('option')
    optionElement.textContent = option
    selectElement.appendChild(optionElement)
  })
  place.appendChild(selectElement)
}
