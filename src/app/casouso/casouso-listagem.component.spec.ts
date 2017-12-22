import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasousoListagemComponent } from './casouso-listagem.component';

describe('CasousoComponent', () => {
  let component: CasousoListagemComponent;
  let fixture: ComponentFixture<CasousoListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasousoListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasousoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
