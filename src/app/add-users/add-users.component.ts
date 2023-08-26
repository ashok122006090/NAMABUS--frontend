
import { Component, OnInit } from '@angular/core';
import { Bus,BusType } from '../bus';
import { BusService } from '../bus.service';
import { Router } from '@angular/router';
import { UserEntity, AdminEntity, CustomerEntity, UserRoles } from 'src/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})



export class AddUsersComponent implements OnInit {
  credentials={

    username:'',

    password:''

  };
  admin:UserEntity = new UserEntity();
  customer:UserEntity=new UserEntity();
  

  constructor(private userService: UserService,
    private router: Router) { }
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }
    

    saveUser(){
      this.userService.registerAdmin(this.admin).subscribe( data =>{
        console.log(data);
      },
      error => console.log(error));

      this.userService.registerCustomer(this.admin).subscribe( data =>{
        console.log(data);
      },
      error => console.log(error));
    }



    onSubmit(){
 
    console.log(this.admin);
    console.log(this.customer)
    this.saveUser();
    }
  
    
  
}
