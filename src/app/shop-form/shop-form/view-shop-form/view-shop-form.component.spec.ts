import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewShopFormComponent } from './view-shop-form.component';

describe('ViewShopFormComponent', () => {
  let component: ViewShopFormComponent;
  let fixture: ComponentFixture<ViewShopFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewShopFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewShopFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
