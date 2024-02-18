import { Component, OnInit } from '@angular/core';
import { Actores } from '../peliculas_info';
import { ACTORES } from '../lista-peliculas';

@Component({
  selector: 'app-actores',
  templateUrl: './actores.page.html',
  styleUrls: ['./actores.page.scss'],
})
export class ActoresPage implements OnInit {

  public misactores = ACTORES;

  constructor() { }

  ngOnInit() {
  }

}
