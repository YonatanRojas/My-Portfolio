import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent implements OnInit {

  constructor() {

    var container = document.querySelector('.container');
    var titulo = document.createElement('h1');

    titulo.setAttribute("class", "titulo");
    const textoDelTitulo = document.createTextNode("Informacion Sobre Mi");

    while(container != null){
      titulo.appendChild(textoDelTitulo);
      container.appendChild(titulo);
    }
   }

  ngOnInit(): void {
  }

}
