import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tu-dialog',
  templateUrl: './tu-dialog.component.html',
  styleUrls: ['./tu-dialog.component.css']
})
export class TuDialogComponent implements OnInit {

  
  freshnessList = ["Brand New","Second Han","Refurbished"];
  productForm !: FormGroup;
  constructor(private formBuilder :FormBuilder){}


  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      titulo :['',Validators.required],
      descripcion :['',Validators.required],
      etapa :['',Validators.required],
      inicio :['',Validators.required],
      fin :['',Validators.required]

    }) 
  }
}
