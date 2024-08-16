import { Component, Inject } from '@angular/core';
import { Card } from '../interface/board';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardService } from '../service/card.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector:    'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrl:    './create-card.component.css'
})
export class CreateCardComponent {
  card:    Card = new Card();
  boardId: number;
  bListId: number;

  constructor(
    public dialogRef: MatDialogRef<CreateCardComponent>,
    private cardService: CardService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: { boardId: number, bListId: number }
  ) {
    this.boardId = data.boardId;
    this.bListId = data.bListId;
  }

  private saveCard() {
    this.cardService.createNewCard(this.boardId, this.bListId, this.card).subscribe({
      next: (data) => {
        console.log("Card created");
      },
      error: (error) => {
        console.log(error);
        this.snackBar.open('Failed to create card, text is empty!', 'Close', {
          duration: 3000,
        });
      },
      complete: () => {
        this.dialogRef.close();
      }
    });
  }

  onCreate(): void {
    this.saveCard()
    console.log(this.card);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}