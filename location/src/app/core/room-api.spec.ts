import { TestBed } from '@angular/core/testing';
import { RoomApi } from './room-api';

describe('RoomApi', () => {
  let service: RoomApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
