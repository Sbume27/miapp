import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoDosComponent } from './resultado-dos.component';

describe('ResultadoDosComponent', () => {
  let component: ResultadoDosComponent;
  let fixture: ComponentFixture<ResultadoDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultadoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
