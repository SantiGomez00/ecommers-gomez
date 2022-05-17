 # Mi primer projecto en REACT.JS "E-commer" 

Este projecto fue realizado para el curso de REACT.JS. Es un "e-commer" con el fin de simular una tienda "real", por la cual puedes navegar entre categorias,
sumar productos al carrito y realizar una compra pero sin antes estar registrado/logueado, simula hasta el punto de generar la compra. 

**Gómez Santiago**

 # Acceder al Codigo (.ZIP)

Para adquirir y hacer uso del mismo deberas:

1. Ir a code => Download ZIP
2. Descomprimir el archivo en una carpeta
3. Ejecutar en terminal:
4. npm install
5. npm start

# Lenguajes

- **HTML
- **CSS
- **JavaScript
- **React.JS
- 
# Utilidades

1. *react-router-dom*
2. *react-firebase*


# Funciones en *CartContext

- *setearLogin* => Asegura el correcto ingreso del usuario y le permite generar la compra.
- *chequearLogin* => Chequea si a la hora de generar la compra, hay un usuario logueado.
- *chequearDatos* => Chequea los datos del usuario logueado.
- *sumarItem* => Te permite agregar un producto que ya esta en el carrito.
- *checkStock* => Chequea cuanto stock queda del producto, descontando lo que tengas en el carrito.
- *addItem* => Te permite agregar un producto nuevo al carrito.
- *eliminarItem* => Elimina el producto del carrito.
- *cantidadCarrito* => Muestra la cantidad de productos que hay en el carrito.
- *consultarCarrito* => Da la informacion de si un producto esta o no en el carrito.
- *vaciarCarrito* => Elimina todos los productos del carrito.
- *precioFinal* => Da el valor final de los productos del carrito.

# Firebase/Firestore

## Colecciones ya creadas

### **categorias**
-  *categorias : string

### **productos**

- categoria: string,
- detalle: string,
- img: string,
- nombre: string,
- precio: number,
- stock: number

## colecciones creadas por el usuario

### **orders**

- *comprador:{*
  - *email: string,*
  - *nombre: string,*
  - *telefono: string,*
- *},*
- *date: date,*
- *item:{*
  - *id: string,*
  - *img: string,*
  - *nombre: string,*
  - *precio: number,*
  - *quantity: number,*
- *},*
- *total:number*

### **users**

- mail: string,
- nombre: string,
- password: string,
- phone: string
  
