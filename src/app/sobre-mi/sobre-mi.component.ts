import { Component, OnInit } from '@angular/core';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faMessage, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faMailchimp } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss']
})
export class SobreMiComponent implements OnInit {
  faPhone = faPhone;
  faInstagram = faInstagram;
  faGithub = faGithub;
  faLinkedin = faLinkedinIn;
  faMail = faMailBulk;
  fahtml5 = faHtml5;

  constructor() {

    var container = document.querySelector('.container');
    var titulo = document.createElement('h1');

    titulo.setAttribute("class", "titulo");
    const textoDelTitulo = document.createTextNode("Informacion Sobre Mi");

   }

  ngOnInit(): void {
  }

}
