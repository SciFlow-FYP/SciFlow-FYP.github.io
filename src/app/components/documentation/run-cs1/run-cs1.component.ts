import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-run-cs1',
  templateUrl: './run-cs1.component.html',
  styleUrls: ['./run-cs1.component.scss']
})
export class RunCS1Component implements OnInit {

  constructor() { }

  goTo(location: string): void {
    window.location.hash = '';
    window.location.hash = location;
  }

  ngOnInit() {
  }

}
