import { Component, OnInit } from '@angular/core';
import { Board } from '../interface/board';
import { BoardService } from '../service/board.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrl: './board-list.component.css'
})
export class BoardListComponent implements OnInit {

  boards: Board[];

  constructor(private boardService: BoardService) {}

  ngOnInit(): void {
    this.getBoards();
    
  }

  private getBoards() {
    this.boardService.getBoardsList().subscribe( data => {
      this.boards = data.data.boards;
    })
  }
}
