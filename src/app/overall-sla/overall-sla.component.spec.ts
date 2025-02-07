import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallSLAComponent } from './overall-sla.component';

describe('OverallSLAComponent', () => {
  let component: OverallSLAComponent;
  let fixture: ComponentFixture<OverallSLAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverallSLAComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverallSLAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
