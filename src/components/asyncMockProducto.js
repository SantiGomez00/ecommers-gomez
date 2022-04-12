const productos = [
    {id: 1, nombre:"papel de cocina", img: "https://officejob.com.ar/wp-content/uploads/2015/11/Rollo-de-cocina-x-3-unidades2.jpeg", precio: 280, stock:"30", detalle: "rollo de cocina para uso familiar"},
    {id: 2, nombre:"papel higienico", img: "https://static.dw.com/image/43250575_401.jpg", precio: 180, stock:"36", detalle: "papel higienico para uso familiar"},
    {id: 3, nombre:"aluminio", img: "https://static2.diariosur.es/www/pre2017/multimedia/noticias/201506/12/media/cortads/papel-aluminio--235x235.jpg", precio: 790, stock:"15", detalle: "aluminio para uso comercial"},
    {id: 4, nombre:"film", img: "https://http2.mlstatic.com/D_NQ_NP_999604-MLA43597406859_092020-O.jpg", precio: 1075, stock:"27", detalle: "film de alimentos para uso comercial"}
]

export const CargarProductos = () => {
    return new Promise(resolve => {
        setTimeout (() => {
            resolve(productos)
        }, 2000);
    })
}

export const CargarDetalles = (id) => {
    return new Promise(resolve => {
        setTimeout (() => { 
            resolve(productos.find(prod => prod.id === id))
        }, 2000);
    })
}