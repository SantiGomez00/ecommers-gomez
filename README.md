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
- phone: number
  

# Función

Esta app inicia por el index *./* en el cual se muestran los productos del *ItemListContainer*, en el se encuentran todos los productos desordenados, pudes ordenarlos
por clases que estan situadas en el *NavBar*. Seleccionando una de ellas, la base de datos *FireBase* filtra segun la categoria cada producto.

Cuando ya tienes un producto y quieres saber mas de el, puedes tocar el boton de "info", el cual ejecuta *ItemDetailContainer* donde se vera la informacion de dicho producto, la informacion se vera gracias a *itemDetail* (nombre, foto, descripcion, precio, stock). En este tambien se encuentra el *Counter* que te permite seleccionar la cantidad del producto que deseas adquirir y por ultimo "añadir al Carrito", que envia el producto con la cantidad seleccionada a *Cart*.

Una vez que hay uno o mas productos el *Cart* se hace visible en el *NavBar* siendo posible el ingreso. En el *cart* encontraras los productos que seleccionaste previamente con la cantidad y el precio final, podras eliminar los productos de forma individual como tambien podras vaciar el carrito con el boton "vaciar carrito", por ultimo se encuentra el boton comprar que te permite generar la orden de compra pero no sin antes estar logueado en la app, que se hace mediante el *login* ubicado en el *NavBar*.

En el *login* podas ingresar con un usuario ya creado o mismo registrarte con el boton "registrarse" el cual te pedira una serie de datos para crear tu usuario. Una vez logueado podras finalmente generar la orden de compra de forma correcta. Muchas gracias.

# Asi se vera
![ezgif com-gif-maker](https://user-images.githubusercontent.com/98488124/168925163-2d4e1441-1370-4a5b-aaaf-b85832c65f0f.gif)
