import { Component, OnInit } from '@angular/core';
interface Componente{
  icono:string;
  nombre:string;
  direccion:string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componente:Componente[]=[
    {
    icono: 'person',
    nombre: 'Action Sheet',
    direccion: '/action-sheet',
    },
    {
      icono: 'pricetag',
      nombre: 'Alerta',
      direccion: '/alert',
    },
    {
      icono: 'planet',
      nombre: 'Fab',
      direccion: '/fab',
    },
    {
      icono: 'calendar-outline',
      nombre: 'DateTime',
      direccion: '/datetime',
    },
    {
      icono: 'albums-outline',
      nombre: 'Botones',
      direccion: '/buttons',
    },
    {
      icono: 'body-outline',
      nombre: 'Avatar',
      direccion: '/avatar',
    },
    {
      icono: 'apps-outline',
      nombre: 'Cards',
      direccion: '/cards',
    },
    {
      icono: 'grid-outline',
      nombre: 'Item Group',
      direccion: '/item-group',
    },
    {
      icono: 'code-working-outline',
      nombre: 'Slides',
      direccion: '/slides',
    },
    {
      icono: 'barcode',
      nombre: 'Slides-2',
      direccion: '/slides2',
    },
    ]

  constructor() { }

  ngOnInit() {
  }

}
