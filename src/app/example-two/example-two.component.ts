import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.scss'],
})
export class ExampleTwoComponent implements OnInit {
  items: any[] = [];
  page = 1;
  per_page = 5;
  total = 0;
  loading = false;

  // https://api.openbrewerydb.org/breweries?page=${page}&per_page=10

  constructor(private http: HttpClient) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !this.loading
    ) {
      this.page++;
      this.loadItems();
    }
  }

  ngOnInit(): void {
    this.loadItems();
  }

  private loadItems() {
    return this.http
      .get('https://api.openbrewerydb.org/breweries?page=${page}&per_page=50')
      .subscribe((res: any) => {
        this.items = res;
        console.log(this.items);
      });
  }
}
