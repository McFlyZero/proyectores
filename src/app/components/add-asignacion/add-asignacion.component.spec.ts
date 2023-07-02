import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAsignacionComponent } from './add-asignacion.component';

describe('AddAsignacionComponent', () => {
  let component: AddAsignacionComponent;
  let fixture: ComponentFixture<AddAsignacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAsignacionComponent]
    });
    fixture = TestBed.createComponent(AddAsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
