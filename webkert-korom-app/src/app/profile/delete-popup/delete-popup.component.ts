import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-popup',
  templateUrl: './delete-popup.component.html',
  styleUrls: ['./delete-popup.component.scss']
})
export class DeletePopupComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<DeletePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      id: string;
      service: string;
      date: string | number;
      time: string;
      userId: string;
    },
  ) { }

  ngOnInit(): void {
  }

  yes(){
    this.matDialogRef.close(true);
  }

  no(){
    this.matDialogRef.close(false);
  }
}
