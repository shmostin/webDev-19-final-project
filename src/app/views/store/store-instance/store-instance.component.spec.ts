import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreInstanceComponent } from './store-instance.component';

describe('StoreInstanceComponent', () => {
  let component: StoreInstanceComponent;
  let fixture: ComponentFixture<StoreInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
