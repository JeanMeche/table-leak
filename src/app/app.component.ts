import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, NgIf],
  template: `
    <button (click)="test = !test">Toggle test</button>
    @if(test) {
    <app-test></app-test>
    }
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  test: boolean = true;
}
