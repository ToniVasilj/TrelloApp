import { Component, OnInit } from '@angular/core';
import { BoardService } from '../service/board.service';
import { Board } from '../interface/board';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector:    'app-update-board-name',
  templateUrl: './update-board-name.component.html',
  styleUrl:    './update-board-name.component.css'
})
export class UpdateBoardNameComponent implements OnInit {
  board: Board = new Board();
  id:    number;

  constructor(
    private boardService: BoardService,
    private route: ActivatedRoute,
    private router: Router) {}

  private goToBoardList() {
    this.router.navigate(['boards']);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.boardService.getBoardById(this.id).subscribe({
      next: (data) => {
        this.board = data.data.board;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Board data fetch completed');
      }
    });
  }

  onSubmit() {
    this.boardService.updateBoardName(this.board).subscribe({
      next: (data) => {
        this.goToBoardList();
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Board data update completed');
      }
    });
  }
}
