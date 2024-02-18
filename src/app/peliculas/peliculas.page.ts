import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../peliculas_info';
import { PELICULAS } from '../lista-peliculas';


@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.page.html',
  styleUrls: ['./peliculas.page.scss'],
})
export class PeliculasPage implements OnInit {

  public mispeliculas = PELICULAS;

  constructor() { }

  ngOnInit() {
  }

}
