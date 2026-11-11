import { Component, inject, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IUser } from '../../interfaces/iuser.interface';
import { UserService } from '../../services/user-service';

@Component({
    imports: [ReactiveFormsModule],
    selector: 'app-formularioreactive-form-model',
    styleUrl: './formularioreactive-form-model.css',
    templateUrl: './formularioreactive-form-model.html',
})
export class FormularioreactiveFormModel {

    modelForm: FormGroup;
    private userService;



    constructor() {
        this.userService = inject(UserService);
        this.modelForm = new FormGroup({
            id: new FormControl(-1),
            nombre: new FormControl(null, [Validators.required, Validators.minLength(3)]),
            email: new FormControl(null, [Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
            edad: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
            dni: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/)]),
            password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
            repitePassword: new FormControl(null, [Validators.required, Validators.minLength(5)]),
        }, [this.passValidator]);
    }


    ngOnInit(): void {

        //GetUserbyId a nuestro servicio que conecta con el BACKEND
        let user: IUser = {
            id: 3,
            nombre: 'Anuar',
            email: 'akhan@decroly.com',
            edad: 43,
            dni: '72358245T',
            password: '123456',
            repitePassword: '123456'
        }

        //Opcion 1
        //this.modelForm.setValue(user);

        //Opcion 2: Puedo meter mis propios validadores al cargar y/o descativas otros que tenia, o no cargar controles
        this.modelForm = new FormGroup({
            id: new FormControl(user.id,),
            nombre: new FormControl(user.nombre, [Validators.required, Validators.minLength(3)]),
            email: new FormControl(user.email, [Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
            edad: new FormControl(user.edad, [Validators.required, Validators.min(0), Validators.max(120)]),
            dni: new FormControl(user.dni, [Validators.required, Validators.pattern(/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/)]),
            password: new FormControl(user.password, [Validators.required, Validators.minLength(5)]),
            repitePassword: new FormControl(user.repitePassword, [Validators.required, Validators.minLength(5)]),
        }, [this.passValidator]);

    }

    getDataForm(): void {
        let user = this.modelForm.value as IUser;
        if (user.id == -1) {
            this.userService.registrarUsuario(user);
        }
        else {
            this.userService.actualizarUsuario(user);
        }

        //Resetear el formulario y poner el id a -1 otra vez
        this.modelForm.reset();
        this.modelForm.get('id')?.setValue(-1);
    }

    checkControl(formControlName: string, validator: string): boolean | undefined {
        return this.modelForm.get(formControlName)?.hasError(validator) &&
            this.modelForm.get(formControlName)?.touched;
    }

    passValidator(formValue: AbstractControl): any {
        const pass1 = formValue.get('password')?.value;
        const pass2 = formValue.get('repitePassword')?.value;

        return (pass1 != pass2) ? { 'passwordnotmatches': true } : null;
    }
}
