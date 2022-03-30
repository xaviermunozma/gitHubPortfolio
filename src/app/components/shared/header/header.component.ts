import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(  public infoService: InfoService,
                private router: Router) { }

  ngOnInit(): void {
  }

  buscarTexto(texto: string){

    if(texto.length > 2){

      this.router.navigate(['search', texto]);

    } else{

      alert('La cantidad mínima de carácteres para realizar la búsqueda es de tres carácteres');

    }
  }

  cleanBusqueda(){
    this.router.navigate(['home']);
  }

}
