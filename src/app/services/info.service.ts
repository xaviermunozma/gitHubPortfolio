import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { InfoPag } from '../interfaces/infoPag';

@Injectable({
  providedIn: 'root'
})

export class InfoService {

  infopag: InfoPag = {};

 

  constructor(private http: HttpClient) {
    
    this.getinfoPag();
    this.getinfoEquipo();

  };

  public getinfoPag(){

    return this.http.get('assets/data/infoPag.json')

  }

  public getinfoEquipo(){

    return this.http.get('https://portfolioapp-32d73-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')

  }

}



 