![Logo](img/ucol-logo.jpg)

# Ejercicio 8: Inventario con listas enlazadas simples

> Primera Parcial

- FACULTAD DE TELEMATICA
- INGENIERÍA EN SOFTWARE
- “3ºG”
- ESTRUCTURA DE DATOS
- CATEDRATICO: RAMIREZ GONZALEZ HUMBERTO
- AGUIRRE ROMERO RAMÓN ALEJANDRO

## OBJETIVO

Utilizando el mismo ejercicio de Inventario con que se ha venido trabajando se va a implementar un cambio en la estructura de datos para utilizar listas enlazadas simples, se va a considerar un ejemplo similar al primer ejercicio en donde los productos se acomodaban de acuerdo al orden en que llegaran (no es necesario ordenar) y por lo tanto si existe la opción de insertar un nuevo producto en determinada posición.
Recordar que se deben usar por lo menos las clases del Producto, la del Inventario y la de la Aplicación (interacción con el DOM HTML)

> ENTREGA: MARTES 19 DE OCTUBRE DEL 2021

## EXPLICACIÓN DEL PROCESO

Crear una interfaz en HTML para manipular un INVENTARIO de productos, para almacenar la información debemos usar un vector (no usar BDs ni local storage) y limitarlo a máximo 20 productos.
La información de cada producto debe permitir guardar el código, el nombre, cantidad y el costo, además como propiedad calcular el valor de mercancía que sería un valor calculado por la cantidad y el costo.

En la interfaz (una sola pantalla) tener los inputs para cada dato, los botones para las tareas a realizar que se describen a continuación y un div para ir describiendo las actividades que se van realizando y sus resultados.
Botones :
Agregar nuevo producto
Eliminar un producto por código, deberá devolver el producto (si existe) o null
Buscar un producto por código
Recuperar todos los productos //listar
Recuperar todos los productos en orden inverso a como se ingresaron//listar inverso
