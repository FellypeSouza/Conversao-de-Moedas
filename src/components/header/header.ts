import { Component } from '@angular/core';
import { Request } from '../../services/request/request';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  datas:any;
  constructor(private request: Request){}

  teste():void{
    this.request.conversionByPair().subscribe((data)=>{
      this.datas = data;
      console.log(this.datas)
    })
  }

}
