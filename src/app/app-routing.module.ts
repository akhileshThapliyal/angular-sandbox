import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { XhrReqResComponent } from './components/xhr-req-res/xhr-req-res.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'xhr-req-res', component: XhrReqResComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
