import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../shared/model/Comment';
import { CommentService } from 'src/app/shared/services/comment.service';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../shared/services/user.service';
import { CommentPopupComponent } from '../comment-popup/comment-popup.component';

@Component({
  selector: 'app-own-comments',
  templateUrl: './own-comments.component.html',
  styleUrls: ['./own-comments.component.scss']
})
export class OwnCommentsComponent implements OnInit {
  @Input() uid?: string;
  username?: string;
  userComments: Comment[] = [];

  constructor(
    private commentService: CommentService,
    private dialog: MatDialog,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUserName();
    this.getUserComments();
  }

  getUserName() {
    this.userService.getByUid(this.uid as string).subscribe((user: any) => {
      this.username = user.get('fullname').firstname + " " + user.get('fullname').lastname;
    });
  }

  addComment() {
    this.dialog.open(CommentPopupComponent).afterClosed().subscribe((resp: any) => {
      if (resp.submit) {
        console.log(resp.data);
        const comment: Comment = {
          userId: this.uid as string,
          body: resp.data,
          userName: this.username as string,
          timestamp: Date.now(),
          docId: this.commentService.getDocId()
        }
        console.log(comment);
        this.commentService.add(comment);
        this.refreshUserComments();
      }
    });
  }

  getUserComments() {
    this.commentService.getUserComments(this.uid as string).then(qss => {
      qss.docs.forEach(dss => {
        const comment: Comment = {
          userId: dss.data()['userId'],
          body: dss.data()['body'],
          userName: dss.data()['userName'],
          timestamp: dss.data()['timestamp'],
          docId: dss.data()['docId']
        };
        this.userComments.push(comment);
      });
    });
  }

  refreshUserComments() {
    this.userComments = [];
    this.getUserComments();
  }

  deleteUserComment(docId: string) {
    this.commentService.delete(docId).then(_ => this.refreshUserComments()).catch(error => console.error(error));
  }
}
