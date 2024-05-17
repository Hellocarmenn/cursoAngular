import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tu-dialog',
  templateUrl: './tu-dialog.component.html',
  styleUrls: ['./tu-dialog.component.css']
})
export class TuDialogComponent {

  constructor(public dialogRef: MatDialogRef<TuDialogComponent>) { }

  // Método para cerrar el diálogo
  closeDialog(): void {
    this.dialogRef.close();
  }
}
