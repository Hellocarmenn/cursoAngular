import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tu-dialog',
  templateUrl: './tu-dialog.component.html',
  styleUrls: ['./tu-dialog.component.css']
})
export class TuDialogComponent implements OnInit {

  
  freshnessList = ["Brand New","Second Han","Refurbished"];
  productForm !: FormGroup;
  constructor(private formBuilder :FormBuilder,private api : ApiService, private dialogRef : MatDialogRef<TuDialogComponent>){}


  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      titulo :['',Validators.required],
      descripcion :['',Validators.required],
      etapa :['',Validators.required],
      inicio :['',Validators.required],

    }) 
  }
  addProduct(){
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("Agregado")
          this.productForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error mientras se agregaba el producto")
        }
      }

      )
    }
  }


}
