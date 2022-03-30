import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  textoBusq: any = '';

  productos: any = [];

  productos_encontrados: any = [];

  loading = true;

  constructor(private route: ActivatedRoute,
              public productsService: ProductsService ) { }

  ngOnInit(): void {

    this.textoBusq = this.route.snapshot.paramMap.get('textobusq')

    this.textoBusq = this.textoBusq.toLowerCase();

    this.productsService.getProducts_idx()
        .subscribe((resp:any) => {
        this.productos = resp;

        this.productos.forEach((prod: any) => {

          let categoria = prod.categoria.toLowerCase();
          
          if(categoria.indexOf(this.textoBusq) >= 0){

            this.productos_encontrados.push(prod)

            console.log(this.productos_encontrados)

          }
        });

        this.loading = false;

    });
  }  
}
