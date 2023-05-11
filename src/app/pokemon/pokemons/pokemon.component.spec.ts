import { ComponentFixture, TestBed } from '@angular/core/testing';

import { POKEMONComponent } from './pokemon.component';

describe('POKEMONComponent', () => {
  let component: POKEMONComponent;
  let fixture: ComponentFixture<POKEMONComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ POKEMONComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(POKEMONComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
