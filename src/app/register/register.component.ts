import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  tra = "hdkjb";

  constructor(private bd:FormsModule) { }

  ngOnInit(): void {
  }
  onsubmit(){
    console.log('sfvdf')

  }
}
