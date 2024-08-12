import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardListComponent } from './board-list/board-list.component';
import { provideHttpClient } from '@angular/common/http';
import { CreateBoardComponent } from './create-board/create-board.component';
import { FormsModule } from '@angular/forms';
import { UpdateBoardNameComponent } from './update-board-name/update-board-name.component';
import { BoardDetailsComponent } from './board-details/board-details.component';
import { CreateBListComponent } from './create-b-list/create-b-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardListComponent,
    CreateBoardComponent,
    UpdateBoardNameComponent,
    BoardDetailsComponent,
    CreateBListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
