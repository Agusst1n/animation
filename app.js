gsap.registerPlugin(ScrollTrigger); //registro el plugin ScrollTrigger

gsap.defaults({ease: 'none', duration: 2}); //estilos por defecto(?

const tl = gsap.timeline(); //creo una linea del tiempo (se ejecuta una animacion atras de la otra. No todas al mismo tiempo)


//tl.from('.section__1', {scale:2}) //les digo que a las secciones que se van a mover en estas direcciones]
//tl.to('.section__1', {scale:0.5})



tl.from('.image', {scale:2.2}) //les digo que a las secciones que se van a mover en estas direcciones]
tl.to('.image', {scale:0.6})

tl.from('.section__2', { scale:300}) //les digo que a las secciones que se van a mover en estas direcciones]
tl.to('.section__2', {backgroundColor:'white'})

tl.from('.this', {opacity:0})
tl.to('.this', {opacity:1})

//tl.from('.hola', {color:'white'})
//tl.to('.hola', {color:'black'})

//tl.from('.section__3', {xPercent: 100,})
tl.from('.section__3', {xPercent:-100})
tl.to('.section__3', {backgroundColor:'white'})
tl.from('.front', {opacity:0})


tl.from('.section__4', {yPercent: -100})
tl.to('.section__4', {color:'transparent'})
//tl.from('.section__4', {scale:4, opacity:0})
//tl.to('.section__4', {scale:0.3})

tl.from('.text', {xPercent: 300})
tl.to('.text', {xPercent: -300})

tl.from('.text_2', {xPercent: -300})
tl.to('.text_2', {xPercent: 300})

ScrollTrigger.create({
    animation:tl,
    trigger: '.contenedor__Animacion',
    markers:true, //muestra las marcas de inicio y fin
    start: 'top top',//acomodo las marcas de inicio
    end: '+=5000', //La Animacion termina 4000 px abajo]
    pin: true, //clava en la pantalla el contenedor que contiene todas las animaciones]
    scrub: true,
})