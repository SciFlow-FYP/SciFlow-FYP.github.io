import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-run-cs2',
  templateUrl: './run-cs2.component.html',
  styleUrls: ['./run-cs2.component.scss']
})
export class RunCS2Component implements OnInit {

  goTo(location: string): void {
    window.location.hash = '';
    window.location.hash = location;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
