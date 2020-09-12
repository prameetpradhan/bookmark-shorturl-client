import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlActionComponent } from './url-action.component';

describe('UrlActionComponent', () => {
  let component: UrlActionComponent;
  let fixture: ComponentFixture<UrlActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
