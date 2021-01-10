import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';

import { HomeComponent } from '../../layout/home/home.component';
import { JoinComponent } from '../../layout/join/join.component';
import { RoomComponent } from '../../layout/room/room.component';

import { JoinDialogComponent } from '../../layout/components/join-dialog/join-dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    JoinComponent,
    RoomComponent,
    JoinDialogComponent
  ],
  entryComponents: [JoinDialogComponent],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
  ],
  exports:[
    HomeComponent,
    JoinComponent,
    RoomComponent,
    JoinDialogComponent
  ]
})
export class SharedModule { }
