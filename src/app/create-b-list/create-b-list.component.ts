import { Component, OnInit } from '@angular/core';
import { BList } from '../interface/board';
import { ActivatedRoute, Router } from '@angular/router';
import { BListService } from '../service/b-list.service';

@Component({
  selector: 'app-create-b-list',
  templateUrl: './create-b-list.component.html',
  styleUrl: './create-b-list.component.css'
})
export class CreateBListComponent implements OnInit {
  bList: BList = new BList();
  boardId: number;

  constructor(private bListService: BListService,
    private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.boardId = this.route.snapshot.params['boardId'];
    console.log("Board id is:", this.boardId);
  }

  goToBoardList() {
    this.router.navigate(['board-details', this.boardId]);
  }

  saveBoard() {
    this.bListService.createNewBList(this.boardId, this.bList).subscribe({
      next: (data) => {
        console.log(data.data.bList);
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('BList creation completed');
        this.goToBoardList();
      }
    });
  }
  
  onSubmit() {
    this.saveBoard();
    console.log(this.bList);
  }

}
