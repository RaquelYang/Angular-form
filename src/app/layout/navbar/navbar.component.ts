import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  linkLists = [
    {name: '登入表單', link: 'login'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
