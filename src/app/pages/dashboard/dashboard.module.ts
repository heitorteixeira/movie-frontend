import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';

@NgModule({
  declarations: [DashboardListComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    InfiniteScrollModule
  ]
})
export class DashboardModule { }
