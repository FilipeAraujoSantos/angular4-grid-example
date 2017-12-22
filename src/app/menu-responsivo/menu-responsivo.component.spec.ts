import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuResponsivoComponent } from './menu-responsivo.component';

describe('MenuResponsivoComponent', () => {
  let component: MenuResponsivoComponent;
  let fixture: ComponentFixture<MenuResponsivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuResponsivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuResponsivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
