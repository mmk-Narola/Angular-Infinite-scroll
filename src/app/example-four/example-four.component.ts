import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import {
  BehaviorSubject,
  Observable,
  forkJoin,
  fromEvent,
  map,
  take,
} from 'rxjs';

@Component({
  selector: 'app-example-four',
  templateUrl: './example-four.component.html',
  styleUrls: ['./example-four.component.scss'],
})
export class ExampleFourComponent implements OnInit {
  obsArray: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  items$: Observable<any> = this.obsArray.asObservable();
  currentPage: number = 0;
  pageSize: number = 10;

  constructor(private appService: CatService) {}

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.appService
      .getData(this.currentPage, this.pageSize)
      .subscribe((data: any) => {
        this.obsArray.next(data);
      });

    const content = document.querySelector('.items');
    const scroll$ = fromEvent(content!, 'scroll').pipe(
      map(() => {
        return content!.scrollTop;
      })
    );

    scroll$.subscribe((scrollPos) => {
      let limit = content!.scrollHeight - content!.clientHeight;
      if (scrollPos === limit) {
        this.currentPage += this.pageSize;
        forkJoin([
          this.items$.pipe(take(1)),
          this.appService.getData(this.currentPage, this.pageSize),
        ]).subscribe((data: Array<Array<any>>) => {
          const newArr = [...data[0], ...data[1]];
          this.obsArray.next(newArr);
        });
      }
    });
  }
}
