import { Component, OnInit } from '@angular/core';
import { Card } from '../interface/board';
import { CardService } from '../service/card.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-card',
  templateUrl: './update-card.component.html',
  styleUrl: './update-card.component.css'
})
export class UpdateCardComponent implements OnInit {
  card: Card = new Card();
  cardId: number;
  boardId: number;
  
  constructor(private cardService: CardService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.cardId = this.route.snapshot.params['cardId'];
    this.boardId = this.route.snapshot.params['boardId'];
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

  goToBoard() {
    this.router.navigate(['board-details', this.boardId]);
  }

  onSubmit() {
    this.cardService.updateCard(this.card).subscribe({
      next: (data) => {
        this.goToBoard();
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Card data update completed');
      }
    });
  }

}
