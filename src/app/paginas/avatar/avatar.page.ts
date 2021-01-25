import { Component, OnInit } from '@angular/core';
interface avatar{
  icono:string;
  nombre:string;
}
@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {
  avatar:avatar[]=[
    {
      icono:"assets/Imagenes/pocoyo4.jpg",
      nombre:"Pocoyo"
    },
    {
      icono:"assets/Imagenes/pocoyo2.jpg",
      nombre:"Poco-Family"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
