import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getData } from '../../states/actions/data.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  openedPanel: boolean = true;
  constructor(private store: Store<any>) {
    if (window.screen.width < 960) this.openedPanel = false;
   }

  ngOnInit(): void {
  }

  setPanelOpened(){
    this.openedPanel = !this.openedPanel;
  }

  getStatusNav(){
    return this.openedPanel;
  }

  getNoticias(){
    this.store.dispatch(getData());
  }
}
