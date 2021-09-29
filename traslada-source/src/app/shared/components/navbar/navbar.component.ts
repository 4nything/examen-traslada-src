import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LikesService } from '../../services/likes.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() panelEvent = new EventEmitter<boolean>();
  likesTotales: number = 0;
  constructor(private likesSerivce: LikesService) {
    this.likesSerivce.sendNoticias.subscribe(res => {
      this.likesTotales += res;
    })
  }

  ngOnInit(): void {
  }

  setPanel() {
    this.panelEvent.emit();
  }
}
