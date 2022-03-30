import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../../services/info.service';
import { InfoPag } from '../../../interfaces/infoPag';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  anio: any = new Date().getFullYear();
  infoPag: InfoPag = {};

  constructor(public infoService: InfoService) {}

  ngOnInit(): void {

    this.infoService.getinfoPag()
    .subscribe((resp: any) => {
      console.log(resp);
      this.infoPag = resp;
    });

  }

}