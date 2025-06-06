import { Component } from '@angular/core';
import { Request } from '../../services/request/request';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  datas:any;
  userValueInput:number = 0;
  fromInput:string = "USD";
  toInput:string = "BRL";

  constructor(private request: Request){}
  
  switchValues():void{
    
  }
  conversionRequest():void{
    if(this.userValueInput <= 0){
      alert("Insira um valor válido");
    }
    else{
      if(this.toInput == this.fromInput || this.fromInput == this.toInput){
        alert("As moedas não podem ser iguais");
      }
      else{
        try{
          this.request.conversionByPair(this.toInput, this.fromInput, this.userValueInput).subscribe((data)=>{
            this.datas = data;
            console.log(this.datas);
          })
        }
        catch(err){
          alert("Houve um erro");
          console.log(err);
        }
      }
    }
  }

}
