import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemToDoComponent } from './item-to-do.component';

describe('ItemToDoComponent', () => {
  let component: ItemToDoComponent;
  let fixture: ComponentFixture<ItemToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
