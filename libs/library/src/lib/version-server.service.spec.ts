import { TestBed } from '@angular/core/testing';

import { VersionServerService } from './version-server.service';

describe('VersionServerService', () => {
  let service: VersionServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VersionServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
