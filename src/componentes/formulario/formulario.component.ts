import { Component, EventEmitter,signal,Output} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  form:FormGroup; //objeto del formulario 
  exito=signal(false); //maneja el estado de si el formulario se envio o no

  //comunicacion con otros componentes , crea un evento llamado libroagregado
  @Output() libroAgregado=new EventEmitter<{nombre:string;email:string;contra:string}>();

  //formulario reactivo 
  constructor(private fb: FormBuilder) {
    //campos del formulario
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      email:  ['', [Validators.required, Validators.email]],
      contra: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  //enviar formulario
  enviarLibro(){
    if(this.form.valid){
      this.libroAgregado.emit(this.form.value); //emite los datos
      this.exito.set(true);                     //muestra el msj de exito
      this.form.reset();                        //limpia el formulario

      setTimeout(()=>this.exito.set(false),2000); //oculra el msj
    }
  }

}
