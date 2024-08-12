import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from '../service/board.service';
import { Board } from '../interface/board';
import { BListService } from '../service/b-list.service';

@Component({
  selector: 'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrl: './board-details.component.css'
})
export class BoardDetailsComponent implements OnInit {
  id: number
  board: Board;

  constructor(private boardService: BoardService, 
    private bListService: BListService,
    private route: ActivatedRoute,
    private router: Router) {}

    ngOnInit(): void {
      this.getBoard();
    }

    getBoard() {
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

    createBList(boardId: number) {
      this.router.navigate(['create-blist', boardId]);
    }

    deleteBList(id: number) {
      this.bListService.deleteBList(id).subscribe(data => {
        console.log(data.data.bList);
        this.getBoard();
      });
    }
}