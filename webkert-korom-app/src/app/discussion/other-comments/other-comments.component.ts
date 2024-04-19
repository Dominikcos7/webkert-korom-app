import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/shared/model/Comment';
import { CommentService } from 'src/app/shared/services/comment.service';

@Component({
  selector: 'app-other-comments',
  templateUrl: './other-comments.component.html',
  styleUrls: ['./other-comments.component.scss']
})
export class OtherCommentsComponent implements OnInit {
  @Input() uid?: string;
  otherComments: Comment[] = [];

  constructor(
    private commentService: CommentService,
  ) { }

  ngOnInit(): void {
    this.getOtherComments();
  }

  getOtherComments(){
    this.commentService.getOtherComments(this.uid as string).then(qss => {
      qss.docs.forEach(dss => {
        const comment: Comment = {
          userId: dss.data()['userId'],
          body: dss.data()['body'],
          userName: dss.data()['userName'],
          timestamp: dss.data()['timestamp'],
          docId: dss.data()['docId']
        };
        this.otherComments.push(comment);
      });
    });
  }

}
