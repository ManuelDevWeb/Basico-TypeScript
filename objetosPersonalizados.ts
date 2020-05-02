//Creando un tipo de dato
type Heroe={
    nombre:string, 
    edad:number, 
    poderes:any[], 
    getNombre:()=>string
};

let flashHeroe:Heroe={
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["Puede correr muy rápido", "Viajar en el tiempo",55],
    getNombre(){
        return this.nombre;
    }
};

let supermanHeroe:Heroe={
    nombre:"Clark Kent",
    edad: 500,
    poderes: ["Puede volar","Fuerza",75],
    getNombre(){
        return this.nombre;
    }
}