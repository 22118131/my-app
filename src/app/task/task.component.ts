import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  public image: string = " ";
  public result: any = " ";
  

  constructor() { }

  ngOnInit(): void {
  }

  abc(){
    this.image=this.image
  }

}
