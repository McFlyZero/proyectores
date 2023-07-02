import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoresComponent } from './proyectores.component';

describe('ProyectoresComponent', () => {
  let component: ProyectoresComponent;
  let fixture: ComponentFixture<ProyectoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProyectoresComponent]
    });
    fixture = TestBed.createComponent(ProyectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
