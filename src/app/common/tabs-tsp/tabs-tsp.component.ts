import { Component, ViewChild , ViewChildren , QueryList , AfterViewInit } from '@angular/core';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-tabs-tsp',
  templateUrl: './tabs-tsp.component.html',
  styleUrls: ['./tabs-tsp.component.scss']
})
export class TabsTspComponent implements AfterViewInit {

  disableSwitching: boolean;
  @ViewChild('tabset') tabset: TabsetComponent;

  ngAfterViewInit(){
    console.log(this.tabset.tabs);
  }

  goto(id){
    this.tabset.tabs[id].active = true;
  }

}
