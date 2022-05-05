import { Component, OnInit } from '@angular/core';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent implements OnInit {

  fahtml5 = faHtml5;

  constructor() {

    var container = document.querySelector('.container');
    var titulo = document.createElement('h1');

    titulo.setAttribute("class", "titulo");
    const textoDelTitulo = document.createTextNode("Informacion Sobre Mi");
/*
    while(){
      titulo.appendChild(textoDelTitulo);
      container.appendChild(titulo);
    }*/
   }

  ngOnInit(): void {
  }

}
