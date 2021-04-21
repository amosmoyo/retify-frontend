import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-csignin',
  templateUrl: './csignin.component.html',
  styleUrls: ['./csignin.component.css']
})
export class CsigninComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  save(form: NgForm) {
    console.log(form.value);
    form.resetForm();
    this.router.navigate(['/users/dashboard'])
  }

}
