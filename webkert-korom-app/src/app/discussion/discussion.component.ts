import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.scss']
})
export class DiscussionComponent implements OnInit {
  uid?: string;

  constructor(
  ) { }

  ngOnInit(): void {
    this.uid = JSON.parse(localStorage.getItem("user") as string).uid;
  }
}
