import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<input #inputField type="text" placeholder="Focus me from Parent!" />`
})
export class ChildComponent {
  @ViewChild('inputField')
  inputField!: ElementRef;

  focusInput() {
    this.inputField.nativeElement.focus();
  }
}
