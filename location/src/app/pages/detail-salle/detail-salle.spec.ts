import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailSalle } from './detail-salle';

describe('DetailSalle', () => {
  let component: DetailSalle;
  let fixture: ComponentFixture<DetailSalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailSalle],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailSalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
