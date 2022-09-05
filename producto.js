"use strict";

export default class Product{
    
    constructor(codigo, nombre, cantidad, costo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.costo = costo;
        this.siguiente = null;
    }

    info(pos){
        return `<p>Elemento Num.${pos}: Codigo ${this.codigo} Nombre ${this.nombre}</p>`
    }

    infoHtml(){
        return `<p>Producto ${this.codigo}: ${(this.nombre).toUpperCase()} (Cantidad: ${this.cantidad} Costo: $${this.costo} Total: $${this.cantidad * this.costo})</p>`;
    }

    get_Codigo(){
        return Number(this.codigo);
    }

}