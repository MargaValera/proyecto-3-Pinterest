import './api.css'

// import { inputValue } from '../header/header'

// const keyWord = inputValue
// console.log(keyWord)

export const getImages = (keyWord) => {
  const APYkey = 'CRSteEtiSjXVzH_yzRiXWmjkbfToYSOl4HSiuoABUaA'
  let url = `https://api.unsplash.com/photos/random?client_id=${APYkey}&count=15`

  if (keyWord !== '') {
    url += `&query=${encodeURIComponent(keyWord)}`
  }
  console.log(url)

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const gallery = document.getElementById('main')
      data.forEach((picture) => {
        const img = document.createElement('img')
        img.className = 'img'
        img.src = picture.urls.regular
        img.alt = picture.alt_description

        gallery.appendChild(img)
      })
    })
    .catch((error) => {
      console.error('error fetching images: ', error)
    })
}

getImages(keyWord)

export { getImages }

// * crear filtro por palabra clave introducida:

console.log(keyWord)
