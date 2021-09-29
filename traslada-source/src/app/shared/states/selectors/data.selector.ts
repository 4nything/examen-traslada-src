import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Noticia } from "../../interfaces/noticia";

export const getDataState = createFeatureSelector<Noticia[]>('data');

export const getData = createSelector(
    (state: Noticia[]) => state,
    getDataState
);