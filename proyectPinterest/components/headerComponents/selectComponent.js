export const selectOption = () => {
  const selectOptions = ['Inicio', 'Explorar', 'Crear']

  const selectElement = document.createElement('select')

  selectOptions.forEach((option) => {
    const optionElement = document.createElement('option')
    optionElement.textContent = option
    selectElement.appendChild(optionElement)
  })
  console.log(selectElement)
}
selectOption()
