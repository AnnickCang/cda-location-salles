import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeResaSalle } from './liste-resa-salle';

describe('ListeResaSalle', () => {
  let component: ListeResaSalle;
  let fixture: ComponentFixture<ListeResaSalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeResaSalle],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeResaSalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
