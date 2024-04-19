import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscussionRoutingModule } from './discussion-routing.module';
import { DiscussionComponent } from './discussion.component';
import { CommentComponent } from './comment/comment.component';
import { CommentPopupComponent } from './comment-popup/comment-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MyDatePipe } from '../shared/pipes/my-date.pipe';
import { MatCardModule } from '@angular/material/card';
import { OwnCommentsComponent } from './own-comments/own-comments.component';
import { OtherCommentsComponent } from './other-comments/other-comments.component';


@NgModule({
  declarations: [
    DiscussionComponent,
    CommentComponent,
    CommentPopupComponent,
    OwnCommentsComponent,
    OtherCommentsComponent
  ],
  imports: [
    CommonModule,
    DiscussionRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MyDatePipe,
    MatCardModule
  ]
})
export class DiscussionModule { }
