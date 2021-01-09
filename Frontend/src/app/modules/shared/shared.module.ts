import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';

import { HomeComponent } from '../../layout/home/home.component';
import { JoinComponent } from '../../layout/join/join.component';
import { RoomComponent } from '../../layout/room/room.component';

@NgModule({
  declarations: [
    HomeComponent,
    JoinComponent,
    RoomComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
  ],
  exports:[
    HomeComponent,
    JoinComponent,
    RoomComponent
  ]
})
export class SharedModule { }
