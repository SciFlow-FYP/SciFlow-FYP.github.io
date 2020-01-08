import { Component, ViewChild , ViewChildren , QueryList , AfterViewInit } from '@angular/core';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-tabs-setup',
  templateUrl: './tabs-setup.component.html',
  styleUrls: ['./tabs-setup.component.scss']
})
export class TabsSetupComponent implements AfterViewInit {

  disableSwitching: boolean;
  @ViewChild('tabset') tabset: TabsetComponent;

  ngAfterViewInit(){
    console.log(this.tabset.tabs);
  }

  goto(id){
    this.tabset.tabs[id].active = true;
  }

}
