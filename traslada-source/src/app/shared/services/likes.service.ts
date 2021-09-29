import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LikesService{
    //EventEmitter para sumar 1 like al navbar
    @Output() sendNoticias = new EventEmitter<number>();
}