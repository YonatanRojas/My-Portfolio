import { Component, OnInit } from '@angular/core';

import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  faPhone = faPhone;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faLinkedin = faLinkedinIn;
  faMail = faMailBulk;
  fahtml5 = faHtml5;

  projects = [
    {
      name: 'Encriptador De Texto',
      image: '../assets/img/encriptador_texto.png',
      link: 'https://yonatanrojas.github.io/My-portfolio/home'
    },
    {
      name: 'Lista de Pacientes',
      image: 'IMG/lista_pacientes.png',
      link: 'https://github.com/tu-usuario/angular-project'
    },
    {
      name: 'Juego del Ahorcado',
      image: 'IMG/ahorcado.png',
      link: 'https://github.com/tu-usuario/gestion-app'
    }
  ];

  constructor() {
    var container = document.querySelector('.container');
    var titulo = document.createElement('h1');

    titulo.setAttribute("class", "titulo");
    const textoDelTitulo = document.createTextNode("Informacion Sobre Mi");

  }

  ngOnInit(): void {
   
  }
}

