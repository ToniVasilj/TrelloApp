import { Component, OnInit } from '@angular/core';
import { Board } from '../interface/board';
import { BoardService } from '../service/board.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrl: './board-list.component.css'
})
export class BoardListComponent implements OnInit {

  boards: Board[];

  constructor(private boardService: BoardService,
    private router: Router) {}

  ngOnInit(): void {
    this.getBoards();
    
  }

  private getBoards() {
    this.boardService.getBoardsList().subscribe( data => {
      this.boards = data.data.boards;
    })
  }

  updateBoardName(id: number){
    this.router.navigate(['update-board-name', id]);
  }

  deleteBoard(id: number) {
    this.boardService.deleteBoard(id).subscribe(data => {
      console.log(data.data.board);
      this.getBoards();
    });
  }
}
