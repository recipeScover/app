import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogProfilImgComponent } from './dialog-profil-img.component';

describe('DialogProfilImgComponent', () => {
  let component: DialogProfilImgComponent;
  let fixture: ComponentFixture<DialogProfilImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogProfilImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogProfilImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
