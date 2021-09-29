import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/shared/interfaces/noticia';
import { LikesService } from 'src/app/shared/services/likes.service';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.scss']
})
export class NoticiasListComponent implements OnInit {
  noticias!: Observable<Noticia[]>;
  constructor(
    private store: Store<{data: Noticia[]}>,
    private likesService: LikesService
    ) { }

  ngOnInit(): void {
    this.noticias = this.store.pipe(select('data'));
  }

  addLike(noticia: Noticia){
    noticia.likes += 1;
    this.likesService.sendNoticias.emit(1);
  }
}
