import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';

const routes: Routes = [
  { path: '', component: CountdownTimerComponent },
  {
    path: '**',
    component: CountdownTimerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
