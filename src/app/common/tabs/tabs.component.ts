import { Component, ViewChild , ViewChildren , QueryList , AfterViewInit } from '@angular/core';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';
@Component({
  selector: 'my-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: [ './tabs.component.scss' ]
})
export class TabsComponent implements AfterViewInit  {
  disableSwitching: boolean;
  @ViewChild('tabset') tabset: TabsetComponent;

  ngAfterViewInit(){
    console.log(this.tabset.tabs);
  }

  goto(id){
    this.tabset.tabs[id].active = true;
  }

}
