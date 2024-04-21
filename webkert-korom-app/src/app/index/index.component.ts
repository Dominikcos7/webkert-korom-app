import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  user?: any;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user") as string);
  }

}
