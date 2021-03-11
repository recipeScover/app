import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder, Validators } from '@angular/forms'
import { Recipe } from '../services/user';
import { AuthService } from '../services/auth-service.service';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ServiceRscService } from '../../model/service-rsc.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rsc-dialog-add-recipe',
  templateUrl: './dialog-add-recipe.component.html',
  styleUrls: ['./dialog-add-recipe.component.scss']
})
export class DialogAddRecipeComponent implements OnInit {
  
  recepiForm: FormGroup;
  imgBase64Path= "";
  constructor(private fb:FormBuilder, public fire : AuthService, public serviceCat : ServiceRscService) {
    

    this.recepiForm = this.fb.group({
      category: [null, Validators.required],
      name:  [null, Validators.required],
      description:  [null, Validators.required],
      allIngredients: this.fb.array([], Validators.minLength(1)),
      photoName: '',
      base64: '',
      user:'',
    });
  }
  
  get allIngredients() : FormArray {
    return this.recepiForm.get("allIngredients") as FormArray
  }
 
  newingredient(): FormGroup {
    return this.fb.group({
      ingredient:  [null, Validators.required],
      quantity:  [null, Validators.required],
    })
  }
 
  addallIngredients() {
    this.allIngredients.push(this.newingredient());
  }
 
  removeingredient(i:number) {
    this.allIngredients.removeAt(i);
  }
 
  fine() {
    this.addBase64();
    this.fire.createRecipe(this.recepiForm.value);
    console.log(this.recepiForm.value);
    this.fire.closeDialog();
  }

 categories:[any]=[''];

  ngOnInit() {
    this.addallIngredients();

    //this.fire.getPolicies().subscribe(el => this.ricette=el.docs);
    this.serviceCat.getAllCategoriesTwo().subscribe(
      data => data.categories.filter( e => {
      this.categories.push(e.strCategory);
    }
  ));


  }

  addBase64(){
    this.recepiForm.patchValue({ base64: this.imgBase64Path });
    this.recepiForm.patchValue({ user: this.fire.email });
  }



  @ViewChild('fileInput') fileInput!: ElementRef;
  fileAttr = this.imgBase64Path;
  
  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {
      this.fileAttr = '';
      Array.from<File>(imgFile.target.files).forEach((file: File) => {
        this.fileAttr += file.name + ' - ';
      });

      // HTML5 FileReader API
      let reader = new FileReader();
      reader.onload = (e: any) => {
        let image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
           this.imgBase64Path = e.target.result;
        };
      };
      reader.readAsDataURL(imgFile.target.files[0]);
      
      // Reset if duplicate image uploaded again
      this.fileInput.nativeElement.value = "";
    } else {
      this.fileAttr = 'Choose File';
    }
  }




 

}
