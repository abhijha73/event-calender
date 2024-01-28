import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss'],
})
export class DeleteConfirmationComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<DeleteConfirmationComponent>) {}
  ngOnInit(): void {}
  confirmDeletion(data: boolean) {
    this.dialogRef.close(data);
  }
}
