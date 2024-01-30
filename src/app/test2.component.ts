import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-test',
  standalone: true,
  template: `
    <div [@opacity]="'desc-to-active'" [@top]="'desc-to-hint'">test</div>
  `,
  imports: [MatTableModule, MatSortModule],
  styles: `
    table {
    width: 100%;
    }

    th.mat-sort-header-sorted {
    color: black;
    }
    `,
  animations: [
    trigger('trigger', [
      state(
        'show',
        style({
          marginTop: '50px',
        })
      ),
      transition('* => show', [animate('200ms')]),
    ]),

    trigger('opacity', [
      state('desc-to-active, asc-to-active, active', style({ opacity: 1 })),
    ]),
    trigger('top', [
      // Hidden Above => Hint Center
      state(
        'desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active',
        style({ transform: 'translateY(0)' })
      ),
    ]),
  ],
})
export class Test2Component {}
