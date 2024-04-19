import { Component, Input, OnInit, Output } from '@angular/core';
import { Comment } from '../../shared/model/Comment';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment?: Comment;
  @Output() onDelete: EventEmitter<string> = new EventEmitter()
  userId = JSON.parse(localStorage.getItem('user') as string).uid;

  constructor() { }

  ngOnInit(): void {
  }

  delete(){
    this.onDelete.emit(this.comment?.docId);
  }
}
