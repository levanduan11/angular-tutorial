import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  //create an array of objects

  salesPersonlist: SalesPerson[] = [
    new SalesPerson('anup', 'kumar', 'kumar@gmail.com', 50000),
    new SalesPerson('john', 'doe', 'kumar@gmail.com', 40000),
    new SalesPerson('claire', 'murphy', 'kumar@gmail.com', 30000),
    new SalesPerson('mai', 'truong', 'kumar@gmail.com', 70000),
  ];

  constructor() {}

  ngOnInit(): void {}
}
