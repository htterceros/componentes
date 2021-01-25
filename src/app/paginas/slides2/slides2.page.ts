import { Component, OnInit } from '@angular/core';
interface Slider{
  title:string;
  description:string;
  image:string;
}

@Component({
  selector: 'app-slides2',
  templateUrl: './slides2.page.html',
  styleUrls: ['./slides2.page.scss'],
})
export class Slides2Page implements OnInit {
  slider = [
    {
      title:'PocoYo-1',
      description:'Pocoyo y sus Amiguitos Fenomenales!',
      image:"assets/Imagenes/pocoyo1.jpg"
    },
    {
      title:'Ionic es...',
      description:'Is built on...',
      image:"assets/Imagenes/pocoyo2.jpg"
    },
    {
      title:'Ionic es...',
      description:'Is built on...',
      image:"assets/Imagenes/pocoyo3.jpg"
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
