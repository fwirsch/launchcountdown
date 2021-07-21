import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CountdownTimerComponent } from './countdown-timer.component';
import { FlipCardItemComponent } from './flip-card-item/flip-card-item.component';

@NgModule({
  declarations: [
    FlipCardItemComponent,
    CountdownTimerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
})
export class CountdownTimerModule { }
