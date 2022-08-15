const animales =[
    {
        titulo:'El tigre',
        parrafo:"El tigre (Panthera tigris) es una de las especies​ de la subfamilia de los panterinos (familia Felidae)pertenecientes al género Panthera. Se encuentra solamente en el continente asiático; es un predador carnívoro y es la especie de félido más grande del mundo junto con el león pudiendo alcanzar ambos un tamaño comparable al de los fósiles de félidos de mayor tamaño.",
        imgSrc:'./imagenes/tiger.jpg'
    },
    {
        titulo:'El leon',
        parrafo:"El león (Panthera leo) es un mamífero carnívoro de la familia de los félidos y una de las cinco especies del género Panthera. Los leones salvajes viven en poblaciones cada vez más dispersas y fragmentadas del África subsahariana (a excepción de las regiones selváticas de la costa del Atlántico y la cuenca del Congo) y una pequeña zona del noroeste de India",
        imgSrc:'./imagenes/leon.jpg'
    },
    {
        titulo:'El leopardo',
        parrafo:"El leopardo (Panthera pardus) es un mamífero carnívoro de familia de los félidos. Al igual que tres de los demás félidos del género Panthera: el león, el tigre y el jaguar, están caracterizados por una modificación en el hueso hioides que les permite rugir. También se lo conoce como pantera parda y, cuando presenta un pelaje completamente oscuro como pantera negra (melánico).",
        imgSrc:'./imagenes/leopardo.jpg'
    },
    {
        titulo:'La pantera negra',
        parrafo:"La pantera negra es una variación negra (melanismo) de varias especies de grandes félidos, en especial del leopardo (Panthera pardus) y del jaguar (Panthera onca). Pero cabe recalcar que no es una nueva especie, ni siquiera una subespecie, es simplemente una variación negra de estos animales.",
        imgSrc:'./imagenes/pantera-negra.jpg'
    },
    {
        titulo:'El jaguar',
        parrafo:"El jaguar, yaguar o yaguareté (Panthera onca) es un carnívoro félido de la subfamilia de los Panterinos y género Panthera. Es la única de las cinco especies actuales de este género que se encuentra en América. También es el mayor félido de América y el tercero del mundo, después del tigre (Panthera tigris) y el león (Pantheraleo).",
        imgSrc:'./imagenes/jaguar.jpg'
    },
    {
        titulo:'El guepardo',
        parrafo:"El guepardo o chita (Acinonyx jubatus)1​ es un miembro atípico de la familia de los félidos. Es el único representante vivo del género Acinonyx. Caza gracias a su vista y a su gran velocidad. Es el animal terrestre más veloz, ya que alcanza una velocidad punta de 115 km/h en carreras de hasta cuatrocientos o quinientos metros.",
        imgSrc:'./imagenes/chita.jpg'
    }
]

console.log("hola mundo");


function agregarAnimales(){
    for (let i = 0; i < animales.length; i++) { 

        const div1 = document.createElement('div');
        div1.classList.add('item');
        document.querySelector('.contenedor').appendChild(div1); 

        const imagen = document.createElement('img');
        imagen.src = animales[i].imgSrc;
        document.querySelector('.contenedor .item:last-child').appendChild(imagen);
        
        
        const titulo = document.createElement('h2');
        titulo.innerText =animales[i].titulo;
        document.querySelector('.contenedor .item:last-child').appendChild(titulo);
        
   
        const parrafo = document.createElement('p');
        parrafo.innerText = animales[i].parrafo;
        document.querySelector('.contenedor .item:last-child').appendChild(parrafo);
    
    
}

}



function activarDark (){

    /* SE SELECCONA EL BODY Y SE AGREGA A UNA VARIABLE */
    let bodyDark = document.querySelector("body");
    /* SE LE AGREGA LA PROPIDAD CLASSLIST PARA AGREGAR LA CLASE toggle pone la clase si no la tiene y la quita si la tiene */
    bodyDark.classList.toggle("dark");

}
/* CREAR ELEMENTOS HTML EN JAVASCRITP */
const boton = document.createElement('button');
/* AGREGAR NOMBRE AL BOTON */
boton.innerText = "Boton Javascript"
/* AGREGAR ELEMENTOS AL HTML */
document.querySelector('.contenedor .item').appendChild(boton);
/* AGREGAR NOMBRE AL INPUT */
const input = document.createElement('input');

function crearTarjeta(){
/* CREAR NUEVA TARJETA DE ELEMENTOS */
/* SE CREA EL DIV */
const div = document.createElement('div');
/* SE AGREGA LA CLASE AL DIV */
div.classList.add('item');
/* SE AGREGA EL DIV DENTRO DEL CONTENEDOR */
document.querySelector('.contenedor').appendChild(div); 

const imagen = document.createElement('img');
imagen.src = "./imagenes/lince.jpg"
document.querySelector('.contenedor .item:last-child').appendChild(imagen);


const titulo = document.createElement('h2');
titulo.innerText ="Lince";
document.querySelector('.contenedor .item:last-child').appendChild(titulo);

/* SE CREA ETIQUETA PARRAFO */
const parrafo = document.createElement('p');
/* SE ADICIONA EL TEXTO DEL PARRAFO */
parrafo.innerText = "Lince es un género de mamíferos carnívoros de la familia Felidae coloquialmente conocidos como linces. Se conocen cuatro especies caracterizadas por su tamaño medio, fuertes patas, largas orejas, cola corta y cuerpo más o menos moteado. Todas las especies habitan exclusivamente en el Hemisferio Norte, en Eurasia y Norteamérica (de donde parecen ser originarios). El llamado lince africano (Caracal caracal), que habita en África y gran parte de Asia Central y Occidental, es en realidad un felino escasamente emparentado que guarda algunas semejanzas externas con los representantes del género Lynx fruto de la convergencia evolutiva, como son su cola, excepcionalmente corta (poco más que un simple muñón), y sus grandes orejas, coronadas por largos penachos de pelo negro en la punta que sirven para incrementar su, ya de por sí, gran audición. También existen unos característicos mechones de pelo largo en las mejillas."
/* SE AGREGA EL PARRAFO DENTRO DEL DIV */
document.querySelector('.contenedor .item:last-child').appendChild(parrafo);
}






