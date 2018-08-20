import { Component, OnInit,Output,EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {
  
  @Output() newaccountadding = new EventEmitter<{name : string, status : string}>();
  constructor() { }
  
  addAccount(name : string, status : string){
    this.newaccountadding.emit({name : name, status : status});
  }
  ngOnInit() {
  }

}
