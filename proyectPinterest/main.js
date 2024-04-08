import './style.css'
import { headerComponents } from './components/header/header'
import { getImages } from './components/callApi/api'
import { fondo } from './components/backGround/backGround'
// import { header } from './components/header/header'
// import { notComponent } from './components/headerComponents/imgComponent'

getImages()
// console.log(header)
headerComponents()
fondo()

// Limpiar buscador cuando se cliquee el logo.
// misma función de logo cuando se cliquee inicio.
//
