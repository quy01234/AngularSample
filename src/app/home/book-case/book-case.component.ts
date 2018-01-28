import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-case',
  templateUrl: './book-case.component.html',
  styleUrls: ['./book-case.component.scss']
})
export class BookCaseComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  openDetail() {
    const link = ['home/abc'];
    this.router.navigate(link);  }

}
