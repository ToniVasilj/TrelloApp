import { Component, OnInit } from '@angular/core';
import { BList } from '../interface/board';
import { ActivatedRoute, Router } from '@angular/router';
import { BListService } from '../service/b-list.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector:    'app-create-b-list',
  templateUrl: './create-b-list.component.html',
  styleUrl:    './create-b-list.component.css'
})
export class CreateBListComponent implements OnInit {
  bList:   BList = new BList();
  boardId: number;

  constructor(
    private bListService: BListService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar) {}

  private navigateToBoard() {
    this.router.navigate(['board-details', this.boardId]);
  }

  private saveBList() {
    this.bListService.createNewBList(this.boardId, this.bList).subscribe({
      next: (data) => {
        console.log(data.data.bList);
      },
      error: (error) => {
        console.log(error);
        this.snackBar.open('Failed to create List, name is empty!', 'Close', {
          duration: 3000,
        });
      },
      complete: () => {
        console.log('BList creation completed');
        this.navigateToBoard();
      }
    });
  }
  
  ngOnInit(): void {
    this.boardId = this.route.snapshot.params['boardId'];
  }

  onSubmit() {
    this.saveBList();
    console.log(this.bList);
  }

}
