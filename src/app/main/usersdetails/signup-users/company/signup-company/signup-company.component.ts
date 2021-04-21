import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-company',
  templateUrl: './signup-company.component.html',
  styleUrls: ['./signup-company.component.css']
})
export class SignupCompanyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  save(form: NgForm) {
    console.log(form.value);
    form.resetForm();
    this.router.navigate(['/users/login/organization'])
   }

}
