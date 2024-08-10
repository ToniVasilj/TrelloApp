import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../service/board.service';
import { Board, BoardData } from '../interface/board';

@Component({
  selector: 'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrl: './board-details.component.css'
})
export class BoardDetailsComponent implements OnInit {
  id: number
  boardData: BoardData;

  constructor(private boardService: BoardService, 
    private route: ActivatedRoute) {}

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.boardData = this.boardService.getBoardData(this.id);
    }
}