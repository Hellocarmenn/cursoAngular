import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  constructor(private formBuilder :FormBuilder,
    private api : ApiService, 
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef : MatDialogRef<TuDialogComponent>){}


  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      titulo :['',Validators.required],
      descripcion :['',Validators.required],
      etapa :['',Validators.required],
      inicio :['',Validators.required],

    }) ;
    console.log(this.editData);
  }
  addProduct(){
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
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
