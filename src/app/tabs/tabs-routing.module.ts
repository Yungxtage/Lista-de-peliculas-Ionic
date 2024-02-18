import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      
      // {
      //   path: 'tab1',
      //   loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
      // },
      {
        path: 'genero',
        loadChildren: () => import('../genero/genero.module').then(m => m.GeneroPageModule)
      },
      {
        path: 'actores',
        loadChildren: () => import('../actores/actores.module').then(m => m.ActoresPageModule)
      },
      {
        path: 'usuario',
        loadChildren: () => import('../usuario/usuario.module').then(m => m.UsuarioPageModule)
      },
      {
        path: 'peliculas',
        loadChildren: () => import('../peliculas/peliculas.module').then(m => m.PeliculasPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/peliculas',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/peliculas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
