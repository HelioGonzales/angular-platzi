import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  images: string[] = [
    "https://placeimg.com/1365/500/nature",
    "https://placeimg.com/1365/500/tech",
    "https://placeimg.com/1365/500/people"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
