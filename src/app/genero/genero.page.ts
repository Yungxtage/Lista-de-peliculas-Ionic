import { Component, OnInit } from '@angular/core';
import { Genero } from '../peliculas_info';
import { GENEROS } from '../lista-peliculas';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {

  public misgeneros = GENEROS;

  constructor() { }

  ngOnInit() {
  }

}
