import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasJaponComponent } from './noticias-japon.component';

describe('NoticiasJaponComponent', () => {
  let component: NoticiasJaponComponent;
  let fixture: ComponentFixture<NoticiasJaponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasJaponComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasJaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
