import { Component, OnInit,Output, EventEmitter, Input } from '@angular/core';
import {LoggingService} from '../logging.services';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() id : number;
  @Input() account : {name :string, status : string};
  @Output() statusofacc = new EventEmitter<{id:number, status:string}>();
  constructor(private loggingservices : LoggingService) { }
  
  setAccountTo(changedStatus : string){
    console.log(changedStatus);
    this.statusofacc.emit({id : this.id, status : changedStatus});
    this.loggingservices.logStatusChange(changedStatus);
  }
  ngOnInit() {
  }

}
