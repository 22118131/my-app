import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  public mail: any = [];

  constructor(private _mailServices:MailService) {

    this._mailServices.getmail().subscribe(
      
      (data:any)=>{
        this.mail = data;
      },
      (err:any)=>{
        alert("internal server error");
      }
    )
  }

  ngOnInit(): void {
  }

}
