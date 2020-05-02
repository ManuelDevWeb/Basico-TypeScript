class Avenger{
    nombre:string;
    equipo:string;
    nombreReal:string;
    puedePelear:boolean;
    peleasGanadas:number;

    constructor(nombre:string, equipo:string, nombreReal:string, puedePelear:boolean, peleasGanadas:number){
        this.nombre=nombre;;
        this.equipo=equipo;
        this.nombreReal=nombreReal;
        this.puedePelear=puedePelear;
        this.peleasGanadas=peleasGanadas;
    }
}

let antman:Avenger=new Avenger("Antman","Iron Man","Scoot",true,2);

console.log(antman);