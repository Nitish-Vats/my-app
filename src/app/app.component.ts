import { Component } from '@angular/core';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  users:User[];
  user:User|any;
  isEdit:boolean;
  constructor(){
    this.users=[{userId:101,name:"Nitish",city:"Noida"},
      {userId:102,name:"Gaurav",city:"Delhi"},
      {userId:103,name:"Sagar",city:"Mumbai"}
    ];
    this.user=new User();
    this.isEdit=false;
  }
  AddUser(){
    if(Object.keys(this.user).length==0){
      alert("UserId ,Name and City can not be empty");
    }else{
      this.users.push(this.user);
      alert(`${this.user.name} added successfully`);
      this.user=new User();
    }
  }
  UpdateUser() {
         for (let i = 0; i < this.users.length; i++) 
          {       
            const element = this.users[i];       
            if (element.userId == this.user.userId) 
              {         
                this.users[i].name = this.user.name;         
                this.users[i].city = this.user.city;         //reset user object         
                this.user = new User();         
                this.isEdit = false;         
                break;       
              }     
          }   
        }   
    EditUser(id: number) 
    {     
      const existingUser = this.users.find(u => u.userId == id);     
      if (existingUser != undefined) 
      {       
        this.user = Object.create(existingUser);       
        this.isEdit = true;     
      }   
    }   
    DeleteUser(id: number, name: string) 
    {     
      if (confirm(`Do you want to delete user "${name}"?`)) 
      {       
        let index = this.users.findIndex(x => x.userId === id);       
        this.users.splice(index, 1);       
        alert(`The user "${name}" has been deleted successfully.`);     
      }   
    } 
}
