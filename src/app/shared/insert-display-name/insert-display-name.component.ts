import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth-service.service'

@Component({
  selector: 'rsc-insert-display-name',
  templateUrl: './insert-display-name.component.html',
  styleUrls: ['./insert-display-name.component.scss']
})
export class InsertDisplayNameComponent implements OnInit {



  displayNameForm = this.fb.group({
    name: ['', Validators.required],

  });



  constructor(public fb: FormBuilder, public authService: AuthService) { }

  ngOnInit(): void {
  }

}
