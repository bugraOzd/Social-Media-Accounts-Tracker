import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordPyramidsComponent } from './word-pyramids.component';

describe('WordPyramidsComponent', () => {
  let component: WordPyramidsComponent;
  let fixture: ComponentFixture<WordPyramidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WordPyramidsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WordPyramidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
