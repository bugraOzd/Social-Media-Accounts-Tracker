import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionSoftwareComponent } from './competition-software.component';

describe('CompetitionSoftwareComponent', () => {
  let component: CompetitionSoftwareComponent;
  let fixture: ComponentFixture<CompetitionSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetitionSoftwareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetitionSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
