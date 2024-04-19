import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-comment-popup',
  templateUrl: './comment-popup.component.html',
  styleUrls: ['./comment-popup.component.scss']
})
export class CommentPopupComponent implements OnInit {
  body: FormControl = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<CommentPopupComponent>,
  ) { }

  ngOnInit(): void {
  }

  yes(){
    if(this.body.valid){
      this.dialogRef.close({submit: true, data: this.body.value as string});   
    }
  }

  no(){
    this.dialogRef.close({submit: false});
  }
}
