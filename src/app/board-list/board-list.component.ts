import { Component, OnInit } from '@angular/core';
import { Board } from '../interface/board';
import { BoardService } from '../service/board.service';
import { Router } from '@angular/router';

@Component({
  selector:    'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrl:    './board-list.component.css'
})
export class BoardListComponent implements OnInit {

  boards: Board[];

  constructor(
    private boardService: BoardService,
    private router: Router) {}

  private getBoards() {
    this.boardService.getBoardsList().subscribe({
      next: (data) => {
        this.boards = data.data.boards;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Board list fetch completed');
      }
    });
  }

  ngOnInit(): void {
    this.getBoards();
  }

  navigateToBoardDetails(id: number) {
    this.router.navigate(['board-details', id]);
  }

  navigateToUpdateBoard(id: number) {
    this.router.navigate(['update-board-name', id]);
  }

  navigateToCreateBoard() {
    this.router.navigate(['create-board']);
  }

  deleteBoard(id: number) {
    this.boardService.deleteBoard(id).subscribe({
      next: () => {
        console.log('Board deleted');
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.getBoards();
      }
    });
  }
}
