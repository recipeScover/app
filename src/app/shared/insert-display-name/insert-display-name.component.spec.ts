import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDisplayNameComponent } from './insert-display-name.component';

describe('InsertDisplayNameComponent', () => {
  let component: InsertDisplayNameComponent;
  let fixture: ComponentFixture<InsertDisplayNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertDisplayNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertDisplayNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
