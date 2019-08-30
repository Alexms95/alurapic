/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserNotTaken.validatorService } from './user-not-taken.validator.service';

describe('Service: UserNotTaken.validator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserNotTaken.validatorService]
    });
  });

  it('should ...', inject([UserNotTaken.validatorService], (service: UserNotTaken.validatorService) => {
    expect(service).toBeTruthy();
  }));
});
