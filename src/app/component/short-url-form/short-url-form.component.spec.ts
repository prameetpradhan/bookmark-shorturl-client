import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortUrlFormComponent } from './short-url-form.component';

describe('ShortUrlFormComponent', () => {
  let component: ShortUrlFormComponent;
  let fixture: ComponentFixture<ShortUrlFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortUrlFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortUrlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
