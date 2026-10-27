import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulaireReservation } from './formulaire-reservation';

describe('FormulaireReservation', () => {
  let component: FormulaireReservation;
  let fixture: ComponentFixture<FormulaireReservation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireReservation],
    }).compileComponents();

    fixture = TestBed.createComponent(FormulaireReservation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
