import { Service } from '@angular/core';
import { IUser } from '../interfaces/iuser.interface';

@Service()
export class UserService {

    registrarUsuario(user: IUser): void {
        console.log("Usuario registrado") //mandar al back --> proximos capitulos
        console.log(user);
    }

    actualizarUsuario(user: IUser): void {
        console.log("Usuario Actualizado") //mandar al back --> proximos capitulos
        console.log(user);
    }
}
