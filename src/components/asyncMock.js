const productos = [
    {id: 1, nombre:"papel de cocina", img: "https://officejob.com.ar/wp-content/uploads/2015/11/Rollo-de-cocina-x-3-unidades2.jpeg", precio: 280, stock:"Cargar"},
    {id: 2, nombre:"papel higienico", img: "https://static.dw.com/image/43250575_401.jpg", precio: 180, stock:"Cargar"},
    {id: 3, nombre:"aluminio", img: "https://static2.diariosur.es/www/pre2017/multimedia/noticias/201506/12/media/cortadas/papel-aluminio--235x235.jpg", precio: 790, stock:"Cargar"},
    {id: 4, nombre:"film", img: "https://http2.mlstatic.com/D_NQ_NP_999604-MLA43597406859_092020-O.jpg", precio: 1075, stock:"Cargar"}
]

export const CargarProductos = () => {
    return new Promise(resolve => {
        setTimeout (() => {
            resolve(productos)
        }, 2000);
    })
}

