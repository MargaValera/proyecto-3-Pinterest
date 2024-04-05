export const logoComponent = () => {
  const headerLogo = document.createElement('img')
  headerLogo.src = './components/assets/pinterest.png'
  headerLogo.id = 'logo'
  headerLogo.addEventListener('click', function () {
    getImages()
    console.log('no funciona')
  })
  console.log(headerLogo)
}
logoComponent()
