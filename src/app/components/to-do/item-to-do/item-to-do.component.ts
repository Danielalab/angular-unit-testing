import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-to-do',
  templateUrl: './item-to-do.component.html',
  styleUrls: ['./item-to-do.component.css']
})
export class ItemToDoComponent {
  @Input() todoData = {
    text: '',
    id: ''
  };

  constructor() { }

}
