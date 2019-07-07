import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingSongsComponent } from './ranking-songs.component';

describe('RankingSongsComponent', () => {
  let component: RankingSongsComponent;
  let fixture: ComponentFixture<RankingSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
