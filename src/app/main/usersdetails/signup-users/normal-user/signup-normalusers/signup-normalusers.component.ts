import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-normalusers',
  templateUrl: './signup-normalusers.component.html',
  styleUrls: ['./signup-normalusers.component.css']
})
export class SignupNormalusersComponent implements OnInit {
  mouseOver;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  save(form: NgForm) {
   console.log(form.value);
   form.resetForm();
   this.router.navigate(['/users/login/user'])
  }

}
