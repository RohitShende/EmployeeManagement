import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public imageSources: string[] = [
    '../assets/img1.jpg',
    '../assets/img2.jpg',
    '../assets/img3.jpg',
    '../assets/img4.jpg'
  ];

  constructor() { }

  
  ngOnInit() {
    
  }

}
