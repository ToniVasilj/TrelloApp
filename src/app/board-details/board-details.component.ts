import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from '../service/board.service';
import { Board } from '../interface/board';
import { BListService } from '../service/b-list.service';
import { CardService } from '../service/card.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateCardComponent } from '../create-card/create-card.component';
import { UpdateCardComponent } from '../update-card/update-card.component';

@Component({
  selector:    'app-board-details',
  templateUrl: './board-details.component.html',
  styleUrl:    './board-details.component.css'
})
export class BoardDetailsComponent implements OnInit {
  id:    number;
  board: Board;

  constructor(
    private boardService: BoardService, 
    private bListService: BListService,
    private cardService:  CardService,
    private route:        ActivatedRoute,
    private router:       Router,
    private dialog:       MatDialog) {}

    private getBoard() {
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

    ngOnInit(): void {
      this.getBoard();
    }

    navigateToCreateBList(boardId: number) {
      this.router.navigate(['create-blist', boardId]);
    }

    deleteBList(id: number) {
      this.bListService.deleteBList(id).subscribe({
        next: () => {
          console.log('BList deleted');
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          this.getBoard();
        }
      });
    }

    createCard(boardId: number, bListId: number): void {
      const dialogRef = this.dialog.open(CreateCardComponent, {
        width: '400px',
        data: { boardId, bListId },
      });
    
      dialogRef.afterClosed().subscribe({
        next: () => {
          this.getBoard();
          this.router.navigate(['board-details', boardId]);
          console.log('The create card dialog was closed');
        }
      });
    }

    updateCard(boardId: number, cardId: number): void {
      const dialogRef = this.dialog.open(UpdateCardComponent, {
        width: '400px',
        data: { boardId, cardId },
      });
  
      dialogRef.afterClosed().subscribe({
        next: () => {
          this.getBoard();
          this.router.navigate(['board-details', boardId]);
          console.log('The update card dialog was closed');
        }
      });
    }

    deleteCard(id: number) {
      this.cardService.deleteCard(id).subscribe({
        next: () => {
          console.log('Card deleted');
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => {
          this.getBoard();
        }
      });
    }

}