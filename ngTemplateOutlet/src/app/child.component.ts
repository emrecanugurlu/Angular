import { Component, ElementRef, Input } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet],
  template : `
  <ng-container *ngTemplateOutlet="parentTemplate">

  </ng-container>
  `
})
export class ChildComponent {
  @Input() parentTemplate : TemplateRef<HTMLElement>
}


