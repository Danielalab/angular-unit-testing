import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTracksListComponent } from './top-tracks-list.component';

describe('TopTracksListComponent', () => {
  let component: TopTracksListComponent;
  let fixture: ComponentFixture<TopTracksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTracksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTracksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
