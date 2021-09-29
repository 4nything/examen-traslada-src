import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ServicioService } from "../../services/servicio.service";
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as acts from '../actions/data.actions';
import { of } from "rxjs";

@Injectable()
export class DataEffect {
    constructor(
        private actions: Actions,
        private service: ServicioService
    ) { }

    loadNoticias$ = createEffect(() => {
        return this.actions.pipe(
            ofType('[API Noticias] Get Data'),
            mergeMap(() => {
                return this.service.getNoticias().pipe(
                    map(data => acts.getDataSuccess({ data })),
                    catchError(error => of(acts.getDataError(error)))
                )
            }))
    })
}