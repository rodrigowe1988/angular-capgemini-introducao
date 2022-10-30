import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges, OnInit {

  @Input()
  rating: number =0;

  startWidth: number = 0;


  constructor() { }

  ngOnChanges(): void {
    this.startWidth = this.rating * 74/5;
  }

  ngOnInit(): void {
  }

}
