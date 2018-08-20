import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
]

newAccountAdded(incoming : {name : string, status: string}){
  const newaccount ={name : incoming.name, status : incoming.status};
  this.accounts.push(newaccount);
  
}
statusChanged(incoming : {id:number, newStatus : string}){
  console.log(incoming.id , incoming.newStatus);
  console.log('current status of clicked account ('+incoming.id+')', this.accounts[incoming.id].status);
  this.accounts[incoming.id].status=incoming.newStatus;
}



}
