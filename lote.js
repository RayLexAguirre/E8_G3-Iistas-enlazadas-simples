"use strict";

export default class inventory{
    
    constructor(){
        this.inicio = null;
        //this.dato = "";
        this.listSize = 0;
        
    }

    agregar(nuevo){
        //Si la lista esta vacia este marca el primer elemento
        if(this.inicio == null){
            this.inicio = nuevo;
            this.listSize++;
        } else if(this.listSize == 20){
            return "lleno";
        } else {
            /*
            //Si ya tiene datos se crea la variable temporal
            //Se comienza a recorrer la lista desde inicio
            let temp = this.inicio;

            //mientras que el elemento.sigiente no sea "null" no se detendra el ciclo (hasta llegar al final)
            while(temp.siguiente != null){
                //el siguiente del siguiente toma el lugar
                temp = temp.siguiente;
            }

            //aumentamos la lista y asignamos el nuevo en el siguiente del ultimo elemnto
            
            temp.siguiente = nuevo;
            */
           this.listSize++;
           this._agregar(nuevo, this.inicio)
        }
    }

    _agregar(nuevo, ultimo){
        if(ultimo.siguiente == null){
            ultimo.siguiente = nuevo;
        } else {
            this._agregar(nuevo, ultimo.siguiente)
        }
    }
 
    buscar(codigo){ 
        let temp = this.inicio;

        while(temp){
            if(temp.codigo == codigo){
                
                return temp;
            }
            temp = temp.siguiente;
        }

        return null;
    }

    eliminar(codigo) {
        let temp = this.inicio;
        let previous;
        
        //Quitar el primer elemento
        if (codigo == this.inicio.codigo){
            this.inicio = temp.siguiente;
            this.listSize--;
        } else {
            //recorrer hasta encontrar el Codigo
            while (temp){
                previous = temp;

                if(temp.siguiente.codigo == codigo){
                    let eliminado = temp.siguiente;
                    previous.siguiente = previous.siguiente.siguiente;
                    eliminado.siguiente = null;
                    this.listSize--;
                    return;
                }
                
                temp = temp.siguiente;
            } 
        } 
        
        
        this.listSize--;
    }

    insertarLista(nuevo, posicion){
        let temp = this.inicio;
        let previous;
        let position = posicion.get_Position()
        
        if(this.listSize == 0){
            return "posicion inexistente";
        } else if(position == ""){
            return "Sin elemento";
        } else if (position < 0 || position > this.listSize) {
            return "posicion invalida";
        } else if (this.listSize == 20){
            return "lleno";
        } else if (position == 1){
            nuevo.siguiente = temp;
            this.inicio = nuevo;
            this.listSize++;
        } else {
            let i = 0;

            while (i++ < position - 1) {
                previous = temp;
                temp = temp.siguiente;
            }
        
            nuevo.siguiente = temp;
            previous.siguiente = nuevo;
            this.listSize++;
        }
    }

    listar() {
       let temp = this.inicio;
       let dato = "";
       let pos = 0;

       if(this.listSize === 0){
            return "vacio";
       } else {
            while(temp != null){
                pos++
                dato += `<p>Elemento Num.${pos}: Codigo ${temp.codigo} Nombre ${temp.nombre}<p>`
                temp = temp.siguiente;
            }
       }
       
       return dato;
    }    

    listarReverso(){
        let datos='';
        let list = 1;
        let temp=this.inicio;
        
        if(this.listSize === 0){
            return "vacio";
        } else {
            while (temp!=null){
                datos = temp.info(list++) + "\n" + datos
                temp=temp.siguiente;
            }
        }
        return datos;
    }

/*
    listarReverso() {
        let numLimite = this.listSize;

        if(this.listSize === 0){
            return "vacio";
        } else {
            this._crearListaInversa(numLimite);
            return this.dato;
        }
    }    

    _crearListaInversa(numLimite){
        let temp = this.inicio;
        let pos = 0;

        if(numLimite == 0){
            return this.dato;
        } else {
            while(pos++ < numLimite - 1){
                console.log(pos);
                console.log(numLimite - 1);
                console.log(pos < numLimite - 1)
                temp = temp.siguiente;
            }
            this.dato += `<p>Elemento Num.${pos}: Codigo ${temp.codigo} Nombre ${temp.nombre}<p>`
            this._crearListaInversa(numLimite - 1);
        }
    }
*//*
    listarReverso(){
        if (!this.inicio){
            return "vacio";
        } else{
            return this._listarRec(this.inicio, this.listSize);
        }
    }

    _listarRec(temp, tamLista){
        let pos = 0;
        if (temp.siguiente == null){
            return temp.info(tamLista);
        } else {
            console.log(pos);
            console.log(tamLista);
            while(pos++ < tamLista - 1){
                console.log("pos", pos);
                console.log("lista", tamLista - 1);
                console.log(temp);
                temp = temp.siguiente;
                console.log(temp);
            }
            console.log("Termino")
            console.log(temp);
            return temp.info(tamLista) + this._listarRec(temp.siguiente, tamLista - 1);
        } 
    } */   
    

}