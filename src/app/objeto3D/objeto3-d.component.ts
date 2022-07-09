import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objeto3-d',
  templateUrl: './objeto3-d.component.html',
  styleUrls: ['./objeto3-d.component.scss']
})
export class Objeto3DComponent implements OnInit {

  constructor() {
    var caraFrontal = document.querySelector(".cara Frontal");
    var newCaraFrontal = document.querySelector(".newCaraFrontal");
    function despliege(){
      caraFrontal?.addEventListener("click",function(){
        caraFrontal?.classList.add("newCaraFrontal");
        caraFrontal?.classList.remove("cara Frontal");
        console.log("Activado")
      });
      newCaraFrontal?.addEventListener("click",function(){
        newCaraFrontal?.classList.add("cara Frontal");
        newCaraFrontal?.classList.remove("newCaraFrontal");
        console.log("Activado em")
      });
    }
    despliege();
  }

  ngOnInit(): void {
  }

}

