export class Persona {
    private nombre: string;
    edad: number;
    isDeveloper: boolean;

    constructor(nombre: string, edad: number, isDeveloper: boolean) {
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }

    public getNombre() {
        return this.nombre;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }
}