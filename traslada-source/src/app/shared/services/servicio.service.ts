import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Noticia } from "../interfaces/noticia";

@Injectable({
    providedIn: 'root'
})
export class ServicioService {
    private url = environment.apiURL;
    
    constructor(private httpClient: HttpClient){}

    /**
     * 
     * @returns {Observable<Noticia[]>} Observable<Noticia[]>
     */
    getNoticias(): Observable<Noticia[]>{
        return this.httpClient.get<Noticia[]>(this.url);
    }
}