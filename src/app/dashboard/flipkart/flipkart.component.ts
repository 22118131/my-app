import { Component, OnInit } from '@angular/core';
import { FlipkartService } from 'src/app/flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent implements OnInit {

  public flipkarts: any = [];

  constructor(private _flipkartServices:FlipkartService) { 

    this._flipkartServices.getflipkart().subscribe(
      
      (data:any)=>{
        this.flipkarts = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  ngOnInit(): void {
  }

}
