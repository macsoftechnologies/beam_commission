// confirmation-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  template: `
    <h2 mat-dialog-title>{{data.title}}</h2>
    <mat-dialog-content>{{data.message}}</mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="onNoClick()">No</button>
      <button mat-button color="primary" (click)="onYesClick()">Yes</button>
    </mat-dialog-actions>
  `
})
export class ConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}