import { Injectable } from '@angular/core';
import { Libro } from '../libros';
import { LIBROS } from '../libro';

//servicio que permite recuperar la info de la interface de libros

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  //constante -> array
  private libros:Libro[]=LIBROS;
  constructor() { }

  //METODOS
  getLibros():Libro[]{
    return this.libros;
  }

  buscarLibros(nombre:string):Libro[]{
    const nombreMinus=nombre.toLocaleLowerCase();
    return this.libros.filter(libro=> libro.title.toLowerCase().includes(nombreMinus));
  }
}
