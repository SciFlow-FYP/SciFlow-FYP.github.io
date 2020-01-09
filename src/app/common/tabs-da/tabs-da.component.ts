import { Component, ViewChild , ViewChildren , QueryList , AfterViewInit } from '@angular/core';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-tabs-da',
  templateUrl: './tabs-da.component.html',
  styleUrls: ['./tabs-da.component.scss']
})
export class TabsDaComponent implements AfterViewInit {

  disableSwitching: boolean;
  @ViewChild('tabset') tabset: TabsetComponent;

  ngAfterViewInit(){
    console.log(this.tabset.tabs);
  }

  goto(id){
    this.tabset.tabs[id].active = true;
  }

}
