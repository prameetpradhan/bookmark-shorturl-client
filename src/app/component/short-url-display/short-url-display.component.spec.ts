import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortUrlDisplayComponent } from './short-url-display.component';

describe('ShortUrlDisplayComponent', () => {
  let component: ShortUrlDisplayComponent;
  let fixture: ComponentFixture<ShortUrlDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortUrlDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortUrlDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
