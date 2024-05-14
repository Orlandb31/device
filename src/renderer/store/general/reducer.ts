import { GeneralActions } from "./action";
import {
    GeneralState,
    BeginActionType, EndActionType, PaginationActionType, NextKeyActionType
} from "./types";
import moment from 'moment-timezone'
import { GroupPeriod } from "@fluyappgo/commons/build/interfaces/analytics";

let today = new Date()

const initialState: GeneralState = {
    isSidebarShow: true,
    isAsidebarShow: false,
    begin: moment(today).format('YYYY-MM-DD'),
    end: moment(today).add(5, 'days').format('YYYY-MM-DD'),
    nextKey: 1,
    pagination: 20,
    year: 2022,
    month: 1,
    week: 1,
    day: 1,
    hour: 1,
    period: GroupPeriod.year,
    dataQuery: []
}

export function generalReducer(
    state = initialState,
    action: BeginActionType & EndActionType & PaginationActionType & NextKeyActionType

): GeneralState {
    switch (action.type) {


        case GeneralActions.Type.UPDATE_DATA_QUERY: {

            const data = action.payload;

            return {
                ...state,
                dataQuery: data
            }
        }



        case GeneralActions.Type.BEGIN_DATE:

            const { begin } = action.payload;


            return {
                ...state,
                begin: begin
            }

        case GeneralActions.Type.END_DATE:

            const { end } = action.payload;

            return {
                ...state,
                end: end
            }

        case GeneralActions.Type.NEXTKEY:

            const { nextKey } = action.payload;

            return {
                ...state,
                nextKey: nextKey
            }

        case GeneralActions.Type.PERIOD: {

            const { begin } = action.payload;

            return {
                ...state,
                period: begin as any
            }

        }

        case GeneralActions.Type.YEAR: {

            const { nextKey } = action.payload;

            return {
                ...state,
                year: nextKey
            }

        }


        case GeneralActions.Type.MONTH: {

            const { nextKey } = action.payload;

            return {
                ...state,
                month: nextKey
            }

        }

        case GeneralActions.Type.WEEK: {

            const { nextKey } = action.payload;

            return {
                ...state,
                week: nextKey
            }

        }

        case GeneralActions.Type.DAY: {

            const { nextKey } = action.payload;

            return {
                ...state,
                day: nextKey
            }

        }

        case GeneralActions.Type.HOUR: {

            const { nextKey } = action.payload;

            return {
                ...state,
                hour: nextKey
            }

        }

        case GeneralActions.Type.PAGINATION:

            const { pagination } = action.payload;

            return {
                ...state,
                pagination: pagination
            }

        default:
            return state
    }
}