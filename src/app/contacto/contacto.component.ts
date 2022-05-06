import { Component, OnInit } from '@angular/core';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  faPhone = faPhone;
  icon = icon;
  constructor() { }

  ngOnInit(): void {
  }

}
