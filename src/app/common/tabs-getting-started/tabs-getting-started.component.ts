import { Component, ViewChild , ViewChildren , QueryList , AfterViewInit } from '@angular/core';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-tabs-getting-started',
  templateUrl: './tabs-getting-started.component.html',
  styleUrls: ['./tabs-getting-started.component.scss']
})
export class TabsGettingStartedComponent implements AfterViewInit {

  disableSwitching: boolean;
  @ViewChild('tabset') tabset: TabsetComponent;

  ngAfterViewInit(){
    console.log(this.tabset.tabs);
  }

  goto(id){
    this.tabset.tabs[id].active = true;
  }

}
