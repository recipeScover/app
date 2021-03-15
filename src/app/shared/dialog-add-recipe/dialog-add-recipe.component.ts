import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder, Validators } from '@angular/forms'
import { Recipe } from '../services/user';
import { AuthService } from '../services/auth-service.service';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ServiceRscService } from '../../model/service-rsc.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { Inject } from '@angular/core';

@Component({
  selector: 'rsc-dialog-add-recipe',
  templateUrl: './dialog-add-recipe.component.html',
  styleUrls: ['./dialog-add-recipe.component.scss']
})
export class DialogAddRecipeComponent implements OnInit {
  recepiForm: FormGroup;
  imgBase64Path= "";
  immagine: string | undefined;
  id="";
  constructor(private fb:FormBuilder, public fire : AuthService, public serviceCat : ServiceRscService, public recipeList: RecipeListComponent,  @Inject(MAT_DIALOG_DATA) public ricetta: any ) {
   
    if(ricetta){
    this.immagine=ricetta.ricetta.base64;
    this.id=ricetta.ricetta.id;
  }
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
  ingredient(ingrediente: any){
    return this.fb.group({
      ingredient:  [ingrediente.ingredient, Validators.required],
      quantity:  [ingrediente.quantity, Validators.required],
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
    if(this.id==""){
    this.fire.createRecipe(this.recepiForm.value);
    }else{
      this.fire.updateRecipe(this.recepiForm.value, this.id);
    }
    console.log(this.recepiForm.value);
    setTimeout(()=>{this.recipeList.getData();}, 2000);
    this.fire.closeDialog();
  }

 categories:[any]=[''];

  ngOnInit() {
    if(!this.ricetta){
    this.addallIngredients();
    }
    console.log(this.ricetta);
    //this.fire.getPolicies().subscribe(el => this.ricette=el.docs);
    this.serviceCat.getAllCategoriesTwo().subscribe(
      data => data.categories.filter( e => {
      this.categories.push(e.strCategory);
    }

  ));

        if(this.ricetta){
        this.recepiForm.controls['name'].setValue(this.ricetta.ricetta.name);
        this.recepiForm.controls['category'].setValue(this.ricetta.ricetta.category);
        this.recepiForm.controls['description'].setValue(this.ricetta.ricetta.description);
        for(let ingrediente of this.ricetta.ricetta.allIngredients){
          this.allIngredients.push(this.ingredient(ingrediente))
        }
        this.recepiForm.controls['photoName'].setValue(this.ricetta.ricetta.photoName);
        this.recepiForm.controls['base64'].setValue(this.ricetta.ricetta.base64);
      
      }


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
           this.immagine= e.target.result;
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
