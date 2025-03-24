import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  template: `
    <app-child></app-child>
    <button (click)="focusChildInput()">Focus the Input in Child</button>
  `,
  imports: [ChildComponent]
})
export class ParentComponent implements AfterViewInit {
  @ViewChild(ChildComponent)
  childComponent!: ChildComponent;

  ngAfterViewInit() {
    console.log(this.childComponent);  
  }

  focusChildInput() {
    this.childComponent.focusInput();
  }
}
