document.addEventListener("DOMContentLoaded", () => {
    // a) Mostrar el Número de Artículos que existen en el Documento.
    const numArticulos = document.querySelectorAll("h3").length;
    console.log(`Número de Artículos: ${numArticulos}`);
  
    // b) Identificar líneas divisorias dentro del Documento y número de líneas.
    const numLineasDivisorias = document.querySelectorAll("hr").length;
    console.log(`Número de líneas divisorias: ${numLineasDivisorias}`);
  
    // c) Identificar los elementos de lista dentro del Documento y número de elementos en total.
    const numElementosLista = document.querySelectorAll("li").length;
    console.log(`Número de elementos de lista: ${numElementosLista}`);
  
    // d) Identificar elementos de la “Lista Elementos”, número de elementos y código del enlace dentro de dicha lista.
    const listaElementos = document.querySelector("#elemen");
    const numElementosListaElementos = listaElementos.querySelectorAll("li").length;
    const enlacesListaElementos = listaElementos.querySelectorAll("a");
    console.log(`Número de elementos en "Lista Elementos": ${numElementosListaElementos}`);
    enlacesListaElementos.forEach((enlace, index) => {
      console.log(`Enlace ${index + 1} en "Lista Elementos": ${enlace.outerHTML}`);
    });
  
    // e) Identificar elementos de la lista “Menú”, identificar enlaces y número de enlaces en dicha lista.
    const menu = document.querySelector("#menu");
    const numElementosMenu = menu.querySelectorAll("li").length;
    const enlacesMenu = menu.querySelectorAll("a");
    console.log(`Número de elementos en "Menú": ${numElementosMenu}`);
    console.log(`Número de enlaces en "Menú": ${enlacesMenu.length}`);
  
    // f) Identificar imágenes dentro del Documento y número de imágenes en total.
    const numImagenes = document.querySelectorAll("img").length;
    console.log(`Número de imágenes en el documento: ${numImagenes}`);
  
    // g) Identificar imágenes del bloque referente al “Artículo 2”, identificar primera imagen y número total de imágenes dentro de este bloque.
    const imagenesArticulo2 = document.querySelectorAll(".imgAr2 img");
    const primeraImagenArticulo2 = imagenesArticulo2[0];
    console.log(`Primera imagen en "Artículo 2": ${primeraImagenArticulo2.outerHTML}`);
    console.log(`Número de imágenes en "Artículo 2": ${imagenesArticulo2.length}`);
  
    // h) Identificar imágenes del bloque referente al “Artículo 3”, número de imágenes y código referente a la segunda y cuarta imagen del presente bloque.
    const imagenesArticulo3 = document.querySelectorAll("#imgAr3 img");
    console.log(`Número de imágenes en "Artículo 3": ${imagenesArticulo3.length}`);
    if (imagenesArticulo3.length >= 2) {
      console.log(`Segunda imagen en "Artículo 3": ${imagenesArticulo3[1].outerHTML}`);
    }
    if (imagenesArticulo3.length >= 4) {
      console.log(`Cuarta imagen en "Artículo 3": ${imagenesArticulo3[3].outerHTML}`);
    }
  
    // i) Identificar enlaces del Documento y número de enlaces en total.
    const numEnlaces = document.querySelectorAll("a").length;
    console.log(`Número de enlaces en el documento: ${numEnlaces}`);
  
    // j) Identificar enlaces distribuidos dentro del párrafo referente al “Artículo 1” y número de enlaces.
    const enlacesArticulo1 = document.querySelectorAll("#text1 a");
    console.log(`Número de enlaces en "Artículo 1": ${enlacesArticulo1.length}`);
  });