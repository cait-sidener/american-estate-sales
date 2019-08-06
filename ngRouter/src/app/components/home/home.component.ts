import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [
    { img: '../../../assets/images/IMG_2227.PNG' },
    { img: '../../../assets/images/IMG_2228.PNG' },
    { img: '../../../assets/images/IMG_2229.PNG' },
    { img: '../../../assets/images/IMG_2230.PNG' }
  ];

  slideConfig = {
    'slidesToShow': 3,
    'slidesToScroll': 3,
    'infinite': true
  };
  constructor() { }

  ngOnInit() {
  }

}
