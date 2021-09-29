import { Action, createReducer, on } from "@ngrx/store";
import { Noticia } from "../../interfaces/noticia";
import * as actions from "../actions/data.actions";

export const data: Noticia[] = [];
const _dataReducer = createReducer(
    [...data],
    on(actions.getData, state => [...state]),
    on(actions.getDataSuccess, (state, data) => ([...data.data])),
    on(actions.getDataError, (state) => (state))
)

export function dataReducer(state: any, action: any){
    return _dataReducer(state, action);
}