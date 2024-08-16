import { Component, Inject, OnInit } from '@angular/core';
import { Card } from '../interface/board';
import { CardService } from '../service/card.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector:    'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrl:    './update-card.component.css'
})
export class UpdateCardComponent {
  card:    Card = new Card();
  cardId:  number;
  boardId: number;

  constructor(
    public dialogRef: MatDialogRef<UpdateCardComponent>,
    private cardService: CardService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: { boardId: number, cardId: number }
  ) {
    this.boardId = data.boardId;
    this.cardId = data.cardId;
    this.cardService.getCardById(this.cardId).subscribe({
      next: (data) => {
        this.card = data.data.card;
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Card data fetch completed');
      }
    });
  }

  private updateCard() {
    this.cardService.updateCard(this.card).subscribe({
      next: () => {
        console.log('Card updated');
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        this.dialogRef.close();
      }
    });
  }

  onUpdate(): void {
    this.updateCard()
    console.log(this.card);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
