import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoFiscaliaComponent } from './logo-fiscalia.component';

describe('LogoFiscaliaComponent', () => {
  let component: LogoFiscaliaComponent;
  let fixture: ComponentFixture<LogoFiscaliaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoFiscaliaComponent]
    });
    fixture = TestBed.createComponent(LogoFiscaliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
