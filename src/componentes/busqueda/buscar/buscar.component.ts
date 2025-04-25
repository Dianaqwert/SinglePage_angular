import { Component, OnInit, OnDestroy } from '@angular/core';
import { Libro } from '../../../app/libros';
import { LibroService } from '../../../app/servicios/libro.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-buscar',
  imports: [],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent implements OnInit,OnDestroy{
  
  nombreLibro: string = '';
  librosEncontrados: Libro[] = [];
  private sub!: Subscription; //para escuchar los datos

  constructor(
    private libroService: LibroService,
    private route: ActivatedRoute
  ) {}

  //se escuchan los datos  que llegan por medio de subscribe y se guardan los datos en mislibros
  //busca libros según lo que venga en la dirección web."
  ngOnInit() {
    //accede a los datos de la ruta actual por medio de this.route.params
    this.sub = this.route.params
      .subscribe(params => { //cuando cambian los parametros se entregan como un objeto
        this.nombreLibro = params['nombre'] ?? '';
        //llamada al servicio , donde manda a buscar el nombre y regresa a los libros que coincidan con las palabras 
        //para despues guardarlos en libros encontrados que es un array
        this.librosEncontrados = this.libroService.buscarLibros(this.nombreLibro);
      });
  }
  
  //evita errores y fugas de memoria
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  
}
