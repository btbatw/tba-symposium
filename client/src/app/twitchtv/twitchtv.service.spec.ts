import { TestBed, inject } from '@angular/core/testing';

import { TwitchtvService } from './twitchtv.service';

describe('TwitchtvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitchtvService]
    });
  });

  it('should be created', inject([TwitchtvService], (service: TwitchtvService) => {
    expect(service).toBeTruthy();
  }));
});
