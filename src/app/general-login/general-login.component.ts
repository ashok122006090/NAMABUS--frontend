import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-general-login',
  templateUrl: './general-login.component.html',
  styleUrls: ['./general-login.component.css']
})
export class GeneralLoginComponent implements OnInit{

  credentials={

    username:'',

    password:''

  };

 constructor(private loginService:LoginService){}

  ngOnInit(): void {

     

  }

  onSubmit(){

    console.log("form is submitted");

    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null)){

      console.log("we have to submit the form to server");

      this.loginService.generateToken(this.credentials).subscribe(

        (response:any)=>{

          console.log(response.jwtToken);

 

          this.loginService.loginUser(response.jwtToken);

          window.location.href="/login"

 

 

        },

        error=>{

          console.log(error);

        }

      )

 

    }else{

      console.log("Fields are empty !!");

    }

  }


}



