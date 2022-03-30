import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  productos: any = [];

  constructor(private http: HttpClient) {}

  public getProducts_idx(){

    return this.http.get('https://portfolioapp-32d73-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
  }

  public getProducts(){

    return this.http.get('https://portfolioapp-32d73-default-rtdb.europe-west1.firebasedatabase.app/productos.json')
  }

  public getProduct(id:string){

    return this.http.get(`https://portfolioapp-32d73-default-rtdb.europe-west1.firebasedatabase.app/productos/${id}.json`)

  }
  
}
