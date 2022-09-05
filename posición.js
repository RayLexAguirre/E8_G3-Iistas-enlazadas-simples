"use strict";

export default class Position{
    
    constructor(posicion){
        this.posicion = posicion;
    }

    get_Position(){
        return Number(this.posicion);
    }

}