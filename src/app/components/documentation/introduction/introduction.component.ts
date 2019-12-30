import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  constructor() { }

  goTo(location: string): void {
    window.location.hash = '';
    window.location.hash = location;
  }


  ngOnInit() {
  }

}
