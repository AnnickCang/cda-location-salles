import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoSalle } from './info-salle';

describe('InfoSalle', () => {
  let component: InfoSalle;
  let fixture: ComponentFixture<InfoSalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoSalle],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoSalle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
