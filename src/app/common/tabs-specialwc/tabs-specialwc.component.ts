import { Component, ViewChild , ViewChildren , QueryList , AfterViewInit } from '@angular/core';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-tabs-specialwc',
  templateUrl: './tabs-specialwc.component.html',
  styleUrls: ['./tabs-specialwc.component.scss']
})
export class TabsSpecialwcComponent implements AfterViewInit {

  disableSwitching: boolean;
  @ViewChild('tabset') tabset: TabsetComponent;

  ngAfterViewInit(){
    console.log(this.tabset.tabs);
  }

  goto(id){
    this.tabset.tabs[id].active = true;
  }

}
