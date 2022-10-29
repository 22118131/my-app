import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/bank.service';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  public accounts:any = [];

  constructor(private _bankService:BankService) { 

  this._bankService.getAccount().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("internal server error");
      }

    )

  }

  ngOnInit(): void {
  }

}
