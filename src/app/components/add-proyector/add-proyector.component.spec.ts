import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProyectorComponent } from './add-proyector.component';

describe('AddProyectorComponent', () => {
  let component: AddProyectorComponent;
  let fixture: ComponentFixture<AddProyectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProyectorComponent]
    });
    fixture = TestBed.createComponent(AddProyectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
