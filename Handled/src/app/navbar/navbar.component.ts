import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  page: number = 1;
  facebook: boolean = false;
  amazon: boolean = false;
  google: boolean = false;
  pinterest: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  setPage(page:number) {
    this.page = page;
  }

  previous(){
    this.page--;
  }

  next(){
    this.page++;
  }

  toggle(variable) {
    this[variable] = !this[variable];
  }


}
