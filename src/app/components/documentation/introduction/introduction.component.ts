import { Component,ViewChild, OnInit } from '@angular/core';

import { TabsComponent } from '../../../common/tabs/tabs.component';

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
