import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageReservation } from './page-reservation';

describe('PageReservation', () => {
  let component: PageReservation;
  let fixture: ComponentFixture<PageReservation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageReservation],
    }).compileComponents();

    fixture = TestBed.createComponent(PageReservation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
