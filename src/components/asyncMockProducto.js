// const productos = [
//     {id: 1, nombre:"papel de cocina", img: "https://officejob.com.ar/wp-content/uploads/2015/11/Rollo-de-cocina-x-3-unidades2.jpeg", precio: 100, stock:"30", detalle: "rollo de cocina para uso familiar", categoria: "papel"},
//     {id: 2, nombre:"papel higienico", img: "https://static.dw.com/image/43250575_401.jpg", precio: 200, stock:"36", detalle: "papel higienico para uso familiar", categoria: "papel"},
//     {id: 3, nombre:"aluminio", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiSggNUZMaJirDJorutB0Vh_GlLZ_WyaXGIw&usqp=CAU", precio: 300, stock:"15", detalle: "aluminio para uso comercial", categoria: "aluminio"},
//     {id: 4, nombre:"papel higienico 1", img: "https://static.dw.com/image/43250575_401.jpg", precio: 400, stock:"24", detalle: "papel higienico para uso familiar", categoria: "papel"},
//     {id: 5, nombre:"papel higienico 2", img: "https://static.dw.com/image/43250575_401.jpg", precio: 500, stock:"68", detalle: "papel higienico para uso familiar", categoria: "papel"},
//     {id: 6, nombre:"papel de cocina 1", img: "https://officejob.com.ar/wp-content/uploads/2015/11/Rollo-de-cocina-x-3-unidades2.jpeg", precio: 600, stock:"27", detalle: "rollo de cocina para uso familiar", categoria: "papel"},
//     {id: 7, nombre:"film", img: "https://http2.mlstatic.com/D_NQ_NP_999604-MLA43597406859_092020-O.jpg", precio: 700, stock:"27", detalle: "film de alimentos para uso comercial", categoria: "film"},
//     {id: 8, nombre:"film 1", img: "https://http2.mlstatic.com/D_NQ_NP_999604-MLA43597406859_092020-O.jpg", precio: 800, stock:"40", detalle: "film de alimentos para uso comercial", categoria: "film"},
//     {id: 9, nombre:"film 2", img: "https://http2.mlstatic.com/D_NQ_NP_999604-MLA43597406859_092020-O.jpg", precio: 900, stock:"18", detalle: "film de alimentos para uso comercial", categoria: "film"},
//     {id: 10, nombre:"aluminio 1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiSggNUZMaJirDJorutB0Vh_GlLZ_WyaXGIw&usqp=CAU", precio: 1000, stock:"27", detalle: "aluminio para uso comercial", categoria: "aluminio"}
// ]

// const categorias = [
//     {id:"papel", descripcion:"papel"},
//     {id:"aluminio", descripcion:"aluminio"},
//     {id:"film", descripcion:"film"}
// ]

// export const getCategories = () => {
//     return new Promise (resolve =>{
//         setTimeout(() => {
//             resolve(categorias)
//         })
//     })
// }

// export const CargarProductos = (categoryId) => {
//     return new Promise(resolve => {
//         setTimeout (() => {
//             resolve(categoryId? productos.filter(prod=>prod.categoria === categoryId):productos)
//         }, 900);
//     })
// }

// export const CargarDetalles = (id) => {
//     return new Promise(resolve => {
//         setTimeout (() => { 
//             resolve(productos.find(prod => prod.id === parseInt(id)))
//         }, 900);
//     })
// }