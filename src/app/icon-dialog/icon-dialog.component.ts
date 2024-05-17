import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TuDialogComponent } from '../tu-dialog/tu-dialog.component';

@Component({
  selector: 'app-icon-dialog',
  templateUrl: './icon-dialog.component.html',
  styleUrls: ['./icon-dialog.component.css']
})
export class IconDialogComponent {

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TuDialogComponent, {
      width: '400px', // ajusta el ancho según tus necesidades
      data: {} // puedes pasar datos al diálogo si es necesario
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Diálogo cerrado');
    });
  }
}
