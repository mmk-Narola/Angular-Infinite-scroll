import { Component, OnInit } from '@angular/core';
import { Cat } from '../cat.model';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-example-three',
  templateUrl: './example-three.component.html',
  styleUrls: ['./example-three.component.scss'],
})
export class ExampleThreeComponent implements OnInit {
  page = 1;
  cats: Cat[] = [];
  isLoading = false;

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.catService.getCats(this.page).subscribe((cats: Cat[]) => {
      // this.cats = cats;
      console.log(this.cats);
    });
  }

  onScroll(): void {
    setTimeout(() => {
      this.catService.getCats(++this.page).subscribe((cats: Cat[]) => {
        this.cats.push(...cats);
        this.isLoading = true;
        this.cats.forEach((ele) => {
          if (ele.name === 'York Chocolate') {
            this.isLoading = false;
          }
        });
      });
    }, 10);
  }
}
