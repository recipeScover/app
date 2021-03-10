import { AuthService } from '../services/auth-service.service';

import { FormGroup, FormsModule ,FormArray, FormBuilder, Validators } from '@angular/forms'

import { Component, ViewChild, ElementRef } from '@angular/core';
import { UserImg } from '../services/user';
import { invalid } from '@angular/compiler/src/render3/view/util';




@Component({
  selector: 'rsc-dialog-profil-img',
  templateUrl: './dialog-profil-img.component.html',
  styleUrls: ['./dialog-profil-img.component.scss']
})
export class DialogProfilImgComponent {





















  imageForm: FormGroup;
  imgBase64Path: string="";

  constructor( private fb:FormBuilder, public fire: AuthService) { 
    this.imageForm= this.fb.group(
      {
        photoName: ['', Validators.required],
      }
    )


  }



  idIMG : any;


  fine() {
    let dati= {'user': this.fire.email, 'base64': this.imgBase64Path }
    if(this.fire.userImg[0]){
      if(this.fire.userImg[0].id){
        this.fire.update(dati, this.fire.userImg[0].id);
        this.fire.userImg[0].base64=dati.base64;
      }else{
        this.fire.userImg=[];
        this.fire.getImg().subscribe(data => this.fire.userImg = data.docs.map(e => {
          return {
            id: e.id,
            ... e.data() as any
           } as UserImg;
        }));
        setTimeout(()=>{this.fire.update(dati, this.fire.userImg[0].id);
        this.fire.userImg[0].base64=dati.base64;
      }, 3000);
    }
    }else{
      this.fire.createImg(dati); 
      this.fire.userImg.push({base64 : this.imgBase64Path},{user: dati.user});
    }
    this.fire.closeDialog();
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

