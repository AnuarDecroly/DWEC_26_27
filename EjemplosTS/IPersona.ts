import { Size } from "./Size";

export interface IPersona {
    nombre: string;
    edad: number;
    isDeveloper?: boolean;
    size: Size;
}