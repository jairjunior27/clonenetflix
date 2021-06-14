let botao = document.getElementById('botao');
let modal = document.getElementById('modal');
let fechar = document.getElementById('fechar');
botao.addEventListener('click',abrir)
function abrir(){
    modal.classList.toggle('modal_active');
}


fechar.addEventListener('click',fecharModal);

function fecharModal(){
    modal.classList.toggle('modal_active');
}
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

