"use strict";

import Product from "./producto.js";
import inventory from "./lote.js";
import Position from "./posición.js";

class App{
    constructor(){
        this.lote = new inventory();

        let btnAdd = document.getElementById('btnAdd');
        btnAdd.addEventListener('click', this.addProduct);

        let btnSearch = document.getElementById('btnSearch');
        btnSearch.addEventListener('click', this.searchProduct);

        let btnDelete = document.getElementById('btnDelete');
        btnDelete.addEventListener('click', this.deleteProduct);

        let btnList = document.getElementById('btnList');
        btnList.addEventListener('click', this.listProduct);

        let btnListReverse = document.getElementById('btnListReverse');
        btnListReverse.addEventListener('click', this.reverseListProduct);

        let btnPosition = document.getElementById('btnPosition');
        btnPosition.addEventListener('click', this.insertSpesificPosition);

    }

    addProduct = () => {
        let codigo = document.getElementById('txtCode').value;
        let nombre = document.getElementById('txtName').value;
        let cantidad = document.getElementById('txtQuantity').value;
        let costo = document.getElementById('txtCost').value;

        let producto = new Product(codigo, nombre,cantidad, costo);

        let funcion = this.lote.agregar(producto);
        
        if(funcion === "lleno") {
            document.getElementById('detalles').innerHTML += `
            <p>Se agotaron los espacios por lo que el producto ${producto.codigo} no se agrego</p>

        `;} else {
            document.getElementById('detalles').innerHTML += `
            <p>Se agrego el producto ${producto.codigo} correctamente</p>

        `;
        }
        
    }

    searchProduct = () => {
        let codigo = document.getElementById('txtCode').value;
        let buscado = this.lote.buscar(codigo);
        console.log(buscado);
        let detalles = document.getElementById('detalles');
        if (buscado == null)
        detalles.innerHTML += '<p>No se encontro</p>';
        else
        detalles.innerHTML += buscado.infoHtml();
    }

    deleteProduct = () => {
        let codigo = document.getElementById('txtCode').value;
        let buscado = this.lote.buscar(codigo);
        let detalles = document.getElementById('detalles');
        if (buscado == null){
            detalles.innerHTML += '<p>No se encontro</p>';
        } else { 
            this.lote.eliminar(codigo); 
            detalles.innerHTML +=`<p>El producto ${codigo} ha sido eliminado</p>`;
             
        }
        
    }

    listProduct = () => {
        let lista = this.lote.listar();

        if(lista === "vacio"){
            detalles.innerHTML += '<p>No se encontro ningun elemento</p>';
        } else {
            detalles.innerHTML += `<p>${lista}</p>`;
        }
    }

    reverseListProduct = () => {
        let listaInversa = this.lote.listarReverso();
        if(listaInversa === "vacio"){
            detalles.innerHTML += '<p>No se encontro ningun elemento</p>';
        } else {
            detalles.innerHTML += `<p>${listaInversa}</p>`;
        };
    }

    insertSpesificPosition = () => {
        let codigo = document.getElementById('txtCode').value;
        let nombre = document.getElementById('txtName').value;
        let cantidad = document.getElementById('txtQuantity').value;
        let costo = document.getElementById('txtCost').value;
        let posicion = document.getElementById('txtPosition').value;

        let producto = new Product(codigo, nombre,cantidad, costo);
        let position = new Position(posicion);
    
        let prueba = (this.lote.insertarLista(producto, position));
        
        if(prueba === "posicion inexistente"){
            document.getElementById('detalles').innerHTML += `
            <p>No se encontro ninguna elemento en la lista</p>
            `;
        } else if(prueba === "Sin elemento"){
            document.getElementById('detalles').innerHTML += `
            <p>No se encontro ninguna elemento en la casilla</p>
            `;
        } else if(prueba === "lleno") {
            document.getElementById('detalles').innerHTML += `
            <p>Se agotaron los espacios por lo que el producto ${producto.codigo} no se agrego</p>
            `;
        } else if(prueba === "posicion invalida"){
            document.getElementById('detalles').innerHTML += `
            <p>La posición ${position.posicion} sobrepasa la cantidad de productos en el inventario</p>
            `;
        } else {
            document.getElementById('detalles').innerHTML += `
            <p>Se agrego el producto ${producto.codigo} correctamente</p>
        `;
        }
    }

}
new App();