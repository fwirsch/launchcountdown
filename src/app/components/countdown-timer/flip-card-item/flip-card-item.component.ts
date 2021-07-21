import { Component, Input, ChangeDetectorRef } from '@angular/core';
import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-flip-card-item',
  templateUrl: './flip-card-item.component.html',
  styleUrls: ['./flip-card-item.component.scss'],
  animations: [
    trigger('flip', [
      transition('*=>*', [
        animate(
          '.6s',
          keyframes([
            style({ transform: 'rotateX(0deg)', offset: 0 }),
            style({ transform: 'rotateX(-90deg)', offset: 0.5 }),
            style({ transform: 'rotateX(-180deg)', offset: 1 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class FlipCardItemComponent {
  @Input() value: string = '';
  @Input() label: string = '';

  oldValue: string = '';

  constructor(private cdr: ChangeDetectorRef) {}

  flipDone() {
    this.oldValue = this.value;
    this.cdr.detectChanges();
  }
}
