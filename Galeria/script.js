const IMAGENES=[
    'imagen1.avif', 'imagen2.png','imagen3.png'];
    let indiceActual=0;
    function cambiarImagen(direccion){
        indiceActual +=direccion;
        if (indiceActual<0){
            indiceActual=IMAGENES.length-1;

        }else if (indiceActual>=IMAGENES.length){
            indiceActual=0;
        }
        document.getElementById('imagen1').src =IMAGENES[indiceActual];
        document.getElementById('contador').textContent =indiceActual;
    }
    document.getElementById('total').textContent=IMAGENES.length;