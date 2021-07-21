import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CountdownTimerModule } from './components/countdown-timer/countdown-timer.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownTimerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
