import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemToDoComponent } from './item-to-do.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ItemToDoComponent', () => {
  let component: ItemToDoComponent;
  let fixture: ComponentFixture<ItemToDoComponent>;
  let aEl: DebugElement;
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
    aEl = fixture.debugElement.query(By.css('a'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia de renderizar todoData.text en el "a" tag', () => {
    expect(aEl.nativeElement.textContent.trim()).toBe('');
    component.todoData = {
      text: 'agregando input',
      id: 'abc123'
    };
    fixture.detectChanges();
    expect(aEl.nativeElement.textContent.trim()).toBe('agregando input')
  })
});
