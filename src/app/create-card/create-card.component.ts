import { Component, OnInit } from '@angular/core';
import { Card } from '../interface/board';
import { CardService } from '../service/card.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrl: './create-card.component.css'
})
export class CreateCardComponent implements OnInit {
  card: Card = new Card();
  boardId: number;
  bListId: number;
  
  constructor(private cardService: CardService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.boardId = this.route.snapshot.params['boardId'];
    console.log("Board id is:", this.boardId);
    this.bListId = this.route.snapshot.params['bListId'];
    console.log("BList id is:", this.bListId);
  }

  goToBoard() {
    this.router.navigate(['board-details', this.boardId]);
  }

  saveCard() {
    this.cardService.createNewCard(this.boardId, this.bListId, this.card).subscribe({
      next: (data) => {
        console.log(data.data.card);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('BList creation completed');
        this.goToBoard();
      }
    });
  }
  
  onSubmit() {
    this.saveCard()
    console.log(this.card);
  }
}
