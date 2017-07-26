import { TestBed, inject } from '@angular/core/testing';

import { AppInputValidateService } from './app-input-validate.service';

describe('AppInputValidateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppInputValidateService]
    });
  });

  it('should be created', inject([AppInputValidateService], (service: AppInputValidateService) => {
    expect(service).toBeTruthy();
  }));
});
