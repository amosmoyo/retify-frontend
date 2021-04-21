import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usignin',
  templateUrl: './usignin.component.html',
  styleUrls: ['./usignin.component.css']
})
export class UsigninComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  save(form: NgForm) {
    console.log();
    form.resetForm();
    this.router.navigate(['/users/dashboard'])
  }

}
