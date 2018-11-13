import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlectedMovieComponent } from './slected-movie.component';

describe('SlectedMovieComponent', () => {
  let component: SlectedMovieComponent;
  let fixture: ComponentFixture<SlectedMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlectedMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlectedMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
