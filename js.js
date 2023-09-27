var contador = 0;

var lastScrollTop = 0;
window.addEventListener("scroll", function Sll(){ // or window.addEventListener("scroll"....
   var st = this.window.pageYOffset || this.window.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
      // downscroll code
   } else {
      // upscroll code
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);


function Inicio(){
    inicio = document.getElementById('id_inicio');
    inicio.style.transform='translateY(0%)';

    habilidades = document.getElementById('id_habilidades');
    habilidades.style.transform='translateY(100%)';

    izquierda = document.getElementById("logo");
    izquierda.style.display='block';
    izquierda2 = document.getElementById("inicio2");
    izquierda2.style.display='none';
    izquierda3 = document.getElementById("inicio3");
    izquierda3.style.display='none';

    centro = document.getElementById("id_centro").textContent="Inicio";

    derecha = document.getElementById("habilidades");
    derecha.style.display='block';
    derecha2 = document.getElementById("id_sobremi");
    derecha2.style.display='none';
}
function Habilidades(){
    inicio = document.getElementById('id_inicio');
    inicio.style.transform='translateY(-100%)';

    habilidades = document.getElementById('id_habilidades');
    habilidades.style.transform='translateY(0%)';

    sobremii = document.getElementById('contacto');
    sobremii.style.transform='translateY(100%)';

    izquierda = document.getElementById("logo");
    izquierda.style.display='none';
    izquierda2 = document.getElementById("inicio2");
    izquierda2.style.display='block';
    izquierda3 = document.getElementById("inicio3");
    izquierda3.style.display='none';

    centro = document.getElementById("id_centro").textContent="Habilidades";

    derecha = document.getElementById("habilidades");
    derecha.style.display='none';
    derecha2 = document.getElementById("id_sobremi");
    derecha2.style.display='block';
}
function Sobre_mi(){
    inicio = document.getElementById('id_inicio');
    inicio.style.transform='translateY(-100%)';

    habilidades = document.getElementById('id_habilidades');
    habilidades.style.transform='translateY(-100%)';

    sobremii = document.getElementById('contacto');
    sobremii.style.transform='translateY(0%)';

    izquierda = document.getElementById("logo");
    izquierda.style.display='none';
    izquierda2 = document.getElementById("inicio2");
    izquierda2.style.display='none';
    izquierda3 = document.getElementById("inicio3");
    izquierda3.style.display='block';

    centro = document.getElementById("id_centro").textContent="Sobre mi";

    derecha = document.getElementById("habilidades");
    derecha.style.display='none';
    derecha2 = document.getElementById("id_sobremi");
    derecha2.style.display='none';
}
function Volver_claro(){
    Boscuro = document.getElementById('id_dark');
    Boscuro.style.visibility='visible';
    Boscuro.style.transform='scale(1)';
    Boscuro.style.transform='rotate(0deg)';
    Bclaro = document.getElementById('id_ligth');
    Bclaro.style.transform='rotate(1deg)';
    Bclaro.style.transform='scale(0.01)';

    //CONTENIDO
    cuerpo = document.getElementById('id_cuerpo');
    cuerpo.classList.replace("cuerpoDARK", "cuerpo");

    titulo = document.getElementById('id_titulo');
    titulo.classList.replace("tituloDARK", "titulo");

    Bhabilidades = document.getElementById('id_b-habilidades');
    Bhabilidades.classList.replace("b-habilidadesDARK", "b-habilidades");
    Bhabilidades.style.opacity='1';

    Bcontacto = document.getElementById('id_b-contacto');
    Bcontacto.classList.replace("b-contactoDARK", "b-contacto");
    Bcontacto.style.opacity='1';

    sobremi = document.getElementById('id_sobre-mi');
    sobremi.classList.replace("sobre-miDARK", "sobre-mi");
    sobremi.style.opacity='1';
}
function Volver_oscuro(){

    //BOTONES
    Boscuro = document.getElementById('id_dark');
    Boscuro.style.visibility='hidden';
    Boscuro.style.transform='scale(0.01)';
    Boscuro.style.transform='rotate(180deg)';
    Bclaro = document.getElementById('id_ligth');
    Bclaro.style.transform='scale(1)';
    Bclaro.style.transform='rotate(-180deg)';

    //CONTENIDO
    cuerpo = document.getElementById('id_cuerpo');
    cuerpo.classList.replace("cuerpo", "cuerpoDARK");

    titulo = document.getElementById('id_titulo');
    titulo.classList.replace("titulo", "tituloDARK");

    Bhabilidades = document.getElementById('id_b-habilidades');
    Bhabilidades.classList.replace("b-habilidades", "b-habilidadesDARK");

    Bcontacto = document.getElementById('id_b-contacto');
    Bcontacto.classList.replace("b-contacto", "b-contactoDARK");

    sobremi = document.getElementById('id_sobre-mi');
    sobremi.classList.replace("sobre-mi", "sobre-miDARK");
}











//GRAFICO
const data = {
    labels:['d','a','t','a'],
    datasets:[{
        data:[10,13,15,20],
        borderWidth:3,
        borderColor:'#555555b6',
        backgroundColor:['rgba(255, 255, 0, 0.479)','rgba(0, 128, 0, 0.479)','rgba(255, 0, 0, 0.479)','rgba(0, 0, 255, 0.473)']
    }]
}
const conff = {
    scale: {
        gridLines: {
            color:'red'
        },
        ticks: {
            display: false
        } 
    },
    legend: {
        position: 'right',
        labels:{
            fontColor: '#756a68'
        }
    }   
}
new Chart('grafico',{ type: 'polarArea',data,conff});











//EFECTO DE ESCRITURA AL INICIO
const typed0 = new Typed('.typed',{
    stringsElement: '#text0',
    typeSpeed: 70,
    startDelay: 500,
    showCursor: true,
    showCursor: false,
    contentType: 'html',
});
const typed1 = new Typed('.typed2',{
    stringsElement: '#text1',
    typeSpeed: 30,
    startDelay: 2500,
    showCursor: true,
    contentType: 'html',
});