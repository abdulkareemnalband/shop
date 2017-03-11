import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertShopFormComponent } from './insert-shop-form.component';

describe('InsertShopFormComponent', () => {
  let component: InsertShopFormComponent;
  let fixture: ComponentFixture<InsertShopFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertShopFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertShopFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
