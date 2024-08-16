import { Component, OnInit } from '@angular/core';
import { Board } from '../interface/board';
import { BoardService } from '../service/board.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector:    'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrl:    './create-board.component.css'
})
export class CreateBoardComponent implements OnInit {
  board: Board = new Board();

  constructor(
    private boardService: BoardService,
    private router: Router,
    private snackBar: MatSnackBar) {}

  private goToBoardList() {
    this.router.navigate(['boards']);
  }

  private saveBoard() {
    this.boardService.createBoard(this.board).subscribe({
      next: (data) => {
        console.log(data.data.board);
      },
      error: (error) => {
        console.log(error);
        this.snackBar.open('Failed to create board, name is empty!', 'Close', {
          duration: 3000,
        });
      },
      complete: () => {
        console.log('Board creation completed');
        this.goToBoardList();
      }
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.board);
    this.saveBoard();
  }

}
