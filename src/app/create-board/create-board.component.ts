import { Component, OnInit } from '@angular/core';
import { Board } from '../interface/board';
import { BoardService } from '../service/board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-board',
  templateUrl: './create-board.component.html',
  styleUrl: './create-board.component.css'
})
export class CreateBoardComponent implements OnInit {
  board: Board = new Board();

  constructor(private boardService: BoardService,
    private router: Router) {}

  ngOnInit(): void {
  }

  saveBoard() {
    this.boardService.createBoard(this.board).subscribe({
      next: (data) => {
        console.log(data.data.board);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Board creation completed');
        this.goToBoardList();
      }
    });
  }

  goToBoardList() {
    this.router.navigate(['boards']);
  }

  onSubmit() {
    console.log(this.board);
    this.saveBoard();
  }

}
