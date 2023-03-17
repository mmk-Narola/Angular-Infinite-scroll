import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-example-one',
  templateUrl: './example-one.component.html',
  styleUrls: ['./example-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleOneComponent implements OnInit {
  arrNumber: number[] = [];
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 1000; i++) {
      this.arrNumber.push(i);
    }

    console.log(this.arrNumber);
  }
}
