import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasousoEditarComponent } from './casouso-editar.component';

describe('CasousoEditarComponent', () => {
  let component: CasousoEditarComponent;
  let fixture: ComponentFixture<CasousoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasousoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasousoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
