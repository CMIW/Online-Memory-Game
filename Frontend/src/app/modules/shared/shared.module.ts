import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';

import { HomeComponent } from '../../layout/home/home.component';
import { JoinComponent } from '../../layout/join/join.component';
import { RoomComponent } from '../../layout/room/room.component';
import { CardComponent } from '../../layout/components/card/card.component';

import { JoinDialogComponent } from '../../layout/components/join-dialog/join-dialog.component';
import { CreateDialogComponent } from '../../layout/components/create-dialog/create-dialog.component';
import { MessageDialogComponent } from '../../layout/components/message-dialog/message-dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    JoinComponent,
    RoomComponent,
    JoinDialogComponent,
    CreateDialogComponent,
    MessageDialogComponent,
    CardComponent
  ],
  entryComponents: [
    JoinDialogComponent,
    CreateDialogComponent,
    MessageDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
  ],
  exports:[
    HomeComponent,
    JoinComponent,
    RoomComponent,
    JoinDialogComponent,
    CreateDialogComponent,
    MessageDialogComponent,
    CardComponent
  ]
})
export class SharedModule { }
