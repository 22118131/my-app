import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent implements OnInit {

 public length: number = 0;
 public bradth: number = 0;
 public result: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
  area(){
    this.result = this.length * this.bradth;
  }
  peremeter(){
    this.result = 2*this.length + 2*this.bradth
  }


}
