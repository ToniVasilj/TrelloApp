import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardListComponent } from './board-list/board-list.component';
import { CreateBoardComponent } from './create-board/create-board.component';
import { UpdateBoardNameComponent } from './update-board-name/update-board-name.component';

const routes: Routes = [
  {path: 'boards', component: BoardListComponent},
  {path: 'create-board', component: CreateBoardComponent},
  {path: 'update-board-name/:id', component: UpdateBoardNameComponent},
  {path: '', redirectTo: 'boards', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
