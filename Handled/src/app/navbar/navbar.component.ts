import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  page: number = 1;

  constructor() { }

  ngOnInit() {
  }

  setPage(page:number) {
    this.page = page;
  }


}
