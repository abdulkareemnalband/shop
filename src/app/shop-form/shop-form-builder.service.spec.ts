import { TestBed, inject } from '@angular/core/testing';

import { ShopFormBuilderService } from './shop-form-builder.service';

describe('ShopFormBuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopFormBuilderService]
    });
  });

  it('should ...', inject([ShopFormBuilderService], (service: ShopFormBuilderService) => {
    expect(service).toBeTruthy();
  }));
});
