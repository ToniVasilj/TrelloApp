import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../service/board.service';
import { Board } from '../interface/board';

@Component({
  selector: 'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrl: './board-details.component.css'
})
export class BoardDetailsComponent implements OnInit {
  id: number
  board: Board;

  constructor(private boardService: BoardService, 
    private route: ActivatedRoute) {}

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
          console.log(this.board);
          console.log('Board data fetch completed');
        }
      });
    }
}