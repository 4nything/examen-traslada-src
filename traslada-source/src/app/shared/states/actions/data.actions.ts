import { createAction, props } from "@ngrx/store";
import { Noticia } from "../../interfaces/noticia";

//Actions para llamada a la API
export const getData = createAction('[API Noticias] Get Data');
export const getDataSuccess = createAction('[API Noticias] Get Data Success', props<{data: Noticia[]}>());
export const getDataError = createAction('[API Noticias] Get Data Error', props<{error: any}>());
