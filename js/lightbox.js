const imagenes = document.querySelectorAll('.img-Nuestros-invitados')
const imagenesligth = document.querySelector('.agregar-imagen')
const contenedorligth = document.querySelector('.imagen-ligth')

imagenes.forEach(imagen => {
         imagen.addEventListener('click', ()=>{
            aparecerImagen(imagen.getAttribute('src'))
  })
})

contenedorligth.addEventListener('click', (e)=>{
    if(e.target !== imagenesligth){
        contenedorligth.classList.toggle('show')
        imagenesligth.classList.toggle('showImage') 
}
})
const aparecerImagen = (imagen)=>{
    imagenesligth.src = imagen
    contenedorligth.classList.toggle('show')
    imagenesligth.classList.toggle('showImage')

}