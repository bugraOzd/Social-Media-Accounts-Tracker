import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordNinjaComponent } from './word-ninja.component';

describe('WordNinjaComponent', () => {
  let component: WordNinjaComponent;
  let fixture: ComponentFixture<WordNinjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordNinjaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordNinjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
