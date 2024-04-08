import './api.css'

export const getImages = (keyWord) => {
  const APYkey = 'CRSteEtiSjXVzH_yzRiXWmjkbfToYSOl4HSiuoABUaA'
  // let url = `https://api.unsplash.com/search/photos?client_id=${APYkey}&count=30`
  let url = `https://api.unsplash.com/search/photos?client_id=${APYkey}&per_page=20`
  if (keyWord !== '') {
    url += `&query=${encodeURIComponent(keyWord)}`
  }

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const gallery = document.getElementById('img-container')
      gallery.innerHTML = ''
      data.results.forEach((picture) => {
        const divItem = document.createElement('div')
        divItem.className = 'div-item'
        const img = document.createElement('img')
        img.className = 'img-item'
        img.src = picture.urls.regular
        img.alt = picture.alt_description

        divItem.appendChild(img)
        gallery.appendChild(divItem)
      })
    })
    .catch((error) => {
      console.error('error fetching images: ', error)
    })
}

// import { createApi } from "unsplash-js"

// const unsplash = createApi({
//   accessKey: import.meta.env.VITE_ACCESS_KEY,
// })

// const searchPhotos = async (keyword) => {
//   const images = await unsplash.search.getPhotos({
//     query: keyword,
//     page: 1,
//     perPage: 30,
//   })
//   return images
// }

// export { getImages }
